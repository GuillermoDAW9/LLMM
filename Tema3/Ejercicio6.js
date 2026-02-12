
const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky"
];


function newQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomIndex];
}
