var mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

function toggleText(skills, skills2) {
  var text = document.getElementById(skills);
  var text2 = document.getElementById(skills2);
  if (text2.style.display === "none") {
    text.style.display = "none";
    text2.style.display = "block";
  } else {
    text.style.display = "block";
    text2.style.display = "none";
  }
}
