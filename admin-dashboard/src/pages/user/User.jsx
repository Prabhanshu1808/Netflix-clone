import "./user.css"
import { AddCircle, CalendarToday, Mail, PersonOutline, Phone } from "@material-ui/icons"

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=" alt="" className="userShowImg" />
            <div className="userShowTopTilte">
              <span className="userShowUsername">John Cooper</span>
              <span className="userShowuserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
           <PersonOutline className="userShowIcon"/>
           <span className="userShowInfoTitle">Johnpark44</span>
          </div>
          <div className="userShowInfo">
           <CalendarToday className="userShowIcon"/>
           <span className="userShowInfoTitle">12.4.1989</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
           <Phone className="userShowIcon"/>
           <span className="userShowInfoTitle">+3 434393939</span>
          </div>
          <div className="userShowInfo">
           <Mail className="userShowIcon"/>
           <span className="userShowInfoTitle">John@gmail.com</span>
          </div>
          <div className="userShowInfo">
           <AddCircle className="userShowIcon"/>
           <span className="userShowInfoTitle">New Town</span>
          </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  )
}
