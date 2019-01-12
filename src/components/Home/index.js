import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import CreateModal from 'components/CreateModal';

class Home extends Component { 
  state = {
    modal: false,
  }

  toggleModal = () => {
    this.setState( prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="jumbo">
        <Jumbotron className="bg-white">
          <h1 className="display-2">Flashcard.</h1>
          <p className="lead">Online Flashcard Application, using Spaced Repetition.</p>
          <Button className="bg-white text-dark" onClick={ this.toggleModal }>Create New Deck</Button>
          <CreateModal isOpen={ this.state.modal } toggleModal={ this.toggleModal } />
        </Jumbotron>
      </div>
    );
  }
}

export default Home;