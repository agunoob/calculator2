"use strict";

let numbers = document.querySelectorAll('.numbers');
let result = document.querySelector('.result');
let history = document.querySelector('.history');
let show = document.querySelector('p');
let a= '';
let b= null;
let c= '';


//zmienna a i c
function liczby(cyfra) {
    if ( !b) {
        console.log(cyfra);
        a+= cyfra;
        result.value = a;
    // } else if (function equals()) {
    //     a+= cyfra;
    //     result.value = a;
    //     console.log('a:', a, 'b:', b, 'c:', c);
    //     b = null;
    //     c = '';
    //     return;
    } else {
        console.log(cyfra);
        c+= cyfra;
        result.value = c;
    }
    console.log('a:', a, 'b:', b, 'c:', c);
}

//zmienna b
function sum() {
    result.value = '+';
    b = '+';
    console.log('a:', a, 'b:', b, 'c:', c);
}

function sub() {
    result.value = '-';
    b = '-';
    console.log('a:', a, 'b:', b, 'c:', c);
}

function multi() {
    result.value = '*';
    b = '*';
    console.log('a:', a, 'b:', b, 'c:', c);
}

function div() {
    result.value = '/';
    b = '/';
    console.log('a:', a, 'b:', b, 'c:', c);
}

//wynik
function equals() {
    console.log('=');
    result.value = '= ' + eval( a + b + c);
    console.log(eval(a+b+c) ,'a:', a, 'b:', b, 'c:', c);
    let historyElement = document.createElement("span");
    historyElement.innerText = `${a} ${b} ${c} = ${eval(a+b+c)}`;
    console.log(historyElement);
    // history.appendChild(historyElement);
    history.insertBefore(historyElement, history.firstChild);
    show.innerHTML = a + b + c + '= ' + eval( a + b + c);
    historyElement.onclick = function() {
        show.innerHTML=historyElement.innerText;
    }
}

//C
function erase() {
    result.value= '';
    a = '';
    b = null;
    c = '';
    console.log('a:', a, 'b:', b, 'c:', c);
}

function Xerase() {
    let l= result.value.slice(0, -1);
    if (!b) {
        a = l;
        result.value = l;
    // } else if (function equals()) {
    //     a+= cyfra;
    //     result.value = a;
    //     console.log('a:', a, 'b:', b, 'c:', c);
    //     b = null;
    //     c = '';
    //     return;
    } else {
        c= l;
        result.value = l
    }
    console.log('a:', a, 'b:', b, 'c:', c);
}

function refresh() {
    history.innerHTML= '';
}