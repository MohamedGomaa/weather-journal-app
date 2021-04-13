// Personal API Key for OpenWeatherMap API
const myKey = "56634b30f89a477d5a4300255b4ab02b";
const baseURL = "api.openweathermap.org/data/2.5/weather?zip= code}&appid={API key}";
// Event listener to add function to existing HTML DOM element
const generate = document.querySelector("#")
/* Function called by event listener */

/* Function to GET Web API Data*/
const getWeather = async (baseURL, animal, key)=>{

    const res = await fetch(baseURL+animal+key)
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
/* Function to POST data */


/* Function to GET Project Data */
