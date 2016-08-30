import Constants from '../config/constants';

const { levelMap } = Constants;
const maxLevel = levelMap.length - 1;
let actualLevel = 0;

function getRandomNumberUpTo(n) {
  return Math.ceil(Math.random() * n);
}

function getQuestionByLevel(l){
  const actualLevel = l < maxLevel ? l : maxLevel;
  const levelMax = levelMap[actualLevel];
  const firstNum = getRandomNumberUpTo(levelMax);
  const secondNum = getRandomNumberUpTo(levelMax - firstNum);

  return {
    question: firstNum + " + " + secondNum,
    answer: firstNum + secondNum
  };
}

function getNext() {
  return getQuestionByLevel(actualLevel++);
};


export default {
  getNext
};
