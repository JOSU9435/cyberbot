var stateBulb = false;
var colorList = ["rgba(252, 3, 190, 0.8)", "rgba(252, 3, 90, 0.8)", "rgba(52, 0, 224, 0.8)", "rgba(0, 255, 21, 0.8)", "rgba(251, 255, 0, 0.8)", "rgba(255, 77, 0, 0.8)"];
let siezure = true;
let buttonArray = document.getElementsByClassName("buttons");
function turnOn() {
    var tubelight = document.getElementsByClassName("tubelight")[0];
    var btn = document.getElementsByClassName("buttons")[0];
    if (stateBulb) {
        tubelight.style.backgroundColor = "rgba(53, 53, 53, 0.25)";
        tubelight.style.boxShadow = "";
        stateBulb = false;
        siezure = true;
        btn.innerHTML = "Turn on";
    } else {
        tubelight.style.animation = "flicker 0.1s 0s 2 alternate";
        tubelight.addEventListener("animationend", () => {
            tubelight.style.animation = "";
            tubelight.style.backgroundColor = "rgb(252, 255, 214)";
            tubelight.style.boxShadow = "0 1vh 5vh 0.7vh #fff";
        });
        stateBulb = true;
        siezure = false;
        btn.innerHTML = "Turn off ";
    }
}


function hiAnimation() {
    var btn=document.getElementsByClassName("buttons")[1];
    disableAllOtherButton(btn);

    var head = document.getElementsByClassName("and-head")[0];
    var lEye = document.getElementsByClassName("l-eye")[0];
    var rEye = document.getElementsByClassName("r-eye")[0];
    var body = document.getElementsByClassName("and-body")[0];
    var lHand = document.getElementsByClassName("l-hand")[0];
    var rHand = document.getElementsByClassName("r-hand")[0];
    var rleg = document.getElementsByClassName("r-leg")[0];

    head.style.animation = "1s hi-head-movement ease-in-out 0s 2 alternate";
    lEye.style.animation = "1s hi-eye-movement 0s 2 alternate";
    rEye.style.animation = "1s hi-eye-movement 0s 2 alternate";
    body.style.animation = "1s hi-body-movement ease-in-out 0s 2 alternate";
    lHand.style.animation = "1s hi-lhand-movement ease-in-out 0s 2 alternate";
    rHand.style.animation = "1s hi-rhand-movement ease-in-out 0s 2 alternate";
    rleg.style.animation = "1s hi-rleg-movement ease-in-out 0s 2 alternate";

    head.addEventListener("animationend", () => {
        head.style.animation = "";
        lEye.style.animation = "";
        rEye.style.animation = "";
        body.style.animation = "";
        lHand.style.animation = "";
        rHand.style.animation = "";
        rleg.style.animation = "";
        enableAllButtons();
    });
}


function danceAnimation() {
    if(siezure==false){
        var disco = setInterval(discoMode, 150);
    }
    var btn=document.getElementsByClassName("buttons")[2];
    disableAllOtherButton(btn);

    var head = document.getElementsByClassName("and-head")[0];
    var lEye = document.getElementsByClassName("l-eye")[0];
    var rEye = document.getElementsByClassName("r-eye")[0];
    var body = document.getElementsByClassName("and-body")[0];
    var lHand = document.getElementsByClassName("l-hand")[0];
    var rHand = document.getElementsByClassName("r-hand")[0];
    var rleg = document.getElementsByClassName("r-leg")[0];
    var lleg = document.getElementsByClassName("l-leg")[0];

    head.style.animation = "3s dance-head-movement ease-in-out 0s 4 alternate";
    lEye.style.animation = "3s dance-eye-movement 0s 4 alternate";
    rEye.style.animation = "3s dance-eye-movement 0s 4 alternate";
    body.style.animation = "3s dance-body-movement ease-in-out 0s 4 alternate";
    lHand.style.animation = "3s dance-lhand-movement ease-in-out 0s 4 alternate";
    rHand.style.animation = "3s dance-rhand-movement ease-in-out 0s 4 alternate";
    rleg.style.animation = "1.5s dance-rleg-movement ease-in-out 0s 8 alternate";
    lleg.style.animation = "1.5s dance-lleg-movement ease-in-out 0s 8 alternate";

    head.addEventListener("animationend", () => {
        head.style.animation = "";
        lEye.style.animation = "";
        rEye.style.animation = "";
        body.style.animation = "";
        lHand.style.animation = "";
        rHand.style.animation = "";
        rleg.style.animation = "";
        lleg.style.animation = "";
        enableAllButtons();
        clearInterval(disco);
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(53, 53, 53)";
    });
}

function turnOffHandRotate() {
    var rHand = document.getElementsByClassName("r-hand")[0];
    rHand.animate(
        [
            {
                transformOrigin: "top"
            }
            , {
                transform: "rotate(0deg)"

            }
        ], {
        duration: 900, iterations: 1, fill: 'forwards'
    }
    );
    setTimeout(() => {
        rHand.style.animation=null;
    },900);
}

function turnOnTubelight() {
    document.getElementsByClassName('tubelight-container')[0].animate([
        {
            backgroundColor: "yellow"
        }
    ], {
        duration: 1000
    }
    );
}

function disableAllOtherButton(button) {
    for (var i = 0; i < buttonArray.length; i++) {

        if (buttonArray[i] !== button) {
            buttonArray[i].style.display = "none";
        }
    }
}
function enableAllButtons() {
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].style.display = "flex";
    }
}
function discoMode(){
    document.getElementsByTagName("body")[0].style.backgroundColor = colorList[(Math.trunc(Math.random()*10))%colorList.length];
}
