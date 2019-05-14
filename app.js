// napravio sam funkciju u kojoj ce se nalaziti sve funckije,
// kako ne bih imao globalne funckije sve ce se nalaziti unutar ove ovde

const game = () => {
    let scorePlayer = 0;
    let scoreComp = 0;

    const startGame = () => {
        //u principu mogao sam da definisem i gore playBtn ali cu
        //samo ovde koristi i u ovoj funkciji onda nema neke potrebe da je definisem gore kao "globalnu"
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            //zelimo da na klik intro povucemo sa stranice 
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn"); //dok u sledecem koraku ubacujemo match sa nasom igricom
        });


    }


    //   ovde cu pozivati sve inner funckije
    startGame();

}
// ovde pozivam glavnu funckiju koja ce povuci okidanje innerFunkcije unutar nje
game();