var expect = require("chai").expect;
var chat = require("../gawainb.chat/client/views/index.js");

describe("Chat", function(){



	describe("isEmpty()", function(){
		it("it should be empty", function(){
			var results = chat.isEmpty({});

			expect(results).to.equal(" ");
		});
	});
});