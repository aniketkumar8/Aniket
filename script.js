const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "2"],
      answer: "4"
    },
    {
      question: "Which is the largest planet?",
      options: ["Earth", "Venus", "Jupiter", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "2+2/2",
      options: ["5", "4", "3", "2"],
      answer: "3"
    },
    {
      question: "What is the Full Form Of RAM",
      options: ["Random Access Memory", "Read Access Memory ", "Read Only Memory", "Random Only Mimory"],
      answer: "Random Access Memory"
    },
     {
       question: "What is the Full Form Of ROM",
      options: ["Random Access Memory", "Read Access Memory ", "Read Only Memory", "Random Only Mimory"],
      answer:  "Read Only Memory"
    },
     {
       question: "What is the Full Form Of OTP",
      options: ["One Time Password", "Orgination Password", "One To Pass", "Only Time Pass"],
      answer:  "One Time Password"
    },
     {
       question: "What is the Full Form Of USB ",
      options: ["Universal Serial Bus", "Orgination Password", "One To Pass", "Only Time Pass"],
      answer:  "One Time Password"
    },
    
     {
       question: "What is the Full Form Of IP ",
      options: ["Internet Protocol", "India Politics", "Indian Protocol", "Pass Of Indian"],
      answer:  "One Time Password"
    },

     {
       question: "What is the Full Form Of HTML ",
      options: ["Hyper Text Markup Language", "Hyper Text Mark LLine", "Hyper Type Markup Language", "Hyper Text Language"],
      answer:  "One Time Password"
    },


  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultBox = document.getElementById("result-box");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
    document.getElementById("next-btn").style.display = "inline-block";
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#4CAF50";
        btn.style.color = "white";
      } else {
        btn.style.opacity = 0.6;
      }
    });
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-box").style.display = "none";
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question-box").style.display = "block";
    resultBox.classList.add("hidden");
    document.getElementById("next-btn").style.display = "none";
    loadQuestion();
  }
  
  // Start quiz
  loadQuestion();
  