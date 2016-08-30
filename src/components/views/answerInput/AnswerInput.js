import React from 'react';

import './answerInput.scss';

class AnswerInput extends React.Component {

  constructor() {
    super();
    this.onBlur = this.onBlur.bind(this);
  }

  render() {
    return !this.props.gameEnded ? (
      <div className="answerInputCont">
        <input type="text" ref={(ref) => this.answerInput = ref} onKeyUp={this.props.onKeyUp} onBlur={this.onBlur} />
      </div>
    ) : (
      <div></div>
    );
  }

  onBlur() {
    this.answerInput.focus();
  }

  componentDidMount() {
    this.answerInput.focus();
  }
}

export default AnswerInput;
