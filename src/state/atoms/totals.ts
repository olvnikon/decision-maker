import { selector } from 'recoil';
import { combinationsComparisonAtom, combinationsSelector, criteriaAtom } from './';
import { criteriaToWeights, calculateTotals } from '../../utilities';

export const totalsSelector = selector({
  key: 'totals/list',
  get: ({ get }) => {
    const combinations = get(combinationsSelector);
    const criteria = get(criteriaAtom);
    if (combinations.length === 0) {
      return [];
    }
    const criteriaComp = get(combinationsComparisonAtom).map(([cr1, cr2]) => (Math.abs(cr1) + 1) / (Math.abs(cr2) + 1));
    const weights = criteriaToWeights(criteriaComp, criteria)(combinations);
    const criteriaRightLimit = [20000, 200, 300];
    const comparatorsUtilityValues = [
      [10000, 60, 30],
      [8000, 50, 150],
      [15000, 5, 50],
    ];
    return calculateTotals(comparatorsUtilityValues, criteriaRightLimit)(weights);
  },
});
