# mdownit

## Description

This will hopefully be a document store built to display and organize markdown files. Also using this as an opportunity to create 

## Objectives

## Documentation

#### Requirements

* nodeJS - http://nodejs.org
* Node Package Manager (npm) - http://npmjs.com
* JSPM - http://jspm.io

### Installation instructions

#### Install server requirements

##### Install NodeJS

Rather than use Ubuntu's repo, which is always out of date, we use Node Version Manager (nvm). This curl script will download and run the install script for NodeJS.

``` 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```

##### Install Node Package Manager

NodeJS has npm installed by default, but it's often out of date. This will update npm.

`npm install npm -g`

##### Install JSPM

`npm install jspm -g`

#### Install Node Packages

Install node packages via

`npm install`

This command must be run from the root directory as well as the app directory. This is because the root directory is where the server.js file is located, which depends on serve-static and the /app directory is where our actual aurelia app is located.

This will install the packages listed inside `package.json`.

Install jspm packages inside app/ with `jspm install`

### Installation Notes

#### Adding more dependencies

Dependencies are added via `npm install --save <package_name>`

This adds the package to the list of dependencies and installs that package into node_modules. You can delete it from package.json -> dependencies if you change your mind later.

## Starting the whole shebang

Install Forever

`npm install -g forever`

Run the app using Forever

`forever start server.js`

## Additional notes

### Git Setup

#### .gitignore

Git ignore specifies files and folders that git will not commit to the repository. This is stored in `.gitignore`.

Ignoring `node_modules` and `jspm_modules` because they should be installed by all the `node install` and `jspm install` commands that were run above.

## TODO

### App

* layout
* nav
* framework
* connection to gallery

## Architectural Overview

The primary purpose of this project is to educate myself in the use of several different web technologies together into a complete web application. This is a breakdown of architecture so that it can be clear how all the pieces come together.

### Building the App

Running `npm install` will download all the necessary packages outlined in `package.json` into the `node_modules` directory. The major ones are the following:

* RequireJS - In-browser JS file and module loader
* BackboneJS - Barebones MVC framework for JS
* Bootstrap - HTML, CSS and JS framework for front-end layout and design

`build.sh` is a simple shell script that copies the files that were downloaded into the `node_modules` directory into places that the app expects them to be. The `/site/lib/` directory is the destination for all of these files.

### The index.html file

`index.html` serves as the main entry point of the whole app. You'll notice that the css is referenced directly in the sheet, but the js is not. This is because the JS is loaded via RequireJS in `js/app.js`. `app.js` contains configuration for all the various JS libraries involved.

Boostrap and Backbone are loaded via shims. See the configuration block in `app.js`. A shim is a new feature in RequireJS 2.0 that allows non-AMD compatible js libraries to be "shimmed" into the greater app by allowing the instantiated RequireJS to wrap up a library with all it's dependencies and export it as a module, if needed.

### The Router

`router.js` defines the router and is loaded in via the require statement in `app.js`. 

#### Routes

The default routes are all declared in the definition of the Router class itself.  Additional routes can be declared in the `app.js` file itself via `router.route()`.

### Templates

...still figuring this out.