const concretefinisherFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What PPE is most important when cutting wood with a circular saw?",
    options: ["Safety glasses and hearing protection", "Rubber boots only", "Cotton gloves only", "Dust pan only"],
    answer: 0,
    explanation: "Safety glasses protect from flying chips and hearing protection reduces noise exposure."
  },
  {
    id: 2,
    category: "Safety",
    question: "What should be checked before using a ladder on a jobsite?",
    options: ["Paint colour", "Condition, angle, footing, and setup", "Worker height only", "Number of nails nearby"],
    answer: 1,
    explanation: "A ladder must be in good condition, placed on solid footing, and set at a safe angle."
  },
  {
    id: 3,
    category: "Tools",
    question: "What is the main purpose of a framing square?",
    options: ["Check and mark 90-degree angles", "Cut concrete", "Sharpen saw blades", "Mix drywall mud"],
    answer: 0,
    explanation: "A framing square is used for layout, checking square, and marking right angles."
  },
  {
    id: 4,
    category: "Tools",
    question: "What is the safest practice before changing a saw blade?",
    options: ["Disconnect power or remove the battery", "Hold the trigger down", "Leave the saw plugged in", "Spin the blade by hand while powered"],
    answer: 0,
    explanation: "Power tools must be disconnected from power before blade changes or adjustments."
  },
  {
    id: 5,
    category: "Measurement and Layout",
    question: "What does the term 'plumb' mean in concrete-finisher?",
    options: ["Perfectly horizontal", "Perfectly vertical", "Cut at 45 degrees", "Painted level"],
    answer: 1,
    explanation: "Plumb means straight up and down, or vertical."
  },
  {
    id: 6,
    category: "Measurement and Layout",
    question: "What does the term 'level' mean in concrete-finisher?",
    options: ["Perfectly horizontal", "Perfectly vertical", "Out of square", "Curved"],
    answer: 0,
    explanation: "Level means flat and horizontal."
  },
  {
    id: 7,
    category: "Trade Math",
    question: "How many inches are in 8 feet?",
    options: ["80 in.", "88 in.", "96 in.", "108 in."],
    answer: 2,
    explanation: "1 foot equals 12 inches. 8 × 12 = 96 inches."
  },
  {
    id: 8,
    category: "Trade Math",
    question: "A board is 16 ft long and is cut into four equal pieces. How long is each piece?",
    options: ["2 ft", "3 ft", "4 ft", "6 ft"],
    answer: 2,
    explanation: "16 ft divided by 4 equals 4 ft."
  },
  {
    id: 9,
    category: "Materials",
    question: "What is plywood commonly used for in concrete-finisher?",
    options: ["Sheathing, subfloors, and forms", "Welding steel", "Mixing paint", "Sharpening tools"],
    answer: 0,
    explanation: "Plywood is commonly used for sheathing, subfloors, roof decking, and formwork."
  },
  {
    id: 10,
    category: "Materials",
    question: "Why should lumber be checked for crown before installation?",
    options: ["To orient boards consistently and improve framing alignment", "To remove all knots", "To change wood species", "To make nails longer"],
    answer: 0,
    explanation: "Checking crown helps keep joists, studs, and rafters aligned during installation."
  },
  {
    id: 11,
    category: "Framing",
    question: "What is the purpose of wall studs?",
    options: ["Support loads and provide backing for wall finishes", "Replace concrete footings", "Drain water", "Hold roof shingles only"],
    answer: 0,
    explanation: "Studs form the vertical members of a wall and support loads and finishes."
  },
  {
    id: 12,
    category: "Framing",
    question: "What is the purpose of a header over a door or window opening?",
    options: ["Carry loads around the opening", "Decorate the floor", "Reduce nail size", "Stop measuring"],
    answer: 0,
    explanation: "A header transfers loads around an opening to supporting framing members."
  },
  {
    id: 13,
    category: "Framing",
    question: "What is a common on-centre spacing for wall studs?",
    options: ["4 in. or 6 in.", "16 in. or 24 in.", "36 in. or 48 in.", "60 in. only"],
    answer: 1,
    explanation: "Wall studs are commonly spaced 16 inches or 24 inches on centre, depending on design and code."
  },
  {
    id: 14,
    category: "Fasteners",
    question: "Why is the correct nail or screw length important?",
    options: ["It provides proper holding strength", "It changes the wood colour", "It removes the need for layout", "It stops wood movement completely"],
    answer: 0,
    explanation: "Fasteners must be long enough and suitable for the material and load."
  },
  {
    id: 15,
    category: "Concrete Forms",
    question: "What is the purpose of bracing concrete formwork?",
    options: ["Keep forms aligned and resist concrete pressure", "Make concrete dry instantly", "Replace rebar", "Add paint to concrete"],
    answer: 0,
    explanation: "Bracing prevents forms from moving, bulging, or failing when concrete is placed."
  },
  {
    id: 16,
    category: "Roof Framing",
    question: "What is the purpose of rafters?",
    options: ["Support the roof deck and roof loads", "Hold floor tiles", "Support plumbing pipes only", "Replace wall studs"],
    answer: 0,
    explanation: "Rafters support roof sheathing and transfer roof loads to walls or beams."
  },
  {
    id: 17,
    category: "Stairs",
    question: "What is the tread on a stair?",
    options: ["The horizontal walking surface", "The vertical face", "The handrail only", "The bottom wall plate"],
    answer: 0,
    explanation: "The tread is the horizontal part of the stair that a person steps on."
  },
  {
    id: 18,
    category: "Stairs",
    question: "What is the riser on a stair?",
    options: ["The vertical height between treads", "The top plate", "The floor joist", "The saw blade"],
    answer: 0,
    explanation: "The riser is the vertical distance from one tread to the next."
  },
  {
    id: 19,
    category: "Building Envelope",
    question: "What is the purpose of flashing around windows and doors?",
    options: ["Direct water away from openings", "Support roof trusses", "Increase stud spacing", "Replace insulation"],
    answer: 0,
    explanation: "Flashing helps prevent water from entering wall assemblies at openings."
  },
  {
    id: 20,
    category: "Blueprint Reading",
    question: "What does a construction drawing help a carpenter determine?",
    options: ["Dimensions, locations, materials, and construction details", "Lunch schedule", "Tool brand only", "Worker pay rate"],
    answer: 0,
    explanation: "Drawings communicate the layout, dimensions, materials, and details needed for construction."
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

const shuffledConcreteFinisherFreePracticeQuestions =
  shuffleArray(concretefinisherFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "concrete-finisher",
  tradeTitle: "Concrete Finisher",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledConcreteFinisherFreePracticeQuestions
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
    return shuffledConcreteFinisherFreePracticeQuestions.find(q => q.question === questionText);
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
