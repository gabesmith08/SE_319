// author: Richard Smith

var rs = require('readline-sync');

var binary1 = rs.question('1st Number: ');
var binary2 = rs.question('2nd Number: ');
var action = rs.question('Enter the action{+,*,/,%,<<,>>,&,|,~}');

//first turn into normal base10
var n1 = parseInt(binary1, 2);
var n2 = parseInt(binary2, 2);
var resBase10 = n1 + action + n2;

if(action == "<<") {
  resBase10 = (n1 << 1);
}
else if(action == ">>") {
  resBase10 = (n1 >> 1);
}
else if(action == "&") {
  resBase10 = n1 & n2;
}
else if(action == "|") {
  resBase10 = (n1 | n2);
}
else if(action == "~") {
  resBase10 = (~ n1);
}
else {
  resBase10 = eval(resBase10);
}

var result = (resBase10 >>> 0).toString(2);
console.log(result);
