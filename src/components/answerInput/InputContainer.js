import React from 'react';
import Input from '../views/answerInput/Input';

class InputContainer extends React.Component {
  answer(e) {
    if (this.props.guess(+e.target.value)) {
      e.target.value = "";
    }
  }

  render() {
    return (
      <Input onKeyUp={e => this.answer(e)} {...this.props} />
    );
  }
}

export default InputContainer;
