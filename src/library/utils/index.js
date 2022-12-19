/**
 * 
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 * @example const handleButtonClick = runOnce(() => {
  console.log("This function will run only once in 500 milliseconds");
}, 3000);
 */
export function runOnce(func, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            return func(...args);
        }
    };
}
