console.log('JS OK')
/*
1)imposto un ciclo di for per generare i numeri da 1 a 100
2)applico delle condizioni per filtrare i multipli di 3
3)applico delle condizioni per filtrare i multipli di 5
4)applico delle condizioni affiche' i multipli di 3 e 5 cengano raggruppate 
5)applico delle classi ad ogni condizione
6)stampo in pagina */

const number = document. getElementById('number')
const Fizz = document. getElementById('Fizz')
const Buzz = document. getElementById('Buzz')
const BuzzFizz = document. getElementById('BuzzFizz')


for (let i = 1; i <= 100; i++){
   

    if ( i % 3 === 0 ){   
    Fizz.innerText += (' Fizz') 
    console.log('Fizz');
    }

    else if ( i % 5 === 0 ){ 
    Buzz.innerText += (' Buzz')
    console.log('Buzz');
    }

    else if ( i % 3 === 0 && i % 5 === 0){
    BuzzFizz.innerText += (' Buzz')
    console.log(' Fizzbuzz');
    }

    else {
        number.innerText += (i)
        console.log(i)
    }

   
    

   
    
   
    
};

