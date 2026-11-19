const racmHarmonizedLevel2MockSleQuestions = [
{
"id": 1,
"category": "B5 — Use Diagnostic and Measuring Tools and Equipment",
"question": "A walk-in cooler has poor temperature pull-down. You measure suction pressure, liquid pressure, line temperatures, voltage, and amperage. Why is this better than checking only pressure?",
"options": [
"Pressure alone confirms all faults",
"Multiple readings show the full operating condition",
"Voltage readings replace refrigerant readings",
"Amperage is only useful on gas systems"
],
"answer": 1,
"explanation": "Refrigeration problems often require pressure, temperature, electrical, and airflow readings. Pressure alone can mislead because several faults may produce similar pressures."
},
{
"id": 2,
"category": "B5 — Use Diagnostic and Measuring Tools and Equipment",
"question": "A technician checks superheat on a refrigeration system. Which two measurements are required?",
"options": [
"Suction pressure converted to saturation temperature and suction line temperature",
"Liquid pressure and outdoor temperature",
"Compressor amperage and voltage",
"Condenser air in and air out"
],
"answer": 0,
"explanation": "Superheat is actual suction line temperature minus saturated suction temperature. Saturated suction temperature comes from suction pressure using the correct refrigerant chart."
},
{
"id": 3,
"category": "B5 — Use Diagnostic and Measuring Tools and Equipment",
"question": "A micron gauge rises quickly after the vacuum pump is isolated. What does this usually indicate?",
"options": [
"The system is perfectly dry",
"The vacuum pump is oversized",
"A leak, moisture, or trapped refrigerant may be present",
"The system is fully charged"
],
"answer": 2,
"explanation": "A rapid vacuum rise shows vapour or gas entering the system space. This can be from leakage, moisture boiling off, or refrigerant trapped in oil."
},
{
"id": 4,
"category": "B5 — Use Diagnostic and Measuring Tools and Equipment",
"question": "A clamp meter shows compressor current above nameplate rating. What should the technician check next?",
"options": [
"Only thermostat batteries",
"Operating pressure, voltage under load, airflow, and mechanical load",
"Only pipe insulation colour",
"Only refrigerant cylinder weight"
],
"answer": 1,
"explanation": "High amperage can be caused by high head pressure, low voltage, overloading, or compressor problems. A full diagnosis is needed before replacing parts."
},
{
"id": 5,
"category": "B8 — Use Digital Technology",
"question": "A technician uses manufacturer software to check fault history on a communicating system. What is the main benefit?",
"options": [
"It replaces all safety testing",
"It identifies stored operating faults and sensor data",
"It automatically repairs the system",
"It eliminates the need for gauges"
],
"answer": 1,
"explanation": "Digital diagnostics can show fault codes, sensor values, run history, and control status. The technician still must verify readings and repair the cause."
},
{
"id": 6,
"category": "C2 — Interpret Drawings and Specifications",
"question": "A schematic shows a pressure control wired in series with the compressor contactor coil. What happens if the pressure control opens?",
"options": [
"The compressor contactor coil de-energizes",
"The compressor speeds up",
"The indoor fan reverses",
"The transformer output increases"
],
"answer": 0,
"explanation": "Series controls must all be closed for current to reach the coil. If one safety opens, the compressor contactor drops out."
},
{
"id": 7,
"category": "C3 — Use Codes, Regulations and Standards",
"question": "A technician is replacing gas piping. Which authority normally has jurisdiction over gas installation requirements?",
"options": [
"Refrigerant supplier",
"AHJ and applicable gas code/regulations",
"Customer only",
"Thermostat manufacturer"
],
"answer": 1,
"explanation": "Gas installations must follow applicable codes and the authority having jurisdiction. Local rules and inspections may also apply."
},
{
"id": 8,
"category": "C3 — Use Codes, Regulations and Standards",
"question": "Why must ozone-depleting substances and regulated refrigerants be recovered properly?",
"options": [
"To reduce environmental harm and comply with regulations",
"To increase compressor speed",
"To make brazing easier",
"To lower duct pressure"
],
"answer": 0,
"explanation": "Refrigerants can affect the environment and are controlled by regulations. Proper recovery prevents illegal venting and contamination."
},
{
"id": 9,
"category": "C4 — Use Manufacturer and Supplier Documentation",
"question": "A replacement TXV has the correct connection size but different refrigerant rating. What should you do?",
"options": [
"Install it if it fits",
"Use it only for temporary operation",
"Select the correct valve for the refrigerant and capacity",
"Increase superheat to compensate"
],
"answer": 2,
"explanation": "TXVs are selected by refrigerant, capacity, pressure range, and application. A valve that physically fits may still meter incorrectly."
},
{
"id": 10,
"category": "C5 — Organize Work and Maintain Records",
"question": "After servicing a system, which record is most useful for future troubleshooting?",
"options": [
"Weather, pressures, temperatures, amperage, refrigerant added, and work performed",
"Customer’s phone type only",
"Tool bag colour only",
"Brand of work boots"
],
"answer": 0,
"explanation": "Service records create a baseline and show what changed. They help future technicians diagnose repeat or developing problems."
},
{
"id": 11,
"category": "C6 — Select Refrigerants, Compressed Gases and Oils",
"question": "A system designed for POE oil has been open during repair. What is the main concern?",
"options": [
"POE oil absorbs moisture easily",
"POE oil cannot mix with refrigerant",
"POE oil becomes nitrogen",
"POE oil prevents evacuation"
],
"answer": 0,
"explanation": "POE oil is hygroscopic, meaning it absorbs moisture. Moisture can cause acid, corrosion, restrictions, and compressor damage."
},
{
"id": 12,
"category": "C6 — Select Refrigerants, Compressed Gases and Oils",
"question": "Why is dry nitrogen used during brazing refrigeration tubing?",
"options": [
"To pressure test at maximum pressure while brazing",
"To prevent internal oxidation and scale",
"To replace refrigerant oil",
"To cool the outdoor coil"
],
"answer": 1,
"explanation": "A low flow of nitrogen displaces oxygen inside the tubing. This prevents black oxide scale that can damage metering devices and compressors."
},
{
"id": 13,
"category": "C6 — Select Refrigerants, Compressed Gases and Oils",
"question": "A refrigerant blend must be charged as liquid. Why?",
"options": [
"To prevent fractionation of the blend",
"To increase suction superheat automatically",
"To lower voltage",
"To clean the evaporator"
],
"answer": 0,
"explanation": "Some blends can separate when charged as vapour. Liquid charging helps maintain the correct refrigerant composition, using safe charging practices."
},
{
"id": 14,
"category": "C8 — Select HVAC/R Components and Accessories",
"question": "A system uses an EPR valve. What does an evaporator pressure regulator do?",
"options": [
"Maintains minimum evaporator pressure",
"Increases compressor voltage",
"Removes moisture from refrigerant",
"Opens the condensate drain"
],
"answer": 0,
"explanation": "An EPR controls evaporator pressure to maintain a desired evaporator temperature. It is commonly used where different evaporators require different temperatures."
},
{
"id": 15,
"category": "C8 — Select HVAC/R Components and Accessories",
"question": "What is the purpose of a crankcase pressure regulator, CPR?",
"options": [
"Prevents compressor overload from high suction pressure during startup or pull-down",
"Increases suction pressure at all times",
"Removes acid from oil",
"Measures combustion draft"
],
"answer": 0,
"explanation": "A CPR limits suction pressure entering the compressor. This protects the compressor motor from overload during high-load conditions."
},
{
"id": 16,
"category": "C8 — Select HVAC/R Components and Accessories",
"question": "A pressure relief valve, PRV, is installed on a receiver. What is its function?",
"options": [
"Meter liquid refrigerant",
"Protect against excessive pressure",
"Increase refrigerant storage capacity",
"Control thermostat operation"
],
"answer": 1,
"explanation": "A PRV opens if pressure becomes unsafe. It protects pressure vessels and piping from overpressure conditions."
},
{
"id": 17,
"category": "C10 — Install Valves",
"question": "When installing a solenoid valve in a refrigeration liquid line, what must be confirmed?",
"options": [
"Correct flow direction and voltage rating",
"Thermostat colour",
"Condenser fan RPM only",
"Suction line insulation thickness only"
],
"answer": 0,
"explanation": "Solenoid valves usually have flow-direction markings and electrical ratings. Incorrect installation can cause restriction, failure, or no refrigerant control."
},
{
"id": 18,
"category": "E1 — Use Principles of Electricity and Electronics",
"question": "A 24 V control circuit has a 12-ohm coil. What current should the coil draw?",
"options": [
"0.5 A",
"2 A",
"12 A",
"288 A"
],
"answer": 1,
"explanation": "Current equals voltage divided by resistance. 24 ÷ 12 = 2 amps."
},
{
"id": 19,
"category": "E1 — Use Principles of Electricity and Electronics",
"question": "A transformer secondary reads 28 V with no load but drops to 10 V when controls energize. What is likely?",
"options": [
"Normal operation",
"Overloaded transformer, short, or high-resistance control circuit problem",
"Correct refrigerant charge",
"Dirty air filter only"
],
"answer": 1,
"explanation": "Voltage drop under load indicates excessive load or resistance. The transformer, wiring, coils, and control components must be checked."
},
{
"id": 20,
"category": "E1 — Use Principles of Electricity and Electronics",
"question": "What does a PTC device do as temperature rises?",
"options": [
"Resistance increases",
"Resistance decreases",
"Voltage becomes zero",
"It changes AC to DC"
],
"answer": 0,
"explanation": "PTC means positive temperature coefficient. Its resistance increases as temperature increases."
},
{
"id": 21,
"category": "E2 — Use Electrical Wiring Diagrams and Schematics",
"question": "A technician measures 24 V from R to C but 0 V from Y to C during a cooling call. What should be checked?",
"options": [
"Thermostat cooling call and Y circuit",
"Compressor oil level only",
"Condenser coil cleanliness only",
"Gas manifold pressure only"
],
"answer": 0,
"explanation": "R to C confirms control power is available. No Y signal during cooling call means the thermostat or Y circuit path may be open."
},
{
"id": 22,
"category": "E2 — Use Electrical Wiring Diagrams and Schematics",
"question": "A relay has COM, NO, and NC terminals. Which statement is correct?",
"options": [
"NO is closed when the relay is de-energized",
"NC is closed when the relay is de-energized",
"COM is always ground",
"NO means no voltage allowed"
],
"answer": 1,
"explanation": "Normally closed contacts are closed in the relay’s normal de-energized state. Normally open contacts close when the coil energizes."
},
{
"id": 23,
"category": "E3 — Apply Motor and Motor Control Theory",
"question": "A compressor has a failed start capacitor. What symptom is likely?",
"options": [
"Compressor may hum and fail to start",
"Condenser coil becomes cleaner",
"Suction pressure always becomes zero",
"Thermostat loses display only"
],
"answer": 0,
"explanation": "The start capacitor provides extra starting torque. If it fails, the compressor may draw locked-rotor current and trip overload."
},
{
"id": 24,
"category": "E3 — Apply Motor and Motor Control Theory",
"question": "What does FLRA commonly refer to on motor data?",
"options": [
"Field level risk assessment",
"Full load rated amperage",
"Fan low resistance amperage",
"Fuel line regulator adjustment"
],
"answer": 1,
"explanation": "FLRA refers to current at full-load operation. It is used to compare actual motor current to rated conditions."
},
{
"id": 25,
"category": "E3 — Apply Motor and Motor Control Theory",
"question": "A condenser fan motor has correct voltage but does not start until spun by hand. What is most likely?",
"options": [
"Weak or failed capacitor",
"Overcharged receiver only",
"Low gas pressure only",
"Dirty thermostat"
],
"answer": 0,
"explanation": "A PSC motor with a bad capacitor may not develop enough starting torque. Spinning by hand may temporarily start it, but the fault remains."
},
{
"id": 26,
"category": "E4 — Select Control Systems",
"question": "A low ambient control cycles the condenser fan. What is its purpose?",
"options": [
"Maintain proper head pressure in cooler outdoor conditions",
"Increase indoor humidity",
"Reduce transformer voltage",
"Stop all refrigeration"
],
"answer": 0,
"explanation": "Low ambient conditions can reduce condensing pressure too much. Fan cycling helps maintain proper operating pressure."
},
{
"id": 27,
"category": "E4 — Select Control Systems",
"question": "A low-voltage thermostat, LVT, is used instead of line voltage control mainly to:",
"options": [
"Allow safer control wiring and control relay operation",
"Increase compressor horsepower",
"Replace refrigerant piping",
"Remove need for fuses"
],
"answer": 0,
"explanation": "Low-voltage controls are safer and easier to route. They control relays, contactors, boards, and control circuits."
},
{
"id": 28,
"category": "E4 — Select Control Systems",
"question": "A defrost control terminates defrost based on coil temperature. What sensor information is needed?",
"options": [
"Outdoor coil temperature",
"Indoor light level",
"Compressor paint temperature only",
"Customer thermostat preference"
],
"answer": 0,
"explanation": "Defrost termination often depends on outdoor coil temperature. If the sensor is loose or inaccurate, defrost may fail."
},
{
"id": 29,
"category": "E5 — Apply Wiring Practices",
"question": "Why must wiring be protected where it passes through sheet metal?",
"options": [
"To prevent insulation damage and shorts",
"To increase refrigerant capacity",
"To reduce evaporator pressure",
"To change motor rotation automatically"
],
"answer": 0,
"explanation": "Sharp sheet metal edges can cut insulation. Bushings, grommets, and strain reliefs protect wiring from shorts and failures."
},
{
"id": 30,
"category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
"question": "In heat pump heating mode, what is the indoor coil doing?",
"options": [
"Absorbing heat as the evaporator",
"Rejecting heat as the condenser",
"Metering refrigerant only",
"Compressing refrigerant"
],
"answer": 1,
"explanation": "In heating mode, the indoor coil becomes the condenser. It rejects heat into the indoor air."
},
{
"id": 31,
"category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
"question": "A heat pump has low heating capacity and the outdoor coil is heavily frosted. What is most likely affected?",
"options": [
"Heat absorption at the outdoor coil",
"Thermostat voltage only",
"Indoor filter colour",
"Gas manifold pressure"
],
"answer": 0,
"explanation": "Frost blocks airflow and insulates the coil. This reduces the outdoor coil’s ability to absorb heat."
},
{
"id": 32,
"category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
"question": "A reversing valve is energized but the unit stays in the same mode. What should be checked first?",
"options": [
"Coil voltage, coil resistance, and valve operation",
"Condensate trap depth only",
"Filter drier size only",
"Gas draft pressure only"
],
"answer": 0,
"explanation": "The problem may be electrical or mechanical. Confirm the coil is powered and functional before condemning the valve body."
},
{
"id": 33,
"category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
"question": "Why can low indoor airflow cause evaporator freeze-up in cooling mode?",
"options": [
"Less heat is absorbed by the coil",
"Compressor voltage increases",
"Condenser rejects too much heat",
"Refrigerant becomes non-condensable"
],
"answer": 0,
"explanation": "Low airflow reduces heat transfer to the evaporator. The coil temperature can drop below freezing and ice forms."
},
{
"id": 34,
"category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
"question": "What does temperature difference, TD or ΔT, across an indoor coil help indicate?",
"options": [
"System heat transfer performance",
"Refrigerant cylinder weight only",
"Gas pipe length only",
"Control wire size only"
],
"answer": 0,
"explanation": "Air temperature difference across a coil shows how much heat is being added or removed. It must be interpreted with airflow and system conditions."
},
{
"id": 35,
"category": "F2 — Analyze Refrigeration Systems",
"question": "A system has low suction pressure, low head pressure, and high superheat. Which condition fits best?",
"options": [
"Undercharge or starved evaporator",
"Overcharge",
"Flooded evaporator",
"Dirty condenser only"
],
"answer": 0,
"explanation": "A starved evaporator lacks enough refrigerant. This usually causes high superheat and reduced pressures."
},
{
"id": 36,
"category": "F2 — Analyze Refrigeration Systems",
"question": "High head pressure with normal/high suction pressure and dirty condenser coil suggests:",
"options": [
"Poor heat rejection",
"Low refrigerant charge",
"Open compressor winding",
"Low indoor airflow only"
],
"answer": 0,
"explanation": "A dirty condenser prevents heat from leaving the refrigerant. Condensing temperature and head pressure rise."
},
{
"id": 37,
"category": "F2 — Analyze Refrigeration Systems",
"question": "A liquid-line restriction usually causes:",
"options": [
"Pressure drop and temperature drop across the restriction",
"Higher pressure after the restriction",
"More refrigerant flow to evaporator",
"Higher indoor airflow"
],
"answer": 0,
"explanation": "A restriction reduces pressure downstream. Refrigerant may flash, causing a temperature drop and starving the evaporator."
},
{
"id": 38,
"category": "F2 — Analyze Refrigeration Systems",
"question": "What does net refrigeration effect, NRE, describe?",
"options": [
"Heat absorbed in the evaporator by the refrigerant",
"Voltage used by compressor",
"Airflow through ducts",
"Gas pressure in inches water column"
],
"answer": 0,
"explanation": "NRE is the useful heat absorbed by refrigerant in the evaporator. It helps describe refrigeration system capacity."
},
{
"id": 39,
"category": "F3 — Apply Food Storage Theory",
"question": "Why must a cooler maintain both correct temperature and airflow around food?",
"options": [
"To slow bacterial growth and maintain product quality",
"To increase compressor amperage",
"To reduce electrical resistance",
"To eliminate door gaskets"
],
"answer": 0,
"explanation": "Food safety depends on proper temperature control and air circulation. Poor airflow can create warm zones and spoilage risk."
},
{
"id": 40,
"category": "F3 — Apply Food Storage Theory",
"question": "A walk-in cooler door is frequently left open. What is the likely result?",
"options": [
"Increased load, moisture entry, and possible icing",
"Lower humidity and less load",
"Lower compressor run time",
"Better product temperature stability"
],
"answer": 0,
"explanation": "Door openings add warm air and moisture. This increases load, frost, defrost demand, and product temperature risk."
},
{
"id": 41,
"category": "F3 — Apply Food Storage Theory",
"question": "Why should evaporator fans not be blocked by stored boxes?",
"options": [
"Blocked airflow causes uneven temperatures and poor product cooling",
"It increases refrigerant purity",
"It lowers compressor voltage",
"It improves defrost operation"
],
"answer": 0,
"explanation": "Air must circulate around products to remove heat. Blocked evaporators create hot spots and poor cooling."
},
{
"id": 42,
"category": "G1 — Perform Work Site Preparation",
"question": "Before installing a rooftop condensing unit, what must be confirmed?",
"options": [
"Roof support, access, clearances, drainage, and lift plan",
"Thermostat screen colour only",
"Refrigerant smell only",
"Customer’s preferred brand only"
],
"answer": 0,
"explanation": "Rooftop equipment requires structural support, safe access, airflow clearance, drainage, and safe lifting. Planning prevents damage and unsafe work."
},
{
"id": 43,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why is correct line-set sizing important?",
"options": [
"It affects pressure drop, capacity, and oil return",
"It changes thermostat voltage",
"It eliminates evacuation",
"It replaces refrigerant charge"
],
"answer": 0,
"explanation": "Refrigerant lines must be sized for velocity and pressure drop. Poor sizing can reduce capacity or prevent oil return."
},
{
"id": 44,
"category": "G2 — Plan HVAC/R System Installation",
"question": "A suction riser is too large. What problem can occur?",
"options": [
"Poor oil return due to low velocity",
"Excessive wire voltage",
"Too much condensate drainage",
"Better compressor lubrication always"
],
"answer": 0,
"explanation": "Suction gas velocity must carry oil back to the compressor. Oversized risers may allow oil to collect."
},
{
"id": 45,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why must condenser clearance be planned?",
"options": [
"To allow airflow and service access",
"To increase compressor noise",
"To reduce refrigerant flow",
"To replace the fan motor"
],
"answer": 0,
"explanation": "Poor clearance causes recirculation and high head pressure. It also makes maintenance unsafe or difficult."
},
{
"id": 46,
"category": "G2 — Plan HVAC/R System Installation",
"question": "A condensing unit is planned near a dryer exhaust. What is the concern?",
"options": [
"Lint and warm air can foul the condenser",
"Refrigerant will freeze",
"Suction pressure always increases",
"Electrical phase changes"
],
"answer": 0,
"explanation": "Dryer exhaust contains lint and heat. This can block condenser fins and reduce heat rejection."
},
{
"id": 47,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why must condensate drainage be planned before installation?",
"options": [
"Poor drainage can cause leaks, water damage, and safety shutdowns",
"Drainage controls refrigerant pressure",
"Drainage changes compressor rotation",
"Drainage replaces airflow testing"
],
"answer": 0,
"explanation": "Condensate must drain reliably. Incorrect slope, traps, or termination can cause overflow and water damage."
},
{
"id": 48,
"category": "G2 — Plan HVAC/R System Installation",
"question": "A system is installed in a closet. What service issue must be considered?",
"options": [
"Access to filters, panels, coils, motors, and controls",
"Only paint colour",
"Only outdoor temperature",
"Only refrigerant cylinder storage"
],
"answer": 0,
"explanation": "Equipment must be accessible for maintenance and repair. Poor access can make future service unsafe or impossible."
},
{
"id": 49,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why must duct design be considered with air conditioning equipment?",
"options": [
"Ducts determine proper airflow and comfort",
"Ducts change refrigerant oil type",
"Ducts control compressor voltage directly",
"Ducts replace filters"
],
"answer": 0,
"explanation": "Incorrect duct sizing causes airflow problems, noise, poor comfort, and coil issues. Equipment needs correct airflow to operate properly."
},
{
"id": 50,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Before installing equipment, why check available electrical service?",
"options": [
"Voltage, phase, ampacity, and protection must match equipment",
"It decides refrigerant colour",
"It replaces wiring diagrams",
"It sets food storage temperature directly"
],
"answer": 0,
"explanation": "Equipment must match the electrical supply. Incorrect voltage, phase, or protection can damage equipment or create hazards."
},
{
"id": 51,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why should vibration isolation be planned for some equipment?",
"options": [
"To reduce noise, movement, and piping stress",
"To increase head pressure",
"To improve refrigerant fractionation",
"To replace pipe hangers completely"
],
"answer": 0,
"explanation": "Compressors and fans create vibration. Isolation protects piping, structure, and occupants from noise and fatigue damage."
},
{
"id": 52,
"category": "G2 — Plan HVAC/R System Installation",
"question": "A walk-in evaporator is installed directly above the door. Why may this be poor placement?",
"options": [
"Warm moist air from door openings can increase frost and load",
"It lowers product temperature faster always",
"It eliminates defrost need",
"It improves door gasket life"
],
"answer": 0,
"explanation": "Door openings introduce warm, moist air. An evaporator near the door may frost more and struggle with stable temperatures."
},
{
"id": 53,
"category": "G2 — Plan HVAC/R System Installation",
"question": "Why must equipment capacity match the load?",
"options": [
"Oversizing or undersizing can cause poor comfort, short cycling, or poor temperature control",
"Capacity only affects cabinet colour",
"Capacity replaces installation clearances",
"Capacity determines wire colour only"
],
"answer": 0,
"explanation": "Correct capacity is needed for stable operation. Oversized systems may short cycle, while undersized systems may not meet load."
},
{
"id": 54,
"category": "H2 — Install HVAC/R Systems",
"question": "After installing a refrigeration system, what should be done before charging?",
"options": [
"Pressure test, leak check, and evacuate",
"Start compressor with air inside",
"Add refrigerant until frost appears",
"Bypass safeties permanently"
],
"answer": 0,
"explanation": "A system must be leak tested and evacuated before charging. This removes air and moisture and confirms system integrity."
},
{
"id": 55,
"category": "H2 — Install HVAC/R Systems",
"question": "Why should nitrogen pressure testing not exceed the equipment’s rated test pressure?",
"options": [
"Excess pressure can damage components or create hazards",
"Higher pressure always improves leak testing",
"It changes refrigerant type",
"It increases airflow"
],
"answer": 0,
"explanation": "Components have pressure limits. Exceeding ratings can rupture parts, damage controls, or create unsafe conditions."
},
{
"id": 56,
"category": "H2 — Install HVAC/R Systems",
"question": "A system holds pressure for 5 minutes but slowly drops over 2 hours. What should be done?",
"options": [
"Find and repair the leak before evacuation",
"Charge immediately",
"Ignore it if cooling starts",
"Add oil only"
],
"answer": 0,
"explanation": "A slow pressure drop may indicate a small leak. The system should not be evacuated or charged until leak tightness is confirmed."
},
{
"id": 57,
"category": "H2 — Install HVAC/R Systems",
"question": "What is the purpose of evacuation?",
"options": [
"Remove air and moisture",
"Add oil",
"Increase refrigerant pressure",
"Test thermostat programming"
],
"answer": 0,
"explanation": "Evacuation removes non-condensables and moisture. Moisture can freeze, form acid, and damage the system."
},
{
"id": 58,
"category": "H2 — Install HVAC/R Systems",
"question": "A technician uses old vacuum pump oil that looks cloudy. What is the best action?",
"options": [
"Change the oil before evacuation",
"Add refrigerant to the pump",
"Continue because cloudy oil seals better",
"Use oxygen to dry the oil"
],
"answer": 0,
"explanation": "Cloudy oil often contains moisture. Clean pump oil is required to pull a deep vacuum effectively."
},
{
"id": 59,
"category": "H2 — Install HVAC/R Systems",
"question": "Charging by weight requires:",
"options": [
"Manufacturer charge amount and accurate scale",
"Guessing by suction line frost",
"Adding until compressor is quiet",
"Charging only through the high side while running"
],
"answer": 0,
"explanation": "Charging by weight depends on the specified charge. An accurate scale prevents overcharge or undercharge."
},
{
"id": 60,
"category": "H2 — Install HVAC/R Systems",
"question": "On a TXV air conditioning system, the final charge is commonly checked using:",
"options": [
"Subcooling",
"Gas manifold pressure",
"Static water level",
"Sound level only"
],
"answer": 0,
"explanation": "TXVs control superheat, so subcooling is commonly used to evaluate charge. Manufacturer procedure must be followed."
},
{
"id": 61,
"category": "H2 — Install HVAC/R Systems",
"question": "On a fixed-orifice system, charge is often checked using:",
"options": [
"Superheat",
"Transformer VA only",
"Gas draft only",
"Fan belt tension only"
],
"answer": 0,
"explanation": "Fixed metering devices do not regulate superheat like TXVs. Superheat is commonly used to evaluate charge under correct conditions."
},
{
"id": 62,
"category": "H2 — Install HVAC/R Systems",
"question": "Why must airflow be verified before charging an air conditioner?",
"options": [
"Incorrect airflow changes pressures, superheat, and temperature split",
"Airflow has no effect on charging",
"Airflow only affects sound",
"Airflow replaces electrical testing"
],
"answer": 0,
"explanation": "Low or high airflow affects evaporator heat load. Charging without correct airflow can lead to wrong diagnosis."
},
{
"id": 63,
"category": "H2 — Install HVAC/R Systems",
"question": "During startup, the compressor amperage is high and condenser fan is not running. What is likely happening?",
"options": [
"Head pressure is rising due to no condenser airflow",
"The system is undercharged only",
"The evaporator is too clean",
"The thermostat is overcooling"
],
"answer": 0,
"explanation": "Without condenser airflow, heat rejection fails. Head pressure and compressor load increase quickly."
},
{
"id": 64,
"category": "H2 — Install HVAC/R Systems",
"question": "Why should panels and covers be installed before final readings?",
"options": [
"Airflow and pressures may change with panels removed",
"Covers only improve appearance",
"Covers lower refrigerant charge",
"Covers increase transformer voltage"
],
"answer": 0,
"explanation": "Equipment is designed to run with panels installed. Readings taken open may not represent normal operation."
},
{
"id": 65,
"category": "H2 — Install HVAC/R Systems",
"question": "A liquid-line filter drier is installed backwards. What may happen?",
"options": [
"Restriction or failure to filter correctly",
"Better flow and lower pressure drop",
"Increased thermostat accuracy",
"Improved airflow"
],
"answer": 0,
"explanation": "Many driers have required flow direction. Backward installation can restrict refrigerant flow and reduce protection."
},
{
"id": 66,
"category": "H2 — Install HVAC/R Systems",
"question": "Why must brazed joints be cooled naturally rather than quenched aggressively?",
"options": [
"Rapid cooling can stress joints",
"It increases nitrogen pressure",
"It improves contamination",
"It lowers electrical resistance"
],
"answer": 0,
"explanation": "Sudden cooling can stress materials and joints. Proper brazing technique includes controlled heating and cooling."
},
{
"id": 67,
"category": "H2 — Install HVAC/R Systems",
"question": "What does a sight glass with a moisture indicator help show?",
"options": [
"Moisture condition and liquid-line condition",
"Compressor voltage",
"Gas draft pressure",
"Fan motor horsepower"
],
"answer": 0,
"explanation": "A sight glass can indicate moisture and may show bubbles. Bubbles must be interpreted with system conditions."
},
{
"id": 68,
"category": "H2 — Install HVAC/R Systems",
"question": "Why must refrigerant cylinders be weighed during recovery?",
"options": [
"To avoid overfilling recovery cylinders",
"To increase recovery speed only",
"To change refrigerant type",
"To lower condensing temperature"
],
"answer": 0,
"explanation": "Recovery cylinders have fill limits. Overfilling creates dangerous pressure conditions as temperature rises."
},
{
"id": 69,
"category": "H2 — Install HVAC/R Systems",
"question": "A compressor is installed after a burnout. What additional step is important?",
"options": [
"Install proper cleanup filter driers and remove contaminants",
"Add air to test operation",
"Skip evacuation",
"Use any refrigerant available"
],
"answer": 0,
"explanation": "Burnouts leave acid and debris. Cleanup procedures protect the new compressor from repeat failure."
},
{
"id": 70,
"category": "H2 — Install HVAC/R Systems",
"question": "Why is correct compressor oil level important?",
"options": [
"Too little or too much oil can damage compressor operation",
"Oil replaces refrigerant",
"Oil controls thermostat voltage",
"Oil lowers draft pressure"
],
"answer": 0,
"explanation": "Compressors need proper lubrication. Incorrect oil level can cause mechanical damage, poor heat transfer, or oil circulation issues."
},
{
"id": 71,
"category": "H2 — Install HVAC/R Systems",
"question": "A system is started with non-condensables inside. What symptom is likely?",
"options": [
"High head pressure and poor efficiency",
"Low head pressure always",
"Perfect subcooling",
"No effect"
],
"answer": 0,
"explanation": "Non-condensables collect in the condenser and reduce heat transfer. This raises head pressure and increases compressor load."
},
{
"id": 72,
"category": "H2 — Install HVAC/R Systems",
"question": "Why should system operation be checked through a full cycle after installation?",
"options": [
"To verify controls, safeties, temperatures, pressures, and shutdown",
"To make the thermostat look correct",
"To avoid recording readings",
"To bypass defrost"
],
"answer": 0,
"explanation": "A full operating cycle confirms that the system starts, runs, satisfies, and shuts down correctly. It also confirms safeties and controls."
},
{
"id": 73,
"category": "H3 — Install Control Systems",
"question": "When installing a thermostat for a heat pump, why must O/B configuration be checked?",
"options": [
"It controls reversing valve logic",
"It controls refrigerant charge",
"It sets gas pressure",
"It changes wire size"
],
"answer": 0,
"explanation": "Some systems energize the reversing valve in cooling, others in heating. Wrong O/B setup can cause opposite operation."
},
{
"id": 74,
"category": "H3 — Install Control Systems",
"question": "A float switch is wired in series with the cooling call. What happens when condensate backs up?",
"options": [
"Cooling is interrupted",
"Compressor runs continuously",
"Fan speed doubles",
"Defrost starts"
],
"answer": 0,
"explanation": "The float switch opens the control circuit to stop cooling. This helps prevent water damage."
},
{
"id": 75,
"category": "H3 — Install Control Systems",
"question": "Why should control wiring be labelled during installation?",
"options": [
"It helps troubleshooting and prevents wiring errors",
"It increases voltage",
"It lowers suction pressure",
"It replaces fuses"
],
"answer": 0,
"explanation": "Labels make future service easier and reduce mistakes. This is especially important with many low-voltage conductors."
},
{
"id": 76,
"category": "H3 — Install Control Systems",
"question": "A sensor is installed loosely against a pipe instead of clamped tightly. What is the concern?",
"options": [
"It may read inaccurate temperature",
"It will increase refrigerant flow",
"It will lower motor current",
"It will clean the coil"
],
"answer": 0,
"explanation": "Temperature sensors must make proper contact. Poor mounting can give false readings and incorrect control operation."
},
{
"id": 77,
"category": "H3 — Install Control Systems",
"question": "After installing a new control board, what must be verified?",
"options": [
"Correct wiring, input signals, output operation, and sequence",
"Cabinet paint only",
"Outdoor weather only",
"Refrigerant smell only"
],
"answer": 0,
"explanation": "A board replacement is not complete until wiring and operation are checked. Incorrect inputs or wiring can damage the board or cause faults."
},
{
"id": 78,
"category": "I1 — Apply Combustion Theory",
"question": "What three things are required for proper gas combustion?",
"options": [
"Fuel, oxygen, and ignition",
"Refrigerant, oil, and nitrogen",
"Voltage, resistance, and amperage",
"Water, air, and copper"
],
"answer": 0,
"explanation": "Combustion requires fuel, oxygen, and an ignition source. Proper mixture and safe venting are also important."
},
{
"id": 79,
"category": "I2 — Apply Draft Theory",
"question": "Draft in a venting system is used to:",
"options": [
"Move combustion products safely out of the appliance",
"Increase refrigerant superheat",
"Lower compressor amperage",
"Store gas pressure"
],
"answer": 0,
"explanation": "Draft moves flue gases from the appliance to outdoors. Poor draft can cause spillage and carbon monoxide hazards."
},
{
"id": 80,
"category": "I2 — Apply Draft Theory",
"question": "A technician measures draft in inches water column. Which abbreviation from the Level 2 list matches this?",
"options": [
"w.c.",
"mfd",
"NRE",
"LVT"
],
"answer": 0,
"explanation": "Inches water column is a common pressure unit for gas and draft measurements. It is shown as in. w.c. or w.c."
},
{
"id": 81,
"category": "I4 — Apply Knowledge of Mechanical Safety Devices",
"question": "What does a flame rollout switch protect against?",
"options": [
"Flames or hot combustion products leaving the burner area",
"Low refrigerant pressure",
"Dirty condenser fins",
"Incorrect thermostat programming"
],
"answer": 0,
"explanation": "Rollout switches shut down equipment if flame leaves the proper combustion area. This is a serious safety condition."
},
{
"id": 82,
"category": "I4 — Apply Knowledge of Mechanical Safety Devices",
"question": "What is the purpose of a gas appliance limit switch?",
"options": [
"Stop operation if temperature becomes unsafe",
"Increase gas flow continuously",
"Reduce refrigerant charge",
"Change fan rotation"
],
"answer": 0,
"explanation": "Limit switches protect against overheating. If a limit opens, the cause must be found before resetting or replacing parts."
},
{
"id": 83,
"category": "J3 — Install Gas Piping and Tubing Systems",
"question": "Before connecting gas piping to an appliance, what must be confirmed?",
"options": [
"Correct pipe size, material, pressure, support, and code compliance",
"Refrigerant line temperature only",
"Condenser fan direction only",
"Indoor coil cleanliness only"
],
"answer": 0,
"explanation": "Gas piping must be sized and installed safely. Material, pressure, support, shutoff valves, and code requirements must be followed."
},
{
"id": 84,
"category": "J3 — Install Gas Piping and Tubing Systems",
"question": "Why is gas pipe sizing important?",
"options": [
"Undersized pipe can cause pressure drop and poor appliance operation",
"Oversized pipe always causes explosions",
"Pipe size only affects appearance",
"Pipe size controls refrigerant flow"
],
"answer": 0,
"explanation": "Gas appliances need proper inlet pressure and flow. Undersized piping may cause poor combustion or appliance faults."
},
{
"id": 85,
"category": "J3 — Install Gas Piping and Tubing Systems",
"question": "After gas piping is installed, what must be done before operation?",
"options": [
"Pressure/leak test according to code",
"Fill piping with refrigerant",
"Paint all fittings only",
"Bypass shutoff valves"
],
"answer": 0,
"explanation": "Gas piping must be tested for leaks before use. Leak testing protects against fire, explosion, and poisoning hazards."
},
{
"id": 86,
"category": "J9 — Install Gas-Fired Appliances and Ancillary Equipment",
"question": "Why must a gas furnace be level and properly supported?",
"options": [
"To ensure proper drainage, burner operation, and cabinet alignment",
"To increase refrigerant pressure",
"To reduce thermostat voltage",
"To eliminate filter replacement"
],
"answer": 0,
"explanation": "Proper support and level installation affect condensate drainage, blower alignment, and safe operation. Poor installation can cause failures."
},
{
"id": 87,
"category": "J9 — Install Gas-Fired Appliances and Ancillary Equipment",
"question": "What must be checked when installing a high-efficiency condensing gas furnace?",
"options": [
"Venting slope, condensate drainage, combustion air, and gas supply",
"Refrigerant subcooling only",
"Evaporator superheat only",
"Outdoor coil defrost only"
],
"answer": 0,
"explanation": "Condensing furnaces produce condensate and require approved venting. Drainage, vent slope, combustion air, and gas pressure are critical."
},
{
"id": 88,
"category": "J9 — Install Gas-Fired Appliances and Ancillary Equipment",
"question": "Why must appliance clearances to combustibles be maintained?",
"options": [
"To prevent fire and overheating hazards",
"To increase gas pressure",
"To lower compressor amperage",
"To improve refrigerant oil return"
],
"answer": 0,
"explanation": "Gas appliances generate heat. Clearances prevent nearby materials from overheating or igniting."
},
{
"id": 89,
"category": "L1 — Maintain HVAC/R Systems",
"question": "What should be included in routine HVAC/R maintenance?",
"options": [
"Clean coils, check filters, drains, electrical connections, readings, and operation",
"Add refrigerant every time",
"Replace compressor every visit",
"Ignore customer complaints"
],
"answer": 0,
"explanation": "Maintenance keeps the system safe, efficient, and reliable. Readings help detect developing faults."
},
{
"id": 90,
"category": "L1 — Maintain HVAC/R Systems",
"question": "Why should condenser coils be cleaned regularly?",
"options": [
"Dirty coils reduce heat rejection and increase head pressure",
"Dirty coils improve efficiency",
"Dirty coils lower compressor amperage always",
"Dirty coils prevent refrigerant leaks"
],
"answer": 0,
"explanation": "Dirt blocks heat transfer. This increases condensing temperature, head pressure, and energy use."
},
{
"id": 91,
"category": "L1 — Maintain HVAC/R Systems",
"question": "What can a plugged air filter cause?",
"options": [
"Low airflow, coil freezing, poor comfort, and equipment stress",
"Higher airflow",
"Perfect evaporator temperature",
"Reduced need for maintenance"
],
"answer": 0,
"explanation": "A dirty filter restricts airflow. This affects heat transfer and can cause freezing or overheating."
},
{
"id": 92,
"category": "L1 — Maintain HVAC/R Systems",
"question": "Why inspect condensate drains during maintenance?",
"options": [
"To prevent water damage and safety switch trips",
"To increase compressor speed",
"To measure gas pressure",
"To improve refrigerant fractionation"
],
"answer": 0,
"explanation": "Plugged drains can overflow and damage property. Drain maintenance is a common service requirement."
},
{
"id": 93,
"category": "L2 — Service HVAC/R Systems",
"question": "A system has high superheat and low subcooling. What condition is likely?",
"options": [
"Low charge or starved evaporator",
"Overfeeding evaporator",
"Correct charge always",
"High gas pressure"
],
"answer": 0,
"explanation": "High superheat shows the evaporator is starved. Low subcooling often supports a low-charge diagnosis, but full testing is required."
},
{
"id": 94,
"category": "L2 — Service HVAC/R Systems",
"question": "A system has high subcooling and low suction pressure. What may be suspected?",
"options": [
"Liquid-line restriction",
"Open thermostat circuit only",
"Dirty blower wheel only",
"Low gas draft only"
],
"answer": 0,
"explanation": "High subcooling can indicate refrigerant backed up in the condenser. Low suction may occur because the evaporator is starved after a restriction."
},
{
"id": 95,
"category": "L2 — Service HVAC/R Systems",
"question": "A compressor shorted to ground. What should the technician do?",
"options": [
"Replace fuse only and restart",
"Confirm fault, recover refrigerant, and follow compressor replacement/cleanup procedure",
"Add refrigerant",
"Bypass ground protection"
],
"answer": 1,
"explanation": "A grounded compressor is an electrical failure and safety hazard. Proper recovery, replacement, cleanup, and electrical checks are required."
},
{
"id": 96,
"category": "L2 — Service HVAC/R Systems",
"question": "A refrigeration system repeatedly trips high pressure. Which causes should be checked?",
"options": [
"Dirty condenser, fan failure, overcharge, non-condensables, restriction",
"Thermostat colour only",
"Clean condenser only",
"Customer schedule only"
],
"answer": 0,
"explanation": "High-pressure trips usually come from poor heat rejection, excess charge, air in the system, or flow restrictions. The safety should not be bypassed."
},
{
"id": 97,
"category": "L3 — Maintain Control Systems",
"question": "During maintenance, why should control wiring terminals be checked?",
"options": [
"Loose terminals can cause intermittent faults and overheating",
"Terminals increase refrigerant charge",
"Terminals control gas draft only",
"Terminals clean themselves automatically"
],
"answer": 0,
"explanation": "Vibration and heat can loosen connections. Loose terminals create resistance, heat, voltage drop, and intermittent operation."
},
{
"id": 98,
"category": "L3 — Maintain Control Systems",
"question": "Why should sensors be checked for correct placement during maintenance?",
"options": [
"Incorrect sensor placement causes inaccurate control decisions",
"Sensors only affect appearance",
"Sensors remove moisture from refrigerant",
"Sensors replace fuses"
],
"answer": 0,
"explanation": "Controls depend on accurate sensor readings. Loose, misplaced, or insulated sensors can cause wrong operation."
},
{
"id": 99,
"category": "L4 — Service Control Systems",
"question": "A contactor coil has 24 V across it but does not pull in. What is likely?",
"options": [
"Failed coil or mechanical contactor problem",
"No control voltage",
"Low refrigerant charge only",
"Dirty air filter only"
],
"answer": 0,
"explanation": "If proper voltage is across the coil, the control call is present. A failed coil or stuck mechanism is likely."
},
{
"id": 100,
"category": "L4 — Service Control Systems",
"question": "A safety control is open. What should the technician do?",
"options": [
"Find and correct the unsafe condition before resetting or replacing",
"Permanently bypass it",
"Replace the thermostat only",
"Add refrigerant without testing"
],
"answer": 0,
"explanation": "Safety controls open for a reason. The cause must be diagnosed and corrected before normal operation is restored."
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
const shuffledSheetMetalWorkerLevel1Set1Questions =
shuffleArray(racmHarmonizedLevel2MockSleQuestions).map(shuffleOptionsForQuestion);
createPremiumQuizApp({
tradeSlug: "racm",
tradeTitle: "RACM",
sectionTitle: "Harmonized Level 2 ",
questionTimeSeconds: 90,
questions: shuffledSheetMetalWorkerLevel1Set1Questions
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
return shuffledSheetMetalWorkerLevel1Set1Questions.find(q => q.question === questionText);
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
