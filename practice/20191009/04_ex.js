// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var MAXNUMBER = 10;
for (var i = MAXNUMBER; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
