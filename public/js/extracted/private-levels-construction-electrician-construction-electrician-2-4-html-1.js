const electricianLevel2Set4AllKnowledgeQuestions = [
  {
    "id": 1,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 120 V load has a resistance of 16 Ω. What current flows?",
    "options": [
      "4.8 A",
      "6 A",
      "7.5 A",
      "16 A"
    ],
    "answer": 2,
    "explanation": "Use I = E ÷ R. I = 120 ÷ 16 = 7.5 A. Current is measured in amperes."
  },
  {
    "id": 2,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 240 V appliance draws 9 A. What is its power?",
    "options": [
      "249 W",
      "960 W",
      "2,160 W",
      "4,320 W"
    ],
    "answer": 2,
    "explanation": "Use P = E × I. P = 240 × 9 = 2,160 W. This equals 2.16 kW."
  },
  {
    "id": 3,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 1,800 W load is connected to 120 V. What current does it draw?",
    "options": [
      "8 A",
      "12 A",
      "15 A",
      "18 A"
    ],
    "answer": 2,
    "explanation": "Use I = P ÷ E. I = 1800 ÷ 120 = 15 A. This is a common branch-circuit load calculation."
  },
  {
    "id": 4,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A conductor carries 30 A and has 0.1 Ω resistance. What power is lost as heat?",
    "options": [
      "3 W",
      "30 W",
      "90 W",
      "300 W"
    ],
    "answer": 2,
    "explanation": "Use P = I²R. P = 30² × 0.1 = 90 W. Conductor heating increases with the square of current."
  },
  {
    "id": 5,
    "category": "A1 — Use electrical circuit concepts",
    "question": "Two resistors, 18 Ω and 36 Ω, are connected in parallel. What is total resistance?",
    "options": [
      "9 Ω",
      "12 Ω",
      "18 Ω",
      "54 Ω"
    ],
    "answer": 1,
    "explanation": "Use product-over-sum. RT = 18 × 36 ÷ 54 = 12 Ω. Parallel resistance is less than the smallest branch."
  },
  {
    "id": 6,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 120 V circuit has 3 V voltage drop. What is the percentage voltage drop?",
    "options": [
      "1.5%",
      "2.5%",
      "3%",
      "5%"
    ],
    "answer": 1,
    "explanation": "Voltage drop percent = drop ÷ supply × 100. 3 ÷ 120 × 100 = 2.5%. Voltage drop is compared to supply voltage."
  },
  {
    "id": 7,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 2 kW heater runs for 4 hours. How much energy is used?",
    "options": [
      "2 kWh",
      "4 kWh",
      "6 kWh",
      "8 kWh"
    ],
    "answer": 3,
    "explanation": "Energy = power in kW × time in hours. 2 kW × 4 h = 8 kWh. Meters commonly record energy in kWh."
  },
  {
    "id": 8,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A load has 1,500 W true power and 2,000 VA apparent power. What is the power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.80",
      "1.33"
    ],
    "answer": 1,
    "explanation": "Power factor = W ÷ VA. 1500 ÷ 2000 = 0.75. This means 75% power factor."
  },
  {
    "id": 9,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 240 V single-phase load draws 25 A at 0.8 power factor. What is true power?",
    "options": [
      "4,000 W",
      "4,800 W",
      "6,000 W",
      "7,500 W"
    ],
    "answer": 1,
    "explanation": "Use P = E × I × pf. P = 240 × 25 × 0.8 = 4,800 W. Power factor reduces true power below apparent power."
  },
  {
    "id": 10,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A single-phase load draws 18 A at 120 V. What is apparent power?",
    "options": [
      "1,080 VA",
      "1,440 VA",
      "2,160 VA",
      "3,600 VA"
    ],
    "answer": 2,
    "explanation": "Use S = E × I. S = 120 × 18 = 2,160 VA. Apparent power is measured in volt-amperes."
  },
  {
    "id": 11,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A circuit has 15 Ω resistance and 20 Ω inductive reactance. What is impedance?",
    "options": [
      "5 Ω",
      "25 Ω",
      "35 Ω",
      "300 Ω"
    ],
    "answer": 1,
    "explanation": "Use Z = √(R² + XL²). Z = √(15² + 20²) = √625. Impedance is 25 Ω."
  },
  {
    "id": 12,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 120 V AC circuit has impedance of 24 Ω. What current flows?",
    "options": [
      "2 A",
      "5 A",
      "12 A",
      "24 A"
    ],
    "answer": 1,
    "explanation": "Use I = E ÷ Z. I = 120 ÷ 24 = 5 A. In AC circuits, impedance limits current."
  },
  {
    "id": 13,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In a pure capacitive circuit, the current:",
    "options": [
      "Lags voltage by 90°",
      "Leads voltage by 90°",
      "Is always zero",
      "Is 180° out of phase"
    ],
    "answer": 1,
    "explanation": "Capacitors oppose changes in voltage. Current leads voltage in capacitance. The memory aid is ICE."
  },
  {
    "id": 14,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In a pure inductive circuit, the current:",
    "options": [
      "Leads voltage",
      "Lags voltage",
      "Is exactly in phase",
      "Becomes DC"
    ],
    "answer": 1,
    "explanation": "Inductors oppose changes in current. Voltage leads current in inductance. The memory aid is ELI."
  },
  {
    "id": 15,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 60 Hz circuit has an inductance of 0.1 H. Which formula finds inductive reactance?",
    "options": [
      "XL = 2πfL",
      "XC = 1 ÷ 2πfC",
      "P = E ÷ I",
      "R = P × I"
    ],
    "answer": 0,
    "explanation": "Inductive reactance depends on frequency and inductance. The formula is XL = 2πfL. Higher frequency means higher XL."
  },
  {
    "id": 16,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "Which formula finds capacitive reactance?",
    "options": [
      "XL = 2πfL",
      "XC = 1 ÷ 2πfC",
      "P = I²R",
      "S = P ÷ R"
    ],
    "answer": 1,
    "explanation": "Capacitive reactance depends on frequency and capacitance. The formula is XC = 1 ÷ 2πfC. Higher capacitance lowers XC."
  },
  {
    "id": 17,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A load has 2,400 VA and 1,920 W. What is the power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.80",
      "1.25"
    ],
    "answer": 2,
    "explanation": "Power factor = true power ÷ apparent power. 1920 ÷ 2400 = 0.8. The load has 80% power factor."
  },
  {
    "id": 18,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 1,500 VA load has 1,200 W true power. What is reactive power?",
    "options": [
      "300 VAR",
      "600 VAR",
      "900 VAR",
      "2,700 VAR"
    ],
    "answer": 2,
    "explanation": "Use Q = √(S² − P²). Q = √(1500² − 1200²) = 900 VAR. Reactive power is measured in VAR."
  },
  {
    "id": 19,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A motor has a lagging power factor because it contains:",
    "options": [
      "Heating elements only",
      "Inductive windings",
      "A pure capacitor only",
      "No magnetic field"
    ],
    "answer": 1,
    "explanation": "Motor windings are inductive. Inductive loads cause current to lag voltage. Most motors have lagging power factor."
  },
  {
    "id": 20,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A capacitor is installed across a motor circuit mainly to:",
    "options": [
      "Correct lagging power factor",
      "Increase motor slip",
      "Reduce supply frequency",
      "Convert single-phase to DC"
    ],
    "answer": 0,
    "explanation": "Motors require inductive reactive power. Capacitors supply leading reactive power. This can improve the overall power factor."
  },
  {
    "id": 21,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "At 60 Hz, the time for one complete cycle is approximately:",
    "options": [
      "0.0083 s",
      "0.0167 s",
      "0.060 s",
      "60 s"
    ],
    "answer": 1,
    "explanation": "Period = 1 ÷ frequency. 1 ÷ 60 = 0.0167 seconds. That is one full AC cycle."
  },
  {
    "id": 22,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "Which power triangle relationship is correct?",
    "options": [
      "VA² = W² + VAR²",
      "W² = VA² + VAR²",
      "VAR = VA × W",
      "Power factor = VA ÷ W"
    ],
    "answer": 0,
    "explanation": "Apparent power is the hypotenuse of the power triangle. True power and reactive power are the sides. So S² = P² + Q²."
  },
  {
    "id": 23,
    "category": "A6 — Analyze electronic circuits",
    "question": "A single diode rectifier is used on a 60 Hz AC source. What type of rectification is produced?",
    "options": [
      "Full-wave rectification",
      "Half-wave rectification",
      "Three-phase rectification",
      "No rectification"
    ],
    "answer": 1,
    "explanation": "One diode passes only one half-cycle. The other half-cycle is blocked. This produces half-wave pulsating DC."
  },
  {
    "id": 24,
    "category": "A6 — Analyze electronic circuits",
    "question": "A bridge rectifier uses four diodes mainly to:",
    "options": [
      "Use both halves of the AC waveform",
      "Store charge permanently",
      "Reduce voltage to zero",
      "Protect against mechanical vibration"
    ],
    "answer": 0,
    "explanation": "A bridge rectifier gives full-wave rectification. Both AC half-cycles are used. Output ripple frequency is higher than half-wave."
  },
  {
    "id": 25,
    "category": "A6 — Analyze electronic circuits",
    "question": "An LED indicator is installed on a 24 V DC circuit. Why is a resistor or driver needed?",
    "options": [
      "To limit current",
      "To increase frequency",
      "To change DC to AC",
      "To remove polarity"
    ],
    "answer": 0,
    "explanation": "LEDs can be damaged by excessive current. A resistor or driver controls current. Correct polarity is also required."
  },
  {
    "id": 26,
    "category": "A6 — Analyze electronic circuits",
    "question": "A filter capacitor in a DC supply is used to:",
    "options": [
      "Increase ripple",
      "Smooth ripple",
      "Open the circuit",
      "Reverse polarity every cycle"
    ],
    "answer": 1,
    "explanation": "Rectified DC still pulses. A capacitor charges and discharges between peaks. This reduces ripple voltage."
  },
  {
    "id": 27,
    "category": "A6 — Analyze electronic circuits",
    "question": "A transistor on a control board allows a small signal to control a relay coil. The transistor is being used as a:",
    "options": [
      "Switch",
      "Ground rod",
      "Conduit",
      "Fuse link only"
    ],
    "answer": 0,
    "explanation": "Transistors can switch current electronically. A small input controls a larger output. This is common in control circuits."
  },
  {
    "id": 28,
    "category": "A6 — Analyze electronic circuits",
    "question": "A diode reads open in one direction and low resistance in the other direction. What does this usually indicate?",
    "options": [
      "Normal diode",
      "Shorted diode",
      "Open diode",
      "Blown fuse only"
    ],
    "answer": 0,
    "explanation": "A good diode conducts forward. It blocks reverse current. This one-way action is normal."
  },
  {
    "id": 29,
    "category": "A6 — Analyze electronic circuits",
    "question": "A full-wave rectifier supplied by 60 Hz AC has ripple frequency of approximately:",
    "options": [
      "30 Hz",
      "60 Hz",
      "120 Hz",
      "240 Hz"
    ],
    "answer": 2,
    "explanation": "Full-wave rectification uses both half-cycles. This doubles the ripple frequency. 60 Hz input gives 120 Hz ripple."
  },
  {
    "id": 30,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A plan says “T-stat at 1500 mm AFF.” What does AFF mean?",
    "options": [
      "Arc fault feeder",
      "Above finished floor",
      "Ampere fault factor",
      "Airflow frequency factor"
    ],
    "answer": 1,
    "explanation": "AFF means above finished floor. It gives a mounting height reference. This helps install devices consistently."
  },
  {
    "id": 31,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A single-line diagram shows a 600 V feeder, transformer, and 120/208 V panel. What is the purpose of this drawing?",
    "options": [
      "Show simplified electrical distribution",
      "Show exact wall colours",
      "Show pipe thread size only",
      "Show drywall thickness"
    ],
    "answer": 0,
    "explanation": "Single-line diagrams show power flow. They simplify feeders, transformers, and panels. They help understand distribution systems."
  },
  {
    "id": 32,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A specification calls for RW90 conductors. What does the specification control?",
    "options": [
      "Required material or wiring method",
      "Worker break time",
      "Weather only",
      "Fixture colour only"
    ],
    "answer": 0,
    "explanation": "Specifications give project requirements. They work together with drawings. Changes need approval."
  },
  {
    "id": 33,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A drawing symbol is unclear. What should be checked first?",
    "options": [
      "Drawing legend and notes",
      "Tool box brand",
      "Weather report",
      "Worker’s guess"
    ],
    "answer": 0,
    "explanation": "Legends explain symbols and abbreviations. Project-specific symbols can differ. Guessing can cause wrong installation."
  },
  {
    "id": 34,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A 120/240 V single-phase service has a 16 A load from L1 to neutral and a 10 A load from L2 to neutral. What neutral current flows?",
    "options": [
      "0 A",
      "6 A",
      "10 A",
      "26 A"
    ],
    "answer": 1,
    "explanation": "Neutral carries the imbalance current. 16 A − 10 A = 6 A. Balanced parts cancel in the neutral."
  },
  {
    "id": 35,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A 240 V water heater is connected line-to-line on a 120/240 V service. What neutral current does this load create?",
    "options": [
      "0 A",
      "Half the line current",
      "Same as line current",
      "Double the line current"
    ],
    "answer": 0,
    "explanation": "A pure 240 V load does not use the neutral. Current flows between the two ungrounded conductors. Neutral current from this load is zero."
  },
  {
    "id": 36,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A meter records a 5 kW load running for 2 hours. What energy is recorded?",
    "options": [
      "2 kWh",
      "5 kWh",
      "7 kWh",
      "10 kWh"
    ],
    "answer": 3,
    "explanation": "Energy = kW × hours. 5 × 2 = 10 kWh. Utility meters record energy use over time."
  },
  {
    "id": 37,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A service neutral connection is loose. What is a serious possible result?",
    "options": [
      "Unstable 120 V load voltages",
      "Perfectly balanced voltage always",
      "Frequency becomes zero",
      "Meter stops measuring resistance only"
    ],
    "answer": 0,
    "explanation": "A loose neutral can shift voltage between loads. Some loads may receive too much voltage. This can damage equipment and create hazards."
  },
  {
    "id": 38,
    "category": "I1 — Install overcurrent protection devices",
    "question": "A fuse opens because current exceeded its rating for too long. What condition did it protect against?",
    "options": [
      "Overcurrent",
      "Low voltage only",
      "Low frequency only",
      "Poor paint colour"
    ],
    "answer": 0,
    "explanation": "Overcurrent includes overloads and short circuits. Fuses open when current is excessive. This protects conductors and equipment."
  },
  {
    "id": 39,
    "category": "I1 — Install overcurrent protection devices",
    "question": "A motor starts with high inrush current. Which protective device characteristic helps avoid nuisance opening?",
    "options": [
      "Time delay",
      "No rating",
      "Zero ampacity",
      "Reverse polarity"
    ],
    "answer": 0,
    "explanation": "Motors draw high starting current briefly. Time-delay protection can ride through starting inrush. It still opens on sustained overcurrent."
  },
  {
    "id": 40,
    "category": "I2 — Install ground fault, arc fault and surge protection devices",
    "question": "A surge protective device is installed mainly to limit:",
    "options": [
      "Transient overvoltage",
      "Normal load current",
      "Room temperature",
      "Motor speed"
    ],
    "answer": 0,
    "explanation": "Surges are short-duration voltage spikes. SPDs limit these spikes. They help protect sensitive equipment."
  },
  {
    "id": 41,
    "category": "L1 — Install grounding and bonding systems",
    "question": "A metal enclosure becomes energized from a fault. What should bonding do?",
    "options": [
      "Carry fault current back to source",
      "Carry normal current permanently",
      "Store voltage",
      "Increase resistance"
    ],
    "answer": 0,
    "explanation": "Bonding provides a low-impedance fault path. High fault current operates the breaker or fuse. This removes dangerous voltage from metal parts."
  },
  {
    "id": 42,
    "category": "L1 — Install grounding and bonding systems",
    "question": "Which statement best describes grounding?",
    "options": [
      "Connection to earth",
      "Connection only to a switch leg",
      "Replacing the breaker",
      "Changing AC into DC"
    ],
    "answer": 0,
    "explanation": "Grounding connects the system to earth. It helps establish a reference point. It is different from bonding."
  },
  {
    "id": 43,
    "category": "L1 — Install grounding and bonding systems",
    "question": "A bonding locknut is loose on a metal raceway. What is the concern?",
    "options": [
      "Bonding continuity may be poor",
      "Voltage always becomes safer",
      "Current becomes DC",
      "The circuit cannot energize"
    ],
    "answer": 0,
    "explanation": "Metal raceways may form part of the bonding path. Loose fittings can interrupt continuity. Poor bonding can stop protection from operating."
  },
  {
    "id": 44,
    "category": "N1 — Install renewable energy generating and storage systems",
    "question": "In a PV system, which component commonly converts DC from modules to AC for building use?",
    "options": [
      "Inverter",
      "Fuse holder only",
      "Thermostat",
      "Contactor coil"
    ],
    "answer": 0,
    "explanation": "Solar modules produce DC. Buildings commonly use AC. An inverter converts DC into AC."
  },
  {
    "id": 45,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer has a 240 V primary and 24 V secondary. What is the voltage ratio?",
    "options": [
      "1:10",
      "5:1",
      "10:1",
      "24:1"
    ],
    "answer": 2,
    "explanation": "Voltage ratio = primary voltage ÷ secondary voltage. 240 ÷ 24 = 10. The transformer ratio is 10:1."
  },
  {
    "id": 46,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A 50 VA transformer has a 24 V secondary. What is maximum secondary current?",
    "options": [
      "0.48 A",
      "2.08 A",
      "24 A",
      "50 A"
    ],
    "answer": 1,
    "explanation": "Use I = VA ÷ V. I = 50 ÷ 24 = 2.08 A. Do not exceed the VA rating."
  },
  {
    "id": 47,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A 120 V primary transformer supplies 24 V at 3 A on the secondary. What is ideal primary current?",
    "options": [
      "0.6 A",
      "1.5 A",
      "3 A",
      "15 A"
    ],
    "answer": 0,
    "explanation": "Secondary VA = 24 × 3 = 72 VA. Primary current = 72 ÷ 120 = 0.6 A. Ideal transformer VA is equal on both sides."
  },
  {
    "id": 48,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer with fewer secondary turns than primary turns is:",
    "options": [
      "Step-up",
      "Step-down",
      "Frequency changer",
      "Battery charger only"
    ],
    "answer": 1,
    "explanation": "Fewer secondary turns produce lower voltage. This makes it a step-down transformer. Control transformers are often step-down."
  },
  {
    "id": 49,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer operates by which principle?",
    "options": [
      "Mutual induction",
      "Static friction",
      "Chemical reaction only",
      "Cathodic protection"
    ],
    "answer": 0,
    "explanation": "AC in the primary creates changing magnetic flux. That flux links with the secondary winding. Voltage is induced in the secondary."
  },
  {
    "id": 50,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "Transformer laminations are used mainly to reduce:",
    "options": [
      "Eddy current losses",
      "Secondary turns",
      "Frequency",
      "Conductor insulation rating"
    ],
    "answer": 0,
    "explanation": "Changing flux induces currents in metal cores. Laminations reduce large circulating currents. This reduces heat and energy waste."
  },
  {
    "id": 51,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A 24 V control transformer supplies loads of 12 VA, 8 VA, and 15 VA. What total VA is required?",
    "options": [
      "20 VA",
      "27 VA",
      "35 VA",
      "45 VA"
    ],
    "answer": 2,
    "explanation": "Add all connected VA loads. 12 + 8 + 15 = 35 VA. The transformer must be rated at least this value."
  },
  {
    "id": 52,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "If DC is connected to a transformer primary designed for AC, what can happen?",
    "options": [
      "Primary may overheat",
      "It works normally as a transformer",
      "Frequency becomes 60 Hz automatically",
      "Secondary voltage becomes perfect sine wave"
    ],
    "answer": 0,
    "explanation": "Transformers need changing magnetic flux. DC does not produce normal transformer action. Current can become excessive and overheat the winding."
  },
  {
    "id": 53,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer secondary reads lower than expected under load. What is one possible cause?",
    "options": [
      "Overloaded transformer or voltage drop",
      "Too much paint on enclosure",
      "Ground rod is too short only",
      "Power factor is always 1"
    ],
    "answer": 0,
    "explanation": "Heavy load can lower secondary voltage. Long conductors can also cause voltage drop. Load and supply conditions should be checked."
  },
  {
    "id": 54,
    "category": "Q1 — Install conductors and cables",
    "question": "A cable is marked NMD90. What does the “90” refer to?",
    "options": [
      "90°C temperature rating",
      "90 V maximum",
      "90 A maximum always",
      "90 Hz frequency"
    ],
    "answer": 0,
    "explanation": "The number refers to insulation temperature rating. NMD90 is non-metallic dry rated 90°C. Use must match the location and code rules."
  },
  {
    "id": 55,
    "category": "Q1 — Install conductors and cables",
    "question": "Why must cable bend radius be respected?",
    "options": [
      "To avoid damaging conductors and insulation",
      "To increase supply voltage",
      "To convert AC into DC",
      "To remove need for boxes"
    ],
    "answer": 0,
    "explanation": "Sharp bends can damage cable construction. Damage may affect insulation or performance. Proper bending protects the installation."
  },
  {
    "id": 56,
    "category": "Q1 — Install conductors and cables",
    "question": "A conductor is pulled with excessive force. What is the risk?",
    "options": [
      "Stretched conductor or damaged insulation",
      "Lower circuit voltage rating improves",
      "Better bonding always",
      "Frequency increases"
    ],
    "answer": 0,
    "explanation": "Too much tension can damage conductors. Insulation damage may cause faults. Proper pulling methods prevent damage."
  },
  {
    "id": 57,
    "category": "Q2 — Install raceways, boxes and fittings",
    "question": "Why must junction boxes remain accessible?",
    "options": [
      "For inspection, maintenance, and troubleshooting",
      "To increase voltage",
      "To reduce power factor",
      "To store spare tools"
    ],
    "answer": 0,
    "explanation": "Splices may need inspection or repair. Hidden boxes create safety and service problems. Accessible boxes support future troubleshooting."
  },
  {
    "id": 58,
    "category": "R1 — Install luminaires",
    "question": "A recessed luminaire is installed near insulation. What must be verified?",
    "options": [
      "Fixture is suitable for insulation contact if required",
      "Fixture is connected to data cable",
      "Fixture has no voltage rating",
      "Fixture has a CT ratio"
    ],
    "answer": 0,
    "explanation": "Insulation can trap heat around luminaires. Fixtures must be suitable for the condition. Wrong fixture type can create fire hazard."
  },
  {
    "id": 59,
    "category": "R2 — Install wiring devices",
    "question": "On a receptacle, white conductor is normally connected to:",
    "options": [
      "Silver terminal",
      "Brass terminal",
      "Green screw",
      "Box clamp only"
    ],
    "answer": 0,
    "explanation": "The identified conductor connects to the silver terminal. The ungrounded conductor connects to brass. The bonding conductor connects to green."
  },
  {
    "id": 60,
    "category": "R2 — Install wiring devices",
    "question": "A device terminal is loose and heating under load. What should be done?",
    "options": [
      "De-energize and correct the connection properly",
      "Ignore it if the load works",
      "Add a larger breaker",
      "Remove the bonding conductor"
    ],
    "answer": 0,
    "explanation": "Loose connections create resistance and heat. Heat can damage devices and cause fire. Work must be done safely de-energized."
  },
  {
    "id": 61,
    "category": "R3 — Install lighting controls",
    "question": "A dimmer is installed on LED luminaires and the lights flicker. What should be checked?",
    "options": [
      "Dimmer compatibility and load rating",
      "Ground rod depth only",
      "Transformer turns ratio only",
      "Meter socket seal only"
    ],
    "answer": 0,
    "explanation": "LED loads require compatible dimmers. Minimum and maximum load ratings matter. Wrong dimmers can cause flicker."
  },
  {
    "id": 62,
    "category": "R3 — Install lighting controls",
    "question": "In a three-way switch circuit, the two conductors between switches are called:",
    "options": [
      "Travellers",
      "Service conductors",
      "Grounding electrodes",
      "CT leads only"
    ],
    "answer": 0,
    "explanation": "Travellers connect the two three-way switches. The common terminals connect to line and load. Incorrect traveller wiring causes control problems."
  },
  {
    "id": 63,
    "category": "S1 — Install HVAC systems and controls",
    "question": "A 24 V thermostat circuit uses R and Y terminals. A call between R and Y usually starts:",
    "options": [
      "Cooling/compressor circuit",
      "Heating only",
      "Grounding electrode test",
      "Emergency lighting"
    ],
    "answer": 0,
    "explanation": "R is commonly 24 V control power. Y is commonly cooling call. Connecting R to Y calls for cooling."
  },
  {
    "id": 64,
    "category": "S1 — Install HVAC systems and controls",
    "question": "An HVAC transformer is rated 75 VA at 24 V. What is maximum secondary current?",
    "options": [
      "1.25 A",
      "2.5 A",
      "3.125 A",
      "7.5 A"
    ],
    "answer": 2,
    "explanation": "Use I = VA ÷ V. I = 75 ÷ 24 = 3.125 A. Control loads must stay within this rating."
  },
  {
    "id": 65,
    "category": "S1 — Install HVAC systems and controls",
    "question": "What does HVAC stand for?",
    "options": [
      "Heating, ventilation, and air conditioning",
      "High voltage alternating current",
      "Harmonic voltage ampere control",
      "Heating volt capacitor"
    ],
    "answer": 0,
    "explanation": "HVAC means heating, ventilation, and air conditioning. Electrical workers often wire HVAC equipment and controls. Nameplate and control requirements must be followed."
  },
  {
    "id": 66,
    "category": "S1 — Install HVAC systems and controls",
    "question": "A DDC controller receives a sensor signal and operates a damper actuator. What is this system doing?",
    "options": [
      "Automatic monitoring and control",
      "Manual fuse replacement",
      "Cathodic protection",
      "Ground resistance testing"
    ],
    "answer": 0,
    "explanation": "DDC means direct digital control. Controllers process input signals and control outputs. This is common in building automation."
  },
  {
    "id": 67,
    "category": "S2 — Maintain HVAC systems and controls",
    "question": "A 24 V HVAC fuse keeps blowing. What should be suspected?",
    "options": [
      "Short in control wiring or component",
      "Proper normal operation",
      "Too much airflow only",
      "Low lighting level"
    ],
    "answer": 0,
    "explanation": "A blown low-voltage fuse usually means excessive current. Shorted wires or failed components can cause it. Find the fault before replacing the fuse repeatedly."
  },
  {
    "id": 68,
    "category": "T1 — Install exit and emergency lighting systems",
    "question": "An emergency lighting unit has a test button. What does pressing it usually simulate?",
    "options": [
      "Loss of normal power",
      "High power factor",
      "Motor overload",
      "Transformer step-up"
    ],
    "answer": 0,
    "explanation": "The test button checks emergency operation. It simulates normal power failure. The lamps should operate from battery power."
  },
  {
    "id": 69,
    "category": "U1 — Install cathodic protection systems",
    "question": "Cathodic protection is most commonly associated with protecting:",
    "options": [
      "Buried or submerged metal from corrosion",
      "LED lamps from flicker",
      "Transformers from overload",
      "Receptacles from reverse polarity"
    ],
    "answer": 0,
    "explanation": "Cathodic protection reduces corrosion. It is used on pipelines, tanks, and structures. The protected metal is made the cathode."
  },
  {
    "id": 70,
    "category": "V1 — Install motor starters and controls",
    "question": "A contactor coil is energized. What should happen to the main contacts?",
    "options": [
      "They change state",
      "They become fuses",
      "They change voltage frequency",
      "They become grounding electrodes"
    ],
    "answer": 0,
    "explanation": "An energized coil creates magnetic force. The armature moves the contacts. This opens or closes the motor circuit."
  },
  {
    "id": 71,
    "category": "V1 — Install motor starters and controls",
    "question": "In a three-wire control circuit, the stop button is usually:",
    "options": [
      "Normally closed",
      "Normally open",
      "Connected only to ground",
      "A capacitor"
    ],
    "answer": 0,
    "explanation": "A normally closed stop button opens when pressed. It interrupts power to the contactor coil. This stops the motor safely."
  },
  {
    "id": 72,
    "category": "V1 — Install motor starters and controls",
    "question": "In a three-wire control circuit, the start button is usually:",
    "options": [
      "Normally open",
      "Normally closed",
      "Permanently closed",
      "A transformer core"
    ],
    "answer": 0,
    "explanation": "The start button closes only when pressed. It energizes the control circuit. A seal-in contact holds the circuit after release."
  },
  {
    "id": 73,
    "category": "V1 — Install motor starters and controls",
    "question": "The overload contact in a motor starter control circuit is normally placed:",
    "options": [
      "In series with the coil",
      "Across the supply conductors",
      "In parallel with the fuse only",
      "Between grounding electrodes only"
    ],
    "answer": 0,
    "explanation": "The overload contact opens on overload. Opening the coil circuit drops out the contactor. This stops the motor."
  },
  {
    "id": 74,
    "category": "V1 — Install motor starters and controls",
    "question": "A seal-in auxiliary contact is used to:",
    "options": [
      "Keep the coil energized after start is released",
      "Replace the stop button",
      "Increase motor voltage",
      "Eliminate overload protection"
    ],
    "answer": 0,
    "explanation": "The start button is momentary. The seal-in contact closes after the contactor energizes. It maintains coil power until stop or overload opens."
  },
  {
    "id": 75,
    "category": "V1 — Install motor starters and controls",
    "question": "A motor starter overload device protects the motor from:",
    "options": [
      "Sustained overload current",
      "Low room temperature",
      "Poor lighting colour",
      "Data noise only"
    ],
    "answer": 0,
    "explanation": "Overload current heats motor windings. Overload devices trip before damage occurs. They do not replace short-circuit protection."
  },
  {
    "id": 76,
    "category": "V2 — Maintain motor starters and controls",
    "question": "A contactor chatters rapidly when the start button is pressed. What is a likely cause?",
    "options": [
      "Low control voltage or loose connection",
      "Correct normal operation",
      "Too much lamp brightness",
      "Proper overload setting always"
    ],
    "answer": 0,
    "explanation": "The coil needs proper voltage to hold in. Loose wiring or low voltage causes weak magnetism. Chattering can damage contacts and coils."
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

const shuffledElectricianLevel2PracticeExamQuestions =
  shuffleArray(electricianLevel2Set4AllKnowledgeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "electrician",
  tradeTitle: "Electrician",
  sectionTitle: "Common Core Harmonized Level 2 – Set 4 ",
  questionTimeSeconds: 90,
  questions: shuffledElectricianLevel2PracticeExamQuestions
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
    return shuffledElectricianLevel1PracticeExamQuestions.find(q => q.question === questionText);
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
