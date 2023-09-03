// object prototype

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama} selamat makana, energi anda bertambah`);
//   },

//   main: function (jam) {
//     this.energi -= jam * 2;
//     console.log(`halo ${this.nama} energi berkurang dan sudah waktunya tidur`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 3;
//     console.log(`halo ${this.nama} selamat pagi, energi anda bertambah`);
//   },
// };

// prototype;

// function Mahasiswa(nama, energi, jurusan) {
//   this.nama = nama;
//   this.energi = energi;
//   this.jurusan = jurusan;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama} selamat makan`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama} energi anda berkurang`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama} energi anda bertambah`;
// };
// const haris = new Mahasiswa("haris", 0, "INFORMATIKA");

// class version

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama} selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama} energi anda berkurang`;
  }
  tidur(jam) {
    this.energi += jam;
    return `halo ${this.nama} energi anda bertambah`;
  }
}
const haris = new Mahasiswa("haris", 0);

console.log(sayHello());

var nama = "haris";
var umur = "18";

function sayHello() {
  return `hallo, nama saya: ${nama}, dan umur saya: ${umur}`;
}
