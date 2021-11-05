/* eslint-disable no-console */

let weatherDataHourly = require('./weatherTestDataHourly.json');

let weatherDataDaily = [];

// loop on all data and group it by day and mounth and year
for (const weatherOfhour of weatherDataHourly.hourly) {
    const dateObject = new Date(weatherOfhour.dt * 1000);
    let hourKey = `${dateObject.getDate()}-${dateObject.getMonth()+1}-${dateObject.getFullYear()}`;
    
    if(! weatherDataDaily[hourKey]) {
        weatherDataDaily[hourKey] = [weatherOfhour];
    }
    else{
        weatherDataDaily[hourKey].push(weatherOfhour);
    }
}

for (const index in weatherDataDaily) {
    console.log(weatherDataDaily[index].length)
}


