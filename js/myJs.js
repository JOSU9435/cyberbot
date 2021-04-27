var stateBulb = false;
let buttonArray = document.getElementsByClassName("buttons");
function turnOn() {
    var tubelightArray = document.getElementsByClassName("tubelight-container")[0];
    var btn = document.getElementsByClassName("buttons")[0];
    if (stateBulb) {
        for (var i = 0; i < tubelightArray.length; i++) {
            tubelightArray[i].style.backgroundColor = "rgb(53, 53, 53)";
        }
        stateBulb = false;
        btn.innerHTML = "Turn on";
        turnOffHandRotate();
        enableAllButtons();
    } else {
        for (var i = 0; i < tubelightArray.length; i++) {
            tubelightArray[i].style.backgroundColor = "#FAE844";
        }
        stateBulb = true;
        btn.innerHTML = "Turn off ";
        turnOnHandRotate();
        disableAllOtherButton(btn);
    }
}


function hiAnimation() {

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
    });
}

function turnOnHandRotate() {
    var rHand = document.getElementsByClassName("r-hand")[0];
    rHand.animate(
        [
            {
                transformOrigin: "top"
            }
            , {
                transform: "rotate(-65deg)"
            }
        ], {
        duration: 900, iterations: 1, fill: 'forwards'
    }
    );
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