// let box = document.querySelectorAll('box-1','box-2');
// let back = document.getElementsByClassName('back');
// function flip(){
//     back.style.display = "flex";
//     box.style.display ="none"
// }

// let boxes = document.querySelectorAll('.box-1, .box-2');
// let backs = document.getElementsByClassName('back');

// function flip() {
//     for (let i = 0; i < backs.length; i++) {
//         backs[i].style.display = "flex";
//     }

//     boxes.forEach(box => {
//         box.style.display = "none";
//     });
// }

document.querySelectorAll('.box-1, .box-2').forEach((front, index) => {
    let back = front.nextElementSibling;

    front.addEventListener('mouseenter', () => {
        front.style.display = 'none';
        if (back && back.classList.contains('back')) {
            back.style.display = 'flex';
        }
    });

    back.addEventListener('mouseleave', () => {
        back.style.display = 'none';
        front.style.display = 'flex';
    });
});


function startQuiz(subject, difficulty) {
    fetch(`/api/quiz/${subject}/${difficulty}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch questions");
        return res.json();
      })
      .then(questions => {
        localStorage.setItem('quizData', JSON.stringify({ questions, subject, difficulty }));
        window.location.href = '/quiz.html'; // wherever your quiz page is
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
  }
  

  window.onload = () => {
    const quizInfo = JSON.parse(localStorage.getItem("quizData"));
    const { questions, subject, difficulty } = quizInfo;
  
    const container = document.getElementById("quiz-container");
    container.innerHTML = `<h2>${subject.toUpperCase()} - ${difficulty.toUpperCase()}</h2>`;
  
    questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h4>Q${index + 1}: ${q.question}</h4>
        <ul>
          ${q.options.map((opt, i) => `<li><input type="radio" name="q${index}" value="${opt}">${opt}</li>`).join('')}
        </ul>
      `;
      container.appendChild(div);
    });
  
    // Optional: Add Submit Button
    const btn = document.createElement("button");
    btn.textContent = "Submit Quiz";
    btn.onclick = () => calculateScore(questions);
    container.appendChild(btn);
  };
  
  function calculateScore(questions) {
    let score = 0;
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.answer) score++;
    });
  
    alert(`You scored ${score} out of ${questions.length}`);
  
    const name = prompt("Enter your name to save score:");
  
    fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        subject: JSON.parse(localStorage.getItem("quizData")).subject,
        difficulty: JSON.parse(localStorage.getItem("quizData")).difficulty,
        score
      })
    }).then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => alert("Error saving score"));
  }
  