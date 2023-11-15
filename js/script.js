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

    userNumb = Math.floor(Math.random()* 100) + 1;
    console.log(userNumb);
    

    aiNumb = Math.floor(Math.random()* 100) + 1;
    console.log(aiNumb);

    /* userNumbId.innerHTML = userNumb;
    aiNumbId.innerHTML = aiNumb; */

    if (userNumb > aiNumb){
        console.log('user win')
    }else if (aiNumb > userNumb){
        console.log('A.I. win')
    }else{
        console.log('no winner')
    }
})

/* ESERCIZIO 2 */