const industrialElectricianInterprovincialPracticeExamQuestions = [
  {
    "id": 1,
    "category": "Task 1 - Performs safety-related functions",
    "question": "Before working inside an energized industrial control cabinet, what is the safest first action?",
    "options": [
      "Remove the control fuse only",
      "Verify the cabinet is clean",
      "Apply lockout, test for absence of voltage, and control stored energy",
      "Wear cotton gloves only"
    ],
    "answer": 2,
    "explanation": "Lockout prevents unexpected energization. Testing proves the circuit is de-energized. Stored energy such as capacitors must also be discharged or controlled."
  },
  {
    "id": 2,
    "category": "Task 1 - Performs safety-related functions",
    "question": "Which condition creates the greatest arc-flash risk?",
    "options": [
      "Low current at low voltage",
      "High available fault current and exposed energized conductors",
      "A clean panel directory",
      "A properly bonded metal enclosure"
    ],
    "answer": 1,
    "explanation": "Arc flash energy depends on voltage, fault current, and clearing time. Exposed energized conductors increase the chance of accidental contact. Proper PPE and safe work procedures are required."
  },
  {
    "id": 3,
    "category": "Task 2 - Uses tools and equipment",
    "question": "Which meter is best for checking insulation resistance on a motor winding?",
    "options": [
      "Clamp meter",
      "Megohmmeter",
      "Tachometer",
      "Phase rotation meter"
    ],
    "answer": 1,
    "explanation": "A megohmmeter applies a test voltage to insulation. It checks leakage between windings and ground. Low resistance indicates possible insulation failure."
  },
  {
    "id": 4,
    "category": "Task 2 - Uses tools and equipment",
    "question": "When measuring current on a 3-phase motor, a clamp meter should be placed:",
    "options": [
      "Around all three phase conductors together",
      "Around the bonding conductor",
      "Around one phase conductor at a time",
      "Across two motor terminals"
    ],
    "answer": 2,
    "explanation": "A clamp meter reads current from the magnetic field around one conductor. Clamping around multiple conductors can cancel the magnetic fields. Each phase should be measured separately."
  },
  {
    "id": 5,
    "category": "Task 3 - Organizes work",
    "question": "A drawing shows “MCC-1 feeds P-3 through VFD-2.” What should the electrician understand?",
    "options": [
      "Motor control centre 1 feeds pump 3 through variable frequency drive 2",
      "Main copper cable 1 feeds panel 3 through voltage fuse device 2",
      "Meter control circuit 1 feeds plug 3 through vent fan disconnect 2",
      "Mechanical control cabinet 1 feeds phase 3 through fuse 2"
    ],
    "answer": 0,
    "explanation": "MCC means motor control centre. VFD means variable frequency drive. Equipment tags must be matched to schedules and drawings."
  },
  {
    "id": 6,
    "category": "Task 3 - Organizes work",
    "question": "If site conditions conflict with the electrical drawings, what should be done?",
    "options": [
      "Install based on memory",
      "Ignore the conflict",
      "Request clarification before proceeding",
      "Use the cheapest material available"
    ],
    "answer": 2,
    "explanation": "Conflicts can cause unsafe or rejected work. Clarification prevents rework and equipment damage. Approved changes should be documented."
  },
  {
    "id": 7,
    "category": "Task 4 - Fabricates and installs support components",
    "question": "Why must cable tray supports be installed according to spacing and load requirements?",
    "options": [
      "To increase system voltage",
      "To prevent sagging, damage, and mechanical failure",
      "To reduce power factor",
      "To replace bonding conductors"
    ],
    "answer": 1,
    "explanation": "Supports carry the weight of tray and cables. Improper spacing can cause sagging or collapse. Mechanical support protects conductors and equipment."
  },
  {
    "id": 8,
    "category": "Task 5 - Commissions and decommissions electrical systems",
    "question": "Before energizing a new motor circuit, which check is most important?",
    "options": [
      "Paint colour of the motor",
      "Correct voltage, phase rotation, grounding, and overload settings",
      "Height of the ceiling",
      "Number of labels on the panel door"
    ],
    "answer": 1,
    "explanation": "Incorrect voltage or rotation can damage equipment. Grounding and overloads protect people and motors. Pre-energization checks are part of commissioning."
  },
  {
    "id": 9,
    "category": "Task 5 - Commissions and decommissions electrical systems",
    "question": "When decommissioning equipment, why should conductors be identified before removal?",
    "options": [
      "To increase conductor ampacity",
      "To prevent accidental removal of active or required circuits",
      "To improve motor speed",
      "To reduce transformer impedance"
    ],
    "answer": 1,
    "explanation": "Industrial systems often share raceways and control circuits. Incorrect removal can shut down other equipment. Identification prevents unsafe or costly mistakes."
  },
  {
    "id": 10,
    "category": "Task 7 - Supply services and metering equipment",
    "question": "A 347/600 V 3-phase service supplies 347 V lighting. How is the lighting connected?",
    "options": [
      "Line to line",
      "Line to neutral",
      "Neutral to ground only",
      "CT secondary to ground"
    ],
    "answer": 1,
    "explanation": "In a 347/600 V wye system, 347 V is line-to-neutral. 600 V is line-to-line. The neutral is required for 347 V loads."
  },
  {
    "id": 11,
    "category": "Task 7 - Supply services and metering equipment",
    "question": "Current transformers are used in large metering systems mainly to:",
    "options": [
      "Increase utility voltage",
      "Reduce high current to a safe measurable value",
      "Replace the main disconnect",
      "Convert AC to DC"
    ],
    "answer": 1,
    "explanation": "CTs step current down proportionally. Meters can safely measure the reduced current. CT polarity and ratio must be correct."
  },
  {
    "id": 12,
    "category": "Task 7 - Supply services and metering equipment",
    "question": "A CT is installed with reversed polarity. What may happen?",
    "options": [
      "The meter may read incorrectly",
      "The service voltage doubles",
      "The grounding electrode opens",
      "The load becomes single-phase"
    ],
    "answer": 0,
    "explanation": "CT polarity affects current direction in the metering circuit. Incorrect polarity can cause wrong readings. Metering wiring must follow diagrams."
  },
  {
    "id": 13,
    "category": "Task 8 - Protection devices",
    "question": "A breaker’s interrupting rating must be equal to or greater than the:",
    "options": [
      "Normal load current only",
      "Available fault current",
      "Conductor insulation colour",
      "Control voltage"
    ],
    "answer": 1,
    "explanation": "Breakers must safely interrupt fault current. If available fault current exceeds the rating, the breaker can fail. This is a major safety requirement."
  },
  {
    "id": 14,
    "category": "Task 8 - Protection devices",
    "question": "A fuse opens instantly when a disconnect is closed. What is the most likely condition?",
    "options": [
      "Slight overload",
      "Open circuit",
      "Short circuit",
      "Low power factor only"
    ],
    "answer": 2,
    "explanation": "Instant fuse operation usually indicates very high current. A short circuit creates a low-impedance path. The fault must be found before replacing the fuse."
  },
  {
    "id": 15,
    "category": "Task 8 - Protection devices",
    "question": "What is the main purpose of overload protection on a motor?",
    "options": [
      "Protect motor windings from overheating",
      "Protect against lightning only",
      "Reverse motor direction",
      "Increase motor horsepower"
    ],
    "answer": 0,
    "explanation": "Overloads respond to excessive current over time. They protect the motor from heat damage. They do not replace short-circuit protection."
  },
  {
    "id": 16,
    "category": "Task 8 - Protection devices",
    "question": "A surge protective device protects equipment mainly from:",
    "options": [
      "Long-term overload",
      "Transient overvoltage",
      "Low resistance grounding",
      "Motor slip"
    ],
    "answer": 1,
    "explanation": "Surges are short voltage spikes. SPDs divert or limit surge energy. They help protect sensitive electronics and controls."
  },
  {
    "id": 17,
    "category": "Task 9 - Low-voltage distribution systems",
    "question": "A distribution switchboard is rated 25 kAIC, but available fault current is 40 kA. What is the issue?",
    "options": [
      "The switchboard rating is too low",
      "The voltage is too low",
      "The panel is oversized",
      "The neutral is too large"
    ],
    "answer": 0,
    "explanation": "Equipment must withstand available fault current. Underrated equipment may fail violently. Short-circuit ratings must be verified."
  },
  {
    "id": 18,
    "category": "Task 9 - Low-voltage distribution systems",
    "question": "Before energizing a new 3-phase panel that feeds motors, what should be checked?",
    "options": [
      "Phase rotation and voltage",
      "Wall colour",
      "Break room location",
      "Cable jacket colour only"
    ],
    "answer": 0,
    "explanation": "Wrong voltage can damage loads. Wrong phase rotation can reverse motors. Both must be checked before startup."
  },
  {
    "id": 19,
    "category": "Task 9 - Low-voltage distribution systems",
    "question": "Why must panel directories be accurate?",
    "options": [
      "To improve power factor",
      "To identify circuits safely during operation and maintenance",
      "To increase available fault current",
      "To lower voltage drop automatically"
    ],
    "answer": 1,
    "explanation": "Accurate directories help isolate the correct circuit. Wrong labels can cause unsafe work. Clear identification improves troubleshooting."
  },
  {
    "id": 20,
    "category": "Task 10 - Power conditioning systems",
    "question": "A UPS is installed for a PLC system. What is its main purpose?",
    "options": [
      "Provide backup power during supply interruptions",
      "Increase motor horsepower",
      "Replace all fuses",
      "Change conduit type"
    ],
    "answer": 0,
    "explanation": "UPS means uninterruptible power supply. It supports critical loads during outages or dips. PLCs and controls often need stable power."
  },
  {
    "id": 21,
    "category": "Task 10 - Power conditioning systems",
    "question": "A metal oxide varistor, or MOV, is commonly used for:",
    "options": [
      "Surge suppression",
      "Motor speed measurement",
      "Phase rotation testing",
      "Ground rod installation"
    ],
    "answer": 0,
    "explanation": "An MOV changes resistance during overvoltage. It clamps voltage spikes. It is common in surge protection circuits."
  },
  {
    "id": 22,
    "category": "Task 11 - Bonding, grounding and ground-fault systems",
    "question": "What is the main purpose of bonding metal enclosures?",
    "options": [
      "Carry normal load current",
      "Provide a low-impedance fault-current path",
      "Increase voltage",
      "Reduce motor speed"
    ],
    "answer": 1,
    "explanation": "Bonding connects exposed metal parts together. Fault current returns to source and operates protection. This reduces shock hazard."
  },
  {
    "id": 23,
    "category": "Task 11 - Bonding, grounding and ground-fault systems",
    "question": "Ground fault detection on an ungrounded system usually provides:",
    "options": [
      "Alarm or indication of the first ground fault",
      "Higher motor torque",
      "Reduced conductor ampacity",
      "Automatic phase reversal"
    ],
    "answer": 0,
    "explanation": "Ungrounded systems may continue operating after one ground fault. Detection warns maintenance staff. The fault should be located before a second fault occurs."
  },
  {
    "id": 24,
    "category": "Task 11 - Bonding, grounding and ground-fault systems",
    "question": "Why is earth not relied on as the main fault-current path?",
    "options": [
      "Earth is usually too high resistance",
      "Earth always has zero resistance",
      "Earth increases breaker speed",
      "Earth carries all normal current"
    ],
    "answer": 0,
    "explanation": "Overcurrent devices need high fault current to trip quickly. Earth paths may not carry enough current. Bonding conductors provide the effective path."
  },
  {
    "id": 25,
    "category": "Task 12 - Batteries and power conversion systems",
    "question": "A battery bank remains hazardous after the AC charger is turned off because it:",
    "options": [
      "Stores electrical energy",
      "Becomes grounded automatically",
      "Loses all voltage instantly",
      "Changes into AC"
    ],
    "answer": 0,
    "explanation": "Batteries store chemical energy as DC electrical energy. They can deliver high fault current even when disconnected from AC. Isolation and PPE are important."
  },
  {
    "id": 26,
    "category": "Task 12 - Batteries and power conversion systems",
    "question": "An inverter is used to convert:",
    "options": [
      "AC to hydraulic pressure",
      "DC to AC",
      "AC to resistance",
      "Neutral current to ground current"
    ],
    "answer": 1,
    "explanation": "Inverters produce AC output from a DC source. They are used with batteries and solar systems. Output voltage and frequency must match the load."
  },
  {
    "id": 27,
    "category": "Task 13 - Renewable energy and storage systems",
    "question": "A photovoltaic array is disconnected from the inverter but exposed to sunlight. What should be assumed?",
    "options": [
      "DC voltage may still be present",
      "The array is fully de-energized",
      "It produces only AC voltage",
      "It has no shock hazard"
    ],
    "answer": 0,
    "explanation": "PV modules generate voltage when illuminated. Disconnecting the inverter does not stop module output. PV circuits must be treated carefully."
  },
  {
    "id": 28,
    "category": "Task 14 - High-voltage systems",
    "question": "Why are clearances critical around high-voltage equipment?",
    "options": [
      "To prevent flashover and accidental contact",
      "To reduce nameplate size",
      "To increase cable tray capacity",
      "To improve lighting level"
    ],
    "answer": 0,
    "explanation": "High voltage can arc through air. Clearances reduce flashover risk. Barriers and safe approach limits protect workers."
  },
  {
    "id": 29,
    "category": "Task 14 - High-voltage systems",
    "question": "Before working on high-voltage equipment, what is essential?",
    "options": [
      "Confirm isolation, grounding, testing, and permits/procedures",
      "Touch the enclosure to verify it is off",
      "Use only a standard receptacle tester",
      "Remove warning labels"
    ],
    "answer": 0,
    "explanation": "High-voltage systems require formal safe work steps. Isolation and grounding protect against induced or stored energy. Only qualified workers should perform this work."
  },
  {
    "id": 30,
    "category": "Task 15 - Transformers",
    "question": "A 75 kVA, 600 V, 3-phase transformer has primary current closest to:",
    "options": [
      "72 A",
      "125 A",
      "208 A",
      "600 A"
    ],
    "answer": 0,
    "explanation": "Use (I = VA ÷ (E × \sqrt3)). (75,000 ÷ (600 × 1.73) ≈ 72A). Three-phase current uses line voltage and √3."
  },
  {
    "id": 31,
    "category": "Task 15 - Transformers",
    "question": "Transformer impedance affects:",
    "options": [
      "Paint colour",
      "Available short-circuit current",
      "Motor enclosure type",
      "Lighting colour temperature"
    ],
    "answer": 1,
    "explanation": "Transformer impedance limits fault current. Lower impedance allows higher fault current. This affects equipment interrupting ratings."
  },
  {
    "id": 32,
    "category": "Task 15 - Transformers",
    "question": "A wye transformer secondary provides 120/208 V. What does 120 V represent?",
    "options": [
      "Line-to-line voltage",
      "Line-to-neutral voltage",
      "Ground rod voltage",
      "CT secondary voltage"
    ],
    "answer": 1,
    "explanation": "Wye systems have a neutral point. Line-to-neutral is the lower voltage. Line-to-line is 208 V."
  },
  {
    "id": 33,
    "category": "Task 16 - Raceways, cables, conductors and enclosures",
    "question": "A cable is installed in a wet industrial area. What must be verified?",
    "options": [
      "Cable is rated for wet locations",
      "Cable is the cheapest available",
      "Cable has no markings",
      "Cable is always NMD"
    ],
    "answer": 0,
    "explanation": "Environmental rating is critical. Wet locations require suitable insulation and cable type. Incorrect cable can fail or become unsafe."
  },
  {
    "id": 34,
    "category": "Task 16 - Raceways, cables, conductors and enclosures",
    "question": "Why are bushings installed on raceway ends?",
    "options": [
      "To protect conductor insulation from sharp edges",
      "To increase frequency",
      "To reduce transformer impedance",
      "To replace grounding conductors"
    ],
    "answer": 0,
    "explanation": "Raceway ends may damage insulation. Bushings provide a smooth protective surface. Damaged insulation can cause faults."
  },
  {
    "id": 35,
    "category": "Task 16 - Raceways, cables, conductors and enclosures",
    "question": "A conductor has 90°C insulation but is terminated on 75°C equipment terminals. What normally limits the connection?",
    "options": [
      "75°C terminal rating",
      "90°C insulation only",
      "Ambient light level",
      "Raceways always"
    ],
    "answer": 0,
    "explanation": "The lowest applicable rating controls. Terminals must not be overheated. Conductor ampacity must be applied correctly."
  },
  {
    "id": 36,
    "category": "Task 16 - Raceways, cables, conductors and enclosures",
    "question": "Why must enclosures have covers installed?",
    "options": [
      "To prevent contact with live parts and entry of debris",
      "To increase voltage",
      "To improve motor slip",
      "To remove need for bonding"
    ],
    "answer": 0,
    "explanation": "Covers protect people and equipment. Open enclosures expose wiring and terminals. They also allow dirt and moisture to enter."
  },
  {
    "id": 37,
    "category": "Task 16 - Raceways, cables, conductors and enclosures",
    "question": "A conductor pull has excessive tension. What is the risk?",
    "options": [
      "Insulation or conductor damage",
      "Higher power factor",
      "Lower available fault current",
      "Correct phase rotation"
    ],
    "answer": 0,
    "explanation": "Pulling too hard can stretch or damage conductors. Damaged insulation can fail under voltage. Pulling methods must control tension and friction."
  },
  {
    "id": 38,
    "category": "Task 17 - Branch circuitry and devices",
    "question": "A receptacle terminal is loose and carries load current. What hazard can result?",
    "options": [
      "Heating and arcing",
      "Lower voltage always",
      "Better bonding",
      "Zero resistance"
    ],
    "answer": 0,
    "explanation": "Loose connections increase resistance. Current through resistance creates heat. Arcing can damage devices and start fires."
  },
  {
    "id": 39,
    "category": "Task 17 - Branch circuitry and devices",
    "question": "A switch is installed in the neutral conductor instead of the ungrounded conductor. What is the danger?",
    "options": [
      "The load may remain energized when switched off",
      "The circuit becomes safer",
      "The breaker rating increases",
      "Power factor improves"
    ],
    "answer": 0,
    "explanation": "Switching the neutral can leave equipment live. A worker may think the load is de-energized. Switches should interrupt the ungrounded conductor."
  },
  {
    "id": 40,
    "category": "Task 17 - Branch circuitry and devices",
    "question": "A device is rated 250 V but is installed on a 600 V circuit. What is wrong?",
    "options": [
      "Voltage rating is too low",
      "Current becomes zero",
      "Device becomes more efficient",
      "Grounding improves"
    ],
    "answer": 0,
    "explanation": "Devices must match system voltage. Underrated devices can arc or fail. Always check voltage and current ratings."
  },
  {
    "id": 41,
    "category": "Task 17 - Branch circuitry and devices",
    "question": "A three-phase receptacle-fed machine rotates backward. What is likely incorrect?",
    "options": [
      "Phase sequence",
      "Neutral colour",
      "Ground rod depth",
      "Device cover size"
    ],
    "answer": 0,
    "explanation": "Three-phase motor direction depends on phase order. Incorrect phase sequence reverses rotation. Rotation must be verified before use."
  },
  {
    "id": 42,
    "category": "Task 17 - Branch circuitry and devices",
    "question": "Why is correct receptacle polarity important?",
    "options": [
      "It prevents parts intended to be neutral from becoming energized",
      "It increases voltage",
      "It eliminates all overcurrent protection",
      "It reduces motor slip"
    ],
    "answer": 0,
    "explanation": "Reversed polarity can energize equipment parts unexpectedly. This creates shock risk during servicing. Correct wiring improves safety."
  },
  {
    "id": 43,
    "category": "Task 18 - HVAC systems",
    "question": "A thermostat controls a 24 V HVAC circuit. What normally supplies the 24 V?",
    "options": [
      "Control transformer",
      "Grounding electrode",
      "CT cabinet",
      "Lighting dimmer"
    ],
    "answer": 0,
    "explanation": "HVAC controls commonly use 24 V. A transformer steps down line voltage. It supplies thermostats, relays, and contactors."
  },
  {
    "id": 44,
    "category": "Task 18 - HVAC systems",
    "question": "A contactor coil is energized, but the compressor does not start. What should be checked?",
    "options": [
      "Load voltage through contactor and overloads",
      "Wall paint colour",
      "Thermostat cover style",
      "Ground rod length only"
    ],
    "answer": 0,
    "explanation": "A closed contactor should pass power to the load. Open contacts, overloads, or supply problems can stop the compressor. Voltage testing must be done safely."
  },
  {
    "id": 45,
    "category": "Task 18 - HVAC systems",
    "question": "DDC in HVAC controls stands for:",
    "options": [
      "Direct digital control",
      "Double disconnect contactor",
      "Dry duct cable",
      "Direct diode circuit"
    ],
    "answer": 0,
    "explanation": "DDC systems use digital controllers. They read inputs and operate outputs. They are common in building automation."
  },
  {
    "id": 46,
    "category": "Task 19 - Electric heating systems and controls",
    "question": "A 5 kW heater operates at 240 V. What current does it draw?",
    "options": [
      "12.5 A",
      "20.8 A",
      "24 A",
      "50 A"
    ],
    "answer": 1,
    "explanation": "Use (I = P/E). (5000 ÷ 240 = 20.8A). The heater draws about 20.8 amps."
  },
  {
    "id": 47,
    "category": "Task 19 - Electric heating systems and controls",
    "question": "What is the purpose of a high-limit control in an electric heating system?",
    "options": [
      "Prevent overheating",
      "Increase heater wattage",
      "Reverse phase rotation",
      "Convert AC to DC"
    ],
    "answer": 0,
    "explanation": "High-limit controls open when temperature becomes unsafe. They protect equipment and surroundings. They are safety controls, not normal thermostats."
  },
  {
    "id": 48,
    "category": "Task 19 - Electric heating systems and controls",
    "question": "A heating contactor has burned contacts. What is a likely cause?",
    "options": [
      "Arcing under load or loose connections",
      "Correct operation always",
      "Low room temperature only",
      "Excessive grounding"
    ],
    "answer": 0,
    "explanation": "Heating loads draw significant current. Poor contacts arc and overheat. Contacts and terminations must be inspected."
  },
  {
    "id": 49,
    "category": "Task 20 - Exit and emergency lighting systems",
    "question": "Emergency lighting must operate when:",
    "options": [
      "Normal power fails",
      "The thermostat calls for heat",
      "Motor rotation reverses",
      "Power factor improves"
    ],
    "answer": 0,
    "explanation": "Emergency lighting helps occupants exit safely. It may use batteries or emergency power. Testing confirms reliable operation."
  },
  {
    "id": 50,
    "category": "Task 20 - Exit and emergency lighting systems",
    "question": "An emergency light fails immediately during battery test. What is likely?",
    "options": [
      "Battery or charger failure",
      "Correct operation",
      "Ground rod problem only",
      "Wrong phase rotation"
    ],
    "answer": 0,
    "explanation": "Emergency lights should remain on during testing. Immediate failure suggests battery or charging trouble. The unit must be repaired or replaced."
  },
  {
    "id": 51,
    "category": "Task 21 - Cathodic protection systems",
    "question": "Cathodic protection is used mainly to protect metal from:",
    "options": [
      "Corrosion",
      "Overvoltage",
      "Low frequency",
      "Harmonics"
    ],
    "answer": 0,
    "explanation": "Cathodic protection reduces corrosion of buried or submerged metal. It is used on tanks, pipes, and structures. The protected metal acts as the cathode."
  },
  {
    "id": 52,
    "category": "Task 21 - Cathodic protection systems",
    "question": "A sacrificial anode protects steel because it:",
    "options": [
      "Corrodes instead of the steel",
      "Increases AC voltage",
      "Replaces overcurrent protection",
      "Stops all current flow"
    ],
    "answer": 0,
    "explanation": "Sacrificial anodes are more active metals. They corrode preferentially. This protects the steel structure."
  },
  {
    "id": 53,
    "category": "Task 22 - Motor starters and control devices",
    "question": "In a three-wire control circuit, the start pushbutton is normally:",
    "options": [
      "Normally open",
      "Normally closed",
      "Always grounded",
      "Always fused closed"
    ],
    "answer": 0,
    "explanation": "Pressing start closes the circuit. This energizes the starter coil. A seal-in contact maintains coil power."
  },
  {
    "id": 54,
    "category": "Task 22 - Motor starters and control devices",
    "question": "In a motor control circuit, the stop pushbutton is normally:",
    "options": [
      "Normally closed",
      "Normally open",
      "Always bypassed",
      "Connected to ground only"
    ],
    "answer": 0,
    "explanation": "Pressing stop opens the control circuit. This de-energizes the coil. A broken stop circuit also prevents starting."
  },
  {
    "id": 55,
    "category": "Task 22 - Motor starters and control devices",
    "question": "What is the purpose of a seal-in auxiliary contact?",
    "options": [
      "Keep the starter coil energized after start is released",
      "Increase motor horsepower",
      "Replace overload protection",
      "Convert AC to DC"
    ],
    "answer": 0,
    "explanation": "The start button is momentary. The auxiliary contact bypasses it after energization. The stop button opens the circuit to stop the motor."
  },
  {
    "id": 56,
    "category": "Task 22 - Motor starters and control devices",
    "question": "A reversing starter uses interlocks to prevent:",
    "options": [
      "Forward and reverse contactors closing together",
      "Motor cooling",
      "Overload operation",
      "Correct rotation"
    ],
    "answer": 0,
    "explanation": "If both contactors close, phase conductors can be shorted. Mechanical and electrical interlocks prevent this. They are required for safe reversing control."
  },
  {
    "id": 57,
    "category": "Task 22 - Motor starters and control devices",
    "question": "A starter coil is rated 120 V but receives only 80 V. What may happen?",
    "options": [
      "Chatter or failure to pull in",
      "Normal operation always",
      "Motor speed doubles",
      "Overloads become unnecessary"
    ],
    "answer": 0,
    "explanation": "The coil needs rated voltage for magnetic force. Low voltage causes weak pull-in. Chatter can damage contacts and coils."
  },
  {
    "id": 58,
    "category": "Task 22 - Motor starters and control devices",
    "question": "Motor overload contacts are usually connected:",
    "options": [
      "In series with the starter coil circuit",
      "Across the motor windings only",
      "In the grounding conductor",
      "Across the service neutral"
    ],
    "answer": 0,
    "explanation": "When overload contacts open, the coil drops out. This stops the motor. The overload protects the motor from overheating."
  },
  {
    "id": 59,
    "category": "Task 22 - Motor starters and control devices",
    "question": "A motor starts only while the start button is held. What is likely faulty?",
    "options": [
      "Seal-in contact or holding circuit",
      "Grounding electrode",
      "Motor bearings only",
      "Transformer oil"
    ],
    "answer": 0,
    "explanation": "The seal-in circuit holds the coil after start is released. If it is open, the coil drops out. This is a common control fault."
  },
  {
    "id": 60,
    "category": "Task 23 - Drives",
    "question": "A VFD controls an induction motor mainly by changing:",
    "options": [
      "Frequency and voltage",
      "Ground resistance",
      "Conduit fill",
      "Receptacle polarity"
    ],
    "answer": 0,
    "explanation": "Motor speed depends on supply frequency. The VFD adjusts voltage with frequency. This provides controlled motor speed."
  },
  {
    "id": 61,
    "category": "Task 23 - Drives",
    "question": "A VFD trips on overcurrent during acceleration. What may help?",
    "options": [
      "Increase acceleration time",
      "Remove bonding",
      "Short the motor leads",
      "Increase load suddenly"
    ],
    "answer": 0,
    "explanation": "Fast acceleration requires high current. A longer ramp can reduce current demand. Mechanical load should also be checked."
  },
  {
    "id": 62,
    "category": "Task 23 - Drives",
    "question": "A VFD trips on overvoltage during deceleration. What is likely happening?",
    "options": [
      "Regenerated energy is raising the DC bus voltage",
      "The motor has no current",
      "The grounding electrode is too large",
      "The drive output is pure resistance"
    ],
    "answer": 0,
    "explanation": "A slowing motor can act as a generator. Energy returns to the drive DC bus. Longer deceleration or braking equipment may be required."
  },
  {
    "id": 63,
    "category": "Task 23 - Drives",
    "question": "Why is shielded cable often used between a VFD and motor?",
    "options": [
      "To reduce electromagnetic interference",
      "To increase motor slip",
      "To reduce conductor ampacity",
      "To replace overloads"
    ],
    "answer": 0,
    "explanation": "VFDs use fast switching. This can create electrical noise. Shielding and bonding help reduce EMI."
  },
  {
    "id": 64,
    "category": "Task 23 - Drives",
    "question": "PWM in a VFD means:",
    "options": [
      "Pulse-width modulation",
      "Power wire meter",
      "Phase watt motor",
      "Protective winding method"
    ],
    "answer": 0,
    "explanation": "PWM varies pulse width to control output. It creates an effective AC waveform. IGBTs commonly perform the switching."
  },
  {
    "id": 65,
    "category": "Task 24 - Other fixed equipment and associated controls",
    "question": "A conveyor safety interlock opens when a guard is removed. What should happen?",
    "options": [
      "Equipment should stop or be prevented from starting",
      "Motor speed should increase",
      "Power factor should improve",
      "Voltage should double"
    ],
    "answer": 0,
    "explanation": "Safety interlocks prevent operation in unsafe conditions. Removing a guard should interrupt the control circuit. Bypassing interlocks is dangerous."
  },
  {
    "id": 66,
    "category": "Task 24 - Other fixed equipment and associated controls",
    "question": "A float switch in a sump system is used to:",
    "options": [
      "Detect liquid level",
      "Measure motor speed",
      "Increase voltage",
      "Test insulation resistance"
    ],
    "answer": 0,
    "explanation": "Float switches change state with liquid level. They can start or stop pumps. They are common in industrial controls."
  },
  {
    "id": 67,
    "category": "Task 24 - Other fixed equipment and associated controls",
    "question": "A pressure switch opens at a high pressure setpoint. What is its control function?",
    "options": [
      "Protect or control equipment based on pressure",
      "Measure phase rotation",
      "Change AC to DC",
      "Replace the transformer"
    ],
    "answer": 0,
    "explanation": "Pressure switches respond to system pressure. They can start, stop, or protect equipment. Setpoints must match the process."
  },
  {
    "id": 68,
    "category": "Task 25 - Motors",
    "question": "A 4-pole motor on 60 Hz has synchronous speed of:",
    "options": [
      "900 rpm",
      "1200 rpm",
      "1800 rpm",
      "3600 rpm"
    ],
    "answer": 2,
    "explanation": "Use (N_s = 120f/P). (120 × 60 ÷ 4 = 1800rpm). Actual induction motor speed is slightly lower due to slip."
  },
  {
    "id": 69,
    "category": "Task 25 - Motors",
    "question": "A motor has synchronous speed of 1800 rpm and runs at 1746 rpm. What is percent slip?",
    "options": [
      "1%",
      "2%",
      "3%",
      "6%"
    ],
    "answer": 2,
    "explanation": "Slip is ((1800 - 1746) ÷ 1800 × 100). (54 ÷ 1800 × 100 = 3%). Slip is required for induction motor torque."
  },
  {
    "id": 70,
    "category": "Task 25 - Motors",
    "question": "A three-phase motor rotates backward. What correction is normally made after lockout?",
    "options": [
      "Swap any two phase conductors",
      "Swap neutral and bond",
      "Increase fuse size",
      "Reverse the grounding conductor"
    ],
    "answer": 0,
    "explanation": "Phase sequence controls rotation. Interchanging two phases reverses the motor. Lockout is required before making changes."
  },
  {
    "id": 71,
    "category": "Task 25 - Motors",
    "question": "Motor nameplate FLA is used mainly for:",
    "options": [
      "Overload setting and circuit sizing",
      "Paint selection",
      "Ground rod depth",
      "PLC programming language"
    ],
    "answer": 0,
    "explanation": "FLA means full-load amperage. Overload protection is based on motor current. Circuit conductors and protection also depend on nameplate data."
  },
  {
    "id": 72,
    "category": "Task 25 - Motors",
    "question": "A TEFC motor is:",
    "options": [
      "Totally enclosed fan cooled",
      "Transformer energized field coil",
      "Three electrical fuse circuit",
      "Terminal earth fault conductor"
    ],
    "answer": 0,
    "explanation": "TEFC describes a motor enclosure. It is enclosed and cooled by an external fan. It is common in dusty industrial areas."
  },
  {
    "id": 73,
    "category": "Task 25 - Motors",
    "question": "A motor has low insulation resistance to ground. What is the safest action?",
    "options": [
      "Do not energize until investigated and corrected",
      "Increase fuse size",
      "Reverse two phases",
      "Remove bonding"
    ],
    "answer": 0,
    "explanation": "Low insulation resistance suggests leakage or moisture. Energizing can cause shock or fault. The motor should be dried, repaired, or replaced."
  },
  {
    "id": 74,
    "category": "Task 26 - Signalling systems",
    "question": "In a fire alarm system, EOL means:",
    "options": [
      "End of line",
      "Emergency output load",
      "Electrical overload limit",
      "Earth open loop"
    ],
    "answer": 0,
    "explanation": "EOL devices supervise the circuit. They help detect opens or faults. Fire alarm wiring must remain supervised."
  },
  {
    "id": 75,
    "category": "Task 26 - Signalling systems",
    "question": "A supervised alarm circuit shows trouble after a conductor opens. Why?",
    "options": [
      "The system detects loss of circuit continuity",
      "The voltage became higher",
      "The horn became louder",
      "The battery improved"
    ],
    "answer": 0,
    "explanation": "Supervision monitors circuit integrity. An open circuit creates a trouble condition. This helps ensure alarms remain functional."
  },
  {
    "id": 76,
    "category": "Task 26 - Signalling systems",
    "question": "A signal device does not operate, but the circuit has correct voltage. What should be checked?",
    "options": [
      "Device condition and connection polarity if applicable",
      "Motor slip",
      "Transformer oil level only",
      "Cable tray width"
    ],
    "answer": 0,
    "explanation": "Some signalling devices are polarity sensitive. Loose connections or failed devices can prevent operation. Testing must follow manufacturer instructions."
  },
  {
    "id": 77,
    "category": "Task 26 - Signalling systems",
    "question": "Why should signalling cables be separated from power conductors when required?",
    "options": [
      "To reduce interference and induced noise",
      "To increase motor horsepower",
      "To reduce grounding",
      "To change AC to DC"
    ],
    "answer": 0,
    "explanation": "Power conductors can create electromagnetic noise. Low-voltage signalling circuits are sensitive. Separation improves reliability."
  },
  {
    "id": 78,
    "category": "Task 27 - Communication systems",
    "question": "PoE stands for:",
    "options": [
      "Power over Ethernet",
      "Phase over earth",
      "Panel output equipment",
      "Pressure operated enclosure"
    ],
    "answer": 0,
    "explanation": "PoE supplies power and data on Ethernet cabling. It is used for cameras, phones, and access points. Cable and equipment ratings must be suitable."
  },
  {
    "id": 79,
    "category": "Task 27 - Communication systems",
    "question": "TCP/IP is mainly associated with:",
    "options": [
      "Network communication",
      "Motor overloads",
      "Transformer oil testing",
      "Heating contactors"
    ],
    "answer": 0,
    "explanation": "TCP/IP is a communication protocol suite. It allows devices to exchange data over networks. Industrial systems often use Ethernet-based communication."
  },
  {
    "id": 80,
    "category": "Task 27 - Communication systems",
    "question": "A data cable has excessive untwisting at termination. What problem may occur?",
    "options": [
      "Crosstalk and poor communication performance",
      "Higher available fault current",
      "Better grounding",
      "Increased motor torque"
    ],
    "answer": 0,
    "explanation": "Twisted pairs reduce noise and crosstalk. Untwisting too much degrades performance. Proper termination preserves signal quality."
  },
  {
    "id": 81,
    "category": "Task 28 - Building automation systems",
    "question": "An HMI is used mainly to:",
    "options": [
      "Allow an operator to interact with a control system",
      "Measure ground resistance",
      "Replace motor overloads",
      "Increase transformer voltage"
    ],
    "answer": 0,
    "explanation": "HMI means human machine interface. It displays status and allows commands. Operators use it to control or monitor systems."
  },
  {
    "id": 82,
    "category": "Task 28 - Building automation systems",
    "question": "A building automation system receives temperature, pressure, and occupancy inputs. What does it use these for?",
    "options": [
      "Control decisions and equipment operation",
      "Conduit bending only",
      "Ground rod spacing",
      "Fuse replacement"
    ],
    "answer": 0,
    "explanation": "Automation systems process input signals. They control outputs such as dampers, fans, and valves. This improves building operation."
  },
  {
    "id": 83,
    "category": "Task 28 - Building automation systems",
    "question": "EMI can affect building automation communication by:",
    "options": [
      "Causing noise and data errors",
      "Increasing transformer kVA",
      "Improving signal quality",
      "Removing need for shielding"
    ],
    "answer": 0,
    "explanation": "EMI means electromagnetic interference. It can corrupt low-voltage communication signals. Shielding, grounding, and separation reduce problems."
  },
  {
    "id": 84,
    "category": "Task 29 - Input/output devices",
    "question": "An RTD is used to measure:",
    "options": [
      "Temperature",
      "Motor speed only",
      "Phase rotation",
      "Ground resistance"
    ],
    "answer": 0,
    "explanation": "RTD means resistance temperature detector. Its resistance changes with temperature. It is common in process control."
  },
  {
    "id": 85,
    "category": "Task 29 - Input/output devices",
    "question": "A proximity sensor detects metal parts without contact. What type of input is it?",
    "options": [
      "Discrete input",
      "Analog output",
      "Motor starter",
      "Power transformer"
    ],
    "answer": 0,
    "explanation": "A proximity sensor usually provides on/off status. This is a discrete PLC input. It detects presence or absence of a target."
  },
  {
    "id": 86,
    "category": "Task 29 - Input/output devices",
    "question": "A 4–20 mA pressure transmitter sends 12 mA. What does this usually represent?",
    "options": [
      "Mid-range signal",
      "Zero signal",
      "Full-scale only",
      "Short circuit always"
    ],
    "answer": 0,
    "explanation": "In a 4–20 mA loop, 4 mA is typically zero process value. 20 mA is full scale. 12 mA is halfway between them."
  },
  {
    "id": 87,
    "category": "Task 29 - Input/output devices",
    "question": "A PLC output energizes a relay coil. What is the relay used for?",
    "options": [
      "Interface between PLC and field load",
      "Measure insulation resistance",
      "Change cable colour",
      "Increase processor memory"
    ],
    "answer": 0,
    "explanation": "Relays allow a control output to switch another circuit. They provide isolation and contact ratings. They are common PLC output devices."
  },
  {
    "id": 88,
    "category": "Task 29 - Input/output devices",
    "question": "A normally open limit switch is not actuated. What is its contact state?",
    "options": [
      "Open",
      "Closed",
      "Shorted to ground",
      "Overloaded"
    ],
    "answer": 0,
    "explanation": "Normally open means open in the normal/rest position. It closes when actuated. NO and NC states are important in controls."
  },
  {
    "id": 89,
    "category": "Task 29 - Input/output devices",
    "question": "A normally closed stop input opens when pressed. Why is NC preferred for stop circuits?",
    "options": [
      "Broken wire also stops or prevents operation",
      "It increases motor speed",
      "It reduces voltage to zero permanently",
      "It prevents all overloads"
    ],
    "answer": 0,
    "explanation": "NC stop circuits fail safer than NO stop circuits. An open wire interrupts the circuit. This helps prevent unexpected operation."
  },
  {
    "id": 90,
    "category": "Task 29 - Input/output devices",
    "question": "An analog input receives 0–10 V from a level sensor. What does the voltage represent?",
    "options": [
      "A proportional process value",
      "Phase sequence",
      "Grounding resistance only",
      "Breaker interrupting rating"
    ],
    "answer": 0,
    "explanation": "Analog signals vary over a range. The controller scales voltage to a process value. Examples include level, speed, and pressure."
  },
  {
    "id": 91,
    "category": "Task 29 - Input/output devices",
    "question": "A float switch is best described as:",
    "options": [
      "A level sensing input device",
      "A transformer winding",
      "A power factor capacitor",
      "A VFD output transistor"
    ],
    "answer": 0,
    "explanation": "Float switches change state with liquid level. They are often discrete inputs. They can control pumps or alarms."
  },
  {
    "id": 92,
    "category": "Task 30 - Automated control systems",
    "question": "A PLC scan cycle generally performs which sequence?",
    "options": [
      "Read inputs, execute logic, update outputs",
      "Update outputs, remove power, erase program",
      "Measure insulation, bend conduit, start motor",
      "Reverse phases, test batteries, print labels"
    ],
    "answer": 0,
    "explanation": "PLCs read field input status. Then they solve the program logic. Finally, they update outputs."
  },
  {
    "id": 93,
    "category": "Task 30 - Automated control systems",
    "question": "In PLC programming, JSR commonly means:",
    "options": [
      "Jump to subroutine",
      "Junction short resistor",
      "Job safety report",
      "Jog speed relay"
    ],
    "answer": 0,
    "explanation": "JSR calls another program routine. It helps organize control logic. Subroutines simplify repeated tasks."
  },
  {
    "id": 94,
    "category": "Task 30 - Automated control systems",
    "question": "EEPROM memory is useful because it:",
    "options": [
      "Can retain programmed information without power",
      "Requires constant AC voltage to remember data",
      "Works only as a fuse",
      "Measures motor current"
    ],
    "answer": 0,
    "explanation": "EEPROM is electrically erasable programmable read-only memory. It stores information without continuous power. It is used in electronic controls."
  },
  {
    "id": 95,
    "category": "Task 30 - Automated control systems",
    "question": "A PLC output is on in software, but the field device is off. What should be checked?",
    "options": [
      "Output module, wiring, fuse, and field power",
      "Wall colour",
      "Motor bearing alignment only",
      "Ground rod depth only"
    ],
    "answer": 0,
    "explanation": "The PLC command may be correct but the field circuit may be open. Output power, fuses, terminals, and device condition must be checked. Troubleshooting should follow the circuit."
  },
  {
    "id": 96,
    "category": "Task 30 - Automated control systems",
    "question": "Why are control systems documented with I/O lists?",
    "options": [
      "To identify field devices, addresses, and signal types",
      "To improve paint colour",
      "To increase transformer kVA",
      "To reduce motor slip automatically"
    ],
    "answer": 0,
    "explanation": "I/O lists connect real devices to controller addresses. They help installation, testing, and troubleshooting. They reduce wiring and programming errors."
  },
  {
    "id": 97,
    "category": "Task 30 - Automated control systems",
    "question": "A safety-rated control circuit should not be bypassed because:",
    "options": [
      "It can allow unsafe machine operation",
      "It improves troubleshooting permanently",
      "It increases production safely",
      "It reduces need for PPE"
    ],
    "answer": 0,
    "explanation": "Safety circuits protect people from hazards. Bypassing them defeats protection. Repairs must follow safe procedures and standards."
  },
  {
    "id": 98,
    "category": "Task 31 - Pneumatic and hydraulic control systems",
    "question": "A solenoid valve in a pneumatic system is used to:",
    "options": [
      "Electrically control air flow",
      "Measure transformer voltage",
      "Increase cable ampacity",
      "Detect phase rotation"
    ],
    "answer": 0,
    "explanation": "The coil moves a valve mechanism. This directs compressed air. PLCs often control pneumatic solenoid valves."
  },
  {
    "id": 99,
    "category": "Task 31 - Pneumatic and hydraulic control systems",
    "question": "A pressure switch in a hydraulic system opens at high pressure. What is its purpose?",
    "options": [
      "Protect or control the system based on pressure",
      "Reverse motor phase sequence",
      "Measure temperature only",
      "Convert DC to AC"
    ],
    "answer": 0,
    "explanation": "Pressure switches respond to system pressure. They can stop pumps, alarm, or control valves. Correct setpoint is important."
  },
  {
    "id": 100,
    "category": "Task 31 - Pneumatic and hydraulic control systems",
    "question": "Why should hydraulic and pneumatic systems be depressurized before maintenance?",
    "options": [
      "Stored pressure can cause unexpected movement or injury",
      "Pressure improves lockout",
      "Air pressure removes electrical shock risk",
      "Hydraulic oil stops all motion automatically"
    ],
    "answer": 0,
    "explanation": "Fluid or air pressure stores energy. Actuators can move unexpectedly if pressure is released suddenly. Energy isolation includes electrical and mechanical sources."
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

const shuffledIndustrialElectricianInterprovincialPracticeExamQuestions =
  shuffleArray(industrialElectricianInterprovincialPracticeExamQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "industrial-electrician",
  tradeTitle: "Industrial Electrician",
  sectionTitle: "Interprovincial Practice Exam",
  questionTimeSeconds: 90,
  questions: shuffledIndustrialElectricianInterprovincialPracticeExamQuestions
});

window.addEventListener("load", () => {
  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");

  if (hintBtn) hintBtn.style.display = "none";
  if (hintBox) hintBox.classList.add("hidden");
  if (hintText) hintText.textContent = "";
});
