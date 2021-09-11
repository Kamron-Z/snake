let div = document.querySelectorAll("div")
let time = 100
let isTrue = false

let lastDiv = div.length - 1
let counter = 0
div[div.length - 1].style.display = "none"

setInterval(() => {

   div[counter].style.backgroundColor = "green"

   if (counter == div.length - 1) {
      isTrue = true
   } else if (counter == 0 ) {
      isTrue = false
      div[counter].style.display = "none"
   }

   if (isTrue == true) {
      div[counter].style.backgroundColor = "red"
      counter--
   }
   else {
      counter++
   }

   console.log(counter);
}, time)