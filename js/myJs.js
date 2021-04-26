var stateBulb=false;

function turnOn() { 
    var bulbFilamentArray = document.getElementsByClassName("bulb_filament");
    var btn=document.getElementsByClassName("button-txt-bulb")[0];
    if(stateBulb){  
        for (var i = 0; i < bulbFilamentArray.length; i++) {
            bulbFilamentArray[i].style.backgroundColor = "rgb(53, 53, 53)";
        }
        document.getElementsByClassName("bulb_inner")[0].style.boxShadow= "0px 0px 0px 0px orange";
        stateBulb=false;
        btn.innerHTML="Turn on";
    }else{
        for (var i = 0; i < bulbFilamentArray.length; i++) {
            bulbFilamentArray[i].style.backgroundColor = "#FAE844";
        }
        document.getElementsByClassName("bulb_inner")[0].style.boxShadow= "0px -10px 10px 10px orange";
        stateBulb=true;
        btn.innerHTML="Turn off";
    }
}

var stateHi=false;

function hiAnimation(){

    var head=document.getElementsByClassName("and-head")[0];
    var lEye=document.getElementsByClassName("l-eye")[0];
    var rEye=document.getElementsByClassName("r-eye")[0];
    var body=document.getElementsByClassName("and-body")[0];
    var lHand=document.getElementsByClassName("l-hand")[0];
    var rHand=document.getElementsByClassName("r-hand")[0];
    var rleg=document.getElementsByClassName("r-leg")[0];

    var btn= document.getElementsByClassName("button-txt-hi")[0];
    if(stateHi){
        head.style.animation="none";
        lEye.style.animation="none";
        rEye.style.animation="none";
        body.style.animation="none";
        lHand.style.animation="none";
        rHand.style.animation="none";
        rleg.style.animation="none";

        stateHi=false;
        btn.innerHTML="Hi"
    }else{
        head.style.animation="1s hi-head-movement ease-in-out 0s infinite alternate";
        lEye.style.animation="1s hi-eye-movement 0s infinite alternate";
        rEye.style.animation="1s hi-eye-movement 0s infinite alternate";
        body.style.animation="1s hi-body-movement ease-in-out 0s infinite alternate";
        lHand.style.animation="1s hi-lhand-movement ease-in-out 0s infinite alternate";
        rHand.style.animation="1s hi-rhand-movement ease-in-out 0s infinite alternate";
        rleg.style.animation="1s hi-rleg-movement ease-in-out 0s infinite alternate";

        stateHi=true;
        btn.innerHTML="stop"
    }
}
