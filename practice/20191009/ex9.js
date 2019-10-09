// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var MAXNUMBER = 20;
var count = 0;
for (var i = 0; i < MAXNUMBER; i++) {
  if(i % 2 === 0 || i % 3 === 0) {
    count += i;
  }
}
console.log(count);

