
describe("The greet function ", function () {
    it("should greet Amirah correctly", function () {
        assert.equal("Hello, Amirah");
    });
    it("should greet Susan correctly", function () {
        assert.equal("Hello, Susan");
    });
});
describe("The  function ", function () {
    it("", function () {
        assert.equal(", ");
    });
    it("", function () {
        assert.equal(", ");
    });
});
describe("The validateInput function ", function () {
    it("should remove all numbers and special characters from textbox input", function () {
        var instance = GreetFactory();

        assert.equal("Yaanie",instance.validateInput("1234yaanie123456@$#@$@#%@%$#$"));
    });
});