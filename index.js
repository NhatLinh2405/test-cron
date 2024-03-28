import express from "express";
import { startCronJob } from "./cron.js";

const app = express();
const PORT = process.env.PORT || 8000;

startCronJob();

app.use("*", (req, res) => {
	res.status(200).send("Route not found");
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
