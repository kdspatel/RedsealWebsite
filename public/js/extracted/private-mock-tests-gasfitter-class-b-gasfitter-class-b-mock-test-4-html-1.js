const gasfitterClassBIPQuestions = [
  {
    "id": 1,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A furnace control board shows a flame failure code. The burner lights, but the flame signal is unstable between 0.5 and 1.4 microamps. What should be checked first?",
    "options": [
      "Flame rod position, burner ground, and flame stability",
      "Furnace cabinet colour",
      "Return air grille size only",
      "Gas meter paint condition"
    ],
    "answer": 0,
    "explanation": "Flame signal must be steady and above minimum. Poor grounding or weak flame contact can cause signal fluctuation. A visible flame does not guarantee reliable flame proving."
  },
  {
    "id": 2,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "An ignition control is replaced, but the new control has no pre-purge function while the original did. What is the main concern?",
    "options": [
      "The combustion chamber may not be cleared before ignition",
      "The blower motor will always overheat",
      "Gas pressure will automatically drop",
      "The thermostat will lose calibration"
    ],
    "answer": 0,
    "explanation": "Pre-purge removes unburned fuel or combustion products. Removing purge timing can create an ignition hazard. Replacement controls must match the certified safety sequence."
  },
  {
    "id": 3,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A direct spark ignition electrode has the correct gap but is aimed away from the gas stream. What may occur?",
    "options": [
      "Delayed or failed ignition",
      "High airflow through ductwork",
      "Lower transformer VA",
      "Better flame rectification"
    ],
    "answer": 0,
    "explanation": "Spark must occur where the fuel-air mixture is present. A correct gap alone does not prove correct ignition location. Poor ignition position can cause delayed ignition or lockout."
  },
  {
    "id": 4,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame rod ceramic insulator is cracked. What is the most likely result?",
    "options": [
      "Flame signal may leak to ground",
      "Manifold pressure will increase",
      "Draft will improve",
      "Gas input will decrease safely"
    ],
    "answer": 0,
    "explanation": "The flame rod must be electrically isolated. A cracked insulator can short or weaken the flame signal. This can cause nuisance shutdown or unsafe sensing."
  },
  {
    "id": 5,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A UV scanner lens is coated with soot. What is the likely effect?",
    "options": [
      "Weak or lost flame detection",
      "Higher outlet gas pressure",
      "Stronger ignition spark",
      "Increased airflow"
    ],
    "answer": 0,
    "explanation": "UV scanners must clearly view the flame. Soot blocks ultraviolet light from reaching the sensor. Scanner lenses must be clean and correctly aimed."
  },
  {
    "id": 6,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A hot surface igniter is touched with bare fingers before installation. Why is this poor practice?",
    "options": [
      "Oil contamination can shorten igniter life",
      "It increases gas pressure",
      "It reduces vent length",
      "It improves ignition temperature"
    ],
    "answer": 0,
    "explanation": "Oils and contamination can damage some igniter materials. Hot surface igniters are fragile and must be handled carefully. Manufacturer handling instructions should be followed."
  },
  {
    "id": 7,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A control module has proper voltage but no output to the gas valve because the rollout circuit is open. What should be done?",
    "options": [
      "Investigate the rollout condition before resetting or replacing parts",
      "Jump the rollout switch",
      "Replace the gas meter",
      "Increase manifold pressure"
    ],
    "answer": 0,
    "explanation": "An open rollout switch indicates a possible unsafe flame condition. The cause must be diagnosed before restoring operation. Safety circuits must never be bypassed for normal operation."
  },
  {
    "id": 8,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame safeguard control detects flame during the purge cycle before fuel is opened. What condition is this?",
    "options": [
      "False flame signal",
      "Correct burner operation",
      "Low airflow only",
      "Normal ignition sequence"
    ],
    "answer": 0,
    "explanation": "Flame should not be detected before fuel ignition. A false flame signal can defeat the safety sequence. Sensor wiring, sighting, and control condition must be checked."
  },
  {
    "id": 9,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A spark ignition system has spark at the module but not at the electrode. What is the likely fault area?",
    "options": [
      "Ignition cable, electrode, or ground path",
      "Gas pipe support spacing",
      "Air filter direction only",
      "Appliance colour"
    ],
    "answer": 0,
    "explanation": "If spark leaves the module, the fault is downstream. A damaged cable or bad electrode can prevent spark at the burner. Ground path is also required for spark completion."
  },
  {
    "id": 10,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 24 V transformer supplies a gas valve at 0.6 A, damper motor at 0.4 A, relay at 0.2 A, and ignition module at 0.3 A. What is the connected VA?",
    "options": [
      "24 VA",
      "30 VA",
      "36 VA",
      "48 VA"
    ],
    "answer": 2,
    "explanation": "Total current is 1.5 A. 24 V × 1.5 A = 36 VA. Transformer capacity must exceed connected load."
  },
  {
    "id": 11,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A replacement transformer is 24 V secondary but only 20 VA. The circuit load is 1.2 A. Is it suitable?",
    "options": [
      "Yes, exactly suitable",
      "No, load requires 28.8 VA",
      "Yes, because voltage is correct",
      "No, load requires 120 VA"
    ],
    "answer": 1,
    "explanation": "VA = volts × amps. 24 × 1.2 = 28.8 VA. A 20 VA transformer is undersized."
  },
  {
    "id": 12,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A blower motor has correct voltage but wrong shaft diameter. What problem can result?",
    "options": [
      "Pulley or wheel cannot be secured correctly",
      "Gas valve will fail closed",
      "Flame rod will short",
      "Regulator vent will block"
    ],
    "answer": 0,
    "explanation": "Mechanical fit is as important as electrical rating. Wrong shaft size can cause slipping, imbalance, or unsafe mounting. Replacement motors must match application details."
  },
  {
    "id": 13,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A motor starter contactor is badly pitted. What can this cause?",
    "options": [
      "Voltage drop, heat, and unreliable motor operation",
      "Higher gas heating value",
      "Better motor protection",
      "Lower carbon monoxide"
    ],
    "answer": 0,
    "explanation": "Damaged contacts increase resistance. Resistance causes heat and voltage loss. Pitted contactors should be inspected and replaced if needed."
  },
  {
    "id": 14,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A gas valve is rated 24 VAC, but the circuit supplies 24 VDC. What is the concern?",
    "options": [
      "Coil may not operate as designed",
      "Gas pressure will increase safely",
      "Valve will regulate outlet pressure",
      "Flame signal will improve"
    ],
    "answer": 0,
    "explanation": "AC and DC coils are not automatically interchangeable. Incorrect power type can prevent operation or damage the coil. Component electrical rating must match the circuit."
  },
  {
    "id": 15,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A capacitor has correct voltage rating but half the required microfarads. What may happen?",
    "options": [
      "Motor may have poor starting or inefficient operation",
      "Gas input will double",
      "Draft hood will spill",
      "Flame rod signal will increase"
    ],
    "answer": 0,
    "explanation": "Capacitance affects motor phase shift and torque. Too little capacitance can reduce starting or running performance. Correct microfarad rating is required."
  },
  {
    "id": 16,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A fuse keeps blowing when the gas valve energizes. What should be checked?",
    "options": [
      "Gas valve coil resistance and wiring short",
      "Vent connector slope only",
      "Combustion air grille size only",
      "Burner flame colour only"
    ],
    "answer": 0,
    "explanation": "Fuse failure during valve energizing points to that circuit. A shorted coil or wire can draw excess current. The fault must be corrected before replacing fuses."
  },
  {
    "id": 17,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 120 V circuit measures 95 V at the motor while running. What is the concern?",
    "options": [
      "Voltage drop may cause overheating and poor performance",
      "Motor will run more efficiently",
      "Gas pressure will stabilize",
      "Flame signal becomes stronger"
    ],
    "answer": 0,
    "explanation": "Low voltage can increase current draw. This can overheat motor windings. Wiring, connections, and supply voltage must be checked."
  },
  {
    "id": 18,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A control transformer secondary is shorted. What protective device may open?",
    "options": [
      "Fuse or circuit breaker",
      "Regulator relief valve",
      "Draft hood spill switch only",
      "Gas meter dial"
    ],
    "answer": 0,
    "explanation": "A short circuit draws excessive current. Overcurrent protection opens to protect wiring and components. The short must be found before restoring power."
  },
  {
    "id": 19,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A replacement fan relay has the correct coil voltage but contacts rated below blower motor current. What is the risk?",
    "options": [
      "Contact overheating or welding",
      "Lower furnace temperature rise",
      "Better motor protection",
      "More accurate thermostat reading"
    ],
    "answer": 0,
    "explanation": "Contact rating must handle the load current. Motors also have starting inrush current. Underrated contacts can fail dangerously."
  },
  {
    "id": 20,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A furnace cabinet is energized due to a fault. What safety feature should help clear the fault?",
    "options": [
      "Proper bonding and overcurrent protection",
      "Larger gas regulator",
      "Smaller burner orifice",
      "Cleaner air filter"
    ],
    "answer": 0,
    "explanation": "Bonding provides a low-resistance fault path. Fault current should trip the breaker or fuse. Without bonding, metal cabinets can remain energized."
  },
  {
    "id": 21,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A motor is replaced with one rated for open enclosure in a dirty, damp mechanical room. What is the issue?",
    "options": [
      "Motor enclosure may not suit the environment",
      "Gas pressure will drop",
      "Venting will improve",
      "Ignition timing will shorten"
    ],
    "answer": 0,
    "explanation": "Motor enclosures must match environmental conditions. Dirt and moisture can damage unsuitable motors. Replacement selection must consider location."
  },
  {
    "id": 22,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A modulating actuator is installed, but its linkage binds halfway through travel. What is the likely result?",
    "options": [
      "Incorrect firing rate or control failure",
      "Lower gas density",
      "Better combustion at all rates",
      "Stronger flame signal"
    ],
    "answer": 0,
    "explanation": "Actuator motion must be smooth through full travel. Binding prevents accurate modulation. Linkage must be adjusted and verified."
  },
  {
    "id": 23,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A pressure sensor range is 0–100 psi, but it is used to measure 0–2 psi gas pressure. What is the problem?",
    "options": [
      "Poor resolution for low pressure",
      "Excessive flame signal",
      "Higher combustion efficiency",
      "Lower stack temperature"
    ],
    "answer": 0,
    "explanation": "Instrument range must match the measured pressure. A wide range sensor may not accurately show small changes. Low gas pressure needs suitable resolution."
  },
  {
    "id": 24,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A controller is programmed with reverse action when direct action is required. What can happen?",
    "options": [
      "Output moves opposite to required control response",
      "Gas pressure becomes self-correcting",
      "Flame scanner cleans itself",
      "Motor current becomes zero"
    ],
    "answer": 0,
    "explanation": "Control action determines output direction. Wrong action can drive the burner or valve the wrong way. Control logic must be verified during setup."
  },
  {
    "id": 25,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A shielded control cable is grounded at multiple points and noise appears on the signal. What may be happening?",
    "options": [
      "Ground loop interference",
      "Low propane pressure",
      "Dirty burner ports",
      "High temperature rise only"
    ],
    "answer": 0,
    "explanation": "Improper shielding can create ground loops. Ground loops may introduce signal noise. Instrumentation wiring must follow manufacturer instructions."
  },
  {
    "id": 26,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A BAS temperature sensor is installed above a heat-producing appliance. What will likely occur?",
    "options": [
      "The sensor may read higher than actual room temperature",
      "The appliance will underdraft",
      "Gas input will increase automatically",
      "Flame current will double"
    ],
    "answer": 0,
    "explanation": "Sensors must be installed in representative locations. Heat from nearby equipment causes false readings. Poor sensor placement causes poor control."
  },
  {
    "id": 27,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A low-fire proving switch is bypassed during troubleshooting and left bypassed. What is the hazard?",
    "options": [
      "Burner may operate without proving required position",
      "Burner becomes safer",
      "Gas pressure is reduced to zero",
      "Combustion air increases automatically"
    ],
    "answer": 0,
    "explanation": "Proving switches confirm safe equipment position. Bypassing them defeats the safety sequence. Temporary jumpers must never be left in service."
  },
  {
    "id": 28,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A pipe is cut with a wheel cutter and the internal ridge is left inside. What can happen?",
    "options": [
      "Flow restriction and debris problems",
      "Higher gas heating value",
      "More accurate pressure regulation",
      "Increased flame signal"
    ],
    "answer": 0,
    "explanation": "Cutting can leave burrs or ridges inside pipe. Restrictions reduce capacity and create turbulence. Pipe must be reamed and cleaned."
  },
  {
    "id": 29,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas pipe is installed with no allowance for building movement at an expansion joint. What is the concern?",
    "options": [
      "Movement can stress and break piping",
      "Gas pressure will increase",
      "Combustion efficiency improves",
      "The regulator becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "Buildings can move at expansion joints. Rigid gas piping can be damaged if movement is not accommodated. Design must protect piping from stress."
  },
  {
    "id": 30,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas connector is reused after appliance replacement, although instructions say not to reuse. What is the issue?",
    "options": [
      "Connector may be damaged or no longer seal reliably",
      "Reuse increases safety",
      "It improves flexibility",
      "It reduces pressure drop"
    ],
    "answer": 0,
    "explanation": "Connectors can be weakened during removal. Sealing surfaces may not remain reliable. Manufacturer instructions must be followed."
  },
  {
    "id": 31,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A pipe hanger is spaced too far apart on horizontal gas piping. What may result?",
    "options": [
      "Sagging and joint stress",
      "Higher gas pressure",
      "Better pipe capacity",
      "Lower appliance input"
    ],
    "answer": 0,
    "explanation": "Pipe supports prevent sagging. Excess sag can stress joints and fittings. Support spacing must follow applicable requirements."
  },
  {
    "id": 32,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A pipe joint is assembled using sealant not rated for propane. What is the concern?",
    "options": [
      "Sealant may fail or be incompatible with fuel",
      "Propane will become natural gas",
      "Pressure drop becomes zero",
      "Flame signal increases"
    ],
    "answer": 0,
    "explanation": "Thread sealant must be approved for the gas used. Incompatible sealant can leak or degrade. Fuel compatibility is essential."
  },
  {
    "id": 33,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas pipe runs through a return air duct. What is the likely concern?",
    "options": [
      "Code restrictions and unsafe concealed piping location",
      "Better airflow",
      "Improved gas cooling",
      "Higher combustion efficiency"
    ],
    "answer": 0,
    "explanation": "Gas piping locations may be restricted. Ducts can conceal leaks and distribute gas. Routing must comply with code and approved practice."
  },
  {
    "id": 34,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A branch line is installed but not purged before attempting ignition. What can happen?",
    "options": [
      "Air in the line may cause failed or delayed ignition",
      "Gas pressure will double",
      "Flame signal will increase",
      "Regulator will lock up safely"
    ],
    "answer": 0,
    "explanation": "New piping may contain air. Air must be purged safely according to procedure. Improper purging can cause ignition problems or hazards."
  },
  {
    "id": 35,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas appliance is installed on an unstable platform. What is the concern?",
    "options": [
      "Movement can stress gas, vent, and electrical connections",
      "It improves service access",
      "It increases gas pressure",
      "It lowers CO production"
    ],
    "answer": 0,
    "explanation": "Appliances require stable support. Movement can damage piping or venting. The installation base must be secure and level."
  },
  {
    "id": 36,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A steel gas pipe coating is damaged during installation underground. What should be done?",
    "options": [
      "Repair coating according to approved method before burial",
      "Bury it because damage is small",
      "Wrap it with ordinary tape only",
      "Increase pipe size"
    ],
    "answer": 0,
    "explanation": "Underground steel pipe requires corrosion protection. Damaged coating can lead to corrosion and leaks. Repairs must use approved materials and procedures."
  },
  {
    "id": 37,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas pipe is installed where it contacts sharp sheet metal. What is the risk?",
    "options": [
      "Abrasion and eventual damage",
      "Higher heating value",
      "Better grounding only",
      "Lower manifold pressure"
    ],
    "answer": 0,
    "explanation": "Sharp edges can wear or damage piping. Vibration can worsen abrasion over time. Piping must be protected from physical damage."
  },
  {
    "id": 38,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A union face is coated with pipe dope. What is wrong?",
    "options": [
      "Union sealing faces should be clean and undamaged",
      "Pipe dope improves union seating",
      "Union faces require sealant",
      "It increases pipe strength"
    ],
    "answer": 0,
    "explanation": "Unions seal at their mating faces. Sealant on the seating face can prevent proper sealing. Only threaded portions needing sealant should receive it."
  },
  {
    "id": 39,
    "category": "Block E / Task 13 — Piping and Equipment",
    "question": "A gas line is installed too close to a high-temperature flue pipe. What should be considered?",
    "options": [
      "Heat damage and clearance requirements",
      "Higher flame signal",
      "Better gas vaporization only",
      "Reduced need for supports"
    ],
    "answer": 0,
    "explanation": "Excessive heat can damage piping materials or coatings. Clearance from hot surfaces must be maintained. Installation must follow code and manufacturer instructions."
  },
  {
    "id": 40,
    "category": "Block E / Task 14 — System Components",
    "question": "A two-stage regulator system is installed with second-stage regulator vent blocked. What is the risk?",
    "options": [
      "Incorrect outlet pressure control",
      "Improved pressure stability",
      "Lower cylinder pressure only",
      "Stronger flame current"
    ],
    "answer": 0,
    "explanation": "Regulator vents allow diaphragm movement and relief. Blocked vents can prevent proper pressure control. All regulator vents must remain open and protected."
  },
  {
    "id": 41,
    "category": "Block E / Task 14 — System Components",
    "question": "A regulator is installed without checking maximum inlet pressure rating. What is the hazard?",
    "options": [
      "Regulator may be exposed to pressure beyond its rating",
      "It will automatically self-protect",
      "Outlet pressure will always be safe",
      "Gas input will drop to zero"
    ],
    "answer": 0,
    "explanation": "Regulators have maximum inlet pressure limits. Exceeding ratings can cause failure or unsafe downstream pressure. Ratings must be verified before installation."
  },
  {
    "id": 42,
    "category": "Block E / Task 14 — System Components",
    "question": "A gas valve electrical coil faces upward under a condensate drain. What is the concern?",
    "options": [
      "Moisture can damage the coil or wiring",
      "It improves valve cooling",
      "It increases gas capacity",
      "It lowers CO automatically"
    ],
    "answer": 0,
    "explanation": "Electrical gas valve parts must be protected from water. Condensate can corrode or short components. Component location must consider moisture exposure."
  },
  {
    "id": 43,
    "category": "Block E / Task 14 — System Components",
    "question": "A pressure switch tube is connected but slopes so condensate runs toward the switch. What may result?",
    "options": [
      "Blocked or false pressure signal",
      "Higher flame signal",
      "Better draft proving",
      "Reduced gas pressure drop"
    ],
    "answer": 0,
    "explanation": "Condensate can block pressure tubing. The switch may fail to prove or prove falsely. Tubing routing must avoid water traps."
  },
  {
    "id": 44,
    "category": "Block E / Task 14 — System Components",
    "question": "A safety shutoff valve is installed without confirming normally closed operation. What is the concern?",
    "options": [
      "Valve may not fail safe on power loss",
      "Gas pressure becomes more stable",
      "Flame signal improves",
      "Burner input becomes lower"
    ],
    "answer": 0,
    "explanation": "Safety shutoff valves should close when de-energized unless designed otherwise. Fail-safe operation is critical for fuel safety. Valve function must be verified."
  },
  {
    "id": 45,
    "category": "Block E / Task 14 — System Components",
    "question": "A pressure regulator is adjusted above appliance rating to “improve heat.” What is the hazard?",
    "options": [
      "Overfiring and unsafe combustion",
      "Better efficiency always",
      "Lower gas use",
      "Reduced CO risk"
    ],
    "answer": 0,
    "explanation": "Appliance input must match rating plate and manufacturer data. Excess pressure can overfire burners. Overfiring can cause overheating, soot, or CO."
  },
  {
    "id": 46,
    "category": "Block E / Task 14 — System Components",
    "question": "A valve train has a manual valve, regulator, pressure switches, and automatic valves. Why must installation order matter?",
    "options": [
      "Components must perform their safety function in the correct sequence",
      "Order never matters",
      "It only affects appearance",
      "It changes gas type"
    ],
    "answer": 0,
    "explanation": "Valve trains are designed for specific control and safety functions. Incorrect order can defeat protection or pressure control. Manufacturer and code requirements must be followed."
  },
  {
    "id": 47,
    "category": "Block E / Task 14 — System Components",
    "question": "A regulator vent line is reduced to a smaller size than specified. What can happen?",
    "options": [
      "Venting or relief capacity may be restricted",
      "Outlet pressure becomes perfect",
      "Gas becomes less flammable",
      "Burner efficiency always increases"
    ],
    "answer": 0,
    "explanation": "Vent lines must be sized as required. Restrictions can affect regulator response or relief discharge. Vent piping must follow manufacturer requirements."
  },
  {
    "id": 48,
    "category": "Block E / Task 14 — System Components",
    "question": "A sediment trap is installed but its cap is not tight. What is the concern?",
    "options": [
      "Gas leak at the trap",
      "Better debris collection",
      "Reduced gas pressure only",
      "Improved regulator lockup"
    ],
    "answer": 0,
    "explanation": "Sediment traps are part of the gas piping system. All threaded joints must be gas-tight. Trap caps must be leak tested."
  },
  {
    "id": 49,
    "category": "Block E / Task 14 — System Components",
    "question": "A component with an arrow marked “UP” is installed sideways. What should the technician do?",
    "options": [
      "Reinstall according to marked orientation",
      "Leave it because gas still flows",
      "Increase pipe size",
      "Adjust thermostat"
    ],
    "answer": 0,
    "explanation": "Some controls depend on orientation. Incorrect mounting can affect operation or safety. Manufacturer markings must be followed."
  },
  {
    "id": 50,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane cylinder is placed beside a basement stairwell entrance. What is the hazard?",
    "options": [
      "Propane vapour can enter and settle in lower areas",
      "Propane always rises away from stairs",
      "Propane cannot ignite outdoors",
      "Cylinder pressure becomes harmless"
    ],
    "answer": 0,
    "explanation": "Propane is heavier than air. Leaks can flow down stairs into basements. Cylinder placement must prevent vapour accumulation."
  },
  {
    "id": 51,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane regulator vent is aimed toward an appliance burner opening. What is the concern?",
    "options": [
      "Released propane could reach an ignition source",
      "Regulator output becomes safer",
      "Burner input lowers automatically",
      "Vapour becomes non-flammable"
    ],
    "answer": 0,
    "explanation": "Regulator vents may release gas under fault conditions. Discharge must not reach ignition sources. Vent orientation and location are safety-critical."
  },
  {
    "id": 52,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane tank is installed where vehicle impact is possible. What is needed?",
    "options": [
      "Protective barriers or safe relocation",
      "Higher relief valve setting",
      "Smaller regulator vent",
      "Indoor transfer hose"
    ],
    "answer": 0,
    "explanation": "Containers and propane piping must be protected from impact. Vehicle damage can cause major propane release. Protection must suit the site hazard."
  },
  {
    "id": 53,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane vapour line is connected to a container liquid withdrawal valve. What is the danger?",
    "options": [
      "Liquid propane may enter vapour equipment",
      "Outlet pressure will always be low",
      "Regulator will work better",
      "Burner input will be reduced safely"
    ],
    "answer": 0,
    "explanation": "Vapour equipment is not designed for liquid propane. Liquid carryover can cause dangerous overpressure or overfiring. Correct container connection must be verified."
  },
  {
    "id": 54,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane storage area has weeds and combustible debris around containers. What is the concern?",
    "options": [
      "Fire exposure and poor access",
      "Lower propane pressure",
      "Improved ventilation",
      "Reduced ignition risk"
    ],
    "answer": 0,
    "explanation": "Combustibles near containers increase fire risk. Clear access is needed for service and emergency response. Storage areas must be maintained safely."
  },
  {
    "id": 55,
    "category": "Block E / Task 15 — Propane Storage and Handling",
    "question": "A propane container is installed in a low-lying pit. What is the major issue?",
    "options": [
      "Vapour can accumulate around the container",
      "Propane will rise and ventilate naturally",
      "Pressure will always be lower",
      "Relief valves cannot open"
    ],
    "answer": 0,
    "explanation": "Propane vapour settles in low areas. Pits can trap leaked gas. Container placement must avoid vapour accumulation hazards."
  },
  {
    "id": 56,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A pressure test is performed with temperature dropping rapidly. The gauge pressure falls slightly. What should be considered?",
    "options": [
      "Temperature effect and possible leakage must both be evaluated",
      "The test automatically passes",
      "Temperature cannot affect pressure",
      "Odour test replaces pressure test"
    ],
    "answer": 0,
    "explanation": "Temperature changes can affect test pressure. However, leaks must still be ruled out. A proper test requires stable conditions and correct procedure."
  },
  {
    "id": 57,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A technician uses leak solution on a dirty oily fitting and sees no bubbles. What is the concern?",
    "options": [
      "Dirt or oil may prevent reliable leak detection",
      "The joint is proven safe forever",
      "Leak solution works through all contamination",
      "Pressure testing is unnecessary"
    ],
    "answer": 0,
    "explanation": "Leak solution must contact the leak point properly. Oil or dirt can interfere with bubble formation. Surfaces may need cleaning and retesting."
  },
  {
    "id": 58,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 1/2 ft³ meter dial rotates once in 24 seconds. Pressure factor is 1.0. What is gas flow?",
    "options": [
      "60 ft³/hr",
      "75 ft³/hr",
      "90 ft³/hr",
      "120 ft³/hr"
    ],
    "answer": 1,
    "explanation": "Flow = dial size ÷ seconds × 3600. 0.5 ÷ 24 × 3600 = 75 ft³/hr. Meter clocking is used to verify input."
  },
  {
    "id": 59,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 5 ft³ test dial rotates once in 150 seconds. Pressure factor is 1.05. What is corrected flow?",
    "options": [
      "105 ft³/hr",
      "120 ft³/hr",
      "126 ft³/hr",
      "150 ft³/hr"
    ],
    "answer": 2,
    "explanation": "5 ÷ 150 × 3600 = 120 ft³/hr. 120 × 1.05 = 126 ft³/hr. Pressure factor corrects measured volume flow."
  },
  {
    "id": 60,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A furnace output is 90,000 Btuh with a measured temperature rise of 55°F. What is airflow?",
    "options": [
      "1,212 cfm",
      "1,515 cfm",
      "1,800 cfm",
      "2,222 cfm"
    ],
    "answer": 1,
    "explanation": "Cfm = Btuh ÷ 1.08 ÷ ΔT. 90,000 ÷ 1.08 ÷ 55 = about 1,515 cfm. This connects heat output with airflow."
  },
  {
    "id": 61,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A combustion analyzer shows CO increasing when the mechanical room door closes. What does this suggest?",
    "options": [
      "Combustion air or pressure problem",
      "Gas pressure is always too low",
      "Flame sensor is too clean",
      "Thermostat is oversized"
    ],
    "answer": 0,
    "explanation": "Closing the door changes available air and room pressure. Rising CO indicates combustion is affected. Combustion air supply must be evaluated."
  },
  {
    "id": 62,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A draft hood spills only when a clothes dryer operates. What test condition matters?",
    "options": [
      "Test draft with exhaust appliances operating",
      "Test only with all doors open",
      "Ignore because appliance works alone",
      "Increase gas pressure"
    ],
    "answer": 0,
    "explanation": "Exhaust appliances can depressurize the building. Testing must reflect worst-case operating conditions. Backdrafting can create CO hazards."
  },
  {
    "id": 63,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A manometer hose is kinked during manifold pressure testing. What is likely?",
    "options": [
      "Incorrect pressure reading",
      "Higher gas input",
      "Better analyzer accuracy",
      "Stronger flame signal"
    ],
    "answer": 0,
    "explanation": "A kinked hose restricts pressure transmission. The reading may be delayed or wrong. Test equipment must be set up correctly."
  },
  {
    "id": 64,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A pressure factor is needed with atmospheric pressure 14.0 psi, gauge pressure 3.0 psi, and base pressure 14.7 psi. What is the factor?",
    "options": [
      "0.95",
      "1.00",
      "1.16",
      "1.36"
    ],
    "answer": 2,
    "explanation": "Pressure factor = atmospheric plus gauge divided by base. 14.0 + 3.0 = 17.0; 17.0 ÷ 14.7 = about 1.16. This factor corrects meter clocking."
  },
  {
    "id": 65,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A burner has correct manifold pressure but input by meter clocking is too high. What should be checked?",
    "options": [
      "Orifice size, gas type, and pressure factor",
      "Thermostat colour",
      "Filter arrow",
      "Vent paint"
    ],
    "answer": 0,
    "explanation": "Correct pressure alone does not prove correct input. Wrong orifices or gas type can change input. Meter clocking calculations must also be correct."
  },
  {
    "id": 66,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A flame signal is strong with the burner door removed but weak with the door installed. What should be suspected?",
    "options": [
      "Airflow, flame pattern, or grounding change with final assembly",
      "Gas meter dial error only",
      "Thermostat programming only",
      "Pipe hanger spacing only"
    ],
    "answer": 0,
    "explanation": "Appliance panels can affect air and flame conditions. Testing must be done in normal assembled condition. Weak flame signal must be corrected before approval."
  },
  {
    "id": 67,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new appliance has a normal start sequence but fails after 15 minutes on high limit. What should commissioning focus on?",
    "options": [
      "Airflow, temperature rise, input, and duct restriction",
      "Wall paint colour",
      "Thermostat brand only",
      "Gas odour level only"
    ],
    "answer": 0,
    "explanation": "High limit trip during operation indicates overheating. Airflow and input directly affect temperature rise. Commissioning must verify stable operation over time."
  },
  {
    "id": 68,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A modulating burner is commissioned at low and high fire but not mid-fire. Why may this be incomplete?",
    "options": [
      "Combustion may be unsafe at intermediate positions",
      "Mid-fire never matters",
      "High fire proves all points",
      "Low fire proves all points"
    ],
    "answer": 0,
    "explanation": "Linkage or controls may create poor combustion at mid-fire. Modulating equipment should be checked across required range. Unsafe points can exist between low and high fire."
  },
  {
    "id": 69,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A newly installed appliance has proper gas pressure but vent joints leak condensate. Can commissioning be completed?",
    "options": [
      "No, venting defect must be corrected",
      "Yes, pressure is correct",
      "Yes, if CO is low once",
      "Yes, if customer accepts"
    ],
    "answer": 0,
    "explanation": "Vent systems must safely contain flue gases and condensate. Leaking condensate can indicate poor slope or joint assembly. Venting defects must be repaired before approval."
  },
  {
    "id": 70,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A commissioning test shows the gas valve stays energized after flame loss. What is the correct action?",
    "options": [
      "Shut down and repair flame safeguard system",
      "Approve because burner was hot",
      "Increase gas pressure",
      "Remove flame sensor"
    ],
    "answer": 0,
    "explanation": "Fuel must shut off when flame is lost. Continued gas flow creates explosion risk. Flame safeguard operation is safety-critical."
  },
  {
    "id": 71,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A customer says the appliance “sounds rough” after installation. Combustion readings are unstable. What should be done?",
    "options": [
      "Continue setup and diagnosis before approval",
      "Ignore because appliance lights",
      "Reduce thermostat setting only",
      "Remove panels permanently"
    ],
    "answer": 0,
    "explanation": "Unstable readings suggest combustion or airflow issues. Noise may indicate burner or venting problems. Commissioning requires stable safe operation."
  },
  {
    "id": 72,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A startup sheet records gas pressure but not the fuel type. Why is this a weakness?",
    "options": [
      "Pressure values depend on correct fuel setup",
      "Fuel type never matters",
      "Natural gas and propane use identical settings",
      "Fuel type only affects pipe colour"
    ],
    "answer": 0,
    "explanation": "Natural gas and propane require different pressures and orifices. Fuel type is essential commissioning information. Records should clearly identify setup conditions."
  },
  {
    "id": 73,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new furnace has blower speed set too low for cooling but acceptable for heating. Why is this still a commissioning issue?",
    "options": [
      "Cooling airflow and equipment operation may be incorrect",
      "Heating is the only mode that matters",
      "Gas pressure will fix cooling airflow",
      "Thermostat batteries control airflow"
    ],
    "answer": 0,
    "explanation": "Commissioning must verify all required operating modes. Incorrect cooling airflow can damage equipment or reduce performance. Blower settings must match application."
  },
  {
    "id": 74,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new boiler is commissioned without confirming expansion tank function. What can happen?",
    "options": [
      "Pressure may rise excessively during heating",
      "Flame signal will disappear",
      "Burner orifice will shrink",
      "Gas pressure will double"
    ],
    "answer": 0,
    "explanation": "Water expands when heated. Expansion tanks control system pressure rise. Boiler commissioning includes water-side safety checks."
  },
  {
    "id": 75,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A direct-vent intake is located where exhaust recirculation occurs. What commissioning result may show this?",
    "options": [
      "Poor combustion readings or nuisance shutdown",
      "Higher flame signal always",
      "Lower stack temperature only",
      "Better efficiency always"
    ],
    "answer": 0,
    "explanation": "Recirculated flue gas reduces oxygen at the burner. This can affect combustion and pressure proving. Termination location must follow instructions."
  },
  {
    "id": 76,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "After commissioning, the installer leaves no operating instructions with the owner. What is missing?",
    "options": [
      "Proper handover for safe operation and maintenance",
      "Pipe sizing calculation",
      "Burner orifice drilling",
      "Regulator disassembly"
    ],
    "answer": 0,
    "explanation": "Owners need to know safe operation basics. They should know maintenance needs and warning signs. Customer handover is part of commissioning."
  },
  {
    "id": 77,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "During service, a heat exchanger has rust streaks below the vent connection. What should be investigated?",
    "options": [
      "Condensate leakage, vent slope, and combustion conditions",
      "Thermostat display brightness",
      "Gas meter dial colour",
      "Filter brand only"
    ],
    "answer": 0,
    "explanation": "Rust can indicate moisture or condensate problems. Venting and combustion issues can create condensation. The cause must be corrected, not just cleaned."
  },
  {
    "id": 78,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A pressure switch tube is brittle and cracked during maintenance. What should be done?",
    "options": [
      "Replace tubing and verify switch operation",
      "Tape it permanently",
      "Bypass the switch",
      "Increase gas pressure"
    ],
    "answer": 0,
    "explanation": "Cracked tubing can leak pressure signal. This can cause false switch operation. The safety circuit must be restored and tested."
  },
  {
    "id": 79,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A burner compartment contains lint and pet hair. What risk does this create?",
    "options": [
      "Restricted air and poor combustion",
      "Higher fuel value",
      "Better ignition",
      "Improved flame signal"
    ],
    "answer": 0,
    "explanation": "Lint can block air openings and burner ports. Poor air-fuel mixing can create CO. Burner compartments must be cleaned during maintenance."
  },
  {
    "id": 80,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A belt-driven blower has black rubber dust around the pulley. What does this suggest?",
    "options": [
      "Belt wear, misalignment, or slipping",
      "Correct belt operation",
      "High gas pressure",
      "Strong flame current"
    ],
    "answer": 0,
    "explanation": "Rubber dust often indicates belt wear or slip. Pulley alignment and tension should be checked. Poor belt condition affects airflow."
  },
  {
    "id": 81,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A condensate neutralizer is exhausted and no longer neutralizes acidic condensate. What is the concern?",
    "options": [
      "Drain system corrosion",
      "Higher gas pressure",
      "Stronger flame signal",
      "Lower motor current"
    ],
    "answer": 0,
    "explanation": "Condensing appliances produce acidic condensate. Neutralizer media protects drain materials where required. Maintenance may include replacing neutralizer media."
  },
  {
    "id": 82,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A draft inducer wheel is coated with debris. What can result?",
    "options": [
      "Reduced draft proving and poor venting",
      "Higher burner input",
      "Better airflow",
      "Reduced CO automatically"
    ],
    "answer": 0,
    "explanation": "Debris reduces inducer performance. Pressure switches may fail to prove airflow. Venting and combustion can be affected."
  },
  {
    "id": 83,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A furnace flame rolls slightly at startup during maintenance. What should be done?",
    "options": [
      "Investigate burner, heat exchanger, and venting conditions",
      "Ignore if it stops quickly",
      "Increase thermostat setting",
      "Remove rollout switch"
    ],
    "answer": 0,
    "explanation": "Flame rollout is a serious warning sign. It may indicate blockage, burner issue, or heat exchanger problem. The safety cause must be determined."
  },
  {
    "id": 84,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A service record shows no combustion readings for several years. Why is this a problem?",
    "options": [
      "There is no trend or proof of combustion condition",
      "Combustion never changes",
      "Pressure readings are unnecessary",
      "Flame colour is enough documentation"
    ],
    "answer": 0,
    "explanation": "Combustion readings provide safety and trend data. Changes over time can reveal developing problems. Good maintenance includes measurable records."
  },
  {
    "id": 85,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace locks out on flame failure only when the blower starts. What should be checked?",
    "options": [
      "Flame disturbance, grounding, wiring movement, and pressure changes",
      "Gas meter colour",
      "Thermostat appearance",
      "Filter brand only"
    ],
    "answer": 0,
    "explanation": "Blower start can change air pressure or shake wiring. Flame signal may drop if flame or ground is disturbed. Diagnosis must observe the failure condition."
  },
  {
    "id": 86,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repair technician replaces a gas valve but does not adjust manifold pressure. What is wrong?",
    "options": [
      "New valve outlet pressure must be verified and adjusted if required",
      "New valves always come perfectly set",
      "Pressure no longer matters",
      "Flame colour is enough"
    ],
    "answer": 0,
    "explanation": "Gas valves may require setup after installation. Manifold pressure affects input and combustion. Pressure must be measured under operation."
  },
  {
    "id": 87,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A boiler relief valve opens repeatedly after the circulator is replaced. What should be checked?",
    "options": [
      "System pressure, expansion tank, fill valve, and temperature control",
      "Flame rod only",
      "Thermostat colour only",
      "Gas meter dial only"
    ],
    "answer": 0,
    "explanation": "Relief valve discharge indicates pressure or temperature issue. Expansion tank or fill valve problems are common causes. Relief valves must never be capped."
  },
  {
    "id": 88,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A pilot safety magnet drops out after the pilot has been burning for several minutes. What should be checked?",
    "options": [
      "Thermocouple output, pilot flame contact, and safety magnet",
      "Blower belt tension only",
      "Vent connector paint",
      "Room thermostat colour"
    ],
    "answer": 0,
    "explanation": "Pilot safety depends on proper thermocouple signal. Weak flame contact or failing magnet can drop the pilot. The safety circuit must hold reliably."
  },
  {
    "id": 89,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace works after the control board is tapped lightly. What does this suggest?",
    "options": [
      "Loose connection or failing board solder/contact",
      "Correct normal operation",
      "Excess gas pressure",
      "Oversized vent only"
    ],
    "answer": 0,
    "explanation": "Mechanical tapping changing operation suggests intermittent connection. Loose terminals or cracked solder may be present. The fault must be corrected, not ignored."
  },
  {
    "id": 90,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A burner flame lifts off after a regulator replacement. What should be checked?",
    "options": [
      "Manifold pressure, regulator setting, and burner air adjustment",
      "Filter arrow only",
      "Thermostat schedule",
      "Pipe colour"
    ],
    "answer": 0,
    "explanation": "Flame lift can result from excessive gas velocity or air. Regulator replacement can change pressure. Combustion and pressure must be verified."
  },
  {
    "id": 91,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A direct-vent furnace shows pressure switch closed before inducer starts. What is likely?",
    "options": [
      "Stuck switch or wiring fault",
      "Correct operation",
      "Low gas pressure",
      "Dirty filter only"
    ],
    "answer": 0,
    "explanation": "Pressure switch should not prove before inducer airflow exists. A closed-before-start condition may indicate stuck contacts. Controls should lock out unsafe proving faults."
  },
  {
    "id": 92,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired burner has stable flame but combustion analyzer shows high excess air and low efficiency. What should be checked?",
    "options": [
      "Air adjustment, burner setup, and heat transfer condition",
      "Gas odour only",
      "Thermostat batteries",
      "Cabinet screws only"
    ],
    "answer": 0,
    "explanation": "Too much air carries heat out the vent. Burner air settings may need adjustment. Heat exchanger condition can also affect efficiency."
  },
  {
    "id": 93,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A new inducer motor is installed but pressure switch still does not close. What should be checked next?",
    "options": [
      "Vent restriction, tubing, switch, and pressure measurement",
      "Gas valve coil only",
      "Furnace colour",
      "Filter date only"
    ],
    "answer": 0,
    "explanation": "The inducer is only one part of the proving system. Venting or tubing restrictions can prevent pressure differential. Actual pressure should be measured."
  },
  {
    "id": 94,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A burner produces soot after a repair. What is the most important concern?",
    "options": [
      "Incomplete combustion and CO risk",
      "Higher efficiency",
      "Normal repair result",
      "Better flame stability"
    ],
    "answer": 0,
    "explanation": "Soot indicates incomplete combustion. It may block heat transfer and raise CO. The appliance must not be left sooting."
  },
  {
    "id": 95,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A replacement pressure switch physically fits but has a different setpoint. Why is this unacceptable?",
    "options": [
      "It may prove unsafe conditions or fail safe conditions",
      "Physical fit is all that matters",
      "It improves safety automatically",
      "It changes gas type"
    ],
    "answer": 0,
    "explanation": "Pressure switch setpoint is safety-critical. Wrong setpoint can defeat airflow proving. Replacement must match approved specifications."
  },
  {
    "id": 96,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace runs with the burner door removed but shuts down when the door is installed. What should be checked?",
    "options": [
      "Combustion air path, venting, and pressure switch operation",
      "Thermostat colour",
      "Gas meter brand",
      "Pipe hanger spacing"
    ],
    "answer": 0,
    "explanation": "Door installation changes airflow and pressure conditions. The appliance must operate safely fully assembled. This symptom suggests air or venting issues."
  },
  {
    "id": 97,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "After replacing a gas regulator, what must be done before leaving the appliance in service?",
    "options": [
      "Leak test, pressure check, and combustion/operation verification",
      "Only wipe the regulator clean",
      "Only check thermostat setting",
      "Only listen to the burner"
    ],
    "answer": 0,
    "explanation": "Regulator replacement affects fuel pressure. All disturbed joints must be leak tested. Appliance operation and combustion must be verified."
  },
  {
    "id": 98,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A rooftop gas appliance is removed, but the abandoned gas line remains pressurized to the roof. What is the proper action?",
    "options": [
      "Isolate, cap or plug correctly, leak test, and document",
      "Leave the line open because the appliance is gone",
      "Tape the pipe end",
      "Rely on roof ventilation"
    ],
    "answer": 0,
    "explanation": "Abandoned gas piping must be made safe. Open or unused pressurized lines are a serious hazard. Isolation and leak testing are required."
  },
  {
    "id": 99,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A decommissioned propane line is cut without confirming it is depressurized and purged. What is the hazard?",
    "options": [
      "Ignition or release of trapped propane",
      "Lower explosion risk",
      "Improved ventilation",
      "Propane becomes inert"
    ],
    "answer": 0,
    "explanation": "Propane can remain trapped in piping. It is flammable and heavier than air. Lines must be safely isolated, depressurized, and handled."
  },
  {
    "id": 100,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A commercial appliance is decommissioned but electrical power remains connected to abandoned controls. What should be done?",
    "options": [
      "Safely isolate and identify abandoned electrical circuits",
      "Leave circuits energized for future use",
      "Remove labels",
      "Connect wires together"
    ],
    "answer": 0,
    "explanation": "Abandoned energized circuits can shock workers or cause faults. Decommissioning includes gas and electrical safety. Circuits should be isolated, labelled, and documented."
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
  sectionTitle: "Practice Exam Set 4",
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
