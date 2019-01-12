import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';

class NavBar extends Component {

  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState( prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div>
        <Navbar color="faded" expand="md">
          <NavbarBrand>Flashcard</NavbarBrand>
          <NavbarToggler onClick={ this.toggle } className="mr-2">LOL</NavbarToggler>
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/about">About</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/decks">Decks</Link></NavLink>
              </NavItem>
              <NavItem>
              {
                this.props.loggedIn 
                ? <Button color="secondary" onClick={ this.props.handleLogout }>Sign Out</Button>
                : <Button color="primary" onClick={ this.props.handleLogin }>Sign In</Button>
              }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch( signIn() );
  },
  handleLogout() {
    dispatch( signOut() );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

