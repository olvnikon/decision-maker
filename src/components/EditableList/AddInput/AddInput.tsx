import React, { useState } from 'react';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Search } = Input;

const Control = styled.div`
  display: flex;
`;

type Props = {
  placeholder?: HTMLInputElement['placeholder'];
  onAction: (value: string) => void;
};

export const AddInput: React.FunctionComponent<Props> = ({ placeholder = '', onAction }) => {
  const [value, setValue] = useState('');
  return (
    <Control>
      <Search
        placeholder={placeholder}
        enterButton={<PlusOutlined />}
        onSearch={(curVal) => {
          onAction(curVal);
          setValue('');
        }}
        size="large"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Control>
  );
};
