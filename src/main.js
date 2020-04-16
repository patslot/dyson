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

import Typed from './typed';

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

    $scope.scrolltoelement =function(eleID){

        $window.scrollTo(0, angular.element(eleID).offset().top); 
        anime({
            targets: '#mobile_nav',
            duration: 500,
            translateX: '110%',
            easing: 'easeInSine'
        });

        // $(window).scroll(0,1328);
    }
    $scope.nav_open = function(){
        console.log('nav open');
        anime({
            targets: '#mobile_nav',
            duration: 500,
            translateX: '-110%',
            easing: 'easeInSine'
          });
    }
    $scope.nav_close = function(){
        console.log('nav close');
        anime({
            targets: '#mobile_nav',
            duration: 500,
            translateX: '110%',
            easing: 'easeInSine'
          });
    }
    $scope.$watch('$viewContentLoaded',
        function (){
            console.log($(window).width());
            if($(window).width() > 799){
                $scope.desktop = true; 
                console.log('desktop');
                var animate_s1_2_1 = new CountUp("s1_2_1", 66, options);
                var animate_s1_2_2 = new CountUp("s1_2_2", 11, options);
                var animate_s1_2_3 = new CountUp("s1_2_3", 44, options);
                var animate_s1_2_4 = new CountUp("s1_2_4", 51, options);
                animate_s1_2_1.start();
                animate_s1_2_2.start();
                animate_s1_2_3.start();
                animate_s1_2_4.start();
                s1_animation()
                s3_animation();
            }else{
                $scope.desktop = false; 
                mobile1_animation();
                console.log('mobile');
            }
            
        }
    );  
    
    function s1_animation(){
        var title1 = {
        strings: ['家居、學校課室的空氣'],
        typeSpeed: 40,
		showCursor: false
        };
        var title2 = {
        strings: ['有多潔淨？'],
        typeSpeed: 40,
        startDelay: 1200,
		showCursor: false
        };
        var typed = new Typed('#title1', title1);
        var typed2 = new Typed('#title2', title2);
    }
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
    function s8_animation(){
        anime({
            targets: '.barchart1',
            duration: 1000,
            width: '14%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart1_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.barchart2',
            duration: 1000,
            width: '11.2%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart2_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.barchart3',
            duration: 1000,
            width: '6.2%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart3_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.barchart4',
            duration: 1000,
            width: '13.4%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart4_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.barchart5',
            duration: 1000,
            width: '14%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart5_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.barchart6',
            duration: 1000,
            width: '8%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.barchart6_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
    }
    function s10_animation(){
        anime({
            targets: '#web_10 div',
            duration: 1000,
            opacity: 1,
            translateY: -20,
            easing: 'easeInSine'
          });
    } 
    function s12_animation(){
        anime({
            targets: '#web_12 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 1000;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function s13_animation(){
        anime({
            targets: '#web_13 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 1000;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    }
    function s14_animation(){
        anime({
            targets: '#web_14 div',
            duration: 1000,
            opacity: 0.7,
            loop: true,
            easing: 'easeInSine'
          });
    }

    function mobile1_animation(){
        var title1 = {
        strings: ['家居、學校課室的空氣'],
        typeSpeed: 40,
		showCursor: false
        };
        var title2 = {
        strings: ['有多潔淨？'],
        typeSpeed: 40,
        startDelay: 1200,
		showCursor: false
        };
        var typed = new Typed('#mobiletitle1', title1);
        var typed2 = new Typed('#mobiletitle2', title2);
    }
    function mobile3_animation(){
        var animate_mobile_03_1 = new CountUp("mobile_03_1", 66, options);
        var animate_mobile_03_2 = new CountUp("mobile_03_2", 11, options);
        var animate_mobile_03_3 = new CountUp("mobile_03_3", 44, options);
        var animate_mobile_03_4 = new CountUp("mobile_03_4", 51, options);
                animate_mobile_03_1.start();
                animate_mobile_03_2.start();
                animate_mobile_03_3.start();
                animate_mobile_03_4.start();
    } 
    function mobile4_animation(){
        anime({
            targets: '#mobile_04 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function mobile5_animation(){
        anime({
            targets: '#mobile_05 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function mobile6_animation(){
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
        var animate_obj = new CountUp('mobile_06_1', '1840000', options);
        animate_obj.start();
    } 
    function mobile7_animation(){
        anime({
            targets: '#mobile_07 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine',
            complete: function(anim) {
                mobile8_animation();
             }
          });
    } 
    function mobile8_animation(){
        anime({
            targets: '#mobile_08 img',
            duration: 1000,
            opacity: 1,
            translateY: -10,
            easing: 'easeInSine'
          });
    } 

    function mobile9_1_animation(){
        anime({
            targets: '.mobile_09_barchart1',
            duration: 1000,
            width: '34%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart1_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.mobile_09_barchart2',
            duration: 1000,
            width: '28.2%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart2_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
    }
    function mobile9_2_animation(){      
          anime({
            targets: '.mobile_09_barchart3',
            duration: 1000,
            width: '15.2%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart3_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.mobile_09_barchart4',
            duration: 1000,
            width: '34.8%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart4_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
    }
    function mobile9_3_animation(){            
          anime({
            targets: '.mobile_09_barchart5',
            duration: 1000,
            width: '34%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart5_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
          anime({
            targets: '.mobile_09_barchart6',
            duration: 1000,
            width: '20%',
            easing: 'easeInSine',
            complete: function(anim) {
                anime({
                    targets: '.mobile_09_barchart6_text',
                    duration: 1000,
                    opacity: 1,
                    easing: 'easeInSine'
                });
             }
          });
    }

    function mobile10_animation(){
        anime({
            targets: '#mobile_10 img',
            duration: 1000,
            opacity: 1,
            translateY: -20,
            easing: 'easeInSine'
          });
    }
    function mobile11_animation(){
        anime({
            targets: '#mobile_11 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function mobile12_animation(){
        anime({
            targets: '#mobile_12 div',
            duration: 2000,
            delay: function(target, index) {
                return index * 500;
             },
            opacity: 1,
            easing: 'easeInSine'
          });
    } 
    function mobile13_animation(){
        anime({
            targets: '#mobile_13 div',
            duration: 1000,
            opacity: 0.7,
            loop: true,
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
    var a08 = true ;  
    var a10 = true ; 
    var a12 = true ; 
    var a13 = true ;

    var am03 = true ;
    var am04 = true ;
    var am05 = true ;
    var am06 = true ;
    var am07 = true ;

    var am09_1 = true ;
    var am09_2 = true ;
    var am09_3 = true ;
    var am10 = true ;
    var am11 = true ;
    var am12 = true ;
    angular.element($window).bind("scroll", function(e) {
        if($scope.desktop){
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
            if(a08 && isScrolledIntoView('#web_08')){
                console.log('web 8 animation start');
                s8_animation();
                a08= false ;
            }
            if(a10 && isScrolledIntoView('#web_10')){
                console.log('web 10 animation start');
                s10_animation();
                a10= false ;
            }
            if(a12 && isScrolledIntoView('#web_12')){
                console.log('web 12 animation start');
                s12_animation();
                a12= false ;
            }
            if(a13 && isScrolledIntoView('#web_13')){
                console.log('web 13 animation start');
                s13_animation();
                a13= false ;
            }
        }else{
            if(am03 && isScrolledIntoView('#mobile_03')){
                console.log('mobile 3 animation start');
                mobile3_animation();
                am03= false ;
            }
            if(am04 && isScrolledIntoView('#mobile_04')){
                console.log('mobile 4 animation start');
                mobile4_animation();
                am04= false ;
            }
            if(am05 && isScrolledIntoView('#mobile_05')){
                console.log('mobile 5 animation start');
                mobile5_animation();
                am05= false ;
            }
            if(am06 && isScrolledIntoView('#mobile_06')){
                console.log('mobile 6 animation start');
                mobile6_animation();
                am06= false ;
            }
            if(am07 && isScrolledIntoView('#mobile_07')){
                console.log('mobile 7 animation start');
                mobile7_animation();
                am07= false ;
            }
            if(am09_1 && isScrolledIntoView('.mobile_09_barchart1')){
                console.log('mobile 9 1 animation start');
                mobile9_1_animation();
                am09_1= false ;
            }
            if(am09_2 && isScrolledIntoView('.mobile_09_barchart3')){
                console.log('mobile 9 2 animation start');
                mobile9_2_animation();
                am09_2= false ;
            }
            if(am09_3 && isScrolledIntoView('.mobile_09_barchart5')){
                console.log('mobile 9 3 animation start');
                mobile9_3_animation();
                am09_3= false ;
            }
            if(am10 && isScrolledIntoView('#mobile_10')){
                console.log('mobile 10 animation start');
                mobile10_animation();
                am10= false ;
            }
            if(am11 && isScrolledIntoView('#mobile_11')){
                console.log('mobile 11 animation start');
                mobile11_animation();
                am11= false ;
            }
            if(am12 && isScrolledIntoView('#mobile_12')){
                console.log('mobile 12 animation start');
                mobile12_animation();
                am12= false ;
            }
        }
        
    })
});




function init() {

}



$(document).ready(function () {

   
});