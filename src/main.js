import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import angular from 'angular';
// import "popper.js";
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "./scss/main.scss";


import { CountUp } from './countUp';
import anime from 'animejs/lib/anime.es.js';


var dysonApp = angular.module('dyson', []);
dysonApp.controller('dysonController', function dysonController($scope, $timeout) {
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
 
    var options = {
        decimalPlaces: 0,
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : ".",
        prefix : '',
        suffix : ''
    }
    $scope.stage = 1 ;
    $scope.loading = false;
    $scope.desktop = true; 
    $scope.$watch('$viewContentLoaded',
        function (){
            console.log('start');
            var animate_s1_2_1 = new CountUp("s1_2_1", 66, options);
            var animate_s1_2_2 = new CountUp("s1_2_2", 11, options);
            var animate_s1_2_3 = new CountUp("s1_2_3", 44, options);
            var animate_s1_2_4 = new CountUp("s1_2_4", 51, options);
            animate_s1_2_1.start();
            animate_s1_2_2.start();
            animate_s1_2_3.start();
            animate_s1_2_4.start();
           
        }
    );    
   
});
dysonApp.directive('numberAnimation', ['$window', scrollDirective]);
dysonApp.directive('fadeInAnimation', ['$window', fadeInScrollDirective]);
function scrollDirective($window) {
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    return {
      link: function (scope, element, attrs) {
        var handler;
        $window = angular.element($window);
        var options = {
            decimalPlaces: 0,
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : ".",
            prefix : '',
            suffix : ''
        }
        var animate_obj = new CountUp(attrs.id, attrs.numberAnimation, options);
        handler = function() {
           if( isScrolledIntoView(element) ){
                animate_obj.start();
           }
        };

        $window.on('scroll', handler);
      }
    };
}
function fadeInScrollDirective($window){
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function fadeInAnimation(element){
        anime({
            targets: '#' + element + ' div',
            duration: 1000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    }
    return {
    link: function (scope, element, attrs) {
        var handler;
        var played = false; 
        $window = angular.element($window);
        
        handler = function() {
           if( isScrolledIntoView(element) ){
               if(!played){
                    fadeInAnimation(attrs.id);
                    played = true; 
               }
           }
        };

        $window.on('scroll', handler);
     }
    };
}


function init() {

}



$(document).ready(function () {
    function s3_animation(){
        anime({
            targets: '#web_03 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 200;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    }
    s3_animation();
});