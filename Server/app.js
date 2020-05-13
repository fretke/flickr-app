const apiKey = "00ac5f70d662304b87e7da585bbdef9d";
const secret = "aff70630a261a66a";

const express = require("express");
const bodyParser = require ("body-parser");

const Flickr = require("flickr-sdk");
const flickr = new Flickr(apiKey)

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.listen(5000, function(){
  console.log("the server is running on port 5000");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

app.get("/:searchBy/:pageNo", function(req, reply){

  flickr.photos.search({
    text: req.params.searchBy,
    per_page: 10,
    page: req.params.pageNo
  }).then(function(res){

    reply.send(res.body.photos.photo);

  }).catch(function(err){
    console.log(err);
  });
});
