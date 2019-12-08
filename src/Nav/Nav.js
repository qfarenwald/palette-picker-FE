import React from 'react';
import './Nav.scss';
import blackPlus from '../assets/images/plus_black.svg';
import refresh from '../assets/images/refresh.svg';

const Nav = (props) => {
  console.log(props)
  return (
    <header className="Nav">
      <div>
        <h1>PALE
          <span>
            <img src={blackPlus} alt="plus sign"/>
          </span>
          <span>
            <img src={blackPlus} alt="plus sign" />
          </span>
          E</h1>
        <h1>PICKER</h1>
      </div>
      <section className="nav-controls">
        <img src={refresh} alt="refresh icon" />
        <img src={blackPlus} onClick={props.openModal} alt="black plus symbol"/>
      </section>
    </header>
  )
}

export default Nav;