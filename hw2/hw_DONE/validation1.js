function validateFirst() {
    valCheck = true;
    var image1 = getImage(alphaNumCheck(document.forms["contact information"]["first"].value), "first");
    document.getElementById("First").appendChild(image1);
}

function validateLast() {
    valCheck = true;
    var image1 = getImage(alphaNumCheck(document.forms["contact information"]["last"].value), "last");
    document.getElementById("Last").appendChild(image1);
}

function validateGender() {
    valCheck = true;
    var image1 = getImage(selectCheck(document.forms["contact information"]["cardtype"].value), "cardtype");
    document.getElementById("Gender").appendChild(image1);
}

function validateState() {
    valCheck = true;
    var image1 = getImage(selectCheck1(document.forms["contact information"]["cardtype1"].value), "cardtype1");
    document.getElementById("State").appendChild(image1);
}

/*function to check if checkbox was touched or not*/
function selectCheck()
{
 var ddl = document.getElementById("cardtype");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "selectcard")
   {
    return false;
   }
   else {
     return true;
   }
}

/*made a second select check function because it wouldnt work otherwise*/
function selectCheck1()
{
 var ddl = document.getElementById("cardtype1");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "selectcard")
   {
    return false;
   }
   else {
     return true;
   }
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? 'correct.png' : 'wrong.png';
    return image;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
