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
    function weatherMapInfo(mapboxgl) {

        //set saCoords lat and lon
        const saCoordinate = {lat: 29.4241, lon: -98.4936}


        //grab token key
        mapboxgl.accessToken = MAPBOX_KEY;
        //create map
        const map = new mapboxgl.Map({
            //map container variable, corresponds to html id
            container: 'map',
            //street view of map
            style: 'mapbox://styles/mapbox/streets-v9',
            //add san antonio coords
            center: [saCoordinate],
            // zoom
            zoom: 10
        });

        //add marker variable
        const marker = new mapboxgl.Marker();
        //allow marker to drag
        marker.setDraggable(true);
        //set coords for marker to start
        marker.setLngLat({saCoordinate});
        //add marker to map
        marker.addTo(map);

        //connect to weather api set variable
        const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
        //variable for weather api settings
        const weatherOptions = {
            //set to weather key api
            appid: OPEN_WEATHER_APPID,
            //dont need to see these variable
            exclude: 'minutely, current, hourly',
            //declare units to set weather info to
            units: 'imperial'
        };

        //return info just set
        return {saCoordinate, map, marker, weatherUrl, weatherOptions};

        //end weather function object
    }

    //============================================================================================
    /**
     * This function simply returns the html used to create a weather panel
     * @param data
     * @returns {string}
     */

    //create weather function for card input
    function weatherCard(data) {
        return (
            '<div class="card m-2">' +
            '<div class="card-header text-center">' + new Date(data.daily[i].dt * 1000).toLocaleDateString() + '</div>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item text-center">' + data.daily[i].temp.min + '<span>&#8457;</span>' + ' / ' + data.daily[i].temp.max + '<span>&#8457;</span>' + '</li>' +
            '<li class="list-group-item text-center">' + data.daily[i].weather[0].description + '<br>' + '<img src="http://openweathermap.org/img/w/' + data.daily[i].weather[0].icon + '.png">' + '</li>' +
            '<li class="list-group-item">' + 'Humidity: ' + data.daily[i].humidity + '</li>' +
            '<li class="list-group-item ">' + 'Wind Speed: ' + data.daily[i].wind_speed + ' mph' + '</li>' +
            '<li class="list-group-item" >' + 'Pressure: ' + data.daily[i].pressure + '</li>' +
            '</ul>' +
            '</div>'
        );
    //end weather card input function
    }

//============================================================================================
    /**
     * This function reduces all forecast information from the weather api to an html string that is used to display the weather panels
     * @param response
     */
    //function to display the 5 cards
    function displayCards(response) {
        //variable to hold data response and slice it to only the first 5 outputs
        const holdResponse = response.slice(0, 5);
        // select html element and apply the current value to the accumulator which is the number the forecast is on
        document.querySelector('weatherCard').innerHTML = holdResponse.reduce((accumulator, currentValue) => {
            //currentValue is being added to weather panel to create a new panel to hold current day info
            accumulator += weatherCard(currentValue);
            //return accumulator
            return accumulator;
        // set accumulator to start with empty string
        }, '')
        //end function
    }

    //============================================================================================
    /**
     * This function makes the request to the weather api
     * @param weatherUrl
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