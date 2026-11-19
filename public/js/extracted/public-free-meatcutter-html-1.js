const meatcutterFreePracticeQuestions = [
{
id: 1,
category: "Food Safety",
question: "What is the primary reason meat must be kept refrigerated?",
options: [
"To slow bacterial growth",
"To improve colour only",
"To reduce weight",
"To sharpen knives"
],
answer: 0,
explanation: "Refrigeration slows bacterial growth and helps keep meat safe."
},
{
id: 2,
category: "Food Safety",
question: "What is cross-contamination?",
options: [
"Transfer of harmful bacteria from one surface or food to another",
"Mixing different meat cuts",
"Grinding meat twice",
"Using multiple knives"
],
answer: 0,
explanation: "Cross-contamination can spread foodborne illness."
},
{
id: 3,
category: "Tools",
question: "What is a boning knife mainly used for?",
options: [
"Removing meat from bones",
"Cutting frozen meat blocks",
"Sharpening knives",
"Slicing bread"
],
answer: 0,
explanation: "Boning knives are designed to separate meat from bone."
},
{
id: 4,
category: "Tools",
question: "Why should knives be kept sharp?",
options: [
"They are safer and require less force",
"They make meat heavier",
"They eliminate cleaning",
"They reduce refrigeration needs"
],
answer: 0,
explanation: "Sharp knives reduce slipping and improve cutting control."
},
{
id: 5,
category: "Cuts of Meat",
question: "What is a primal cut?",
options: [
"A major section of a carcass",
"A fully cooked product",
"A trimming waste product",
"A packaging method"
],
answer: 0,
explanation: "Primal cuts are large sections that are further processed into retail cuts."
},
{
id: 6,
category: "Cuts of Meat",
question: "Which beef cut is commonly used for steaks?",
options: [
"Rib",
"Shank",
"Neck",
"Flank bone"
],
answer: 0,
explanation: "The rib section produces many premium steak cuts."
},
{
id: 7,
category: "Sanitation",
question: "How often should cutting surfaces be cleaned and sanitized?",
options: [
"As required to prevent contamination",
"Once a month",
"Only at closing",
"Never during production"
],
answer: 0,
explanation: "Regular cleaning prevents contamination."
},
{
id: 8,
category: "Sanitation",
question: "Why should hands be washed frequently?",
options: [
"To reduce contamination risks",
"To sharpen knives",
"To cool meat",
"To increase yield"
],
answer: 0,
explanation: "Handwashing is a key food-safety practice."
},
{
id: 9,
category: "Grinding",
question: "What should be checked before grinding meat?",
options: [
"Equipment cleanliness",
"Store music volume",
"Packaging colour",
"Cash register balance"
],
answer: 0,
explanation: "Grinding equipment must be clean and sanitary."
},
{
id: 10,
category: "Grinding",
question: "Why is temperature control important when grinding meat?",
options: [
"To maintain food safety",
"To change flavour instantly",
"To increase bone content",
"To sharpen blades"
],
answer: 0,
explanation: "Warm meat allows bacteria to multiply faster."
},
{
id: 11,
category: "Packaging",
question: "What is the purpose of proper meat packaging?",
options: [
"Protect quality and reduce contamination",
"Increase bone weight",
"Sharpen knives",
"Reduce sanitation"
],
answer: 0,
explanation: "Packaging helps preserve freshness and safety."
},
{
id: 12,
category: "Packaging",
question: "Why should product labels be accurate?",
options: [
"To provide correct information to customers",
"To reduce refrigeration",
"To increase shrinkage",
"To sharpen saws"
],
answer: 0,
explanation: "Accurate labels are important for food safety and regulations."
},
{
id: 13,
category: "Equipment",
question: "What machine is commonly used to cut bone-in products?",
options: [
"Band saw",
"Mixer",
"Grinder only",
"Vacuum sealer"
],
answer: 0,
explanation: "Band saws are widely used for cutting bone-in meat."
},
{
id: 14,
category: "Equipment",
question: "Before cleaning equipment, what should be done first?",
options: [
"Disconnect power",
"Increase speed",
"Sharpen blades",
"Add lubricant"
],
answer: 0,
explanation: "Lockout and disconnect procedures improve safety."
},
{
id: 15,
category: "Customer Service",
question: "Why is product knowledge important?",
options: [
"To help customers choose suitable cuts",
"To sharpen tools",
"To reduce refrigeration",
"To increase waste"
],
answer: 0,
explanation: "Customers often rely on cutters for advice."
},
{
id: 16,
category: "Yield",
question: "What does yield refer to?",
options: [
"Usable product obtained from a cut",
"Knife sharpness",
"Store profit only",
"Packaging weight"
],
answer: 0,
explanation: "Yield measures usable meat after trimming."
},
{
id: 17,
category: "Storage",
question: "Raw meat should be stored:",
options: [
"At proper refrigeration temperatures",
"Near heat sources",
"In direct sunlight",
"Outside overnight"
],
answer: 0,
explanation: "Proper storage helps prevent spoilage."
},
{
id: 18,
category: "Storage",
question: "Why is stock rotation important?",
options: [
"Older products are used first",
"Products become heavier",
"It sharpens knives",
"It improves cutting speed"
],
answer: 0,
explanation: "FIFO helps maintain freshness."
},
{
id: 19,
category: "Trade Math",
question: "A customer buys 4 kg of meat at $12 per kg. What is the total cost?",
options: [
"$48",
"$36",
"$24",
"$60"
],
answer: 0,
explanation: "4 × $12 = $48."
},
{
id: 20,
category: "Trade Knowledge",
question: "Why is trimming excess fat sometimes necessary?",
options: [
"To meet product specifications",
"To increase spoilage",
"To reduce safety",
"To dull knives"
],
answer: 0,
explanation: "Products often require specific trim standards."
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

const shuffledMeatCutterFreePracticeQuestions =
  shuffleArray(meatcutterFreePracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "meat-cutter",
  tradeTitle: "Meat Cutter",
  sectionTitle: "Free Practice Set",
  questionTimeSeconds: 90,
  questions: shuffledMeatCutterFreePracticeQuestions
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
    return shuffledMeatCutterFreePracticeQuestions.find(q => q.question === questionText);
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
