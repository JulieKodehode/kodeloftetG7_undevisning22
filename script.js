// [] square bracket = array
// {} curly bracket = object

const myAPI = [
    // data 0
    {fruit: "Apple", good: "yes"}, 

    // data 1
    {fruit: "Banana", good: "no"}, 

    // data 2
    {fruit: "Orange", good: "yes"}
];

console.log(myAPI[1].fruit);
console.log(myAPI[1].good);


const catFact = [
    {fact: "Cats are the best", length: "17"},
    {fact: "Cats have four legs", length: "21"}
]

// Fetched catFact variable. Spesificly object nr 1. Spesificly the key fact.
console.log(catFact[1].fact);


async function catFactGenerator() {
    // HENT
    const response = await fetch("https://catfact.ninja/facts"); 
    console.log(response)  

    // MODIFISER
    const catFactData = await response.json();

    // Send
    console.log(catFactData.data[0].fact); 

    // Get the element from HTML
    const catFactDisplay = document.querySelector("#catFactDisplay")
    
    // Display the cat fact in the HTML-element
    catFactDisplay.textContent = catFactData.data[0].fact;
};

catFactGenerator()