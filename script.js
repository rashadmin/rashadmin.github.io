
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

function downloadFile() {
  // Create an anchor element
  var a = document.createElement("a");
  // Set the href and download attributes for the anchor element
  // You can set the download file name as well here
  a.href = "Ameen Abdulrasheed Resume.pdf";
  a.download = "Abdulrasheed_Ameen_Resume.pdf";
  // Append the anchor element to the document
  document.body.appendChild(a);
  // Click the anchor element to trigger the download
  if (typeof a.download === 'undefined') {
    window.location = href;
  } else {
    a.target = '_blank';
    a.click();
  }
  // Remove the anchor element from the document
  document.body.removeChild(a);
}

