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