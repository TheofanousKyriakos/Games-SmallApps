const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");  
})

app.post("/", function (req, res) {
    //console.log(req.body.cityName);

    const query = req.body.cityName;
    const apiKey = "051d6ea003c26c691ab8a70139e33dc9"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            //console.log(data);
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            const temp = weatherData.main.temp
            console.log(temp);
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription);
            const weatherIcon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
            console.log(weatherIcon);
            // res.send("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>")
            res.write("<h1>The temperature in "+ query +" is " + temp + " degrees Celcius.</h1>")
            res.write("<img src="+ imageURL + ">");
            res.write("<h2>The weather is currently " + weatherDescription + "</h2>")

            res.send() // ,porw na exw mono ena send alla mporw na steilw polla write me ena send
            // const object = {
            //     name: "Kyriakos",
            //     age: 33
            // }
            // console.log(JSON.stringify(object));
        })
    })

    //console.log("Post request recieved");
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})

