import React from 'react';
import InputContainer from '../inputContainer/InputContainer';
import QuestionContainer from '../questionContainer/QuestionContainer';
import ScoreContainer from '../score/ScoreContainer';
import TimerContainer from '../timer/TimerContainer';

import Constants from '../../../config/constants';

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
    var actualScore = this.state.score;
    this.setState({score: (actualScore + 1)});
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
        <QuestionContainer question={this.state.question} gameEnded={this.state.gameEnded} />
        <InputContainer guess={this.guess} gameEnded={this.state.gameEnded} />
        <ScoreContainer score={this.state.score} gameEnded={this.state.gameEnded} />
        <TimerContainer time={this.state.time} gameEnded={this.state.gameEnded} />
      </div>
    );
  }

  componentDidMount() {
    this.moveToNextQuestion();
    this.startTimer();
  }
};

export default Main;
