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
    await addDoc(commentsCollection, comment)
  }

  const deleteComment = async (commentId: string) => {
    await deleteDoc(doc(commentsCollection, commentId))
  }

  return {
    getComments,
    postComments,
    deleteComment,
  }
}
