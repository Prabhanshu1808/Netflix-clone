import Chart from "../../components/chart/Chart"
import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import "./home.css"
import { UserData } from "../../dummyData"
import WidthSm from "../../components/WidthSmall/WidthSm"
import WidthLg from "../../components/WidthLarge/WidthLg"
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios'

export default function Home() {

  const MONTHS = useMemo(()=> [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )

  const [userStats , setUserStats] = useState([]);

  useEffect(()=>{
     const getStats = async ()=>{
      try {
      const res = await axios.get(`/users/stats` ,   {
        headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzYzhlNGQ0ZDNhOGRlNjNjY2M2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk4MzExNSwiZXhwIjoxNjU2NDE1MTE1fQ.Q9Q5bJojHTKWwBMCUf9ep1BB4gzmBEHsGp_cuHY5jXg" },
      })
      res.data.map(item=> setUserStats(prev=>[...prev, {name:MONTHS[item._id-1], "New User": item.total}]))
      } catch (err) {
        console.log(err);
      }
     }
     getStats();
  },[MONTHS])
  


  return (
    <div className="home">
      <FeatureInfo/>
      <Chart data={userStats} title="User Analitics" grid dataKey="Active User"/>
      <div className="homeWidget">
        <WidthSm/>
        <WidthLg/>
      </div>
    </div>
  )
}
