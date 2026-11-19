(function () {
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function safeText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function safeHTML(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  function safeClassAdd(id, cls) {
    const el = document.getElementById(id);
    if (el) el.classList.add(cls);
  }

  function safeClassRemove(id, cls) {
    const el = document.getElementById(id);
    if (el) el.classList.remove(cls);
  }

  window.createPremiumQuizApp = function createPremiumQuizApp(config) {
    const TRADE_SLUG = config.tradeSlug;
    const TRADE_TITLE = config.tradeTitle;
    const SECTION_TITLE = config.sectionTitle || "Section 1";
    const QUESTIONS = config.questions || [];
    const QUESTION_TIME_SECONDS = config.questionTimeSeconds || 90;

    const storageSlug = SECTION_TITLE.replace(/\s+/g, "-").toLowerCase();
    const QUIZ_STORAGE_KEY = `quiz-progress-${TRADE_SLUG}-${storageSlug}`;
    const WRONG_REVIEW_STORAGE_KEY = `wrong-review-${TRADE_SLUG}-${storageSlug}`;

    let currentQuizQuestions = [];
    let userAnswers = {};
    let currentQuestionIndex = 0;
    let timeLeft = QUESTION_TIME_SECONDS;
    let timerInterval = null;
    let quizStartedAt = null;
    let wrongOnlyMode = false;
    let unansweredOnlyMode = false;
    let incorrectOnlyMode = false;

    const practiceCategory = document.getElementById("practiceCategory");
    const quizMode = document.getElementById("quizMode");
    const sectionSizeInput = document.getElementById("sectionSize");
    const totalQuestionsPill = document.getElementById("totalQuestionsPill");
    const oceanSection = document.getElementById("oceanSection");
    const oceanQuestions = document.getElementById("oceanQuestions");
    const oceanQuestionCount = document.getElementById("oceanQuestionCount");
    const searchQuestions = document.getElementById("searchQuestions");
    const quizSection = document.getElementById("quizSection");
    const resultSection = document.getElementById("resultSection");
    const reviewSection = document.getElementById("reviewSection");
    const timerBox = document.getElementById("timerBox");
    const retakeWrongBtn = document.getElementById("retakeWrongBtn");
    const resumeQuizBtn = document.getElementById("resumeQuizBtn");
    const unansweredOnlyBtn = document.getElementById("unansweredOnlyBtn");
    const incorrectOnlyBtn = document.getElementById("incorrectOnlyBtn");

    // The question catalogue must always start collapsed. Users open it explicitly.
    if (oceanSection) oceanSection.classList.add("hidden");

    if (!practiceCategory || !quizMode || !sectionSizeInput || !quizSection || !resultSection) {
      console.warn("Premium Red Seal Practice not initialized: required quiz HTML elements missing.");
      return;
    }

    function getSavedQuizState() {
      try {
        const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    }

    function saveQuizState() {
      try {
        if (!currentQuizQuestions.length || quizSection.classList.contains("hidden")) return;

        const payload = {
          currentQuizQuestions,
          userAnswers,
          currentQuestionIndex,
          timeLeft,
          quizStartedAt,
          wrongOnlyMode,
          unansweredOnlyMode,
          incorrectOnlyMode,
          selectedCategory: practiceCategory.value || "all",
          quizModeValue: quizMode.value,
          sectionSizeValue: sectionSizeInput.value
        };

        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        console.error("Could not save quiz state", err);
      }
    }

    function clearQuizState() {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
    }

    function hasSavedQuiz() {
      const saved = getSavedQuizState();
      return !!(saved && Array.isArray(saved.currentQuizQuestions) && saved.currentQuizQuestions.length);
    }

    function updateResumeButtonVisibility() {
      if (!resumeQuizBtn) return;
      resumeQuizBtn.style.display = hasSavedQuiz() ? "inline-block" : "none";
    }

    function populateCategories() {
      const categories = ["all", ...new Set(QUESTIONS.map(q => q.category))];
      practiceCategory.innerHTML = "";

      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category === "all" ? "All Categories" : category;
        practiceCategory.appendChild(option);
      });
    }

    function getFilteredQuestions(searchTerm = "") {
      const selectedCategory = practiceCategory.value || "all";
      const term = searchTerm.trim().toLowerCase();

      return QUESTIONS.filter(q => {
        const categoryMatch = selectedCategory === "all" || q.category === selectedCategory;
        const searchMatch =
          !term ||
          q.question.toLowerCase().includes(term) ||
          q.options.some(opt => opt.toLowerCase().includes(term));

        return categoryMatch && searchMatch;
      });
    }

    function renderOceanQuestions() {
      if (!oceanQuestions || !oceanQuestionCount) return;

      const questions = getFilteredQuestions(searchQuestions ? searchQuestions.value : "");
      const selectedCategory = practiceCategory.value || "all";

      if (totalQuestionsPill) totalQuestionsPill.textContent = `Questions: ${QUESTIONS.length}`;

      oceanQuestionCount.textContent =
        `${questions.length} question(s) shown${selectedCategory === "all" ? "" : " in " + selectedCategory}`;

      oceanQuestions.innerHTML = "";

      questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question-list-item";
        div.innerHTML = `
          <strong>${index + 1}. ${q.question}</strong>
          <div class="muted small question-category-line"><strong>Category:</strong> ${q.category}</div>
          <div class="muted small">${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`).join(" &nbsp;&nbsp; ")}</div>
        `;
        oceanQuestions.appendChild(div);
      });
    }

    async function getWrongQuestionsForTrade() {
      try {
        const res = await fetch(`/api/wrong-questions/${TRADE_SLUG}`);
        const data = await res.json();
        return data.questions || [];
      } catch (err) {
        console.error("Could not load wrong questions", err);
        return [];
      }
    }

    function getUnansweredQuestionsFromCurrentSet() {
      return currentQuizQuestions.filter(q => userAnswers[q.id] === undefined);
    }

    function getIncorrectQuestionsFromCurrentSet() {
      return currentQuizQuestions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.answer);
    }

    async function getQuizQuestions() {
      if (wrongOnlyMode) {
        const wrongQuestions = await getWrongQuestionsForTrade();
        const ids = wrongQuestions.map(q => q.questionId);
        return QUESTIONS.filter(q => ids.includes(q.id));
      }

      if (unansweredOnlyMode) return getUnansweredQuestionsFromCurrentSet();
      if (incorrectOnlyMode) return getIncorrectQuestionsFromCurrentSet();

      const all = getFilteredQuestions("");

      if (quizMode.value === "all") return [...all];

      let size = parseInt(sectionSizeInput.value, 10) || 10;
      size = Math.max(1, Math.min(size, all.length));

      return shuffleArray(all).slice(0, size);
    }

    function updateTimerUI() {
      if (!timerBox) return;

      timerBox.textContent = formatTime(timeLeft);
      timerBox.className = "timer-box";

      if (timeLeft <= 30) timerBox.classList.add("timer-danger");
      else if (timeLeft <= 60) timerBox.classList.add("timer-warning");
    }

    function startTimer() {
      clearInterval(timerInterval);
      timeLeft = Math.max(1, timeLeft || QUESTION_TIME_SECONDS);
      updateTimerUI();

      timerInterval = setInterval(() => {
        timeLeft -= 1;
        updateTimerUI();
        saveQuizState();

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          autoNextQuestion();
        }
      }, 1000);
    }

    function renderNavigator() {
      const navigator = document.getElementById("navigator");
      if (!navigator) return;

      navigator.innerHTML = "";

      currentQuizQuestions.forEach((q, index) => {
        const btn = document.createElement("button");
        let cls = "nav-btn";

        if (userAnswers[q.id] !== undefined) cls += " answered";
        if (index === currentQuestionIndex) cls += " current";

        btn.className = cls;
        btn.type = "button";
        btn.textContent = index + 1;

        btn.onclick = () => {
          currentQuestionIndex = index;
          timeLeft = QUESTION_TIME_SECONDS;
          renderQuizQuestion();
          startTimer();
          saveQuizState();
        };

        navigator.appendChild(btn);
      });
    }

    function renderQuizQuestion() {
      const q = currentQuizQuestions[currentQuestionIndex];
      if (!q) return;

      safeText("quizQuestionTitle", `Question ${currentQuestionIndex + 1} of ${currentQuizQuestions.length}`);
      safeText("quizMeta", `${q.category} • ${Math.floor(QUESTION_TIME_SECONDS / 60)} minute ${QUESTION_TIME_SECONDS % 60} seconds per question`);
      safeText("quizQuestionText", q.question);

      const progress = document.getElementById("quizProgress");
      if (progress) {
        progress.style.width = `${((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100}%`;
      }

      const quizOptions = document.getElementById("quizOptions");
      if (!quizOptions) return;

      quizOptions.innerHTML = "";

      q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn" + (userAnswers[q.id] === index ? " selected" : "");
        btn.innerHTML = `<strong>${String.fromCharCode(65 + index)})</strong> ${option}`;

        btn.onclick = () => {
          userAnswers[q.id] = index;
          renderQuizQuestion();
          renderNavigator();
          saveQuizState();
        };

        quizOptions.appendChild(btn);
      });

      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
      if (nextBtn) nextBtn.disabled = currentQuestionIndex === currentQuizQuestions.length - 1;

      renderNavigator();
    }

    async function startQuiz() {
      const freshQuestions = await getQuizQuestions();

      if (freshQuestions.length === 0) {
        let message = "No questions found for this category.";
        if (wrongOnlyMode) message = "No wrong questions saved yet for this trade.";
        if (unansweredOnlyMode) message = "No unanswered questions available from the current quiz.";
        if (incorrectOnlyMode) message = "No incorrect questions available from the current quiz.";

        alert(message);

        wrongOnlyMode = false;
        unansweredOnlyMode = false;
        incorrectOnlyMode = false;
        return;
      }

      currentQuizQuestions = freshQuestions;
      userAnswers = {};
      currentQuestionIndex = 0;
      timeLeft = QUESTION_TIME_SECONDS;
      quizStartedAt = Date.now();

      if (reviewSection) reviewSection.innerHTML = "";

      resultSection.classList.add("hidden");
      quizSection.classList.remove("hidden");
      document.body.classList.add("quiz-in-progress");

      renderQuizQuestion();
      startTimer();
      saveQuizState();
      updateResumeButtonVisibility();

      window.scrollTo({ top: quizSection.offsetTop - 10, behavior: "smooth" });
    }

    function resumeQuiz() {
      const saved = getSavedQuizState();

      if (!saved) {
        alert("No saved quiz found.");
        updateResumeButtonVisibility();
        return;
      }

      currentQuizQuestions = Array.isArray(saved.currentQuizQuestions) ? saved.currentQuizQuestions : [];
      userAnswers = saved.userAnswers || {};
      currentQuestionIndex = saved.currentQuestionIndex || 0;
      timeLeft = saved.timeLeft || QUESTION_TIME_SECONDS;
      quizStartedAt = saved.quizStartedAt || Date.now();
      wrongOnlyMode = !!saved.wrongOnlyMode;
      unansweredOnlyMode = !!saved.unansweredOnlyMode;
      incorrectOnlyMode = !!saved.incorrectOnlyMode;

      if (saved.selectedCategory) practiceCategory.value = saved.selectedCategory;
      if (saved.quizModeValue) quizMode.value = saved.quizModeValue;
      if (saved.sectionSizeValue) sectionSizeInput.value = saved.sectionSizeValue;

      if (!currentQuizQuestions.length) {
        clearQuizState();
        updateResumeButtonVisibility();
        alert("Saved quiz data was empty.");
        return;
      }

      if (reviewSection) reviewSection.innerHTML = "";

      resultSection.classList.add("hidden");
      quizSection.classList.remove("hidden");
      document.body.classList.add("quiz-in-progress");

      renderQuizQuestion();
      startTimer();
      updateResumeButtonVisibility();

      window.scrollTo({ top: quizSection.offsetTop - 10, behavior: "smooth" });
    }

    function nextQuestion() {
      if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex += 1;
        timeLeft = QUESTION_TIME_SECONDS;
        renderQuizQuestion();
        startTimer();
        saveQuizState();
      }
    }

    function prevQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        timeLeft = QUESTION_TIME_SECONDS;
        renderQuizQuestion();
        startTimer();
        saveQuizState();
      }
    }

    function autoNextQuestion() {
      if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex += 1;
        timeLeft = QUESTION_TIME_SECONDS;
        renderQuizQuestion();
        startTimer();
        saveQuizState();
      } else {
        submitQuiz();
      }
    }

    function buildCategoryStats() {
      const map = new Map();

      currentQuizQuestions.forEach(q => {
        if (!map.has(q.category)) {
          map.set(q.category, { category: q.category, correct: 0, total: 0 });
        }

        const entry = map.get(q.category);
        entry.total += 1;

        if (userAnswers[q.id] === q.answer) {
          entry.correct += 1;
        }
      });

      return Array.from(map.values());
    }

    function buildWrongQuestions() {
      return currentQuizQuestions
        .filter(q => userAnswers[q.id] !== q.answer)
        .map(q => ({
          questionId: q.id,
          category: q.category,
          question: q.question,
          correctAnswerIndex: q.answer,
          selectedAnswerIndex: userAnswers[q.id] ?? null
        }));
    }

    function saveWrongReviewSet() {
      const wrongIds = currentQuizQuestions
        .filter(q => userAnswers[q.id] !== q.answer)
        .map(q => q.id);

      try {
        localStorage.setItem(WRONG_REVIEW_STORAGE_KEY, JSON.stringify(wrongIds));
      } catch (err) {
        console.error("Could not save wrong review set", err);
      }
    }

    function renderReview(filterMode = "all") {
      if (!reviewSection) return;

      reviewSection.innerHTML = "";

      let questionsToRender = [...currentQuizQuestions];

      if (filterMode === "unanswered") {
        questionsToRender = currentQuizQuestions.filter(q => userAnswers[q.id] === undefined);
      }

      if (filterMode === "incorrect") {
        questionsToRender = currentQuizQuestions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.answer);
      }

      if (questionsToRender.length === 0) {
        const emptyCard = document.createElement("div");
        emptyCard.className = "card";
        emptyCard.innerHTML = `<h3>No questions found for this review filter.</h3>`;
        reviewSection.appendChild(emptyCard);
        return;
      }

      questionsToRender.forEach((q, idx) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const card = document.createElement("div");
        card.className = "card";

        let optionsHtml = "";

        q.options.forEach((opt, i) => {
          let cls = "neutral";
          if (i === q.answer) cls = "correct";
          else if (i === userAnswer) cls = "wrong";

          optionsHtml += `<div class="option-review ${cls}"><strong>${String.fromCharCode(65 + i)})</strong> ${opt}</div>`;
        });

        const yourAnswerText =
          userAnswer === undefined
            ? "Not answered"
            : `${String.fromCharCode(65 + userAnswer)}) ${q.options[userAnswer]}`;

        card.innerHTML = `
          <div class="space-between">
            <div>
              <div class="muted small">Review ${idx + 1} • ${q.category}</div>
              <h3>${q.question}</h3>
            </div>
            <div><strong class="${isCorrect ? "review-status-correct" : "review-status-incorrect"}">${isCorrect ? "Correct" : "Incorrect"}</strong></div>
          </div>
          ${optionsHtml}
          <div class="stat-box">
            <div><strong>Your answer:</strong> ${yourAnswerText}</div>
            <div class="review-detail-line"><strong>Correct answer:</strong> ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</div>
            <div class="review-detail-line"><strong>Explanation:</strong> ${q.explanation || "No explanation added yet."}</div>
          </div>
        `;

        reviewSection.appendChild(card);
      });
    }

    async function saveAttempt(score, percent) {
      const timeSpentSeconds = quizStartedAt
        ? Math.floor((Date.now() - quizStartedAt) / 1000)
        : 0;

      const payload = {
        trade: TRADE_SLUG,
        section: SECTION_TITLE,
        mode: wrongOnlyMode
          ? "wrong_only"
          : unansweredOnlyMode
            ? "unanswered_only"
            : incorrectOnlyMode
              ? "incorrect_only"
              : quizMode.value,
        selectedCategory: practiceCategory.value || "all",
        totalQuestions: currentQuizQuestions.length,
        correctAnswers: score,
        percentage: percent,
        timeSpentSeconds,
        categoryStats: buildCategoryStats(),
        wrongQuestions: buildWrongQuestions()
      };

      try {
        await fetch("/api/quiz-attempts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Could not save attempt", err);
      }
    }

    async function submitQuiz() {
      clearInterval(timerInterval);

      quizSection.classList.add("hidden");
      resultSection.classList.remove("hidden");
      document.body.classList.remove("quiz-in-progress");

      let score = 0;

      currentQuizQuestions.forEach(q => {
        if (userAnswers[q.id] === q.answer) score += 1;
      });

      const percent = currentQuizQuestions.length
        ? Math.round((score / currentQuizQuestions.length) * 100)
        : 0;

      const performance =
        percent >= 85
          ? "Excellent"
          : percent >= 70
            ? "Good Progress"
            : percent >= 55
              ? "Needs Improvement"
              : "Keep Practicing";

      const selectedCategory =
        practiceCategory.value === "all" ? "All Categories" : practiceCategory.value;

      safeText("resultCategory", selectedCategory);
      safeText("resultScore", `${score} / ${currentQuizQuestions.length}`);
      safeText("resultPercentage", `${percent}%`);
      const resultPercentEl = document.getElementById("resultPercentage");
      if (resultPercentEl) resultPercentEl.style.background = `conic-gradient(#42bd69 0 ${percent}%, #e7f6eb ${percent}% 100%)`;
      safeText("resultPerformance", performance);
      safeText(
        "passPrediction",
        percent >= 85 ? "Very High" :
        percent >= 70 ? "High" :
        percent >= 55 ? "Moderate" : "Low"
      );

      renderReview("all");
      saveWrongReviewSet();
      await saveAttempt(score, percent);

      clearQuizState();
      updateResumeButtonVisibility();

      wrongOnlyMode = false;
      unansweredOnlyMode = false;
      incorrectOnlyMode = false;

      window.scrollTo({ top: resultSection.offsetTop - 10, behavior: "smooth" });
    }

    const showOceanBtn = document.getElementById("showOceanBtn");
    const hideOceanBtn = document.getElementById("hideOceanBtn");
    const startQuizBtn = document.getElementById("startQuizBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    const restartSameBtn = document.getElementById("restartSameBtn");
    const backSetupBtn = document.getElementById("backSetupBtn");

    if (showOceanBtn) {
      showOceanBtn.addEventListener("click", function () {
        if (!oceanSection) return;
        oceanSection.classList.remove("hidden");
        renderOceanQuestions();
        window.scrollTo({ top: oceanSection.offsetTop - 10, behavior: "smooth" });
      });
    }

    if (hideOceanBtn) {
      hideOceanBtn.addEventListener("click", function () {
        if (oceanSection) oceanSection.classList.add("hidden");
      });
    }

    if (startQuizBtn) {
      startQuizBtn.addEventListener("click", function () {
        wrongOnlyMode = false;
        unansweredOnlyMode = false;
        incorrectOnlyMode = false;
        startQuiz();
      });
    }

    if (resumeQuizBtn) resumeQuizBtn.addEventListener("click", resumeQuiz);

    if (retakeWrongBtn) {
      retakeWrongBtn.addEventListener("click", function () {
        wrongOnlyMode = true;
        unansweredOnlyMode = false;
        incorrectOnlyMode = false;
        startQuiz();
      });
    }

    if (unansweredOnlyBtn) {
      unansweredOnlyBtn.addEventListener("click", function () {
        unansweredOnlyMode = true;
        wrongOnlyMode = false;
        incorrectOnlyMode = false;
        startQuiz();
      });
    }

    if (incorrectOnlyBtn) {
      incorrectOnlyBtn.addEventListener("click", function () {
        incorrectOnlyMode = true;
        wrongOnlyMode = false;
        unansweredOnlyMode = false;
        startQuiz();
      });
    }

    if (nextBtn) nextBtn.addEventListener("click", nextQuestion);
    if (prevBtn) prevBtn.addEventListener("click", prevQuestion);
    if (submitQuizBtn) submitQuizBtn.addEventListener("click", submitQuiz);

    if (restartSameBtn) {
      restartSameBtn.addEventListener("click", function () {
        wrongOnlyMode = false;
        unansweredOnlyMode = false;
        incorrectOnlyMode = false;
        startQuiz();
      });
    }

    if (backSetupBtn) {
      backSetupBtn.addEventListener("click", function () {
        clearInterval(timerInterval);
        quizSection.classList.add("hidden");
        resultSection.classList.add("hidden");
        document.body.classList.remove("quiz-in-progress");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const reviewAllBtn = document.getElementById("reviewAllBtn");
    const reviewUnansweredBtn = document.getElementById("reviewUnansweredBtn");
    const reviewIncorrectBtn = document.getElementById("reviewIncorrectBtn");

    if (reviewAllBtn) reviewAllBtn.addEventListener("click", () => renderReview("all"));
    if (reviewUnansweredBtn) reviewUnansweredBtn.addEventListener("click", () => renderReview("unanswered"));
    if (reviewIncorrectBtn) reviewIncorrectBtn.addEventListener("click", () => renderReview("incorrect"));

    practiceCategory.addEventListener("change", function () {
      renderOceanQuestions();
      saveQuizState();
    });

    if (searchQuestions) {
      searchQuestions.addEventListener("input", renderOceanQuestions);
    }

    window.addEventListener("beforeunload", function () {
      if (!quizSection.classList.contains("hidden")) saveQuizState();
    });

    safeText("tradeTitle", `${TRADE_TITLE} Practice Quiz`);
    safeText("tradePill", `Trade: ${TRADE_TITLE}`);
    safeText("sectionPill", SECTION_TITLE);

    populateCategories();
    renderOceanQuestions();

    if (totalQuestionsPill) {
      totalQuestionsPill.textContent = `Questions: ${QUESTIONS.length}`;
    }

    updateResumeButtonVisibility();
  };
})();

