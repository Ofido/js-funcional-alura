// Congela/Fixa ...args parâmetros de uma função (fn) qualquer e a retorna.
export const partialize = (fn, ...args) =>
    fn.bind(null, ...args)

// Recebe ...fns (Funções) e retorna uma única função que executa as funções declaradas recebendo apenas um parâmetro
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value)

// Recebe ...fns (Funções) e retorna uma única função que executa as funções declaradas recebendo apenas um parâmetro
export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) =>
        fn(previousValue), value)