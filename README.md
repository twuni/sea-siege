# Sea Siege

Sea Siege is a web-based collectible card game (CCG).

Really, though, this is just practice with React. Consider this a reference
application to get an idea for how to build a React app.

## Prerequisites

 * [Node.js](https://nodejs.org/)

## Building

```
npm install
npm run build
```

## Running

```
npm start
```

## Testing

While `npm start` is running, visit
[http://localhost:8000/test.html](http://localhost:8000/test.html).

## Deploying

The client app can be hosted on any web server that allows HTTP 404 errors to be
routed to the app's *index.html*. Ideally, the server would also proxy the
*/api* endpoint to a real back-end API.

## Technology

This project uses [NPM](https://www.npmjs.com/) for dependency management and
builds itself using [Broccoli.js](http://broccolijs.com/). The code is written
mostly in bleeding-edge JavaScript, transpiled by [Babel](https://babeljs.io/),
and stylesheets are written in [Stylus](https://learnboost.github.io/stylus/).
All of this is transpiled into plain ol' JavaScript and CSS during the build.
UI components are written in [React](https://facebook.github.io/react/) with
[React Router](https://github.com/rackt/react-router) as the glue.

## Directory Conventions

Generally, the path to a stylesheet mirrors that of the corresponding script.
For example, the stylesheet for the *react/components/foo.js* script would be
found within the *styles/modules* directory as *react/components/foo.styl*.

Any script specifically React-related can be found within the *react* directory.
Everything else can be found in a logical path relative to the module's root
directory.

## Build Output

The build for the main app produces a single JavaScript file that concatenates
and minifies all dependencies, modules, and its bootstrap. CSS is treated in a
similar fashion, concatenating dependencies first, then modules. All static
assets and static dependency assets are included as-is in the build output (e.g.
index page, fonts, images).

The build for the test app is similar to that of the main app, but with the
*-test* suffix added to its JavaScript and CSS files.
