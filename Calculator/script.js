function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equals() {
  var txt = document.form.textview.value;
  if (txt) {
    document.form.textview.value = eval(txt);
  } else {
    document.form.textview.value = "ERROR";
  }
}

function clean() {
  document.querySelector(".textview").value = "";
}

function back() {
  var txt = document.querySelector(".textview").value;
  document.querySelector(".textview").value = txt.substring(0, txt.length - 1);
}
