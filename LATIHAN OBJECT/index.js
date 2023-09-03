// membuat objeck angkot

function Angkot(sopir, tujuan, penumpang, kas) {
  this.sopir = sopir;
  this.tujuan = tujuan;
  this.penumpang = penumpang;
  this.kas = kas;

  // penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  // penumpang turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("penumpang sedang kosong");
      return false;
    }

    let i;
    for (i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

const angkot1 = new Angkot("haris", ["kalibata-tebet"], [], "Rp.0");
const angkot2 = new Angkot("opal", ["kalibata-mampang"], [], "Rp.0");
