let player = {
    name: "သန်းတိုးအောင်",
    health: 100,
    energy: 50,
};

let opponent = {
    name: "မျိုးလှိုင်ဝင်း",
    health: 80,
};

function logMessage(message) {
    const logDiv = document.getElementById("game-log");
    logDiv.innerHTML += `<p>${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function play(action) {
    if (player.health <= 0 || opponent.health <= 0) {
        logMessage("Game over! Refresh the page to play again.");
        disableButtons();
        return;
    }

    switch (action) {
        case "ATTACK":
            const damage = Math.floor(Math.random() * 15) + 5;
            opponent.health -= damage;
            player.energy -= 10;
            logMessage(`${player.name} attacks ${opponent.name} for ${damage} damage!`);

            if (opponent.health <= 0) {
                opponent.health = 0;
                logMessage(`${opponent.name} is defeated! You win!`);
            }
            break;

        case "REST":
            player.energy = Math.min(50, player.energy + 15);
            logMessage(`${player.name} rests and recovers energy.`);
            break;
    }

    if (opponent.health > 0 && action !== "PASS") {
        const retaliation = Math.floor(Math.random() * 10) + 5;
        player.health -= retaliation;
        logMessage(`${opponent.name} retaliates and deals ${retaliation} damage!`);

        if (player.health <= 0) {
            player.health = 0;
            logMessage(`${player.name} is defeated! You lose.`);
        }
    }

    updateStats();

    if (player.health <= 0 || opponent.health <= 0) {
        disableButtons();
    }
}

function updateStats() {
    document.getElementById("playerhealth").innerText = player.health;
    document.getElementById("playerenergy").innerText = player.energy;
    document.getElementById("enemyhealth").innerText = opponent.health;

    document.getElementById("attackButton").disabled = player.energy < 10;
}

function disableButtons() {
    document.getElementById("attackButton").disabled = true;
    document.getElementById("restButton").disabled = true;
    document.getElementById("passButton").disabled = true;
}
