function validateEmail() {
    valCheck = true;
    var image1 = getImage(emailCheck(document.forms["contact information"]["email"].value), "email");
    document.getElementById("Email").appendChild(image1);
}

function validatePhone() {
    valCheck = true;
    var image1 = getImage(phoneCheck(document.forms["contact information"]["phone"].value), "phone");
    document.getElementById("Phone").appendChild(image1);
}

function validateAddress() {
    valCheck = true;
    var image1 = getImage(addressCheck(document.forms["contact information"]["address"].value), "address");
    document.getElementById("Address").appendChild(image1);
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

function phoneCheck(phone) {
      /*regex to verify both ways the phone should be, xxx-xxx-xxxx and xxxxxxxxxx*/
       var phoneNum = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
           if(phone.match(phoneNum)) {
               return true;
           }
           valCheck = false;
           return false;
}

function addressCheck(address) {
      /*regex to verify more than one letter to begin and after the comma it has to be exactly 2 letters*/
       var address1 = /[\w ]+,\w{2}/;
           if(address.match(address1)) {
               return true;
           }
           valCheck = false;
           return false;
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
