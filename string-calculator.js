expect = require('chai').expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }
  if ( word === "one" ){
    return 1;
  }
  if ( word === "two" ){
    return 2;
  }
  if (word === "three" ){
    return 3;
  }
  if ( word === "four" ){
    return 4;
  }
  if ( word === "five" ){
    return 5;
  }
  if (word === "six" ){
    return 6;
  }
  if ( word === "seven"){
    return 7;
  }
  if ( word === "eight"){
    return 8;
  }
  if ( word === "nine"){
    return 9;
  }

}


/*expect(toNumber).to.exist;
expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
expect(toNumber("six")).to.equal(6);
expect(toNumber("seven")).to.equal(7);
expect(toNumber("eight")).to.equal(8);
expect(toNumber("nine")).to.equal(9);
*/

function plus(a, b){
  if ( toNumber(a) + toNumber(b) === 0 ){
  return 0;
  }
  if (toNumber(a) + toNumber(b) === 1){
    return 1;
  }
  if ( toNumber(a) + toNumber(b) === 2){
    return 2;
  }
  if ( toNumber(a) + toNumber(b) === 3){
    return 3;
  }
  if ( toNumber(a) + toNumber(b) === 4){
    return 4;
  }
  if ( toNumber(a) + toNumber(b) === 5){
    return 5;
  }
  if ( toNumber(a) + toNumber(b) === 6){
    return 6;
  }
  if ( toNumber(a) + toNumber(b) === 7){
    return 7;
  }
  if ( toNumber(a) + toNumber(b) === 8){
    return 8;
  }
  if ( toNumber(a) + toNumber(b) === 9){
    return 9;
  }
  if ( toNumber(a) + toNumber(b) === 10){
    return 10;
  }
  if ( toNumber(a) + toNumber(b) === 11){
    return 11;
  }
  if ( toNumber(a) + toNumber(b) === 12){
    return 12;
  }
  if ( toNumber(a) + toNumber(b) === 13){
    return 13;
  }
  if ( toNumber(a) + toNumber(b) === 14){
    return 14;
  }
  if ( toNumber(a) + toNumber(b) === 15){
    return 15;
  }
  if ( toNumber(a) + toNumber(b) === 16){
    return 16;
  }if (toNumber(a) + toNumber(b) === 17){
    return 17;
  }
  if (toNumber(a) + toNumber(b) === 18){
    return 18;
  }
  if (toNumber(a) + toNumber(b) === 19){
    return 19;
  }
}

expect(plus).to.exist;
expect(plus( "zero","zero")).to.equal(0);
expect(plus( "zero", "one")).to.equal(1);
expect(plus( "zero", "two")).to.equal(2);
expect(plus( "zero", "three")).to.equal(3);
expect(plus( "zero", "four")).to.equal(4);
expect(plus( "zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);
expect(plus("one", "zero")).to.equal(1);
expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);
expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);
expext(plus("two", "three")).to.equal(5);
expect(plus("two", "four")).to.equal(6);
expect(plus("two", "five")).to.equal(7);
expect(plus("two", "six")).to.equal(8);
expect(plus("two", "eight")).to.equal(9);



console.log(plus("zero" + "zero"));
