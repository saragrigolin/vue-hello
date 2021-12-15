/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Bonus:
In una cartella bonus:
Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
Poi aggiungiamo un pulsante per aumentare questo numero.
*/

//utilizzo Vue JS
const app = new Vue (
    {
        el: '#datas', //prendo l'id dell'elemento su cui voglio lavorare
        data: { //inserisco i dati
            message: 'Questo è un messaggio di test in un h1',
            image: 'https://www.aiapp.net/wp-content/uploads/2020/09/Agricoltura.jpg'
        }
    }
);