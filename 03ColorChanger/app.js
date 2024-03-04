const setBg = () => {
  let bgcolor = document.querySelector("#canvas");
  const randomColor =
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(0, 6);

  bgcolor.innerText = "";
  bgcolor.style.backgroundColor = randomColor;

  let colorCode = document.createElement("span");
  colorCode.innerHTML = randomColor;
  bgcolor.appendChild(colorCode);
};

let getNew = document.querySelector("#button");
getNew.addEventListener("click", setBg);
