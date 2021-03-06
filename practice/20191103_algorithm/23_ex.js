/*
  23. 배열에서 특정 값만을 구하기
  인수로 주어진 배열 arr에서 짝수이고 3보다
  큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
*/

function getArray(arr) {
  return arr.filter(item => !(item % 2)).filter(item => item > 3);
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
