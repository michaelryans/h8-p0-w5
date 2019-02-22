function changeVocals (str) {
    //code di sini
    var vocal = 'aiueoAIUEO';
    var ganti = 'bjvfpBJVFP'
    var output= '';
    var final = '';
    var flag = false;

    for ( var i = 0; i < str.length; i++) {
        for ( var j = 0; j < vocal.length; j++) {
          flag = false;
          if (str[i] === vocal[j]) {
              output = output + ganti[j]
              flag = true;
              break;
          } 
        }
        if (flag === false) {
        output = output + str[i]
        }
    }
    return output;
  }

  //changeVocals('halooo')
  
  function reverseWord(str) {
    //code di sini
    var output = ''
    for (var i = str.length - 1; i >= 0; i--) {
        output = output + str[i]
    }
    //console.log(output)
    return output;
  }
  

  function setLowerUpperCase(str) {
    //code di sini
    var temp = ''
    
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        temp = temp + str[i].toLowerCase()
      } else if(str[i] === str[i].toLowerCase()) {
        temp = temp + str[i].toUpperCase()
      } else {
        temp = temp + str[i]
      }
    }
    //console.log(temp)
    return temp;
  }
  
  function removeSpaces (str) {
    //code di sini
    var temp = '';

    for (var i = 0; i < str.length; i ++ ) {
      if ( str[i] === ' ') {
        temp = temp;
      } else {
        temp = temp +str[i];
      }
    }
    //console.log(temp)
    return temp;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    var changedVocal = changeVocals(name);
    var reversedWord = reverseWord(changedVocal);
    var upperLowerChanged = setLowerUpperCase(reversedWord);
    var output = removeSpaces(upperLowerChanged);

    return output;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  
  // console.log(reverseWord('Michael'))
  // console.log(setLowerUpperCase('mIhcael asdfasAAA'))
  // console.log(removeSpaces('mIhcael asdfasAAA'))