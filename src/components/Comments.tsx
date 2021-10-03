import React, { FC } from "react"
import { getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import { AuthWrapper } from "./AuthWrapper"
import { SocialComments } from "./SocialComments"

type SocialCommentsProps = {
  blogUrl: string
}

export const Comments: FC<SocialCommentsProps> = ({ blogUrl }) => {
  const firestoreInstance = getFirestore(useFirebaseApp())
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthWrapper>
        <SocialComments blogUrl={blogUrl} />
      </AuthWrapper>
    </FirestoreProvider>
  )
}
