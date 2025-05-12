const startPg = document.getElementById("first-pg");
const quizzPg = document.getElementById("quizz-pg");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  startPg.style.display = "none";
  quizzPg.style.display = "block";
});

const answers = {
  q1: 'q1-3',
  q2: 'q2-1',
  q3: 'q3-3',
  q4: 'q4-2',
  q5: 'q5-2'
};

const modal = document.getElementById("result-modal");
const scoreEl = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");
const form = document.getElementById("apply-form");
const msg = document.getElementById("msg");

document.getElementById("submit-btn").addEventListener("click", () => {
  let score = 0;

  Object.keys(answers).forEach(q => {
    const correctId = answers[q];
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    
    if (selected) {
      const selectedLabel = document.querySelector(`label[for="${selected.id}"]`);
      const correctLabel = document.querySelector(`label[for="${correctId}"]`);

      if (selected.id === correctId) {
        selectedLabel.style.backgroundColor = "#94D7A2";
        selectedLabel.style.color = "#4D5B9E";
        score++;
      } else {
        selectedLabel.style.backgroundColor = "#F8BCBC";
        selectedLabel.style.color = "#293264";
        correctLabel.style.backgroundColor = "#94D7A2";
        correctLabel.style.color = "#4D5B9E";
      }
    }
  });

  let count = 0;
  const interval = setInterval(() => {
    if (count < score) {
      scoreEl.textContent = `정답 수: ${++count} / 5`;
    } else {
      clearInterval(interval);
    }
  }, 300);

  scoreEl.style.display = "block";
  retryBtn.style.display = "block";
  modal.style.display = "flex";

  setTimeout(() => {
    scoreEl.style.display = "none";
    retryBtn.style.display = "none";
    form.style.display = "block";
  }, 5000);
});

retryBtn.addEventListener("click", () => {
  form.style.display = "none";
  scoreEl.style.display = "none";
  retryBtn.style.display = "none";
  
  modal.style.display = "none";
  
  startPg.style.display = "block";
  quizzPg.style.display = "none";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !email || !phone) {
    msg.style.color = "red";
    msg.textContent = "모든 항목을 입력해주세요.";
  } else if (!emailValid) {
    msg.style.color = "red";
    msg.textContent = "유효한 이메일을 입력해주세요.";
  } else {
    msg.style.color = "green";
    msg.textContent = "응모가 완료되었습니다. 감사합니다!";
    msg.style.fontSize = "18px";
  }
});
