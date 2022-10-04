import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
import { takeUntil } from './utils/operators.js';
import { log } from './utils/promise-helpers.js';

/* Creating a function that will be called when the button is clicked. */
const operation = takeUntil(3, () =>
    service
    .sumItens('2143')
    .then(log)
    .catch(console.error)
)

/* Assigning the function operation to the onclick event of the button. */
document
.querySelector('#myButton')
.onclick = operation;
