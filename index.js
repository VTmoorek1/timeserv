var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 5000;

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", function(request, response) {
    var dateObj = {"unix": null, "natural": null};
    response.send(dateObj);
});

app.get("/:DATE", function(request, response) {
    var date = request.params.DATE;
    var dateObj = {"unix": null, "natural": null};

    if (date) {
        var dObj = new Date(date);
        
        if (Number.parseInt(date))
        {
            dObj = new Date(+date);
        }
        
        if (dObj.getTime())
        {
            var timeFull = dObj.getTime();
            var dateStr = monthNames[dObj.getMonth()] + " " + dObj.getDate() 
            + ", " + dObj.getFullYear();
            dateObj = {"unix": timeFull, "natural": dateStr};
        }
        
    }
    
    response.send(dateObj);

});

app.listen(port, function() {
    console.log("App listening on port " + port);
});
