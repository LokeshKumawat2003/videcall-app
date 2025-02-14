import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () => {
    const {roomId}=useParams()

    const Mymeeting=async(element)=>{
        const appID=1856216601
        const serverSecret = "b6721d38757676fdb81b5b559d46e926";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret, roomId, Date.now().toString(),"Lokesh Room")
        const zc=ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
        container:element,
        sharedLinks: [
            {
              name: 'Copy Link',
              url:`http://localhost:3000/room/${roomId}`
            
              
            },
          ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true
      })
    }
  return (
    <div>
     <div ref={Mymeeting}/>
    </div>
  )
}

export default RoomPage
