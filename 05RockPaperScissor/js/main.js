window.onload = function () {
  var userScore = 0;
  var compScore = 0;

  const userName = document.querySelector(".userscore");
  let name = prompt("Enter your Name: ", "Pranav");
  userName.innerHTML =  name;

  let userScoreVal = document.querySelector("#userScoreVal");
  let compScoreVal = document.querySelector("#compScoreVal");

  let resultUserStat = document.querySelector("#result-user-stat");
  let resultCompStat = document.querySelector("#result-comp-stat");
  let resultFinalStat = document.querySelector("#result-final-stat");

  let r = document.querySelector("#r");
  let p = document.querySelector("#p");
  let s = document.querySelector("#s");

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    var randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  };

  const win = (user, comp) => {
    userScore++;
    userScoreVal.innerHTML = userScore;
    compScoreVal.innerHTML = compScore;

    const userSpan = document.createElement("span");
    userSpan.innerHTML = " " + user;
    resultUserStat.appendChild(userSpan);

    const compSpan = document.createElement("span");
    compSpan.innerHTML = " " + comp;
    resultCompStat.appendChild(compSpan);

    const resultSpan = document.createElement("span");
    resultSpan.innerHTML = " " + name;
    resultFinalStat.appendChild(resultSpan);

    setTimeout(() => {
      userSpan.remove();
      compSpan.remove();
      resultSpan.remove();
    }, 1500);
  };

  const loose = (user, comp) => {
    compScore++;
    userScoreVal.innerHTML = userScore;
    compScoreVal.innerHTML = compScore;

    const userSpan = document.createElement("span");
    userSpan.innerHTML = " " + user;
    resultUserStat.appendChild(userSpan);

    const compSpan = document.createElement("span");
    compSpan.innerHTML = " " + comp;
    resultCompStat.appendChild(compSpan);

    const resultSpan = document.createElement("span");
    resultSpan.innerHTML = " " + "Computer";
    resultFinalStat.appendChild(resultSpan);

    setTimeout(() => {
      userSpan.remove();
      compSpan.remove();
      resultSpan.remove();
    }, 1500);
  };

  const draw = (user, comp) => {
    userScoreVal.innerHTML = userScore;
    compScoreVal.innerHTML = compScore;

    const userSpan = document.createElement("span");
    userSpan.innerHTML = " " + user;
    resultUserStat.appendChild(userSpan);

    const compSpan = document.createElement("span");
    compSpan.innerHTML = " " + comp;
    resultCompStat.appendChild(compSpan);

    const resultSpan = document.createElement("span");
    resultSpan.innerHTML = " Draw...";
    resultFinalStat.appendChild(resultSpan);

    setTimeout(() => {
      userSpan.remove();
      compSpan.remove();
      resultSpan.remove();
    }, 1500);
  };

  const game = (userChoice) => {
    let compChoice = getComputerChoice();

    switch (userChoice + " " + compChoice) {
      case "rock scissors":
      case "paper rock":
      case "scissors paper":
        win(userChoice, compChoice);
        break;

      case "rock paper":
      case "paper scissors":
      case "scissors rock":
        loose(userChoice, compChoice);
        break;

      case "rock rock":
      case "paper paper":
      case "scissors scissors":
        draw(userChoice, compChoice);
        break;
    }
  };

  function main() {
    r.addEventListener("click", () => {
      game("rock");
    });

    p.addEventListener("click", () => {
      game("paper");
    });

    s.addEventListener("click", () => {
      game("scissors");
    });
  }

  main();
};
