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
        //Kompjuter opcije
        //Pravim array kako bih prosao kroz loop kasnije
        const computerOptions = ['rock', 'paper', 'scissors'];
        const hands = document.querySelectorAll('.hands img');

        //Hand forEach funckija uz pomoc koje resetujemo animaciju svaki put nakon izvrsenja
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })



        options.forEach(option => {
            option.addEventListener('click', function () {


                //kreiram math number od 0 do 3 
                const computerNumber = Math.floor(Math.random() * 3);
                // spajam math.ranodm sa arrayom 
                const computerChoice = computerOptions[computerNumber];
                // Ovde pozivamo compareHands/ setTimeout stavljam radi kasnjena izvrsenja animacije

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice)
                    // Menjamo slike u skladu sa izborom

                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                }, 2000);
                //pravim animacije za pomeranje ruku
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";



            })
        })


    };
    // Ovde kreiramo score board gde cemo ispisivati nase rezultate i od kompjutera
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = scorePlayer; //definisali smo varijable iz html i dodelili mu vrednost scorePlayer
        computerScore.textContent = scoreComp; //definisali smo varijable iz html i dodelili mu vrednost scoreComp


    }

    // Ovde pisem logiku igrice sa uslovima 

    const compareHands = (playerChoce, computerChoice) => {
        // menjam text umesto naslova
        const winner = document.querySelector('.winner');
        // ako je izjedanceno
        if (playerChoce === computerChoice) {
            winner.textContent = 'It is a tie!';

            return;
        }
        // ako je rock
        if (playerChoce === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins';
                // ovde sada vrsimo inkrementaciju ako player pobedi, povecavamo mu +1 na score boardu gore
                scorePlayer++;
                updateScore(); // i ovde pozivamo update score svaki put kada izbaci rezlutat
                return;
            } else {
                winner.textContent = 'Computer wins'
                scoreComp++; // Ista prica je i za komp, povecavamo njemu skor +1 ako je pobedio
                updateScore();
                return;
            }
        };
        //ako je paper
        if (playerChoce === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins'
                scorePlayer++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins'
                scoreComp++;
                updateScore();
                return;
            }
        }
        //ako je scissors 

        if (playerChoce === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins'
                scorePlayer++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins'
                scoreComp++;
                updateScore();
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