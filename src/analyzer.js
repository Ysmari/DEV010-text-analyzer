const analyzer = {  

  getWordCount:(text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textWithoutSpacesAndPunctuation = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    return textWithoutSpacesAndPunctuation.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return totalLength / words.length;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return (text.match(/\d+/g) || []).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g) || [];
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    return sum;
  },
};

const prueba = "hola mundo";
console.log(analyzer.getWordCount(prueba));

export default analyzer;
