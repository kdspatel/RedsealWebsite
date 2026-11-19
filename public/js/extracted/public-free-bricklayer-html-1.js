const bricklayerFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What PPE is important when cutting masonry units?",
    options: ["Eye protection, hearing protection, and respiratory protection", "Shorts and sandals", "Cotton gloves only", "No PPE is required"],
    answer: 0,
    explanation: "Cutting masonry creates dust, noise, and flying particles, so eye, hearing, and respiratory protection are important."
  },
  {
    id: 2,
    category: "Safety",
    question: "Why should silica dust be controlled during masonry work?",
    options: ["It can damage lungs if inhaled", "It makes mortar stronger", "It improves brick colour", "It reduces the need for water"],
    answer: 0,
    explanation: "Respirable silica dust can cause serious lung disease, so dust control and proper PPE are required."
  },
  {
    id: 3,
    category: "Tools",
    question: "What is the main purpose of a brick trowel?",
    options: ["Spread mortar and set bricks", "Cut electrical wire", "Measure voltage", "Paint walls"],
    answer: 0,
    explanation: "A brick trowel is used to pick up, spread, and shape mortar while laying masonry units."
  },
  {
    id: 4,
    category: "Tools",
    question: "What is a jointer used for?",
    options: ["Finish and compact mortar joints", "Break concrete only", "Mix water", "Carry bricks"],
    answer: 0,
    explanation: "A jointer shapes and compacts mortar joints for appearance and weather resistance."
  },
  {
    id: 5,
    category: "Materials",
    question: "What are the main ingredients of mortar?",
    options: ["Cement, lime, sand, and water", "Steel, oil, gravel, and paint", "Wood, glue, water, and clay", "Gypsum, paper, and screws"],
    answer: 0,
    explanation: "Mortar is commonly made with cement, lime, sand, and water depending on the required type."
  },
  {
    id: 6,
    category: "Materials",
    question: "What is the purpose of mortar in brickwork?",
    options: ["Bond units together and seal joints", "Replace all reinforcement", "Make bricks lighter", "Stop wall layout"],
    answer: 0,
    explanation: "Mortar bonds masonry units, seals joints, and helps distribute loads."
  },
  {
    id: 7,
    category: "Layout",
    question: "Why is a story pole used in bricklaying?",
    options: ["To mark coursing and heights accurately", "To mix mortar", "To cut brick", "To clean tools"],
    answer: 0,
    explanation: "A story pole helps maintain consistent course heights and openings."
  },
  {
    id: 8,
    category: "Layout",
    question: "What does it mean for a wall to be plumb?",
    options: ["Perfectly vertical", "Perfectly horizontal", "Curved", "Sloped only at the top"],
    answer: 0,
    explanation: "Plumb means straight up and down or vertical."
  },
  {
    id: 9,
    category: "Masonry Units",
    question: "What is the stretcher face of a brick?",
    options: ["The long face of the brick", "The short end of the brick", "The top only", "The bottom only"],
    answer: 0,
    explanation: "The stretcher is the long face of a brick visible in many common bonds."
  },
  {
    id: 10,
    category: "Masonry Units",
    question: "What is a header brick?",
    options: ["A brick laid with its short end exposed", "A broken brick only", "A brick used for mixing mortar", "A brick used only below grade"],
    answer: 0,
    explanation: "A header is laid so the short end of the brick is exposed on the wall face."
  },
  {
    id: 11,
    category: "Bonding",
    question: "Why are head joints staggered in brickwork?",
    options: ["To improve bond and strength", "To make the wall weaker", "To use less mortar only", "To avoid using a level"],
    answer: 0,
    explanation: "Staggered joints help bond masonry units together and distribute loads."
  },
  {
    id: 12,
    category: "Bonding",
    question: "What is running bond?",
    options: ["A pattern where vertical joints are staggered between courses", "A wall with all joints lined up", "A type of mortar mixer", "A way to store bricks"],
    answer: 0,
    explanation: "Running bond uses staggered vertical joints and is one of the most common brick patterns."
  },
  {
    id: 13,
    category: "Joints",
    question: "Why should mortar joints be properly tooled?",
    options: ["To compact mortar and improve weather resistance", "To weaken the joint", "To remove all mortar", "To make bricks expand"],
    answer: 0,
    explanation: "Tooling compacts the joint and improves appearance and resistance to water penetration."
  },
  {
    id: 14,
    category: "Joints",
    question: "What can happen if mortar joints are not filled properly?",
    options: ["Water penetration and weak bonding can occur", "The wall becomes stronger", "No effect", "Bricks become waterproof"],
    answer: 0,
    explanation: "Poorly filled joints can reduce strength and allow water into the wall."
  },
  {
    id: 15,
    category: "Scaffolds",
    question: "What should be checked before working from a scaffold?",
    options: ["Guardrails, planks, access, base support, and inspection status", "Only paint colour", "Only weather forecast", "Only brick size"],
    answer: 0,
    explanation: "Scaffolds must be properly supported, inspected, accessed safely, and equipped with guardrails where required."
  },
  {
    id: 16,
    category: "Reinforcement",
    question: "Why is reinforcement sometimes used in masonry walls?",
    options: ["To improve strength and control cracking", "To replace all mortar", "To make walls lighter", "To remove the need for footings"],
    answer: 0,
    explanation: "Reinforcement helps masonry resist loads and can help control cracking."
  },
  {
    id: 17,
    category: "Flashing and Drainage",
    question: "What is the purpose of flashing in masonry walls?",
    options: ["Direct water out of the wall system", "Increase mortar drying time", "Support scaffold boards", "Replace brick ties"],
    answer: 0,
    explanation: "Flashing helps collect and direct water to the exterior before it can damage the wall assembly."
  },
  {
    id: 18,
    category: "Quality Control",
    question: "Why should brick courses be checked regularly with a level and line?",
    options: ["To keep the wall straight, level, and plumb", "To speed up mortar setting", "To reduce PPE", "To make bricks softer"],
    answer: 0,
    explanation: "Frequent checking helps maintain alignment, appearance, and structural quality."
  },
  {
    id: 19,
    category: "Trade Math",
    question: "A wall is 12 ft long and 8 ft high. What is the wall area?",
    options: ["20 sq. ft.", "48 sq. ft.", "96 sq. ft.", "120 sq. ft."],
    answer: 2,
    explanation: "Area = length × height = 12 × 8 = 96 square feet."
  },
  {
    id: 20,
    category: "Trade Knowledge",
    question: "Why should masonry work be protected from freezing before mortar cures?",
    options: ["Freezing can weaken mortar and damage bond", "Freezing makes mortar stronger", "Freezing improves tooling", "Freezing removes moisture evenly"],
    answer: 0,
    explanation: "Fresh mortar can be damaged by freezing before it gains strength, reducing bond and durability."
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

const shuffledBricklayerFreePracticeQuestions =
  shuffleArray(bricklayerFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "bricklayer",
  tradeTitle: "Bricklayer",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledBricklayerFreePracticeQuestions
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
    return shuffledBricklayerFreePracticeQuestions.find(q => q.question === questionText);
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
