import React, { FC } from "react"
import { getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import { AuthWrapper } from "./AuthWrapper"
import { SocialComments } from "./SocialComments"

type SocialCommentsProps = {
  blogUrl: string
}

export const Comments: FC<SocialCommentsProps> = ({ blogUrl }) => {
  if (typeof window === "undefined") return <p>Loading...</p>
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <AuthWrapper>
        <SocialComments blogUrl={blogUrl} />
      </AuthWrapper>
    </FirestoreProvider>
  )
}
