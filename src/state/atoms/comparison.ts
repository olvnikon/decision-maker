import { atom } from 'recoil';

export const comparisonAtom = atom<string[]>({
  key: 'comparison/list',
  default: [],
});
