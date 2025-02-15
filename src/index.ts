import 'reflect-metadata';
import { AppDataSource } from "./dbconnection/data-source"

debugger
AppDataSource.initialize().then(async () => {
    
    console.log("connection set succesfully");
}).catch(error => console.log(error))

export{AppDataSource};
export * from './entities/Product';
export * from './entities/Category';
export * from './dbconnection/data-source';
