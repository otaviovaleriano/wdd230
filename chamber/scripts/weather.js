// const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rexburg?unitGroup=us&key=ZTDVENPYMLSKAFGKBX2LJ2ZWS&contentType=json";
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Londrina?unitGroup=us&key=ZTDVENPYMLSKAFGKBX2LJ2ZWS&contentType=json";
const getWeather = async() => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = (t).toFixed(1)

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#weather_status').textContent = data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt = data.currentConditions.conditions + ' icon';

    //windchill info inside this same place - for home page.

    // windchill calculation

    const temp = document.querySelector('#t').textContent;
    const windSpeed = document.querySelector('#ws').textContent;

    let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));

    console.log(chill)

    if (temp <= 50 && windSpeed >= 3) {
        let windChill = document.querySelector('#wc').textContent = chill

    } else {
        let windChill = document.querySelector('#wc').textContent = "Not Cold Enough"
    }

};
getWeather();