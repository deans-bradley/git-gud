# **GitGud**

> A simple Node.js CLI tool for managing and viewing local git repos easily.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js->=22.14.0-green.svg)](https://nodejs.org/)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/deans-bradley/git-gud)

## **Installation**

Clone the repo and install it globally:

```bash
npm install -g .
```

Once installed, you can use the `gg` command anywhere.

## **Usage**

### **Print commit logs**

```bash
gg log print
```

By default, it writes the commit messages to `commits.txt` in the current directory.

### **Specify an output file**

```bash
gg log print -o logs.txt
```

or

```bash
gg log print --out ./path/to/output.txt
```

## **Example Output**

```
2025/11/03:
Add: Product model with validation and serialization methods
Refactor: User model to use Address and CommunicationSettings classes for nested data handling
Add: JSDoc typedef for AreaData and constructor documentation

2025/11/02:
Add: CommunicationSettings model with validation and serialization methods
Add: Address model with validation and serialization methods
Fix: Comment description for createAccountComponent function
```

## **File Structure**

```
git-gud/
├── bin/
│   └── gg.js              # CLI entry point
├── src/
│   ├── commands/          # Command definitions
│   │   └── logCommands.js 
│   ├── managers/          # Business logic managers
│   │   └── LogManager.js 
├── config/
│   └── default.json       # Default configuration
└── package.json
```

## **Development**

If you’re working on the project locally:

```bash
npm install
npm link
```

This links the CLI globally so you can test it using:

```bash
gg log print
```

## Acknowledgments

GitGud is built on the shoulders of excellent open-source libraries:

- **[Commander.js](https://github.com/tj/commander.js/)** (v14.0.0) - The complete solution for Node.js command-line interfaces. Powers our CLI framework with robust argument parsing and command structure.
- **[Chalk](https://github.com/chalk/chalk)** (v5.4.1) - Terminal string styling done right. Brings beautiful colors and formatting to our CLI output.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Bradley Deans**
- GitHub: [@deans-bradley](https://github.com/deans-bradley)

## **Change Log**

### 0.0.1 (2025-11-10)
- Initial release
- CLI tool for printing git commit logs
- Output to custom file with `-o` or `--out`
- Uses Commander.js for command parsing
- Uses Chalk for colored output