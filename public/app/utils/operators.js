// Congela/Fixa ...args parâmetros de uma função (fn) qualquer e a retorna.
/**
 * Partialize takes a function and some arguments and returns a new function that is the original
 * function with the arguments partially applied
 * @param fn - The function to be partially applied.
 * @param args - The arguments to be partially applied.
 */
export const partialize = (fn, ...args) =>
    fn.bind(null, ...args)

// Recebe ...fns (Funções) e retorna uma única função que executa as funções declaradas recebendo apenas um parâmetro
/**
 * "It takes a list of functions and returns a function that takes a value and passes it to the first
 * function, then passes the result of that to the second function, and so on."
 *
 * Let's break it down.
 *
 * The first thing to notice is that the function is curried. This means that it takes a list of
 * functions as its first argument, and returns a function that takes a value as its first argument.
 *
 * The second thing to notice is that the function uses reduceRight to apply the functions to the
 * value. This means that the functions are applied in the reverse order that they are passed in.
 *
 * Let's look at an example.
 * @param fns - An array of functions to compose.
 */
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value)

// Recebe ...fns (Funções) e retorna uma única função que executa as funções declaradas recebendo apenas um parâmetro
/**
 * `pipe` takes a list of functions and returns a function that takes a value, passes it to the first
 * function, then passes the result of that to the second function, and so on
 * @param fns - An array of functions to be composed.
 */
export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) =>
        fn(previousValue), value)

/**
 * `takeUntil` takes a number and a function and returns a function that will call the function until
 * the number is reached
 * @param times - The number of times to call the function.
 * @param fn - The function to be called
 */
export const takeUntil = (times, fn) =>
    () => times-- > 0 && fn()
