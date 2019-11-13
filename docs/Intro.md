# Web Dev for Better-Banner
Written By: David Silva

This is a WIP/rough draft/is subject to be wrong/inaccurate (I'm still learning too).

## Vocab

-   Framework: According to [wikipedia](https://en.wikipedia.org/wiki/Web_framework),

    > A web framework (WF) or web application framework (WAF) is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications on the World Wide Web. Web frameworks aim to automate the overhead associated with common activities performed in web development. For example, many web frameworks provide libraries for database access, templating frameworks, and session management, and they often promote code reuse.[1] Although they often target development of dynamic web sites, they are also applicable to static websites.

    While not 100% accurate, it is okay to think of a framework as another tool in your toolbox.

-   React
    -   **What**: Front end framework developed by Facebook.
    -   **Where**: `client/`
-   Node
    -   **What**: While not technically a framework, it is another tool you utilize for backend work.
    -   **Where**: `server/`
-   Package
    -   **What**: Open source code you utilize to accomplish your task.
    -   **Where**: `node_modules/`
-   Package.json
    -   **What**: Configuration file for all of your packages downloaded from either NPM or directly from github. If your project requires a specific version or branch of a package/repository, package.json is where you specify it. There **should almost never be a reason to modify package versions directly inside the package.json**. You use either `npm` or `yarn` cli to modify the package versions. A valid reason to modify the package.json may be to add a script. Read more [here](https://docs.npmjs.com/files/package.json)
    -   **Where**: `client/`, `server/` and root folder of your project
-   Dev Dependencies
    -   **What**: Dependencies that are only necessary in a development environment. For example, [eslint](https://eslint.org), which checks your code for worst practices (also depends on your config file -- people get testy about theirs and others code format) and yells at you if it finds something breaking one of its rules. Clearly this is not something that needs to be installed on a production build/server.
    -   **Where**: Specified in package.json and installed in your `node_modules` folder
-   Node Package Manager (NPM)
    -   **What**: cli tool to manage packages i.e. the package.json
    -   **Where**: probably `/bin` if you're on linux
-   Yarn
    -   **What**: alternative to the `npm` cli
    -   **Where**: same as above
    -   **Why**: [it's better than using npm](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)
-   Create React App(CRA)
    -   **What**: a script developed by the React team to quickly setup a react based project
    -   **Where**: in your global `/node_modules` folder (this used to be the case, but no longer -- you can run it directly now via npx/npm it looks like)
    -   **Why**: It's faster than doing it yourself

## The Process
Lets walk through the process of setting up a basic project with `client/` and `server/` folders; explanation will be in the next section.

1. Create a new project folder wherever you want
    ```bash
    $ mkdir project
    $ cd project
    $ yarn init -y
    ```
2. Create a new client and server folder inside of your project folder
    ```bash
    $ mkdir client
    $ mkdir server
    ```
3. Use create react app in the client folder
    ```bash
    $ cd client
    $ yarn create react-app .
    ```
4. Go to the server folder and initialize it using express
    ```bash
    $ cd ../server
    $ npx express-geneator --no-view . // yarn is not a one liner with express-geneator, so use npx
    ``` 
5. You now have a basic project with client and server folders set up! That isn't to say they are hooked up yet.

## The Process Explained
1.  The `-y` argument auto answers yes to all of the meta project questions (i.e. auto adds MIT license, version, name, etc.).  You can always edit this after initialization in the package.json.  There is also a `-p` argument to auto-init the project as a private repo.
2.  A very basic `client/` & `server/` project structure. 
3.  Running create-react-app inside the client folder initializes the front end with all the necessary packages to run react & includes a few other things (such as scripts to run and build the project).
4.  Running express-generator initializes the server folder with all the barebones code for a basic node server that uses express.  We specify `--no-view` because we are using react for our view.

## Observations/Comments
- Is this the only way to structure a project? No, the structure can change depending on the project, what your goals are, and the tooling you are using.  

- You have 3 package.json files: root project folder, `client/`, and `server/`.  
    
    Why? It is nice to be able to differentiate between a package that is used on the `client/` vs one that is used on the `server/` -- Think in terms of a large project using many packages.  The package.json in your root folder, you mostly don't touch.  You can specify packages that are relevant to both `client/` & `server/` in the root package.json (you would have to symlink them to the client & server node_modules folder, too -- I think) and shared dev dependencies such as eslint into it.  Most packages will have a separate client and server package if there is a client and server component to the overarching goal that the package is trying to accomplish for you.  For example, [apollo](https://github.com/apollographql) does this (look at their pinned repos).  

- Always have your `node_modules` folder in `.gitignore`.  You never need to commit the node modules themselves to your repo.  The package.json is there for a reason.  If you find yourself modifying node_modules, you should probably just fork the package you are modifying and install your own version via yarn/npm.

- Always read the documentation directly from the maintainer's readme/github/website.  Javascript frameworks and web dev'ing in general are fast-paced.  Using an answer about c code from 2010 (or even earlier) is fine because c isn't changing every year to the degree that js frameworks are changing every year.  An answer about js frameworks from 2010 is very likely to be completely obselete.  That isn't to say anything old isn't worth reading.  Picking up new key words to google and the thought process behind the answer is always useful.  In general, read the documentation/github issues the maintainers spend time developing/updating/responding to -- Stack Overflow won't always have the right answer anymore. (All of the previous is just from my experience, YMMV)
