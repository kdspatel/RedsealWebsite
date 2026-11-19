const plumberFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What PPE is important when cutting or drilling pipe overhead?",
    options: ["Safety glasses or face shield", "Sandals", "No PPE", "Cotton hat only"],
    answer: 0,
    explanation: "Eye and face protection helps prevent injuries from falling chips, dust, and debris."
  },
  {
    id: 2,
    category: "Safety",
    question: "Why should confined spaces be tested before entry?",
    options: ["To check for oxygen level and hazardous gases", "To measure pipe size only", "To increase water pressure", "To find paint colour"],
    answer: 0,
    explanation: "Confined spaces can contain low oxygen or toxic/flammable gases and must be tested before entry."
  },
  {
    id: 3,
    category: "Tools",
    question: "What is the purpose of a pipe wrench?",
    options: ["Grip and turn threaded pipe or fittings", "Cut copper tubing only", "Measure voltage", "Apply primer"],
    answer: 0,
    explanation: "Pipe wrenches are used to grip and turn pipe and threaded fittings."
  },
  {
    id: 4,
    category: "Tools",
    question: "What tool is commonly used to cut copper tubing cleanly?",
    options: ["Tubing cutter", "Wood saw", "Paint roller", "Concrete trowel"],
    answer: 0,
    explanation: "A tubing cutter makes a square, clean cut on copper pipe or tubing."
  },
  {
    id: 5,
    category: "Piping Materials",
    question: "What is PEX commonly used for?",
    options: ["Water distribution piping", "Electrical grounding only", "Gasoline storage", "Roof framing"],
    answer: 0,
    explanation: "PEX is commonly used for hot and cold water distribution systems."
  },
  {
    id: 6,
    category: "Piping Materials",
    question: "What is PVC pipe commonly used for in plumbing?",
    options: ["Drain, waste, and vent systems", "Hot exhaust systems", "Structural beams", "Electrical motors"],
    answer: 0,
    explanation: "PVC is commonly used for DWV piping and some cold water applications depending on code."
  },
  {
    id: 7,
    category: "Water Supply",
    question: "What is the purpose of a shutoff valve?",
    options: ["Stop or control water flow", "Increase pipe diameter", "Filter sewer gas", "Measure pipe slope"],
    answer: 0,
    explanation: "Shutoff valves allow sections of a plumbing system or fixtures to be isolated for service."
  },
  {
    id: 8,
    category: "Water Supply",
    question: "Why is pipe support important in water piping systems?",
    options: ["To prevent sagging, noise, and stress on joints", "To increase leaks", "To reduce pipe size", "To remove fittings"],
    answer: 0,
    explanation: "Proper support keeps piping aligned and reduces strain, vibration, and joint failure."
  },
  {
    id: 9,
    category: "Drainage",
    question: "What is the purpose of slope in a drainage pipe?",
    options: ["Allow wastewater to flow by gravity", "Stop all water movement", "Increase pipe weight", "Hold sewer gas"],
    answer: 0,
    explanation: "Drainage piping needs proper slope so wastewater and solids flow by gravity."
  },
  {
    id: 10,
    category: "Drainage",
    question: "What can happen if a drain pipe has too little slope?",
    options: ["Poor drainage and possible blockages", "Water flows faster every time", "Pipe becomes stronger", "Vent size increases"],
    answer: 0,
    explanation: "Insufficient slope can cause slow drainage and solids buildup."
  },
  {
    id: 11,
    category: "Venting",
    question: "What is the purpose of a plumbing vent?",
    options: ["Protect trap seals and allow air movement", "Carry hot water to fixtures", "Filter drinking water", "Increase pipe corrosion"],
    answer: 0,
    explanation: "Vents allow air into the drainage system and help protect trap seals from siphonage or pressure changes."
  },
  {
    id: 12,
    category: "Traps",
    question: "What is the purpose of a P-trap under a fixture?",
    options: ["Hold water to block sewer gas", "Increase water pressure", "Heat the water", "Support the sink cabinet"],
    answer: 0,
    explanation: "A trap holds a water seal that prevents sewer gases from entering the building."
  },
  {
    id: 13,
    category: "Fixtures",
    question: "What should be checked after installing a faucet or fixture?",
    options: ["Leaks and proper operation", "Paint colour", "Room temperature only", "Wall thickness only"],
    answer: 0,
    explanation: "Fixtures should be tested for leaks, flow, drainage, and correct operation after installation."
  },
  {
    id: 14,
    category: "Water Heaters",
    question: "What is the purpose of a temperature and pressure relief valve on a water heater?",
    options: ["Relieve unsafe temperature or pressure", "Make water colder only", "Increase tank pressure", "Stop all drainage"],
    answer: 0,
    explanation: "The T&P relief valve is a safety device that opens if tank temperature or pressure becomes unsafe."
  },
  {
    id: 15,
    category: "Soldering",
    question: "What is the purpose of flux when soldering copper pipe?",
    options: ["Clean oxides and help solder flow", "Cool the pipe instantly", "Replace solder", "Increase pipe thickness"],
    answer: 0,
    explanation: "Flux cleans the joint surfaces and helps solder flow and bond properly."
  },
  {
    id: 16,
    category: "Soldering",
    question: "What must be done before soldering a copper joint?",
    options: ["Clean and deburr the pipe and fitting", "Leave oil on the pipe", "Fill the pipe with water", "Paint the joint"],
    answer: 0,
    explanation: "Clean, properly prepared surfaces are required for good solder flow and a leak-free joint."
  },
  {
    id: 17,
    category: "Testing",
    question: "Why is pressure testing performed on piping systems?",
    options: ["To check for leaks and system integrity", "To paint the pipe", "To reduce pipe support", "To remove water heaters"],
    answer: 0,
    explanation: "Pressure testing verifies that piping and joints can hold pressure without leaking."
  },
  {
    id: 18,
    category: "Blueprint Reading",
    question: "What information can plumbing drawings provide?",
    options: ["Pipe sizes, fixture locations, routes, and elevations", "Worker pay rate", "Paint brand", "Lunch schedule"],
    answer: 0,
    explanation: "Plumbing drawings show layout, fixture locations, pipe routing, sizes, and system details."
  },
  {
    id: 19,
    category: "Trade Math",
    question: "How many inches are in 6 feet?",
    options: ["36 in.", "48 in.", "60 in.", "72 in."],
    answer: 3,
    explanation: "1 foot equals 12 inches. 6 × 12 = 72 inches."
  },
  {
    id: 20,
    category: "Code and Practice",
    question: "Why must plumbing work follow local plumbing code?",
    options: ["To protect health, safety, water quality, and drainage performance", "To make all pipe the same colour", "To avoid testing", "To reduce ventilation"],
    answer: 0,
    explanation: "Plumbing codes set minimum standards for safe, sanitary, and reliable plumbing systems."
  }
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleOptionsForQuestion(question) {
  const correctOptionText = question.options[question.answer];
  const shuffledOptions = shuffleArray(question.options);

  return {
    ...question,
    options: shuffledOptions,
    answer: shuffledOptions.findIndex(option => option === correctOptionText)
  };
}

const shuffledPlumberFreePracticeQuestions =
  shuffleArray(plumberFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "plumber",
  tradeTitle: "Plumber",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledPlumberFreePracticeQuestions
});

window.addEventListener("load", () => {
  const questionTextEl = document.getElementById("quizQuestionText");
  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nav = document.getElementById("navigator");
  const quizOptions = document.getElementById("quizOptions");

  function getCurrentQuestionObject() {
    const questionText = questionTextEl ? questionTextEl.textContent.trim() : "";
    return shuffledPlumberFreePracticeQuestions.find(q => q.question === questionText);
  }

  function resetHint() {
    if (!hintBox || !hintText || !hintBtn) return;
    hintBox.classList.add("hidden");
    hintText.textContent = "";
    hintBtn.textContent = "Show Hint";
  }

  if (hintBtn) {
    hintBtn.style.display = "";
    hintBtn.addEventListener("click", () => {
      const currentQuestion = getCurrentQuestionObject();
      if (!currentQuestion) return;

      if (hintBox.classList.contains("hidden")) {
        hintText.textContent = currentQuestion.explanation || "No hint available.";
        hintBox.classList.remove("hidden");
        hintBtn.textContent = "Hide Hint";
      } else {
        resetHint();
      }
    });
  }

  if (nextBtn) nextBtn.addEventListener("click", () => setTimeout(resetHint, 100));
  if (prevBtn) prevBtn.addEventListener("click", () => setTimeout(resetHint, 100));

  if (nav) {
    nav.addEventListener("click", e => {
      if (e.target.classList.contains("nav-btn")) setTimeout(resetHint, 100);
    });
  }

  if (quizOptions) {
    quizOptions.addEventListener("click", () => {
      setTimeout(() => {
        if (!hintBox.classList.contains("hidden")) {
          const currentQuestion = getCurrentQuestionObject();
          if (currentQuestion) {
            hintText.textContent = currentQuestion.explanation || "No hint available.";
          }
        }
      }, 100);
    });
  }


  const premiumPopup = document.getElementById("premiumPopup");
  const premiumPopupClose = document.getElementById("premiumPopupClose");
  const premiumPopupLater = document.getElementById("premiumPopupLaterBtn");
  const premiumPopupBuy = document.getElementById("premiumPopupBuyBtn");
  const upgradeNowBtn = document.getElementById("upgradeNowBtn");
  const premiumTradeSlug = window.location.pathname.split("/").filter(Boolean).pop() || "";
  const premiumTradesPage = `/pricing?trade=${encodeURIComponent(premiumTradeSlug)}`;

  function showPremiumPopup() {
    if (!premiumPopup) return;
    premiumPopup.classList.add("show");
    premiumPopup.setAttribute("aria-hidden", "false");
  }

  function hidePremiumPopup() {
    if (!premiumPopup) return;
    premiumPopup.classList.remove("show");
    premiumPopup.setAttribute("aria-hidden", "true");
  }

  function goToPremiumTrades() {
    window.location.href = premiumTradesPage;
  }

  if (premiumPopupClose) premiumPopupClose.addEventListener("click", hidePremiumPopup);
  if (premiumPopupLater) premiumPopupLater.addEventListener("click", hidePremiumPopup);
  if (premiumPopupBuy) premiumPopupBuy.addEventListener("click", goToPremiumTrades);
  if (upgradeNowBtn) upgradeNowBtn.addEventListener("click", showPremiumPopup);

  // Show premium popup after 1 minute
  setTimeout(showPremiumPopup, 60000);

  // Show premium popup again after user submits quiz
  const premiumSubmitQuizBtn = document.getElementById("submitQuizBtn");
  if (premiumSubmitQuizBtn) {
    premiumSubmitQuizBtn.addEventListener("click", () => {
      setTimeout(showPremiumPopup, 800);
    });
  }


  resetHint();
});
