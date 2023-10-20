function convertToRoman(num) {

let arrayOfNumbers = num.toString().split("");

for (let i = arrayOfNumbers.length; i < 4; i++) {
    arrayOfNumbers.unshift('0');
} 

switch (arrayOfNumbers[0]) {
    case '0':
        arrayOfNumbers[0]="";
        break;
    case '1':
        arrayOfNumbers[0]="M";
        break;
    case '2':
        arrayOfNumbers[0]="MM";
        break;
    case '3':
        arrayOfNumbers[0]="MMM";
        break;
    case '4':
        arrayOfNumbers[0]="MMMM";
        break;
    case '5':
        arrayOfNumbers[0]="MMMMM";
        break;
    case '6':
        arrayOfNumbers[0]="MMMMMM";
        break;
    case '7':
        arrayOfNumbers[0]="MMMMMMM";
        break;
    case '8':
        arrayOfNumbers[0]="MMMMMMMM";
        break;
    case '9':
        arrayOfNumbers[0]="MMMMMMMMM";
        break;          
}

switch (arrayOfNumbers[1]) {
    case '0':
        arrayOfNumbers[1]="";
        break;
    case '1':
        arrayOfNumbers[1]="C";
        break;
    case '2':
        arrayOfNumbers[1]="CC";
        break;
    case '3':
        arrayOfNumbers[1]="CCC";
        break;
    case '4':
        arrayOfNumbers[1]="CD";
        break;
    case '5':
        arrayOfNumbers[1]="D";
        break;
    case '6':
        arrayOfNumbers[1]="DC";
        break;
    case '7':
        arrayOfNumbers[1]="DCC";
        break;
    case '8':
        arrayOfNumbers[1]="DCCC";
        break;
    case '9':
        arrayOfNumbers[1]="CM";
        break;          
}

switch (arrayOfNumbers[2]) {
    case '0':
        arrayOfNumbers[2]="";
        break;
    case '1':
        arrayOfNumbers[2]="X";
        break;
    case '2':
        arrayOfNumbers[2]="XX";
        break;
    case '3':
        arrayOfNumbers[2]="XXX";
        break;
    case '4':
        arrayOfNumbers[2]="XL";
        break;
    case '5':
        arrayOfNumbers[2]="L";
        break;
    case '6':
        arrayOfNumbers[2]="LX";
        break;
    case '7':
        arrayOfNumbers[2]="LXX";
        break;
    case '8':
        arrayOfNumbers[2]="LXXX";
        break;
    case '9':
        arrayOfNumbers[2]="XC";
        break;          
}

switch (arrayOfNumbers[3]) {
    case '0':
        arrayOfNumbers[3]="";
        break;
    case '1':
        arrayOfNumbers[3]="I";
        break;
    case '2':
        arrayOfNumbers[3]="II";
        break;
    case '3':
        arrayOfNumbers[3]="III";
        break;
    case '4':
        arrayOfNumbers[3]="IV";
        break;
    case '5':
        arrayOfNumbers[3]="V";
        break;
    case '6':
        arrayOfNumbers[3]="VI";
        break;
    case '7':
        arrayOfNumbers[3]="VII";
        break;
    case '8':
        arrayOfNumbers[3]="VIII";
        break;
    case '9':
        arrayOfNumbers[3]="IX";
        break;          
}

return (arrayOfNumbers.join(""))

}
   
   convertToRoman(36);
   convertToRoman(83);
   convertToRoman(500);
   convertToRoman(1004);
   convertToRoman(2)