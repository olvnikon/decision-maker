import { atom, selector } from 'recoil';
import { criteriaAtom, comparisonAtom } from './';

type utility = {
  comparison: string;
  criteriaUtility: Array<{
    criteria: string;
    value: number;
  }>;
};

const criteriaToUtilitySelector = selector({
  key: 'utility/listDefault',
  get: ({ get }) =>
    get(comparisonAtom).map((comparison) =>
      get(criteriaAtom).reduce(
        (acc: utility, criteria) => ({
          ...acc,
          criteriaUtility: acc.criteriaUtility.concat({
            criteria,
            value: 0,
          }),
        }),
        {
          comparison,
          criteriaUtility: [],
        }
      )
    ),
});

export const utilityAtom = atom<Array<utility>>({
  key: 'utility/list',
  default: criteriaToUtilitySelector,
});
