import { Language, NotificationsNoneOutlined, Settings } from "@material-ui/icons"
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topleft">
           <span className="logo">Prabhasnshu</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNoneOutlined/>
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings/>
              </div>
              <img src={require("../../assets/avatar.jpg")}className="topAvatar" />
          </div>
      </div>
    </div>
  )
}
