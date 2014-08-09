require.config({
    paths: {
        // RequireJS plugin
        text: 'libs/require/text',
        // RequireJS plugin
        domReady: 'libs/require/domReady',
        // underscore library
        underscore: 'libs/underscore/underscore',
        // Backbone.js library
        Backbone: 'libs/backbone/backbone',
        // jQuery
        jquery: 'libs/jquery/jquery-1.9.1',
        // jQuery Mobile framework
        jqm: 'libs/jquery.mobile/jquery.mobile-1.3.2',
        // jQuery Mobile plugin for Backbone views navigation
        jqmNavigator: 'libs/jquery.mobile/jqmNavigator'

    },

    // map: {
    //     '*': {
    //         'app/models/rooms': 'app/models/getLocationFloorDetails/LocationFloorDetails'
    //     }      
    // },


    shim: {
        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },

        jqm: {
            // deps:['jquery', 'jqm-config' , 'jqmNavigator']
            deps: ['jquery', 'jqmNavigator']

        }
    }
});

//require(['domReady', 'app/views/login/LoginView', 'jqm'], function(domReady, LoginView) {
require(['domReady', 'jqm'], function(domReady) {


    // domReady is RequireJS plugin that triggers when DOM is ready
    domReady(function() {

        console.log("DomREady Called.............");
        if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {

            // This is running on a device so waiting for deviceready event
            document.addEventListener('deviceready', onDeviceReady(false), false);
        } else {
            // On desktop don't have to wait for anything
            onDeviceReady(true);
        }

        function onDeviceReady(desktop) {
            console.log("onDeviceReady Called.............");

            // Hiding splash screen when app is loaded
            // if (desktop !== true)
            //      cordova.exec(null, null, 'SplashScreen', 'hide', []);

            // Setting jQM pageContainer to #container div, this solves some jQM flickers & jumps
            // I covered it here: http://outof.me/fixing-flickers-jumps-of-jquery-mobile-transitions-in-phonegap-apps/
            $.mobile.pageContainer = $('#container');

            // Setting default transition to slide
            $.mobile.defaultPageTransition = 'slide';

            // Pushing LoginView
           // $.mobile.jqmNavigator.pushView(new LoginView());
        }
    });

});