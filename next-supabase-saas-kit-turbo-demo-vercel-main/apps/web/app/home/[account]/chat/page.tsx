import { use } from 'react';

import { getSupabaseServerClient } from '@kit/supabase/server-client';
import { createTeamAccountsApi } from '@kit/team-accounts/api';

import { withI18n } from '~/lib/i18n/with-i18n';

import { ChatContainer } from './_components/chat-container';

interface Props {
  params: Promise<{
    account: string;
  }>;
}

function ChatPage(props: Props) {
  const teamAccountsApi = createTeamAccountsApi(getSupabaseServerClient());

  const params = use(props.params);
  const account = use(teamAccountsApi.getTeamAccount(params.account));

  return (
    <ChatContainer referenceId={''} accountId={account.id} messages={[]} />
  );
}

export default withI18n(ChatPage);
