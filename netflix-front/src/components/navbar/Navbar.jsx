import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
    const [isScrolled , setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

   
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
           <div className="left">
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""  />
               <Link to="/" className="link"> <span>Homepage</span></Link>
               <Link to="/series" className="link"> <span>Series</span> </Link>
               <Link to="/movies" className="link"><span>Movies</span></Link>
               <span>New and Popular</span>
               <span>My List</span>
           </div>
           <div className="right">
               <Search  className="icons"/>
               <span>KID</span>
               <Notifications className="icons"/>
               <img src={require("../../assets/profile-logo.jpg")} alt="" />
              

               <div className="profile">
                 <ArrowDropDown className="icons"/>
                 <div className="options">
                     <span>Settings</span>
                     <span>Logout</span>
                 </div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Navbar