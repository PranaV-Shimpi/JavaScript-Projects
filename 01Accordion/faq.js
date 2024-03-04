const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

function createFaq(question, answer) {
  let faqContainer = document.createElement("div");
  faqContainer.className = "faq";

  let faqQuestion = document.createElement("h3");
  faqQuestion.textContent = question;
  faqQuestion.className = "faq_header";

  let showFaqBtn = document.createElement("button");
  showFaqBtn.className = "show_btn";
  showFaqBtn.textContent = "+";
  faqQuestion.appendChild(showFaqBtn);

  faqContainer.appendChild(faqQuestion);

  let faqAnswer = document.createElement("p");
  faqAnswer.textContent = answer;
  faqAnswer.className = "hidden";
  faqContainer.appendChild(faqAnswer);

  accordianBody.appendChild(faqContainer);
}

function showFaq() {}

function btnStatusUpdate() {}

for (let i = 0; i < faqData.length; i++) {
  createFaq(faqData[i].question, faqData[i].answer);
}

const showFaqBtn = document.querySelectorAll(".show_btn");

for (let i = 0; i < showFaqBtn.length; i++) {
  const btn = showFaqBtn[i];
  btn.addEventListener("click", function () {
    let ans = document.querySelectorAll(".faq p");
    ans[i].classList.toggle("hidden");

    if (ans[i].classList.contains("hidden")) {
      btn.textContent = "+";
    } else {
      btn.textContent = "-";
    }
  });
}
