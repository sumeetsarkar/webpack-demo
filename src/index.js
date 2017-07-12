import './style.css';

import button from './components/button';
import image from './components/image';

import HappyMinion from './img/minion-happy.jpg';

import { logEvent } from './analytics';
import { ONE } from './commons';

logEvent('onload', 'success');

document.body.appendChild(image(HappyMinion));

document.body.appendChild(button('Greet', onGreetClicked));
// document.body.appendChild(button('Greet', loadComponent));

// greet button click listener lazy loading component greet
function onGreetClicked () {
  loadComponentAsync()
    .then(component => {
      document.body.appendChild(component('Hello'));
    })
}

// demonstrates stage 2 import to lazy load greet component
// returns promise
function loadComponentAsync () {
  return import(/* webpackChunkName: "greet" */ './components/greet')
          .then(component => component.default)
          .catch(error => `Error loading component - ${error}`);
}

// demonstrates stage 0 async await to lazy load greet component
// no promise returned, gets access to loaded component inline
// if result of await import is returned from function, it is returned as promise
async function loadComponent () {
  let component = await import(/* webpackChunkName: "greet" */ './components/greet');
  component = component && component.default;
  document.body.appendChild(component('Hello'));
}

logEvent('onload-finish', 'success');
