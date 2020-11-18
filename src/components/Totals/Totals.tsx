import React from 'react';
import { Rate, Card } from 'antd';
import { useRecoilValue } from 'recoil';
import { totalsSelector, comparisonAtom } from '../../state/atoms';

const MAX = 100;
const stars = 10;
const divider = MAX / stars;

export const Totals = () => {
  const comparison = useRecoilValue(comparisonAtom);
  const totals = useRecoilValue(totalsSelector);
  const data = totals
    .map((total, index) => ({
      total,
      comparison: comparison[index],
    }))
    .sort((a, b) => b.total - a.total);
  return (
    <Card title="Results">
      {data.map(({ total, comparison }) => (
        <div>
          <Rate count={stars} disabled value={total / divider} />
          <span className="ant-rate-text">
            <strong>{comparison}</strong> ({total})
          </span>
        </div>
      ))}
    </Card>
  );
};
