const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/status", (req, res) => {
  const filePath = path.join(
    "C:\\Users\\Aviad\\Desktop\\New folder (4)",
    "ping_results.txt"
  );

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const lines = fileContent
      .split("\n")
      .map((line) => line.trim().replace(/[\u0000\r]/g, ""));
    res.json(lines);
  } catch (error) {
    console.log("Error reading file:", error);
    res.status(500).json({ message: "Error reading file" });
  }
});

app.listen(3001, () =>
  console.log("Server listening at http://localhost:3001")
);
