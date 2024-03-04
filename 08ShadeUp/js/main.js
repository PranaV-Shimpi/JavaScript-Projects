function randompickerbtn() {
  let bgColor = document.querySelector("#randomPicker");
  let randomValue = document.querySelector("#randomValuePara");
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomValue.innerHTML = "#" + randomColor;
  bgColor.style.backgroundColor = "#" + randomColor;
}

function hexFindbtn() {
  let hexColor = document.querySelector("#hexInput").value;
  if (hexColor.length != 7) {
    alert("Only six-digit hex colors are allowed excluding #.");
    window.location.reload();
  }
  let bgColor = document.querySelector("#color-box");
  bgColor.style.backgroundColor = hexColor;
}

function RGBFindbtn() {
  let color = document.querySelector("#rgb-color-box");
  let R = parseInt(document.querySelector("#RInput").value);
  let G = parseInt(document.querySelector("#GInput").value);
  let B = parseInt(document.querySelector("#BInput").value);
  if (R > 255 || G > 255 || B > 255) {
    alert("Enter value less than 256");
    window.location.reload();
  }
  let val = "rgb(" + R + "," + G + "," + B + ")";
  // console.log(val);
  color.style.backgroundColor = val;
}

function RangeSelector() {
  let color = document.querySelector("#range-color-box");

  let r = parseInt(document.querySelector("#RrInput").value);
  let g = parseInt(document.querySelector("#GrInput").value);
  let b = parseInt(document.querySelector("#BrInput").value);

  let val = "rgb(" + r + "," + g + "," + b + ")";

  color.style.backgroundColor = val;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  if (this.length != 6) {
    alert("Only six-digit hex colors are allowed.");
    window.location.reload();
  }

  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

function hexConvbtn() {
  let hexToRgb = document.querySelector("#hexCInp").value;

  ans = hexToRgb.convertToRGB();

  let rgbVal = document.querySelector("#hexCOut");
  rgbVal.innerHTML = "rgb" + "(" + ans + ")";
}

function rgbConvbtn() {
  let r = parseInt(document.querySelector("#RCInput").value);
  let g = parseInt(document.querySelector("#GCInput").value);
  let b = parseInt(document.querySelector("#BCInput").value);
  if (r > 255 || g > 255 || b > 255) {
    alert("Enter Value less than 256");
    window.location.reload();
  }

  val = r.toString(16) + g.toString(16) + b.toString(16);

  let rgbToHex = document.querySelector("#rgbCOut");
  rgbToHex.innerHTML = "#" + val;
}
