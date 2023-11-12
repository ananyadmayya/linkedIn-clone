import React from 'react'
import "./HeaderOption.css";
// import Avatar from 'react-avatar';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function HeaderOption({onclick,Icon,avatar,title}) {
  
  const user = useSelector(selectUser);

  return (

    <div onClick={onclick} className="headerOption">
        {Icon && <Icon ClassName='headerOption__icon' />}
        {avatar && (
            // <Avatar className='headerOption__title'size="25" round={true} src={user?.photoUrl}>{user?.email[0]}</Avatar>
            <Avatar className='headerOption__title'>{user?.email[0]}</Avatar> 
        )}
        <h3 className="headerOption__title">{title}</h3>

    </div>
  );
}

export default HeaderOption;