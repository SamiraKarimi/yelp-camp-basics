var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds = [
        {name:"Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        {name:"Mountain Goat",img:"https://farm4.staticflickr.com/3492/3823130660_0509aa841f.jpg"}
        ]
        res.render("campgrounds",{campgrounds:campgrounds});
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp Started");
});