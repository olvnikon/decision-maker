import { flow } from 'fp-ts/function';

type combinationsT = Array<Array<number>>;
type matrixT = Array<Array<number>>;
type geometricMeans = number[];

export const generateCombinations = (criteria: string[]) =>
  criteria.reduce((acc: combinationsT, _c, criteriaIndex) => {
    // -1 because the current index should be excluded
    const combinationLength = criteria.length - 1 - criteriaIndex;
    return combinationLength < 1
      ? acc
      : acc.concat(
          [...new Array(combinationLength)].map((_s, combinationIndex) => [
            criteriaIndex,
            // +1 because it should start from the next index after the current
            criteriaIndex + 1 + combinationIndex,
          ])
        );
  }, []);

const applyCriteriaValue = (combinationComp: number[]) => (combs: combinationsT): combinationsT =>
  combs.map((combination, index) => [...combination, combinationComp[index]]);

const generateMatrix = (combinationValues: combinationsT): matrixT => {
  const matrix = [...new Array(combinationValues.length)].map(() => [...new Array(combinationValues.length)]);
  // FIXME: matrix is generated incorrectly
  combinationValues.forEach(([i1, i2, value]) => {
    matrix[i1][i2] = value;
    matrix[i2][i1] = 1 / value;
  });
  matrix.forEach((_r, i) => {
    matrix[i][i] = 1;
  });
  return matrix;
};

const calculateGeometricMeans = (matrix: matrixT): geometricMeans =>
  matrix.map((row) =>
    Math.pow(
      row.reduce((acc, value) => acc * value, 1),
      1 / matrix.length
    )
  );

const calculateWeights = (gm: geometricMeans) =>
  gm.map((geometricMean) => geometricMean / gm.reduce((acc, gm) => acc + gm, 0));

export const criteriaToWeights = (combinationComp: number[]) =>
  flow(applyCriteriaValue(combinationComp), generateMatrix, calculateGeometricMeans, calculateWeights);
