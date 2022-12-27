# Typescript React Boiler plate


## Babel:

- Babel is simply a translator, who translates your fancy (ES6+) JS code into 'not-so-fancy' (ES5) ones that browser or Nodejs understands

- Backend: we use Babel so that we can use fanciest JS syntax (ES6/7) with Nodejs

## Webpack
- Webpack as a mega-multi translator that works with all kinds of languages(or assets).
- Webpack often runs Babel as one of its jobs, Webpack can collect all your inline CSS styles in your Javascript files and bundle them into one.
- Frontend: we use Webpack (which uses Babel and other things) to compile JS code and many other assets into a few small bundle files that our users can download when they first load our webpage.

## Setting up a Typescript React project

### Part 1:
#### Init package
```
npm init
```
#### Install Webpack
```
npm install webpack webpack-cli --save-dev
```

```
npm install webpack-dev-server --save-dev
```

```
npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev
```
#### Install Typescript
```
npm install typescript --save-dev
```
#### Install Babel
```
npm install @babel/cli @babel/core @babel/preset-env @babel/polyfill --save-dev
```
```
npm install babel-loader --save-dev
```
#### Start Webpack dev server
```
npm start
```
### Part 2
```
npm install
```
#### Instal React
```
npm install react react-dom --save
```
```
npm install @types/react @types/react-dom --save-dev
```
#### Install types
```
npm install @types/node --save-dev
```

#### Install Axios
```
npm install axios --save 
```

#### Install babel runtime
```
npm install -D @babel/plugin-transform-runtime
npm install -P @babel/runtime
```
#### Start Webpack dev server
```
npm start
```