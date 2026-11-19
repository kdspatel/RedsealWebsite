const motorcycleTechnicianFreePracticeQuestions = [
  {
    id: 1,
    category: "Safety",
    question: "What should be done before servicing a motorcycle on a lift?",
    options: ["Secure the motorcycle properly", "Leave it in gear only", "Remove all fuel", "Run the engine at high rpm"],
    answer: 0,
    explanation: "The motorcycle must be stable and secured to prevent tipping or falling during service."
  },
  {
    id: 2,
    category: "Safety",
    question: "Which PPE is most important when working around batteries and chemicals?",
    options: ["Eye protection and gloves", "Sandals", "Loose clothing", "No PPE"],
    answer: 0,
    explanation: "Battery acid and chemicals can injure skin and eyes, so gloves and eye protection are important."
  },
  {
    id: 3,
    category: "Tools",
    question: "What is the purpose of a torque wrench?",
    options: ["Tighten fasteners to specification", "Check tire tread only", "Measure fuel level", "Clean spark plugs"],
    answer: 0,
    explanation: "A torque wrench ensures fasteners are tightened to the manufacturer's specified torque."
  },
  {
    id: 4,
    category: "Tools",
    question: "Why should the correct size socket or wrench be used?",
    options: ["To avoid rounding fasteners", "To increase engine noise", "To lower tire pressure", "To remove oil from parts"],
    answer: 0,
    explanation: "Using the correct tool size prevents slipping and damage to fasteners."
  },
  {
    id: 5,
    category: "Engine Basics",
    question: "What are the four strokes of a four-stroke motorcycle engine?",
    options: ["Intake, compression, power, exhaust", "Start, idle, ride, stop", "Fuel, spark, oil, air", "Charge, ground, load, fuse"],
    answer: 0,
    explanation: "A four-stroke engine operates through intake, compression, power, and exhaust strokes."
  },
  {
    id: 6,
    category: "Engine Basics",
    question: "What is the main purpose of engine oil?",
    options: ["Lubricate and protect moving parts", "Increase tire grip", "Cool brake discs only", "Clean the chain only"],
    answer: 0,
    explanation: "Engine oil reduces friction, helps cool parts, cleans, and protects internal engine components."
  },
  {
    id: 7,
    category: "Fuel and Air",
    question: "What is the purpose of the air filter?",
    options: ["Clean air before it enters the engine", "Filter brake fluid", "Increase exhaust noise", "Cool the tire"],
    answer: 0,
    explanation: "The air filter keeps dirt and debris out of the engine intake system."
  },
  {
    id: 8,
    category: "Fuel and Air",
    question: "What can a dirty air filter cause?",
    options: ["Poor performance and fuel economy", "Higher tire pressure", "Stronger brakes", "More battery voltage"],
    answer: 0,
    explanation: "A restricted air filter can reduce airflow and affect engine performance."
  },
  {
    id: 9,
    category: "Electrical",
    question: "What does a fully charged 12-volt motorcycle battery usually read at rest?",
    options: ["About 6.0 volts", "About 9.5 volts", "About 12.6 volts", "About 18.0 volts"],
    answer: 2,
    explanation: "A fully charged 12-volt lead-acid battery commonly reads about 12.6 volts at rest."
  },
  {
    id: 10,
    category: "Electrical",
    question: "What is the purpose of a fuse?",
    options: ["Protect the circuit from excessive current", "Increase engine compression", "Lubricate bearings", "Cool the exhaust"],
    answer: 0,
    explanation: "A fuse opens the circuit if current becomes too high, helping prevent wiring damage."
  },
  {
    id: 11,
    category: "Starting and Charging",
    question: "What component cranks the engine during starting?",
    options: ["Starter motor", "Radiator", "Fuel tank", "Brake caliper"],
    answer: 0,
    explanation: "The starter motor turns the engine over so it can start running."
  },
  {
    id: 12,
    category: "Starting and Charging",
    question: "What is the function of the charging system?",
    options: ["Recharge the battery and power electrical loads", "Increase chain slack", "Reduce engine oil level", "Stop fuel flow"],
    answer: 0,
    explanation: "The charging system maintains battery charge and supplies electrical power while the engine runs."
  },
  {
    id: 13,
    category: "Brakes",
    question: "What is the purpose of brake fluid?",
    options: ["Transfer hydraulic pressure to the brakes", "Lubricate the chain", "Cool the engine oil", "Clean the air filter"],
    answer: 0,
    explanation: "Brake fluid transfers force from the lever or pedal through the hydraulic brake system."
  },
  {
    id: 14,
    category: "Brakes",
    question: "What can a spongy brake lever indicate?",
    options: ["Air in the brake hydraulic system", "Correct brake operation", "A full fuel tank", "A clean air filter"],
    answer: 0,
    explanation: "Air in the hydraulic brake system can make the lever feel soft or spongy."
  },
  {
    id: 15,
    category: "Drive System",
    question: "Why is proper drive chain slack important?",
    options: ["To prevent wear, damage, or poor power transfer", "To increase battery voltage", "To reduce brake pressure", "To cool the engine"],
    answer: 0,
    explanation: "Incorrect chain slack can cause excessive wear, poor operation, or drivetrain damage."
  },
  {
    id: 16,
    category: "Drive System",
    question: "What should be done to a motorcycle drive chain during maintenance?",
    options: ["Inspect, clean, lubricate, and adjust it", "Paint it only", "Remove all lubricant", "Tighten it fully with no slack"],
    answer: 0,
    explanation: "Drive chains require regular inspection, cleaning, lubrication, and adjustment."
  },
  {
    id: 17,
    category: "Tires and Wheels",
    question: "Why is correct tire pressure important on a motorcycle?",
    options: ["For handling, safety, tire wear, and fuel economy", "To increase engine compression", "To replace wheel balancing", "To stop oil leaks"],
    answer: 0,
    explanation: "Motorcycle handling and safety depend heavily on correct tire pressure and tire condition."
  },
  {
    id: 18,
    category: "Tires and Wheels",
    question: "What should be checked when inspecting motorcycle tires?",
    options: ["Pressure, tread depth, damage, and wear pattern", "Paint colour only", "Fuel level only", "Spark plug colour only"],
    answer: 0,
    explanation: "Tire inspections should include pressure, tread, cracking, punctures, and abnormal wear."
  },
  {
    id: 19,
    category: "Suspension and Steering",
    question: "What can worn steering head bearings cause?",
    options: ["Poor handling or looseness in steering", "More fuel pressure", "Higher battery charge", "Better brake bleeding"],
    answer: 0,
    explanation: "Worn or loose steering head bearings can cause unstable handling, knocking, or steering play."
  },
  {
    id: 20,
    category: "Maintenance",
    question: "Why should the manufacturer's service schedule be followed?",
    options: ["To maintain safety, reliability, and performance", "To avoid all inspections", "To increase wear", "To skip oil changes"],
    answer: 0,
    explanation: "Scheduled maintenance helps prevent failures and keeps the motorcycle safe and reliable."
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

const shuffledMotorcycleTechnicianFreePracticeQuestions =
  shuffleArray(motorcycleTechnicianFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "motorcycle-technician",
  tradeTitle: "Motorcycle Technician",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledMotorcycleTechnicianFreePracticeQuestions
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
    return shuffledMotorcycleTechnicianFreePracticeQuestions.find(q => q.question === questionText);
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
