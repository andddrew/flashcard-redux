import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signInSuccess } from 'actions';

import NavBar from 'components/NavBar';
import Home from 'components/Home';
import { auth } from 'fire';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  componentDidMount() {
    auth.onAuthStateChanged( user => {
      if( user ) {
        this.props.signInSuccess( user );
      }
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col><NavBar /></Col>
        </Row>
        <Row>
          <Col><Home /></Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signInSuccess( user ) {
    dispatch( signInSuccess( user ) );
  },
  signInHandler() {
    dispatch( signIn() );
  }
})

export default connect(null, mapDispatchToProps)(App);
