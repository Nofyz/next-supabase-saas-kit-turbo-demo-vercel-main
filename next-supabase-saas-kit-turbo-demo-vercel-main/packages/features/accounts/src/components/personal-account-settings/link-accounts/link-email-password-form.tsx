'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { useLinkIdentityWithEmailPassword } from '@kit/supabase/hooks/use-link-identity-with-email-password';
import { useUser } from '@kit/supabase/hooks/use-user';
import { Button } from '@kit/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@kit/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { Input } from '@kit/ui/input';
import { toast } from '@kit/ui/sonner';
import { Spinner } from '@kit/ui/spinner';
import { Trans } from '@kit/ui/trans';

import { LinkEmailPasswordSchema } from '../../../schema/link-email-password.schema';

export function LinkEmailPasswordForm(props: { callbackPath: string }) {
  const { data: user } = useUser();
  const linkMutation = useLinkIdentityWithEmailPassword();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LinkEmailPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  if (!user) {
    return null;
  }

  const hasEmail =
    user.identities?.some((i) => i.provider === 'email') ||
    user.user_metadata.hasPassword === true;

  // if the user already has an email identity or is linked with an email identity,
  // we don't show the link email/password form
  if (hasEmail) {
    return null;
  }

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    repeatPassword: string;
  }) => {
    const redirectTo = new URL(
      props.callbackPath,
      window.location.origin,
    ).toString();

    const promise = linkMutation.mutateAsync({ email, password, redirectTo });

    await toast
      .promise(promise, {
        loading: <Trans i18nKey={'account:linkingAccount'} />,
        success: () => {
          setIsOpen(false);
          form.reset();
          return <Trans i18nKey={'account:accountLinked'} />;
        },
        error: <Trans i18nKey={'account:linkAccountError'} />,
      })
      .unwrap();

    router.refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="hover:bg-muted/30 flex items-center justify-between rounded-lg border p-3 transition-colors"
          data-test="link-email-password-trigger"
        >
          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-full">
              <Mail className="h-4 w-4" />
            </div>

            <span className="text-sm font-medium">
              <Trans i18nKey={'account:linkEmailPassword'} />
            </span>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <Trans i18nKey={'account:linkEmailPassword'} />
          </DialogTitle>
          <DialogDescription>
            <Trans i18nKey={'account:linkEmailPasswordDescription'} />
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            data-test="link-password-form"
          >
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans i18nKey={'account:newEmail'} />
                  </FormLabel>

                  <FormControl>
                    <Input type="email" required {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans i18nKey={'account:newPassword'} />
                  </FormLabel>

                  <FormControl>
                    <Input type="password" required {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans i18nKey={'account:repeatPassword'} />
                  </FormLabel>

                  <FormControl>
                    <Input type="password" required {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={linkMutation.isPending}
              >
                <Trans i18nKey={'common:cancel'} />
              </Button>

              <Button
                type="submit"
                disabled={linkMutation.isPending}
                data-test="link-password-submit"
              >
                {linkMutation.isPending ? (
                  <>
                    <Spinner className="mr-2 h-3 w-3" />
                    <Trans i18nKey={'account:linkingAccount'} />
                  </>
                ) : (
                  <Trans i18nKey={'account:linkEmailPasswordButton'} />
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
