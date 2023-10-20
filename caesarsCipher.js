function rot13(str) {
    let arrayOfLetters = str.toUpperCase().split("");
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~',
    conversion = 'NOPQRSTUVWXYZABCDEFGHIJKLM !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';


    let arrayConverted = arrayOfLetters.map( (x) => (conversion[alphabet.indexOf(x)]));
    console.log(arrayConverted.join(""))
    return arrayConverted.join("");
}
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")