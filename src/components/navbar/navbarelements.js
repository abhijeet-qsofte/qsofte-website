import styled from "styled-components"
import { Link } from "gatsby"
import { DiScala } from "react-icons/Di"
import Logo from "../../images/logo.png"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom, rgba(255,255,255, 0.9) 0%, rgba(255,255,255,0) 100% ) "};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  postion: sicky;
  top: 0;
  z-index: 999;
  margin-top: 40px;
  margin-left: 100px;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  heignt: 80px;
  z-index: 1;
  max-width: 1000px;
`
export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: navy;
  font-size: 1.5rem;
  display: flex;
  align-items: top;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 80px;
  width: 130px;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`
export const NavIcon = styled(DiScala)`
  margin: 0.5rem 0 2rem;
`
