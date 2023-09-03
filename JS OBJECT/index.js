// OBEJCT LITERAL
let mhs = {
  nama: "harisnurryanto",
  nrp: "080820801",
  email: "harisnurryanto11625@gmail.com",
  jurusan: "teknik informatika",
};

// OBJECT DECLARATION
function buatObjectMhs(nama1, nrp1, email1, jurusan1) {
  let mhs = {}; //declaration object
  mhs.kurniawan = nama1;
  mhs.nrp = nrp1;
  mhs.email = email1;
  mhs.jurusan = jurusan1;
  return mhs;
}

const mhs3 = buatObjectMhs(
  "haris",
  "098097908",
  "harisnurryanto@Gmail.com",
  "teknik informatika"
);
const mhs4 = buatObjectMhs(
  "haris",
  "098097908",
  "harisnurryanto@Gmail.com",
  "teknik informatika"
);

// CONSTRUCTOR
function Mahasiswa(nama1, nrp1, email1, jurusan1) {
  // let this = {};
  this.nama = nama1;
  this.nrp = nrp1;
  this.email = email1;
  this.jurusan = jurusan1;
  // return this;
}

const mhs5 = new Mahasiswa( //new WAJIB!!
  "HARIS",
  "0790790",
  "HARIS@gmail.com",
  "teknik mesin"
);
