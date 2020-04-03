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
dysonApp.controller('dysonController', function dysonController($scope, $window, $timeout) {
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    var options = {
        decimalPlaces: 0,
        duration: 5,
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
            var animate_s1_2_1 = new CountUp("s1_2_1", 66, options);
            var animate_s1_2_2 = new CountUp("s1_2_2", 11, options);
            var animate_s1_2_3 = new CountUp("s1_2_3", 44, options);
            var animate_s1_2_4 = new CountUp("s1_2_4", 51, options);
            animate_s1_2_1.start();
            animate_s1_2_2.start();
            animate_s1_2_3.start();
            animate_s1_2_4.start();
            
            s3_animation();
        }
    );   
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
    function s4_animation(){
        anime({
            targets: '#web_04 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function s5_animation(){
        var options = {
            decimalPlaces: 0,
            useEasing : true,
            useGrouping : true,
            duration: 5,
            separator : ',',
            decimal : ".",
            prefix : '',
            suffix : ''
        }
        var animate_obj = new CountUp('s5_1', '1840000', options);
        animate_obj.start();
    } 
    function s6_animation(){
        anime({
            targets: '#web_06 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 200;
             },
            opacity: 1,
            translateY: -20,
            easing: 'easeInSine',
            complete: function(anim) {
                s7_animation();
             }
          });
    } 
    function s7_animation(){
        anime({
            targets: '#web_07 img',
            duration: 1000,
            opacity: 1,
            translateY: -20,
            easing: 'easeInSine'
          });
    } 
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    var a04 = true ; 
    var a05 = true ; 
    var a06 = true ; 
    angular.element($window).bind("scroll", function(e) {
        
        if(a04 && isScrolledIntoView('#web_04')){
            console.log('web 4 animation start');
            s4_animation();
            a04= false ;
        }
        if(a05 && isScrolledIntoView('#web_05')){
            console.log('web 5 animation start');
            s5_animation();
            a05= false ;
        }
        if(a06 && isScrolledIntoView('#web_06')){
            console.log('web 6 animation start');
            s6_animation();
            a06= false ;
        }
    })
});




function init() {

}



$(document).ready(function () {

   
});