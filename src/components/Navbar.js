import React, { useEffect } from "react";
import logo from "../assets/cek-toko-sebelah.png";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import "./navbar.css";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { userState, logout } = useUserContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (userState.userId) {
      navigate("/");
    }
  }, [userState]);

  return (
    <nav className="nav rounded-b-lg border border-black shadow-lg top-0 z-50 bg-orange-100">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className="border-2 border-black px-5 py-1 rounded-full font-medium"
                >
                  {text}
                </Link>
              </li>
            );
          })}
          {userState.userId && (
            <>
              <li>
                <Link
                  to="/checkout"
                  className="border-2 border-black px-5 py-1 rounded-full font-medium"
                >
                  checkout
                </Link>
              </li>
            </>
          )}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Nav;
