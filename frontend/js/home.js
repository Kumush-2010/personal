

const hour = new Date().getHours();

if (hour >= 6 && hour < 18) {
    // KUN
    document.body.style.backgroundImage = "url('../img/day.png')";
    document.getElementById("stars").style.display = "none";
} else {
    // TUN
    document.body.style.backgroundImage = "url('../img/night.png')";
    document.getElementById("stars").style.display = "block";
}

