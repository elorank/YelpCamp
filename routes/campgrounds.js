var express = require("express");
var router = express.Router();

var Campground = require("../models/campground");
var middleware = require("../middleware");


//INDEX 
router.get("/", function(req, res){
    //get all campgrounds
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});


// CREATE - adds a new campground to db
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    //add to campgrounds array
    var newCampground = {name: name, price: price, image: image, description: desc, author:author};
    //create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
       if (err){
           console.log(err);
       } else {
           //redirect back to campgrounds
           console.log(newlyCreated);
           res.redirect("/campgrounds");
       }
    });
});


// NEW - shows form for new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
   //find the campground with the ID
   Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if (err) {
           console.log(err);
       } else {
        //   console.log(foundCampground);
           res.render("campgrounds/show", {campground: foundCampground});
       }
   });
   
//   req.params.id
//   //render show template with campground ID
//   res.render("show"); 
});


//EDIT CAMPGROUND ROUTE (F0RM)
router.get("/:id/edit", middleware.checkCampgroundOwnership,function(req, res) {
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err) {
                console.log(err);
                res.redirect("/campgrounds");
            }
        res.render("campgrounds/edit", {campground: foundCampground});
        });
});

//UPDATE CAMPGROUND ROUTE (SENDING FORM)

router.put("/:id", middleware.checkCampgroundOwnership,function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    //redirect to the show page
});


//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});



module.exports = router;