// const text = document.createElement("text");

const text = 'VS code users are the best!! <33'


let index = 0;

function writeText() {
    document.body.innerText = text.slice(0,index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText , 130);
// 100 milisecond