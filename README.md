# Webpack demo

> Demonstrates some powerful features of Webpack

### Key Demos:
1. Code splitting
2. Lazy Loading
3. Common chunks
4. Tree shaking

### Configs
1. [Webpack](webpack.config.js)
2. [Babel](.babelrc)

```js
// greet button click listener lazy loading component greet
function onGreetClicked () {
  loadComponentAsync()
    .then(component => {
      document.body.appendChild(component('Hello'));
    })
}
```

```js
// demonstrates stage 2 import to lazy load greet component
// returns promise
function loadComponentAsync () {
  return import(/* webpackChunkName: "greet" */ './components/greet')
          .then(component => component.default)
          .catch(error => `Error loading component - ${error}`);
}
```

```js
// demonstrates stage 0 async await to lazy load greet component
// no promise returned, gets access to loaded component inline
// if result of await import is returned from function, it is returned as promise
async function loadComponent () {
  let component = await import(/* webpackChunkName: "greet" */ './components/greet');
  component = component && component.default;
  document.body.appendChild(component('Hello'));
}
```
