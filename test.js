const assert = require("assert");

function makeGreeting() {
    return "Hello world!";
}

assert.strictEqual(makeGreeting(),"Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("success");
