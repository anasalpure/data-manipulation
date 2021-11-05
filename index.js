/* eslint-disable no-console */
let weatherDataHourly = require('./weatherTestDataHourly.json');

let AvarageWeatherDataHourly;
let AvarageWeatherSum = 0;
let AvarageWeatherCount = 0;

// for (const weatherOfhour of weatherDataHourly.hourly) {
//     AvarageWeatherSum += weatherOfhour.temp;
//     AvarageWeatherCount++;
// }

AvarageWeatherCount = weatherDataHourly.hourly.length;
AvarageWeatherSum = weatherDataHourly.hourly.reduce((weatherOfhour1,weatherOfhour2)=>{
    return weatherOfhour1 + weatherOfhour2.temp;
},0);

console.log(AvarageWeatherCount,AvarageWeatherSum);

AvarageWeatherDataHourly = AvarageWeatherSum / AvarageWeatherCount;
console.log(AvarageWeatherDataHourly.toFixed(3));
