
var arrea = document.getElementById("arrea")

arrea.onclick = function(){
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
       arrea.src = "sun.png";
   }else{
       arrea.src = "moon4.png";
   }
}

    src="https://code.jquery.com/jquery-2.2.4.min.js"

var x = document.getElementById('output');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            showPosition);
    }else{
        x.innerHTML = "Browser not Supporting"
    }
}
function showPosition(position){
    x.innerHTML = "latitude = " +position.coords.latitude;
    x.innerHTML += "<br />";
    x.innerHTML += "Longitude = "+position.coords.latitude; 
}
