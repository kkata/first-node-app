const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

// console.log("Total " + totalMemory);

console.log(`Total Memofy: ${totalMemory}`);
console.log(`Total Memofy: ${freeMemory}`);
