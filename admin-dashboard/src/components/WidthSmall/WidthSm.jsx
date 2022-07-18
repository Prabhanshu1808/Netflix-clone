import { Visibility } from "@material-ui/icons"
import "./widthSm.css"

export default function WidthSm() {
  return (
    <div className="widgetSm">
       <span className="widgetSmTitle">New Join Member</span>
       <ul className="widgetSmList">
           <li className="widgetSmListItem">
               <img src={require("../../assets/user1.jpg")} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                   <span className="widgetSmUsername">Shubham Misra</span>
                   <span className="widgetSmUserTitle">Graphic Designer</span>
               </div>
               <button className="widgetSmButton">
                   <Visibility ClassName="widgetSmIcons"/>
                   Display
               </button>
           </li>
           <li className="widgetSmListItem">
               <img src={require("../../assets/user1.jpg")} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                   <span className="widgetSmUsername">Shubham Misra</span>
                   <span className="widgetSmUserTitle">Graphic Designer</span>
               </div>
               <button className="widgetSmButton">
                   <Visibility ClassName="widgetSmIcons"/>
                   Display
               </button>
           </li>
           <li className="widgetSmListItem">
               <img src={require("../../assets/user1.jpg")} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                   <span className="widgetSmUsername">Shubham Misra</span>
                   <span className="widgetSmUserTitle">Graphic Designer</span>
               </div>
               <button className="widgetSmButton">
                   <Visibility ClassName="widgetSmIcons"/>
                   Display
               </button>
           </li>
           <li className="widgetSmListItem">
               <img src={require("../../assets/user1.jpg")} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                   <span className="widgetSmUsername">Shubham Misra</span>
                   <span className="widgetSmUserTitle">Graphic Designer</span>
               </div>
               <button className="widgetSmButton">
                   <Visibility ClassName="widgetSmIcons" />
                   Display
               </button>
           </li>
           <li className="widgetSmListItem">
               <img src={require("../../assets/user1.jpg")} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                   <span className="widgetSmUsername">Shubham Misra</span>
                   <span className="widgetSmUserTitle">Graphic Designer</span>
               </div>
               <button className="widgetSmButton">
                   <Visibility ClassName="widgetSmIcons" />
                   Display
               </button>
           </li>
       </ul>
    </div>
  )
}
