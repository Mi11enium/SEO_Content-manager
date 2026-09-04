/**
 * Банк вопросов для SEO-тренажёра.
 * Каждый урок содержит 6 вопросов.
 * Структура: id, lesson, block, type, q, o?, a?, answer?, explain
 */
const QUESTIONS = [
  // ===== Уроки 1–5: Основы SEO =====
  { id: "L1-Q1", lesson: 1, block: "Основы SEO", type: "choice",
    q: "Что означает аббревиатура SEO?",
    o: ["Search Engine Optimization", "Site Engagement Overview", "Social Engine Outreach", "Search Engagement Operations"],
    a: 0,
    explain: "SEO = Search Engine Optimization." },
  { id: "L1-Q2", lesson: 1, block: "Основы SEO", type: "boolean",
    q: "Цель SEO — привести целевой трафик из поиска, который будет конвертироваться.",
    answer: "true",
    explain: "Цитата из урока 1." },
  { id: "L1-Q3", lesson: 1, block: "Основы SEO", type: "choice",
    q: "Какой интент у запроса «купить ноутбук недорого»?",
    o: ["Информационный", "Навигационный", "Транзакционный", "Коммерческий"], a: 2,
    explain: "Маркер «купить» → транзакционный интент." },
  { id: "L1-Q4", lesson: 1, block: "Основы SEO", type: "fill",
    q: "Запрос «вход в гугл почту» имеет ____ интент (одно слово).",
    answer: "навигационный",
    explain: "Поиск конкретного сервиса → навигационный." },
  { id: "L1-Q5", lesson: 1, block: "Основы SEO", type: "boolean",
    q: "SEO даёт мгновенный результат, как контекстная реклама.",
    answer: "false",
    explain: "SEO — долгосрочная стратегия." },
  { id: "L1-Q6", lesson: 1, block: "Основы SEO", type: "choice",
    q: "Что НЕ входит в KPI контент-менеджера?",
    o: ["Позиции в топ-10", "Органический трафик", "Стоимость сервера", "CTR в поиске"], a: 2,
    explain: "Стоимость сервера — инфраструктурная метрика." }
  ,{ id: "L2-Q1", lesson: 2, block: "Основы SEO", type: "choice",
    q: "Какие 3 этапа работы поисковой системы?",
    o: ["Crawl → Index → Rank", "Search → Click → Visit", "Scan → Store → Show", "Fetch → Parse → Display"], a: 0,
    explain: "Crawling → Indexing → Ranking." }
  ,{ id: "L2-Q2", lesson: 2, block: "Основы SEO", type: "boolean",
    q: "Если страницы нет в индексе — она может показываться в поиске.",
    answer: "false",
    explain: "«Если страницы нет в индексе — её не существует для поиска»." }
  ,{ id: "L2-Q3", lesson: 2, block: "Основы SEO", type: "fill",
    q: "Главный поисковый робот Google называется ____ (одно слово).",
    answer: "Googlebot",
    explain: "Googlebot — основной краулер Google." }
  ,{ id: "L2-Q4", lesson: 2, block: "Основы SEO", type: "choice",
    q: "Что такое E-E-A-T?",
    o: ["Experience, Expertise, Authoritativeness, Trustworthiness", "Easy, Effective, Accessible, Technical", "Editorial, Engagement, Authority, Traffic", "Engagement, Expertise, Analytics, Trust"], a: 0,
    explain: "E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness." }
  ,{ id: "L2-Q5", lesson: 2, block: "Основы SEO", type: "boolean",
    q: "Поисковики хорошо видят JS-контент без дополнительного рендеринга.",
    answer: "false",
    explain: "Урок 2: плохо видят JS-контент." }
  ,{ id: "L2-Q6", lesson: 2, block: "Основы SEO", type: "choice",
    q: "К какой группе факторов относятся CTR и время на сайте?",
    o: ["Контентные", "Бэклинки", "Поведенческие", "Контекстные"], a: 2,
    explain: "CTR, время на сайте — поведенческие." }
  ,{ id: "L3-Q1", lesson: 3, block: "Основы SEO", type: "choice",
    q: "Что относится к On-Page SEO?",
    o: ["Бэклинки", "Title, H1, Alt-теги", "robots.txt", "Скорость сервера"], a: 1,
    explain: "On-Page — всё на странице." }
  ,{ id: "L3-Q2", lesson: 3, block: "Основы SEO", type: "boolean",
    q: "Бэклинки — это элемент On-Page SEO.",
    answer: "false",
    explain: "Бэклинки — Off-Page SEO." }
  ,{ id: "L3-Q3", lesson: 3, block: "Основы SEO", type: "fill",
    q: "Настройка серверной части — это ____ SEO (одно слово).",
    answer: "Technical",
    explain: "Technical SEO." }
  ,{ id: "L3-Q4", lesson: 3, block: "Основы SEO", type: "choice",
    q: "Какой процент работы контент-менеджера — on-page?",
    o: ["~30%", "~50%", "~80%", "~95%"], a: 2,
    explain: "80% работы контент-менеджера — on-page." }
  ,{ id: "L3-Q5", lesson: 3, block: "Основы SEO", type: "boolean",
    q: "Local SEO — отдельный вид SEO, не входящий в три главных столпа.",
    answer: "true",
    explain: "Local SEO — дополнительный вид." }
  ,{ id: "L3-Q6", lesson: 3, block: "Основы SEO", type: "choice",
    q: "Скорость результата у Off-Page SEO?",
    o: ["1–4 недели", "1–6 месяцев", "1 день", "1+ год"], a: 1,
    explain: "Off-Page: 1–6 месяцев." }
  ,{ id: "L4-Q1", lesson: 4, block: "Основы SEO", type: "choice",
    q: "Что такое SEM?",
    o: ["Только SEO", "SEO + контекстная реклама + оптимизация кампаний", "Только платная реклама", "Только email-маркетинг"], a: 1,
    explain: "SEM = SEO + PPC + оптимизация кампаний." }
  ,{ id: "L4-Q2", lesson: 4, block: "Основы SEO", type: "boolean",
    q: "У SEO и PPC CTR в среднем одинаковый.",
    answer: "false",
    explain: "У SEO CTR 15–30% (топ-3), у PPC — 3–10%." }
  ,{ id: "L4-Q3", lesson: 4, block: "Основы SEO", type: "fill",
    q: "Контекстная реклама в Google называется ____ Ads.",
    answer: "Google",
    explain: "Google Ads." }
  ,{ id: "L4-Q4", lesson: 4, block: "Основы SEO", type: "choice",
    q: "Когда PPC эффективнее SEO?",
    o: ["Долгосрочная стратегия от 6 месяцев", "B2B с длинным циклом сделки", "Сезонные акции и распродажи", "Контентные проекты"], a: 2,
    explain: "PPC эффективнее для сезонных акций и распродаж." }
  ,{ id: "L4-Q5", lesson: 4, block: "Основы SEO", type: "boolean",
    q: "PPC прекращает давать трафик сразу после отключения кампании.",
    answer: "true",
    explain: "Эффект PPC прекращается с отключением." }
  ,{ id: "L4-Q6", lesson: 4, block: "Основы SEO", type: "choice",
    q: "Какой новый канал в поисковом маркетинге упоминается?",
    o: ["Voice Search", "AI-поиск (SearchGPT, Perplexity, AI Overviews)", "Email", "Telegram"], a: 1,
    explain: "AI-поиск — новая воронка." }
  ,{ id: "L5-Q1", lesson: 5, block: "Основы SEO", type: "choice",
    q: "Какой KPI относится к уровню «Видимость»?",
    o: ["Лиды с органики", "Средняя позиция в выдаче", "Показатель отказов", "Время на странице"], a: 1,
    explain: "Видимость: позиции, visibility." }
  ,{ id: "L5-Q2", lesson: 5, block: "Основы SEO", type: "boolean",
    q: "ROI SEO = (доход + затраты) / затраты × 100%.",
    answer: "false",
    explain: "Правильно: (доход − затраты) / затраты × 100%." }
  ,{ id: "L5-Q3", lesson: 5, block: "Основы SEO", type: "fill",
    q: "Стандартная модель атрибуции GA4 — Last non-direct ____.",
    answer: "click",
    explain: "Last non-direct click." }
  ,{ id: "L5-Q4", lesson: 5, block: "Основы SEO", type: "choice",
    q: "Какой CTR в выдаче — цель для топ-10?",
    o: [">1%", ">3%", ">5%", ">20%"], a: 2,
    explain: "CTR >5% для топ-10." }
  ,{ id: "L5-Q5", lesson: 5, block: "Основы SEO", type: "boolean",
    q: "Только количество текстов без учёта трафика — корректный KPI.",
    answer: "false",
    explain: "Анти-метрика в уроке 5." }
  ,{ id: "L5-Q6", lesson: 5, block: "Основы SEO", type: "choice",
    q: "Где бесплатно смотреть агрегированные позиции?",
    o: ["Топвизор", "Google Search Console", "Ahrefs", "SEMrush"], a: 1,
    explain: "GSC — бесплатно." }
  ,{ id: "L6-Q1", lesson: 6, block: "Ключевые слова", type: "choice",
    q: "Что такое поисковый интент?",
    o: ["Частотность ключевого слова", "Цель пользователя при вводе запроса", "Тип страницы на сайте", "Регион пользователя"], a: 1,
    explain: "Search intent — цель пользователя." }
  ,{ id: "L6-Q2", lesson: 6, block: "Ключевые слова", type: "boolean",
    q: "Запрос «iphone 15 vs samsung s24» — коммерческий интент.",
    answer: "true",
    explain: "Маркер «vs» → Commercial Investigation." }
  ,{ id: "L6-Q3", lesson: 6, block: "Ключевые слова", type: "fill",
    q: "Запрос «как настроить robots.txt» имеет ____ интент.",
    answer: "информационный",
    explain: "Маркер «как» → информационный." }
  ,{ id: "L6-Q4", lesson: 6, block: "Ключевые слова", type: "choice",
    q: "Какой тип страницы подходит для транзакционного интента?",
    o: ["Блог-статья", "FAQ-страница", "Карточка товара", "Главная страница бренда"], a: 2,
    explain: "Транзакционный → карточка товара." }
  ,{ id: "L6-Q5", lesson: 6, block: "Ключевые слова", type: "boolean",
    q: "Один ключ может иметь несколько разных интентов одновременно.",
    answer: "false",
    explain: "Один ключ — один интент — одна страница." }
  ,{ id: "L6-Q6", lesson: 6, block: "Ключевые слова", type: "choice",
    q: "Как определить интент запроса по SERP?",
    o: ["По длине запроса", "По страницам в выдаче", "По частотности", "По региону"], a: 1,
    explain: "Анализ SERP." }
  ,{ id: "L7-Q1", lesson: 7, block: "Ключевые слова", type: "choice",
    q: "Какой инструмент Яндекса показывает частотность?",
    o: ["Яндекс.Вебмастер", "Яндекс.Wordstat", "Яндекс.Карты", "Яндекс.Метрика"], a: 1,
    explain: "Яндекс.Wordstat." }
  ,{ id: "L7-Q2", lesson: 7, block: "Ключевые слова", type: "boolean",
    q: "Для нового сайта рекомендуется KD > 50.",
    answer: "false",
    explain: "Для нового сайта KD < 30." }
  ,{ id: "L7-Q3", lesson: 7, block: "Ключевые слова", type: "fill",
    q: "KD — это Keyword ____.",
    answer: "Difficulty",
    explain: "Keyword Difficulty." }
  ,{ id: "L7-Q4", lesson: 7, block: "Ключевые слова", type: "choice",
    q: "Оператор Google для точной фразы?",
    o: ["site:", "intitle:", "Кавычки", "inurl:"], a: 2,
    explain: "Кавычки — оператор точной фразы." }
  ,{ id: "L7-Q5", lesson: 7, block: "Ключевые слова", type: "boolean",
    q: "Wordstat показывает абсолютно точные данные.",
    answer: "false",
    explain: "Условная метрика." }
  ,{ id: "L7-Q6", lesson: 7, block: "Ключевые слова", type: "choice",
    q: "Какой платный инструмент для СНГ?",
    o: ["Ahrefs", "SEMrush", "Serpstat", "Majestic"], a: 2,
    explain: "Serpstat — СНГ." }
  ,{ id: "L8-Q1", lesson: 8, block: "Ключевые слова", type: "choice",
    q: "Что такое long-tail запрос?",
    o: ["Высокочастотный однословный", "Низкочастотный, конкретный, 3+ слов", "Название бренда", "Запрос с опечаткой"], a: 1,
    explain: "Long-tail — низкочастотные, 3+ слов." }
  ,{ id: "L8-Q2", lesson: 8, block: "Ключевые слова", type: "boolean",
    q: "Long-tail запросы обычно имеют низкую конкуренцию.",
    answer: "true",
    explain: "Низкая конкуренция." }
  ,{ id: "L8-Q3", lesson: 8, block: "Ключевые слова", type: "fill",
    q: "Запрос «ноутбук» — это ____.",
    answer: "head",
    explain: "Head — однословный." }
  ,{ id: "L8-Q4", lesson: 8, block: "Ключевые слова", type: "choice",
    q: "Какой фильтр НЕ применяется к long-tail?",
    o: ["Частотность 0–50", "KD < 20", "Длина 3+ слов", "KD > 80"], a: 3,
    explain: "KD > 80 — для head." }
  ,{ id: "L8-Q5", lesson: 8, block: "Ключевые слова", type: "boolean",
    q: "Голосовые запросы часто являются long-tail.",
    answer: "true",
    explain: "Голосовые — длинные." }
  ,{ id: "L8-Q6", lesson: 8, block: "Ключевые слова", type: "choice",
    q: "Стратегия с меньшим риском каннибализации?",
    o: ["Статья под каждый запрос", "Групповая статья", "Секция FAQ", "Без оптимизации"], a: 1,
    explain: "Групповая статья." }
  ,{ id: "L9-Q1", lesson: 9, block: "Ключевые слова", type: "choice",
    q: "Что такое LSI-слова?",
    o: ["Синонимы ключевого слова", "Тематически связанные с целевым ключом", "Ключи конкурентов", "Стоп-слова"], a: 1,
    explain: "LSI — тематически связанные слова." }
  ,{ id: "L9-Q2", lesson: 9, block: "Ключевые слова", type: "boolean",
    q: "Google в классическом виде использует LSI.",
    answer: "false",
    explain: "Google не использует LSI." }
  ,{ id: "L9-Q3", lesson: 9, block: "Ключевые слова", type: "fill",
    q: "NLP-модель Яндекса — ____.",
    answer: "Палех",
    explain: "Палех." }
  ,{ id: "L9-Q4", lesson: 9, block: "Ключевые слова", type: "choice",
    q: "Естественная плотность LSI-слов?",
    o: ["<1%", "1–3%", "5–8%", "10–15%"], a: 1,
    explain: "1–3%." }
  ,{ id: "L9-Q5", lesson: 9, block: "Ключевые слова", type: "boolean",
    q: "Список LSI в конце текста — хорошо.",
    answer: "false",
    explain: "Анти-паттерн." }
  ,{ id: "L9-Q6", lesson: 9, block: "Ключевые слова", type: "choice",
    q: "NLP-модель Google?",
    o: ["Word2Vec", "BERT и MUM", "FastText", "GloVe"], a: 1,
    explain: "BERT и MUM." }
  ,{ id: "L10-Q1", lesson: 10, block: "Ключевые слова", type: "choice",
    q: "Что такое кластеризация ключевых слов?",
    o: ["Сортировка по алфавиту", "Группировка по смыслу/SERP", "Удаление дублей", "Перевод"], a: 1,
    explain: "Группировка по смыслу/SERP." }
  ,{ id: "L10-Q2", lesson: 10, block: "Ключевые слова", type: "boolean",
    q: "Каннибализация — одна страница сама с собой.",
    answer: "false",
    explain: "Две+ страниц одного сайта за один ключ." }
  ,{ id: "L10-Q3", lesson: 10, block: "Ключевые слова", type: "fill",
    q: "Таблица кластер→URL — это keyword ____.",
    answer: "mapping",
    explain: "Keyword mapping." }
  ,{ id: "L10-Q4", lesson: 10, block: "Ключевые слова", type: "choice",
    q: "Инструмент для кластеризации по SERP?",
    o: ["Google Docs", "Топвизор", "Notepad", "Paint"], a: 1,
    explain: "Топвизор." }
  ,{ id: "L10-Q5", lesson: 10, block: "Ключевые слова", type: "boolean",
    q: "Кластеры можно группировать по логике, SERP или ML.",
    answer: "true",
    explain: "3 метода." }
  ,{ id: "L10-Q6", lesson: 10, block: "Ключевые слова", type: "choice",
    q: "Как решить каннибализацию?",
    o: ["Удалить обе", "Объединить через 301 с дубля", "Оставить", "Создать третью"], a: 1,
    explain: "301 с дубля." }
  ,{ id: "L11-Q1", lesson: 11, block: "On-Page SEO", type: "choice",
    q: "Рекомендуемая длина Title?",
    o: ["20–30 символов", "50–65 символов", "80–100 символов", "150+"], a: 1,
    explain: "50–65 символов." }
  ,{ id: "L11-Q2", lesson: 11, block: "On-Page SEO", type: "boolean",
    q: "Title может быть одинаковым на всех страницах — нормально.",
    answer: "false",
    explain: "Анти-паттерн." }
  ,{ id: "L11-Q3", lesson: 11, block: "On-Page SEO", type: "fill",
    q: "Title — самый важный мета-____.",
    answer: "тег",
    explain: "Мета-тег." }
  ,{ id: "L11-Q4", lesson: 11, block: "On-Page SEO", type: "choice",
    q: "Формула Title для коммерческой страницы?",
    o: ["Купить слона — лучший слон 2025", "[Товар] — купить по цене от X ₽ | Бренд", "Слон слон слон", "Главная"], a: 1,
    explain: "[Товар] — купить по цене от X ₽ | Бренд." }
  ,{ id: "L11-Q5", lesson: 11, block: "On-Page SEO", type: "boolean",
    q: "Title заглавными буквами — хорошая практика.",
    answer: "false",
    explain: "Анти-паттерн." }
  ,{ id: "L11-Q6", lesson: 11, block: "On-Page SEO", type: "choice",
    q: "Где НЕ отображается Title?",
    o: ["В поиске", "Во вкладке браузера", "В RSS", "В БД сервера"], a: 3,
    explain: "В БД только хранится, не отображается." }
  ,{ id: "L12-Q1", lesson: 12, block: "On-Page SEO", type: "choice",
    q: "Длина Meta Description?",
    o: ["50–60", "80–100", "120–160", "300+"], a: 2,
    explain: "120–160 символов." }
  ,{ id: "L12-Q2", lesson: 12, block: "On-Page SEO", type: "boolean",
    q: "Google использует Description как фактор ранжирования.",
    answer: "false",
    explain: "Не использует напрямую." }
  ,{ id: "L12-Q3", lesson: 12, block: "On-Page SEO", type: "fill",
    q: "В Description добавляют CTA — Call to ____.",
    answer: "Action",
    explain: "Call to Action." }
  ,{ id: "L12-Q4", lesson: 12, block: "On-Page SEO", type: "choice",
    q: "Что если Description не подходит?",
    o: ["Удалить", "Google может переписать", "Увеличить до 300", "Сделать жирным"], a: 1,
    explain: "Google может переписать." }
  ,{ id: "L12-Q5", lesson: 12, block: "On-Page SEO", type: "boolean",
    q: "Яндекс всегда использует Description.",
    answer: "false",
    explain: "Часто игнорирует." }
  ,{ id: "L12-Q6", lesson: 12, block: "On-Page SEO", type: "choice",
    q: "Расширение Chrome для мета-тегов в поиске?",
    o: ["AdBlock", "SEOquake", "Google Docs", "Photoshop"], a: 1,
    explain: "SEOquake." }
  ,{ id: "L13-Q1", lesson: 13, block: "On-Page SEO", type: "choice",
    q: "Сколько H1 на странице?",
    o: ["Несколько", "Один", "Сколько угодно", "Только в title"], a: 1,
    explain: "Один H1." }
  ,{ id: "L13-Q2", lesson: 13, block: "On-Page SEO", type: "boolean",
    q: "В иерархии можно пропускать уровни (h2 → h4).",
    answer: "false",
    explain: "Нельзя пропускать." }
  ,{ id: "L13-Q3", lesson: 13, block: "On-Page SEO", type: "fill",
    q: "Сколько H2 рекомендуется для средней статьи? (одно число)",
    answer: "5",
    explain: "3–7, ответ 5." }
  ,{ id: "L13-Q4", lesson: 13, block: "On-Page SEO", type: "choice",
    q: "Откуда Google берёт ответ для Featured Snippet?",
    o: ["Из Title", "Из URL", "Из H2/H3 + абзац", "Из картинок"], a: 2,
    explain: "H2/H3 + абзац." }
  ,{ id: "L13-Q5", lesson: 13, block: "On-Page SEO", type: "boolean",
    q: "H1 может полностью совпадать с Title.",
    answer: "true",
    explain: "Допустимо, но лучше близкий." }
  ,{ id: "L13-Q6", lesson: 13, block: "On-Page SEO", type: "choice",
    q: "Хороший H1?",
    o: ["Главная", "Home", "Обзор iPhone 15: характеристики, цена", "Купить iphone iphone iphone"], a: 2,
    explain: "Обзор iPhone 15." }
  ,{ id: "L14-Q1", lesson: 14, block: "On-Page SEO", type: "choice",
    q: "Разделитель слов в URL?",
    o: ["_", "-", "пробел", "+"], a: 1,
    explain: "Дефис." }
  ,{ id: "L14-Q2", lesson: 14, block: "On-Page SEO", type: "boolean",
    q: "HTTPS — фактор ранжирования с 2014.",
    answer: "true",
    explain: "С 2014 года." }
  ,{ id: "L14-Q3", lesson: 14, block: "On-Page SEO", type: "fill",
    q: "Максимальная длина URL — до ____ символов.",
    answer: "90",
    explain: "До 75–90." }
  ,{ id: "L14-Q4", lesson: 14, block: "On-Page SEO", type: "choice",
    q: "Оптимальный URL?",
    o: ["/blog/post/2024/01/15/123", "/shop/product.php?id=4567", "/blog/kak-vybrat-noutbuk", "/blog/как_выбрать_ноутбук"], a: 2,
    explain: "/blog/kak-vybrat-noutbuk." }
  ,{ id: "L14-Q5", lesson: 14, block: "On-Page SEO", type: "boolean",
    q: "Глубина вложенности — до 7 кликов.",
    answer: "false",
    explain: "3–4 клика." }
  ,{ id: "L14-Q6", lesson: 14, block: "On-Page SEO", type: "choice",
    q: "ЧПУ — это?",
    o: ["Частное устройство", "Человекопонятный URL", "Чистый узел", "Частный URL"], a: 1,
    explain: "Человекопонятный URL." }
  ,{ id: "L15-Q1", lesson: 15, block: "On-Page SEO", type: "choice",
    q: "Рекомендуемый вес изображения?",
    o: ["До 50 KB", "До 100–200 KB", "До 1 MB", "До 5 MB"], a: 1,
    explain: "До 100–200 KB." }
  ,{ id: "L15-Q2", lesson: 15, block: "On-Page SEO", type: "boolean",
    q: "Для декоративных картинок alt пустой.",
    answer: "true",
    explain: "alt=\"\" — декоративные." }
  ,{ id: "L15-Q3", lesson: 15, block: "On-Page SEO", type: "fill",
    q: "Формат изображений с -25–35% к JPEG — ____.",
    answer: "WebP",
    explain: "WebP." }
  ,{ id: "L15-Q4", lesson: 15, block: "On-Page SEO", type: "choice",
    q: "Плохой alt-тег?",
    o: ["iPhone 15 Pro Max в синем", "График роста продаж", "фото", "Смартфон с экраном"], a: 2,
    explain: "«фото» — плохой." }
  ,{ id: "L15-Q5", lesson: 15, block: "On-Page SEO", type: "boolean",
    q: "title=\"...\" на изображении важен для SEO.",
    answer: "false",
    explain: "Не влияет на SEO." }
  ,{ id: "L15-Q6", lesson: 15, block: "On-Page SEO", type: "choice",
    q: "Lazy loading?",
    o: ["display:none", "loading=\"lazy\"", "position:absolute", "visibility:hidden"], a: 1,
    explain: "loading=\"lazy\"." }
  ,{ id: "L16-Q1", lesson: 16, block: "On-Page SEO", type: "choice",
    q: "Зачем внутренняя перелинковка?",
    o: ["Для красоты", "PageRank, индексация, UX, якорная семантика", "Увеличение рекламы", "Снижение трафика"], a: 1,
    explain: "4 причины." }
  ,{ id: "L16-Q2", lesson: 16, block: "On-Page SEO", type: "boolean",
    q: "Точные вхождения в анкорах безопасны.",
    answer: "false",
    explain: "Google считает манипуляцией." }
  ,{ id: "L16-Q3", lesson: 16, block: "On-Page SEO", type: "fill",
    q: "Сколько внутренних ссылок на странице? (одно число)",
    answer: "5",
    explain: "3–10, ответ 5." }
  ,{ id: "L16-Q4", lesson: 16, block: "On-Page SEO", type: "choice",
    q: "Анкор «здесь» — какой?",
    o: ["Точное вхождение", "Безанкорный", "Брендовый", "URL-анкор"], a: 1,
    explain: "Безанкорный." }
  ,{ id: "L16-Q5", lesson: 16, block: "On-Page SEO", type: "boolean",
    q: "Google рекомендует до 100–150 ссылок на страницу.",
    answer: "true",
    explain: "Рекомендация Google." }
  ,{ id: "L16-Q6", lesson: 16, block: "On-Page SEO", type: "choice",
    q: "Модель: главная-хаб ссылается на все статьи?",
    o: ["Silo", "Hub-spoke", "Random", "Flat"], a: 1,
    explain: "Hub-spoke." }
  ,{ id: "L17-Q1", lesson: 17, block: "On-Page SEO", type: "choice",
    q: "Формат Schema, рекомендуемый Google?",
    o: ["Microdata", "RDFa", "JSON-LD", "XML"], a: 2,
    explain: "JSON-LD." }
  ,{ id: "L17-Q2", lesson: 17, block: "On-Page SEO", type: "boolean",
    q: "Schema может не соответствовать видимому контенту — нормально.",
    answer: "false",
    explain: "Ошибка." }
  ,{ id: "L17-Q3", lesson: 17, block: "On-Page SEO", type: "choice",
    q: "Тип Schema для FAQ?",
    o: ["Article", "FAQPage", "HowTo", "Product"], a: 1,
    explain: "FAQPage." }
  ,{ id: "L17-Q4", lesson: 17, block: "On-Page SEO", type: "boolean",
    q: "@context всегда равен «https://schema.org».",
    answer: "true",
    explain: "Стандарт." }
  ,{ id: "L17-Q5", lesson: 17, block: "On-Page SEO", type: "choice",
    q: "Где проверить валидность Schema?",
    o: ["Google Rich Results Test", "Google Search", "Wikipedia", "Соцсети"], a: 0,
    explain: "Google Rich Results Test." }
  ,{ id: "L17-Q6", lesson: 17, block: "On-Page SEO", type: "fill",
    q: "Schema.org — ____ семантической разметки.",
    answer: "стандарт",
    explain: "Стандарт." }
  ,{ id: "L18-Q1", lesson: 18, block: "On-Page SEO", type: "choice",
    q: "Главный принцип современного SEO по тексту?",
    o: ["Спамь ключами", "Пишите для людей, оптимизируйте для машин", "Минимум текста", "Только числа"], a: 1,
    explain: "Пишите для людей." }
  ,{ id: "L18-Q2", lesson: 18, block: "On-Page SEO", type: "boolean",
    q: "Плотность ключей 2–3% — обязательное требование.",
    answer: "false",
    explain: "Устаревшее мнение." }
  ,{ id: "L18-Q3", lesson: 18, block: "On-Page SEO", type: "fill",
    q: "Академическая тошнота >____% — переспам.",
    answer: "15",
    explain: ">15% — переспам." }
  ,{ id: "L18-Q4", lesson: 18, block: "On-Page SEO", type: "choice",
    q: "Длина информационной статьи?",
    o: ["300–500 слов", "800–1200", "1500–3000", "50–100"], a: 2,
    explain: "1500–3000." }
  ,{ id: "L18-Q5", lesson: 18, block: "On-Page SEO", type: "boolean",
    q: "Белый шрифт на белом фоне — хороший способ.",
    answer: "false",
    explain: "Переоптимизация." }
  ,{ id: "L18-Q6", lesson: 18, block: "On-Page SEO", type: "choice",
    q: "Где ключ обязательно?",
    o: ["Только в title", "В H1, Title, URL", "Только в первом абзаце", "Только в alt"], a: 1,
    explain: "H1, Title, URL." }
  ,{ id: "L19-Q1", lesson: 19, block: "Technical SEO", type: "choice",
    q: "robots.txt запрещает:",
    o: ["Индексирование", "Сканирование", "Показ в выдаче", "Клики"], a: 1,
    explain: "Запрещает сканирование." }
  ,{ id: "L19-Q2", lesson: 19, block: "Technical SEO", type: "boolean",
    q: "CSS и JS можно закрывать в robots.txt.",
    answer: "false",
    explain: "Google не отрендерит страницу." }
  ,{ id: "L19-Q3", lesson: 19, block: "Technical SEO", type: "fill",
    q: "Директива ____ запрещает путь.",
    answer: "Disallow",
    explain: "Disallow." }
  ,{ id: "L19-Q4", lesson: 19, block: "Technical SEO", type: "choice",
    q: "User-agent: * означает?",
    o: ["Только Google", "Только Яндекс", "Для всех роботов", "Для пользователей"], a: 2,
    explain: "Для всех роботов." }
  ,{ id: "L19-Q5", lesson: 19, block: "Technical SEO", type: "boolean",
    q: "Регистр важен в robots.txt.",
    answer: "true",
    explain: "/Admin/ ≠ /admin/." }
  ,{ id: "L19-Q6", lesson: 19, block: "Technical SEO", type: "choice",
    q: "Критическая ошибка в robots.txt?",
    o: ["Закрыть /admin/", "Disallow: /", "Закрыть /tmp/", "Закрыть /cgi-bin/"], a: 1,
    explain: "Disallow: / — сайт исчезнет." }
  ,{ id: "L20-Q1", lesson: 20, block: "Technical SEO", type: "choice",
    q: "Где должен быть sitemap.xml?",
    o: ["/sitemap/", "/sitemap.xml", "/site/", "/map.xml"], a: 1,
    explain: "/sitemap.xml." }
  ,{ id: "L20-Q2", lesson: 20, block: "Technical SEO", type: "boolean",
    q: "Google учитывает <priority> в sitemap.",
    answer: "false",
    explain: "Google игнорирует." }
  ,{ id: "L20-Q3", lesson: 20, block: "Technical SEO", type: "fill",
    q: "Максимум ____ URL в sitemap.",
    answer: "50000",
    explain: "50 000 URL." }
  ,{ id: "L20-Q4", lesson: 20, block: "Technical SEO", type: "choice",
    q: "Что НЕ включать в sitemap?",
    o: ["Канонические URL", "404 страницы", "Публичные страницы", "Уникальные"], a: 1,
    explain: "404 — не включать." }
  ,{ id: "L20-Q5", lesson: 20, block: "Technical SEO", type: "boolean",
    q: "Sitemap index для маленьких сайтов.",
    answer: "false",
    explain: "Для больших." }
  ,{ id: "L20-Q6", lesson: 20, block: "Technical SEO", type: "choice",
    q: "Куда добавить sitemap?",
    o: ["robots.txt + GSC", "Только Я.Вебмастер", "В sitemap_index", "Никуда"], a: 0,
    explain: "robots.txt + GSC." }
  ,{ id: "L21-Q1", lesson: 21, block: "Technical SEO", type: "choice",
    q: "Что такое Canonical?",
    o: ["Любой URL", "Главная версия страницы", "Самый короткий URL", "URL с параметрами"], a: 1,
    explain: "Главная версия." }
  ,{ id: "L21-Q2", lesson: 21, block: "Technical SEO", type: "boolean",
    q: "Canonical можно указывать как относительный URL.",
    answer: "false",
    explain: "Нужен абсолютный." }
  ,{ id: "L21-Q3", lesson: 21, block: "Technical SEO", type: "fill",
    q: "<link rel=\"____\" href=\"...\" /> — для canonical.",
    answer: "canonical",
    explain: "canonical." }
  ,{ id: "L21-Q4", lesson: 21, block: "Technical SEO", type: "choice",
    q: "Когда 301 вместо canonical?",
    o: ["Для дублей", "Когда страница переехала навсегда", "Для уникального контента", "Никогда"], a: 1,
    explain: "301 при переезде." }
  ,{ id: "L21-Q5", lesson: 21, block: "Technical SEO", type: "boolean",
    q: "Несколько canonical — нормально.",
    answer: "false",
    explain: "Ошибка." }
  ,{ id: "L21-Q6", lesson: 21, block: "Technical SEO", type: "choice",
    q: "Инструмент поиска дублей контента?",
    o: ["Siteliner", "Screaming Frog", "Google Search", "Notepad"], a: 0,
    explain: "Siteliner." }
  ,{ id: "L22-Q1", lesson: 22, block: "Technical SEO", type: "choice",
    q: "HTTP-код «страница не найдена»?",
    o: ["200", "301", "404", "500"], a: 2,
    explain: "404." }
  ,{ id: "L22-Q2", lesson: 22, block: "Technical SEO", type: "boolean",
    q: "302 — постоянный редирект, передаёт PageRank.",
    answer: "false",
    explain: "302 — временный, не передаёт полный PageRank." }
  ,{ id: "L22-Q3", lesson: 22, block: "Technical SEO", type: "fill",
    q: "Код ____ — постоянный редирект.",
    answer: "301",
    explain: "301." }
  ,{ id: "L22-Q4", lesson: 22, block: "Technical SEO", type: "choice",
    q: "Что такое Soft 404?",
    o: ["Настоящий 404", "HTTP 200, но пустая", "С 301 редиректом", "С 503"], a: 1,
    explain: "200, но пустая." }
  ,{ id: "L22-Q5", lesson: 22, block: "Technical SEO", type: "boolean",
    q: "Каждый редирект теряет 5–7% PageRank.",
    answer: "false",
    explain: "~10–15%." }
  ,{ id: "L22-Q6", lesson: 22, block: "Technical SEO", type: "choice",
    q: "Когда использовать 410?",
    o: ["Временный даунтайм", "Удалена навсегда, редирект не нужен", "Переезд на домен", "HTTP→HTTPS"], a: 1,
    explain: "410 Gone." }
  ,{ id: "L23-Q1", lesson: 23, block: "Technical SEO", type: "choice",
    q: "Хорошее значение LCP?",
    o: ["≤ 1 сек", "≤ 2.5 сек", "≤ 5 сек", "≤ 10 сек"], a: 1,
    explain: "≤ 2.5 сек." }
  ,{ id: "L23-Q2", lesson: 23, block: "Technical SEO", type: "boolean",
    q: "FID заменён на INP с 2024.",
    answer: "true",
    explain: "INP с 2024." }
  ,{ id: "L23-Q3", lesson: 23, block: "Technical SEO", type: "fill",
    q: "Хорошее значение CLS — ≤ ____.",
    answer: "0.1",
    explain: "≤ 0.1." }
  ,{ id: "L23-Q4", lesson: 23, block: "Technical SEO", type: "choice",
    q: "Инструмент для Core Web Vitals?",
    o: ["Google PageSpeed Insights", "Google Docs", "Photoshop", "Paint"], a: 0,
    explain: "PageSpeed Insights." }
  ,{ id: "L23-Q5", lesson: 23, block: "Technical SEO", type: "boolean",
    q: "Хорошее INP — ≤ 500 мс.",
    answer: "false",
    explain: "≤ 200 мс." }
  ,{ id: "L23-Q6", lesson: 23, block: "Technical SEO", type: "choice",
    q: "Шрифтовой трюк для FOUT?",
    o: ["font-display: swap", "font-weight: bold", "font-size: 0", "font-style: italic"], a: 0,
    explain: "font-display: swap." }
  ,{ id: "L24-Q1", lesson: 24, block: "Technical SEO", type: "choice",
    q: "Какой подход к мобильной версии рекомендует Google?",
    o: ["m. сайт", "Responsive Design", "Dynamic Serving", "Не важен"], a: 1,
    explain: "Responsive Design." }
  ,{ id: "L24-Q2", lesson: 24, block: "Technical SEO", type: "boolean",
    q: "Mobile-first — Google индексирует десктоп.",
    answer: "false",
    explain: "Индексирует мобильную." }
  ,{ id: "L24-Q3", lesson: 24, block: "Technical SEO", type: "fill",
    q: "Минимальный размер тапабельного элемента — ____ px.",
    answer: "44",
    explain: "44×44 px." }
  ,{ id: "L24-Q4", lesson: 24, block: "Technical SEO", type: "choice",
    q: "Что такое Intrusive Interstitials?",
    o: ["Красивый дизайн", "Навязчивые межстраничные баннеры", "Полезный контент", "Схема"], a: 1,
    explain: "Навязчивые баннеры." }
  ,{ id: "L24-Q5", lesson: 24, block: "Technical SEO", type: "boolean",
    q: "AMP даёт преимущества с 2021.",
    answer: "false",
    explain: "Не даёт преимуществ." }
  ,{ id: "L24-Q6", lesson: 24, block: "Technical SEO", type: "choice",
    q: "Meta-тег для адаптивного дизайна?",
    o: ["charset", "viewport", "robots", "description"], a: 1,
    explain: "viewport." }
  ,{ id: "L25-Q1", lesson: 25, block: "Technical SEO", type: "choice",
    q: "Бесплатный SSL-провайдер?",
    o: ["Comodo", "DigiCert", "Let's Encrypt", "Symantec"], a: 2,
    explain: "Let's Encrypt." }
  ,{ id: "L25-Q2", lesson: 25, block: "Technical SEO", type: "boolean",
    q: "HSTS можно включать до перехода на HTTPS.",
    answer: "false",
    explain: "Только после." }
  ,{ id: "L25-Q3", lesson: 25, block: "Technical SEO", type: "fill",
    q: "HTTPS-страница с HTTP-ресурсами — ____ content.",
    answer: "Mixed",
    explain: "Mixed Content." }
  ,{ id: "L25-Q4", lesson: 25, block: "Technical SEO", type: "choice",
    q: "Код для перехода HTTP→HTTPS?",
    o: ["301", "302", "307", "404"], a: 0,
    explain: "301." }
  ,{ id: "L25-Q5", lesson: 25, block: "Technical SEO", type: "boolean",
    q: "Self-signed сертификат подходит для продакшена.",
    answer: "false",
    explain: "Только для тестирования." }
  ,{ id: "L25-Q6", lesson: 25, block: "Technical SEO", type: "choice",
    q: "WAF — это?",
    o: ["Wide Area File", "Web Application Firewall", "Web Address Format", "Wildcard Access"], a: 1,
    explain: "Web Application Firewall." }
  ,{ id: "L26-Q1", lesson: 26, block: "Technical SEO", type: "choice",
    q: "Лучшее решение для пагинации?",
    o: ["rel=next/prev", "View All (одна страница)", "Canonical на первую", "Noindex"], a: 1,
    explain: "View All." }
  ,{ id: "L26-Q2", lesson: 26, block: "Technical SEO", type: "boolean",
    q: "Google использует rel=\"next\"/\"prev\" как сигнал.",
    answer: "false",
    explain: "Не использует с 2019." }
  ,{ id: "L26-Q3", lesson: 26, block: "Technical SEO", type: "fill",
    q: "Для страниц 2+ хороший компромисс — noindex, ____.",
    answer: "follow",
    explain: "noindex, follow." }
  ,{ id: "L26-Q4", lesson: 26, block: "Technical SEO", type: "choice",
    q: "Что такое Near-duplicate?",
    o: ["Точная копия", "Почти одинаковый (~80%+)", "Уникальный", "Переведённый"], a: 1,
    explain: "~80%+." }
  ,{ id: "L26-Q5", lesson: 26, block: "Technical SEO", type: "boolean",
    q: "Syndication может быть источником дублей.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L26-Q6", lesson: 26, block: "Technical SEO", type: "choice",
    q: "Как бороться с дублями?",
    o: ["Никак", "Canonical, 301, robots.txt", "Удалить всё", "Переименовать URL"], a: 1,
    explain: "Все вместе." }
  ,{ id: "L27-Q1", lesson: 27, block: "Контент", type: "choice",
    q: "Что такое E-E-A-T?",
    o: ["Easy, Effective, Accessible, Technical", "Experience, Expertise, Authoritativeness, Trustworthiness", "Editorial, Engagement, Authority, Traffic", "Engagement, Expertise, Analytics, Trust"], a: 1,
    explain: "Experience, Expertise, Authoritativeness, Trustworthiness." }
  ,{ id: "L27-Q2", lesson: 27, block: "Контент", type: "boolean",
    q: "E-E-A-T критичен для YMYL.",
    answer: "true",
    explain: "Критичен для YMYL." }
  ,{ id: "L27-Q3", lesson: 27, block: "Контент", type: "fill",
    q: "YMYL — Your Money or Your ____.",
    answer: "Life",
    explain: "Life." }
  ,{ id: "L27-Q4", lesson: 27, block: "Контент", type: "choice",
    q: "Что НЕ относится к Trustworthiness?",
    o: ["HTTPS", "Контакты", "Политика", "Регулярные публикации без ссылок"], a: 3,
    explain: "Без источников — не сигнал." }
  ,{ id: "L27-Q5", lesson: 27, block: "Контент", type: "boolean",
    q: "Купленные сертификаты помогают E-E-A-T.",
    answer: "false",
    explain: "Не работает." }
  ,{ id: "L27-Q6", lesson: 27, block: "Контент", type: "choice",
    q: "Что должно быть на странице автора?",
    o: ["Только имя", "Фото, bio, образование, соцсети, публикации", "Только email", "Только фото"], a: 1,
    explain: "Все вместе." }
  ,{ id: "L28-Q1", lesson: 28, block: "Контент", type: "choice",
    q: "Что такое pillar page?",
    o: ["Тонкая страница", "Главная страница силоса", "Страница 404", "Только для мобильных"], a: 1,
    explain: "Главная страница силоса." }
  ,{ id: "L28-Q2", lesson: 28, block: "Контент", type: "boolean",
    q: "Силос — все ссылки только внутри «колонца».",
    answer: "true",
    explain: "Да." }
  ,{ id: "L28-Q3", lesson: 28, block: "Контент", type: "fill",
    q: "Cluster articles имеют объём ____–____ слов.",
    answer: "800-2500",
    explain: "800–2500." }
  ,{ id: "L28-Q4", lesson: 28, block: "Контент", type: "choice",
    q: "Длина pillar page?",
    o: ["300–500", "1000–2000", "3000–10000", "50"], a: 2,
    explain: "3000–10000." }
  ,{ id: "L28-Q5", lesson: 28, block: "Контент", type: "boolean",
    q: "Силосы должны пересекаться часто.",
    answer: "false",
    explain: "Минимально." }
  ,{ id: "L28-Q6", lesson: 28, block: "Контент", type: "choice",
    q: "Структура pillar?",
    o: ["Intro, оглавление, подразделы, ссылки, заключение + CTA", "Только H1", "Только картинки", "Только видео"], a: 0,
    explain: "5 блоков." }
  ,{ id: "L29-Q1", lesson: 29, block: "Контент", type: "choice",
    q: "Что такое thin content?",
    o: ["Слишком длинный текст", "Минимальный или бесполезный контент", "Только изображения", "Только видео"], a: 1,
    explain: "Бесполезный контент." }
  ,{ id: "L29-Q2", lesson: 29, block: "Контент", type: "boolean",
    q: "Google Panda с 2011 борется с тонким контентом.",
    answer: "true",
    explain: "Panda с 2011." }
  ,{ id: "L29-Q3", lesson: 29, block: "Контент", type: "fill",
    q: "Минимум ____ слов для страницы.",
    answer: "300",
    explain: "300–500." }
  ,{ id: "L29-Q4", lesson: 29, block: "Контент", type: "choice",
    q: "Алгоритм против doorway pages?",
    o: ["Penguin", "Panda", "BERT", "Hummingbird"], a: 1,
    explain: "Panda." }
  ,{ id: "L29-Q5", lesson: 29, block: "Контент", type: "boolean",
    q: "Бесполезную страницу лучше дополнить 100 словами.",
    answer: "false",
    explain: "Лучше удалить (410) или 301." }
  ,{ id: "L29-Q6", lesson: 29, block: "Контент", type: "choice",
    q: "Что делать с близкими дублями?",
    o: ["Оставить", "Объединить через 301", "Спрятать", "Удалить всё"], a: 1,
    explain: "301 со старых на новую." }
  ,{ id: "L30-Q1", lesson: 30, block: "Контент", type: "choice",
    q: "Что такое content brief?",
    o: ["Готовый текст", "ТЗ для копирайтера", "Чек-лист публикации", "Список ключей"], a: 1,
    explain: "ТЗ для копирайтера." }
  ,{ id: "L30-Q2", lesson: 30, block: "Контент", type: "boolean",
    q: "Хороший brief снижает количество переделок.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L30-Q3", lesson: 30, block: "Контент", type: "fill",
    q: "Сколько LSI в brief: 1 главный + ____–____.",
    answer: "5-15",
    explain: "5–15." }
  ,{ id: "L30-Q4", lesson: 30, block: "Контент", type: "choice",
    q: "Что обязательно в brief?",
    o: ["Только ключи", "Title, Description, H1, H2/H3, FAQ, CTA", "Только текст", "Только картинки"], a: 1,
    explain: "Все блоки." }
  ,{ id: "L30-Q5", lesson: 30, block: "Контент", type: "boolean",
    q: "В brief указывают требования к стилю.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L30-Q6", lesson: 30, block: "Контент", type: "choice",
    q: "Сколько внутренних ссылок в brief?",
    o: ["0", "1–2", "3–5", "100"], a: 2,
    explain: "3–5." }
  ,{ id: "L31-Q1", lesson: 31, block: "Контент", type: "choice",
    q: "Зачем обновлять контент?",
    o: ["Ради обновления", "Freshness, новые данные, новые ключи", "Только ради даты", "Только для красоты"], a: 1,
    explain: "5 причин." }
  ,{ id: "L31-Q2", lesson: 31, block: "Контент", type: "boolean",
    q: "Топовые материалы обновлять раз в 6–12 месяцев.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L31-Q3", lesson: 31, block: "Контент", type: "fill",
    q: "Сигнал свежести учитывает Schema.org ____.",
    answer: "dateModified",
    explain: "dateModified." }
  ,{ id: "L31-Q4", lesson: 31, block: "Контент", type: "choice",
    q: "Что НЕ обновлять при refresh?",
    o: ["Title/Description", "Данные", "Слова без причины", "Schema dateModified"], a: 2,
    explain: "Просто объём не помогает." }
  ,{ id: "L31-Q5", lesson: 31, block: "Контент", type: "boolean",
    q: "Глубокий rewrite — добавление 500–1000 слов.",
    answer: "false",
    explain: "Полная переработка, 2x–3x." }
  ,{ id: "L31-Q6", lesson: 31, block: "Контент", type: "choice",
    q: "Когда лучше удалить?",
    o: ["Никогда", "Если не приносит пользы после обновления", "Всегда удалять", "Только при 404"], a: 1,
    explain: "410 или объединить." }
  ,{ id: "L32-Q1", lesson: 32, block: "Контент", type: "choice",
    q: "Что такое Skyscraper Technique?",
    o: ["Снос зданий", "Сделать лучше топового конкурента", "Создание с нуля", "Удаление страниц"], a: 1,
    explain: "Лучше, чем у конкурента." }
  ,{ id: "L32-Q2", lesson: 32, block: "Контент", type: "boolean",
    q: "Лучше часто и плохо, чем реже и качественно.",
    answer: "false",
    explain: "Наоборот." }
  ,{ id: "L32-Q3", lesson: 32, block: "Контент", type: "fill",
    q: "Хороший ритм — ____–____ статьи в месяц.",
    answer: "1-4",
    explain: "1–4." }
  ,{ id: "L32-Q4", lesson: 32, block: "Контент", type: "choice",
    q: "Comparison — это?",
    o: ["How-to", "X vs Y", "Listicle", "Behind the scenes"], a: 1,
    explain: "X vs Y." }
  ,{ id: "L32-Q5", lesson: 32, block: "Контент", type: "boolean",
    q: "Блог помогает SEO через long-tail, перелинковку, авторитет.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L32-Q6", lesson: 32, block: "Контент", type: "choice",
    q: "Где брать идеи?",
    o: ["Только из головы", "Кластеры, PAA, конкуренты, форумы, отзывы, email", "Только из книг", "Только из рекламы"], a: 1,
    explain: "6 источников." }
  ,{ id: "L33-Q1", lesson: 33, block: "Off-Page SEO", type: "choice",
    q: "Что такое бэклинк?",
    o: ["Ссылка внутри сайта", "Входящая ссылка с другого сайта", "Картинка", "Мета-тег"], a: 1,
    explain: "Входящая с другого сайта." }
  ,{ id: "L33-Q2", lesson: 33, block: "Off-Page SEO", type: "boolean",
    q: "Dofollow и nofollow одинаково влияют.",
    answer: "true",
    explain: "Google анализирует по сути." }
  ,{ id: "L33-Q3", lesson: 33, block: "Off-Page SEO", type: "fill",
    q: "Яндекс не учитывает ____-атрибут.",
    answer: "nofollow",
    explain: "nofollow." }
  ,{ id: "L33-Q4", lesson: 33, block: "Off-Page SEO", type: "choice",
    q: "% брендовых анкоров?",
    o: ["5–10%", "10–15%", "30–50%", "80%"], a: 2,
    explain: "30–50%." }
  ,{ id: "L33-Q5", lesson: 33, block: "Off-Page SEO", type: "boolean",
    q: "ИКС — метрика от Яндекса.",
    answer: "true",
    explain: "ИКС — Яндекс." }
  ,{ id: "L33-Q6", lesson: 33, block: "Off-Page SEO", type: "choice",
    q: "Где ссылка наиболее ценна?",
    o: ["В скрытом блоке", "В сайдбаре", "Внутри контента", "В комментариях"], a: 2,
    explain: "Внутри контента." }
  ,{ id: "L34-Q1", lesson: 34, block: "Off-Page SEO", type: "choice",
    q: "Guest Posting — это?",
    o: ["Покупка ссылок", "Статья для чужого блога в обмен на ссылку", "Спам", "Обмен"], a: 1,
    explain: "Статья для чужого блога." }
  ,{ id: "L34-Q2", lesson: 34, block: "Off-Page SEO", type: "boolean",
    q: "PBN — рекомендуемая стратегия.",
    answer: "false",
    explain: "Нет." }
  ,{ id: "L34-Q3", lesson: 34, block: "Off-Page SEO", type: "fill",
    q: "Метод Брайана Дина — ____ + Outreach.",
    answer: "Skyscraper",
    explain: "Skyscraper." }
  ,{ id: "L34-Q4", lesson: 34, block: "Off-Page SEO", type: "choice",
    q: "Найти битую ссылку конкурента и предложить аналог?",
    o: ["Guest Posting", "Broken Link Building", "Skyscraper", "HARO"], a: 1,
    explain: "Broken Link Building." }
  ,{ id: "L34-Q5", lesson: 34, block: "Off-Page SEO", type: "boolean",
    q: "HARO даёт ссылки с авторитетных СМИ.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L34-Q6", lesson: 34, block: "Off-Page SEO", type: "choice",
    q: "Инструмент поиска email?",
    o: ["Hunter.io", "Google Docs", "Paint", "Photoshop"], a: 0,
    explain: "Hunter.io." }
  ,{ id: "L35-Q1", lesson: 35, block: "Off-Page SEO", type: "choice",
    q: "Токсичные ссылки — откуда?",
    o: ["С качественных", "Спам, фильтры, дорвеи, PBN", "Только nofollow", "Только внутренние"], a: 1,
    explain: "С плохих сайтов." }
  ,{ id: "L35-Q2", lesson: 35, block: "Off-Page SEO", type: "boolean",
    q: "Disavow нужен для каждой плохой ссылки.",
    answer: "false",
    explain: "Массовый спам." }
  ,{ id: "L35-Q3", lesson: 35, block: "Off-Page SEO", type: "fill",
    q: "Negative ____ — спам ссылками.",
    answer: "SEO",
    explain: "Negative SEO." }
  ,{ id: "L35-Q4", lesson: 35, block: "Off-Page SEO", type: "choice",
    q: "URL Disavow Tool?",
    o: ["search.google.com/search-console/disavow-links", "Google Search", "Maps", "Ads"], a: 0,
    explain: "Disavow Tool." }
  ,{ id: "L35-Q5", lesson: 35, block: "Off-Page SEO", type: "boolean",
    q: "У Яндекса есть Disavow.",
    answer: "false",
    explain: "Нет." }
  ,{ id: "L35-Q6", lesson: 35, block: "Off-Page SEO", type: "choice",
    q: "Когда Disavow?",
    o: ["Всегда", "Массовый спам, Negative SEO", "Только nofollow", "Никогда"], a: 1,
    explain: "Массовый спам." }
  ,{ id: "L36-Q1", lesson: 36, block: "Специализированное SEO", type: "choice",
    q: "Что такое лендинг?",
    o: ["Страница с одной конкретной целью", "Любая страница", "Только главная", "Только блог"], a: 0,
    explain: "Одна цель." }
  ,{ id: "L36-Q2", lesson: 36, block: "Специализированное SEO", type: "boolean",
    q: "Лендинг для SEO — 200–500 слов.",
    answer: "false",
    explain: "1000–2500." }
  ,{ id: "L36-Q3", lesson: 36, block: "Специализированное SEO", type: "fill",
    q: "Минимум ____ слов на лендинге для SEO.",
    answer: "800",
    explain: "800+." }
  ,{ id: "L36-Q4", lesson: 36, block: "Специализированное SEO", type: "choice",
    q: "Что обязательно на лендинге?",
    o: ["Только видео", "FAQ с Schema", "Только отзывы", "Только форма"], a: 1,
    explain: "FAQ с Schema." }
  ,{ id: "L36-Q5", lesson: 36, block: "Специализированное SEO", type: "boolean",
    q: "Одной формы внизу достаточно.",
    answer: "false",
    explain: "CTA в нескольких местах." }
  ,{ id: "L36-Q6", lesson: 36, block: "Специализированное SEO", type: "choice",
    q: "Рекомендуемый PageSpeed?",
    o: [">30", ">50", ">70", ">95"], a: 2,
    explain: ">70." }
  ,{ id: "L37-Q1", lesson: 37, block: "Специализированное SEO", type: "choice",
    q: "Что критично для карточки товара?",
    o: ["Только цена", "Описание, характеристики, фото, отзывы, Schema/Product", "Только фото", "Только название"], a: 1,
    explain: "Все вместе." }
  ,{ id: "L37-Q2", lesson: 37, block: "Специализированное SEO", type: "boolean",
    q: "Дубли от фильтров — нормально.",
    answer: "false",
    explain: "Закрывать." }
  ,{ id: "L37-Q3", lesson: 37, block: "Специализированное SEO", type: "fill",
    q: "Описание категории — ____–____ слов.",
    answer: "500-1500",
    explain: "500–1500." }
  ,{ id: "L37-Q4", lesson: 37, block: "Специализированное SEO", type: "choice",
    q: "Лучший подход к фильтрации?",
    o: ["Каждый фильтр — URL", "JS-фильтрация без URL", "Canonical на главную", "Noindex для всех"], a: 1,
    explain: "JS-фильтрация." }
  ,{ id: "L37-Q5", lesson: 37, block: "Специализированное SEO", type: "boolean",
    q: "404 — лучший код для удалённых товаров.",
    answer: "false",
    explain: "301." }
  ,{ id: "L37-Q6", lesson: 37, block: "Специализированное SEO", type: "choice",
    q: "Schema для товара?",
    o: ["Article", "Product", "FAQPage", "HowTo"], a: 1,
    explain: "Product." }
  ,{ id: "L38-Q1", lesson: 38, block: "Локальное SEO", type: "choice",
    q: "NAP — это?",
    o: ["Network Access Point", "Name, Address, Phone", "New Algorithm Process", "Native App Protocol"], a: 1,
    explain: "Name, Address, Phone." }
  ,{ id: "L38-Q2", lesson: 38, block: "Локальное SEO", type: "boolean",
    q: "NAP единообразен на сайте и в каталогах.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L38-Q3", lesson: 38, block: "Локальное SEO", type: "fill",
    q: "Local Pack — ____ места + карта.",
    answer: "3",
    explain: "3 места." }
  ,{ id: "L38-Q4", lesson: 38, block: "Локальное SEO", type: "choice",
    q: "Schema для локального бизнеса?",
    o: ["Article", "LocalBusiness", "Product", "HowTo"], a: 1,
    explain: "LocalBusiness." }
  ,{ id: "L38-Q5", lesson: 38, block: "Локальное SEO", type: "boolean",
    q: "«Москва, ул. Тверская, 1» и «г. Москва, Тверская ул., дом 1» — одинаковый NAP.",
    answer: "false",
    explain: "Разный формат — плохо." }
  ,{ id: "L38-Q6", lesson: 38, block: "Локальное SEO", type: "choice",
    q: "Где упоминать город?",
    o: ["Только в footer", "В Title, H1, тексте", "Только в URL", "Нигде"], a: 1,
    explain: "В Title, H1, тексте." }
  ,{ id: "L39-Q1", lesson: 39, block: "Локальное SEO", type: "choice",
    q: "Что такое Google Business Profile?",
    o: ["Рекламный кабинет", "Бесплатный профиль компании в Google", "Только отзывы", "Только карта"], a: 1,
    explain: "Бесплатный профиль." }
  ,{ id: "L39-Q2", lesson: 39, block: "Локальное SEO", type: "boolean",
    q: "Можно добавлять ключи в название GBP.",
    answer: "false",
    explain: "Google штрафует." }
  ,{ id: "L39-Q3", lesson: 39, block: "Локальное SEO", type: "fill",
    q: "Дополнительных категорий GBP — до ____.",
    answer: "9",
    explain: "До 9." }
  ,{ id: "L39-Q4", lesson: 39, block: "Локальное SEO", type: "choice",
    q: "Длина описания GBP?",
    o: ["150", "500", "750", "1500"], a: 2,
    explain: "750 символов." }
  ,{ id: "L39-Q5", lesson: 39, block: "Локальное SEO", type: "boolean",
    q: "В GBP отвечать только на плохие отзывы.",
    answer: "false",
    explain: "На все." }
  ,{ id: "L39-Q6", lesson: 39, block: "Локальное SEO", type: "choice",
    q: "Частота постов в GBP?",
    o: ["Раз в месяц", "1+ пост в неделю", "Раз в год", "Никогда"], a: 1,
    explain: "1+ в неделю." }
  ,{ id: "L40-Q1", lesson: 40, block: "Локальное SEO", type: "choice",
    q: "Минимальный рейтинг GBP?",
    o: ["3.0", "4.0", "4.5+", "5.0"], a: 2,
    explain: "4.5+." }
  ,{ id: "L40-Q2", lesson: 40, block: "Локальное SEO", type: "boolean",
    q: "Google разрешает покупать отзывы.",
    answer: "false",
    explain: "Запрещает." }
  ,{ id: "L40-Q3", lesson: 40, block: "Локальное SEO", type: "fill",
    q: "Отвечать на отзывы в ____–____ дней.",
    answer: "1-3",
    explain: "1–3 дня." }
  ,{ id: "L40-Q4", lesson: 40, block: "Локальное SEO", type: "choice",
    q: "Распределение отзывов?",
    o: ["100% 5★", "80% 5★, 15% 4★, 5% 3★", "50/50", "100% 1★"], a: 1,
    explain: "Естественное." }
  ,{ id: "L40-Q5", lesson: 40, block: "Локальное SEO", type: "boolean",
    q: "Удалять плохие отзывы — норма.",
    answer: "false",
    explain: "Подозрительно." }
  ,{ id: "L40-Q6", lesson: 40, block: "Локальное SEO", type: "choice",
    q: "Где ещё собирать отзывы?",
    o: ["Нигде", "Яндекс.Бизнес, Zoon, каталоги", "Только в соцсетях", "Только на сайте"], a: 1,
    explain: "Много площадок." }
  ,{ id: "L41-Q1", lesson: 41, block: "Аналитика", type: "choice",
    q: "Главный отчёт GSC?",
    o: ["Покрытие", "Производительность", "Ссылки", "Безопасность"], a: 1,
    explain: "Performance." }
  ,{ id: "L41-Q2", lesson: 41, block: "Аналитика", type: "boolean",
    q: "GSC показывает точные позиции по ключам.",
    answer: "false",
    explain: "Только средняя." }
  ,{ id: "L41-Q3", lesson: 41, block: "Аналитика", type: "fill",
    q: "Отчёт GSC «____» — статус индексации.",
    answer: "Покрытие",
    explain: "Покрытие." }
  ,{ id: "L41-Q4", lesson: 41, block: "Аналитика", type: "choice",
    q: "«Crawled but not indexed» означает?",
    o: ["Не найден", "Сканирован, но не в индексе", "В индексе", "Закрыт в robots"], a: 1,
    explain: "Сканирован, но не в индексе." }
  ,{ id: "L41-Q5", lesson: 41, block: "Аналитика", type: "boolean",
    q: "URL Inspection позволяет запросить переиндексацию.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L41-Q6", lesson: 41, block: "Аналитика", type: "choice",
    q: "Как связать GSC и GA4?",
    o: ["Никак", "GA4 → Администратор → Связь с Search Console", "Только через API", "Через robots.txt"], a: 1,
    explain: "Связь в GA4." }
  ,{ id: "L42-Q1", lesson: 42, block: "Аналитика", type: "choice",
    q: "Яндекс.Вебмастер — это?",
    o: ["Рекламный кабинет", "Аналог GSC от Яндекса", "Только аналитика", "Только карты"], a: 1,
    explain: "Аналог GSC." }
  ,{ id: "L42-Q2", lesson: 42, block: "Аналитика", type: "boolean",
    q: "В Яндекс.Вебмастере есть «Оригинальные тексты».",
    answer: "true",
    explain: "Есть." }
  ,{ id: "L42-Q3", lesson: 42, block: "Аналитика", type: "fill",
    q: "Фильтр Яндекса за покупные ссылки — ____.",
    answer: "Минусинск",
    explain: "Минусинск." }
  ,{ id: "L42-Q4", lesson: 42, block: "Аналитика", type: "choice",
    q: "Раздел канонических страниц Яндекса?",
    o: ["Статистика обхода", "Переопределение (canonical)", "Внешние ссылки", "Sitemap"], a: 1,
    explain: "Переопределение." }
  ,{ id: "L42-Q5", lesson: 42, block: "Аналитика", type: "boolean",
    q: "Турбо-страницы Яндекса актуальны.",
    answer: "false",
    explain: "Закрыты с 2023." }
  ,{ id: "L42-Q6", lesson: 42, block: "Аналитика", type: "choice",
    q: "Куда добавить sitemap в Вебмастере?",
    o: ["Файлы Sitemap", "Мониторинг", "Индексирование", "Уведомления"], a: 0,
    explain: "Файлы Sitemap." }
  ,{ id: "L43-Q1", lesson: 43, block: "Аналитика", type: "choice",
    q: "GA4 основан на:",
    o: ["Сессиях", "Событиях и пользователях", "Только кликах", "Cookies"], a: 1,
    explain: "События + пользователи." }
  ,{ id: "L43-Q2", lesson: 43, block: "Аналитика", type: "boolean",
    q: "В GA4 есть bounce rate.",
    answer: "false",
    explain: "Заменён на engagement rate." }
  ,{ id: "L43-Q3", lesson: 43, block: "Аналитика", type: "fill",
    q: "Engaged sessions — сессии >____ сек.",
    answer: "10",
    explain: "10 сек." }
  ,{ id: "L43-Q4", lesson: 43, block: "Аналитика", type: "choice",
    q: "Модель атрибуции GA4 по умолчанию?",
    o: ["Last click", "First click", "Data-driven", "Linear"], a: 2,
    explain: "Data-driven." }
  ,{ id: "L43-Q5", lesson: 43, block: "Аналитика", type: "boolean",
    q: "GA4 связан с GSC.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L43-Q6", lesson: 43, block: "Аналитика", type: "choice",
    q: "Где organic search отчёт?",
    o: ["Привлечение → Источник/Medium", "Realtime", "Demographics", "Monetization"], a: 0,
    explain: "Источник/Medium." }
  ,{ id: "L44-Q1", lesson: 44, block: "Аналитика", type: "choice",
    q: "Rank tracking — это?",
    o: ["Анализ бэклинков", "Отслеживание позиций", "Аудит", "Технический SEO"], a: 1,
    explain: "Позиции." }
  ,{ id: "L44-Q2", lesson: 44, block: "Аналитика", type: "boolean",
    q: "Mobile и desktop позиции всегда одинаковы.",
    answer: "false",
    explain: "Разные." }
  ,{ id: "L44-Q3", lesson: 44, block: "Аналитика", type: "fill",
    q: "Бесплатный инструмент позиций — ____ Search Console.",
    answer: "Google",
    explain: "GSC." }
  ,{ id: "L44-Q4", lesson: 44, block: "Аналитика", type: "choice",
    q: "Платный инструмент для РФ?",
    o: ["Ahrefs", "SEMrush", "Топвизор", "Majestic"], a: 2,
    explain: "Топвизор." }
  ,{ id: "L44-Q5", lesson: 44, block: "Аналитика", type: "boolean",
    q: "Rank tracker показывает реальную выдачу.",
    answer: "false",
    explain: "Нейтральную." }
  ,{ id: "L44-Q6", lesson: 44, block: "Аналитика", type: "choice",
    q: "Что делать при падении позиций?",
    o: ["Ничего", "Проверить изменения, CWV, апдейты, сезонность", "Только ждать", "Удалить страницу"], a: 1,
    explain: "8 причин." }
  ,{ id: "L45-Q1", lesson: 45, block: "Аналитика", type: "choice",
    q: "Как часто SEO-аудит?",
    o: ["Раз в год", "Каждые 3–6 месяцев", "Каждый день", "Никогда"], a: 1,
    explain: "3–6 мес." }
  ,{ id: "L45-Q2", lesson: 45, block: "Аналитика", type: "boolean",
    q: "Аудит только технический.",
    answer: "false",
    explain: "Все разделы." }
  ,{ id: "L45-Q3", lesson: 45, block: "Аналитика", type: "fill",
    q: "Инструмент парсинга — ____ Frog.",
    answer: "Screaming",
    explain: "Screaming Frog." }
  ,{ id: "L45-Q4", lesson: 45, block: "Аналитика", type: "choice",
    q: "«Срочно/важно» в приоритизации?",
    o: ["Косметика", "Падение трафика, ошибки, санкции", "Лонгриды"], a: 1,
    explain: "Критичные." }
  ,{ id: "L45-Q5", lesson: 45, block: "Аналитика", type: "boolean",
    q: "Screaming Frog бесплатен для всех URL.",
    answer: "false",
    explain: "До 500 URL." }
  ,{ id: "L45-Q6", lesson: 45, block: "Аналитика", type: "choice",
    q: "Что в отчёте аудита?",
    o: ["Только проблемы", "Резюме, находки, приоритеты, план, метрики", "Только план"], a: 1,
    explain: "Все блоки." }
  ,{ id: "L46-Q1", lesson: 46, block: "Аналитика", type: "choice",
    q: "Расширение Chrome для мета?",
    o: ["AdBlock", "SEOquake", "Google Docs", "Photoshop"], a: 1,
    explain: "SEOquake." }
  ,{ id: "L46-Q2", lesson: 46, block: "Аналитика", type: "boolean",
    q: "Минимальный стек — GSC, Я.Вебмастер, GA4, Screaming Frog.",
    answer: "true",
    explain: "Минимум." }
  ,{ id: "L46-Q3", lesson: 46, block: "Аналитика", type: "fill",
    q: "____ SEO — оптимизация под SERP.",
    answer: "Surfer",
    explain: "Surfer SEO." }
  ,{ id: "L46-Q4", lesson: 46, block: "Аналитика", type: "choice",
    q: "Open source альтернатива GA4?",
    o: ["Hotjar", "Matomo", "Mixpanel", "Amplitude"], a: 1,
    explain: "Matomo." }
  ,{ id: "L46-Q5", lesson: 46, block: "Аналитика", type: "boolean",
    q: "Главред — проверка уникальности.",
    answer: "false",
    explain: "Стилистика." }
  ,{ id: "L46-Q6", lesson: 46, block: "Аналитика", type: "choice",
    q: "Лидер среди бэклинков?",
    o: ["Majestic", "Ahrefs", "SEMrush", "Google"], a: 1,
    explain: "Ahrefs." }
  ,{ id: "L47-Q1", lesson: 47, block: "Продвинутые темы", type: "choice",
    q: "Что такое hreflang?",
    o: ["Title", "Атрибут для языковой версии", "Schema", "robots"], a: 1,
    explain: "Язык/регион." }
  ,{ id: "L47-Q2", lesson: 47, block: "Продвинутые темы", type: "boolean",
    q: "URL-параметры (?lang=ru) рекомендуются.",
    answer: "false",
    explain: "Нет." }
  ,{ id: "L47-Q3", lesson: 47, block: "Продвинутые темы", type: "fill",
    q: "hreflang=\"x-____\" — catch-all.",
    answer: "default",
    explain: "x-default." }
  ,{ id: "L47-Q4", lesson: 47, block: "Продвинутые темы", type: "choice",
    q: "Рекомендуемая структура мультиязычного?",
    o: ["ccTLD", "Подпапки", "Параметры", "Только поддомены"], a: 1,
    explain: "Подпапки." }
  ,{ id: "L47-Q5", lesson: 47, block: "Продвинутые темы", type: "boolean",
    q: "Hreflang требует reciprocal.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L47-Q6", lesson: 47, block: "Продвинутые темы", type: "choice",
    q: "Локализация vs перевод?",
    o: ["Точный перевод", "Адаптация под культуру, валюту, примеры", "Машинный"], a: 1,
    explain: "Адаптация." }
  ,{ id: "L48-Q1", lesson: 48, block: "Продвинутые темы", type: "choice",
    q: "Что такое CSR?",
    o: ["SSR", "Client-Side Rendering", "Search Ranking", "Cross Site"], a: 1,
    explain: "Client-Side." }
  ,{ id: "L48-Q2", lesson: 48, block: "Продвинутые темы", type: "boolean",
    q: "SSR — лучший для SEO.",
    answer: "true",
    explain: "Лучший." }
  ,{ id: "L48-Q3", lesson: 48, block: "Продвинутые темы", type: "fill",
    q: "Google рекомендует ____ Rendering для ботов.",
    answer: "Dynamic",
    explain: "Dynamic." }
  ,{ id: "L48-Q4", lesson: 48, block: "Продвинутые темы", type: "choice",
    q: "Что должно работать без JS?",
    o: ["Только фон", "Title, Description, контент, навигация, canonical", "Только картинки"], a: 1,
    explain: "Все основное." }
  ,{ id: "L48-Q5", lesson: 48, block: "Продвинутые темы", type: "boolean",
    q: "Bingbot хорошо рендерит JS.",
    answer: "false",
    explain: "Почти не рендерит." }
  ,{ id: "L48-Q6", lesson: 48, block: "Продвинутые темы", type: "choice",
    q: "Фреймворк с SSR?",
    o: ["HTML", "Next.js / Nuxt.js", "WordPress", "Notepad"], a: 1,
    explain: "Next/Nuxt." }
  ,{ id: "L49-Q1", lesson: 49, block: "Продвинутые темы", type: "choice",
    q: "% SEO-задач с разработчиком?",
    o: ["10%", "30%", "70%", "95%"], a: 2,
    explain: "70%." }
  ,{ id: "L49-Q2", lesson: 49, block: "Продвинутые темы", type: "boolean",
    q: "SEO-чеклист для разработки полезен.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L49-Q3", lesson: 49, block: "Продвинутые темы", type: "fill",
    q: "Фреймворк ____/RICE — приоритизация.",
    answer: "ICE",
    explain: "ICE." }
  ,{ id: "L49-Q4", lesson: 49, block: "Продвинутые темы", type: "choice",
    q: "Минимум SEO для разработчика?",
    o: ["Всё", "Title, Description, H1, robots.txt, sitemap, canonical, редиректы, HTTPS, скорость, mobile", "Только robots.txt"], a: 1,
    explain: "10 тем." }
  ,{ id: "L49-Q5", lesson: 49, block: "Продвинутые темы", type: "boolean",
    q: "В задаче не нужен приоритет.",
    answer: "false",
    explain: "Обязателен." }
  ,{ id: "L49-Q6", lesson: 49, block: "Продвинутые темы", type: "choice",
    q: "Трекер задач для разработки?",
    o: ["Notepad", "Jira/Linear", "Photoshop", "Paint"], a: 1,
    explain: "Jira/Linear." }
  ,{ id: "L50-Q1", lesson: 50, block: "Продвинутые темы", type: "choice",
    q: "Длина Title по чек-листу?",
    o: ["10–20", "50–65", "100–150", "200+"], a: 1,
    explain: "50–65." }
  ,{ id: "L50-Q2", lesson: 50, block: "Продвинутые темы", type: "boolean",
    q: "Минимум 300+ слов — для любой страницы.",
    answer: "true",
    explain: "Да." }
  ,{ id: "L50-Q3", lesson: 50, block: "Продвинутые темы", type: "fill",
    q: "PageSpeed > ____ mobile.",
    answer: "70",
    explain: "70." }
  ,{ id: "L50-Q4", lesson: 50, block: "Продвинутые темы", type: "choice",
    q: "Внутренних ссылок на странице?",
    o: ["0", "1", "3+", "100+"], a: 2,
    explain: "3+." }
  ,{ id: "L50-Q5", lesson: 50, block: "Продвинутые темы", type: "boolean",
    q: "«Пишите для машин, оптимизируйте для людей».",
    answer: "false",
    explain: "Наоборот." }
  ,{ id: "L50-Q6", lesson: 50, block: "Продвинутые темы", type: "choice",
    q: "Еженедельно проверять?",
    o: ["Ничего", "GSC Performance, Покрытие, Rank tracker, GA4 Organic", "Только Title"], a: 1,
    explain: "4 источника." }
];

// ===== Блоки для группировки =====
const BLOCKS = [
  { id: "all", name: "Все уроки", range: [1, 50] },
  { id: "Основы SEO", name: "Блок 1. Основы SEO", range: [1, 5] },
  { id: "Ключевые слова", name: "Блок 2. Ключевые слова", range: [6, 10] },
  { id: "On-Page SEO", name: "Блок 3. On-Page SEO", range: [11, 18] },
  { id: "Technical SEO", name: "Блок 4. Technical SEO", range: [19, 26] },
  { id: "Контент", name: "Блок 5. Контент", range: [27, 32] },
  { id: "Off-Page SEO", name: "Блок 6. Off-Page SEO", range: [33, 35] },
  { id: "Специализированное SEO", name: "Блок 7. Специализированное SEO", range: [36, 37] },
  { id: "Локальное SEO", name: "Блок 8. Локальное SEO", range: [38, 40] },
  { id: "Аналитика", name: "Блок 9. Аналитика и инструменты", range: [41, 46] },
  { id: "Продвинутые темы", name: "Блок 10. Продвинутые темы", range: [47, 50] }
];

window.SEO_QUESTIONS = QUESTIONS;
window.SEO_BLOCKS = BLOCKS;
