import { atom } from 'recoil';

export const criteriaAtom = atom<string[]>({
  key: 'criteria/list',
  default: [],
});
