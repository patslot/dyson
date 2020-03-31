import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import angular from 'angular';
import "popper.js";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "./scss/main.scss";



var dysonApp = angular.module('dyson', []);
dysonApp.controller('dysonController', function dysonController($scope, $timeout) {

    $scope.stage = 1 ;
    $scope.loading = false;
    $scope.desktop = true; 

});



function init() {

}



$(document).ready(function () {
    

});