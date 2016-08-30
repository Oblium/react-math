import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/views/header/Header';
import Footer from './components/views/footer/Footer';
import Main from './components/containers/main/Main';
import QuestionGenerator from './utils/QuestionGenerator';
import Timer from './utils/Timer';

import 'reset-css/_reset.scss';
import './styles/common/global.scss';

class App extends React.Component {
  constructor() {
    super();
    this.headerText = "Solve it!";
  }
  
  render(){
    return (
      <div>
        <Header text={this.headerText}/>
        <Main questionGenerator={QuestionGenerator} timer={Timer} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
