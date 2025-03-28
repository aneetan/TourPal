import React from 'react'
import Notifications from './header/Notifications';

const AdminNotifications = () => {
    const notification = [
        {
            id: 1,
            text: "New Guide Registration:",
            img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
            time: "a few moments ago",
            user: "Anita Neupane",
            content: "has applied to become a tour guide. Review and approve their profile now!"
        },
        {
            id: 2,
            text: "Location Added:",
            img:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
            time: "a day ago",
            user: "Pashupatinath",
            content: "a new tourist location has been successfully added to the system"
        },
        {
            id: 3,
            text: "Booking Alert:",
            img:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
            time: "2 days ago",
            user: "Shyam",
            content: "has applied to become a tour guide. Review and approve their profile now!"
        },
    ];
  return (
    <>
      <Notifications notifications={notification}/>
    </>
  )
}

export default AdminNotifications
