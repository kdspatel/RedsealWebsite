const electricianLevel1PracticeExamQuestions = [
{
"id": 1,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced three-phase load has 208 V line voltage and 10 A line current. What is the apparent power?",
"options": [
"2.08 kVA",
"3.6 kVA",
"6.24 kVA",
"20.8 kVA"
],
"answer": 1,
"explanation": "Use S = √3 × EL × IL. S = 1.732 × 208 × 10 = 3602 VA. The apparent power is approximately 3.6 kVA."
},
{
"id": 2,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced three-phase motor draws 20 A at 600 V with 0.85 power factor. What is true power?",
"options": [
"10.2 kW",
"17.7 kW",
"20.4 kW",
"29.4 kW"
],
"answer": 1,
"explanation": "Use P = √3 × EL × IL × pf. P = 1.732 × 600 × 20 × 0.85. True power is about 17.7 kW."
},
{
"id": 3,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a wye-connected three-phase system, the line voltage is related to phase voltage by:",
"options": [
"EL = EP",
"EL = √3 × EP",
"EP = √3 × EL",
"IL = √3 × IP"
],
"answer": 1,
"explanation": "In a wye system, line voltage is greater than phase voltage. The relationship is EL = √3 × EP. Line current equals phase current in wye."
},
{
"id": 4,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a delta-connected three-phase system, the line current is related to phase current by:",
"options": [
"IL = IP",
"IL = √3 × IP",
"IP = √3 × IL",
"EL = √3 × EP"
],
"answer": 1,
"explanation": "In delta, phase voltage equals line voltage. Line current is √3 times phase current. This is a key delta relationship."
},
{
"id": 5,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced 600 V three-phase load has 12 A line current. What is the apparent power?",
"options": [
"7.2 kVA",
"10.4 kVA",
"12.5 kVA",
"20.8 kVA"
],
"answer": 2,
"explanation": "Use S = √3 × EL × IL. S = 1.732 × 600 × 12 = 12,470 VA. This is approximately 12.5 kVA."
},
{
"id": 6,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase load has 15 kVA apparent power and 12 kW true power. What is the power factor?",
"options": [
"0.60",
"0.75",
"0.80",
"1.25"
],
"answer": 2,
"explanation": "Power factor = kW ÷ kVA. pf = 12 ÷ 15 = 0.8. The load has 80% power factor."
},
{
"id": 7,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 208Y/120 V system has what voltage from line to neutral?",
"options": [
"120 V",
"208 V",
"240 V",
"347 V"
],
"answer": 0,
"explanation": "In a 208Y/120 V system, line-to-line is 208 V. Line-to-neutral is 120 V. This is common in commercial buildings."
},
{
"id": 8,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A 600Y/347 V system has what voltage from line to neutral?",
"options": [
"120 V",
"208 V",
"347 V",
"600 V"
],
"answer": 2,
"explanation": "In 600Y/347 V, line-to-line voltage is 600 V. Line-to-neutral voltage is 347 V. 347 V is commonly used for lighting in Canada."
},
{
"id": 9,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced three-phase system has equal phase currents separated by:",
"options": [
"60°",
"90°",
"120°",
"180°"
],
"answer": 2,
"explanation": "Three-phase waveforms are spaced 120 electrical degrees apart. This creates smooth power delivery. Balanced systems have equal magnitudes and spacing."
},
{
"id": 10,
"category": "A5 - Analyze three-phase AC circuits",
"question": "What is the neutral current in a perfectly balanced three-phase wye system?",
"options": [
"Zero",
"Equal to one phase current",
"Equal to line voltage",
"Three times phase current"
],
"answer": 0,
"explanation": "Balanced phase currents cancel in the neutral. The vector sum is zero. Unbalanced loads create neutral current."
},
{
"id": 11,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase motor rotates the wrong direction after installation. What is the usual correction?",
"options": [
"Reverse the neutral and bond",
"Swap any two line conductors",
"Increase breaker size",
"Add a GFCI"
],
"answer": 1,
"explanation": "Three-phase motor direction depends on phase sequence. Swapping any two phases reverses rotation. Always de-energize and verify before changing leads."
},
{
"id": 12,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase load has 24 kW and 30 kVA. What is the reactive power?",
"options": [
"6 kVAR",
"12 kVAR",
"18 kVAR",
"54 kVAR"
],
"answer": 2,
"explanation": "Use Q = √(S² − P²). Q = √(30² − 24²) = √324 = 18. Reactive power is 18 kVAR."
},
{
"id": 13,
"category": "A5 - Analyze three-phase AC circuits",
"question": "What does kVAR measure?",
"options": [
"True power",
"Apparent power",
"Reactive power",
"Resistance"
],
"answer": 2,
"explanation": "kVAR means kilovolt-ampere reactive. It is associated with inductive and capacitive effects. It is part of the power triangle."
},
{
"id": 14,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A low power factor in a three-phase motor circuit usually causes:",
"options": [
"Lower current for same work",
"Higher current for same useful power",
"Zero line voltage",
"DC output"
],
"answer": 1,
"explanation": "Low power factor means more apparent power is needed. This increases line current. Higher current increases losses and voltage drop."
},
{
"id": 15,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A balanced three-phase 600 V load draws 25 A at 0.9 pf. What is true power?",
"options": [
"13.5 kW",
"23.4 kW",
"27.0 kW",
"38.9 kW"
],
"answer": 1,
"explanation": "Use P = √3 × E × I × pf. P = 1.732 × 600 × 25 × 0.9. True power is about 23.4 kW."
},
{
"id": 16,
"category": "A5 - Analyze three-phase AC circuits",
"question": "In a delta system, the phase voltage is:",
"options": [
"Equal to line voltage",
"√3 times line voltage",
"Half the line voltage",
"Zero"
],
"answer": 0,
"explanation": "Delta windings are connected directly across line conductors. Therefore phase voltage equals line voltage. Line current is different from phase current."
},
{
"id": 17,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A phase loss on a running three-phase motor may cause:",
"options": [
"Motor overheating",
"Perfect normal operation",
"Reduced grounding resistance",
"DC generation only"
],
"answer": 0,
"explanation": "Single-phasing causes high current in remaining phases. The motor may continue running but overheat. Phase-loss protection is important."
},
{
"id": 18,
"category": "A5 - Analyze three-phase AC circuits",
"question": "A three-phase system is called “balanced” when:",
"options": [
"Only one phase carries current",
"Phase voltages and currents are equal and evenly spaced",
"Neutral carries full line current",
"Power factor is always zero"
],
"answer": 1,
"explanation": "Balanced systems have equal magnitudes. Phases are spaced 120° apart. Balanced operation reduces neutral current and improves performance."
},
{
"id": 19,
"category": "A6 - Analyze electronic circuits",
"question": "An SCR is best described as:",
"options": [
"A resistor with no control terminal",
"A controlled rectifier that can latch on",
"A transformer winding",
"A grounding electrode"
],
"answer": 1,
"explanation": "SCR means silicon-controlled rectifier. It conducts after a gate signal and remains on until current falls below holding current. SCRs are used in power control circuits."
},
{
"id": 20,
"category": "A6 - Analyze electronic circuits",
"question": "A TRIAC is commonly used to control:",
"options": [
"AC power",
"Ground resistance",
"Conductor length",
"DC polarity only"
],
"answer": 0,
"explanation": "A TRIAC can conduct in both directions. It is useful for AC switching and dimming. It is different from a single-direction SCR."
},
{
"id": 21,
"category": "A6 - Analyze electronic circuits",
"question": "A VFD commonly uses which output control method to control motor speed?",
"options": [
"PWM",
"GFCI",
"CT only",
"DC grounding"
],
"answer": 0,
"explanation": "PWM means pulse-width modulation. A VFD changes voltage and frequency to control motor speed. PWM creates a controlled output waveform."
},
{
"id": 22,
"category": "A6 - Analyze electronic circuits",
"question": "An IGBT is commonly used in:",
"options": [
"Power electronic switching",
"Bonding jumpers only",
"Fuse clips only",
"Ground rods"
],
"answer": 0,
"explanation": "IGBT means insulated gate bipolar transistor. It handles power switching in drives and inverters. It combines high input impedance with power-handling ability."
},
{
"id": 23,
"category": "A6 - Analyze electronic circuits",
"question": "A diode tests low resistance in both directions. What is the likely fault?",
"options": [
"Open diode",
"Shorted diode",
"Normal diode",
"Correct reverse bias"
],
"answer": 1,
"explanation": "A good diode conducts mainly one way. Low resistance both ways means it no longer blocks reverse current. This indicates a shorted diode."
},
{
"id": 24,
"category": "A6 - Analyze electronic circuits",
"question": "A rectifier converts:",
"options": [
"AC to DC",
"DC to AC only",
"Resistance to capacitance",
"Grounding to bonding"
],
"answer": 0,
"explanation": "Rectifiers use diodes or controlled devices. They convert alternating current into direct current. They are used in drives, chargers, and power supplies."
},
{
"id": 25,
"category": "C4 - Use measuring and testing equipment",
"question": "You need to measure current in one phase of a three-phase motor without opening the circuit. Which tool is best?",
"options": [
"Clamp meter",
"Megohmmeter",
"Tape measure",
"Spirit level"
],
"answer": 0,
"explanation": "A clamp meter measures current by sensing the magnetic field around one conductor. It does not need to be connected in series. Only one conductor should be inside the clamp."
},
{
"id": 26,
"category": "C4 - Use measuring and testing equipment",
"question": "A megohmmeter is used mainly to test:",
"options": [
"Insulation resistance",
"Room temperature",
"Motor speed",
"Light colour"
],
"answer": 0,
"explanation": "A megohmmeter applies a test voltage. It measures high resistance through insulation. Circuits must be isolated before testing."
},
{
"id": 27,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A single-line diagram shows a 600 V service, transformer, MCC, and distribution panels. What is its main purpose?",
"options": [
"Show simplified electrical power distribution",
"Show exact conduit bend marks",
"Show paint colours",
"Show drywall thickness"
],
"answer": 0,
"explanation": "Single-line diagrams show power flow. They simplify services, transformers, panels, and feeders. They are important for planning and troubleshooting."
},
{
"id": 28,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "On drawings, “MCC” most commonly means:",
"options": [
"Motor control centre",
"Main cable clamp",
"Mechanical cooling coil",
"Meter current connector"
],
"answer": 0,
"explanation": "MCC stands for motor control centre. It contains motor starters, feeders, and controls. It is common in industrial installations."
},
{
"id": 29,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A specification requires TECK90 cable for a motor feeder. What should you do before substituting EMT and conductors?",
"options": [
"Get approved clarification or change authorization",
"Substitute without asking",
"Use any cable with same colour",
"Ignore the specification"
],
"answer": 0,
"explanation": "Specifications are part of the contract documents. Different wiring methods may not be equivalent. Substitutions require approval."
},
{
"id": 30,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A motor nameplate shows 575 V, 3-phase, 12 A. What does this information help determine?",
"options": [
"Supply and protection requirements",
"Paint colour",
"Ladder height only",
"Wall thickness"
],
"answer": 0,
"explanation": "Nameplate data identifies correct voltage, phase, and current. It is used for wiring, overloads, and protection. Incorrect supply can damage equipment."
},
{
"id": 31,
"category": "D1 - Interpret plans, drawings and specifications",
"question": "A drawing symbol is unclear. What should be checked first?",
"options": [
"Legend, notes, and specifications",
"Worker’s guess",
"Weather report",
"Tool brand"
],
"answer": 0,
"explanation": "Drawing legends explain symbols. Specifications may add material and installation requirements. Guessing can cause incorrect installation."
},
{
"id": 32,
"category": "H2 - Install three-phase consumer/supply services and metering equipment",
"question": "A 600Y/347 V three-phase service supplies lighting line-to-neutral. What voltage is used?",
"options": [
"120 V",
"208 V",
"347 V",
"600 V"
],
"answer": 2,
"explanation": "In 600Y/347 V systems, line-to-neutral voltage is 347 V. Line-to-line voltage is 600 V. 347 V is common for commercial lighting."
},
{
"id": 33,
"category": "H2 - Install three-phase consumer/supply services and metering equipment",
"question": "Current transformers are used in metering mainly to:",
"options": [
"Step large current down for measurement",
"Increase service voltage",
"Replace grounding",
"Convert AC to DC"
],
"answer": 0,
"explanation": "CTs allow metering of high-current services. They provide a reduced current proportional to the primary current. This allows safe connection to metering equipment."
},
{
"id": 34,
"category": "H4 - Maintain three-phase services and metering equipment",
"question": "A three-phase service has one phase voltage much lower than the others. What should be suspected?",
"options": [
"Supply issue, loose connection, or phase fault",
"Normal balanced operation",
"Perfect power factor",
"Correct neutral cancellation only"
],
"answer": 0,
"explanation": "Unequal phase voltages indicate abnormal conditions. Loose connections can cause overheating and voltage imbalance. The problem should be investigated safely."
},
{
"id": 35,
"category": "J1 - Install low voltage distribution equipment",
"question": "A distribution panel feeds several branch panels. What is its main function?",
"options": [
"Distribute power to downstream circuits or equipment",
"Store tools",
"Measure room humidity",
"Replace all bonding conductors"
],
"answer": 0,
"explanation": "Distribution equipment routes power to feeders and branch circuits. It contains protective devices and bus bars. It must be correctly rated and labelled."
},
{
"id": 36,
"category": "J1 - Install low voltage distribution equipment",
"question": "Why is phase balancing important in a three-phase panel?",
"options": [
"It reduces imbalance and neutral/phase loading problems",
"It increases voltage drop intentionally",
"It eliminates overcurrent protection",
"It converts AC to DC"
],
"answer": 0,
"explanation": "Balanced loading improves system performance. Unbalanced loads can overheat conductors or equipment. Good layout reduces voltage imbalance."
},
{
"id": 37,
"category": "J1 - Install low voltage distribution equipment",
"question": "A panelboard must have adequate interrupting rating because it must safely handle:",
"options": [
"Available fault current",
"Paint colour",
"Light level",
"Room temperature only"
],
"answer": 0,
"explanation": "Equipment must be rated for the fault current available. Insufficient rating can cause dangerous failure. Interrupting rating is a key safety requirement."
},
{
"id": 38,
"category": "L1 - Install grounding and bonding systems",
"question": "The purpose of bonding metal equipment enclosures is to:",
"options": [
"Provide a low-impedance fault-current path",
"Carry normal current permanently",
"Increase voltage",
"Store energy"
],
"answer": 0,
"explanation": "Bonding connects exposed metal parts. It helps fault current return to the source. This allows protection to operate quickly."
},
{
"id": 39,
"category": "L3 - Install ground fault detection systems",
"question": "Ground fault detection on a system is used mainly to:",
"options": [
"Detect leakage or faults to ground",
"Increase motor speed",
"Replace transformer windings",
"Measure room temperature"
],
"answer": 0,
"explanation": "Ground fault detection monitors abnormal current paths. It can warn or trip depending on system design. It helps reduce shock, fire, and equipment damage risk."
},
{
"id": 40,
"category": "M1 - Install AC generating systems",
"question": "An AC generator produces voltage by:",
"options": [
"Electromagnetic induction",
"Chemical reaction only",
"Static friction only",
"Ground resistance"
],
"answer": 0,
"explanation": "Conductors moving through magnetic flux induce voltage. Generators convert mechanical energy into electrical energy. The output frequency depends on speed and poles."
},
{
"id": 41,
"category": "M1 - Install AC generating systems",
"question": "A generator must be connected through transfer equipment mainly to:",
"options": [
"Prevent backfeed and select power source safely",
"Increase conductor resistance",
"Remove all grounding",
"Convert AC to water pressure"
],
"answer": 0,
"explanation": "Transfer equipment prevents utility and generator sources from being paralleled unintentionally. Backfeed can endanger workers and equipment. Proper transfer equipment is essential."
},
{
"id": 42,
"category": "M1 - Install AC generating systems",
"question": "The frequency of an AC generator depends mainly on:",
"options": [
"Speed and number of poles",
"Cable colour",
"Ground rod length only",
"Fuse brand"
],
"answer": 0,
"explanation": "Frequency is related to rotational speed and pole count. The formula is commonly f = N × P ÷ 120 when P is poles. Correct speed is needed for correct frequency."
},
{
"id": 43,
"category": "M1 - Install AC generating systems",
"question": "Before connecting a generator to loads, which rating should be checked?",
"options": [
"Voltage, frequency, phase, and capacity",
"Paint colour",
"Wheel size only",
"Noise level only"
],
"answer": 0,
"explanation": "Generator output must match connected loads. Wrong voltage, phase, or frequency can damage equipment. Capacity must handle load current and starting current."
},
{
"id": 44,
"category": "M2 - Maintain AC generating systems",
"question": "An AC generator output frequency is low. What is a likely cause?",
"options": [
"Engine speed is too low",
"Cable insulation is too thick",
"Bonding jumper is too short",
"Load is perfectly balanced"
],
"answer": 0,
"explanation": "Generator frequency depends on speed. If the prime mover runs too slowly, frequency drops. Speed control should be checked."
},
{
"id": 45,
"category": "M3 - Install DC generating systems",
"question": "A DC generator output has polarity. What must be checked before connection?",
"options": [
"Correct positive and negative connection",
"AC phase rotation only",
"Neutral current cancellation",
"Transformer tap only"
],
"answer": 0,
"explanation": "DC systems have polarity. Reverse polarity can damage equipment or batteries. Connections must be verified before energizing."
},
{
"id": 46,
"category": "M4 - Maintain DC generating systems",
"question": "A DC generator has low output voltage. What should be checked?",
"options": [
"Speed, field excitation, and connections",
"Paint colour",
"Wall finish",
"Lighting layout only"
],
"answer": 0,
"explanation": "DC generator voltage depends on speed and field strength. Poor connections can also reduce output. Testing should be done safely."
},
{
"id": 47,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A three-phase transformer is rated 75 kVA at 600 V. What is approximate full-load line current?",
"options": [
"72 A",
"90 A",
"125 A",
"216 A"
],
"answer": 0,
"explanation": "Use I = kVA × 1000 ÷ (√3 × V). I = 75,000 ÷ (1.732 × 600). Current is about 72 A."
},
{
"id": 48,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer has a 600 V primary and 208 V secondary. What type is it?",
"options": [
"Step-up",
"Step-down",
"Isolation-free",
"DC transformer"
],
"answer": 1,
"explanation": "The secondary voltage is lower than the primary voltage. This makes it a step-down transformer. Transformers operate by mutual induction."
},
{
"id": 49,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer secondary is 208Y/120 V. What voltage is available line-to-neutral?",
"options": [
"120 V",
"208 V",
"240 V",
"347 V"
],
"answer": 0,
"explanation": "In 208Y/120 V, the lower number is line-to-neutral. The higher number is line-to-line. This system supplies both 120 V and 208 V loads."
},
{
"id": 50,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "Transformer ventilation openings must not be blocked because:",
"options": [
"Heat must be removed",
"Voltage must be stored",
"Frequency must be reduced",
"Bonding must be eliminated"
],
"answer": 0,
"explanation": "Transformers produce heat from core and copper losses. Blocked ventilation causes overheating. Overheating shortens insulation life."
},
{
"id": 51,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer primary winding is delta-connected and secondary is wye-connected. This is called:",
"options": [
"Delta-wye",
"Wye-delta only",
"Open circuit",
"Single-phase only"
],
"answer": 0,
"explanation": "The first term usually describes the primary. The second term describes the secondary. Delta-wye transformers are common for distribution."
},
{
"id": 52,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "What is the main purpose of transformer grounding and bonding?",
"options": [
"Provide safety and fault-current paths",
"Increase noise",
"Reduce kVA rating",
"Change AC to DC"
],
"answer": 0,
"explanation": "Metal parts must be bonded. Grounding and bonding support fault clearing and voltage reference. Improper bonding can create shock hazards."
},
{
"id": 53,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A 45 kVA, 208 V three-phase transformer secondary current is closest to:",
"options": [
"62 A",
"100 A",
"125 A",
"216 A"
],
"answer": 2,
"explanation": "I = 45,000 ÷ (1.732 × 208). The result is about 125 A. Three-phase current uses the √3 factor."
},
{
"id": 54,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "Transformer impedance affects:",
"options": [
"Available fault current and voltage regulation",
"Paint colour",
"Room lighting only",
"Cable jacket colour"
],
"answer": 0,
"explanation": "Transformer impedance limits short-circuit current. It also affects voltage drop under load. Lower impedance usually means higher available fault current."
},
{
"id": 55,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A transformer nameplate lists kVA, voltage, phase, and impedance. Why is the nameplate important?",
"options": [
"It provides installation and protection information",
"It replaces all testing",
"It gives wall colour",
"It eliminates code requirements"
],
"answer": 0,
"explanation": "Nameplate values guide wiring and protection. They help determine currents and compatibility. Incorrect connection can damage the transformer."
},
{
"id": 56,
"category": "P3 - Install low-voltage three-phase transformers",
"question": "A wye secondary provides a neutral because:",
"options": [
"The common point of the three windings can be brought out",
"Delta always has a neutral",
"Neutral is the same as bonding conductor",
"Transformers cannot operate without neutral"
],
"answer": 0,
"explanation": "A wye has a common star point. That point can serve as neutral when connected. Delta systems do not naturally provide a neutral."
},
{
"id": 57,
"category": "P5 - Install high-voltage transformers",
"question": "High-voltage transformer work requires special attention to:",
"options": [
"Clearances, isolation, grounding, and qualified procedures",
"Paint colour only",
"Receptacle polarity only",
"Thermostat height"
],
"answer": 0,
"explanation": "High voltage has greater shock and arc hazards. Safe approach distances and isolation are critical. Only qualified workers should perform this work."
},
{
"id": 58,
"category": "P5 - Install high-voltage transformers",
"question": "Why are warning signs and barriers important around high-voltage transformer equipment?",
"options": [
"To prevent unauthorized access and contact",
"To increase transformer kVA",
"To reduce conductor resistance",
"To change frequency"
],
"answer": 0,
"explanation": "High-voltage equipment can be deadly. Barriers and warning signs control access. They support worker and public safety."
},
{
"id": 59,
"category": "P5 - Install high-voltage transformers",
"question": "Before working on a high-voltage transformer, what must be confirmed?",
"options": [
"De-energized, isolated, tested, and grounded as required",
"Paint is dry",
"Room is bright only",
"Nameplate is removed"
],
"answer": 0,
"explanation": "High-voltage equipment can retain dangerous energy. Isolation and testing are mandatory safety steps. Grounding may be required to control induced or stored voltage."
},
{
"id": 60,
"category": "R2 - Install wiring devices",
"question": "A receptacle has reversed polarity. What is the concern?",
"options": [
"Parts expected to be neutral may be energized",
"Voltage becomes zero",
"Breaker rating doubles",
"Load becomes three-phase"
],
"answer": 0,
"explanation": "Reversed polarity can create shock hazards. Correct terminal connections are required. Testing helps verify safe installation."
},
{
"id": 61,
"category": "R2 - Install wiring devices",
"question": "On a standard receptacle, the bonding conductor connects to:",
"options": [
"Green terminal",
"Brass terminal",
"Silver terminal",
"Hot terminal only"
],
"answer": 0,
"explanation": "Green identifies the bonding terminal. Brass is usually ungrounded conductor. Silver is usually identified conductor."
},
{
"id": 62,
"category": "V1 - Install motor starters and controls",
"question": "A contactor coil is energized but the motor does not start. What should be checked?",
"options": [
"Power contacts, overloads, and line voltage",
"Paint colour",
"Room temperature only",
"Data cable type only"
],
"answer": 0,
"explanation": "The control circuit may be working while the power circuit is not. Bad contacts, open overloads, or missing voltage can stop the motor. Troubleshoot control and power circuits separately."
},
{
"id": 63,
"category": "V1 - Install motor starters and controls",
"question": "In a three-wire motor control circuit, the stop button is usually:",
"options": [
"Normally closed",
"Normally open",
"A transformer",
"A capacitor"
],
"answer": 0,
"explanation": "A normally closed stop button opens when pressed. It interrupts the control circuit. This is safer because an open wire also stops the motor."
},
{
"id": 64,
"category": "V1 - Install motor starters and controls",
"question": "The purpose of an overload relay is to protect the motor from:",
"options": [
"Sustained overload current",
"Low light levels",
"Paint damage",
"Data noise"
],
"answer": 0,
"explanation": "Overload current heats motor windings. The overload relay trips before motor damage occurs. It does not replace short-circuit protection."
},
{
"id": 65,
"category": "V1 - Install motor starters and controls",
"question": "A seal-in contact is connected in parallel with the:",
"options": [
"Start pushbutton",
"Stop pushbutton",
"Overload contact",
"Grounding conductor"
],
"answer": 0,
"explanation": "The seal-in contact maintains coil power after start is released. It is an auxiliary contact on the starter. The stop button or overload opens the circuit to stop the motor."
},
{
"id": 66,
"category": "V2 - Maintain motor starters and controls",
"question": "A motor starter chatters when energized. What is a likely cause?",
"options": [
"Low control voltage or loose connection",
"Correct operation",
"High paint thickness",
"Too much grounding"
],
"answer": 0,
"explanation": "A contactor coil needs proper voltage to hold in. Low voltage or poor connections cause weak magnetic pull. Chattering can damage contacts and coils."
},
{
"id": 67,
"category": "W1 - Install drives",
"question": "A VFD controls motor speed mainly by changing:",
"options": [
"Voltage and frequency supplied to the motor",
"Ground rod length",
"Conduit size only",
"Fuse colour"
],
"answer": 0,
"explanation": "VFD means variable frequency drive. Motor speed depends on frequency. The drive controls both voltage and frequency."
},
{
"id": 68,
"category": "W1 - Install drives",
"question": "PWM in a drive stands for:",
"options": [
"Pulse-width modulation",
"Power wire measurement",
"Phase winding motor",
"Protective watt meter"
],
"answer": 0,
"explanation": "PWM is used by many drives to create controlled output. It switches power devices rapidly. This simulates a variable voltage and frequency waveform."
},
{
"id": 69,
"category": "W1 - Install drives",
"question": "Why must VFD cable and grounding instructions be followed carefully?",
"options": [
"To reduce electrical noise and protect equipment",
"To increase paint life",
"To remove motor overload protection",
"To make the motor DC only"
],
"answer": 0,
"explanation": "Drives can produce high-frequency noise. Proper cable, bonding, and grounding reduce interference. Manufacturer instructions are important."
},
{
"id": 70,
"category": "W1 - Install drives",
"question": "A VFD output should generally not be connected to:",
"options": [
"A motor rated for the application",
"A contactor frequently opening under load without proper design",
"Properly sized motor conductors",
"A grounded enclosure"
],
"answer": 1,
"explanation": "Opening the drive output under load can damage the drive. Drives need proper control methods. Follow manufacturer instructions."
},
{
"id": 71,
"category": "W1 - Install drives",
"question": "The V/F ratio in a drive refers to:",
"options": [
"Voltage-to-frequency relationship",
"Volt-to-fuse rating",
"Ventilation fan ratio",
"Variable fuse resistance"
],
"answer": 0,
"explanation": "V/F means voltage frequency relationship. Maintaining proper V/F helps motor flux and torque. It is important in AC drive operation."
},
{
"id": 72,
"category": "Y1 - Install AC motors",
"question": "An induction motor’s synchronous speed depends on:",
"options": [
"Frequency and number of poles",
"Cable colour",
"Ground resistance only",
"Bearing size only"
],
"answer": 0,
"explanation": "Synchronous speed is based on supply frequency and poles. The common formula is Ns = 120f ÷ P. More poles mean lower speed."
},
{
"id": 73,
"category": "Y1 - Install AC motors",
"question": "A 4-pole motor on 60 Hz has synchronous speed of:",
"options": [
"900 rpm",
"1200 rpm",
"1800 rpm",
"3600 rpm"
],
"answer": 2,
"explanation": "Use Ns = 120f ÷ P. Ns = 120 × 60 ÷ 4 = 1800 rpm. Actual induction motor speed is slightly lower due to slip."
},
{
"id": 74,
"category": "Y1 - Install AC motors",
"question": "A squirrel cage induction motor rotor speed is usually:",
"options": [
"Slightly below synchronous speed",
"Exactly synchronous under load",
"Higher than synchronous speed",
"Zero when running"
],
"answer": 0,
"explanation": "Induction motors require slip to produce torque. Rotor speed is less than synchronous speed. Slip increases with load."
},
{
"id": 75,
"category": "Y1 - Install AC motors",
"question": "Motor full-load current is found primarily from the:",
"options": [
"Nameplate",
"Paint colour",
"Conduit length only",
"Ground rod size"
],
"answer": 0,
"explanation": "The motor nameplate lists voltage, current, horsepower, and other data. This information is used for installation and protection. Never guess motor ratings."
},
{
"id": 76,
"category": "Y1 - Install AC motors",
"question": "A TEFC motor is:",
"options": [
"Totally enclosed fan cooled",
"Transformer energized frequency control",
"Temporary emergency fuse connection",
"Three-electrode field coil"
],
"answer": 0,
"explanation": "TEFC means totally enclosed fan cooled. The enclosure helps protect internal parts. An external fan provides cooling."
},
{
"id": 77,
"category": "Y1 - Install AC motors",
"question": "A TENV motor is:",
"options": [
"Totally enclosed non-ventilated",
"Transformer energized neutral voltage",
"Three-phase external neutral voltage",
"Thermal emergency no-voltage"
],
"answer": 0,
"explanation": "TENV means totally enclosed non-ventilated. It does not use an external ventilation fan. It relies on enclosure surface cooling."
},
{
"id": 78,
"category": "Y1 - Install AC motors",
"question": "A three-phase motor runs backward. What is the correct correction?",
"options": [
"Swap any two phase conductors",
"Reverse neutral and ground",
"Increase fuse size",
"Add a capacitor only"
],
"answer": 0,
"explanation": "Three-phase motor direction depends on phase sequence. Swapping any two phases reverses rotation. The circuit must be safely de-energized first."
},
{
"id": 79,
"category": "Y1 - Install AC motors",
"question": "Motor horsepower is a measure of:",
"options": [
"Mechanical output power",
"Insulation resistance",
"Ground fault current only",
"Frequency"
],
"answer": 0,
"explanation": "Horsepower describes mechanical power output. One horsepower is approximately 746 watts. Motor electrical input is higher due to losses."
},
{
"id": 80,
"category": "Y1 - Install AC motors",
"question": "Slip in an induction motor is:",
"options": [
"Difference between synchronous speed and rotor speed",
"Difference between voltage and current",
"Ground current only",
"Transformer loss only"
],
"answer": 0,
"explanation": "Slip allows induction motor torque production. Rotor speed is slightly below synchronous speed. Slip is often expressed as a percentage."
},
{
"id": 81,
"category": "Y2 - Maintain AC motors",
"question": "An AC motor is overheating. Which cause is likely?",
"options": [
"Overload, poor ventilation, low voltage, or single-phasing",
"Perfect normal operation",
"Too much paint on panel only",
"Correct load and voltage always"
],
"answer": 0,
"explanation": "Motors overheat when current or cooling conditions are abnormal. Electrical and mechanical causes must be checked. Do not keep resetting protection without finding the cause."
},
{
"id": 82,
"category": "Y3 - Install DC motors",
"question": "In a DC motor, reversing armature polarity can:",
"options": [
"Reverse direction of rotation",
"Always increase frequency",
"Convert motor to AC",
"Remove torque"
],
"answer": 0,
"explanation": "DC motor direction depends on current direction in field and armature. Changing one of them reverses rotation. Changing both may keep direction the same."
},
{
"id": 83,
"category": "Y3 - Install DC motors",
"question": "A DC motor requires correct polarity because:",
"options": [
"Polarity affects direction and operation",
"DC has no positive or negative",
"Polarity only affects paint colour",
"It removes the need for overload protection"
],
"answer": 0,
"explanation": "DC circuits have positive and negative conductors. Wrong polarity can reverse rotation or damage controls. Connections must be verified before energizing."
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
sectionTitle: "Level 3 Practice Exam – Set 1 ",
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
