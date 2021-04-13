/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const myKey = "56634b30f89a477d5a4300255b4ab02b";

// Event listener to add function to existing HTML DOM element
const generate = document.querySelector("#generate");


generate.addEventListener("click", (e) => {
    const zipCode = document.querySelector("#zip").value;
    const feeling = document.querySelector("#feelings").value;

    if (!zipCode) {
        alert("Enter valid zip code to search for!");
    } else {
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myKey}&units=metric`;
        weatherData(baseURL)
            .then((data) => {
                fetch("/addWeather", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify({
                        city: data.name,
                        temp: data.main.temp,
                        wind: data.wind.speed,
                        feel: feeling,
                        date: newDate
                    })
                })
            })
            .then((data) => {
                updateUI();
            })


    }
});

/* Function called by event listener */
async function weatherData(url) {
    const res = await fetch(url);
    try {

        const data = await res.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log(error);
    }
}



/* Function to Update UI */

async function updateUI() {
    const res = await fetch('/getData');

    try {
        const newData = await res.json()
        console.log(newData)
        document.querySelector('#city').textContent = "Your city is : " + newData.city;
        document.querySelector('#wind').textContent = "Wind speed : " + newData.wind;
        document.querySelector('#date').textContent = "Today's date : " + newData.date;
        document.querySelector('#temp').textContent = "Temprature : " + newData.temp;
        document.querySelector('#feel').textContent = "You're feeling : " + newData.feel;
    } catch (error) {
        console.log("error", error);
    }
};