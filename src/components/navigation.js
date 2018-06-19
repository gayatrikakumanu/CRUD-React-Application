import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

class Navigation extends Component{
  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/home">Home</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar> 
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName='activeLink' to="/title" >NBA Players</NavLink>{' '}
                <NavLink activeClassName='activeLink' to="/add" >Add Player</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
  }
}

export default Navigation;