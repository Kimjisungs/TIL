## Spread 문법

ES6에서 새롭게 도입된 Spread 문법(전개 문법) …은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서(전개, 분산하여, spread) 개별적인 값들의 목록으로 만든다.

이처럼 Spread 문법의 결과물은 단독으로 사용할 수 없고, 아래와 같이 쉼표로 구분한 값의 목록을 사용하는 문에서 사용한다.

- 함수 호출문의 인수 목록
- 배열 리터럴의 요소 목록
- 객체 리터럴의 프로퍼티 목록 (2019년 9월 현재 Stage 4 제안)

### 2.1. concat

~~~javascript
// ES5
var arr = [1,2].concat([3,4]);
console.log(arr); //[1,2,3,4]
~~~

Spread 문법을 사용하면 별도의 메소드를 사용하지 않고 배열 리터럴 만으로 기존의 배열 요소들을 새로운 배열의 일부로 만들 수 있다.

~~~javascript
//ES6
const arr = [...[1,2],3,4];
console.log(arr) // [1,2,3,4];
~~~



### 2.2 push

~~~javascript
// ES5
var arr1 = [1,2];
var arr2 = [3,4];

Array.prototype.push.apply(arr1,arr2);
console.log(arr1); //[1,2,3,4]
~~~

Spread문법을 사용하면 보다 간편하게 표현할 수 있다.

~~~javascript
// ES6
const arr1 = [1,2];
const arr2 = [3,4];

//const arr3 = [...arr1,...arr2];
arr1.push(...arr2);
console.log(arr1); //[1,2,3,4]
~~~

### 배열복사

ES5에서 기존의 배열을 복사하기 위해서는 slice 메소드를 사용한다.

~~~javascript
// ES5
var origin = [1,2];
var copy = origin.slice();

console.log(copy); //1,2
console.log(copy === origin) //false
~~~

Spread 문법을 사용하면 보다 간편하게 배열을 복사할 수 있다.

~~~javascript
// ES6
const origin = [1,2];
const copy = [...origin];

console.log(copy); //[1,2]
console.log(copy === origin); false
~~~

이때 원본 배열의 각 요소를 얕은 복사(shallow copy)하여 새로운 복사본을 생성한다. 이는 slice 메소드도 마찬가지다.

### 2.5. 유사 배열 객체를 배열로 변환

유사 배열 객체(Array-like object)를 배열로 변환하려면 slice 메소드를 apply 함수로 호출하는 것이 일반적이다.

~~~javascript
// ES5
function sum() {
  // 유사 배열 객체인 arguments를 배열로 변환
  var args = Array.prototype.slice.apply(arguments);

  return args.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3)); // 6
~~~

Spread 문법을 사용하면 보다 간편하게 유사 배열 객체를 배열로 변환할 수 있다.

~~~javascript
// ES6
function sum() {
  // 유사 배열 객체인 arguments를 배열로 변환
  const args = [...arguments];

  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
~~~

### 객체 리터럴 내부에서 사용하는 경우

~~~javascript
// Spread 프로퍼티
const n = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
~~~

Spread 프로퍼티는 Object.assign 메소드를 대체할 수 있는 간편한 문법이다.

~~~javascript
// 객체의 병합
// 프로퍼티가 중복되는 경우, 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
~~~



*feat* 피연산자의 정해진것에대해 값을 만들어내야함.  

스프래드는 배열과 유사배열객체에 사용할 수 있다. 이터러블이다.  

여러개의 값을 자료구조로 모아서 하나의 값으로 취급하려는것.  객체로 넘기면 순서를 맞춰서 할 필요는 없음. 

spread는 푼다.  [1,2,3] -> 1,2,3 연산자가 아니다.  변수에 할당할 수 없다. 엄격하게 따졌을때 spread연산자라고 부르면 안된다. 

spared문법은 쓸수 있는 문맥이 정해져있다.

함수호출에 인수 부분만 사용할 수 잇다. 배열 리털럴 안에 컴마로 구분된곳 안에서, 객체리터럴 내부 컴마로 구분되어 있을때 사용할 수있다. 

~~~
// 배열일때.
const arr = [1,2,3];
const maxValue = Max.max(arr);
//어떨때 풀어야하는가
console.log(maxValue); //NaN
~~~



매개변수의 ...은 Rest파라미터 이다. 

매개변수에서 사용할때 Rest이다. 풀어져있는것을 모은다. 

concat은 풀어서 모은다 라는 의미.

spread는 얕은 복사. 

객체내에서 spread문법을 사용할 수 있다.

