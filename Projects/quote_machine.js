var quotes = [
  {
    quote: "I'm Rocketman",
    author: "Elton John",
  },
  {
    quote: 'There is no passion to be found playing small, in settling for a life that is less than the one you are capable of living.',
    author: "Nelson Mandela",
  },
  {
    quote: 'Whether you believe you can or you cannot, you are right.',
    author: 'Henry Ford'
  },
  {
    quote: 'Yo, ADRIENNE!',
    author:'Rocky Balboa',
  },
  {
    quote: 'You better check yo self, before you rickity wreck yo self!',
    author: 'Ice Cube',
  }
]

function random(){
  let min = 0;
  let max = quotes.length;

  var randomNum = (function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }(min, max));

  return `"${quotes[randomNum].quote}"\n - ${quotes[randomNum].author}`
}
console.log(random());

function myFunction() {
   document.getElementById("quotescreen").innerHTML = random();
}

//console.log(getRandomInt(0, 4));
//console.log(Math.floor(Math.random() + 5));
