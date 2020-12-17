function telephoneCheck(str) {
//Using an If else statement, check for:
    //1. Patterns that contains digits and brackets()
        //return true if the str matches the pattern
    //2. Patterns that contains only digits and return it's boolean equivalent
    //3. Return false if the str fails the pattern test

  // for numbers with parenthenses
  if (/^1?(\s|-)?\(\d{3}\)(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str)) {
    return true;
  }
  // for numbers without parenthenses
  else if (/^1?(\s|-)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str)) {
    return true;
  }//for str that doesn't match the pattern
  else {
    return false;
  }
}

telephoneCheck("555-555-5555");
