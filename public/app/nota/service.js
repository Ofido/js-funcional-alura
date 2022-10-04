import { partialize, pipe } from '../utils/operators.js';
import { handleStatus } from '../utils/promise-helpers.js';

/* A constant that is used to store the URL of the API. */
const API = 'http://localhost:3000/notas'

/**
 * "Given an array of notas, return an array of all the itens from all the notas."
 *
 * The  function is a combination of the  and  functions. It takes an array and a
 * function, and returns a new array. The function is called once for each item in the array, and the
 * function's return value is added to the new array
 */
const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);

/**
 * FilterItemsByCode returns a new array with only the items that have a code property equal to the
 * code argument.
 * @param code - The code of the item you want to filter.
 * @param items - The array of objects to be filtered.
 */
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);

/**
 * It takes an array of objects, and returns the sum of the value of each object
 */
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

/* A service that is used to get the data from the API. */
export const notasService = {

    /* A function that returns a promise. */
    /* Making a request to the API. */
    listAll() {
        return fetch(API)
            /* A function that is used to handle the status of the request. */
            .then(handleStatus)
            .catch(err => {
                console.log(err);
                return Promise.reject('Não foi possível obter as notas fiscais')
            });
    },

/**
 * It takes a code, and returns a promise that resolves to the sum of the values of all items with that
 * code in all notas.
 * @param code - the code of the item you want to sum
 * @returns A promise that will return the sum of the items.
 */
    sumItens(code) {
        const filterItems = partialize(filterItemsByCode, code)
        const sumItems = pipe(
            getItemsFromNotas,
            filterItems,
            sumItemsValue
        )

        return this.listAll()
            .then(sumItems);
    }
}