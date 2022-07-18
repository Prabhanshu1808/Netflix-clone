import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./feature.css"

export default function Feature({type}) {

const [content , setContent] = useState({});

useEffect(()=>{
   const getRandomContent = async ()=>{
    try {
        const res = await axios.get(`/movies/random?type=${type}` + type ,{
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzYzhlNGQ0ZDNhOGRlNjNjY2M2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTM1MTU2MywiZXhwIjoxNjU1NzgzNTYzfQ.KQXZGUjGtxurCBoeyL3FR8R6aIP49PjguOXF8iG7law"
              }
        });
        setContent(res.data);
    } catch (err) {
        console.log(err);
    }
   };
   getRandomContent();
},[type]);

console.log(content);

  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"} </span>
                <select name="genre" id="genre">
                <option>Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Adventure">Adventure</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical">Historical</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Western">Western</option>
                <option value="Animation">Animation</option>
                <option value="Documentry">Documentry</option>
                </select>
            </div>
        )}
       <img src="https://wallpaperaccess.com/full/3521073.jpg" alt="" />

     <div className="info">
         <h1>GALAXY</h1>
     
     
     <span className="desc">
         movies
     </span>
     <div className="buttons">
         <button className="play">
             <PlayArrow/>
             <span>Play</span>
         </button>
         <button className="more">
             <InfoOutlined/>
             <span>Info</span>
         </button>
     </div>
     </div>

    </div>

  );
}

