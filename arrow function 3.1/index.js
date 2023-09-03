// const tampilNama = function (nama) {
//   return `halo ${nama}`;
// };

// console.log(tampilNama);

// arrow function
// const tampilNama = nama => {
//   // 1 parameter tidak perlu pakai kurung
//   return `halo, ${nama}`;
// };
// console.log(tampilNama(`haris nurryanto`));

// // 2 parameter
// const sebutNama = (nama, waktu) => {
//   return `selamat ${waktu}, ${nama}`;
// };

// console.log(sebutNama(`pagi`, `haris`));

// contoh

let Mahasiswa = [`haris nurryanto`, `naufal sidiq`, `rafi salim`];

// let jumlahHuruf = Mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// contoh di dibuat arrow function JUMLAH HURUF

// let jumlahHuruf = Mahasiswa.map((nama) => nama.length);

// console.log(jumlahHuruf);

let jumlahHuruf = Mahasiswa.map((nama) => ({
  nama: nama,
  jmlHuruf: nama.length,
}));

console.table(jumlahHuruf);
