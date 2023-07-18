import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


function updateStats() {
  const textArea =document.querySelector('[name="user-input"]');
  const text = textArea.value;

  document.getElementById('word-count').textContent = 'Palabras: ' + analyzer.getWordCount(text);
  document.getElementById('character-count').textContent = 'Caracteres: ' + analyzer.getCharacterCount(text);
  document.getElementById('character-no-spaces-count').textContent = 'Caracteres Sin Espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.getElementById('number-count').textContent = 'Recuento de Numeros: ' + analyzer.getNumberCount(text);
  document.getElementById('number-sum').textContent = 'Suma Numeros: ' + analyzer.getNumberSum(text);
  document.getElementById('word-length-average').textContent = 'Promedio Longitud: ' + analyzer.getAverageWordLength(text).toFixed(2);
}

function clearInput() {
  const textArea = document.querySelector('[name="user-input"]');
  textArea.value = '';
  updateStats();

}

console.log({updateStats});
function onDOMContentLoaded() {

  document.querySelector('[id="reset-button"]').addEventListener('click', clearInput);
  document.querySelector('[name="user-input"]').addEventListener('input', updateStats);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);