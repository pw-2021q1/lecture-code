/**
 * Example of input via CLI prompt
 */

import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Sum two numbers")
// access to stdin in async
rl.question("a: ", function (a: string) {
    rl.question("b: ", function (b: string) {
        const aN = parseInt(a)
        const bN = parseInt(b)
        if (isNaN(aN) || isNaN(bN)) {
            console.error("Operands should be numbers")
        } else {
            console.log(`${a} + ${b} = ${aN + bN}`)
            rl.close()
        }
    })
})

rl.once("close", function () {
    console.log("Bye!")
})
