(function () {
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
        const saCoordinate = {lat: 29.4241, lon: -98.4936};

        //grab token key
        mapboxgl.accessToken = MAPBOX_KEY;
        //create map
        const map = new mapboxgl.Map({
            //map container variable, corresponds to html id
            container: 'map',
            //street view of map
            style: 'mapbox://styles/mapbox/streets-v9',
            //add san antonio coords
            center: saCoordinate,
            // zoom
            zoom: 10
        });

        //add marker variable
        const marker = new mapboxgl.Marker();
        //allow marker to drag
        marker.setDraggable(true);
        //set coords for marker to start
        marker.setLngLat(saCoordinate);
        //add marker to map
        marker.addTo(map);

        //connect to weather api set variable
        const weatherAPI = 'https://api.openweathermap.org/data/2.5/onecall';
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
        return {saCoordinate, map, marker, weatherAPI, weatherOptions};

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
            '<div class="card-header text-center">' + new Date(data.dt * 1000).toLocaleDateString() + '</div>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item text-center">' + data.temp.min + '<span>&#8457;</span>' + ' / ' + data.temp.max + '<span>&#8457;</span>' + '</li>' +
            '<li class="list-group-item text-center">' + data.weather[0].description + '<br>' + '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">' + '</li>' +
            '<li class="list-group-item">' + 'Humidity: ' + data.humidity + '</li>' +
            '<li class="list-group-item ">' + 'Wind Speed: ' + data.wind_speed + ' mph' + '</li>' +
            '<li class="list-group-item" >' + 'Pressure: ' + data.pressure + '</li>' +
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
    function createCards(response) {
        //variable to hold data response and slice it to only the first 5 outputs
        const holdResponse = response.daily.slice(0, 5);
        // select html element and apply the current value to the accumulator which is the number the forecast is on
        document.querySelector('.weatherCard').innerHTML = holdResponse.reduce((accumulator, currentValue) => {
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
     * @param coordinates
     */
    //setting up get request function
    function getRequest({weatherAPI, weatherOptions}, coordinates) {
        //getting coords
        weatherOptions.lat = coordinates.lat;
        weatherOptions.lon = coordinates.lon;
        //setting specific url with updated weatherOptions
        const weatherUrl = `${weatherAPI}?${new URLSearchParams(weatherOptions)}`;

        //set up promise
        fetch(weatherUrl)
            //if true return weather panels
            .then(response => response.json())
            .then(createCards)
            //console.log error if request failed
            .catch(console.log);
        //end function
    }

    //============================================================================================
    /**
     * This function adds event listeners to the search button and map marker
     * @param app
     */
    //create a listener function
    function listener(app) {

        //create variable to hold marker and map info from the first function
        const {marker, map} = app;

        //select the button
        const button = document.querySelector('#searchBtn');
        //search user input
        const userSearch = document.querySelector('#userSearch');

        //set marker drag function
        marker.on('dragend', function () {
            //create variable to hold the current marker lat and lang position
            const markerPosition = app.marker.getLngLat();
            //create variable to hold object one for lat one for long
            const position = {lat: markerPosition.lat, lon: markerPosition.lng};
            //user marker position to center map
            map.setCenter(markerPosition);
            //use get weather function utilizing first function info and variable of marker position
            getRequest(weatherMapInfo(position));
            //end function
        });

        //add listener to search button variable
        userSearch.addEventListener('click', (results) => {
            //on click put search info into geocode
          geocode(userSearch.value, MAPBOX_KEY).then(function(results) {
            //center map with results
              map.setCenter(results);
            //marker put on search results
              marker.setLngLat(results);
            //user get weather function with lat and lon results
            getRequest(app, {lat: results[1], lon: results[2]});
            //end geocode
             });
            //end search btn function
        });
        //end listener function
    }

    //make the parameter that listener take in equal to the first function
    const app = weatherMapInfo(mapboxgl);

    // populate the weather for the initial page load
    // initial app load set to app and coords
    getRequest(app, app.saCoordinate);

    //call last function
    listener(app);

}());