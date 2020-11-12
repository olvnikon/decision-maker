import React from 'react';
import { criteriaToWeights, generateCombinations } from './utilities/criteriaWeight';
import { calculateTotals } from './utilities/criteriaUtility';

const criteria = ['cost', 'rank', 'location'];
const criteriaComp = [5, 7, 3];
const weights = criteriaToWeights(criteriaComp)(generateCombinations(criteria));

const comparators = ['University A', 'University B', 'University C'];
const criteriaRightLimit = [20000, 200, 300];
const comparatorsUtilityValues = [
  [10000, 60, 30],
  [8000, 50, 150],
  [15000, 5, 50],
];

const totals = calculateTotals(comparatorsUtilityValues, criteriaRightLimit)(weights);

function App() {
  return (
    <div>
      {comparators.map((c, i) => (
        <div key={i}>
          {c} - {totals[i]}
        </div>
      ))}
    </div>
  );
}

export default App;
