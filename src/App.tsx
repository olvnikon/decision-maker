import React from 'react';
import { Divider, Layout } from 'antd';
import 'antd/dist/antd.css';

import { criteriaToWeights, generateCombinations, calculateTotals } from './utilities';
import { listWithRecoilState } from './common/hocs/listWithRecoilState';
import { comparisonAtom, criteriaAtom } from './state/atoms';
import styles from './App.module.scss';

const { Content } = Layout;
const ComparisonList = listWithRecoilState(comparisonAtom);
const CriteriaList = listWithRecoilState(criteriaAtom);

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
    <Layout>
      <Content className={styles.App}>
        <ComparisonList placeholder="Enter a thing to compare" name="Comparison" />
        <Divider />
        <CriteriaList placeholder="Enter a criteria to compare" name="Criteria" />
      </Content>
    </Layout>
  );
}

export default App;
