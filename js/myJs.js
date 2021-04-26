function turnOn() {
    var bulbFilamentArray = document.getElementsByClassName("bulb_filament");
    for (var i = 0; i < bulbFilamentArray.length; i++) {
        bulbFilamentArray[i].style.backgroundColor = "#FAE844";
    }
     document.getElementsByClassName("bulb_inner")[0].style.boxShadow= "0px -10px 10px 10px orange";
}
function turnOff() {
    var bulbFilamentArray = document.getElementsByClassName("bulb_filament");
    for (var i = 0; i < bulbFilamentArray.length; i++) {
        bulbFilamentArray[i].style.backgroundColor = "rgb(53, 53, 53)";
    }
    document.getElementsByClassName("bulb_inner")[0].style.boxShadow= "0px 0px 0px 0px orange";
}
