This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [One time setup](#one-time-setup)
- [Import Code](#import-code)
- [Code modifications](#code-modifications)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## One time setup

** One Time setup
```
git config --global user.email "youremail@gmail.com"
git config --global user.name "Your Name"
```

** One time Installations
```
sudo npm install n -g
npm install -g create-react-app
```
## Import Code

```
git clone https://github.com/anil81/kp-mart.git  
cd kp-mart
yarn start   // Starts the server.
```

## Code modifications
Do code modifications using your fav IDE.
```
git add .
git commit -a -m "Mini description for your changes"
git push -u origin master
```

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      Cart.js
      SearchBar.js
      SearchResults.js
      ProductLine.js
    data/
      Products.js
    kpmart/
       kpmart.css
       kpmart.jpeg
       kpmart.js
       kpmart.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
* `kpmart/` contains the main component.
* `components` contains all the essentia sub components of the page.
* `data` contains all the Products (searchable) details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
