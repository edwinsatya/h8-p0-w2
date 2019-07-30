//Looping

//1. Menyusun Barisan Bintang
//garis pemisah
console.log('NO:1.------------------------------------');
var rows1 = 5; // input the number of rows

for (var i = 0; i < rows1; i++) {
    console.log('*');
};

//2. Menyusun Barisan Bintang Dengan Nested Looping
//garis pemisah
console.log('NO:2.------------------------------------');
var rows2 = 5; // input the number of rows
var star2 = '';

for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++) {
        star2 += '*'
    }
    console.log(star2);
    star2 = '';
};

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
//garis pemisah
console.log('NO:3.------------------------------------');
var rows3 = 5; // input the number of rows
var star3 = '';

for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
        star3 += '*';
    }
    console.log(star3);
    star3 = '';
};