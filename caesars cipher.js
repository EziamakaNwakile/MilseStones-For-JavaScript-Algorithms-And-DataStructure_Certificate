function rot13(str) {
  //Convert str toUpperCase
  //Split str and assign it to an array variable
  //Intialize an array and assign aplhabets A-Z to it
  //Intialize another array and assign the 13th value of the first array to it in accordance with the ROT13 Cipher
  //Intialize an empty array that will hold the encoded string
  //Loop through str and array of alphabets
      //At each index, check if the value of the array string is equal to the value in the array of alphabet
        //if they are equal, assign the value at that index in the ROT13 cipher array into the array that is to hold the encoded string
  //return the encoded string      

  str.toUpperCase();
  let arrString = str.split("");
  let cipher1= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let cipher2= ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  let newCipher = [];

   for (let i = 0; i < arrString.length; i++) {
    for (let j = 0; j < cipher1.length; j++) {
      if(arrString[i] === cipher1[j]){
          newCipher[i] = cipher2[j];
      }
    }
   }

  return newCipher.join(" ");
}

rot13("SERR PBQR PNZC");
