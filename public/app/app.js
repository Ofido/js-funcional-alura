import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
import { takeUntil } from './utils/operators.js';
import { log } from './utils/promise-helpers.js';

const operation = takeUntil(3, () =>
    service
    .sumItens('2143')
    .then(log)
    .catch(console.error)
)

document
.querySelector('#myButton')
.onclick = operation;
