const electricianLevel3Set3ScenarioQuickPrepQuestions = [
  {
    "id": 1,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A plant has a 600 V, 3-phase motor drawing 28 A. What is the apparent power?",
    "options": [
      "16.8 kVA",
      "22.4 kVA",
      "29.1 kVA",
      "48.5 kVA"
    ],
    "answer": 2,
    "explanation": "Use (S = \\sqrt3 × E_L × I_L).\n(1.732 × 600 × 28 = 29,098VA).\nApparent power is about 29.1 kVA."
  },
  {
    "id": 2,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase motor operates at 600 V, 20 A, and 0.86 power factor. What is true power?",
    "options": [
      "10.3 kW",
      "17.9 kW",
      "20.8 kW",
      "29.6 kW"
    ],
    "answer": 1,
    "explanation": "Use (P = \\sqrt3 × E_L × I_L × pf).\n(1.732 × 600 × 20 × 0.86 ≈ 17,876W).\nTrue power is about 17.9 kW."
  },
  {
    "id": 3,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 120/208 V wye panel supplies lighting loads. What is the voltage from line to neutral?",
    "options": [
      "120 V",
      "208 V",
      "240 V",
      "347 V"
    ],
    "answer": 0,
    "explanation": "In a wye system, line-to-neutral is phase voltage.\nA 120/208 V system has 120 V phase voltage.\nLine-to-line voltage is 208 V."
  },
  {
    "id": 4,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 120/208 V wye panel supplies a 208 V load. Where is the load connected?",
    "options": [
      "Line to neutral",
      "Line to line",
      "Neutral to ground only",
      "Ground rod to line"
    ],
    "answer": 1,
    "explanation": "In a 120/208 V wye system, line-to-line voltage is 208 V.\nLine-to-neutral voltage is 120 V.\nA 208 V load connects between two phase conductors."
  },
  {
    "id": 5,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A delta-connected heater has 480 V line voltage. What voltage is across each heater phase?",
    "options": [
      "277 V",
      "347 V",
      "480 V",
      "831 V"
    ],
    "answer": 2,
    "explanation": "In delta, phase voltage equals line voltage.\nEach phase load is connected across two lines.\nTherefore each heater phase has 480 V."
  },
  {
    "id": 6,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A wye-connected motor has 600 V line voltage. What is the phase voltage?",
    "options": [
      "120 V",
      "208 V",
      "347 V",
      "600 V"
    ],
    "answer": 2,
    "explanation": "In wye, (E_P = E_L ÷ \\sqrt3).\n(600 ÷ 1.732 ≈ 347V).\nPhase voltage is about 347 V."
  },
  {
    "id": 7,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A delta motor winding carries 12 A phase current. What is the line current?",
    "options": [
      "6.9 A",
      "12 A",
      "20.8 A",
      "36 A"
    ],
    "answer": 2,
    "explanation": "In delta, (I_L = \\sqrt3 × I_P).\n(12 × 1.732 = 20.8A).\nLine current is higher than phase current."
  },
  {
    "id": 8,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A wye load has 22 A line current. What is phase current?",
    "options": [
      "12.7 A",
      "22 A",
      "38.1 A",
      "66 A"
    ],
    "answer": 1,
    "explanation": "In wye, line current equals phase current.\nEach line conductor feeds one phase.\nSo phase current is 22 A."
  },
  {
    "id": 9,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase system has line currents of 40 A, 40 A, and 40 A. What is the neutral current if perfectly balanced?",
    "options": [
      "0 A",
      "40 A",
      "69.3 A",
      "120 A"
    ],
    "answer": 0,
    "explanation": "Balanced three-phase currents cancel vectorially.\nThe neutral carries only unbalanced current.\nA perfectly balanced load has zero neutral current."
  },
  {
    "id": 10,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A panel has 18 A on A phase, 30 A on B phase, and 21 A on C phase. What condition exists?",
    "options": [
      "Balanced load",
      "Unbalanced load",
      "Open neutral always",
      "Unity power factor always"
    ],
    "answer": 1,
    "explanation": "Balanced loads have equal phase currents.\nUnequal currents indicate imbalance.\nImbalance can cause heating and voltage issues."
  },
  {
    "id": 11,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A motor suddenly hums and slows after one fuse opens on a three-phase feeder. What is happening?",
    "options": [
      "Single-phasing",
      "Normal acceleration",
      "Power factor correction",
      "Balanced operation"
    ],
    "answer": 0,
    "explanation": "Loss of one phase causes single-phasing.\nThe motor may continue running but draws high current.\nThis can quickly overheat the motor."
  },
  {
    "id": 12,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase load has 45 kVA at 600 V. What is line current?",
    "options": [
      "25 A",
      "43.3 A",
      "75 A",
      "129.9 A"
    ],
    "answer": 1,
    "explanation": "Use (I = S ÷ (\\sqrt3 × E_L)).\n(45,000 ÷ (1.732 × 600) ≈ 43.3A).\nLine current is about 43.3 A."
  },
  {
    "id": 13,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase load has 30 kW and 40 kVA. What is power factor?",
    "options": [
      "0.65",
      "0.75",
      "0.85",
      "1.33"
    ],
    "answer": 1,
    "explanation": "Power factor is (P ÷ S).\n(30 ÷ 40 = 0.75).\nThe power factor is 75%."
  },
  {
    "id": 14,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase motor has lagging power factor. What type of load behaviour causes this?",
    "options": [
      "Resistive only",
      "Inductive",
      "Capacitive only",
      "Open circuit"
    ],
    "answer": 1,
    "explanation": "Motors contain windings.\nWindings create inductive reactance.\nInductive loads cause current to lag voltage."
  },
  {
    "id": 15,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A capacitor bank is installed at a motor control centre. What is the main purpose?",
    "options": [
      "Reduce lagging reactive power",
      "Increase slip to 100%",
      "Replace motor overloads",
      "Make DC output"
    ],
    "answer": 0,
    "explanation": "Motors draw lagging reactive power.\nCapacitors supply leading reactive power.\nThis improves power factor."
  },
  {
    "id": 16,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A 3-phase system has 24 kW true power and 18 kVAR reactive power. What is apparent power?",
    "options": [
      "6 kVA",
      "30 kVA",
      "42 kVA",
      "432 kVA"
    ],
    "answer": 1,
    "explanation": "Use (S = \\sqrt{P^2 + Q^2}).\n(\\sqrt{24^2 + 18^2} = \\sqrt{900}).\nApparent power is 30 kVA."
  },
  {
    "id": 17,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A maintenance worker reverses two line leads on a three-phase motor. What happens?",
    "options": [
      "Motor rotation reverses",
      "Motor becomes single-phase",
      "Voltage becomes DC",
      "Neutral current doubles"
    ],
    "answer": 0,
    "explanation": "Three-phase rotation depends on phase sequence.\nSwapping any two phases reverses sequence.\nMotor direction reverses."
  },
  {
    "id": 18,
    "category": "A5 — Analyze three-phase AC circuits",
    "question": "A voltage imbalance is found on a three-phase motor supply. Why is this serious?",
    "options": [
      "It can cause high current imbalance",
      "It makes the motor run cooler",
      "It removes slip",
      "It improves bearing life"
    ],
    "answer": 0,
    "explanation": "Small voltage imbalance can cause large current imbalance.\nHigh current overheats motor windings.\nThe source of imbalance should be corrected."
  },
  {
    "id": 19,
    "category": "A6 — Analyze electronic circuits",
    "question": "A motor drive uses IGBTs. What is their main function inside the drive?",
    "options": [
      "High-speed switching of power",
      "Measuring conduit fill",
      "Supporting the enclosure",
      "Acting as grounding electrodes"
    ],
    "answer": 0,
    "explanation": "IGBTs are power semiconductor switches.\nThey switch the DC bus rapidly.\nThis creates a controlled output waveform."
  },
  {
    "id": 20,
    "category": "A6 — Analyze electronic circuits",
    "question": "A dimmer circuit uses a TRIAC. Why is a TRIAC suitable for AC control?",
    "options": [
      "It conducts in both directions",
      "It conducts only DC",
      "It stores mechanical energy",
      "It measures insulation resistance"
    ],
    "answer": 0,
    "explanation": "A TRIAC is bidirectional.\nIt can control both half-cycles of AC.\nThis makes it useful for AC power control."
  },
  {
    "id": 21,
    "category": "A6 — Analyze electronic circuits",
    "question": "An SCR has forward voltage but does not conduct. What is missing?",
    "options": [
      "Gate trigger",
      "Neutral conductor only",
      "Ground rod",
      "Transformer oil"
    ],
    "answer": 0,
    "explanation": "An SCR needs forward bias and gate triggering.\nAfter triggering, it can latch on.\nCurrent must fall below holding current to turn off."
  },
  {
    "id": 22,
    "category": "A6 — Analyze electronic circuits",
    "question": "A MOSFET on a control board fails after poor handling. What likely damaged it?",
    "options": [
      "Static electricity",
      "Low conduit fill",
      "Ground rod length",
      "Correct torque"
    ],
    "answer": 0,
    "explanation": "MOSFET gates are sensitive to ESD.\nStatic discharge can damage the gate.\nAnti-static handling should be used."
  },
  {
    "id": 23,
    "category": "A6 — Analyze electronic circuits",
    "question": "A VFD output waveform is made using PWM. What does PWM mean?",
    "options": [
      "Pulse-width modulation",
      "Phase wire meter",
      "Power winding module",
      "Protective watt method"
    ],
    "answer": 0,
    "explanation": "PWM varies pulse width.\nThis controls the effective output voltage.\nIt is widely used in drives."
  },
  {
    "id": 24,
    "category": "A6 — Analyze electronic circuits",
    "question": "A DIAC is found in a small AC speed control circuit. What is its usual role?",
    "options": [
      "Triggering a TRIAC",
      "Measuring current",
      "Cooling a motor",
      "Bonding an enclosure"
    ],
    "answer": 0,
    "explanation": "A DIAC conducts at breakover voltage.\nIt can trigger a TRIAC consistently.\nIt is common in phase-control circuits."
  },
  {
    "id": 25,
    "category": "C4 — Use measuring and testing equipment",
    "question": "A motor has been sitting in a damp area before installation. What test should be done before energizing?",
    "options": [
      "Insulation resistance test",
      "Paint thickness test",
      "Receptacle polarity test only",
      "Light level test"
    ],
    "answer": 0,
    "explanation": "Damp windings may have low insulation resistance.\nA megohmmeter can test winding-to-ground insulation.\nDo not energize if readings are unsafe."
  },
  {
    "id": 26,
    "category": "C4 — Use measuring and testing equipment",
    "question": "You are checking a three-phase motor for correct rotation before coupling it to a pump. What tool is useful?",
    "options": [
      "Phase rotation meter",
      "Tape measure only",
      "Continuity buzzer only",
      "Spirit level only"
    ],
    "answer": 0,
    "explanation": "Phase rotation determines motor direction.\nA phase rotation meter identifies sequence.\nThis prevents reverse pump operation."
  },
  {
    "id": 27,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A drawing labels a lineup as “MCC-2.” What equipment is being identified?",
    "options": [
      "Motor control centre",
      "Main cable clamp",
      "Meter current coil",
      "Metal conduit connector"
    ],
    "answer": 0,
    "explanation": "MCC means motor control centre.\nIt contains starters, feeders, and control sections.\nIndustrial motor loads are often fed from MCCs."
  },
  {
    "id": 28,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A transformer schedule lists “600 V Δ primary, 120/208 V Y secondary.” What does this mean?",
    "options": [
      "Delta primary and wye secondary",
      "DC primary and AC secondary",
      "Single-phase only",
      "No neutral available"
    ],
    "answer": 0,
    "explanation": "Δ means delta connection.\nY means wye connection.\nA wye secondary can provide a neutral."
  },
  {
    "id": 29,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A motor schedule shows “SCIM, TEFC, 10 hp, 575 V.” What does SCIM mean?",
    "options": [
      "Squirrel cage induction motor",
      "Short circuit isolation module",
      "Service current indicator meter",
      "Single conductor insulated motor"
    ],
    "answer": 0,
    "explanation": "SCIM is squirrel cage induction motor.\nIt is a common AC motor type.\nTEFC describes the enclosure."
  },
  {
    "id": 30,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A control drawing shows a seal-in contact in parallel with the start button. What is its purpose?",
    "options": [
      "Hold the coil after start is released",
      "Reverse motor direction",
      "Ground the neutral",
      "Increase transformer kVA"
    ],
    "answer": 0,
    "explanation": "The start button is momentary.\nThe seal-in contact maintains coil current.\nThe stop button opens the circuit."
  },
  {
    "id": 31,
    "category": "D1 — Interpret plans, drawings and specifications",
    "question": "A VFD schedule says “shielded motor cable required.” Why is this specified?",
    "options": [
      "To reduce electrical noise",
      "To increase motor slip",
      "To eliminate overload protection",
      "To make output DC"
    ],
    "answer": 0,
    "explanation": "VFD outputs create high-frequency noise.\nShielded cable helps control EMI.\nCorrect grounding of the shield matters."
  },
  {
    "id": 32,
    "category": "H2 — Install three-phase consumer/supply services and metering equipment",
    "question": "A commercial service is 347/600 V wye. Which voltage would feed 347 V lighting?",
    "options": [
      "Line to neutral",
      "Line to line",
      "Neutral to bond only",
      "CT secondary only"
    ],
    "answer": 0,
    "explanation": "347 V is line-to-neutral in a 347/600 V system.\n600 V is line-to-line.\nThe neutral is required for 347 V loads."
  },
  {
    "id": 33,
    "category": "H2 — Install three-phase consumer/supply services and metering equipment",
    "question": "A large three-phase service uses CT metering. Why are CTs used?",
    "options": [
      "To reduce current for metering",
      "To increase voltage",
      "To reverse phase rotation",
      "To replace the main disconnect"
    ],
    "answer": 0,
    "explanation": "CTs step down large currents.\nMeters can then measure safely.\nCorrect CT polarity is important."
  },
  {
    "id": 34,
    "category": "H4 — Maintain three-phase services and metering equipment",
    "question": "A thermal scan shows one service lug much hotter than the others. What should be suspected?",
    "options": [
      "Loose or high-resistance connection",
      "Perfectly balanced operation",
      "Lower voltage by design",
      "Correct torque always"
    ],
    "answer": 0,
    "explanation": "Heat at one lug often means poor contact.\nResistance under load creates heat.\nThe connection should be inspected safely."
  },
  {
    "id": 35,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "A distribution switchboard has lower short-circuit rating than available fault current. What is the problem?",
    "options": [
      "Equipment may fail during a fault",
      "It will run cooler",
      "It improves voltage balance",
      "It reduces current safely"
    ],
    "answer": 0,
    "explanation": "Equipment must be rated for available fault current.\nUnderrated gear can fail violently.\nShort-circuit ratings must be checked."
  },
  {
    "id": 36,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "Before energizing a new 3-phase panel, the electrician checks voltage and phase rotation. Why?",
    "options": [
      "To prevent equipment damage and wrong motor rotation",
      "To improve paint finish",
      "To reduce conductor length",
      "To replace bonding"
    ],
    "answer": 0,
    "explanation": "Incorrect voltage can damage loads.\nWrong phase rotation can reverse motors.\nPre-energization checks prevent problems."
  },
  {
    "id": 37,
    "category": "J1 — Install low voltage distribution equipment",
    "question": "A panel directory is blank after installation. What is the main issue?",
    "options": [
      "Circuits cannot be identified safely",
      "Voltage becomes zero",
      "Breakers become larger",
      "Power factor improves"
    ],
    "answer": 0,
    "explanation": "Accurate directories help isolate circuits.\nThey reduce troubleshooting time and hazards.\nBlank labels create confusion."
  },
  {
    "id": 38,
    "category": "L1 — Install grounding and bonding systems",
    "question": "A transformer enclosure is metal. Why must it be bonded?",
    "options": [
      "To provide a low-impedance fault path",
      "To carry normal phase current",
      "To increase frequency",
      "To reduce kVA rating"
    ],
    "answer": 0,
    "explanation": "Bonding connects exposed metal parts to the fault path.\nFault current can return to the source.\nThis helps protective devices operate."
  },
  {
    "id": 39,
    "category": "L3 — Install ground fault detection systems",
    "question": "A ground fault detector alarms on an ungrounded system. What is its purpose?",
    "options": [
      "Warn of leakage or fault to ground",
      "Increase motor speed",
      "Reverse phase sequence",
      "Replace all fuses"
    ],
    "answer": 0,
    "explanation": "Ground fault detection identifies abnormal current to ground.\nSome systems alarm instead of tripping.\nIt allows maintenance before a second fault occurs."
  },
  {
    "id": 40,
    "category": "M1 — Install AC generating systems",
    "question": "A standby generator is connected to a building. Why is a transfer switch required?",
    "options": [
      "To prevent backfeed and select the source",
      "To increase neutral current",
      "To remove grounding",
      "To convert AC to DC"
    ],
    "answer": 0,
    "explanation": "Transfer equipment separates utility and generator.\nBackfeeding utility lines is dangerous.\nIt safely selects one source."
  },
  {
    "id": 41,
    "category": "M1 — Install AC generating systems",
    "question": "A 2-pole generator must produce 60 Hz. What speed is required?",
    "options": [
      "900 rpm",
      "1200 rpm",
      "1800 rpm",
      "3600 rpm"
    ],
    "answer": 3,
    "explanation": "Use (N = 120f/P).\n(120 × 60 ÷ 2 = 3600rpm).\nA 2-pole 60 Hz generator runs at 3600 rpm."
  },
  {
    "id": 42,
    "category": "M1 — Install AC generating systems",
    "question": "A generator output frequency is low during testing. What is the most direct cause?",
    "options": [
      "Engine speed is low",
      "Ground rod is too short",
      "Neutral is too large",
      "Panel directory is missing"
    ],
    "answer": 0,
    "explanation": "Generator frequency depends on speed and poles.\nLow engine speed causes low frequency.\nGovernor adjustment may be needed."
  },
  {
    "id": 43,
    "category": "M1 — Install AC generating systems",
    "question": "An AC generator produces voltage because conductors move through magnetic flux. What principle is this?",
    "options": [
      "Electromagnetic induction",
      "Electrolysis",
      "Static bonding",
      "Capacitance only"
    ],
    "answer": 0,
    "explanation": "Changing flux induces voltage.\nGenerators use relative motion between conductor and field.\nThis is electromagnetic induction."
  },
  {
    "id": 44,
    "category": "M2 — Maintain AC generating systems",
    "question": "A generator runs but voltage is too high. What system should be checked?",
    "options": [
      "Voltage regulator or excitation system",
      "Box fill",
      "Receptacle polarity only",
      "Exit sign battery"
    ],
    "answer": 0,
    "explanation": "Excitation controls generator output voltage.\nA regulator problem can cause high or low voltage.\nManufacturer procedures should be followed."
  },
  {
    "id": 45,
    "category": "M3 — Install DC generating systems",
    "question": "A DC generator is connected to a battery bank. What must be observed?",
    "options": [
      "Correct polarity",
      "Phase rotation",
      "Line-to-neutral voltage",
      "Three-phase sequence"
    ],
    "answer": 0,
    "explanation": "DC systems have fixed polarity.\nWrong polarity can damage equipment or batteries.\nConnections must be verified before energizing."
  },
  {
    "id": 46,
    "category": "M4 — Maintain DC generating systems",
    "question": "A DC generator has heavy sparking at the brushes. What should be inspected?",
    "options": [
      "Brushes, springs, and commutator surface",
      "Panel directory only",
      "Ground rod depth only",
      "VFD carrier frequency"
    ],
    "answer": 0,
    "explanation": "Poor brush contact causes sparking.\nA rough commutator worsens arcing.\nMaintenance may be required before operation."
  },
  {
    "id": 47,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A 150 kVA, 600 V, 3-phase transformer primary current is closest to:",
    "options": [
      "83 A",
      "144 A",
      "250 A",
      "600 A"
    ],
    "answer": 1,
    "explanation": "Use (I = VA ÷ (\\sqrt3 × E)).\n(150,000 ÷ (1.732 × 600) ≈ 144A).\nPrimary current is about 144 A."
  },
  {
    "id": 48,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A 75 kVA transformer has a 120/208 V secondary. What is secondary line current?",
    "options": [
      "125 A",
      "208 A",
      "360 A",
      "625 A"
    ],
    "answer": 1,
    "explanation": "Use (I = 75,000 ÷ (1.732 × 208)).\nThis equals about 208 A.\nThree-phase current depends on kVA and line voltage."
  },
  {
    "id": 49,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer secondary is 347/600 V. What connection is most likely?",
    "options": [
      "Wye",
      "Delta only",
      "DC series",
      "Single winding only"
    ],
    "answer": 0,
    "explanation": "347 V line-to-neutral requires a neutral point.\n600 V is line-to-line.\nThis is a wye secondary."
  },
  {
    "id": 50,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A delta primary to wye secondary transformer is installed. Why is phase relationship important?",
    "options": [
      "Wrong connections can create incorrect voltages or rotation",
      "It changes paint colour",
      "It removes all losses",
      "It makes frequency zero"
    ],
    "answer": 0,
    "explanation": "Transformer connections affect phase shift and voltage.\nIncorrect phasing can damage equipment.\nConnections must follow diagrams."
  },
  {
    "id": 51,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer is energized with blocked ventilation. What is the risk?",
    "options": [
      "Overheating and insulation damage",
      "Higher efficiency",
      "Lower winding temperature",
      "Better power factor always"
    ],
    "answer": 0,
    "explanation": "Transformers produce heat under load.\nVentilation removes heat.\nBlocked airflow shortens insulation life."
  },
  {
    "id": 52,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer has lower impedance than another similar unit. What happens to available fault current?",
    "options": [
      "It increases",
      "It decreases",
      "It becomes zero",
      "It becomes DC only"
    ],
    "answer": 0,
    "explanation": "Impedance limits fault current.\nLower impedance means less opposition.\nAvailable fault current is higher."
  },
  {
    "id": 53,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "Before energizing a transformer, why are primary and secondary voltages checked against the nameplate?",
    "options": [
      "To prevent wrong voltage connection",
      "To choose wall colour",
      "To eliminate testing",
      "To change frequency"
    ],
    "answer": 0,
    "explanation": "Transformers are designed for rated voltages.\nWrong voltage can overheat or give wrong output.\nNameplate ratings must match the system."
  },
  {
    "id": 54,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer secondary neutral is bonded at the proper point. What is the purpose?",
    "options": [
      "Establish grounding for the derived system",
      "Increase transformer kVA",
      "Reverse phase rotation",
      "Make all loads single-phase"
    ],
    "answer": 0,
    "explanation": "A separately derived system needs proper grounding.\nBonding establishes the reference point.\nIt helps fault detection and clearing."
  },
  {
    "id": 55,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "Two transformers are paralleled without matching impedance. What can happen?",
    "options": [
      "Unequal load sharing",
      "Perfect load sharing always",
      "Both become DC generators",
      "Frequency doubles"
    ],
    "answer": 0,
    "explanation": "Impedance affects how load divides.\nMismatched units may not share current equally.\nParallel transformers require compatibility."
  },
  {
    "id": 56,
    "category": "P3 — Install low-voltage three-phase transformers",
    "question": "A transformer hums loudly and heats after wrong tap selection. What should be checked?",
    "options": [
      "Tap setting and applied voltage",
      "Receptacle height",
      "Motor bearing grease only",
      "Exit sign arrows"
    ],
    "answer": 0,
    "explanation": "Taps adjust turns ratio for supply voltage.\nWrong tap can overexcite or underfeed the transformer.\nCorrect tap selection is important."
  },
  {
    "id": 57,
    "category": "P5 — Install high-voltage transformers",
    "question": "A high-voltage transformer installation requires barriers and clearances. Why?",
    "options": [
      "To prevent contact and flashover",
      "To improve lighting colour",
      "To reduce nameplate size",
      "To carry neutral current"
    ],
    "answer": 0,
    "explanation": "High voltage can arc through air.\nClearances reduce flashover risk.\nBarriers protect workers."
  },
  {
    "id": 58,
    "category": "P5 — Install high-voltage transformers",
    "question": "An oil-filled transformer uses oil mainly for:",
    "options": [
      "Insulation and cooling",
      "Grounding only",
      "Increasing frequency",
      "Mechanical braking"
    ],
    "answer": 0,
    "explanation": "Transformer oil insulates energized parts.\nIt also transfers heat away from windings.\nOil condition affects reliability."
  },
  {
    "id": 59,
    "category": "P5 — Install high-voltage transformers",
    "question": "Before high-voltage transformer energization, what must be verified?",
    "options": [
      "Grounding, clearances, protection, and connections",
      "Lunch schedule",
      "Tool belt size",
      "Wall paint"
    ],
    "answer": 0,
    "explanation": "High-voltage errors can be severe.\nProtection and grounding must be correct.\nPre-energization checks reduce risk."
  },
  {
    "id": 60,
    "category": "R2 — Install wiring devices",
    "question": "A 347 V lighting switch is replaced with a 120 V-rated switch. What is the problem?",
    "options": [
      "Voltage rating is too low",
      "Current becomes zero",
      "Switch becomes safer",
      "Neutral becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "Devices must be rated for circuit voltage.\nUnderrated devices may arc or fail.\nAlways check voltage and current ratings."
  },
  {
    "id": 61,
    "category": "R2 — Install wiring devices",
    "question": "A three-phase receptacle feeds portable equipment that rotates backward. What should be checked?",
    "options": [
      "Phase sequence",
      "Box colour",
      "Ground rod length",
      "Cover screw size"
    ],
    "answer": 0,
    "explanation": "Three-phase rotation depends on phase order.\nWrong sequence reverses motor direction.\nPhase rotation should be corrected safely."
  },
  {
    "id": 62,
    "category": "V1 — Install motor starters and controls",
    "question": "A motor starts only while the start button is held. What is likely missing or faulty?",
    "options": [
      "Seal-in auxiliary contact",
      "Grounding electrode",
      "Motor bearing",
      "Transformer oil"
    ],
    "answer": 0,
    "explanation": "The seal-in contact holds the coil circuit.\nWithout it, the coil drops out when start is released.\nThis is a common control fault."
  },
  {
    "id": 63,
    "category": "V1 — Install motor starters and controls",
    "question": "A reversing starter must prevent forward and reverse contactors from closing together. What provides this protection?",
    "options": [
      "Electrical and mechanical interlocks",
      "Larger fuses only",
      "Ground rods",
      "Pilot lights only"
    ],
    "answer": 0,
    "explanation": "Closing both contactors can cause a phase fault.\nInterlocks prevent simultaneous operation.\nBoth types improve safety."
  },
  {
    "id": 64,
    "category": "V1 — Install motor starters and controls",
    "question": "A motor overload is set below nameplate current. What may happen?",
    "options": [
      "Nuisance tripping",
      "Motor loses grounding",
      "Phase rotation reverses",
      "Frequency doubles"
    ],
    "answer": 0,
    "explanation": "Overloads must match motor full-load current.\nSetting too low may trip during normal load.\nCorrect setup prevents nuisance trips and protects motor."
  },
  {
    "id": 65,
    "category": "V1 — Install motor starters and controls",
    "question": "A starter coil is rated 120 V but connected to 24 V. What is likely?",
    "options": [
      "Coil will not pull in properly",
      "Coil will burn out from overvoltage",
      "Motor speed doubles",
      "Overloads reset automatically"
    ],
    "answer": 0,
    "explanation": "Coils need rated voltage.\nLow voltage produces weak magnetic force.\nThe contactor may chatter or fail to close."
  },
  {
    "id": 66,
    "category": "V2 — Maintain motor starters and controls",
    "question": "A contactor chatters and its coil voltage measures low. What should be checked?",
    "options": [
      "Control transformer, wiring, and voltage drop",
      "Paint colour",
      "Ground rod depth only",
      "Motor shaft alignment only"
    ],
    "answer": 0,
    "explanation": "Low coil voltage causes chatter.\nLoose control wiring can create voltage drop.\nThe control supply should be verified."
  },
  {
    "id": 67,
    "category": "W1 — Install drives",
    "question": "A VFD is used on a fan motor. What happens when output frequency is reduced?",
    "options": [
      "Motor speed decreases",
      "Motor speed increases always",
      "Output becomes pure DC",
      "Ground fault current becomes zero"
    ],
    "answer": 0,
    "explanation": "AC motor speed depends on frequency.\nLower frequency gives lower speed.\nThis is why VFDs control motor speed."
  },
  {
    "id": 68,
    "category": "W1 — Install drives",
    "question": "A VFD trips on overcurrent during startup. What setting may need adjustment?",
    "options": [
      "Acceleration time",
      "Panel label size",
      "Ground rod spacing",
      "Conduit colour"
    ],
    "answer": 0,
    "explanation": "Fast acceleration can demand high current.\nIncreasing acceleration time may reduce current.\nThe load condition should also be checked."
  },
  {
    "id": 69,
    "category": "W1 — Install drives",
    "question": "A VFD trips on overvoltage during stopping. What is a likely cause?",
    "options": [
      "Regeneration during deceleration",
      "Low motor speed only",
      "Missing panel directory",
      "Too much bonding"
    ],
    "answer": 0,
    "explanation": "A slowing motor can act like a generator.\nEnergy returns to the DC bus.\nLonger deceleration or braking may be needed."
  },
  {
    "id": 70,
    "category": "W1 — Install drives",
    "question": "Why should VFD output cable routing be separated from control wiring?",
    "options": [
      "To reduce electrical noise interference",
      "To increase slip",
      "To remove overloads",
      "To increase ground resistance"
    ],
    "answer": 0,
    "explanation": "VFD outputs have high-frequency switching.\nThis can interfere with control circuits.\nSeparation and shielding reduce EMI."
  },
  {
    "id": 71,
    "category": "W1 — Install drives",
    "question": "A VFD is labelled V/F control. What does V/F mean?",
    "options": [
      "Voltage-frequency relationship",
      "Volt fuse",
      "Variable fuse",
      "Ventilation factor"
    ],
    "answer": 0,
    "explanation": "V/F maintains motor flux by coordinating voltage and frequency.\nIt is a common drive control method.\nIt helps motor performance at different speeds."
  },
  {
    "id": 72,
    "category": "Y1 — Install AC motors",
    "question": "A 4-pole motor on 60 Hz has synchronous speed of:",
    "options": [
      "900 rpm",
      "1200 rpm",
      "1800 rpm",
      "3600 rpm"
    ],
    "answer": 2,
    "explanation": "Use (N_s = 120f/P).\n(120 × 60 ÷ 4 = 1800rpm).\nActual induction motor speed is slightly lower."
  },
  {
    "id": 73,
    "category": "Y1 — Install AC motors",
    "question": "A 4-pole motor runs at 1755 rpm on 60 Hz. What is percent slip?",
    "options": [
      "1.5%",
      "2.5%",
      "4.5%",
      "7.5%"
    ],
    "answer": 1,
    "explanation": "Synchronous speed is 1800 rpm.\nSlip is ((1800 - 1755) ÷ 1800 × 100).\nSlip is 2.5%."
  },
  {
    "id": 74,
    "category": "Y1 — Install AC motors",
    "question": "A pump motor rotates backward after startup. What should be done after lockout?",
    "options": [
      "Swap any two phase conductors",
      "Swap neutral and ground",
      "Increase overload setting",
      "Remove bonding conductor"
    ],
    "answer": 0,
    "explanation": "Three-phase rotation depends on phase sequence.\nSwapping two phases reverses rotation.\nLockout must be used before changes."
  },
  {
    "id": 75,
    "category": "Y1 — Install AC motors",
    "question": "A motor nameplate shows 575 V, 3Φ, 15 hp. What supply is required?",
    "options": [
      "575 V three-phase",
      "120 V single-phase",
      "24 V DC",
      "347 V single-phase"
    ],
    "answer": 0,
    "explanation": "The motor must match supply voltage and phase.\n3Φ means three-phase.\nWrong supply can damage the motor."
  },
  {
    "id": 76,
    "category": "Y1 — Install AC motors",
    "question": "A motor nameplate shows TEFC. What does this mean?",
    "options": [
      "Totally enclosed fan cooled",
      "Transformer energized field coil",
      "Three electrical feeder circuit",
      "Terminal enclosure fuse cover"
    ],
    "answer": 0,
    "explanation": "TEFC describes motor enclosure and cooling.\nThe motor is enclosed and externally fan cooled.\nIt is common in dusty industrial areas."
  },
  {
    "id": 77,
    "category": "Y1 — Install AC motors",
    "question": "A motor is marked TENV. What does this indicate?",
    "options": [
      "Totally enclosed non-ventilated",
      "Three-phase energized neutral voltage",
      "Transformer enclosure neutral value",
      "Thermal electronic voltage"
    ],
    "answer": 0,
    "explanation": "TENV means totally enclosed non-ventilated.\nIt has no external fan.\nIt cools mainly through its enclosure surface."
  },
  {
    "id": 78,
    "category": "Y1 — Install AC motors",
    "question": "A motor overload is set much higher than nameplate FLA. What is the danger?",
    "options": [
      "Motor may not be protected from overheating",
      "Motor speed will be correct automatically",
      "Phase rotation improves",
      "Bearings become cooler"
    ],
    "answer": 0,
    "explanation": "Overload settings protect motor windings.\nToo high a setting may allow damaging current.\nUse nameplate FLA for setup."
  },
  {
    "id": 79,
    "category": "Y1 — Install AC motors",
    "question": "A new motor shows low insulation resistance to ground before energizing. What is the correct response?",
    "options": [
      "Do not energize until corrected",
      "Increase fuse size",
      "Reverse phase sequence",
      "Remove ground connection"
    ],
    "answer": 0,
    "explanation": "Low insulation resistance can cause shock or fault.\nThe motor may be wet or damaged.\nIt should be tested and corrected first."
  },
  {
    "id": 80,
    "category": "Y1 — Install AC motors",
    "question": "A motor coupling is misaligned. What problem can it cause?",
    "options": [
      "Vibration and bearing wear",
      "Better power factor",
      "Zero slip",
      "Correct rotation automatically"
    ],
    "answer": 0,
    "explanation": "Misalignment stresses shafts and bearings.\nIt can cause vibration and mechanical damage.\nProper alignment improves motor life."
  },
  {
    "id": 81,
    "category": "Y2 — Maintain AC motors",
    "question": "A motor has high current on all three phases and runs hot. What should be checked?",
    "options": [
      "Overload, mechanical load, voltage, and ventilation",
      "Wall paint",
      "Exit sign battery",
      "Photocell location only"
    ],
    "answer": 0,
    "explanation": "High current and heat can come from overload or low voltage.\nPoor ventilation also overheats motors.\nMechanical load should be inspected."
  },
  {
    "id": 82,
    "category": "Y3 — Install DC motors",
    "question": "A DC motor must reverse direction. What wiring change is correct?",
    "options": [
      "Reverse either armature or field leads, not both",
      "Reverse both armature and field together",
      "Swap any two AC phases",
      "Ground the armature"
    ],
    "answer": 0,
    "explanation": "Direction depends on armature-field polarity relationship.\nReversing one changes torque direction.\nReversing both usually keeps the same direction."
  },
  {
    "id": 83,
    "category": "Y3 — Install DC motors",
    "question": "A DC motor has excessive brush sparking during startup. What should be inspected?",
    "options": [
      "Brushes and commutator",
      "Phase rotation",
      "VFD carrier frequency",
      "Three-phase neutral current"
    ],
    "answer": 0,
    "explanation": "Brushes transfer current to the commutator.\nPoor contact causes sparking.\nWorn brushes or rough commutator need service."
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
  shuffleArray(electricianLevel3Set3ScenarioQuickPrepQuestions).map(shuffleOptionsForQuestion);

// Compatibility alias for the hint helper used by this template.
const shuffledElectricianLevel1PracticeExamQuestions = shuffledElectricianLevel3PracticeExamQuestions;

createPremiumQuizApp({
  tradeSlug: "electrician",
  tradeTitle: "Electrician",
  sectionTitle: "Common Core Harmonized Level 3 – Set 3 Scenario Quick-Prep Exam",
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
