const racmHarmonizedLevel1Set2Questions = [
  {
    "id": 1,
    "category": "A1 — Maintains Safe Work Environment",
    "question": "You arrive to service a rooftop unit after rain. The roof surface is wet, the disconnect is mounted behind the unit, and extension cords are lying near standing water. What is the best first action?",
    "options": [
      "Begin work carefully because the unit is outdoors",
      "Remove panels and check the compressor first",
      "Stop and control the hazards before servicing",
      "Ask the customer to reset the thermostat"
    ],
    "answer": 2,
    "explanation": "Wet surfaces, poor access, and electrical hazards must be controlled before work starts. A technician must not begin service until the area is safe. Hazard control comes before troubleshooting."
  },
  {
    "id": 2,
    "category": "A2 — Use PPE and Safety Equipment",
    "question": "A technician is recovering refrigerant from a system with a suspected liquid line restriction. Which PPE is most appropriate?",
    "options": [
      "Safety glasses only",
      "Goggles, insulated gloves, and long sleeves",
      "Cotton gloves and running shoes",
      "Dust mask and ear plugs only"
    ],
    "answer": 1,
    "explanation": "Refrigerant can escape as liquid and cause frostbite. Eyes, hands, and skin must be protected from direct refrigerant contact. Insulated gloves and goggles are standard protection."
  },
  {
    "id": 3,
    "category": "A2 — Use PPE and Safety Equipment",
    "question": "While drilling through sheet metal ductwork, which hazard is most likely and should be protected against?",
    "options": [
      "Refrigerant migration",
      "Flying metal chips and sharp edges",
      "Compressor overheating",
      "Low suction pressure"
    ],
    "answer": 1,
    "explanation": "Drilling sheet metal creates sharp chips and burrs. Eye protection and gloves reduce injury risk. This is a mechanical hazard, not a refrigeration fault."
  },
  {
    "id": 4,
    "category": "A2 — Use PPE and Safety Equipment",
    "question": "A brazing job is being done near wood framing. Which safety setup is best?",
    "options": [
      "Wet rag only",
      "Fire extinguisher, fire watch, and heat shield",
      "Extra refrigerant cylinder nearby",
      "Higher oxygen pressure"
    ],
    "answer": 1,
    "explanation": "Brazing near combustibles requires fire prevention controls. A heat shield protects nearby materials from flame and radiant heat. A fire watch helps detect smoldering after brazing."
  },
  {
    "id": 5,
    "category": "A3 — Perform Lock-Out and Tag-Out Procedures",
    "question": "A disconnect is switched off, but the technician has not applied a personal lock. What is the main risk?",
    "options": [
      "Refrigerant pressure will rise",
      "The unit may be re-energized by someone else",
      "The thermostat will lose programming",
      "The compressor oil will become acidic"
    ],
    "answer": 1,
    "explanation": "Switching off alone is not proper lock-out. A personal lock prevents accidental or unauthorized energizing. Tagging also warns others that work is being performed."
  },
  {
    "id": 6,
    "category": "A3 — Perform Lock-Out and Tag-Out Procedures",
    "question": "After locking out a rooftop unit, the technician tests line voltage and still reads 120 V to ground on one leg. What should the technician do?",
    "options": [
      "Continue because the disconnect is off",
      "Treat the circuit as energized and investigate",
      "Bypass the disconnect",
      "Only wear rubber gloves and continue"
    ],
    "answer": 1,
    "explanation": "Any unexpected voltage reading must be treated as dangerous. Stored, back-fed, or incorrectly wired circuits may still be energized. Work must stop until zero energy is verified."
  },
  {
    "id": 7,
    "category": "A4 — Practice Fire Prevention",
    "question": "Why is oxygen never used to pressure test refrigeration piping?",
    "options": [
      "Oxygen lowers pressure too quickly",
      "Oxygen can react violently with oil or contaminants",
      "Oxygen cannot enter copper tubing",
      "Oxygen damages nitrogen regulators"
    ],
    "answer": 1,
    "explanation": "Oxygen under pressure can cause fire or explosion with oil. Refrigeration systems contain oil residue and contaminants. Dry nitrogen is the correct inert gas for pressure testing."
  },
  {
    "id": 8,
    "category": "B1 — Use Hand Tools and Equipment",
    "question": "A technician repeatedly rounds flare nuts while removing service caps. Which tool choice is most likely causing the problem?",
    "options": [
      "Flare nut wrench",
      "Open-end adjustable wrench",
      "Torque wrench with correct adapter",
      "Proper service wrench"
    ],
    "answer": 1,
    "explanation": "Adjustable wrenches can slip and round soft brass fittings. Flare nut wrenches grip more surfaces and reduce damage. Correct tool selection prevents leaks and damaged fittings."
  },
  {
    "id": 9,
    "category": "B2 — Use Portable and Stationary Power Tools",
    "question": "When using a hole saw to drill a line-set penetration, what prevents the bit from grabbing and damaging the wall?",
    "options": [
      "Maximum drill speed only",
      "Two-hand control and steady pressure",
      "Removing the pilot bit",
      "Using no PPE to improve visibility"
    ],
    "answer": 1,
    "explanation": "Hole saws can catch suddenly when cutting. Two-hand control and steady pressure improve safety and accuracy. The pilot bit helps guide the cut."
  },
  {
    "id": 10,
    "category": "B3 — Use Cutting, Brazing and Soldering Equipment",
    "question": "A copper tube end is oval after cutting. What is the most likely cause?",
    "options": [
      "Proper reaming",
      "Over-tightening the tubing cutter too quickly",
      "Using nitrogen while cutting",
      "Using a deburring tool"
    ],
    "answer": 1,
    "explanation": "Tightening the cutter too aggressively deforms soft copper. The wheel should be tightened gradually after each rotation. A round tube end is needed for proper fitting alignment."
  },
  {
    "id": 11,
    "category": "B4 — Use Charging, Evacuation and Recovery Tools",
    "question": "During evacuation, the vacuum gauge is connected at the pump instead of the system. Why is this poor practice?",
    "options": [
      "It only measures pump performance, not system vacuum",
      "It increases refrigerant charge",
      "It causes high head pressure",
      "It damages the thermostat"
    ],
    "answer": 0,
    "explanation": "A gauge at the pump may show a deep vacuum while the system still contains moisture. The vacuum should be measured at the system side. This gives a more accurate indication of evacuation quality."
  },
  {
    "id": 12,
    "category": "B5 — Use Diagnostic and Measuring Tools",
    "question": "A meter shows 24 V at the transformer secondary with no load, but voltage drops to 5 V when the contactor coil is connected. What tool result is most useful next?",
    "options": [
      "Static pressure only",
      "Resistance/current check of the control circuit",
      "Refrigerant saturation chart only",
      "Thermometer on the suction line only"
    ],
    "answer": 1,
    "explanation": "Voltage collapse under load suggests excessive current or high resistance. The coil, wiring, or transformer capacity may be faulty. Electrical measurements are needed to isolate the problem."
  },
  {
    "id": 13,
    "category": "B6 — Use Access Equipment",
    "question": "A ladder reaches the roof edge but extends only 1 foot above the landing. What is the issue?",
    "options": [
      "It is acceptable if tied off",
      "It should extend about 3 feet above the landing",
      "It must be shorter than the roof edge",
      "It only matters on wooden ladders"
    ],
    "answer": 1,
    "explanation": "A ladder should extend sufficiently above the landing for safe transition. About 3 feet is commonly required for safe access. Poor ladder height increases fall risk."
  },
  {
    "id": 14,
    "category": "B7 — Use Rigging, Hoisting, Lifting and Positioning Equipment",
    "question": "A condenser is being lifted onto a pad using straps. What must be confirmed before lifting?",
    "options": [
      "Unit paint colour",
      "Load weight, balance point, and strap rating",
      "Refrigerant type only",
      "Fan rotation direction"
    ],
    "answer": 1,
    "explanation": "Safe lifting requires equipment rated above the load. Balance prevents tipping or shifting during the lift. Rigging failure can cause serious injury and equipment damage."
  },
  {
    "id": 15,
    "category": "B8 — Use Digital Technology",
    "question": "A technician scans a unit QR code and finds a manual that conflicts with a generic online procedure. Which should be followed?",
    "options": [
      "Generic video procedure",
      "Unit-specific manufacturer instructions",
      "Customer opinion",
      "Old service habit"
    ],
    "answer": 1,
    "explanation": "The unit-specific manual applies to that model and revision. Generic procedures may not match the equipment design. Manufacturer data is the best source for service requirements."
  },
  {
    "id": 16,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A 208 V single-phase motor draws 7.5 A. Ignoring power factor, what is approximate power?",
    "options": [
      "277 W",
      "1,560 W",
      "2,080 W",
      "15,600 W"
    ],
    "answer": 1,
    "explanation": "Power is voltage multiplied by current. 208 × 7.5 = 1,560 watts. This is an approximate electrical power calculation."
  },
  {
    "id": 17,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A pressure gauge reads 0 psig. What is the approximate absolute pressure at sea level?",
    "options": [
      "0 psia",
      "14.7 psia",
      "30 psia",
      "100 psia"
    ],
    "answer": 1,
    "explanation": "Gauge pressure reads zero at atmospheric pressure. Absolute pressure includes atmospheric pressure. At sea level, 0 psig is about 14.7 psia."
  },
  {
    "id": 18,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A room gains heat through a wall because the outdoor air is hotter than indoor air. This is mainly:",
    "options": [
      "Conduction through the wall",
      "Refrigerant flashing",
      "Electrical induction",
      "Capillary action"
    ],
    "answer": 0,
    "explanation": "Heat transfer through a solid wall is conduction. The temperature difference drives heat movement. Heat moves from warm outdoor air toward the cooler indoor space."
  },
  {
    "id": 19,
    "category": "C1 — Apply Mathematics and Science",
    "question": "If resistance stays the same and voltage increases, what happens to current?",
    "options": [
      "Current decreases",
      "Current increases",
      "Current becomes zero",
      "Current is unrelated to voltage"
    ],
    "answer": 1,
    "explanation": "Ohm’s Law states I = V ÷ R. With resistance unchanged, higher voltage produces higher current. This relationship is important when diagnosing motors and controls."
  },
  {
    "id": 20,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A refrigerant saturation chart is mainly used to compare:",
    "options": [
      "Voltage and amperage",
      "Pressure and saturation temperature",
      "Airflow and duct size",
      "Sound and vibration"
    ],
    "answer": 1,
    "explanation": "Saturation charts link refrigerant pressure to boiling or condensing temperature. They are used for superheat and subcooling calculations. Correct refrigerant type must be selected."
  },
  {
    "id": 21,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A technician measures suction line temperature at 12°C and saturation temperature at 5°C. What is superheat?",
    "options": [
      "5°C",
      "7°C",
      "12°C",
      "17°C"
    ],
    "answer": 1,
    "explanation": "Superheat equals actual suction line temperature minus saturation temperature. 12°C − 5°C = 7°C. This confirms vapour heating above its boiling point."
  },
  {
    "id": 22,
    "category": "C1 — Apply Mathematics and Science",
    "question": "A liquid line is 36°C and condensing saturation temperature is 44°C. What is subcooling?",
    "options": [
      "8°C",
      "36°C",
      "44°C",
      "80°C"
    ],
    "answer": 0,
    "explanation": "Subcooling equals saturation temperature minus liquid line temperature. 44°C − 36°C = 8°C. Subcooling confirms liquid refrigerant below its condensing temperature."
  },
  {
    "id": 23,
    "category": "C2 — Interpret Drawings and Specifications",
    "question": "A schematic shows two safety switches in series with a contactor coil. If either switch opens, what happens?",
    "options": [
      "The coil remains energized",
      "The compressor contactor drops out",
      "Voltage doubles at the coil",
      "The fan motor reverses automatically"
    ],
    "answer": 1,
    "explanation": "Series switches must all be closed for current to flow. If one opens, the coil circuit is interrupted. This is common in safety control circuits."
  },
  {
    "id": 24,
    "category": "C2 — Interpret Drawings and Specifications",
    "question": "A drawing lists “field wiring by installer.” What does this mean?",
    "options": [
      "Wiring is factory-installed inside the compressor",
      "Wiring must be installed on site by the technician",
      "Wiring is not required",
      "Wiring is only symbolic and ignored"
    ],
    "answer": 1,
    "explanation": "Field wiring is installed during equipment installation. It must follow the diagram, code, and manufacturer instructions. Factory wiring is already inside the equipment."
  },
  {
    "id": 25,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "A technician finds a manufacturer instruction that is stricter than minimum code. What should be followed?",
    "options": [
      "The less strict code requirement only",
      "The stricter manufacturer requirement",
      "No requirement if the unit runs",
      "Customer preference"
    ],
    "answer": 1,
    "explanation": "Code provides minimum safety standards. Manufacturer instructions may require stricter installation conditions. Both code and equipment-specific instructions must be respected."
  },
  {
    "id": 26,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "A refrigerant cylinder is missing its label. What is the safest action?",
    "options": [
      "Use it if pressure seems normal",
      "Identify it by smell",
      "Do not use it until properly identified",
      "Mix it with known refrigerant"
    ],
    "answer": 2,
    "explanation": "Unknown refrigerant creates safety and contamination risks. Refrigerants must not be mixed or guessed. Proper identification is required before use or recovery."
  },
  {
    "id": 27,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "Why must refrigerant recovery records be accurate?",
    "options": [
      "To track legal handling and environmental compliance",
      "To increase compressor speed",
      "To reduce pipe size",
      "To avoid using gauges"
    ],
    "answer": 0,
    "explanation": "Refrigerants are regulated substances. Records support responsible recovery, storage, and disposal. Poor records can create compliance and service problems."
  },
  {
    "id": 28,
    "category": "C4 — Use Manufacturer and Supplier Documentation",
    "question": "A replacement capacitor has the correct microfarad rating but a lower voltage rating than specified. What should be done?",
    "options": [
      "Install it because capacitance matches",
      "Do not install it",
      "Install it only on low fan speed",
      "Discharge it and reuse it"
    ],
    "answer": 1,
    "explanation": "Voltage rating must meet or exceed manufacturer requirements. A lower voltage capacitor may fail or become unsafe. Both capacitance and voltage rating matter."
  },
  {
    "id": 29,
    "category": "C5 — Organize Work and Maintain Records",
    "question": "During maintenance, a technician records suction pressure, discharge pressure, amperage, and temperature split. Why is this useful?",
    "options": [
      "It creates a baseline for future comparison",
      "It replaces leak checking",
      "It removes moisture from the system",
      "It proves no service is needed forever"
    ],
    "answer": 0,
    "explanation": "Recorded readings help compare system performance over time. Changes can reveal developing faults. Good documentation improves future troubleshooting."
  },
  {
    "id": 30,
    "category": "C6 — Select Refrigerants, Compressed Gases and Oils",
    "question": "A system using POE oil has been open to atmosphere for several hours. What is the concern?",
    "options": [
      "POE oil absorbs moisture readily",
      "POE oil becomes nitrogen",
      "POE oil changes into mineral oil",
      "POE oil stops electrical current"
    ],
    "answer": 0,
    "explanation": "POE oil is hygroscopic and absorbs moisture. Moisture can create acids and damage components. Open systems must be sealed and evacuated properly."
  },
  {
    "id": 31,
    "category": "C6 — Select Refrigerants, Compressed Gases and Oils",
    "question": "Why must refrigerant type be verified before charging?",
    "options": [
      "Different refrigerants have different pressure-temperature characteristics",
      "All refrigerants operate identically",
      "Refrigerant type only affects colour",
      "It only matters for window units"
    ],
    "answer": 0,
    "explanation": "Refrigerants have different operating pressures and properties. Wrong refrigerant can damage equipment and create unsafe conditions. Charging must match the nameplate and manual."
  },
  {
    "id": 32,
    "category": "C7 — Apply Sealants and Adhesives",
    "question": "A technician applies duct sealant to a dusty, oily surface. What is the likely result?",
    "options": [
      "Better bonding",
      "Poor adhesion and possible air leakage",
      "Lower refrigerant pressure",
      "Higher voltage"
    ],
    "answer": 1,
    "explanation": "Sealants need clean, dry surfaces to bond. Dust and oil prevent proper contact. Poor sealing can cause air leakage and performance loss."
  },
  {
    "id": 33,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A filter drier is hot at the inlet and noticeably cooler at the outlet. What might this indicate?",
    "options": [
      "A restriction across the drier",
      "Normal thermostat operation",
      "Oversized blower motor",
      "Correct electrical grounding"
    ],
    "answer": 0,
    "explanation": "A temperature drop across a liquid-line drier can indicate restriction. Restriction causes pressure drop and refrigerant flashing. Further diagnosis should confirm pressure and temperature conditions."
  },
  {
    "id": 34,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A sight glass shows bubbles in the liquid line. What should a technician avoid assuming immediately?",
    "options": [
      "The system must always be undercharged",
      "There may be flashing or low charge",
      "Conditions must be checked further",
      "Liquid line restriction is possible"
    ],
    "answer": 0,
    "explanation": "Bubbles can result from low charge, restriction, or pressure drop. They do not automatically prove undercharge. Full diagnosis requires pressures, temperatures, and system conditions."
  },
  {
    "id": 35,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A crankcase heater is installed on a compressor to:",
    "options": [
      "Keep refrigerant from migrating into compressor oil",
      "Cool the compressor shell",
      "Increase evaporator airflow",
      "Replace the overload"
    ],
    "answer": 0,
    "explanation": "Crankcase heaters keep oil warm during off cycles. This helps reduce refrigerant migration and dilution of oil. It protects the compressor during startup."
  },
  {
    "id": 36,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A liquid receiver is commonly used to:",
    "options": [
      "Store refrigerant charge in the high side",
      "Measure indoor humidity",
      "Start a PSC motor",
      "Increase thermostat voltage"
    ],
    "answer": 0,
    "explanation": "A receiver stores liquid refrigerant after the condenser. It helps systems handle varying operating conditions. It is common in some refrigeration systems."
  },
  {
    "id": 37,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "An accumulator is installed in the suction line mainly to:",
    "options": [
      "Prevent liquid refrigerant from reaching the compressor",
      "Increase liquid line pressure",
      "Store electrical energy",
      "Replace the evaporator"
    ],
    "answer": 0,
    "explanation": "Compressors are designed to compress vapour, not liquid. An accumulator helps trap liquid refrigerant before the compressor. This reduces the risk of liquid slugging."
  },
  {
    "id": 38,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A TXV sensing bulb is loose on the suction line. What problem may result?",
    "options": [
      "Incorrect superheat control",
      "Higher control voltage",
      "Better refrigerant metering",
      "No effect on operation"
    ],
    "answer": 0,
    "explanation": "The sensing bulb must accurately sense suction line temperature. Poor contact can cause incorrect valve response. This may lead to improper superheat and unstable operation."
  },
  {
    "id": 39,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A dirty blower wheel mainly affects:",
    "options": [
      "Airflow across the indoor coil",
      "Refrigerant chemical composition",
      "Line voltage frequency",
      "Oil type selection"
    ],
    "answer": 0,
    "explanation": "A dirty blower wheel cannot move air efficiently. Reduced airflow affects heat transfer and system performance. It may cause freezing, overheating, or poor comfort."
  },
  {
    "id": 40,
    "category": "C9 — Select Fasteners, Brackets and Hangers",
    "question": "Refrigerant piping is strapped tightly against a metal edge. What is the main concern?",
    "options": [
      "Vibration may wear through the tubing",
      "Pipe temperature will become zero",
      "Compressor voltage will increase",
      "Refrigerant type will change"
    ],
    "answer": 0,
    "explanation": "Copper tubing can rub against sharp edges. Vibration over time can create leaks. Proper isolation and support are required."
  },
  {
    "id": 41,
    "category": "C10 — Install Valves",
    "question": "A valve stem is back-seated on a service valve. What does this usually mean?",
    "options": [
      "The service port may be isolated from system pressure",
      "The compressor is locked out",
      "The TXV is fully open",
      "The system is under vacuum automatically"
    ],
    "answer": 0,
    "explanation": "Back-seating can close off the service port on some valves. Technicians must understand valve stem positions. Improper valve position can cause misleading readings."
  },
  {
    "id": 42,
    "category": "C10 — Install Valves",
    "question": "A check valve in a heat pump circuit is used to:",
    "options": [
      "Allow flow in one direction and prevent reverse flow",
      "Measure compressor amperage",
      "Open the thermostat circuit manually",
      "Remove acid from oil"
    ],
    "answer": 0,
    "explanation": "Check valves control refrigerant direction. They are important in heat pump and bypass circuits. Incorrect flow direction can affect heating or cooling operation."
  },
  {
    "id": 43,
    "category": "D1 — Use Communication Techniques",
    "question": "A customer asks why the system needs evacuation after a repair. Which answer is most professional?",
    "options": [
      "“Because I said so.”",
      "“It removes air and moisture that can damage the system.”",
      "“It makes the bill higher.”",
      "“It is only needed when the unit is old.”"
    ],
    "answer": 1,
    "explanation": "Professional communication explains the technical reason clearly. Air and moisture can cause poor operation and system damage. Clear explanations build trust and reduce confusion."
  },
  {
    "id": 44,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A circuit has 24 V and 8 ohms of resistance. What is the current?",
    "options": [
      "2 A",
      "3 A",
      "16 A",
      "32 A"
    ],
    "answer": 1,
    "explanation": "Current equals voltage divided by resistance. 24 ÷ 8 = 3 amps. This is a direct Ohm’s Law calculation."
  },
  {
    "id": 45,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A transformer primary has power, but the secondary has no voltage. What is the most likely issue?",
    "options": [
      "Open transformer secondary or failed transformer",
      "Dirty condenser coil only",
      "Low refrigerant charge only",
      "Loose fan belt only"
    ],
    "answer": 0,
    "explanation": "If primary voltage is present, the transformer should produce secondary voltage. No secondary output suggests transformer or protection failure. Further checks should verify fuses, wiring, and continuity."
  },
  {
    "id": 46,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A fuse opens immediately when replaced. What does this usually indicate?",
    "options": [
      "Normal operation",
      "Short circuit or overload still exists",
      "Correct refrigerant charge",
      "Clean electrical contacts"
    ],
    "answer": 1,
    "explanation": "A fuse protects against excessive current. If it opens again, the fault has not been corrected. Replacing fuses repeatedly is unsafe."
  },
  {
    "id": 47,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A technician measures 0 V across a closed switch in an energized circuit. What does that usually indicate?",
    "options": [
      "The switch has no voltage drop and is likely closed",
      "The switch is definitely open",
      "The motor is shorted",
      "The circuit has no power anywhere"
    ],
    "answer": 0,
    "explanation": "A closed switch should have little or no voltage drop across it. An open switch in a powered circuit usually shows voltage across it. Voltage readings must be interpreted in circuit context."
  },
  {
    "id": 48,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "What happens to total resistance when two equal resistors are connected in parallel?",
    "options": [
      "Total resistance increases",
      "Total resistance becomes less than either resistor",
      "Total resistance becomes infinite",
      "Total resistance equals their sum"
    ],
    "answer": 1,
    "explanation": "Parallel circuits provide multiple current paths. Total resistance is lower than the smallest branch resistance. This is important when diagnosing control loads."
  },
  {
    "id": 49,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A contactor coil has correct voltage at both coil terminals measured to ground, but 0 V measured across the coil. What is likely missing?",
    "options": [
      "Potential difference across the coil",
      "Refrigerant charge",
      "Compressor oil",
      "Fan blade pitch"
    ],
    "answer": 0,
    "explanation": "Loads operate from voltage across the component, not just to ground. Both terminals at the same voltage means no electrical pressure difference. This may indicate a missing neutral/common path."
  },
  {
    "id": 50,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A ladder diagram shows R passing through thermostat Y, high-pressure switch, low-pressure switch, then contactor coil to C. If the contactor does not pull in, what should be checked?",
    "options": [
      "Each point in the series control path",
      "Only the condenser paint",
      "Only the suction line insulation",
      "Only compressor oil level"
    ],
    "answer": 0,
    "explanation": "Any open point in a series path stops coil operation. The technician should trace voltage through each control. This method identifies where the circuit opens."
  },
  {
    "id": 51,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A wiring diagram shows “COM,” “NO,” and “NC” on a relay. What does “NO” mean?",
    "options": [
      "Normally open",
      "Normally overloaded",
      "Neutral output",
      "No operation allowed"
    ],
    "answer": 0,
    "explanation": "NO means normally open in the relay’s de-energized state. It closes when the relay coil is energized. This is essential for reading control logic."
  },
  {
    "id": 52,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A pressure switch is shown open on the schematic but closes when pressure rises. What type is it?",
    "options": [
      "Pressure-close switch",
      "Permanent short",
      "Normally closed switch",
      "Ground fault switch only"
    ],
    "answer": 0,
    "explanation": "The symbol shows the normal state without pressure actuation. If it closes when pressure rises, it is pressure-close. Understanding normal state prevents misdiagnosis."
  },
  {
    "id": 53,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A technician checks resistance on a live circuit and damages the meter. What rule was violated?",
    "options": [
      "Resistance must be checked only on de-energized circuits",
      "Voltage must be checked only with no meter leads",
      "Current must be checked in parallel",
      "Pressure must be checked before voltage"
    ],
    "answer": 0,
    "explanation": "Ohmmeters apply internal voltage to measure resistance. External live voltage can damage the meter and injure the user. Power must be isolated before resistance testing."
  },
  {
    "id": 54,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A schematic differs from the actual wire colours in the unit. What should the technician rely on most?",
    "options": [
      "Circuit function and terminal identification",
      "Wire colour only",
      "Cabinet size",
      "Thermostat brand"
    ],
    "answer": 0,
    "explanation": "Wire colours are helpful but not always reliable. Terminal markings and circuit paths confirm function. Technicians should trace the circuit logically."
  },
  {
    "id": 55,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "An intermittent control fault occurs only when the blower starts. What electrical issue should be considered?",
    "options": [
      "Voltage drop caused by load starting",
      "Wrong refrigerant abbreviation",
      "Excessive subcooling only",
      "Dirty condenser fins only"
    ],
    "answer": 0,
    "explanation": "Starting loads can cause voltage drop in weak circuits. Loose connections or undersized wiring may fail under load. Testing under operating conditions is important."
  },
  {
    "id": 56,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A PSC blower motor runs slowly and overheats. The capacitor tests far below rating. What is the likely cause?",
    "options": [
      "Weak run capacitor",
      "Excess refrigerant charge",
      "Open TXV bulb",
      "Dirty sight glass"
    ],
    "answer": 0,
    "explanation": "PSC motors rely on a run capacitor for proper phase shift. A weak capacitor can reduce torque and increase heat. The motor may run slowly or fail."
  },
  {
    "id": 57,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A capacitor reads correct microfarads but is swollen. What should be done?",
    "options": [
      "Replace it",
      "Reuse it because reading is correct",
      "Drill a vent hole",
      "Cool it with water"
    ],
    "answer": 0,
    "explanation": "Swelling indicates internal failure or overheating. A physically damaged capacitor is unsafe. Correct measured value does not make it reliable."
  },
  {
    "id": 58,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A compressor trips on internal overload after a hard start. Which condition could cause this?",
    "options": [
      "Low voltage or high starting load",
      "Clean condenser coil only",
      "Correct oil return only",
      "Proper capacitor only"
    ],
    "answer": 0,
    "explanation": "Low voltage increases motor current and heat. High pressure or mechanical problems can also increase starting load. Overloads protect against overheating damage."
  },
  {
    "id": 59,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A motor nameplate lists FLA. What does this value represent?",
    "options": [
      "Full-load amperage",
      "Fan leakage amount",
      "Fuse line adjustment",
      "Flow limit actuator"
    ],
    "answer": 0,
    "explanation": "FLA is the expected current at rated load. It helps evaluate motor operation and circuit protection. Actual amperage should be compared to nameplate data."
  },
  {
    "id": 60,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A three-speed blower motor is wired to the wrong speed tap. What problem may occur?",
    "options": [
      "Incorrect airflow",
      "Refrigerant type changes",
      "Copper tubing becomes oversized",
      "Thermostat becomes wireless"
    ],
    "answer": 0,
    "explanation": "Speed taps determine blower airflow. Incorrect airflow affects coil performance and comfort. It can also cause freezing or overheating problems."
  },
  {
    "id": 61,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A contactor chatters rapidly when energized. Which problem is likely?",
    "options": [
      "Low control voltage or weak coil circuit",
      "Excessive suction line insulation",
      "Too much nitrogen in the cylinder",
      "Correct stable operation"
    ],
    "answer": 0,
    "explanation": "Chattering often happens when coil voltage is unstable or low. Loose wiring, transformer issues, or control voltage drop may cause it. The control circuit should be checked under load."
  },
  {
    "id": 62,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A motor shaft spins freely, capacitor is good, but motor does not start and draws no current. What is likely?",
    "options": [
      "Open winding or open circuit",
      "Locked rotor",
      "Overcharged refrigerant only",
      "Dirty evaporator only"
    ],
    "answer": 0,
    "explanation": "No current flow indicates an open electrical path. An open winding, overload, or wiring break may be present. A locked rotor would normally draw high current."
  },
  {
    "id": 63,
    "category": "E4 — Select Control Systems",
    "question": "A thermostat calls for cooling, but the condenser starts only when the contactor is manually pushed in. What is most likely missing?",
    "options": [
      "Control voltage to the contactor coil",
      "Refrigerant oil pressure only",
      "Condenser fan blade",
      "Compressor ground wire only"
    ],
    "answer": 0,
    "explanation": "Manually pushing the contactor proves line power can feed the load. The coil is not being energized by the control circuit. The fault is likely in thermostat, safeties, transformer, or wiring."
  },
  {
    "id": 64,
    "category": "E4 — Select Control Systems",
    "question": "In a heat pump thermostat, the O/B terminal usually controls:",
    "options": [
      "Reversing valve",
      "Compressor crankcase heater only",
      "Indoor fan capacitor",
      "Grounding electrode"
    ],
    "answer": 0,
    "explanation": "O/B is commonly used to energize the reversing valve. Different brands may energize it in heating or cooling. Correct setup is required for proper mode operation."
  },
  {
    "id": 65,
    "category": "E4 — Select Control Systems",
    "question": "A low-pressure control opens during pump-down. What is its purpose?",
    "options": [
      "Stop the compressor at a safe low suction pressure",
      "Increase liquid pressure",
      "Energize the crankcase heater only",
      "Reverse fan rotation"
    ],
    "answer": 0,
    "explanation": "Pump-down systems use low-pressure controls to stop the compressor. The compressor stops after refrigerant is pumped into the high side. This helps prevent refrigerant migration during off cycles."
  },
  {
    "id": 66,
    "category": "E4 — Select Control Systems",
    "question": "A high-pressure switch trips repeatedly on a hot day. Which control action is correct?",
    "options": [
      "Open the compressor circuit to protect the system",
      "Force the compressor to run longer",
      "Add heat to the condenser",
      "Disable all safeties"
    ],
    "answer": 0,
    "explanation": "High-pressure controls protect equipment from unsafe pressure. They interrupt the control circuit when pressure exceeds limits. The cause must be diagnosed, not bypassed."
  },
  {
    "id": 67,
    "category": "E4 — Select Control Systems",
    "question": "A time delay relay is installed on a compressor circuit to:",
    "options": [
      "Prevent short cycling",
      "Increase refrigerant density",
      "Replace the filter drier",
      "Measure voltage drop"
    ],
    "answer": 0,
    "explanation": "Time delays prevent rapid compressor restarts. Short cycling can damage compressors and controls. Delay relays improve equipment protection."
  },
  {
    "id": 68,
    "category": "E4 — Select Control Systems",
    "question": "An economizer control uses outdoor air when conditions are suitable. What is its purpose?",
    "options": [
      "Reduce mechanical cooling energy",
      "Increase compressor runtime",
      "Raise suction pressure only",
      "Replace the thermostat battery"
    ],
    "answer": 0,
    "explanation": "Economizers use cool outdoor air for free cooling. This reduces compressor operation when outdoor conditions allow. Proper sensors and dampers are required."
  },
  {
    "id": 69,
    "category": "E4 — Select Control Systems",
    "question": "A freeze stat on an air handler opens its circuit when the coil gets too cold. What is it protecting against?",
    "options": [
      "Coil freeze-up",
      "Low transformer voltage",
      "High condenser airflow",
      "Excessive crankcase heat"
    ],
    "answer": 0,
    "explanation": "Freeze stats help prevent evaporator icing. Low airflow or low refrigerant pressure can make coils too cold. Opening the circuit protects equipment and airflow."
  },
  {
    "id": 70,
    "category": "E5 — Apply Wiring Practices",
    "question": "A wire terminal is discoloured and brittle. What does this usually indicate?",
    "options": [
      "Overheating from poor connection or overcurrent",
      "Correct normal operation",
      "Proper torque",
      "Low humidity"
    ],
    "answer": 0,
    "explanation": "Heat damage often appears as discoloration or brittle insulation. Loose terminals create resistance and heat. The connection and cause must be corrected."
  },
  {
    "id": 71,
    "category": "E5 — Apply Wiring Practices",
    "question": "Why should stranded wire be fully captured under a terminal?",
    "options": [
      "Loose strands can short or overheat",
      "Loose strands improve airflow",
      "It increases refrigerant capacity",
      "It lowers suction pressure"
    ],
    "answer": 0,
    "explanation": "Stray wire strands can contact nearby terminals or ground. Poorly captured conductors can heat under load. Proper termination improves safety and reliability."
  },
  {
    "id": 72,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "In cooling mode, the outdoor coil is very dirty. What condition is most likely?",
    "options": [
      "High head pressure",
      "Low condensing temperature",
      "Lower compressor amperage always",
      "No change in operation"
    ],
    "answer": 0,
    "explanation": "A dirty condenser reduces heat rejection. Poor heat rejection raises condensing temperature and pressure. Compressor load and amperage may increase."
  },
  {
    "id": 73,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "A heat pump in heating mode has a frosted outdoor coil and the defrost never initiates. What can result?",
    "options": [
      "Reduced heat transfer and poor heating capacity",
      "Improved heat absorption",
      "Higher indoor airflow",
      "Lower outdoor coil restriction"
    ],
    "answer": 0,
    "explanation": "Frost insulates the outdoor coil and blocks airflow. This reduces heat absorption from outdoor air. Defrost operation is needed under frost-producing conditions."
  },
  {
    "id": 74,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "A reversing valve shifts partially and system pressures do not separate normally. What may occur?",
    "options": [
      "Poor heating/cooling and bypassing refrigerant",
      "Perfect capacity in both modes",
      "No refrigerant flow anywhere",
      "Increased thermostat voltage"
    ],
    "answer": 0,
    "explanation": "A leaking or stuck reversing valve can bypass discharge gas. This reduces pressure difference and system capacity. Symptoms may appear in heating or cooling mode."
  },
  {
    "id": 75,
    "category": "F2 — Analyze Refrigeration Systems",
    "question": "Low suction pressure, high superheat, and low subcooling most likely suggest:",
    "options": [
      "Undercharge",
      "Overcharge",
      "Flooded evaporator",
      "Dirty condenser only"
    ],
    "answer": 0,
    "explanation": "Undercharge reduces refrigerant feeding the evaporator. The evaporator becomes starved, raising superheat. Low liquid level can also reduce subcooling."
  },
  {
    "id": 76,
    "category": "F2 — Analyze Refrigeration Systems",
    "question": "High suction pressure, low superheat, and possible compressor sweating may indicate:",
    "options": [
      "Flooding or overfeeding evaporator",
      "Severe undercharge",
      "Open electrical fuse",
      "Dirty blower wheel only"
    ],
    "answer": 0,
    "explanation": "Low superheat means refrigerant may not be fully vaporized. Liquid may return toward the compressor. This condition can damage compressor valves and bearings."
  },
  {
    "id": 77,
    "category": "F2 — Analyze Refrigeration Systems",
    "question": "A restricted liquid line drier will most likely cause:",
    "options": [
      "Pressure drop and possible flashing after the restriction",
      "Higher liquid pressure after the drier",
      "Increased evaporator feed always",
      "Higher airflow through the coil"
    ],
    "answer": 0,
    "explanation": "A restriction causes pressure to drop downstream. If pressure drops enough, liquid refrigerant can flash. This starves the evaporator and affects system performance."
  },
  {
    "id": 78,
    "category": "G1 — Perform Work Site Preparation",
    "question": "Before setting a condensing unit, the pad location should be checked for:",
    "options": [
      "Drainage, level support, service access, and airflow clearance",
      "Paint matching only",
      "Thermostat wire colour only",
      "Refrigerant smell"
    ],
    "answer": 0,
    "explanation": "The unit needs stable, level support and good airflow. Drainage prevents water and ice problems. Service access is required for future maintenance."
  },
  {
    "id": 79,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "A long vertical suction riser is planned. What must be considered?",
    "options": [
      "Oil return to the compressor",
      "Thermostat display brightness",
      "Filter colour",
      "Condenser fan guard shape"
    ],
    "answer": 0,
    "explanation": "Vertical risers must maintain refrigerant velocity for oil return. Poor oil return can damage the compressor. Manufacturer line sizing rules must be followed."
  },
  {
    "id": 80,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "An outdoor unit is installed under a deck with poor discharge air clearance. What is the likely issue?",
    "options": [
      "Recirculation of hot discharge air",
      "Better condenser cooling",
      "Lower head pressure always",
      "Improved service access"
    ],
    "answer": 0,
    "explanation": "Hot condenser air can be pulled back into the coil. This raises condensing temperature and pressure. Poor clearance reduces efficiency and reliability."
  },
  {
    "id": 81,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "Why should condensate traps be installed according to equipment design?",
    "options": [
      "To allow proper drainage under pressure conditions",
      "To hold refrigerant liquid",
      "To increase compressor torque",
      "To prevent voltage drop"
    ],
    "answer": 0,
    "explanation": "Air handlers may have positive or negative pressure at drains. Incorrect trapping can stop drainage or pull air through the drain. Poor drainage can cause water damage and shutdowns."
  },
  {
    "id": 82,
    "category": "H1 — Install HVAC/R Piping and Tubing",
    "question": "A suction line has a sharp kink after bending. What is the concern?",
    "options": [
      "Restricted flow and poor oil return",
      "Improved superheat control",
      "Better refrigerant velocity always",
      "Lower risk of vibration"
    ],
    "answer": 0,
    "explanation": "Kinks reduce internal pipe area. Restricted suction piping can reduce capacity and affect oil return. The damaged section should be corrected."
  },
  {
    "id": 83,
    "category": "H1 — Install HVAC/R Piping and Tubing",
    "question": "A brazed joint leaks during pressure test. What is the best correction?",
    "options": [
      "Recover pressure, repair properly, and retest",
      "Add more refrigerant to seal it",
      "Cover the leak with tape",
      "Ignore it if pressure drops slowly"
    ],
    "answer": 0,
    "explanation": "Leaks must be repaired before evacuation and charging. The system must be safely depressurized before repair. After repair, pressure testing must confirm tightness."
  },
  {
    "id": 84,
    "category": "H1 — Install HVAC/R Piping and Tubing",
    "question": "Why should open tubing ends be capped during installation?",
    "options": [
      "To prevent moisture and debris entering the system",
      "To increase nitrogen pressure",
      "To soften copper",
      "To reduce wire size"
    ],
    "answer": 0,
    "explanation": "Moisture and dirt can contaminate refrigeration systems. Contamination can block metering devices and damage compressors. Capping tubing is simple system protection."
  },
  {
    "id": 85,
    "category": "H1 — Install HVAC/R Piping and Tubing",
    "question": "A technician overheats a TXV body while brazing nearby. What may be damaged?",
    "options": [
      "Internal valve parts and seals",
      "Thermostat display only",
      "Roof curb only",
      "Air filter media only"
    ],
    "answer": 0,
    "explanation": "Sensitive components can be damaged by excessive heat. Valves should be protected with wet rags or heat-blocking methods. Manufacturer brazing precautions should be followed."
  },
  {
    "id": 86,
    "category": "H1 — Install HVAC/R Piping and Tubing",
    "question": "Why is nitrogen flow kept low while brazing?",
    "options": [
      "To prevent oxidation without disturbing the braze joint",
      "To create high pressure inside the pipe",
      "To replace refrigerant charge",
      "To cool the compressor motor"
    ],
    "answer": 0,
    "explanation": "Low-flow nitrogen displaces oxygen inside the tubing. Too much flow can disturb the molten brazing alloy. The goal is oxidation control, not pressure testing during brazing."
  },
  {
    "id": 87,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A pressure test holds for 10 minutes but drops slowly over an hour. What should be done?",
    "options": [
      "Find and repair the leak before evacuation",
      "Evacuate anyway",
      "Charge refrigerant quickly",
      "Assume temperature caused all pressure loss"
    ],
    "answer": 0,
    "explanation": "A pressure drop may indicate a leak. Temperature changes should be considered, but leaks must be ruled out. A leaking system should not be evacuated or charged."
  },
  {
    "id": 88,
    "category": "H2 — Install HVAC/R Systems",
    "question": "During evacuation, the micron level rises quickly after isolating the pump. What does this usually suggest?",
    "options": [
      "Moisture, leak, or trapped refrigerant",
      "Correct deep vacuum",
      "Perfectly dry system",
      "Wrong thermostat mode only"
    ],
    "answer": 0,
    "explanation": "A rapid vacuum rise means gas is entering or leaving surfaces. Leaks, moisture boiling off, or trapped refrigerant are common causes. A decay test helps judge evacuation quality."
  },
  {
    "id": 89,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A system with a TXV is charged using subcooling. Why is superheat alone not enough?",
    "options": [
      "TXV controls superheat and may hide charge errors",
      "Superheat is always zero on TXV systems",
      "Subcooling only applies to furnaces",
      "TXV systems never need charging"
    ],
    "answer": 0,
    "explanation": "A TXV adjusts refrigerant flow to maintain superheat. Charge condition is better judged by liquid-line subcooling. Manufacturer charging method should always be followed."
  },
  {
    "id": 90,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A unit starts with correct voltage but compressor amperage is above nameplate. What should be checked?",
    "options": [
      "Operating pressures, airflow, voltage under load, and mechanical load",
      "Cabinet colour only",
      "Thermostat batteries only",
      "Filter brand only"
    ],
    "answer": 0,
    "explanation": "High amperage may come from electrical or mechanical causes. High head pressure, low voltage, or compressor problems can increase current. Complete startup readings are needed."
  },
  {
    "id": 91,
    "category": "H2 — Install HVAC/R Systems",
    "question": "Why must non-condensables be removed from a system?",
    "options": [
      "They raise operating pressures and reduce heat transfer",
      "They improve compressor lubrication",
      "They increase refrigerant purity",
      "They lower condensing temperature always"
    ],
    "answer": 0,
    "explanation": "Air and other non-condensables collect in the condenser. They increase head pressure and reduce efficiency. Proper evacuation removes them before charging."
  },
  {
    "id": 92,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A technician charges vapour into the low side of a running system. Why must care be taken?",
    "options": [
      "To avoid liquid slugging and ensure proper charge method",
      "To increase air in the system",
      "To bypass the metering device permanently",
      "To overheat the compressor intentionally"
    ],
    "answer": 0,
    "explanation": "Liquid entering the compressor can cause damage. Charging method depends on refrigerant type and manufacturer instructions. Proper equipment and procedures prevent slugging."
  },
  {
    "id": 93,
    "category": "H3 — Install Control Systems",
    "question": "A thermostat wire is nicked where it passes through sheet metal. What is the risk?",
    "options": [
      "Short circuit in the control wiring",
      "Higher refrigeration capacity",
      "Better signal quality",
      "More airflow"
    ],
    "answer": 0,
    "explanation": "Damaged insulation can allow conductors to short to metal. Low-voltage shorts can blow fuses or damage transformers. Wiring should be protected with bushings or grommets."
  },
  {
    "id": 94,
    "category": "H3 — Install Control Systems",
    "question": "After replacing a defrost board, the technician should verify:",
    "options": [
      "Sensor connections, wiring, and defrost sequence",
      "Only the board colour",
      "Only the cabinet screws",
      "Only the thermostat cover"
    ],
    "answer": 0,
    "explanation": "Control boards depend on correct wiring and sensor inputs. The sequence must be tested to confirm proper operation. A board replacement is incomplete without functional verification."
  },
  {
    "id": 95,
    "category": "H3 — Install Control Systems",
    "question": "A condensate safety switch is wired in series with Y. What happens if the drain pan fills?",
    "options": [
      "Cooling call is interrupted",
      "Compressor runs continuously",
      "Fan speed doubles",
      "Reversing valve locks open"
    ],
    "answer": 0,
    "explanation": "A series safety opens the compressor call circuit. This helps prevent water damage from overflow. The equipment may stop cooling until the drain issue is corrected."
  },
  {
    "id": 96,
    "category": "H3 — Install Control Systems",
    "question": "A control transformer is replaced with one of lower VA rating. What problem may occur?",
    "options": [
      "Transformer overheating or voltage drop under load",
      "Increased refrigerant charge",
      "Better control reliability always",
      "Lower compressor compression ratio"
    ],
    "answer": 0,
    "explanation": "VA rating must handle the connected control loads. Undersized transformers can overheat or lose voltage. Correct replacement rating is required."
  },
  {
    "id": 97,
    "category": "L1 — Maintain HVAC/R Systems",
    "question": "A maintenance check finds low airflow, high superheat, and an iced evaporator. What should be checked early?",
    "options": [
      "Filter, blower, coil cleanliness, and airflow path",
      "Only refrigerant type",
      "Only condenser colour",
      "Only thermostat batteries"
    ],
    "answer": 0,
    "explanation": "Low airflow can cause low evaporator temperature and icing. Restricted filters, dirty coils, or blower issues are common causes. Airflow must be verified before assuming refrigerant fault."
  },
  {
    "id": 98,
    "category": "L1 — Maintain HVAC/R Systems",
    "question": "A condenser coil is cleaned and head pressure drops. Why?",
    "options": [
      "Heat rejection improved",
      "Suction pressure became absolute pressure",
      "Compressor voltage increased",
      "Refrigerant changed type"
    ],
    "answer": 0,
    "explanation": "Clean coils transfer heat more effectively. Better heat rejection lowers condensing temperature and pressure. This improves efficiency and compressor operating conditions."
  },
  {
    "id": 99,
    "category": "L1 — Maintain HVAC/R Systems",
    "question": "During service, a technician finds oil staining around a flare fitting. What should be suspected?",
    "options": [
      "Refrigerant leak",
      "Normal dust collection only",
      "Correct torque always",
      "Low-voltage short"
    ],
    "answer": 0,
    "explanation": "Refrigerant oil often escapes with refrigerant at leak points. Oil staining is a strong visual clue. The fitting should be leak tested and repaired if needed."
  },
  {
    "id": 100,
    "category": "L1 — Maintain HVAC/R Systems",
    "question": "A system has repeated compressor failures. What should a technician investigate before installing another compressor?",
    "options": [
      "Root causes such as airflow, charge, oil return, electrical supply, and contamination",
      "Only compressor paint colour",
      "Only thermostat model",
      "Only customer preference"
    ],
    "answer": 0,
    "explanation": "Repeated failures usually indicate an unresolved system problem. Installing another compressor without diagnosis may lead to another failure. Electrical, refrigerant, airflow, and contamination issues must be checked."
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

const shuffledRacmHarmonizedLevel1Set2Questions =
  shuffleArray(racmHarmonizedLevel1Set2Questions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "racm",
  tradeTitle: "RACM",
  sectionTitle: "Harmonized Harmonized Level 1 – Set 2",
  questionTimeSeconds: 90,
  questions: shuffledRacmHarmonizedLevel1Set2Questions
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
