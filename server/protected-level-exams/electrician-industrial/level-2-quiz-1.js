const electricianLevel2StandardizedQuestions = [
{
"id": 1,
"category": "A1 — Use electrical circuit concepts",
"question": "A 240 V heater draws 12 A. What is the power rating?",
"options": [
"1200 W",
"2400 W",
"2880 W",
"4800 W"
],
"answer": 2,
"explanation": "Use (P = E × I). (240 × 12 = 2880W). The heater is rated 2880 watts."
},
{
"id": 2,
"category": "A1 — Use electrical circuit concepts",
"question": "A circuit has a 30 Ω load connected to 120 V. What current flows?",
"options": [
"2 A",
"4 A",
"6 A",
"12 A"
],
"answer": 1,
"explanation": "Use Ohm’s Law: (I = E/R). (120 ÷ 30 = 4A). Current is 4 amps."
},
{
"id": 3,
"category": "A1 — Use electrical circuit concepts",
"question": "Two 20 Ω resistors are connected in parallel. What is total resistance?",
"options": [
"5 Ω",
"10 Ω",
"20 Ω",
"40 Ω"
],
"answer": 1,
"explanation": "Equal parallel resistors divide by the number of resistors. (20 ÷ 2 = 10Ω). Total resistance is 10 ohms."
},
{
"id": 4,
"category": "A1 — Use electrical circuit concepts",
"question": "A 10 Ω resistor and a 15 Ω resistor are connected in series. What is total resistance?",
"options": [
"5 Ω",
"6 Ω",
"25 Ω",
"150 Ω"
],
"answer": 2,
"explanation": "Series resistances add directly. (10 + 15 = 25Ω). Total resistance is 25 ohms."
},
{
"id": 5,
"category": "A1 — Use electrical circuit concepts",
"question": "A 1200 W load operates at 120 V. What current does it draw?",
"options": [
"5 A",
"10 A",
"12 A",
"20 A"
],
"answer": 1,
"explanation": "Use (I = P/E). (1200 ÷ 120 = 10A). The load draws 10 amps."
},
{
"id": 6,
"category": "A1 — Use electrical circuit concepts",
"question": "What happens to current if resistance decreases and voltage stays the same?",
"options": [
"Current decreases",
"Current increases",
"Current becomes zero",
"Voltage disappears"
],
"answer": 1,
"explanation": "Ohm’s Law says (I = E/R). Lower resistance allows more current. This is why short circuits create high current."
},
{
"id": 7,
"category": "A1 — Use electrical circuit concepts",
"question": "A circuit has 8 A flowing through a 6 Ω resistance. What is the voltage?",
"options": [
"14 V",
"24 V",
"48 V",
"96 V"
],
"answer": 2,
"explanation": "Use (E = I × R). (8 × 6 = 48V). Voltage is 48 volts."
},
{
"id": 8,
"category": "A1 — Use electrical circuit concepts",
"question": "A loose connection becomes hot under load. What is the most likely cause?",
"options": [
"Low resistance and no current",
"High resistance at the connection",
"Correct torque",
"Perfect continuity"
],
"answer": 1,
"explanation": "Loose connections increase resistance. Current through resistance creates heat. This can damage equipment or start a fire."
},
{
"id": 9,
"category": "A4 — Analyze single-phase AC circuits",
"question": "In a pure resistive AC circuit, voltage and current are:",
"options": [
"90° out of phase",
"180° out of phase",
"In phase",
"Not related"
],
"answer": 2,
"explanation": "In a resistive circuit, current follows voltage directly. There is no inductive or capacitive phase shift. Power factor is 1 or unity."
},
{
"id": 10,
"category": "A4 — Analyze single-phase AC circuits",
"question": "In an inductive AC circuit, current:",
"options": [
"Leads voltage",
"Lags voltage",
"Is always DC",
"Has no relationship to voltage"
],
"answer": 1,
"explanation": "Inductors oppose changes in current. This causes current to lag voltage. Motors and coils are inductive loads."
},
{
"id": 11,
"category": "A4 — Analyze single-phase AC circuits",
"question": "In a capacitive AC circuit, current:",
"options": [
"Leads voltage",
"Lags voltage",
"Is zero",
"Becomes resistance only"
],
"answer": 0,
"explanation": "Capacitors oppose changes in voltage. Current leads voltage in capacitive circuits. This is opposite of inductive circuits."
},
{
"id": 12,
"category": "A4 — Analyze single-phase AC circuits",
"question": "A 120 V AC circuit has 10 Ω resistance. What current flows in a purely resistive load?",
"options": [
"1.2 A",
"10 A",
"12 A",
"120 A"
],
"answer": 2,
"explanation": "Use (I = E/R). (120 ÷ 10 = 12A). For a pure resistor, impedance equals resistance."
},
{
"id": 13,
"category": "A4 — Analyze single-phase AC circuits",
"question": "What is inductive reactance symbolized by?",
"options": [
"(R)",
"(X_L)",
"(X_C)",
"(P)"
],
"answer": 1,
"explanation": "(X_L) means inductive reactance. It is measured in ohms. It increases as frequency or inductance increases."
},
{
"id": 14,
"category": "A4 — Analyze single-phase AC circuits",
"question": "What is capacitive reactance symbolized by?",
"options": [
"(X_C)",
"(X_L)",
"(kVA)",
"(Hz)"
],
"answer": 0,
"explanation": "(X_C) means capacitive reactance. It is measured in ohms. It decreases when frequency or capacitance increases."
},
{
"id": 15,
"category": "A4 — Analyze single-phase AC circuits",
"question": "If frequency increases, what happens to inductive reactance?",
"options": [
"It increases",
"It decreases",
"It becomes zero",
"It becomes capacitance"
],
"answer": 0,
"explanation": "(X_L = 2πfL). Frequency and inductive reactance are directly related. Higher frequency gives higher (X_L)."
},
{
"id": 16,
"category": "A4 — Analyze single-phase AC circuits",
"question": "If frequency increases, what happens to capacitive reactance?",
"options": [
"It increases",
"It decreases",
"It becomes infinite",
"It becomes resistance only"
],
"answer": 1,
"explanation": "(X_C = 1/(2πfC)). Frequency and capacitive reactance are inversely related. Higher frequency gives lower (X_C)."
},
{
"id": 17,
"category": "A4 — Analyze single-phase AC circuits",
"question": "A single-phase motor draws 10 A at 120 V with a power factor of 0.8. What is true power?",
"options": [
"800 W",
"960 W",
"1200 W",
"1500 W"
],
"answer": 1,
"explanation": "Use (P = E × I × pf). (120 × 10 × 0.8 = 960W). True power is measured in watts."
},
{
"id": 18,
"category": "A4 — Analyze single-phase AC circuits",
"question": "In AC circuits, apparent power is measured in:",
"options": [
"Watts",
"VAR",
"VA",
"Ohms"
],
"answer": 2,
"explanation": "Apparent power is volts times amps. Its unit is volt-ampere. For single phase, (S = E × I)."
},
{
"id": 19,
"category": "A4 — Analyze single-phase AC circuits",
"question": "Reactive power is measured in:",
"options": [
"Watts",
"VAR",
"Volts only",
"Ohms only"
],
"answer": 1,
"explanation": "Reactive power is measured in volt-ampere reactive. It is associated with magnetic and electric fields. Inductors and capacitors create reactive power."
},
{
"id": 20,
"category": "A4 — Analyze single-phase AC circuits",
"question": "A low power factor means:",
"options": [
"Current and voltage are perfectly in phase",
"More current is required for the same true power",
"Resistance is always zero",
"Frequency is always zero"
],
"answer": 1,
"explanation": "Low power factor means poor use of current. More current flows to deliver the same watts. This can increase losses and conductor heating."
},
{
"id": 21,
"category": "A4 — Analyze single-phase AC circuits",
"question": "In a series R-L circuit, impedance is made of:",
"options": [
"Resistance only",
"Inductive reactance only",
"Resistance and inductive reactance",
"Capacitance only"
],
"answer": 2,
"explanation": "Impedance is total opposition to AC current. In an R-L circuit, resistance and (X_L) both oppose current. They are combined using vector relationships."
},
{
"id": 22,
"category": "A4 — Analyze single-phase AC circuits",
"question": "A 120 V receptacle reads 120 V RMS. What does RMS mean?",
"options": [
"Root mean square",
"Rated motor speed",
"Resistance motor system",
"Reverse measured source"
],
"answer": 0,
"explanation": "RMS is the effective AC value. A 120 V RMS AC supply produces heating like 120 V DC. Meters usually display RMS voltage."
},
{
"id": 23,
"category": "A6 — Analyze electronic circuits",
"question": "What does a diode do in a circuit?",
"options": [
"Allows current mainly one direction",
"Stores magnetic flux only",
"Measures current",
"Opens at exact overload"
],
"answer": 0,
"explanation": "A diode is a semiconductor device. It conducts when forward biased. It blocks current when reverse biased."
},
{
"id": 24,
"category": "A6 — Analyze electronic circuits",
"question": "A bridge rectifier converts AC into:",
"options": [
"Pulsating DC",
"Higher frequency AC",
"Pure resistance",
"Ground fault current"
],
"answer": 0,
"explanation": "Rectifiers use diodes. A bridge rectifier uses both half cycles. The output is DC with ripple."
},
{
"id": 25,
"category": "A6 — Analyze electronic circuits",
"question": "A capacitor after a rectifier is used mainly to:",
"options": [
"Smooth ripple",
"Increase breaker size",
"Lower insulation rating",
"Convert DC back to AC only"
],
"answer": 0,
"explanation": "The capacitor charges during voltage peaks. It discharges between peaks. This smooths the DC output."
},
{
"id": 26,
"category": "A6 — Analyze electronic circuits",
"question": "An LED must usually have a series resistor because:",
"options": [
"It needs current limiting",
"It needs more grounding",
"It works only on 600 V",
"It has no polarity"
],
"answer": 0,
"explanation": "LEDs can be damaged by excess current. A resistor limits current to a safe value. LED polarity must also be observed."
},
{
"id": 27,
"category": "A6 — Analyze electronic circuits",
"question": "A transistor used to energize a relay from a control board is acting as:",
"options": [
"A switch",
"A fuse",
"A transformer core",
"A conduit fitting"
],
"answer": 0,
"explanation": "Transistors can control current electronically. A small signal can switch a larger load. This is common in control circuits."
},
{
"id": 28,
"category": "A6 — Analyze electronic circuits",
"question": "What does (\\mu F) represent?",
"options": [
"Microfarad",
"Microfuse",
"Millihenry",
"Megavolt"
],
"answer": 0,
"explanation": "Farad is the unit of capacitance. Microfarad means one millionth of a farad. Capacitors are often rated in (\\mu F)."
},
{
"id": 29,
"category": "A6 — Analyze electronic circuits",
"question": "What does mH represent?",
"options": [
"Millihenry",
"Megahertz",
"Microhenry",
"Meter-hour"
],
"answer": 0,
"explanation": "Henry is the unit of inductance. Millihenry is one thousandth of a henry. Coils and inductors may be rated in mH."
},
{
"id": 30,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A drawing note says a receptacle is mounted 450 mm AFF. What does AFF mean?",
"options": [
"Above finished floor",
"Arc fault feeder",
"Approved fuse frame",
"Alternating field frequency"
],
"answer": 0,
"explanation": "AFF means above finished floor. It is a mounting height reference. Measurements are taken from finished floor level."
},
{
"id": 31,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A panel schedule is used to identify:",
"options": [
"Circuit numbers and connected loads",
"Worker vacation dates",
"Ladder condition",
"Tool brand"
],
"answer": 0,
"explanation": "Panel schedules show circuit information. They help match loads to breakers. They are important during installation and troubleshooting."
},
{
"id": 32,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A single-line diagram mainly shows:",
"options": [
"Simplified power distribution",
"Paint colours",
"Exact screw lengths",
"Lunchroom layout"
],
"answer": 0,
"explanation": "Single-line diagrams show major electrical equipment. They simplify feeders, panels, and transformers. They help understand system arrangement."
},
{
"id": 33,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "If the drawing and site conditions conflict, the electrician should:",
"options": [
"Guess and continue",
"Ask for clarification",
"Ignore the drawing",
"Install the cheapest option"
],
"answer": 1,
"explanation": "Conflicts should be resolved before installation. Proper communication prevents rework. Approved changes protect safety and quality."
},
{
"id": 34,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "In a 120/240 V single-phase service, line-to-neutral voltage is normally:",
"options": [
"24 V",
"120 V",
"208 V",
"240 V"
],
"answer": 1,
"explanation": "Each ungrounded conductor to neutral gives 120 V. Line-to-line gives 240 V. This is common for residential services."
},
{
"id": 35,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "In a 120/240 V service, line-to-line voltage is normally:",
"options": [
"120 V",
"208 V",
"240 V",
"347 V"
],
"answer": 2,
"explanation": "The two line conductors are opposite ends of the transformer winding. Voltage between them is 240 V. Voltage from either line to neutral is 120 V."
},
{
"id": 36,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "The neutral in a split-phase service carries:",
"options": [
"Only the imbalance current",
"The full current of both lines added always",
"No current under any condition",
"Only grounding electrode current"
],
"answer": 0,
"explanation": "Balanced 120 V loads cancel in the neutral. The neutral carries only unbalanced current. This is important in single-phase three-wire systems."
},
{
"id": 37,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "A meter socket with loose jaws can cause:",
"options": [
"Heating and arcing",
"Lower resistance always",
"Perfect metering",
"Reduced current to zero only"
],
"answer": 0,
"explanation": "Loose contacts increase resistance. Resistance under load causes heat. Arcing can damage the meter base."
},
{
"id": 38,
"category": "I1 — Install overcurrent protection devices",
"question": "The main purpose of a fuse or breaker is to protect against:",
"options": [
"Overcurrent",
"Low temperature",
"Low light",
"Pipe vibration"
],
"answer": 0,
"explanation": "Overcurrent includes overloads and short circuits. Protective devices open the circuit. This helps prevent conductor and equipment damage."
},
{
"id": 39,
"category": "I1 — Install overcurrent protection devices",
"question": "A breaker’s interrupting rating must be high enough for the:",
"options": [
"Available fault current",
"Wall thickness",
"Panel colour",
"Conduit bend radius only"
],
"answer": 0,
"explanation": "Breakers must safely interrupt fault current. If fault current exceeds the rating, the breaker may fail. Interrupting rating is a safety requirement."
},
{
"id": 40,
"category": "I2 — Install ground fault, arc fault and surge protection devices",
"question": "A GFCI trips because it detects:",
"options": [
"Current imbalance between conductors",
"Low room temperature",
"Loose conduit straps",
"Normal voltage drop only"
],
"answer": 0,
"explanation": "GFCIs compare outgoing and returning current. Leakage current causes imbalance. They trip to reduce shock hazard."
},
{
"id": 41,
"category": "L1 — Install grounding and bonding systems",
"question": "Bonding metal parts provides:",
"options": [
"A low-impedance fault path",
"Higher voltage",
"Lower frequency",
"More capacitance only"
],
"answer": 0,
"explanation": "Bonding connects metal parts together. Fault current can return to the source. This helps operate the overcurrent device."
},
{
"id": 42,
"category": "L1 — Install grounding and bonding systems",
"question": "Grounding connects the electrical system to:",
"options": [
"Earth",
"A switch handle",
"A plastic box",
"A light lens"
],
"answer": 0,
"explanation": "Grounding establishes a connection to earth. It stabilizes voltage to ground. It is different from bonding metal parts together."
},
{
"id": 43,
"category": "L1 — Install grounding and bonding systems",
"question": "A metal box is not bonded. If a hot conductor touches it, the box may:",
"options": [
"Become energized",
"Become plastic",
"Lower source voltage to zero safely",
"Stop all current automatically"
],
"answer": 0,
"explanation": "Without bonding, fault current may not clear. The metal box can remain live. This creates a shock hazard."
},
{
"id": 44,
"category": "N1 — Install renewable energy generating and storage systems",
"question": "A photovoltaic system can still produce voltage when:",
"options": [
"Exposed to light",
"Fully covered and disconnected forever",
"Stored in darkness only",
"Connected to a water pipe only"
],
"answer": 0,
"explanation": "Solar modules generate DC voltage from light. Disconnecting the load does not stop module voltage. PV circuits must be treated as energized when illuminated."
},
{
"id": 45,
"category": "P1 — Install single-phase transformers",
"question": "A transformer primary has 240 V and 100 turns. The secondary has 50 turns. What is secondary voltage?",
"options": [
"60 V",
"120 V",
"240 V",
"480 V"
],
"answer": 1,
"explanation": "Transformer voltage ratio equals turns ratio. (50 ÷ 100 = 0.5). (240 × 0.5 = 120V)."
},
{
"id": 46,
"category": "P1 — Install single-phase transformers",
"question": "A transformer changes 120 V to 24 V. What type is it?",
"options": [
"Step-up transformer",
"Step-down transformer",
"Isolation only with no ratio",
"Current transformer only"
],
"answer": 1,
"explanation": "Secondary voltage is lower than primary voltage. The transformer reduces voltage. This is a step-down transformer."
},
{
"id": 47,
"category": "P1 — Install single-phase transformers",
"question": "A transformer changes 120 V to 240 V. What type is it?",
"options": [
"Step-up transformer",
"Step-down transformer",
"Fuse holder",
"Rectifier only"
],
"answer": 0,
"explanation": "Secondary voltage is higher than primary voltage. The transformer increases voltage. This is a step-up transformer."
},
{
"id": 48,
"category": "P1 — Install single-phase transformers",
"question": "If transformer voltage is stepped down, secondary current usually:",
"options": [
"Increases",
"Decreases to zero",
"Is always the same as primary",
"Becomes frequency"
],
"answer": 0,
"explanation": "Power is approximately conserved minus losses. Lower voltage means higher current for similar power. This is the inverse voltage-current relationship."
},
{
"id": 49,
"category": "P1 — Install single-phase transformers",
"question": "A transformer is rated 2 kVA with a 120 V secondary. What is full-load secondary current?",
"options": [
"8.3 A",
"12 A",
"16.7 A",
"24 A"
],
"answer": 2,
"explanation": "Use (I = VA/E). (2000 ÷ 120 = 16.7A). The secondary can supply about 16.7 amps."
},
{
"id": 50,
"category": "P1 — Install single-phase transformers",
"question": "The transformer core is laminated mainly to reduce:",
"options": [
"Eddy current losses",
"Wire colour",
"Circuit voltage to zero",
"Conductor length"
],
"answer": 0,
"explanation": "Changing flux can induce currents in the core. Laminations restrict those currents. This reduces heating and energy loss."
},
{
"id": 51,
"category": "P1 — Install single-phase transformers",
"question": "A control transformer secondary is commonly used to supply:",
"options": [
"Low-voltage control circuits",
"Ground rods",
"Raceway straps",
"Panel labels only"
],
"answer": 0,
"explanation": "Control transformers reduce voltage for controls. Common secondary voltages include 24 V or 120 V. They are used in HVAC and motor control systems."
},
{
"id": 52,
"category": "P1 — Install single-phase transformers",
"question": "A transformer operates by:",
"options": [
"Mutual induction",
"Mechanical friction",
"Chemical reaction",
"Static pressure"
],
"answer": 0,
"explanation": "AC in the primary creates changing magnetic flux. Changing flux induces voltage in the secondary. This is mutual induction."
},
{
"id": 53,
"category": "P1 — Install single-phase transformers",
"question": "Why must transformer windings be connected to the correct rated voltage?",
"options": [
"Incorrect voltage can overheat or damage the transformer",
"It changes copper to aluminum",
"It makes grounding unnecessary",
"It removes all load current"
],
"answer": 0,
"explanation": "Windings are designed for specific voltage. Wrong voltage can cause excessive current or poor output. Nameplate ratings must be followed."
},
{
"id": 54,
"category": "Q1 — Install conductors and cables",
"question": "Before pulling conductors, what should be checked?",
"options": [
"Raceway is complete and free of sharp edges",
"Paint colour is correct",
"Ladder brand is approved",
"Lunch schedule is posted"
],
"answer": 0,
"explanation": "Sharp edges can damage insulation. Raceways should be ready before pulling. Bushings and fittings protect conductors."
},
{
"id": 55,
"category": "Q1 — Install conductors and cables",
"question": "A wet location requires conductors or cable rated for:",
"options": [
"Wet conditions",
"Dry-only indoor use",
"Communication only",
"Mechanical storage only"
],
"answer": 0,
"explanation": "Insulation must match the environment. Wet locations can damage unsuitable cable. Ratings must be checked before installation."
},
{
"id": 56,
"category": "Q1 — Install conductors and cables",
"question": "Why is pulling lubricant used when required?",
"options": [
"To reduce friction and insulation damage",
"To increase voltage",
"To remove grounding",
"To make conductors smaller"
],
"answer": 0,
"explanation": "Long pulls can create high tension. Approved lubricant reduces friction. This protects conductor insulation."
},
{
"id": 57,
"category": "Q2 — Install raceways, boxes and fittings",
"question": "What is the purpose of an electrical box?",
"options": [
"Enclose splices and provide access",
"Increase frequency",
"Replace overcurrent protection",
"Store unused tools"
],
"answer": 0,
"explanation": "Splices must be protected in enclosures. Boxes allow safe access for inspection or maintenance. They also support devices and covers."
},
{
"id": 58,
"category": "R1 — Install luminaires",
"question": "A luminaire installed outdoors must be:",
"options": [
"Suitable for the location",
"Dry-location only",
"Supported by conductors only",
"Installed without bonding"
],
"answer": 0,
"explanation": "Outdoor fixtures face moisture and weather. The luminaire must be rated for the environment. Improper equipment can fail or become unsafe."
},
{
"id": 59,
"category": "R2 — Install wiring devices",
"question": "A receptacle terminal is loose. What problem can result?",
"options": [
"Heat and arcing",
"Better voltage regulation",
"Lower resistance to zero safely",
"Improved grounding automatically"
],
"answer": 0,
"explanation": "Loose terminals create high resistance. High resistance under load creates heat. Arcing can damage the device."
},
{
"id": 60,
"category": "R2 — Install wiring devices",
"question": "A switch should normally interrupt the:",
"options": [
"Ungrounded conductor",
"Bonding conductor",
"Grounding electrode only",
"Metal box"
],
"answer": 0,
"explanation": "Switching the hot conductor de-energizes the load. Switching the neutral can leave equipment live. This is a shock hazard."
},
{
"id": 61,
"category": "R3 — Install lighting controls",
"question": "A hallway light must be controlled from two locations. What switch arrangement is used?",
"options": [
"Two three-way switches",
"One single-pole switch only",
"One fuse only",
"One GFCI only"
],
"answer": 0,
"explanation": "Three-way switches control one load from two places. They use traveller conductors. This is common in hallways and stairs."
},
{
"id": 62,
"category": "R3 — Install lighting controls",
"question": "A dimmer overheats after installation. What should be checked first?",
"options": [
"Load type and wattage rating",
"Wall colour",
"Conduit length only",
"Floor height"
],
"answer": 0,
"explanation": "Dimmers must match the load type. They also have maximum wattage ratings. Overloaded or incompatible dimmers can overheat."
},
{
"id": 63,
"category": "S1 — Install HVAC systems and controls",
"question": "HVAC stands for:",
"options": [
"Heating, ventilation, and air conditioning",
"High voltage alternating current",
"Hot valve automatic control",
"Heavy ventilation cable"
],
"answer": 0,
"explanation": "HVAC means heating, ventilation, and air conditioning. It includes heating and cooling equipment. Electricians often wire HVAC power and controls."
},
{
"id": 64,
"category": "S1 — Install HVAC systems and controls",
"question": "A thermostat in a 24 V furnace control circuit is usually supplied by:",
"options": [
"A control transformer",
"A grounding rod",
"A service mast",
"A dimmer switch"
],
"answer": 0,
"explanation": "HVAC controls often use 24 V. A transformer steps line voltage down. This supplies the thermostat and control circuit."
},
{
"id": 65,
"category": "S1 — Install HVAC systems and controls",
"question": "DDC in HVAC controls stands for:",
"options": [
"Direct digital control",
"Double disconnect circuit",
"Dry duct cable",
"Direct diode current"
],
"answer": 0,
"explanation": "DDC means direct digital control. It uses electronic controllers and sensors. It is common in building automation systems."
},
{
"id": 66,
"category": "S1 — Install HVAC systems and controls",
"question": "A contactor in an air-conditioning unit is used to:",
"options": [
"Switch power to a load such as a compressor",
"Measure conduit size",
"Store refrigerant",
"Replace the thermostat sensor"
],
"answer": 0,
"explanation": "A contactor is an electrically operated switch. A control circuit energizes the coil. The contacts switch the higher-power load."
},
{
"id": 67,
"category": "S2 — Maintain HVAC systems and controls",
"question": "An HVAC contactor chatters when energized. What is a likely cause?",
"options": [
"Low coil voltage or poor control connection",
"Correct operation always",
"Oversized conduit",
"Too much grounding"
],
"answer": 0,
"explanation": "A contactor needs proper coil voltage. Low voltage may not hold the armature firmly. Loose control wiring can also cause chatter."
},
{
"id": 68,
"category": "T1 — Install exit and emergency lighting systems",
"question": "Emergency lighting must operate when:",
"options": [
"Normal power fails",
"The room is painted",
"The panel door is open only",
"The thermostat calls for heat"
],
"answer": 0,
"explanation": "Emergency lighting provides illumination during power loss. It helps occupants leave safely. Battery units or emergency power systems may be used."
},
{
"id": 69,
"category": "U1 — Install cathodic protection systems",
"question": "Cathodic protection is used mainly to protect metal from:",
"options": [
"Corrosion",
"Overvoltage",
"Low frequency",
"Heat from lighting"
],
"answer": 0,
"explanation": "Cathodic protection reduces corrosion of buried or submerged metal. It is used on tanks, pipelines, and structures. It makes the protected metal act as the cathode."
},
{
"id": 70,
"category": "V1 — Install motor starters and controls",
"question": "A magnetic motor starter uses a coil to operate:",
"options": [
"Power contacts",
"Ground rods",
"Cable trays",
"Receptacle slots"
],
"answer": 0,
"explanation": "The coil creates a magnetic field. The field pulls in the armature. This closes or opens power contacts."
},
{
"id": 71,
"category": "V1 — Install motor starters and controls",
"question": "What is the main purpose of overload protection in a motor starter?",
"options": [
"Protect the motor from sustained overcurrent",
"Protect only against lightning",
"Replace the disconnect",
"Increase motor horsepower"
],
"answer": 0,
"explanation": "Overloads respond to excessive motor current over time. They help prevent overheating. They are different from short-circuit protection."
},
{
"id": 72,
"category": "V1 — Install motor starters and controls",
"question": "A start pushbutton is normally:",
"options": [
"Normally open",
"Normally closed",
"Always shorted",
"Always grounded"
],
"answer": 0,
"explanation": "A start button closes when pressed. This energizes the control circuit. It returns open when released."
},
{
"id": 73,
"category": "V1 — Install motor starters and controls",
"question": "A stop pushbutton is normally:",
"options": [
"Normally closed",
"Normally open",
"Always bypassed",
"Never in the control circuit"
],
"answer": 0,
"explanation": "A stop button opens when pressed. This breaks the control circuit. Normally closed design helps fail safely."
},
{
"id": 74,
"category": "V1 — Install motor starters and controls",
"question": "A seal-in contact is used to:",
"options": [
"Keep the starter coil energized after start button is released",
"Increase motor speed",
"Replace overloads",
"Short the transformer secondary"
],
"answer": 0,
"explanation": "The auxiliary contact bypasses the start button. It holds the coil energized. Pressing stop opens the circuit and drops out the coil."
},
{
"id": 75,
"category": "V1 — Install motor starters and controls",
"question": "A control transformer in a motor control circuit is used to:",
"options": [
"Provide proper control voltage",
"Increase motor shaft torque directly",
"Replace the motor windings",
"Remove all overcurrent protection"
],
"answer": 0,
"explanation": "Control circuits often use lower voltage than the motor power circuit. A transformer supplies that voltage. It improves control circuit design and safety."
},
{
"id": 76,
"category": "V2 — Maintain motor starters and controls",
"question": "A motor starter coil is rated 120 V, but only 80 V is measured at the coil. What is likely?",
"options": [
"Coil may chatter or fail to pull in",
"Motor horsepower doubles",
"Overloads are unnecessary",
"Contacts become permanently welded safely"
],
"answer": 0,
"explanation": "The coil needs correct voltage to create enough magnetic force. Low voltage can cause weak pull-in or chatter. This can damage contacts and the coil."
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
const shuffledElectricianLevel2StandardizedQuestions =
shuffleArray(electricianLevel2StandardizedQuestions).map(shuffleOptionsForQuestion);
createPremiumQuizApp({
tradeSlug: "architectural-sheet-metal-worker",
tradeTitle: "Electrician",
sectionTitle: "Level 2 – Standardized Exam",
questionTimeSeconds: 90,
questions: shuffledElectricianLevel2StandardizedQuestions
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
return shuffledElectricianLevel2StandardizedQuestions.find(q => q.question === questionText);
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
resetHint();
});
