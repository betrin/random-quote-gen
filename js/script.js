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

var quotes = [
    {
      quote: "Power is dangerous. It corrupts the best and attracts the worst.",
      source: "Ragnar Lodbrok",
      citation: "Vikings",
      tags: ['Shows', 'Historical']
    },
    {
      quote:  "When I wrote this code, only God and I understood what I did. Now only God knows.",
      source: "",
      tags: ['dev']
    },
    {
      quote: "Don't waste your time looking back. You're not going that way.",
      source: "Ragnar Lodbrok",
      citation: "Vikings",
      tags: ['Shows', 'Historical']

    },
    {
      quote: "If the code doesn't bother you, don't bother it.",
      source: "",
      tags: ['dev']
    },
    {
      quote: "Power is only given to those who are prepared to lower themselves to pick it up.",
      source: "Ragnar Lodbrok",
      citation: "Vikings"
    },
    {
      quote: "Experience is the name everyone gives to their mistakes.",
      source: "Oscar Wilde",
      year: "1892",
      tags: ['Shows', 'Historical']
    },
    {
      quote: "All we have to decide is what to do with the time that is given us.",
      source: "Ragnar Lodbrok",
      citation: "Vikings",
      tags: ['Shows', 'Historical']
    },
    {
      quote: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      source: "J.R.R. Tolkien",
      tags: ['Philosophy']
    },
    {
      quote: "The gods are man's creation, to give answers that they are too afraid to give themselves.",
      source: "Ragnar Lodbrok",
      citation: "Vikings",
      tags: ['Shows', 'Historical']
    }
  ]

  // Getting random color
  function setBg() {
    // Generate random color    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = '0.5'; // Random between 0-1
  
    let bgColour = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    
    // Assigned element and give it background colour    
    let container = document.getElementsByClassName('container');
    for (let i = 0; i < container.length; i++) {
        container[i].style.backgroundColor = bgColour;
    }
  }
  /***
  * `getRandomQuote` function
  ***/

    function getRandomQuote () {
      // Get Random number
      let randomNum = Math.floor(Math.random() * (quotes.length));
      return quotes[randomNum];
    }

  /***
  * `printQuote` function
  ***/

  function printQuote() {
    // Clear auto-refresh when function runs
    clearTimeout(timer)
    runTimer()
    // Change bg
    setBg();  
  
    let quoteBox = document.getElementById('quote-box');
    let data = getRandomQuote(quotes);

    // Iniital Content
    let content = `<p class="quote">${data.quote}</p>
    <p class="source">${data.source ? data.source : "Anonymous"}`;

    // Citation Check
    if (data.citation) {
      content += `<span class="citation">${data.citation}</span>`
    }
    
    // Year Check
    if (data.year) {
      content += `<span class="year">${data.year}</span>`
    }
   
    // Tags Check
    if (data.tags.length >= 1) {
        content += `<br>`
      for (let i=0; i < data.tags.length; i++) {
        content += `<span class="tags">#${data.tags[i]}</span>`
      }
    }

    content += `</p></div>`
    quoteBox.innerHTML = content;
  }
 
  // Timer to auto refresh
  const runTimer = () => {
    timer = window.setTimeout(
      () => {
        printQuote();
      }, 5000);
  }

  // initialise timer for auto refresh
  runTimer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);