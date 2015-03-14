$(document).ready(function () {



    var data = $.getJSON("data.json", function () {
            console.log("success");
        })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

    // Perform other work here ...

    // Set another completion function for the request above
    data.complete(function () {
        console.log("second complete");
    });
    //        var CCallData = conditions.data.weather[0];
    //        var CCHourlyData = CCallData.hourly[0];
    //        var CCiconOBJ = CCHourlyData.weatherIconUrl[0];
    //        var CCicon = CCiconOBJ.value;
    //        var CCcloud = CCHourlyData.cloudcover;
    //        var CCtemp = CCHourlyData.tempF;
    //        var CCswell = CCHourlyData.swellHeight_m * 3;
    //        var CCwater = CCHourlyData.waterTemp_F;
    //
    //        $("#CCtemp").html("Temp: " + CCtemp + "F");
    //        $("#CCswell").html("Swell: " + CCswell + "ft");
    //        $("#CCwater").html("Water Temp: " + CCwater);
    //        $("#CCcloud").html("Cloud cover: " + CCcloud + "%");



    //  var TOKEN = 'a145c87bd8200185ba6a90fd593e2';
    //  var coords = [
    //      {"city" : "Cocoa Beach", "lat" : 28.3311, "long" : -80.6131}, 
    //      {"city" : "New Symrna Beach", "lat" : 29.0306, "long" : -80.9253},
    //      {"city" : "Daytona Beach", "lat" : 29.2000, "long" : -81.0333},
    //      {"city" : "Ponce Inlet", "lat" : 29.0947, "long" : -80.9425}
    //  ];
    //    var CCallData, CCHourlyData, CCiconOBJ, CCicon,
    //        NSallData, NSHourlyData, NSicon,
    //        DBallData, DBHourlyData, DBicon,
    //        PIHourlyData, PIicon,
    //        CCcloud, CCtemp, CCswell, CCwater,
    //        NScloud, NStemp, NSswell, NSwater,
    //        DBcloud, DBtemp, DBswell, DBwater,
    //        PIcloud, PItemp, PIswell, PIwater;



    //1 ft = 3.28084



    //    var CocoaBeach = $.getJSON( 'https://api.worldweatheronline.com/free/v2/marine.ashx?key=a145c87bd8200185ba6a90fd593e2&format=json&tide=yes&q=28.3311,-80.6131', function(conditions) { 
    //    var CCallData = conditions.data.weather[0];
    //    var CCHourlyData = CCallData.hourly[0];
    //    var CCiconOBJ = CCHourlyData.weatherIconUrl[0];
    //    var CCicon = CCiconOBJ.value;
    //    var CCcloud = CCHourlyData.cloudcover;
    //    var CCtemp = CCHourlyData.tempF;
    //    var CCswell = CCHourlyData.swellHeight_m * 3;
    //    var CCwater = CCHourlyData.waterTemp_F;    
    //        
    //    $("#CCtemp").html("Temp: " + CCtemp + "F");
    //    $("#CCswell").html("Swell: " + CCswell  + "ft");
    //    $("#CCwater").html("Water Temp: " + CCwater);
    //    $("#CCcloud").html("Cloud cover: " + CCcloud + "%");    
    //        
    //});
    //
    // var newSmyrna = $.getJSON( 'https://api.worldweatheronline.com/free/v2/marine.ashx?key=a145c87bd8200185ba6a90fd593e2&format=json&tide=yes&q=29.0306,-80.9253', function(conditions) { 
    //    var NSallData = conditions.data.weather[0];
    //    var NSHourlyData = NSallData.hourly[0];
    //    var NSiconOBJ = NSHourlyData.weatherIconUrl[0];
    //    var NSicon = NSiconOBJ.value;
    //    var NScloud = NSHourlyData.cloudcover;
    //    var NStemp = NSHourlyData.tempF;
    //    var NSswell = NSHourlyData.swellHeight_m * 3;
    //    var NSwater = NSHourlyData.waterTemp_F; 
    //     
    //    $("#NStemp").html("Temp: " + NStemp + "F");
    //    $("#NSswell").html("Swell: " + NSswell  + "ft");
    //    $("#NSwater").html("Water Temp: " + NSwater);
    //    $("#NScloud").html("Cloud cover: " + NScloud + "%"); 
    //        
    //});
    //    
    //var DaytonaBch = $.getJSON( 'https://api.worldweatheronline.com/free/v2/marine.ashx?key=a145c87bd8200185ba6a90fd593e2&format=json&tide=yes&q=29.2000,-81.0333', function(conditions) { 
    //    var DBallData = conditions.data.weather[0];
    //    var DBHourlyData = DBallData.hourly[0];
    //    var DBiconOBJ = DBHourlyData.weatherIconUrl[0];
    //    var DBicon = DBiconOBJ.value;
    //    var DBcloud = DBHourlyData.cloudcover;
    //    var DBtemp = DBHourlyData.tempF;
    //    var DBswell = DBHourlyData.swellHeight_m * 3;
    //    var DBwater = DBHourlyData.waterTemp_F; 
    //    
    //    $("#DBtemp").html("Temp: " + DBtemp + "F");
    //    $("#DBswell").html("Swell: " + DBswell  + "ft");
    //    $("#DBwater").html("Water Temp: " + DBwater);
    //    $("#DBcloud").html("Cloud cover: " + DBcloud + "%");
    //      
    //});
    //    
    //var PonceInlet = $.getJSON( 'https://api.worldweatheronline.com/free/v2/marine.ashx?key=a145c87bd8200185ba6a90fd593e2&format=json&tide=yes&q=29.0947,-80.9425', function(conditions) { 
    //    
    //    var PIallData = conditions.data.weather[0];
    //    var PIHourlyData = PIallData.hourly[0];
    //    var PIiconOBJ = PIHourlyData.weatherIconUrl[0];
    //    var PIicon = PIiconOBJ.value;
    //    var PIcloud = PIHourlyData.cloudcover;
    //    var PItemp = PIHourlyData.tempF;
    //    var PIswell = PIHourlyData.swellHeight_m * 3;
    //    var PIwater = PIHourlyData.waterTemp_F; 
    //    
    //    $("#PItemp").html("Temp: " + PItemp + "F");
    //    $("#PIswell").html("Swell: " + PIswell  + "ft");
    //    $("#PIwater").html("Water Temp: " + PIwater);
    //    $("#PIcloud").html("Cloud cover: " + PIcloud + "%");
    //     
    //}); console.log(PonceInlet);  
    //function geoFindMe() {
    //  var output = document.getElementById("out");
    //
    //  if (!navigator.geolocation){
    //    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    //    return;
    //  }
    //
    //  function success(position) {
    //      output.innerHTML = '<p>Latitude is ' + myLatitude + '° <br>Longitude is ' + myLongitude + '°</p>';
    //  };
    //
    //  function error() {
    //      output.innerHTML = "Unable to retrieve your location";
    //  };
    //
    //  output.innerHTML = "<p>Locating…</p>";
    //
    //  navigator.geolocation.getCurrentPosition(success, error);
    //}

});