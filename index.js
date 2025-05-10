const startPg=document.getElementById("first-pg");
const startBtn=document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
    startPg.style.display = "none";
    quizzPg.style.display = "block";
  });

  const correctAnswers = {
    q1: "3", 
    q2: "1", 
    q3: "3",  
    q4: "2",  
    q5: "2"   
  };

  document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;
    correctAnswers.forEach((ans, idx) => {
      const selected = document.querySelector(`input[name="q${idx + 1}"]:checked`);
      if (selected && selected.value === ans) {
        score++;
      }
    });
    document.getElementById("quizz-pg").style.display = "none";
    document.getElementById("cost").style.display = "block";
    document.getElementById("result-text").textContent = `정답 개수: ${score} / ${correctAnswers.length}`;
  });

  document.getElementById("retry-btn").addEventListener("click", () => {
    document.querySelectorAll("input[type=radio]").forEach(r => r.checked = false);
    document.getElementById("cost").style.display = "none";
    document.getElementById("quizz-pg").style.display = "block";
  });