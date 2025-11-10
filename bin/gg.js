#!/usr/bin/env node

import { Command } from "commander";
import { registerLogCommands } from "../src/commands/logCommands.js";

const program = new Command();

program
  .name("gg")
  .description("Git Gud — a CLI to work smarter with git logs.")
  .version("1.0.0");

registerLogCommands(program);

program.parse(process.argv);