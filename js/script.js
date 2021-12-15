/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

//utilizzo Vue JS
const app = new Vue (
    {
        el: '#datas', //prendo l'id dell'elemento su cui voglio lavorare
        data: { //inserisco i dati
            message: 'Questo è un messaggio di test in un h1',
        }
    }
);