/* An array of quote object in a variable called quotes */

const quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    citation: 'Twitter',
    year: '2001'
  },
  {
    quote: ' You miss 100% of the shots you don’t take',
    source: 'Wayne Gretzky',
    citation: '',
    year: ''
  },
  {
    quote: 'Debt is dumb, cash is King',
    source: 'Dave Ramsey',
    citation: '',
    year: null
  },
  {
    quote: 'Life is 10% what happens to me and 90% of how I react to it',
    source: 'Charles Swindoll',
    citation: '',
    year: null
  },
  {
    quote: 'Che Che Che',
    source: 'Joe Santos Garcia',
    citation: 'CodingPhase.com',
    year: ''
  }
];

// RandomQuote function that returns a random quote
const getRandomQuote = () => {
  // randomNumber variable assigned to a random number whcih will be between 0 and quotes.length
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

  // return the value of the quotes araay at the randomNumber position
};

// Change background color of the body element
const randomColor = () => {
  let bgColor;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
};

// getQuotes object that will determine if our interval is running or not
let getQuotes = {
  isRunning: false,
  interval: ''
};

/*  printQuote function that calls the randomQuote function
    assigns an empty string to quoteString and cumulatively assigns the quote properties also checks to make sure that a year and citation was provided
*/
const printQuote = () => {
  // if our interval is already running it will clear the Interval, change the button text back to default and reset isRunning back to false
  if (getQuotes.isRunning) {
    clearInterval(getQuotes.interval);
    document.querySelector('#loadQuote').innerHTML = 'Show another quote';
    getQuotes.isRunning = false;
  } else {
    // set our isRunning to true to prevent user from clicking multiple times
    getQuotes.isRunning = true;
    getQuotes.interval = setInterval(() => {
      //Get Quote Object and assign it to quote variable
      const quote = getRandomQuote();
      // empty quote string assigned to the variable
      let quoteString = '';
      quoteString += `<p class="quote">${quote.quote}</p>`;
      quoteString += `<p class="source">${quote.source}`;
      // Conditional to check if a citation was provided if so will assign it to the quoteString
      if (quote.citation !== '') {
        quoteString += `<span class="citation">${quote.citation}</span>`;
      }
      // Conditional to check if a year was provided if so will assign it to the quoteString
      if (quote.year !== '' && quote.year !== null) {
        quoteString += `<span class="year">${quote.year}</span>`;
      }
      quoteString += `</p>`;
      document.querySelector('#quote-box').innerHTML = quoteString;
      document.querySelector('#loadQuote').innerHTML = 'Click to stop';
      randomColor();
    }, 3000);
  }
};

// EventListener for when the "Show another quote" button will fire off the printQuote function
document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);
