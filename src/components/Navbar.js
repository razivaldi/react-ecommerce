import React from "react";
import logo from "../assets/cek-toko-sebelah.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import "./navbar.css";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { userState } = useUserContext();

  // TODO

  return (
    <nav className="nav rounded-full border-2 border-black sticky top-0 z-50 bg-orange-100 overflow-clip">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo}/>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links ">
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
                <Link to="/checkout">checkout</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
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
