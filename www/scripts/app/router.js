define(function(require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('Backbone'),
        LoginView = require('app/views/login/LoginView'),
        BookingTypeView = require('app/views/bookingType/BookingTypeView'),
        FindRoomsRightNowView = require('app/views/findRoomsRightNow/FindRoomsRightNowView'),        


        loginView = new LoginView();
    // bookingTypeView = new BookingTypeView();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "bookingType": "selectBookingType",
            "privacyPolicy": "privacyPolicy",
            "moreInfo": "moreInfo",
            "findRoomsNow": "findRightNow",
            "findLater": "findLater",
            "findOpenRooms": "findOpenRooms",
            "roomDetails": "bookSelectedRoom",
            "bookingSuccess": "bookingSuccess"

        },

        home: function() {
            console.log("Router.....Home Called....");
            // loginView.delegateEvents();
            $.mobile.jqmNavigator.pushView(loginView);
        },

        selectBookingType: function() {
            console.log("selectBookingType.....");
            // $.mobile.jqmNavigator.pushView(new BookingTypeView());
        },

        privacyPolicy: function() {
            console.log("privacyPolicy.....");
        },

        moreInfo: function() {
            console.log("moreInfo.....");
        },

        findRoomsNow: function() {
            console.log("findRoomsNow.....");
            // bookingTypeView.fetchLocationsData();
        },

        findLater: function() {
            console.log("findLater.....");
        },

        findOpenRooms: function() {
            console.log("findOpenRooms.....");
        },

        bookSelectedRoom: function() {
            console.log("bookSelectedRoom.....");
        },

        bookingSuccess: function() {
            console.log("bookingSuccess.....");
        }



        // employeeDetails: function(id) {
        //     require(["app/models/employee", "app/views/Employee"], function(models, EmployeeView) {
        //         var employee = new models.Employee({
        //             id: id
        //         });
        //         employee.fetch({
        //             success: function(data) {
        //                 slider.slidePage(new EmployeeView({
        //                     model: data
        //                 }).$el);
        //             }
        //         });
        //     });
        // },

        // reports: function(id) {
        //     require(["app/models/employee", "app/views/Reports"], function(models, ReportsView) {
        //         var employee = new models.Employee({
        //             id: id
        //         });
        //         employee.fetch({
        //             success: function(data) {
        //                 slider.slidePage(new ReportsView({
        //                     model: data
        //                 }).$el);
        //             }
        //         });
        //     });
        // }

    });

});