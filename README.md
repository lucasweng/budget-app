# Budget App

[![Build Status](https://travis-ci.org/lucasweng/budget-app.svg?branch=master)](https://travis-ci.org/lucasweng/budget-app)
[![codecov](https://codecov.io/gh/lucasweng/budget-app/branch/master/graph/badge.svg)](https://codecov.io/gh/lucasweng/budget-app)

> A React web app project from the Udemy course - [The Complete React Web Developer Course by Andrew Mead](https://www.udemy.com/react-2nd-edition/)

## Live Demo

 To see the app in action, go to [https://demo-budget-app.herokuapp.com/](https://demo-budget-app.herokuapp.com/)

 or

 To run that demo on your own computer, please follow the instructions in [Getting Started](https://github.com/lucasweng/budget-app#getting-started)

## Features

* Integration with Firebase:

  * Authentication with Google account

  * User based security to control data access on a per-user basis

* Manage expenses with basic functionalities:

  * Create, remove and edit expense

  * Search existing expenses

  * Display expenses by date or amount

  * Filter expenses by a time span

* Responsive web design

### Custom Enhancements

* Authentication with Facebook account

* Better user experience:

  * Render skeleton-ish screen while loading data

  * Confirmation modal when removing expense

  * Show username and greeting
  
  * Display number of hidden expenses while searching or filtering expenses

  * Custom NotFound page

### Enhancements to be made

* Error handling for authenticatoin

* Customize react-dates' date picker for better UI on mobile

* Link multiple auth providers to an account

### Custom Configurations

* Code splitting to optimize load time at second visit

* Add hashes to filenames for cache-busting

## Getting Started

> The data concerning Firebase configuration have been hidden deliberately, so the app cannot be run with its features on your local machine. If you would like to run it locally, please create your own Firebase project following the official [setup guide](https://firebase.google.com/docs/web/setup).

### Clone or download this repository

```sh
git clone https://github.com/lucasweng/budget-app.git
```

### Install dependencies

```sh
yarn install
```

### Setup Firebase configuration

In the root folder of this project, create a file named .env.development with:

```
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
```

### Run the app

```sh
yarn dev-server
```

### See the app

Visit [http://localhost:8080](http://localhost:8080)

### Comments in code

Some comments in the source code are course notes and therefore might not seem necessary from a developer's point of view.

### Troubleshooting

#### Rendering blank page when running dev-server

TL;DR: the HTML output might be of the production version, so the dev-server cannot access the correct JS source file.

Re-build the development version by running:

```sh
yarn run build:dev
```

Then start the webpack-dev-server again with:

```sh
yarn dev-server
```

In this project, there are two versions of webpack configuration that produce JS files with different naming method. In order to correctly access those output files every time we build, webpack is set to automatically generate HTML files and wire them up to JS files with varying names. However, the webpack-dev-server is set to be serving outputs of the development version for the existing HTML file without generating a new one. So, it is likely to have the production version HTML be served with the development version JS file when running the dev-server, and that would therefore render nothing on the page.

### Run the tests

If you would like to run the tests:

```sh
yarn test
```

## Built with

### Front-end

* [react](https://reactjs.org/)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)
* [react-redux](https://redux.js.org/docs/basics/UsageWithReact.html)
* [redux](https://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk#redux-thunk)
* [react-dates](https://github.com/airbnb/react-dates#react-dates-)
* [react-modal](https://reactcommunity.org/react-modal/)
* [firebase](https://firebase.google.com/docs/reference/js/#firebase)
* [normalize.css](http://nicolasgallagher.com/about-normalize-css/)
* [moment](https://momentjs.com/)
* [numeral](http://numeraljs.com/)
* [babel](http://babeljs.io/)
* [babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)
* [webpack](https://webpack.js.org/concepts/)
* [eslint](https://eslint.org/)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb)
* [uuid](https://github.com/kelektiv/node-uuid#uuid-)

### Back-end

* [express](https://expressjs.com/)

### Platforms

* [Firebase](https://firebase.google.com/)
* [Heroku](https://www.heroku.com/)

### Testing

* [jest](https://facebook.github.io/jest/)
* [enzyme](http://airbnb.io/enzyme/)
* [redux-mock-store](http://arnaudbenard.com/redux-mock-store/)

### DevTools

* [Redux DevTools Extension](http://extension.remotedev.io/)

## License

#### [MIT](./LICENSE)
