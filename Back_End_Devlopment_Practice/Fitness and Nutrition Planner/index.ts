import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth";
import workoutRoutes from "./routes/workouts";
import mealPlanRoutes from "./routes/mealPlans";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use("/auth", authRoutes);
    app.use("/workouts", workoutRoutes);
    app.use("/mealPlans", mealPlanRoutes);

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.log(error));

