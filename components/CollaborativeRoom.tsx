import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import Loader from './Loader'
import Header from './Header'
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id='my-room'>
        <ClientSideSuspense fallback={<Loader/>}>
<div className="collaborative-room">
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'> This is Title</p>
                </div>
            <SignedOut>
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
            </Header>
            <Editor/>
</div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom  