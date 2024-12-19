import { Router } from "express";
import { MealPlan } from "../entity/MealPlan";
import { AppDataSource } from "../data-source";

const router = Router();

router.post("/", async (req, res) => {
    const { date, mealType, calories, userId } = req.body;

    const mealPlan = new MealPlan();
    mealPlan.date = new Date(date);
    mealPlan.mealType = mealType;
    mealPlan.calories = calories;
    mealPlan.user = await AppDataSource.getRepository(User).findOneBy({ id: userId });

    await AppDataSource.getRepository(MealPlan).save(mealPlan);
    res.json({ message: "Meal plan saved successfully" });
});

router.get("/", async (req, res) => {
    const mealPlans = await AppDataSource.getRepository(MealPlan).find();
    res.json(mealPlans);
});

export default router;

