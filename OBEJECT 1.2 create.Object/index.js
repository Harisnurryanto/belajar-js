// 1. Object Literal  // PROBLEM = TIDAK efektif untuk objek yang banyak    // WARNING!!
// let mahasiswa = {
//   nama: "Haris Nurryanto",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`selamat makan ${this.nama}, selamat makan!`);
//   },
// };

// 2.Function Declaration

// method MAHASISWA plus/minus
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama}, selamat makan energi anda bertambah`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(
      `hallo ${this.nama}, tolong di perhatikan energi anda berkurang`
    );
    if (this.energi < 0) {
      console.log(`hallo ${this.nama}, perhatikan energi anda sangat bahaya`);
    }
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(
      `hallo ${this.nama}, bagus energi anda bertamah 2 kali lebih banyak`
    );
  },
};

let Mahasiswa = function (nama, energi) {
  let mhs = {};
  mhs.nama = nama; //nama dan energi tampil dari parameter
  mhs.energi = energi;
  mhs.makan = methodMahasiswa.makan;
  mhs.main = methodMahasiswa.main;
  mhs.tidur = methodMahasiswa.tidur;

  return mhs;
};
const Haris = Mahasiswa("haris", 10);
const Irfan = Mahasiswa("Irfan", 30);

// diatas pembuatan object kompleks
// solusi nya dibawah Object.create

// 3.object create

const methodMahasiswa1 = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama}, selamat makan energi anda bertambah`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(
      `hallo ${this.nama}, tolong di perhatikan energi anda berkurang`
    );
    if (this.energi < 0) {
      console.log(`hallo ${this.nama}, perhatikan energi anda sangat bahaya`);
    }
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(
      `hallo ${this.nama}, bagus energi anda bertamah 2 kali lebih banyak`
    );
  },
};

let Mahasiswa1 = function (nama, energi) {
  let mhs = Object.create(methodMahasiswa1); // menampilkan object CREATER
  mhs.nama = nama; //nama dan energi tampil dari parameter
  mhs.energi = energi;

  return mhs;
};

const julie = new Mahasiswa1("julie", 0);
const jenete = new Mahasiswa1("jenete", 0);
