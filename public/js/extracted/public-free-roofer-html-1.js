const rooferFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What is one of the most important hazards in roofing work?",
    options: ["Falls from heights", "Low paint coverage", "Too much lighting", "Short measuring tapes"],
    answer: 0,
    explanation: "Falls are one of the greatest hazards in roofing, so fall protection and safe access are critical."
  },
  {
    id: 2,
    category: "Safety",
    question: "When is fall protection commonly required?",
    options: ["When working at heights where a fall hazard exists", "Only when painting walls", "Only indoors", "Only when using hand tools"],
    answer: 0,
    explanation: "Fall protection is required whenever workers are exposed to fall hazards according to site rules and regulations."
  },
  {
    id: 3,
    category: "Tools",
    question: "What is a roofing knife commonly used for?",
    options: ["Cutting shingles or roofing membrane", "Mixing concrete", "Measuring voltage", "Tightening pipe fittings"],
    answer: 0,
    explanation: "Roofing knives are commonly used to cut shingles, felt, underlayment, and membranes."
  },
  {
    id: 4,
    category: "Tools",
    question: "Why should ladders be secured when accessing a roof?",
    options: ["To prevent slipping or movement", "To make shingles darker", "To increase roof slope", "To reduce nail length"],
    answer: 0,
    explanation: "Securing ladders helps prevent movement and reduces the risk of falls during roof access."
  },
  {
    id: 5,
    category: "Roofing Materials",
    question: "What is the purpose of underlayment on a sloped roof?",
    options: ["Provide a secondary water-shedding layer", "Replace all shingles", "Increase attic heat only", "Support rafters"],
    answer: 0,
    explanation: "Underlayment helps protect the roof deck if water gets beneath the primary roof covering."
  },
  {
    id: 6,
    category: "Roofing Materials",
    question: "What are asphalt shingles commonly used for?",
    options: ["Sloped roof covering", "Concrete forming", "Interior plumbing", "Electrical grounding"],
    answer: 0,
    explanation: "Asphalt shingles are a common roof covering for sloped residential roofs."
  },
  {
    id: 7,
    category: "Roof Preparation",
    question: "What should be checked before installing new roofing materials?",
    options: ["Roof deck condition", "Paint colour only", "Window size only", "Door hardware only"],
    answer: 0,
    explanation: "The roof deck must be sound, dry, and properly prepared before roofing materials are installed."
  },
  {
    id: 8,
    category: "Roof Preparation",
    question: "What can happen if roofing is installed over rotten decking?",
    options: ["Fasteners may not hold and the roof may fail", "The roof becomes stronger", "Leaks stop automatically", "Ventilation improves"],
    answer: 0,
    explanation: "Rotten or damaged decking cannot properly support fasteners or roofing materials."
  },
  {
    id: 9,
    category: "Flashing",
    question: "What is the purpose of flashing?",
    options: ["Direct water away from joints, edges, and penetrations", "Increase shingle weight", "Replace roof framing", "Reduce roof slope"],
    answer: 0,
    explanation: "Flashing protects vulnerable areas where water could enter the roof system."
  },
  {
    id: 10,
    category: "Flashing",
    question: "Where is step flashing commonly used?",
    options: ["Where a sloped roof meets a wall", "In the middle of a flat ceiling", "Inside a drain pipe", "On ladder rungs"],
    answer: 0,
    explanation: "Step flashing is commonly installed along sidewalls where roof surfaces meet vertical walls."
  },
  {
    id: 11,
    category: "Drainage",
    question: "Why is proper roof drainage important?",
    options: ["To prevent ponding, leaks, and structural problems", "To increase roof weight", "To stop all ventilation", "To keep water on the roof"],
    answer: 0,
    explanation: "Good drainage directs water off the roof and helps prevent leaks and damage."
  },
  {
    id: 12,
    category: "Drainage",
    question: "What is ponding water?",
    options: ["Water that remains on a roof after rainfall", "Water inside a paint can", "Water used to mix mortar", "Water in a plumbing trap"],
    answer: 0,
    explanation: "Ponding water is standing water that remains on a roof and can lead to roof deterioration and leaks."
  },
  {
    id: 13,
    category: "Installation",
    question: "Why is correct fastener placement important when installing shingles?",
    options: ["To prevent blow-offs and leaks", "To make shingles heavier", "To reduce roof ventilation", "To increase nail rust"],
    answer: 0,
    explanation: "Fasteners must be placed in the correct location to secure shingles and maintain weather resistance."
  },
  {
    id: 14,
    category: "Installation",
    question: "What can happen if shingles are overdriven with a nail gun?",
    options: ["The shingle can be damaged and holding strength reduced", "The roof becomes waterproof forever", "The nail becomes longer", "The deck becomes thicker"],
    answer: 0,
    explanation: "Overdriven nails can cut through shingles and reduce wind resistance."
  },
  {
    id: 15,
    category: "Ventilation",
    question: "Why is attic ventilation important?",
    options: ["It helps control heat and moisture", "It replaces roof decking", "It stops all snow", "It removes the need for flashing"],
    answer: 0,
    explanation: "Proper ventilation helps reduce heat and moisture buildup that can damage roof systems."
  },
  {
    id: 16,
    category: "Ventilation",
    question: "What can poor attic ventilation contribute to?",
    options: ["Moisture problems, heat buildup, and reduced roof life", "Stronger shingles", "Better drainage only", "Less condensation always"],
    answer: 0,
    explanation: "Poor ventilation can cause condensation, heat damage, mold risk, and shorter roof service life."
  },
  {
    id: 17,
    category: "Low-Slope Roofing",
    question: "What is the purpose of overlapping seams in roofing membranes?",
    options: ["To shed water and create a watertight system", "To increase roof leaks", "To reduce material strength", "To stop drainage"],
    answer: 0,
    explanation: "Proper laps and seams help prevent water from entering the roof system."
  },
  {
    id: 18,
    category: "Maintenance",
    question: "Why should roof penetrations be inspected regularly?",
    options: ["They are common leak points", "They improve nail holding", "They replace insulation", "They increase roof slope"],
    answer: 0,
    explanation: "Penetrations such as vents, pipes, and curbs are vulnerable areas where leaks can occur."
  },
  {
    id: 19,
    category: "Trade Math",
    question: "A roof area is 20 ft long and 15 ft wide. What is the area?",
    options: ["35 sq. ft.", "150 sq. ft.", "300 sq. ft.", "600 sq. ft."],
    answer: 2,
    explanation: "Area = length × width = 20 × 15 = 300 square feet."
  },
  {
    id: 20,
    category: "Trade Knowledge",
    question: "Why should roofing manufacturer's instructions be followed?",
    options: ["To meet installation, warranty, and performance requirements", "To avoid safety rules", "To make all roofs the same colour", "To remove the need for fasteners"],
    answer: 0,
    explanation: "Manufacturer instructions provide proper installation requirements for performance, safety, and warranty compliance."
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

const shuffledRooferFreePracticeQuestions =
  shuffleArray(rooferFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "roofer",
  tradeTitle: "Roofer",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledRooferFreePracticeQuestions
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
    return shuffledRooferFreePracticeQuestions.find(q => q.question === questionText);
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
