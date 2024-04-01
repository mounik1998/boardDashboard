import {FaSearch, FaBell, FaUserCircle, FaCashRegister} from 'react-icons/fa'
import {useState} from 'react'
import {GrTransaction} from 'react-icons/gr'
import {BiLike} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'

import LineChartHome from '../LineChartHome'
import PieChartHome from '../PieChartHome'
import ScheduleChart from '../ScheduleChart'
import './index.css'

const Home = props => {
  const {emailUndefined} = props
  const [isOpenOptions, showOptions] = useState(false)
  const clickLogout = () => {
    localStorage.removeItem('email')
    emailUndefined()
  }
  const showMenu = () => {
    showOptions(!isOpenOptions)
  }

  return (
    <div>
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
              <li className="active-list-item">
                <button
                  className="active-list-item logout-button"
                  type="button"
                  onClick={clickLogout}
                >
                  Logout
                </button>
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

      <div className="mobile-container-home">
        <div className="mobile-header-container">
          <h1>Board.</h1>
          <button type="button" className="hamburger-button">
            <GiHamburgerMenu
              alt="hamBurger"
              className="hamburger"
              onClick={showMenu}
            />
          </button>
        </div>
        {isOpenOptions && (
          <div className="nav-list-mobile">
            <ul className="nav-list-mobile">
              <li className="active-list-item-mobile">
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
              <li className="active-list-item">
                <button
                  className="active-list-item logout-button"
                  type="button"
                  onClick={clickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
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
        <div className="data-containers-mobile">
          <div className="data-container-set-1-2">
            <div className="data-container1-mobile data-container-mobile">
              <div className="data-icon">
                <FaCashRegister />
              </div>

              <p className="data-heading">
                Total Revenues
                <br />
                <span className="data-value">$2,129,430</span>
              </p>
            </div>
            <div className="data-container2-mobile data-container-mobile">
              <div className="data-icon">
                <GrTransaction />
              </div>

              <p className="data-heading">
                Total Trasactions
                <br />
                <span className="data-value">1,520</span>
              </p>
            </div>
          </div>
          <div className="data-container-set-1-2">
            <div className="data-container3-mobile data-container-mobile">
              <div className="data-icon">
                <BiLike />
              </div>

              <p className="data-heading">
                Total Likes
                <br />
                <span className="data-value">9,721</span>
              </p>
            </div>
            <div className="data-container4-mobile data-container-mobile">
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
        </div>
        <div className="line-chart-home-container">
          <p className="data-value activity-date">Activities</p>
          <p className="data-heading activity-date">May-June 2021</p>
          <LineChartHome />
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
        </div>
        <ScheduleChart />
      </div>
    </div>
  )
}

export default Home
