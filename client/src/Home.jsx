import useWebSocket from "react-use-websocket"
import React, { useEffect, useRef } from "react"
import throttle from "lodash.throttle"


const renderuserlist = (users) => {
    return (
     <ul>
        {
            Object.keys(users).map((uuid) => {
            const user = users[uuid]
            return <li key={uuid}>{user.username}</li>
           })
        }
     </ul> 
    )
}

export function Home({ username }) {
  const WS_URL = `ws://127.0.0.1:8000`

  const { sendJsonMessage ,lastJsonMessage} = useWebSocket(WS_URL, {
    queryParams: { username },
    share: true,
  })

  const THROTTLE = 50
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

  useEffect(() => {
    sendJsonMessage({
      x: 0,
      y: 0,
    })

    window.addEventListener("mousemove", (e) => {
      sendJsonMessageThrottled.current({
        x: e.clientX,
        y: e.clientY,
      })
    })
  }, [])

    if (lastJsonMessage) {
        return <>
            {renderuserlist(lastJsonMessage)}
        </>
    }
  return <h1>Hello,{username}</h1>
}