# Better-Banner

Welcome to our attempt at creating a class scheduler/planner for UCR.

How to start. Once pulling the repository, make sure that you have a node package manager installed such as npm or yarn. They are necessary for the installation and execution of packages and connecting to the local server. For the rest of this tutorial I will use yarn

Installation:
To install the necessary packages you can run the command: yarn install
You would need to do this command in both the client and server directories since each folder holds different packages for their functionality (client = all front end related files, server = all backend related files). First cd into each folder and do the following commands below. They will download the proper packages and seed the database.

Client:
run the following commands to start the project:

1. yarn install (as previously mentioned)
2. yarn start

Server:
run the following commands to populate the server.

```bash
$ cd server && yarn install && cd ..
$ cd client && yarn install && cd ..
$ yarn install
$ yarn initdb
$ yarn start
```
