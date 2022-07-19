# Week 30

## Setting up a database

1. Sign in to MongoDB Atlas `https://www.mongodb.com/atlas/database`
2. Create a cluster - select SHARED (this is FREE!), leave the rest of the settings as is. Note: you can only have one free shared cluster, but you can create multiple collections on it. 
3. Create database (and collection)
4. Update network access (allow access from anywhere)
5. Update database access - make sure to copy the password because you will need it for your connection string

## Connecting to your database with a GUI (graphical user interface)

1. In the `Database Deployments` section of `Atlas`, click the `Connect` button then select `Connect your application`
2. Copy the connection string, it should look something like this: 
`mongodb+srv://<username>:<password>@cluster0.mw0ub5m.mongodb.net/?retryWrites=true&w=majority` Note: Replace <password> with the password for the <username> user. Ensure any option params are URL encoded (or update your password to not include any special characters, see step 5 in the previous section).
3. If connecting with `MongoDB Compass`, use the SAME connection string as above. If connecting with `Studio 3T`, it should automatically help you set up the connection string if you have it copied to your clipboard. It will say something like "Studio 3T has detected a connection string on your clipboard, would you like to connect?" Click yes. Otherwise your server name should be whatever value is in your connection string above after the `@` symbol. Use the same username and password. For example: `cluster0.mw0ub5m.mongodb.net`

## Connecting your api to your database
1. Example without Mongoose (from `fullstack-to-do` example):
```
import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://<username>:<password>@cluster0.mw0ub5m.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "to-do-list";
let db;
let collection;
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  db = client.db(dbName);
  collection = db.collection("tasks");
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error);
```
2. Example with Mongoose:
```
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

const port = process.env.PORT || 5000;

mongoose
  .connect("mongodb+srv://<username>:<password>@cluster0.mw0ub5m.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.listen(port, () => {
      console.log("Server has started!");
    });
  });

```

## Deploying to Heroku
1. `heroku login`
2. `heroku git:remote [insert-app-name]`
3. `heroku push [master or main depending on your branch name]`
4. To view logs: `heroku logs --tail`

Make sure to update the following in your application:

Update the following in your `package.json`:
```
"scripts": {
  "start": "node index.js"
},
```

Update the following in your `index.js`:
```
var port = process.env.PORT || 3000;
```
