import { getAuth } from "firebase/auth"
import React, { FC } from "react"
import { AuthProvider, useFirebaseApp } from "reactfire"

export const AuthWrapper: FC = ({ children }) => {
  const firebaseApp = useFirebaseApp()
  const auth = getAuth(firebaseApp)
  return <AuthProvider sdk={auth}>{children}</AuthProvider>
}
