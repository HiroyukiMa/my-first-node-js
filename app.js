'use strict';
const number = process.argv[2] || 0; //||(or)は左側がtrueだったら左側がそのまま代入false(nullや0)なら右側を見に行く
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);