const electricianLevel3Set2HardestQuestions = [
  {
    "id": 1,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A balanced three-phase load is supplied by 600 V and draws 40 A at 0.82 power factor. What is the true power?",
    "options": [
      "19.7 kW",
      "34.1 kW",
      "41.6 kW",
      "56.9 kW"
    ],
    "answer": 1,
    "explanation": "Use P = √3 × EL × IL × pf. P = 1.732 × 600 × 40 × 0.82. The true power is approximately 34.1 kW."
  },
  {
    "id": 2,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 45 kVA three-phase load is connected to 208 V. What is the approximate line current?",
    "options": [
      "72 A",
      "100 A",
      "125 A",
      "216 A"
    ],
    "answer": 2,
    "explanation": "Use I = VA ÷ √3 ÷ V. I = 45,000 ÷ 1.732 ÷ 208. The line current is approximately 125 A."
  },
  {
    "id": 3,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 600Y/347 V system has a balanced lighting load of 18 A per phase. What is the neutral current?",
    "options": [
      "0 A",
      "18 A",
      "31 A",
      "54 A"
    ],
    "answer": 0,
    "explanation": "Balanced three-phase currents cancel in the neutral. Each phase current is equal and 120° apart. The vector sum is zero."
  },
  {
    "id": 4,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "In a wye-connected load, line current is 16 A. What is phase current?",
    "options": [
      "9.2 A",
      "16 A",
      "27.7 A",
      "48 A"
    ],
    "answer": 1,
    "explanation": "In wye, line current equals phase current. The √3 relationship applies to voltage, not current. So phase current is 16 A."
  },
  {
    "id": 5,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "In a delta-connected load, phase current is 12 A. What is line current?",
    "options": [
      "6.9 A",
      "12 A",
      "20.8 A",
      "36 A"
    ],
    "answer": 2,
    "explanation": "In delta, IL = √3 × IP. IL = 1.732 × 12. Line current is approximately 20.8 A."
  },
  {
    "id": 6,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A three-phase load has 50 kVA apparent power and 40 kW true power. What is the reactive power?",
    "options": [
      "10 kVAR",
      "20 kVAR",
      "30 kVAR",
      "90 kVAR"
    ],
    "answer": 2,
    "explanation": "Use Q = √(S² − P²). Q = √(50² − 40²) = √900. Reactive power is 30 kVAR."
  },
  {
    "id": 7,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 30 kW three-phase load operates at 0.75 power factor. What is its apparent power?",
    "options": [
      "22.5 kVA",
      "30 kVA",
      "40 kVA",
      "52.5 kVA"
    ],
    "answer": 2,
    "explanation": "Use S = P ÷ pf. S = 30 ÷ 0.75. Apparent power is 40 kVA."
  },
  {
    "id": 8,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 208 V three-phase circuit draws 60 A. What is apparent power?",
    "options": [
      "12.5 kVA",
      "21.6 kVA",
      "36.0 kVA",
      "62.4 kVA"
    ],
    "answer": 1,
    "explanation": "Use S = √3 × EL × IL. S = 1.732 × 208 × 60. The answer is approximately 21.6 kVA."
  },
  {
    "id": 9,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "In a 208Y/120 V system, a line-to-line load is connected. What voltage does it receive?",
    "options": [
      "120 V",
      "208 V",
      "240 V",
      "347 V"
    ],
    "answer": 1,
    "explanation": "The first value in 208Y/120 is line-to-line voltage. The second value is line-to-neutral voltage. A line-to-line load receives 208 V."
  },
  {
    "id": 10,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A three-phase motor has currents of 22 A, 23 A, and 35 A. What condition should be suspected?",
    "options": [
      "Balanced operation",
      "Current imbalance",
      "Correct neutral cancellation",
      "Unity power factor only"
    ],
    "answer": 1,
    "explanation": "The phase currents are not close to equal. Imbalance can cause overheating and poor motor operation. Supply voltage, load, and motor condition should be checked."
  },
  {
    "id": 11,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A three-phase motor is single-phasing while running. What is the major risk?",
    "options": [
      "Motor overheating",
      "Improved efficiency",
      "Reduced current in all windings",
      "Perfect balanced torque"
    ],
    "answer": 0,
    "explanation": "Single-phasing causes abnormal current in remaining phases. The motor may continue to run but overheat quickly. Protection should disconnect the motor."
  },
  {
    "id": 12,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A balanced delta load is supplied with 480 V. What is the phase voltage?",
    "options": [
      "277 V",
      "480 V",
      "831 V",
      "240 V"
    ],
    "answer": 1,
    "explanation": "In delta, phase voltage equals line voltage. Each load phase is connected across two lines. Therefore the phase voltage is 480 V."
  },
  {
    "id": 13,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A balanced wye load is supplied with 600 V line-to-line. What is the phase voltage?",
    "options": [
      "208 V",
      "347 V",
      "600 V",
      "1,039 V"
    ],
    "answer": 1,
    "explanation": "In wye, EP = EL ÷ √3. EP = 600 ÷ 1.732. The phase voltage is approximately 347 V."
  },
  {
    "id": 14,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A three-phase load has 72 kW and 90 kVA. What is the power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.80",
      "1.25"
    ],
    "answer": 2,
    "explanation": "Power factor equals true power divided by apparent power. pf = 72 ÷ 90. The power factor is 0.80."
  },
  {
    "id": 15,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "Which condition normally causes a three-phase motor to reverse direction?",
    "options": [
      "Lowering voltage equally on all phases",
      "Reversing any two phase conductors",
      "Increasing conductor size",
      "Adding a neutral conductor"
    ],
    "answer": 1,
    "explanation": "Three-phase motor direction depends on phase sequence. Swapping any two lines reverses phase rotation. This must be done with the circuit safely de-energized."
  },
  {
    "id": 16,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 600 V three-phase load consumes 18 kW at 0.75 power factor. What is line current?",
    "options": [
      "17.3 A",
      "23.1 A",
      "34.6 A",
      "40 A"
    ],
    "answer": 1,
    "explanation": "Use I = P ÷ (√3 × E × pf). I = 18,000 ÷ (1.732 × 600 × 0.75). Line current is approximately 23.1 A."
  },
  {
    "id": 17,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "What happens to line current if power factor is corrected from 0.70 to 0.95 for the same kW load?",
    "options": [
      "It increases",
      "It decreases",
      "It becomes DC",
      "It becomes zero"
    ],
    "answer": 1,
    "explanation": "For the same true power, higher power factor requires less apparent power. Lower apparent power means lower line current. This reduces losses and voltage drop."
  },
  {
    "id": 18,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A three-phase system has unequal line-to-neutral loads. What will most likely happen?",
    "options": [
      "Neutral current will flow",
      "Neutral current is always zero",
      "Frequency becomes 120 Hz",
      "Line voltage becomes DC"
    ],
    "answer": 0,
    "explanation": "Unbalanced wye loads do not cancel perfectly. The imbalance returns through the neutral. Neutral current depends on the vector sum of phase currents. --- ## A6. Analyze Electronic Circuits — 6 Questions"
  },
  {
    "id": 19,
    "category": "A6 — Analyze electronic circuits",
    "question": "A TRIAC is preferred over an SCR for many AC control circuits because it:",
    "options": [
      "Conducts in both directions when triggered",
      "Conducts only DC",
      "Has no gate terminal",
      "Cannot control power"
    ],
    "answer": 0,
    "explanation": "A TRIAC can control both halves of an AC waveform. An SCR conducts mainly in one direction. TRIACs are common in dimmers and AC controls."
  },
  {
    "id": 20,
    "category": "A6 — Analyze electronic circuits",
    "question": "An SCR is triggered by which terminal?",
    "options": [
      "Gate",
      "Neutral",
      "Bond",
      "Drain only"
    ],
    "answer": 0,
    "explanation": "An SCR has an anode, cathode, and gate. A gate signal turns the SCR on. It remains on until current drops below holding current."
  },
  {
    "id": 21,
    "category": "A6 — Analyze electronic circuits",
    "question": "A MOSFET is commonly controlled by voltage applied to its:",
    "options": [
      "Gate",
      "Emitter",
      "Neutral",
      "Transformer core"
    ],
    "answer": 0,
    "explanation": "MOSFET means metal-oxide semiconductor field-effect transistor. Its gate voltage controls conduction. It is widely used in electronic switching."
  },
  {
    "id": 22,
    "category": "A6 — Analyze electronic circuits",
    "question": "A DIAC is often used with a TRIAC to:",
    "options": [
      "Help trigger it at a set voltage",
      "Step down service voltage",
      "Measure current transformer ratio",
      "Bond metal raceways"
    ],
    "answer": 0,
    "explanation": "A DIAC conducts after breakover voltage is reached. It can provide a sharp trigger pulse. This is useful in TRIAC phase-control circuits."
  },
  {
    "id": 23,
    "category": "A6 — Analyze electronic circuits",
    "question": "In a VFD input section, rectifiers are used to create:",
    "options": [
      "DC bus voltage",
      "Ground fault path",
      "Mechanical torque directly",
      "Neutral current only"
    ],
    "answer": 0,
    "explanation": "The rectifier converts AC input to DC. That DC becomes the drive’s DC bus. The inverter section then creates variable-frequency output."
  },
  {
    "id": 24,
    "category": "A6 — Analyze electronic circuits",
    "question": "An IGBT in a drive fails shorted. What may happen?",
    "options": [
      "Overcurrent or drive fault",
      "Perfect normal operation",
      "Lower motor voltage always",
      "No possible damage"
    ],
    "answer": 0,
    "explanation": "An IGBT is a power switching device. A shorted device can create abnormal current paths. The drive protection may trip or components may fail. --- # C. Use Tools and Equipment — 2 Questions"
  },
  {
    "id": 25,
    "category": "C4 — Use measuring and testing equipment",
    "question": "You are checking phase rotation before connecting a three-phase motor. Which instrument is most suitable?",
    "options": [
      "Phase rotation meter",
      "Megohmmeter only",
      "Non-contact thermometer only",
      "Tape measure"
    ],
    "answer": 0,
    "explanation": "A phase rotation meter identifies phase sequence. Correct sequence determines motor direction. This helps prevent equipment running backward."
  },
  {
    "id": 26,
    "category": "C4 — Use measuring and testing equipment",
    "question": "A motor has been disconnected for insulation testing. Which test instrument is normally used?",
    "options": [
      "Megohmmeter",
      "Clamp-on ammeter only",
      "Spirit level",
      "Tachometer only"
    ],
    "answer": 0,
    "explanation": "A megohmmeter tests insulation resistance. It applies a test voltage to isolated equipment. Electronic devices must be protected before testing. --- # D. Organize Work — 5 Questions"
  },
  {
    "id": 27,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A drawing shows “MCC-2 bucket 4A.” What is most likely being identified?",
    "options": [
      "A section or starter location in a motor control centre",
      "A lighting fixture colour",
      "A grounding electrode length",
      "A conduit bend angle"
    ],
    "answer": 0,
    "explanation": "MCC means motor control centre. Buckets contain starters, feeders, or controls. The label helps locate the correct equipment."
  },
  {
    "id": 28,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A generator drawing shows “ATS” between utility and generator. What does ATS normally mean?",
    "options": [
      "Automatic transfer switch",
      "Alternating transformer sensor",
      "Ampere test socket",
      "Auxiliary thermostat switch"
    ],
    "answer": 0,
    "explanation": "An ATS transfers load between normal and emergency sources. It prevents improper backfeed when installed correctly. Generator systems commonly use transfer equipment."
  },
  {
    "id": 29,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A transformer schedule lists “75 kVA, 600-208Y/120 V, Z = 5%.” What does Z indicate?",
    "options": [
      "Transformer impedance",
      "Building height",
      "Ground rod resistance only",
      "Cable colour"
    ],
    "answer": 0,
    "explanation": "Z on transformer schedules usually means impedance. Impedance affects voltage regulation and fault current. It is important for protection coordination."
  },
  {
    "id": 30,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A motor nameplate shows “TEFC.” What information does this provide?",
    "options": [
      "Motor enclosure/cooling type",
      "Transformer kVA only",
      "Cable ampacity only",
      "Fuse interrupting rating only"
    ],
    "answer": 0,
    "explanation": "TEFC means totally enclosed fan cooled. It describes motor enclosure and cooling method. This helps confirm suitability for the environment."
  },
  {
    "id": 31,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A specification requires VFD-rated cable for a drive-fed motor. What should be done?",
    "options": [
      "Use the specified cable or obtain approved substitution",
      "Use any cable with same colour",
      "Ignore the specification",
      "Replace the VFD with a switch only"
    ],
    "answer": 0,
    "explanation": "Drive-fed motors can create electrical noise and voltage stress. Specifications may require cable suited for VFD output. Substitutions need approval. --- # H. Consumer/Supply Services and Metering — 3 Questions ## H2. Install Three-Phase Consumer/Supply Services and Metering Equipment — 2 Questions"
  },
  {
    "id": 32,
    "category": "H2 — Install three-phase consumer/supply services and metering equipment",
    "question": "A 208Y/120 V service supplies receptacles line-to-neutral. What voltage is supplied to the receptacles?",
    "options": [
      "120 V",
      "208 V",
      "240 V",
      "347 V"
    ],
    "answer": 0,
    "explanation": "In 208Y/120 V, line-to-neutral voltage is 120 V. Line-to-line voltage is 208 V. Receptacles are commonly connected line-to-neutral."
  },
  {
    "id": 33,
    "category": "H2 — Install three-phase consumer/supply services and metering equipment",
    "question": "Why must CT polarity be observed in metering circuits?",
    "options": [
      "Incorrect polarity can cause incorrect metering readings",
      "It changes conduit size",
      "It removes bonding requirements",
      "It prevents all voltage drop"
    ],
    "answer": 0,
    "explanation": "Current transformers have polarity markings. Incorrect polarity can reverse meter current reference. This may cause inaccurate energy measurement. --- ## H4. Maintain Three-Phase Services and Metering Equipment — 1 Question"
  },
  {
    "id": 34,
    "category": "H4 — Maintain three-phase services and metering equipment",
    "question": "A CT secondary circuit is found open while the primary is energized. Why is this dangerous?",
    "options": [
      "High voltage can develop on the CT secondary",
      "Current becomes zero in the service",
      "The transformer becomes a fuse",
      "The neutral becomes grounded automatically"
    ],
    "answer": 0,
    "explanation": "CT secondaries should not be opened while energized. Dangerous voltage can appear across the open secondary. CT circuits must be handled using proper procedures. --- # J. Low Voltage Distribution Systems — 3 Questions"
  },
  {
    "id": 35,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "A 600 V panel has an available fault current higher than its rating. What is the problem?",
    "options": [
      "Equipment may fail dangerously during a fault",
      "It will improve power factor",
      "It will reduce voltage drop",
      "It means the panel is oversized safely"
    ],
    "answer": 0,
    "explanation": "Equipment must withstand and interrupt available fault current. Underrated equipment can rupture or arc violently. Interrupting and withstand ratings must be checked."
  },
  {
    "id": 36,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "A panel has all large single-phase loads on the same phase pair. What is the concern?",
    "options": [
      "Phase imbalance",
      "Better voltage regulation always",
      "No current flow",
      "DC output"
    ],
    "answer": 0,
    "explanation": "Uneven load placement can overload some phases. Balanced distribution improves system performance. Imbalance can cause heating and voltage problems."
  },
  {
    "id": 37,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "Selective coordination is mainly concerned with:",
    "options": [
      "Opening the nearest upstream protective device to the fault",
      "Making all breakers trip at the same time",
      "Increasing neutral current",
      "Reducing conductor insulation"
    ],
    "answer": 0,
    "explanation": "Coordination limits outages to the affected circuit. The closest protective device should operate first. This improves system reliability. --- # L. Bonding, Grounding and Ground Fault Detection — 2 Questions"
  },
  {
    "id": 38,
    "category": "L1 — Install grounding and bonding systems",
    "question": "A bonding conductor is undersized or loose on a motor frame. What is the main hazard?",
    "options": [
      "Fault current may not clear properly",
      "Motor speed becomes synchronous",
      "Voltage becomes exactly zero",
      "Current becomes perfectly balanced"
    ],
    "answer": 0,
    "explanation": "Bonding must carry enough fault current. A poor bonding path may leave metal parts energized. This creates shock and fire hazards."
  },
  {
    "id": 39,
    "category": "L3 — Install ground fault detection systems",
    "question": "A ground fault detection relay trips when leakage exceeds its setpoint. What is its function?",
    "options": [
      "Detect ground fault current and signal or disconnect",
      "Increase motor horsepower",
      "Convert DC to AC",
      "Measure room temperature"
    ],
    "answer": 0,
    "explanation": "Ground fault detection monitors current leaving the intended path. Depending on design, it may alarm or trip. It protects equipment and personnel. --- # M. Power Generation Systems — 7 Questions ## M1. Install AC Generating Systems — 4 Questions"
  },
  {
    "id": 40,
    "category": "M1 — Install AC generating systems",
    "question": "A 4-pole AC generator must produce 60 Hz. What speed is required?",
    "options": [
      "900 rpm",
      "1,200 rpm",
      "1,800 rpm",
      "3,600 rpm"
    ],
    "answer": 2,
    "explanation": "Use N = 120f ÷ P. N = 120 × 60 ÷ 4. The required speed is 1,800 rpm."
  },
  {
    "id": 41,
    "category": "M1 — Install AC generating systems",
    "question": "A standby generator is connected without proper transfer equipment. What is the major danger?",
    "options": [
      "Backfeed into utility lines",
      "Improved voltage stability",
      "Reduced fault current always",
      "No load current"
    ],
    "answer": 0,
    "explanation": "Backfeed can energize utility conductors unexpectedly. This can kill workers and damage equipment. Transfer equipment is required to isolate sources."
  },
  {
    "id": 42,
    "category": "M1 — Install AC generating systems",
    "question": "A generator nameplate says 30 kVA, 600 V, three-phase. What is approximate full-load current?",
    "options": [
      "17 A",
      "29 A",
      "50 A",
      "86 A"
    ],
    "answer": 1,
    "explanation": "Use I = VA ÷ √3 ÷ V. I = 30,000 ÷ 1.732 ÷ 600. The current is approximately 29 A."
  },
  {
    "id": 43,
    "category": "M1 — Install AC generating systems",
    "question": "Before paralleling an AC generator with another source, what must match?",
    "options": [
      "Voltage, frequency, phase sequence, and phase angle",
      "Paint colour and enclosure size",
      "Ground rod length only",
      "Conduit fill only"
    ],
    "answer": 0,
    "explanation": "Paralleling requires synchronization. Mismatch can cause severe current and mechanical stress. Generator controls must confirm conditions before closing. --- ## M2. Maintain AC Generating Systems — 1 Question"
  },
  {
    "id": 44,
    "category": "M2 — Maintain AC generating systems",
    "question": "An AC generator voltage is correct at no load but drops excessively under load. What should be checked?",
    "options": [
      "Voltage regulation, load size, and connections",
      "Paint type",
      "Floor level only",
      "Lamp colour temperature"
    ],
    "answer": 0,
    "explanation": "Excessive voltage drop may indicate overload or poor regulation. Loose connections can also cause voltage drop. Load current and generator condition should be verified. --- ## M3. Install DC Generating Systems — 1 Question"
  },
  {
    "id": 45,
    "category": "M3 — Install DC generating systems",
    "question": "A DC generator is connected to a battery bank. What must be controlled to prevent reverse current?",
    "options": [
      "Proper polarity and reverse-current protection",
      "AC phase rotation",
      "Neutral balancing only",
      "Power factor correction only"
    ],
    "answer": 0,
    "explanation": "Batteries can feed current back into a generator. Reverse current can damage equipment. Polarity and protection must be verified. --- ## M4. Maintain DC Generating Systems — 1 Question"
  },
  {
    "id": 46,
    "category": "M4 — Maintain DC generating systems",
    "question": "A DC generator output fluctuates badly. What may be checked?",
    "options": [
      "Brushes, commutator, speed, and field circuit",
      "Ceiling grid",
      "Data cable twist rate only",
      "Exit sign battery only"
    ],
    "answer": 0,
    "explanation": "DC generator output depends on field strength and speed. Brush and commutator problems can cause unstable output. Connections and load should also be checked. --- # P. Transformers — 13 Questions ## P3. Install Low-Voltage Three-Phase Transformers — 10 Questions"
  },
  {
    "id": 47,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A 112.5 kVA, 600 V three-phase transformer primary current is closest to:",
    "options": [
      "62 A",
      "108 A",
      "187 A",
      "325 A"
    ],
    "answer": 1,
    "explanation": "Use I = 112,500 ÷ (√3 × 600). I = 112,500 ÷ 1,039. The current is about 108 A."
  },
  {
    "id": 48,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A 75 kVA transformer has a 208 V three-phase secondary. What is secondary full-load current?",
    "options": [
      "72 A",
      "125 A",
      "208 A",
      "480 A"
    ],
    "answer": 2,
    "explanation": "Use I = 75,000 ÷ (√3 × 208). I = 75,000 ÷ 360. The current is approximately 208 A."
  },
  {
    "id": 49,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer secondary is 600Y/347 V. What voltage is available line-to-line?",
    "options": [
      "120 V",
      "208 V",
      "347 V",
      "600 V"
    ],
    "answer": 3,
    "explanation": "In 600Y/347 V, the first value is line-to-line voltage. The second value is line-to-neutral voltage. Therefore line-to-line voltage is 600 V."
  },
  {
    "id": 50,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer secondary is delta-connected. What is normally true?",
    "options": [
      "Phase voltage equals line voltage",
      "Line-to-neutral voltage is always available",
      "Phase current equals line current",
      "Neutral current is always required"
    ],
    "answer": 0,
    "explanation": "In delta, each winding is connected across two lines. The winding voltage equals line voltage. Line current is √3 times phase current."
  },
  {
    "id": 51,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A three-phase transformer bank has one transformer removed and still supplies reduced load. This arrangement is called:",
    "options": [
      "Open delta",
      "Closed wye only",
      "Grounded neutral only",
      "Series boost only"
    ],
    "answer": 0,
    "explanation": "Open delta uses two transformers to supply three-phase load. Capacity is reduced compared with closed delta. It can be used temporarily or for smaller loads."
  },
  {
    "id": 52,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "Why is transformer impedance important during short-circuit calculations?",
    "options": [
      "It limits available fault current",
      "It changes paint colour",
      "It removes the need for fuses",
      "It makes voltage DC"
    ],
    "answer": 0,
    "explanation": "Transformer impedance restricts short-circuit current. Lower impedance usually means higher fault current. Fault current affects equipment ratings."
  },
  {
    "id": 53,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer has high temperature rise during normal load. Which condition may contribute?",
    "options": [
      "Poor ventilation or overload",
      "Correct operation always",
      "Too much lighting only",
      "Low conduit fill"
    ],
    "answer": 0,
    "explanation": "Transformers produce heat during operation. Overload and blocked cooling increase temperature. Overheating damages insulation."
  },
  {
    "id": 54,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A delta primary and wye secondary transformer is often used because the secondary can provide:",
    "options": [
      "A neutral point",
      "DC output only",
      "No grounding reference",
      "Single-phase only"
    ],
    "answer": 0,
    "explanation": "A wye secondary has a common point. That point can be grounded and used as neutral. This allows line-to-neutral loads."
  },
  {
    "id": 55,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer is connected to the wrong primary tap for the actual supply voltage. What can happen?",
    "options": [
      "Secondary voltage may be incorrect",
      "Fault current becomes zero",
      "Frequency doubles",
      "Windings become non-magnetic"
    ],
    "answer": 0,
    "explanation": "Tap settings adjust the voltage ratio. Wrong tap selection changes secondary voltage. Equipment may malfunction or be damaged."
  },
  {
    "id": 56,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer’s kVA rating tells you:",
    "options": [
      "The apparent power capacity",
      "The paint colour",
      "The grounding electrode length",
      "The exact room temperature"
    ],
    "answer": 0,
    "explanation": "Transformers are rated in kVA. kVA includes voltage and current capacity. Loads must not exceed the rating. --- ## P5. Install High-Voltage Transformers — 3 Questions"
  },
  {
    "id": 57,
    "category": "P5 — Install high-voltage transformers",
    "question": "Why is grounding temporary grounds important after verifying high-voltage equipment de-energized?",
    "options": [
      "To control induced or stored voltage",
      "To increase output voltage",
      "To improve paint adhesion",
      "To make equipment lighter"
    ],
    "answer": 0,
    "explanation": "High-voltage equipment may have induced or stored charge. Temporary grounding helps keep it at earth potential. Proper procedures must be followed."
  },
  {
    "id": 58,
    "category": "P5 — Install high-voltage transformers",
    "question": "A high-voltage transformer area lacks warning signs and barriers. What is the concern?",
    "options": [
      "Unauthorized access to dangerous equipment",
      "Low lamp brightness only",
      "Reduced thermostat accuracy",
      "Higher power factor"
    ],
    "answer": 0,
    "explanation": "High voltage presents severe shock and arc hazards. Barriers and signs restrict access. They protect workers and the public."
  },
  {
    "id": 59,
    "category": "P5 — Install high-voltage transformers",
    "question": "Before energizing a high-voltage transformer, what must be confirmed?",
    "options": [
      "Correct connections, clearances, grounding, and testing",
      "Wall colour and ceiling height",
      "Tool belt weight",
      "Lunch schedule"
    ],
    "answer": 0,
    "explanation": "High-voltage equipment must be verified before energizing. Incorrect connections or clearances can cause dangerous failure. Testing and inspection reduce risk. --- # R. Branch Circuitry — 2 Questions"
  },
  {
    "id": 60,
    "category": "R2 — Install wiring devices",
    "question": "A receptacle supplied from a 347 V lighting circuit is found in a general-use location. What is the concern?",
    "options": [
      "Receptacle voltage and application may be unsuitable",
      "Voltage is always 120 V at any receptacle",
      "Bonding is unnecessary",
      "It automatically becomes GFCI protected"
    ],
    "answer": 0,
    "explanation": "Devices must match voltage and intended use. Using the wrong voltage receptacle can be dangerous. Ratings and code requirements must be checked."
  },
  {
    "id": 61,
    "category": "R2 — Install wiring devices",
    "question": "A device yoke is metal and mounted in a non-metallic box. Why may bonding still matter?",
    "options": [
      "Exposed metal parts may need bonding",
      "Plastic boxes always carry fault current",
      "Neutral replaces bonding",
      "Voltage disappears automatically"
    ],
    "answer": 0,
    "explanation": "Metal device parts can become energized during faults. Bonding provides a fault-current path. Device bonding must follow the wiring method and code. --- # V. Motor Starters and Controls — 5 Questions ## V1. Install Motor Starters and Controls — 4 Questions"
  },
  {
    "id": 62,
    "category": "V1 — Install motor starters and controls",
    "question": "A 120 V contactor coil is installed on a 24 V control circuit. What is likely?",
    "options": [
      "The contactor will not pull in properly",
      "The motor will run faster",
      "The coil will always overheat instantly",
      "The overload becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "The coil voltage must match the control circuit. A 120 V coil will not operate correctly on 24 V. Always verify coil nameplate voltage."
  },
  {
    "id": 63,
    "category": "V1 — Install motor starters and controls",
    "question": "A motor starter has overload contacts wired in parallel with the coil instead of series. What is wrong?",
    "options": [
      "Overload may not stop the motor",
      "The motor speed becomes synchronous",
      "The stop button becomes safer",
      "The circuit becomes three-phase"
    ],
    "answer": 0,
    "explanation": "Overload contacts should open the coil circuit. They are normally wired in series with the coil. Wrong wiring defeats motor protection."
  },
  {
    "id": 64,
    "category": "V1 — Install motor starters and controls",
    "question": "A control transformer supplies several starter coils. What must be checked?",
    "options": [
      "Total VA load versus transformer rating",
      "Paint colour of enclosures",
      "Conduit bend angle only",
      "Fixture lumen output"
    ],
    "answer": 0,
    "explanation": "Coils draw VA from the control transformer. The total connected VA must not exceed transformer rating. Undersizing causes voltage drop and malfunction."
  },
  {
    "id": 65,
    "category": "V1 — Install motor starters and controls",
    "question": "An auxiliary contact changes state when the contactor operates. It is often used for:",
    "options": [
      "Seal-in or interlock functions",
      "Ground rod testing only",
      "Transformer cooling only",
      "Cable support only"
    ],
    "answer": 0,
    "explanation": "Auxiliary contacts follow contactor operation. They can maintain coil power or prevent conflicting operations. They are common in motor control circuits. --- ## V2. Maintain Motor Starters and Controls — 1 Question"
  },
  {
    "id": 66,
    "category": "V2 — Maintain motor starters and controls",
    "question": "A starter coil overheats and smells burnt. What should be checked?",
    "options": [
      "Coil voltage rating, applied voltage, and duty condition",
      "Wall finish",
      "Lamp colour",
      "Conduit paint"
    ],
    "answer": 0,
    "explanation": "Wrong voltage or continuous overvoltage can overheat coils. Mechanical binding can also prevent proper seating. The cause should be found before replacement. --- # W. Drives — 5 Questions"
  },
  {
    "id": 67,
    "category": "W1 — Install drives",
    "question": "A VFD is used on a pump motor. Reducing frequency will generally:",
    "options": [
      "Reduce motor speed",
      "Increase speed automatically",
      "Convert the motor to DC",
      "Remove torque completely in all cases"
    ],
    "answer": 0,
    "explanation": "AC motor speed depends largely on supply frequency. A VFD changes output frequency. Lower frequency usually reduces speed."
  },
  {
    "id": 68,
    "category": "W1 — Install drives",
    "question": "A VFD output waveform is created by rapid switching of power devices. This method is called:",
    "options": [
      "PWM",
      "CT metering",
      "Ground fault detection",
      "Eddy current braking only"
    ],
    "answer": 0,
    "explanation": "PWM means pulse-width modulation. It switches output devices rapidly. The motor sees a controlled variable-frequency output."
  },
  {
    "id": 69,
    "category": "W1 — Install drives",
    "question": "Why should the motor be rated suitable for inverter duty when used with a VFD?",
    "options": [
      "VFD output can stress motor insulation and heating",
      "VFDs remove all voltage",
      "Motors on drives require no cooling",
      "Inverter duty means DC only"
    ],
    "answer": 0,
    "explanation": "Drive outputs contain fast voltage pulses. These pulses can stress insulation and bearings. Inverter-duty motors are designed for this service."
  },
  {
    "id": 70,
    "category": "W1 — Install drives",
    "question": "A drive manual requires shielded cable and 360° termination. Why?",
    "options": [
      "To reduce electromagnetic interference",
      "To increase motor horsepower rating",
      "To remove overload protection",
      "To make conductors smaller automatically"
    ],
    "answer": 0,
    "explanation": "VFDs can create high-frequency noise. Shielded cable and proper termination control emissions. This protects nearby equipment and controls."
  },
  {
    "id": 71,
    "category": "W1 — Install drives",
    "question": "A VFD trips on overcurrent during acceleration. What adjustment may help if the load is normal?",
    "options": [
      "Increase acceleration time",
      "Remove grounding",
      "Reverse the neutral",
      "Short the output terminals"
    ],
    "answer": 0,
    "explanation": "Fast acceleration demands high motor current. Increasing ramp time reduces current demand. Mechanical load problems should also be checked. --- # Y. Motors — 12 Questions ## Y1. Install AC Motors — 9 Questions"
  },
  {
    "id": 72,
    "category": "Y1 — Install AC motors",
    "question": "A 6-pole induction motor operates on 60 Hz. What is synchronous speed?",
    "options": [
      "600 rpm",
      "900 rpm",
      "1,200 rpm",
      "1,800 rpm"
    ],
    "answer": 2,
    "explanation": "Use Ns = 120f ÷ P. Ns = 120 × 60 ÷ 6. Synchronous speed is 1,200 rpm."
  },
  {
    "id": 73,
    "category": "Y1 — Install AC motors",
    "question": "A motor has synchronous speed of 1,800 rpm and rotor speed of 1,740 rpm. What is slip percentage?",
    "options": [
      "1.7%",
      "3.3%",
      "6.0%",
      "60%"
    ],
    "answer": 1,
    "explanation": "Slip % = (Ns − Nr) ÷ Ns × 100. (1800 − 1740) ÷ 1800 × 100 = 3.3%. This is typical for an induction motor under load."
  },
  {
    "id": 74,
    "category": "Y1 — Install AC motors",
    "question": "A squirrel-cage induction motor develops torque because:",
    "options": [
      "Rotor currents interact with stator magnetic field",
      "The rotor is connected to DC supply directly",
      "The neutral carries full torque",
      "Bearings create voltage"
    ],
    "answer": 0,
    "explanation": "The rotating stator field induces rotor current. Rotor current creates its own magnetic field. The field interaction produces torque."
  },
  {
    "id": 75,
    "category": "Y1 — Install AC motors",
    "question": "A 3-phase motor nameplate says 575 V. It is connected to 208 V. What is likely?",
    "options": [
      "Motor will not produce rated torque and may overheat",
      "Motor will run perfectly at full load",
      "Speed doubles",
      "Power factor becomes zero only"
    ],
    "answer": 0,
    "explanation": "Motor voltage must match nameplate rating. Low voltage causes high current and poor torque. This can damage the motor."
  },
  {
    "id": 76,
    "category": "Y1 — Install AC motors",
    "question": "A motor enclosure marked TEFC is best described as:",
    "options": [
      "Totally enclosed fan cooled",
      "Totally external field controlled",
      "Thermal emergency fuse control",
      "Transformer energized field coil"
    ],
    "answer": 0,
    "explanation": "TEFC means totally enclosed fan cooled. It limits air exchange with the motor interior. An external fan helps cool the frame."
  },
  {
    "id": 77,
    "category": "Y1 — Install AC motors",
    "question": "A motor is installed in a dusty area. Which enclosure type is generally more suitable than open drip-proof?",
    "options": [
      "Totally enclosed type",
      "Open frame only",
      "Bare winding type",
      "No enclosure"
    ],
    "answer": 0,
    "explanation": "Dust can enter open motors and cause failure. Totally enclosed motors better protect internal parts. The exact enclosure must suit the environment."
  },
  {
    "id": 78,
    "category": "Y1 — Install AC motors",
    "question": "A motor draws locked-rotor current when:",
    "options": [
      "Rotor is not turning while energized",
      "Motor is running at no load",
      "Motor is disconnected",
      "Supply frequency is zero only"
    ],
    "answer": 0,
    "explanation": "Locked rotor means the motor cannot rotate. Current is very high because counter effects are low. Protection must clear this condition."
  },
  {
    "id": 79,
    "category": "Y1 — Install AC motors",
    "question": "A motor coupling is misaligned. What can result?",
    "options": [
      "Bearing damage and overheating",
      "Better efficiency always",
      "Lower current in all cases",
      "Perfect mechanical operation"
    ],
    "answer": 0,
    "explanation": "Misalignment causes mechanical stress. Bearings, shafts, and loads can overheat or fail. Mechanical checks are part of motor installation."
  },
  {
    "id": 80,
    "category": "Y1 — Install AC motors",
    "question": "A motor’s service factor indicates:",
    "options": [
      "Allowable overload capability under specified conditions",
      "Exact paint colour",
      "Ground rod resistance",
      "Number of conduit bends"
    ],
    "answer": 0,
    "explanation": "Service factor relates to motor loading capacity. It does not mean the motor should be overloaded continuously. Nameplate and manufacturer data must be followed. --- ## Y2. Maintain AC Motors — 1 Question"
  },
  {
    "id": 81,
    "category": "Y2 — Maintain AC motors",
    "question": "An AC motor insulation test shows very low resistance to ground. What should be done?",
    "options": [
      "Do not energize until fault is investigated",
      "Increase fuse size and start it",
      "Ignore it if motor is clean",
      "Reverse two phases only"
    ],
    "answer": 0,
    "explanation": "Low insulation resistance indicates possible winding breakdown or moisture. Energizing may cause shock, damage, or fault. The motor should be dried, repaired, or replaced as required. --- ## Y3. Install DC Motors — 2 Questions"
  },
  {
    "id": 82,
    "category": "Y3 — Install DC motors",
    "question": "For a DC motor, reversing both armature and field polarity at the same time will usually:",
    "options": [
      "Keep the same rotation direction",
      "Always stop the motor",
      "Convert it to AC",
      "Eliminate torque"
    ],
    "answer": 0,
    "explanation": "DC motor direction depends on the relationship of field and armature current. Reversing both keeps the same relative direction. Reversing only one usually reverses rotation."
  },
  {
    "id": 83,
    "category": "Y3 — Install DC motors",
    "question": "A DC motor controller output must be checked for:",
    "options": [
      "Correct polarity and voltage",
      "Phase sequence only",
      "Neutral current only",
      "Transformer impedance only"
    ],
    "answer": 0,
    "explanation": "DC motors depend on polarity and voltage. Wrong polarity can reverse rotation or damage controls. Voltage must match motor and controller ratings."
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

const shuffledElectricianLevel3PracticeExamQuestions =
  shuffleArray(electricianLevel3Set2HardestQuestions).map(shuffleOptionsForQuestion);

// Compatibility alias for the hint helper used by this template.
const shuffledElectricianLevel1PracticeExamQuestions = shuffledElectricianLevel3PracticeExamQuestions;

createPremiumQuizApp({
  tradeSlug: "electrician",
  tradeTitle: "Electrician",
  sectionTitle: "Common Core Harmonized Level 3 – Set 2 ",
  questionTimeSeconds: 90,
  questions: shuffledElectricianLevel3PracticeExamQuestions
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
