import React from 'react';

import './question.scss';

class Question extends React.Component {
  render() {
    return !this.props.gameEnded ? (
      <div className="questionContainer">
        {this.props.question}
      </div>
    ) : (
      <div className="timer">Time is up!</div>
    );
  }
}

export default Question;
