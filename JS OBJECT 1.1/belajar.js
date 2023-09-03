// Cara untuk membuat Object
// 1. Object Literal  // PROBLEM = TIDAK efektif untuk objek yang banyak    // WARNING!!
let mahasiswa = {
  nama: "Haris Nurryanto",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`selamat makan ${this.nama}, selamat makan!`);
  },
};

// 2.Function Declaration

let Mahasiswa = function (nama, energi) {
  let mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;
  mhs.makan = function (porsi) {
    mhs.energi = this.energi + porsi;
    console.log(`hallo ${mhs.nama} selamat makan!`);
  };

  mhs.bermain = function (main) {
    mhs.energi = this.energi - main;
    console.log(`hallo ${mhs.nama} energi anda berkurang`);
  };

  return mhs;
};
const Haris = Mahasiswa("haris", 10);
const Irfan = Mahasiswa("Irfan", 30);

// 3.Constructor Function

let Mahasiswa1 = function (nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama} energi anda bertambah`);
  };

  this.berantem = function (hit) {
    this.energi -= hit;
    console.log(`halo ${this.nama} energi anda berkurang`);
  };
};

const julie = new Mahasiswa1("julie", 0);
const jenete = new Mahasiswa1("jenete", 0);
// 4.Object.create
