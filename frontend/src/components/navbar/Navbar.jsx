import React from "react";
import { Link } from "react-router";
import logImg from "../../assets/images/logo.png";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logImg} alt="" />
          </div>
        </div>
        <ul className="nav-list">
          <li className="navlist-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navlist-item">
            <Link to="/categories">Category</Link>
          </li>
          <li className="navlist-item">
            <Link to="/men">Men</Link>
          </li>
          <li className="navlist-item">
            <Link to="/women">Women</Link>
          </li>
          <li className="navlist-item">
            <Link to="/latest">Latest</Link>
          </li>
          <li className="navlist-item">
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <div className="wrapper">
          <div className="basket">
            <Link to="/basket">
            <RiShoppingBasketFill />
            </Link>
            <sup>0</sup>
          </div>
          <div className="heart">
            <Link to="/wislist"/><FaHeart /><Link/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
