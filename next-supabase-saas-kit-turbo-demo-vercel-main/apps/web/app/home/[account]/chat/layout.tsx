import Link from 'next/link';

import { Pencil } from 'lucide-react';

import { getSupabaseServerClient } from '@kit/supabase/server-client';
import { Button } from '@kit/ui/button';
import { Sidebar, SidebarContent } from '@kit/ui/sidebar';

import { SidebarItems } from '~/home/[account]/chat/_components/sidebar-items';
import { createChatMessagesService } from '~/home/[account]/chat/_lib/server/chat-messages.service';
import { withI18n } from '~/lib/i18n/with-i18n';

async function ChatLayout(
  props: React.PropsWithChildren<{
    params: Promise<{
      account: string;
    }>;
  }>,
) {
  const client = getSupabaseServerClient();
  const service = createChatMessagesService(client);

  const params = await props.params;
  const chats = await service.getChats(params.account);

  const href = `/home/${params.account}/chat`;

  return (
    <div className={'flex h-screen overflow-y-hidden'}>
      <Sidebar className={'h-full space-y-2 border-r py-2 shadow-none'}>
        <SidebarContent className={'py-1'}>
          <Button
            asChild
            size={'sm'}
            className={'group relative flex justify-start'}
          >
            <Link href={href}>
              <Pencil
                className={'absolute right-2 hidden h-3 group-hover:block'}
              />

              <span>New Chat</span>
            </Link>
          </Button>
        </SidebarContent>

        <SidebarContent>
          <SidebarItems href={href} chats={chats} />
        </SidebarContent>
      </Sidebar>

      {props.children}
    </div>
  );
}

export default withI18n(ChatLayout);
