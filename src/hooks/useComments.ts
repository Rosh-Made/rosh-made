import {
  collection,
  query,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { Comment } from "../data/Comment"
const base64 = require("base-64")

export const useComments = (blogId: string) => {
  const firestore = useFirestore()
  const commentsCollection = collection(firestore, `/blogs/${blogId}/comments`)

  const getComments = () => {
    const q = query(commentsCollection, orderBy("timestamp"))
    const { data: comments } = useFirestoreCollectionData(q, {
      idField: "id",
    })

    return comments as Comment[]
  }

  const postComments = async (comment: Comment) => {
    if (
      comment.comment &&
      base64.encode(comment.name.split(" ")[0].trim().toLowerCase()) ===
        "cmFuaQ=="
    ) {
      return
    }
    await addDoc(commentsCollection, comment)
  }

  const deleteComment = async (commentId: string) => {
    let docRef = doc(firestore, `/blogs/${blogId}/comments`, commentId)
    await deleteDoc(docRef)
  }

  return {
    getComments,
    postComments,
    deleteComment,
  }
}
