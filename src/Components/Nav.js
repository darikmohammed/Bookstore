import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Styles/Nav.css';

function Nav() {
  return (
    <>
      <nav>
        <div className="left-nav">
          <Link className="logo" to="/">
            Bookstore CMS
          </Link>
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/catagory">CATEGORIES</Link>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          <div className="avatar">
            <AccountCircleIcon fontSize="large" sx={{ color: '#0290ff' }} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
