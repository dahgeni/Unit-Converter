var output = document.querySelector("#output"); 
output.style.visibility = "hidden";
//catch user input
document.querySelector("#inputValue").addEventListener('input', convert);
var output = document.querySelector("#output");
//catch unit selection
document.querySelector('#unit').addEventListener("input", convert);

function convert(e) {
//get user input
var input= document.querySelector("#inputValue").value;
//get unit selection
var unit = document.querySelector("#unit").value;
//console.log(input + " " + unit);
output.style.visibility = "visible";

//check the unit value
switch(unit) {
    case 'lbs':
    convertLbs(input);
    break;
    case 'grams':
    convertGrams(input);
    break;
    case 'kilograms':
    convertKilograms(input);
    break;
    case'meters':
    converMeters(input);
    break;

    } 

}

function convertLbs(num) {
    //console.log(num);
    output.innerHTML = 
    //grams
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Grams:</h4>' +
    '<div>' + num * 453.592 + '<div>'
        '</div>'
    '</div>'
    //kilograms
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Grams:</h4>' +
    '<div>' + num * 453.592 /1000 + '<div>'
        '</div>'
    '</div>'
    //ounces
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Grams:</h4>' +
    '<div>' + num * 16 + '<div>'
        '</div>'
    '</div>'
    
}
function convertGrams(num) {
    output.innerHTML = 
    //pounds
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Pounds:</h4>' +
    '<div>' + num * 0.00220462 + '<div>'
        '</div>'
    '</div>'
    //kilograms
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Kilograms:</h4>' +
    '<div>' + num  / 1000 + '<div>'
        '</div>'
    '</div>'
    //ounces
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Ounces:</h4>' +
    '<div>' + num * 0.035274 + '<div>'
        '</div>'
    '</div>'
    //console.log(num);
    
}
function convertKilograms(num) {
    output.innerHTML = 
    //pounds
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Pounds:</h4>' +
    '<div>' + num * 2.20462 + '<div>'
        '</div>'
    '</div>'
    //Grams
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Kilograms:</h4>' +
    '<div>' + num  * 1000 + '<div>'
        '</div>'
    '</div>'
    //ounces
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Ounces:</h4>' +
    '<div>' + num * 35.274 + '<div>'
        '</div>'
    '</div>'
   // console.log(num);
}
function convertMeters(num) }            output.innerHTML = 
    //Miles
    '<div class = card bg-primary mb-2">' + '<div class= "card-"holder">' + 
    '<h4>Miles:</h4>' +
    '<div>' + num *0.000621371 + '<div>'
        '</div>'
    '</div>'
    //Inches
    '<div class = card bg-primary mb-2">' + '<div class= "card-holder">' + 
    '<h4>Inches:</h4>' +
    '<div>' + num  * 39.37 + '<div>'
        '</div>'
    '</div>'
    
       
   // console.log(num);
}
    //get user input value
   // var input = document.querySelector("inputValue").value;
  // var input = e.target.value;
   //show output
   //document.querySelector("#output").style.visibility = 'visible';
    //console.log(input);

    //pound to grams
    //document.querySelector('#gram').textContent = input * 453.592;
    
    //pounds to kilograms
   // document.querySelector("#kg").textContent = (input * 453.592) / 1000;

    //pounds to ounces
    //document.querySelector("#oz").textContent = input * 16;

