import React, { FC } from "react"
import { FirebaseAppProvider } from "reactfire"
import { Comments } from "./Comments"

const firebaseConfig = {
  apiKey: "AIzaSyAx2XvriVPrZ_H1kBk9JBGILTrrv7UoNz4",
  authDomain: "roshmade-blog.firebaseapp.com",
  projectId: "roshmade-blog",
  storageBucket: "roshmade-blog.appspot.com",
  messagingSenderId: "431525069130",
  appId: "1:431525069130:web:00aa1ba10a3419ced4c1b3",
  measurementId: "G-DRN4BB93PS",
}

export const CommentsWrapper: FC<{ blogUrl: string }> = ({ blogUrl }) => {
  if (typeof window === "undefined") return <p>Loading...</p>
  const blogKey = blogUrl.split("/").join("")
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Comments blogUrl={blogKey} />
    </FirebaseAppProvider>
  )
}
