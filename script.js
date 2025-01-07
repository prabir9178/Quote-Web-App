const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector("button"),
  authorName = document.querySelector(".name"),
  // speechBtn = document.querySelector(".speech"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  synth = speechSynthesis;

// Fetch and display a random quote
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";
  });
}



// Copy quote to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

// Share quote on Twitter
twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

// Generate a new quote on button click
quoteBtn.addEventListener("click", randomQuote);
