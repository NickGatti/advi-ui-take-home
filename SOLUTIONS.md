Treating this project like an MVP, I focused on simplicity, speed of development and expandability.

The only 3 libraries and frameworks used other than React were `create-react-app`, `Express` and `npm-watch`.

Express was used because of its easy setup, static directory and easy routing.
I used a backend to mimic a dev API.

Npm-watch was used for watching the React files and building them to the server.

Create-react-app was used for easy setup of the React portion of the project, assuming that the code in the future would be used but not CRA.

I treated this project as if it were an MVP.

It was built with the assumption that it would get re-written after the MVP portion of the project.
The project was meant to be built to gold standard as an MVP in a short amount of time.
Code re-usability, simplicity and minimalization is essential for expanding quickly without having to mitigate erroneous design decisions.
This is why there are very few middlewares and extra technologies.

A backend was made for dev because the amount of limited requests per month on the free API I used (500/month).

Hiding the API key on the backend was not possible since this project will have to be installed and used by other people.

I used custom CSS since the amount of CSS required for this project was small and making design decisions for a small amount of custom CSS is very easy later on.

The project remained very small, the code is well organized and easily reusable. Very simple and not complex.
Few extra technologies allow for easy design decisions post MVP.
