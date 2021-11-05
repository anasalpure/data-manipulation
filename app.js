/* eslint-disable no-console */
let weatherDataHourly = require('./weatherTestDataHourly.json');

let weatherDataHourlySummary = weatherDataHourly.hourly.map((weatherOfhour) => {
    const dateObject = new Date(weatherOfhour.dt * 1000);
    return {
        dt : dateObject,
        temp : weatherOfhour.temp,
        main : weatherOfhour.weather[0].main
    };
});


console.log(weatherDataHourlySummary);


