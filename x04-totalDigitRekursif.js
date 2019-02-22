function totalDigitRekursif(angka) {
    // you can only write your code here!
    var mod = 0;
  
    if (angka <= 0) {
      return 0;
    } else {
      mod = angka%10;
      angka = Math.floor(angka/10)
      return mod + totalDigitRekursif(angka)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5