document.addEventListener('DOMContentLoaded', function() {// el evento DOMContentLoaded se activa cuando se carga la escructura de html    
    iniciarApp();
})

function iniciarApp() {


function iniciarMapa() {

    let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.850146675924945 , lng: -83.8451025637439  },  
    zoom: 17,
    });
    let infoWindow = new google.maps.InfoWindow();
}

window.initMap = iniciarMapa;



}





  


