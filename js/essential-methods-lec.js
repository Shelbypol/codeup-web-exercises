"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?

    // $('#main-heading').click(function () {
    //     // $(this).css('font-size', '3.5em');
    //     $(this).html('<h6>My Sorting Hat</h6>');
    // });
    $('#main-heading').click(function () {
        // $(this).css('font-size', '3.5em');
        $(this).text('My Sorting Hat');
    });

    $('ul').click(function () {
        $(this).append('<li>test</li>')
    });
    $('ul').click(function () {
        $(this).prepend('<li>test-1</li>')
    });

    // TODO TOGETHER: store the inner text of #main-heading in a variable
    var mainHeading = $('#main-heading').html();
    // alert(mainHeading);

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector
    $('.banner').css('background', 'black');

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'

    //click on button with this id
    $('#highlight-houses').click(function () {
        //target all elements with class of .house-name
        //add class 'house' to its html
        $('.house-name').addClass('house');

        //remove class
        // $('.house').removeClass('house-name');

        //on and off
        $('.house').toggleClass('house-name');

    });


    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead
    //above

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead
    //turn house on and off

    $('#lock-g').click(function () {
        $('#gryffindor-house').toggleClass('gryffindor');
        if('#gryffindor-house').hasClass('gryffindor'){
            //this refering to lock-g
            $(this).text('Unlock');
        }else{
            $(this).text('Lock In')
        }
    });
    /**********************************************
     * 			       Traversing
     *********************************************/

    // TODO TOGETHER: console log each list element's text

    // TODO TOGETHER: select all list elements and console log the first match

    // TODO TOGETHER: select all list elements and console log the last match

    // TODO TOGETHER: When I click on a list element, highlight its parent

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group

    // TODO TOGETHER: When I click on any list element, console log the next element



});
