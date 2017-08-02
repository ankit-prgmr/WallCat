
$.ajax({
    type:"POST",
    url:"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC0ve5-5CTwhnC53Vr94CYh3uMobXVIZc8",
    success:getWeatherData
});

function getWeatherData(data){

  console.log(data.location.lat);
  console.log(data.location.lng);

  $.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?lat="+data.location.lat+"&lon="+data.location.lng+"&units=metric"+"&APPID=722ffba8410bf98859daabb4beb54f09",
    success:function(weatherData){
        console.log(weatherData.name);
        console.log(weatherData.main.temp);
    }
  });
}
