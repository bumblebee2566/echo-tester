"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = require("commander");
console.log(figlet_1.default.textSync("echo-tester"));
var program = new commander_1.Command();
program
    .version("1.0.0")
    .description("An example CLI for managing a directory")
    .option("-get, --get  [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);
var options = program.opts();
if (options.get) {
    console.log('get');
}
