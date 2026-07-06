const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Click Tracker Server is Running!");
});

// Get all clicks
app.get("/clicks", (req, res) => {

    db.all("SELECT * FROM clicks", [], (err, rows) => {

        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(rows);

    });

});

// Save click
app.post("/click", (req, res) => {

    const click = req.body;

    db.run(
        `INSERT INTO clicks
        (tag, text, elementId, class, x, y, page, time)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            click.tag,
            click.text,
            click.id,
            click.class,
            click.x,
            click.y,
            click.page,
            click.time
        ],
        function (err) {

            if (err) {
                console.error("Database Error:", err.message);
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "Click Saved Successfully"
            });

        }
    );

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});