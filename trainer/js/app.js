/**
 * app.js - инициализация тренажёра, навигация, режимы.
 */
const App = {
  init() {
    document.getElementById("brand").onclick = () => this.goHome();
    document.getElementById("reset-btn").onclick = () => {
      if (confirm("Сбросить весь прогресс? Это действие нельзя отменить.")) {
        Storage.reset();
        location.reload();
      }
    };
    this.goHome();
    Storage.updateStreak();
  },

  showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    this.updateStreakBadge();
    window.scrollTo(0, 0);
  },

  updateStreakBadge() {
    const stats = Storage.getStats();
    const el = document.getElementById("streak-badge");
    if (el) el.textContent = "🔥 " + stats.streak;
  },

  goHome() {
    this.showScreen("home-screen");
    this.renderHome();
  },

  renderHome() {
    const stats = Storage.getStats();
    const home = document.getElementById("home-screen");
    home.innerHTML = [
      "<div class=\"welcome\"><h1>SEO-тренажёр 🚀</h1><p>300 вопросов по 50 урокам. Прокачивай знания по SEO для контент-менеджера.</p></div>",
      "<div class=\"stats-grid\">",
        "<div class=\"stat-card\"><div class=\"value\">" + stats.streak + "</div><div class=\"label\">дней streak</div></div>",
        "<div class=\"stat-card\"><div class=\"value\">" + stats.accuracy + "%</div><div class=\"label\">точность</div></div>",
        "<div class=\"stat-card\"><div class=\"value\">" + stats.completed + "/50</div><div class=\"label\">уроков пройдено</div></div>",
        "<div class=\"stat-card\"><div class=\"value\">" + stats.totalAnswered + "</div><div class=\"label\">ответов дано</div></div>",
      "</div>",
      "<h2 style=\"margin-bottom: 12px; font-size: 18px;\">🎯 Режимы тренировки</h2>",
      "<div class=\"modes\">",
        "<button class=\"mode-card\" data-mode=\"sequential\"><div class=\"emoji\">📚</div><h3>По урокам</h3><p>1 → 50, по порядку. Лучше всего для системного изучения.</p></button>",
        "<button class=\"mode-card\" data-mode=\"random\"><div class=\"emoji\">🎲</div><h3>Случайная выборка</h3><p>10 случайных вопросов из всего банка. Быстрый разогрев.</p></button>",
        "<button class=\"mode-card\" data-mode=\"weak\"><div class=\"emoji\">🩺</div><h3>Слабые места</h3><p>Вопросы из уроков, где были ошибки (нужен прогресс).</p></button>",
        "<button class=\"mode-card\" data-mode=\"exam\"><div class=\"emoji\">⏱️</div><h3>Экзамен</h3><p>50 случайных вопросов. Проверь себя по всему курсу.</p></button>",
      "</div>",
      "<h2 style=\"margin-bottom: 12px; font-size: 18px;\">📖 Выбрать урок</h2>",
      "<div id=\"blocks-container\"></div>"
    ].join("");

    document.querySelectorAll(".mode-card").forEach(btn => {
      btn.onclick = () => this.startMode(btn.dataset.mode);
    });
    this.renderBlocks();
  },

  renderBlocks() {
    const container = document.getElementById("blocks-container");
    if (!container) return;
    const allQuestions = window.SEO_QUESTIONS;
    const blocks = window.SEO_BLOCKS.filter(b => b.id !== "all");

    container.innerHTML = blocks.map(block => {
      const tiles = [];
      for (let n = block.range[0]; n <= block.range[1]; n++) {
        const qs = allQuestions.filter(q => q.lesson === n);
        const status = Storage.getLessonStatus(n, qs.length);
        const cls = status === "completed" ? "completed" : (status === "partial" ? "partial" : "");
        const badge = status === "completed" ? "<span class=\"badge\">ok</span>" : "";
        tiles.push("<button class=\"lesson-tile " + cls + "\" data-lesson=\"" + n + "\">" + n + badge + "</button>");
      }
      return "<div class=\"block-section\"><h2>" + block.name + "</h2><div class=\"lesson-grid\">" + tiles.join("") + "</div></div>";
    }).join("");

    container.querySelectorAll(".lesson-tile").forEach(tile => {
      tile.onclick = () => this.startLesson(parseInt(tile.dataset.lesson));
    });
  },

  startLesson(n) {
    const qs = window.SEO_QUESTIONS.filter(q => q.lesson === n);
    if (!qs.length) return;
    Quiz.start(qs, n, (correct, total) => this.showResults(correct, total, "Урок " + n));
    this.showScreen("quiz-screen");
  },

  startMode(mode) {
    let qs = [];
    let title = "";
    let lessonNum = null;

    if (mode === "sequential") {
      const blocks = window.SEO_BLOCKS.filter(b => b.id !== "all");
      for (const block of blocks) {
        for (let n = block.range[0]; n <= block.range[1]; n++) {
          const status = Storage.getLessonStatus(n, 6);
          if (status !== "completed") {
            qs = window.SEO_QUESTIONS.filter(q => q.lesson === n);
            title = "Урок " + n;
            lessonNum = n;
            break;
          }
        }
        if (qs.length) break;
      }
      if (!qs.length) {
        alert("🎉 Все уроки пройдены! Попробуйте другие режимы.");
        return;
      }
    } else if (mode === "random") {
      qs = this._sample(window.SEO_QUESTIONS, 10);
      title = "Случайная выборка";
    } else if (mode === "weak") {
      const lessons = Storage.get().lessons;
      const weakLessons = Object.keys(lessons)
        .filter(n => lessons[n].best < lessons[n].lastTotal)
        .map(n => parseInt(n));
      if (!weakLessons.length) {
        alert("Пока нет слабых мест. Пройдите несколько уроков сначала.");
        return;
      }
      const weakQs = window.SEO_QUESTIONS.filter(q => weakLessons.includes(q.lesson));
      qs = this._sample(weakQs, Math.min(10, weakQs.length));
      title = "Слабые места";
    } else if (mode === "exam") {
      qs = this._sample(window.SEO_QUESTIONS, 50);
      title = "Экзамен (50 вопросов)";
    }

    Quiz.start(qs, lessonNum, (correct, total) => this.showResults(correct, total, title));
    this.showScreen("quiz-screen");
  },

  _sample(arr, n) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, n);
  },

  showResults(correct, total, title) {
    const pct = Math.round((correct / total) * 100);
    let emoji = "🎉", comment = "Отличный результат!";
    if (pct < 60) { emoji = "📚"; comment = "Стоит повторить материал урока."; }
    else if (pct < 80) { emoji = "👍"; comment = "Хорошо, но есть куда расти."; }
    else if (pct < 95) { emoji = "🌟"; comment = "Почти идеально!"; }

    document.getElementById("results-screen").innerHTML = [
      "<div class=\"results-card\">",
        "<h2>" + emoji + " " + title + "</h2>",
        "<div class=\"score-big\">" + correct + "/" + total + "</div>",
        "<p style=\"color: var(--text-muted); margin-bottom: 16px;\">" + comment + "</p>",
        "<div class=\"results-stats\">",
          "<div class=\"stat-card\"><div class=\"value\">" + pct + "%</div><div class=\"label\">точность</div></div>",
          "<div class=\"stat-card\"><div class=\"value\">" + (total - correct) + "</div><div class=\"label\">ошибок</div></div>",
          "<div class=\"stat-card\"><div class=\"value\">" + correct + "</div><div class=\"label\">верно</div></div>",
        "</div>",
        "<div class=\"results-actions\">",
          "<button class=\"btn\" id=\"retry-btn\">🔁 Ещё раз</button>",
          "<button class=\"btn secondary\" id=\"home-btn\">🏠 На главную</button>",
        "</div>",
      "</div>"
    ].join("");

    document.getElementById("home-btn").onclick = () => this.goHome();
    document.getElementById("retry-btn").onclick = () => this.goHome();

    this.showScreen("results-screen");
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
window.App = App;
