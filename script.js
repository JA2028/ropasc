function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const icons = {
      rock: "🪨",
      paper: "📄",
      scissors: "✂️"
    };
  
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById("player-icon").textContent = icons[playerChoice];
    document.getElementById("computer-icon").textContent = icons[computerChoice];
  
    const result = getWinner(playerChoice, computerChoice);
    document.getElementById("result").textContent = result;
  }
  
  function getWinner(player, computer) {
    if (player === computer) {
      return "It's a tie!";
    }
  
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win! 🎉";
    } else {
      return "You lose! 😢";
    }
  }
  
