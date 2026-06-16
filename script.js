const QUESTIONS = [
  {
    q: "Pick your absolute favorite snack or treat!",
    a: [
      "A whole box of chocolate chip cookies",
      "A giant colorful cupcake with extra frosting",
      "A secret stash of hidden candies",
      "Anything I can stuff into my cheeks right now",
      "Tiny perfectly round crackers",
      "A single snack I take an hour to eat"
    ]
  },
  {
    q: "Choose your ideal weekend activity:",
    a: [
      "Taking a 5-hour nap on a sunny rug spot",
      "Bouncing around and playing dress-up",
      "Planning a harmless prank or building a fort",
      "Hosting a dinner party with lots of food",
      "Practicing poses in front of a mirror",
      "Moving very slowly to a new comfy spot"
    ]
  },
  {
    q: "What is your aesthetic or vibe?",
    a: [
      "Comfy cozy and perfectly round",
      "Fluffy curly and full of energy",
      "Small fuzzy and slightly chaotic",
      "Chubby-cheeked cute and food-loving",
      "Tiny elegant and dreaming big",
      "Chill relaxed and completely unbothered"
    ]
  },
  {
    q: "If you found a cardboard box, what would you do?",
    a: [
      "Sit in it immediately. If I fits I sits",
      "Jump in and out making happy noises",
      "Hide inside and surprise passersby",
      "Fill it up with snacks for later",
      "Stand on top to look tall and majestic",
      "Crawl in slowly for a dark nap cave"
    ]
  },
  {
    q: "Pick a magical superpower you'd love to have:",
    a: [
      "Summon snacks just by thinking about them",
      "Infinite energy to never stop playing",
      "Shape-shift into a giant fierce wolf",
      "A pocket dimension to store endless food",
      "Grow into a giant legendary creature",
      "Stop time so my naps last forever"
    ]
  },
  {
    q: "How do you react when your alarm goes off?",
    a: [
      "Snooze five times and hide under blankets",
      "Wake up instantly and do a morning dance",
      "Roll out and start looking for adventure",
      "Eyes open reach straight for a bedside snack",
      "Sit up perfectly straight ready to conquer",
      "What alarm? I slept right through it"
    ]
  },
  {
    q: "What's your favorite type of weather?",
    a: [
      "Rain outside — perfect excuse to stay in bed",
      "A gentle cool breeze that fluffs my hair",
      "A cloudy mysterious day for exploring",
      "Mild pleasant day for a picnic in the park",
      "A clear blue sky you can see for miles",
      "Warm humid day for lounging on a hammock"
    ]
  },
  {
    q: "Choose an animal you feel connected to:",
    a: [
      "A happy round panda eating bamboo",
      "A bouncy fluffy bunny rabbit",
      "A wild howling wolf or tiny fox",
      "A cute hamster saving snacks for later",
      "A proud beautiful blue bird",
      "A slow-moving relaxed tree sloth"
    ]
  },
  {
    q: "What kind of gift do you like to give friends?",
    a: [
      "A share of my favorite snack (just a bite)",
      "A handmade drawing with lots of glitter",
      "A cool rock or shiny button I found",
      "A recipe book or cool cooking gadget",
      "An inspiring speech or fancy accessory",
      "A cozy soft blanket for napping"
    ]
  },
  {
    q: "Where is your favorite spot in the house?",
    a: [
      "On top of the laptop while someone works",
      "Middle of the floor surrounded by toys",
      "Tucked in a dark corner or blanket fort",
      "Near the pantry or dining table",
      "High on a chair back to overlook the room",
      "Deep in the softest fluffiest couch cushions"
    ]
  },
  {
    q: "What makes you the happiest?",
    a: [
      "Eating a delicious meal then falling asleep",
      "Making people laugh and learning new things",
      "Growing bigger feeling strong and independent",
      "Trying a new recipe that tastes amazing",
      "Achieving a goal and showing my hard work",
      "Absolute peace quiet and slow moments"
    ]
  },
  {
    q: "Pick a cute sound effect that describes you:",
    a: [
      "Munch munch... snoreee",
      "Yay! Boing!",
      "Awoo! Rawr!",
      "Nom nom... Squeak!",
      "Tweet! Ta-da!",
      "Yawnnnn... Zzz..."
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
  { key: "D", name: "Cheek",     img: "pics/cheek.gif",     emoji: "🐹",
    tag: "The Food Hoarder",      color: "#E8B88A",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="20" r="10" fill="#E8B88A" opacity=".5"/><circle cx="10" cy="17" r="3" fill="#E8B88A" opacity=".6"/><circle cx="26" cy="17" r="3" fill="#E8B88A" opacity=".6"/><circle cx="13" cy="24" r="4" fill="#E8B88A" opacity=".35"/><circle cx="23" cy="24" r="4" fill="#E8B88A" opacity=".35"/></svg>`,
    desc: "You love food, cooking, and keeping your cheeks full! Your kitchen skills are legendary." },
  { key: "E", name: "Bo",        img: "pics/bo.gif",        emoji: "🐦",
    tag: "The Confident Dreamer", color: "#7EB8DA",
    icon: `<svg viewBox="0 0 36 36"><path d="M8 22 Q18 6 28 22 Q18 28 8 22Z" fill="#7EB8DA" opacity=".5"/><circle cx="16" cy="17" r="1.5" fill="#fff" opacity=".6"/><path d="M20 24 L24 27" stroke="#7EB8DA" stroke-width="2" stroke-linecap="round" opacity=".6"/></svg>`,
    desc: "Small but with BIG dreams! You carry yourself with elegance and confidence." },
  { key: "F", name: "Sloth",     img: "pics/sloth.gif",     emoji: "🦥",
    tag: "The Chillest of Them All", color: "#8FBC8F",
    icon: `<svg viewBox="0 0 36 36"><circle cx="18" cy="20" r="10" fill="#8FBC8F" opacity=".5"/><circle cx="11" cy="17" r="3" fill="#8FBC8F" opacity=".5"/><circle cx="25" cy="17" r="3" fill="#8FBC8F" opacity=".5"/><path d="M13 23 Q18 26 23 23" stroke="#8FBC8F" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>`,
    desc: "Slow, calm, completely unbothered! You take life at your own peaceful pace." }
];

const LABELS = ["A","B","C","D","E","F"];
const SCORE_INIT = { A:0, B:0, C:0, D:0, E:0, F:0 };

// ===== RESULT HISTORY (cookie-backed) =====
const RESULTS_COOKIE = "pusheenResults";
const RESULTS_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getResultCounts() {
  const prefix = RESULTS_COOKIE + "=";
  const entry = document.cookie.split("; ").find(row => row.startsWith(prefix));
  if (!entry) return { ...SCORE_INIT };
  try {
    const parsed = JSON.parse(decodeURIComponent(entry.slice(prefix.length)));
    return { ...SCORE_INIT, ...parsed };
  } catch {
    return { ...SCORE_INIT };
  }
}

function recordResult(key) {
  const counts = getResultCounts();
  counts[key] = (counts[key] || 0) + 1;
  const value = encodeURIComponent(JSON.stringify(counts));
  document.cookie = `${RESULTS_COOKIE}=${value}; path=/; max-age=${RESULTS_COOKIE_MAX_AGE}; SameSite=Lax`;
  return counts;
}

let screen = "intro";
let currentQuestion = 0;
let scores = { ...SCORE_INIT };
let resultKey = "A";

const app = document.getElementById("app");

// ===== AUDIO =====
let audioCtx = null;

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
let bgmMuted = false; // user preference, toggled by the mute button

// ---- BGM ----
function initBgm() {
  if (bgmAudio) return;
  bgmAudio = new Audio("audio/music.mp3");
  bgmAudio.loop = true;
  bgmAudio.volume = 1.0;
}

// Begin playback the moment the page opens. We first try to play audibly
// right away; if the browser blocks audible autoplay, we fall back to muted
// playback and unmute on the first user interaction.
function startBgm() {
  initBgm();
  bgmAudio.muted = false;
  bgmAudio.play().catch(() => {
    // Audible autoplay was blocked — start muted so playback is "primed",
    // then unmute as soon as the user interacts.
    bgmAudio.muted = true;
    bgmAudio.play().catch(() => {});
  });
}

// Fallback for browsers that blocked audible autoplay: unmute on the first
// user interaction (the earliest point a browser guarantees audible sound).
function unmuteBgm() {
  if (bgmMuted || !bgmAudio) return;
  bgmAudio.muted = false;
  bgmAudio.play().catch(() => {});
}

function toggleMute() {
  bgmMuted = !bgmMuted;
  if (!bgmAudio) initBgm();
  const btn = document.getElementById("muteBtn");
  if (bgmMuted) {
    bgmAudio.muted = true;
    bgmAudio.pause();
    if (btn) { btn.textContent = "🔇"; btn.classList.add("muted"); }
  } else {
    bgmAudio.muted = false;
    bgmAudio.play().catch(() => {});
    if (btn) { btn.textContent = "🔊"; btn.classList.remove("muted"); }
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

// ===== SILHOUETTE ROWS =====
const CHAR_IMAGES = [
  { key: "A", img: "pics/pusheen.png" },
  { key: "B", img: "pics/stormy.gif" },
  { key: "C", img: "pics/pip.gif" },
  { key: "D", img: "pics/cheek.gif" },
  { key: "E", img: "pics/bo.gif" },
  { key: "F", img: "pics/sloth.gif" }
];

const CHARACTER_FACTS = {
  A: { emoji: "🐱", name: "Pusheen", fact: "Pusheen was born on February 18, 2010, and her favorite activities are eating, sleeping, and being adorable!" },
  B: { emoji: "🐑", name: "Stormy", fact: "Stormy is Pusheen's fluffy little sister who dreams of being just as cool and cozy as Pusheen one day!" },
  C: { emoji: "🐺", name: "Pip", fact: "Pip is the mischievous little brother who practices his wolf howl every night, even though it still comes out as a tiny squeak!" },
  D: { emoji: "🐹", name: "Cheek", fact: "Cheek loves cooking so much that their kitchen is always stocked — and their actual cheeks are always stuffed with snacks!" },
  E: { emoji: "🐦", name: "Bo", fact: "Bo dreams of being a majestic big blue bird one day and practices power poses every morning in the mirror!" },
  F: { emoji: "🦥", name: "Sloth", fact: "Sloth moves so slowly that it takes an entire afternoon just to decide which couch cushion to nap on!" }
};

let glowTimer = null;
let currentGlowItem = null;
let silhouetteItems = [];

const ROW_HEIGHT = 92;   // px; fits a 64px char rotated 45deg (~90px box)
const SET_WIDTH = 540;   // px; one set of 6 chars = 6 * (64 + 26 gap)

function initSilhouettes() {
  const container = document.getElementById("silhouettes");
  if (!container) return;

  // Reset any previous build (e.g. on resize).
  if (glowTimer) { clearInterval(glowTimer); glowTimer = null; }
  currentGlowItem = null;
  silhouetteItems = [];
  container.innerHTML = "";

  // The container is rotated 45deg, so it must be a square large enough
  // to cover the viewport's diagonal in every direction.
  const side = Math.ceil((window.innerWidth + window.innerHeight) / Math.SQRT2) + 120;
  container.style.width = side + "px";
  container.style.height = side + "px";

  const rowCount = Math.ceil(side / ROW_HEIGHT) + 1;
  const setCount = Math.ceil(side / SET_WIDTH) + 1; // +1 spare set to scroll into

  for (let i = 0; i < rowCount; i++) {
    const isRight = i % 2 === 0;

    const row = document.createElement("div");
    row.className = "silhouette-row";

    const track = document.createElement("div");
    track.className = `row__track ${isRight ? "row__track--right" : "row__track--left"}`;

    for (let copy = 0; copy < setCount; copy++) {
      CHAR_IMAGES.forEach(ch => {
        const item = document.createElement("div");
        item.className = "silhouette-item";
        item.dataset.char = ch.key;

        const img = document.createElement("img");
        img.className = "silhouette-img";
        img.src = ch.img;
        img.alt = ch.key;
        img.draggable = false;

        item.appendChild(img);
        item.addEventListener("click", () => handleSilhouetteClick(ch.key));
        track.appendChild(item);
        silhouetteItems.push(item);
      });
    }

    row.appendChild(track);
    container.appendChild(row);
  }

  startGlowTimer();
}

// Rebuild the silhouette field when the window size changes.
let silhouetteResizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(silhouetteResizeTimer);
  silhouetteResizeTimer = setTimeout(initSilhouettes, 300);
});

function startGlowTimer() {
  setTimeout(() => {
    const first = silhouetteItems[Math.floor(Math.random() * silhouetteItems.length)];
    currentGlowItem = first;
    first.classList.add("silhouette--glowing");
  }, 2000);

  glowTimer = setInterval(() => {
    if (currentGlowItem) {
      currentGlowItem.classList.remove("silhouette--glowing");
    }
    let next;
    do {
      next = silhouetteItems[Math.floor(Math.random() * silhouetteItems.length)];
    } while (next === currentGlowItem && silhouetteItems.length > 1);
    currentGlowItem = next;
    next.classList.add("silhouette--glowing");
  }, 90000);
}

function handleSilhouetteClick(key) {
  const data = CHARACTER_FACTS[key];
  if (!data) return;

  const imgSrc = CHAR_IMAGES.find(c => c.key === key).img;
  document.getElementById("popupCharImg").innerHTML = `<img src="${imgSrc}" alt="${data.name}" class="popup-gif">`;
  document.getElementById("popupName").textContent = data.name;
  document.getElementById("popupFact").textContent = data.fact;
  document.getElementById("popupOverlay").style.display = "flex";

  if (currentGlowItem) {
    currentGlowItem.classList.remove("silhouette--glowing");
    currentGlowItem = null;
  }
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  initSilhouettes();
  document.getElementById("popupClose").addEventListener("click", closePopup);
  document.getElementById("popupOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closePopup();
  });

  // Prime the music (muted) right away so it's ready to play instantly.
  startBgm();

  // The welcome button's click is a real user gesture — the earliest moment a
  // browser will allow audible sound — so we start the music audibly here.
  const welcomeOverlay = document.getElementById("welcomeOverlay");
  document.getElementById("welcomeBtn").addEventListener("click", () => {
    unmuteBgm();
    welcomeOverlay.classList.add("welcome--hidden");
  });

  // Safety net: if the user interacts some other way first, unmute then too.
  const interactionEvents = ["pointerdown", "mousedown", "keydown", "touchstart", "click", "wheel", "scroll"];
  const unlock = () => {
    unmuteBgm();
    interactionEvents.forEach(ev => document.removeEventListener(ev, unlock));
  };
  interactionEvents.forEach(ev =>
    document.addEventListener(ev, unlock, { passive: true })
  );

  document.getElementById("muteBtn").addEventListener("click", toggleMute);
});

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

  const counts = getResultCounts();
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0) || 1;
  const chartCols = CHARACTERS.map(c => {
    const n = counts[c.key] || 0;
    const pct = Math.round((n / total) * 100);
    const isYou = c.key === resultKey;
    return `
      <div class="chart-col${isYou ? " chart-col--you" : ""}">
        <span class="chart-pct">${pct}%</span>
        <div class="chart-track">
          <div class="chart-bar" data-pct="${pct}" style="height:0; background:${c.color};"></div>
        </div>
        <img class="chart-gif" src="${c.img}" alt="${c.name}" />
        <span class="chart-name">${c.name}</span>
      </div>`;
  }).join("");

  app.innerHTML = `
    <div class="card">
      <div class="result-char">${imgHtml}</div>
      <p class="result-label">You are...</p>
      <h2 class="result-name">${ch.name}</h2>
      <p class="result-tag">— ${ch.tag} —</p>
      <div class="result-scroll">
        <p class="result-desc">${ch.desc}</p>
        <div class="chart">
          <p class="chart-title">✦ How everyone scored ✦</p>
          <div class="chart-cols">${chartCols}</div>
        </div>
      </div>
      <button class="play-again-button" id="playAgainBtn">Play Again</button>
    </div>
  `;

  playFanfare();
  spawnConfetti();

  // Grow the chart bars from 0 to their target width on next frame.
  requestAnimationFrame(() => {
    document.querySelectorAll(".chart-bar").forEach(bar => {
      bar.style.height = bar.dataset.pct + "%";
    });
  });

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
      recordResult(resultKey);
      screen = "results";
      render();
    }, 450);
  }
}

function startQuiz() {
  screen = "quiz";
  currentQuestion = 0;
  scores = { ...SCORE_INIT };
  render();
}

function resetQuiz() {
  screen = "intro";
  currentQuestion = 0;
  scores = { ...SCORE_INIT };
  resultKey = "A";
  render();
}

render();
