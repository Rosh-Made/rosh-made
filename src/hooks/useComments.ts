import { collection, query, orderBy, addDoc } from "firebase/firestore"
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

  const postComments = (comment: Comment) => {
    addDoc(commentsCollection, comment)
  }

  return {
    getComments,
    postComments,
  }
}
