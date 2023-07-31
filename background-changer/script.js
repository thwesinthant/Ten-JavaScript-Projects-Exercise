const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {

    document.body.style.background = randomBg();

    // we must need to put console / call
     randomBg();
})

let randomBg = () => 
`hsl(${Math.floor(Math.random()* 360)} , 100% , 50%)`;
// changes in % values show color more due or bright
// HSL stands for Hue, Saturation, and Lightness. 
// This is similar to how RGB represents a color by combining its Red, Green, and Blue values together, 
// But with HSL the values are much more intuitive အလိုလိုသိတတ်သော.
