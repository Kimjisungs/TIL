// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
var count = 0;
var MAXNUMBER = 10;

while (count < MAXNUMBER) {
  if (count % 2 === 0) console.log(count);
  count++;
}
