
// -- Creating classes such as Card, Deck & Player
// -- Keeping in mind what fields and methods each class might have.
// -- Deal 26 Cards to 2 Players from a Deck
// -- Iterate through the turns where each Player plays a Card
// -- Award a point to the Player with the higher Card
// -- Ties result in zero points for both Players
// -- After all cards have been played, display the score and declare the winner.

const suit = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen','King', 'Ace'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card{
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.playerHand = [];
        this.score = 0;
    }

    addPlayerHand(deck){
        this.playerHand = deck;
    }
}

class Deck{
    constructor(){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
        this.deck = [];
    }

    createDeck(){
        for(let v = 0; v < value.length; v++){
            for(let s = 0; s < suit.length; s++){
                this.deck.push(new Card(value[v], suit[s], rank[v]))
            }
        }
        // console.log(this.deck)
    }

    shuffle(){
        let count = this.deck.length;
        while (count) {
            this.deck.push(this.deck.splice(Math.floor(Math.random() * count), 1)[0]);
            count -= 1;
        }
        return this.deck;
    }

    dealHand(){
        player1Hand = (this.deck.slice(0, 26));
        player2Hand = (this.deck.slice(26, this.deck.length));
    }

    start(){
        this.createDeck();
        this.shuffle();
        this.dealHand();
    }
}

function playGame(player1, player2){
    for(let i = 0; i < player1Hand.length; i++){
        if(player1Hand[i].rank > player2Hand[i].rank){
            player1.score++;
            console.log(`${player1.name} wins the battle\n
            ${player1.name} score: ${player1.score}\n
            ${player2.name} score: ${player2.score}\n
            `);
        } else if(player2Hand[i].rank > player1Hand[i].rank){
            player2.score++;
            console.log(`${player2.name} wins the battle\n
            ${player1.name} score: ${player1.score}\n
            ${player2.name} score: ${player2.score}\n
            `);
        } else {
            console.log("Round tie");
        }
    }
}

function endResults(player1, player2){
    if(player1.score > player2.score){
        console.log(`${player1.name} wins the war!\n
        ${player1.name} wins with ${player1.score} points\n
        ${player2.name} loses with ${player2.score} points\n
        `);
    } else if(player1.score < player2.score){
        console.log(`${player2.name} wins the war!\n
        ${player2.name} wins with ${player2.score} points\n
        ${player1.name} loses with ${player1.score} points\n
        `);
    } else {
        console.log(`${player1.name} and ${player2.name} have tied game!`);
    }
}

let player1Hand = [];
let player2Hand = [];

let freshDeck = new Deck();
freshDeck.start()

let player1 = new Player("Phanit");
let player2 = new Player("Ellie");

player1.addPlayerHand(player1Hand);
player2.addPlayerHand(player2Hand);

playGame(player1, player2);
endResults(player1, player2);

// console.log(player1);
// console.log(player2);