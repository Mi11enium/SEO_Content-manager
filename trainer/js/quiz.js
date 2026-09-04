/**
 * quiz.js — логика прохождения квиза.
 */
const Quiz = {
  questions: [],
  index: 0,
  correct: 0,
  lessonNum: null,
  onFinish: null,

  start(questions, lessonNum, onFinish) {
    this.questions = questions;
    this.index = 0;
    this.correct = 0;
    this.lessonNum = lessonNum;
    this.onFinish = onFinish;
    this.render();
  },

  current() { return this.questions[this.index]; },

  render() {
    const q = this.current();
    if (!q) return this.finish();

    const total = this.questions.length;
    const pct = Math.round((this.index / total) * 100);
    const screen = document.getElementById("quiz-screen");
    const letters = ["А", "Б", "В", "Г", "Д"];

    let answerHtml = "";
    if (q.type === "choice") {
      answerHtml = `<div class="options">${
        q.o.map((opt, i) => `
          <button class="option" data-i="${i}">
            <span class="letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>
        `).join("")
      }</div>`;
    } else if (q.type === "boolean") {
      answerHtml = `<div class="bool-options">
        <button class="bool-btn" data-v="true">✓ Верно</button>
        <button class="bool-btn" data-v="false">✗ Неверно</button>
      </div>`;
    } else if (q.type === "fill") {
      answerHtml = `<input type="text" class="fill-input" placeholder="Введите ответ..." autocomplete="off" />`;
    }

    screen.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-progress">
          <div class="quiz-counter">Вопрос ${this.index + 1} из ${total}</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="question-card">
        <div class="question-meta">
          <span class="tag lesson-num">Урок ${q.lesson}</span>
          <span class="tag">${q.block}</span>
        </div>
        <div class="question-text">${q.q}</div>
        <div id="answer-area">${answerHtml}</div>
        <div class="feedback" id="feedback"></div>
      </div>
      <div class="actions">
        <button class="btn secondary" id="quit-btn">Выйти</button>
        <button class="btn" id="next-btn" disabled>${this.index === total - 1 ? "Завершить" : "Дальше →"}</button>
      </div>
    `;

    document.getElementById("quit-btn").onclick = () => App.goHome();
    document.getElementById("next-btn").onclick = () => this.next();

    if (q.type === "choice") {
      screen.querySelectorAll(".option").forEach(btn => {
        btn.onclick = () => this.checkChoice(parseInt(btn.dataset.i));
      });
    } else if (q.type === "boolean") {
      screen.querySelectorAll(".bool-btn").forEach(btn => {
        btn.onclick = () => this.checkBoolean(btn.dataset.v === "true");
      });
    } else if (q.type === "fill") {
      const input = screen.querySelector(".fill-input");
      input.focus();
      input.onkeydown = (e) => {
        if (e.key === "Enter") this.checkFill(input.value.trim());
      };
    }
  },

  checkChoice(idx) {
    const q = this.current();
    const buttons = document.querySelectorAll(".option");
    const isCorrect = idx === q.a;
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.a) btn.classList.add("correct");
      else if (i === idx) btn.classList.add("incorrect");
    });
    if (isCorrect) this.correct++;
    this.showFeedback(isCorrect, q);
    this.enableNext();
  },

  checkBoolean(val) {
    const q = this.current();
    const isCorrect = String(val) === q.answer;
    document.querySelectorAll(".bool-btn").forEach(btn => {
      btn.disabled = true;
      const v = btn.dataset.v === "true";
      if (v === (q.answer === "true")) btn.classList.add("correct");
      else if (v === val) btn.classList.add("incorrect");
    });
    if (isCorrect) this.correct++;
    this.showFeedback(isCorrect, q);
    this.enableNext();
  },

  checkFill(value) {
    if (document.getElementById("next-btn").disabled === false) return;
    const q = this.current();
    const input = document.querySelector(".fill-input");
    const norm = (s) => s.toLowerCase().replace(/ё/g, "е").trim();
    const isCorrect = norm(value) === norm(q.answer);
    input.disabled = true;
    input.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) this.correct++;
    this.showFeedback(isCorrect, q, isCorrect ? null : `Правильный ответ: <strong>${q.answer}</strong>`);
    this.enableNext();
  },

  showFeedback(isCorrect, q, extra) {
    const f = document.getElementById("feedback");
    f.classList.add("show", isCorrect ? "correct" : "incorrect");
    f.innerHTML = `
      <div class="feedback-label">${isCorrect ? "✓ Правильно!" : "✗ Неправильно"}</div>
      <div>${q.explain}</div>
      ${extra ? `<div style="margin-top:6px">${extra}</div>` : ""}
    `;
  },

  enableNext() {
    const btn = document.getElementById("next-btn");
    btn.disabled = false;
    btn.focus();
  },

  next() {
    const q = this.current();
    if (q.type === "fill") {
      const input = document.querySelector(".fill-input");
      if (input && !input.disabled && !document.getElementById("feedback").classList.contains("show")) {
        this.checkFill(input.value.trim());
        return;
      }
    }
    this.index++;
    this.render();
  },

  finish() {
    const total = this.questions.length;
    if (this.lessonNum !== null && this.lessonNum !== undefined) {
      Storage.saveLesson(this.lessonNum, this.correct, total);
    } else {
      Storage.updateStreak();
    }
    if (this.onFinish) this.onFinish(this.correct, total);
  }
};

window.Quiz = Quiz;

