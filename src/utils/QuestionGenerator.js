import Constants from '../config/constants';
const { levelMap } = Constants;

const maxLevel = levelMap.length - 1;
const BASE_MULTIPLIER = 3;
let actualLevel = 0;

function getRandomNumberUpTo(n) {
  return Math.ceil(Math.random() * n);
}

function getAdditionWithMaxResult(levelMax){
  const firstNum = getRandomNumberUpTo(levelMax);
  const secondNum = getRandomNumberUpTo(levelMax - firstNum);

  return {
    question: firstNum + " + " + secondNum,
    answer: firstNum + secondNum
  };
}

function getDifferenceWithBase(levelMax){
  const firstNum = getRandomNumberUpTo(levelMax * BASE_MULTIPLIER);
  const secondNum = getRandomNumberUpTo(firstNum);

  return {
    question: firstNum + " - " + secondNum,
    answer: firstNum - secondNum
  };
}

function getProductWithBase(levelMax){
  const firstNum = getRandomNumberUpTo(levelMax);
  const secondNum = getRandomNumberUpTo(Math.floor(levelMax * BASE_MULTIPLIER / firstNum));

  return {
    question: firstNum + " * " + secondNum,
    answer: firstNum * secondNum
  };
}

function getCasualQuestion(levelMax) {
  var n = getRandomNumberUpTo(10);
  if (n <= 6) {
    return getAdditionWithMaxResult(levelMax);
  }
  if (n <= 8) {
    return getDifferenceWithBase(levelMax);
  }

  return getProductWithBase(levelMax);
}

function getNext() {
  actualLevel += actualLevel < maxLevel ? 1 : 0;
  return getCasualQuestion(levelMap[actualLevel]);
};


export default {
  getNext
};
