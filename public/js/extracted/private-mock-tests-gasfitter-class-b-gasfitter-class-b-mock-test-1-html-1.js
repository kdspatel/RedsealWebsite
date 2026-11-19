const gasfitterClassBIPQuestions = [
  {
    "id": 1,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A furnace ignition module receives 24 V between TH and TR, but the spark output is intermittent. Flame sensor, ground, and wiring are clean and tight. What is the most likely next concern?",
    "options": [
      "Defective ignition control module",
      "Undersized gas pipe only",
      "Dirty blower wheel only",
      "Incorrect vent slope only"
    ],
    "answer": 0,
    "explanation": "If the control has proper input voltage and external wiring is verified, the module itself may be failing. Intermittent spark can be caused by weak internal electronics. A module should only be replaced after confirming power, ground, safeties, and ignition cable condition."
  },
  {
    "id": 2,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A flame rectification system proves flame for 2 seconds, then drops out. Microamp signal is below specification. Which condition is most likely?",
    "options": [
      "Poor flame rod grounding or weak flame contact",
      "Excessive duct insulation",
      "Oversized gas meter only",
      "Incorrect thermostat temperature setting"
    ],
    "answer": 0,
    "explanation": "Flame rectification requires flame contact, clean sensor surface, and a strong ground path. A weak microamp signal causes the control to think flame is lost. Grounding, polarity, flame rod condition, and burner flame pattern must be checked."
  },
  {
    "id": 3,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A replacement integrated furnace control board physically fits and has the same plug shape, but the ignition timing differs from the original board. What is the correct decision?",
    "options": [
      "Use it because the plug matches",
      "Use it only if it costs less",
      "Do not use it unless it is approved for that appliance",
      "Install it and bypass the ignition sequence"
    ],
    "answer": 2,
    "explanation": "Ignition timing is safety-critical. Pre-purge, trial-for-ignition, flame failure response, and lockout timing must match approved specifications. Physical fit does not prove compatibility."
  },
  {
    "id": 4,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A hot surface igniter is replaced with one that has a different resistance and current rating. What can happen?",
    "options": [
      "The igniter may fail or ignition timing may be unsafe",
      "The gas pressure will automatically correct itself",
      "The vent connector will draft better",
      "The appliance input rating will increase safely"
    ],
    "answer": 0,
    "explanation": "Hot surface igniters are matched to control output and ignition design. Wrong electrical characteristics can damage the igniter or module. Replacement parts must match manufacturer specifications."
  },
  {
    "id": 5,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A UV flame scanner is installed where it can “see” another burner flame through an opening. What is the danger?",
    "options": [
      "False flame proving",
      "Low gas pressure",
      "Excessive blower speed",
      "Reduced pipe friction"
    ],
    "answer": 0,
    "explanation": "A UV scanner must only detect the intended flame. False flame detection can allow fuel flow when the correct burner is not actually lit. Scanner sighting and shielding are critical."
  },
  {
    "id": 6,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "A flame rod has been cleaned, but the flame signal remains weak. Which test is most important next?",
    "options": [
      "Verify ground continuity between burner and control",
      "Measure duct static pressure only",
      "Increase thermostat heat anticipator only",
      "Replace the gas meter immediately"
    ],
    "answer": 0,
    "explanation": "Flame rectification requires a complete electrical path through flame, burner, ground, and control. A poor ground can reduce microamp signal even with a clean rod. Burner ground and polarity must be verified."
  },
  {
    "id": 7,
    "category": "Block D / Task 10 — Selects and Installs Electronic Components",
    "question": "An electronic ignition control locks out after three failed ignition trials. Why is lockout required?",
    "options": [
      "To prevent repeated unburned gas release",
      "To increase manifold pressure",
      "To cool the blower motor",
      "To reset the thermostat automatically"
    ],
    "answer": 0,
    "explanation": "Repeated ignition attempts can release unburned fuel. Lockout stops the sequence until the fault is corrected or reset properly. This reduces explosion and fire risk."
  },
  {
    "id": 8,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A 24 V transformer supplies a gas valve drawing 0.7 A, an ignition module drawing 0.4 A, and two relays drawing 0.2 A each. What minimum VA load is required?",
    "options": [
      "24 VA",
      "36 VA",
      "48 VA",
      "72 VA"
    ],
    "answer": 1,
    "explanation": "Total current = 0.7 + 0.4 + 0.2 + 0.2 = 1.5 A. VA = volts × amps = 24 × 1.5 = 36 VA. A transformer should be selected with adequate capacity above connected load."
  },
  {
    "id": 9,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A 40 VA transformer is repeatedly failing. The connected 24 V load totals 2.1 A. What is the issue?",
    "options": [
      "The transformer is overloaded",
      "The gas valve is too small",
      "The vent is oversized",
      "The regulator vent is blocked"
    ],
    "answer": 0,
    "explanation": "24 V × 2.1 A = 50.4 VA. A 40 VA transformer cannot safely carry that load. Overloading causes overheating and premature failure."
  },
  {
    "id": 10,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A contactor coil is rated 24 V, but it is connected to 120 V. What is the likely result?",
    "options": [
      "Coil burnout",
      "Lower gas input",
      "Better contact pressure forever",
      "Correct normal operation"
    ],
    "answer": 0,
    "explanation": "A coil must match the control voltage. Applying excessive voltage can overheat and destroy the coil. Voltage rating must be verified before installation."
  },
  {
    "id": 11,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A motor starter has overload heaters selected too high for the motor full-load current. What is the hazard?",
    "options": [
      "Motor may not be protected from overload",
      "Motor will always run cooler",
      "Gas pressure will be regulated better",
      "Flame signal will increase"
    ],
    "answer": 0,
    "explanation": "Overload protection must match the motor’s rated current. Oversized protection may allow damaging current to continue. Motor nameplate data is required for proper selection."
  },
  {
    "id": 12,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A pressure switch replacement has the correct pressure rating but a lower electrical contact rating than the original. Why is this unacceptable?",
    "options": [
      "Contacts may fail under circuit load",
      "Pressure switches do not need electrical ratings",
      "Lower contact rating increases safety",
      "It will automatically reduce voltage"
    ],
    "answer": 0,
    "explanation": "Switch contacts must handle the circuit voltage and current. Underrated contacts can arc, weld, or fail open. Both pressure and electrical ratings must be correct."
  },
  {
    "id": 13,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A service switch is installed inside a furnace cabinet where it can only be reached after removing panels with tools. What is the concern?",
    "options": [
      "It may not serve as an accessible disconnect",
      "It increases flame signal",
      "It lowers line voltage",
      "It improves combustion air"
    ],
    "answer": 0,
    "explanation": "A service disconnect must allow safe isolation for servicing. If it is not readily accessible, it may not meet the intent of safe service. Electrical isolation must be practical and reliable."
  },
  {
    "id": 14,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A replacement blower motor has correct horsepower and voltage but opposite rotation. What is the likely result?",
    "options": [
      "Reduced airflow and possible limit trips",
      "Higher fuel heating value",
      "Better combustion automatically",
      "Lower electrical current in every case"
    ],
    "answer": 0,
    "explanation": "Blower wheels are designed for a specific rotation. Reverse rotation can move very little air. Low airflow can overheat the furnace and trip safety limits."
  },
  {
    "id": 15,
    "category": "Block D / Task 11 — Selects and Installs Electrical Components",
    "question": "A capacitor is replaced with the same microfarad rating but a lower voltage rating. What is the issue?",
    "options": [
      "The capacitor may fail from overvoltage stress",
      "Lower voltage rating is always safer",
      "Capacitance alone is never important",
      "The gas valve will regulate pressure better"
    ],
    "answer": 0,
    "explanation": "Capacitors must match capacitance and meet or exceed voltage rating. A lower voltage rating can break down under normal operation. Incorrect capacitor selection can damage motors and controls."
  },
  {
    "id": 16,
    "category": "Block D / Task 12 — Installs Automation and Instrumentation Control Systems",
    "question": "A building automation system sends a 0–10 V signal to modulate a burner, but the burner actuator is configured for 4–20 mA. What will happen?",
    "options": [
      "The actuator may not respond correctly",
      "Gas pressure will automatically stabilize",
      "The burner will safely run at perfect high fire",
      "Flame safeguard timing will no longer matter"
    ],
    "answer": 0,
    "explanation": "Control signal type must match the actuator input. A voltage signal and current signal are not interchangeable. Incorrect configuration can cause improper firing rate control."
  },
  {
    "id": 17,
    "category": "Block D / Task 12 — Installs Automation and Instrumentation Control Systems",
    "question": "A temperature sensor is installed too close to a supply air outlet. What problem can result?",
    "options": [
      "False temperature reading and poor control response",
      "Higher gas heating value",
      "Stronger flame rectification",
      "Lower pipe pressure drop"
    ],
    "answer": 0,
    "explanation": "Sensor location affects accuracy. Supply air can make the controller read a temperature that does not represent the space. Poor sensor placement can cause short cycling or comfort issues."
  },
  {
    "id": 18,
    "category": "Block D / Task 12 — Installs Automation and Instrumentation Control Systems",
    "question": "A pressure transducer is wired with reversed polarity. What is the most likely result?",
    "options": [
      "No signal, incorrect signal, or damaged device",
      "Higher outlet gas pressure",
      "Better burner turndown",
      "More accurate combustion readings"
    ],
    "answer": 0,
    "explanation": "Many electronic sensors require correct polarity. Incorrect wiring can prevent output or damage electronics. Instrumentation wiring must follow manufacturer diagrams."
  },
  {
    "id": 19,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A gas pipe is cut and threaded, but the inside edge is not reamed. What is the most serious concern?",
    "options": [
      "Burrs can restrict flow or break loose into controls",
      "Gas pressure will become too high",
      "The pipe will become electrically energized",
      "The vent system will fail immediately"
    ],
    "answer": 0,
    "explanation": "Burrs create flow disturbance and possible restriction. Metal fragments can damage regulators, valves, and burner orifices. Pipe must be cleaned and reamed before assembly."
  },
  {
    "id": 20,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A threaded joint is assembled with sealant on both male and female threads. Why is this poor practice?",
    "options": [
      "Excess sealant may enter the gas stream",
      "It lowers gas density",
      "It improves regulator accuracy",
      "It eliminates pressure testing"
    ],
    "answer": 0,
    "explanation": "Sealant should be applied properly to avoid contamination. Excess compound can break loose and plug controls or orifices. Thread sealant must be approved for the fuel gas."
  },
  {
    "id": 21,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A gas line is supported by the appliance cabinet instead of independent hangers. What is the hazard?",
    "options": [
      "Vibration and weight can stress joints and cause leaks",
      "It improves appliance grounding",
      "It increases gas capacity",
      "It reduces combustion air requirement"
    ],
    "answer": 0,
    "explanation": "Gas piping must not rely on appliance cabinets for support. Weight and vibration can damage joints over time. Independent support maintains alignment and safety."
  },
  {
    "id": 22,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A union is installed upstream of the appliance shutoff valve. What is the main concern?",
    "options": [
      "The union cannot be isolated safely before opening",
      "The union will increase gas pressure",
      "The shutoff valve will become automatic",
      "The appliance will overfire"
    ],
    "answer": 0,
    "explanation": "A shutoff valve should isolate the appliance and union for service. Opening a union without upstream isolation can release gas. Component order affects safe servicing."
  },
  {
    "id": 23,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A copper tube flare has a rough, uneven surface but tightens firmly. What is the correct action?",
    "options": [
      "Remake the flare",
      "Add pipe dope to the flare face",
      "Tighten until the nut bottoms out",
      "Heat the flare with a torch after assembly"
    ],
    "answer": 0,
    "explanation": "Flare fittings seal on the flare surface. Rough or uneven flares may leak even if tightened. The flare should be cut off and properly remade."
  },
  {
    "id": 24,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A gas appliance is connected using a flexible connector that passes through a wall. What is the concern?",
    "options": [
      "Flexible connectors are generally not permitted through walls or concealed spaces",
      "It increases flexibility and is always safer",
      "It reduces pressure drop to zero",
      "It eliminates the need for a shutoff valve"
    ],
    "answer": 0,
    "explanation": "Flexible connectors must be installed within their listing and instructions. Passing through walls can conceal damage and create unsafe conditions. Approved piping methods must be used through building assemblies."
  },
  {
    "id": 25,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A pipe sleeve through concrete is omitted because the pipe “fits tightly.” Why is this a problem?",
    "options": [
      "Concrete contact can damage or corrode piping",
      "Tight concrete contact improves support",
      "Gas pressure increases safely",
      "Sleeves are only decorative"
    ],
    "answer": 0,
    "explanation": "Piping may need protection where passing through masonry or concrete. Movement, corrosion, and abrasion can damage the pipe. Sleeving also allows inspection and protection."
  },
  {
    "id": 26,
    "category": "Block E / Task 13 — Installs Gas-Fired System Piping and Equipment",
    "question": "A new gas line is connected to an appliance before pressure testing. The appliance gas valve is not rated for the test pressure. What must be done?",
    "options": [
      "Isolate or disconnect the appliance during the test",
      "Test through the appliance valve anyway",
      "Lower test time to protect the valve",
      "Use the burner orifice as a relief opening"
    ],
    "answer": 0,
    "explanation": "Appliance controls can be damaged by excessive test pressure. Components must not be exposed beyond their rating. The piping must still be pressure tested correctly."
  },
  {
    "id": 27,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A regulator is installed backward even though pipe threads tighten correctly. What is the result?",
    "options": [
      "Regulator may not control pressure properly",
      "It will regulate better",
      "It will become a check valve approved for all uses",
      "It will increase flame signal"
    ],
    "answer": 0,
    "explanation": "Regulators are directional components. Flow arrows and manufacturer instructions must be followed. Reverse installation can cause unsafe pressure control."
  },
  {
    "id": 28,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A regulator vent terminates near a fresh-air intake. What is the danger?",
    "options": [
      "Vented gas may be drawn into the building",
      "The regulator outlet pressure will always drop to zero",
      "The air intake will clean the regulator",
      "Combustion efficiency will increase"
    ],
    "answer": 0,
    "explanation": "Regulator vents must discharge to a safe location. Gas must not enter buildings or reach ignition sources. Vent placement is a life-safety issue."
  },
  {
    "id": 29,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A sediment trap is installed horizontally with no effective drop leg. What is the issue?",
    "options": [
      "It may not collect debris or condensate properly",
      "It will increase appliance input",
      "It replaces the regulator",
      "It improves flame rectification"
    ],
    "answer": 0,
    "explanation": "A sediment trap must provide a place for debris or condensate to fall out of flow. Incorrect orientation reduces its effectiveness. Sensitive controls can become contaminated."
  },
  {
    "id": 30,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A gas valve is installed in a location exposed to water dripping from piping above. What is the concern?",
    "options": [
      "Corrosion or electrical/control failure",
      "Higher gas pressure",
      "Better cooling of the valve",
      "Improved combustion air"
    ],
    "answer": 0,
    "explanation": "Gas valves and controls must be protected from damaging conditions. Water can corrode bodies, damage coils, or affect wiring. Component location must consider environment."
  },
  {
    "id": 31,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A pressure switch tubing line is sagging and partially filled with condensate. What can happen?",
    "options": [
      "Incorrect pressure signal to the switch",
      "Stronger gas flow",
      "Higher flame signal",
      "Better draft control"
    ],
    "answer": 0,
    "explanation": "Tubing must transmit pressure accurately. Condensate can block or dampen the pressure signal. Incorrect switch operation can cause nuisance shutdown or unsafe operation."
  },
  {
    "id": 32,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A valve train component is installed with pipe strain pulling it out of alignment. Why is this dangerous?",
    "options": [
      "It can distort the body, damage seals, or cause leakage",
      "It increases regulator accuracy",
      "It improves pipe support",
      "It lowers CO production automatically"
    ],
    "answer": 0,
    "explanation": "Components must be installed without mechanical stress. Pipe strain can crack castings or distort internal parts. Proper support and alignment are required."
  },
  {
    "id": 33,
    "category": "Block E / Task 14 — Installs Gas-Fired System Components",
    "question": "A manual shutoff valve is installed behind fixed equipment requiring disassembly to reach it. What is the issue?",
    "options": [
      "It is not accessible for emergency or service isolation",
      "It will regulate pressure better",
      "It prevents all gas leaks",
      "It improves combustion efficiency"
    ],
    "answer": 0,
    "explanation": "Shutoff valves must be accessible. Emergency isolation should not require major disassembly. Poor accessibility delays safe response."
  },
  {
    "id": 34,
    "category": "Block E / Task 15 — Installs Propane Storage and Handling Systems",
    "question": "A propane cylinder is placed in a basement for temporary heat. What is the major hazard?",
    "options": [
      "Propane vapour can collect in low areas if released",
      "Propane is lighter than air and harmless indoors",
      "Cylinders improve indoor combustion air",
      "Propane cannot ignite indoors"
    ],
    "answer": 0,
    "explanation": "Propane is heavier than air. A leak indoors can settle in low areas and create an explosive mixture. Propane storage and use must follow strict location requirements."
  },
  {
    "id": 35,
    "category": "Block E / Task 15 — Installs Propane Storage and Handling Systems",
    "question": "A propane container relief valve is pointed toward a building opening. Why is this unsafe?",
    "options": [
      "Relief discharge could enter the building",
      "It improves container pressure control",
      "It prevents venting",
      "It makes propane lighter than air"
    ],
    "answer": 0,
    "explanation": "Relief valves must discharge safely. Released propane must not enter buildings or collect near ignition sources. Container orientation and location are critical."
  },
  {
    "id": 36,
    "category": "Block E / Task 15 — Installs Propane Storage and Handling Systems",
    "question": "A propane container is overfilled. What is the danger when temperature rises?",
    "options": [
      "Liquid expansion can cause relief valve discharge",
      "The container pressure will drop to zero",
      "Propane becomes non-flammable",
      "The regulator will become larger"
    ],
    "answer": 0,
    "explanation": "Propane liquid expands with temperature. Overfilling reduces vapour space and can cause pressure rise. Relief valve discharge creates fire and explosion hazards."
  },
  {
    "id": 37,
    "category": "Block E / Task 15 — Installs Propane Storage and Handling Systems",
    "question": "A first-stage propane regulator is installed where snow can bury the vent. What can happen?",
    "options": [
      "Regulator operation or relief venting can be blocked",
      "Outlet pressure becomes perfectly stable",
      "Propane changes to natural gas",
      "The cylinder cannot supply vapour"
    ],
    "answer": 0,
    "explanation": "Regulator vents must remain clear. Snow, ice, insects, or debris can block venting and diaphragm movement. Blocked vents can create unsafe pressure conditions."
  },
  {
    "id": 38,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "During a pressure test, the gauge drops slightly over the test period. What is the correct conclusion?",
    "options": [
      "The system must be considered leaking until proven otherwise",
      "Small drops are always acceptable",
      "The gauge should be ignored",
      "The system can be placed into service if no odour is present"
    ],
    "answer": 0,
    "explanation": "A pressure loss indicates possible leakage or test setup failure. Leaks must be located, repaired, and retested. Odour is not a substitute for pressure testing."
  },
  {
    "id": 39,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A technician tests for leaks using an open flame because the room is well ventilated. What is correct?",
    "options": [
      "This is unsafe and unacceptable",
      "It is acceptable outdoors only",
      "It is faster and approved",
      "It is acceptable if gas pressure is low"
    ],
    "answer": 0,
    "explanation": "Open flames can ignite leaking gas. Approved leak detection methods must be used. Ventilation does not make flame testing safe."
  },
  {
    "id": 40,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A manometer shows inlet pressure within range with one appliance firing, but below minimum when all appliances fire. What does this indicate?",
    "options": [
      "Supply capacity problem under load",
      "Proper full-load operation",
      "A defective thermostat only",
      "Excess combustion air only"
    ],
    "answer": 0,
    "explanation": "Full-load testing reveals whether the system can maintain pressure. Low pressure under demand may indicate undersized piping, regulator, or meter. Static or single-appliance pressure is not enough."
  },
  {
    "id": 41,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A combustion test shows CO rising steadily as the appliance continues to run. What is the best response?",
    "options": [
      "Shut down and investigate combustion, venting, and air supply",
      "Leave it because startup CO is normal forever",
      "Increase thermostat setting",
      "Reduce blower speed only"
    ],
    "answer": 0,
    "explanation": "Rising CO indicates combustion is becoming unsafe. Causes may include poor air supply, burner issues, or venting failure. The appliance should not continue operating until corrected."
  },
  {
    "id": 42,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A gas meter has a 2 ft³ test dial. It completes one revolution in 72 seconds. Pressure factor is 1.0. What is the gas flow?",
    "options": [
      "50 ft³/hr",
      "100 ft³/hr",
      "150 ft³/hr",
      "200 ft³/hr"
    ],
    "answer": 1,
    "explanation": "ft³/hr = size of dial ÷ seconds per revolution × 3600 × pressure factor. 2 ÷ 72 × 3600 × 1.0 = 100 ft³/hr. Clocking the meter helps verify appliance input."
  },
  {
    "id": 43,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 1 ft³ meter dial rotates once in 30 seconds. Pressure factor is 1.1. What is the corrected gas flow?",
    "options": [
      "108 ft³/hr",
      "120 ft³/hr",
      "132 ft³/hr",
      "396 ft³/hr"
    ],
    "answer": 2,
    "explanation": "ft³/hr = 1 ÷ 30 × 3600 × 1.1. 1 ÷ 30 × 3600 = 120; 120 × 1.1 = 132 ft³/hr. Pressure factor corrects the volume calculation."
  },
  {
    "id": 44,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A duct furnace has 80,000 Btuh output and a measured temperature rise of 40°F. What airflow is required?",
    "options": [
      "925 cfm",
      "1,481 cfm",
      "1,852 cfm",
      "3,200 cfm"
    ],
    "answer": 2,
    "explanation": "Cfm = Btuh ÷ 1.08 × ΔT. 80,000 ÷ 1.08 ÷ 40 = approximately 1,852 cfm. This formula connects heat output, airflow, and temperature rise."
  },
  {
    "id": 45,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new appliance lights smoothly, but combustion analysis shows excessive CO. What should be done?",
    "options": [
      "Continue commissioning diagnosis and do not approve operation",
      "Approve it because ignition is smooth",
      "Disable the analyzer alarm",
      "Increase thermostat setting"
    ],
    "answer": 0,
    "explanation": "Smooth ignition does not prove safe combustion. CO readings must be within acceptable manufacturer and safety limits. Air supply, venting, burner condition, and input must be checked."
  },
  {
    "id": 46,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "During commissioning, why should safety shutdown be tested?",
    "options": [
      "To verify fuel stops when unsafe conditions occur",
      "To increase appliance input",
      "To avoid checking gas pressure",
      "To reduce vent length"
    ],
    "answer": 0,
    "explanation": "Safety controls must operate during actual fault conditions. Testing confirms the appliance shuts down correctly. Untested safeties may fail when needed."
  },
  {
    "id": 47,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A modulating burner is adjusted only at high fire. Why is this incomplete?",
    "options": [
      "Low fire and intermediate firing rates may still be unsafe",
      "High fire proves every firing rate automatically",
      "Low fire never produces CO",
      "Modulation does not affect combustion"
    ],
    "answer": 0,
    "explanation": "Combustion can vary across firing range. Low fire may have different air-fuel behaviour than high fire. Commissioning must verify required operating points."
  },
  {
    "id": 48,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A furnace has a temperature rise above the rating plate range after startup. What should be checked?",
    "options": [
      "Airflow, filter, blower speed, duct restriction, and input",
      "Paint colour and cabinet screws only",
      "Thermostat display brightness only",
      "Gas odour level only"
    ],
    "answer": 0,
    "explanation": "High temperature rise can mean low airflow or overfiring. Filters, blower speed, duct restrictions, and gas input affect rise. Operating outside rating range can damage the heat exchanger."
  },
  {
    "id": 49,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "After commissioning, why should the customer be shown the appliance shutoff valve?",
    "options": [
      "So fuel can be isolated in an emergency",
      "So they can adjust manifold pressure",
      "So they can bypass safeties",
      "So they can remove the regulator vent"
    ],
    "answer": 0,
    "explanation": "Customers should know basic emergency shutdown procedures. Shutoff valve location is important for safety. They should not be instructed to adjust technical settings."
  },
  {
    "id": 50,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A newly installed direct-vent appliance operates normally until wind gusts cause flame loss. What should be checked?",
    "options": [
      "Vent termination location, clearances, and manufacturer instructions",
      "Thermostat colour",
      "Gas pipe paint thickness",
      "Blower belt tension only"
    ],
    "answer": 0,
    "explanation": "Wind effects can disturb intake or exhaust if termination is incorrect. Clearances and placement must follow manufacturer instructions. Commissioning includes verifying operation under expected conditions."
  },
  {
    "id": 51,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A commissioning report lacks inlet pressure, manifold pressure, combustion readings, and safety test results. What is the main weakness?",
    "options": [
      "There is no proof of safe verified operation",
      "The appliance cannot operate physically",
      "The gas meter will stop working",
      "The thermostat will lose calibration"
    ],
    "answer": 0,
    "explanation": "Commissioning records document actual measured conditions. Missing data weakens safety, compliance, and future troubleshooting. Complete records are part of professional commissioning."
  },
  {
    "id": 52,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "During annual service, the burner ports are partially blocked with lint. What is the main risk?",
    "options": [
      "Poor combustion and possible CO production",
      "Higher airflow through ductwork",
      "Increased gas heating value",
      "Improved flame stability"
    ],
    "answer": 0,
    "explanation": "Blocked burner ports affect gas-air mixing. Poor flame pattern can cause soot, delayed ignition, or CO. Burners must be cleaned and inspected."
  },
  {
    "id": 53,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A flame sensor is cleaned every year but keeps fouling quickly. What should be investigated?",
    "options": [
      "Combustion quality, grounding, flame position, and contamination",
      "Thermostat colour",
      "Gas meter paint",
      "Duct insulation thickness only"
    ],
    "answer": 0,
    "explanation": "Repeated fouling often indicates an underlying condition. Poor combustion, contamination, or flame position can affect the sensor. Cleaning alone may not solve the root cause."
  },
  {
    "id": 54,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A furnace filter is severely plugged during maintenance. What problem can it cause?",
    "options": [
      "High temperature rise and limit trips",
      "Higher gas pressure",
      "Better heat exchanger cooling",
      "Improved combustion air"
    ],
    "answer": 0,
    "explanation": "A dirty filter reduces airflow. Low airflow causes overheating and poor heat transfer. The furnace may cycle on high limit."
  },
  {
    "id": 55,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A condensate trap on a condensing appliance is dry after summer shutdown. Why is this important?",
    "options": [
      "It may allow flue gases to pass through the drain path",
      "It increases gas pressure",
      "It proves proper combustion",
      "It improves ignition spark"
    ],
    "answer": 0,
    "explanation": "Condensate traps prevent combustion products from escaping through the drain. A dry trap may not seal properly. Trap condition should be checked during service."
  },
  {
    "id": 56,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A technician finds corrosion around a vent joint during maintenance. What should be suspected?",
    "options": [
      "Condensate leakage, wrong venting, or poor joint assembly",
      "High thermostat setting only",
      "Correct normal operation",
      "Excessive filter cleanliness"
    ],
    "answer": 0,
    "explanation": "Corrosion often indicates moisture or acidic condensate exposure. Incorrect vent material, slope, or joint assembly may be involved. Venting defects can create safety hazards."
  },
  {
    "id": 57,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "Why should maintenance include checking appliance input?",
    "options": [
      "Overfiring or underfiring affects safety, efficiency, and equipment life",
      "Input never changes after installation",
      "Input is controlled only by thermostat colour",
      "Input checks replace leak testing forever"
    ],
    "answer": 0,
    "explanation": "Gas pressure, orifices, and regulator performance affect input. Incorrect input can cause CO, overheating, or poor performance. Input should be verified using approved methods."
  },
  {
    "id": 58,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace locks out with pressure switch open. The inducer runs, tubing is clear, and vent is clear. What should be checked next?",
    "options": [
      "Actual draft/pressure signal and switch rating",
      "Replace the gas valve immediately",
      "Increase manifold pressure",
      "Bypass the pressure switch"
    ],
    "answer": 0,
    "explanation": "A pressure switch proves actual pressure differential. If tubing and vent are clear, the inducer performance or switch calibration may be involved. The switch must not be bypassed."
  },
  {
    "id": 59,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A gas valve is energized with correct voltage, but no gas flows. Inlet pressure is present. What is likely?",
    "options": [
      "Failed or stuck gas valve",
      "Dirty air filter only",
      "Oversized vent only",
      "Incorrect thermostat display"
    ],
    "answer": 0,
    "explanation": "If voltage and inlet gas are present, the valve should open. A failed coil or stuck internal valve can prevent flow. Replacement must be followed by leak, pressure, and operation checks."
  },
  {
    "id": 60,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A burner has delayed ignition after a gas valve replacement. What should be checked first?",
    "options": [
      "Manifold pressure, burner alignment, ignition source, and carryover ports",
      "Customer’s thermostat schedule only",
      "Paint on the gas pipe only",
      "Furnace cabinet label only"
    ],
    "answer": 0,
    "explanation": "Delayed ignition can be caused by pressure, burner contamination, or poor ignition placement. Carryover must light smoothly across burners. Delayed ignition can cause rollout or damage."
  },
  {
    "id": 61,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A motor repeatedly fails shortly after replacement. What is the best repair approach?",
    "options": [
      "Diagnose the cause such as airflow restriction, wheel drag, voltage, or capacitor",
      "Keep replacing motors",
      "Install a larger breaker only",
      "Reduce gas pressure"
    ],
    "answer": 0,
    "explanation": "Repeated failure indicates an unresolved root cause. Mechanical load, incorrect capacitor, voltage, or airflow restrictions can overload motors. Repair requires diagnosis, not parts swapping."
  },
  {
    "id": 62,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired appliance operates, but combustion readings are outside limits. What should be done?",
    "options": [
      "Continue repair/adjustment until readings are acceptable",
      "Leave because the appliance runs",
      "Disable safety controls",
      "Close combustion air openings"
    ],
    "answer": 0,
    "explanation": "Operation alone does not prove safety. Combustion readings must meet manufacturer and safety requirements. Unsafe combustion must be corrected before returning to service."
  },
  {
    "id": 63,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A replacement rollout switch has a higher temperature rating than original. Why is this unsafe?",
    "options": [
      "It may not trip soon enough during rollout",
      "It will trip faster and safer",
      "Temperature rating does not matter",
      "It improves flame signal"
    ],
    "answer": 0,
    "explanation": "Safety switches are selected for specific protective limits. A higher trip temperature can delay shutdown during an unsafe condition. Replacement must match approved specifications."
  },
  {
    "id": 64,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A boiler pilot repeatedly goes out after the main burner shuts down. What should be investigated?",
    "options": [
      "Pilot flame strength, draft disturbance, thermocouple/thermopile, and gas pressure",
      "Only thermostat location",
      "Only pipe paint colour",
      "Only room lighting"
    ],
    "answer": 0,
    "explanation": "Pilot outage can result from weak flame, poor safety signal, draft issues, or pressure problems. Main burner shutdown can disturb flame if conditions are wrong. All related systems must be checked."
  },
  {
    "id": 65,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A gas appliance is permanently removed. What must be done to the gas piping?",
    "options": [
      "Safely isolate, cap or plug according to code, and leak test",
      "Leave the valve closed with open pipe after it",
      "Tape over the open pipe",
      "Rely on gas odour to detect future leaks"
    ],
    "answer": 0,
    "explanation": "Removed appliances must not leave open or unsafe gas piping. Piping must be properly capped or plugged and tested. Documentation may also be required."
  },
  {
    "id": 66,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A propane cylinder system is being removed from service. What is a major concern?",
    "options": [
      "Remaining propane must be handled safely by approved procedure",
      "Empty-looking cylinders are always gas-free",
      "Propane vapour cannot ignite after shutdown",
      "Regulators can be thrown indoors immediately"
    ],
    "answer": 0,
    "explanation": "Containers and piping may still contain propane vapour or liquid. Propane can ignite and collect in low areas. Removal must follow approved handling and storage procedures."
  },
  {
    "id": 67,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "After decommissioning a gas-fired appliance, why should the work be labelled or documented?",
    "options": [
      "To show the system was safely removed and isolated",
      "To increase future gas pressure",
      "To avoid leak testing",
      "To make the appliance easier to restart accidentally"
    ],
    "answer": 0,
    "explanation": "Documentation helps future workers understand the system status. It reduces the chance of accidental reconnection or unsafe assumptions. Records support safety and compliance."
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

const shuffledGasfitterClassBIPQuestions =
  shuffleArray(gasfitterClassBIPQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "gasfitter-class-b-ip",
  tradeTitle: "Gasfitter Class B IP",
  sectionTitle: "",
  questionTimeSeconds: 90,
  questions: shuffledGasfitterClassBIPQuestions
});

window.addEventListener("load", () => {
  const totalQuestionsPill = document.getElementById("totalQuestionsPill");
  if (totalQuestionsPill) totalQuestionsPill.textContent = `Questions: ${gasfitterClassBIPQuestions.length}`;

  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");

  if (hintBtn) hintBtn.style.display = "none";
  if (hintBox) hintBox.classList.add("hidden");
  if (hintText) hintText.textContent = "";
});
