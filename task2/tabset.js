function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
  }
  window.onclick = function (event){
    if (event.target == x){
        x.style.display = 'none';
    }
}