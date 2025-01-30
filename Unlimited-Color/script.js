   // Generate a random color
   const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null; // Reset the intervalId
}

document.querySelector("#Start").addEventListener('click', startChangingColor);
document.querySelector("#Stop").addEventListener('click', stopChangingColor);
