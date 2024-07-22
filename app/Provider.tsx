"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,ClientSideSuspense} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from '@/lib/actions/user.actions';
import { useUser } from "@clerk/nextjs";

const Provider = ({children}:{children:ReactNode}) => {
  const { user: clerkUser } = useUser();
  return (
    <LiveblocksProvider
    authEndpoint="/api/liveblocks-auth"
    resolveUsers={async ({ userIds }) => {
      const users = await getClerkUsers({ userIds});

      return users;
    }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider