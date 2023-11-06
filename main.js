import './style.css'
import list from './quotes.json'

const quotes = Array.from(list.quotes);

function init(){
  document.getElementById('allQuotesButton').addEventListener('click', allQuotes);
  document.getElementById('the').addEventListener('click', theQuotes);
}

function theQuotes(){
  const objTheQuotes
}

function allQuotes(){
  const objAllQuotes = quotes.filter((quote) => {
     return quote.quote + quote.author;
  }).sort((a,b) => {
    if(a.author < b.author){
      return -1;
    }
    else if(a.author > b.author){
      return 1;
    }
    else{
      return 0;
    }
  });
  console.log(objAllQuotes);
  let list = document.getElementById("myList");
        objAllQuotes.forEach((item) => {
          let q = document.createElement("q");
          let li = document.createElement("li");
            li.innerText = item.author;
            q.innerText = item.quote;
            li.appendChild(q);
            list.appendChild(li);
        });
}



document.addEventListener('DOMContentLoaded', init);