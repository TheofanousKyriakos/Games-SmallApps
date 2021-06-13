const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const port = 3000
const app = express();

const items = ["Buy Food","Cook Food","Eat Food"];
const workItems = [];
// app.get("/", function(req, res){
//     res.send("Hello");
// });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    
const day = date.getDate();
//===========================================================================================
    // if (currentDay === 6 || currentDay === 0){
    //     day = "Weekend";        
    //     // res.send("Yay"); // an grapsw ("<h1>Yay</h1>") to metatrepei se html
    //     // res.sendFile(__dirname + "/weekend.html");
    // } else {
    //     day = "Weekday";
    //             // res.write("<p>BOO</p>");
    //     // res.write("<h1>I have to work</h1>")
    //     // res.send();
    //     // res.sendFile(__dirname + "/weekday.html");
        
    // }
//==========================================================================================
    //     if (currentDay === 0){
    //     day = "Sunday";        
    //     } else if (currentDay === 1){
    //     day = "Monday";
    //     } else if (currentDay === 2){
    //     day = "Tuesday";
    //     } else if (currentDay === 3){
    //     day = "Wednesday";
    //     } else if (currentDay === 4){
    //     day = "Thursday";
    //     } else if (currentDay === 5){
    //     day = "Friday";
    //     } else if (currentDay === 6){
    //     day = "Saturday";
        
    // }
        // switch (currentDay){
        //     case 0:
        //         day = "Sunday";
        //         break;
        //     case 1:
        //         day = "Monday";
        //         break;
        //     case 2:
        //         day = "Tuesday";
        //         break;
        //     case 3:
        //         day = "Wednesday";
        //         break;
        //     case 4:
        //         day = "Thursday";
        //         break;
        //     case 5:
        //         day = "Friday";
        //         break;
        //     case 6:
        //         day = "Saturday";
        //         break;
        //     default:
        //         console.log("Error: current day is equal to: " + currentDay)
        // }  
    res.render("list", {listTitle: day, newListItems: items});
});

    app.post("/", function (req,res) {
        const item = req.body.newItem;

        if (req.body.list === "Work"){
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            res.redirect("/");
        }
        
       
        
    })

    app.get("/work", function (req,res) {
        res.render("list", {listTitle: "Work List", newListItems: workItems});
        
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); 