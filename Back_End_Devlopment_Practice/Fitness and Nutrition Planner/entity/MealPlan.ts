import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class MealPlan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    mealType: string;

    @Column()
    calories: number;

    @ManyToOne(() => User, user => user.mealPlans)
    user: User;
}

