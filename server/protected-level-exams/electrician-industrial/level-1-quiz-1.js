const electricianLevel1StandardExamQuestions = [
{
"id": 1,
"category": "A1 — Use electrical circuit concepts",
"question": "What is the current in a circuit with 120 V applied across a 24 Ω resistance?",
"options": [
"2 A",
"5 A",
"12 A",
"24 A"
],
"answer": 1,
"explanation": "Ohm’s Law: ( I = E/R = 120/24 = 5A )."
},
{
"id": 2,
"category": "A1 — Use electrical circuit concepts",
"question": "A 10 Ω resistor and a 20 Ω resistor are connected in series. What is the total resistance?",
"options": [
"6.67 Ω",
"10 Ω",
"20 Ω",
"30 Ω"
],
"answer": 3,
"explanation": "In series, resistances add: ( R_T = 10 + 20 = 30Ω )."
},
{
"id": 3,
"category": "A1 — Use electrical circuit concepts",
"question": "Two 30 Ω resistors are connected in parallel. What is the total resistance?",
"options": [
"15 Ω",
"30 Ω",
"60 Ω",
"900 Ω"
],
"answer": 0,
"explanation": "Equal resistors in parallel divide by number: ( 30/2 = 15Ω )."
},
{
"id": 4,
"category": "A1 — Use electrical circuit concepts",
"question": "Which statement is true for current in a series circuit?",
"options": [
"Current is different through each load",
"Current is the same through all loads",
"Current exists only before the first load",
"Current increases after each load"
],
"answer": 1,
"explanation": "In a series circuit, there is only one path for current flow."
},
{
"id": 5,
"category": "A1 — Use electrical circuit concepts",
"question": "Which statement is true for voltage in a parallel circuit?",
"options": [
"Voltage is divided between branches",
"Voltage is zero across each branch",
"Voltage is the same across each branch",
"Voltage increases in each branch"
],
"answer": 2,
"explanation": "Parallel branches are connected across the same source voltage."
},
{
"id": 6,
"category": "A1 — Use electrical circuit concepts",
"question": "A 120 V lamp draws 2 A. What is its power?",
"options": [
"60 W",
"120 W",
"240 W",
"480 W"
],
"answer": 2,
"explanation": "( P = E \times I = 120 \times 2 = 240W )."
},
{
"id": 7,
"category": "A1 — Use electrical circuit concepts",
"question": "What unit is used to measure electrical resistance?",
"options": [
"Volt",
"Ampere",
"Ohm",
"Watt"
],
"answer": 2,
"explanation": "Resistance is measured in ohms, symbol Ω."
},
{
"id": 8,
"category": "A1 — Use electrical circuit concepts",
"question": "What happens to current if voltage stays the same and resistance increases?",
"options": [
"Current increases",
"Current decreases",
"Current stays the same",
"Current becomes voltage"
],
"answer": 1,
"explanation": "From Ohm’s Law, ( I = E/R ). Increasing resistance lowers current."
},
{
"id": 9,
"category": "A1 — Use electrical circuit concepts",
"question": "A circuit has 240 V and draws 10 A. What is the resistance?",
"options": [
"12 Ω",
"24 Ω",
"120 Ω",
"2400 Ω"
],
"answer": 1,
"explanation": "( R = E/I = 240/10 = 24Ω )."
},
{
"id": 10,
"category": "A1 — Use electrical circuit concepts",
"question": "Which device is commonly used to protect a circuit from excessive current?",
"options": [
"Switch",
"Fuse",
"Receptacle",
"Transformer core"
],
"answer": 1,
"explanation": "A fuse opens the circuit when current exceeds its rating."
},
{
"id": 11,
"category": "A1 — Use electrical circuit concepts",
"question": "What is the main purpose of insulation on a conductor?",
"options": [
"Increase voltage",
"Prevent unwanted current flow",
"Reduce conductor length",
"Increase resistance of copper"
],
"answer": 1,
"explanation": "Insulation prevents accidental contact and short circuits."
},
{
"id": 12,
"category": "A1 — Use electrical circuit concepts",
"question": "A load connected to a source converts electrical energy into another form of energy. Which is an example?",
"options": [
"Copper wire only",
"Open switch",
"Electric heater",
"Empty conduit"
],
"answer": 2,
"explanation": "A heater converts electrical energy into heat."
},
{
"id": 13,
"category": "A1 — Use electrical circuit concepts",
"question": "What condition exists when a circuit path is complete and current can flow?",
"options": [
"Open circuit",
"Closed circuit",
"Ground fault only",
"Short to neutral only"
],
"answer": 1,
"explanation": "A closed circuit provides a complete current path."
},
{
"id": 14,
"category": "A2 — Analyze DC circuits",
"question": "In a DC circuit, current normally flows in:",
"options": [
"Alternating directions",
"One direction",
"Random directions",
"No direction"
],
"answer": 1,
"explanation": "DC means direct current; polarity remains constant."
},
{
"id": 15,
"category": "A2 — Analyze DC circuits",
"question": "Three resistors, 5 Ω, 10 Ω, and 15 Ω, are in series. What is total resistance?",
"options": [
"3.33 Ω",
"10 Ω",
"20 Ω",
"30 Ω"
],
"answer": 3,
"explanation": "Series resistance adds directly."
},
{
"id": 16,
"category": "A2 — Analyze DC circuits",
"question": "A 12 V battery supplies a 6 Ω load. What current flows?",
"options": [
"0.5 A",
"2 A",
"6 A",
"72 A"
],
"answer": 1,
"explanation": "( I = E/R = 12/6 = 2A )."
},
{
"id": 17,
"category": "A2 — Analyze DC circuits",
"question": "In a series DC circuit, the sum of the voltage drops equals:",
"options": [
"Zero",
"The source voltage",
"The largest resistor value",
"The total current"
],
"answer": 1,
"explanation": "Kirchhoff’s Voltage Law says total voltage drops equal applied voltage."
},
{
"id": 18,
"category": "A2 — Analyze DC circuits",
"question": "If one resistor opens in a series DC circuit, what happens?",
"options": [
"Current increases",
"Current stops",
"Voltage disappears from the source",
"Other resistors keep operating normally"
],
"answer": 1,
"explanation": "A series circuit has one path; an open stops current everywhere."
},
{
"id": 19,
"category": "A2 — Analyze DC circuits",
"question": "Two resistors are in parallel. One branch opens. What happens to the other branch?",
"options": [
"It usually continues operating",
"It must also open",
"It becomes series-connected",
"It has zero voltage"
],
"answer": 0,
"explanation": "Parallel branches have independent current paths."
},
{
"id": 20,
"category": "A2 — Analyze DC circuits",
"question": "What is the voltage drop across a 4 Ω resistor carrying 3 A?",
"options": [
"1.33 V",
"7 V",
"12 V",
"24 V"
],
"answer": 2,
"explanation": "( E = I \times R = 3 \times 4 = 12V )."
},
{
"id": 21,
"category": "A2 — Analyze DC circuits",
"question": "Which law states that current entering a junction equals current leaving the junction?",
"options": [
"Ohm’s Law",
"Kirchhoff’s Current Law",
"Coulomb’s Law",
"Faraday’s Law"
],
"answer": 1,
"explanation": "KCL applies to current at circuit junctions."
},
{
"id": 22,
"category": "A2 — Analyze DC circuits",
"question": "A DC circuit has 24 V and total resistance of 8 Ω. What power is consumed?",
"options": [
"3 W",
"24 W",
"72 W",
"192 W"
],
"answer": 2,
"explanation": "Current is ( 24/8 = 3A ). Power is ( P = E \times I = 24 \times 3 = 72W )."
},
{
"id": 23,
"category": "A2 — Analyze DC circuits",
"question": "What happens to total resistance when more resistors are added in parallel?",
"options": [
"It increases",
"It decreases",
"It stays equal to the largest resistor",
"It becomes infinite"
],
"answer": 1,
"explanation": "Parallel paths reduce total resistance."
},
{
"id": 24,
"category": "A2 — Analyze DC circuits",
"question": "A short circuit usually has:",
"options": [
"Very high resistance and low current",
"Very low resistance and high current",
"No current at all",
"Normal load resistance"
],
"answer": 1,
"explanation": "A short provides an unintended low-resistance path."
},
{
"id": 25,
"category": "A2 — Analyze DC circuits",
"question": "Which meter connection is correct when measuring voltage?",
"options": [
"In series with the load",
"In parallel with the load",
"Only around the conductor",
"Between ground rods only"
],
"answer": 1,
"explanation": "Voltage is measured across two points."
},
{
"id": 26,
"category": "A2 — Analyze DC circuits",
"question": "Which meter connection is correct when measuring current with an ammeter?",
"options": [
"In series with the circuit",
"In parallel with the source",
"Across an open switch only",
"Across a resistor only"
],
"answer": 0,
"explanation": "Current must flow through the ammeter."
},
{
"id": 27,
"category": "A3 — Analyze principles of electromagnetism",
"question": "A magnetic field is produced when:",
"options": [
"A conductor carries current",
"A resistor cools down",
"A circuit is open",
"Voltage is zero"
],
"answer": 0,
"explanation": "Current flow creates a magnetic field around the conductor."
},
{
"id": 28,
"category": "A3 — Analyze principles of electromagnetism",
"question": "The strength of an electromagnet can be increased by:",
"options": [
"Decreasing current",
"Increasing turns of wire",
"Removing the iron core",
"Opening the circuit"
],
"answer": 1,
"explanation": "More coil turns increase magnetic field strength."
},
{
"id": 29,
"category": "A3 — Analyze principles of electromagnetism",
"question": "What is induced when a conductor cuts magnetic lines of flux?",
"options": [
"Resistance",
"Capacitance",
"Voltage",
"Insulation"
],
"answer": 2,
"explanation": "Electromagnetic induction produces an induced EMF."
},
{
"id": 30,
"category": "A3 — Analyze principles of electromagnetism",
"question": "The unit of magnetic flux is commonly represented by:",
"options": [
"Ohm",
"Weber",
"Ampere-hour",
"Watt"
],
"answer": 1,
"explanation": "Magnetic flux is measured in webers."
},
{
"id": 31,
"category": "A3 — Analyze principles of electromagnetism",
"question": "Lenz’s Law states that induced current:",
"options": [
"Always assists the change causing it",
"Opposes the change causing it",
"Flows only in AC circuits",
"Has no magnetic effect"
],
"answer": 1,
"explanation": "Lenz’s Law describes opposition to the change in magnetic flux."
},
{
"id": 32,
"category": "A3 — Analyze principles of electromagnetism",
"question": "What happens when current through a coil increases?",
"options": [
"Magnetic field increases",
"Magnetic field disappears",
"Resistance becomes zero",
"Frequency becomes zero"
],
"answer": 0,
"explanation": "Magnetic field strength is proportional to current."
},
{
"id": 33,
"category": "A3 — Analyze principles of electromagnetism",
"question": "A transformer operates on the principle of:",
"options": [
"Electrolysis",
"Electromagnetic induction",
"Static discharge only",
"Chemical heating"
],
"answer": 1,
"explanation": "Transformers transfer energy through changing magnetic flux."
},
{
"id": 34,
"category": "A3 — Analyze principles of electromagnetism",
"question": "What is the purpose of a laminated iron core in many electromagnetic devices?",
"options": [
"Reduce eddy-current losses",
"Increase air gap resistance",
"Stop all magnetic flux",
"Replace insulation"
],
"answer": 0,
"explanation": "Laminations reduce circulating currents in the core."
},
{
"id": 35,
"category": "A6 — Analyze electronic circuits",
"question": "A diode normally allows current to flow:",
"options": [
"In both directions equally",
"In one direction",
"Only when reverse biased",
"Only in AC circuits"
],
"answer": 1,
"explanation": "A diode is a one-way semiconductor device."
},
{
"id": 36,
"category": "A6 — Analyze electronic circuits",
"question": "LED stands for:",
"options": [
"Low energy device",
"Light-emitting diode",
"Line electrical detector",
"Load equalizing device"
],
"answer": 1,
"explanation": "LED means light-emitting diode."
},
{
"id": 37,
"category": "A6 — Analyze electronic circuits",
"question": "A transistor can commonly be used as:",
"options": [
"A switch or amplifier",
"A raceway fitting",
"A grounding electrode",
"A fuse holder only"
],
"answer": 0,
"explanation": "Transistors control current in electronic circuits."
},
{
"id": 38,
"category": "A6 — Analyze electronic circuits",
"question": "In a rectifier circuit, the purpose of diodes is to:",
"options": [
"Convert AC to DC",
"Convert DC to AC only",
"Measure resistance",
"Create grounding continuity"
],
"answer": 0,
"explanation": "Rectifiers use diodes to change alternating current into direct current."
},
{
"id": 39,
"category": "A6 — Analyze electronic circuits",
"question": "What does a capacitor store?",
"options": [
"Magnetic energy only",
"Electrical charge",
"Mechanical force",
"Ground resistance"
],
"answer": 1,
"explanation": "Capacitors store charge in an electric field."
},
{
"id": 40,
"category": "A6 — Analyze electronic circuits",
"question": "A resistor in an electronic circuit is commonly used to:",
"options": [
"Limit current",
"Produce unlimited current",
"Remove all voltage",
"Replace a transformer"
],
"answer": 0,
"explanation": "Resistors oppose current flow and can control circuit current."
},
{
"id": 41,
"category": "B1 — Use personal protection equipment and safety equipment",
"question": "Which PPE is most appropriate when drilling overhead into concrete?",
"options": [
"Safety glasses",
"Cotton gloves only",
"Running shoes",
"Loose clothing"
],
"answer": 0,
"explanation": "Eye protection prevents dust and debris injuries."
},
{
"id": 42,
"category": "B1 — Use personal protection equipment and safety equipment",
"question": "Before using a ladder, a worker should first:",
"options": [
"Inspect it for damage",
"Paint it",
"Remove all labels",
"Stand on the top cap"
],
"answer": 0,
"explanation": "Damaged ladders are unsafe and should not be used."
},
{
"id": 43,
"category": "B2 — Maintain safe work environment",
"question": "A safe work area should be kept:",
"options": [
"Clean and free of unnecessary hazards",
"Dark to reduce distraction",
"Full of scrap material",
"Wet to reduce dust"
],
"answer": 0,
"explanation": "Good housekeeping reduces slips, trips, and injuries."
},
{
"id": 44,
"category": "B2 — Maintain safe work environment",
"question": "What should be done with a damaged extension cord?",
"options": [
"Continue using it carefully",
"Repair with tape only",
"Remove it from service",
"Hide the damaged area"
],
"answer": 2,
"explanation": "Damaged cords can cause shock or fire."
},
{
"id": 45,
"category": "B3 — Perform lock-out and tag-out procedures",
"question": "The main purpose of lock-out/tag-out is to:",
"options": [
"Prevent accidental energization",
"Make equipment run faster",
"Identify tool ownership",
"Replace circuit protection"
],
"answer": 0,
"explanation": "Lock-out/tag-out protects workers from unexpected energy release."
},
{
"id": 46,
"category": "B3 — Perform lock-out and tag-out procedures",
"question": "After locking out a circuit, the worker should:",
"options": [
"Assume it is dead",
"Verify absence of voltage",
"Remove PPE",
"Start work immediately without testing"
],
"answer": 1,
"explanation": "Testing confirms the equipment is de-energized."
},
{
"id": 47,
"category": "C4 — Use measuring and testing equipment",
"question": "Which instrument is used to measure resistance?",
"options": [
"Ammeter",
"Ohmmeter",
"Tachometer",
"Megaphone"
],
"answer": 1,
"explanation": "Resistance is measured with an ohmmeter."
},
{
"id": 48,
"category": "C4 — Use measuring and testing equipment",
"question": "Before measuring resistance, the circuit should be:",
"options": [
"Energized",
"De-energized",
"Connected to maximum voltage",
"Connected to a motor starter"
],
"answer": 1,
"explanation": "Resistance measurements are taken on de-energized circuits."
},
{
"id": 49,
"category": "C4 — Use measuring and testing equipment",
"question": "A clamp meter is commonly used to measure:",
"options": [
"Current without opening the circuit",
"Conduit diameter only",
"Insulation colour",
"Wire temperature only"
],
"answer": 0,
"explanation": "Clamp meters sense current through the magnetic field around a conductor."
},
{
"id": 50,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "On electrical drawings, symbols are used to represent:",
"options": [
"Electrical devices and equipment",
"Worker names only",
"Exact screw lengths only",
"Payroll information"
],
"answer": 0,
"explanation": "Drawings use symbols for outlets, switches, fixtures, panels, and equipment."
},
{
"id": 51,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A single-line diagram is mainly used to show:",
"options": [
"A simplified electrical power system",
"Exact wall paint colour",
"Worker schedule",
"Tool inventory"
],
"answer": 0,
"explanation": "Single-line diagrams show major electrical components and connections."
},
{
"id": 52,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "Specifications usually provide information about:",
"options": [
"Materials, installation standards, and workmanship",
"Lunch breaks",
"Personal phone numbers",
"Tool brand preferences only"
],
"answer": 0,
"explanation": "Specs explain the required quality and installation details."
},
{
"id": 53,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A floor plan helps electricians identify:",
"options": [
"Device locations",
"Wire ampacity tables only",
"Payroll deductions",
"Battery chemistry"
],
"answer": 0,
"explanation": "Floor plans show where receptacles, switches, lights, and equipment are placed."
},
{
"id": 54,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "What should an electrician do if a drawing conflicts with specifications?",
"options": [
"Guess the cheaper option",
"Ignore both documents",
"Ask for clarification through the proper process",
"Install anything available"
],
"answer": 2,
"explanation": "Conflicts should be clarified before installation."
},
{
"id": 55,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "A legend on a drawing is used to:",
"options": [
"Explain symbols and abbreviations",
"Show worker vacation dates",
"Replace the electrical code",
"List only company rules"
],
"answer": 0,
"explanation": "Legends define symbols used on the drawing."
},
{
"id": 56,
"category": "D1 — Interpret plans, drawings and specifications",
"question": "Scale on a drawing is used to:",
"options": [
"Relate drawing dimensions to actual dimensions",
"Measure current",
"Identify conductor insulation",
"Test voltage"
],
"answer": 0,
"explanation": "Scale allows accurate interpretation of real-world distances."
},
{
"id": 57,
"category": "D2 — Use Canadian Electrical Code",
"question": "The Canadian Electrical Code is used to determine:",
"options": [
"Minimum safe electrical installation requirements",
"Employee wages",
"Brand of hand tools",
"Lunchroom layout"
],
"answer": 0,
"explanation": "The CEC sets minimum safety standards for electrical installations."
},
{
"id": 58,
"category": "D2 — Use Canadian Electrical Code",
"question": "When using code tables, the electrician should always check:",
"options": [
"Table title, notes, and conditions of use",
"Only the biggest number",
"Only the first column",
"The colour of the page"
],
"answer": 0,
"explanation": "Code tables must be applied under the correct conditions."
},
{
"id": 59,
"category": "G2 — Use mentoring techniques",
"question": "A good mentoring practice for a new apprentice is to:",
"options": [
"Explain the task, demonstrate it, and supervise safely",
"Let them guess without guidance",
"Criticize mistakes without teaching",
"Give them only the most dangerous work"
],
"answer": 0,
"explanation": "Effective mentoring includes instruction, demonstration, feedback, and safety."
},
{
"id": 60,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "A single-phase residential service commonly supplies:",
"options": [
"120/240 V",
"12 V only",
"600 V DC only",
"347/600 V only"
],
"answer": 0,
"explanation": "Many single-phase residential services are 120/240 V."
},
{
"id": 61,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "The service equipment is located between:",
"options": [
"The supply authority connection and the building distribution system",
"Two light switches only",
"A receptacle and a lamp",
"A thermostat and relay only"
],
"answer": 0,
"explanation": "Service equipment controls and protects the building’s electrical supply."
},
{
"id": 62,
"category": "H1 — Install single-phase consumer/supply services and metering equipment",
"question": "A meter base is used to:",
"options": [
"Hold the revenue meter",
"Protect branch circuit wiring only",
"Replace a grounding conductor",
"Measure pipe diameter"
],
"answer": 0,
"explanation": "The meter base provides the mounting and connection point for the electrical meter."
},
{
"id": 63,
"category": "H3 — Maintain single-phase services and metering equipment",
"question": "When inspecting service equipment, signs of overheating may include:",
"options": [
"Discolouration or damaged insulation",
"Clean labels",
"Correct panel directory",
"Properly closed covers only"
],
"answer": 0,
"explanation": "Heat damage can show as discolouration, melting, or brittle insulation."
},
{
"id": 64,
"category": "I2 — Install ground fault, arc fault and surge protection devices",
"question": "A GFCI device protects people by detecting:",
"options": [
"Current imbalance between conductors",
"Overloaded conduit",
"Low room temperature",
"Incorrect paint colour"
],
"answer": 0,
"explanation": "GFCIs trip when leakage current indicates a possible shock hazard."
},
{
"id": 65,
"category": "I2 — Install ground fault, arc fault and surge protection devices",
"question": "AFCI stands for:",
"options": [
"Arc-fault circuit interrupter",
"Alternating fuse control indicator",
"Approved fixture current input",
"Automatic feeder cable insulator"
],
"answer": 0,
"explanation": "AFCI means arc-fault circuit interrupter."
},
{
"id": 66,
"category": "I2 — Install ground fault, arc fault and surge protection devices",
"question": "Surge protection devices are used to protect equipment from:",
"options": [
"Voltage transients",
"Normal switch operation only",
"Low resistance grounding only",
"Mechanical vibration only"
],
"answer": 0,
"explanation": "Surge devices limit damaging voltage spikes."
},
{
"id": 67,
"category": "J1 — Install low voltage distribution equipment",
"question": "In electrical trade language, low voltage distribution often refers to systems:",
"options": [
"750 V or less, depending on code context",
"Over 50,000 V only",
"Battery watches only",
"Telephone only"
],
"answer": 0,
"explanation": "Low voltage in Canadian electrical work commonly refers to utilization voltages such as 120/240 V, 208 V, 347/600 V, and similar systems within code limits."
},
{
"id": 68,
"category": "J1 — Install low voltage distribution equipment",
"question": "A panelboard is used to:",
"options": [
"Distribute power to branch circuits",
"Store hand tools",
"Measure ladder height",
"Replace all switches"
],
"answer": 0,
"explanation": "Panelboards contain overcurrent devices that feed branch circuits."
},
{
"id": 69,
"category": "L1 — Install grounding and bonding systems",
"question": "Bonding is primarily used to:",
"options": [
"Keep non-current-carrying metal parts at the same potential",
"Increase circuit voltage",
"Replace overcurrent protection",
"Make conductors smaller"
],
"answer": 0,
"explanation": "Bonding reduces shock hazard by connecting metal parts together."
},
{
"id": 70,
"category": "L1 — Install grounding and bonding systems",
"question": "Grounding connects an electrical system to:",
"options": [
"Earth",
"Only a switch handle",
"Only a light fixture",
"A plastic box only"
],
"answer": 0,
"explanation": "Grounding provides a reference to earth and assists system stability and safety."
},
{
"id": 71,
"category": "Q1 — Install conductors and cables",
"question": "Before pulling conductors into a raceway, the electrician should verify:",
"options": [
"Raceway is complete and free of obstructions",
"Conductors are randomly selected",
"Insulation is removed from all conductors",
"Breakers are oversized"
],
"answer": 0,
"explanation": "Raceways must be properly installed before conductors are pulled."
},
{
"id": 72,
"category": "Q1 — Install conductors and cables",
"question": "Why must conductor insulation type be suitable for the installation location?",
"options": [
"To match voltage, temperature, and environmental conditions",
"To make wire heavier",
"To reduce all current to zero",
"To avoid using connectors"
],
"answer": 0,
"explanation": "Insulation must be rated for the conditions where it is installed."
},
{
"id": 73,
"category": "Q2 — Install raceways, boxes and fittings",
"question": "EMT stands for:",
"options": [
"Electrical metallic tubing",
"Electric motor transformer",
"Emergency main terminal",
"External meter tap"
],
"answer": 0,
"explanation": "EMT means electrical metallic tubing."
},
{
"id": 74,
"category": "Q2 — Install raceways, boxes and fittings",
"question": "Boxes are installed in raceway systems to:",
"options": [
"Provide access for splices, devices, and pulling conductors",
"Hide damaged wires",
"Replace bonding conductors",
"Reduce all voltage"
],
"answer": 0,
"explanation": "Boxes provide safe access points and enclosures."
},
{
"id": 75,
"category": "Q2 — Install raceways, boxes and fittings",
"question": "What is the purpose of using proper fittings with raceways?",
"options": [
"To provide mechanical and electrical continuity where required",
"To make raceways decorative only",
"To increase circuit frequency",
"To eliminate all supports"
],
"answer": 0,
"explanation": "Fittings secure raceways and may maintain bonding continuity."
},
{
"id": 76,
"category": "R1 — Install luminaires",
"question": "A luminaire is:",
"options": [
"A complete lighting unit",
"A grounding rod only",
"A motor starter only",
"A conduit strap only"
],
"answer": 0,
"explanation": "A luminaire includes the lamp holder or LED assembly and related parts."
},
{
"id": 77,
"category": "R1 — Install luminaires",
"question": "Before installing a luminaire, the electrician should verify that the outlet box:",
"options": [
"Is suitable to support the luminaire",
"Is full of extra conductors",
"Has no bonding connection",
"Is unsupported"
],
"answer": 0,
"explanation": "Fixtures must be safely supported by approved boxes or supports."
},
{
"id": 78,
"category": "R2 — Install wiring devices",
"question": "A receptacle is used to:",
"options": [
"Provide a connection point for plug-in loads",
"Protect only against lightning",
"Replace a circuit breaker",
"Measure motor speed"
],
"answer": 0,
"explanation": "Receptacles allow portable equipment to connect to the circuit."
},
{
"id": 79,
"category": "R2 — Install wiring devices",
"question": "A single-pole switch controls a load from:",
"options": [
"One location",
"Two locations",
"Three locations",
"No location"
],
"answer": 0,
"explanation": "A single-pole switch opens or closes one circuit from one point."
},
{
"id": 80,
"category": "R2 — Install wiring devices",
"question": "The bonding conductor in a device box should be connected to:",
"options": [
"Metal boxes and device bonding terminals where required",
"Only the ungrounded conductor",
"Only the neutral terminal",
"No metal parts"
],
"answer": 0,
"explanation": "Bonding provides a low-impedance fault path."
},
{
"id": 81,
"category": "R3 — Install lighting controls",
"question": "A three-way switching circuit is used to control a light from:",
"options": [
"Two locations",
"One location only",
"No locations",
"Only the panelboard"
],
"answer": 0,
"explanation": "Three-way switches allow control of one load from two points."
},
{
"id": 82,
"category": "R3 — Install lighting controls",
"question": "A dimmer must be selected based on:",
"options": [
"Load type and wattage rating",
"Wall colour",
"Conduit length only",
"Ladder height"
],
"answer": 0,
"explanation": "Dimmers must match the lamp/load type and not exceed their rating."
},
{
"id": 83,
"category": "R4 — Install lighting standards",
"question": "A lighting standard installed outdoors should be:",
"options": [
"Properly supported, bonded, and suitable for the location",
"Installed without grounding or bonding",
"Supported only by conductors",
"Used only indoors"
],
"answer": 0,
"explanation": "Outdoor lighting standards must be mechanically secure and electrically safe."
},
{
"id": 84,
"category": "AA1 — Install voice/data/video systems",
"question": "CAT6 cable is commonly used for:",
"options": [
"Data/network cabling",
"Grounding electrodes",
"Motor windings",
"Fuse links"
],
"answer": 0,
"explanation": "CAT6 is a twisted-pair communication cable used for network systems."
},
{
"id": 85,
"category": "AA1 — Install voice/data/video systems",
"question": "RJ45 refers to:",
"options": [
"A registered jack commonly used with network cables",
"A type of breaker",
"A grounding clamp",
"A conduit body"
],
"answer": 0,
"explanation": "RJ45-style connectors are commonly used for Ethernet/network terminations."
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
const shuffledElectricianLevel1StandardExamQuestions =
shuffleArray(electricianLevel1StandardExamQuestions).map(shuffleOptionsForQuestion);
createPremiumQuizApp({
tradeSlug: "electrician",
tradeTitle: "Electrician",
sectionTitle: "Level 1 – Practice Standardized Exam",
questionTimeSeconds: 90,
questions: shuffledElectricianLevel1StandardExamQuestions
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
return shuffledElectricianLevel1StandardExamQuestions.find(q => q.question === questionText);
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
