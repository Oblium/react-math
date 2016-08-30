import React from 'react';
import Score from '../../views/score/Score';

class ScoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {scoreClass: 'low'};
  }

  render() {
    return (
      <Score {...this.props} scoreClass={this.state.scoreClass} />
    );
  }
}


export default ScoreContainer;
