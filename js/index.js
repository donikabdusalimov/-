let fib = [0, 1];

let ask = +prompt('Привет! Сколько раз хотите, чтоб цыфры складывались?')

for (let i = 2; i <= ask; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);