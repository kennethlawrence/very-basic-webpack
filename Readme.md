# A Very Basic Webpack boilerplate.

## What is it
This is a very simple webpack based build system with a few features, meant to be extended into various needs.  It is currently aimed toward single-page applications, although this may change in future.

## Whats included

* ES6 transpiling (via babel).
* Code linting via eslint.
* Jasmine test framework (with karma test runner).
* SASS stylesheet processing.
* webpack-dev-server with live-reloading enabled.
* build configurations for development (with sourcemaps) and production (with minification).

## Whats not included

* A front end framework or libraries (add react/angular/cycle.js as needed).
* Any sort of hot module replacement (as this may be front-end specific).

## How to use it

Development in the `src` directory can be done in typical ES6 style, and requires an ``` import ``` for each of the needed asset (css, imgs, etc.).  The `index.tpl.html` is the root of the project, and will have all necessary files included.

* Single test: ``` npm test ```
* Continuous testing: ``` npm run test-continuous ```
* Single Development build: ``` npm run build ```
* Start development server: ``` npm run development ``` or ``` npm start ```
* Single Production build (located in 'dist'): ``` npm run deploy ```
* Single Production build with analysis of bundle sizes: ``` npm run analyze  ```
* Clean the 'build' (Development) and 'dist' (Production) build directories: ``` npm run clean ```

## Aren't there a million of these already?

Yup, but this one is mine, primarily aimed at personal use. It is my personal bare minimum for a webpack build, and is intended to be extended depending on the needs of the project, rather than an all in one package that includes features I may need to remove.

## Todo

* Add postCSS
* Add html-loader for multi-page apps.
* Split packaging into vendor and application bundles.
