
function activateBox(a, boxId) {
  // Remove the active class from all buttons
  var buttons = document.querySelectorAll('.link');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Remove the active class from all boxes
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('active');
  }

  // Add the active class to the clicked button
  a.classList.add('active');

  // Add the active class to the div element
  var box = document.getElementById(boxId);
  box.classList.add('active');
}

