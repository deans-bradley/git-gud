import { Command } from "commander";
import { LogManager } from "../managers/LogManager.js";

export function registerLogCommands(program) {
  const log = new Command("log");

  log
    .command("print")
    .description("Prints commit messages grouped by date.")
    .option("-o, --out <path>", "Path to output file", "commits.txt")
    .action(async (options) => {
      const logManager = new LogManager();
      try {
        await logManager.printLogs(options.out);
        console.log(`✅ Commit log written to ${options.out}`);
      } catch (err) {
        console.error("Could not read git logs:", err.message);
      }
    });

  program.addCommand(log);
}