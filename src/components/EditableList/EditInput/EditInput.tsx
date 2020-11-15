import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
`;

type Props = {
  defaultValue?: string;
  onOK: (value: string) => void;
  onCancel: () => void;
};

export const EditInput: React.FunctionComponent<Props> = ({ defaultValue = '', onOK, onCancel }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Wrapper>
      <Input
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onOK(value);
          }
        }}
      />
      <Button
        shape="circle"
        icon={<CheckOutlined />}
        onClick={() => {
          onOK(value);
        }}
      />
      <Button
        shape="circle"
        icon={<CloseOutlined />}
        onClick={() => {
          onCancel();
        }}
      />
    </Wrapper>
  );
};
