import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
import { log } from './utils/promise-helpers.js';

document
.querySelector('#myButton')
.onclick = () =>
    service
    .sumItens('2143')
    .then(log)
    .catch(console.error)