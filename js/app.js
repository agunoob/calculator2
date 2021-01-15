"use strict";
document.addEventListener('DOMContentLoaded', function() {
    console.log('js dziala');

    // C
    let erase= document.querySelector('.erase');
    erase.addEventListener('click', function() {
        console.log('C');
        document.querySelector('.result').value= "";
    });
    
    //(.onclick, petla)liczby let a, wyswietl
    let numbers= document.getElementsByClassName('numbers'); //dlaczego querySelectorAll nie dziala??
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].onclick = function(e) {
            document.querySelector('.result').value = numbers[i].innerHTML;
            let a= numbers[i].innerHTML;
            console.log(a);

             //(.onclick, petla)operations, let b, wyswietl
            let operations= document.getElementsByClassName('operations'); //dlaczego querySelectorAll nie dziala??
            for(let j = 0; j < operations.length; j++) {
                operations[j].onclick = function(f) {
                    document.querySelector('.result').value = operations[j].innerHTML;
                    let b= operations[j].innerHTML;
                    console.log(b);

                    //(.onclick, petla)liczby let c, wyswietl
                    let numbers2= document.getElementsByClassName('numbers'); //dlaczego querySelectorAll nie dziala??
                    for(let k = 0; k < numbers2.length; k++) {
                        numbers2[k].onclick = function(g) {
                            document.querySelector('.result').value = numbers2[k].innerHTML;
                            let c= numbers2[k].innerHTML;
                            console.log(c);

                            //wynik
                            let equals= document.querySelector('.equals');
                            equals.addEventListener('click', function() {
                                console.log('equals');
                                document.querySelector('.result').value= a + b + c;
                            })
                        }
                    }        
                }
            }
        }
    }

});