let add = document.getElementById("add");
let minus = document.getElementById("minus");
let output = document.getElementById("output");

add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;

  if (result > 0) {
    output.style.color = "green";
  }

  output.innerHTML = result;
});
minus.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    output.style.color = "red";
  }
  output.innerHTML = result;
});
