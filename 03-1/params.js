/* 두 수를 더하는 함수 */
function addNum(num1, num2) {
  //sum은 지역변수(함수 내부에서 선언된 함수)이므로 addNum함수 밖에서 읽히지 않음
  const sum = num1 + num2;
  //return은 sum의 값을 함수 밖으로 전달 후 함수를 종료
  return sum;
  /* sum은 외부로 전달 후 종료 되었으므로 값이 나오지 않음
  return위에 있으면 값이 나옴 */
  console.log("sum", sum);
}
// addNum(1, 2);
document.write(`addNum함수 실행결과 = ${addNum(1, 2)}`);
