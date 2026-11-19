const constructionelectricianFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What should you do before working on an electrical circuit?",
    options: ["Turn off power and verify it is de-energized", "Touch the wire to test it", "Use a metal ladder", "Ignore warning labels"],
    answer: 0,
    explanation: "Power must be isolated and tested before electrical work begins."
  },
  {
    id: 2,
    category: "Safety",
    question: "What PPE is commonly used by electricians?",
    options: ["Safety glasses, gloves, and safety boots", "Sandals and shorts", "Only a hard hat", "No PPE is needed"],
    answer: 0,
    explanation: "Electricians use PPE to protect against shock, cuts, impacts, and jobsite hazards."
  },
  {
    id: 3,
    category: "Tools",
    question: "What tool is used to measure voltage?",
    options: ["Multimeter", "Hammer", "Tape measure", "Pipe cutter"],
    answer: 0,
    explanation: "A multimeter can measure voltage, resistance, and current."
  },
  {
    id: 4,
    category: "Tools",
    question: "What is a wire stripper used for?",
    options: ["Removing insulation from conductors", "Cutting wood", "Bending conduit only", "Testing breakers"],
    answer: 0,
    explanation: "Wire strippers remove insulation without damaging the conductor."
  },
  {
    id: 5,
    category: "Electrical Theory",
    question: "What unit is used to measure electrical current?",
    options: ["Ampere", "Volt", "Ohm", "Watt-hour"],
    answer: 0,
    explanation: "Current is measured in amperes, often called amps."
  },
  {
    id: 6,
    category: "Electrical Theory",
    question: "What unit is used to measure electrical pressure?",
    options: ["Volt", "Ampere", "Ohm", "Metre"],
    answer: 0,
    explanation: "Voltage is electrical pressure and is measured in volts."
  },
  {
    id: 7,
    category: "Electrical Theory",
    question: "What does resistance do in a circuit?",
    options: ["Opposes current flow", "Stores water", "Measures distance", "Cuts wire"],
    answer: 0,
    explanation: "Resistance limits or opposes current flow in an electrical circuit."
  },
  {
    id: 8,
    category: "Conductors",
    question: "What material is commonly used for electrical conductors?",
    options: ["Copper", "Plastic", "Wood", "Rubber"],
    answer: 0,
    explanation: "Copper is commonly used because it conducts electricity well."
  },
  {
    id: 9,
    category: "Conductors",
    question: "What is the purpose of insulation on a wire?",
    options: ["Prevent contact with the conductor", "Increase wire weight", "Make wire magnetic", "Replace grounding"],
    answer: 0,
    explanation: "Insulation protects people and equipment from unintended contact with live conductors."
  },
  {
    id: 10,
    category: "Circuits",
    question: "What is a circuit breaker designed to do?",
    options: ["Open a circuit during overload or fault", "Increase voltage", "Store electricity", "Connect plumbing pipes"],
    answer: 0,
    explanation: "A breaker protects wiring by opening the circuit when too much current flows."
  },
  {
    id: 11,
    category: "Circuits",
    question: "What is the purpose of a fuse?",
    options: ["Protect a circuit from excessive current", "Measure conduit length", "Charge a battery", "Hold a light fixture"],
    answer: 0,
    explanation: "A fuse melts and opens the circuit when current exceeds its rating."
  },
  {
    id: 12,
    category: "Grounding",
    question: "Why is grounding important?",
    options: ["It provides a safe path for fault current", "It makes lights brighter", "It removes the need for breakers", "It increases wire size"],
    answer: 0,
    explanation: "Grounding helps fault current return safely so protective devices can operate."
  },
  {
    id: 13,
    category: "Conduit",
    question: "What is conduit used for?",
    options: ["Protecting and routing electrical conductors", "Mixing concrete", "Measuring voltage", "Cooling motors"],
    answer: 0,
    explanation: "Conduit protects wires and provides a pathway for electrical conductors."
  },
  {
    id: 14,
    category: "Conduit",
    question: "What is a conduit bender used for?",
    options: ["Bending conduit to required angles", "Testing batteries", "Cutting drywall only", "Measuring resistance"],
    answer: 0,
    explanation: "A conduit bender shapes conduit so it can fit the installation route."
  },
  {
    id: 15,
    category: "Blueprints",
    question: "What do electrical drawings show?",
    options: ["Locations of electrical devices and circuits", "Only paint colours", "Only roof slope", "Only plumbing pipe sizes"],
    answer: 0,
    explanation: "Electrical drawings show outlets, switches, panels, lighting, circuits, and related details."
  },
  {
    id: 16,
    category: "Devices",
    question: "What does a switch do in a circuit?",
    options: ["Opens or closes the circuit", "Stores energy", "Measures current", "Changes wire colour"],
    answer: 0,
    explanation: "A switch controls a circuit by opening or closing the path for current."
  },
  {
    id: 17,
    category: "Devices",
    question: "What is a receptacle used for?",
    options: ["Providing a connection point for plugs", "Bending conduit", "Testing insulation only", "Holding breakers"],
    answer: 0,
    explanation: "A receptacle allows electrical equipment to connect to a power source."
  },
  {
    id: 18,
    category: "Motors",
    question: "What does an electric motor convert electrical energy into?",
    options: ["Mechanical motion", "Water pressure", "Paint colour", "Concrete strength"],
    answer: 0,
    explanation: "Motors convert electrical energy into mechanical energy or motion."
  },
  {
    id: 19,
    category: "Trade Math",
    question: "Using Ohm's law, if voltage is 120 V and resistance is 20 ohms, what is the current?",
    options: ["6 A", "20 A", "120 A", "2400 A"],
    answer: 0,
    explanation: "Current = voltage ÷ resistance = 120 ÷ 20 = 6 amperes."
  },
  {
    id: 20,
    category: "Trade Knowledge",
    question: "Why should electrical boxes remain accessible?",
    options: ["So connections can be inspected and serviced", "So they can be hidden forever", "To reduce wire size", "To increase voltage"],
    answer: 0,
    explanation: "Electrical boxes with splices or devices must remain accessible for inspection and maintenance."
  }
]

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

const shuffledConstructionElectricianFreePracticeQuestions =
  shuffleArray(constructionelectricianFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "construction-electrician",
  tradeTitle: "Construction Electrician",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledConstructionElectricianFreePracticeQuestions
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
    return shuffledConstructionElectricianFreePracticeQuestions.find(q => q.question === questionText);
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
