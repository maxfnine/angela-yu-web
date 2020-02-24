const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/", (req, res) => {
    const query =  req.body.cityName;
    const appId = 'e0593125305ec4caab7796abe4afcdd0';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}&units=${units}`;
    https.get(url, response => {
        console.log(response.statusCode);
        response.on('data', data => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.write(`<h1>The temperature in ${weatherData.name} is ${temp} Celcius</h1>`);
            res.write(`<p><img src="http://openweathermap.org/img/wn/${icon}@2x.png" /></p>`);
            res.write(`The weather is currently ${description}`);
            res.send()
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})