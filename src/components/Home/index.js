import {FaSearch, FaBell, FaUserCircle, FaCashRegister} from 'react-icons/fa'

import {GrTransaction} from 'react-icons/gr'
import {BiLike} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'
import LineChartHome from '../LineChartHome'
import PieChartHome from '../PieChartHome'
import ScheduleChart from '../ScheduleChart'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <div className="nav-items-container">
      <div>
        <h1 className="home-title">Board.</h1>
        <ul className="nav-list">
          <li className="active-list-item">
            <p>Dashboard</p>
          </li>
          <li className="list-item">
            <p>Transactions</p>
          </li>
          <li className="list-item">
            <p>Schedules</p>
          </li>
          <li className="list-item">
            <p>Users</p>
          </li>
          <li className="list-item">
            <p>Settings</p>
          </li>
        </ul>
      </div>
      <ul className="nav-list">
        <li>
          <p>Help</p>
        </li>
        <li>Contact us</li>
      </ul>
    </div>
    <div className="dashboard-home-container">
      <div className="dashboard-search-container">
        <p>Dashboard</p>
        <div className="search-bell-profile">
          <div className="search-bar">
            <input type="search" />
            <FaSearch className="home-icons" />
          </div>
          <FaBell className="home-icons" />
          <FaUserCircle className="home-icons" />
        </div>
      </div>
      <div className="data-containers">
        <div className="data-container1">
          <div className="data-icon">
            <FaCashRegister />
          </div>

          <p className="data-heading">
            Total Revenues
            <br />
            <span className="data-value">$2,129,430</span>
          </p>
        </div>
        <div className="data-container2">
          <div className="data-icon">
            <GrTransaction />
          </div>

          <p className="data-heading">
            Total Trasactions
            <br />
            <span className="data-value">1,520</span>
          </p>
        </div>
        <div className="data-container3">
          <div className="data-icon">
            <BiLike />
          </div>

          <p className="data-heading">
            Total Likes
            <br />
            <span className="data-value">9,721</span>
          </p>
        </div>
        <div className="data-container4">
          <div className="data-icon">
            <HiUsers />
          </div>

          <p className="data-heading">
            Total Users
            <br />
            <span className="data-value">892</span>
          </p>
        </div>
      </div>
      <div className="line-chart-home-container">
        <p className="data-value activity-date">Activities</p>
        <p className="data-heading activity-date">May-June 2021</p>
        <LineChartHome />
      </div>

      <div className="pie-schedule">
        <div className="pie-chart-home-container">
          <p className="data-value activity-date">Top Products</p>
          <p className="data-heading activity-date">May-June 2021</p>
          <div className="pie-chart-container">
            <PieChartHome />
            <div>
              <p className="tees">Basic Tees</p>
              <p className="pants">Custom Short Pants</p>
              <p className="hoodies">Super Hoodies</p>
            </div>
          </div>
        </div>
        <ScheduleChart />
      </div>
    </div>
  </div>
)

export default Home
