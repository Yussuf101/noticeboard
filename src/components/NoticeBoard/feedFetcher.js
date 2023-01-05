import { useEffect, useState } from "react";
import axios from 'axios';
    
// const API_KEY = "78gbgzmpzhe8dt";

export default function feedFetcher() {
  const [posts, setPosts] = useState(Null);

  useEffect(() => {
    axios.get("https://twitter.com/wearecodenation/status/1609498899525369856")
        .then(res =>{
          setPosts(res.Posts);
          console.log(res);
        })
        .catch(err=>{
          console.log(err)
        })
      });
   
   
   
    // script.async = true;
    // script.src = "https://www.linkedin.com/developers/apps/verification/4b53e92b-4017-41e6-a8ec-56cc24c27c8a";
    // script.innerHTML = `
    //  api_key: ${API_KEY},
    //  onLoad: "", // Use eventListiner instead of this
    //  authorize: true,
    // `;
    // document.head.appendChild(script);
    // script.addEventListener("load", () => {
    //   // added your logic here.
    //   setScriptLoaded(true);
    // });


  return (
    <div className="App">
      <h1>Code Nation NoticeBoard</h1>
      <ul>
        {posts.map(post=>(
          <li key = {post.id}>
            {post.title}
            </li>
        ))}
      </ul>
    </div>
  );
}
