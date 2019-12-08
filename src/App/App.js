import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';
import whiteClose from '../assets/images/close_white.svg';
import whitePlus from '../assets/images/plus_white.svg';
// Modal.setAppElement('#yourAppElement')

class App extends Component {
  constructor() {
    super()
    this.state = {
      color1: 'blue',
      color2: 'green',
      color3: 'yellow',
      color4: 'red',
      color5: 'purple',
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div className="App">
        <Nav
          openModal={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Example Modal"
        >
          <img src={whiteClose} onClick={this.closeModal} alt="white x symbol" className="modalClose"/>
          <section className="menu">
            <div className="menu-items">
              <img src={whitePlus} alt="white plus symbol" className="modalPlus"/>
              <h1>SAVE PALETTE</h1>
            </div>
            <div className="menu-items">
              <img src={whitePlus} alt="white plus symbol" className="modalPlus"/>
              <h1>CREATE NEW PROJECT</h1>
            </div>
            <div className="menu-items">
              <img src={whitePlus} alt="white plus symbol" className="modalPlus"/>
              <h1>VIEW ALL PROJECTS</h1>
            </div>
          </section>
        </Modal>
        <main>
          <Palette
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            color5={this.state.color5}
          />
        </main>
      </div>
    );
  }
}

export default App;
