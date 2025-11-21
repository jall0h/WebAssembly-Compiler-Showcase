// import fs from 'fs';

// const args = process.argv; // Command Line Arguments

// /**
//  * Checks if there are 4 arguments if a program requires .bf input file or 3
//  *
//  */
// const checkArguments = () => {
//   if (args.length === 4 ){
//     if (args[3].split(".")[1] !== "bf"){
//       throw new Error("Incorrect Usage")
//     }
//   }
//   else if (args.length !== 3){
//       throw new Error("Incorrect Usage")
//   }
// }

// /**
//  * Outputs given number to terminal
//  *
//  * @param num - The number to ouput
//  */
// const outputNumber = (num: number) => {
//   process.stdout.write(String(num))
// }

// /**
//  * Outputs character if valid charcode otherwise outputs a the number
//  *
//  * @param charCode - The ASCII Value of a Character
//  */
// const outputChar = (charCode: number) => {
//   if (charCode <= 255) {
//     process.stdout.write(String.fromCharCode(charCode));
//   }
//   else {outputNumber(charCode)}
// }

// /**
//  * Imports functions and executes program
//  *
//  * @param fileName - The file name of the program
//  */
// const execute = async (fileName: string, memory)  => {
//   // Input and Output functions to import to WebAssembly Environment// WebAssembly Memory
//     const importObject = {
//       process: {
//         //Outputs strings to console
//         print_string: (offset, length) => {
//           const arr = new Uint8Array(memory.buffer, offset, length)
//           const string = new TextDecoder("utf8").decode(arr)
//           process.stdout.write(string)
//         },
//         //Outputs integers to console
//         print_int: (num) => {outputNumber(num)},
//         //Outputs integers to consoles
//         print_float: (num) => {outputNumber(num)},
//         print_char: (charCode) => {outputChar(charCode)}
//       },
//     };
//     const wasm = fs.readFileSync(`./src/wasm/${fileName}.wasm`);
//     const function_imports = fs.readFileSync(`./src/wasm/functions.wasm`) // File that contains function imports
//     await WebAssembly.instantiate(function_imports, {...importObject, js: {mem: memory}}).then( async (wasmModule) =>  {
//       const exported_functions = wasmModule.instance.exports
//       await WebAssembly.instantiate(wasm,{...importObject, functions: exported_functions, js: {mem: memory}}).then(module => {
//         const instance = module.instance.exports
//         if (instance.main){
//             const main = instance.main as CallableFunction
//             main()

//           }

//       })
//     });
// }

// checkArguments()
// const file = args[2]; // Program file name
// const times = []
// const run = async () => {
//     const memory = new WebAssembly.Memory({ initial: 10, maximum: 65536 });
//     const startTime = performance.now()
//     await execute(file, memory)
//     const endTime = performance.now()
//     console.log(`Time ${((endTime - startTime) / 1000).toExponential(3)}s`)
// }

// run()
