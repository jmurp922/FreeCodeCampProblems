/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

function palindrome(str) {
    str = str.split(/\W|,|''|_/).join('').toLowerCase();
    let backCounter = str.length - 1;
    for (let i = 0; i < str.length; i++) {
      if(str[i] !== str[backCounter]) {
        return false;
      }
      backCounter--;
    }
    return true;
  }
  
  palindrome("eye"); //True
  palindrome("_eye") //True
  palindrome("race car") // True
  palindrome("not a palindrome") // False
  palindrome("A man, a plan, a canal. Panama") //True
  palindrome("never odd or even") // True
  palindrome("nope") //False
  palindrome("almostomla") //False
  palindrome("My age is 0, 0 si ega ym.") //True
  palindrome("1 eye for of 1 eye.")  //False
  palindrome("0_0 (: /-\ :) 0-0") //True
  palindrome("five|\_/|four"); //False