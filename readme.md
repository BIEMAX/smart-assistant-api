## Commands to run before start developing/testing

> npm i
> npm install dotenv
> npm install express
> npm install helmet --save
> npm install morgan
> npm install --save swagger-ui-express
> npm install --save swagger-node-express //Do not need this guy
> npm install --save swagger-jsdoc

Verificar os comandos abaixo
> npm install swagger
> npm install -g swagger

## Commands git 

Get information about git:
>git config --list --show-origin --show-scope

## Frameworks used
https://www.npmjs.com/package/dotenv

https://expressjs.com/pt-br/

https://www.npmjs.com/package/helmet

https://www.npmjs.com/package/morgan



## Additional information
Introducing to EJS view engine
>https://medium.com/@pedrompinto/tutorial-node-js-como-usar-o-engine-ejs-12bcc688ebab

Location for the *gitconfig* file:
>C:\Users\dionei.santos\.gitconfig


## Swagger implementation
1. First, you need tu run the following commands
```bash
npm install --save swagger-node-express
npm install --save swagger-jsdoc
```

2. After this, you need to create a new folder inside your app, called *apidoc*, and inside them, create a file as *index.js*.

3. You need to create a configuration file that contains the routes of the swagger (usually, create inside a config folder).