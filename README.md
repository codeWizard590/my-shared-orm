# How to get started

Steps to run this project:
# Make sure you have the database present and have sufficient permissions on that database.

1. Run `npm i` command
2. Setup database settings inside `.env` file present in the root location of the project
3. run 'npm run build'

# This is a shared-typeorm library. In order to integrate this library with the node js project run the following commands
1. Run 'npm link' .
   
Purpose of doing this
creates a symlink between a local package and a global package, allowing to use local dependencies without needing to publish them to npm.

# To run migrations 
npx typeorm-ts-node-commonjs migration:run -d src/dbconnection/data-source.ts
Mock data and table creation is present inside the migration files present inside the migration folder .
