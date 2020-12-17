function convertToRoman(num) {
        // Declare and intialize a variable, 'decimalToRomanValue' of type "string" and assign empty to it. This variable will hold the value or letters of the roman numerals
        //Use a while loop to iterate through a set of code that would convert decimal numbers to roman numerals step-by-step while ensuring that certain conditions are met
            //Within the conditionals of the while loop, check:
                // if the value passed with the function when called is a number 
                // ensure that the number is greater than 0 because 0 is not represented in the roman additive system
                //compare num to the decimal values and store the roman version of the decimals in decimalToRomanValue
        // return the variable, 'decimalToRomanValue' that is holding the roman numerals, 
    
    let decimalToRomanValue = '';

    while(typeof num == 'number' && num > 0){

        if(num >= 1000){
                decimalToRomanValue += "M";
                num -= 1000;
        }else if(num >= 900){
                decimalToRomanValue += "CM";
                num -= 900;
        }else if(num >= 500){
                decimalToRomanValue += "D";
                num -= 500;
          }else if(num >= 400){
                decimalToRomanValue += "CD";
                num -= 400;
          }else if(num >= 100){
                decimalToRomanValue += "C";
                num -= 100;
        }else if(num >= 90){
                decimalToRomanValue += "XC";
                num -= 90;
        }else if(num >= 50){
                decimalToRomanValue += "L";
                num -= 50;
        }else if(num >= 40){
                decimalToRomanValue += "XL";
                num -= 40;
        }else if(num >= 10){
                decimalToRomanValue += "X";
                num -= 10;
        }else if(num >= 9){
                decimalToRomanValue += "IX";
                num -= 9;
        }else if(num >= 5){
                decimalToRomanValue += "V";
                num -= 5;
        }else if(num >= 4){
                decimalToRomanValue += "IV";
                num -= 4;
        }else if(num >= 1){
                decimalToRomanValue += "I";
                num --;
        }
}    

 return decimalToRomanValue;
}

convertToRoman(36);