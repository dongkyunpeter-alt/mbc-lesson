let a = "안녕"; //=은 우항을 좌항에 할당시킴
console.log(a);
// a = a + "하세요";
a += "하세요"; //+=은 좌항에 우항을 더한 후 좌항에 재할당
a += "?!";
a += "네";
console.log(a);

// 노드 추가
const con = document.querySelector("#container"); //js에서 요소 선택
console.log(con);
con.innerHTML += `<p>💦💦💦</p>`;
con.innerHTML += `<p>미용실</p>`;
