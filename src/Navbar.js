import React from 'react';
import { Link } from 'react-router-dom'; // นำเข้า Link จาก react-router-dom
import AppGoogleLogin from './AppGoogleLogin'; // นำเข้า AppGoogleLogin

const Navbar = ({ show }) => {
  return (
    <div className={show ? 'slidenav active' : 'slidenav'}>
      <ul>
        <li>
          <Link to="/home">Home</Link> {/* ลิงก์ไปหน้า Home */}
        </li>
        <li>
          <Link to="/">Story</Link> {/* ลิงก์ไปหน้า Story */}
        </li>
        <li>
          <Link to="/comment">CommentPage</Link> {/* ลิงก์ไปหน้า CommentPage */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <AppGoogleLogin />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
