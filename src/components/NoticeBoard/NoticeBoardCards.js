import {React} from 'react';
import { json} from 'react-router-dom';
import './NoticeBoard.css';
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
     <div className='cards'>
      <h1>What is new with Code Nation</h1>
      <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <NoticeBoardItems 
            src="images/img-3.jpg"
            text= ""
            label='Codenation-linkedin-post'
          />
          <NoticeBoardItems 
            src='images/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
          />
        </ul>
        <ul className='cards__items'>
          <NoticeBoardItems 
            src='images/img-3.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
          />
          <NoticeBoardItems 
            src='images/img-8.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
          />
        </ul>
      </div>
    </div>
  </div>
  );
  }
  export default NoticeBoardCards 