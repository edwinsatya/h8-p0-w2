//Menggunakan Switch-Case

var tanggal = 17; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 8; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal > 31) {
    console.log('Inputan tgl salah!, input 1 - 31');
} else if (bulan < 1 || bulan > 12) {
    console.log('Inputan bln salah! input 1 - 12');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('Inputan thn salah!, input 1900 - 2200');
} else {
    switch (bulan) {
        case 1: bulan = 'Januari';
        break;
        case 2: bulan = 'Februari';
        break;
        case 3: bulan = 'Maret';
        break;
        case 4: bulan = 'April';
        break;
        case 5: bulan = 'Mei';
        break;
        case 6: bulan = 'Juni';
        break;
        case 7: bulan = 'juli';
        break;
        case 8: bulan = 'Agustus';
        break;
        case 9: bulan = 'September';
        break;
        case 10: bulan = 'Oktober';
        break;
        case 11: bulan = 'November';
        break;
        case 12: bulan = 'Desember';
        break;
        default: 'wrong input'
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun); 
}