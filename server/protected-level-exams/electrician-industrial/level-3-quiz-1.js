const electricianLevel1PracticeExamQuestions = [
{
"id": 1,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a balanced three-phase circuit, the phase voltages are separated by:",
"options": [
"60°",
"90°",
"120°",
"180°"
],
"answer": 2,
"explanation": "Three-phase systems have three sine waves equally spaced.\nEach phase is 120 electrical degrees apart.\nThis gives smoother power than single-phase."
},
{
"id": 2,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced 3-phase load has 600 V line voltage and 20 A line current. What is apparent power?",
"options": [
"12 kVA",
"20.8 kVA",
"36 kVA",
"600 kVA"
],
"answer": 1,
"explanation": "Use (S = \sqrt3 × E_L × I_L).\n(1.732 × 600 × 20 = 20,784VA).\nThat is about 20.8 kVA."
},
{
"id": 3,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 3-phase motor draws 15 A at 208 V with 0.85 power factor. What is true power?",
"options": [
"2.65 kW",
"4.59 kW",
"5.30 kW",
"6.12 kW"
],
"answer": 1,
"explanation": "Use (P = \sqrt3 × E_L × I_L × pf).\n(1.732 × 208 × 15 × 0.85 ≈ 4594W).\nTrue power is about 4.59 kW."
},
{
"id": 4,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a wye-connected system, the line voltage is:",
"options": [
"Equal to phase voltage",
"Phase voltage divided by (\sqrt3)",
"Phase voltage multiplied by (\sqrt3)",
"Always zero"
],
"answer": 2,
"explanation": "In wye, (E_L = \sqrt3 × E_P).\nLine voltage is measured between two lines.\nPhase voltage is measured line to neutral."
},
{
"id": 5,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 347/600 V wye system has 600 V line-to-line. What is the line-to-neutral voltage?",
"options": [
"120 V",
"208 V",
"347 V",
"600 V"
],
"answer": 2,
"explanation": "In wye, (E_P = E_L ÷ \sqrt3).\n(600 ÷ 1.732 ≈ 347V).\nThat is why it is called 347/600 V."
},
{
"id": 6,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a delta-connected load, line voltage is:",
"options": [
"Equal to phase voltage",
"(\sqrt3) times phase voltage",
"Phase voltage divided by (\sqrt3)",
"Always 120 V"
],
"answer": 0,
"explanation": "In delta, each phase winding is connected across two lines.\nTherefore phase voltage equals line voltage.\nLine current is different from phase current."
},
{
"id": 7,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a delta-connected load, line current is:",
"options": [
"Equal to phase current",
"(\sqrt3) times phase current",
"Phase current divided by (\sqrt3)",
"Always zero"
],
"answer": 1,
"explanation": "In delta, (I_L = \sqrt3 × I_P).\nLine current is higher than phase current.\nThis relationship is important for load calculations."
},
{
"id": 8,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 3-phase load has 480 V line voltage and 10 A line current at unity power factor. What is true power?",
"options": [
"4.8 kW",
"6.8 kW",
"8.31 kW",
"14.4 kW"
],
"answer": 2,
"explanation": "Use (P = \sqrt3 × E_L × I_L × pf).\n(1.732 × 480 × 10 × 1 = 8314W).\nThat is about 8.31 kW."
},
{
"id": 9,
"category": "A5 - Analyze three-phase AC circuits",
"question": "What happens if one phase of a three-phase motor supply is lost while running?",
"options": [
"The motor runs normally",
"The motor may single-phase and overheat",
"The motor becomes DC",
"The voltage doubles safely"
],
"answer": 1,
"explanation": "Loss of one phase causes unbalanced current.\nA running motor may continue but overheat quickly.\nPhase-loss protection helps prevent damage."
},
{
"id": 10,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced three-phase system has equal line currents. What is the neutral current in a four-wire wye system?",
"options": [
"Zero",
"Equal to one phase current",
"Three times phase current",
"Equal to line voltage"
],
"answer": 0,
"explanation": "Balanced phase currents cancel in the neutral.\nNeutral current is caused by imbalance.\nA perfectly balanced system has no neutral current."
},
{
"id": 11,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase wye system has phase currents A = 20 A, B = 20 A, and C = 20 A. What is neutral current?",
"options": [
"0 A",
"20 A",
"34.6 A",
"60 A"
],
"answer": 0,
"explanation": "Equal three-phase currents cancel vectorially.\nThe neutral carries only unbalanced current.\nBalanced loads produce zero neutral current."
},
{
"id": 12,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase system has 10 A, 15 A, and 20 A line currents. What condition exists?",
"options": [
"Balanced load",
"Unbalanced load",
"Open circuit always",
"Unity power factor always"
],
"answer": 1,
"explanation": "Balanced three-phase loads have equal line currents.\nDifferent line currents indicate imbalance.\nUnbalance can cause heating and voltage problems."
},
{
"id": 13,
"category": "A5 - Analyze three-phase AC circuits",
"question": "Which meter is commonly used with current transformers for large three-phase loads?",
"options": [
"Watt-hour meter",
"Continuity tester only",
"Tachometer only",
"Megaphone"
],
"answer": 0,
"explanation": "Large services often use CT metering.\nCTs reduce current to a safe measurable value.\nThe meter records energy use."
},
{
"id": 14,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase load has 12 kW true power and 15 kVA apparent power. What is power factor?",
"options": [
"0.60",
"0.80",
"1.25",
"3.0"
],
"answer": 1,
"explanation": "Power factor is (P/S).\n(12kW ÷ 15kVA = 0.8).\nPower factor is 80%."
},
{
"id": 15,
"category": "A5 - Analyze three-phase AC circuits",
"question": "Reactive power in a three-phase AC circuit is measured in:",
"options": [
"W",
"VA",
"VAR",
"Ω"
],
"answer": 2,
"explanation": "Reactive power is measured in volt-ampere reactive.\nIt is caused by inductors and capacitors.\nMotors often require reactive power."
},
{
"id": 16,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 3-phase motor has low power factor. What device may be installed to improve it?",
"options": [
"Capacitor bank",
"Standard light switch",
"Fuse clip only",
"Ground rod only"
],
"answer": 0,
"explanation": "Motors are inductive and usually lagging.\nCapacitors supply leading reactive power.\nThis improves overall power factor."
},
{
"id": 17,
"category": "A5 - Analyze three-phase AC circuits",
"question": "What is the formula for three-phase apparent power?",
"options": [
"(S = E × I)",
"(S = \sqrt3 × E_L × I_L)",
"(S = I^2R)",
"(S = E/R)"
],
"answer": 1,
"explanation": "Three-phase apparent power uses line voltage and line current.\nThe (\sqrt3) factor accounts for phase relationship.\nThe answer is in VA."
},
{
"id": 18,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 600 V three-phase load draws 30 A at 0.9 power factor. What is true power?",
"options": [
"16.2 kW",
"28.1 kW",
"31.2 kW",
"54 kW"
],
"answer": 1,
"explanation": "(P = 1.732 × 600 × 30 × 0.9).\nThis equals about 28,058 W.\nTrue power is about 28.1 kW."
},
{
"id": 19,
"category": "A6 - Analyze electronic circuits",
"question": "What does SCR stand for?",
"options": [
"Silicon control rectifier",
"Standard current resistor",
"Series capacitor relay",
"Service circuit regulator"
],
"answer": 0,
"explanation": "SCR means silicon-controlled rectifier.\nIt is a controlled semiconductor device.\nIt can switch power when triggered."
},
{
"id": 20,
"category": "A6 - Analyze electronic circuits",
"question": "A TRIAC is commonly used to control:",
"options": [
"AC power",
"Ground rods",
"Raceway fill",
"Insulation colour"
],
"answer": 0,
"explanation": "A TRIAC can conduct in both directions.\nIt is useful on AC circuits.\nDimmers and speed controls may use TRIACs."
},
{
"id": 21,
"category": "A6 - Analyze electronic circuits",
"question": "An IGBT is commonly used in:",
"options": [
"Power electronic switching",
"Conduit bending only",
"Grounding electrodes only",
"Receptacle boxes only"
],
"answer": 0,
"explanation": "IGBT means insulated gate bipolar transistor.\nIt handles higher power switching.\nVFDs often use IGBTs."
},
{
"id": 22,
"category": "A6 - Analyze electronic circuits",
"question": "A MOSFET is controlled mainly by:",
"options": [
"Gate voltage",
"Pipe size",
"Conductor colour",
"Motor shaft length"
],
"answer": 0,
"explanation": "MOSFET means metal-oxide semiconductor field-effect transistor.\nIts gate controls current flow.\nIt is common in switching circuits."
},
{
"id": 23,
"category": "A6 - Analyze electronic circuits",
"question": "PWM in drive electronics means:",
"options": [
"Pulse-width modulation",
"Power wire measurement",
"Primary winding meter",
"Phase watt motor"
],
"answer": 0,
"explanation": "PWM controls output by varying pulse width.\nIt is common in VFDs and DC drives.\nIt allows efficient speed or power control."
},
{
"id": 24,
"category": "A6 - Analyze electronic circuits",
"question": "A DIAC is often used to help trigger a:",
"options": [
"TRIAC",
"Ground rod",
"Transformer core",
"Fuse holder"
],
"answer": 0,
"explanation": "A DIAC conducts after breakover voltage.\nIt can trigger TRIACs symmetrically.\nIt is used in AC control circuits."
},
{
"id": 25,
"category": "C4 - Use measuring and testing equipment",
"question": "When checking insulation resistance of a motor winding, which instrument is commonly used?",
"options": [
"Megohmmeter",
"Clamp-on tachometer",
"Torpedo level",
"Continuity buzzer only"
],
"answer": 0,
"explanation": "A megohmmeter applies test voltage to measure insulation resistance.\nIt helps detect insulation breakdown.\nThe circuit must be isolated before testing."
},
{
"id": 26,
"category": "C4 - Use measuring and testing equipment",
"question": "When measuring current on a three-phase motor, where should a clamp meter be placed?",
"options": [
"Around one phase conductor at a time",
"Around all three conductors together",
"Around the conduit only",
"Across two terminals like a voltmeter"
],
"answer": 0,
"explanation": "A clamp meter measures magnetic field from current.\nClamping around multiple balanced conductors cancels fields.\nMeasure each phase separately."
},
{
"id": 27,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A drawing shows “MCC-1.” What does MCC usually mean?",
"options": [
"Motor control centre",
"Main copper conductor",
"Meter current coil",
"Mechanical cable clamp"
],
"answer": 0,
"explanation": "MCC means motor control centre.\nIt contains starters, feeders, and control equipment.\nIt is common in industrial installations."
},
{
"id": 28,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A transformer drawing shows “Δ-Y.” What does this describe?",
"options": [
"Delta primary and wye secondary connection",
"Direct current grounding",
"Fuse size only",
"Motor bearing type"
],
"answer": 0,
"explanation": "Delta is represented by Δ.\nY means wye connection.\nTransformer connection diagrams are important for voltage and grounding."
},
{
"id": 29,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A plan shows “VFD-3 feeds M-7.” What does this mean?",
"options": [
"Variable frequency drive 3 feeds motor 7",
"Voltage fuse device feeds meter 7",
"Vent fan disconnect feeds main 7",
"Visual fault detector feeds motor 7"
],
"answer": 0,
"explanation": "VFD means variable frequency drive.\nM usually identifies a motor.\nEquipment tags link devices on drawings."
},
{
"id": 30,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A three-line diagram is most useful for showing:",
"options": [
"Individual phase conductors and connections",
"Wall paint colour",
"Lunch schedule",
"Tool prices"
],
"answer": 0,
"explanation": "Three-line diagrams show each phase separately.\nThey provide more detail than single-line diagrams.\nThey are useful for control and power wiring."
},
{
"id": 31,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "If a motor nameplate conflicts with a drawing schedule, what should the electrician do?",
"options": [
"Ask for clarification before connecting",
"Guess the higher voltage",
"Ignore the nameplate",
"Connect randomly and test later"
],
"answer": 0,
"explanation": "Conflicts can damage equipment.\nMotor voltage, phase, and current must be correct.\nProper clarification prevents unsafe work."
},
{
"id": 32,
"category": "H2 - Install three-phase consumer/supply services and metering equipment",
"question": "A 347/600 V three-phase service provides 347 V from:",
"options": [
"Line to neutral",
"Line to line",
"Ground rod to earth only",
"Neutral to bonding conductor only"
],
"answer": 0,
"explanation": "A 347/600 V wye system has 600 V line-to-line.\nLine-to-neutral voltage is 347 V.\nThis is common in commercial buildings."
},
{
"id": 33,
"category": "H2 - Install three-phase consumer/supply services and metering equipment",
"question": "Current transformers are used in large metering installations mainly to:",
"options": [
"Reduce current to a safe measurable value",
"Increase building voltage",
"Replace grounding",
"Convert AC to DC"
],
"answer": 0,
"explanation": "CTs step down high current proportionally.\nMeters can then measure safely.\nCT polarity and connections matter."
},
{
"id": 34,
"category": "H4 - Maintain three-phase services and metering equipment",
"question": "During service inspection, one phase connection shows heat damage. What is the likely concern?",
"options": [
"Loose or high-resistance connection",
"Correct operation",
"Lower voltage by design",
"Better current balance"
],
"answer": 0,
"explanation": "Heat damage often indicates poor contact.\nHigh resistance under load creates heat.\nThree-phase services must be maintained carefully."
},
{
"id": 35,
"category": "J1 - Install low voltage distribution equipment",
"question": "A distribution panel has an available fault current of 22 kA. What must equipment ratings consider?",
"options": [
"Interrupting and short-circuit ratings",
"Paint colour only",
"Receptacle height only",
"Conduit brand only"
],
"answer": 0,
"explanation": "Equipment must withstand and interrupt available fault current.\nUnderrated equipment can fail violently.\nRatings must match the system."
},
{
"id": 36,
"category": "J1 - Install low voltage distribution equipment",
"question": "A feeder supplies a three-phase panelboard. What must be identified before energizing?",
"options": [
"Phase sequence and correct voltage",
"Ladder size",
"Wall colour",
"Tool owner"
],
"answer": 0,
"explanation": "Three-phase equipment may depend on phase rotation.\nIncorrect voltage can damage loads.\nVerification before energizing prevents problems."
},
{
"id": 37,
"category": "J1 - Install low voltage distribution equipment",
"question": "Why should panel directories be accurate?",
"options": [
"To identify circuits quickly and safely",
"To increase current capacity",
"To reduce transformer turns",
"To improve power factor automatically"
],
"answer": 0,
"explanation": "Accurate directories help isolate circuits.\nThey improve troubleshooting and emergency response.\nIncorrect labels can create hazards."
},
{
"id": 38,
"category": "L1 - Install grounding and bonding systems",
"question": "Why are metal enclosures bonded?",
"options": [
"To provide a low-impedance fault path",
"To carry normal load current",
"To increase frequency",
"To reduce conductor ampacity"
],
"answer": 0,
"explanation": "Bonding connects exposed conductive parts.\nFault current can return to the source.\nThis helps open the overcurrent device."
},
{
"id": 39,
"category": "L3 - Install ground fault detection systems",
"question": "Ground fault detection on a system is used to:",
"options": [
"Detect leakage or fault current to ground",
"Increase motor speed",
"Replace all bonding conductors",
"Measure room temperature"
],
"answer": 0,
"explanation": "Ground fault detection monitors current leaving normal paths.\nIt can alarm or trip depending on system design.\nIt helps protect equipment and personnel."
},
{
"id": 40,
"category": "M1 - Install AC generating systems",
"question": "An AC generator produces voltage by:",
"options": [
"Moving conductors through magnetic flux",
"Chemical storage only",
"Static grounding only",
"Heat expansion only"
],
"answer": 0,
"explanation": "Electromagnetic induction produces generated voltage.\nRelative motion between conductor and magnetic field is required.\nThis is the generator principle."
},
{
"id": 41,
"category": "M1 - Install AC generating systems",
"question": "A standby generator must be connected through transfer equipment mainly to:",
"options": [
"Prevent backfeeding the utility",
"Increase building load",
"Remove bonding",
"Change AC to DC"
],
"answer": 0,
"explanation": "Backfeeding can endanger utility workers and damage equipment.\nTransfer equipment separates sources.\nIt selects utility or generator supply safely."
},
{
"id": 42,
"category": "M1 - Install AC generating systems",
"question": "Generator frequency is most directly related to:",
"options": [
"Speed and number of poles",
"Ground rod length",
"Cable insulation colour",
"Panel directory size"
],
"answer": 0,
"explanation": "Frequency depends on rotor speed and pole count.\nThe formula uses speed and poles.\nIncorrect speed changes output frequency."
},
{
"id": 43,
"category": "M1 - Install AC generating systems",
"question": "A generator output voltage is unstable under changing load. What system may be involved?",
"options": [
"Voltage regulation system",
"Box fill calculation",
"Ladder inspection",
"Lighting colour temperature"
],
"answer": 0,
"explanation": "Generators use voltage regulators to control output.\nLoad changes can affect voltage.\nRegulation keeps voltage within acceptable range."
},
{
"id": 44,
"category": "M2 - Maintain AC generating systems",
"question": "A generator runs but produces no AC output. What should be checked?",
"options": [
"Excitation field or voltage regulator",
"Receptacle mounting height",
"Ground rod paint",
"Tool belt size"
],
"answer": 0,
"explanation": "Generators need field excitation to produce voltage.\nA failed regulator or field circuit can stop output.\nTroubleshooting should follow manufacturer instructions."
},
{
"id": 45,
"category": "M3 - Install DC generating systems",
"question": "A DC generator uses a commutator to:",
"options": [
"Provide DC output from generated AC in the armature",
"Increase pipe size",
"Replace grounding",
"Reduce conductor insulation"
],
"answer": 0,
"explanation": "A commutator mechanically rectifies generated voltage.\nIt keeps output polarity mostly one direction.\nBrushes contact the commutator."
},
{
"id": 46,
"category": "M4 - Maintain DC generating systems",
"question": "A DC generator has sparking at the brushes. What may require maintenance?",
"options": [
"Brushes and commutator",
"Panel schedule",
"EMT strap spacing only",
"Receptacle polarity only"
],
"answer": 0,
"explanation": "Worn brushes or dirty commutators cause sparking.\nPoor contact can damage the machine.\nMaintenance should follow safe procedures."
},
{
"id": 47,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A three-phase transformer bank has a delta primary and wye secondary. What does the wye secondary commonly provide?",
"options": [
"Neutral point",
"No voltage",
"DC output",
"Mechanical torque only"
],
"answer": 0,
"explanation": "A wye secondary has a common neutral point.\nThis allows line-to-neutral loads.\nIt also supports grounding of the system."
},
{
"id": 48,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer rated 75 kVA, 600 V three-phase has primary current closest to:",
"options": [
"72 A",
"125 A",
"180 A",
"600 A"
],
"answer": 0,
"explanation": "Use (I = VA ÷ (\sqrt3 × E)).\n(75,000 ÷ (1.732 × 600) ≈ 72A).\nPrimary current is about 72 amps."
},
{
"id": 49,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A 45 kVA, 208 V three-phase secondary has current closest to:",
"options": [
"72 A",
"125 A",
"216 A",
"375 A"
],
"answer": 1,
"explanation": "(I = 45,000 ÷ (1.732 × 208)).\nThis equals about 125 A.\nSecondary current is based on kVA and voltage."
},
{
"id": 50,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "Transformer polarity markings are important because they help ensure:",
"options": [
"Correct phase relationship",
"Correct box colour",
"Reduced ladder height",
"Increased conductor insulation"
],
"answer": 0,
"explanation": "Wrong polarity can cause incorrect voltages or circulating currents.\nThree-phase transformer connections must be phased correctly.\nPolarity marks guide proper installation."
},
{
"id": 51,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer core is laminated to reduce:",
"options": [
"Eddy current losses",
"Circuit voltage to zero",
"Neutral current always",
"Conductor length"
],
"answer": 0,
"explanation": "Changing magnetic flux induces currents in metal cores.\nLaminations restrict these currents.\nThis reduces heating and energy loss."
},
{
"id": 52,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "What does transformer impedance affect during a fault?",
"options": [
"Available fault current",
"Paint colour",
"Ambient light level",
"Conduit fill only"
],
"answer": 0,
"explanation": "Higher transformer impedance limits fault current.\nLower impedance allows higher fault current.\nThis affects equipment interrupting ratings."
},
{
"id": 53,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A dry-type transformer requires ventilation mainly to:",
"options": [
"Remove heat",
"Increase frequency",
"Change AC to DC",
"Remove grounding"
],
"answer": 0,
"explanation": "Transformers produce heat from losses.\nVentilation prevents insulation damage.\nBlocked airflow can shorten transformer life."
},
{
"id": 54,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer primary is rated 600 V but is connected to 480 V. What is likely on the secondary?",
"options": [
"Lower than rated voltage",
"Higher than rated voltage",
"No magnetic flux always",
"Correct rated voltage always"
],
"answer": 0,
"explanation": "Secondary voltage follows the turns ratio and applied primary voltage.\nLower primary voltage gives lower secondary voltage.\nNameplate ratings should be followed."
},
{
"id": 55,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer secondary is 120/208 V. This is most likely which connection?",
"options": [
"Wye",
"Delta only",
"Open circuit",
"DC series"
],
"answer": 0,
"explanation": "120/208 V commonly comes from a wye secondary.\n120 V is line-to-neutral.\n208 V is line-to-line."
},
{
"id": 56,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "Why should a three-phase transformer be checked for correct phase rotation?",
"options": [
"Some connected equipment depends on rotation",
"Rotation affects paint colour",
"It changes conductor material",
"It removes need for bonding"
],
"answer": 0,
"explanation": "Motors rotate according to phase sequence.\nIncorrect rotation can damage equipment or process systems.\nPhase rotation should be verified before final operation."
},
{
"id": 57,
"category": "P5 - Install high-voltage transformers",
"question": "High-voltage transformer work requires extra care mainly because of:",
"options": [
"Increased shock and arc-flash hazard",
"Lower energy level",
"No need for PPE",
"Reduced clearance requirements"
],
"answer": 0,
"explanation": "Higher voltage can create severe hazards.\nClearances, PPE, and procedures become critical.\nOnly qualified workers should perform this work."
},
{
"id": 58,
"category": "P5 - Install high-voltage transformers",
"question": "Transformer oil in an oil-filled transformer commonly provides:",
"options": [
"Insulation and cooling",
"Grounding only",
"Mechanical braking",
"DC rectification"
],
"answer": 0,
"explanation": "Transformer oil helps insulate energized parts.\nIt also transfers heat away from windings.\nOil condition is important for reliability."
},
{
"id": 59,
"category": "P5 - Install high-voltage transformers",
"question": "Before energizing a high-voltage transformer, what should be verified?",
"options": [
"Correct connections, grounding, protection, and clearances",
"Lunch schedule",
"Paint brand",
"Tool box colour"
],
"answer": 0,
"explanation": "High-voltage equipment must be installed exactly as specified.\nIncorrect connection can cause failure or injury.\nPre-energization checks are essential."
},
{
"id": 60,
"category": "R2 - Install wiring devices",
"question": "A receptacle on a three-phase derived system shows incorrect voltage. What should be checked first?",
"options": [
"Correct phase and neutral connection",
"Wall colour",
"Device screw length only",
"Panel cover label font"
],
"answer": 0,
"explanation": "Wrong phase or neutral connections can give wrong voltage.\nThe circuit must match device rating.\nTesting should be done safely."
},
{
"id": 61,
"category": "R2 - Install wiring devices",
"question": "A device terminal overheats under load. What is the likely cause?",
"options": [
"Loose or poor connection",
"Correct torque",
"Perfect contact",
"Low current with no resistance"
],
"answer": 0,
"explanation": "Poor contact increases resistance.\nCurrent through resistance creates heat.\nProper termination and torque are required."
},
{
"id": 62,
"category": "V1 - Install motor starters and controls",
"question": "A three-wire control circuit uses a normally open start button, normally closed stop button, and:",
"options": [
"Seal-in auxiliary contact",
"Ground rod",
"Lighting dimmer",
"Capacitor only"
],
"answer": 0,
"explanation": "The seal-in contact holds the coil after start is released.\nThe stop button breaks the coil circuit.\nThis is standard motor control."
},
{
"id": 63,
"category": "V1 - Install motor starters and controls",
"question": "An overload relay is installed to protect the:",
"options": [
"Motor from overheating",
"Conduit from rust only",
"Panel paint",
"Pilot light lens"
],
"answer": 0,
"explanation": "Overloads respond to sustained overcurrent.\nThey protect motor windings from heat damage.\nThey do not replace short-circuit protection."
},
{
"id": 64,
"category": "V1 - Install motor starters and controls",
"question": "A reversing starter changes motor direction by:",
"options": [
"Interchanging two motor leads on a three-phase motor",
"Removing all grounding",
"Increasing frequency only",
"Changing AC to DC"
],
"answer": 0,
"explanation": "Reversing any two phases changes rotation.\nReversing starters use interlocked contactors.\nInterlocking prevents both directions at once."
},
{
"id": 65,
"category": "V1 - Install motor starters and controls",
"question": "Electrical and mechanical interlocks are used in reversing starters to:",
"options": [
"Prevent forward and reverse contactors closing together",
"Increase motor current",
"Remove overload protection",
"Change motor horsepower"
],
"answer": 0,
"explanation": "Closing both contactors could cause a phase-to-phase fault.\nInterlocks prevent unsafe simultaneous operation.\nThey are essential in reversing controls."
},
{
"id": 66,
"category": "V2 - Maintain motor starters and controls",
"question": "A starter coil chatters when energized. What is a likely cause?",
"options": [
"Low coil voltage or poor control connection",
"Correct operation",
"Oversized box cover",
"Good contact pressure always"
],
"answer": 0,
"explanation": "A coil needs rated voltage to hold firmly.\nLow voltage causes weak magnetic pull.\nChatter can damage contacts and coils."
},
{
"id": 67,
"category": "W1 - Install drives",
"question": "A VFD controls motor speed by changing:",
"options": [
"Frequency and voltage to the motor",
"Ground rod resistance",
"Box fill",
"Lamp wattage only"
],
"answer": 0,
"explanation": "VFD means variable frequency drive.\nMotor speed depends on supply frequency.\nThe drive also adjusts voltage for motor operation."
},
{
"id": 68,
"category": "W1 - Install drives",
"question": "A VFD output should normally feed:",
"options": [
"A suitable motor",
"Standard receptacles only",
"Lighting dimmers",
"Grounding electrodes"
],
"answer": 0,
"explanation": "VFD output is controlled waveform power.\nIt is intended for motor loads.\nOther loads may be damaged."
},
{
"id": 69,
"category": "W1 - Install drives",
"question": "Why may shielded cable be used on VFD motor leads?",
"options": [
"To reduce electrical noise",
"To increase voltage beyond rating",
"To remove bonding",
"To replace overloads"
],
"answer": 0,
"explanation": "VFDs switch rapidly and can create EMI.\nShielded cable helps control noise.\nProper bonding of shield is important."
},
{
"id": 70,
"category": "W1 - Install drives",
"question": "A VFD display shows overcurrent during acceleration. What may help?",
"options": [
"Increase acceleration time if appropriate",
"Remove motor grounding",
"Short the output terminals",
"Increase load suddenly"
],
"answer": 0,
"explanation": "Fast acceleration can demand high current.\nLonger ramp time reduces starting stress.\nLoad and drive settings should be checked."
},
{
"id": 71,
"category": "W1 - Install drives",
"question": "V/F on a drive usually means:",
"options": [
"Voltage frequency relationship",
"Volt fuse",
"Valve flow",
"Vertical feeder"
],
"answer": 0,
"explanation": "V/F means voltage-to-frequency relationship.\nIt helps maintain motor flux.\nIt is used in basic VFD control."
},
{
"id": 72,
"category": "Y1 - Install AC motors",
"question": "A squirrel cage induction motor is commonly abbreviated as:",
"options": [
"SCIM",
"SCR",
"DIAC",
"CT"
],
"answer": 0,
"explanation": "SCIM means squirrel cage induction motor.\nIt is a very common AC motor type.\nIt is rugged and widely used in industry."
},
{
"id": 73,
"category": "Y1 - Install AC motors",
"question": "A three-phase motor rotation is wrong. What should be done?",
"options": [
"Interchange any two phase conductors",
"Change the grounding electrode",
"Reverse the neutral only",
"Increase fuse size"
],
"answer": 0,
"explanation": "Phase sequence determines rotation.\nSwapping any two phases reverses rotation.\nPower must be locked out before changes."
},
{
"id": 74,
"category": "Y1 - Install AC motors",
"question": "Motor synchronous speed depends on:",
"options": [
"Frequency and number of poles",
"Cable colour",
"Bearing grease only",
"Ground rod size"
],
"answer": 0,
"explanation": "Synchronous speed is based on supply frequency and poles.\nMore poles give lower speed.\nHigher frequency gives higher speed."
},
{
"id": 75,
"category": "Y1 - Install AC motors",
"question": "What is synchronous speed of a 4-pole motor on 60 Hz?",
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
"id": 76,
"category": "Y1 - Install AC motors",
"question": "An induction motor runs below synchronous speed because of:",
"options": [
"Slip",
"Grounding",
"Capacitance only",
"Overvoltage only"
],
"answer": 0,
"explanation": "Slip allows rotor current and torque production.\nRotor speed is slightly less than synchronous speed.\nSlip increases with load."
},
{
"id": 77,
"category": "Y1 - Install AC motors",
"question": "A 4-pole, 60 Hz induction motor runs at 1740 rpm. What is slip speed?",
"options": [
"40 rpm",
"60 rpm",
"120 rpm",
"1740 rpm"
],
"answer": 1,
"explanation": "Synchronous speed is 1800 rpm.\nSlip speed is (1800 - 1740 = 60rpm).\nSlip speed is difference between synchronous and rotor speed."
},
{
"id": 78,
"category": "Y1 - Install AC motors",
"question": "A motor nameplate shows TEFC. What does TEFC mean?",
"options": [
"Totally enclosed fan cooled",
"Transformer energized field coil",
"Terminal enclosure fuse cover",
"Three electrical feeder circuit"
],
"answer": 0,
"explanation": "TEFC motors are enclosed and externally fan-cooled.\nThey resist dirt better than open motors.\nCooling air does not pass through the motor interior."
},
{
"id": 79,
"category": "Y1 - Install AC motors",
"question": "A motor nameplate shows TENV. What does TENV mean?",
"options": [
"Totally enclosed non-ventilated",
"Three-phase energized neutral voltage",
"Transformer enclosure no vent",
"Thermal electric neutral value"
],
"answer": 0,
"explanation": "TENV means totally enclosed non-ventilated.\nIt has no external fan ventilation.\nIt depends on surface area for cooling."
},
{
"id": 80,
"category": "Y1 - Install AC motors",
"question": "Why must motor overloads be set correctly?",
"options": [
"To protect the motor from overheating",
"To increase motor speed",
"To reduce grounding requirements",
"To change motor phase sequence"
],
"answer": 0,
"explanation": "Overloads protect windings from sustained current.\nWrong settings may nuisance trip or fail to protect.\nNameplate current is used for setup."
},
{
"id": 81,
"category": "Y2 - Maintain AC motors",
"question": "A three-phase motor draws high current on one phase. What should be checked?",
"options": [
"Voltage imbalance, winding condition, and connections",
"Paint colour",
"Lighting control type",
"Exit sign battery only"
],
"answer": 0,
"explanation": "Unequal phase current indicates a problem.\nVoltage imbalance or winding faults can overheat motors.\nConnections should be inspected safely."
},
{
"id": 82,
"category": "Y3 - Install DC motors",
"question": "In a DC motor, reversing either the armature or field connections will:",
"options": [
"Reverse motor direction",
"Stop all current forever",
"Change it to AC only",
"Remove torque"
],
"answer": 0,
"explanation": "DC motor direction depends on armature and field polarity.\nReversing one reverses torque direction.\nReversing both usually keeps the same direction."
},
{
"id": 83,
"category": "Y3 - Install DC motors",
"question": "A DC motor uses brushes and a commutator mainly to:",
"options": [
"Transfer current to the rotating armature",
"Cool the transformer oil",
"Measure AC frequency",
"Bond the raceway"
],
"answer": 0,
"explanation": "Brushes contact the commutator.\nThe commutator switches current in armature conductors.\nThis allows continuous torque in a DC motor."
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
sectionTitle: "Level 3 Practice Standardized Exam",
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
