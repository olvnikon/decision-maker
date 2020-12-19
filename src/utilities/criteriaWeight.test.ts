import { generateCombinations } from './criteriaWeight';

const generateCriteria = (amount: number) => Array.from({ length: amount }, (_c, index) => `c${index}`);
const calculateAmountOfUniquePairs = (n: number) => (n * (n - 1)) / 2;

describe('generateCombinations', () => {
  test('should be [] if there is only 1 criteria', () => {
    expect(generateCombinations(generateCriteria(1))).toEqual([]);
  });

  test('should be only 1 combination when 2 criteria', () => {
    const criteria = generateCriteria(2);
    expect(generateCombinations(criteria)).toHaveLength(calculateAmountOfUniquePairs(2));
    expect(generateCombinations(criteria)).toEqual([[0, 1]]);
  });

  test('should be 3 combinations when 3 criteria', () => {
    const criteria = generateCriteria(3);
    expect(generateCombinations(criteria)).toHaveLength(calculateAmountOfUniquePairs(3));
    expect(generateCombinations(criteria)).toEqual([
      [0, 1],
      [0, 2],
      [1, 2],
    ]);
  });

  test('should match snapshot for many combinations', () => {
    const criteria = generateCriteria(7);
    expect(generateCombinations(criteria)).toMatchSnapshot();
    expect(generateCombinations(criteria)).toHaveLength(calculateAmountOfUniquePairs(7));
  });
});
