import {React} from 'react';
// import { json} from 'react-router-dom';
// import './NoticeBoard.css';
import NoticeBoardItems from './NoticeBoardItems';

function NoticeBoardCards() {
  // const{data, setdata}= usestate([]);
  // const linkedinFeed = () => {
  //   fetch("https://www.linkedin.com/developers/apps/verification/4b53e92b-4017-41e6-a8ec-56cc24c27c8a")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setdata(json);
  //     });
  // };
  return (   
     <div className='feed'>
      <h1>What is new with Code Nation</h1>
      <div className='feed__container'>
      <div className='feed__wrapper'>
        <ul className='feed__items'>
          <NoticeBoardItems/>
          <NoticeBoardItems/>
        </ul>
        <ul className='feed__items'>
          <NoticeBoardItems/>
          <NoticeBoardItems/>
        </ul>
      </div>
    </div>
  </div>
  );
  }
  export default NoticeBoardCards 