import React from 'react';
import { List, Divider, Card, notification } from 'antd';
import { AddInput } from './AddInput';
import { ListItem } from './ListItem';

type Props = {
  placeholder?: string;
  name: string;
  items: string[];
  setItems: (items: string[]) => void;
};

export const EditableList: React.FunctionComponent<Props> = ({ placeholder = '', name, items, setItems }) => (
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
            notification.info({
              message: `${items[index]} was removed from the list`,
            });
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
          }}
          onEdit={(value) => {
            notification.info({
              message: `${items[index]} was renamed to ${value}`,
            });
            setItems([...items.slice(0, index), value, ...items.slice(index + 1)]);
          }}
        />
      )}
    />
  </Card>
);
