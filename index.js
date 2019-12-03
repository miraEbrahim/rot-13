
/**
  Test Explaination
  ROT-13 ("rotate by 13 places") is a very basic Caesar cipher where each letter is substituted with the letter 13 places after it in the basic Latin alphabet.
**/

/**
  Required Functionality
    > Numbers and punctuation should be unaffected by the cipher
    > Case should be maintained
    > Special characters (such as accented letters) should be unaffected by the cipher
    > Null input should return an empty string
**/

/**
  Code Explanation
    > We are using charCodeAt() method to return an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

      Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding.

      The ASCII code associates an integer value for each symbol in the character set, such as letters, digits, punctuation marks, special characters, and control characters.

      We are only decoding Uppercase and Lowercase Alphabets and discarding the rest

      The Uppercase Alphabet A to Z ASCII numbers start from 65 till 90
      AND
      The Lowercase Alphabet a to z ASCII numbers start from 97 till 122

      In JavaScript, fromCharCode() is a string method that is used to create a string from a sequence of Unicode values. Because the fromCharCode() method is a static method of the String constructor, it must be invoked through the String constructor object rather than through the particular instance of the String class.

      https://www.techonthenet.com/js/string_fromcharcode.php

    > We will use a for loop to iterate while i is less then the length of the input is true.
      - The for loop runs, starting at the first Character in the input untill the input.lenth < i.
      - We will use if statement inside the for loop:
        -- If input[i].charCodeAt() are between 65 AND 77 OR between 97 AND 109 then add 13 to the number then change the result back to the string representing the ascii number.
        -- If input[i].charCodeAt() are between 78 AND 90 OR between 110 AND 122 then subtract 13 from the number then change the result  back to the string representing the ascii number.
        -- If input[i].charCodeAt() are not the above conditions then the result is the same input with no changes made.
      - since the Alphabet have 25 letters, using the 13-letter Cypher would make us split the letters in half and we add 13 to the first half and remove 13 off the second half.
**/

/**  Solution  **/
rotThirteen = function(input) {
  let result = ''; 
  for (let i = 0; i < input.length; i++){
    let asciiNum = input[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77 || asciiNum >= 97 && asciiNum <= 109) { 
      result += String.fromCharCode(asciiNum + 13)
    }else if(asciiNum >= 78 && asciiNum <= 90 ||asciiNum >= 110 && asciiNum <= 122){
      result += String.fromCharCode(asciiNum - 13);
  } else {
    result += input[i];
  }
}
return result;
};

rotThirteen('The cow jumped over the moon');
rotThirteen("Hello world");
rotThirteen("Goodby world");

//Browser testing
console.log(rotThirteen('The cow jumped over the moon')); //output: Gur pbj whzcrq bire gur zbba
console.log(rotThirteen("Hello world")); //output: Uryyb jbeyq
console.log(rotThirteen("Goodby world")); //output: Tbbqol jbeyq

//alternative 1

const rota13 = input => {
  let result = '';
  for (let i=0; i<input.length;i++){
    let asciiNum = input[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77 || asciiNum >= 97 && asciiNum <= 109) { 
      result += String.fromCharCode(asciiNum + 13)
    }else if(asciiNum >= 78 && asciiNum <= 90 ||asciiNum >= 110 && asciiNum <= 122){
      result += String.fromCharCode(asciiNum - 13);
    }else{
    result += input[i];
    }
  }
  return result;
};

rota13('The cow jumped over the moon');
rota13("Hello world");
rota13("Goodby world");

//Browser testing
console.log(rota13('The cow jumped over the moon')); //output: Gur pbj whzcrq bire gur zbba
console.log(rota13("Hello world")); //output: Uryyb jbeyq
console.log(rota13("Goodby world")); //output: Tbbqol jbeyq



//alternative 2 : Use Multiple Conditional (Ternary) Operators
const rota213 = input => {
  let result = '';
  for (let i = 0; i < input.length; i++){
    let asciiNum = input[i].charCodeAt();
    (asciiNum >= 65 && asciiNum <= 77 || asciiNum >= 97 && asciiNum <= 109)
    ? result += String.fromCharCode(asciiNum + 13)
    :(asciiNum >= 78 && asciiNum <= 90 ||asciiNum >= 110 && asciiNum <= 122)
    ?result += String.fromCharCode(asciiNum - 13)
    : result += input[i];
    }  return result;
};

rota213('The cow jumped over the moon');
rota213("Hello world");
rota213("Goodby world");

//Browser testing
console.log(rota213("The cow jumped over the moon")); //output: Gur pbj whzcrq bire gur zbba
console.log(rota213("Hello world")); //output:Uryyb jbeyq
console.log(rota213("Goodby world")); //output: Tbbqol jbeyq
