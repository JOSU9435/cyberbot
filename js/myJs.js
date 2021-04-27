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


function hiAnimation(){

    var head=document.getElementsByClassName("and-head")[0];
    var lEye=document.getElementsByClassName("l-eye")[0];
    var rEye=document.getElementsByClassName("r-eye")[0];
    var body=document.getElementsByClassName("and-body")[0];
    var lHand=document.getElementsByClassName("l-hand")[0];
    var rHand=document.getElementsByClassName("r-hand")[0];
    var rleg=document.getElementsByClassName("r-leg")[0];
            
    head.style.animation="1s hi-head-movement ease-in-out 0s 2 alternate";
    lEye.style.animation="1s hi-eye-movement 0s 2 alternate";
    rEye.style.animation="1s hi-eye-movement 0s 2 alternate";
    body.style.animation="1s hi-body-movement ease-in-out 0s 2 alternate";
    lHand.style.animation="1s hi-lhand-movement ease-in-out 0s 2 alternate";
    rHand.style.animation="1s hi-rhand-movement ease-in-out 0s 2 alternate";
    rleg.style.animation="1s hi-rleg-movement ease-in-out 0s 2 alternate";

    head.addEventListener("animationend",()=>{
        head.style.animation="";            
        lEye.style.animation="";
        rEye.style.animation="";
        body.style.animation="";
        lHand.style.animation="";
        rHand.style.animation="";
        rleg.style.animation="";
    });
}
