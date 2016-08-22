//assign a variable for the input "city"
var city = '0';

$('document').ready(function () {
    //when user inputs something in the form, remove whitespace at beginning and end
    //set it to city
    $('form').submit(function (event) {
        city = $.trim($('#city-type').val());
        // convert city to lowercase to avoid being case sensitive
        city = city.toLowerCase();
        //        city = $(city).css('text-transform', 'lowercase');
        event.preventDefault();
        // if the city matches new york, change background attribute to nyc picture
        if (city === 'new york' || city === 'new york city' || city === 'nyc') {
            $('body').css('background', 'url("images/nyc.jpg ") no-repeat center center');
            $('body').css('background-size', 'cover');
            // if the city matches san fran, change background attribute to sanfran picture
        } else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
            $('body').css('background', 'url("images/sf.jpg") no-repeat center center');
            $('body').css('background-size', 'cover');
            // if the city matches la, change background attribute to la picture
        } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
            $('body').css('background', 'url("images/la.jpg") no-repeat center center');
            $('body').css('background-size', 'cover');
            // if the city matches austin, change background attribute to austin picture
        } else if (city === 'austin' || city === 'atx') {
            $('body').css('background', 'url("images/austin.jpg") no-repeat center center');
            $('body').css('background-size', 'cover');
            // if the city matches sydney, change background attribute to sydney picture
        } else if (city === 'sydney' || city === 'syd') {

            $('body').css('background', 'url("images/sydney.jpg") no-repeat center center');
            $('body').css('background-size', 'cover');
            // if the city matches none, give the user an alert
        } else {
            alert('Please check your spelling or choose another city');
        }
        //reset the form
        $('#city-type').val('');
    });



    //compare the input variable to city expectations
    //  if city equals "New York" or "New York City" or "NYC" 
    //      make the background of the page nyc.jpg
    // else if city equals "San Francisco" or "SF" or "Bay Area" 
    //      make the background of the page sf.jpg
    // else if city equals "Los Angeles" or "LA" or "LAX" 
    //      make the background of the page la.jpg
    // else if city equals "Austin" or "ATX" 
    //      make the background of the page austin.jpg
    // else if city equals "Sydney" or "SYD" 
    //      make the background of the page sydney.jpg
    // else tell the user to please add a valid city

    // reset the input form to blank

});