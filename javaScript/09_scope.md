## 스코프란?

스코프(Scope, 유효범위)는 자바스크립트를 포함한 모든 프로그래밍 언어의 기본적이며 중요한 개념이다. 스코프의 이해가 부족하면 다른 개념을 이해하기 어려울 수 있다. 더욱이 자바스크립트의 스코프는 다른 언어의 스코프와 다르게 동작하므로 주의가 필요하다. 그리고 var 키워드로 선언한 변수와 let 또는 const 키워드로 선언한 변수의 스코프도 다르게 동작한다. 스코프는 변수 그리고 함수와 깊은 관련이 있다.

**모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 이를 스코프(Scope, 유효범위)라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.**

## 스코프의 종류

코드는 전역(global)과 지역(local)으로 구분할 수 있다.

| 구분 | 설명                  | 스코프      | 변수      |
| :--: | :-------------------- | :---------- | :-------- |
| 전역 | 코드의 가장 바깥 영역 | 전역 스코프 | 전역 변수 |
| 지역 | 함수 몸체 내부        | 지역 스코프 | 지역 변수 |

## 스코프 체인

함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다. 이는 **스코프는 함수의 중첩에 의해 계층적 구조를 갖는다**는 것을 의미한다. 다시 말해 중첩 함수의 지역 스코프는 중첩 함수를 포함하는 외부 함수의 지역 스코프와 계층적 구조를 갖는다. 이때 외부 함수의 지역 스코프를 중첩 함수의 상위 스코프라 한다.

**변수를 참조할 때, 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.** 이를 통해 상위 스코프에서 선언한 변수를 하위 스코프에서도 참조할 수 있다.

## 함수 레벨 스코프

지역은 함수 몸체 내부를 말하고 지역은 지역 스코프를 만든다고 했다. 이는 **코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다**는 의미이다.

C나 Java 등 대부분의 프로그래밍 언어는 함수 몸체 만이 아니라 모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만든다. 이러한 특성을 **블록 레벨 스코프(Block level scope)**라 한다. 하지만 **var 키워드로 선언된 변수는 오로지 함수의 코드 블록 만을 지역 스코프로 인정한다.** 이러한 특성을 **함수 레벨 스코프(Function level scope)**라 한다.

> ES6에서 도입된 let, const 키워드는 블록 레벨 스코프를 지원한다.

## 렉시컬 스코프

1. **함수를 어디서 호출**했는지에 따라 함수의 상위 스코프를 결정한다.
2. **함수를 어디서 정의**했는지에 따라 함수의 상위 스코프를 결정한다.

## 암묵적 전역 변수

~~~javascript
function foo() {
  // 선언하지 않은 변수에 값을 할당하면 암묵적 전역 변수가 된다.
  x = 10;
}

foo();

console.log(x); // 10
~~~



위 처럼 **선언하지 않은 변수에 값을 할당하면 자바스크립트 엔진은 아무런 에러없이 암묵적으로 전역 변수를 선언하고 값을 할당한다.**