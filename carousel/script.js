const imageContainer = document.querySelector("#image-container");

const img = document.querySelectorAll(" #image-container img");


let idx = 0; // here four fic so idx values are 0,1,2,3

function run() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }
    
    // console.log(img.length - 1);
    imageContainer.style.transform = `translateX(${-idx * 500}px)`;
    // here 500px is width of imagecontainer , so each image move left (-500px)from original position , in this way carousel occurs 
}

setInterval(run, 2000);