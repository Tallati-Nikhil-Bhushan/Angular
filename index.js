// console.log('Start');

// function wait(ms) {
//     const start = Date.now();
//     while (Date.now() - start < ms) {
//     }
//     console.log("Wait");
// }

// wait(2000);

// console.log('End');

console.log('Start');

setTimeout(() => {
    console.log('Wait');
}, 2000);

console.log("End");