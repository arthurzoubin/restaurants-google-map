# Restaurants with google map

This application use google map api and zomato api to do a restaurants finding function.

## Screen shoots

### Nearby restaurants

![nearby](https://github.com/arthurzoubin/restaurants-google-map/raw/master/screenshoots/nearby.png)

### Search restaurants

![search](https://github.com/arthurzoubin/restaurants-google-map//raw/master/screenshoots/search.png)

### Restaurant

![detail](https://github.com/arthurzoubin/restaurants-google-map//raw/master/screenshoots/detail.png)

### Restaurant directions

![detail-directions](https://github.com/arthurzoubin/restaurants-google-map//raw/master/screenshoots/detail-directions.png)

### Env
node >= 7.6.0

### Features

- Enables building universal SPAs
- A modern redux architecture
- Hot reloading of CSS-modules
- Fast server side hot reloading
- 99% ES-next code-base
- Hot reloading unit tests in a browser
- A comprehensive functional and unit test suite
- A lucid code-base
- A pretty console output
- Useful debugging tools

### Quick Start

Use the following commands to get started on your new app.

```
Clone the project
cd <directory-name>
npm i
mv example.env .env (Note: Add your zomato api info and google map info in .env file)
npm start
```

With the default `.env` file, this will start your application in development mode on port 9001. It also provides a configuration for running the debugger with a useful console output.

Open a browser window at `127.0.0.1:9001`.

### Technology stack

Reactjs Base uses the following libraries at its core:

##### Build tools
- [webpack](https://webpack.github.io/) - A module bundler.
- [babel](http://babeljs.io/) - A JavaScript compiler.
- [webpack-isomorphic-tools](https://www.npmjs.com/package/webpack-isomorphic-tools) - Library for isomorphic rendering.

##### Server
- [koa](http://koajs.com/) - A lightweight server framework.
- [koa-router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
- [socket.io](http://socket.io/) - A node engine for WebSocket communication.
- [redux-via-socket.io](https://www.npmjs.com/package/redux-via-socket.io) - An adapter for sharing redux actions over WebSockets.

##### Universal Application
- [react](http://facebook.github.io/react/) - A library for building interfaces.
- [redux](http://redux.js.org/) - A library for state management.
- [react-router](https://github.com/reactjs/react-router) - A routing library for React.
- [react-router-redux](https://github.com/reactjs/react-router-redux) - Binding between react-router and redux.
- [redial](https://www.npmjs.com/package/redial) - Universal data fetching for React.
- [redux-saga](https://github.com/yelouafi/redux-saga) - Side effect management for redux.
- [reselect](https://github.com/reactjs/reselect) - A library for creating state selectors.
- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - A redux middleware for creating asynchronous actions.

##### Internationalisation
- [react-intl-redux](https://github.com/ratson/react-intl-redux) – Redux bindings for react-intl
- [react-intl](https://github.com/yayoo/react-intl) – React intl support
- [react-intl-translations-manager](https://github.com/GertjanReynaert/react-intl-translations-manager) – Manage all translations based on the extracted messages of the babel-plugin-react-intl

##### Utility
- [lodash](http://lodash.com/) - A popular modular utility library.
- [ramda](http://ramdajs.com/) - A modular utility library focused on functional programming.
- [immutable](https://github.com/facebook/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.

##### Styling
- [Semantic-ui-react](https://react.semantic-ui.com/) - A web UI library for react
- [SCSS](http://sass-lang.com/guide) - A popular CSS preprocessor.
- [PostCSS](http://postcss.org/) - CSS transformations with JavaScript.
- [css-modules](https://github.com/css-modules/css-modules) - A build step for modular, local scoped CSS management.

### Commands

**Developing**

```
npm run start [-- --open]
```

Builds and serves app with hot reloading and debugging support.

**Build client-side app**

```
npm run build
```

Creates bundles and assets into `./src/static` directory. Reads `.env` but always uses production Webpack configuration.

**Start the server**

Set the NODE_ENV flag to production in your .env file.

```
npm start
```

Expects bundles and assets to exist in the `./src/static` directory. Runs the server in production mode.

**Unit test development server**

```
npm run test:server
```

Start a test server using Mocha and Webpack-middleware. Provides a browser based testing environment. Loading tests from within `./src` where extension is `.test.js`.


**Unit test single run**

```
npm run test:unit
```

Runs the test suite in a node environment through mocha, once.

**Functional/integration tests run**

```
npm run test:func
```

Runs functional tests inside `./test/functional` directory.

**Lint**

```
npm run lint
npm run lint:styles
```

Reads `.eslintrc` and `sass-lint.yml` for linting configurations.

**Coverage**

```
npm run coverage
npm run coverage:check
```

Reads `.istanbul.yml` for thresholds in check.
