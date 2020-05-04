(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                return Math.PI * (circle.radius ** circle.radius);
       // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(true === doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea())) ;
            }else{
                // return this.getArea();
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };
console.log(circle.getArea());
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(true);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(false);

    console.log("====================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(true);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(false);
})();
