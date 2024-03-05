class Piatto {
    constructor(nome, immagine, prezzo, descrizione) {
        this.nome = nome;
        this.immagine = immagine;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
    }

    creaCard() {
        return `
            <div class="card mb-3 col-md-6" style="max-width: 660px;justify-content-center">
                <div class="row g-0">
                    <div class="col-md-4 col-sm-12">
                        <img src="${this.immagine}" class="img-fluid rounded-start border border-warning border-2 " alt="${this.nome}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="card-title">
                                <h5 class="d-inline">${this.nome}</h5>
                                <span class="price text" style="color: darkslategrey;">${this.prezzo}</span>
                            </div>
                            <p class="card-text">${this.descrizione}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

const piatti = [
    new Piatto("Bruschetta al Pomodoro","/img/bruschette.jpg", '9,00€', "Bruschetta al Pomodoro."),
    new Piatto("Risotto ai Funghi Porcini","/img/risotto.jpg","15,00€","Risotto cremoso preparato con funghi porcini freschi, cipolla, brodo di carne, vino bianco e parmigiano."),
    new Piatto("Filetto di Branzino al Forno","/img/carne.jpg","13,00€", "Filetto di branzino cotto al forno con erbe aromatiche, servito con patate al forno e verdure grigliate."),
    new Piatto("Insalata di Rucola e Pomodorini","/img/insalatap.jpg", "9,00€", "Rucola fresca con pomodorini ciliegia, condita con olio d'oliva,aceto balsamico, sale e pepe."),
    new Piatto("Tartare di Tonno","/img/tonno.jpg", "14,00€", "Tonno crudo tagliato a cubetti e condito con olio d'oliva, succo di limone, capperi, cipolla rossa e prezzemolo."),
    new Piatto("Spaghetti alla Chitarra con Vongole","/img/spaghetti.jpg", "14,00€", "Spaghetti di semola di grano duro con vongole fresche, aglio, prezzemolo, peperoncino e vino bianco."),
    new Piatto("Salmone in Crosta di Pistacchi","/img/salmone.jpg", "17,00€", "Filetto di salmone ricoperto di pistacchi tritati e cotto al forno,servito con salsa al limone e riso basmati."),
    new Piatto("Panna Cotta con Coulis di Frutti di Bosco","/img/pannacotta.jpg", "12.99€", "Crema dolce e vellutata preparata con panna, zucchero e gelatina,servita con salsa di frutti di bosco."),
    new Piatto("Chardonnay","/img/vino1.jpg", "12.99€", "Un vino bianco secco e corposo, con note di frutta tropicale e leggero sentore di vaniglia. Ottimo da abbinare a piatti di pesce e risotti."),
    new Piatto("Pinot Grigio","/img/vino2.jpg", "12,99€", "Un vino bianco fresco e fruttato, con note di agrumi e fioribianchi. Perfetto da gustare come aperitivo o in abbinamento a piatti leggeri come insalate e antipasti."),
];


function generaCardPiatti(piatti) {
    const contenitorePiatti = document.getElementById('menuItemsContainer');
    piatti.forEach(piatto => {
        contenitorePiatti.innerHTML += piatto.creaCard();
    });
}

generaCardPiatti(piatti);

    

