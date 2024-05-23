export function day_blocks() {
    var i;
    for (i = 0; i < temps.length; i++) {
        var box = document.createElement("div");
            box.classList.add("box");

        //Pildid
        var icon = document.createElement("img");
        box.appendChild(icon);
        //Päeva number
        var daynumber = document.createElement("p");
        daynumber.innerHTML = "Day " + (i + 1);
        box.appendChild(daynumber);
        //Päeva temp.
        var temp = document.createElement("p");
        temp.innerHTML = temps[i] + "&deg;";
        box.appendChild(temp);

        forecast.appendChild(box);
    };
};