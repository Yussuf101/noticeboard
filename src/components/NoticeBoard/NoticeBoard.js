import React from 'react';
import NoticeBoardCards from './NoticeBoardCards';
// import useFetch from './useFetch';

function NoticeBoard() {
//   const { data: joke, loading, err } = useFetch(
//   "https://v2.jokeapi.dev/joke/Any"
// );

// if (loading) return <h1> LOADING...</h1>;

// if (err) console.log(err);

return (
  <div className="App">
    <NoticeBoardCards/>
  </div>
);
}
export default NoticeBoard