# Documentation

## Installiation
> Go to `\frontend-news` run the command: `npm i`

> Go to `\backend-news` run the command: `npm i`

### Server notes
> The server has a static folder hosted with the react-app production build

### General notes
> Windows uses backslashes for directories `\`

> Linux etc.. distros use forward slashes for directories `/`

I am using both Windows and Linux for dev. Which will explain the forward and backward slashes in the documentation.

## Simple testing
> To run only the react app in "frontend-news" run the command: `npm start` in `\frontend-news`

> To run only the server in "backend-news" run the command: `node server/server.js` in `\backend-news`

## Dev mode
> To run just the server with `nodemon` run the command: `npx nodemon server/server.js` in `\backend-news`

> To run the server with `nodemon` and have the front-end on filewatch, run this command along with `nodemon` running: `npm run watch` in `\frontend-news`
EX: run `nodemon` in `\backend-news`
    then run `npm run watch` in `\frontend-news`

> If you arent deving on the server, close `nodemon` and run just `node` for the server, run the command: `node server/server.js` in `\backend-news` this will make the filewatch performance a little better
