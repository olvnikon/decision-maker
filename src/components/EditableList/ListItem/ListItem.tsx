import React, { useState } from 'react';
import { List, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { EditInput } from '../EditInput';
import { Confirmation } from '../../Confirmation';
import { onAction } from '../../../utilities/helpers';

type Props = {
  onDelete: () => void;
  onEdit: (value: string) => void;
  text: string;
};

export const ListItem: React.FunctionComponent<Props> = ({ onDelete, onEdit, text }) => {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const editAction = onAction(onEdit, setEdit);
  const deleteActon = onAction(onDelete, setVisible);
  return (
    <List.Item
      actions={[
        <Button
          shape="circle"
          onClick={() => {
            setEdit(true);
          }}
          icon={<EditOutlined />}
        />,
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => {
            setVisible(true);
          }}
        />,
      ]}
    >
      <div>
        {edit ? <EditInput defaultValue={text} onOK={editAction(true)} onCancel={editAction()} /> : text}
        <Confirmation visible={visible} onOK={deleteActon(true)} onCancel={deleteActon()} />
      </div>
    </List.Item>
  );
};
