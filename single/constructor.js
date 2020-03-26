function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

var card1 = new Card("하트", "A")
var card2 = new Card("스페이스", "B")
var card3 = new Card("클로버", "C")

console.log(card1)
console.log(card2)
console.log(card3)

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI = this.radius * this.radius;
    };
}

var p = {x:0,y:0};
var c = new Circle(p,2.0);
console.log("넓이: "+c.area())

