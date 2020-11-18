import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { criteriaAtom, combinationsSelector, combinationsComparisonAtom } from '../../state/atoms';
import { Comparison } from './Comparison';

const Wrapper = styled.section`
  padding: 0 50px;
`;

export const ComparisonPanel = () => {
  const criteria = useRecoilValue(criteriaAtom);
  const combinations = useRecoilValue(combinationsSelector);
  const [combinationsComparison, setCombinationsComparison] = useRecoilState(combinationsComparisonAtom);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
