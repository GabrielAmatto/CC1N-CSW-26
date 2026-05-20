var issoeumastring = 'Isso é uma string';
let issoeumnumero = 4;
let issotambemeumnumero = 5;
const issoeumboleano = true;
let issotambemeumastring = '4';

console.log(issoeumnumero == issoeumastring);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);
console.log(issoeumnumero === issotambemeumnumero)
console.log(typeof issoeumastring == issoeumnumero);
console.log(typeof issoeumnumero);
console.log(typeof issoeumastring);
console.log(typeof issoeumboleano);


console.log(issoeumnumero + issotambemeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum.toPrecision(2));


for (let i =0; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i =0; i <=10; i += 2) {
        console.log(i);
}

let j = 1;
while (j <=10) { 
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

j=1;
while (j <=10) {
    {
        console.log(j);
    }
    j+=2;
}

console.log(j);

var elaglobal = "Eu sou uma variável global";
{
    let elalocal = "Eu sou uma variável local";
    console.log(elaglobal);
    console.log(elalocal);
}

console.log(elalocal);
