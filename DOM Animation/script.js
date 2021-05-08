// get the ball
var ball = document.getElementById("ball");

// top gap for ball
var y = 1;

//control up or down
var down = true;

//set interval
setInterval(function () {

    //going down then...
    if (down == true) {
        y++;
    }
    else {
        y--;
    }

    //touched bottom floor
    if (y == 180) {
        down = false;
        //need to go up now
    }
    //touched top floor
    if (y == 0) {
        down = true;
        //go down
    }
    ball.style.top = y + 'px';
}, 9)