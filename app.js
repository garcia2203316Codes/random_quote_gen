



const QUOTES = [
    {quote: 'The measure of intelligence is the ability to change', author: "Albert Einstein"}, 
    {quote: "The greatest discovery of all time is that a person can change his future by merely changing his attitude", author: "Oprah Winfrey"},
    {quote: "Every day the clock resets. Your wins don't matter. Your failures don't matter. Don't stress on what was, fight for what could be.", author: "Sean Higgins"},
    {quote: "Don’t let rejection create self-doubt. The founder of Starbucks was turned down by 217 of the 242 investors he initially spoke with.", author: "Elizabeth Galbut"},
    {quote: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy"},
    {quote: "Play to your strengths. If you aren’t great at something, do more of what you’re great at.", author: "Jason Lemkin"},
    {quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", author: "Harriet Tubman"},
]

window.onload = init
function init() {
    generateQuote()
}



function generateQuote() {
    let  randomIndex = Math.floor(Math.random() * QUOTES.length)
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%20is%20not%20what%20you%20do%20for%20your%20children%2C%20but%20what%20you%20have%20taught%20them%20to%20do%20for%20themselves%2C%20that%20will%20make%20them%20successful%20human%20beings.%22%20Ann%20Landers"
    document.getElementById('tweet-quote').href = twitterLink
    document.getElementById('text').innerText = QUOTES[randomIndex].quote
    document.getElementById('author').innerText = QUOTES[randomIndex].author
}

