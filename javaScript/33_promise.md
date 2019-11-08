## 프로미스란?

자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 하지만 전통적인 콜백 패턴은 가독성이 나쁘고 비동기 처리 중 발생한 **에러의 예외 처리가 곤란**하며 여러 개의 비동기 처리 로직을 한꺼번에 처리하는 것도 한계가 있다. 

Promise는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현한다.

### 프로미스의 생성

생성자 함수를 인스턴스화한다. 콜백 함수를 인자로 전달받는다.

~~~javascript
const promise = new Promise((resolve, reject)) => {}

resolve(xhr.response); // Success

reject(new Error(xhr.status)) //Failed

~~~

1. pending : 아직 호출되지 않은 상태
2. fulfilled :  resove 함수가 호출된 상태
3. rejected : reject 함수가 호출된 상태
4. settled : resolve, 혹은 reject 함수가 호출된 상태

### 프로미스 후속 처리 메소드

**then**  
then 메소드는 두개의 콜백 함수를 인자로 전달 받는다. 첫 번째 콜백 함수는 성공(fullfilled, resolve 함수가 호출된 상태), 두번째 함수는 실패(rejected, reject 함수가 호출된 상태)시 호출된다. them메소드는Promise를 반환한다.

**catch**

예외가 발생하면 호출된다. catch 메소드는 Promise를 반환한다.

### 프로미스의 에러 처리

위 예제의 비동기 함수 get은 Promise 객체를 반환한다. Promise 객체의 후속 처리 메소드를 사용하여 비동기 처리 결과에 대한 후속 처리를 수행한다. 비동기 처리 시 발생한 에러 메시지는 then 메소드의 두 번째 콜백 함수로 전달된다. Promise 객체의 후속 처리 메소드 catch을 사용하여도 에러를 처리할 수 있다.

### 프로미스의 정적 메소드

#### Promise.resolve/Promise.reject

Promise.resolve와 Promise.reject 메소드는 존재하는 값을 Promise로 래핑하기 위해 사용한다.

정적 메소드 Promise.resolve 메소드는 인자로 전달된 값을 resolve하는 Promise를 생성한다.

####  Promise.all

Promise.all 메소드는 프로미스가 담겨 있는 배열 등의 [이터러블](https://poiemaweb.com/es6-iteration-for-of)을 인자로 전달 받는다. 그리고 전달받은 모든 프로미스를 병렬로 처리하고 그 처리 결과를 resolve하는 새로운 프로미스를 반환한다. 아래 예제를 살펴보자.

#### Promise.race

Promise.race 메소드는 Promise.all 메소드와 동일하게 프로미스가 담겨 있는 배열 등의 [이터러블](https://poiemaweb.com/es6-iteration-for-of)을 인자로 전달 받는다. 그리고 Promise.race 메소드는 Promise.all 메소드처럼 모든 프로미스를 병렬 처리하는 것이 아니라 가장 먼저 처리된 프로미스가 resolve한 처리 결과를 resolve하는 새로운 프로미스를 반환한다.