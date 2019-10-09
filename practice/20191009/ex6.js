// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var count = 10;
var MINNUMBER = 0;

while (count > MINNUMBER) {
  if (count % 2 !== 0) console.log(count);
  count--;
}
