import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/topics')
 .then(stuff => {
 stuff.data.topics.forEach((item) => {
theseTopics.appendChild(myTabs(item))
 })
 console.log(stuff.data)
 })
 .catch(err =>
     console.log(err))

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


/*
{
    "topics": [
        "javascript",
        "bootstrap",
        "technology",
        "jquery",
        "node.js"
    ]
}

*/


function myTabs(obj) {
    const thisTab = document.createElement('div')
thisTab.classList.add('tab')
thisTab.textContent = obj
return thisTab
}
const theseTopics = document.querySelector('.topics')

// function myTabs(obj){

// const theTabs = document.createElement('div')
// theTabs.classList.add('tab')
// theTabs.textContent = obj
// return theTabs
// }
// const theseTopics = document.querySelector('div-topics')
// theseTopics.appendChild(myTabs(theseTopics))
  








// const theFirst = document.createElement('div')
// theFirst.classList.add('topics')


// const javas = document.createElement('div')
// theFirst.classList.add('tab')
// javas.appendChild(theFirst)

// const boots = document.createElement('div')
// theFirst.classList.add('tab')
// boots.appendChild(theFirst)

// const techno = document.createElement('div')
// theFirst.classList.add('tab')
// techno.appendChild(theFirst)

// const jquer = document.createElement('div')
// theFirst.classList.add('tab')
// jquer.appendChild(theFirst)

// const nodes = document.createElement('div')
// theFirst.classList.add('tab')
// nodes.appendChild(theFirst)

// return theFirst
// }

// theseTopics.appendChild(myTabs())

