//GLOBAL
let days = document.getElementById("in-days");
var forecast = document.getElementById("forecast");
var data = document.getElementById("data");

//values
var min = -30;
var max = 35;
var total = 0;
//amount of days and temp.
var all_temps = [];

function generate() {
    // Clears the existing array every time btn is clicked.
    all_temps.length = 0; 
    total = 0; //reset total
    //generate random numbers
    var i;
    for(i = 0; i < days.value; i++) {
        //math.floor rouds numbers
        all_temps.push(Math.floor(Math.random() *(max-min)+min));

        //set as total next temp i. Don't show every previous number again aka whole array. Only new created number.
        total += all_temps[i];
    };
    day_blocks();
    show_data();
};

function day_blocks() {
    // Clears the content of the div
    forecast.replaceChildren(); 
    //create visible data in div
    var i;
    for (i = 0; i < all_temps.length; i++) {
        var box = document.createElement("div");
            box.classList.add("box");

        //Pildid
        var icon = document.createElement("img");

        if (all_temps[i] <= -5) {
            if (all_temps[i] <= -16){
                icon.setAttribute("src", "/assets/snowy without sun.png");
            } else {
                icon.setAttribute("src", "/assets/snowy.png");
            }
        } else if (all_temps[i] <= 10 ) {
            icon.setAttribute("src", "/assets/cloud.png");
        } else if (all_temps[i] <= 18) {
            icon.setAttribute("src", "/assets/rainy.png");
        } else {
            icon.setAttribute("src", "/assets/sun.png");
        }
        box.appendChild(icon);
        //Päeva number
        var daynumber = document.createElement("p");
        daynumber.innerHTML = "Day " + (i + 1);
        box.appendChild(daynumber);
        //Päeva temp.
        var temp = document.createElement("p");
        temp.innerHTML = all_temps[i] + "&deg;";
        box.appendChild(temp);

        forecast.appendChild(box);
    };
};

function avg() {
    //avg calc
    const average = total / all_temps.length;
    //"$ {}" embed expressions within a string
    //console.log(`Average temperature: ${average.toFixed(2)}`);
    return average;
};

function minTemp() {
    let minTemperature = all_temps[0];
    for (let i = 1; i < all_temps.length; i++) {
        if (all_temps[i] < minTemperature) {
            minTemperature = all_temps[i];
        }
    }
    //console.log(`Minimum temperature: ${minTemperature}`);
    return minTemperature;
};

function maxTemp() {
    let maxTemperature = all_temps[0];
    for (let i = 1; i < all_temps.length; i++) {
        if (all_temps[i] > maxTemperature) {
            maxTemperature = all_temps[i];
        }
    }
    //console.log(`Maximum temperature: ${maxTemperature}`);
    return maxTemperature;
};

function show_data() { 
    // Clears the content of the div
    data.replaceChildren(); 
    var blok = document.createElement("div");
        blok.classList.add("blok");

    var Min = document.createElement("h1");
        Min.innerHTML = "min = " +  minTemp() + "&deg;";
        blok.appendChild(Min);

    var Max = document.createElement("H1");
        Max.innerHTML = "max = " + maxTemp() + "&deg;";
        blok.appendChild(Max);

    var average_dt = document.createElement("h1");
        average_dt.innerHTML = "average = " + avg().toFixed(2) + "&deg";
        blok.appendChild(average_dt);

        data.appendChild(blok);
};
