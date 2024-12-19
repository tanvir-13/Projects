import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "fitness_nutrition_planner",
    synchronize: true,
    logging: false,
    entities: [/* Add user's entities here */],
    migrations: [],
    subscribers: [],
});

