import './style.css';

import button from './components/button';
import image from './components/image';

import HappyMinion from './img/minion-happy.jpg';

import { logEvent } from './analytics';
import { ONE } from './commons';

document.body.appendChild(image(HappyMinion));
document.body.appendChild(button('Greet', () => {
  loadComponentAsync()
    .then(component => {
      document.body.appendChild(component('Hello'));
    })
}));

logEvent('onload', 'success');

function loadComponentAsync () {
  return System.import(/* webpackChunkName: "greet" */ './components/greet')
          .then(component => component.default)
          .catch(error => `Error loading component - ${error}`);
}

logEvent('onload-finish', 'success');
