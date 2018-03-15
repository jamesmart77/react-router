// materialize initialization module

// document start
(function($) {
    $(function() {


        //Dropdowns
        $('select').material_select();

        //Modal Dialog for profile page
        // the 'href' attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();

        //Modal Dialog Date Picker
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });

        // user slide out menu
        $('.user-side-collapse').sideNav({
          menuWidth: 300,
          edge: 'right',
        });

        $('.slider').slider({
            full_width: true
        });

        // dropdown menu positioning
        $('.dropdown-button').dropdown({
            hover: true,
            belowOrigin: true,
            alignment: 'right',
            constrainWidth: false // don't force a fixed width
        });

        // gigmenu
        $('.acct-gig-menu-trigger').dropdown({
            hover: false,
            belowOrigin: true,
            alignment: 'left',
            constrainWidth: false
        });

        $('.gig-frequency').dropdown({
            hover: false,
            // gutter:100,         // push menu to the left
            belowOrigin: true,
            alignment: 'right',
            constrainWidth: false // don't force a fixed width
        });

        $('.account-actions').dropdown({
            hover: false,
            // gutter:100,         // push menu to the left
            belowOrigin: true,
            alignment: 'right',
            constrainWidth: false // don't force a fixed width
        });

        // dropdown items color
        $('.dropdown-content>li>a').css('color', '#666');

        // mobile side main menu
        $('.button-collapse').sideNav('hide');
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
        });

        $('ul.tabs').tabs();
        $('.materialboxed').materialbox();


        $('.chips').material_chip({delete: false});
        $('.chips-initial').material_chip({
            data: [{
                tag: 'uber',
            }, {
                tag: 'programming',
            }, {
                tag: 'landlording',
            }],
        });

        $('.chips-placeholder').material_chip({
            placeholder: 'Enter a tag',
            secondaryPlaceholder: '+Tag',
        });

        $('.chips-autocomplete').material_chip({
            autocompleteOptions: {
                data: {
                    'uber': null,
                    'programming': null,
                    'landlording': null
                },
                limit: Infinity,
                minLength: 1,
                delete: false
            }
        });

        $('.collapsible').collapsible();

        // initialize text fields
        Materialize.updateTextFields();

    }); // end of document ready
})(jQuery); // end of jQuery namepace
