## 유사 배열 객체와 이터러블 객체

유사 배열 객체(Array-like Object)는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다. 유사 배열 객체는 마치 배열처럼 인덱스를 통해 프로퍼티에 접근할 수 있으며 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수도 있다.



## Array.of

전달된 인수를 요소로 갖는 배열을 생성. Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이덜도 인수를 요소로 갖는 배열을 생성한다.

~~~javascript
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
const arr1 = Array.of(1);
console.log(arr1); // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]
~~~



## Array.form

유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 변환하여 새로운 배열을 생성한다.

~~~javascript
// 문자열은 이터러블이다.
const arr1 = Array.from('Hello');
console.log(arr1); // [ 'H', 'e', 'l', 'l', 'o' ]

// 유사 배열 객체를 새로운 배열을 변환하여 반환한다.
const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log(arr2); // [ 'a', 'b' ]
~~~

Array.from을 사용하면 두번째 인수로 전달한 함수를 통해 값을 만들면서 요소를 채울 수 있다. 두번째 인수로 전달한 함수는 첫번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달받아 새로운 요소를 생성할 수 있다.

~~~javascript
// Array.from의 두번째 인수로 배열의 모든 요소에 대해 호출할 함수를 전달할 수 있다.
// 이 함수는 첫번째 인수에 의해 생성된 배열의 요소값괴 인덱스를 순차적으로 전달받아 호출된다.
const arr3 = Array.from({ length: 5 }, function (v, i) { return i; });
console.log(arr3); // [ 0, 1, 2, 3, 4 ]
~~~

## 배열 요소의 추가와 갱신

인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수(또는 정수 형태의 문자열)를 사용하여야 한다. 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다. 이때 추가된 프로퍼티는 length 프로퍼티의 값에 영향을 주지 않는다.

~~~javascript
const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr['1'] = 2;

// 프로퍼티 추가
arr['foo'] = 3;
arr[1.1] = 4;
arr[-1] = 5;

console.log(arr); // [1, 2, foo: 3, 1.1: 4, -1: 5]

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr.length); // 2
~~~



## 배열 메소드

### Array.isArray

Array.isArray는 주어진 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

###  Array.prototype.push

인수로 전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된 length 값을 반환한다. push 메소드는 원본 배열을 직접 변경한다. push 메소드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 push 메소드보다는 ES6의 Spread 문법을 사용하는 편이 좋다. Spread 문법은 나중에 살펴볼 것이다.

~~~javascript
const arr = [1, 2];

// ES6 Spread 문법
const newArr = [...arr, 3];
// arr.push(3);

console.log(newArr); // [1, 2, 3]
~~~



###  Array.prototype.pop

원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. pop 메소드는 원본 배열을 직접 변경한다.

~~~javascript
const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.pop();
console.log(result); // 2

// pop 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1]
~~~



### Array.prototype.unshift

인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다. unshift 메소드는 원본 배열을 직접 변경한다.

~~~javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 4, 1, 2]
~~~

unshift 메소드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 unshift 메소드보다는 ES6의 Spread 문법을 사용하는 편이 좋다. Spread 문법은 나중에 살펴볼 것이다.

~~~javascript
const arr = [1, 2];

// ES6 Spread 문법
const newArr = [3, ...arr];
// arr.unshift(3);

console.log(newArr); // [3, 1, 2]
~~~

### Array.prototype.concat

인수로 전달된 값들(배열 또는 값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다. 원본 배열은 변경되지 않는다.

### Array.prototype.splice

push, pop, unshift, shift 메소드는 모두 원본 배열을 직접 변경하는 메소드(mutator method)이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다

원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우, splice 메소드를 사용한다. splice 메소드는 3개의 매개변수가 있으며 원본 배열을 직접 변경한다.

~~~javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 10, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
// splice 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
~~~

###  Array.prototype.slice

인수로 전달된 범위의 요소들을 복사하여 반환한다. 원본 배열은 변경되지 않는다. slice 메소드는 2개의 매개변수를 갖는다.

- start : 복사를 시작할 인덱스이다. 음수인 경우, 배열의 끝에서의 인덱스를 나타낸다. 예를 들어 slice(-2)는 배열의 마지막 2개의 요소를 반환한다.
- end : 복사를 종료할 인덱스이다. 이 인덱스에 해당하는 요소는 복사되지 않는다. 옵션이며 기본값은 length 값이다.

~~~javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
let result = arr.slice(0, 1);
console.log(result); // [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
result = arr.slice(1, 2);
console.log(result); // [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]
~~~

### Array.prototype.indexOf

원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

- 중복되는 요소가 있는 경우, 첫번째 인덱스를 반환한다.
- 해당하는 요소가 없는 경우, -1을 반환한다.

~~~javascript
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫번째 인덱스를 반환
arr.indexOf(2);    // -> 1
// 배열 arr에서 요소 4가 없으므로 -1을 반환
arr.indexOf(4);    // -1
// 두번째 인수는 검색을 시작할 인덱스이다. 두번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // 2
~~~



- indexOf 메소드는 배열에 요소가 존재하는지 확인할 때 유용하다.

~~~javascript
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인
if (foods.indexOf('orange') === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가
  foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
~~~

ES7에서 새롭게 도입된 Array.prototype.includes 메소드를 사용하면 보다 가독성이 좋다.

~~~javascript
const foods = ['apple', 'banana'];

// ES7: Array.prototype.includes
// foods 배열에 'orange' 요소가 존재하는지 확인
if (!foods.includes('orange')) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가
  foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
~~~

### Array.prototype.join

원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값, 즉 구분자(separator)로 연결한 문자열을 반환한다. 구분자(separator)는 생략 가능하며 기본 구분자는 ‘,’이다.

~~~javascript
const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열을 반환
let result = arr.join();
console.log(result); // '1,2,3,4';

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열을 반환
result = arr.join('');
console.log(result); // '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환
result = arr.join(':');
console.log(result); // '1:2:3:4'
~~~

### Array.prototype.reverse

배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

~~~javascript
const arr = [1, 2, 3];
const result = arr.reverse();

// reverse 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 2, 1]
// 반환값은 변경된 배열이다.
console.log(result); // [3, 2, 1]
~~~

### Array.prototype.fill

ES6에서 새롭게 도입된 fill 메소드는 인수로 전달 받은 값을 요소로 배열의 처음부터 끝까지 채운다. 이때 원본 배열이 변경된다.

~~~javascript
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0을 요소로 배열의 처음부터 끝까지 채운다.
arr.fill(0);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [0, 0, 0]
~~~

두번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.

~~~javascript
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0를 요소로 배열의 인덱스 1부터 끝까지 채운다.
arr.fill(0, 1);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0]
~~~

세번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.

~~~javascript
const arr = [1, 2, 3, 4, 5];

// 인수로 전달 받은 값 0를 요소로 배열의 인덱스 1부터 3 이전(인덱스 3 미포함)까지 채운다.
arr.fill(0, 1, 3);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0, 4, 5]
~~~

fill 메소드를 사용하면 배열을 생성하면서 특정 값으로 요소를 채울 수 있다.

~~~javascript
const arr = new Array(3);
console.log(arr); // [empty × 3]

// 인수로 전달 받은 값 1을 요소로 배열의 처음부터 끝까지 채운다.
const result = arr.fill(1);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(result); // [1, 1, 1]
// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 1, 1]
~~~

### Array.prototype.includes

ES7에서 새롭게 도입된 includes 메소드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다. 두번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.

~~~javascript
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
let result = arr.includes(2);
console.log(result); // true

// 배열에 요소 100이 포함되어 있는지 확인한다.
result = arr.includes(100);
console.log(result); // false

// 두번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
// 배열에서 요소 1가 포함되어 있는지 인덱스 1부터 확인한다.
result = arr.includes(1, 1);
console.log(result); // false
~~~

배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메소드를 사용하여도 배열 내에 특정 요소가 포함되어 있는지 확인할 수 있다. 하지만 indexOf 메소드는 결과값 -1을 비교해 보아야 하고 배열에 NaN이 포함되어 있는지 확인할 수 없는 문제가 있다

~~~javascript
console.log([NaN].indexOf(NaN) !== -1); // false
console.log([NaN].includes(NaN)); // true
~~~

### Array.prototype.sort

sort 메소드는 배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다. sort 메소드는 기본적으로 오름차순으로 요소를 정렬한다.

~~~javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']
~~~

한글 문자열인 요소도 오름차순으로 정렬된다.

~~~javascript
const fruits = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['바나나', '사과', '오렌지']
~~~

sort 메소드는 기본적으로 오름차순으로 요소를 정렬한다. 따라서 내림차순으로 요소를 정렬하려면 sort 메소드로 오름차순으로 정렬한 후, reverse 메소드를 사용하여 요소의 순서를 뒤집는다.

~~~~javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// 내림차순(descending) 정렬
fruits.reverse();

// reverse 메소드도 원본 배열을 직접 변경한다.
console.log(fruits); // ['Orange', 'Banana', 'Apple']
~~~~

숫자 요소들로 이루어진 배열을 정렬할 때는 주의가 필요하다. 아래 예제를 살펴보자.

~~~~javascript
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

// 숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
console.log(points); // [1, 10, 100, 2, 25, 40, 5]
~~~~

sort 메소드의 기본 정렬 순서는 문자열 Unicode 코드([한글 인코딩의 이해 1편: 한글 인코딩의 역사와 유니코드](https://d2.naver.com/helloworld/19187) 참고) 포인트 순서에 따른다. 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후, 정렬한다.

예를 들어, 문자열 ‘1’의 Unicode 코드 포인트는 U+0031, 문자열 ‘2’의 Unicode 코드 포인트는 U+0032이다. 따라서 문자열 ‘1’의 Unicode 코드 포인트 순서가 문자열 ‘2’의 Unicode 코드 포인트 순서보다 앞서므로 1과 2를 sort 메소드로 정렬하면 1이 2보다 앞으로 정렬된다. 하지만 문자열 ‘10’의 Unicode 코드 포인트는 U+0031U+0030이므로 2와 10를 sort 메소드로 정렬하면 10이 2보다 앞으로 정렬된다.

따라서 숫자 요소를 정렬하기 위해서는 sort 메소드에 정렬 순서를 정의하는 비교 함수를 인수로 전달한다. 비교 함수를 생략하면 배열의 각 요소는 일시적으로 문자열로 변환되어 Unicode 코드 포인트 순서에 따라 정렬된다.

~~~javascript
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort(function (a, b) { return a - b; });
// ES6 화살표 함수
// points.sort((a, b) => a - b);
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
// ES6 화살표 함수
// points.sort((a, b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
~~~

객체를 요소로 갖는 배열을 정렬하는 예제는 아래와 같다.

~~~javascript
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// 비교 함수
function compare(key) {
  return function (a, b) {
    // 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
    return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
  };
}

// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);
/*
[
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
  { id: 4, content: 'JavaScript' }
]
*/

// content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 4, content: 'JavaScript' }
]
*/
~~~

> Array.prototype.sort 메서드의 알고리즘
>
> Array.prototype.sort 메서드는 10개 이상의 요소가 있는 배열을 정렬할 때 불안정하다고 알려진 [quicksort 알고리즘](https://en.wikipedia.org/wiki/Quicksort)을 사용했었다. ECMAScript 2019(ES10)에서는 배열이 올바르게 정렬되도록 [Timsort 알고리즘](https://en.wikipedia.org/wiki/Timsort)을 적용하도록 변경되었다.



### Array.prototype.forEach

forEach 메소드는 for 문을 대체할 수 있는 메소드이다. 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한다.

~~~javascript
const numbers = [1, 2, 3];
let pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows); // [1, 4, 9]

pows = [];

// forEach 메소드로 순회
numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [1, 4, 9]
~~~

forEach 메소드의 콜백 함수는 요소값, 인덱스, forEach 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

~~~javascript
// forEach 메소드는 전달받은 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, self) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${self}`);
});
/*
요소값: 1, 인덱스: 0, this: 1,2,3
요소값: 2, 인덱스: 1, this: 1,2,3
요소값: 3, 인덱스: 2, this: 1,2,3
*/
~~~

forEach 메소드의 반환값은 언제나 undefined이다.

### Array.prototype.filter

filter 메소드는 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한다. 그리고 콜백 함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.

~~~javascript
const numbers = [1, 2, 3, 4, 5];

// 홀수만을 필터링한다 (1은 true로 평가된다)
const odds = numbers.filter(item => item % 2);

console.log(odds); // [1, 3, 5]
~~~

forEach, map 메소드와 마찬가지로 filter 메소드에 두번째 인자로 filter 메소드 내부에서 this로 사용될 객체를 전달할 수 있다. 보다 나은 방법은 화살표 함수를 사용하는 것이다.

filter 메소드는 배열의 특정 요소를 추출하기 위해 사용할 수 있지만 배열의 특정 요소를 제거하기 위해 사용할 수도 있다.

~~~javascript
class Users {
  constructor() {
    this.users = [
      { id: 1, name: 'Lee' },
      { id: 2, name: 'Kim' }
    ];
  }

  // 요소 추출
  findById(id) {
    // id가 일치하는 사용자만 반환
    return this.users.filter(user => user.id === id);
  }

  // 요소 제거
  remove(id) {
    // id가 일치하지 않는 사용자를 모두 반환
    this.users = this.users.filter(user => user.id !== id);
  }
}

const users = new Users();

let user = users.findById(1);
console.log(user); // [{ id: 1, name: 'Lee' }]

users.remove(1);

user = users.findById(1);
console.log(user); // []
~~~



### Array.prototype.map

map 메소드는 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한다. 그리고 콜백 함수의 반환한 값들이 요소로서 추가된 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.

~~~javascript
const numbers = [1, 4, 9];

// 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한다.
// 그리고 콜백 함수의 반환한 값들이 요소로서 추가된 새로운 배열을 반환한다.
const roots = numbers.map(item => Math.sqrt(item));

// 위 코드의 축약표현은 아래와 같다.
// const roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]
~~~

