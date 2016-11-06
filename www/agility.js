(function(){
    var instruction = 0, interval;
    var target = document.getElementById("text");
    var speedSlider = document.getElementById("speed");
    speedSlider.addEventListener("input", setSpeed);

    setSpeed();
    next();

    function next() {
        // Between 1 and 3 - number should change every time
        var incr =  Math.floor(Math.random() * 2) + 1;
        // Instruction stays in [0,3] to keep everyone sane
        instruction = (instruction + incr) % 4;
        // Add one when we set the input to shift bounds to [1,4]
        target.innerHTML = (instruction + 1).toString();
        window.setTimeout(next, interval);
    }

    function setSpeed() {
        var speed = speedSlider.value;
        interval = (speed * 20) + 500;
    }
})();
