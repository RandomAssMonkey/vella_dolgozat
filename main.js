import './style.css'
import list from './quotes.json'

const quotes = Array.from(list.quotes);

function init(){
  document.getElementById('allQuotesButton').addEventListener('click', allQuotes);
  document.getElementById('the').addEventListener('click', theQuotes);
  document.getElementById('long').addEventListener('click', longQuotes);
  document.getElementById('dbNumber').addEventListener('click', dbQuotes);
}

function dbQuotes(){
  const author = document.getElementById('author').value;
  const objDBQuotes = quotes.map((quote) => quote.author);
  let counter = 0;
  console.log(objDBQuotes);
  objDBQuotes.forEach((item) => {
    if(item == author){
      counter++;
    }
  })
  document.getElementById("inputNumber").value = counter;
}

function longQuotes(){
  const objLongList = quotes.map((quote) => quote.quote.length).join(', ');
  console.log(objLongList);
  let p = document.createElement('p');
  let container = document.getElementById("paragraph");
  p.innerText = objLongList;
  container.appendChild(p);
}

function theQuotes(){
  const objTheQuotes = quotes.map((quote) => {
    return quote.quote;
  })

  let list = document.getElementById("olList")
  objTheQuotes.forEach((item) => {
    if(item.includes(' the ')){
       item.replace(' the ', ' <b> the </b> '); 
       return item;
    }
    else if(item.includes(' The ')){
       item.replace(' The ', ' <b> The </b> ');
       return item;
    }
  })
  objTheQuotes.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
  })
  
  console.log(objTheQuotes);
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