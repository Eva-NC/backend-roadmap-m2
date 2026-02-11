// Mengambil mocul redline untuk fitur input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Memulai aplikasi dengan bertanya nama
readline.question('siapa nama kamu?', (inputNama) => {
    // Deklarasi Variablet
let nama = 'Adib';
let umur = 20;
let isHobbyCoding = true;
let TahunSekarang = 2026;
let TahunLahir = TahunSekarang - umur

// menampilkan seluruh deklarasi
console.log(`\nHalo ${nama}! Selamat datang di kelas Backend.`);
console.log(`umur saya sekarang adalah ${umur}`);

// opearsi matematika menghitung tahun lahir
console.log(`Saya lahir pada tahun ${TahunLahir}`)

// menampilkasan status hobi
if (isHobbyCoding) {
    console.log (`Hobi saya adalah mengoding pemrogramannn`)
}

// menutup inferface redline
readline.close()
});

