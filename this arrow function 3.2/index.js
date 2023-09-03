// const Mahasiswa = function () {
//   //tidak bisa selalu di gunakan, sesuai kebutuhan
//   this.nama = "haris";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`halo, ${this.nama}, umur anda ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 2000);
// };

// const haris = new Mahasiswa();

// function boxBerubah() {
//   let satu = "size";
//   let dua = "caption";
//   if (box.classList.contains(satu, dua)) {
//     [satu, dua] = [dua, satu];
//   }
//   box.classList.toggle(satu);
//   setTimeout(() => {
//     box.classList.toggle(dua);
//   }, 600);
// }

// function constructor

// this = box this akan mengacu kepada objectnya

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  this.classList.toggle("size");
  console.log(this);
  setTimeout(() => {
    this.classList.toggle("caption");
    console.log(this);
  }, 600);
});
