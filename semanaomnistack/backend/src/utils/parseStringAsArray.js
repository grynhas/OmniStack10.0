module.exports = function parserStringAsArray(arrayAsString){
   return arrayAsString.split(',').map(tech => tech.trim());
}