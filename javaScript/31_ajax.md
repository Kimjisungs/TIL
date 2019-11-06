## Ajax



### JSON

 **JSON은 순수한 텍스트로 구성된 규칙이 있는 데이터 구조이다.**

~~~javascript
{
  "name": "Lee",
  "gender": "male",
  "age": 20,
  "alive": true
}
~~~

### JSON 메소드

1. json.stringify()  : 객체를 json 형식의 문자열로 변환한다.
2. json.pares() : jon 데이터를 가진 문자열을 객체로 변환한다.

> 서버로부터 브라우저로 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 객체화하여야 하는데 이를 역직렬화(Deserializing)이라 한다. 역직렬화를 위해서 내장 객체 JSON의 static 메소드인 JSON.parse를 사용한다.



### XMLHttpRequest

브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송한다. 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리한다.

### Ajax request

~~~javascript
// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
xhr.open('GET', '/users');
// Request를 전송한다
xhr.send();
~~~

1. **서버로의 요청 준비**    

   - XMLHttpRequest.open(method, url[, async])

2. **서버로 전달**  
   GET, POST메소드에 따라 전송방식의 차이가 있다.

   1. URL의 일부분인 쿼리문자열로 데이터를 서버로 전송
   2. POST 메소드의 경우, 데어터를 Request Body에 담아 전송

3. **문서타입 정보 전달**
   content-type은 request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다.

   - xhr.setRequestHeader('Content-type', 'application/json');

   Accept 타입은 서버가 센드백할 데이터의 MIME-type을 Accept로 지정할 수 있다.  
   // 서버가 센드백할 데이터의 MIME-type 지정: json
   xhr.setRequestHeader('Accept', 'application/json');



### Ajax response

**xhr.readyState** 는 .send 메소드를 통해 서버에 Request를 전송하면 서버는 Response를 반환한다. 하지만 언제 Response가 클라이언트에 도달하는지는 알 수 없다. XMLHttpRequest.onreadystatechange는 Response가 클라이언트에 도달하여 발생된 이벤트를 감지하고 콜백 함수를 실행하여 준다. 이때 이벤트는 Request에 어떠한 변화가 발생한 경우 즉 XMLHttpRequest.readyState 프로퍼티가 변경된 경우 발생한다.

### readyState

XMLHttpRequest 객체는 response가 클라이언트에 도달했는지를 추적할 수 있는 프로퍼티를 제공한다. 이 프로퍼티가 바로 XMLHttpRequest.readyState이다. 만일 XMLHttpRequest.readyState의 값이 4인 경우, 정상적으로 Response가 돌아온 경우이다.

| Value | State            | Description                                           |
| :---: | :--------------- | :---------------------------------------------------- |
|   0   | UNSENT           | XMLHttpRequest.open() 메소드 호출 이전                |
|   1   | OPENED           | XMLHttpRequest.open() 메소드 호출 완료                |
|   2   | HEADERS_RECEIVED | XMLHttpRequest.send() 메소드 호출 완료                |
|   3   | LOADING          | 서버 응답 중(XMLHttpRequest.responseText 미완성 상태) |
|   4   | DONE             | 서버 응답 완료                                        |

XMLHttpRequest의.readyState가 4인 경우, 서버 응답이 완료된 상태이므로 이후 XMLHttpRequest.status가 200(정답 응답)임을 확인하고 정상인 경우, XMLHttpRequest.responseText를 취득한다. XMLHttpRequest.responseText에는 서버가 전송한 데이터가 담겨 있다.

### XMLHttpRequest.status

200번 (정상 응답)