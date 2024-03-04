// const container;
// const error;
function getAge() {
  let userinput = document.querySelector("#dob").value;
  calcAge(userinput);
}

function calcAge(userinput) {
  let dob = new Date(userinput);

  //extract and collect only date from date-time string
  let mdate = userinput.toString();
  let dobYear = parseInt(mdate.substring(0, 4), 10);
  let dobMonth = parseInt(mdate.substring(5, 7), 10);
  let dobDate = parseInt(mdate.substring(8, 10), 10);

  //get the current date from system
  let today = new Date();
  //date string after broking
  let birthday = new Date(dobYear, dobMonth - 1, dobDate);

  //calculate the difference of dates
  let diffInMillisecond = today.valueOf() - birthday.valueOf();

  //convert the difference in milliseconds and store in day and year letiable
  let year_age = Math.floor(diffInMillisecond / 31536000000);
  let day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

  let month_age = Math.floor(day_age / 30);
  day_age = day_age % 30;

  let tMnt = month_age + year_age * 12;
  let tDays = tMnt * 30 + day_age;

  displayAge(dob, today, year_age, month_age, day_age);
}

function displayAge(dob, today, year_age, month_age, day_age) {
  if (dob > today) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".age").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".age").style.display = "block";
    document.querySelector("#years").innerHTML = year_age;
    document.querySelector("#months").innerHTML = month_age;
    document.querySelector("#days").innerHTML = day_age;
  }
}

window.addEventListener("input", getAge);
