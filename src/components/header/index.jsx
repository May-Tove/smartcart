import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../../assets/smartcart-logo-color.png";
import LogoIcon from "../../assets/smartcart-new-logo-color.png";
import { CartIcon } from "../shoppingBagIcon";
import { SearchBar } from "../SearchBar";
import * as S from "./index.styles.js";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <S.HeaderMain>
      <S.Nav>
        <S.NavbarContainer>
          <Link to="/" onClick={closeMenu}>
            <S.LogoContainer>
              <S.LogoIconStyled src={LogoIcon} alt="Smartcart" />
              <S.LogoStyled src={Logo} alt="Smartcart" />
            </S.LogoContainer>
          </Link>
          <SearchBar />
          <S.IconWrapper>
            <S.NavMenu onClick={handleClick} click={click}>
              <S.NavItem>
                <S.NavLinks to="/" onClick={closeMenu}>
                  Home
                </S.NavLinks>
              </S.NavItem>
              <S.NavItem>
                <S.NavLinks to="/Contact" onClick={closeMenu}>
                  Contact
                </S.NavLinks>
              </S.NavItem>
            </S.NavMenu>
            <Link to="/Cart">
              <CartIcon />
            </Link>
            <S.MobileIcon onClick={handleClick}>
              {click ? (
                <CgClose aria-label="Close menu" tabIndex="0" />
              ) : (
                <CgMenu aria-label="Hamburger menu" tabIndex="0" />
              )}
            </S.MobileIcon>
          </S.IconWrapper>
        </S.NavbarContainer>
      </S.Nav>
    </S.HeaderMain>
  );
};

export default Header;
