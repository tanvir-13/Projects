import { Router } from "express";
import { User } from "../entity/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";

const router = Router();

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User();
    user.username = username;
    user.password = hashedPassword;
    user.email = email;

    await AppDataSource.getRepository(User).save(user);
    res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await AppDataSource.getRepository(User).findOneBy({ username });
    
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
});

export default router;

