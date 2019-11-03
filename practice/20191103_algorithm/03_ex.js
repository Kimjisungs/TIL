// 3. 문자열 다루기

function alphaString46(s) {
  return !isNaN(s) && (s.length >= 4 && s.length <= 6)
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false