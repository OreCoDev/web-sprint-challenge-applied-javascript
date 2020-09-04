// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
function Header() {
  const theHeader = document.createElement("div");
  theHeader.classList.add("header");

  const theDate = document.createElement("span");
  theDate.classList.add("date");
  theDate.textContent = "March 28, 2020";
  theHeader.appendChild(theDate);

  const theTitle = document.createElement("h1");
  theTitle.textContent = "Lambda Times";
  theHeader.appendChild(theTitle);

  const theTemp = document.createElement("span");
  theTemp.classList.add("temp");
  theTemp.textContent = "98°";
  theHeader.appendChild(theTemp)

  return theHeader;
}
const myHeader = document.querySelector(".header-container");
myHeader.appendChild(Header());
