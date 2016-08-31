import React from 'react';

import './score.scss';

class Score extends React.Component {
  render() {
    return (
      <div className={"scoreText " + this.props.scoreClass}>Your {this.props.gameEnded ? "total" : "current"} score is: {this.props.score}</div>
    );
  }
}

export default Score;
