import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
import color from './assets/colorr.avif'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Sidebar() {
    const user = useSelector(selectUser);

    const RecentItems= (props) => {
        return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{props.topic}</p>
        </div>
        );
    };
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={color} alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">78</p>

            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">34</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
       
        {RecentItems({ topic: 'reactjs' })}
        {RecentItems({ topic: 'programming"' })}
        {RecentItems({ topic: 'softwareengineering' })}
        {RecentItems({ topic: 'design' })}
        {RecentItems({ topic: 'developer' })}
          
        </div>
        

    </div>
  )
}

export default Sidebar