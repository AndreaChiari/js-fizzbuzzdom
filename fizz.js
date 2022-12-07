console.log('JS OK')
/*
1)imposto un ciclo di for per generare i numeri da 1 a 100
2)applico delle condizioni per filtrare i multipli di 3
3)applico delle condizioni per filtrare i multipli di 5
4)applico delle condizioni affiche' i multipli di 3 e 5 cengano raggruppate 
5)applico delle classi ad ogni condizione
6)stampo in pagina */

for (let i = 1; i <= 100; i++){
   

    if ( i % 3 === 0 ){ 
    console.log('Fizz');
    }

    if ( i % 5 === 0 ){ 
    console.log('Buzz');
    }

    if ( i % 3 === 0 || i % 5 === 0){
    console.log('Fizzbuzz');
    }

    else {
        console.log(i)
    }

   
    

   
    
   
    
};

