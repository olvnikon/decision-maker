import React, { useState } from 'react';
import { List, Divider, Card } from 'antd';
import { AddInput } from './AddInput';
import { ListItem } from './ListItem';

type Props = {
  placeholder?: string;
  name: string;
};

export const EditableList: React.FunctionComponent<Props> = ({ placeholder = '', name }) => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <Card title={name}>
      <AddInput
        placeholder={placeholder}
        onAction={(value) => {
          setItems(items.concat(value));
        }}
      />
      <Divider orientation="left">{name} list</Divider>
      <List
        size="large"
        bordered
        dataSource={items}
        locale={{ emptyText: <div>No data</div> }}
        renderItem={(item, index) => (
          <ListItem
            text={item}
            onDelete={() => {
              setItems([...items.slice(0, index), ...items.slice(index + 1)]);
            }}
            onEdit={(value) => {
              setItems([...items.slice(0, index), value, ...items.slice(index + 1)]);
            }}
          />
        )}
      />
    </Card>
  );
};
