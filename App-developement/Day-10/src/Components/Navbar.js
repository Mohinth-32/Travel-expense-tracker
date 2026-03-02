import React from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const username = useSelector((state) => state.user.user);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className="logo">
            <img
              className="logo1"
              alt="logo"
              src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311918159a72179.jpg"
            />
          </div>
          <div className="logo-name">
            {isSidebarOpen ? <h1 className="me1">TravelExpenser</h1> : <></>}
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
            {username ? (
              <>
                {' '}
                <MenuIcon />
              </>
            ) : (
              <></>
            )}
          </div>
          <nav className="list">
            <ul>
              {username ? (
                <></>
              ) : (
                <Link to="/login">
                  <h3 className="login">Login</h3>
                </Link>
              )}
            </ul>
          </nav>
        </div>
        <div className="socialIcons"></div>
      </header>
    </div>
  );
};

export default Navbar;
