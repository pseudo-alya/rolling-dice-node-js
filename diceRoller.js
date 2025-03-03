async function rollDice() {
  const diceImage = document.getElementById("diceImage");
  const diceNumberText = document.getElementById("diceNumber");
  const rollButton = document.getElementById("rollButton");

  // Disable the button while rolling
  rollButton.disabled = true;

  // Remove and re-add animation class to restart animation
  diceImage.classList.remove("dice-roll");
  void diceImage.offsetWidth; // Force reflow to restart animation
  setTimeout(() => {
    diceImage.classList.add("dice-roll");
  }, 10);

  // Play dice sound (ensure dice-sound.mp3 exists in your root directory)
  const diceSound = new Audio("dice-sound.mp3");
  diceSound.play();

  try {
    // Fetch random dice number from the server.
    // Using ?sides=6 to mimic the VGuys behavior.
    const response = await fetch("/roll-dice?sides=6");
    const data = await response.json();
    const roll = data.roll;

    // After the animation completes, update the dice image and displayed number
    setTimeout(() => {
      diceImage.src = `dice${roll}.png`;
      diceNumberText.textContent = `You rolled: ${roll}`;
      rollButton.disabled = false;
    }, 1000);
  } catch (error) {
    console.error("Error rolling dice:", error);
    rollButton.disabled = false;
  }
}
