/* An array of quote object in a variable called quotes */

const quotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
    citation: "Twitter",
    year: "2001",
    tag: "inspirational"
  },
  {
    quote: " You miss 100% of the shots you don’t take",
    source: "Wayne Gretzky",
    citation: "",
    year: "",
    tag: "inspirational"
  },
  {
    quote: "Debt is dumb, cash is King",
    source: "Dave Ramsey",
    citation: "",
    year: null,
    tag: "financial"
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it",
    source: "Charles Swindoll",
    citation: "",
    year: null,
    tag: "inspirational"
  },
  {
    quote: "I'm back and done did it again",
    source: "Joe Santos Garcia",
    citation: "CodingPhase.com",
    year: "",
    tag: "humor"
  },
  {
    quote: "If you fail to plan, you are planning to fail!",
    source: "Benjamin Franklin",
    citation: "",
    year: "",
    tag: "inspirational"
  },
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    source: "George Santayana",
    citation: "",
    year: 1905,
    tag: "philosophy"
  },
  {
    quote: "You better check yourself before you wreck yourself.",
    source: "Ice Cube",
    citation: "The Predator Album",
    year: "1992",
    tag: "music"
  }
];

// RandomQuote function that returns a random quote

const getRandomQuote = () => {
  // randomNumber variable assigned to a random number whcih will be between 0 and quotes.length
  let randomNumber = Math.floor(Math.random() * quotes.length);

  // return the value of the quotes araay at the randomNumber position
  return quotes[randomNumber];
};

// Change background color of the body element
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.querySelector("body").style.backgroundColor = `rgb(${r},${g},${b})`;
  document.querySelector(
    "#loadQuote"
  ).style.backgroundColor = `rgb(${r},${g},${b})`;
};

/*  printQuote function that calls the randomQuote function
    assigns an empty string to quoteString and cumulatively assigns the quote properties also checks to make sure that a year and citation was provided
*/
const printQuote = () => {
  // Get a Random Background color
  randomColor();

  //Get Quote Object and assign it to quote variable
  const quote = getRandomQuote();
  // empty quote string assigned to the variable
  let quoteString = "";
  quoteString += `<p class="quote">${quote.quote}</p>`;
  quoteString += `<p class="source">${quote.source}`;
  // Conditional to check if a citation was provided if so will assign it to the quoteString
  if (quote.citation) {
    quoteString += `<span class="citation">${quote.citation}</span>`;
  }
  // Conditional to check if a year was provided if so will assign it to the quoteString
  if (quote.year) {
    quoteString += `<span class="year">${quote.year}</span>`;
  }
  // Condition to check if the "tag" is inspirational which will display along with the quote
  if (quote.tag) {
    quoteString += ` <sup class="tag">${quote.tag}</sup>`;
  }
  quoteString += `</p>`;
  document.querySelector("#quote-box").innerHTML = quoteString;
};

setInterval(printQuote, 5000);
// EventListener for when the "Show another quote" button will fire off the printQuote function
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
