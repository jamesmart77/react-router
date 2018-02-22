var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
require('dotenv').config();
var secret = {};
secret.tokenSecret = process.env.tokenSecret;


//middleware to validate token
module.exports = function (req, res, next) {
    //console.log("Headers: " + req.headers);
    var obj = req.cookies;
    var cookieToken;

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            // console.log("Cookie Name: " + key);
            // console.log("Cookie Token: " + obj[key]);

            if (key === 'jwttoken') {
                //capture JWT token for verification
                cookieToken = obj[key];
            }
        }
    }
    // console.log("HITTING IT")

    if (!cookieToken) {
        console.log("NO COOKIE TOKEN FOUND")
        res.redirect('/login')
    } else {
        //authenticate token
        // console.log("secret: " + secret.tokenSecret)

        jwt.verify(cookieToken, secret.tokenSecret, function (err, data) {
            if (err) {
                //this is never hit due to controls in the jsonwebtoken package
                res.redirect('/login')
            } else {
                var decoded = jwt.decode(cookieToken);

                // console.log("Decoded: " + JSON.stringify(decoded));

                //attach admin property to request
                if (decoded.admin) {
                    //if active user is admin
                    req.admin = true;
                } else {
                    req.admin = false;
                };

                //attach userID, password and email to req
                // req.userID = decoded.userID;
                // req.password = decoded.password;
                req.email = decoded.email;
                
                // console.log(req);
                //successful authentication
                console.log("Successful authenication");
                next();
            }
        });
    }
};