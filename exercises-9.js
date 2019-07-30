//Mengenal Penggunaan Function
//Tugas 1
//garis pemisah
console.log('NO:1.------------------------------------');
function shoutOut() {
    return 'Halo Function!'
};

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//Tugas 2
//garis pemisah
console.log('NO:2.------------------------------------');
function  calculateMultiply(x, y) {
    return x * y;
};

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//Tugas 3
//garis pemisah
console.log('NO:3.------------------------------------');
function processSentence(a, b, c, d) {
    return 'Nama saya ' + a + ', umur saya ' + b + ' tahun, alamat saya di ' + c + ', dan saya punya hobby yaitu ' + d + '!';
};

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"