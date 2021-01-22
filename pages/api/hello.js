import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  if (req.method === "GET") {
    res.json({
      name: "Nedim"
    });
  } else {
    res.send("Hello");
  }
  res.end();
});

export default app;
