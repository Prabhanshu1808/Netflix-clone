import "./Home.css"
import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Feature from "../../components/feature/Feature";
import List from "../../components/list/List";
import { useState ,  useEffect } from "react";
import axios from "axios"



 const Home = ({type}) => {
  const [lists , setLists] = useState([]);
  const [genre , setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async ()=>{
      try{
       const res = await axios.get(`lists${ type ? "?type" + type : ""} ${genre ? "&genre"+  genre : ""}` ,{
        headers:{
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzYzhlNGQ0ZDNhOGRlNjNjY2M2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTM1MTU2MywiZXhwIjoxNjU1NzgzNTYzfQ.KQXZGUjGtxurCBoeyL3FR8R6aIP49PjguOXF8iG7law"
        }
       });
       setLists(res.data)
      }catch(err){
        console.log(err);
      };
    };
    getRandomLists();
  }, [type, genre])
  return (
    <div className='home'>
        <Navbar />
        <Feature type={type}/>
        {lists.map((list)=> (
          <List list={list} />
        ))}
    </div>
  )
}

export default Home;

