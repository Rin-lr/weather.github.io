var forecast = document.getElementById("forecast");
var data = document.getElementById("data");

function generate() {
        var total = 0;

        var min = -30;
        var max = 35;
        //amount of days and temp.
        var temps = [];

        //randomize temp. values
        for(var index = 0; index < days; index++) {
            temps.push(Math.floor(Math.random() *(max-min)+min));
            total = total + temps[index];
            console.log("total");
        }
        //avg calc
        var average = total/temps.length;
            //sort temps
            temps.sort(function(a,b){
                return a-b
            });
            console.log("sorted");

            for(var index = 0; index < temps.length; index++){
                console.log(temps[index]);
            }
            console.log("min " + temps[0]);
            console.log("max "+ temps[6]);

            for(var index = 0; index < 1; index++){
            var blok = document.createElement("div");
                blok.classList.add("blok");

            var Min = document.createElement("h1");
                        Min.innerHTML = "min = " + (temps[index]) + "&deg;";
                        blok.appendChild(Min);

            var Max = document.createElement("H1");
                        Max.innerHTML = "max = " + (temps[-index]) + "&deg;";
                        blok.appendChild(Max);

            var average = document.createElement("h1");
                        average.innerHTML = "average = " + average + "&deg";
                        blok.appendChild(average);

            data.appendChild(blok);

        }

            for (var index = 0; index < temps.length; index++) {
                var box = document.createElement("div");
                    box.classList.add("box");

                var icon = document.createElement("img");

                if (temps[index] <= -5) {
                            icon.src = "https://image.flaticon.com/icons/svg/642/642000.svg";
                    } else if (temps[index] <= 10 ) {
                            icon.src = "https://image.flaticon.com/icons/svg/1163/1163624.svg";
                    } else if (temps[index] <= 18) {
                            icon.src = "https://image.flaticon.com/icons/svg/414/414936.svg";
                    }	else {
                            icon.src = "https://image.flaticon.com/icons/svg/979/979585.svg";
                }
                box.appendChild(icon);

            var daynumber = document.createElement("p");
            daynumber.innerHTML = "Day " + (index + 1);
            box.appendChild(daynumber);

            var temp = document.createElement("p");
            temp.innerHTML = temps[index] + "&deg;";
            box.appendChild(temp);

            forecast.appendChild(box);
            }
        }