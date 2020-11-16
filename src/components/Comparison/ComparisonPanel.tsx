import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { criteriaAtom, combinationsSelector, combinationsComparisonAtom, totalsSelector } from '../../state/atoms';
import { Comparison } from './Comparison';

export const ComparisonPanel = () => {
  const criteria = useRecoilValue(criteriaAtom);
  const combinations = useRecoilValue(combinationsSelector);
  const [combinationsComparison, setCombinationsComparison] = useRecoilState(combinationsComparisonAtom);
  const totals = useRecoilValue(totalsSelector);

  console.log('===>', totals);
  return (
    <section>
      {combinations.map(([cr1, cr2], index) => (
        <Comparison
          key={index}
          value={combinationsComparison[index]}
          onChange={(value) => {
            setCombinationsComparison([
              ...combinationsComparison.slice(0, index),
              value,
              ...combinationsComparison.slice(index + 1),
            ]);
          }}
          criteria={[criteria[cr1], criteria[cr2]]}
        />
      ))}
    </section>
  );
};
