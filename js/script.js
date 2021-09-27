/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {quote: 'To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.' , source: 'Thích Nhất Hᾳnh'},
  {quote: 'Everything that has a beginning has an ending. Make your peace with that and all will be well.', source: 'Jack Kornfield'},
  {quote: 'Nothing every goes away until it has taught us what we need to know.', source: 'Pema Chödrön'},
  {quote: "Don't believe everything you think. Thoughts are just that - thoughts." , source: 'Allan Lokos'},
  {quote: 'Looking at beauty in the world, is the first step of purifying the mind.', source: 'Amit Ray'}

];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];   
}

// console.log(getRandomQuote(quotes)); //added to test and debug function




/***
 * `printQuote` function
***/
function printQuote() {
const randomQuote = getRandomQuote();

let html = '';
  
  html = `<p class = "quote">${randomQuote.quote}</p>
              <p class = "source">${randomQuote.source}`;
 // check on citation
  if ( randomQuote['citation'] ) {
 html += `<span class = "citation">${randomQuote.citation}</span>`;
}

 // check on year 
  if ( randomQuote['year'] ) {
  html += `<span class = "year">${randomQuote.year}</span>`;
}
   
}
html = `</p>`;


// Display Quotes
document.querySelector('.quote-box').innerHTML = html;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
