import React, { FC } from "react"
import { getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import { AuthWrapper } from "./AuthWrapper"
import { SocialComments } from "./SocialComments"

const firebaseConfig = {
  apiKey: "AIzaSyAx2XvriVPrZ_H1kBk9JBGILTrrv7UoNz4",
  authDomain: "roshmade-blog.firebaseapp.com",
  projectId: "roshmade-blog",
  storageBucket: "roshmade-blog.appspot.com",
  messagingSenderId: "431525069130",
  appId: "1:431525069130:web:00aa1ba10a3419ced4c1b3",
  measurementId: "G-DRN4BB93PS",
}

type SocialCommentsProps = {
  blogUrl: string
}

export const Comments: FC<SocialCommentsProps> = ({ blogUrl }) => {
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <AuthWrapper>
        <SocialComments blogUrl={blogUrl} />
      </AuthWrapper>
    </FirestoreProvider>
  )
}
