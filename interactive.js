let h1;
let x=0;
let y=0;
let cursor;
let mx=0;
let my=0;
let ms = 0.05;

window.onload = function(){
    h1 = document.querySelector("h1");
    cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", mousefunc, false);

    function mousefunc(e) {
        x = e.clientX;
        y = e.clientY;
        
    }
    loop();
}

function loop() {
    //console.log(x , y);
    mx += (x - mx) *ms;
    my += (y - my) *ms;

    h1.innerHTML = "x: " + mx + "y: " + my;

    cursor.style.transform = "translate(" + mx+ "px," + my + "px)";
    window.requestAnimationFrame(loop);
}