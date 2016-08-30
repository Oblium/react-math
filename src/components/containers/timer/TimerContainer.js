import React from 'react';
import Timer from '../../views/timer/Timer';

class TimerContainer extends React.Component {
  render() {
    return (
      <Timer {...this.props} />
    );
  }
}

export default TimerContainer;
