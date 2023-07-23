import figlet from "figlet";
import { Command } from "commander";

console.log(figlet.textSync("echo-tester"));

const program = new Command();
program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-get, --get  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

if (options.get)