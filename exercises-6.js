//Looping

//1. Melakukan Looping Menggunakan While
//garis pemisah
console.log('NO:1.------------------------------------');
var angka1 = 2;

if (angka1 == 2) {
console.log('LOOPING PERTAMA');
    while (angka1 <= 20) {
        console.log(angka1 + ' - I love coding');
        angka1 += 2;
        if (angka1 > 20) {
            console.log('LOOPING KEDUA');
            while (angka1 > 2) {
                angka1 -= 2
                console.log(angka1 + ', I will become fullstack developer');
            } break;
        }
    }
};

//2. Melakukan Looping Menggunakan For
//garis pemisah
console.log('NO:2.------------------------------------');
var angka2 = 1;

if (angka2 == 1){
     console.log('LOOPING PERTAMA');
    for (var i = angka2; i <= 20; i++) {
        console.log(i + ' - I love coding');
        if (i == 20){
            console.log('LOOPING KEDUA');
            for (var j = i; j >= 1; j--) {
                console.log(j + ' - I will become fullstack developer');
            }
        }
    }
};

//3. Angka Ganjil dan Genap
//garis pemisah
console.log('NO:3.------------------------------------');
console.log('-----counter GANJIL dan GENAP-----');
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('counter sekarang = ' + i);
        console.log(i + ' adl bilangan GENAP');
    } else {
        console.log('counter sekarang = ' + i);
        console.log(i + ' adl bilangan GANJIL');
    }
};
console.log('-----counter 2 kelipatan 3-----');
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 == 0) {
        console.log('counter sekarang = ' + i);
        console.log(i + ' KELIPATAN 3');
    } else {
        console.log('counter sekarang = ' + i);
        console.log('""');
    }   
};
console.log('-----counter 5 kelipatan 6-----');
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log('counter sekarang = ' + i);
        console.log(i + ' KELIPATAN 6');
    } else {
        console.log('counter sekarang = ' + i);
        console.log('""');
    }
};
console.log('-----counter 9 kelipatan 10-----');
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log('counter sekarang = ' + i);
        console.log(i + ' KELIPATAN 10');
    } else {
        console.log('counter sekarang = ' + i);
        console.log('""');
    }
};