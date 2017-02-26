var express = require('express');
var request = require('request');
var base64 = require('base-64');
var fs = require('fs');

var app = express();

var myHealthConditions = JSON.stringify({
                "Problems": [
                    {
                        "FreeText": "Heart Attack",
                    }
                ]
        });

app.get('/checkfood', function(req, res){
	console.log("Here!");
    getMedicalTerminology(myHealthConditions);

});

app.listen('5000');
