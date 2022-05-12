var btn = document.getElementById("btn-new");
var new_password = document.getElementById("new-password");
var open_passwords = document.getElementById("open-password");
var copy = document.getElementById("copy");
var copied = document.getElementById("copied");
var saved = document.getElementById("saved");
var overly = document.getElementById("overly");
var btn_add = document.getElementById("btn-add");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  generarPassword();
});

copy.addEventListener("click", function (e) {
  e.preventDefault();
  copiarPassword();
  copied.innerHTML = "Copied!";
  copied.style.transform = "translateY(10px)";
  copied.style.opacity = "1";

  setTimeout(function () {
    copied.innerHTML = "";
    copied.style.transform = "translateY(-150px)";
    copied.style.opacity = "0";
  }, 1500);
});

function copiarPassword() {
  new_password.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
}

function generarPassword() {
  var random_n_1 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_2 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_3 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_4 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_5 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_6 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_7 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_n_9 = Math.floor(Math.random() * (99 - 0)) + 0;
  var random_l_1 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_2 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_3 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_4 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_5 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_6 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_7 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_8 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);
  var random_l_9 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);

  new_password.value = `${
    random_l_1 +
    random_n_1 +
    random_l_2 +
    random_l_3 +
    random_n_2 +
    random_l_4 +
    random_n_3 +
    random_l_5 +
    random_n_5 +
    random_n_6 +
    random_l_6 +
    random_n_7 +
    random_l_7 +
    random_l_6 +
    random_l_1 +
    random_l_8 +
    random_n_4 +
    random_n_9 +
    random_l_9
  }`;
}

generarPassword();

open_passwords.addEventListener("click", function (e) {
  e.preventDefault();
  saved.classList.toggle("active");
  overly.classList.toggle("overly");
});

window.addEventListener("click", function (e) {
  if (e.target == overly && saved.classList.contains("active")) {
    saved.classList.toggle("active");
    overly.classList.toggle("overly");
  }
});

btn_add.addEventListener("click", function (e) {
  e.preventDefault();
  saved.innerHTML += `
  <div>
    <input type="text" value="${new_password.value}">
    <br>
    <input type="text" value="title">
  </div>
  `;
});
