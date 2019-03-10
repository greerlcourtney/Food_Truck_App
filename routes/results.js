var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/', function (req, res, next) {
    
  
    //Receive User Input
    var userInput = req.query.userInput_submited;
    
   
    //GeoCode User Address
    var geocodeURL = "https://geocoder.api.here.com/6.2/geocode.json?app_id=BC0zfDGNOi8yQ93qIIqw&app_code=J4Y7Vw7dlsMBkAB-tt2FXw&searchtext=" + userInput + "&city=San Francisco"
    request(geocodeURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var userLocation = JSON.parse(body);
            const userLat = userLocation["Response"]["View"][0]["Result"][0]["Location"]["DisplayPosition"]["Latitude"];
            const userLong = userLocation["Response"]["View"][0]["Result"][0]["Location"]["DisplayPosition"]["Longitude"];
            // Test and Check User Data
              
            //Algorithm For Finding closest locations
            var latBoundAdd = userLat + .01;
            var latBoundMinus = userLat - .01;
            var longBoundAdd = userLong + .1;
            var longBoundMinus = userLong - .1;
            
            
            var truckURL = "https://data.sfgov.org/resource/6a9r-agq8.json?$where=latitude between '" + latBoundMinus + "' and '" + latBoundAdd +"' &$limit=10";
            request(truckURL, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var sfTrucksData = JSON.parse(body);
                    var num = 1;
                    var truckLat = sfTrucksData[num]["location"]["coordinates"][0];
                    var truckLong = sfTrucksData[num]["location"]["coordinates"][1];
                    
                    //submit output to results.ejs 
                    res.render("results", {sfTrucksData:sfTrucksData});                     
                };
            });
        };
    });    
});

module.exports = router;