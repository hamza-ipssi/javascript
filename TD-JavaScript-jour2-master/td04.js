/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et 
ne retournant que les nombres de ce tableau faisant partie 
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */

const fib = (n) => {
    return n == 0 ? 0 : n == 1 ? 1 :  fib(n-1) + fib (n-2);
}

const fibFilter = (array) => {
    var res = [];
    var max = Math.max(...array);
    var currentFib = 0;
    var cpt = 0;
    while (max > currentFib){
        currentFib = fib(cpt);
        if (array.find(val => { return val == currentFib}) !== undefined){
            res.push(currentFib);
        }
        cpt++;
    }
    array = array.filter(val => {
        if (res.indexOf(val) !== -1) { return true };
        return false;
    })
    console.log(array);
    return array;
}

/* Testing Part */
const array = [0,1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter);
console.log(fibFilter(array).toString() == [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD01 :: Success' : 'TD01 :: Failed')
