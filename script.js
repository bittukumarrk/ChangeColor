
function changeColor() {
  const hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let hexCode = "#";
  
  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexCode += hexNumbers[randomIndex];
  }
  
  // Update the hex code display
  document.getElementById("hex-code").textContent = hexCode;
  
  // Set the background color
  document.body.style.backgroundColor = hexCode;
}

// Call the function when the button is clicked
document.getElementById("startBtn").addEventListener("click", changeColor);
