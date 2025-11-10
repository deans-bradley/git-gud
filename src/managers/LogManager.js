import { exec } from "child_process";
import fs from "fs/promises";

export class LogManager {
  async getGitLog() {
    return new Promise((resolve, reject) => {
      exec('git log --pretty=format:"%ad|%s" --date=short', (err, stdout) => {
        if (err) return reject(new Error("Not a valid git repository."));
        const lines = stdout.trim().split("\n");
        const commits = lines.map(line => {
          const [date, message] = line.split("|");
          return { date: date.trim(), message: message.trim() };
        });
        resolve(commits);
      });
    });
  }

  async printLogs(outputPath) {
    const commits = await this.getGitLog();
    const grouped = commits.reduce((acc, { date, message }) => {
      acc[date] = acc[date] || [];
      acc[date].push(message);
      return acc;
    }, {});

    const sortedDates = Object.keys(grouped).sort().reverse();
    let output = "";

    for (const date of sortedDates) {
      const formattedDate = date.replace(/-/g, "/");
      output += `${formattedDate}:\n`;
      output += grouped[date].map(msg => `${msg}`).join("\n");
      output += "\n\n";
    }

    await fs.writeFile(outputPath, output, "utf8");
  }
}