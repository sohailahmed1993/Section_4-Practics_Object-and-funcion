let largeCountries = ["China" , "India", "USA", "Indonesia", "Pakisthan"];

largeCountries.pop()


for(let i = 0; i < largeCountries.length; i++){
    console.log(" - " + largeCountries[i])
}


let appleEl =document.getElementById("apple-el");
let orangeEl =document.getElementById("orange-el");
let bananaEl =document.getElementById("banana-el")

let fruits = ["🍊","🍎","🍌", "🍊","🍎","🍌","🍊","🍎","🍌","🍊","🍎","🍌","🍊","🍎","🍌"];


function abc(){
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === "🍎"){
            appleEl.textContent += "🍎" + " ";
        }else if(fruits[i] === "🍊"){
            orangeEl.textContent += "🍊" + " ";
        }else {
            bananaEl.textContent += "🍌"
        }
    }
}

abc();