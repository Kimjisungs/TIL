// 1. 짝수와 홀수

// if문
function evenOrOdd(num) {
  if (num % 2 === 0) num = 'EVEN';
  else num = 'Odd';
  return num;
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {
  return num = num % 2 === 0 ? 'EVEN' : 'Odd';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even