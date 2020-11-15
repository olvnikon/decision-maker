import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

type ModalProps = React.ComponentProps<typeof Modal>;

type Props = {
  visible?: ModalProps['visible'];
  onOK?: ModalProps['onOk'];
  onCancel?: ModalProps['onOk'];
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Confirmation = ({ visible, onOK = () => {}, onCancel = () => {} }: Props): React.ReactPortal => {
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <Modal title="Modal" visible={visible} onOk={onOK} onCancel={onCancel} okText="Confirm" cancelText="Cancel">
      <p>Do you confirm your action?</p>
    </Modal>,
    el
  );
};
