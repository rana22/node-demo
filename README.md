## Test Project
The purpose of this project is to test your abilities implement API patterns with Node.js, Sequelize, and Git.

Node.js: https://nodejs.org/en/docs/

Sequelize: http://docs.sequelizejs.com/

With this project, you need to add in Test Results for Samples. We will provide a seed file for the database, but all of the entity management must be added by you. 

## TypeScript/Intellij Setup
1. Download TypeScript source for version in package.json
2. Preferences -> Languages & Frameworks -> Typescript
3. Click Edit next to Typescript version
4. Select custom directory and set to your/local/file/path/TypeScript-x.x.x/lib

## Environment Setup
1. Setup local mysql database and user
2. Run `npm install` task
3. Run `npm setup` task
4. Update the .env file created by setup with correct db connection string details
5. Run gulp
6. Run npm start
7. The API should now be up and running

## Generating Files with Gulp (example)
```
# Run this command to generate/update files 
$ gulp generate --name TestResult
 
#File structure after generation
.
|
|-- .src
    |
    |-- .controller
    |   |-- ITestResultController.ts
    |   |-- TestResultController.ts
    |
    |-- .dao
    |   |-- ITestResultDao.ts
    |   |-- TestResultDao.ts
    |
    |-- .model
    |   |-- ITestResultModel.ts
    |   |-- TestResultModel.ts
    |
    |-- .schema
    |   |-- TestResultSchema.ts
    |
    |-- .service
    |   |-- ITestResultService.ts
    |   |-- TestResultService.ts
 
#Additionally, the following files will be updated with bindings / symbols for TestResult:
./src/config/Tags.ts
./src/config/Types.ts
./src/controller/ControllerModule.ts
./src/dao/DataAccessModule.ts
./src/service/ServiceModule.ts
```