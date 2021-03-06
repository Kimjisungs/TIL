## 클로져

클로저는 함수와 그 함수가 선언된 렉시컬 환경(Lexical environment)과의 조합이다.

“함수가 선언된 렉시컬 환경(Lexical environment)”



## 렉시컬 스코프

자바스크립트 함수를 어디서 호출했는지가아니라 **어디에 정의했는지에 따라 상위 스코프를 결정한다.** 이를 **렉시컬 스코프(정적 스코프)** 라고한다.

~~~javascript
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
~~~

스코프의 실체는 실행 컨텍스트의 렉시컬 환경(Lexical environment)이다. 이 렉시컬 환경은 자신의 “외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)”를 통해 상위 렉시컬 환경과 연결된다. 이것이 바로 스코프 체인이다.

**렉시컬 환경의 “외부 렉시컬 환경에 대한 참조”에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다. 이것이 바로 렉시컬 스코프이다**

### 함수 객체의 내부 슬롯

**함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경, 즉 렉시컬 스코프의 참조를 저장한다.**

**함수 객체의 내부 슬롯 [[Environment]]에 저장한 현재 실행 중인 실행 컨텍스트의 렉시컬 환경의 참조가 바로 상위 스코프이다. 또한 자신이 호출되었을 때 생성될 렉시컬 환경의 “외부 렉시컬 환경에 대한 참조”에 저장될 참조값이다. 함수 객체는 내부 슬롯 [[Environment]]에 저장한 렉시컬 환경의 참조, 즉 상위 스코프를 자신이 존재하는 한 기억한다.**

### 클로져

이처럼 자신을 포함하고 있는 외부 함수보다 중첩 함수가 더 오래 유지되는 경우, 외부 함수 밖에서 중첩 함수가 호출되더라도 외부 함수의 식별자에 접근할 수 있는 함수를 일반적으로 클로저(closure)라고 부른다.

이처럼 클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.

이론적으로 클로저는 상위 스코프를 기억해야 하므로 불필요한 메모리의 점유를 걱정할 수도 있겠다. 하지만 모던 자바스크립트 엔진은 최적화가 잘 되어 있어서 클로저가 참조하고 있지 않는 식별자는 기억하지 않는다. 즉, 상위 스코프의 식별자 중에서 기억해야 할 식별자만 기억한다. 기억해야 할 식별자를 기억하는 것은 낭비라고 볼 수 없다. 따라서 클로저의 메모리 낭비는 걱정하지 않아도 된다.

클로저는 자바스크립트의 강력한 기능으로 적극적으로 사용해야 한다. 클로저가 유용하게 사용되는 상황에 대해 살펴보자.

