## REST API 중심 규칙

GET, POS, PUT, PATCH, DLETE / 명사(ex_ todos)

### HTTP MEthod

주로 5가지의 Method(GET, POST, PUT, PATCH, DELETE)를 사용하여 CRUD를 구현한다.

| Method | Action         | 역할                     |
| :----- | :------------- | :----------------------- |
| GET    | index/retrieve | 모든/특정 리소스를 조회  |
| POST   | create         | 리소스를 생성            |
| PUT    | update all     | **리소스의 전체를 갱신** |
| PATCH  | update         | **리소스의 일부를 갱신** |
| DELETE | delete         | 리소스를 삭제            |

