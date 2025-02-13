import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Product } from "./entities/Product"
import { Category } from "./entities/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "Andhi",
    password: "Ankit@6891",
    database: "MyStore",
    synchronize: false,
    logging: false,
    entities: [Product,Category],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
   
})
