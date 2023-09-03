const angka = [-1, 9, 8, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// const hasil1 = [];
// const hasil2 = [];
// for
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     hasil3.push(angka[i]);
//   } else {
//     hasil2.push(angka[i]);
//   }
// }
// console.log(hasil1);
// console.log(hasil2);

// filter
// const hasil = angka.filter(function (a) { // a representasi dari array angka
//   return a >= 3;
// });

// arrow function
// const hasil = angka.filter((a) => a >= 3);
// console.log(hasil);

// map
// kalikan semua angka dengan 2

// const hasil = angka.map(function (a) {
//   return a * 2;
// });
// console.log(hasil);

// arrow function
// const hasil = angka.map((a) => a * 2);
// console.log(hasil);

// reduce
// jumlahkan semua array
// 0 +-1 + 9 + 8 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
// const hasil = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(hasil);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a >= 5) // 8,9,9
  .map((a) => a * 3) // 24,27,27
  .reduce((acc, curr) => acc + curr); // 78
console.log(hasil);
