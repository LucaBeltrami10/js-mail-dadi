/* ESERCIZIO 1 */
/* output in pagina e console per restituire il numero randomico generato al click di un bottone*/
/* 1)seleziono i due elementi html in cui far comparire il numero selezionato */
/* 2) addevent listener al bottone. inserisco dentro tutto ciò che elenco qui sotto */
/* 3) genero due numeri casuali e li inserisco all'interno di html */
/* 4) creo condizione in cui stabilisco il numero vincitore */
/* 4) applico eventuali elementi di stile alla pagina */

const userNumbId = document.getElementById('my_user-numb');
const aiNumbId = document.getElementById('my_ai-numb');

const goButton = document.querySelector('#es-1 article button');

let userNumb;
let aiNumb;

goButton.addEventListener('click', function(){
    console.log('Click rilevato');

    userNumb = Math.floor(Math.random()* 10) + 1;
    console.log(userNumb);
    

    aiNumb = Math.floor(Math.random()* 10) + 1;
    console.log(aiNumb);

    userNumbId.innerHTML = userNumb;
    aiNumbId.innerHTML = aiNumb;

    if (userNumb > aiNumb){
        console.log('user win')
        document.getElementById('you-win').classList.remove('d-none')
        document.getElementById('you-lose').classList.add('d-none')
        document.getElementById('pari').classList.add('d-none')
    }else if (aiNumb > userNumb){
        console.log('A.I. win')
        document.getElementById('you-lose').classList.remove('d-none')
        document.getElementById('you-win').classList.add('d-none')
        document.getElementById('pari').classList.add('d-none')
    }else{
        console.log('no winner')
        document.getElementById('pari').classList.remove('d-none')
        document.getElementById('you-lose').classList.add('d-none')
        document.getElementById('you-win').classList.add('d-none')
    }
})

/* ESERCIZIO 2 */

/* 1) chiedo all'utente la sua email */
/* 2) creo lista di email consentite con un array */
/* 3) creo un ciclo che mi controlli tutte le email inserite nel mio array */
/* 4) dentro ad ogni ciclo metto in relazione l'email inserita con l'email corrispondente al numero del ciclo in corso */


let emailUtente = prompt('inserisci email')

const listaEmail = ['luca@gmail.com', 'marco@gmail.com', 'mario@gmail.com']
console.log(listaEmail)

for (let i=0; i<listaEmail.length; i++){
    console.log(listaEmail[i])
}

