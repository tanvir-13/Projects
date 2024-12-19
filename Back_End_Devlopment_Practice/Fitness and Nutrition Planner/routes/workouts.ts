import { Router } from "express";
import { Workout } from "../entity/Workout";
import { AppDataSource } from "../data-source";

const router = Router();

router.post("/", async (req, res) => {
    const { date, type, duration, userId } = req.body;

    const workout = new Workout();
    workout.date = new Date(date);
    workout.type = type;
    workout.duration = duration;
    workout.user = await AppDataSource.getRepository(User).findOneBy({ id: userId });

    await AppDataSource.getRepository(Workout).save(workout);
    res.json({ message: "Workout saved successfully" });
});

router.get("/", async (req, res) => {
    const workouts = await AppDataSource.getRepository(Workout).find();
    res.json(workouts);
});

export default router;

