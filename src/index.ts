import 'reflect-metadata';
import { AppDataSource } from "./data-source"
import { Product } from "./entities/Product";
import { User } from "./entities/User"
AppDataSource.initialize().then(async () => {

   
    console.log("connection set succesfully");
    

}).catch(error => console.log(error))

export{AppDataSource};
export * from './entities/Product';
export * from './entities/Category';
export * from './data-source';
