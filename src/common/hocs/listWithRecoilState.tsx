import React from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { EditableList } from '../../components/EditableList';

type Props = Omit<React.ComponentProps<typeof EditableList>, 'items' | 'setItems'>;

export const listWithRecoilState = (atom: RecoilState<string[]>): React.FunctionComponent<Props> => (props) => {
  const [items, setItems] = useRecoilState(atom);
  return <EditableList items={items} setItems={setItems} {...props} />;
};
