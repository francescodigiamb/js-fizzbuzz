// console.log ('hello world')

// Dichiariamo una variabile 

let number = 0

// console.log (number)


// Tramite 'ciclo for' incrementiamo la variabile fino a 100

for (let i= 0; i < 100; i++) {
    
    
    number = number + 1
    
    // console.log (number)
    
    const a = number % 3
    const b = number % 5
    const c = number % 15

    if (c === 0) {
        
        // Per i numeri che sono sia multipli di 3 che 5 stampiamo 'FizzBuzz'

            console.log ('FizzBuzz')
    
        } else if (b === 0) {
            
            // Per i multipli di 5 stampiamo 'Buzz'

            console.log ('Buzz')
    
        } else if (a === 0) {
            
            // Per i multipli di 3 stampiamo 'Fizz' al posto del numero
            
            console.log ('Fizz')

        } else {
            console.log (number)
                }
}

