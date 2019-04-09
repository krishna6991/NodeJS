
var except = require("chai").except;
var tools = require("./lib/tools");


describe("Tools", function(){

describe("printName()", function{
	it("should print the last name first", function(){
		var results = tools.printName({first: "Krishna", last:"Pandey"});
		expect(results).to.equal("Pandey, Krishna");
	});
});

	describe("loadWiki()", function{
		it("Load Abraham Lincoin' wikipedia page.");
	});
});