import React from 'react';
import { Slider } from 'antd';

type Props = {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  criteria: [string, string];
};

const marks = {
  0: 'Same',
};

const points = new Map([
  [[0], 'Same'],
  [[1, 2, 3], 'Slightly'],
  [[4, 5], 'More'],
  [[6, 7], 'Much more'],
  [[8], 'Significantly'],
]);

export const Comparison: React.FunctionComponent<Props> = ({ value, onChange, criteria }) => (
  <Slider
    min={-8}
    max={8}
    range
    marks={{
      ...marks,
      '-8': criteria[0],
      8: criteria[1],
    }}
    tipFormatter={(value) => [...points].find(([range]) => range.includes(Math.abs(value!)))![1]}
    value={value}
    onChange={([range1, range2]) => {
      if ([range1, range2].some((r) => r < 0)) {
        onChange([range1, 0]);
      } else {
        onChange([0, range2]);
      }
    }}
  />
);
