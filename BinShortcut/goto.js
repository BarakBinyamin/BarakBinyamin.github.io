function goto(){
window.location.href = "https://clbin.com/" + document.getElementById("code").value;
}

//attaching events to keys
document.onkeydown = function(e) {
  //Enter or space bar
  if (e.which == 13 || e.which == 32 ) {
    goto();
  } 
}