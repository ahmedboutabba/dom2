// Function to generate a random hexadecimal color code
function getRandomColor() {
    // Generate a random hexadecimal number between 0 and 16777215
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Function to change the background color of the box
  function changeColor() {
    const colorBox = document.getElementById('colorBox');
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  }
  
  // Add event listener to the button
  document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', changeColor);
  });