# react-babel-webpack-frontend
boilerplate + AWS Amplify (S3)

```cli
mkdir react-babel-webpack-frontend
cd react-babel-webpack-frontend
```

```
npm init
```

```cli
mkdir src
cd src
touch index.js
```

inside `package.json`:
```json
{
...
"scripts": {
  "start": "node src/index.js"
},
...
}
```

### webpack

```cli
mkdir build
cd build
touch index.html
```

inside `index.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Webpack</title>
  </head>
  <body>
    <div>
      <h1>Hello Webpack</h1>
    </div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

```cli
npm install --save-dev webpack webpack-dev-server webpack-cli
```

in `package.json`:
```json
{
  ...
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

```cli
touch webpack.config.js
```

in `webpack.config.js`:
```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  }
};
```

### babel

```cli
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-loader
```

inside `webpack.config.js`:
```javascript
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```
```cli
touch .babelrc
```

inside `.babelrc`:

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

### react

```
npm install --save-dev @babel/preset-react
```

inside `.babelrc`:
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

inside `webpack.config.js`:
```javascript
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  }
};
```
```cli
npm install --save react react-dom
```

inside `src/index.js`:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

```cli
touch App.js
```

inside `App.js`:
```javascript
import React from 'react';

function App() {
    return(
        <h1>hello world</h1>
    )
}

export default App;
```

inside `build.index.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello React</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

### amplify

```cli
npm install --save aws-amplify
```

```cli
amplify init
```

```cli
amplify push
```

inside `src/App.js`:
```javascript
import React from 'react';
import Auth from '@aws-amplify/auth';
import awsconfig from './aws-exports';

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

function App() {
    return(
        <h1>hello world</h1>
    )
}

export default App;
```

```cli
amplify add hosting
```

```cli
amplify publish
```
