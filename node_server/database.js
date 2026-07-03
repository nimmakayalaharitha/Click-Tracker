const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Path to database file
const dbPath = path.join(__dirname, "../database/clicktracker.db");

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("SQLite Database Connected");
    }
});

// Create clicks table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS clicks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tag TEXT,
            text TEXT,
            elementId TEXT,
            class TEXT,
            x INTEGER,
            y INTEGER,
            page TEXT,
            time TEXT
        )
    `);
});

module.exports = db;