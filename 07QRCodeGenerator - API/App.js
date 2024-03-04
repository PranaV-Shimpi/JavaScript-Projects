const main = document.querySelector(".main");
qrText = main.querySelector("input");
qrGenerateBtn = main.querySelector("button");
qrImg = main.querySelector("img");
let preValue;

qrGenerateBtn.addEventListener("click", () => {
  let qrValue = qrText.value.trim();
  console.log(qrValue);
  if (!qrValue) {
    alert("Enter Data to generate QR code");
    return;
  }
  if (preValue == qrValue) {
    return;
  }
  preValue = qrValue;
  qrGenerateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    qrImg.style.setProperty("display", "block");
    qrGenerateBtn.innerText = "Generate QR Code";
  });
});

qrText.addEventListener("keyup", () => {
  if (!qrText.value.trim()) {
    qrImg.style.setProperty("display", "none");
    preValue = "";
  }
});
