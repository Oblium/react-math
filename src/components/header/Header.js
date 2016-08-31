import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
      return (
        <header className="header">
          <h1>{this.props.text}</h1>
        </header>
      );
    }
};

export default Header;
