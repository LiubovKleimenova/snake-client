
const connect = require("./client");
const setupInput = require("./input.js");
/**
 * Establishes connection with the game server
 */

console.log("Connecting ...");

setupInput(connect());

