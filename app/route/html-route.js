var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads home.html
      app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname,"../public/index.html"));
      });


      // index route loads home.html
    app.get("/faq", function(req, res) {
        res.sendFile(path.join(__dirname,"../public/faq.html"));
    });


    // index route loads home.html
    app.get("/contact", function(req, res) {
          res.sendFile(path.join(__dirname,"../public/contact.html"));
    });



    // form route loads form.html
     app.get("/form", function(req, res) {
           res.sendFile(path.join(__dirname,"../public/form.html"));
     });



     // privacy route loads privacy.html
    app.get("/privacy", function(req, res) {
          res.sendFile(path.join(__dirname,"../public/privacy.html"));
    });


    // rates route loads rates.html
    app.get("/rates", function(req, res) {
          res.sendFile(path.join(__dirname,"../public/rates.html"));
    });

    // services route loads services.html
    app.get("/services", function(req, res) {
          res.sendFile(path.join(__dirname,"../public/services.html"));
    });

    app.get("/style", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../public/css/style.css"));
});


app.get("/image/lotus-2", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../public/image/lotus-2.jpg"));
});

app.get("/image/bg-img", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../public/image/bg-img.jpg"));
});

app.get("/js/index", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../public/js/index.js"));
});

}
