import { calculateUtility } from './criteriaUtility';

describe('calculateUtility', () => {
  it('should be 0 if value >= right limit', () => {
    expect(calculateUtility(10, 5)).toBe(0);
    expect(calculateUtility(10, 10)).toBe(0);
  });

  it('should be 50 if value * 2 === right limit', () => {
    expect(calculateUtility(5, 10)).toBe(50);
  });

  it('should be 100 if value === 0', () => {
    expect(calculateUtility(0, 10)).toBe(100);
    expect(calculateUtility(0, 20)).toBe(100);
    expect(calculateUtility(0, 30)).toBe(100);
  });
});
