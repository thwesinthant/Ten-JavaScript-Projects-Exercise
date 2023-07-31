function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = '💜';
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    // 0 to 100

heart.style.animationDuration = Math.random() * 2 + 3 + "s"
;
    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart , 300);
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range 

//  What does Math random () * 10 mean?

// Math. random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10: Math. random() * 10 To get it to be a whole number, i.e. an integer, apply Math. floor, which rounds down to the nearest whole number: Math

// What does Math random () * 100 do?
// random will not return 1.0 itself, multiplying what Math. random returns with 100 will result in a max value of 99.999.... and when cast to an int turns to 99. Since the randomly generated number is supposed to include 100 you'll have to multiply with 101. Multiplying with 100 will result in a max int value of 99.