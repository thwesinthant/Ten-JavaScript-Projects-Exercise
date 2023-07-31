const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

btn.addEventListener('click' , () => {
    createNotification();
});

const createNotification = () => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
   notif.innerHTML = "This challenge is awesome!";

container.appendChild(notif);

setTimeout(() => {
    notif.remove();
}, 3000);
}