$(document).ready(function () {
'use strict';
    /**
     * This function wraps all data that would otherwise be in a global scope relative to the rest of the program, creating the needed data to establish the map
     * @param mapboxgl
     * @returns {{saCoords: {lon: number, lat: number},
     *          weatherApiUrl: string,
     *          marker: *,
     *          map: mapboxgl. Map,
     *          weatherOptions: {appid: string, exclude: string, units: string}}}
     */

    //declare function for weather object
    //grab token key
    //set saCoords lat and lon

    //create map
    //map container variable
    //street view of map
    //add san antonio coords
    //add san antonio coords

    //add marker variable
    //allow marker to drag
    //set coords for marker to start
    //add marker to map

    //connect to weather api set variable
    //variable for weather api settings
    //set to weather key api
    //dont need to see these variable
    //declare units to set weather info to

    //return info just set
    //end weather function object

    //============================================================================================
    /**
     * This function simply returns the html used to create a weather panel
     * @param forecast
     * @returns {string}
     */

    //create weather function for card input
    //create weather function for card input
    //end return of all info
    //end weather card input function

    //============================================================================================
    /**
     * This function reduces all forecast information from the weather api to an html string that is used to display the weather panels
     * @param response
     */
    //function to display the 5
    //variable to hold data
    //seclect hmtl element and take the apply the currentl value to the accumulator which is the number the forecast is on */
    //currentValue is being added to weather
    //currentValue is being added to weather panel to
    // create a new panel to hold current day info
    //return accumulator
    // set accumulator to start with empty string
    //end function

//============================================================================================
    /**
     * This function reduces all forecast information from the weather api to an html string that is used to display the weather panels
     * @param response
     */
    //function to display the 5 cards
    //variable to hold data repsonse and slice it to only the first 5 outputs
    // seclect hmtl element and take the apply the currentl value to the accumulator which is   the number the forecast is on */
    //currentValue is being added to weather panel to
    //create a new panel to hold current day info
    //return accumulator
    // set accumulator to start with empty string
    //end function

    //============================================================================================
    /**
     * This function makes the request to the weather api
     * @param weatherApiUrl
     * @param weatherOptions
     * @param coords
     */
    //setting up get request function
    //getting coords
    //setting specific url with updated weatherOptions
    //set up promise
    //if true return weather panels
    //console.log error if request failed
    //end function

    //============================================================================================
    /**
     * This function adds event listeners to the search button and map marker
     * @param app
     */
    //create a listener function

     //create variable to hold marker and map info from the first function

       //select the button
        //search user input

    //set marker drag function
    //create variable to hold the current marker lat and lang position
    //create variable to hold object one for lat one for long
    //user marker position to center map
    //use get weather function utilizing first function info and variable of marker position
    //end function

    //add listener to search button variable
    //on click put search info into geocode
    //center map with results
    //marker put on search results
    //user get weather function with lat and lon results
     //end geocode

    //end search btn function

    //end listener function

    // create the app object to use
        //make the parameter that listender take in equal to the first function

    // populate the weather for the initial page load
        // initial app load set to add and

   //call last function




}); //end document ready