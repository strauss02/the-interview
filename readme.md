# Fullstack Web Dev Template

## About

This is a template for building web apps whose backend and fronted would be hosted on the same server.

## Features and Tooling

- **SASS** and / or **CSS** For styling. 💅🏾
- **Babbel**. 🌎
- **Heroku** For deployment. 🈳
- **ESlint** For linting 💡, according to the **Standard** style guide, automatically enforced with **Prettier**. 🦋
- **Webpack 5** with hot-reload for compiling production and development builds. 📦

### NPM dependencies

- Nodemon
- CORS
- Express
- Axios

## How to Use?

![file tree example]('./readme-files/image.jpg')

This template is configured to work according to the following scheme:

### Client Side

to be stored in the `./src` folder.

To use vanilla CSS, store it in the `src` folder and use this line in index.js:  
`import 'style.css'`  
To use SASS, store it in the `src/sass` folder and use this line in index.js:  
`import '.sass/style.scss'`

Assets, such as images, should be stored in the `src/assets` folder.  
To implement them in your app, simply refer to them in your HTML file.

For the time being (v0.0.1) all other client-side files are stored in `./src`. (fonts, favicon, ES modules)

### Server Side

to be stored in the `./server` folder.

This template is configured to use `./server/app.js` as an entry point to the application.  
For the time being (v0.0.1) all other server-side files are stored in the `./server` root level. (routers, handlers, middleware...)

## Scripts

To run the webpack production build builder, use `npm run build-prod`

To run the webpack development build builder, use `npm run build-dev`. This will run the builder in hot-reload mode, meaning it will rebuild each time a file is saved.

To run the self-restarting nodemon server, use `npm run server-dev`  
This step should be done only after build-dev was run.
