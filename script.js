let quotes = [
  {
    quote: "Success is the sum of small efforts - repeated day in and day out.",
    autor: "T.S Eliot",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    autor: "Benjamin Disraeli",
  },

  {
    quote: "Only I can change my life.",
    autor: "Mark Twain",
  },

  {
    quote: "A person who never made a mistake never tried anything new.",
    autor: "Tupac",
  },
  {
    quote: "You learn more from failure than from success.",
    autor: "suhail",
  },
];

function getRandomQuotes() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  let randomNum = quotes[randomQuotes];
  return randomNum;
}



function printQuote(){
    let takeQuotes = getRandomQuotes()
    let mainBox = document.getElementById('main')
    let quoteString = `<p id="quote">${takeQuotes.quote}</p>
    <p id="author">${takeQuotes.autor}</p>`
    mainBox.innerHTML = quoteString

}



document.querySelector("#btn").addEventListener('click', printQuote())
