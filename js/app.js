let user = JSON.parse(localStorage.getItem("user")) || {
  name: "Guest",
  group: "kids",
  xp: 0,
  streak: 1
};

/* =========================
   INIT DASHBOARD
========================= */
function initDashboard() {
  loadUserUI();
  loadVideos();
  loadMotivation();
  initChatbot();
}

/* =========================
   USER UI
========================= */
function loadUserUI() {
  const welcome = document.getElementById("welcomeText");
  const streak = document.getElementById("streakText");

  if (welcome) {
    welcome.innerText = `Welcome ${user.name} (${user.group.toUpperCase()})`;
  }

  if (streak) {
    streak.innerText = `🔥 Streak: ${user.streak}`;
  }
}

/* =========================
   VIDEOS
========================= */
function loadVideos() {
  const container = document.getElementById("videoFeed");

  if (!container) return;

  if (!window.contentByAge) {
    container.innerHTML =
      "<p>No video system loaded (speakers.js missing)</p>";
    return;
  }

  const group = user.group || "kids";
  const videos = window.contentByAge[group];

  if (!videos || videos.length === 0) {
    container.innerHTML = "<p>No video data found.</p>";
    return;
  }

  container.innerHTML = "";

  videos.forEach(v => {
    container.innerHTML += `
      <div class="card">
        <h4>${v.title}</h4>
        <iframe
          src="${v.video}"
          title="${v.title}"
          allowfullscreen>
        </iframe>
      </div>
    `;
  });
}

/* =========================
   DAILY MOTIVATION
========================= */
function loadMotivation() {
  const box = document.getElementById("dailyMotivation");

  if (!box) return;

  const messages = [
    "Stay consistent. Small steps matter.",
    "Discipline beats motivation.",
    "You are closer than you think.",
    "Keep pushing forward.",
    "Success starts with self-belief.",
    "Every day is a new opportunity.",
    "Your future depends on what you do today.",
    "Dream big. Start small. Act now."
  ];

  box.innerText =
    messages[Math.floor(Math.random() * messages.length)];
}

/* =========================
   NAVIGATION
========================= */
function go(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

/* =========================
   FLOATING CHATBOT
========================= */
function initChatbot() {
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChat = document.getElementById("close-chat");

  if (!chatbotBtn || !chatbotWindow || !closeChat) {
    console.log("Chatbot elements not found.");
    return;
  }

  chatbotBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
  });

  closeChat.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
  });
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const messages = document.getElementById("chat-messages");

  if (!input || !messages) return;

  const message = input.value.trim();

  if (message === "") return;

  messages.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  const reply = getBotReply(message);

  setTimeout(() => {
    messages.innerHTML += `
      <div class="bot-message">
        ${reply}
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 500);

  input.value = "";
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (
    message.includes("sad") ||
    message.includes("depressed") ||
    message.includes("unhappy")
  ) {
    return "Every setback is a setup for a comeback. Keep going! 💪";
  }

  if (
    message.includes("motivation") ||
    message.includes("inspire")
  ) {
    return "Success starts with believing in yourself. 🌟";
  }

  if (
    message.includes("exam") ||
    message.includes("school")
  ) {
    return "Study one step at a time. Progress beats perfection. 📚";
  }

  if (
    message.includes("goal") ||
    message.includes("dream")
  ) {
    return "Big goals are achieved through small daily actions. 🚀";
  }

  if (
    message.includes("hello") ||
    message.includes("hi")
  ) {
    return `Hello ${user.name}! 😊 How can I motivate you today?`;
  }

  return "You are capable of amazing things. Never give up! 🌟";
}

/* =========================
   LOGOUT
========================= */
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

/* =========================
   START APP
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});
function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();
  if (message === "") return;

  /* USER MESSAGE */
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  /* AUTO BOT RESPONSE (basic fallback) */
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerText = getBotReply(message);
    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("motivation")) {
    return "Stay focused — your future depends on what you do today 🔥";
  }

  if (msg.includes("study")) {
    return "Consistency beats talent. Study a little every day 📚";
  }

  if (msg.includes("hello")) {
    return "Hey 👋 I'm InspireBot. Ask me anything!";
  }

  return "Keep pushing forward — you're doing better than you think 💡";
}