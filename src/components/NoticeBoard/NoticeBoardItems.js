import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import './NoticeBoard.css';

function NoticeBoardItems(props) {
   const { data: joke, loading, err } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );
  
  if (loading) return <h1> LOADING...</h1>;
  
  if (err) console.log(err);
   
  return (
    <>
    <li className='feed__item'>
      <Link className='feed__item__link' to={props.path}>
        <figure className='feed__item__pic-wrap' data-category={props.label}>
          <div
            className='cards__item__img'
            alt='Course post'
            src={props.src}
          />
        </figure>
        <div className='feed__item__info'>
        <h1> {joke?.setup} : {joke?.delivery}</h1>        
          </div>
      </Link>
    </li>
  </>
  )
}

export default NoticeBoardItems