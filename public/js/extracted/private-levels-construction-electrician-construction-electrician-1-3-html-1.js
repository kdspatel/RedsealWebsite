const electricianLevel2PracticeExamQuestions = [
  {
    "id": 1,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 240 V heater draws 12.5 A. What is the power rating of the heater?",
    "options": [
      "1,500 W",
      "2,400 W",
      "3,000 W",
      "4,800 W"
    ],
    "answer": 2,
    "explanation": "Use P = E × I. P = 240 × 12.5 = 3,000 W. The heater is rated at 3 kW."
  },
  {
    "id": 2,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A circuit has 120 V applied to a 30 Ω load. What current flows?",
    "options": [
      "2 A",
      "4 A",
      "6 A",
      "30 A"
    ],
    "answer": 1,
    "explanation": "Use Ohm’s law: I = E ÷ R. I = 120 ÷ 30 = 4 A. Current depends on voltage and resistance."
  },
  {
    "id": 3,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 20 Ω resistor carries 6 A. How much power is dissipated?",
    "options": [
      "120 W",
      "240 W",
      "720 W",
      "1,200 W"
    ],
    "answer": 2,
    "explanation": "Use P = I²R. P = 6² × 20 = 720 W. Power rises with the square of current."
  },
  {
    "id": 4,
    "category": "A1 — Use electrical circuit concepts",
    "question": "Two 60 Ω resistors are connected in parallel. What is the total resistance?",
    "options": [
      "15 Ω",
      "30 Ω",
      "60 Ω",
      "120 Ω"
    ],
    "answer": 1,
    "explanation": "Two equal resistors in parallel equal half the value. 60 ÷ 2 = 30 Ω. Parallel resistance is lower than either branch."
  },
  {
    "id": 5,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A conductor has higher resistance when:",
    "options": [
      "It is shorter",
      "It has larger cross-sectional area",
      "It is longer",
      "It is made of copper instead of steel"
    ],
    "answer": 2,
    "explanation": "Resistance increases with conductor length. A longer path gives more opposition to current flow. Larger conductor area lowers resistance."
  },
  {
    "id": 6,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A 600 W load is connected to 120 V. What is its resistance?",
    "options": [
      "12 Ω",
      "24 Ω",
      "30 Ω",
      "60 Ω"
    ],
    "answer": 1,
    "explanation": "Use R = E² ÷ P. R = 120² ÷ 600 = 24 Ω. This formula is useful for resistive loads."
  },
  {
    "id": 7,
    "category": "A1 — Use electrical circuit concepts",
    "question": "Which unit represents apparent power?",
    "options": [
      "W",
      "VAR",
      "VA",
      "Ω"
    ],
    "answer": 2,
    "explanation": "Apparent power is measured in volt-amperes. Watts measure true power. VAR measures reactive power."
  },
  {
    "id": 8,
    "category": "A1 — Use electrical circuit concepts",
    "question": "A circuit has 10 A current and 2 Ω conductor resistance. What is the voltage drop?",
    "options": [
      "5 V",
      "10 V",
      "20 V",
      "100 V"
    ],
    "answer": 2,
    "explanation": "Use E = I × R. E = 10 × 2 = 20 V. Voltage drop increases with current and resistance."
  },
  {
    "id": 9,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In a pure resistive AC circuit, voltage and current are:",
    "options": [
      "90° out of phase",
      "180° out of phase",
      "In phase",
      "Randomly changing phase"
    ],
    "answer": 2,
    "explanation": "In a resistive circuit, current follows voltage directly. There is no inductive or capacitive phase shift. Power factor is 1 or 100%."
  },
  {
    "id": 10,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In a pure inductive AC circuit, current:",
    "options": [
      "Leads voltage by 90°",
      "Lags voltage by 90°",
      "Is in phase with voltage",
      "Becomes DC"
    ],
    "answer": 1,
    "explanation": "Inductors oppose changes in current. Current reaches its peak after voltage. The phrase is “ELI”: voltage leads current in inductance."
  },
  {
    "id": 11,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In a pure capacitive AC circuit, current:",
    "options": [
      "Lags voltage",
      "Leads voltage",
      "Becomes zero",
      "Turns into resistance"
    ],
    "answer": 1,
    "explanation": "Capacitors oppose changes in voltage. Current leads voltage in capacitive circuits. The phrase is “ICE”: current leads voltage in capacitance."
  },
  {
    "id": 12,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 120 V circuit draws 10 A at 0.8 power factor. What is true power?",
    "options": [
      "800 W",
      "960 W",
      "1,200 W",
      "1,500 W"
    ],
    "answer": 1,
    "explanation": "Use P = E × I × pf. P = 120 × 10 × 0.8 = 960 W. Power factor reduces true power below apparent power."
  },
  {
    "id": 13,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A single-phase load has 240 V and 20 A. What is apparent power?",
    "options": [
      "260 VA",
      "480 VA",
      "4,800 VA",
      "9,600 VA"
    ],
    "answer": 2,
    "explanation": "Use S = E × I. S = 240 × 20 = 4,800 VA. Apparent power does not include power factor."
  },
  {
    "id": 14,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A load uses 1,600 W and has apparent power of 2,000 VA. What is the power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.80",
      "1.25"
    ],
    "answer": 2,
    "explanation": "Power factor = W ÷ VA. pf = 1600 ÷ 2000 = 0.8. Power factor cannot be greater than 1 for normal loads."
  },
  {
    "id": 15,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "What is the frequency of standard AC power in Canada?",
    "options": [
      "25 Hz",
      "50 Hz",
      "60 Hz",
      "120 Hz"
    ],
    "answer": 2,
    "explanation": "Canadian utility AC power is normally 60 Hz. Frequency means cycles per second. Hertz is the unit of frequency."
  },
  {
    "id": 16,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A capacitor connected to AC has capacitive reactance that:",
    "options": [
      "Increases as frequency increases",
      "Decreases as frequency increases",
      "Is always zero",
      "Is the same as resistance only"
    ],
    "answer": 1,
    "explanation": "Capacitive reactance is XC = 1 ÷ 2πfC. As frequency increases, XC decreases. Capacitors pass higher frequencies more easily."
  },
  {
    "id": 17,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "An inductor connected to AC has inductive reactance that:",
    "options": [
      "Decreases as frequency increases",
      "Increases as frequency increases",
      "Is always zero",
      "Is unrelated to frequency"
    ],
    "answer": 1,
    "explanation": "Inductive reactance is XL = 2πfL. As frequency increases, XL increases. Inductors oppose higher-frequency current more strongly."
  },
  {
    "id": 18,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A circuit contains resistance and inductive reactance. Total opposition to AC current is called:",
    "options": [
      "Capacitance",
      "Conductance",
      "Impedance",
      "Frequency"
    ],
    "answer": 2,
    "explanation": "Impedance includes resistance and reactance. It is measured in ohms. AC circuits often use impedance instead of resistance alone."
  },
  {
    "id": 19,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A poor power factor means:",
    "options": [
      "True power equals apparent power",
      "More current is required for the same useful power",
      "Frequency becomes zero",
      "Voltage becomes DC"
    ],
    "answer": 1,
    "explanation": "Low power factor increases current for a given watt load. This can increase conductor losses and voltage drop. Power factor correction may be used."
  },
  {
    "id": 20,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A 60 Hz AC waveform completes one cycle in approximately:",
    "options": [
      "0.0167 s",
      "0.06 s",
      "1 s",
      "60 s"
    ],
    "answer": 0,
    "explanation": "Period T = 1 ÷ f. T = 1 ÷ 60 = 0.0167 seconds. That is one complete AC cycle."
  },
  {
    "id": 21,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "In an AC circuit, reactive power is measured in:",
    "options": [
      "Watts",
      "Volts",
      "VAR",
      "Ohms"
    ],
    "answer": 2,
    "explanation": "Reactive power is measured in volt-amperes reactive. It is associated with inductors and capacitors. It does not perform useful work like watts."
  },
  {
    "id": 22,
    "category": "A4 — Analyze single-phase AC circuits",
    "question": "A motor load is most likely to have which type of power factor?",
    "options": [
      "Unity only",
      "Lagging",
      "Leading",
      "Zero voltage"
    ],
    "answer": 1,
    "explanation": "Motors contain windings, which are inductive. Inductive loads cause current to lag voltage. Therefore motor power factor is usually lagging."
  },
  {
    "id": 23,
    "category": "A6 — Analyze electronic circuits",
    "question": "A diode is mainly used to:",
    "options": [
      "Store charge",
      "Allow current in one direction",
      "Measure resistance",
      "Increase conductor size"
    ],
    "answer": 1,
    "explanation": "A diode conducts when forward biased. It blocks current when reverse biased. This makes it useful for rectification."
  },
  {
    "id": 24,
    "category": "A6 — Analyze electronic circuits",
    "question": "A bridge rectifier normally contains:",
    "options": [
      "One diode",
      "Two diodes",
      "Four diodes",
      "Six resistors"
    ],
    "answer": 2,
    "explanation": "A bridge rectifier uses four diodes. It rectifies both halves of the AC cycle. This produces full-wave rectified output."
  },
  {
    "id": 25,
    "category": "A6 — Analyze electronic circuits",
    "question": "A capacitor in a DC power supply is commonly used to:",
    "options": [
      "Smooth ripple",
      "Create a short circuit",
      "Increase frequency",
      "Replace the fuse"
    ],
    "answer": 0,
    "explanation": "Rectifiers produce pulsating DC. Capacitors charge and discharge between peaks. This smooths the output voltage."
  },
  {
    "id": 26,
    "category": "A6 — Analyze electronic circuits",
    "question": "A transistor used to energize a relay coil is acting as a:",
    "options": [
      "Transformer",
      "Switch",
      "Fuse",
      "Resistor only"
    ],
    "answer": 1,
    "explanation": "A transistor can control current electronically. A small control signal can operate a larger load. This is common in control boards."
  },
  {
    "id": 27,
    "category": "A6 — Analyze electronic circuits",
    "question": "What does LED stand for?",
    "options": [
      "Low energy device",
      "Light-emitting diode",
      "Line equipment disconnect",
      "Load emergency detector"
    ],
    "answer": 1,
    "explanation": "An LED is a diode that emits light. It must be connected with correct polarity. It usually requires current limiting."
  },
  {
    "id": 28,
    "category": "A6 — Analyze electronic circuits",
    "question": "A full-wave rectifier supplied from 60 Hz AC has ripple frequency of approximately:",
    "options": [
      "30 Hz",
      "60 Hz",
      "120 Hz",
      "240 Hz"
    ],
    "answer": 2,
    "explanation": "Full-wave rectification uses both half cycles. This doubles the ripple frequency. 60 Hz input gives 120 Hz ripple."
  },
  {
    "id": 29,
    "category": "A6 — Analyze electronic circuits",
    "question": "A silicon diode typically begins conducting forward current at about:",
    "options": [
      "0.1 V",
      "0.7 V",
      "12 V",
      "120 V"
    ],
    "answer": 1,
    "explanation": "A silicon diode has about 0.7 V forward drop. Below this, little current flows. This value is often used in basic electronics problems."
  },
  {
    "id": 30,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A drawing note says “panel L2, circuit 14.” What does this identify?",
    "options": [
      "Wire colour only",
      "The panel and circuit number supplying the load",
      "The room temperature",
      "The conduit bend angle"
    ],
    "answer": 1,
    "explanation": "Panel and circuit notes identify the electrical source. They help with installation and troubleshooting. They also reduce the chance of working on the wrong circuit."
  },
  {
    "id": 31,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "On electrical drawings, “AFF” usually means:",
    "options": [
      "Arc fault feeder",
      "Above finished floor",
      "Alternating field frequency",
      "Amp fuse factor"
    ],
    "answer": 1,
    "explanation": "AFF is commonly used for mounting heights. It means above finished floor. Always confirm abbreviations with the drawing legend."
  },
  {
    "id": 32,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A specification requires ACWU90 cable, but the drawing only says “armoured cable.” What should be followed?",
    "options": [
      "The specification, unless an approved change is made",
      "The cheapest cable available",
      "The apprentice’s choice",
      "Any cable with the same colour"
    ],
    "answer": 0,
    "explanation": "Specifications give detailed material requirements. Substitutions need approval. Using the wrong material can cause rejection or unsafe work."
  },
  {
    "id": 33,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A reflected ceiling plan is most useful for locating:",
    "options": [
      "Luminaires and ceiling devices",
      "Underground grounding electrodes only",
      "Panel bus bars",
      "Service mast height only"
    ],
    "answer": 0,
    "explanation": "Reflected ceiling plans show ceiling-mounted equipment. They help coordinate with ceiling grids and mechanical systems. Lighting layout is commonly found there."
  },
  {
    "id": 34,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "In a 120/240 V single-phase three-wire service, voltage from either line to neutral is:",
    "options": [
      "24 V",
      "120 V",
      "208 V",
      "240 V"
    ],
    "answer": 1,
    "explanation": "Each ungrounded conductor to neutral gives 120 V. Across the two ungrounded conductors gives 240 V. This is common in residential services."
  },
  {
    "id": 35,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "The main service disconnect is used to:",
    "options": [
      "Measure kilowatt-hours",
      "Disconnect the building supply",
      "Control only one receptacle",
      "Increase voltage"
    ],
    "answer": 1,
    "explanation": "The service disconnect controls power to the installation. It allows safe shutdown for emergencies and maintenance. It is a key part of service equipment."
  },
  {
    "id": 36,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A meter socket must be installed according to:",
    "options": [
      "Utility requirements and electrical code",
      "Paint colour preference",
      "Only the homeowner’s preference",
      "The lowest material cost only"
    ],
    "answer": 0,
    "explanation": "Metering equipment must meet utility rules. It must also meet code and accessibility requirements. Poor meter location may delay connection."
  },
  {
    "id": 37,
    "category": "H1 — Install single-phase consumer/supply services and metering equipment",
    "question": "A loose neutral in a 120/240 V service can cause:",
    "options": [
      "Stable voltage on all loads",
      "Unequal and dangerous load voltages",
      "Frequency to become zero",
      "Breakers to become fuses"
    ],
    "answer": 1,
    "explanation": "A loose neutral can shift voltage between 120 V loads. Some loads may receive overvoltage. This can damage equipment and create hazards."
  },
  {
    "id": 38,
    "category": "I1 — Install overcurrent protection devices",
    "question": "The main purpose of a fuse or circuit breaker is to protect against:",
    "options": [
      "Overcurrent",
      "Low room temperature",
      "Poor lighting colour",
      "Low water pressure"
    ],
    "answer": 0,
    "explanation": "Overcurrent includes overloads and short circuits. Protection devices open the circuit when current is excessive. This helps prevent conductor damage and fire."
  },
  {
    "id": 39,
    "category": "I1 — Install overcurrent protection devices",
    "question": "A breaker trips immediately when a circuit is energized. The most likely cause is:",
    "options": [
      "Low wattage load",
      "Short circuit or ground fault",
      "Correct operation with no problem",
      "Low frequency only"
    ],
    "answer": 1,
    "explanation": "Immediate tripping usually means very high current. Short circuits and ground faults create abnormal current paths. The fault should be found before resetting."
  },
  {
    "id": 40,
    "category": "I2 — Install ground fault, arc fault and surge protection devices",
    "question": "A GFCI trips because it detects:",
    "options": [
      "Difference between outgoing and returning current",
      "Low voltage only",
      "High frequency only",
      "Normal switch operation"
    ],
    "answer": 0,
    "explanation": "GFCIs monitor current balance. Leakage current creates an imbalance. They trip to reduce shock hazard."
  },
  {
    "id": 41,
    "category": "L1 — Install grounding and bonding systems",
    "question": "The purpose of bonding metal enclosures is to:",
    "options": [
      "Carry normal load current",
      "Provide a low-impedance fault-current path",
      "Increase voltage",
      "Replace overcurrent protection"
    ],
    "answer": 1,
    "explanation": "Bonding connects non-current-carrying metal parts. If a fault occurs, current can return to the source. This helps trip the breaker or blow the fuse."
  },
  {
    "id": 42,
    "category": "L1 — Install grounding and bonding systems",
    "question": "Grounding connects the electrical system to:",
    "options": [
      "Earth",
      "A switch leg only",
      "A thermostat only",
      "A data cable only"
    ],
    "answer": 0,
    "explanation": "Grounding establishes an earth reference. It is not the same as bonding. Both are important for electrical safety."
  },
  {
    "id": 43,
    "category": "L1 — Install grounding and bonding systems",
    "question": "A loose bonding conductor creates what hazard?",
    "options": [
      "Fault current path may be unreliable",
      "Voltage always becomes zero",
      "Current becomes safer",
      "Power factor becomes unity"
    ],
    "answer": 0,
    "explanation": "Bonding must be continuous and secure. A loose connection may not carry enough fault current. This can leave metal parts energized."
  },
  {
    "id": 44,
    "category": "N1 — Install renewable energy generating and storage systems",
    "question": "A solar photovoltaic system produces which type of output at the modules?",
    "options": [
      "AC only",
      "DC",
      "Pneumatic pressure",
      "Hydraulic pressure"
    ],
    "answer": 1,
    "explanation": "PV modules produce direct current. An inverter is used to convert DC to AC. This allows connection to AC loads or the grid."
  },
  {
    "id": 45,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer has 120 V on the primary and a 24 V secondary. What is the turns ratio primary to secondary?",
    "options": [
      "1:5",
      "5:1",
      "10:1",
      "24:1"
    ],
    "answer": 1,
    "explanation": "Turns ratio follows voltage ratio. 120 ÷ 24 = 5. The primary has five times the secondary turns."
  },
  {
    "id": 46,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer steps 240 V down to 120 V. If the secondary current is 10 A, ideal primary current is approximately:",
    "options": [
      "2.5 A",
      "5 A",
      "10 A",
      "20 A"
    ],
    "answer": 1,
    "explanation": "Ideal transformer power is equal on both sides. Secondary VA = 120 × 10 = 1200 VA. Primary current = 1200 ÷ 240 = 5 A."
  },
  {
    "id": 47,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A 500 VA transformer has a 24 V secondary. What is the maximum secondary current?",
    "options": [
      "2.08 A",
      "10.4 A",
      "20.8 A",
      "50 A"
    ],
    "answer": 2,
    "explanation": "Use I = VA ÷ E. I = 500 ÷ 24 = 20.8 A. Transformer secondary capacity is based on VA rating."
  },
  {
    "id": 48,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "Transformer cores are laminated mainly to reduce:",
    "options": [
      "Eddy current losses",
      "Copper conductor length",
      "Secondary voltage",
      "Grounding resistance"
    ],
    "answer": 0,
    "explanation": "Changing magnetic flux induces currents in the core. Laminations reduce circulating current paths. This reduces heat and improves efficiency."
  },
  {
    "id": 49,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer works by:",
    "options": [
      "Electrochemical action",
      "Mutual induction",
      "Thermal expansion only",
      "Direct mechanical contact"
    ],
    "answer": 1,
    "explanation": "AC in the primary creates changing magnetic flux. The flux links to the secondary winding. Voltage is induced in the secondary."
  },
  {
    "id": 50,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "If a transformer secondary has fewer turns than the primary, it is a:",
    "options": [
      "Step-up transformer",
      "Step-down transformer",
      "Isolation-free transformer",
      "DC transformer"
    ],
    "answer": 1,
    "explanation": "Fewer secondary turns produce lower secondary voltage. This is called a step-down transformer. Control transformers commonly step voltage down."
  },
  {
    "id": 51,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer secondary is 24 V and supplies a 48 VA load. What current flows?",
    "options": [
      "0.5 A",
      "2 A",
      "24 A",
      "48 A"
    ],
    "answer": 1,
    "explanation": "Use I = VA ÷ V. I = 48 ÷ 24 = 2 A. Control circuits often use 24 V transformers."
  },
  {
    "id": 52,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer primary connected to DC instead of AC may:",
    "options": [
      "Operate normally",
      "Overheat because there is no alternating flux",
      "Step voltage up normally",
      "Produce perfect 60 Hz output"
    ],
    "answer": 1,
    "explanation": "Transformers require changing magnetic flux. DC does not produce continuous transformer action. Primary current can become excessive."
  },
  {
    "id": 53,
    "category": "P1 — Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer marked “primary 120 V, secondary 24 V, 40 VA” is used for:",
    "options": [
      "Current measurement only",
      "Low-voltage control power",
      "Grounding electrode testing only",
      "Replacing branch-circuit breakers"
    ],
    "answer": 1,
    "explanation": "A 24 V secondary is common for controls. The VA rating limits connected load. Loads above 40 VA may overload the transformer."
  },
  {
    "id": 54,
    "category": "Q1 — Install conductors and cables",
    "question": "Why must conductor insulation temperature rating be checked?",
    "options": [
      "To ensure suitability for terminals and environment",
      "To choose paint colour",
      "To increase voltage automatically",
      "To remove overcurrent protection"
    ],
    "answer": 0,
    "explanation": "Insulation must handle operating temperature. Terminals also have temperature limits. Wrong insulation use can cause failure."
  },
  {
    "id": 55,
    "category": "Q1 — Install conductors and cables",
    "question": "Excessive pulling tension can damage:",
    "options": [
      "Conductor insulation",
      "Panel labels only",
      "Circuit frequency",
      "Room temperature"
    ],
    "answer": 0,
    "explanation": "Too much force can stretch or scrape conductors. Damaged insulation can cause faults. Proper pulling methods protect cables."
  },
  {
    "id": 56,
    "category": "Q1 — Install conductors and cables",
    "question": "ACWU90 is an armoured cable rated for:",
    "options": [
      "Dry use only",
      "Wet underground use at 90°C",
      "Data cable only",
      "Control signals only below 5 V"
    ],
    "answer": 1,
    "explanation": "ACWU90 means armoured cable wet underground rated 90°C. It is used where its rating is suitable. Cable type must match the location."
  },
  {
    "id": 57,
    "category": "Q2 — Install raceways, boxes and fittings",
    "question": "A bushing is installed on a raceway end mainly to:",
    "options": [
      "Protect conductor insulation from abrasion",
      "Increase voltage",
      "Convert AC to DC",
      "Act as a fuse"
    ],
    "answer": 0,
    "explanation": "Raceway edges can be sharp. Bushings protect insulation during pulling and operation. Damaged insulation can cause faults."
  },
  {
    "id": 58,
    "category": "R1 — Install luminaires",
    "question": "A heavy luminaire is being installed. What must be verified first?",
    "options": [
      "The box/support is rated for the weight",
      "The lamp colour matches the wall",
      "The switch is plastic",
      "The circuit has no bonding conductor"
    ],
    "answer": 0,
    "explanation": "Luminaires require proper mechanical support. Standard boxes may not support heavy fixtures. Improper support can cause injury or damage."
  },
  {
    "id": 59,
    "category": "R2 — Install wiring devices",
    "question": "On a standard receptacle, the brass terminal is normally for the:",
    "options": [
      "Ungrounded conductor",
      "Identified conductor",
      "Bonding conductor",
      "Grounding electrode conductor"
    ],
    "answer": 0,
    "explanation": "Brass terminals are for hot conductors. Silver terminals are for identified conductors. Green terminals are for bonding conductors."
  },
  {
    "id": 60,
    "category": "R2 — Install wiring devices",
    "question": "A loose device terminal connection can cause:",
    "options": [
      "Overheating",
      "Lower resistance always",
      "Better grounding",
      "Zero current"
    ],
    "answer": 0,
    "explanation": "Loose connections create high resistance points. High resistance produces heat under load. This can damage equipment and cause fire."
  },
  {
    "id": 61,
    "category": "R3 — Install lighting controls",
    "question": "A single-pole switch should normally interrupt the:",
    "options": [
      "Ungrounded conductor",
      "Bonding conductor",
      "Grounding electrode",
      "Neutral only in all cases"
    ],
    "answer": 0,
    "explanation": "Switching the hot conductor de-energizes the load. Switching only the neutral can leave live parts energized. Correct switching improves safety."
  },
  {
    "id": 62,
    "category": "R3 — Install lighting controls",
    "question": "A three-way switch system controls a light from:",
    "options": [
      "One location",
      "Two locations",
      "Three phases",
      "A transformer only"
    ],
    "answer": 1,
    "explanation": "Three-way switches are used in pairs. They control one load from two locations. Travellers connect between the switches."
  },
  {
    "id": 63,
    "category": "S1 — Install HVAC systems and controls",
    "question": "A thermostat is used to:",
    "options": [
      "Sense temperature and control equipment operation",
      "Measure grounding resistance",
      "Replace a circuit breaker",
      "Increase wire size"
    ],
    "answer": 0,
    "explanation": "Thermostats control heating or cooling equipment. They respond to temperature changes. Many HVAC controls use low-voltage circuits."
  },
  {
    "id": 64,
    "category": "S1 — Install HVAC systems and controls",
    "question": "A 24 V control transformer in an HVAC system commonly supplies:",
    "options": [
      "Thermostat and control circuit power",
      "Main service voltage",
      "Grounding electrode current",
      "Data cable shielding only"
    ],
    "answer": 0,
    "explanation": "HVAC control circuits often use 24 V. The transformer steps line voltage down. This makes control wiring safer and simpler."
  },
  {
    "id": 65,
    "category": "S1 — Install HVAC systems and controls",
    "question": "A fan motor nameplate should be checked before connection mainly for:",
    "options": [
      "Voltage, current, phase, and wiring requirements",
      "Paint colour",
      "Room number only",
      "Wall finish"
    ],
    "answer": 0,
    "explanation": "Nameplates show electrical requirements. Incorrect voltage or wiring can damage equipment. Always compare nameplate data with supply."
  },
  {
    "id": 66,
    "category": "S1 — Install HVAC systems and controls",
    "question": "DDC in HVAC controls stands for:",
    "options": [
      "Direct digital control",
      "Double disconnect circuit",
      "Direct duty cable",
      "Dry device contact"
    ],
    "answer": 0,
    "explanation": "DDC means direct digital control. It uses electronic controllers and sensors. Modern HVAC systems commonly use DDC."
  },
  {
    "id": 67,
    "category": "S2 — Maintain HVAC systems and controls",
    "question": "An HVAC unit does not start. The first safe electrical step is to:",
    "options": [
      "Bypass all safeties",
      "Verify power and control voltage safely",
      "Replace the motor immediately",
      "Short the thermostat wires without testing"
    ],
    "answer": 1,
    "explanation": "Troubleshooting starts with safe testing. Confirm supply and control voltage before replacing parts. Bypassing safeties can create hazards."
  },
  {
    "id": 68,
    "category": "T1 — Install exit and emergency lighting systems",
    "question": "Emergency lighting is installed mainly to:",
    "options": [
      "Provide illumination during power failure or emergency",
      "Increase normal lighting colour",
      "Replace all branch circuits",
      "Reduce transformer losses"
    ],
    "answer": 0,
    "explanation": "Emergency lighting supports safe evacuation. It operates when normal lighting fails. Battery units or emergency power may be used."
  },
  {
    "id": 69,
    "category": "U1 — Install cathodic protection systems",
    "question": "Cathodic protection is used mainly to reduce corrosion of:",
    "options": [
      "Metal structures or piping",
      "Plastic boxes",
      "Drywall only",
      "Light bulbs"
    ],
    "answer": 0,
    "explanation": "Cathodic protection helps control corrosion. It is used on metal tanks, pipelines, or structures. It works by making the protected metal the cathode."
  },
  {
    "id": 70,
    "category": "V1 — Install motor starters and controls",
    "question": "A motor starter is used to:",
    "options": [
      "Start and stop a motor safely",
      "Replace all conductors",
      "Convert AC to DC only",
      "Measure room temperature"
    ],
    "answer": 0,
    "explanation": "Motor starters control motor operation. They often include contactors and overload protection. They allow safe remote or automatic control."
  },
  {
    "id": 71,
    "category": "V1 — Install motor starters and controls",
    "question": "The overload relay in a motor starter protects mainly against:",
    "options": [
      "Motor overcurrent from overload",
      "Low light levels",
      "Poor paint finish",
      "Data cable noise"
    ],
    "answer": 0,
    "explanation": "Overload relays respond to excessive motor current. They protect the motor from overheating. They are not the same as short-circuit protection."
  },
  {
    "id": 72,
    "category": "V1 — Install motor starters and controls",
    "question": "A contactor coil is energized. What happens?",
    "options": [
      "Contacts change state",
      "The transformer core disappears",
      "Grounding conductor opens",
      "Motor horsepower becomes zero"
    ],
    "answer": 0,
    "explanation": "The energized coil creates magnetism. The magnetic force moves the contactor armature. This opens or closes power contacts."
  },
  {
    "id": 73,
    "category": "V1 — Install motor starters and controls",
    "question": "A stop pushbutton in a motor control circuit is normally:",
    "options": [
      "Normally closed",
      "Normally open",
      "Always shorted",
      "Always connected to ground only"
    ],
    "answer": 0,
    "explanation": "A stop button must open the control circuit when pressed. For fail-safe operation it is normally closed. If a wire breaks, the motor should stop."
  },
  {
    "id": 74,
    "category": "V1 — Install motor starters and controls",
    "question": "A start pushbutton in a typical motor control circuit is normally:",
    "options": [
      "Normally open",
      "Normally closed",
      "Permanently closed",
      "A fuse"
    ],
    "answer": 0,
    "explanation": "The start button closes only when pressed. It energizes the contactor coil. A holding contact keeps the circuit energized after release."
  },
  {
    "id": 75,
    "category": "V1 — Install motor starters and controls",
    "question": "A seal-in contact is used to:",
    "options": [
      "Keep the contactor coil energized after the start button is released",
      "Increase motor speed",
      "Replace overload protection",
      "Convert single-phase to three-phase"
    ],
    "answer": 0,
    "explanation": "The seal-in contact is an auxiliary contact. It bypasses the start pushbutton after the coil energizes. The stop button or overload opens the circuit to stop the motor."
  },
  {
    "id": 76,
    "category": "V2 — Maintain motor starters and controls",
    "question": "A motor starter chatters when energized. Which problem could cause this?",
    "options": [
      "Low control voltage or loose connection",
      "Too much paint on the wall",
      "Proper voltage with no issue",
      "Correct operation only"
    ],
    "answer": 0,
    "explanation": "A contactor coil needs proper voltage to stay pulled in. Low voltage or loose wiring can cause chattering. Chattering can damage contacts and coils."
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
  shuffleArray(electricianLevel2PracticeExamQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "electrician",
  tradeTitle: "Electrician",
  sectionTitle: "Level 2 Practice Exam",
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
