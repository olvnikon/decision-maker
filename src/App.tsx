import React from 'react';
import { Layout, Collapse } from 'antd';
import 'antd/dist/antd.css';

import { listWithRecoilState } from './common/hocs/listWithRecoilState';
import { ComparisonPanel } from './components/Comparison';
import { comparisonAtom, criteriaAtom } from './state/atoms';

import styles from './App.module.scss';

const { Content } = Layout;
const { Panel } = Collapse;

const ComparisonList = listWithRecoilState(comparisonAtom);
const CriteriaList = listWithRecoilState(criteriaAtom);
const panels = [
  { name: 'Comparison', component: <ComparisonList placeholder="Enter a thing to compare" name="Comparison" /> },
  { name: 'Criteria', component: <CriteriaList placeholder="Enter a criteria to compare" name="Criteria" /> },
];

// const criteria = ['cost', 'rank', 'location'];
// const criteriaComp = [5, 7, 3];
// const weights = criteriaToWeights(criteriaComp)(generateCombinations(criteria));

// const comparators = ['University A', 'University B', 'University C'];
// const criteriaRightLimit = [20000, 200, 300];
// const comparatorsUtilityValues = [
//   [10000, 60, 30],
//   [8000, 50, 150],
//   [15000, 5, 50],
// ];

// const totals = calculateTotals(comparatorsUtilityValues, criteriaRightLimit)(weights);

function App() {
  return (
    <Layout>
      <Content className={styles.App}>
        <Collapse activeKey={panels.map((_p, index) => index)}>
          {panels.map(({ name, component }, index) => (
            <Panel header={name} key={index}>
              {component}
            </Panel>
          ))}
        </Collapse>
        <ComparisonPanel />
      </Content>
    </Layout>
  );
}

export default App;
