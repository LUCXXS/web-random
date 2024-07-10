function playGame() {
    let gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = "<p>Juego simple: Adivina el número entre 1 y 10.</p>";

    let randomNum = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("Introduce un número entre 1 y 10:");

    if (parseInt(userGuess) === randomNum) {
        alert("¡Felicidades! Adivinaste el número.");
    } else {
        alert("Lo siento, el número era " + randomNum);
    }
}

function showJoke() {
    let jokes = [
        "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
        "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas."
    ];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerText = randomJoke;
}

function showVideo() {
    let videoArea = document.getElementById('videoArea');
    let videos = [
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/J---aiyznGQ' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/9bZkp7q19f0' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/tVj0ZTS4WF4' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/5_sfnQDr1-o' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    ];
    let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    videoArea.innerHTML = randomVideo;
}
