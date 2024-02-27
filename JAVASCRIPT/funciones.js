const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1, 4)
console.log(result)


const square = p => {
    console.log(p)
    return p * p
}
const result2 = square(2)
console.log(result2);


const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log(tSquared);


//funciones anomimas
const suma = function (a, b) {
    return a + b
}

const resta = function (a, b) {
    return a - b
}


function operacionAsincrona(callback) {

    callback();
}

function miCallback() {
    console.log('Se ejecuto mi callback');
}

operacionAsincrona(miCallback);
