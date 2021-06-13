const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");
const https = require("https")

//const port = 4000
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req,res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    //console.log(firstName, lastName, email);
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }

            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us7.api.mailchimp.com/3.0/lists/2b1afbe101";

    const options = {
        method: "POST",
        auth: "kyri:aff722319f37bc860ef2e5f4c7afc5f6-us7"
    }

    
    const request =  https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
});


app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running at port...`)
});



// API keys
// aff722319f37bc860ef2e5f4c7afc5f6-us7

// List Id
// 2b1afbe101


// git cd ... // gis directories
// git init
// git add . or git add k to onoma tou arxeiou. me thn prwti entoli pernaei osa exei o fakelos
// git commit -m "version 2"
// git push heroku master k gia kanonika sto git pataw git push
// ls -a // vlepeis ola ta arxeia ston fakelo
// git status
// git touch // ftiaxnei arxeia
// git mkdir // ftiaxnei fakelo
// git log // vlepeis tis allages pou exoun ginei
// git diff // kai to onoma tou arxeiou // sou deixnei tis diafores apo tin proigoumeni ekdosi
// git checkout //kai to onoma tou arxeiou // se paei se proigoumeni ekdosi tou arxeiou sou
// git remote add origin // k prostheto to url apo to github new repository pou exw ftiaksei // remote repository
// git push -u origin master
// touch .gitignore
// git rm --cached -r . // svinei oti prosthesame me tin proigoumeni entoli
// git clone // k to url apo to github pou thelw na katevasw // travas arxeia apo to github online
// git branch alien-plot // ftiaxnei neo branch
// git branch // vlepeis posa branch exeis
// git checkout // onoma tou branch alien-plot // allazeis branch
// git merge alien-plot // ennonei to branch pou eimaste me auto pou tou dilonoume
