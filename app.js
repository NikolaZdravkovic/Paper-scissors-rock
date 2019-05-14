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
    //Povezujem dugmice

    const playMatch = () => {
        //ovde sve buttone u clasi options pozivamo sa queryselctorom
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //Kompove opcije
        //Pravim array kako bih prosao kroz loop kasnije
        const computerOptions = ['rock', 'paper', 'scissors'];



        options.forEach(option => {
            option.addEventListener('click', function () {


                //kreiram math number od 0 do 3 
                const computerNumber = Math.floor(Math.random() * 3);
                // spajam math.ranodm sa arrayom 
                const computerChoice = computerOptions[computerNumber];


            })
        })


    };

    // Ovde pisem logiku igrice sa uslovima 

    const compareHands = (playerChoce, computerChoice) => {
        // menjam text umesto naslova
        const winner = document.querySelector('.winner');
        // ako je izjedanceno
        if (playerChoce === computerChoice) {
            winner.textContent = 'It is a tie!';
            //ako dodjemo do ovde ,return ide samo da bi izasao iz funckije
            return;
        }
        // ako je rock
        if (playerChoce === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins'
                return;
            } else {
                winner.textContent = 'Computer wins'
                return;
            }
        };
        //ako je paper
        if (playerChoce === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins'
                return;
            } else {
                winner.textContent = 'Computer wins'
                return;
            }
        }
        //ako je scissors 

        if (playerChoce === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins'
                return;
            } else {
                winner.textContent = 'Computer wins'
                return;
            }
        }
    }

    //   ovde pozivam sve inner funckije
    startGame();
    playMatch();
}
// ovde pozivam glavnu funckiju koja ce povuci okidanje innerFunkcije unutar nje
game();