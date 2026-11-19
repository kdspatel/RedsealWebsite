const electricianLevel1PracticeExamQuestions = [
  {
    "id": 1,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "You measure a balanced three-phase load at 600 V and 32 A. What is the apparent power?",
    "options": [
      "19.2 kVA",
      "27.7 kVA",
      "33.3 kVA",
      "55.4 kVA"
    ],
    "answer": 2,
    "explanation": "Use S = √3 × E × I. S = 1.732 × 600 × 32 = 33,254 VA. The load is approximately 33.3 kVA."
  },
  {
    "id": 2,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 600 V three-phase motor draws 18 A at 0.86 power factor. What is true power?",
    "options": [
      "9.3 kW",
      "16.1 kW",
      "18.6 kW",
      "26.8 kW"
    ],
    "answer": 1,
    "explanation": "Use P = √3 × E × I × pf. P = 1.732 × 600 × 18 × 0.86. True power is about 16.1 kW."
  },
  {
    "id": 3,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 208 V three-phase panel supplies a balanced 50 A load. What is the apparent power?",
    "options": [
      "10.4 kVA",
      "18.0 kVA",
      "20.8 kVA",
      "36.0 kVA"
    ],
    "answer": 1,
    "explanation": "Use S = √3 × E × I. S = 1.732 × 208 × 50 = 18,013 VA. The answer is about 18 kVA."
  },
  {
    "id": 4,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 600Y/347 V panel feeds lighting from line to neutral. What voltage does each lighting circuit receive?",
    "options": [
      "120 V",
      "208 V",
      "347 V",
      "600 V"
    ],
    "answer": 2,
    "explanation": "In 600Y/347 V, line-to-line voltage is 600 V. Line-to-neutral voltage is 347 V. Lighting circuits may use 347 V in commercial systems."
  },
  {
    "id": 5,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 208Y/120 V system feeds a receptacle line-to-neutral. What voltage is expected?",
    "options": [
      "120 V",
      "208 V",
      "240 V",
      "347 V"
    ],
    "answer": 0,
    "explanation": "In 208Y/120 V, line-to-neutral is 120 V. Line-to-line is 208 V. General receptacles commonly use 120 V."
  },
  {
    "id": 6,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A wye-connected load has 347 V phase voltage. What is the line voltage?",
    "options": [
      "120 V",
      "208 V",
      "347 V",
      "600 V"
    ],
    "answer": 3,
    "explanation": "In wye, line voltage = √3 × phase voltage. 347 × 1.732 ≈ 600 V. This is a standard 600Y/347 V system."
  },
  {
    "id": 7,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A delta-connected load is supplied by 240 V line voltage. What is the phase voltage?",
    "options": [
      "120 V",
      "139 V",
      "240 V",
      "416 V"
    ],
    "answer": 2,
    "explanation": "In delta, phase voltage equals line voltage. Each phase winding is connected across two lines. Therefore phase voltage is 240 V."
  },
  {
    "id": 8,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A delta load has 10 A phase current. What is the line current?",
    "options": [
      "5.8 A",
      "10 A",
      "17.3 A",
      "30 A"
    ],
    "answer": 2,
    "explanation": "In delta, line current = √3 × phase current. IL = 1.732 × 10 = 17.3 A. Line current is higher than phase current in delta."
  },
  {
    "id": 9,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A wye load has 22 A line current. What is phase current?",
    "options": [
      "12.7 A",
      "22 A",
      "38.1 A",
      "66 A"
    ],
    "answer": 1,
    "explanation": "In wye, line current equals phase current. The √3 relationship applies to voltage. So phase current is 22 A."
  },
  {
    "id": 10,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A balanced three-phase system has phase currents of equal value. What should neutral current be?",
    "options": [
      "Zero",
      "Same as one phase",
      "Three times one phase",
      "√3 times one phase"
    ],
    "answer": 0,
    "explanation": "Balanced phase currents cancel vectorially. Each phase is 120° apart. The neutral carries no current in a perfect balance."
  },
  {
    "id": 11,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "You measure phase currents of 20 A, 21 A, and 35 A on a motor. What is the concern?",
    "options": [
      "Balanced current",
      "Current imbalance",
      "Correct operation",
      "Unity power factor"
    ],
    "answer": 1,
    "explanation": "One phase current is much higher than the others. Imbalance can overheat motor windings. Voltage supply, load, and motor condition should be checked."
  },
  {
    "id": 12,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A three-phase motor runs backward after replacement. What should be done?",
    "options": [
      "Swap any two phase conductors",
      "Reverse neutral and ground",
      "Increase overload size",
      "Add a capacitor to all phases"
    ],
    "answer": 0,
    "explanation": "Three-phase rotation depends on phase sequence. Swapping any two phases reverses rotation. Always lock out and verify before changing leads."
  },
  {
    "id": 13,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A three-phase load has 36 kW true power and 45 kVA apparent power. What is power factor?",
    "options": [
      "0.60",
      "0.75",
      "0.80",
      "1.25"
    ],
    "answer": 2,
    "explanation": "Power factor = kW ÷ kVA. 36 ÷ 45 = 0.8. The power factor is 80 percent."
  },
  {
    "id": 14,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A three-phase load has 60 kVA and 48 kW. What is reactive power?",
    "options": [
      "12 kVAR",
      "24 kVAR",
      "36 kVAR",
      "108 kVAR"
    ],
    "answer": 2,
    "explanation": "Use Q = √(S² − P²). Q = √(60² − 48²) = √1296. Reactive power is 36 kVAR."
  },
  {
    "id": 15,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 20 kW load runs at 0.80 power factor. What is apparent power?",
    "options": [
      "16 kVA",
      "20 kVA",
      "25 kVA",
      "40 kVA"
    ],
    "answer": 2,
    "explanation": "Use S = P ÷ pf. S = 20 ÷ 0.80 = 25 kVA. Lower power factor increases kVA demand."
  },
  {
    "id": 16,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A three-phase motor loses one supply phase while running. What is this called?",
    "options": [
      "Grounding",
      "Single-phasing",
      "Rectification",
      "Synchronizing"
    ],
    "answer": 1,
    "explanation": "Single-phasing means one phase is lost. A running motor may continue but overheat. Protection should disconnect the motor."
  },
  {
    "id": 17,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "A 600 V, 25 kW three-phase load operates at 0.90 power factor. What is line current?",
    "options": [
      "14.5 A",
      "26.7 A",
      "41.7 A",
      "72.2 A"
    ],
    "answer": 1,
    "explanation": "Use I = P ÷ (√3 × E × pf). I = 25,000 ÷ (1.732 × 600 × 0.90). Current is about 26.7 A."
  },
  {
    "id": 18,
    "category": "A5 - Analyze three-phase AC circuits",
    "question": "Why is three-phase power commonly used for large motors?",
    "options": [
      "It gives smoother torque and efficient power delivery",
      "It removes the need for insulation",
      "It always uses zero current",
      "It changes AC to DC automatically"
    ],
    "answer": 0,
    "explanation": "Three-phase power provides rotating magnetic fields. Motor torque is smoother than single-phase. It is efficient for large power loads."
  },
  {
    "id": 19,
    "category": "A6 - Analyze electronic circuits",
    "question": "A drive rectifier section changes incoming AC into what?",
    "options": [
      "DC bus voltage",
      "Mechanical shaft torque directly",
      "Grounding current only",
      "Line-to-neutral voltage only"
    ],
    "answer": 0,
    "explanation": "The rectifier converts AC to DC. The DC bus stores the rectified energy. The inverter section then creates variable-frequency output."
  },
  {
    "id": 20,
    "category": "A6 - Analyze electronic circuits",
    "question": "An SCR in a heater control circuit is triggered at its gate. What does it control?",
    "options": [
      "Current flow through the load",
      "Ground rod resistance",
      "Conduit length",
      "Transformer oil level"
    ],
    "answer": 0,
    "explanation": "An SCR is a controlled rectifier. A gate signal allows it to conduct. It is used for power control."
  },
  {
    "id": 21,
    "category": "A6 - Analyze electronic circuits",
    "question": "A TRIAC dimmer controls an AC lamp because the TRIAC can:",
    "options": [
      "Conduct in both directions",
      "Conduct only in DC circuits",
      "Store charge permanently",
      "Step voltage down by windings"
    ],
    "answer": 0,
    "explanation": "A TRIAC can control both halves of AC. It is useful for AC dimming and switching. An SCR conducts mainly one direction."
  },
  {
    "id": 22,
    "category": "A6 - Analyze electronic circuits",
    "question": "A MOSFET is used in a switching circuit. Which terminal controls conduction?",
    "options": [
      "Gate",
      "Neutral",
      "Grounding electrode",
      "Transformer core"
    ],
    "answer": 0,
    "explanation": "MOSFET conduction is controlled by gate voltage. It is a voltage-controlled device. MOSFETs are common in electronic switching."
  },
  {
    "id": 23,
    "category": "A6 - Analyze electronic circuits",
    "question": "A failed shorted diode in a rectifier can cause:",
    "options": [
      "Excess current and blown protection",
      "Perfect output voltage",
      "Zero heating in all parts",
      "Better filtering"
    ],
    "answer": 0,
    "explanation": "A shorted diode no longer blocks reverse current. This can create abnormal current paths. Fuses or drive protection may operate."
  },
  {
    "id": 24,
    "category": "A6 - Analyze electronic circuits",
    "question": "PWM in electronic drives stands for:",
    "options": [
      "Pulse-width modulation",
      "Power winding measurement",
      "Phase watt multiplier",
      "Protective wire method"
    ],
    "answer": 0,
    "explanation": "PWM rapidly switches power devices. It controls the effective output waveform. VFDs commonly use PWM."
  },
  {
    "id": 25,
    "category": "C4 - Use measuring and testing equipment",
    "question": "You need to confirm a three-phase motor supply has correct rotation before connecting the motor. What tool should be used?",
    "options": [
      "Phase rotation meter",
      "Megohmmeter only",
      "Tape measure",
      "Continuity tester only"
    ],
    "answer": 0,
    "explanation": "A phase rotation meter checks phase sequence. Correct sequence helps predict motor direction. It prevents reverse operation of pumps or fans."
  },
  {
    "id": 26,
    "category": "C4 - Use measuring and testing equipment",
    "question": "Before using a megohmmeter on a motor, what is important?",
    "options": [
      "Isolate the motor from sensitive electronics",
      "Energize the motor at full voltage",
      "Connect the meter across live phases",
      "Remove all grounding permanently"
    ],
    "answer": 0,
    "explanation": "Megohmmeters apply high test voltage. Electronics can be damaged by this voltage. Equipment should be isolated before testing."
  },
  {
    "id": 27,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A drawing shows a feeder from “MCC-1” to “P-3.” What does MCC most likely mean?",
    "options": [
      "Motor control centre",
      "Main copper conductor",
      "Mechanical cooling coil",
      "Meter cable connector"
    ],
    "answer": 0,
    "explanation": "MCC means motor control centre. It contains motor starters, breakers, and controls. It is common in industrial electrical systems."
  },
  {
    "id": 28,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A generator plan shows “ATS.” What is the function of this equipment?",
    "options": [
      "Transfers load between normal and generator supply",
      "Measures conduit length",
      "Replaces all grounding conductors",
      "Converts DC to compressed air"
    ],
    "answer": 0,
    "explanation": "ATS means automatic transfer switch. It switches load between utility and generator. It helps prevent unsafe backfeed."
  },
  {
    "id": 29,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A transformer schedule lists “Z = 5.75%.” What does this refer to?",
    "options": [
      "Transformer impedance",
      "Lighting level",
      "Cable jacket thickness",
      "Room humidity"
    ],
    "answer": 0,
    "explanation": "Z usually means impedance. Transformer impedance affects fault current. It also affects voltage regulation."
  },
  {
    "id": 30,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A motor specification calls for a TEFC motor. What does TEFC describe?",
    "options": [
      "Enclosure and cooling type",
      "Voltage-to-frequency ratio",
      "Conduit material",
      "Ground fault setting"
    ],
    "answer": 0,
    "explanation": "TEFC means totally enclosed fan cooled. It describes motor protection and cooling. This matters for dusty or dirty locations."
  },
  {
    "id": 31,
    "category": "D1 - Interpret plans, drawings and specifications",
    "question": "A VFD note says “use manufacturer-recommended shielded motor cable.” What should the installer do?",
    "options": [
      "Follow the specification or get approved substitution",
      "Use any cable in the truck",
      "Ignore the note if the motor starts",
      "Use thermostat wire"
    ],
    "answer": 0,
    "explanation": "VFD output can create electrical noise. Correct cable protects equipment and signals. Substitution must be approved."
  },
  {
    "id": 32,
    "category": "H2 - Install three-phase consumer/supply services and metering equipment",
    "question": "A CT meter is used on a large three-phase service because:",
    "options": [
      "Service current is too high for direct metering",
      "It changes AC into DC",
      "It replaces the transformer",
      "It eliminates the need for billing"
    ],
    "answer": 0,
    "explanation": "CTs step high current down for meters. This allows safer indirect measurement. CT polarity and ratio must be correct."
  },
  {
    "id": 33,
    "category": "H2 - Install three-phase consumer/supply services and metering equipment",
    "question": "A 600 V three-phase service feeds a 600 V motor load. The load is connected line-to-line. What voltage is supplied?",
    "options": [
      "120 V",
      "208 V",
      "347 V",
      "600 V"
    ],
    "answer": 3,
    "explanation": "Three-phase motor loads connect line-to-line. On a 600 V system, line-to-line voltage is 600 V. The 347 V value is line-to-neutral in wye systems."
  },
  {
    "id": 34,
    "category": "H4 - Maintain three-phase services and metering equipment",
    "question": "A CT secondary is accidentally opened while the primary is energized. What is the hazard?",
    "options": [
      "Dangerous high voltage may develop",
      "Service voltage drops to zero",
      "The CT becomes a fuse only",
      "Neutral current disappears safely"
    ],
    "answer": 0,
    "explanation": "CT secondaries should not be opened under load. High voltage can appear on open secondary terminals. Proper shorting and procedures are required."
  },
  {
    "id": 35,
    "category": "J1 - Install low voltage distribution equipment",
    "question": "A distribution panel has a 10 kA interrupting rating, but available fault current is 22 kA. What is wrong?",
    "options": [
      "Panel rating is too low for available fault current",
      "Panel is automatically safer",
      "Voltage will become DC",
      "Neutral current will be zero"
    ],
    "answer": 0,
    "explanation": "Equipment must be rated for available fault current. Underrated equipment can fail violently. Interrupting ratings must be checked."
  },
  {
    "id": 36,
    "category": "J1 - Install low voltage distribution equipment",
    "question": "A three-phase panel has most single-phase loads placed on A-B only. What is the likely problem?",
    "options": [
      "Phase imbalance",
      "Perfect balancing",
      "Lower current on A and B",
      "DC output"
    ],
    "answer": 0,
    "explanation": "Loads should be distributed among phases. Uneven phase loading causes imbalance. Imbalance can create heating and voltage issues."
  },
  {
    "id": 37,
    "category": "J1 - Install low voltage distribution equipment",
    "question": "Selective coordination means:",
    "options": [
      "The closest protective device to a fault opens first",
      "All breakers trip together",
      "The main breaker always trips first",
      "Fuses never open"
    ],
    "answer": 0,
    "explanation": "Coordination limits outage area. Only the affected circuit should open if possible. This improves reliability and troubleshooting."
  },
  {
    "id": 38,
    "category": "L1 - Install grounding and bonding systems",
    "question": "A motor frame is not bonded. What is the main risk during a fault?",
    "options": [
      "Frame may remain energized",
      "Motor speed doubles",
      "Voltage becomes zero",
      "Power factor becomes unity"
    ],
    "answer": 0,
    "explanation": "Bonding provides a fault-current path. Without bonding, metal parts can stay live. This creates a shock hazard."
  },
  {
    "id": 39,
    "category": "L3 - Install ground fault detection systems",
    "question": "A ground fault sensor is installed around all phase conductors and neutral. What does it detect?",
    "options": [
      "Current imbalance caused by leakage to ground",
      "Normal balanced load only",
      "Motor speed",
      "Transformer impedance"
    ],
    "answer": 0,
    "explanation": "All normal current should return through monitored conductors. Ground leakage creates imbalance. The sensor detects that abnormal condition."
  },
  {
    "id": 40,
    "category": "M1 - Install AC generating systems",
    "question": "A 2-pole generator must produce 60 Hz. What speed is required?",
    "options": [
      "900 rpm",
      "1,200 rpm",
      "1,800 rpm",
      "3,600 rpm"
    ],
    "answer": 3,
    "explanation": "Use N = 120f ÷ P. N = 120 × 60 ÷ 2 = 3,600 rpm. Fewer poles require higher speed."
  },
  {
    "id": 41,
    "category": "M1 - Install AC generating systems",
    "question": "A 6-pole generator runs at 1,200 rpm. What frequency does it produce?",
    "options": [
      "30 Hz",
      "50 Hz",
      "60 Hz",
      "120 Hz"
    ],
    "answer": 2,
    "explanation": "Use f = N × P ÷ 120. f = 1200 × 6 ÷ 120. The frequency is 60 Hz."
  },
  {
    "id": 42,
    "category": "M1 - Install AC generating systems",
    "question": "A portable generator is connected to a building without a transfer switch. What is the serious hazard?",
    "options": [
      "Backfeed into utility system",
      "Lower fuel use only",
      "Higher power factor",
      "Reduced conductor resistance"
    ],
    "answer": 0,
    "explanation": "Backfeed can energize utility lines. This can injure utility workers. Transfer equipment is required."
  },
  {
    "id": 43,
    "category": "M1 - Install AC generating systems",
    "question": "Before connecting a generator to sensitive loads, what should be verified?",
    "options": [
      "Voltage, frequency, phase, and capacity",
      "Paint finish",
      "Wheel size",
      "Cable colour only"
    ],
    "answer": 0,
    "explanation": "Loads require correct electrical supply. Wrong frequency or voltage can damage equipment. Capacity must handle running and starting loads."
  },
  {
    "id": 44,
    "category": "M2 - Maintain AC generating systems",
    "question": "An AC generator output frequency is 57 Hz instead of 60 Hz. What is likely?",
    "options": [
      "Engine speed is low",
      "Ground rod is too long",
      "Cable insulation is too thick",
      "Load is perfectly balanced"
    ],
    "answer": 0,
    "explanation": "Generator frequency depends on speed. Low speed produces low frequency. Governor or engine load should be checked."
  },
  {
    "id": 45,
    "category": "M3 - Install DC generating systems",
    "question": "A DC generator is connected to a battery system. What must be confirmed first?",
    "options": [
      "Correct polarity",
      "Phase rotation",
      "Neutral current cancellation",
      "Three-phase sequence"
    ],
    "answer": 0,
    "explanation": "DC has positive and negative polarity. Wrong polarity can damage batteries and controls. Connections must be verified before energizing."
  },
  {
    "id": 46,
    "category": "M4 - Maintain DC generating systems",
    "question": "A DC generator output is low. Which cause is likely?",
    "options": [
      "Low speed or weak field excitation",
      "Too many phases",
      "Wrong phase rotation only",
      "Balanced neutral current"
    ],
    "answer": 0,
    "explanation": "DC generator voltage depends on speed and field strength. Weak excitation reduces output. Connections and brushes should also be checked."
  },
  {
    "id": 47,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A 150 kVA, 600 V three-phase transformer has what approximate primary current?",
    "options": [
      "72 A",
      "108 A",
      "144 A",
      "250 A"
    ],
    "answer": 2,
    "explanation": "Use I = VA ÷ √3 ÷ V. I = 150,000 ÷ 1.732 ÷ 600. Current is about 144 A."
  },
  {
    "id": 48,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A 112.5 kVA, 208 V three-phase secondary has approximate full-load current of:",
    "options": [
      "108 A",
      "180 A",
      "312 A",
      "540 A"
    ],
    "answer": 2,
    "explanation": "Use I = 112,500 ÷ (1.732 × 208). The denominator is about 360. Current is about 312 A."
  },
  {
    "id": 49,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A transformer secondary is 480Y/277 V. What voltage is available line-to-neutral?",
    "options": [
      "120 V",
      "277 V",
      "480 V",
      "600 V"
    ],
    "answer": 1,
    "explanation": "In 480Y/277 V, 480 V is line-to-line. 277 V is line-to-neutral. The wye point provides the neutral."
  },
  {
    "id": 50,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A delta transformer winding is connected across two line conductors. What is true about its phase voltage?",
    "options": [
      "It equals line voltage",
      "It is zero",
      "It is √3 times line voltage",
      "It is line voltage divided by 3"
    ],
    "answer": 0,
    "explanation": "In delta, each winding is directly across two lines. Therefore phase voltage equals line voltage. Line current is √3 times phase current."
  },
  {
    "id": 51,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "Why must transformer lugs be torqued correctly?",
    "options": [
      "Loose connections cause heating",
      "Torque changes frequency",
      "Tightness removes all losses",
      "Torque creates grounding electrodes"
    ],
    "answer": 0,
    "explanation": "Loose terminations create high resistance. High resistance under load creates heat. Correct torque improves reliability and safety."
  },
  {
    "id": 52,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A transformer is humming louder than normal and overheating. What may be the cause?",
    "options": [
      "Overload, loose laminations, or wrong voltage",
      "Correct operation always",
      "Too much lighting",
      "Proper ventilation only"
    ],
    "answer": 0,
    "explanation": "Abnormal heat and noise should be investigated. Wrong voltage or overload increases current and heat. Mechanical core problems can increase noise."
  },
  {
    "id": 53,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A transformer’s percent impedance is important because it affects:",
    "options": [
      "Short-circuit current and voltage regulation",
      "Wall colour",
      "Cable tray width only",
      "Lamp brightness only"
    ],
    "answer": 0,
    "explanation": "Impedance limits fault current. It also causes voltage drop under load. Protection selection depends on available fault current."
  },
  {
    "id": 54,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A wye secondary is grounded at its neutral point. What does this provide?",
    "options": [
      "System reference and line-to-neutral voltage",
      "DC output only",
      "No fault-current path",
      "Higher frequency"
    ],
    "answer": 0,
    "explanation": "The wye point can become neutral. Grounding establishes a reference to earth. Line-to-neutral loads can be supplied."
  },
  {
    "id": 55,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "An open-delta transformer bank uses how many transformers?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": 1,
    "explanation": "Open delta uses two transformers. It can supply three-phase power at reduced capacity. It is not the same capacity as closed delta."
  },
  {
    "id": 56,
    "category": "P3 - Install low-voltage three-phase transformers",
    "question": "A transformer nameplate lists 75 kVA. What does kVA represent?",
    "options": [
      "Apparent power capacity",
      "Ground resistance",
      "Motor rpm",
      "DC polarity"
    ],
    "answer": 0,
    "explanation": "Transformers are rated by apparent power. kVA relates voltage and current capacity. Loads should not exceed the rating."
  },
  {
    "id": 57,
    "category": "P5 - Install high-voltage transformers",
    "question": "Before high-voltage transformer work begins, what must be established?",
    "options": [
      "Isolation, test for absence of voltage, and grounding where required",
      "Paint colour",
      "Lighting level only",
      "Tool belt size"
    ],
    "answer": 0,
    "explanation": "High voltage is extremely hazardous. Isolation and testing confirm safe condition. Grounding controls induced or stored energy."
  },
  {
    "id": 58,
    "category": "P5 - Install high-voltage transformers",
    "question": "Why are clearances important around high-voltage transformers?",
    "options": [
      "To prevent flashover and unsafe contact",
      "To reduce paint fading",
      "To increase motor speed",
      "To improve Wi-Fi signal"
    ],
    "answer": 0,
    "explanation": "High voltage can arc across air gaps. Proper clearances reduce shock and arc hazards. Manufacturer and code requirements must be followed."
  },
  {
    "id": 59,
    "category": "P5 - Install high-voltage transformers",
    "question": "High-voltage transformer enclosures are locked mainly to:",
    "options": [
      "Prevent unauthorized access",
      "Increase voltage output",
      "Improve power factor",
      "Reduce transformer weight"
    ],
    "answer": 0,
    "explanation": "High-voltage equipment is dangerous. Locked enclosures protect people from contact. Only qualified workers should access them."
  },
  {
    "id": 60,
    "category": "R2 - Install wiring devices",
    "question": "A 347 V lighting switch is replaced with a 120 V-rated switch. What is wrong?",
    "options": [
      "Device voltage rating is unsuitable",
      "It will automatically step voltage down",
      "It improves safety",
      "It eliminates bonding"
    ],
    "answer": 0,
    "explanation": "Devices must be rated for the circuit voltage. Using an underrated switch can fail dangerously. Always check voltage and current ratings."
  },
  {
    "id": 61,
    "category": "R2 - Install wiring devices",
    "question": "A metal cover plate on a device becomes energized during a fault. What should protect the user?",
    "options": [
      "Proper bonding path",
      "Paint coating only",
      "Cable jacket colour",
      "Lamp wattage"
    ],
    "answer": 0,
    "explanation": "Bonding connects exposed metal parts to the fault path. Fault current should operate the breaker or fuse. Without bonding, shock hazard remains."
  },
  {
    "id": 62,
    "category": "V1 - Install motor starters and controls",
    "question": "A 24 V control transformer supplies five contactor coils rated 10 VA each. What minimum transformer load capacity is required?",
    "options": [
      "10 VA",
      "24 VA",
      "50 VA",
      "120 VA"
    ],
    "answer": 2,
    "explanation": "Total VA equals all coil VA added together. 5 × 10 VA = 50 VA. The transformer must be rated at least this much."
  },
  {
    "id": 63,
    "category": "V1 - Install motor starters and controls",
    "question": "A starter coil is rated 120 VAC, but the circuit supplies 24 VAC. What will likely happen?",
    "options": [
      "Coil will not pull in properly",
      "Motor speed doubles",
      "Overload protection improves",
      "Coil becomes a transformer secondary"
    ],
    "answer": 0,
    "explanation": "Coil voltage must match control voltage. A 120 V coil on 24 V has weak magnetism. The contactor may not operate."
  },
  {
    "id": 64,
    "category": "V1 - Install motor starters and controls",
    "question": "In a reversing starter, electrical interlocks are used to:",
    "options": [
      "Prevent forward and reverse contactors from closing together",
      "Increase motor horsepower",
      "Remove overload protection",
      "Convert motor to DC"
    ],
    "answer": 0,
    "explanation": "Forward and reverse contactors must not energize together. Interlocks prevent short circuits and mechanical damage. Mechanical interlocks may also be used."
  },
  {
    "id": 65,
    "category": "V1 - Install motor starters and controls",
    "question": "A stop button in a control circuit is normally closed because:",
    "options": [
      "An open wire causes the motor to stop",
      "It must energize the coil when pressed",
      "It carries no current ever",
      "It replaces the overload relay"
    ],
    "answer": 0,
    "explanation": "A normally closed stop circuit is safer. Opening the circuit drops out the coil. Broken control wiring will stop the motor."
  },
  {
    "id": 66,
    "category": "V2 - Maintain motor starters and controls",
    "question": "A contactor pulls in but drops out when the start button is released. What is likely?",
    "options": [
      "Seal-in contact circuit problem",
      "Motor bearings are perfect",
      "Overload is too large",
      "Phase sequence is correct"
    ],
    "answer": 0,
    "explanation": "The seal-in contact holds the coil after start is released. If it fails or is miswired, the coil drops out. Check auxiliary contact and wiring."
  },
  {
    "id": 67,
    "category": "W1 - Install drives",
    "question": "A VFD is installed on a fan motor. Lowering frequency will usually:",
    "options": [
      "Lower motor speed",
      "Increase motor speed",
      "Make output DC only",
      "Remove all torque forever"
    ],
    "answer": 0,
    "explanation": "AC motor speed depends on frequency. VFDs vary frequency to control speed. Lower frequency means lower speed."
  },
  {
    "id": 68,
    "category": "W1 - Install drives",
    "question": "A VFD trips on overcurrent during fast acceleration. What is a likely correction?",
    "options": [
      "Increase acceleration ramp time",
      "Remove grounding conductor",
      "Short the output leads",
      "Reverse neutral and bond"
    ],
    "answer": 0,
    "explanation": "Fast acceleration demands high torque and current. Increasing ramp time reduces current demand. Mechanical load problems should also be checked."
  },
  {
    "id": 69,
    "category": "W1 - Install drives",
    "question": "Why are line reactors sometimes installed with VFDs?",
    "options": [
      "To reduce electrical stress and improve drive input/output conditions",
      "To change motor into DC only",
      "To replace fuses",
      "To eliminate bonding"
    ],
    "answer": 0,
    "explanation": "Reactors add impedance to the circuit. They can reduce current spikes and harmonics. They help protect drive and motor equipment."
  },
  {
    "id": 70,
    "category": "W1 - Install drives",
    "question": "A VFD cable shield is left unterminated. What problem can increase?",
    "options": [
      "Electromagnetic interference",
      "Motor horsepower",
      "Ground rod resistance only",
      "Water pressure"
    ],
    "answer": 0,
    "explanation": "VFDs create high-frequency noise. Proper shield termination helps control EMI. Poor grounding can affect nearby controls."
  },
  {
    "id": 71,
    "category": "W1 - Install drives",
    "question": "A VFD controls a motor by changing voltage and frequency. What relationship is commonly maintained?",
    "options": [
      "V/F ratio",
      "kW/kVAR ratio only",
      "CT/PT ratio only",
      "Ground/neutral ratio"
    ],
    "answer": 0,
    "explanation": "V/F means voltage-to-frequency ratio. Maintaining it helps motor flux and torque. It is common in VFD control."
  },
  {
    "id": 72,
    "category": "Y1 - Install AC motors",
    "question": "A 2-pole induction motor on 60 Hz has synchronous speed of:",
    "options": [
      "900 rpm",
      "1,200 rpm",
      "1,800 rpm",
      "3,600 rpm"
    ],
    "answer": 3,
    "explanation": "Use Ns = 120f ÷ P. Ns = 120 × 60 ÷ 2. Synchronous speed is 3,600 rpm."
  },
  {
    "id": 73,
    "category": "Y1 - Install AC motors",
    "question": "An 8-pole induction motor on 60 Hz has synchronous speed of:",
    "options": [
      "600 rpm",
      "900 rpm",
      "1,200 rpm",
      "1,800 rpm"
    ],
    "answer": 1,
    "explanation": "Use Ns = 120f ÷ P. Ns = 120 × 60 ÷ 8. Synchronous speed is 900 rpm."
  },
  {
    "id": 74,
    "category": "Y1 - Install AC motors",
    "question": "A motor has synchronous speed of 1,200 rpm and rotor speed of 1,170 rpm. What is slip?",
    "options": [
      "1.5%",
      "2.5%",
      "5%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Slip % = (Ns − Nr) ÷ Ns × 100. (1200 − 1170) ÷ 1200 × 100 = 2.5%. Slip is needed for induction motor torque."
  },
  {
    "id": 75,
    "category": "Y1 - Install AC motors",
    "question": "A motor nameplate shows FLA. What does this mean?",
    "options": [
      "Full-load amperes",
      "Fuse line adjustment",
      "Frequency load angle",
      "Field leakage alarm"
    ],
    "answer": 0,
    "explanation": "FLA means full-load amperes. It is the current at rated load. It is used for wiring and overload selection."
  },
  {
    "id": 76,
    "category": "Y1 - Install AC motors",
    "question": "A motor is installed in a dusty woodworking area. Which enclosure is generally more suitable?",
    "options": [
      "Totally enclosed motor",
      "Open drip-proof only",
      "Bare rotor only",
      "No enclosure"
    ],
    "answer": 0,
    "explanation": "Dust can enter open motors. Totally enclosed motors better protect internal parts. The exact rating must suit the hazard."
  },
  {
    "id": 77,
    "category": "Y1 - Install AC motors",
    "question": "A motor coupling is misaligned after installation. What is a likely result?",
    "options": [
      "Bearing wear and vibration",
      "Better efficiency always",
      "Zero current",
      "Higher synchronous speed"
    ],
    "answer": 0,
    "explanation": "Misalignment causes mechanical stress. Stress leads to vibration and bearing damage. Alignment should be checked before operation."
  },
  {
    "id": 78,
    "category": "Y1 - Install AC motors",
    "question": "A motor draws very high current and cannot start because the load is jammed. What condition is this?",
    "options": [
      "Locked rotor",
      "No-load operation",
      "Unity power factor",
      "Open neutral"
    ],
    "answer": 0,
    "explanation": "Locked rotor means the rotor cannot turn. Starting current remains very high. Protection should trip to prevent damage."
  },
  {
    "id": 79,
    "category": "Y1 - Install AC motors",
    "question": "A motor’s actual running speed is lower than synchronous speed because of:",
    "options": [
      "Slip",
      "Rectification",
      "Grounding",
      "Capacitance only"
    ],
    "answer": 0,
    "explanation": "Induction motors need slip to produce torque. Rotor speed is slightly below synchronous speed. Slip increases as load increases."
  },
  {
    "id": 80,
    "category": "Y1 - Install AC motors",
    "question": "A three-phase motor hums but does not rotate on startup. What should be checked?",
    "options": [
      "Phase loss, low voltage, or mechanical jam",
      "Paint colour",
      "Lighting control only",
      "CT polarity only"
    ],
    "answer": 0,
    "explanation": "A motor needs proper voltage and phases to start. Mechanical load problems can prevent rotation. High current can quickly overheat the motor."
  },
  {
    "id": 81,
    "category": "Y2 - Maintain AC motors",
    "question": "An AC motor runs hot after ventilation openings become blocked. What is the issue?",
    "options": [
      "Poor cooling",
      "Correct operation",
      "Better efficiency",
      "Lower winding temperature"
    ],
    "answer": 0,
    "explanation": "Motors need heat removed during operation. Blocked ventilation traps heat. Overheating shortens motor insulation life."
  },
  {
    "id": 82,
    "category": "Y3 - Install DC motors",
    "question": "A DC motor must rotate opposite direction. Which change can reverse it?",
    "options": [
      "Reverse either armature or field connections, not both",
      "Reverse both armature and field together always",
      "Add a neutral conductor",
      "Change AC phase sequence"
    ],
    "answer": 0,
    "explanation": "DC motor direction depends on field-to-armature relationship. Reversing one changes the relationship. Reversing both usually keeps same direction."
  },
  {
    "id": 83,
    "category": "Y3 - Install DC motors",
    "question": "A DC motor controller output is marked positive and negative. Why does this matter?",
    "options": [
      "Polarity affects direction and operation",
      "DC has no polarity",
      "It only changes paint colour",
      "It creates three-phase rotation"
    ],
    "answer": 0,
    "explanation": "DC circuits have positive and negative conductors. Wrong polarity can reverse or damage equipment. Polarity must be verified before energizing."
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
  sectionTitle: "Level 3 Practice Exam – Set 3 ",
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
