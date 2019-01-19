This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

The project was made having efficency in mind.

I tried to avoid using any kind of css template which was a little bit challenging but rewarding. Thank you for giving me this amazing experience!
Also, I didn't have much time to develop it since I had to conciliate both work and this project at the same time, and some endpoints weren't so clear on the project description.

* First of all, to run the application it's only necessary to have **NodeJs** Installed and run *npm start*.
* I have done some testing using Jest but didn't have much time testing the components so I did just 2 simples tests. To run them just use *npm test*
* The project, as already mentioned was developed using CSS only with the help of SASS. It has already been compiled and it's ready to use.
* The project was developed using Redux to hold the user information across the entire application
* Routing was already used on /home, /users and /user/new routes.
* Also, it was developed using functional components and class based components depending on its role (visual and dynamics)

Improvement actions:

* Design a more responsible layout
* Develop the POST and DELETE requests for insertion and deletion of a table row.
* Develop close dropdown when clicked outside of component
* Show trash Icon when hovering
* Implement loading while retrieving data from API

