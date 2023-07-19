import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


function updateStats() {
  const textArea =document.querySelector('[name="user-input"]');
  const text = textArea.value;

  document.querySelector('[data-testid="word-count"]').textContent = 'Palabras: ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').textContent = 'Caracteres: ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres Sin Espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="number-count"]').textContent = 'Recuento de Numeros: ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').textContent = 'Suma Numeros: ' + analyzer.getNumberSum(text);
  document.querySelector('[data-testid="word-length-average"]').textContent = 'Promedio Longitud: ' + analyzer.getAverageWordLength(text).toFixed(2);
}

function clearInput() {
  const textArea = document.querySelector('[name="user-input"]');
  textArea.value = '';
  updateStats();

}

console.log({updateStats});
function onDOMContentLoaded() {

  document.getElementById("reset-button").addEventListener('click', clearInput);
  document.querySelector('[name="user-input"]').addEventListener('input', updateStats);
  document.querySelector('[name="user-input"]').addEventListener('keyup', updateStats);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);