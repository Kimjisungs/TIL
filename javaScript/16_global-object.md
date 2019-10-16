### isFinite

매개 변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 불리언 타입으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다.

~~~javascript
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite('Hello'));   // false
console.log(isFinite('2005/12/12'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite('10'));      // true: '10' → 10
console.log(isFinite(null));      // true: null → 0
~~~

### isNan

~~~javascript
// 숫자
console.log(isNaN(NaN)); // true
console.log(isNaN(10));  // false

// 문자열
console.log(isNaN('blabla')); // true: 'blabla' → NaN
console.log(isNaN('10'));     // false: '10' → 10
console.log(isNaN('10.12'));  // false: '10.12' → 10.12
console.log(isNaN(''));       // false: '' → 0
console.log(isNaN(' '));      // false: ' ' → 0

// 불리언
console.log(isNaN(true)); // false: true → 1
console.log(isNaN(null)); // false: null → 0

// undefined
console.log(isNaN(undefined)); // true: undefined → NaN

// 객체
console.log(isNaN({}));  // true: {} → NaN

// date
console.log(isNaN(new Date()));             // false: new Date() → Number
console.log(isNaN(new Date().toString()));  // true:  String → NaN
~~~



### parseFloat

매개변수에 전달된 문자열을 부동소수점 숫자(floating point number)로 변환하여 반환한다.

~~~javascript
console.log(parseFloat('3.14'));  // 3.14
console.log(parseFloat('10.00')); // 10
// 공백으로 구분된 문자열은 첫번째 문자열만 변환한다.
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40
// 첫번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseFloat('He was 40')); // NaN
// 전후 공백은 무시된다.
console.log(parseFloat(' 60 ')); // 60
~~~

### parseInt

매개변수에 전달된 문자열을 정수형 숫자(Integer)로 해석(parsing)하여 반환한다. 반환값은 언제나 10진수이다.

~~~javascript
/**
 * 주어진 문자열을 정수형 숫자(Integer)로 해석(parsing)하여 반환한다.
 * 반환값은 언제나 10진수이다.
 * @param {string} string - 변환 대상 값
 * @param {number} [radix] - 진법을 나타내는 기수(2 ~ 36, 기본값 10)
 * @returns {number} 변환 결과값
 */
parseInt(string, radix);
~~~

~~~javascript
// 주어진 문자열을 10진수 정수로 해석하여 반환한다.
console.log(parseInt('10'));     // 10
console.log(parseInt('10.123')); // 10
~~~

첫번째 매개변수에 전달된 문자열에 공백이 있다면 첫번째 문자열만 해석하여 반환하며 전후 공백은 무시된다. 만일 첫번째 문자열을 숫자로 해석할 수 없는 경우, NaN을 반환한다.