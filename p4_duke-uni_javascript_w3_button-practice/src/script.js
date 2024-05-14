function but1() {
  alert('Yay! You clicked a button.')
}

function but2() {
  alert('Secretly, this was the correct button.')
}

function myConfirmFunction() {
  let choice = confirm("You pressed a button!");
  let message;
  if (choice == true) {
    message = "You pressed OK!";
  } else {
    message = "Are you sure you want to cancel?";
  }
  alert(message);
}

function changeColor1() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  dd1.className = "style2";
  dd2.className = "style2";
}

function changeColor2() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  dd1.className = "style3";
  dd2.className = "style3";
}

function changeColor3() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  dd1.className = "style1";
  dd2.className = "style1";
}