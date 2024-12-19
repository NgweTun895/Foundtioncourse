let player = {
    name: "သန်းတိုးအောင်",
    health: 100,
    energy: 50,
};
let opponent = {
    name:"မျိုးလှိုင်ဝင်း",
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
            // ကစားသမားက ပြိုင်ဘက်ကို တိုက်ခိုက်
        const damage = Math.floor(Math.random() * 15) + 5;
           //5-20 damag
            opponent.health -= damage;
            player.energy -= 10;
            logMessage(`${player.name} attacks ${opponent.name} for ${damage} damage!`);
        
        if (opponent.health <= 0) {
            opponent.health = 0;
            logMessage(`${opponent.name} is defeated! You win!`);
        }
        break;

        case "REST":
            //Player rests and gains energy
            player.energy = Math.min(50, player.energy + 15);
            logMessage(`${player.name} passes their turn.`);
            break;
    }


    //opponent retaliantes if they are not defeated and action is not Pass
    if (opponent.health >= 0 && action !== "PASS") {
        const retaliation = Math.floor(Math.random() * 10) + 5; //5-15 damage
        player.health -= retaliation;
        logMessage(`${opponent.name} retaliates and deals ${retaliation} damage!`);

        if (player.health <= 0) {
            player.health = 0;
            logMessage(`${player.name} is defeated! You lose.`);
        }
    }
    
    //Update stats in the UI 
    updateStats();a

    // Disable buttons if the game is over
    if (player.health <= 0 || opponent.health <= 0) {
        disableButtons();
    }
}

// Update player and opponent stats in the UI
    function updateStats() {
        document.getElementById("playerhealth").innerText = player.health;
        document.getElementById("playerenergy").innerText = player.energy;
        document.getElementById("enemyhealth").innerText = opponent.health;

        //Disable "Attack" button if player has insufficient energy
        document.getElementById("attackButton").disabled = player.energy < 10;
    }

    // Disable all action buttons
    function disableButtons() {
        document.getElementById("attackButton").disabled = true;
        document.getElementById("restButton").disabled = true;
        document.getElementById("passButton").disabled = true;
    }