"use strict";angular.module("skedaddle",["ngAnimate","ngCookies","ngSanitize","restangular","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl",controllerAs:"main"}).state("order",{url:"/order",templateUrl:"app/order/order.html",controller:"OrderCtrl",controllerAs:"order"}).state("team",{url:"/team",templateUrl:"app/team/team.html",controller:"TeamCtrl",controllerAs:"team"}),a.otherwise("/")}]),angular.module("skedaddle").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("skedaddle").controller("TeamCtrl",function(){}),angular.module("skedaddle").config(["RestangularProvider",function(e){e.setDefaultHeaders({"Content-Type":"application/json"}),e.setBaseUrl("https://www.googleapis.com/qpxExpress/v1/"),e.setDefaultRequestParams({key:"AIzaSyCR6G5517GCv0MKX5Z8wjetXS4NchVfDHI"})}]).controller("OrderCtrl",["Restangular","geo",function(e){var a=this;this.APIrequests={},this.location_icons=[{city:"Miami",city_code:"MIA",airport:"MIA",loc_icon:"assets/images/island.png",num:"0"},{city:"Denver",city_code:"DEN",airport:"DEN",loc_icon:"assets/images/mountain13.png",num:"1"},{city:"Charleston",city_code:"CHS",airport:"CHS",loc_icon:"assets/images/hearts13.png",num:"2"},{city:"Orlando",city_code:"ORL",airport:"MCO",loc_icon:"assets/images/theme-park.png",num:"3"},{city:"New York City",city_code:"NYC",airport:"JFK",loc_icon:"assets/images/bag.png",num:"4"},{city:"Las Vegas",city_code:"LAS",airport:"LAS",loc_icon:"assets/images/poker4.png",num:"5"}],this.trips={},this.tripOption=this.trips.tripOption,this.singleBudget=["300","400","500","600","700","800"],this.romanticBudget=["600","800","1000","1200","1400","1600"];var t="",i="";this.selections={},this.selections.finalOrigin="MCO",this.selections.adultCount=1;var n=Date.now(),s=864e5,r=s+n,o=new Date(r),l=o.getMonth()+1,c=o.getDate(),d=o.getFullYear()+"-"+(10>l?"0":"")+l+"-"+(10>c?"0":"")+c;this.selections.finalDepartureDate=d;var g=n+3*s,m=new Date(g),u=m.getMonth()+1,h=m.getDate(),p=m.getFullYear()+"-"+(10>u?"0":"")+u+"-"+(10>h?"0":"")+h;this.selections.finalReturnDate=p,this.getTheme=function(){return this.selections.finalDestination=t.city_code,"CHS"==t.city_code&&(this.selections.adultCount=2),t},this.selectTheme=function(e){t=e},this.getBudget=function(){return console.log(i+" = this.getBudget"),this.selections.finalMaxBudget="USD"+i,i},this.selectBudget=function(e){i=e},this.apiCall=function(t){console.log(t),this.findSkedaddle={request:{slice:[{origin:t.finalOrigin,destination:t.finalDestination,date:t.finalDepartureDate,maxStops:0},{origin:t.finalDestination,destination:t.finalOrigin,date:t.finalReturnDate,maxStops:0}],passengers:{adultCount:t.adultCount,infantInLapCount:0,infantInSeatCount:0,childCount:0,seniorCount:0},solutions:5,maxPrice:t.finalMaxBudget,refundable:!1}},console.log(this.findSkedaddle),e.one("trips").post("search",this.findSkedaddle).then(function(e){return console.log(e),a.trips=e.trips,void 0===a.trips.tripOption?(console.log("NO DATA RETURNED"),alert("Please try another search there are no flights avalible")):(console.log(a.trips),a.trips)}),console.log(this.findSkedaddle)},this.view="search",this.getView=function(){return this.view},this.setView=function(e){this.view=e},$(function(){var e=$("#burger-bar");e.on("click","a",null,function(){e.collapse("hide")})})}]),angular.module("skedaddle").controller("MainCtrl",["geo",function(){}]),angular.module("skedaddle").factory("geo",function(){return{geoFindMe:function(){function e(e){e.coords.latitude,e.coords.longitude}function a(){}if(!navigator.geolocation);navigator.geolocation.getCurrentPosition(e,a)}}}),angular.module("skedaddle").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container-fluid"><section ng-controller="MainCtrl as main"><div class="jumbotron"><h5 class="">when you\'ve just gotta...</h5><h1 class="">Skedaddle</h1><p class="how_it_works">So... you\'ve just gotta, Skedaddle.<br>Let us do all the work. All you need to do is select a <em>destination</em> and the <em>max-budget</em> for your trip. We will supply you with options for flights leaving tomorrow on a weekend length trip for a single adult. Upon selecting a romantic trip the results supplied will be for two people.</p><a class="btn btn-primary btn-lg" href="#/order" role="button" ng-click="main.geoFindMe()">Search Now</a></div></section></div>'),e.put("app/order/order.html",'<header><div ng-include="\'components/navbar/navbar.html\'"></div></header><div ng-contoller="Orderctrl as order"><div class="order-view form-box searchHeight" ng-show="order.getView() === \'search\'"><ng-form name="myForm"><div class="icon-label">Destination</div><div class="icon-row"><label class="icon-anchor" ng-repeat="location in order.location_icons"><input ng-form="myForm" name="theme" id="theme" type="radio" ng-click="order.selectTheme(location)" required=""> <img ng-src="{{location.loc_icon}}"></label></div><div class="icon-label">Max-Budget</div><div class="icon-row"><label class="icon-anchor" ng-repeat="maxBudget in {true: order.romanticBudget, false: order.singleBudget}[order.selections.finalDestination === \'CHS\']"><input ng-form="myForm" name="budget" id="budget" type="radio" ng-click="order.selectBudget(maxBudget)" required=""> <img src="assets/images/blank38.png"><div class="icon-tag tag" ng-class="{true: \'romantic-tag\'}[order.selections.finalDestination === \'CHS\']">${{maxBudget}}</div></label></div><a id="apiClick" class="btn btn-primary btn-lg search-button" ng-click="order.setView(\'results\'); order.apiCall(order.selections)">Search</a></ng-form></div><div class="form-box results-view reultsHeight" ng-show="order.getView() === \'results\'"><div class="icon-row bottom-row"><i><img class="icon active" src="{{order.getTheme().loc_icon}}"></i> <i><img class="icon active" src="assets/images/blank38.png"><div class="icon-tag bottom-tag tag" ng-class="{true: \'romantic-tag-bottom\'}[order.getTheme().city_code === \'CHS\']">${{order.getBudget()}}</div></i> <i ng-click="order.setView(\'search\')"><img class="icon active" src="assets/images/NewMagnifyingGlass.png"></i></div><table class="table table-striped"><tr><th>My Desitination</th><th>Departure Flight</th><th>Return Flight</th><th>Purchase</th></tr><tr ng-repeat="flight in order.trips.tripOption"><td><span ng-repeat="airport in order.trips.data.airport"><span ng-if="airport.code == flight.slice[0].segment[0].leg[0].destination"><span ng-repeat="city in order.trips.data.city"><span ng-if="city.code == airport.city">{{city.name}}</span></span></span></span></td><td>{{flight.slice[0].segment[0].leg[0].origin}} to {{flight.slice[0].segment[0].leg[0].destination}}<br><span ng-repeat="airline in order.trips.data.carrier"><span ng-if="airline.code === flight.slice[0].segment[0].flight.carrier">{{airline.name.replace(\'Corporation\', \'-\').replace(\', Inc.\', \' -\')}}</span></span> {{flight.slice[0].segment[0].flight.number}}, {{flight.slice[0].segment[0].duration}}min.<br>{{flight.slice[0].segment[0].leg[0].departureTime | date : \'M/d/yy, h:mm a\': EST}} - {{flight.slice[0].segment[0].leg[0].arrivalTime | date : \'h:mm a\': EST}}</td><td>{{flight.slice[1].segment[0].leg[0].origin}} to {{flight.slice[1].segment[0].leg[0].destination}}<br><span ng-repeat="airline in order.trips.data.carrier"><span class="airlineName" ng-if="airline.code === flight.slice[1].segment[0].flight.carrier">{{airline.name.replace(\'Corporation\', \'-\').replace(\', Inc.\', \' -\')}}</span></span> {{flight.slice[1].segment[0].flight.number}}, {{flight.slice[1].segment[0].duration}}min.<br>{{flight.slice[1].segment[0].leg[0].departureTime | date : \'M/d/yy, h:mm a\': EST}} - {{flight.slice[1].segment[0].leg[0].arrivalTime | date : \'h:mm a\': EST}}</td><td class="purchase">${{flight.saleTotal.slice(3)}}<br><a class="btn btn-success" ng-click="order.setView(\'purchase\')" href="https://www.priceline.com/fly/#/search/{{flight.slice[0].segment[0].leg[0].origin}}-{{flight.slice[0].segment[0].leg[0].destination}}-{{flight.slice[0].segment[0].leg[0].departureTime | date : \'yyyyMMdd\'}}/{{flight.slice[1].segment[0].leg[0].origin}}-{{flight.slice[1].segment[0].leg[0].destination}}-{{flight.slice[1].segment[0].leg[0].departureTime | date : \'yyyyMMdd\'}}/1?country-code=US&input-arm-key=564A200A574A200A0zah2Hi%3DzEWMPNckq9BDJC2439&search-number-of-stops=0&direction=outbound&page=1" target="purchaseFrame">Skedaddle!</a></td></tr></table></div><div class="form-box frame-box buyHeight" ng-show="order.getView() === \'purchase\'"><a class="closeIframe" ng-click="order.setView(\'results\')">[x] close</a><iframe name="purchaseFrame" src="#" frameborder="0" allowtransparency="true" scrolling="yes">Your browser doesn\'t support iFrames. To Purchase your flight continue <a href="https://www.priceline.com/fly/#/search/{{flight.slice[0].segment[0].leg[0].origin}}-{{flight.slice[0].segment[0].leg[0].destination}}-{{flight.slice[0].segment[0].leg[0].departureTime | date : \'yyyyMMdd\'}}/{{flight.slice[1].segment[0].leg[0].origin}}-{{flight.slice[1].segment[0].leg[0].destination}}-{{flight.slice[1].segment[0].leg[0].departureTime | date : \'yyyyMMdd\'}}/1?country-code=US&input-arm-key=564A200A574A200A0zah2Hi%3DzEWMPNckq9BDJC2439&search-number-of-stops=0&direction=outbound&page=1">HERE</a></iframe></div></div>'),e.put("app/team/team.html",'<div class="form-box teampage"><h1><em>theTeam@</em> <a href="#/main">Skedaddle</a></h1><div class="employee-box"><img class="icon" src="./assets/images/head_shot.png"><div>Sam Kauffman</div><a class="email" href="mailto:skedaddle.click@gmail.com?Subject=Hello!%20I%20saw%20your%20app%20and%20wanted%20to%20contact%20you.&body=Hi%20Sam%20Kauffman,%0A%0ASkedaddle,%20what%20a%20fantastic%20idea%20for%20a%20web%20app!%0AI%20hear%20you%20are%20looking%20for%20front-end%20web%20development%20work.%0ALet\'s%20schedule%20a%20time%20to%20speak%20at%20your%20earliest%20convience.%0A%0ARegards," target="_top">samuelkauffman@gmail.com</a><div><a class="social-icon" target="_blank" href="//www.twitter.com/samkauffman"><span class="fa-stack fa-lg"><i class="fa fa-twitter fa-stack-1x"></i></span></a> <a class="social-icon" target="_blank" href="//www.linkedin.com/in/samuelkauffman"><span class="fa-stack fa-lg"><i class="fa fa-linkedin fa-stack-1x"></i></span></a> <a class="social-icon" target="_blank" href="//www.github.com/sak55"><span class="fa-stack fa-lg"><i class="fa fa-github fa-stack-1x"></i></span></a></div></div><div class="thankyou"><div>Special Thank You:<ul><li><a target="_blank" href="http://theironyard.com/about/team/#david-rogers">al-the-x (David Rogers), Front End Instructor</a></li><li><a target="_blank" href="//github.com/LoganArnett">Logan Arnett, Front End T.A.</a></li><li><a target="_blank" href="//github.com/AriGonzo">Ari Gonzalez, Ruby T.A.</a></li><li><a target="_blank" href="http://theironyard.com/about/team/#susanna">Susanna Miller, Campus Director</a></li><li><a target="_blank" href="//github.com/TheIronYard--Orlando/FEE--2015--SPRING">FEE--2015--SPRING (Front End Engineering Classmates)</a></li><li>Becca, Trippe, Emma, and the rest of my family.</li></ul></div></div></div>'),e.put("components/navbar/navbar.html",'<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#burger-bar"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#/index.html"><em class="catch_phrase">when you\'ve just gotta...</em> Skedaddle</a></div><div class="collapse navbar-collapse" id="burger-bar"><ul class="nav navbar-nav"><li><a href="#/order" ng-click="order.setView(\'search\')">Search <img src="assets/images/magnifying-glass32.png"></a></li><li><a target="_blank" href="//www.facebook.com/justgottaskedaddle">facebook <img src="assets/images/facebook29.png"></a></li><li><a target="_blank" href="//twitter.com/gottaSkedaddle">Twitter <img src="assets/images/twitter1.png"></a></li><li><a href="#/team">theTeam <img src="assets/images/team2.png"></a></li><li><a href="mailto:skedaddle.click@gmail.com?Subject=Hello!%20I%20saw%20your%20app%20and%20wanted%20to%20contact%20you.&body=Hi%20Sam%20Kauffman,%0A%0ASkedaddle,%20what%20a%20fantastic%20idea%20for%20a%20web%20app!%0AI%20hear%20you%20are%20looking%20for%20front-end%20web%20development%20work.%0ALet\'s%20schedule%20a%20time%20to%20speak%20at%20your%20earliest%20convience.%0A%0ARegards," target="_top">Contact <img src="assets/images/email123.png"></a></li></ul></div></div></nav>')}]);