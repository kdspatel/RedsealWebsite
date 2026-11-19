const gasfitterClassBIPQuestions = [
  {
    "id": 1,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A furnace lights, runs for 4 seconds, then shuts off. You measure 0.3 microamps flame signal, and the control requires at least 1.0 microamp. What is the best next step?",
    "options": [
      "Replace the heat exchanger",
      "Check flame rod position, cleanliness, polarity, and grounding",
      "Increase gas pressure without testing",
      "Bypass the flame sensor"
    ],
    "answer": 1,
    "explanation": "A low flame signal causes the control to shut off gas. Flame rectification depends on sensor condition and ground path. Never bypass flame-proving devices."
  },
  {
    "id": 2,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A new ignition module sparks continuously even after flame is established. What is most likely not being proven?",
    "options": [
      "Air filter pressure",
      "Flame signal",
      "Blower speed",
      "Vent pipe length"
    ],
    "answer": 1,
    "explanation": "Spark should stop once flame is proven. If it continues, the module may not sense flame. Check flame rod, ground, polarity, and module compatibility."
  },
  {
    "id": 3,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A technician installs a universal ignition control. It has the correct voltage but a longer trial-for-ignition time than the original. What is the safest decision?",
    "options": [
      "Use it because voltage matches",
      "Use it if the customer approves",
      "Do not use it unless approved for that appliance",
      "Install a larger gas valve"
    ],
    "answer": 2,
    "explanation": "Trial-for-ignition time limits unburned gas release. A longer timing can create an explosion hazard. Replacement controls must match approved safety timing."
  },
  {
    "id": 4,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame rod is positioned outside the main flame but the burner lights normally. What problem is likely?",
    "options": [
      "High gas pressure only",
      "Weak or no flame signal",
      "Better flame proving",
      "Excessive airflow through ducts"
    ],
    "answer": 1,
    "explanation": "The flame rod must be engulfed by flame. A burner can light but still fail flame proving. Correct sensor position is critical for safe operation."
  },
  {
    "id": 5,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A UV scanner on a commercial burner proves flame before ignition starts. What is the danger?",
    "options": [
      "Low blower current",
      "False flame signal",
      "Low inlet pressure",
      "Blocked condensate drain"
    ],
    "answer": 1,
    "explanation": "Flame must not be proven before actual ignition. A false flame signal may allow unsafe fuel operation. Scanner sighting, wiring, and control logic must be checked."
  },
  {
    "id": 6,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A spark cable has cracked insulation and is touching the burner chassis. What will likely happen?",
    "options": [
      "Spark may short to ground",
      "Gas pressure will increase",
      "Blower speed will decrease",
      "Flame signal will improve"
    ],
    "answer": 0,
    "explanation": "Spark ignition uses high voltage. Damaged insulation can leak spark to metal. This can cause ignition failure or delayed ignition."
  },
  {
    "id": 7,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A hot surface igniter glows orange but gas ignition is delayed. What should be checked?",
    "options": [
      "Igniter location, burner carryover, gas pressure, and ignition timing",
      "Thermostat colour",
      "Furnace paint thickness",
      "Return air grille style"
    ],
    "answer": 0,
    "explanation": "A glowing igniter alone does not prove correct ignition. Delayed ignition can result from poor gas-air contact. Carryover, pressure, and igniter position must be verified."
  },
  {
    "id": 8,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "An electronic control board fails twice after replacement. What should be done before installing another board?",
    "options": [
      "Install a larger fuse",
      "Inspect external loads, wiring shorts, grounding, and voltage",
      "Increase manifold pressure",
      "Remove the door switch permanently"
    ],
    "answer": 1,
    "explanation": "Repeated board failure usually has a cause. Shorted loads, poor ground, or voltage issues can damage boards. Parts should not be replaced without diagnosis."
  },
  {
    "id": 9,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame safeguard control locks out during pre-purge. What condition may not be proving?",
    "options": [
      "Gas odour",
      "Airflow or draft proving switch",
      "Water temperature only",
      "Heat exchanger colour"
    ],
    "answer": 1,
    "explanation": "Pre-purge often requires airflow proving. If airflow is not proven, ignition must not begin. Draft switch, inducer, tubing, and venting should be checked."
  },
  {
    "id": 10,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 24 V transformer supplies a gas valve drawing 0.8 A, two relays drawing 0.15 A each, and an ignition module drawing 0.5 A. What is the total VA load?",
    "options": [
      "26.4 VA",
      "38.4 VA",
      "52.8 VA",
      "72 VA"
    ],
    "answer": 1,
    "explanation": "Total current = 0.8 + 0.15 + 0.15 + 0.5 = 1.6 A. VA = 24 × 1.6 = 38.4 VA. The transformer must be rated above the connected load."
  },
  {
    "id": 11,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 40 VA transformer is used on a 24 V circuit drawing 2.0 A. What is the problem?",
    "options": [
      "No problem; it is exactly correct",
      "Transformer is overloaded",
      "Gas pressure is too low",
      "Flame sensor is dirty"
    ],
    "answer": 1,
    "explanation": "24 V × 2.0 A = 48 VA. A 40 VA transformer is not large enough. Overloading can cause overheating and voltage drop."
  },
  {
    "id": 12,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A blower motor nameplate shows 120 V, 7.5 A. The measured running current is 10.2 A. What should be done?",
    "options": [
      "Approve it because the blower runs",
      "Diagnose overload, voltage, capacitor, bearing, or airflow problem",
      "Increase gas pressure",
      "Install a smaller fuse"
    ],
    "answer": 1,
    "explanation": "Current above nameplate indicates abnormal operation. Mechanical drag or electrical faults may overload the motor. Continued operation can damage the motor."
  },
  {
    "id": 13,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A replacement motor has correct voltage and horsepower, but wrong rotation. What may happen?",
    "options": [
      "Reduced airflow",
      "Higher gas heating value",
      "Better combustion automatically",
      "Lower pressure drop in gas pipe"
    ],
    "answer": 0,
    "explanation": "Blower wheels are directional. Wrong rotation can move very little air. Low airflow can cause overheating and limit trips."
  },
  {
    "id": 14,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A relay contact is rated 3 A resistive, but it controls a motor drawing 3 A. Why is this unsafe?",
    "options": [
      "Motor loads have starting inrush current",
      "Resistive rating is always higher than motor rating",
      "Motor loads need no contacts",
      "Relay contacts reduce gas pressure"
    ],
    "answer": 0,
    "explanation": "Motors draw high current when starting. Contacts must be rated for motor or inductive loads. Underrated contacts can weld or burn."
  },
  {
    "id": 15,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A run capacitor is replaced with correct microfarads but lower voltage rating. What is the risk?",
    "options": [
      "Capacitor may fail under normal voltage stress",
      "Motor will always run cooler",
      "Gas valve will open faster",
      "Draft will increase"
    ],
    "answer": 0,
    "explanation": "Capacitors must meet microfarad and voltage ratings. A lower voltage rating can break down. Incorrect capacitors can damage motors."
  },
  {
    "id": 16,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A gas valve coil reads infinite resistance with wires removed. What does that indicate?",
    "options": [
      "Shorted coil",
      "Open coil",
      "Correct coil operation",
      "High manifold pressure"
    ],
    "answer": 1,
    "explanation": "Infinite resistance means no complete circuit. A gas valve coil should have measurable resistance. An open coil cannot energize the valve."
  },
  {
    "id": 17,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A contactor chatters when energized. Voltage at the coil drops from 24 V to 17 V. What is likely?",
    "options": [
      "Low control voltage under load",
      "Correct operation",
      "Overfired burner",
      "Blocked flue only"
    ],
    "answer": 0,
    "explanation": "A contactor needs stable coil voltage. Low voltage causes chatter and contact damage. Check transformer capacity, wiring, and connected loads."
  },
  {
    "id": 18,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A service disconnect is installed behind fixed ductwork. What is the issue?",
    "options": [
      "It may not be accessible for safe servicing",
      "It increases electrical protection",
      "It lowers blower current",
      "It improves ignition"
    ],
    "answer": 0,
    "explanation": "A disconnect must be reachable for service. Workers need to isolate equipment quickly. Blocked access creates an electrical safety concern."
  },
  {
    "id": 19,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A wire connector is loose and warm to the touch. What does this suggest?",
    "options": [
      "High-resistance connection",
      "Correct connection",
      "Low gas pressure",
      "Excess combustion air"
    ],
    "answer": 0,
    "explanation": "Loose electrical connections create resistance. Resistance creates heat and possible arcing. The connector must be repaired or replaced."
  },
  {
    "id": 20,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 120 V igniter is replaced with a 24 V igniter by mistake. What is likely?",
    "options": [
      "Igniter burnout or failure",
      "Correct ignition",
      "Reduced gas input only",
      "Better flame signal"
    ],
    "answer": 0,
    "explanation": "Electrical components must match voltage. A 24 V igniter connected to 120 V will likely fail. Always verify part number and rating."
  },
  {
    "id": 21,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A motor overload is repeatedly reset without checking the motor. What is the danger?",
    "options": [
      "Motor damage or fire risk",
      "Better motor cooling",
      "Lower gas pressure",
      "Increased combustion air"
    ],
    "answer": 0,
    "explanation": "Overload trips indicate excessive current or heat. Repeated reset can destroy windings. The cause must be diagnosed before restarting."
  },
  {
    "id": 22,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A building automation system sends a 0–10 V signal, but the actuator is set for 2–10 V. What may happen?",
    "options": [
      "The actuator response range may be incorrect",
      "Gas pressure will stabilize automatically",
      "Flame rod will clean itself",
      "Venting becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "Control signal range must match device configuration. Wrong scaling can cause incorrect firing rate. Actuator setup must be verified during commissioning."
  },
  {
    "id": 23,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A pressure transducer reads erratically only when a nearby VFD starts. What is likely?",
    "options": [
      "Electrical interference",
      "Low propane level",
      "Dirty burner ports",
      "High manifold pressure"
    ],
    "answer": 0,
    "explanation": "VFDs can create electrical noise. Low-voltage signal wiring can be affected. Shielding, grounding, and separation may be needed."
  },
  {
    "id": 24,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A temperature sensor is installed in direct sunlight. What control problem may occur?",
    "options": [
      "False high temperature reading",
      "False low gas pressure reading",
      "Stronger flame signal",
      "Higher combustion efficiency"
    ],
    "answer": 0,
    "explanation": "Sensor location must represent actual controlled space. Sunlight can heat the sensor artificially. Bad placement causes poor control decisions."
  },
  {
    "id": 25,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A modulating burner stays at high fire even when load decreases. What should be checked?",
    "options": [
      "Control signal, actuator linkage, and controller setup",
      "Gas pipe paint",
      "Vent cap colour",
      "Thermostat battery cover only"
    ],
    "answer": 0,
    "explanation": "Modulation depends on signal and actuator response. Linkage or programming faults can hold high fire. The burner must respond correctly to demand."
  },
  {
    "id": 26,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A 4–20 mA signal reads 20 mA when the burner should be at minimum. What does this indicate?",
    "options": [
      "Controller may be commanding maximum output",
      "Gas valve is closed",
      "Flame signal is weak",
      "Vent pipe is blocked"
    ],
    "answer": 0,
    "explanation": "In many systems, 20 mA represents maximum command. The controller output may be wrong for the condition. Setpoint, sensor, and control logic must be checked."
  },
  {
    "id": 27,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A BAS start command bypasses the appliance’s safety control circuit. What is wrong?",
    "options": [
      "Automation must not override safety interlocks",
      "It improves reliability",
      "It increases heat output safely",
      "It reduces CO risk"
    ],
    "answer": 0,
    "explanation": "Safety controls must remain in the operating sequence. Automation can command operation but cannot defeat safeties. Fuel release must depend on proven safe conditions."
  },
  {
    "id": 28,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A technician threads steel pipe but does not clean cutting oil and chips from the pipe. What is the risk?",
    "options": [
      "Debris may damage downstream controls",
      "Gas pressure will become too high",
      "Flame signal will increase",
      "Airflow will decrease"
    ],
    "answer": 0,
    "explanation": "Pipe debris can travel with gas flow. It can plug regulators, valves, and orifices. Piping must be cleaned before assembly."
  },
  {
    "id": 29,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas line passes through a concrete wall with no sleeve or protection. What is the concern?",
    "options": [
      "Corrosion or abrasion damage",
      "Higher gas capacity",
      "Improved pipe support",
      "Better regulator performance"
    ],
    "answer": 0,
    "explanation": "Concrete contact can damage piping. Movement and corrosion can create leaks over time. Sleeving or protection may be required."
  },
  {
    "id": 30,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A threaded joint leaks after assembly. What is the proper correction?",
    "options": [
      "Tighten until fitting cracks",
      "Disassemble, inspect, remake, and retest the joint",
      "Paint over the joint",
      "Ignore if bubbles are small"
    ],
    "answer": 1,
    "explanation": "A leaking joint must be corrected. Overtightening can damage fittings. The joint must be retested before use."
  },
  {
    "id": 31,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A flexible connector is kinked behind an appliance. What can happen?",
    "options": [
      "Restricted flow or connector damage",
      "Higher combustion efficiency",
      "Stronger flame signal",
      "Lower carbon monoxide"
    ],
    "answer": 0,
    "explanation": "Flexible connectors have bend limits. Kinks can restrict gas or weaken the connector. Installation must follow connector instructions."
  },
  {
    "id": 32,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A pipe wrench is used without a backup wrench on a gas valve connection. What is the risk?",
    "options": [
      "Twisting and damaging the valve or connected piping",
      "Improving valve sealing",
      "Increasing gas capacity",
      "Lowering pressure drop"
    ],
    "answer": 0,
    "explanation": "A backup wrench prevents stress on components. Gas valves can crack or distort from twisting. Proper tool technique prevents leaks."
  },
  {
    "id": 33,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas pipe is installed in a parking garage where vehicles can hit it. What must be provided?",
    "options": [
      "Mechanical protection",
      "Larger burner orifices",
      "Lower thermostat setting",
      "Smaller vent connector"
    ],
    "answer": 0,
    "explanation": "Vehicle impact can break gas piping. Piping in exposed areas must be protected. Barriers or alternate routing may be required."
  },
  {
    "id": 34,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A copper flare has a visible crack but does not leak during the first test. What should be done?",
    "options": [
      "Put it into service",
      "Replace or remake the flare",
      "Add thread sealant to the flare face",
      "Heat the nut to soften it"
    ],
    "answer": 1,
    "explanation": "A cracked flare is mechanically defective. It may leak later under vibration or stress. Flares must be smooth and properly formed."
  },
  {
    "id": 35,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas union is installed inside a sealed ceiling space. Why is this poor practice?",
    "options": [
      "It may be inaccessible for inspection or repair",
      "It improves pressure control",
      "It prevents leaks forever",
      "It replaces a shutoff valve"
    ],
    "answer": 0,
    "explanation": "Serviceable joints should remain accessible where required. Concealed gas joints can leak unnoticed. Installation layout must allow inspection."
  },
  {
    "id": 36,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas appliance is installed level side-to-side but tilted beyond manufacturer limits front-to-back. What can result?",
    "options": [
      "Condensate, burner, or venting problems",
      "Higher fuel value",
      "Better ignition",
      "Stronger flame signal"
    ],
    "answer": 0,
    "explanation": "Appliance level can affect drains and burners. Improper slope can cause condensate or combustion problems. Manufacturer installation limits must be followed."
  },
  {
    "id": 37,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A threaded fitting is cracked from overtightening. What is the correct action?",
    "options": [
      "Seal the crack with compound",
      "Replace the fitting",
      "Reduce gas pressure and leave it",
      "Paint over it"
    ],
    "answer": 1,
    "explanation": "Cracked fittings are unsafe. Sealant cannot restore mechanical strength. Damaged gas fittings must be replaced."
  },
  {
    "id": 38,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas line is supported by ceiling tile grid. What is wrong?",
    "options": [
      "Ceiling grid is not an approved pipe support",
      "It improves vibration resistance",
      "It lowers pipe friction",
      "It increases gas pressure"
    ],
    "answer": 0,
    "explanation": "Gas piping requires proper structural support. Ceiling grids are not designed for pipe loads. Improper support can cause sagging and leaks."
  },
  {
    "id": 39,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A shutoff valve is installed but hidden behind drywall after renovation. What is the issue?",
    "options": [
      "Valve is not accessible",
      "Valve works better hidden",
      "Gas pressure becomes stable",
      "It replaces leak testing"
    ],
    "answer": 0,
    "explanation": "Shutoff valves must be accessible for service and emergency use. Hidden valves delay isolation. Renovations must preserve access."
  },
  {
    "id": 40,
    "category": "Block E / Task 14 — System Components",
    "question": "A gas regulator vent is left open indoors without required vent piping. What is the hazard?",
    "options": [
      "Gas may discharge into the building",
      "Outlet pressure becomes zero",
      "Flame signal becomes stronger",
      "Airflow increases"
    ],
    "answer": 0,
    "explanation": "Regulator vents can release gas during failure. Vent discharge must be directed safely. Indoor venting requirements must be followed."
  },
  {
    "id": 41,
    "category": "Block E / Task 14 — System Components",
    "question": "A regulator is selected for natural gas but installed on propane. What is the concern?",
    "options": [
      "Wrong gas application and pressure/capacity performance",
      "Propane becomes natural gas",
      "Outlet pressure will always be correct",
      "Regulator vent is no longer needed"
    ],
    "answer": 0,
    "explanation": "Regulators must be approved for the gas used. Gas properties and pressure ranges differ. Wrong selection can create unsafe operation."
  },
  {
    "id": 42,
    "category": "Block E / Task 14 — System Components",
    "question": "A pressure switch tubing line is connected to the wrong port. What can happen?",
    "options": [
      "Switch may not prove the correct pressure condition",
      "Gas pressure increases automatically",
      "Burner input becomes correct",
      "Flame rod gets cleaner"
    ],
    "answer": 0,
    "explanation": "Pressure switches sense specific pressure points. Wrong port connection gives false or no signal. Tubing must follow the appliance diagram."
  },
  {
    "id": 43,
    "category": "Block E / Task 14 — System Components",
    "question": "A gas valve is installed where dripping condensate can fall on the electrical coil. What is the problem?",
    "options": [
      "Corrosion or electrical failure",
      "Better coil cooling",
      "Higher manifold pressure",
      "Better flame proving"
    ],
    "answer": 0,
    "explanation": "Water can damage electrical parts. Corrosion can cause unsafe valve failure. Components must be protected from moisture."
  },
  {
    "id": 44,
    "category": "Block E / Task 14 — System Components",
    "question": "A sediment trap is installed after the gas valve instead of before the appliance control. Why is this incorrect?",
    "options": [
      "It fails to protect the gas valve from debris",
      "It lowers gas pressure too much",
      "It increases flame current",
      "It improves vent draft"
    ],
    "answer": 0,
    "explanation": "Sediment traps are meant to protect controls. They must be placed before sensitive components. Wrong placement defeats their purpose."
  },
  {
    "id": 45,
    "category": "Block E / Task 14 — System Components",
    "question": "A regulator outlet is adjusted while no appliance is firing. What is missing?",
    "options": [
      "Verification under operating load",
      "Thermostat calibration only",
      "Vent cap inspection only",
      "Blower wheel cleaning only"
    ],
    "answer": 0,
    "explanation": "Regulator performance must be checked under flow. No-load pressure may not reflect operating pressure. Final settings must be verified while firing."
  },
  {
    "id": 46,
    "category": "Block E / Task 14 — System Components",
    "question": "A manual shutoff valve is installed with the handle against a wall, limiting movement. What is wrong?",
    "options": [
      "Valve may not fully operate",
      "Valve will regulate better",
      "It increases outlet pressure",
      "It prevents gas leaks"
    ],
    "answer": 0,
    "explanation": "Valve handles must move freely. Partial operation can delay emergency shutdown. Accessibility includes the ability to operate the valve."
  },
  {
    "id": 47,
    "category": "Block E / Task 14 — System Components",
    "question": "A valve train is assembled without checking flow arrows. What risk exists?",
    "options": [
      "Components may be installed backward",
      "Gas pressure will always increase",
      "Combustion air will double",
      "Electrical current will drop"
    ],
    "answer": 0,
    "explanation": "Many valves and regulators are directional. Backward components may not open, close, or regulate properly. Flow arrows must be checked during installation."
  },
  {
    "id": 48,
    "category": "Block E / Task 14 — System Components",
    "question": "A regulator vent screen is painted over. What is the effect?",
    "options": [
      "Vent may be blocked",
      "Outlet pressure becomes safer",
      "Flame signal improves",
      "Gas input lowers correctly"
    ],
    "answer": 0,
    "explanation": "Regulator vents must remain open. Paint can block vent openings. A blocked vent can prevent proper regulator operation."
  },
  {
    "id": 49,
    "category": "Block E / Task 14 — System Components",
    "question": "A high-gas-pressure switch is omitted from a burner train that requires it. What is the hazard?",
    "options": [
      "Burner may operate during unsafe pressure condition",
      "Burner will not need flame safeguard",
      "Regulator capacity increases",
      "Gas becomes non-flammable"
    ],
    "answer": 0,
    "explanation": "Pressure switches protect against unsafe pressure. Omitting required switches defeats the safety sequence. Required valve train components must be installed."
  },
  {
    "id": 50,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane cylinder is placed near a floor drain. Why is this dangerous?",
    "options": [
      "Propane vapour can collect in low areas and drains",
      "Propane rises quickly and disappears",
      "Floor drains neutralize propane",
      "Propane cannot ignite near drains"
    ],
    "answer": 0,
    "explanation": "Propane is heavier than air. It can flow to low areas and accumulate. Ignition of trapped propane can be explosive."
  },
  {
    "id": 51,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane tank relief valve points toward a door. What is the concern?",
    "options": [
      "Released gas may enter the building",
      "Tank pressure will always fall to zero",
      "Regulator output improves",
      "Door will act as a vent cap"
    ],
    "answer": 0,
    "explanation": "Relief discharge must be directed safely. Gas must not enter building openings. Container orientation and clearances are critical."
  },
  {
    "id": 52,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane cylinder used for vapour service is laid horizontally. What can happen?",
    "options": [
      "Liquid propane may enter vapour equipment",
      "Propane becomes less flammable",
      "Regulator capacity increases safely",
      "Pressure becomes atmospheric"
    ],
    "answer": 0,
    "explanation": "Vapour-service cylinders must be upright. Liquid entering regulators can cause unsafe pressure. Cylinder orientation must match its design."
  },
  {
    "id": 53,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A first-stage propane regulator vent is blocked by ice. What is the danger?",
    "options": [
      "Incorrect pressure regulation or failed relief action",
      "Stronger flame signal",
      "Lower cylinder pressure only",
      "Better burner ignition"
    ],
    "answer": 0,
    "explanation": "Regulator vents allow diaphragm movement and relief. Ice blockage can prevent proper operation. Vents must remain clear and protected."
  },
  {
    "id": 54,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane container is filled beyond the allowed level. What happens as temperature rises?",
    "options": [
      "Liquid expansion can cause relief discharge",
      "Propane becomes natural gas",
      "Pressure drops to zero",
      "Regulator vent closes safely"
    ],
    "answer": 0,
    "explanation": "Propane liquid expands with temperature. Overfilling leaves insufficient vapour space. Pressure rise can open the relief valve."
  },
  {
    "id": 55,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane line is installed where falling ice from a roof can hit it. What is required?",
    "options": [
      "Relocation or protection from physical damage",
      "Smaller cylinder size only",
      "Higher outlet pressure",
      "Indoor regulator venting"
    ],
    "answer": 0,
    "explanation": "Propane piping must be protected from impact. Falling ice can break lines or regulators. Outdoor installations must consider site hazards."
  },
  {
    "id": 56,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A new gas line pressure test loses pressure over 20 minutes. No smell is noticed. What should be done?",
    "options": [
      "Put system into service",
      "Find leak or test problem, repair, and retest",
      "Add odorant",
      "Lower test pressure and approve"
    ],
    "answer": 1,
    "explanation": "Pressure loss indicates leakage or test setup failure. Odour is not a reliable test method. The system must hold the required test."
  },
  {
    "id": 57,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A technician leak-tests a joint with soapy solution and sees bubbles growing. What does it mean?",
    "options": [
      "Joint is leaking",
      "Joint is clean",
      "Gas pressure is too low to matter",
      "Solution is evaporating"
    ],
    "answer": 0,
    "explanation": "Bubbles show gas escaping. The joint must be repaired. After repair, the joint must be retested."
  },
  {
    "id": 58,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 1 ft³ gas meter dial makes one revolution in 40 seconds. Pressure factor is 1.0. What is flow?",
    "options": [
      "60 ft³/hr",
      "90 ft³/hr",
      "120 ft³/hr",
      "144 ft³/hr"
    ],
    "answer": 1,
    "explanation": "Flow = dial size ÷ seconds × 3600. 1 ÷ 40 × 3600 = 90 ft³/hr. Meter clocking verifies gas input."
  },
  {
    "id": 59,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 2 ft³ dial rotates in 80 seconds. Pressure factor is 1.1. What is corrected flow?",
    "options": [
      "82.5 ft³/hr",
      "90 ft³/hr",
      "99 ft³/hr",
      "110 ft³/hr"
    ],
    "answer": 2,
    "explanation": "2 ÷ 80 × 3600 = 90 ft³/hr. 90 × 1.1 = 99 ft³/hr. Pressure factor corrects the meter reading."
  },
  {
    "id": 60,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A unit heater output is 72,000 Btuh. Temperature rise is 45°F. What airflow is required?",
    "options": [
      "1,111 cfm",
      "1,481 cfm",
      "1,852 cfm",
      "2,400 cfm"
    ],
    "answer": 1,
    "explanation": "Cfm = Btuh ÷ 1.08 ÷ ΔT. 72,000 ÷ 1.08 ÷ 45 = about 1,481 cfm. This formula checks airflow from heat output."
  },
  {
    "id": 61,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A combustion analyzer shows high O₂, low CO₂, and high stack temperature. What may this indicate?",
    "options": [
      "Excess air and reduced efficiency",
      "Fuel-rich combustion",
      "No combustion air",
      "Blocked gas valve"
    ],
    "answer": 0,
    "explanation": "High oxygen often indicates too much excess air. High stack temperature can mean heat loss. Combustion must be adjusted to manufacturer limits."
  },
  {
    "id": 62,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A draft test shows spillage at a draft hood after 5 minutes of operation. What is the concern?",
    "options": [
      "Flue gases may enter the space",
      "Burner is underfired only",
      "Flame signal is too high",
      "Thermostat is satisfied"
    ],
    "answer": 0,
    "explanation": "Spillage means combustion products are not venting properly. This can expose occupants to carbon monoxide. Venting and combustion air must be checked."
  },
  {
    "id": 63,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A manometer reads inlet pressure within range with one appliance on, but low with all appliances on. What does this show?",
    "options": [
      "Supply cannot maintain pressure at full load",
      "Manometer is always wrong",
      "Appliances are over-vented",
      "Thermostats are miswired"
    ],
    "answer": 0,
    "explanation": "Full-load testing shows actual system capacity. Pressure drop under demand suggests restriction or undersizing. Meter, regulator, and piping must be evaluated."
  },
  {
    "id": 64,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A gauge with poor resolution is used for low gas pressure. What problem can result?",
    "options": [
      "Small pressure changes may be missed",
      "Gas pressure increases",
      "Appliance input becomes correct",
      "Combustion improves"
    ],
    "answer": 0,
    "explanation": "Instrument range must match the test. Low-pressure gas requires accurate, sensitive measurement. Wrong instruments can mislead diagnosis."
  },
  {
    "id": 65,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "Atmospheric pressure is 14.2 psi, gauge pressure is 1.5 psi, and base pressure is 14.7 psi. What is pressure factor?",
    "options": [
      "0.97",
      "1.00",
      "1.07",
      "1.14"
    ],
    "answer": 2,
    "explanation": "Pressure factor = atmospheric + gauge ÷ base. 14.2 + 1.5 = 15.7; 15.7 ÷ 14.7 = about 1.07. Use this to correct meter clocking."
  },
  {
    "id": 66,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A flame signal is 3.2 microamps at startup but falls to 0.6 microamps after blower starts. What should be checked?",
    "options": [
      "Grounding, flame stability, pressure changes, and wiring movement",
      "Water heater tank size",
      "Paint colour",
      "Gas meter brand"
    ],
    "answer": 0,
    "explanation": "Blower operation can change pressure or vibrate wiring. A falling flame signal indicates unstable proving. The cause must be found before approval."
  },
  {
    "id": 67,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A newly installed furnace has temperature rise above nameplate range. What is the most likely issue?",
    "options": [
      "Low airflow or overfiring",
      "Too much airflow only",
      "Low thermostat setting",
      "Clean filter only"
    ],
    "answer": 0,
    "explanation": "High temperature rise means heat is not being removed properly. Low airflow or high input can cause this. Blower speed, duct restriction, filter, and input must be checked."
  },
  {
    "id": 68,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A burner passes high-fire combustion but fails low-fire CO limits. Can commissioning be completed?",
    "options": [
      "No, all required firing rates must be safe",
      "Yes, high fire is enough",
      "Yes, if flame is blue",
      "Yes, if customer accepts"
    ],
    "answer": 0,
    "explanation": "Modulating burners must operate safely across range. Low fire can produce unstable combustion. Commissioning must verify required firing points."
  },
  {
    "id": 69,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A direct-vent appliance shuts down during strong wind. What should be checked?",
    "options": [
      "Termination location, clearances, and vent installation",
      "Thermostat colour",
      "Gas pipe paint",
      "Furnace filter brand only"
    ],
    "answer": 0,
    "explanation": "Wind can affect vent pressure at terminations. Improper location can cause recirculation or pressure trips. Manufacturer venting instructions must be followed."
  },
  {
    "id": 70,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new appliance is started without verifying gas type. What is the risk?",
    "options": [
      "Wrong fuel setup can overfire or underfire appliance",
      "Gas type does not matter",
      "Ignition module will correct fuel type",
      "Venting automatically changes"
    ],
    "answer": 0,
    "explanation": "Natural gas and propane require different setup. Orifices, pressures, and regulators may differ. Fuel type must match rating plate and setup."
  },
  {
    "id": 71,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "During commissioning, the safety limit does not shut down the burner when tested. What is correct?",
    "options": [
      "Appliance must not be approved until corrected",
      "Limit test is optional",
      "Increase gas pressure",
      "Bypass the limit"
    ],
    "answer": 0,
    "explanation": "Safety controls must function correctly. A failed limit can allow unsafe overheating. Commissioning must verify safety shutdowns."
  },
  {
    "id": 72,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A commissioning sheet has pressure readings but no combustion readings. Why is it incomplete?",
    "options": [
      "Pressure does not prove combustion safety",
      "Pressure readings are useless",
      "Combustion readings are never needed",
      "Flame colour replaces instruments"
    ],
    "answer": 0,
    "explanation": "Correct gas pressure does not guarantee safe burning. CO, O₂, CO₂, and stack temperature may still be unsafe. Combustion testing verifies actual performance."
  },
  {
    "id": 73,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A customer is not shown how to shut off the gas supply after installation. What is missing?",
    "options": [
      "Basic safety handover",
      "Pipe sizing",
      "Burner cleaning",
      "Regulator adjustment"
    ],
    "answer": 0,
    "explanation": "Customers should know emergency shutoff location. They should also know warning signs and when to call service. Safe operation includes customer instruction."
  },
  {
    "id": 74,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A furnace blower delay is set too long after burner shutdown, causing cold drafts. What should be reviewed?",
    "options": [
      "Fan-off timing and manufacturer setup",
      "Gas meter pressure factor",
      "Regulator vent screen only",
      "Pilot orifice size only"
    ],
    "answer": 0,
    "explanation": "Fan timing affects comfort and heat removal. Improper delay settings can cause complaints. Settings must follow manufacturer instructions."
  },
  {
    "id": 75,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "An appliance lights smoothly but produces high CO only after cabinet panels are installed. What should be checked?",
    "options": [
      "Combustion air path and panel-dependent airflow",
      "Thermostat batteries",
      "Pipe hanger colour",
      "Gas meter dial size only"
    ],
    "answer": 0,
    "explanation": "Installing panels can change airflow paths. High CO with panels on indicates air or venting effect. Testing must be done in final operating condition."
  },
  {
    "id": 76,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new system is commissioned but no model, serial number, readings, or test results are recorded. What is the issue?",
    "options": [
      "Poor documentation and no service baseline",
      "Appliance cannot run",
      "Gas pressure becomes invalid",
      "Customer instruction replaces records"
    ],
    "answer": 0,
    "explanation": "Records prove what was tested. They help future troubleshooting and compliance. Commissioning should include complete measured data."
  },
  {
    "id": 77,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "During maintenance, the flame is mostly blue but the analyzer shows rising CO. What should be done?",
    "options": [
      "Investigate combustion despite flame colour",
      "Approve because flame is blue",
      "Remove the analyzer",
      "Increase thermostat setting"
    ],
    "answer": 0,
    "explanation": "Flame colour alone does not prove safe combustion. Rising CO is a serious warning. Burner, venting, air supply, and input must be checked."
  },
  {
    "id": 78,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A condensate trap is plugged on a condensing furnace. What can result?",
    "options": [
      "Pressure switch faults or condensate backup",
      "Higher gas pressure",
      "Stronger flame signal",
      "Lower CO automatically"
    ],
    "answer": 0,
    "explanation": "Condensate must drain properly. A blocked trap can affect pressure and heat exchanger drainage. Maintenance must include trap inspection and cleaning."
  },
  {
    "id": 79,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A blower wheel is covered with dust. What is the likely result?",
    "options": [
      "Reduced airflow and high temperature rise",
      "More combustion air",
      "Higher gas heating value",
      "Better flame proving"
    ],
    "answer": 0,
    "explanation": "Dust reduces blower efficiency. Low airflow can overheat the furnace. Cleaning improves safe heat transfer."
  },
  {
    "id": 80,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A burner has uneven flame heights across ports. What should be inspected?",
    "options": [
      "Burner cleanliness, gas pressure, and alignment",
      "Wall thermostat colour",
      "Condensate pump brand",
      "Duct tape thickness"
    ],
    "answer": 0,
    "explanation": "Uneven flames can indicate blockage or pressure problems. Poor burner alignment can affect carryover. Maintenance must verify flame pattern and combustion."
  },
  {
    "id": 81,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A vent termination screen is partially blocked by insects. What is the hazard?",
    "options": [
      "Restricted venting or combustion air",
      "Higher efficiency",
      "Lower gas input safely",
      "Better draft always"
    ],
    "answer": 0,
    "explanation": "Screens can become blocked. Restriction may cause shutdown, recirculation, or CO risk. Terminations must be checked during service."
  },
  {
    "id": 82,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A belt is too tight on a blower motor. What can result?",
    "options": [
      "Bearing overload and motor stress",
      "Lower motor current always",
      "Higher gas pressure",
      "Cleaner combustion"
    ],
    "answer": 0,
    "explanation": "Overtight belts strain bearings. This can increase motor load and reduce life. Belt tension must be set correctly."
  },
  {
    "id": 83,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A flame sensor is repeatedly dirty every service visit. What should be investigated?",
    "options": [
      "Combustion condition and contaminants",
      "Thermostat brand only",
      "Gas meter colour",
      "Return grille style"
    ],
    "answer": 0,
    "explanation": "Repeated fouling suggests a root cause. Poor combustion or airborne contaminants may be involved. Cleaning alone may not solve the problem."
  },
  {
    "id": 84,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A furnace filter is clean, but temperature rise is still high. What else should be checked?",
    "options": [
      "Blower speed, duct restriction, wheel condition, and input",
      "Filter colour only",
      "Gas odour only",
      "Thermostat mounting screws"
    ],
    "answer": 0,
    "explanation": "High temperature rise can have several causes. Airflow may be restricted beyond the filter. Overfiring can also raise temperature rise."
  },
  {
    "id": 85,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace pressure switch stays open. The inducer runs but the vent is blocked with ice. What is the correct repair?",
    "options": [
      "Remove blockage and verify venting and switch operation",
      "Jump the pressure switch",
      "Replace gas valve first",
      "Increase manifold pressure"
    ],
    "answer": 0,
    "explanation": "The pressure switch is responding to unsafe venting. The blockage must be corrected. The system must be retested before operation."
  },
  {
    "id": 86,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A gas valve has correct inlet pressure and 24 V at the coil, but no outlet pressure. What is likely?",
    "options": [
      "Failed or stuck gas valve",
      "Dirty air filter only",
      "Wrong thermostat program",
      "Excess vent draft only"
    ],
    "answer": 0,
    "explanation": "A powered valve with inlet pressure should open. No outlet pressure suggests internal valve failure. Replacement requires leak and operational testing."
  },
  {
    "id": 87,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A burner lights with a loud “whoomp.” What should be checked?",
    "options": [
      "Ignition delay causes: pressure, burner carryover, igniter position",
      "Filter date only",
      "Thermostat schedule only",
      "Cabinet paint only"
    ],
    "answer": 0,
    "explanation": "Loud ignition usually means gas accumulated before lighting. Delayed ignition can cause rollout or damage. Burner and ignition conditions must be corrected."
  },
  {
    "id": 88,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A replaced control board blows the fuse immediately when the outdoor unit is connected. What should be checked?",
    "options": [
      "Outdoor low-voltage wiring or contactor coil short",
      "Furnace gas pressure only",
      "Heat exchanger size only",
      "Vent slope only"
    ],
    "answer": 0,
    "explanation": "The fault appears when the outdoor circuit is connected. A shorted wire or contactor coil can blow the fuse. Isolate circuits to locate the fault."
  },
  {
    "id": 89,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A rollout switch trips again after replacement. What is the correct response?",
    "options": [
      "Investigate cause of rollout",
      "Install a higher temperature switch",
      "Bypass the switch",
      "Reduce thermostat setting"
    ],
    "answer": 0,
    "explanation": "Rollout indicates unsafe flame or heat escape. Repeated trips are not solved by replacing the switch only. Vent, heat exchanger, burner, and combustion must be checked."
  },
  {
    "id": 90,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A boiler short-cycles on high limit. What should be checked?",
    "options": [
      "Circulation, air lock, pump, flow restriction, and aquastat",
      "Flame rod only",
      "Thermostat colour only",
      "Gas odour only"
    ],
    "answer": 0,
    "explanation": "High-limit cycling often means heat is not moving away. Hydronic flow problems can cause overheating. Controls and water circulation must be diagnosed."
  },
  {
    "id": 91,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired furnace has correct manifold pressure but CO remains high. What is correct?",
    "options": [
      "Continue diagnosis; pressure alone is not enough",
      "Approve because pressure is correct",
      "Disable combustion testing",
      "Close air openings"
    ],
    "answer": 0,
    "explanation": "CO depends on air, venting, burners, and heat exchanger condition. Correct pressure does not prove safe combustion. High CO must be corrected before return to service."
  },
  {
    "id": 92,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A motor fails shortly after replacement. The blower wheel is hard to spin. What was missed?",
    "options": [
      "Mechanical load problem",
      "Gas pressure problem only",
      "Dirty flame rod",
      "Wrong thermostat setting"
    ],
    "answer": 0,
    "explanation": "A seized or dragging wheel overloads the motor. Replacing the motor alone will not fix the cause. Driven components must be checked during repair."
  },
  {
    "id": 93,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A pilot flame is strong until the main burner starts, then it lifts away from the thermocouple. What should be checked?",
    "options": [
      "Draft disturbance, pilot position, and gas pressure",
      "Filter colour only",
      "Door switch only",
      "Condensate trap only"
    ],
    "answer": 0,
    "explanation": "Main burner operation can disturb weak or poorly placed pilots. Draft or pressure changes may affect pilot stability. Pilot safety signal must remain reliable."
  },
  {
    "id": 94,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A pressure switch is replaced with one that closes at a lower pressure than specified. Why is this unsafe?",
    "options": [
      "It may prove airflow when airflow is inadequate",
      "It will improve safety",
      "It reduces gas consumption",
      "It cleans the inducer"
    ],
    "answer": 0,
    "explanation": "Pressure switches prove specific safety conditions. A lower setpoint may close too easily. Replacement must match the approved rating."
  },
  {
    "id": 95,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired appliance operates only with the burner compartment door removed. What should be suspected?",
    "options": [
      "Air supply or venting problem affected by door position",
      "Correct normal operation",
      "Thermostat issue only",
      "Gas meter dial problem only"
    ],
    "answer": 0,
    "explanation": "Door position can affect combustion air or pressure. Appliance must operate safely with panels installed. Testing must reflect final operating condition."
  },
  {
    "id": 96,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A regulator outlet pressure hunts up and down during operation. What should be checked?",
    "options": [
      "Regulator sizing, inlet pressure, venting, and load changes",
      "Thermostat screen only",
      "Paint on pipe only",
      "Filter arrow only"
    ],
    "answer": 0,
    "explanation": "Regulator hunting can result from poor sizing or vent issues. Inlet pressure fluctuation can also cause instability. Stable pressure is required for safe combustion."
  },
  {
    "id": 97,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired gas joint was disturbed but not leak tested. What is wrong?",
    "options": [
      "Any disturbed gas joint must be leak tested",
      "Running the appliance proves no leak",
      "Leak testing is only for new systems",
      "Gas odour is enough"
    ],
    "answer": 0,
    "explanation": "Repair work can create leaks. Leak testing confirms gas containment. All disturbed joints must be tested before leaving."
  },
  {
    "id": 98,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A gas range is removed and the connector is left attached to an open branch valve outlet. What is required?",
    "options": [
      "Proper cap or plug and leak test",
      "Leave valve closed only",
      "Tape the connector end",
      "Hide it behind the cabinet"
    ],
    "answer": 0,
    "explanation": "Permanent removal must not leave unsafe open piping. The outlet must be properly capped or plugged. The final closure must be leak tested."
  },
  {
    "id": 99,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A propane appliance is removed, but the line still contains propane vapour. What is the danger?",
    "options": [
      "Residual vapour can ignite or collect low",
      "Vapour is harmless after disconnection",
      "Propane becomes lighter than air",
      "Odour means it cannot burn"
    ],
    "answer": 0,
    "explanation": "Propane vapour can remain in piping. It is heavier than air and can collect in low areas. Purging and handling must follow safe procedures."
  },
  {
    "id": 100,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "After decommissioning a commercial gas appliance, why should the disconnected piping be labelled?",
    "options": [
      "To prevent accidental reconnection or confusion",
      "To increase gas pressure later",
      "To replace leak testing",
      "To make the pipe reusable without inspection"
    ],
    "answer": 0,
    "explanation": "Labels warn future workers of system status. They reduce unsafe assumptions during later work. Decommissioning should include isolation, testing, and documentation."
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
  sectionTitle: "Practice Exam Set 3",
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
