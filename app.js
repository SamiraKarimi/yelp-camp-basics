var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
 var campgrounds = [
        {name:"Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        {name:"Mountain Goat",img:"https://farm4.staticflickr.com/3492/3823130660_0509aa841f.jpg"}
        ]

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
   
        res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res){
   var name= req.body.name;
   var image= req.body.image;
   var newCampground = {name:name,image:image};
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp Started");
});