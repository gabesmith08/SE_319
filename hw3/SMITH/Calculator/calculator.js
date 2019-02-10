// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

//
var Calc = {

Values : {

  numAfterEquals : new Number(0),

  memory : new Number(0),

  input : "",
  // holds operator for color change
  operator : "+",

},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  buttonAdd : {id: "buttonAdd", type: "button", value: "+", onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  buttonSub : {id: "buttonSub", type: "button", value: "-", onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  buttonMult : {id: "buttonMult", type: "button", value: "*", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttonDot : {id: "buttonDot", type: "button", value: ".", onclick:""},
  buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick:""},
  buttonDiv : {id: "buttonDiv", type: "button", value: "/", onclick:""},
  buttonC : {id: "buttonC", type: "button", value: "C", onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
  buttonMsub : {id: "buttonMsub", type: "button", value: "M-", onclick:""},
  buttonMadd : {id: "buttonMadd", type: "button", value: "M+", onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},
},

Controller: {
  buttonHandler : function(that) {

    if(that.value == "=") {

        Calc.Values.numAfterEquals += eval(Calc.Values.input)
        Calc.Values.input = Calc.Values.numAfterEquals;
        document.getElementById("textRow").value = Calc.Values.numAfterEquals;
        Calc.Values.numAfterEquals = "";
    }
    else if(that.value == "C") {
      Calc.Values.input = "";
      Calc.Values.numAfterEquals = 0;
      document.getElementById("textRow").value = Calc.Values.input;
    }
    else if(that.value == "MC") {
      Calc.Values.memory = 0;
    }
    else if(that.value == "MR") {
      //if memory hasnt been used yet or was reset, return 0
      if(Calc.Values.memory == NaN) {
        Calc.Values.memory = 0;
      }
      Calc.Values.input = Calc.Values.memory;
      document.getElementById("textRow").value = Calc.Values.input;
    }
    else if(that.value == "M-") {
      Calc.Values.memory -= eval(Calc.Values.input);
    }
    else if(that.value == "M+") {
      Calc.Values.memory += eval(Calc.Values.input);
    }
    else {
      Calc.Values.input += that.value;
      document.getElementById("textRow").value = Calc.Values.input;
    }
  }
},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.buttonAdd);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.buttonSub);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.buttonMult);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonDot);
  s += Calc.displayElement(Calc.View.buttonEquals);
  s += Calc.displayElement(Calc.View.buttonDiv);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonC);
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMsub);
  s += Calc.displayElement(Calc.View.buttonMadd);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
  //Sends value of button that was pressed to the Controller
  Calc.View.button7.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button8.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button9.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button4.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button5.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button6.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button1.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button2.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button3.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.button0.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonAdd.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonSub.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonMult.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonDiv.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonEquals.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonDot.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonC.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonMR.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonMsub.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonMadd.onclick = "Calc.Controller.buttonHandler(this)";
  Calc.View.buttonMC.onclick = "Calc.Controller.buttonHandler(this)";
},

} // end of Calc;
