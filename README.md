# Sea Siege

Sea Siege is a web-based collectible card game (CCG).

Really, though, this is just practice with React. Consider this a reference
application to get an idea for how to build a React app.

## Prerequisites

 * [Node.js](https://nodejs.org/)

## Building

When building for the first time, first install project dependencies:

```
npm install
```

Then, the following command will run the build:

```
npm run build
```

This builds the project into a *target/* directory, the contents of which can
be served directly via a web server such as [Nginx](http://nginx.org) as static
content.

To get up and running quickly, the following command will spin up a local
server accessible via [http://localhost:8000/](http://localhost:8000/):

```
npm start
```

To see the results of running the test suite, visit
[http://localhost:8000/test.html](http://localhost:8000/test.html) while
`npm start` is running.

## Deploying

The client app can be hosted on any web server that allows HTTP 404 errors to be
routed to the app's *index.html*. Ideally, the server would also proxy the
*/api* endpoint to a real back-end API instead of the mock API responses stubbed
out as static files within this project.

## Developing

The app is wired together with *routes*, which define each discrete "page"
within the app and how they are nested within one another. In addition to
reading the documentation for the technologies used within this project, a
good place to start tracing how things work is by inspecting the *routes*,
then following the code from there.

### Technology

This project uses [NPM](https://www.npmjs.com/) for dependency management and
builds itself using [Broccoli.js](http://broccolijs.com/). The code is written
mostly in bleeding-edge JavaScript, transpiled by [Babel](https://babeljs.io/),
and stylesheets are written in [Stylus](https://learnboost.github.io/stylus/).
All of this is transpiled into plain ol' JavaScript and CSS during the build.
UI components are written in [React](https://facebook.github.io/react/) with
[React Router](https://github.com/rackt/react-router) as the glue.

### Directory Conventions

Generally, the path to a stylesheet mirrors that of the corresponding script.
For example, the stylesheet for the *react/components/foo.js* script would be
found within the *styles/modules* directory as *react/components/foo.styl*.

Any script specifically React-related can be found within the *react* directory.
Everything else can be found in a logical path relative to the module's root
directory.

Within the project's module directory
(*src/main/scripts/modules/…*), the general layout is as follows:

 * **i18n/**: Localized strings are defined here.
 * **models/**: The core data model is defined here.
 * **react/**: The React front-end is defined here.

Within the *react* directory, the general layout is as follows:

 * **components/**: Core components used generally throughout the app.
 * **routes/**: Individual routes are defined here.
 * **views/**: Views corresponding to models are defined here.
 * **routes.js**: The route hierarchy is defined here.

### Build Output

The build for the main app produces a single JavaScript file that concatenates
and minifies all dependencies, modules, and its bootstrap. CSS is treated in a
similar fashion, concatenating dependencies first, then modules. All static
assets and static dependency assets are included as-is in the build output (e.g.
index page, fonts, images).

The build for the test app is similar to that of the main app, but with the
*-test* suffix added to its JavaScript and CSS files.
