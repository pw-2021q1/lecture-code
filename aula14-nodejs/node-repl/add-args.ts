
/**
 * Example of input via command line arguments
 */

if (process.argv.length < 4) {
    console.error("Usage: add-args.ts oper1 oper2")
    process.exit(1)
}

const a = parseInt(process.argv[2])
const b = parseInt(process.argv[3])

if (isNaN(a) || isNaN(b)) {
    console.error("Operands should be numbers")
    process.exit(1)
}

process.stdout.write(`${a} + ${b} = ${a+b}\n`)
// console.log(`${a} + ${b} = ${a+b}`)