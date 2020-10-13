const page = document.getElementById('body');



/*
    Below program changes the background colors every 10s
*/
randomizeColors = function() {
    color = `hsl(${Math.floor(Math.random() * 360)},100%, 40%)`;
    return color
}

window.addEventListener('load', ()=> {
    setInterval(() => {
        page.style.background=`linear-gradient(to right, ${randomizeColors()}, ${randomizeColors()})`;
    }, 10000);
})

