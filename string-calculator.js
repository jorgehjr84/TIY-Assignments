expect = require('chai').expect;

function toNumber(word){
  if (word === "zero"){
    return 0;
  }

}


expect(toNumber).to.exist;
expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
