// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errormsg = document.getElementById("modal")
errormsg.classList.add("hidden")

document.addEventListener("DOMContentLoaded", () => {
  const allHearts = document.querySelectorAll("span.like-glyph")
  console.log(allHearts)

  allHearts.forEach(hearts => hearts.addEventListener("click",heartClick))

  function heartClick(hearts){
    console.log(hearts.target)
    mimicServerCall()
      .then(() => {
      if (hearts.target.innerText === EMPTY_HEART){
        hearts.target.classList.add("activated-heart")
        hearts.target.innerText = FULL_HEART
      }
      else if (hearts.target.innerText === FULL_HEART){
        hearts.target.classList.remove("activated-heart")
        hearts.target.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      console.log(errormsg)
      errormsg.className = "show"

      setTimeout (() => {
        errormsg.className = "hidden"}, 3000)}
  )}
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
