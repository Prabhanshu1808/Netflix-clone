import { AddBoxOutlined, BarChartOutlined, LineStyle, MonetizationOnOutlined, PersonOutline, Timeline, TrendingUp } from "@material-ui/icons"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcons"/>
                            Home
                    </li>
                    <li className="sidebarListItem">
                            <Timeline className="sidebarIcons"/>
                            Analytics
                    </li>
                    <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons"/>
                            Sales
                    </li>
                </ul>
               
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                            <PersonOutline className="sidebarIcons"/>
                            User
                    </li>
                    <li className="sidebarListItem">
                            <AddBoxOutlined className="sidebarIcons"/>
                            Products
                    </li>
                    <li className="sidebarListItem">
                            <MonetizationOnOutlined />
                            Transactions
                    </li>
                    <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcons"/>
                            Report
                    
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                            <LineStyle className="sidebarIcons"/>
                            Mail
                    </li>
                    <li className="sidebarListItem">
                            <Timeline className="sidebarIcons"/>
                            Feedback
                    </li>
                    <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons"/>
                            Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Other </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                            <LineStyle className="sidebarIcons"/>
                            Home
                    </li>
                    <li className="sidebarListItem">
                            <Timeline className="sidebarIcons"/>
                            Analytics
                    </li>
                    <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons"/>
                            Sales
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
