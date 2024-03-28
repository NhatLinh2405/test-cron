import cron from "node-cron";

export const startCronJob = () => {
	cron.schedule("* * * * * *", () => {
		console.log("running a task every second");
	});
};
