import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/smartcart-logo-color.png";
import { SiVisa, SiGooglepay, SiApplepay } from "react-icons/si";
import * as S from "./index.styles.js";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.LinkGroup>
          <Link to="/">
            <S.FooterLogo src={Logo} alt="Smartcart" />
          </Link>
          <span>Your smartest choice for online shopping</span>
        </S.LinkGroup>
        <S.LinkWrapper>
          <S.LinkGroup>
            <span>Navigation</span>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Cart">Cart</Link>
          </S.LinkGroup>
          <S.LinkGroup>
            <span>Support</span>
            <a href="#">FAQs</a>
            <a href="#">Policy</a>
          </S.LinkGroup>
          <S.LinkGroup>
            <span>Payment Methods</span>
            <S.Payment>
              <SiVisa />
              <SiApplepay />
              <SiGooglepay />
            </S.Payment>
          </S.LinkGroup>
        </S.LinkWrapper>
      </S.FooterWrapper>
      <S.Copyright>Copyright &#169; SMARTCART 2023</S.Copyright>
    </S.Footer>
  );
};

export default Footer;
