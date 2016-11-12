(function(){
    var instruction = 0, interval;
    var speedSlider = document.getElementById("speed");
    var quadrants = {
        0: document.getElementById("q1"),
        1: document.getElementById("q2"),
        2: document.getElementById("q3"),
        3: document.getElementById("q4")
    };

    speedSlider.addEventListener("input", setSpeed);

    setSpeed();
    next();

    function next() {
        // Clear the previous target
        quadrants[instruction].classList.remove("target");
        // Between 1 and 3 - number should change every time
        var incr =  Math.floor(Math.random() * 2) + 1;
        // Set the next target
        instruction = (instruction + incr) % 4;
        quadrants[instruction].classList.add("target");
        window.setTimeout(next, interval);
    }

    function setSpeed() {
        var speed = speedSlider.value;
        interval = (speed * 10) + 500;
    }
})();
