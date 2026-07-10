/* ----리엑트에서 자주 사용하는 JS---- */
/* -------------------- */
/* ---1. 변수---------- */
/* 
1.1 var
1.2 let : 값의 재할당 가능(변수)
1.3 const : 값의 재할당 불가능(상수)
*/
// {
//   let a = 0;
//   console.log("a를 0으로 초기화");
//   a = 10;
//   console.log("a를 10으로 재할당");
//   const b = "철수";
//   //b = "영희"; //b에 "영희"를 재할당 해도 오류남
//   console.log(b);
//   //const의 배열과 객체
//   const arr = [1, 2, 3];
//   console.log(arr[0]); //1
//   arr[0] = "철수";
//   console.log(arr[0]);
//   arr[2] = "망고";
//   console.log(arr[2]);
//   arr.push("5"); //5라는 값을 배열에 추가
//   console.log(arr);
//   //   arr = [1];
//   //   console.log(arr);
//   /* --------------
// 객체의 값 변경 */
//   const obj = { a: 1 };
//   obj.a = 2; //객체의 속성 값 변경 가능
//   console.log(obj.a);
//   obj.b = 3; //속성 추가도 가능
//   console.log(obj.b);
// }
//sugar syntax(문법적설탕)
/* ------------------ */
/* ----화살표함수(람다함수)--- */
/* ------------------ */
{
  //일반 익명함수
  const add1 = function (a, b) {
    return a + b;
  };
  //화살표함수 - 기본형
  const add2 = (a, b) => {
    return a + b;
  };
  //화살표함수 - 간단한형태
  const add3 = (a, b) => a + b;
  //화살표함수 - 매개변수한개
  const add4 = (a) /* 한 개 일때는 소괄호 생략 가능 */ => a * 2;
  //화살표함수 - 매개변수없다
  const add5 = () /* 매개변수 없을 때는 소괄호 필수 */ => "가나다라";
  //화살표함수 - 반환값객체
  const getUser = (id) => ({ id: id, name: "우뢰매" });
  console.log("add3", add3(5, 80));
  console.log("add4", add4(25432));
  console.log("getUser", getUser(25432));
}
