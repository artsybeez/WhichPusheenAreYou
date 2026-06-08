const questions = [
  {
    id: 1,
    question: "It's a rainy Saturday afternoon. Where are you most likely to be found?",
    answers: [
      { text: "Tucked under a mountain of fluffy blankets, napping or reading a book", type: "classic" },
      { text: "In the kitchen, baking something yummy, like choco chip cookies or cinnamon rolls", type: "pastel" },
      { text: "At my desk, drawing stuff, crafting or gaming", type: "unicorn" },
      { text: "Listening to music while daydreaming about random scenarios", type: "detective" }
    ]
  },
  {
    id: 2,
    question: "Pick your comfort food:",
    answers: [
      { text: "A huge plate of cookies", type: "classic" },
      { text: "Mac and cheese, EXTRA cheesy", type: "pastel" },
      { text: "Rainbow sprinkle donuts", type: "unicorn" },
      { text: "Trail mix (gotta fuel the brain!)", type: "detective" }
    ]
  },
  {
    id: 3,
    question: "How do you handle a problem?",
    answers: [
      { text: "Ignore it and take a nap", type: "classic" },
      { text: "Turn it into a creative project", type: "pastel" },
      { text: "Hope for a magical solution", type: "unicorn" },
      { text: "Investigate and solve it logically", type: "detective" }
    ]
  },
  {
    id: 4,
    question: "What's your aesthetic vibe?",
    answers: [
      { text: "Cozy and comfortable", type: "classic" },
      { text: "Soft, dreamy pastels", type: "pastel" },
      { text: "Sparkly and whimsical", type: "unicorn" },
      { text: "Smart and sophisticated", type: "detective" }
    ]
  },
  {
    id: 5,
    question: "Choose your perfect vacation spot:",
    answers: [
      { text: "A cozy cabin with unlimited snacks", type: "classic" },
      { text: "A charming art studio in Paris", type: "pastel" },
      { text: "A mystical enchanted forest", type: "unicorn" },
      { text: "An escape room adventure center", type: "detective" }
    ]
  },
  {
    id: 6,
    question: "What's your go-to hobby?",
    answers: [
      { text: "Eating and napping (it counts!)", type: "classic" },
      { text: "Crafting, painting, or scrapbooking", type: "pastel" },
      { text: "Collecting crystals and making wishes", type: "unicorn" },
      { text: "Researching random facts and trivia", type: "detective" }
    ]
  },
  {
    id: 7,
    question: "Pick a superpower:",
    answers: [
      { text: "Unlimited snack summoning", type: "classic" },
      { text: "Making everything around you beautiful", type: "pastel" },
      { text: "Flying on a rainbow", type: "unicorn" },
      { text: "Mind reading to solve mysteries", type: "detective" }
    ]
  },
  {
    id: 8,
    question: "What's your favorite time of day?",
    answers: [
      { text: "Anytime there's food involved", type: "classic" },
      { text: "Golden hour for perfect lighting", type: "pastel" },
      { text: "Midnight when magic feels real", type: "unicorn" },
      { text: "Early morning when everything is quiet", type: "detective" }
    ]
  },
  {
    id: 9,
    question: "How do your friends describe you?",
    answers: [
      { text: "Chill and always down for snacks", type: "classic" },
      { text: "Creative and full of inspiration", type: "pastel" },
      { text: "Dreamy and optimistic", type: "unicorn" },
      { text: "Smart and observant", type: "detective" }
    ]
  },
  {
    id: 10,
    question: "What's your perfect gift?",
    answers: [
      { text: "A gift basket full of treats", type: "classic" },
      { text: "A beautiful journal or art supplies", type: "pastel" },
      { text: "Anything sparkly or magical", type: "unicorn" },
      { text: "A challenging puzzle or brain teaser", type: "detective" }
    ]
  }
];

const results = {
  classic: {
    title: "Classic Pusheen",
    description: "You're the original! You love comfort, snacks, and naps. Life is best enjoyed at a relaxed pace with your favorite treats nearby. You're easygoing, lovable, and everyone's favorite cuddle buddy. \u{1F36A}\u{1F634}",
    color: "#FFB6C1"
  },
  pastel: {
    title: "Pastel Pusheen",
    description: "You're creative, artistic, and have an eye for beautiful things! You love aesthetics, soft colors, and making the world a prettier place. Your dreamy personality brings joy to everyone around you. \u{1F3A8}\u2728",
    color: "#E0BBE4"
  },
  unicorn: {
    title: "Pusheenicorn",
    description: "You're magical and whimsical! You believe in the impossible and see wonder everywhere. Your imaginative spirit and optimistic outlook make life an enchanting adventure. Never stop dreaming! \u{1F984}\u{1F308}",
    color: "#B4E7F5"
  },
  detective: {
    title: "Detective Pusheen",
    description: "You're curious, clever, and love solving mysteries! Your sharp mind and attention to detail help you figure things out. You're the friend everyone calls when they need a problem solved. \u{1F50D}\u{1F575}\uFE0F",
    color: "#C7DCA7"
  }
};

let screen = "intro";
let currentQuestion = 0;
let answers = { classic: 0, pastel: 0, unicorn: 0, detective: 0 };
let result = "";

const app = document.getElementById("app");

function render() {
  if (screen === "intro") renderIntro();
  else if (screen === "quiz") renderQuiz();
  else if (screen === "results") renderResults();
}

function renderIntro() {
  app.innerHTML = `
    <div class="card">
      <div class="intro-emoji">🐱</div>
      <h1 class="title">Which Pusheen Are You?</h1>
      <p class="description">
        Discover your inner Pusheen personality! Answer 10 fun questions to find out which adorable version of Pusheen matches your vibe. Are you classic, creative, magical, or mysterious?
      </p>
      <button class="start-button" id="startBtn">Start Quiz</button>
    </div>
  `;
  document.getElementById("startBtn").addEventListener("click", startQuiz);
}

function renderQuiz() {
  const q = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  const answersHtml = q.answers.map((a, i) =>
    `<button class="answer-button" data-type="${a.type}">${a.text}</button>`
  ).join("");

  app.innerHTML = `
    <div class="card">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progressPercent}%"></div>
      </div>
      <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
      <h2 class="question">${q.question}</h2>
      <div class="answers-grid">${answersHtml}</div>
    </div>
  `;

  document.querySelectorAll(".answer-button").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.type));
  });
}

function renderResults() {
  const r = results[result];
  app.innerHTML = `
    <div class="card" style="background-color: ${r.color}; border: none;">
      <div class="result-emoji">✨</div>
      <h1 class="result-title">You are...</h1>
      <h2 class="result-type">${r.title}</h2>
      <div class="image-placeholder">
        <div class="image-placeholder-text">🐱 ${r.title} 🐱</div>
      </div>
      <p class="result-description">${r.description}</p>
      <button class="play-again-button" id="playAgainBtn">Play Again</button>
    </div>
  `;
  document.getElementById("playAgainBtn").addEventListener("click", resetQuiz);
}

function handleAnswer(type) {
  answers[type] = (answers[type] || 0) + 1;

  if (currentQuestion < questions.length - 1) {
    setTimeout(() => {
      currentQuestion++;
      render();
    }, 300);
  } else {
    const maxScore = Math.max(...Object.values(answers));
    result = Object.keys(answers).find(key => answers[key] === maxScore) || "classic";
    setTimeout(() => {
      screen = "results";
      render();
    }, 300);
  }
}

function startQuiz() {
  screen = "quiz";
  render();
}

function resetQuiz() {
  screen = "intro";
  currentQuestion = 0;
  answers = { classic: 0, pastel: 0, unicorn: 0, detective: 0 };
  result = "";
  render();
}

render();
