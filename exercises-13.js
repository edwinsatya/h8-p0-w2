//Logic Challenge - X dan O

function xo(str) {
    // you can only write your code here!
    var tempJmlX = 0;
    var tempJmlO = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            tempJmlX++;
        } else if (str[i] === 'o') {
            tempJmlO++;
        }
    }
    if (tempJmlX == tempJmlO) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true