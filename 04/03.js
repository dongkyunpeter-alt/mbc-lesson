//구조분해할당 dstructuring

//객체구조분해
const user = {
  name: "철수",
  age: 20,
  job: "개발자",
};
//기존방식
// const name1 = user.name;
// console.log(name1);
// const age1 = user.age;
// console.log(age1);

//구조분해할당
const { name, age } = user;
console.log(name, age);
console.log(user);

//배열구조분해
const arr = [1, 2, 3, 4, 5];
// const a1 = arr[0];
// const a2 = arr[0 + 1];
// console.log(a1, a2);
const [n, m, r, 굿] = arr;
console.log(n, m, r, 굿);

/* --------------- */
/* -----Spread Operator----- */
/* --------------- */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//배열합체
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//요소, 원소 추가
const arr4 = ["js복습", 0, ...arr1, 4, 5];
console.log(arr4);

// ========== 객체 스프레드 ==========
const user1 = { name: "철수", age: 20 };
// 객체 복사
const userCopy = { ...user1 };
// 속성 추가
const user2 = { ...userCopy, job: "백수희망자" };
console.log(user2);
//속성 덮어쓰기
const user3 = { ...user2, job: "AI크리에이터" };
console.log(user3);

//여러 객체 합치기
const a = { x: 1, y: 2 };
const b = { y: 1, z: 4 };//나중에 쓰여진 값으로 적용
const c = { ...a, ...b };
console.log(c);
