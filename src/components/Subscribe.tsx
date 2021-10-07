import { Button } from "gatsby-theme-material-ui"
import React, { FC, useEffect, useState } from "react"
import NotificationsIcon from "@material-ui/icons/Notifications"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import styled from "styled-components"
import {
  getMessaging,
  getToken,
  deleteToken,
  isSupported,
} from "firebase/messaging"
import { CircularProgress } from "@material-ui/core"

const SubscribeButton = styled(Button)`
  text-transform: none;
  color: #4e4e4e;

  &.active {
    background-color: #f1f0f0;
  }

  @media (max-width: 382px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

const MESSAGING_VAPID_KEY =
  "BMJqpaMBdJNkg_uksmHQ7xKh_Gq16iWKzXbOfu-qDh0WcmaucipCCyS9Xj9_ZoCvxwqred7FowgD7fNhng4V5AE"

const analytics = (data: any) => {
  // @ts-ignore
  const gtag = window.gtag
  typeof window !== "undefined" && gtag && gtag("event", "click", { ...data })
}

export const Subscribe: FC = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [supported, setSupported] = useState<boolean>(false)

  useEffect(() => {
    if (
      localStorage.getItem("subscribed") &&
      localStorage.getItem("subscribed") === "true"
    ) {
      setSubscribed(true)
    }
    isSupported().then(result => {
      setSupported(result)
    })
  }, [])

  if (!supported) {
    return <></>
  }

  const messaging = getMessaging()
  const subscribe = () => {
    setLoading(true)
    getToken(messaging, {
      vapidKey: MESSAGING_VAPID_KEY,
    })
      .then(() => {
        localStorage.setItem("subscribed", "true")
        setSubscribed(true)
        setLoading(false)
        analytics({
          category: "SUBSCRIPTION",
          action: "Subscribe",
          label: "Subscribed",
          value: 1,
        })
      })
      .catch(error => {
        console.error(error)
        localStorage.setItem("subscribed", "false")
        setSubscribed(false)
        setLoading(false)
      })
  }

  const unsubscribe = () => {
    setLoading(true)
    deleteToken(messaging)
      .then(() => {
        localStorage.setItem("subscribed", "false")
        setSubscribed(false)
        setLoading(false)
        analytics({
          category: "SUBSCRIPTION",
          action: "Unsubscribe",
          label: "Unsubscribed",
          value: 0,
        })
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
        alert(
          "Error occurred while unsubscribing. Please email to maryann.roshani@gmail.com."
        )
      })
  }

  const getIcon = () => {
    if (loading) {
      return <CircularProgress size={24} />
    } else {
      if (subscribed) {
        return <NotificationsActiveIcon />
      } else {
        return <NotificationsIcon />
      }
    }
  }

  return (
    <SubscribeButton
      startIcon={getIcon()}
      variant="outlined"
      className={subscribed ? "active" : undefined}
      onClick={subscribed ? unsubscribe : subscribe}
    >
      {subscribed ? "Subscribed" : "Subscribe"}
    </SubscribeButton>
  )
}
