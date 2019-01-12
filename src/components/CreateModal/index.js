import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { createDeck } from 'actions';


class CreateModal extends Component {

  state = {
    title: '',
    description: '',
  };

  formSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    this.props.createDeck( title, description );
    this.props.toggleModal();
    this.setState({
      title: '',
      description: '',
    });
  }

  changeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() { 
    return (
      <div>
        <Modal isOpen={ this.props.isOpen } toggle={ this.props.toggleModal }>
          <ModalHeader toggle={ this.props.toggleModal }>Create New Deck</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.formSubmit }>
              <FormGroup>
                <Label>Title</Label>
                <Input 
                  value={ this.state.title } 
                  name="title" 
                  onChange={ this.changeHandler }
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input 
                  value={ this.state.description } 
                  name="description"
                  onChange={ this.changeHandler }
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={ this.formSubmit } color="primary">Create</Button>
            <Button color="danger" onClick={ this.props.toggleModal }>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createDeck(name, description) {
    dispatch( createDeck( name, description ) );
  }
})

export default connect(null, mapDispatchToProps)(CreateModal);