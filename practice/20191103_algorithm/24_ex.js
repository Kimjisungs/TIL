/*
  24. 평균구하기
  인수로 주어진 배열의 평균을 구하는 함수를 완성하라.
*/

function average(array) {
  let newList = array;
  const arrLength = array.length;

  newList = newList.reduce((pre, cur) => pre + cur);
  return newList / arrLength; // return parseInt(newList / arrLength);
}

console.log(average([5, 3, 4])); // 4
