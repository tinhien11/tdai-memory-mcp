#!/usr/bin/env node
console.log(`
╔══════════════════════════════════════════════════════════╗
║  tdai-memory-mcp has been renamed to remem-mcp           ║
║                                                          ║
║  To migrate:                                             ║
║    1. npx remem-mcp setup                                ║
║    2. Restart your agent                                 ║
║                                                          ║
║  Your existing memory.db will be found automatically.    ║
║  All data is preserved — same SQLite file, same path.    ║
║                                                          ║
║  https://github.com/tinhien11/remem-mcp                  ║
╚══════════════════════════════════════════════════════════╝
`);
process.exit(0);
