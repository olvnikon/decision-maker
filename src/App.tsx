import React from 'react';
import { Layout, Collapse } from 'antd';
import 'antd/dist/antd.css';

import { listWithRecoilState } from './common/hocs/listWithRecoilState';
import { ComparisonPanel } from './components/Comparison';
import { Totals } from './components/Totals';
import { comparisonAtom, criteriaAtom } from './state/atoms';

import styles from './App.module.scss';

const { Content } = Layout;
const { Panel } = Collapse;

const ComparisonList = listWithRecoilState(comparisonAtom);
const CriteriaList = listWithRecoilState(criteriaAtom);
const staticPanels = [
  { name: 'Comparison', component: <ComparisonList placeholder="Enter a thing to compare" name="Comparison" /> },
  { name: 'Criteria', component: <CriteriaList placeholder="Enter a criteria to compare" name="Criteria" /> },
  { name: 'Criteria comparison', component: <ComparisonPanel /> },
];

function App() {
  return (
    <Layout>
      <Content className={styles.App}>
        <Collapse defaultActiveKey={staticPanels.map((_p, index) => index)}>
          {staticPanels.map(({ name, component }, index) => (
            <Panel header={name} key={index}>
              {component}
            </Panel>
          ))}
        </Collapse>
        <Totals />
      </Content>
    </Layout>
  );
}

export default App;
