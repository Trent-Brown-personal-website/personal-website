const quotes = [
    {
    quote: "Change your thoughts and you change your world.",
    source: "Norman Vincent Peale",
    },
    {
      quote: "It is those we live with and love and should know who elude us.",
      source: "Norman Maclean",
      citation: "A river runs through it",
    },
    {
      quote: "That's one small step for a man, one giant leap for mankind.",
      source: "Neil Armstrong",
      year: "1969"
    },
    {
      quote: "Son, when the Marine Corps wants you to have a wife, you will be issued one.",
      source: "Chesty Puller"
    },
    {
      quote: "I always win Jack, one way or another!",
      source: "Caledon Hockley",
      citation: "RMS Titanic",
      year: "1912"
    },
    {
      quote: "Never believe what you read on the internet just because there is a picture with a quote next to it.",
      source: "President Abraham Lincoln",
      year: "1864"
    },
    {
      quote: "Be bitter, stay angry, and blame everyone!",
      source: "Axl Rose"
    },
    {
      quote: "You ever been to a caucus?... No you haven't. You're a lying dog-faced pony soldier.",
      source: "President Joe Biden"
    },
    {
      quote: "We're rounding 'em up in a very humane way, in a very nice way. And they're going to be happy because they want to be legalized. And, by the way, I know it doesn't sound nice. But not everything is nice.",
      source: "President Donald Trump",
      citation: "60 Minutes",
      year: "2018"
    }
    ]
    
    const getRandomQuote = (quotes) => {
        let math = Math.floor(Math.random() * quotes.length)
        let randomNumber = quotes[math]
        const randomQuote = randomNumber
        return randomQuote
    }
    
    const printQuote = () => {
      let randomQuote = getRandomQuote(quotes)
      let htmlQuote = `<p class="quote">${randomQuote.quote}</p>`
      let htmlSource = `<p class="source">-${randomQuote.source}`
      let html = htmlQuote + htmlSource
    
        if ( randomQuote.citation ) {
          html += `<span class='citation'> ${randomQuote.citation}, </span>`
        }
        if ( randomQuote.year ) {
          html += `<span class='year'> ${randomQuote.year}</span>`
        }
      
      html += '</p>'
        return document.getElementById("quote-box").innerHTML = html
     }
    
      setInterval(printQuote, 7000)
   
    // document.getElementById('load-quote').addEventListener("click", printQuote, false);
    

