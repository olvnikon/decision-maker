import React from 'react';
import './App.scss';

const criteriaCostMock = [5, 7, 3];
const criteriaMock = ['cost', 'rank', 'location'];

type combinations = Array<Array<number>>;

const generateCombinations = (criteria: string[]) =>
  criteria.reduce((acc: combinations, _c, criteriaIndex) => {
    // -1 because the current index should be excluded
    const combinationLength = criteria.length - 1 - criteriaIndex;
    return combinationLength < 1
      ? acc
      : acc.concat(
          [...new Array(combinationLength)].map((_s, combinationIndex) => [
            criteriaIndex,
            // +1 because it should start from the next index after the current
            criteriaIndex + 1 + combinationIndex,
          ])
        );
  }, []);

const applyCriteriaValue = (combs: combinations): combinations =>
  combs.map((combination, index) => [...combination, criteriaCostMock[index]]);

const generateMatrix = (value: combinations) => {
  return [...new Array(value.length)].map((_r, rIndex) => {
    return [...new Array(value.length)].map((_c, cIndex) => {
      if (rIndex === cIndex) {
        return 1;
      }
      return rIndex === cIndex ? 1 : rIndex;
    });
  });
};

const matrix = generateMatrix(applyCriteriaValue(generateCombinations(criteriaMock)));
console.log(matrix);

function App() {
  return (
    <div className="App">
      <div className="first">1</div>
      <div className="second">2</div>
    </div>
  );
}

export default App;
