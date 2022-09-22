const toggleFall = () => {
  
   document.querySelector("body").className = "fall";

   document.querySelector("h1").textContent = "Happy Fall";

//    Added above code to allow links to click bewteen
}

const toggleWinter = () => {
   
    document.querySelector("body").className = "winter";

    document.querySelector("h1").innerText = "Happy Winter";

    // Three options to add title that changes when clicking 

}
const toggleSpring = () => {

    document.querySelector("body").className = "spring";

    document.querySelector("h1").innerHTML = "Happy Spring";
   
}