import React from 'react';
import InputContainer from '../answerInput/InputContainer';
import Question from '../question/Question';
import Score from '../score/Score';
import Timer from '../timer/Timer';

import Constants from '../../config/constants';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {question:'', answer: 0, score: 0, time: '', gameEnded: false};
    this.guess = this.guess.bind(this);
  }

  moveToNextQuestion() {
    const nextQuestion = this.props.questionGenerator.getNext();
    this.setState({
      question: nextQuestion.question,
      answer: nextQuestion.answer
    });
  }

  startTimer() {
    this.props.timer.createTimer(Constants.gameDuration, this.updateTime, this.endGame, this);
  }

  updateTime(time) {
    this.setState({time});
  }

  endGame() {
    this.setState({gameEnded: true})
  }

  incrementScore() {
    this.setState({score: (this.state.score + 1)});
  }

  guess(num) {
    if (num === this.state.answer) {
      this.incrementScore();
      this.moveToNextQuestion();
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <Question question={this.state.question} gameEnded={this.state.gameEnded} />
        <InputContainer guess={this.guess} gameEnded={this.state.gameEnded} />
        <Score score={this.state.score} gameEnded={this.state.gameEnded} />
        <Timer time={this.state.time} gameEnded={this.state.gameEnded} />
      </div>
    );
  }

  componentDidMount() {
    this.moveToNextQuestion();
    this.startTimer();
  }
};

export default Main;
