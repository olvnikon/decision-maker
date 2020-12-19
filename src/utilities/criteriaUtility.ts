export const calculateUtility = (value: number, rightLimit: number) =>
  value > rightLimit ? 0 : (-100 * value) / rightLimit + 100;

export const calculateTotals = (comparatorsUtilityValues: Array<Array<number>>, criteriaRightLimit: number[]) => (
  weights: number[]
) =>
  comparatorsUtilityValues.map((comparatorUtilityValues) =>
    comparatorUtilityValues
      .map((value, i) => calculateUtility(value, criteriaRightLimit[i]))
      .reduce((acc, utility, index) => acc + utility * weights[index], 0)
  );
