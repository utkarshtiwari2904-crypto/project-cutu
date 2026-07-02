const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("beginBtn");

button.style.display = "none";

setTimeout(() => {
    title.textContent = "Every great story has a first page.";
    title.style.opacity = 1;
}, 1000);

setTimeout(() => {
    message.textContent = "Mine began at a dissection table.";
    message.style.opacity = 1;
}, 3500);

setTimeout(() => {
    button.style.display = "inline-block";

    setTimeout(() => {
        button.style.opacity = 1;
    }, 100);

}, 6000);
