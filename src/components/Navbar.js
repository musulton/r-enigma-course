import React from "react";
import {Button, Container, Navbar, Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import constants from "../constants";
import { removeToken } from "../utils/token";

const StyledNav = styled(Nav)`
  flex-direction: row;
`

const menu = [
    { path: constants.routes.COURSE_LIST, menuName: "Courses" },
    { path: "#", menuName: "Course Types" },
]

const NavBar = () => {
  const onLogout = () => {
    removeToken()
    window.location.reload()
  }

  return (
      <Navbar bg="light" expand="light" sticky={"top"}>
          <Container>
              <Navbar.Brand>Enigma Course</Navbar.Brand>
              <StyledNav>
                  {menu?.map((item, index) => (
                      <NavLink
                          to={item.path}
                          className="nav-link mx-3"
                          key={index}
                      >
                          {item.menuName}
                      </NavLink>
                  ))}
                  <Button variant="danger" className="mx-3" onClick={onLogout}>
                      Logout
                  </Button>
              </StyledNav>
          </Container>
      </Navbar>
  )
}

export default NavBar;