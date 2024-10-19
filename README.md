# 1 Steps to Deploy an Express.js Application on Vercel

This guide will walk you through how to deploy your **Express.js** app on **Vercel**. Follow these steps:

## 1. Create a New Folder for Your Application

Start by creating a new folder where your app will reside:

```bash
mkdir my-express-app
cd my-express-app
```

## 2. Initialize Your Node.js Application

Next, initialize your application. This will generate a `package.json` file, which manages your app’s dependencies and scripts:

```bash
npm init -y
```

This command will automatically create a `package.json` file with default settings.

## 3. Install Express.js

To use **Express.js** in your project, you need to install it using `npm`. Run the following command:

```bash
npm install express
```

This will install **Express.js** and add it to your `package.json` dependencies.

## 4. Customize the `package.json` File

Now, open the auto-generated `package.json` file in a text editor and modify it as per your app's requirements. Here's an example with Express dependencies:

```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC",
  "description": "A simple Express.js app"
}
```

## 5. Create the `index.js` File

In the root directory of your project, create a file named `index.js`. This file will contain the code for your Express.js server.

Add the following code to set up a basic Express server:

```js
const express = require("express");

const app = express();
const PORT = 3100;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
```

## 6. Test the Application Locally

Before deploying, test the app locally to ensure everything works. Run the following command to start your Express server:

```bash
npm start
```

Visit [http://localhost:3100](http://localhost:3100) in your browser. If you see "Hello World," your server is working correctly!

---

# 7. Prepare for Vercel Deployment

Vercel requires a configuration file to understand how to build and serve your app. In your project’s root directory, create a file named `vercel.json` with the following content:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

This tells Vercel how to build and route requests to your Express.js server. Now, your app is ready for deployment.

---

## 8. Store Your Code in a GitHub Repository

You can now push your code to a GitHub repository and deploy it through your Vercel account.

---

### For further reference, you can check the official documentation: [Express.js Deployment on Vercel](https://vercel.com/guides/using-express-with-vercel).
