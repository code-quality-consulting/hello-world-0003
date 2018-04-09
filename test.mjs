/*jslint
    node
*/
import assert from "assert";
import {makeGreeting} from "./index.mjs";



assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("success");
