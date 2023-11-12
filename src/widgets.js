import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>



            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>


       </div>
       {newsArticle("Happy Deepawali everyone",'cracker free dewali')}
       {newsArticle("RIP Chandler Bing",'won the audience by sarcasm is no more')}
       {newsArticle("Is Redux too good?", "Code- 123 readers")}
       {newsArticle("Bitcoin Breaks $34k","Crypto - 8000 readers")}
       {newsArticle("PAPA React is to good","Top news - 6503")}
    </div>

  );
}

export default widgets