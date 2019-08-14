const header= document.querySelector("header")
console.log(header)
header.textContent ="Boogers"
header.classList.add("red-text")

const h2=document.querySelector("h2")
console.log(h2)
h2.textContent ="Hey, I'm typing in the DOM";
h2.classList.add("blue-text");



// ```/----------------------- Lightning Exercise Three---------------//
// // In your JavaScript file, use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// // Log the reference to the console
// // Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"```

// // Message Input


// // Message #cohort-2

const bodyTextParagraphs = document.querySelectorAll(".body-text")
console.log(bodyTextParagraphs)

for(i = 0; i <bodyTextParagraphs.length; i++){
    console.log(bodyTextParagraphs[i])
    bodyTextParagraphs[i].innerHTML= "Hello, World!"
}