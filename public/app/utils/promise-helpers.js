/**
 * It returns the JSON response if the response is ok, otherwise it rejects the promise with the status
 * text
 */
export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

/**
 * `log` is a function that takes a parameter and returns the parameter
 * @returns The function log is being returned.
 */
export const log = param => {
    console.log(param)
    return param
}


/* Exporting the default object. */
export default{
    handleStatus
}