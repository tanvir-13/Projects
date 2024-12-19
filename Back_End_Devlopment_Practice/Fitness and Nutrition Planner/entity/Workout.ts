import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    type: string;

    @Column()
    duration: number;

    @ManyToOne(() => User, user => user.workouts)
    user: User;
}

