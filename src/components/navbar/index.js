import React, { useState, useEffect } from "react"
import { FaBars, Fatimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
} from "./navbarelements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    ChangeNav()
    window.addEventListener("scroll", ChangeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <Fatimes /> : <FaBars />}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar
