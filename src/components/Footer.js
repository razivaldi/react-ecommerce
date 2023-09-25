import React from "react";
import styled from "styled-components";
import logo from "../assets/cek-toko-sebelah.png";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="font-semibold text-orange-400"> Cek Toko Sebelah </span>
      </h5>
      <img src={logo} className="-translate-x-16" />
      <Link to="/contact">
        <button className="text-white bg-orange-500 border border-white rounded-full px-12 py-4">
          <span className="mr-2 text-2xl">
            <BsQuestionCircle className="text-white" />
          </span>
          Help
        </button>
      </Link>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-black);
  padding: 0 20px;
  text-align: center;
  overflow: hidden;
  margin-top: 7rem;

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
