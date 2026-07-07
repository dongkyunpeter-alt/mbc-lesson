let x = 7 > 6;
let y = 1 > 8;
console.log(`7이 6보다 크고 1이 8보다 크면 논리값은? <hr>`);
console.log(`${x && y}`);//모두 True일 경우에만 True
console.log(`7이 6보다 크거나 1이 8보다 크면 논리값은? <hr>`);
console.log(`${x || y}`);//x 또는 y가 True일 경우 True
console.log(`7이 6보다 크지 않으면의 논리값은? ${!(7>6)}`);//True이면 False, False이면 True

