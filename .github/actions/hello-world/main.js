const core = require('@actions/core');

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log('hello, ${ firstGreeting }');
console.log('hello, ${ secondGreeting }');

if (thirdGreeting) {
    console.log('hello, ${ thirdGreeting }');
}
console.log("Hello world!");
