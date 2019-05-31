// use the "getElementById" & "querySelector" to pick those element.
const rInput = document.getElementById('R-input-dec')
const gInput = document.getElementById('G-input-dec')
const bInput = document.getElementById('B-input-dec')

const rOutput = document.querySelector('.R-output-dec')
const gOutput = document.querySelector('.G-output-dec')
const bOutput = document.querySelector('.B-output-dec')

const convert = document.querySelector('button')

const hexOutput = document.querySelector('.output-hex')
const hexColor = document.querySelector('.color-hex')

//1. Creat a function for Converting an Integer into a Hexadecimal
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

// 2. Creat a function to Build the full  color code
function fullColorHex(r, g, b) {
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return "#" + red + green + blue;
};

// 3. add "addEventListener" at the "convert" button.
convert.addEventListener('click', event => {
  event.preventDefault()
  if ((Number(rInput.value) >= 0 && (Number(rInput.value)) <= 255) && (Number(gInput.value) >= 0 && (Number(gInput.value)) <= 255) && (Number(bInput.value) >= 0 && (Number(bInput.value)) <= 255) && (isNaN(rInput.value) === false && isNaN(gInput.value) === false && isNaN(bInput.value) === false) && (rInput.value.length > 0 && gInput.value.length > 0 && bInput.value.length > 0)) {
    let color = fullColorHex(Number(rInput.value), Number(gInput.value), Number(bInput.value))
    hexOutput.textContent = color
    hexColor.style.backgroundColor = color
    rOutput.style.backgroundColor = `#${rgbToHex(Number(rInput.value))}0000`
    gOutput.style.backgroundColor = `#00${rgbToHex(Number(gInput.value))}00`
    bOutput.style.backgroundColor = `#0000${rgbToHex(Number(bInput.value))}`
  } else {
    alert('請輸入0至255的數字')
  }

})