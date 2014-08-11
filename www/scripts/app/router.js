define(function(require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('Backbone'),
        LoginView = require('app/views/login/LoginView'),


        loginView = new LoginView();

    return Backbone.Router.extend({

        routes: {
            "": "home"
        },

        home: function() {
            console.log("Router.....Home Called....");
        }

    });

});