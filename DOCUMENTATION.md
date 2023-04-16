# Documentation

## Installiation
> Go to `\frontend-news` run the command: `npm i`
> Go to `\backend-news` run he command: `npm i`

### Server notes
> The server has a static folder hosted with the react-app production build

## Simple testing
> To run only the react app in "frontend-news" run the command: `npm start` in `\frontend-news`
> To run only the server in "backend-news" run the command: `node server/server.js` in `\backend-news`

## Dev mode
> To run just the server with `nodemon` run the command: `npx nodemon server/server.js` in `\backend-news`
> To run the server with `nodemon`n and have the front-end on filewatch run this command along with `nodemon`: `npm run watch` in `\frontend-news`
> If you arent deving on the server, close `nodemon` and run just `node` for the server, run the command: `node server/server.js` in `\backend-news` this will make the filewatch performance a little better
