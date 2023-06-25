const express = require("express");
const path = require("path");
const handleCookieSessions = require("./middleware/handle-cookie-sessions");
const userRouter = require("./routes/userRoutes");
const postRouter = require('./routes/postRoutes')

const app = express();

app.use(handleCookieSessions);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", userRouter);
app.use("/api", postRouter)

app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) next();
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
