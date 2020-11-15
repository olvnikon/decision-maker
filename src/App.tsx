import React from 'react';
import { Divider, Layout } from 'antd';
import 'antd/dist/antd.css';

import { EditableList } from './components/EditableList';
import { criteriaToWeights, generateCombinations, calculateTotals } from './utilities';
import styles from './App.module.scss';

const { Content } = Layout;

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
        <EditableList placeholder="Enter a thing to compare" name="Comparison" />
        <Divider />
        <EditableList placeholder="Enter a criteria to compare" name="Criteria" />
      </Content>
    </Layout>
  );
}

export default App;
