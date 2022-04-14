// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift > 25 || shift < -25) return false;
  

  const string = input.toLowerCase().split("");
  const newString = [];
  
    for( let letter of string){
      if (alphabet.includes(letter)){
        for (let i in alphabet){
          if ( alphabet [i] === letter){
            encode === true ?
              ( j = parseInt(i) + shift) :
            ( j = parseInt(i) - shift);
           if(alphabet [j] === undefined){
             j >= 26 ?
               newString.push(alphabet [ j -26]) : newString.push(alphabet [j + 26]);
           } else{
             newString.push(alphabet [j]);
           }
          }
        }
      } else {
        
        newString.push(letter);
      }
    }
 
       return newString.join("");           
  }
   
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
