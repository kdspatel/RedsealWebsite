const industrialElectricianInterprovincialSet2HardQuestions = [
  {
    "id": 1,
    "category": "Task 1 — Performs safety-related functions",
    "question": "A VFD has been locked out, but the DC bus indicator is still lit. What should the electrician do before touching internal parts?",
    "options": [
      "Start work because the disconnect is open",
      "Wait, verify DC bus voltage, and follow discharge instructions",
      "Short the DC bus with a screwdriver",
      "Remove the ground conductor first"
    ],
    "answer": 1,
    "explanation": "VFD capacitors can store dangerous energy after power is off. The DC bus must be verified with a properly rated meter. Manufacturer discharge time and procedures must be followed. ---"
  },
  {
    "id": 2,
    "category": "Task 1 — Performs safety-related functions",
    "question": "A worker must test voltage in a live 600 V control cabinet. What is the most important safety requirement?",
    "options": [
      "Use any meter available",
      "Wear only safety glasses",
      "Use proper PPE, rated test equipment, and safe work procedure",
      "Hold both probes with bare hands"
    ],
    "answer": 2,
    "explanation": "Live testing exposes the worker to shock and arc-flash hazards. The meter and leads must be rated for the system. PPE and procedure reduce risk during justified energized work. --- ## Task 2 — Uses Tools and Equipment — 2 Questions"
  },
  {
    "id": 3,
    "category": "Task 2 — Uses tools and equipment",
    "question": "A clamp meter is placed around all three phase conductors of a balanced motor circuit. What reading is expected?",
    "options": [
      "Full motor current",
      "Three times motor current",
      "Near zero",
      "Line voltage"
    ],
    "answer": 2,
    "explanation": "The magnetic fields of balanced phase currents cancel. A clamp meter must measure one conductor at a time. Clamping all phases together gives an incorrect reading. ---"
  },
  {
    "id": 4,
    "category": "Task 2 — Uses tools and equipment",
    "question": "A motor insulation test gives a very low megohm reading after the motor was washed down. What is the best conclusion?",
    "options": [
      "The motor is definitely safe",
      "Moisture or insulation breakdown may be present",
      "The phase rotation is wrong",
      "The motor has too much service factor"
    ],
    "answer": 1,
    "explanation": "Low insulation resistance indicates leakage to ground. Moisture can reduce winding insulation resistance. The motor should not be energized until corrected. --- ## Task 3 — Organizes Work — 2 Questions"
  },
  {
    "id": 5,
    "category": "Task 3 — Organizes work",
    "question": "A shutdown job requires replacing a feeder breaker, testing a motor, and restarting production. What should be planned first?",
    "options": [
      "Only the restart time",
      "Work sequence, lockout points, tools, permits, and testing steps",
      "The colour of labels",
      "The fastest way to bypass safety devices"
    ],
    "answer": 1,
    "explanation": "Shutdown work must be planned to reduce downtime and risk. Lockout and testing steps protect workers and equipment. A clear sequence prevents missed steps during restart. ---"
  },
  {
    "id": 6,
    "category": "Task 3 — Organizes work",
    "question": "A one-line diagram and field wiring do not match. What is the safest response?",
    "options": [
      "Assume the drawing is wrong and continue",
      "Assume the field wiring is correct and energize",
      "Stop and verify with approved documentation or supervision",
      "Remove conductors until the circuit works"
    ],
    "answer": 2,
    "explanation": "Drawing conflicts can lead to wrong connections. Verification prevents equipment damage and unsafe energization. Changes should be approved and recorded. --- ## Task 4 — Fabricates and Installs Support Components — 1 Question"
  },
  {
    "id": 7,
    "category": "Task 4 — Fabricates and installs support components",
    "question": "A heavy cable tray run is installed with undersized supports. What is the main risk?",
    "options": [
      "Increased power factor",
      "Mechanical failure and cable damage",
      "Reduced motor slip",
      "Better cooling"
    ],
    "answer": 1,
    "explanation": "Cable tray supports must carry cable and tray weight. Undersized supports can bend, loosen, or collapse. Cable insulation and connections may be damaged. --- ## Task 5 — Commissions and Decommissions Electrical Systems — 2 Questions"
  },
  {
    "id": 8,
    "category": "Task 5 — Commissions and decommissions electrical systems",
    "question": "During commissioning, a motor overload is set much higher than nameplate FLA. What is the problem?",
    "options": [
      "It may not protect the motor from overheating",
      "It improves starting torque safely",
      "It corrects phase rotation",
      "It lowers voltage drop to zero"
    ],
    "answer": 0,
    "explanation": "Overloads must match motor nameplate current. A high setting may allow damaging current to continue. Incorrect overload settings can destroy windings. ---"
  },
  {
    "id": 9,
    "category": "Task 5 — Commissions and decommissions electrical systems",
    "question": "Before removing an old PLC-controlled machine, why should the I/O wiring be traced?",
    "options": [
      "I/O wiring may be shared with other machines or alarms",
      "PLC wires never remain energized",
      "All PLC wiring is always abandoned",
      "It increases cable ampacity"
    ],
    "answer": 0,
    "explanation": "Industrial control wiring may connect to other systems. Removing the wrong wire can cause faults or shutdowns. Tracing prevents unsafe decommissioning. --- # B — Generating, Transmission, Distribution and Service Systems — 23 Questions ## Task 7 — Supply Services and Metering Equipment — 3 Questions"
  },
  {
    "id": 10,
    "category": "Task 7 — Supply services and metering equipment",
    "question": "A 347/600 V service feeds a 600 V motor. How is the motor connected?",
    "options": [
      "Line to neutral",
      "Line to line",
      "Neutral to bond",
      "CT secondary to load"
    ],
    "answer": 1,
    "explanation": "In a 347/600 V system, 600 V is line-to-line. Three-phase motors connect across the phase conductors. 347 V is line-to-neutral. ---"
  },
  {
    "id": 11,
    "category": "Task 7 — Supply services and metering equipment",
    "question": "A CT secondary circuit is opened while primary current is flowing. What hazard can occur?",
    "options": [
      "High voltage can develop on the CT secondary",
      "Current becomes zero instantly",
      "Meter accuracy improves",
      "Transformer oil overheats only"
    ],
    "answer": 0,
    "explanation": "CT secondaries should not be opened under load. Dangerous voltage may appear across the open secondary. CT circuits must be shorted or handled correctly. ---"
  },
  {
    "id": 12,
    "category": "Task 7 — Supply services and metering equipment",
    "question": "A three-phase meter shows incorrect demand after CT replacement. What should be checked first?",
    "options": [
      "CT ratio, polarity, and wiring",
      "Paint colour",
      "Motor bearing condition",
      "Emergency light battery"
    ],
    "answer": 0,
    "explanation": "Meter accuracy depends on correct CT installation. Wrong ratio or polarity causes incorrect readings. Meter wiring diagrams must be followed. --- ## Task 8 — Protection Devices — 4 Questions"
  },
  {
    "id": 13,
    "category": "Task 8 — Protection devices",
    "question": "A fuse with a higher amp rating is installed to stop nuisance blowing. What is the danger?",
    "options": [
      "Conductors and equipment may be underprotected",
      "Voltage becomes safer",
      "Fault current decreases automatically",
      "Motor speed improves"
    ],
    "answer": 0,
    "explanation": "Overcurrent devices protect conductors and equipment. Oversizing can allow overheating during overloads. The real cause of fuse operation must be found. ---"
  },
  {
    "id": 14,
    "category": "Task 8 — Protection devices",
    "question": "A breaker has 10 kAIC, but available fault current is calculated at 18 kA. What must be done?",
    "options": [
      "Use equipment rated for the available fault current",
      "Ignore the calculation",
      "Install a larger load",
      "Reverse phase rotation"
    ],
    "answer": 0,
    "explanation": "Interrupting rating must meet or exceed fault current. Underrated equipment may rupture during a fault. Fault-current ratings are critical for safety. ---"
  },
  {
    "id": 15,
    "category": "Task 8 — Protection devices",
    "question": "An overload relay trips after a motor runs for several minutes under heavy load. What condition is most likely?",
    "options": [
      "Sustained overload",
      "Instant short circuit",
      "Open control transformer primary",
      "Correct no-load operation"
    ],
    "answer": 0,
    "explanation": "Overloads respond to heat caused by excess current over time. Heavy mechanical load can raise motor current. The motor and driven equipment should be checked. ---"
  },
  {
    "id": 16,
    "category": "Task 8 — Protection devices",
    "question": "An SPD has long coiled conductors to the panel bus. What is the problem?",
    "options": [
      "Added lead impedance reduces surge protection effectiveness",
      "Surge protection improves",
      "Ground faults stop occurring",
      "Motor slip becomes zero"
    ],
    "answer": 0,
    "explanation": "Surge current rises very quickly. Long leads increase impedance and let voltage rise. SPD leads should be short and straight. --- ## Task 9 — Low-Voltage Distribution Systems — 3 Questions"
  },
  {
    "id": 17,
    "category": "Task 9 — Low-voltage distribution systems",
    "question": "A 600 V distribution panel feeds several motors. Why must phase rotation be verified?",
    "options": [
      "Motor direction depends on phase sequence",
      "It sets overload current automatically",
      "It lowers available fault current",
      "It changes AC into DC"
    ],
    "answer": 0,
    "explanation": "Three-phase motors rotate according to phase order. Incorrect rotation can damage pumps or conveyors. Rotation should be verified during commissioning. ---"
  },
  {
    "id": 18,
    "category": "Task 9 — Low-voltage distribution systems",
    "question": "A feeder conductor termination is discoloured at one phase only. What should be suspected?",
    "options": [
      "Loose connection or phase overload",
      "Proper torque",
      "Perfect balance",
      "Low resistance splice only"
    ],
    "answer": 0,
    "explanation": "Localized heat often means poor contact. It may also indicate high current on that phase. Terminations and load balance should be checked. ---"
  },
  {
    "id": 19,
    "category": "Task 9 — Low-voltage distribution systems",
    "question": "A switchboard has missing dead-front covers. Why is this unsafe?",
    "options": [
      "Energized parts may be exposed",
      "Voltage is reduced",
      "Power factor improves",
      "CT polarity changes"
    ],
    "answer": 0,
    "explanation": "Dead fronts prevent accidental contact with live parts. Missing covers allow tools or hands to contact energized bus. Equipment should be made safe before operation. --- ## Task 10 — Power Conditioning Systems — 2 Questions"
  },
  {
    "id": 20,
    "category": "Task 10 — Power conditioning systems",
    "question": "A PLC system resets whenever a large motor starts. Which equipment may help maintain control power?",
    "options": [
      "UPS or power conditioner",
      "Larger motor pulley only",
      "Smaller control wire only",
      "Reversed CT polarity"
    ],
    "answer": 0,
    "explanation": "Motor starting can cause voltage dips. A UPS or conditioner supports sensitive control power. Stable control voltage prevents nuisance resets. ---"
  },
  {
    "id": 21,
    "category": "Task 10 — Power conditioning systems",
    "question": "An MOV in a surge protector normally has:",
    "options": [
      "High resistance at normal voltage and low resistance during surge",
      "Zero resistance at all times",
      "Infinite resistance during surge",
      "Mechanical contacts only"
    ],
    "answer": 0,
    "explanation": "MOVs clamp transient overvoltage. They conduct heavily during a surge. This diverts surge energy away from equipment. --- ## Task 11 — Bonding, Grounding and Ground-Fault Protection/Detection — 3 Questions"
  },
  {
    "id": 22,
    "category": "Task 11 — Bonding, grounding and ground-fault systems",
    "question": "A metal enclosure is not bonded. A line conductor faults to the case. What can happen?",
    "options": [
      "The case may remain energized",
      "The breaker always trips instantly",
      "Voltage becomes zero safely",
      "Power factor improves"
    ],
    "answer": 0,
    "explanation": "Without bonding, fault current may not return effectively. The protective device may not operate. The enclosure becomes a shock hazard. ---"
  },
  {
    "id": 23,
    "category": "Task 11 — Bonding, grounding and ground-fault systems",
    "question": "A ground fault relay trips a feeder during a phase-to-ground fault. What is it responding to?",
    "options": [
      "Current leaving the intended circuit path",
      "Motor speed",
      "Transformer turns ratio",
      "Normal balanced load current"
    ],
    "answer": 0,
    "explanation": "Ground fault protection detects leakage or fault current to ground. It can trip before severe damage occurs. Settings must coordinate with the system. ---"
  },
  {
    "id": 24,
    "category": "Task 11 — Bonding, grounding and ground-fault systems",
    "question": "Why are bonding jumpers installed around non-metallic gaps in raceway systems?",
    "options": [
      "To maintain electrical continuity",
      "To increase conduit length",
      "To reduce voltage rating",
      "To remove grounding electrodes"
    ],
    "answer": 0,
    "explanation": "Metal raceways may form part of the bonding path. Non-metallic gaps can interrupt that path. Bonding jumpers restore continuity. --- ## Task 12 — Batteries, Power Conversion and Conversion Systems — 2 Questions"
  },
  {
    "id": 25,
    "category": "Task 12 — Batteries and power conversion systems",
    "question": "A battery charger output is DC because it contains:",
    "options": [
      "A rectifier section",
      "A phase rotation meter",
      "A pneumatic valve",
      "A CT cabinet"
    ],
    "answer": 0,
    "explanation": "Rectifiers convert AC to DC. Battery charging requires DC voltage. The charger may also regulate voltage and current. ---"
  },
  {
    "id": 26,
    "category": "Task 12 — Batteries and power conversion systems",
    "question": "A 48 V battery bank is shorted by a tool. Why is this dangerous even though voltage is low?",
    "options": [
      "Battery internal resistance can be very low, causing high current",
      "Low voltage cannot create heat",
      "DC cannot arc",
      "Batteries only supply current with utility power"
    ],
    "answer": 0,
    "explanation": "Battery fault current can be extremely high. A tool can overheat, arc, or explode. Insulated tools and protection are required. --- ## Task 13 — Renewable Energy and Energy Storage — 1 Question"
  },
  {
    "id": 27,
    "category": "Task 13 — Renewable energy and storage systems",
    "question": "A PV string is open-circuited in sunlight. What voltage may still be present?",
    "options": [
      "Open-circuit DC voltage",
      "Zero voltage only",
      "60 Hz AC only",
      "Pneumatic control voltage"
    ],
    "answer": 0,
    "explanation": "PV modules generate voltage whenever illuminated. Open circuit does not mean no voltage. PV conductors must be tested and isolated correctly. --- ## Task 14 — High-Voltage Systems — 2 Questions"
  },
  {
    "id": 28,
    "category": "Task 14 — High-voltage systems",
    "question": "A high-voltage cable is isolated but not grounded. What hazard may remain?",
    "options": [
      "Induced or stored charge",
      "Increased horsepower",
      "Correct phase rotation",
      "Reduced insulation resistance only"
    ],
    "answer": 0,
    "explanation": "High-voltage cables can retain capacitive charge. Nearby energized conductors can induce voltage. Approved grounding discharges and controls this energy. ---"
  },
  {
    "id": 29,
    "category": "Task 14 — High-voltage systems",
    "question": "Why is insulating oil tested in high-voltage transformers?",
    "options": [
      "To check dielectric strength and contamination",
      "To measure motor rpm",
      "To set PLC outputs",
      "To verify conduit fill"
    ],
    "answer": 0,
    "explanation": "Transformer oil insulates and cools. Moisture or contamination reduces dielectric strength. Testing helps prevent failure. --- ## Task 15 — Transformers — 3 Questions"
  },
  {
    "id": 30,
    "category": "Task 15 — Transformers",
    "question": "A 150 kVA, 600 V, three-phase transformer primary current is closest to:",
    "options": [
      "83 A",
      "144 A",
      "250 A",
      "600 A"
    ],
    "answer": 1,
    "explanation": "Use (I = VA ÷ (E × √3)). (150,000 ÷ (600 × 1.73) ≈ 144A). Three-phase current uses line voltage and √3. ---"
  },
  {
    "id": 31,
    "category": "Task 15 — Transformers",
    "question": "A transformer secondary current is 500 A and impedance is 4%. Approximate short-circuit current is:",
    "options": [
      "125 A",
      "500 A",
      "2000 A",
      "12,500 A"
    ],
    "answer": 3,
    "explanation": "Use (I_{SC} = I_{secondary} ÷ %Z) as decimal. (500 ÷ 0.04 = 12,500A). Lower percent impedance gives higher fault current. ---"
  },
  {
    "id": 32,
    "category": "Task 15 — Transformers",
    "question": "A delta-wye transformer secondary provides a neutral. Which side provides the neutral point?",
    "options": [
      "Wye side",
      "Delta side only",
      "Primary breaker",
      "CT secondary"
    ],
    "answer": 0,
    "explanation": "A wye connection has a common point. That point can be used as a neutral. Delta windings do not provide a neutral point by themselves. --- # C — Wiring Systems — 20 Questions ## Task 16 — Raceways, Cables, Conductors and Enclosures — 5 Questions"
  },
  {
    "id": 33,
    "category": "Task 16 — Raceways, cables, conductors and enclosures",
    "question": "A conductor pull has several 90° bends and high friction. What is the main concern?",
    "options": [
      "Pulling tension may damage insulation",
      "Voltage automatically increases",
      "Ground faults disappear",
      "Motor speed increases"
    ],
    "answer": 0,
    "explanation": "Excessive pulling tension can stretch conductors. Sharp bends and friction can scrape insulation. Pulling lubricant and proper methods reduce damage. ---"
  },
  {
    "id": 34,
    "category": "Task 16 — Raceways, cables, conductors and enclosures",
    "question": "A corrosive chemical area requires raceway selection based mainly on:",
    "options": [
      "Environmental suitability",
      "Motor horsepower",
      "PLC scan time",
      "Panel directory wording"
    ],
    "answer": 0,
    "explanation": "Corrosive locations can damage unsuitable raceways. Material ratings must match the environment. Failure can expose conductors or break bonding continuity. ---"
  },
  {
    "id": 35,
    "category": "Task 16 — Raceways, cables, conductors and enclosures",
    "question": "Why is conductor ampacity reduced in high ambient temperature?",
    "options": [
      "Conductors cannot dissipate heat as effectively",
      "Voltage becomes DC",
      "Current always stops",
      "Insulation becomes stronger"
    ],
    "answer": 0,
    "explanation": "Heat affects conductor insulation and ampacity. High ambient temperature requires correction factors. Underrated conductors may overheat. ---"
  },
  {
    "id": 36,
    "category": "Task 16 — Raceways, cables, conductors and enclosures",
    "question": "A metallic enclosure has unused openings. What should be done?",
    "options": [
      "Close them with approved plugs or covers",
      "Leave them open for cooling",
      "Fill them with paper",
      "Use tape only"
    ],
    "answer": 0,
    "explanation": "Open holes allow contact, debris, and moisture entry. Approved closures maintain enclosure protection. They also help preserve fire and mechanical integrity. ---"
  },
  {
    "id": 37,
    "category": "Task 16 — Raceways, cables, conductors and enclosures",
    "question": "LVT cable stands for:",
    "options": [
      "Low voltage thermoplastic",
      "Line voltage transformer",
      "Locked voltage test",
      "Load valve terminal"
    ],
    "answer": 0,
    "explanation": "LVT means low voltage thermoplastic. Cable markings identify insulation and use. The cable must suit the installation conditions. --- ## Task 17 — Branch Circuitry and Devices — 5 Questions"
  },
  {
    "id": 38,
    "category": "Task 17 — Branch circuitry and devices",
    "question": "A 15 A receptacle is repeatedly used for a 25 A load. What is the likely hazard?",
    "options": [
      "Overheating of device contacts",
      "Improved voltage regulation",
      "Lower current draw",
      "Better grounding"
    ],
    "answer": 0,
    "explanation": "Devices must be rated for the load current. Overloaded contacts heat and arc. The correct branch circuit and device rating are required. ---"
  },
  {
    "id": 39,
    "category": "Task 17 — Branch circuitry and devices",
    "question": "A receptacle is installed in a wet location without suitable protection or rating. What is the main hazard?",
    "options": [
      "Shock and equipment failure",
      "Higher data speed",
      "Motor overspeed",
      "Transformer tap error"
    ],
    "answer": 0,
    "explanation": "Wet locations increase leakage and corrosion risk. Devices must be rated and protected for the location. Improper installation can shock users. ---"
  },
  {
    "id": 40,
    "category": "Task 17 — Branch circuitry and devices",
    "question": "A three-phase machine plug has phase sequence changed. What is most affected?",
    "options": [
      "Motor rotation",
      "Lamp colour",
      "Ground rod resistance",
      "PLC memory size"
    ],
    "answer": 0,
    "explanation": "Three-phase motor direction depends on phase order. Changing sequence reverses rotation. Equipment should be checked before operation. ---"
  },
  {
    "id": 41,
    "category": "Task 17 — Branch circuitry and devices",
    "question": "A switch controlling a lighting load is connected in the grounded conductor. Why is this wrong?",
    "options": [
      "The load may remain energized when switched off",
      "It reduces shock risk",
      "It improves grounding",
      "It increases lamp life always"
    ],
    "answer": 0,
    "explanation": "Switching the grounded conductor can leave live parts energized. Workers may assume the load is off. Switches should interrupt the ungrounded conductor. ---"
  },
  {
    "id": 42,
    "category": "Task 17 — Branch circuitry and devices",
    "question": "An AFCI is intended mainly to detect:",
    "options": [
      "Hazardous arcing conditions",
      "Motor slip",
      "Transformer oil contamination",
      "Low pneumatic pressure"
    ],
    "answer": 0,
    "explanation": "AFCI means arc-fault circuit interrupter. It detects certain arcing signatures. It helps reduce fire risk. --- ## Task 18 — HVAC Systems — 3 Questions"
  },
  {
    "id": 43,
    "category": "Task 18 — HVAC systems",
    "question": "A rooftop unit has 600 V power and 24 V controls. What device commonly creates the control voltage?",
    "options": [
      "Control transformer",
      "CT meter",
      "Ground rod",
      "Photocell"
    ],
    "answer": 0,
    "explanation": "HVAC control circuits often use low voltage. A control transformer steps power voltage down. The thermostat and relays use the control voltage. ---"
  },
  {
    "id": 44,
    "category": "Task 18 — HVAC systems",
    "question": "A compressor contactor pulls in, but voltage is missing on one load terminal. What is likely?",
    "options": [
      "Bad contact, open fuse, or supply problem",
      "Correct operation",
      "Thermostat is too accurate",
      "Air filter is clean"
    ],
    "answer": 0,
    "explanation": "A contactor should pass line voltage to the load. One missing phase can single-phase a motor. Voltage must be checked on line and load sides. ---"
  },
  {
    "id": 45,
    "category": "Task 18 — HVAC systems",
    "question": "An HVAC DDC controller uses sensor inputs to operate outputs. DDC means:",
    "options": [
      "Direct digital control",
      "Double duty contactor",
      "Dry duct cable",
      "Direct diode circuit"
    ],
    "answer": 0,
    "explanation": "DDC systems use digital controllers. They read sensors and control equipment. They are common in building automation. --- ## Task 19 — Electric Heating Systems and Controls — 3 Questions"
  },
  {
    "id": 46,
    "category": "Task 19 — Electric heating systems and controls",
    "question": "A 10 kW heater operates at 600 V three-phase. What current does it draw at unity PF?",
    "options": [
      "9.6 A",
      "16.7 A",
      "28.9 A",
      "60 A"
    ],
    "answer": 0,
    "explanation": "Use (I = P ÷ (E × √3)). (10,000 ÷ (600 × 1.73) ≈ 9.6A). Three-phase heater current uses √3. ---"
  },
  {
    "id": 47,
    "category": "Task 19 — Electric heating systems and controls",
    "question": "A duct heater airflow switch is open. What should happen?",
    "options": [
      "Heater should be prevented from energizing",
      "Heater output should double",
      "Motor speed should reverse",
      "UPS should start"
    ],
    "answer": 0,
    "explanation": "Airflow proves safe heat removal. No airflow can overheat the duct heater. The airflow switch is a safety interlock. ---"
  },
  {
    "id": 48,
    "category": "Task 19 — Electric heating systems and controls",
    "question": "A heater contactor coil is energized, but contacts are badly pitted. What should be suspected?",
    "options": [
      "Arcing, overload, or excessive cycling",
      "Proper contact condition",
      "Low temperature only",
      "Correct no-load operation"
    ],
    "answer": 0,
    "explanation": "Contact pitting comes from arcing. High current and frequent switching worsen damage. Contacts and load conditions should be checked. --- ## Task 20 — Exit and Emergency Lighting — 2 Questions"
  },
  {
    "id": 49,
    "category": "Task 20 — Exit and emergency lighting systems",
    "question": "Emergency lighting is tested by disconnecting normal power. The lamps are dim and fail quickly. What is likely?",
    "options": [
      "Weak battery or charging issue",
      "Perfect operation",
      "Wrong phase rotation",
      "Motor overload trip"
    ],
    "answer": 0,
    "explanation": "Emergency lights must operate during power failure. Dim or short operation suggests battery weakness. Charging circuit condition should also be checked. ---"
  },
  {
    "id": 50,
    "category": "Task 20 — Exit and emergency lighting systems",
    "question": "Why must exit signs be kept illuminated or backed up?",
    "options": [
      "To guide occupants during emergencies",
      "To improve power factor",
      "To reduce motor current",
      "To cool transformers"
    ],
    "answer": 0,
    "explanation": "Exit signs identify safe egress paths. They must remain visible during emergency conditions. Backup power supports operation during outages. --- ## Task 21 — Cathodic Protection — 2 Questions"
  },
  {
    "id": 51,
    "category": "Task 21 — Cathodic protection systems",
    "question": "Impressed-current cathodic protection uses:",
    "options": [
      "An external DC source",
      "A standard light switch only",
      "A GFCI receptacle",
      "A VFD output only"
    ],
    "answer": 0,
    "explanation": "Impressed-current systems use a DC power supply. Current is driven to protect the structure. It is used where sacrificial anodes are not enough. ---"
  },
  {
    "id": 52,
    "category": "Task 21 — Cathodic protection systems",
    "question": "If a sacrificial anode is completely consumed, what happens to protection?",
    "options": [
      "Protection may be lost",
      "Steel becomes fully protected forever",
      "Voltage becomes AC",
      "Corrosion stops permanently"
    ],
    "answer": 0,
    "explanation": "The anode must corrode to protect the structure. Once consumed, it can no longer provide protection. Anodes must be inspected and replaced when needed. --- # D — Rotating and Fixed Equipment / Control Systems — 21 Questions ## Task 22 — Motor Starters and Control Devices — 7 Questions"
  },
  {
    "id": 53,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A stop button is wired normally open instead of normally closed. What is the safety issue?",
    "options": [
      "A broken wire may not stop the circuit safely",
      "The motor will always reverse",
      "The overload setting doubles",
      "The transformer becomes DC"
    ],
    "answer": 0,
    "explanation": "Stop circuits are normally closed for fail-safe behaviour. An open wire should stop or prevent operation. Normally open stop wiring can hide faults. ---"
  },
  {
    "id": 54,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A motor control circuit uses a control transformer. Why?",
    "options": [
      "To provide proper control voltage",
      "To increase motor horsepower",
      "To remove overloads",
      "To change phase sequence automatically"
    ],
    "answer": 0,
    "explanation": "Control circuits often use lower voltage than motor power. The transformer supplies that voltage. Coils, pilot lights, and controls must match it. ---"
  },
  {
    "id": 55,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A contactor coil is rated AC but supplied with DC of the same voltage. What may happen?",
    "options": [
      "It may not operate correctly or may overheat",
      "It always operates better",
      "It reverses motor direction",
      "It improves contact life automatically"
    ],
    "answer": 0,
    "explanation": "AC and DC coils are designed differently. Impedance and magnetic design are not the same. Coil type must match the control supply. ---"
  },
  {
    "id": 56,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A starter drops out when the stop button is pressed because the stop button:",
    "options": [
      "Opens the coil circuit",
      "Closes the power contacts",
      "Increases voltage",
      "Reverses two phases"
    ],
    "answer": 0,
    "explanation": "A stop button is normally closed in series with the coil. Pressing it opens the control circuit. The coil de-energizes and the contacts open. ---"
  },
  {
    "id": 57,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A reversing starter has failed electrical interlocking. What is the hazard?",
    "options": [
      "Forward and reverse coils may energize together",
      "Motor speed becomes zero forever",
      "Overload protection improves",
      "Ground fault current disappears"
    ],
    "answer": 0,
    "explanation": "Simultaneous forward and reverse can short phases. Electrical interlocks prevent opposite coils from energizing together. Mechanical interlocks provide additional protection. ---"
  },
  {
    "id": 58,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A time-delay relay is used to start a second conveyor 10 seconds after the first. What is its function?",
    "options": [
      "Sequence control",
      "Ground fault protection only",
      "Surge clamping",
      "CT metering"
    ],
    "answer": 0,
    "explanation": "Time-delay relays delay a control action. They are used for sequencing machines. This prevents starting loads all at once. ---"
  },
  {
    "id": 59,
    "category": "Task 22 — Motor starters and control devices",
    "question": "A control fuse opens each time the start button is pressed. What should be checked?",
    "options": [
      "Shorted coil or control wiring fault",
      "Motor bearing grease only",
      "Wrong lamp colour",
      "Panel directory spelling"
    ],
    "answer": 0,
    "explanation": "Pressing start energizes the control circuit. If the fuse opens, excessive current is likely. The coil and wiring must be tested. --- ## Task 23 — Drives — 5 Questions"
  },
  {
    "id": 60,
    "category": "Task 23 — Drives",
    "question": "A VFD motor cable is installed in the same tray as sensitive analog signals. What problem may occur?",
    "options": [
      "Electrical noise interference",
      "Higher transformer oil level",
      "Lower motor load",
      "Better signal quality always"
    ],
    "answer": 0,
    "explanation": "VFD outputs contain high-frequency switching. Analog signals are noise-sensitive. Separation and shielding reduce EMI. ---"
  },
  {
    "id": 61,
    "category": "Task 23 — Drives",
    "question": "A VFD trips on ground fault only when the motor accelerates. What should be suspected?",
    "options": [
      "Motor cable or motor insulation problem under voltage stress",
      "Correct operation",
      "Too much PLC memory",
      "Low hydraulic pressure only"
    ],
    "answer": 0,
    "explanation": "Acceleration increases drive output voltage and current. Damaged insulation may fault under stress. Motor leads and winding insulation should be tested. ---"
  },
  {
    "id": 62,
    "category": "Task 23 — Drives",
    "question": "A VFD is programmed with the wrong motor FLA. What can be affected?",
    "options": [
      "Motor protection and current limit functions",
      "Cable colour",
      "Ground rod length",
      "Phase tape width"
    ],
    "answer": 0,
    "explanation": "Drives use motor data for protection. Wrong FLA can cause nuisance trips or poor protection. Motor nameplate data should be entered correctly. ---"
  },
  {
    "id": 63,
    "category": "Task 23 — Drives",
    "question": "A braking resistor on a drive is used to:",
    "options": [
      "Dissipate regenerated energy during deceleration",
      "Increase motor voltage above rating",
      "Replace the motor overload permanently",
      "Measure phase rotation"
    ],
    "answer": 0,
    "explanation": "Decelerating loads can return energy to the DC bus. A braking resistor converts this energy to heat. It helps prevent DC bus overvoltage trips. ---"
  },
  {
    "id": 64,
    "category": "Task 23 — Drives",
    "question": "Why is motor lead length important on VFD installations?",
    "options": [
      "Long leads can increase reflected wave and insulation stress",
      "Long leads always reduce voltage to zero",
      "Lead length controls hydraulic pressure",
      "It changes PLC scan time"
    ],
    "answer": 0,
    "explanation": "VFD outputs have fast voltage rise times. Long cables can create voltage stress at motor terminals. Filters or special cable may be required. --- ## Task 24 — Other Fixed Equipment and Associated Controls — 3 Questions"
  },
  {
    "id": 65,
    "category": "Task 24 — Other fixed equipment and associated controls",
    "question": "A conveyor jam switch opens during operation. What should the control system do?",
    "options": [
      "Stop or alarm the conveyor system",
      "Increase conveyor speed",
      "Reverse all building fans",
      "Energize the heater"
    ],
    "answer": 0,
    "explanation": "Jam switches protect equipment and personnel. They indicate abnormal mechanical condition. The control system should respond safely. ---"
  },
  {
    "id": 66,
    "category": "Task 24 — Other fixed equipment and associated controls",
    "question": "A level switch fails closed in a tank pump system. What could happen?",
    "options": [
      "Pump may run at the wrong time or overfill/empty the tank",
      "Voltage becomes balanced",
      "Grounding improves",
      "Motor slip becomes zero"
    ],
    "answer": 0,
    "explanation": "Control systems rely on correct input status. A failed level switch gives false information. The process may operate unsafely. ---"
  },
  {
    "id": 67,
    "category": "Task 24 — Other fixed equipment and associated controls",
    "question": "A solenoid-operated valve coil is energized but the valve does not move. What should be checked?",
    "options": [
      "Coil voltage, mechanical valve condition, and air/fluid pressure",
      "Phase rotation only",
      "Exit sign battery",
      "Ethernet address only"
    ],
    "answer": 0,
    "explanation": "Electrical energization does not guarantee valve movement. The coil, valve spool, and supply pressure all matter. Troubleshooting must include electrical and mechanical checks. --- ## Task 25 — Motors — 6 Questions"
  },
  {
    "id": 68,
    "category": "Task 25 — Motors",
    "question": "An 8-pole motor on 60 Hz has synchronous speed of:",
    "options": [
      "450 rpm",
      "900 rpm",
      "1200 rpm",
      "1800 rpm"
    ],
    "answer": 1,
    "explanation": "Use (N_s = 120f/P). (120 × 60 ÷ 8 = 900rpm). Actual induction motor speed is lower due to slip. ---"
  },
  {
    "id": 69,
    "category": "Task 25 — Motors",
    "question": "An induction motor has synchronous speed of 900 rpm and rotor speed of 873 rpm. What is percent slip?",
    "options": [
      "1%",
      "2%",
      "3%",
      "6%"
    ],
    "answer": 2,
    "explanation": "Slip = ((900 - 873) ÷ 900 × 100). (27 ÷ 900 × 100 = 3%). Slip increases as load increases. ---"
  },
  {
    "id": 70,
    "category": "Task 25 — Motors",
    "question": "Locked rotor current is important because it affects:",
    "options": [
      "Starting equipment and voltage drop",
      "Lamp colour temperature",
      "PLC memory",
      "Ground rod corrosion only"
    ],
    "answer": 0,
    "explanation": "Locked rotor current is high starting current. It affects fuses, starters, and voltage dip. Starting equipment must handle it. ---"
  },
  {
    "id": 71,
    "category": "Task 25 — Motors",
    "question": "A motor nameplate shows 575 V, 3-phase, FLA 18 A. What should overload setting be based on?",
    "options": [
      "Nameplate FLA and applicable rules",
      "Conduit length only",
      "Panel paint colour",
      "Ground rod resistance only"
    ],
    "answer": 0,
    "explanation": "Overload protection is based on motor full-load current. Nameplate data reflects actual motor rating. Incorrect settings can trip falsely or fail to protect. ---"
  },
  {
    "id": 72,
    "category": "Task 25 — Motors",
    "question": "A motor has low insulation resistance between winding and frame. What is the concern?",
    "options": [
      "Ground fault risk",
      "Correct operating condition",
      "Low friction",
      "Higher service factor"
    ],
    "answer": 0,
    "explanation": "Low resistance to frame means leakage path exists. Energizing can cause shock or fault. The motor must be repaired or dried before use. ---"
  },
  {
    "id": 73,
    "category": "Task 25 — Motors",
    "question": "A motor coupling is misaligned after installation. What can result?",
    "options": [
      "Bearing wear and vibration",
      "Better efficiency always",
      "Reduced starting current always",
      "Correct phase rotation"
    ],
    "answer": 0,
    "explanation": "Misalignment stresses shafts and bearings. It creates vibration and mechanical heating. Alignment is important for motor life. --- # E — Signalling and Communication Systems — 10 Questions ## Task 26 — Signalling Systems — 4 Questions"
  },
  {
    "id": 74,
    "category": "Task 26 — Signalling systems",
    "question": "A fire alarm initiating circuit uses an EOL resistor. What is its purpose?",
    "options": [
      "Supervise circuit integrity",
      "Increase horn volume",
      "Power the panel",
      "Reverse polarity"
    ],
    "answer": 0,
    "explanation": "EOL devices allow the panel to monitor the circuit. Open or short faults create trouble signals. Supervision is essential for life-safety systems. ---"
  },
  {
    "id": 75,
    "category": "Task 26 — Signalling systems",
    "question": "A fire alarm circuit shows trouble after a cable is cut. What caused the trouble?",
    "options": [
      "Loss of supervision path",
      "Higher alarm current",
      "Better signal strength",
      "Normal alarm operation"
    ],
    "answer": 0,
    "explanation": "Cutting the cable opens the supervised circuit. The panel detects abnormal resistance or continuity. Trouble signals must be investigated. ---"
  },
  {
    "id": 76,
    "category": "Task 26 — Signalling systems",
    "question": "A horn/strobe has correct voltage but no output. What should be checked?",
    "options": [
      "Polarity, device setting, and device condition",
      "Motor slip",
      "CT ratio only",
      "Transformer tap position only"
    ],
    "answer": 0,
    "explanation": "Many signalling devices are polarity sensitive. Address or candela settings may affect operation. The device or wiring may be faulty. ---"
  },
  {
    "id": 77,
    "category": "Task 26 — Signalling systems",
    "question": "Why should fire alarm conductors be protected from mechanical damage?",
    "options": [
      "Circuit failure can disable life-safety functions",
      "It increases motor horsepower",
      "It improves transformer cooling",
      "It reduces hydraulic pressure"
    ],
    "answer": 0,
    "explanation": "Fire alarm systems must remain reliable. Damaged wiring can create trouble or disable alarms. Mechanical protection supports system integrity. --- ## Task 27 — Communication Systems — 3 Questions"
  },
  {
    "id": 78,
    "category": "Task 27 — Communication systems",
    "question": "A network camera powered through its Ethernet cable uses:",
    "options": [
      "PoE",
      "LRA",
      "O/L",
      "MOV"
    ],
    "answer": 0,
    "explanation": "PoE means power over Ethernet. It carries data and power on network cabling. Both switch and device must support PoE. ---"
  },
  {
    "id": 79,
    "category": "Task 27 — Communication systems",
    "question": "TCP/IP is used mainly for:",
    "options": [
      "Network communication between devices",
      "Motor overload heating",
      "Transformer impedance testing",
      "Pneumatic pressure control"
    ],
    "answer": 0,
    "explanation": "TCP/IP is a communication protocol suite. It allows devices to exchange data over networks. Many industrial Ethernet systems use it. ---"
  },
  {
    "id": 80,
    "category": "Task 27 — Communication systems",
    "question": "A data cable is run parallel to high-current motor leads for a long distance. What is the risk?",
    "options": [
      "Noise and communication errors",
      "Higher data speed",
      "Better shielding automatically",
      "Increased battery capacity"
    ],
    "answer": 0,
    "explanation": "Motor circuits can induce electrical noise. Data cables are sensitive to interference. Separation and proper routing improve communication. --- ## Task 28 — Building Automation Systems — 3 Questions"
  },
  {
    "id": 81,
    "category": "Task 28 — Building automation systems",
    "question": "An HMI shows “AHU-2 supply fan fault.” What is the HMI doing?",
    "options": [
      "Displaying system status to the operator",
      "Measuring insulation resistance",
      "Replacing the overload relay",
      "Charging a battery bank"
    ],
    "answer": 0,
    "explanation": "HMI means human machine interface. It provides alarms, status, and control screens. Operators use it to monitor equipment. ---"
  },
  {
    "id": 82,
    "category": "Task 28 — Building automation systems",
    "question": "A BAS commands dampers based on temperature and occupancy. What type of system is this?",
    "options": [
      "Automated control system",
      "Manual-only lighting circuit",
      "Cathodic protection system",
      "CT metering system only"
    ],
    "answer": 0,
    "explanation": "Building automation uses sensors and logic. It controls HVAC, lighting, and other equipment. Inputs determine output commands. ---"
  },
  {
    "id": 83,
    "category": "Task 28 — Building automation systems",
    "question": "DCLA means:",
    "options": [
      "Data communication link, Class A",
      "Direct current load alarm",
      "Drive control line ampacity",
      "Dual contact limit actuator"
    ],
    "answer": 0,
    "explanation": "DCLA is an acronym from communication/control systems. Class A links can provide communication path survivability. Correct wiring supports reliable signalling. --- # F — Process Control Systems — 17 Questions ## Task 29 — Input/Output Devices — 8 Questions"
  },
  {
    "id": 84,
    "category": "Task 29 — Input/output devices",
    "question": "A 4–20 mA transmitter reads 20 mA. What does this normally indicate?",
    "options": [
      "Full-scale process value",
      "Zero process value",
      "Open loop always",
      "No power"
    ],
    "answer": 0,
    "explanation": "In a standard 4–20 mA loop, 20 mA is high end. 4 mA is live zero. Values outside range may indicate faults. ---"
  },
  {
    "id": 85,
    "category": "Task 29 — Input/output devices",
    "question": "A transmitter output drops to 0 mA in a 4–20 mA loop. What is likely?",
    "options": [
      "Open circuit, power loss, or transmitter fault",
      "Full-scale reading",
      "Normal mid-range operation",
      "Proper live zero"
    ],
    "answer": 0,
    "explanation": "A live zero signal should be around 4 mA at minimum. Zero mA often means loop failure. Power and wiring should be checked. ---"
  },
  {
    "id": 86,
    "category": "Task 29 — Input/output devices",
    "question": "A PLC discrete input changes state when a limit switch is pressed. What type of information is this?",
    "options": [
      "On/off status",
      "Variable analog value only",
      "Transformer ratio",
      "Horsepower conversion"
    ],
    "answer": 0,
    "explanation": "Discrete inputs are two-state signals. They represent on/off, open/closed, or true/false. Limit switches are common discrete inputs. ---"
  },
  {
    "id": 87,
    "category": "Task 29 — Input/output devices",
    "question": "An RTD connected to a controller gives unstable readings. What should be checked?",
    "options": [
      "Wiring, shield grounding, sensor condition, and termination",
      "Motor phase rotation only",
      "Heater wattage only",
      "Hydraulic oil colour only"
    ],
    "answer": 0,
    "explanation": "RTD signals can be affected by poor connections. Noise and wrong wiring cause unstable readings. Sensor condition and input configuration must match. ---"
  },
  {
    "id": 88,
    "category": "Task 29 — Input/output devices",
    "question": "A proximity sensor detects a metal target but not plastic. What sensor type is likely?",
    "options": [
      "Inductive proximity sensor",
      "RTD",
      "CT",
      "MOV"
    ],
    "answer": 0,
    "explanation": "Inductive sensors detect metal objects. They use electromagnetic fields. Photoelectric or capacitive sensors may detect other materials. ---"
  },
  {
    "id": 89,
    "category": "Task 29 — Input/output devices",
    "question": "A PLC output module is transistor type. What kind of load is it usually best suited for?",
    "options": [
      "DC loads",
      "High-voltage AC motors directly",
      "Hydraulic pressure only",
      "Transformer oil"
    ],
    "answer": 0,
    "explanation": "Transistor outputs commonly switch DC. Relay or triac outputs are used for other applications. Output type must match voltage and load. ---"
  },
  {
    "id": 90,
    "category": "Task 29 — Input/output devices",
    "question": "A normally closed pressure switch opens on high pressure. How should the controller interpret the open contact?",
    "options": [
      "High-pressure trip or fault condition",
      "Normal low pressure only",
      "Full-scale analog value",
      "Correct motor rotation"
    ],
    "answer": 0,
    "explanation": "Contact logic depends on the control design. NC safety contacts often open during abnormal conditions. The PLC should respond according to the program. ---"
  },
  {
    "id": 91,
    "category": "Task 29 — Input/output devices",
    "question": "An analog input card is configured for voltage but connected to a 4–20 mA transmitter. What problem may occur?",
    "options": [
      "Incorrect or unusable reading",
      "Motor reverses",
      "Transformer overheats immediately",
      "Pneumatic pressure doubles"
    ],
    "answer": 0,
    "explanation": "Input card configuration must match signal type. Current and voltage signals require different input circuits. Wrong configuration causes bad process data. --- ## Task 30 — Automated Control Systems — 6 Questions"
  },
  {
    "id": 92,
    "category": "Task 30 — Automated control systems",
    "question": "A PLC output energizes, but the relay coil does not pull in. Voltage at the coil is zero. What should be checked?",
    "options": [
      "Output wiring, fuse, terminal, and field supply",
      "Motor slip",
      "Battery electrolyte only",
      "CT polarity only"
    ],
    "answer": 0,
    "explanation": "The PLC command may be present internally. The external circuit may still be open or unpowered. Troubleshooting should follow the output circuit. ---"
  },
  {
    "id": 93,
    "category": "Task 30 — Automated control systems",
    "question": "A PLC input light is on, but the field sensor is not actuated. What could cause this?",
    "options": [
      "Shorted input wiring or failed sensor",
      "Correct operation always",
      "Low transformer oil",
      "Wrong motor coupling alignment"
    ],
    "answer": 0,
    "explanation": "The input light shows the PLC sees a signal. If the sensor is not actuated, wiring or sensor failure is possible. Field testing confirms the source of the signal. ---"
  },
  {
    "id": 94,
    "category": "Task 30 — Automated control systems",
    "question": "A PLC program uses JSR instructions. Why?",
    "options": [
      "To organize logic into subroutines",
      "To increase line voltage",
      "To reduce conductor ampacity",
      "To test phase rotation"
    ],
    "answer": 0,
    "explanation": "JSR means jump to subroutine. It lets the program run separate logic sections. This improves organization and reuse. ---"
  },
  {
    "id": 95,
    "category": "Task 30 — Automated control systems",
    "question": "A PLC loses its program after power failure. What component or memory issue is likely?",
    "options": [
      "Battery or non-volatile memory problem",
      "Motor overload setting",
      "Phase rotation problem",
      "Ground rod depth problem"
    ],
    "answer": 0,
    "explanation": "Some controllers rely on battery-backed memory. EEPROM or flash memory stores programs without power. Memory backup must be maintained. ---"
  },
  {
    "id": 96,
    "category": "Task 30 — Automated control systems",
    "question": "A safety circuit is bypassed to keep production running. What is the major issue?",
    "options": [
      "Personnel may be exposed to machine hazards",
      "Motor current is reduced",
      "Communication speed increases",
      "Ground fault protection improves"
    ],
    "answer": 0,
    "explanation": "Safety circuits are designed to prevent injury. Bypassing removes protective function. Faults must be repaired, not defeated. ---"
  },
  {
    "id": 97,
    "category": "Task 30 — Automated control systems",
    "question": "Why is an I/O list important during troubleshooting?",
    "options": [
      "It links devices to PLC addresses and signal types",
      "It replaces lockout",
      "It increases motor torque",
      "It changes CT ratio"
    ],
    "answer": 0,
    "explanation": "I/O lists identify field devices and controller points. They help trace signals quickly. Good documentation reduces downtime. --- ## Task 31 — Pneumatic and Hydraulic Control Systems — 3 Questions"
  },
  {
    "id": 98,
    "category": "Task 31 — Pneumatic and hydraulic control systems",
    "question": "A pneumatic cylinder moves unexpectedly after electrical lockout only. What was missed?",
    "options": [
      "Stored air pressure isolation",
      "CT polarity",
      "Transformer tap setting",
      "Ethernet addressing"
    ],
    "answer": 0,
    "explanation": "Pneumatic systems store energy in compressed air. Electrical lockout alone may not stop mechanical motion. Air pressure must be isolated and relieved. ---"
  },
  {
    "id": 99,
    "category": "Task 31 — Pneumatic and hydraulic control systems",
    "question": "A hydraulic solenoid valve coil is energized, but the actuator does not move. What should be checked?",
    "options": [
      "Coil, valve spool, hydraulic pressure, and mechanical load",
      "Fire alarm EOL resistor only",
      "Receptacle polarity only",
      "Exit sign battery only"
    ],
    "answer": 0,
    "explanation": "Electrical operation must be matched by hydraulic function. A stuck valve or low pressure can prevent movement. Both electrical and fluid systems must be checked. ---"
  },
  {
    "id": 100,
    "category": "Task 31 — Pneumatic and hydraulic control systems",
    "question": "A hydraulic pressure switch protects a pump by opening at high pressure. What does this prevent?",
    "options": [
      "Overpressure damage",
      "Lower voltage",
      "Wrong phase sequence",
      "PLC memory loss"
    ],
    "answer": 0,
    "explanation": "Pressure switches protect equipment from unsafe pressure. They can stop a pump or send an alarm. Correct setpoint and operation are important. ---"
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

const shuffledIndustrialElectricianQuestions =
  shuffleArray(industrialElectricianInterprovincialPracticeQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "industrial-electrician",
  tradeTitle: "Industrial Electrician",
  sectionTitle: "100 Questions — Full One-Go Review",
  questionTimeSeconds: 90,
  questions: industrialElectricianInterprovincialSet2HardQuestions
});

window.addEventListener("load", () => {
  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");

  if (hintBtn) hintBtn.style.display = "none";
  if (hintBox) hintBox.classList.add("hidden");
  if (hintText) hintText.textContent = "";
});
