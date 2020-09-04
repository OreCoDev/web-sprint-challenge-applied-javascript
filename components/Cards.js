import axios from "axios";

const theCards = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then((stuff) => {
    const javascript = Object.values(stuff.data.articles.javascript)
    const bootstrap = Object.values(stuff.data.articles.bootstrap)
    const jquery = Object.values(stuff.data.articles.jquery)
    const node = Object.values(stuff.data.articles.node)
    const technology = Object.values(stuff.data.articles.technology)
    const topics = [javascript, bootstrap, jquery, node, technology]

    topics.forEach((articles) => {
        articles.forEach((item) => {
          theCards.append(cardMaker(item))
        })
      })
      
      })
      .catch((err) => {
        console.log(err);
  })


// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(obj) {
  const theCard = document.createElement("div");
  theCard.classList.add("card");

  const theHeadline = document.createElement("div");
  theHeadline.classList.add("headline");
  theHeadline.textContent = obj.headline;
  theCard.appendChild(theHeadline);

  const theAuthor = document.createElement("div");
  theAuthor.classList.add("author");
  theCard.appendChild(theHeadline);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.src = obj.authorPhoto;
  imgContainer.appendChild(theAuthor);

  const theyName = document.createElement("span");
  theyName.textContent = obj.authorName;
  imgContainer.appendChild(theyName);

  theHeadline.addEventListener("click", () => {
    console.log(obj.headline);

    const myContainer = document.querySelector(".cards-container");
    myContainer.appendChild(cardMaker(theCards));
  });
  return theCard;
}
