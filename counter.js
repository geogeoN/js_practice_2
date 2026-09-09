const createCounter = function(n) {
    let counter = n;

    return function() {
        return counter++;
    }
}