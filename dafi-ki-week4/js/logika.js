// TUGAS LOGIKA JAVASCRIPT

// 1. Ganjil atau Genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log("SOAL 1");
console.log(`7 = ${ganjilGenap(7)}`);
console.log(`12 = ${ganjilGenap(12)}`);
console.log(`0 = ${ganjilGenap(0)}`);


// 2. Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32;
};

console.log("SOAL 2");
console.log(`0 = ${celsiusKeFahrenheit(0)}`);
console.log(`100 = ${celsiusKeFahrenheit(100)}`);
console.log(`-40 = ${celsiusKeFahrenheit(-40)}`);


// 3. Nilai Terbesar
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log("SOAL 3");
console.log(`5, 9, 2 = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`80, 75, 80 = ${nilaiTerbesar(80, 75, 80)}`);
console.log(`-3, -7, -1 = ${nilaiTerbesar(-3, -7, -1)}`);


// 4. Tahun Kabisat
function tahunKabisat(tahun) {
  return (tahun % 4 === 0 && tahun % 100 !== 0)
    || tahun % 400 === 0;
}

console.log("SOAL 4");
console.log(`2024 = ${tahunKabisat(2024)}`);
console.log(`2026 = ${tahunKabisat(2026)}`);
console.log(`1900 = ${tahunKabisat(1900)}`);
console.log(`2000 = ${tahunKabisat(2000)}`);


// 5. Harga Setelah Diskon
function hargaSetelahDiskon(total) {
  if (total >= 200000) {
    return total * 0.8;
  } else if (total >= 100000) {
    return total * 0.9;
  } else {
    return total;
  }
}

console.log("SOAL 5");
console.log(`250000 = ${hargaSetelahDiskon(250000)}`);
console.log(`100000 = ${hargaSetelahDiskon(100000)}`);
console.log(`75000 = ${hargaSetelahDiskon(75000)}`);
