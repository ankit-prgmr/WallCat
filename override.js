navigator.geolocation.getCurrentPosition(function printCoordinates(pos){
    console.log("The latitude is "+pos.coords.latitude);
    console.log("The longitude is "+pos.coords.longitude);


/*
    $.ajax("http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude"+"&lon="+pos.coords.longitude+"+"&APPID=722ffba8410bf98859daabb4beb54f09")
     .done(function(data)){
        console.log(data);
     })
*/
     $.ajax({
       url:"http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&APPID=722ffba8410bf98859daabb4beb54f09",
       success: function(data){
         console.log(data);
       }
     })

});
