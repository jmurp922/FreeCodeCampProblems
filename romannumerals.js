/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case

*/

function convertToRoman(num) {
    const roman = {
      M : 1000,
      CM : 900,
      D : 500,
      CD : 400,
      C : 100,
      XC : 90,
      L : 50,
      XL : 40,
      X : 10,
      IX : 9,
      V : 5,
      IV : 4,
      I : 1
    }
   let output = '';
   for (let prop in roman) {
     while (num >= roman[prop]) {
       output += prop;
       num -= roman[prop];
     }
   }
   return output;
  }
  
  convertToRoman(2); //II
  convertToRoman(3); //III
  convertToRoman(4); //IV
  convertToRoman(5); //V
  convertToRoman(9); //IX
  convertToRoman(12); //XII
  convertToRoman(16); //XVI
  convertToRoman(29); //XXIX
  convertToRoman(44); //XLIV
  convertToRoman(45); //XLV
  convertToRoman(68); //LXVIII
  convertToRoman(83); //LXXXIII
  convertToRoman(97); //XCVII
  convertToRoman(99); //XCIX
  convertToRoman(400); //CD
  convertToRoman(500); //D
  convertToRoman(501); //DI
  convertToRoman(649); //DCXLIX