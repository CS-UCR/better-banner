# better-banner
Welcome to our attempt at creating a class scheduler/planner for UCR.

How to start. Once pulling the repository, make sure that you have a node package manager installed such as npm or yarn. They are necessary for the installation and execution of packages and connecting to the local server. For the rest of this tutorial I will use yarn

Installation:
To install the necessary packages you can run the command: yarn install
You would need to do this command in both the client and server directories since each folder holds different packages for their functionality (client = all front end related files, server = all backend related files). First cd into each folder and do the following commands below. They will download the proper packages and seed the database.  

Client:
run the following commands to start the project:
1) yarn install (as previously mentioned)
2) yarn start

Server:
run the following commands to populate the server.
1) yarn install
2) source ~/.bash_profile (makes your PATH global)
4) rm -rf /tmp/better-banner (optional)
3) yarn startdb (optional: 4) yarn resetdb   5) yarn stopdb)
6) yarn migrate (necessary to populate tables for our current database)
7) yarn seed 

Finally cd back to the root directory and we know can run the program with the following command:

yarn start

If everything works correctly, you should have a new browser opening that will redirect you to the registration page. 
