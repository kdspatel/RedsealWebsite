const electricianLevel1PracticeExamQuestions = [
  {
    "id": 1,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 120 V circuit supplies a 900 W load. What current does the load draw?",
    "options": [
      "5 A",
      "7.5 A",
      "9 A",
      "12 A"
    ],
    "answer": 1,
    "explanation": "Use (I = P/E). (900 ÷ 120 = 7.5A). Current is 7.5 amps."
  },
  {
    "id": 2,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 240 V circuit has a 16 Ω load. What is the power used by the load?",
    "options": [
      "960 W",
      "1800 W",
      "2400 W",
      "3600 W"
    ],
    "answer": 3,
    "explanation": "Current is (240 ÷ 16 = 15A). Power is (P = E × I). (240 × 15 = 3600W)."
  },
  {
    "id": 3,
    "category": "A1 - Use electrical circuit concepts",
    "question": "Three resistors, 10 Ω, 20 Ω, and 30 Ω, are connected in series. What is total resistance?",
    "options": [
      "5.45 Ω",
      "30 Ω",
      "60 Ω",
      "600 Ω"
    ],
    "answer": 2,
    "explanation": "Series resistance adds directly. (10 + 20 + 30 = 60Ω). Total resistance is 60 ohms."
  },
  {
    "id": 4,
    "category": "A1 - Use electrical circuit concepts",
    "question": "Three 24 Ω resistors are connected in parallel. What is total resistance?",
    "options": [
      "6 Ω",
      "8 Ω",
      "24 Ω",
      "72 Ω"
    ],
    "answer": 1,
    "explanation": "Equal resistors in parallel divide by quantity. (24 ÷ 3 = 8Ω). Total resistance is 8 ohms."
  },
  {
    "id": 5,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 12 A current flows through a 2 Ω loose connection. How much heat power is produced at the connection?",
    "options": [
      "24 W",
      "48 W",
      "144 W",
      "288 W"
    ],
    "answer": 3,
    "explanation": "Use (P = I^2R). (12^2 × 2 = 144 × 2). The connection produces 288 W of heat."
  },
  {
    "id": 6,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 120 V load has 3 A flowing. What is the load resistance?",
    "options": [
      "20 Ω",
      "30 Ω",
      "40 Ω",
      "360 Ω"
    ],
    "answer": 2,
    "explanation": "Use (R = E/I). (120 ÷ 3 = 40Ω). The resistance is 40 ohms."
  },
  {
    "id": 7,
    "category": "A1 - Use electrical circuit concepts",
    "question": "Two branch loads are connected in parallel. One branch draws 4 A and the other draws 11 A. What is total current?",
    "options": [
      "7 A",
      "11 A",
      "15 A",
      "44 A"
    ],
    "answer": 2,
    "explanation": "Parallel branch currents add. (4A + 11A = 15A). The source supplies 15 amps."
  },
  {
    "id": 8,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A circuit has voltage present but no current flow because a conductor is broken. What condition exists?",
    "options": [
      "Short circuit",
      "Open circuit",
      "Ground fault",
      "Normal load"
    ],
    "answer": 1,
    "explanation": "A broken conductor creates an incomplete path. Current cannot flow without a closed path. This is an open circuit."
  },
  {
    "id": 9,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 120 V single-phase load draws 12 A at 0.65 power factor. What is true power?",
    "options": [
      "780 W",
      "936 W",
      "1440 W",
      "1846 W"
    ],
    "answer": 1,
    "explanation": "Use (P = E × I × pf). (120 × 12 × 0.65 = 936W). True power is measured in watts."
  },
  {
    "id": 10,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A single-phase circuit has 240 V and 20 A. What is apparent power?",
    "options": [
      "260 VA",
      "1200 VA",
      "4800 VA",
      "9600 VA"
    ],
    "answer": 2,
    "explanation": "Apparent power is (S = E × I). (240 × 20 = 4800VA). Power factor is not used for VA."
  },
  {
    "id": 11,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A load uses 1800 W and has apparent power of 2400 VA. What is power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.90",
      "1.33"
    ],
    "answer": 1,
    "explanation": "Power factor is (P/S). (1800 ÷ 2400 = 0.75). Power factor is 75%."
  },
  {
    "id": 12,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A coil has inductance of 0.1 H on a 60 Hz supply. What is inductive reactance?",
    "options": [
      "3.77 Ω",
      "6 Ω",
      "37.7 Ω",
      "377 Ω"
    ],
    "answer": 2,
    "explanation": "Use (X_L = 2πfL). (2π × 60 × 0.1 ≈ 37.7Ω). Inductive reactance is 37.7 ohms."
  },
  {
    "id": 13,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "If frequency is doubled in an inductive circuit, what happens to (X_L)?",
    "options": [
      "It doubles",
      "It halves",
      "It becomes zero",
      "It becomes (X_C)"
    ],
    "answer": 0,
    "explanation": "(X_L = 2πfL). (X_L) is directly proportional to frequency. Doubling frequency doubles inductive reactance."
  },
  {
    "id": 14,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "If frequency is doubled in a capacitive circuit, what happens to (X_C)?",
    "options": [
      "It doubles",
      "It halves",
      "It becomes resistance",
      "It becomes infinite"
    ],
    "answer": 1,
    "explanation": "(X_C = 1/(2πfC)). (X_C) is inversely proportional to frequency. Doubling frequency cuts capacitive reactance in half."
  },
  {
    "id": 15,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A series AC circuit has 9 Ω resistance and 12 Ω inductive reactance. What is impedance?",
    "options": [
      "3 Ω",
      "15 Ω",
      "21 Ω",
      "108 Ω"
    ],
    "answer": 1,
    "explanation": "Use (Z = \sqrt{R^2 + X_L^2}). (\sqrt{9^2 + 12^2} = \sqrt{225}). Impedance is 15 Ω."
  },
  {
    "id": 16,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 120 V AC circuit has total impedance of 15 Ω. What current flows?",
    "options": [
      "4 A",
      "6 A",
      "8 A",
      "15 A"
    ],
    "answer": 2,
    "explanation": "Use (I = E/Z). (120 ÷ 15 = 8A). The AC current is 8 amps."
  },
  {
    "id": 17,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A purely resistive load has what phase relationship between voltage and current?",
    "options": [
      "Current leads voltage by 90°",
      "Current lags voltage by 90°",
      "Voltage and current are in phase",
      "Current is always zero"
    ],
    "answer": 2,
    "explanation": "Resistance does not create phase shift. Voltage and current rise and fall together. Power factor is unity."
  },
  {
    "id": 18,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A motor is an inductive load. What power factor condition is normally expected?",
    "options": [
      "Leading",
      "Lagging",
      "Unity always",
      "Negative frequency"
    ],
    "answer": 1,
    "explanation": "Inductive loads cause current to lag voltage. Motors have windings that create inductance. This produces lagging power factor."
  },
  {
    "id": 19,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A capacitor is added to an inductive motor circuit. What is the main purpose?",
    "options": [
      "Increase voltage drop",
      "Improve power factor",
      "Increase conductor resistance",
      "Change AC to DC"
    ],
    "answer": 1,
    "explanation": "Capacitors provide leading reactive power. Motors usually draw lagging reactive power. The capacitor can reduce the overall phase angle."
  },
  {
    "id": 20,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 60 Hz AC supply has one cycle every:",
    "options": [
      "1.67 ms",
      "16.7 ms",
      "60 ms",
      "1 second"
    ],
    "answer": 1,
    "explanation": "Period is (T = 1/f). (1 ÷ 60 = 0.0167s). That equals 16.7 milliseconds."
  },
  {
    "id": 21,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 240 V RMS sine wave has peak voltage closest to:",
    "options": [
      "170 V",
      "240 V",
      "339 V",
      "480 V"
    ],
    "answer": 2,
    "explanation": "Peak voltage is (E_{RMS} × \sqrt2). (240 × 1.414 ≈ 339V). RMS is the effective AC value."
  },
  {
    "id": 22,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "Reactive power in an AC circuit is measured in:",
    "options": [
      "Watts",
      "Volts",
      "VAR",
      "Ohms"
    ],
    "answer": 2,
    "explanation": "Reactive power is measured in volt-ampere reactive. It is caused by inductance and capacitance. Watts measure true power."
  },
  {
    "id": 23,
    "category": "A6 - Analyze electronic circuits",
    "question": "A diode is forward biased when the anode is:",
    "options": [
      "Positive compared to the cathode",
      "Negative compared to the cathode",
      "Connected only to ground",
      "Disconnected from the circuit"
    ],
    "answer": 0,
    "explanation": "Forward bias allows diode conduction. The anode must be positive relative to the cathode. Reverse bias blocks normal current."
  },
  {
    "id": 24,
    "category": "A6 - Analyze electronic circuits",
    "question": "A half-wave rectifier uses one diode. What does it do to AC?",
    "options": [
      "Passes both half cycles fully",
      "Passes one half cycle",
      "Changes DC into AC",
      "Removes all voltage"
    ],
    "answer": 1,
    "explanation": "One diode conducts during only one polarity. The opposite half cycle is blocked. The output is pulsating DC."
  },
  {
    "id": 25,
    "category": "A6 - Analyze electronic circuits",
    "question": "A full-wave bridge rectifier uses:",
    "options": [
      "One diode",
      "Two diodes",
      "Four diodes",
      "One resistor only"
    ],
    "answer": 2,
    "explanation": "A bridge rectifier has four diodes. Two conduct on each half cycle. The load receives one polarity of output."
  },
  {
    "id": 26,
    "category": "A6 - Analyze electronic circuits",
    "question": "A capacitor in a rectifier power supply is mainly used to:",
    "options": [
      "Smooth DC ripple",
      "Increase AC frequency",
      "Replace a fuse",
      "Bond the enclosure"
    ],
    "answer": 0,
    "explanation": "The capacitor charges at voltage peaks. It discharges between peaks. This reduces ripple in the DC output."
  },
  {
    "id": 27,
    "category": "A6 - Analyze electronic circuits",
    "question": "An LED indicator fails after being connected without current limiting. Why?",
    "options": [
      "Excess current damaged it",
      "It needed more grounding",
      "It became an inductor",
      "It changed to AC"
    ],
    "answer": 0,
    "explanation": "LEDs require current control. A resistor or driver limits current. Too much current can destroy the LED."
  },
  {
    "id": 28,
    "category": "A6 - Analyze electronic circuits",
    "question": "A transistor in a control circuit is used to let a small signal control a relay coil. What is it acting as?",
    "options": [
      "Switch",
      "Fuse",
      "Ground rod",
      "Raceway fitting"
    ],
    "answer": 0,
    "explanation": "A transistor can control current electronically. A low-power signal can operate a larger load. This is common in control boards."
  },
  {
    "id": 29,
    "category": "A6 - Analyze electronic circuits",
    "question": "A diode test shows low reading in both directions. What is the likely fault?",
    "options": [
      "Open diode",
      "Shorted diode",
      "Good diode",
      "Charged capacitor only"
    ],
    "answer": 1,
    "explanation": "A good diode conducts mainly one direction. Low reading both ways means it no longer blocks reverse current. That indicates a shorted diode."
  },
  {
    "id": 30,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A ladder diagram shows a stop pushbutton symbol ahead of a start pushbutton and coil. Why is the stop button first?",
    "options": [
      "It must open the control circuit when pressed",
      "It increases motor speed",
      "It changes AC into DC",
      "It replaces overloads"
    ],
    "answer": 0,
    "explanation": "Stop buttons are normally closed. They are placed in series with the coil. Pressing stop breaks the control circuit."
  },
  {
    "id": 31,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A drawing shows “CT” beside metering equipment. What does CT usually mean?",
    "options": [
      "Current transformer",
      "Control thermostat",
      "Cable tray only",
      "Copper tubing"
    ],
    "answer": 0,
    "explanation": "CT stands for current transformer. It is used for metering or protection circuits. It steps current down to a measurable value."
  },
  {
    "id": 32,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A panel schedule lists “1P-20A.” What does this usually mean?",
    "options": [
      "One-pole 20 amp breaker",
      "One panel 20 volts",
      "One phase 20 watts",
      "One pipe 20 metres"
    ],
    "answer": 0,
    "explanation": "1P means single-pole. 20A is the breaker rating. Panel schedules show circuit protection information."
  },
  {
    "id": 33,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A transformer name on a drawing is “T2 750 VA 120/24 V.” What does 120/24 V describe?",
    "options": [
      "Primary and secondary voltage rating",
      "Wire length and box size",
      "Breaker count and panel number",
      "Frequency and temperature only"
    ],
    "answer": 0,
    "explanation": "Transformer drawings often show voltage ratio. 120 V is commonly primary, 24 V secondary. Always confirm with the nameplate and diagram."
  },
  {
    "id": 34,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A 120/240 V service has 40 A of 120 V load on L1 and 25 A on L2. What is neutral current?",
    "options": [
      "15 A",
      "25 A",
      "40 A",
      "65 A"
    ],
    "answer": 0,
    "explanation": "Neutral current is the imbalance between legs. (40A - 25A = 15A). The neutral carries 15 amps."
  },
  {
    "id": 35,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A 120/240 V single-phase service has 240 V loads connected line-to-line. Do those loads use the neutral?",
    "options": [
      "No, not for normal current",
      "Yes, full current always returns on neutral",
      "Only if the breaker is off",
      "Only through the grounding electrode"
    ],
    "answer": 0,
    "explanation": "Line-to-line 240 V loads use both ungrounded conductors. The neutral is not in the normal 240 V load path. Neutral carries imbalance from 120 V loads."
  },
  {
    "id": 36,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A meter socket has signs of arcing at one jaw. What is the most likely cause?",
    "options": [
      "Loose or poor contact",
      "Correct operation",
      "Too much insulation",
      "Low resistance bond only"
    ],
    "answer": 0,
    "explanation": "Loose meter jaws create high resistance. High resistance causes heat and arcing under load. Damaged metering equipment must be corrected."
  },
  {
    "id": 37,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A service raceway is installed where it may be hit by equipment. What must be considered?",
    "options": [
      "Mechanical protection",
      "Dimmer compatibility",
      "Data speed",
      "Capacitor polarity"
    ],
    "answer": 0,
    "explanation": "Service conductors can carry high fault energy. Damage to service equipment can create serious hazards. Protection from physical damage is required."
  },
  {
    "id": 38,
    "category": "I1 - Install overcurrent protection devices",
    "question": "What is the difference between overload and short circuit protection?",
    "options": [
      "Overload is excessive load current; short circuit is fault current from low impedance",
      "They are exactly the same condition",
      "Overload only happens with no current",
      "Short circuit only happens at low voltage"
    ],
    "answer": 0,
    "explanation": "Overload is current above normal rating. Short circuit current is much higher due to low impedance. Protection must handle both conditions safely."
  },
  {
    "id": 39,
    "category": "I1 - Install overcurrent protection devices",
    "question": "A breaker has an interrupting rating of 10 kA. Available fault current is 18 kA. What is the problem?",
    "options": [
      "Breaker rating is too low",
      "Breaker is oversized for voltage only",
      "Breaker will trip more safely",
      "Fault current is below rating"
    ],
    "answer": 0,
    "explanation": "Interrupting rating must exceed available fault current. If fault current is higher, the breaker may fail. This is a serious safety issue."
  },
  {
    "id": 40,
    "category": "I2 - Install ground fault, arc fault and surge protection devices",
    "question": "Which device is intended to protect against dangerous arcing that may cause fire?",
    "options": [
      "AFCI",
      "Standard switch",
      "Bonding bushing only",
      "CT meter"
    ],
    "answer": 0,
    "explanation": "AFCI means arc-fault circuit interrupter. It detects certain arcing patterns. It opens the circuit to reduce fire risk."
  },
  {
    "id": 41,
    "category": "L1 - Install grounding and bonding systems",
    "question": "What is the main purpose of bonding non-current-carrying metal parts?",
    "options": [
      "Keep them at the same potential and provide a fault path",
      "Increase system voltage",
      "Carry normal neutral current",
      "Replace overcurrent protection"
    ],
    "answer": 0,
    "explanation": "Bonding connects exposed metal parts together. It reduces shock voltage between metal parts. It also helps clear faults."
  },
  {
    "id": 42,
    "category": "L1 - Install grounding and bonding systems",
    "question": "A metal junction box is bonded. A hot conductor faults to the box. What should occur?",
    "options": [
      "Fault current flows and trips protection",
      "The box remains energized forever",
      "Voltage doubles",
      "The neutral opens automatically"
    ],
    "answer": 0,
    "explanation": "Bonding gives fault current a low-impedance path. High fault current operates the breaker or fuse. This clears the dangerous condition."
  },
  {
    "id": 43,
    "category": "L1 - Install grounding and bonding systems",
    "question": "Grounding and bonding are different because grounding connects to earth, while bonding connects:",
    "options": [
      "Metal parts together",
      "Only plastic parts",
      "Lamps in series",
      "Capacitors to resistors only"
    ],
    "answer": 0,
    "explanation": "Grounding establishes earth reference. Bonding connects exposed conductive parts. Both are important but not the same."
  },
  {
    "id": 44,
    "category": "N1 - Install renewable energy generating and storage systems",
    "question": "A battery system is disconnected from the charger. Why can it still be dangerous?",
    "options": [
      "It stores electrical energy",
      "It becomes non-electrical",
      "It turns into a grounding electrode",
      "It removes all DC voltage immediately"
    ],
    "answer": 0,
    "explanation": "Batteries store energy chemically. They can deliver current after external power is off. Isolation and safety procedures are required."
  },
  {
    "id": 45,
    "category": "P1 - Install single-phase transformers",
    "question": "A transformer has 400 primary turns and 80 secondary turns. Primary voltage is 240 V. What is secondary voltage?",
    "options": [
      "24 V",
      "48 V",
      "120 V",
      "480 V"
    ],
    "answer": 1,
    "explanation": "Voltage ratio equals turns ratio. (80 ÷ 400 = 0.2). (240 × 0.2 = 48V)."
  },
  {
    "id": 46,
    "category": "P1 - Install single-phase transformers",
    "question": "A 2.4 kVA transformer has a 24 V secondary. What is full-load secondary current?",
    "options": [
      "10 A",
      "24 A",
      "100 A",
      "240 A"
    ],
    "answer": 2,
    "explanation": "Use (I = VA/E). (2400 ÷ 24 = 100A). Low-voltage secondaries can carry high current."
  },
  {
    "id": 47,
    "category": "P1 - Install single-phase transformers",
    "question": "A transformer has a 120 V primary and a 600 V secondary. What type is it?",
    "options": [
      "Step-up",
      "Step-down",
      "Isolation",
      "Rectifier"
    ],
    "answer": 0,
    "explanation": "Secondary voltage is higher than primary voltage. The transformer increases voltage. This is a step-up transformer."
  },
  {
    "id": 48,
    "category": "P1 - Install single-phase transformers",
    "question": "A transformer has a 600 V primary and 120 V secondary. What type is it?",
    "options": [
      "Step-up",
      "Step-down",
      "Current-only transformer",
      "Capacitor"
    ],
    "answer": 1,
    "explanation": "Secondary voltage is lower than primary voltage. The transformer reduces voltage. This is a step-down transformer."
  },
  {
    "id": 49,
    "category": "P1 - Install single-phase transformers",
    "question": "A 120 V to 24 V transformer supplies 8 A on the secondary. What is the ideal primary current?",
    "options": [
      "0.8 A",
      "1.6 A",
      "4 A",
      "40 A"
    ],
    "answer": 1,
    "explanation": "Secondary VA is (24 × 8 = 192VA). Primary current is (192 ÷ 120). Ideal primary current is 1.6 A."
  },
  {
    "id": 50,
    "category": "P1 - Install single-phase transformers",
    "question": "What transformer part provides a path for magnetic flux?",
    "options": [
      "Core",
      "Fuse holder",
      "Conduit connector",
      "Lamp socket"
    ],
    "answer": 0,
    "explanation": "The core carries magnetic flux. It links the primary and secondary windings. Laminated steel cores reduce losses."
  },
  {
    "id": 51,
    "category": "P1 - Install single-phase transformers",
    "question": "Why must transformer ventilation openings not be blocked?",
    "options": [
      "To prevent overheating",
      "To increase voltage",
      "To lower frequency",
      "To change turns ratio"
    ],
    "answer": 0,
    "explanation": "Transformers produce heat under load. Ventilation allows heat to escape. Blocked airflow can damage insulation and windings."
  },
  {
    "id": 52,
    "category": "P1 - Install single-phase transformers",
    "question": "A transformer secondary is 24 V with no load but drops very low when controls energize. What should be checked?",
    "options": [
      "Overload or short in control circuit",
      "Panel paint colour",
      "Service neutral balance only",
      "Ground rod depth only"
    ],
    "answer": 0,
    "explanation": "Voltage collapse under load suggests excessive current. A short or overload can pull voltage down. Control wiring and loads should be tested."
  },
  {
    "id": 53,
    "category": "P1 - Install single-phase transformers",
    "question": "A transformer works by inducing voltage in the secondary through changing magnetic flux. What principle is this?",
    "options": [
      "Mutual induction",
      "Electrolysis",
      "Static friction",
      "Capillary action"
    ],
    "answer": 0,
    "explanation": "AC in the primary creates changing flux. That flux links the secondary winding. The changing flux induces voltage."
  },
  {
    "id": 54,
    "category": "Q1 - Install conductors and cables",
    "question": "A conductor insulation is rated 90°C, but equipment terminals are rated 75°C. Which temperature rating usually limits the termination?",
    "options": [
      "75°C",
      "90°C",
      "120°C",
      "No rating applies"
    ],
    "answer": 0,
    "explanation": "The lowest applicable rating controls. Terminations must not exceed their temperature rating. A 75°C terminal limits the connection."
  },
  {
    "id": 55,
    "category": "Q1 - Install conductors and cables",
    "question": "A cable marked RW90 is best described as:",
    "options": [
      "Thermal set wet rated at 90°C",
      "Non-metallic dry rated only",
      "Communication cable only",
      "A motor starter coil"
    ],
    "answer": 0,
    "explanation": "RW90 means rubber/thermoset wet rated 90°C. Cable markings tell where it can be used. The environment must match the rating."
  },
  {
    "id": 56,
    "category": "Q1 - Install conductors and cables",
    "question": "Why should conductors be identified clearly at both ends during installation?",
    "options": [
      "To avoid incorrect connections",
      "To increase conductor ampacity",
      "To reduce frequency",
      "To replace bonding"
    ],
    "answer": 0,
    "explanation": "Clear identification prevents wiring mistakes. It helps troubleshooting and termination. Incorrect connections can damage equipment or create hazards."
  },
  {
    "id": 57,
    "category": "Q2 - Install raceways, boxes and fittings",
    "question": "A box contains splices but has no cover. What is the issue?",
    "options": [
      "Splices are not properly enclosed",
      "Current is reduced safely",
      "Voltage becomes zero",
      "Power factor improves"
    ],
    "answer": 0,
    "explanation": "Boxes must protect splices. Covers prevent contact with live parts. They also keep debris out of the enclosure."
  },
  {
    "id": 58,
    "category": "R1 - Install luminaires",
    "question": "A recessed luminaire is installed in an insulated ceiling. What rating should be checked?",
    "options": [
      "IC rating if insulation contact is expected",
      "CT rating",
      "GFCI rating only",
      "Transformer turns ratio"
    ],
    "answer": 0,
    "explanation": "IC means insulation contact. Non-IC luminaires can overheat if covered. The fixture rating must match the installation."
  },
  {
    "id": 59,
    "category": "R2 - Install wiring devices",
    "question": "A receptacle is wired with hot and neutral reversed. What is the hazard?",
    "options": [
      "Equipment may have energized parts unexpectedly",
      "Voltage becomes lower",
      "Breaker size becomes correct automatically",
      "Bonding improves"
    ],
    "answer": 0,
    "explanation": "Reversed polarity can energize parts intended to be neutral. Some equipment switches only one conductor. Correct polarity improves safety."
  },
  {
    "id": 60,
    "category": "R2 - Install wiring devices",
    "question": "A wiring device is rated 15 A but is installed on a load requiring 25 A through the device. What is the concern?",
    "options": [
      "Device overload and overheating",
      "Better power factor",
      "Lower voltage only",
      "Correct installation"
    ],
    "answer": 0,
    "explanation": "Devices must be rated for the load. Excess current can overheat contacts and terminals. Ratings must be followed."
  },
  {
    "id": 61,
    "category": "R3 - Install lighting controls",
    "question": "A photocell controls exterior lights. What is its basic function?",
    "options": [
      "Switch lights based on light level",
      "Measure ground resistance",
      "Change AC to DC",
      "Protect against overload only"
    ],
    "answer": 0,
    "explanation": "A photocell responds to light level. It can turn lights on at dusk and off at dawn. It is a lighting control device."
  },
  {
    "id": 62,
    "category": "R3 - Install lighting controls",
    "question": "A low-voltage lighting control relay uses a coil and contacts. What happens when the coil energizes?",
    "options": [
      "Contacts change state",
      "Grounding electrode resistance increases",
      "AC changes to DC always",
      "The lamp becomes a transformer"
    ],
    "answer": 0,
    "explanation": "Relay coils create a magnetic field. The magnetic field moves contacts. Contacts switch the lighting circuit."
  },
  {
    "id": 63,
    "category": "S1 - Install HVAC systems and controls",
    "question": "An HVAC thermostat controls a 24 V circuit. What normally provides that 24 V?",
    "options": [
      "Control transformer",
      "Grounding electrode",
      "Surge protector",
      "Lighting dimmer"
    ],
    "answer": 0,
    "explanation": "HVAC control circuits commonly use 24 V. A transformer steps down line voltage. It supplies thermostats and control relays."
  },
  {
    "id": 64,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A contactor in an HVAC unit has a 24 V coil and power contacts. What is its job?",
    "options": [
      "Use low-voltage control to switch higher-power load",
      "Store refrigerant",
      "Measure duct airflow only",
      "Replace the compressor"
    ],
    "answer": 0,
    "explanation": "The coil is part of the control circuit. The contacts switch the load circuit. This allows a thermostat to control larger loads."
  },
  {
    "id": 65,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A DDC system uses sensors, controllers, and outputs. What does DDC mean?",
    "options": [
      "Direct digital control",
      "Double duty contactor",
      "Dry disconnect cable",
      "Direct discharge capacitor"
    ],
    "answer": 0,
    "explanation": "DDC means direct digital control. It uses electronic logic to control building systems. It is common in HVAC automation."
  },
  {
    "id": 66,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A rooftop unit requires a local disconnect. Why is it installed near the unit?",
    "options": [
      "For safe servicing and isolation",
      "To increase cooling capacity",
      "To reduce thermostat accuracy",
      "To change frequency"
    ],
    "answer": 0,
    "explanation": "Workers need a nearby means to disconnect power. It helps make maintenance safer. Disconnects must be properly rated and located."
  },
  {
    "id": 67,
    "category": "S2 - Maintain HVAC systems and controls",
    "question": "A 24 V HVAC fuse opens every time the thermostat calls. What is likely?",
    "options": [
      "Short or overload in control circuit",
      "Correct operation",
      "Oversized air filter only",
      "Low refrigerant only"
    ],
    "answer": 0,
    "explanation": "A fuse opens from excessive current. If it opens during a call, the control circuit may be faulted. Wiring, coil, and control loads should be checked."
  },
  {
    "id": 68,
    "category": "T1 - Install exit and emergency lighting systems",
    "question": "An exit sign has AC power and a battery. What is the battery for?",
    "options": [
      "Operation during power failure",
      "Increasing normal voltage",
      "Replacing the branch circuit",
      "Reducing grounding requirements"
    ],
    "answer": 0,
    "explanation": "Emergency equipment must operate when normal power fails. The battery supplies backup energy. Testing confirms battery condition."
  },
  {
    "id": 69,
    "category": "U1 - Install cathodic protection systems",
    "question": "Cathodic protection makes the protected metal act as the:",
    "options": [
      "Cathode",
      "Fuse",
      "Neutral",
      "Transformer primary"
    ],
    "answer": 0,
    "explanation": "Corrosion is reduced at the cathode. Sacrificial anodes or impressed current protect the structure. This method is used on buried or submerged metal."
  },
  {
    "id": 70,
    "category": "V1 - Install motor starters and controls",
    "question": "In a three-wire motor control circuit, the start button is normally:",
    "options": [
      "Normally open",
      "Normally closed",
      "Always grounded",
      "Always fused"
    ],
    "answer": 0,
    "explanation": "Pressing start closes the circuit. This energizes the starter coil. A seal-in contact keeps it energized."
  },
  {
    "id": 71,
    "category": "V1 - Install motor starters and controls",
    "question": "In a three-wire motor control circuit, the stop button is normally:",
    "options": [
      "Normally closed",
      "Normally open",
      "Always shorted",
      "Never used"
    ],
    "answer": 0,
    "explanation": "Pressing stop opens the circuit. This de-energizes the starter coil. A broken stop circuit also prevents starting."
  },
  {
    "id": 72,
    "category": "V1 - Install motor starters and controls",
    "question": "What is the purpose of the seal-in auxiliary contact?",
    "options": [
      "Maintain coil power after start is released",
      "Increase motor horsepower",
      "Replace overload protection",
      "Change current to DC"
    ],
    "answer": 0,
    "explanation": "The start button is momentary. The seal-in contact bypasses it after the coil energizes. This keeps the motor running until stop is pressed."
  },
  {
    "id": 73,
    "category": "V1 - Install motor starters and controls",
    "question": "Motor overload relays are intended to protect against:",
    "options": [
      "Sustained overcurrent overheating the motor",
      "Lightning only",
      "Low room temperature",
      "Incorrect paint colour"
    ],
    "answer": 0,
    "explanation": "Overloads respond to excessive motor current over time. They protect motor windings from overheating. They are not the same as short-circuit protection."
  },
  {
    "id": 74,
    "category": "V1 - Install motor starters and controls",
    "question": "A motor starter coil is rated 120 V. What happens if connected to 240 V?",
    "options": [
      "Coil may overheat and fail",
      "Coil works better forever",
      "Motor speed halves safely",
      "Overloads become unnecessary"
    ],
    "answer": 0,
    "explanation": "Coils must match control voltage. Too much voltage causes excessive current and heat. The coil can burn out."
  },
  {
    "id": 75,
    "category": "V1 - Install motor starters and controls",
    "question": "A pilot light is connected in parallel with a motor starter coil. What does it show?",
    "options": [
      "Coil energized condition",
      "Exact motor RPM",
      "Ground resistance",
      "Transformer turns ratio"
    ],
    "answer": 0,
    "explanation": "A parallel pilot light sees the same voltage as the coil. When the coil is energized, the light turns on. It indicates control circuit status."
  },
  {
    "id": 76,
    "category": "V2 - Maintain motor starters and controls",
    "question": "A motor hums but does not start, and the overload trips after a short time. What is a likely electrical concern?",
    "options": [
      "Starting circuit or motor fault causing high current",
      "Perfect normal operation",
      "Too much ventilation",
      "Exit sign battery failure"
    ],
    "answer": 0,
    "explanation": "A stalled motor draws high current. High current causes overload protection to trip. The motor, starter, capacitor, or load should be checked safely."
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

const shuffledElectricianLevel1PracticeExamQuestions =
  shuffleArray(electricianLevel1PracticeExamQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "electrician",
  tradeTitle: "Electrician",
  sectionTitle: "Level 2 Practice Standardized Exam – Set 2",
  questionTimeSeconds: 90,
  questions: shuffledElectricianLevel1PracticeExamQuestions
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
