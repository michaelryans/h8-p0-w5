function kaliTerusRekursif(angka) {
    // you can only write your code here!
  
    var output = 0;
  
    if (Math.floor(angka/10)===0) {
      return angka;
    } else {
      output = 1;
      while (angka > 0) {
        output = output * (angka%10);
        angka = Math.floor(angka/10);
        //console.log(angka + ' <-- angka || output--> ' +output)
      }
      
      return kaliTerusRekursif(output)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6