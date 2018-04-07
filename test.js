const assert = require("assert");

function makeGreeting() {
    return "Hello world!";
}

assert.strictEqual(makeGreeting(),"Hello world!");
console.log("success");
