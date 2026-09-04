/**
 * theory.js — логика раздела "Теория".
 * Показывает список уроков и отдельный урок с подсветкой markdown-секций.
 */
const Theory = {
  /** Показать список уроков (опционально с фильтром). */
  showList(filter = "") {
    const all = window.SEO_LESSONS || [];
    const blocks = window.SEO_BLOCKS_THEORY || [];
    const screen = document.getElementById("theory-screen");

    const norm = (s) => s.toLowerCase().trim();
    const q = norm(filter);
    const filtered = q
      ? all.filter(l => norm(l.title).includes(q) || norm(l.block).includes(q) || String(l.id) === q)
      : all;

    const blocksHtml = blocks.filter(b => b.id !== "all").map(block => {
      const lessonsInBlock = filtered.filter(l => l.id >= block.range[0] && l.id <= block.range[1]);
      if (lessonsInBlock.length === 0) return "";
      const tiles = lessonsInBlock.map(l => {
        const status = Storage.getLessonStatus(l.id, 6);
        const cls = status === "completed" ? "completed"
                  : status === "partial" ? "partial" : "";
        return '<button class="lesson-tile ' + cls + '" data-lesson="' + l.id + '">' + l.id +
          (status === "completed" ? '<span class="badge">ok</span>' : '') + '</button>';
      }).join("");
      return '<div class="block-section"><h2>' + block.name + '</h2><div class="lesson-grid">' + tiles + '</div></div>';
    }).join("");

    screen.innerHTML = [
      '<div class="welcome">',
      '  <h1>📚 Теория SEO</h1>',
      '  <p>50 уроков сжатой теории. Читайте → закрепляйте квизами. Нажмите на номер урока для просмотра.</p>',
      '</div>',

      '<div class="theory-search">',
      '  <input type="text" id="theory-search-input" class="fill-input" placeholder="🔍 Поиск по урокам (номер, название, блок)..." value="' + (filter ? this._escape(filter) : '') + '" autocomplete="off" />',
      '</div>',

      blocksHtml || '<div class="empty">Ничего не найдено по запросу «' + this._escape(filter) + '»</div>'
    ].join("");

    const input = document.getElementById("theory-search-input");
    let timer = null;
    input.oninput = () => {
      clearTimeout(timer);
      timer = setTimeout(() => this.showList(input.value), 150);
    };
    input.focus();

    screen.querySelectorAll(".lesson-tile").forEach(tile => {
      tile.onclick = () => this.showLesson(parseInt(tile.dataset.lesson));
    });
  },

  /** Показать конкретный урок. */
  showLesson(id) {
    const all = window.SEO_LESSONS || [];
    const lesson = all.find(l => l.id === id);
    const screen = document.getElementById("theory-screen");
    if (!lesson) {
      screen.innerHTML = '<div class="empty">Урок не найден</div>';
      return;
    }

    const allIds = all.map(l => l.id);
    const idx = allIds.indexOf(id);
    const prevId = idx > 0 ? allIds[idx - 1] : null;
    const nextId = idx < allIds.length - 1 ? allIds[idx + 1] : null;

    const sectionsHtml = lesson.sections.map(sec => this._renderSection(sec)).join("");

    screen.innerHTML = [
      '<div class="lesson-view">',

      '  <div class="lesson-view-header">',
      '    <button class="btn secondary" id="back-to-list">← К списку</button>',
      '    <div class="lesson-tags">',
      '      <span class="tag lesson-num">Урок ' + lesson.id + '</span>',
      '      <span class="tag block-tag">' + this._escape(lesson.block) + '</span>',
      '    </div>',
      '  </div>',

      '  <h1 class="lesson-view-title">' + this._escape(lesson.title) + '</h1>',

      '  <div class="lesson-view-content">' + sectionsHtml + '</div>',

      '  <div class="lesson-view-actions">',
      prevId ? '<button class="btn secondary" data-nav="prev">← Урок ' + prevId + '</button>' : '<span></span>',
      '    <button class="btn" id="start-quiz-btn">🧪 Пройти тест</button>',
      nextId ? '<button class="btn secondary" data-nav="next">Урок ' + nextId + ' →</button>' : '<span></span>',
      '  </div>',

      '</div>'
    ].join("");

    document.getElementById("back-to-list").onclick = () => this.showList();
    document.getElementById("start-quiz-btn").onclick = () => App.startLesson(lesson.id);

    screen.querySelectorAll("[data-nav]").forEach(btn => {
      btn.onclick = () => {
        const nav = btn.dataset.nav;
        const targetId = nav === "prev" ? prevId : nextId;
        if (targetId) this.showLesson(targetId);
      };
    });

    // Прокрутка наверх при смене урока
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /** Рендер одной секции урока. */
  _renderSection(sec) {
    let html = "";
    if (sec.h2) html += "<h2>" + this._escape(sec.h2) + "</h2>";
    if (sec.p) html += "<p>" + this._escape(sec.p) + "</p>";
    if (sec.ul) {
      html += "<ul>" + sec.ul.map(item => "<li>" + this._escape(item) + "</li>").join("") + "</ul>";
    }
    if (sec.ol) {
      html += "<ol>" + sec.ol.map(item => "<li>" + this._escape(item) + "</li>").join("") + "</ol>";
    }
    if (sec.table) {
      const t = sec.table;
      html += "<div class=\"table-wrap\"><table><thead><tr>";
      html += t.head.map(h => "<th>" + this._escape(h) + "</th>").join("");
      html += "</tr></thead><tbody>";
      html += t.rows.map(row =>
        "<tr>" + row.map(cell => "<td>" + this._escape(cell) + "</td>").join("") + "</tr>"
      ).join("");
      html += "</tbody></table></div>";
    }
    return html;
  },

  /** HTML-escape для пользовательского текста. */
  _escape(s) {
    if (s === undefined || s === null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
};

window.Theory = Theory;
