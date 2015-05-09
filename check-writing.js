/*When you write a check , to validate the amount,
you have to write the english words for the amount on a separate line.
For example check for $123.45
has a line with

one hundred twenty three and 45/100s dollars

Given a function 'toEnglish' that accepts a Javascript 'number' and returns a 'string' formatted for use on a check, as above.
*/

var expect = require ('chai').expect;

function toEnglish(number){
  if ( number === 0){
    return "zero";
  }
  //????
}

// Test cases here....
expect(toEnglish).to.exist;
expect(toEnglish(0)).to.equal("zero")

console.log(toEnglish(0));
