import { useFirestore } from "reactfire"
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore"

export const useSubscribers = () => {
  const firestore = useFirestore()
  const subscriberCollection = collection(firestore, `subscribers`)

  const subscribeUser = async (token: string) => {
    const subscriberId = localStorage.getItem("subscriberId")
    if (subscriberId) {
      await updateDoc(doc(subscriberCollection, subscriberId), {
        token,
        subscribed: true,
      })
    } else {
      const ref = await addDoc(subscriberCollection, {
        token,
        subscribed: true,
      })
      localStorage.setItem("subscriberId", ref.id)
    }
  }

  const unsubscribeUser = async () => {
    const subscriberId = localStorage.getItem("subscriberId")
    if (subscriberId) {
      await updateDoc(doc(subscriberCollection, subscriberId), {
        subscribed: false,
      })
    }
  }

  const isSubscribed = async () => {
    const subscriberId = localStorage.getItem("subscriberId")
    if (subscriberId) {
      const docRef = doc(subscriberCollection, subscriberId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        return data.subscribed
      }
    }
  }

  return {
    subscribeUser,
    unsubscribeUser,
    isSubscribed,
  }
}
