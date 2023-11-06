import './style.css'
import quotes from './quotes.json'

function init(){
  const obj = quotes;
  console.log(obj);
  document.getElementById('allQuotesButton').addEventListener('click', allQuotes);
}

function allQuotes(){
  const objAllQuotes = Array.from(obj).map(quote => {
    return quote.quote + quote.author;
  })
}


document.addEventListener('DOMContentLoaded', init);