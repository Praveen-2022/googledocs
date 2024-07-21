import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut, SignUpButton,SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
    return (
        <div>
            {/* <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'> This is Title</p>
                </div>
            <SignedOut>
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
            </Header> */}
            <Editor/>
        </div>
    )
}

export default Document