const assert = require("assert");

function makeGreeting(name) {
    if(name) {
         return "Hello " + name + "!";
    }
    return "Hello world!";
}

assert.strictEqual(makeGreeting(),"Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("success");
