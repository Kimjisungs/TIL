/*
25. 최단 거리 1차원 점의 쌍 구하기 (DAUM)
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의
쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면,
결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/

function findMinDistance(array) {
  const lowArr = array.map((item, index, self) => Math.abs(item - (self[index + 1] || 0)));
  // console.log(lowArr)
  const minNumber = Math.min(...lowArr);

  const doubleArr = array.reduce((pred, item, index, self) => {
    pred[index] = [item, self[index + 1] || 0];
    return pred;
  }, []);
  // console.log(doubleArr)

  const filterArr = doubleArr.filter((item, index) => {
    const trueIdx = lowArr[index] === minNumber;
    if (trueIdx) return item;
  });
  // console.log(filterArr);
  return filterArr;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];

console.log(findMinDistance(array)); // [[3, 4], [23, 24]]