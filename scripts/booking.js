/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let counter= 0;
let ratePerClick = 35;
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const fullDay = document.getElementById('full');
const halfDay = document.getElementById('half');
const calculatedCost = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

document.addEventListener('DOMContentLoaded', function() {
    calculatedCost.innerHTML = 0;
    fullDay.classList.add('clicked');
    
});

function reset() {
    counter = 0;
    ratePerClick = 35;
    calculatedCost.innerHTML = 0;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
}






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener('click', function(){
    toggleDay(monday);
});
tuesday.addEventListener('click', function(){
    toggleDay(tuesday);
});
wednesday.addEventListener('click', function(){
    toggleDay(wednesday);
});
thursday.addEventListener('click', function(){
    toggleDay(thursday);
});
friday.addEventListener('click', function(){
    toggleDay(friday);
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', reset);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener('click', function(){
    ratePerClick = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    updateTotalCount();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', function(){
    ratePerClick = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    updateTotalCount();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function updateTotalCount(){
    const totalCount = counter * ratePerClick;
    calculatedCost.textContent =  totalCount;
}

function toggleDay(dayElement) {
    const fullDay = document.getElementById('full');
    const halfDay = document.getElementById('half');
    if (dayElement.classList.contains('clicked')) {
        dayElement.classList.remove('clicked');
        counter--;
    } else {
        dayElement.classList.add('clicked');
        counter++;
    }
    if (counter === 0) {
        halfDay.classList.remove('clicked');
        fullDay.classList.remove('clicked');
    }
    halfDay.disabled = counter === 0;
    fullDay.disabled = counter === 0;
    updateTotalCount();
}

