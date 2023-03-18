import styled from "styled-components";
import { NavLink } from "react-router-dom";

// LOGO //

// Logo on large screen size
export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const LogoStyled = styled.img`
  display: block;
  max-width: 180px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

// Logo on small screen size
export const LogoIconStyled = styled.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    max-width: 60px;
  }
`;

// NAVIGATION //
export const HeaderMain = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Nav = styled.nav`
  background-color: #fdfbe2;
  height: 80px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90vw;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    width: 100%;
    height: 90vh;
    transition: all 0.5s ease;
    background-color: #fdfbe2;
    margin-right: 0;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 1rem 0 1rem;
`;

export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  border-bottom: 2px solid transparent;

  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    border: none;

    &:hover,
    &.active {
      color: ${(props) => props.theme.colors.primary};
      border: none;
      transition: all 0.3s ease;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
