function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = -25.33502;
      const longitude = -57.5264;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitud: ${latitude} °, Longitud: ${longitude} °`;
    }
  
    function error() {
      status.textContent = "No se pudo mostrar su localización";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "Su navegador no soporta Geolocation";
    } else {
      status.textContent = "Localizando…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
var boton = document.querySelector("#find-me");
boton.addEventListener("click", geoFindMe);
  