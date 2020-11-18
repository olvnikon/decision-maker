import { atom, selector } from 'recoil';
import { criteriaAtom } from './criteria';

const criteriaToUtilitySelector = selector({
  key: 'utility/listDefault',
  get: ({ get }) => get(criteriaAtom).map(() => '0'),
});

export const utilityAtom = atom<string[]>({
  key: 'utility/list',
  default: criteriaToUtilitySelector,
});
