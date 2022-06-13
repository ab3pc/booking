import React from "react";
import { Link } from "react-router-dom";
import briefcase from "../assets/images/briefcase.svg";
import userIcon from "../assets/images/user.svg";
import Button from "./Button";

interface HeaderProps {
  isAuth?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuth }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Travel App
        </Link>
        {isAuth && (
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link to="/bookings" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcase} alt=" icon" />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex={0}>
                  <span className="visually-hidden">Profile</span>
                  <img src={userIcon} alt="profile icon" />
                  <ul className="profile-nav__list">
                    <li className="profile-nav__item profile-nav__username">John Doe</li>
                    <li className="profile-nav__item">
                      <Button
                        styles="profile-nav__sign-out"
                        title="Sign Out"
                        type="button"
                        onClick={() => location.reload()}
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
