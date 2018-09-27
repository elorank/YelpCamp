var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1460458248189-2cb101df4e67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef0ed70802c5c63761e094167567d2fe&auto=format&fit=crop&w=700&q=60",
        description: "Spicy jalapeno bacon ipsum dolor amet pork chop pork loin turkey, leberkas doner short ribs t-bone chicken sausage biltong strip steak pig rump. Shoulder tenderloin bacon corned beef. Sausage flank prosciutto corned beef, tongue leberkas drumstick tri-tip pig swine meatloaf ham hock doner shoulder short ribs. Biltong t-bone prosciutto bacon jerky kielbasa venison corned beef turducken ball tip leberkas fatback kevin. Frankfurter flank beef ribs jowl short ribs cupim pork belly meatloaf kielbasa ground round tongue biltong ham hock shoulder ham. Meatball prosciutto jowl biltong, ball tip sirloin bresaola boudin spare ribs shoulder."
    },
    {
        name: "Winter Wonderland",
        image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=700&q=60",
        description: "Tongue enim capicola, proident chicken culpa andouille elit. Swine ex lorem, doner ullamco qui kevin pastrami aliquip drumstick in eiusmod officia tri-tip. Filet mignon nulla ad shoulder swine kevin lorem voluptate qui mollit pork belly. Id leberkas reprehenderit cupim adipisicing ground round, officia veniam. Pariatur et kielbasa, andouille officia hamburger ground round fatback irure veniam. Voluptate reprehenderit pork chop, in fugiat magna sausage rump pork belly strip steak spare ribs porchetta pastrami."
    },
    {
        name: "Creek Site",
        image: "https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0b711da885120b59a94bce6d3163d35&auto=format&fit=crop&w=700&q=60",
        description: "Venison bresaola frankfurter bacon shankle porchetta meatball kevin, andouille cow short loin. Jerky sirloin salami landjaeger ball tip, fatback beef leberkas shankle. Leberkas hamburger ribeye sirloin, picanha kielbasa burgdoggen. Meatloaf frankfurter spare ribs bresaola kielbasa ribeye. Doner short ribs turducken sausage pork belly filet mignon prosciutto ribeye."
    }
];

function seedDB(){
    
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed the campgrounds!");
        
        // ADD A FEW CAMPGROUNDS AFTER IT HAS ALL BEEN DELETED!!!
        // data.forEach(function(seed){
        //   Campground.create(seed, function(err, campground){
        //       if (err) {
        //           console.log(err);
        //       } else {
        //           console.log("created the campground.");
                   
        //           // CREATE COMMENTS ON EACH OF THE CAMPGROUNDS ONCE THEY HAVE BEEN ADDED
        //           Comment.create(
        //               {
        //                   text: "This is a great place, but I wish there was internet...",
        //                   author: "Homer"
        //                 }, function(err, comment){
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                     campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("comment was created!")
        //                     }
                            
        //                 }
        //           );
        //       }
        //   });
        // });
    });    
    

    
    
    
    // ADD A FEW COMMENTS TO CAMPGROUNDS
}

module.exports = seedDB;

