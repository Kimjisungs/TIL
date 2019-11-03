/*
  피보나치 수는 0과 1로 시작하며,
  다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
  610, 987, 1597, 2584, 4181, 6765, 10946…

  2 이상의 n이 입력되었을 때, n번째 피보나치 수를 반환하는
  fibonacci 함수를 작성하라. 예를 들어 n = 3이라면 2를 반환한다.
*/

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

/* other */
/*
function fibonacci(n) {
  var pre = 0;
  var cur = 1;
  var last = 0;
  for(var num = 1; num<n; num++){
    last = pre + cur; //0 = 0 +  1
    pre = cur; // 0 = 1
    cur = last; // 1 = 0
  }
  return last;
}
*/