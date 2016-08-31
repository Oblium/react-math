import React from 'react';
import './timer.scss';

class Timer extends React.Component {
  render() {
    return !this.props.gameEnded ? (
      <div className="timer">
        You have {this.props.time} left!
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Timer;
