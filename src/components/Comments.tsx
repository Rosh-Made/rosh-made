import React, { FC } from "react"
import { getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import { AuthWrapper } from "./AuthWrapper"
import { SocialComments } from "./SocialComments"
import { Subscribe } from "./Subscribe"
import styled from "styled-components"

const SubscribeBlock = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

type SocialCommentsProps = {
  blogUrl: string
}

export const Comments: FC<SocialCommentsProps> = ({ blogUrl }) => {
  if (typeof window === "undefined") return <p>Loading...</p>
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <AuthWrapper>
        <SubscribeBlock>
          <Subscribe />
        </SubscribeBlock>
        <SocialComments blogUrl={blogUrl} />
      </AuthWrapper>
    </FirestoreProvider>
  )
}
