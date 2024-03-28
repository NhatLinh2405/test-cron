import express, { Express, Request, Response } from "express";
import { startCronJob } from "./cron";

const app: Express = express();
const PORT = process.env.PORT || 8000;

startCronJob();

app.use("*", (req: Request, res: Response) => {
	res.status(200).send("Route not found");
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
