import React from 'react'
import Notifications from '../../admin/header/Notifications';

const GuideNotifications = () => {
    const notification = [
        {
            id: 1,
            text: "New Booking Request:",
            img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
            time: "a few moments ago",
            user: "Anita Neupane",
            content: "requested a new tour booking request. Check your schedule now!"
        },
        {
            id: 2,
            text: "Tour Reminder: ",
            img:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
            time: "a day ago",
            user: "Reminder:",
            content: "You have a scheduled tour with tomorrow. Get ready for an amazing journey!"
        },
        {
            id: 3,
            text: "Booking Alert:",
            img:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
            time: "2 days ago",
            user: "Hari",
            content: "requested a new tour booking request. Review and approve the booking now!"
        },
    ];
  return (
    <>
      <Notifications notifications={notification}/>
    </>
  )
}

export default GuideNotifications
