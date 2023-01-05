import React from 'react';
import tweetEmbed from 'react-tweet-embed';

// redux
import { connect } from 'react-redux';


const Tweets = props=> {
  return (
    <div>
        <tweetEmbed id={props.tweet_url.split("/")[5]}/>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return{

    }
}

const mapDispatchToProps =(dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweets)