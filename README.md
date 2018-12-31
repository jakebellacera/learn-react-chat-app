# Learn React: Chat App

This is a project I created for learning React. It's a Slack clone that is built in React and powered by Socket.io.

## Development

This application has two components: the **Client**—which is powered by React, and the **Server**—which is powered by Node.js and Express.
Each component lives in its own subdirectory within the root folder:

* **client** - This houses the client application which is built in React
* **server** - This houses the backend server which is powered by Node.js and Express

### Developing locally

Each component must be started independently. First, open a new terminal window and launch the server component:

```
$ cd server && yarn start
```

Then, with the server component still running, open another terminal window and launch the client component:

```
$ cd client && yarn start
```

Then, open up your browser and visit http://localhost:3000. Webpack will watch for changes to the client and hot-reload when necessary.

> **NOTE:** Any changes made to the server when running will require the server to be restarted. This can be performed while the client is still running.

## Deploying to Production

The application is already ready to be deployed to production in Heroku. Assuming you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) already installed, run the following commands within the _root directory_ of this project:

```
$ heroku create
$ git push heroku master
```
