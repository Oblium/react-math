import React from 'react';
import AnswerInput from '../../views/answerInput/AnswerInput';

class InputContainer extends React.Component {
  constructor() {
    super();
    this.answer = this.answer.bind(this);
  }

  answer(e) {
    if (this.props.guess(+e.target.value)) {
      e.target.value = "";
    }
  }

  render() {
    return (
      <AnswerInput onKeyUp={this.answer} {...this.props} />
    );
  }
}

export default InputContainer;
