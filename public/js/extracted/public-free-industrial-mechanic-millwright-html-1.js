const industrialMechanicFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What is the main purpose of lockout/tagout before working on machinery?",
    options: ["Prevent unexpected start-up or energy release", "Increase machine speed", "Reduce lubrication", "Change bearing size"],
    answer: 0,
    explanation: "Lockout/tagout protects workers from unexpected start-up, movement, or release of stored energy."
  },
  {
    id: 2,
    category: "Safety",
    question: "What PPE is commonly required when grinding metal?",
    options: ["Safety glasses or face shield and hearing protection", "Running shoes only", "Cotton gloves only", "No PPE"],
    answer: 0,
    explanation: "Grinding creates sparks, chips, and noise, so eye, face, and hearing protection are important."
  },
  {
    id: 3,
    category: "Hand Tools",
    question: "Why should the correct size wrench be used on a fastener?",
    options: ["To prevent slipping and rounding the fastener", "To increase rust", "To remove the need for torque", "To make the bolt softer"],
    answer: 0,
    explanation: "Correct tool size improves grip and prevents damage to fasteners and hands."
  },
  {
    id: 4,
    category: "Measuring Tools",
    question: "What tool is commonly used to measure outside diameter accurately?",
    options: ["Outside micrometer", "Hammer", "Pipe wrench", "Grease gun"],
    answer: 0,
    explanation: "An outside micrometer measures outside dimensions with high accuracy."
  },
  {
    id: 5,
    category: "Trade Math",
    question: "How many millimetres are in one metre?",
    options: ["10 mm", "100 mm", "1000 mm", "10,000 mm"],
    answer: 2,
    explanation: "One metre equals 1000 millimetres."
  },
  {
    id: 6,
    category: "Fasteners",
    question: "What is the purpose of a torque wrench?",
    options: ["Tighten fasteners to a specified torque", "Cut threads", "Measure voltage", "Apply grease"],
    answer: 0,
    explanation: "A torque wrench tightens fasteners to the correct specification."
  },
  {
    id: 7,
    category: "Bearings",
    question: "What is the main purpose of a bearing?",
    options: ["Support rotating parts and reduce friction", "Increase vibration", "Stop shaft rotation", "Replace lubrication"],
    answer: 0,
    explanation: "Bearings support rotating shafts and reduce friction between moving parts."
  },
  {
    id: 8,
    category: "Bearings",
    question: "What can happen if a bearing is installed with the wrong fit or force?",
    options: ["Bearing damage or early failure", "Longer bearing life every time", "No effect", "Improved alignment"],
    answer: 0,
    explanation: "Incorrect installation can damage races, seals, or rolling elements and shorten bearing life."
  },
  {
    id: 9,
    category: "Lubrication",
    question: "Why is proper lubrication important for machinery?",
    options: ["Reduces friction, wear, and heat", "Increases contamination", "Removes alignment needs", "Makes belts tighter"],
    answer: 0,
    explanation: "Lubrication reduces wear and heat and helps protect moving machine components."
  },
  {
    id: 10,
    category: "Lubrication",
    question: "What can result from over-greasing a bearing?",
    options: ["Excess heat, seal damage, or grease leakage", "Perfect cooling every time", "No possible damage", "Increased shaft alignment"],
    answer: 0,
    explanation: "Too much grease can create heat, blow seals, and attract contamination."
  },
  {
    id: 11,
    category: "Shaft Alignment",
    question: "Why is shaft alignment important?",
    options: ["To reduce vibration, wear, and coupling damage", "To increase belt slip", "To remove guards", "To stop lubrication"],
    answer: 0,
    explanation: "Misalignment can cause vibration, bearing wear, seal failure, and coupling damage."
  },
  {
    id: 12,
    category: "Power Transmission",
    question: "What is the purpose of a coupling?",
    options: ["Connect two shafts to transmit power", "Store oil", "Cut metal", "Measure temperature"],
    answer: 0,
    explanation: "A coupling connects shafts and transmits torque between machine components."
  },
  {
    id: 13,
    category: "Belt Drives",
    question: "What can happen if a V-belt is too loose?",
    options: ["Slipping, heat, and poor power transmission", "Better efficiency", "No wear", "Instant alignment"],
    answer: 0,
    explanation: "A loose belt can slip, overheat, wear quickly, and reduce power transfer."
  },
  {
    id: 14,
    category: "Chain Drives",
    question: "Why must chain drives have proper tension and lubrication?",
    options: ["To reduce wear and prevent jumping or failure", "To remove sprockets", "To increase noise", "To stop rotation"],
    answer: 0,
    explanation: "Correct chain tension and lubrication improve service life and prevent drive problems."
  },
  {
    id: 15,
    category: "Pumps",
    question: "What is the main function of a pump?",
    options: ["Move fluid through a system", "Generate electrical current", "Cut shafts", "Tighten fasteners"],
    answer: 0,
    explanation: "Pumps move liquids by creating flow through piping or equipment."
  },
  {
    id: 16,
    category: "Hydraulics",
    question: "What should never be used to check for a high-pressure hydraulic leak?",
    options: ["Your hand", "Cardboard", "Wood", "Proper leak detection method"],
    answer: 0,
    explanation: "High-pressure hydraulic fluid can penetrate skin and cause serious injury."
  },
  {
    id: 17,
    category: "Pneumatics",
    question: "What medium is commonly used in pneumatic systems?",
    options: ["Compressed air", "Diesel fuel", "Concrete", "Grease only"],
    answer: 0,
    explanation: "Pneumatic systems use compressed air to transmit power and operate components."
  },
  {
    id: 18,
    category: "Rigging",
    question: "What should be checked before lifting a machine component?",
    options: ["Load weight, balance, rigging capacity, and path of travel", "Paint colour", "Worker lunch time", "Bolt thread colour"],
    answer: 0,
    explanation: "Safe lifting requires knowing the load, using rated gear, balancing the load, and clearing the path."
  },
  {
    id: 19,
    category: "Preventive Maintenance",
    question: "Why are preventive maintenance inspections important?",
    options: ["They help find problems before breakdowns occur", "They replace all repairs", "They reduce safety checks", "They make machines run without oil"],
    answer: 0,
    explanation: "Preventive maintenance helps improve reliability and reduce unexpected downtime."
  },
  {
    id: 20,
    category: "Blueprints and Manuals",
    question: "Why should a mechanic use the equipment manual before repair?",
    options: ["It provides correct procedures, tolerances, and specifications", "It replaces PPE", "It removes the need for tools", "It increases machine vibration"],
    answer: 0,
    explanation: "Manuals provide safe procedures, torque values, clearances, tolerances, and troubleshooting information."
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

const shuffledIndustrialMechanicFreePracticeQuestions =
  shuffleArray(industrialMechanicFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "industrial-mechanic",
  tradeTitle: "Industrial Mechanic",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledIndustrialMechanicFreePracticeQuestions
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
    return shuffledIndustrialMechanicFreePracticeQuestions.find(q => q.question === questionText);
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
