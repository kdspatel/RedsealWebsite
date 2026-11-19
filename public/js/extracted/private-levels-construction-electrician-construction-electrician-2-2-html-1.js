const electricianLevel1PracticeExamQuestions = [
  {
    "id": 1,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 120 V circuit supplies two loads in parallel: 300 W and 600 W. What is the total current?",
    "options": [
      "2.5 A",
      "5 A",
      "7.5 A",
      "10 A"
    ],
    "answer": 2,
    "explanation": "Total power is 300 W + 600 W = 900 W. Use I = P ÷ E = 900 ÷ 120. Total current is 7.5 A."
  },
  {
    "id": 2,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A conductor has 0.4 Ω resistance and carries 25 A. How much power is lost as heat?",
    "options": [
      "10 W",
      "100 W",
      "250 W",
      "625 W"
    ],
    "answer": 2,
    "explanation": "Use P = I²R. P = 25² × 0.4 = 625 × 0.4. Power loss is 250 W."
  },
  {
    "id": 3,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 240 V load has a resistance of 48 Ω. What is the current?",
    "options": [
      "2 A",
      "5 A",
      "10 A",
      "20 A"
    ],
    "answer": 1,
    "explanation": "Use I = E ÷ R. I = 240 ÷ 48. Current is 5 A."
  },
  {
    "id": 4,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 120 V circuit has a voltage drop of 6 V. What percentage voltage drop is this?",
    "options": [
      "2%",
      "3%",
      "5%",
      "6%"
    ],
    "answer": 2,
    "explanation": "Voltage drop percent = drop ÷ supply × 100. 6 ÷ 120 × 100 = 5%. The voltage drop is 5 percent."
  },
  {
    "id": 5,
    "category": "A1 - Use electrical circuit concepts",
    "question": "Which load has the lowest resistance at 120 V?",
    "options": [
      "300 W",
      "600 W",
      "900 W",
      "1,200 W"
    ],
    "answer": 3,
    "explanation": "At the same voltage, higher wattage means lower resistance. Use R = E² ÷ P. The 1,200 W load has the lowest resistance."
  },
  {
    "id": 6,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 15 Ω resistor and 30 Ω resistor are connected in parallel. What is total resistance?",
    "options": [
      "7.5 Ω",
      "10 Ω",
      "15 Ω",
      "45 Ω"
    ],
    "answer": 1,
    "explanation": "Use product-over-sum. RT = 15 × 30 ÷ 45. Total resistance is 10 Ω."
  },
  {
    "id": 7,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A 10 A load operates for 3 hours on a 120 V circuit. How much energy is used?",
    "options": [
      "1.2 kWh",
      "2.4 kWh",
      "3.6 kWh",
      "12 kWh"
    ],
    "answer": 2,
    "explanation": "Power = 120 × 10 = 1,200 W = 1.2 kW. Energy = kW × hours. 1.2 × 3 = 3.6 kWh."
  },
  {
    "id": 8,
    "category": "A1 - Use electrical circuit concepts",
    "question": "A circuit has 480 VA apparent power and 384 W true power. What is the power factor?",
    "options": [
      "0.6",
      "0.7",
      "0.8",
      "1.25"
    ],
    "answer": 2,
    "explanation": "Power factor = W ÷ VA. 384 ÷ 480 = 0.8. The power factor is 80 percent."
  },
  {
    "id": 9,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 240 V single-phase motor draws 18 A at 0.75 power factor. What is true power?",
    "options": [
      "3,240 W",
      "4,320 W",
      "5,760 W",
      "7,680 W"
    ],
    "answer": 0,
    "explanation": "Use P = E × I × pf. P = 240 × 18 × 0.75. True power is 3,240 W."
  },
  {
    "id": 10,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 120 V inductive load draws 8 A. Apparent power is:",
    "options": [
      "120 VA",
      "480 VA",
      "960 VA",
      "1,200 VA"
    ],
    "answer": 2,
    "explanation": "Use S = E × I. S = 120 × 8. Apparent power is 960 VA."
  },
  {
    "id": 11,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A coil has 12 Ω resistance and 16 Ω inductive reactance. What is impedance?",
    "options": [
      "4 Ω",
      "20 Ω",
      "28 Ω",
      "192 Ω"
    ],
    "answer": 1,
    "explanation": "Use Z = √(R² + XL²). Z = √(12² + 16²) = √400. Impedance is 20 Ω."
  },
  {
    "id": 12,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A circuit has 20 Ω impedance on 120 V AC. What current flows?",
    "options": [
      "3 A",
      "4 A",
      "6 A",
      "20 A"
    ],
    "answer": 2,
    "explanation": "Use I = E ÷ Z. I = 120 ÷ 20. Current is 6 A."
  },
  {
    "id": 13,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "In an inductive AC circuit, low power factor is caused mainly because:",
    "options": [
      "Current leads voltage",
      "Current lags voltage",
      "Voltage becomes DC",
      "Resistance becomes zero"
    ],
    "answer": 1,
    "explanation": "Inductors cause current to lag voltage. This phase shift reduces power factor. Motors usually have lagging power factor."
  },
  {
    "id": 14,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A capacitor is added to correct a motor’s power factor. What does it usually supply?",
    "options": [
      "Reactive power opposite to the motor’s inductive VARs",
      "Extra mechanical horsepower only",
      "More resistance in series",
      "Direct current to the motor"
    ],
    "answer": 0,
    "explanation": "Motors require inductive reactive power. Capacitors provide leading reactive power. This can improve overall power factor."
  },
  {
    "id": 15,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 60 Hz supply is connected to an inductor. If frequency increases, inductive reactance will:",
    "options": [
      "Decrease",
      "Increase",
      "Stay zero",
      "Become capacitance"
    ],
    "answer": 1,
    "explanation": "Inductive reactance is XL = 2πfL. Reactance increases as frequency increases. Higher frequency makes an inductor oppose current more."
  },
  {
    "id": 16,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 60 Hz supply is connected to a capacitor. If capacitance increases, capacitive reactance will:",
    "options": [
      "Increase",
      "Decrease",
      "Become infinite",
      "Become resistance only"
    ],
    "answer": 1,
    "explanation": "Capacitive reactance is XC = 1 ÷ 2πfC. Increasing capacitance lowers XC. Lower XC allows more AC current."
  },
  {
    "id": 17,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 120 V circuit has 600 W true power and 1,000 VA apparent power. What is reactive power approximately?",
    "options": [
      "400 VAR",
      "600 VAR",
      "800 VAR",
      "1,600 VAR"
    ],
    "answer": 2,
    "explanation": "Use Q = √(S² − P²). Q = √(1000² − 600²) = √640000. Reactive power is 800 VAR."
  },
  {
    "id": 18,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "Which circuit has unity power factor?",
    "options": [
      "Pure resistance",
      "Pure inductance",
      "Pure capacitance",
      "Open circuit only"
    ],
    "answer": 0,
    "explanation": "A resistive circuit has voltage and current in phase. True power equals apparent power. Power factor is 1.0."
  },
  {
    "id": 19,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 60 Hz waveform has a period of:",
    "options": [
      "0.0083 s",
      "0.0167 s",
      "0.06 s",
      "60 s"
    ],
    "answer": 1,
    "explanation": "Period equals 1 ÷ frequency. T = 1 ÷ 60. One cycle takes about 0.0167 seconds."
  },
  {
    "id": 20,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "In a capacitive circuit, the memory aid “ICE” means:",
    "options": [
      "Current leads voltage",
      "Voltage leads current",
      "Current equals resistance",
      "Energy becomes heat only"
    ],
    "answer": 0,
    "explanation": "ICE means current leads voltage in capacitance. Capacitors oppose voltage change. Current reaches its peak first."
  },
  {
    "id": 21,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A 120 V load draws 10 A at 0.6 power factor. What is apparent power?",
    "options": [
      "600 VA",
      "720 VA",
      "1,200 VA",
      "2,000 VA"
    ],
    "answer": 2,
    "explanation": "Apparent power does not use power factor. S = E × I = 120 × 10. Apparent power is 1,200 VA."
  },
  {
    "id": 22,
    "category": "A4 - Analyze single-phase AC circuits",
    "question": "A circuit has 900 W true power and 1,200 VA apparent power. What is the power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.90",
      "1.33"
    ],
    "answer": 1,
    "explanation": "Power factor = W ÷ VA. 900 ÷ 1200 = 0.75. The circuit has 75 percent power factor."
  },
  {
    "id": 23,
    "category": "A6 - Analyze electronic circuits",
    "question": "A control board uses a diode across a relay coil. What is the diode commonly used for?",
    "options": [
      "To suppress voltage spike when the coil de-energizes",
      "To increase coil resistance permanently",
      "To convert the relay to AC only",
      "To replace the transformer"
    ],
    "answer": 0,
    "explanation": "A coil produces a voltage spike when current collapses. A diode gives that energy a safe path. This protects electronic switching components."
  },
  {
    "id": 24,
    "category": "A6 - Analyze electronic circuits",
    "question": "A full-wave bridge rectifier has one diode open. What is likely?",
    "options": [
      "Output disappears completely in all cases",
      "Output becomes poor or half-wave-like",
      "Input frequency becomes zero",
      "Transformer turns ratio doubles"
    ],
    "answer": 1,
    "explanation": "A bridge needs all four diodes for proper full-wave output. An open diode removes part of the conduction path. The DC output becomes weak or distorted."
  },
  {
    "id": 25,
    "category": "A6 - Analyze electronic circuits",
    "question": "A 24 V DC control circuit has an LED indicator without a current-limiting resistor. What is the concern?",
    "options": [
      "LED may draw excessive current and fail",
      "LED will become a transformer",
      "Circuit frequency will double",
      "Voltage will become AC automatically"
    ],
    "answer": 0,
    "explanation": "LEDs need current limiting. Without a resistor or driver, current can rise too high. The LED can burn out quickly."
  },
  {
    "id": 26,
    "category": "A6 - Analyze electronic circuits",
    "question": "A transistor is in cutoff. What is its switching condition?",
    "options": [
      "Fully on",
      "Off",
      "Shorted collector to emitter",
      "Rectifying AC"
    ],
    "answer": 1,
    "explanation": "Cutoff means base drive is insufficient. Very little collector current flows. In switching use, cutoff is the off state."
  },
  {
    "id": 27,
    "category": "A6 - Analyze electronic circuits",
    "question": "A transistor is saturated. What is its switching condition?",
    "options": [
      "Fully on",
      "Fully off",
      "Reverse biased only",
      "Acting as an open fuse"
    ],
    "answer": 0,
    "explanation": "Saturation means the transistor is driven hard on. Collector-emitter voltage is low. In switching use, saturation is the on state."
  },
  {
    "id": 28,
    "category": "A6 - Analyze electronic circuits",
    "question": "A filter capacitor in a DC supply has failed open. What symptom is likely?",
    "options": [
      "More ripple on the DC output",
      "Perfectly smooth DC output",
      "Output becomes three-phase AC",
      "Frequency becomes 0 Hz always"
    ],
    "answer": 0,
    "explanation": "The capacitor smooths pulsating DC. If it opens, it cannot store and release charge. Ripple voltage increases."
  },
  {
    "id": 29,
    "category": "A6 - Analyze electronic circuits",
    "question": "A diode reads low resistance in both directions with a meter. What is the likely fault?",
    "options": [
      "Open diode",
      "Shorted diode",
      "Normal diode",
      "Correct reverse bias"
    ],
    "answer": 1,
    "explanation": "A good diode conducts mainly one way. Low resistance both ways indicates a short. A shorted diode no longer blocks reverse current."
  },
  {
    "id": 30,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A drawing shows “CT cabinet” near the service equipment. What does CT most likely mean?",
    "options": [
      "Current transformer",
      "Cable tray only",
      "Control thermostat",
      "Cathodic terminal"
    ],
    "answer": 0,
    "explanation": "CT commonly means current transformer. CT cabinets are used for metering larger services. Always confirm with the legend and specifications."
  },
  {
    "id": 31,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A note says a device is mounted at 1,200 mm AFF. What does this mean?",
    "options": [
      "1,200 mm above finished floor",
      "1,200 mm above finished foundation",
      "1,200 A fault factor",
      "1,200 V alternating field frequency"
    ],
    "answer": 0,
    "explanation": "AFF means above finished floor. It gives the mounting height reference. This prevents inconsistent device heights."
  },
  {
    "id": 32,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A single-line diagram shows a transformer secondary feeding panel LP-1. What is the diagram mainly showing?",
    "options": [
      "Simplified power distribution path",
      "Exact wall stud layout",
      "Fixture colour temperature only",
      "Pipe slope only"
    ],
    "answer": 0,
    "explanation": "Single-line diagrams show power flow. They simplify feeders, transformers, and panels. They are used for distribution understanding."
  },
  {
    "id": 33,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A specification requires TECK90 cable for a feeder. What should you do before substituting EMT and conductors?",
    "options": [
      "Get proper approval for the change",
      "Substitute without telling anyone",
      "Use any cable with the same colour",
      "Ignore the specification"
    ],
    "answer": 0,
    "explanation": "Specifications are part of the contract documents. Different wiring methods may not be equivalent. Substitutions require approval."
  },
  {
    "id": 34,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A 120/240 V service supplies a 30 A, 240 V load balanced across both lines. What current flows in the neutral from this load?",
    "options": [
      "0 A",
      "15 A",
      "30 A",
      "60 A"
    ],
    "answer": 0,
    "explanation": "A pure 240 V load uses both ungrounded conductors. It does not use the neutral. Neutral current from that load is zero."
  },
  {
    "id": 35,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A dwelling has 20 A on L1-to-neutral loads and 12 A on L2-to-neutral loads. What neutral current flows?",
    "options": [
      "8 A",
      "12 A",
      "20 A",
      "32 A"
    ],
    "answer": 0,
    "explanation": "Neutral carries the imbalance in a 120/240 V system. Neutral current = 20 − 12. The neutral carries 8 A."
  },
  {
    "id": 36,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "A utility meter records energy in:",
    "options": [
      "Watts only",
      "Kilowatt-hours",
      "Ohms",
      "Volt-amperes reactive only"
    ],
    "answer": 1,
    "explanation": "Energy use is measured in kilowatt-hours. Power is the rate of using energy. Meters record consumption over time."
  },
  {
    "id": 37,
    "category": "H1 - Install single-phase consumer/supply services and metering equipment",
    "question": "Why must service conductors be protected from mechanical damage?",
    "options": [
      "Damage can expose live conductors and create faults",
      "It increases frequency",
      "It improves power factor",
      "It removes the need for metering"
    ],
    "answer": 0,
    "explanation": "Service conductors can carry high fault energy. Mechanical damage may expose energized parts. Protection reduces shock and fire risk."
  },
  {
    "id": 38,
    "category": "I1 - Install overcurrent protection devices",
    "question": "A conductor is protected by a breaker much larger than its ampacity. What is the concern?",
    "options": [
      "The conductor may overheat before the breaker trips",
      "Voltage becomes safer",
      "Current becomes zero",
      "Power factor becomes 1.0"
    ],
    "answer": 0,
    "explanation": "Overcurrent protection must match conductor ampacity. Oversized breakers may not protect conductors. This creates fire risk."
  },
  {
    "id": 39,
    "category": "I1 - Install overcurrent protection devices",
    "question": "A time-delay fuse is often useful for motor circuits because motors:",
    "options": [
      "Have starting inrush current",
      "Never draw current",
      "Operate only on DC",
      "Require no overload protection"
    ],
    "answer": 0,
    "explanation": "Motors draw high current when starting. A time-delay fuse can tolerate short inrush. It still protects against sustained faults."
  },
  {
    "id": 40,
    "category": "I2 - Install ground fault, arc fault and surge protection devices",
    "question": "A surge protective device is most effective when installed with:",
    "options": [
      "Long coiled leads",
      "Short, straight conductors",
      "No bonding connection",
      "Reversed polarity only"
    ],
    "answer": 1,
    "explanation": "Long leads add impedance. Extra impedance reduces surge clamping performance. Short straight connections improve protection."
  },
  {
    "id": 41,
    "category": "L1 - Install grounding and bonding systems",
    "question": "A metal raceway is used as part of the bonding path. What must be maintained?",
    "options": [
      "Mechanical and electrical continuity",
      "Paint thickness only",
      "Data speed rating",
      "Frequency balance"
    ],
    "answer": 0,
    "explanation": "A bonding path must be continuous. Loose fittings can interrupt fault current. Continuity is essential for protection to operate."
  },
  {
    "id": 42,
    "category": "L1 - Install grounding and bonding systems",
    "question": "What is the main purpose of an effective fault-current path?",
    "options": [
      "Carry enough current to operate the protective device",
      "Carry normal neutral current",
      "Store energy for later use",
      "Reduce motor speed"
    ],
    "answer": 0,
    "explanation": "Fault current must return to the source. High fault current causes breakers or fuses to open. This clears dangerous faults quickly."
  },
  {
    "id": 43,
    "category": "L1 - Install grounding and bonding systems",
    "question": "Which statement best separates grounding from bonding?",
    "options": [
      "Grounding connects to earth; bonding connects metal parts together",
      "Grounding and bonding are always the same conductor",
      "Bonding connects only data cables",
      "Grounding replaces overcurrent protection"
    ],
    "answer": 0,
    "explanation": "Grounding establishes earth reference. Bonding connects conductive parts for fault clearing. Both support safety but serve different purposes."
  },
  {
    "id": 44,
    "category": "N1 - Install renewable energy generating and storage systems",
    "question": "In a grid-connected solar PV system, the inverter’s main function is to:",
    "options": [
      "Convert PV DC output into usable AC",
      "Convert AC into plumbing pressure",
      "Store energy chemically only",
      "Eliminate overcurrent protection"
    ],
    "answer": 0,
    "explanation": "PV modules produce DC. Most building systems use AC. The inverter changes DC to AC."
  },
  {
    "id": 45,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer has 600 V primary and 120 V secondary. What is the voltage ratio?",
    "options": [
      "1:5",
      "5:1",
      "10:1",
      "120:1"
    ],
    "answer": 1,
    "explanation": "Voltage ratio = primary voltage ÷ secondary voltage. 600 ÷ 120 = 5. The transformer ratio is 5:1."
  },
  {
    "id": 46,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A 750 VA transformer has a 120 V secondary. What is maximum secondary current?",
    "options": [
      "3.75 A",
      "6.25 A",
      "7.5 A",
      "12 A"
    ],
    "answer": 1,
    "explanation": "Use I = VA ÷ V. I = 750 ÷ 120. Secondary current is 6.25 A."
  },
  {
    "id": 47,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer primary is 240 V and draws 2 A. Ideal secondary is 24 V. What secondary current is available?",
    "options": [
      "2 A",
      "10 A",
      "20 A",
      "48 A"
    ],
    "answer": 2,
    "explanation": "Primary VA = 240 × 2 = 480 VA. Secondary current = 480 ÷ 24. Ideal secondary current is 20 A."
  },
  {
    "id": 48,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer secondary voltage is higher than its primary voltage. This transformer is:",
    "options": [
      "Step-down",
      "Step-up",
      "Open-circuit only",
      "DC-only"
    ],
    "answer": 1,
    "explanation": "A step-up transformer raises voltage. The secondary has more turns than the primary. Current capacity is reduced for the same VA."
  },
  {
    "id": 49,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer hums and becomes hot under no-load conditions. What may be suspected?",
    "options": [
      "Core problem or wrong voltage connection",
      "Normal perfect operation always",
      "No magnetic flux",
      "Secondary current overload only"
    ],
    "answer": 0,
    "explanation": "No-load overheating is abnormal. Wrong primary voltage or shorted turns can cause high magnetizing current. The transformer should be checked before use."
  },
  {
    "id": 50,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "The primary and secondary windings of an isolation transformer are connected by:",
    "options": [
      "Direct copper connection",
      "Magnetic coupling",
      "Plastic conduit only",
      "Grounding electrode only"
    ],
    "answer": 1,
    "explanation": "Transformer windings are coupled by magnetic flux. They are not normally electrically connected in an isolation transformer. Energy transfers by mutual induction."
  },
  {
    "id": 51,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A 24 V control transformer supplies four contactor coils rated 8 VA each. What total VA is required?",
    "options": [
      "8 VA",
      "16 VA",
      "24 VA",
      "32 VA"
    ],
    "answer": 3,
    "explanation": "Total VA is the sum of all coil VA. 4 × 8 VA = 32 VA. The transformer must be rated at least this much."
  },
  {
    "id": 52,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "Why does a transformer core use magnetic steel instead of air only?",
    "options": [
      "Steel has higher permeability",
      "Steel prevents all current flow",
      "Steel creates DC automatically",
      "Steel removes voltage"
    ],
    "answer": 0,
    "explanation": "High permeability carries magnetic flux easily. This improves magnetic coupling between windings. Better coupling improves transformer operation."
  },
  {
    "id": 53,
    "category": "P1 - Install extra-low and low-voltage single-phase transformers",
    "question": "A transformer has a 10:1 primary-to-secondary turns ratio and 600 V primary. What is secondary voltage?",
    "options": [
      "6 V",
      "60 V",
      "120 V",
      "6,000 V"
    ],
    "answer": 1,
    "explanation": "Voltage follows turns ratio. Secondary voltage = 600 ÷ 10. Secondary voltage is 60 V."
  },
  {
    "id": 54,
    "category": "Q1 - Install conductors and cables",
    "question": "A conductor is marked RW90. What does the “90” indicate?",
    "options": [
      "90 volts only",
      "90°C insulation rating",
      "90 amperes only",
      "90 metres maximum length"
    ],
    "answer": 1,
    "explanation": "The number indicates temperature rating. RW90 insulation is rated for 90°C conditions. Termination limits must still be considered."
  },
  {
    "id": 55,
    "category": "Q1 - Install conductors and cables",
    "question": "Why must AC conductors of the same circuit be grouped together?",
    "options": [
      "To reduce inductive heating and maintain correct magnetic field cancellation",
      "To increase voltage drop",
      "To remove the need for insulation",
      "To make the circuit DC"
    ],
    "answer": 0,
    "explanation": "AC conductors create changing magnetic fields. Grouping supply and return conductors helps fields cancel. Separation can cause heating and inductive effects."
  },
  {
    "id": 56,
    "category": "Q1 - Install conductors and cables",
    "question": "A cable jacket is damaged during installation but conductors appear intact. What is the best action?",
    "options": [
      "Ignore it because copper is not visible",
      "Have it inspected and repaired or replaced as required",
      "Paint over the jacket",
      "Increase breaker size"
    ],
    "answer": 1,
    "explanation": "The jacket protects conductors from environment and damage. Damage may reduce cable suitability. It must be corrected according to approved methods."
  },
  {
    "id": 57,
    "category": "Q2 - Install raceways, boxes and fittings",
    "question": "A pull box cover is permanently blocked by building material. What is the problem?",
    "options": [
      "It is no longer accessible",
      "It lowers voltage drop",
      "It increases conductor ampacity",
      "It makes the circuit safer"
    ],
    "answer": 0,
    "explanation": "Pull boxes and junction boxes must remain accessible. Blocked access prevents inspection and maintenance. This can create troubleshooting and safety issues."
  },
  {
    "id": 58,
    "category": "R1 - Install luminaires",
    "question": "A luminaire is installed in an insulated ceiling space. What rating may be important?",
    "options": [
      "Insulation-contact suitability where required",
      "Data transfer rating",
      "Cathodic protection rating",
      "Pipe pressure rating"
    ],
    "answer": 0,
    "explanation": "Some luminaires produce heat. Insulation can trap heat around fixtures. The fixture must be suitable for the installation condition."
  },
  {
    "id": 59,
    "category": "R2 - Install wiring devices",
    "question": "A 15 A receptacle is installed on a circuit serving equipment that requires 20 A. What is the concern?",
    "options": [
      "Device rating may be unsuitable for the load",
      "Voltage becomes DC",
      "Frequency doubles",
      "Grounding becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "Devices must be suitable for the circuit and load. Underrated devices can overheat or fail. Always match ratings to the application."
  },
  {
    "id": 60,
    "category": "R2 - Install wiring devices",
    "question": "A receptacle tests hot-to-ground 120 V, hot-to-neutral 0 V, and neutral-to-ground 120 V. What is likely?",
    "options": [
      "Open neutral",
      "Open hot",
      "Perfect wiring",
      "Shorted breaker"
    ],
    "answer": 0,
    "explanation": "Hot is present, but neutral is not returning correctly. Neutral may be open and floating. This condition can create shock and equipment hazards."
  },
  {
    "id": 61,
    "category": "R3 - Install lighting controls",
    "question": "In a three-way switch system, the common terminal is mistakenly connected as a traveller. What may happen?",
    "options": [
      "The switching will not operate correctly",
      "The circuit becomes three-phase",
      "The lamp becomes a transformer",
      "Voltage becomes zero everywhere"
    ],
    "answer": 0,
    "explanation": "Three-way switches require correct common and traveller connections. Mixing them causes unpredictable or failed operation. Identify the common terminal before wiring."
  },
  {
    "id": 62,
    "category": "R3 - Install lighting controls",
    "question": "A lighting control rated for incandescent loads is used on LED fixtures and flickers. What is most likely?",
    "options": [
      "Control is not compatible with LED load",
      "LED fixtures require no voltage",
      "Bonding conductor is oversized",
      "The switch is working as a transformer"
    ],
    "answer": 0,
    "explanation": "LED drivers need compatible controls. Incorrect dimmers or controls can cause flicker. Load type and minimum load rating matter."
  },
  {
    "id": 63,
    "category": "S1 - Install HVAC systems and controls",
    "question": "An HVAC control transformer is rated 40 VA at 24 V. What is its maximum secondary current?",
    "options": [
      "0.6 A",
      "1.67 A",
      "4 A",
      "24 A"
    ],
    "answer": 1,
    "explanation": "Use I = VA ÷ V. I = 40 ÷ 24 = 1.67 A. The connected control load must not exceed this rating."
  },
  {
    "id": 64,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A thermostat calls for heat, but the furnace control board does not receive 24 V. What should be checked?",
    "options": [
      "Control transformer, fuse, wiring, and safety interlocks",
      "Paint colour of furnace",
      "Water pressure only",
      "Ceiling height"
    ],
    "answer": 0,
    "explanation": "HVAC controls commonly use 24 V circuits. A missing signal can be caused by transformer, fuse, wiring, or safeties. Troubleshooting must be done safely."
  },
  {
    "id": 65,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A DDC system uses sensors and controllers mainly to:",
    "options": [
      "Automatically monitor and control building systems",
      "Replace all overcurrent protection",
      "Eliminate all wiring",
      "Convert motors to plumbing fixtures"
    ],
    "answer": 0,
    "explanation": "DDC means direct digital control. It uses controllers, inputs, and outputs. It is common in modern HVAC systems."
  },
  {
    "id": 66,
    "category": "S1 - Install HVAC systems and controls",
    "question": "A motorized damper actuator is marked 24 VAC. What supply should be used?",
    "options": [
      "24 V AC control supply",
      "120 V DC supply",
      "240 V line voltage",
      "Any voltage if polarity is correct"
    ],
    "answer": 0,
    "explanation": "Equipment must match its nameplate rating. A 24 VAC actuator needs 24 volts AC. Incorrect voltage can damage the actuator."
  },
  {
    "id": 67,
    "category": "S2 - Maintain HVAC systems and controls",
    "question": "An HVAC contactor coil is rated 24 VAC but only receives 16 VAC. What may happen?",
    "options": [
      "Contactor may chatter or fail to pull in",
      "Motor horsepower increases",
      "Frequency becomes zero",
      "The overload relay becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "A coil needs sufficient voltage to magnetically hold. Low voltage causes weak magnetic force. Chattering can damage contacts and coil."
  },
  {
    "id": 68,
    "category": "T1 - Install exit and emergency lighting systems",
    "question": "An emergency lighting battery unit should be installed so that it:",
    "options": [
      "Provides required illumination when normal power fails",
      "Only improves decoration",
      "Replaces all branch-circuit breakers",
      "Operates only when the building is occupied"
    ],
    "answer": 0,
    "explanation": "Emergency lighting supports safe evacuation. Battery units operate when normal supply is lost. Location and testing are important."
  },
  {
    "id": 69,
    "category": "U1 - Install cathodic protection systems",
    "question": "In cathodic protection, the protected metal is made the:",
    "options": [
      "Cathode",
      "Fuse",
      "Resistor",
      "Capacitor"
    ],
    "answer": 0,
    "explanation": "Corrosion is reduced by making the structure the cathode. Sacrificial anodes or impressed current may be used. This protects metal tanks, piping, or structures."
  },
  {
    "id": 70,
    "category": "V1 - Install motor starters and controls",
    "question": "A contactor is different from a manual switch because a contactor is:",
    "options": [
      "Electrically operated by a coil",
      "Always operated by hand only",
      "A grounding electrode",
      "A transformer core"
    ],
    "answer": 0,
    "explanation": "A contactor uses an electromagnetic coil. The coil moves power contacts. This allows remote or automatic motor control."
  },
  {
    "id": 71,
    "category": "V1 - Install motor starters and controls",
    "question": "A motor control circuit uses a normally closed overload contact in series with the coil. What happens if the motor overloads?",
    "options": [
      "The overload contact opens and drops out the coil",
      "The motor speeds up",
      "The coil voltage doubles",
      "The start button becomes normally closed"
    ],
    "answer": 0,
    "explanation": "Overload contacts open on overload condition. Opening the control circuit de-energizes the contactor coil. This stops the motor."
  },
  {
    "id": 72,
    "category": "V1 - Install motor starters and controls",
    "question": "A three-wire motor control circuit uses start, stop, and seal-in contact. What is the purpose of the seal-in contact?",
    "options": [
      "Maintain coil power after start button is released",
      "Increase motor horsepower",
      "Replace the stop button",
      "Convert AC to DC"
    ],
    "answer": 0,
    "explanation": "The start button is momentary. A seal-in contact closes when the contactor energizes. It holds the circuit until stop or overload opens it."
  },
  {
    "id": 73,
    "category": "V1 - Install motor starters and controls",
    "question": "A stop button is normally closed because:",
    "options": [
      "A broken wire or open contact will stop the motor",
      "It must only work when shorted",
      "It prevents overload protection",
      "It converts control voltage to line voltage"
    ],
    "answer": 0,
    "explanation": "Normally closed stop buttons are fail-safe. Opening the control circuit stops the motor. This is safer than a normally open stop circuit."
  },
  {
    "id": 74,
    "category": "V1 - Install motor starters and controls",
    "question": "A start button is normally open because:",
    "options": [
      "It closes only when pressed to energize the coil",
      "It must stop the motor when pressed",
      "It carries motor full-load current directly always",
      "It replaces overload protection"
    ],
    "answer": 0,
    "explanation": "The start button is momentary normally open. Pressing it completes the control circuit. The seal-in contact then holds the coil energized."
  },
  {
    "id": 75,
    "category": "V1 - Install motor starters and controls",
    "question": "Motor overload devices are selected mainly from:",
    "options": [
      "Motor full-load current/nameplate data",
      "Wall colour",
      "Conduit bend radius only",
      "Lighting level"
    ],
    "answer": 0,
    "explanation": "Overload protection must match the motor. Nameplate current is used for correct setting or heater selection. Wrong overload sizing can fail to protect the motor."
  },
  {
    "id": 76,
    "category": "V2 - Maintain motor starters and controls",
    "question": "A motor starter pulls in, but the motor does not run. What should be checked first?",
    "options": [
      "Line voltage, overload status, and power contacts",
      "Paint on the enclosure",
      "Thermostat location only",
      "Data cable bend radius"
    ],
    "answer": 0,
    "explanation": "The coil may energize while power circuit has a fault. Open overloads, missing phase, or bad contacts can stop motor operation. Troubleshoot control and power circuits separately."
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
  sectionTitle: "Level 2 Practice Exam – Set 2 ",
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
