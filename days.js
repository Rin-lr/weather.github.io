import {day_blocks} from './show_days.js';

//GLOBAL
let days = document.getElementById("in-days");
var forecast = document.getElementById("forecast");

//values
var min = -30;
var max = 35;
var total = 0;
//amount of days and temp.
var all_temps = [];

//generate inputed days temp data.

function generate() {
    var i;

    
    console.log("generate btn pressed");
    for(i = 0; i < days.value; i++) {
        //math.floor rouds numbers
        all_temps.push(Math.floor(Math.random() *(max-min)+min));

        //set as total next temp i. Don't show every previous number again aka whole array. Only new created number.
        total = total + all_temps[i];
        //console.log(total);
    }
    day_blocks();
};
