const QUESTIONS = [
  {
    q: "Pick your absolute favorite snack or treat!",
    a: [
      "A whole box of chocolate chip cookies",
      "A giant colorful cupcake with extra frosting",
      "A secret stash of hidden candies",
      "Honey-sweetened herbal tea and edible flowers",
      "Freshly baked warm butter biscuits",
      "A single snack I take an hour to eat",
      "Anything I can stuff into my cheeks right now",
      "Tiny perfectly round crackers",
      "Crunchy treats I found while exploring",
      "Sparkly star-shaped candies that taste like magic",
      "A yummy bone-shaped biscuit from a pouch"
    ]
  },
  {
    q: "Choose your ideal weekend activity:",
    a: [
      "Taking a 5-hour nap on a sunny rug spot",
      "Bouncing around and playing dress-up",
      "Planning a harmless prank or building a fort",
      "Sitting in a garden watching butterflies",
      "Helping bake something delicious in the kitchen",
      "Moving very slowly to a new comfy spot",
      "Hosting a dinner party with lots of food",
      "Practicing poses in front of a mirror",
      "Checking behind furniture for mysteries",
      "Flying through clouds chasing shooting stars",
      "Going to the park to run and play fetch"
    ]
  },
  {
    q: "What is your aesthetic or vibe?",
    a: [
      "Comfy cozy and perfectly round",
      "Fluffy curly and full of energy",
      "Small fuzzy and slightly chaotic",
      "Bright sunny yellow and cheerful",
      "Warm sweet and comforting like a bakery",
      "Chill relaxed and completely unbothered",
      "Chubby-cheeked cute and food-loving",
      "Tiny elegant and dreaming big",
      "Sleek fast and endlessly curious",
      "Pastel sparkly and magical",
      "Happy loyal and full of tail-wags"
    ]
  },
  {
    q: "If you found a cardboard box, what would you do?",
    a: [
      "Sit in it immediately. If I fits I sits",
      "Jump in and out making happy noises",
      "Hide inside and surprise passersby",
      "Paint flowers on it to make it pretty",
      "Store my baking supplies inside",
      "Crawl in slowly for a dark nap cave",
      "Fill it up with snacks for later",
      "Stand on top to look tall and majestic",
      "Dig a tunnel underneath or through it",
      "Turn it into a magical rainbow castle",
      "Chew the corners and wait for playtime"
    ]
  },
  {
    q: "Pick a magical superpower you'd love to have:",
    a: [
      "Summon snacks just by thinking about them",
      "Infinite energy to never stop playing",
      "Shape-shift into a giant fierce wolf",
      "Make plants bloom instantly with a touch",
      "A magical oven that bakes with no mess",
      "Stop time so my naps last forever",
      "A pocket dimension to store endless food",
      "Grow into a giant legendary creature",
      "Invisibility for sneaking around",
      "Create rainbows and fly through space",
      "Talk to animals and make endless friends"
    ]
  },
  {
    q: "How do you react when your alarm goes off?",
    a: [
      "Snooze five times and hide under blankets",
      "Wake up instantly and do a morning dance",
      "Roll out and start looking for adventure",
      "Smile at the sun and stretch happily",
      "Get up early to make breakfast for everyone",
      "What alarm? I slept right through it",
      "Eyes open reach straight for a bedside snack",
      "Sit up perfectly straight ready to conquer",
      "Slip out quietly to see what others are doing",
      "Float up surrounded by magical morning glow",
      "Jump up wag my tail and greet my person"
    ]
  },
  {
    q: "What's your favorite type of weather?",
    a: [
      "Rain outside — perfect excuse to stay in bed",
      "A gentle cool breeze that fluffs my hair",
      "A cloudy mysterious day for exploring",
      "Bright warm unobstructed sunshine",
      "Cozy snowy day with warm cookie smells",
      "Warm humid day for lounging on a hammock",
      "Mild pleasant day for a picnic in the park",
      "A clear blue sky you can see for miles",
      "A misty morning full of hidden paths",
      "A magical night under a starry full moon",
      "Any weather as long as I can play outside"
    ]
  },
  {
    q: "Choose an animal you feel connected to:",
    a: [
      "A happy round panda eating bamboo",
      "A bouncy fluffy bunny rabbit",
      "A wild howling wolf or tiny fox",
      "A busy cheerful little bumblebee",
      "A sweet helpful koala bear",
      "A slow-moving relaxed tree sloth",
      "A cute hamster saving snacks for later",
      "A proud beautiful blue bird",
      "A quick clever ferret or weasel",
      "A majestic mythical pegasus",
      "A loyal happy puppy dog"
    ]
  },
  {
    q: "What kind of gift do you like to give friends?",
    a: [
      "A share of my favorite snack (just a bite)",
      "A handmade drawing with lots of glitter",
      "A cool rock or shiny button I found",
      "A beautiful bouquet of fresh flowers",
      "A box of homemade cupcakes with a ribbon",
      "A cozy soft blanket for napping",
      "A recipe book or cool cooking gadget",
      "An inspiring speech or fancy accessory",
      "A puzzle or mystery game to solve together",
      "A sparkly crystal that brings good luck",
      "A big warm hug and my full attention"
    ]
  },
  {
    q: "Where is your favorite spot in the house?",
    a: [
      "On top of the laptop while someone works",
      "Middle of the floor surrounded by toys",
      "Tucked in a dark corner or blanket fort",
      "By the big window where the sun shines",
      "In the kitchen near the warm oven",
      "Deep in the softest fluffiest couch cushions",
      "Near the pantry or dining table",
      "High on a chair back to overlook the room",
      "Under furniture exploring dusty corners",
      "On a shelf closer to the stars",
      "By the front door waiting for friends"
    ]
  },
  {
    q: "What makes you the happiest?",
    a: [
      "Eating a delicious meal then falling asleep",
      "Making people laugh and learning new things",
      "Growing bigger feeling strong and independent",
      "Spreading positivity and seeing smiles",
      "Knowing everyone is well-fed and happy",
      "Absolute peace quiet and slow moments",
      "Trying a new recipe that tastes amazing",
      "Achieving a goal and showing my hard work",
      "Finding a hidden secret or solving a puzzle",
      "Anything with magic sparkles and daydreaming",
      "Running around with my favorite person"
    ]
  },
  {
    q: "Pick a cute sound effect that describes you:",
    a: [
      "Munch munch... snoreee",
      "Yay! Boing!",
      "Awoo! Rawr!",
      "Giggle... Chirp!",
      "Tada! Ding!",
      "Yawnnnn... Zzz...",
      "Nom nom... Squeak!",
      "Tweet! Ta-da!",
      "Scritch-scratch... patter-patter",
      "Sparkle... whoosh!",
      "Pant-pant... woof!"
    ]
  }
];

const CHARACTERS = [
  { key: "A", name: "Pusheen",   img: "pics/pusheen.png",   emoji: "🐱",
    tag: "The Cozy Queen",        color: "#D48A8A",
    icon: `<svg viewBox="0 0 36 36"><ellipse cx="18" cy="24" rx="10" ry="8" fill="#D48A8A" opacity=".3"/><circle cx="10" cy="14" r="4" fill="#D48A8A" opacity=".7"/><circle cx="26" cy="14" r="4" fill="#D48A8A" opacity=".7"/><path d="M12 20 Q18 16 24 20" stroke="#D48A8A" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/><circle cx="10" cy="14" r="1.5" fill="#fff"/><circle cx="26" cy="14" r="1.5" fill="#fff"/></svg>`,
    desc: "The original! Lazy, lovable, always down for snacks. You find joy in life's simple pleasures — a warm nap, a full belly, and the people you love." },
  { key: "B", name: "Stormy",    img: "pics/stormy.gif",    emoji: "🐑",
    tag: "The Fluffy Ball of Energy", color: "#81C4E8",
    icon: `<svg viewBox="0 0 36 36"><path d="M8 24 Q8 14 18 14 Q28 14 28 24 Q30 30 18 30 Q6 30 8 24Z" fill="#81C4E8" opacity=".5"/><circle cx="12" cy="18" r="3" fill="#81C4E8" opacity=".4"/><circle cx="24" cy="18" r="3" fill="#81C4E8" opacity=".4"/><path d="M14 22 Q18 26 22 22" stroke="#81C4E8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>`,
    desc: "Bouncy, fluffy, bursting with energy! You admire the greats and dream big. Your enthusiasm is contagious." },
  { key: "C", name: "Pip",       img: "pics/pip.gif",       emoji: "🐺",
    tag: "The Mischievous Little Brother", color: "#E8A87C",
    icon: `<svg viewBox="0 0 36 36"><path d="M6 22 L12 10 L18 16 L24 10 L30 22 Q18 30 6 22Z" fill="#E8A87C" opacity=".5"/><circle cx="12" cy="17" r="1.5" fill="#fff" opacity=".7"/><circle cx="24" cy="17" r="1.5" fill="#fff" opacity=".7"/></svg>`,
    desc: "Small but fierce! Curious, mischievous, always plotting adventures. You dream of being mighty." },
  { key: "D", name: "Sunflower", img: "pics/sunflower.gif", emoji: "🌻",
    tag: "The Ray of Sunshine",   color: "#F0D060",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="5" fill="#F0D060"/><line x1="18" y1="6" x2="18" y2="10" stroke="#F0D060" stroke-width="2.5" stroke-linecap="round"/><line x1="18" y1="26" x2="18" y2="30" stroke="#F0D060" stroke-width="2.5" stroke-linecap="round"/><line x1="6" y1="18" x2="10" y2="18" stroke="#F0D060" stroke-width="2.5" stroke-linecap="round"/><line x1="26" y1="18" x2="30" y2="18" stroke="#F0D060" stroke-width="2.5" stroke-linecap="round"/><line x1="9" y1="9" x2="12" y2="12" stroke="#F0D060" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="24" x2="27" y2="27" stroke="#F0D060" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="27" x2="12" y2="24" stroke="#F0D060" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="12" x2="27" y2="9" stroke="#F0D060" stroke-width="2" stroke-linecap="round"/></svg>`,
    desc: "Cheerful, bright, always smiling! You spread warmth and positivity wherever you go." },
  { key: "E", name: "Biscuit",   img: "pics/biscuit.gif",   emoji: "🍪",
    tag: "The Sweet Helper",      color: "#C9A06E",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="11" fill="#C9A06E" opacity=".5"/><circle cx="14" cy="14" r="2.5" fill="#fff" opacity=".4"/><circle cx="22" cy="16" r="2" fill="#fff" opacity=".3"/><circle cx="16" cy="22" r="1.8" fill="#fff" opacity=".35"/><circle cx="21" cy="21" r="1.5" fill="#fff" opacity=".25"/></svg>`,
    desc: "Soft, sweet, always ready to lend a paw! You love making sure everyone feels cared for." },
  { key: "F", name: "Sloth",     img: "pics/sloth.gif",     emoji: "🦥",
    tag: "The Chillest of Them All", color: "#8FBC8F",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="20" r="10" fill="#8FBC8F" opacity=".5"/><circle cx="11" cy="17" r="3" fill="#8FBC8F" opacity=".5"/><circle cx="25" cy="17" r="3" fill="#8FBC8F" opacity=".5"/><path d="M13 23 Q18 26 23 23" stroke="#8FBC8F" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>`,
    desc: "Slow, calm, completely unbothered! You take life at your own peaceful pace." },
  { key: "G", name: "Cheek",     img: "pics/cheek.gif",     emoji: "🐹",
    tag: "The Food Hoarder",      color: "#E8B88A",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="20" r="10" fill="#E8B88A" opacity=".5"/><circle cx="10" cy="17" r="3" fill="#E8B88A" opacity=".6"/><circle cx="26" cy="17" r="3" fill="#E8B88A" opacity=".6"/><circle cx="13" cy="24" r="4" fill="#E8B88A" opacity=".35"/><circle cx="23" cy="24" r="4" fill="#E8B88A" opacity=".35"/></svg>`,
    desc: "You love food, cooking, and keeping your cheeks full! Your kitchen skills are legendary." },
  { key: "H", name: "Bo",        img: "pics/bo.gif",        emoji: "🐦",
    tag: "The Confident Dreamer", color: "#7EB8DA",
    icon: `<svg viewBox="0 0 36 36"><path d="M8 22 Q18 6 28 22 Q18 28 8 22Z" fill="#7EB8DA" opacity=".5"/><circle cx="16" cy="17" r="1.5" fill="#fff" opacity=".6"/><path d="M20 24 L24 27" stroke="#7EB8DA" stroke-width="2" stroke-linecap="round" opacity=".6"/></svg>`,
    desc: "Small but with BIG dreams! You carry yourself with elegance and confidence." },
  { key: "I", name: "Tommy",     img: "pics/tommy.gif",     emoji: "🦡",
    tag: "The Curious Explorer",  color: "#B08CB8",
    icon: `<svg viewBox="0 0 36 36"><ellipse cx="18" cy="20" rx="9" ry="6" fill="#B08CB8" opacity=".5"/><circle cx="12" cy="14" r="3.5" fill="#B08CB8" opacity=".6"/><circle cx="24" cy="14" r="3.5" fill="#B08CB8" opacity=".6"/><circle cx="12" cy="14" r="1.5" fill="#fff" opacity=".5"/><circle cx="24" cy="14" r="1.5" fill="#fff" opacity=".5"/></svg>`,
    desc: "Playful, sneaky, endlessly curious! Your adventurous spirit makes every day exciting." },
  { key: "J", name: "Pusheenicorn", img: "pics/pusheenicorn.gif", emoji: "🦄",
    tag: "The Magical Dreamer",   color: "#D8A0D8",
    icon: `<svg viewBox="0 0 36 36"><path d="M18 6 L19 14 L26 14 L21 18 L23 26 L18 21 L13 26 L15 18 L10 14 L17 14 Z" fill="#D8A0D8" opacity=".7"/></svg>`,
    desc: "Magical, whimsical, full of wonder! You believe in rainbows, stardust, and dreams." },
  { key: "K", name: "Pup",       img: "pics/pupsheen.gif",  emoji: "🐶",
    tag: "The Loyal Playmate",    color: "#D4A06E",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="20" r="9" fill="#D4A06E" opacity=".5"/><circle cx="10" cy="15" r="4" fill="#D4A06E" opacity=".4"/><circle cx="26" cy="15" r="4" fill="#D4A06E" opacity=".4"/><circle cx="10" cy="15" r="1.5" fill="#fff" opacity=".5"/><circle cx="26" cy="15" r="1.5" fill="#fff" opacity=".5"/><ellipse cx="18" cy="26" rx="3" ry="1.5" fill="#D4A06E" opacity=".4"/></svg>`,
    desc: "Playful, loyal, full of joy! You love your friends with everything you've got." }
];

const LABELS = ["A","B","C","D","E","F","G","H","I","J","K"];
const SCORE_INIT = { A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0, I:0, J:0, K:0 };

let screen = "intro";
let currentQuestion = 0;
let scores = { ...SCORE_INIT };
let resultKey = "A";

const app = document.getElementById("app");

// ===== AUDIO =====
let audioCtx = null;
let bgmPlaying = false;
let bgmNodes = [];

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

// ---- File-based audio loader ----
const audioCache = {};

function loadAudio(src) {
  if (audioCache[src]) return Promise.resolve(audioCache[src]);
  return new Promise(resolve => {
    const a = new Audio();
    a.oncanplaythrough = () => { audioCache[src] = a; resolve(a); };
    a.onerror = () => resolve(null);
    a.src = src;
    a.load();
  });
}

// ---- SFX: Pop ----
async function playPop() {
  initAudio();
  const file = await loadAudio("audio/sfx-pop.mp3");
  if (file) {
    file.currentTime = 0;
    file.volume = 0.5;
    file.play().catch(() => {});
    return;
  }
  // fallback
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.connect(g); g.connect(audioCtx.destination);
  o.type = "sine";
  o.frequency.setValueAtTime(600, t);
  o.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
  o.frequency.exponentialRampToValueAtTime(800, t + 0.15);
  g.gain.setValueAtTime(0.25, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  o.start(t); o.stop(t + 0.2);
}

// ---- SFX: Fanfare ----
async function playFanfare() {
  initAudio();
  const file = await loadAudio("audio/sfx-fanfare.mp3");
  if (file) {
    file.currentTime = 0;
    file.volume = 0.6;
    file.play().catch(() => {});
    return;
  }
  // fallback
  const t = audioCtx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, i) => {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.type = "sine";
    o.frequency.setValueAtTime(freq, t + i * 0.15);
    g.gain.setValueAtTime(0.2, t + i * 0.15);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.15 + 0.4);
    o.start(t + i * 0.15); o.stop(t + i * 0.15 + 0.4);
  });
}



let bgmAudio = null;

// ---- BGM ----
function playBgm() {
  if (bgmAudio) return;
  bgmAudio = new Audio("audio/bg-music.mp3");
  bgmAudio.loop = true;
  bgmAudio.volume = 1.0;
  bgmAudio.play().catch(() => {});
}

function stopBgm() {
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
    bgmAudio = null;
  }
}

// ===== CONFETTI =====
const CONFETTI_COLORS = ["#ff6b9d","#c4a1ff","#ffd93d","#7ed6b5","#ff9ff3","#54a0ff","#5f27cd","#ff9f43","#00d2d3","#f368e0"];

function spawnConfetti() {
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.background = color;
    piece.style.left = Math.random() * 100 + "%";
    piece.style.width = (6 + Math.random() * 8) + "px";
    piece.style.height = (6 + Math.random() * 8) + "px";
    piece.style.animationDuration = (2 + Math.random() * 3) + "s";
    piece.style.animationDelay = Math.random() * 2 + "s";
    piece.style.opacity = 0.8 + Math.random() * 0.2;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 6000);
}

// ===== RENDER =====
function svgToUri(svg) {
  return "data:image/svg+xml," + encodeURIComponent(
    svg.replace(/\s{2,}/g, " ").replace(/>\s+</g, "><")
  );
}

function render() {
  if (screen === "intro") renderIntro();
  else if (screen === "quiz") renderQuiz();
  else if (screen === "results") renderResults();
}

function renderIntro() {
  app.innerHTML = `
    <div class="card">
      <div class="corner-bow corner-bow-tl">🎀</div>
      <div class="corner-bow corner-bow-tr">🎀</div>
      <div class="corner-bow corner-bow-bl">🎀</div>
      <div class="corner-bow corner-bow-br">🎀</div>
      <div class="intro-icon">
        <img src="pics/pusheen.png" alt="Pusheen Icon" class="intro-svg" />
      </div>
      <h1 class="title">Which Pusheen<br>Are You?</h1>
      <p class="title-sub">✦ a cute personality quiz ✦</p>
      <p class="description">
        answer these 12 questions to discover<br>
        which charming character matches your soul.
      </p>
      <button class="start-button" id="startBtn">Begin the quiz</button>
    </div>
  `;
  document.getElementById("startBtn").addEventListener("click", startQuiz);
}

function renderQuiz() {
  const q = QUESTIONS[currentQuestion];
  const pct = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const answersHtml = q.a.map((text, i) => {
    const ch = CHARACTERS[i];
    return `<button class="answer-button" data-key="${ch.key}">
      <span class="answer-key">${ch.key}</span>
      <span class="answer-text">${text}</span>
    </button>`;
  }).join("");

  app.innerHTML = `
    <div class="card">
      <div class="corner-bow corner-bow-tl">🎀</div>
      <div class="corner-bow corner-bow-tr">🎀</div>
      <div class="corner-bow corner-bow-bl">🎀</div>
      <div class="corner-bow corner-bow-br">🎀</div>
      <div class="quiz-header">
        <div class="progress-wrap">
          <span class="progress-label">${currentQuestion+1}/${QUESTIONS.length}</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${pct}%"></div>
          </div>
        </div>
        <p class="question-number">Question ${currentQuestion+1}</p>
        <p class="question-text">${q.q}</p>
        <div class="divider">✦ ✦ ✦</div>
      </div>
      <div class="quiz-scroll">
        <div class="answers-grid">${answersHtml}</div>
      </div>
    </div>
  `;

  document.querySelectorAll(".answer-button").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.key));
  });
}

function renderResults() {
  const ch = CHARACTERS.find(c => c.key === resultKey);
  const hasImg = ch.img && ch.img.trim() !== "";

  const imgHtml = hasImg
    ? `<img src="${ch.img}" alt="${ch.name}" class="result-char-img" />`
    : `<div class="result-char-fallback">${ch.emoji}</div>`;

  app.innerHTML = `
    <div class="card" style="background:linear-gradient(160deg, ${ch.color}18, #fdf8f3);">
      <div class="corner-bow corner-bow-tl">🎀</div>
      <div class="corner-bow corner-bow-tr">🎀</div>
      <div class="corner-bow corner-bow-bl">🎀</div>
      <div class="corner-bow corner-bow-br">🎀</div>
      <div class="result-char">${imgHtml}</div>
      <p class="result-label">You are...</p>
      <h2 class="result-name">${ch.name}</h2>
      <p class="result-tag">— ${ch.tag} —</p>
      <div class="result-scroll">
        <p class="result-desc">${ch.desc}</p>
      </div>
      <button class="play-again-button" id="playAgainBtn">Play Again</button>
    </div>
  `;

  playFanfare();
  spawnConfetti();
  document.getElementById("playAgainBtn").addEventListener("click", resetQuiz);
}

function handleAnswer(key) {
  playPop();
  scores[key] = (scores[key] || 0) + 1;

  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach(btn => {
    btn.style.pointerEvents = "none";
    if (btn.dataset.key === key) {
      const ch = CHARACTERS.find(c => c.key === key);
      btn.style.borderColor = ch ? ch.color : "#c4a1ff";
      btn.style.background = ch ? ch.color + "25" : "rgba(196, 161, 255, 0.15)";
    }
  });

  if (currentQuestion < QUESTIONS.length - 1) {
    setTimeout(() => { currentQuestion++; render(); }, 350);
  } else {
    setTimeout(() => {
      const max = Math.max(...Object.values(scores));
      const top = Object.keys(scores).filter(k => scores[k] === max);
      resultKey = top[Math.floor(Math.random() * top.length)];
      screen = "results";
      render();
    }, 450);
  }
}

function startQuiz() {
  screen = "quiz";
  currentQuestion = 0;
  scores = { ...SCORE_INIT };
  playBgm();
  render();
}

function resetQuiz() {
  screen = "intro";
  currentQuestion = 0;
  scores = { ...SCORE_INIT };
  resultKey = "A";
  stopBgm();
  render();
}

render();
