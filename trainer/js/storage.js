/**
 * storage.js — работа с localStorage
 * Хранит: прогресс по урокам, streak, статистику, последний режим.
 */
const STORAGE_KEY = "seo_trainer_v1";

const Storage = {
  get() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : this._default();
    } catch {
      return this._default();
    }
  },
  set(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) { console.warn("Storage write failed", e); }
  },
  _default() {
    return {
      streak: 0,          // дней подряд
      lastDate: null,     // YYYY-MM-DD последнего занятия
      lessons: {},        // { 1: { best: 5, attempts: 2, lastScore: 5 } }
      totalCorrect: 0,
      totalAnswered: 0,
      lastMode: null
    };
  },
  reset() {
    localStorage.removeItem(STORAGE_KEY);
  },

  /** Обновить streak по дате последней активности. */
  updateStreak() {
    const s = this.get();
    const today = new Date().toISOString().slice(0, 10);
    if (s.lastDate === today) return s.streak;
    if (!s.lastDate) {
      s.streak = 1;
    } else {
      const last = new Date(s.lastDate);
      const cur = new Date(today);
      const diff = Math.round((cur - last) / 86400000);
      s.streak = diff === 1 ? s.streak + 1 : 1;
    }
    s.lastDate = today;
    this.set(s);
    return s.streak;
  },

  /** Сохранить результат прохождения урока (или набора вопросов). */
  saveLesson(lessonNum, correct, total) {
    const s = this.get();
    const pct = Math.round((correct / total) * 100);
    const prev = s.lessons[lessonNum] || { best: 0, attempts: 0 };
    s.lessons[lessonNum] = {
      best: Math.max(prev.best, correct),
      attempts: prev.attempts + 1,
      lastScore: correct,
      lastTotal: total,
      lastPct: pct,
      lastDate: new Date().toISOString().slice(0, 10)
    };
    s.totalCorrect += correct;
    s.totalAnswered += total;
    this.set(s);
    this.updateStreak();
  },

  /** Получить агрегированную статистику. */
  getStats() {
    const s = this.get();
    const totalLessons = Object.keys(s.lessons).length;
    const completed = Object.values(s.lessons).filter(l => l.best === l.lastTotal).length;
    const accuracy = s.totalAnswered > 0
      ? Math.round((s.totalCorrect / s.totalAnswered) * 100)
      : 0;
    return {
      streak: s.streak,
      totalLessons,
      completed,
      accuracy,
      totalCorrect: s.totalCorrect,
      totalAnswered: s.totalAnswered
    };
  },

  /** Получить статус урока. */
  getLessonStatus(lessonNum, totalQs) {
    const l = this.get().lessons[lessonNum];
    if (!l) return "none";
    if (l.best === totalQs) return "completed";
    if (l.best > 0) return "partial";
    return "none";
  }
};

window.Storage = Storage;
