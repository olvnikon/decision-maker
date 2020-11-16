import { selector, atom } from 'recoil';
import { criteriaAtom, comparisonAtom } from './';
import { generateCombinations } from '../../utilities';

export const combinationsSelector = selector({
  key: 'combinations/list',
  get: ({ get }) => {
    const comparison = get(comparisonAtom);
    const criteria = get(criteriaAtom);

    return comparison.length < 2 && criteria.length < 2 ? [] : generateCombinations(criteria);
  },
});

const combinationsComparisonDefaultSelector = selector({
  key: 'combinations/comparisonDefault',
  get: ({ get }) => get(combinationsSelector).map(() => [0, 0]) as Array<[number, number]>,
});

export const combinationsComparisonAtom = atom<Array<[number, number]>>({
  key: 'combinations/comparison',
  default: combinationsComparisonDefaultSelector,
});
