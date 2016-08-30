import React from 'react';
import Question from '../../views/question/Question'

class QuestionContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Question {...this.props} />
    );
  }
}

export default QuestionContainer;
