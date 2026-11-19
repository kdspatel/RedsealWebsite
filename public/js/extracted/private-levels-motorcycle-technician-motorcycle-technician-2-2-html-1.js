const motorcycleTechnicianLevel2Set2Questions = [
  {
    "id": 1,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "A technician measures 12.6 V at the battery, but the starter barely turns. What test is most useful next?",
    "options": [
      "Paint thickness test",
      "Voltage drop test during cranking",
      "Tire runout test",
      "Coolant freeze-point test"
    ],
    "answer": 1,
    "explanation": "A battery can show normal voltage with no load. Voltage drop testing checks the circuit while current flows. High resistance in cables or connections can cause slow cranking."
  },
  {
    "id": 2,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "A scan tool shows a stored fault code, but the motorcycle currently runs normally. What should the technician do?",
    "options": [
      "Replace the ECM immediately",
      "Record the code, check freeze-frame/live data, and follow diagnostics",
      "Ignore the code permanently",
      "Disconnect the battery only"
    ],
    "answer": 1,
    "explanation": "Stored codes can point to intermittent faults. Live data and service procedures help confirm the cause. Parts should not be replaced without testing."
  },
  {
    "id": 3,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "When measuring resistance through a sensor, why should the circuit usually be powered off?",
    "options": [
      "Resistance mode uses the meter’s internal current",
      "Engine oil pressure affects resistance mode",
      "The tire must be spinning",
      "Resistance can only be checked with the engine running"
    ],
    "answer": 0,
    "explanation": "Ohmmeter testing sends a small current through the circuit. External voltage can damage the meter or give false readings. The circuit should be isolated according to service information."
  },
  {
    "id": 4,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "A technician needs to verify crankshaft speed while diagnosing a no-start. Which unit is most relevant?",
    "options": [
      "Ω",
      "rpm",
      "BDC",
      "VDC only"
    ],
    "answer": 1,
    "explanation": "rpm means revolutions per minute. Cranking rpm can affect ignition and fuel injection operation. Low cranking speed can cause a no-start condition."
  },
  {
    "id": 5,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "Why should a technician compare diagnostic readings to manufacturer specifications?",
    "options": [
      "Specifications identify acceptable operating ranges",
      "All motorcycles use identical values",
      "Guessing is faster and more accurate",
      "Specifications only apply to new motorcycles"
    ],
    "answer": 0,
    "explanation": "Diagnostic numbers only matter when compared to limits. Different models can have different specifications. Service information prevents incorrect conclusions."
  },
  {
    "id": 6,
    "category": "C1 - Use diagnostic tools and equipment",
    "question": "A technician uses a DMM on the 10 A current setting across a battery like a voltmeter. What is the danger?",
    "options": [
      "It can create a short circuit and damage the meter",
      "It will measure tire pressure",
      "It will automatically charge the battery",
      "It will reset valve timing"
    ],
    "answer": 0,
    "explanation": "Ammeters are placed in series, not across power sources. Connecting current mode across a battery can short the circuit. Meter setup must match the measurement being taken. --- ## E. MAINTAIN CHASSIS AND COMPONENTS — 11 Questions ### E1. Maintain Frames — 2 Questions"
  },
  {
    "id": 7,
    "category": "E1 - Maintain frames",
    "question": "A motorcycle tracks straight, but visual inspection shows cracked paint around a frame weld. What is the best interpretation?",
    "options": [
      "It may indicate frame flexing or cracking beneath the paint",
      "It is always harmless decoration",
      "It proves the frame is stronger",
      "It only affects fuel economy"
    ],
    "answer": 0,
    "explanation": "Cracked paint near welds can indicate structural movement. The frame should be inspected carefully for cracks or damage. Safe handling depends on frame integrity."
  },
  {
    "id": 8,
    "category": "E1 - Maintain frames",
    "question": "After accessory installation, a frame mounting bolt is found bottomed out before clamping the bracket. What is the concern?",
    "options": [
      "The bracket may not be securely clamped",
      "The bolt is automatically tighter",
      "The battery will overcharge",
      "The steering bearings will lubricate themselves"
    ],
    "answer": 0,
    "explanation": "A bottomed bolt may feel tight without clamping parts. Loose accessories can vibrate or interfere with controls. Correct hardware length and torque are required. --- ### E2. Maintain Steering Heads — 3 Questions"
  },
  {
    "id": 9,
    "category": "E2 - Maintain steering heads",
    "question": "A motorcycle wanders at low speed and has a clunk under front braking. Which fault best fits?",
    "options": [
      "Loose steering head bearings",
      "Rich fuel mixture",
      "Stuck thermostat",
      "Worn piston rings only"
    ],
    "answer": 0,
    "explanation": "Loose steering bearings can create play in the front end. The clunk may appear when braking loads the steering stem. Bearing preload should be checked and adjusted."
  },
  {
    "id": 10,
    "category": "E2 - Maintain steering heads",
    "question": "Steering feels heavy after bearing service. What is a likely cause?",
    "options": [
      "Bearing preload is too tight",
      "Fuel tank vent is blocked",
      "CVT rollers are flat-spotted",
      "Spark plug gap is too wide"
    ],
    "answer": 0,
    "explanation": "Too much steering bearing preload causes stiffness. Steering must turn smoothly without binding or play. Adjustment should follow manufacturer procedure."
  },
  {
    "id": 11,
    "category": "E2 - Maintain steering heads",
    "question": "Why should steering head bearing races be inspected, not only the bearings?",
    "options": [
      "Damaged races can cause notchiness even with new bearings",
      "Races control charging voltage",
      "Races set carburetor float level",
      "Races determine coolant mixture"
    ],
    "answer": 0,
    "explanation": "Bearings roll against the races. Pitting or brinelling in the race creates rough steering. Replacing only one damaged part may not solve the problem. --- ### E3. Maintain Steering Systems for Multi-Wheeled Motorcycles — 3 Questions"
  },
  {
    "id": 12,
    "category": "E3 - Maintain steering systems for multi-wheeled motorcycles",
    "question": "A three-wheeled motorcycle scrubs both front tires on turns and feels unstable. What should be checked first?",
    "options": [
      "Toe setting and steering linkage condition",
      "Spark plug heat range only",
      "Oil filter colour",
      "Muffler packing density"
    ],
    "answer": 0,
    "explanation": "Toe alignment strongly affects tire scrub. Steering linkage wear can also change tracking. Multi-wheeled steering geometry must be set accurately."
  },
  {
    "id": 13,
    "category": "E3 - Maintain steering systems for multi-wheeled motorcycles",
    "question": "A tie-rod boot is torn but the joint has no obvious play yet. What is the best action?",
    "options": [
      "Treat it as a concern because contamination can quickly damage the joint",
      "Ignore it until the tire falls off",
      "Fill the boot with engine oil",
      "Tighten the battery terminals"
    ],
    "answer": 0,
    "explanation": "A torn boot allows water and dirt into the joint. Contamination can cause rapid wear. The joint and boot should be serviced according to procedure."
  },
  {
    "id": 14,
    "category": "E3 - Maintain steering systems for multi-wheeled motorcycles",
    "question": "Why should left and right steering components be compared during inspection?",
    "options": [
      "Uneven wear or damage can identify bent or loose parts",
      "Both sides must always be different",
      "Comparison adjusts fuel pressure",
      "It replaces measuring tools"
    ],
    "answer": 0,
    "explanation": "Side-to-side comparison helps find abnormal conditions. Bent arms or worn joints may change alignment. Steering safety depends on matching geometry. --- ### E4. Maintain Chassis Standard and Accessory Components — 3 Questions"
  },
  {
    "id": 15,
    "category": "E4 - Maintain chassis standard and accessory components",
    "question": "A windshield is installed and the handlebars now contact it at full lock. What is the main issue?",
    "options": [
      "Steering travel is restricted",
      "Fuel pressure is too low",
      "The clutch plates are glazed",
      "Fork oil is too thin"
    ],
    "answer": 0,
    "explanation": "Accessories must not interfere with steering. Full-lock clearance should be verified after installation. Restricted steering can cause loss of control."
  },
  {
    "id": 16,
    "category": "E4 - Maintain chassis standard and accessory components",
    "question": "Why should accessory wiring be fused properly?",
    "options": [
      "To protect the circuit from overload or short circuits",
      "To increase engine compression",
      "To change suspension sag",
      "To synchronize carburetors"
    ],
    "answer": 0,
    "explanation": "Added electrical loads need circuit protection. Unfused wiring can overheat during a short. Safe installation protects the harness and motorcycle."
  },
  {
    "id": 17,
    "category": "E4 - Maintain chassis standard and accessory components",
    "question": "After installing saddlebags, the rear suspension bottoms out with a passenger. What should be considered?",
    "options": [
      "Load capacity, preload adjustment, and clearance",
      "Carburetor pilot jet size only",
      "Stator AC output only",
      "Valve guide clearance only"
    ],
    "answer": 0,
    "explanation": "Accessories and cargo add weight. Suspension preload and clearance may need adjustment. Overloading can affect handling and safety. --- ## F. MAINTAIN SUSPENSION SYSTEMS — 14 Questions ### F1. Maintain Front Suspension Components — 6 Questions"
  },
  {
    "id": 18,
    "category": "F1 - Maintain front suspension components",
    "question": "A fork seal was replaced, but it leaks again after a short ride. Which overlooked issue could cause this?",
    "options": [
      "Pitted fork tube surface",
      "New coolant mixture",
      "Correct tire pressure",
      "Clean battery terminals"
    ],
    "answer": 0,
    "explanation": "Pits or scratches can cut a new seal. Seal replacement alone will not fix a damaged sealing surface. Fork tube condition must be inspected."
  },
  {
    "id": 19,
    "category": "F1 - Maintain front suspension components",
    "question": "A motorcycle dives excessively during braking. Which condition could contribute?",
    "options": [
      "Weak fork springs or incorrect fork oil level",
      "High stator output",
      "Tight primary belt only",
      "Rich choke circuit"
    ],
    "answer": 0,
    "explanation": "Front suspension controls braking weight transfer. Weak springs or low oil level can increase dive. Damping and spring condition should be checked."
  },
  {
    "id": 20,
    "category": "F1 - Maintain front suspension components",
    "question": "Why should fork oil volume or level be measured accurately?",
    "options": [
      "It affects damping and air-spring action",
      "It sets battery voltage",
      "It controls carburetor float height",
      "It changes final drive ratio"
    ],
    "answer": 0,
    "explanation": "Fork oil level changes internal air space. Too much or too little oil changes suspension behaviour. Measurements must follow service procedure."
  },
  {
    "id": 21,
    "category": "F1 - Maintain front suspension components",
    "question": "A fork binds only after the front axle is tightened. What should be checked?",
    "options": [
      "Axle alignment, spacer placement, and pinch bolt sequence",
      "Fuel injector resistance only",
      "Exhaust gasket thickness",
      "Spark plug colour"
    ],
    "answer": 0,
    "explanation": "Incorrect axle installation can misalign fork legs. Binding affects suspension movement and handling. Spacers and tightening sequence matter."
  },
  {
    "id": 22,
    "category": "F1 - Maintain front suspension components",
    "question": "What is the likely effect of fork oil that is too heavy in viscosity?",
    "options": [
      "Slower damping response and harsher action",
      "Lower battery resistance",
      "Higher fuel pressure",
      "Less steering head preload"
    ],
    "answer": 0,
    "explanation": "Oil viscosity affects flow through damping passages. Heavier oil can slow fork movement. Wrong viscosity changes ride and handling."
  },
  {
    "id": 23,
    "category": "F1 - Maintain front suspension components",
    "question": "Why should front suspension components be serviced equally on both sides when applicable?",
    "options": [
      "Unequal damping or springing can affect handling",
      "It doubles engine power",
      "It changes charging voltage",
      "It balances fuel mixture only"
    ],
    "answer": 0,
    "explanation": "Fork legs work together as a system. Differences side-to-side can cause poor control. Balanced service helps predictable handling. --- ### F2. Maintain Front Suspension Components for Multi-Wheeled Motorcycles — 3 Questions"
  },
  {
    "id": 24,
    "category": "F2 - Maintain front suspension components for multi-wheeled motorcycles",
    "question": "A multi-wheeled motorcycle has a clunk over bumps and visible play in a control arm. What is the likely issue?",
    "options": [
      "Worn bushing or joint",
      "Low engine compression",
      "Dirty pilot jet",
      "Weak battery only"
    ],
    "answer": 0,
    "explanation": "Control arms use bushings or joints to locate wheels. Wear creates noise and unwanted movement. Loose suspension parts affect alignment and handling."
  },
  {
    "id": 25,
    "category": "F2 - Maintain front suspension components for multi-wheeled motorcycles",
    "question": "Why should ride height be checked before alignment on some multi-wheeled motorcycles?",
    "options": [
      "Ride height can affect steering geometry and toe readings",
      "Ride height controls spark intensity",
      "Alignment changes coolant boiling point",
      "It replaces tire pressure inspection"
    ],
    "answer": 0,
    "explanation": "Suspension position affects alignment angles. Incorrect ride height can lead to false alignment results. The vehicle should be set to proper condition before measuring."
  },
  {
    "id": 26,
    "category": "F2 - Maintain front suspension components for multi-wheeled motorcycles",
    "question": "A worn front suspension ball joint may be most noticeable as:",
    "options": [
      "Steering looseness, tire wear, or clunking",
      "Rich idle mixture only",
      "Overcharging battery",
      "Low coolant level only"
    ],
    "answer": 0,
    "explanation": "Ball joints control wheel position. Wear changes alignment and creates play. Symptoms often appear in handling and tire wear. --- ### F3. Maintain Rear Suspension Components — 5 Questions"
  },
  {
    "id": 27,
    "category": "F3 - Maintain rear suspension components",
    "question": "A rider reports the rear wheel hops over bumps instead of staying planted. Which fault is likely?",
    "options": [
      "Weak or failed rear shock damping",
      "Overfilled fuel tank",
      "New spark plug",
      "Clean air filter"
    ],
    "answer": 0,
    "explanation": "Damping controls spring movement. A failed shock can allow bouncing and loss of traction. Rear shock condition should be inspected."
  },
  {
    "id": 28,
    "category": "F3 - Maintain rear suspension components",
    "question": "Why should suspension linkage bearings be lubricated with the correct grease?",
    "options": [
      "To reduce wear and allow smooth movement",
      "To increase stator output",
      "To clean carburetor jets",
      "To raise compression ratio"
    ],
    "answer": 0,
    "explanation": "Linkage bearings carry high loads and move constantly. Lack of lubrication causes wear or seizure. Correct grease protects the bearing surfaces."
  },
  {
    "id": 29,
    "category": "F3 - Maintain rear suspension components",
    "question": "A rear shock preload is increased. What is the primary effect?",
    "options": [
      "Ride height and sag change",
      "Ignition timing advances",
      "Fuel pressure decreases",
      "Battery resistance increases"
    ],
    "answer": 0,
    "explanation": "Preload changes how much the suspension settles under load. It does not make the spring itself stronger. Correct sag helps handling."
  },
  {
    "id": 30,
    "category": "F3 - Maintain rear suspension components",
    "question": "Side play is found at the swingarm pivot. Why is this serious?",
    "options": [
      "It can let the rear wheel track inaccurately",
      "It improves cornering",
      "It lowers oil temperature",
      "It balances carburetors"
    ],
    "answer": 0,
    "explanation": "The swingarm locates the rear wheel. Pivot wear can cause wandering or instability. Bearings, bushings, and pivot torque must be checked."
  },
  {
    "id": 31,
    "category": "F3 - Maintain rear suspension components",
    "question": "A rear suspension fastener is tightened with the suspension hanging when the manual says tighten at ride height. Why does this matter?",
    "options": [
      "Bushings may be preloaded incorrectly",
      "Battery voltage will drop",
      "Carburetor float will stick",
      "Exhaust flow will reverse"
    ],
    "answer": 0,
    "explanation": "Rubber bushings can twist if tightened at the wrong position. Incorrect preload can shorten bushing life. Service procedures specify the correct tightening condition. --- ## I. MAINTAIN TWO-STROKE AND FOUR-STROKE ENGINES — 21 Questions ### I1. Apply Principles of Engines and Engine Construction — 8 Questions"
  },
  {
    "id": 32,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "During a leak-down test, air is heard strongly from the exhaust. What is the likely leakage path?",
    "options": [
      "Exhaust valve not sealing",
      "Intake boot only",
      "Radiator cap",
      "Clutch basket"
    ],
    "answer": 0,
    "explanation": "Leak-down testing locates cylinder sealing losses. Air from the exhaust points to an exhaust valve leak. Air from intake, crankcase, or coolant indicates other faults."
  },
  {
    "id": 33,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "What is BDC?",
    "options": [
      "Piston’s lowest point in the cylinder",
      "Battery direct current",
      "Brake disc clearance",
      "Belt drive centre"
    ],
    "answer": 0,
    "explanation": "BDC means bottom dead centre. It is the piston’s lowest travel point. TDC and BDC are used for timing and measurement."
  },
  {
    "id": 34,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "Why can incorrect cam timing cause piston-to-valve contact?",
    "options": [
      "Valves may open when the piston is too close",
      "Battery current becomes too high",
      "Coolant mixture becomes lean",
      "Fork oil becomes aerated"
    ],
    "answer": 0,
    "explanation": "Valve timing must match piston position. If timing is wrong, mechanical interference can occur. This can cause severe engine damage."
  },
  {
    "id": 35,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "A four-stroke engine has low compression on one cylinder and air escapes from the oil filler during leak-down. What is likely?",
    "options": [
      "Ring or cylinder sealing problem",
      "Exhaust gasket leak only",
      "Starter relay failure",
      "Front fork binding"
    ],
    "answer": 0,
    "explanation": "Air from the crankcase suggests leakage past rings. Worn rings or cylinder damage can reduce compression. Further inspection may be required."
  },
  {
    "id": 36,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "What is the purpose of a head gasket?",
    "options": [
      "Seal combustion pressure, oil passages, and coolant passages where applicable",
      "Adjust tire pressure",
      "Set clutch free play",
      "Change final drive ratio"
    ],
    "answer": 0,
    "explanation": "The head gasket seals between cylinder and head. Failure can cause compression loss, oil leaks, or coolant leaks. Surface condition and torque procedure are critical."
  },
  {
    "id": 37,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "Why is bearing clearance important inside an engine?",
    "options": [
      "It allows oil film support without excessive looseness",
      "It adjusts headlight aim",
      "It controls brake fluid level",
      "It changes throttle cable routing"
    ],
    "answer": 0,
    "explanation": "Bearings need proper clearance for oil film. Too little clearance can seize; too much can lower oil pressure. Measurements must match service limits."
  },
  {
    "id": 38,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "What does a connecting rod do?",
    "options": [
      "Links the piston to the crankshaft",
      "Opens the radiator cap",
      "Controls charging voltage",
      "Adjusts steering toe"
    ],
    "answer": 0,
    "explanation": "The connecting rod transfers piston force to the crankshaft. It converts reciprocating motion into crank rotation. Rod condition is critical for engine durability."
  },
  {
    "id": 39,
    "category": "I1 - Apply principles of engines and engine construction",
    "question": "Why is engine assembly cleanliness critical?",
    "options": [
      "Dirt can damage bearings, cylinders, and oil passages",
      "Dirt improves break-in",
      "Dirt increases coolant flow",
      "Dirt reduces valve timing error"
    ],
    "answer": 0,
    "explanation": "Internal engine parts need clean lubrication. Abrasive dirt causes rapid wear. Clean assembly prevents early engine failure. --- ### I3. Maintain Valve Systems on Two-Stroke Engines — 2 Questions"
  },
  {
    "id": 40,
    "category": "I3 - Maintain valve systems on two-stroke engines",
    "question": "A reed valve petal is chipped and does not sit flat. What problem can result?",
    "options": [
      "Hard starting and poor low-speed running",
      "Higher charging voltage",
      "Better clutch release",
      "Increased fork travel"
    ],
    "answer": 0,
    "explanation": "Reeds must seal to control intake flow. Damaged reeds can allow reverse flow. This affects starting, idle, and throttle response."
  },
  {
    "id": 41,
    "category": "I3 - Maintain valve systems on two-stroke engines",
    "question": "A two-stroke exhaust power valve is assembled out of time. What is likely?",
    "options": [
      "Incorrect exhaust port timing and poor power delivery",
      "Battery overcharging",
      "Steering head notchiness",
      "CVT belt glazing only"
    ],
    "answer": 0,
    "explanation": "Power valves change exhaust port characteristics. Incorrect assembly can reduce performance across the rpm range. Timing marks and service procedure must be followed. --- ### I5. Maintain Cylinders and Pistons — 4 Questions"
  },
  {
    "id": 42,
    "category": "I5 - Maintain cylinders and pistons",
    "question": "A cylinder bore measures tapered beyond specification. What does this mean?",
    "options": [
      "The bore diameter changes too much from top to bottom",
      "The piston pin is too short",
      "The spark plug is too hot",
      "The radiator cap is weak"
    ],
    "answer": 0,
    "explanation": "Taper is bore wear difference along cylinder height. Excessive taper affects ring sealing. Repair may require machining or replacement."
  },
  {
    "id": 43,
    "category": "I5 - Maintain cylinders and pistons",
    "question": "Why must piston ring orientation be correct during assembly?",
    "options": [
      "Incorrect ring placement can affect sealing and oil control",
      "It changes battery polarity",
      "It controls fork rebound",
      "It sets toe alignment"
    ],
    "answer": 0,
    "explanation": "Rings have correct side and gap positions. Wrong installation can cause oil burning or compression loss. Manufacturer markings and instructions must be followed."
  },
  {
    "id": 44,
    "category": "I5 - Maintain cylinders and pistons",
    "question": "A piston skirt shows heavy vertical scoring. What should be investigated?",
    "options": [
      "Lubrication failure, dirt ingestion, overheating, or clearance issue",
      "Headlight relay only",
      "Tire pressure only",
      "Handlebar alignment only"
    ],
    "answer": 0,
    "explanation": "Scoring indicates abnormal contact or contamination. Causes include oil failure, heat, debris, or tight clearance. The cause must be corrected before reassembly."
  },
  {
    "id": 45,
    "category": "I5 - Maintain cylinders and pistons",
    "question": "What can happen if ring end gap is too small?",
    "options": [
      "Ring ends may butt when hot and damage the cylinder or piston",
      "Compression always increases safely",
      "Coolant flow increases",
      "Clutch slip disappears"
    ],
    "answer": 0,
    "explanation": "Rings expand with heat. Insufficient end gap can cause binding and scoring. End gap must be measured in the cylinder. --- ### I9. Maintain Lubrication Systems — 2 Questions"
  },
  {
    "id": 46,
    "category": "I9 - Maintain lubrication systems",
    "question": "An oil pressure light flickers at idle after the engine is hot. What should be checked?",
    "options": [
      "Oil level, oil grade, pressure, pump, and bearing condition",
      "Tire tread depth only",
      "Windshield height",
      "Brake lever colour"
    ],
    "answer": 0,
    "explanation": "Hot oil is thinner and pressure may drop. Low level, wrong oil, pump wear, or bearing wear can cause low pressure. Actual pressure should be verified if required."
  },
  {
    "id": 47,
    "category": "I9 - Maintain lubrication systems",
    "question": "Why is oil viscosity important?",
    "options": [
      "It affects oil flow, film strength, and temperature performance",
      "It changes fuel tank venting",
      "It controls steering bearing preload",
      "It adjusts CVT roller weight"
    ],
    "answer": 0,
    "explanation": "Oil must flow when cold and protect when hot. Wrong viscosity can affect lubrication and clutch operation. Manufacturer oil specifications should be followed. --- ### I10. Maintain Cooling Systems — 5 Questions"
  },
  {
    "id": 48,
    "category": "I10 - Maintain cooling systems",
    "question": "A motorcycle overheats at highway speed but not at idle. What is more likely than a fan fault?",
    "options": [
      "Restricted radiator airflow, coolant flow issue, or lean/engine problem",
      "Weak starter relay only",
      "Loose clutch cable only",
      "Flat CVT rollers only"
    ],
    "answer": 0,
    "explanation": "The fan matters most at low speed or stopped. High-speed overheating suggests flow, radiator, airflow, or engine heat issue. Diagnosis should match the operating condition."
  },
  {
    "id": 49,
    "category": "I10 - Maintain cooling systems",
    "question": "Why should coolant not be mixed randomly between types?",
    "options": [
      "Incompatible coolant chemistry can reduce protection or form deposits",
      "Mixing always improves cooling",
      "Coolant type only changes colour",
      "Coolant cannot affect corrosion"
    ],
    "answer": 0,
    "explanation": "Coolants use different additive packages. Incorrect mixing can cause deposits or corrosion problems. Use the type specified by the manufacturer."
  },
  {
    "id": 50,
    "category": "I10 - Maintain cooling systems",
    "question": "A radiator hose collapses as the engine cools. Which component may be faulty?",
    "options": [
      "Radiator cap vacuum valve or recovery system",
      "Starter clutch",
      "Primary chain",
      "Carburetor pilot jet"
    ],
    "answer": 0,
    "explanation": "As coolant cools, vacuum must be relieved. The cap or recovery system allows coolant return. A fault can collapse hoses."
  },
  {
    "id": 51,
    "category": "I10 - Maintain cooling systems",
    "question": "What does a thermostat do in a liquid-cooled engine?",
    "options": [
      "Regulates coolant flow to maintain operating temperature",
      "Controls spark plug gap",
      "Adjusts suspension sag",
      "Changes drive belt width"
    ],
    "answer": 0,
    "explanation": "A thermostat restricts or allows coolant flow based on temperature. Stuck open or closed conditions affect engine temperature. Correct operation helps performance and durability."
  },
  {
    "id": 52,
    "category": "I10 - Maintain cooling systems",
    "question": "A water pump weep hole is leaking coolant. What does this usually indicate?",
    "options": [
      "Water pump seal failure",
      "Normal battery charging",
      "Correct clutch adjustment",
      "Good radiator cap operation"
    ],
    "answer": 0,
    "explanation": "The weep hole warns of seal leakage. Coolant leakage from it often means pump service is required. Ignoring it can lead to coolant loss and overheating. --- ## J. MAINTAIN CLUTCHES AND PRIMARY DRIVES — 17 Questions ### J1. Maintain Primary Drives and Driven Gears — 3 Questions"
  },
  {
    "id": 53,
    "category": "J1 - Maintain primary drives and driven gears",
    "question": "A primary gear has pitting on the tooth contact surface. What is the concern?",
    "options": [
      "Surface fatigue and possible gear failure",
      "Improved oil retention only",
      "Better clutch release",
      "Increased coolant flow"
    ],
    "answer": 0,
    "explanation": "Pitting indicates gear surface damage. Damaged teeth can become noisy and fail. Lubrication and alignment should also be checked."
  },
  {
    "id": 54,
    "category": "J1 - Maintain primary drives and driven gears",
    "question": "Why should gear backlash be checked where specified?",
    "options": [
      "Incorrect clearance can cause noise, wear, or binding",
      "It changes tire pressure",
      "It sets carburetor synchronization",
      "It controls coolant freeze point"
    ],
    "answer": 0,
    "explanation": "Gears need correct clearance to mesh properly. Too tight can bind; too loose can hammer and make noise. Backlash must be compared to specifications."
  },
  {
    "id": 55,
    "category": "J1 - Maintain primary drives and driven gears",
    "question": "Metal particles are found in the primary case oil. What is the best response?",
    "options": [
      "Inspect primary drive components for wear or damage",
      "Add thicker paint",
      "Ignore it if the engine starts",
      "Tighten the steering stem nut"
    ],
    "answer": 0,
    "explanation": "Metal debris indicates abnormal wear. Primary gears, chain, clutch, and bearings may be affected. The source should be found before failure worsens. --- ### J2. Maintain Primary Drive Chains and Sprockets — 2 Questions"
  },
  {
    "id": 56,
    "category": "J2 - Maintain primary drive chains and sprockets",
    "question": "A primary chain is adjusted too tight. What can happen?",
    "options": [
      "Bearing load, noise, and accelerated wear increase",
      "Compression rises safely",
      "Charging voltage stabilizes",
      "Fork seals last longer"
    ],
    "answer": 0,
    "explanation": "Chains need specified free play. Too little slack overloads shafts and bearings. Adjustment should be made at the specified position."
  },
  {
    "id": 57,
    "category": "J2 - Maintain primary drive chains and sprockets",
    "question": "Why should chain wear be checked at multiple positions?",
    "options": [
      "Chains can wear unevenly and have tight spots",
      "It changes spark timing",
      "It measures coolant level",
      "It balances wheels automatically"
    ],
    "answer": 0,
    "explanation": "Chain wear may not be uniform. A tight spot can affect adjustment accuracy. The chain should meet service limits through rotation. --- ### J3. Maintain Primary Drive Belts and Pulleys/Sprockets — 2 Questions"
  },
  {
    "id": 58,
    "category": "J3 - Maintain primary drive belts and pulleys/sprockets",
    "question": "A belt pulley has a damaged tooth. What problem can result?",
    "options": [
      "Belt damage, noise, or tooth skipping",
      "Stronger ignition spark",
      "More coolant pressure",
      "Better steering stability"
    ],
    "answer": 0,
    "explanation": "Belt teeth must mesh with pulley teeth. Damaged pulleys can cut or stress the belt. Both belt and pulley should be inspected."
  },
  {
    "id": 59,
    "category": "J3 - Maintain primary drive belts and pulleys/sprockets",
    "question": "Why should oil contamination on a drive belt be corrected?",
    "options": [
      "Oil can degrade belt material or cause slipping",
      "Oil improves dry belt life",
      "Oil tightens the belt automatically",
      "Oil increases gear backlash"
    ],
    "answer": 0,
    "explanation": "Many belts are designed to run dry. Oil can damage rubber compounds and reduce traction. The source of contamination must also be repaired. --- ### J4. Maintain Manual Clutches — 6 Questions"
  },
  {
    "id": 60,
    "category": "J4 - Maintain manual clutches",
    "question": "A clutch slips only after the engine gets hot. What could be a cause?",
    "options": [
      "Weak springs, worn plates, or incorrect oil showing up under load",
      "Steering head bearings too loose",
      "Radiator fan too strong",
      "Fork oil level too high"
    ],
    "answer": 0,
    "explanation": "Heat can worsen marginal clutch holding ability. Worn plates and weak springs lose clamp force. Incorrect oil can also reduce friction."
  },
  {
    "id": 61,
    "category": "J4 - Maintain manual clutches",
    "question": "A hydraulic clutch feels spongy and does not disengage fully. What is likely?",
    "options": [
      "Air in the hydraulic system or fluid issue",
      "Excessive charging voltage",
      "Blocked fuel tank vent",
      "Worn rear tire only"
    ],
    "answer": 0,
    "explanation": "Air compresses in hydraulic systems. This reduces slave cylinder movement. Bleeding and fluid inspection may be required."
  },
  {
    "id": 62,
    "category": "J4 - Maintain manual clutches",
    "question": "Why are steel clutch plates checked for warpage?",
    "options": [
      "Warped plates can cause drag or uneven engagement",
      "Warpage improves oil flow",
      "Warpage increases battery voltage",
      "Warpage adjusts chain slack"
    ],
    "answer": 0,
    "explanation": "Plates must separate and clamp evenly. Warped plates may not release properly. Service limits determine reuse."
  },
  {
    "id": 63,
    "category": "J4 - Maintain manual clutches",
    "question": "A clutch lever has no free play. What can this cause?",
    "options": [
      "Clutch slipping because it cannot fully engage",
      "Better clutch life",
      "Lower engine temperature",
      "Richer fuel mixture"
    ],
    "answer": 0,
    "explanation": "No free play can hold the clutch slightly released. This reduces clamping force on the plates. Correct free play is needed for full engagement."
  },
  {
    "id": 64,
    "category": "J4 - Maintain manual clutches",
    "question": "Clutch plates are stuck together after storage. What symptom may occur?",
    "options": [
      "Motorcycle lurches or stalls when shifted into gear",
      "Battery overcharges",
      "Cooling fan runs continuously",
      "Forks top out"
    ],
    "answer": 0,
    "explanation": "Stuck plates prevent proper disengagement. The bike may jump when gear is selected. Clutch inspection or freeing procedure may be needed."
  },
  {
    "id": 65,
    "category": "J4 - Maintain manual clutches",
    "question": "Why should clutch spring free length be measured?",
    "options": [
      "Short springs may not provide enough clamping force",
      "It sets engine displacement",
      "It adjusts coolant pressure",
      "It measures stator output"
    ],
    "answer": 0,
    "explanation": "Springs weaken or shorten with use. Weak springs can allow clutch slip. Measurements must be compared to service limits. --- ### J5. Maintain Automatic Clutches — 2 Questions"
  },
  {
    "id": 66,
    "category": "J5 - Maintain automatic clutches",
    "question": "An automatic clutch engages at too high an rpm. What may be involved?",
    "options": [
      "Spring tension, shoe wear, or contaminated clutch parts",
      "Low radiator pressure only",
      "Loose steering stem bearings only",
      "Dirty battery terminals only"
    ],
    "answer": 0,
    "explanation": "Automatic clutch engagement depends on centrifugal force and springs. Wear or contamination changes engagement behaviour. Components should be inspected to specification."
  },
  {
    "id": 67,
    "category": "J5 - Maintain automatic clutches",
    "question": "Why should an automatic clutch drum be inspected for heat marks?",
    "options": [
      "Heat marks can indicate slipping or poor contact",
      "Heat marks improve friction",
      "They measure coolant temperature",
      "They set fork preload"
    ],
    "answer": 0,
    "explanation": "Excessive heat suggests clutch slip or abuse. Heat can glaze shoes and distort surfaces. Drum and shoe condition affect smooth takeoff. --- ### J6. Maintain Manual Starting Systems — 2 Questions"
  },
  {
    "id": 68,
    "category": "J6 - Maintain manual starting systems",
    "question": "A kickstarter slips suddenly during the stroke. What component area should be inspected?",
    "options": [
      "Ratchet, pawl, gears, and engagement mechanism",
      "Radiator fan relay",
      "Fork bushings",
      "Fuel tank vent"
    ],
    "answer": 0,
    "explanation": "Manual starters use engagement teeth or pawls. Wear can cause slipping under load. Damaged parts can also jam."
  },
  {
    "id": 69,
    "category": "J6 - Maintain manual starting systems",
    "question": "Why should a manual starter mechanism be timed or aligned correctly during assembly?",
    "options": [
      "Incorrect assembly can prevent return or engagement",
      "It controls fuel injection pressure",
      "It changes camshaft lift",
      "It adjusts tire balance"
    ],
    "answer": 0,
    "explanation": "Springs, stops, and gears must align correctly. Wrong assembly can cause binding or no return. Service marks and procedures should be followed. --- ## K. MAINTAIN TRANSMISSIONS — 3 Questions ### K2. Maintain Continuously Variable Transmissions — 3 Questions"
  },
  {
    "id": 70,
    "category": "K2 - Maintain continuously variable transmissions CVT",
    "question": "A CVT belt is below minimum width. What is the likely effect?",
    "options": [
      "Changed ratio range and reduced performance",
      "Stronger compression",
      "Improved charging output",
      "Less tire wear always"
    ],
    "answer": 0,
    "explanation": "Belt width affects how it rides in the pulleys. A worn belt changes effective gear ratio. Replacement is required if below service limit."
  },
  {
    "id": 71,
    "category": "K2 - Maintain continuously variable transmissions CVT",
    "question": "CVT rollers are installed with mixed weights. What can happen?",
    "options": [
      "Uneven variator movement and poor shifting",
      "Better balance automatically",
      "Higher coolant boiling point",
      "Improved steering alignment"
    ],
    "answer": 0,
    "explanation": "Roller weight controls variator shift behaviour. Mixed or incorrect weights can cause vibration and poor ratio change. Rollers should match specifications."
  },
  {
    "id": 72,
    "category": "K2 - Maintain continuously variable transmissions CVT",
    "question": "Why should CVT dust be cleaned carefully instead of blown around?",
    "options": [
      "Dust may be harmful and can contaminate components",
      "Dust improves belt grip",
      "Dust increases roller life",
      "Dust charges the battery"
    ],
    "answer": 0,
    "explanation": "CVT wear creates dust inside the case. Blowing it around can create exposure and contamination. Safe cleaning methods should be used. --- ## M. MAINTAIN ELECTRICAL SYSTEMS — 16 Questions ### M4. Maintain Wiring Harness Systems — 5 Questions"
  },
  {
    "id": 73,
    "category": "M4 - Maintain wiring harness systems",
    "question": "A wire has continuity when tested still, but fails when the handlebar is turned. What is likely?",
    "options": [
      "Intermittent open from flexing or broken strands",
      "Normal operation",
      "Carburetor flooding",
      "Fork oil aeration"
    ],
    "answer": 0,
    "explanation": "Harness faults can appear only when moved. Broken strands may connect intermittently. Wiggle testing and routing inspection can find the fault."
  },
  {
    "id": 74,
    "category": "M4 - Maintain wiring harness systems",
    "question": "Why is using a larger fuse than specified unsafe?",
    "options": [
      "Wiring may overheat before the fuse blows",
      "It improves circuit protection",
      "It lowers current automatically",
      "It fixes short circuits permanently"
    ],
    "answer": 0,
    "explanation": "Fuses protect wiring from excess current. Oversized fuses allow too much current to flow. The cause of a blown fuse must be repaired."
  },
  {
    "id": 75,
    "category": "M4 - Maintain wiring harness systems",
    "question": "A CAN bus fault affects several systems at once. Why?",
    "options": [
      "Modules share communication over the network",
      "CAN only controls tire pressure",
      "CAN is a mechanical chain system",
      "CAN has no wiring"
    ],
    "answer": 0,
    "explanation": "Controller area network links electronic modules. A network wiring or module fault can affect multiple functions. Diagnosis may require service procedures and scan data."
  },
  {
    "id": 76,
    "category": "M4 - Maintain wiring harness systems",
    "question": "A ground connection has corrosion but still shows continuity. Why may it still be a problem?",
    "options": [
      "It may have high resistance under load",
      "Continuity proves it is perfect",
      "Corrosion improves current flow",
      "Grounds only matter when engine is off"
    ],
    "answer": 0,
    "explanation": "Continuity tests use very low current. A poor ground may fail when real current flows. Voltage drop testing is often better."
  },
  {
    "id": 77,
    "category": "M4 - Maintain wiring harness systems",
    "question": "What is the best repair for a damaged harness wire in a high-vibration area?",
    "options": [
      "Proper splice, insulation, strain relief, and routing",
      "Twist wires together and leave bare",
      "Wrap with masking tape only",
      "Use a larger fuse"
    ],
    "answer": 0,
    "explanation": "Motorcycle harnesses face vibration, heat, and moisture. Repairs must be mechanically and electrically sound. Poor repairs cause intermittent faults. --- ### M6. Maintain Electric Starting Systems — 6 Questions"
  },
  {
    "id": 78,
    "category": "M6 - Maintain electric starting systems",
    "question": "The starter relay clicks rapidly. What is a common cause?",
    "options": [
      "Low battery voltage or poor battery connections",
      "Excessive fork oil",
      "High compression always",
      "Rich pilot jet only"
    ],
    "answer": 0,
    "explanation": "Rapid clicking often occurs when voltage collapses under load. A weak battery or poor connection can cause this. Battery and cable tests should be performed."
  },
  {
    "id": 79,
    "category": "M6 - Maintain electric starting systems",
    "question": "A starter motor draws very high current and turns slowly. What could this indicate?",
    "options": [
      "Internal starter fault or engine mechanical drag",
      "Perfect starter operation",
      "Low tire pressure only",
      "Clogged air filter only"
    ],
    "answer": 0,
    "explanation": "High current with slow rotation suggests heavy load. The starter may be shorted or the engine may be hard to turn. Mechanical and electrical checks are needed."
  },
  {
    "id": 80,
    "category": "M6 - Maintain electric starting systems",
    "question": "The starter button has power in but no power out when pressed. What is likely?",
    "options": [
      "Faulty starter switch or switch contact",
      "Failed fork seal",
      "Incorrect coolant type",
      "Worn rear shock spring"
    ],
    "answer": 0,
    "explanation": "A switch should pass voltage when operated. No output with input present indicates switch or contact fault. The circuit should be tested safely."
  },
  {
    "id": 81,
    "category": "M6 - Maintain electric starting systems",
    "question": "Why should starter current draw be compared to specifications?",
    "options": [
      "Too high or too low current helps identify faults",
      "Current draw sets cam timing",
      "Current draw controls fuel octane",
      "All starters draw identical current"
    ],
    "answer": 0,
    "explanation": "Current draw shows starter load and condition. High draw may mean drag or internal fault. Low draw may indicate poor connection or open circuit."
  },
  {
    "id": 82,
    "category": "M6 - Maintain electric starting systems",
    "question": "A neutral light works, but the motorcycle will not crank unless the clutch is pulled. What does this suggest?",
    "options": [
      "Starting interlock logic may require clutch input or has a fault",
      "Cooling system is overfilled",
      "Primary chain is too tight",
      "Exhaust valve is leaking"
    ],
    "answer": 0,
    "explanation": "Starting circuits often use interlock switches. Neutral, clutch, side stand, and brake switches may interact. The wiring diagram should be used."
  },
  {
    "id": 83,
    "category": "M6 - Maintain electric starting systems",
    "question": "Why must battery terminals be tightened before starter diagnosis?",
    "options": [
      "Loose terminals can mimic starter or relay failure",
      "Loose terminals increase compression",
      "Terminals adjust spark plug heat range",
      "Terminals control fork rebound"
    ],
    "answer": 0,
    "explanation": "Starting systems require high current. Loose terminals create voltage drop and heat. Basic connection checks come before deeper diagnosis. --- ### M7. Maintain Charging Systems — 5 Questions"
  },
  {
    "id": 84,
    "category": "M7 - Maintain charging systems",
    "question": "A stator produces low VAC on one phase compared with the others. What may be wrong?",
    "options": [
      "Stator winding fault",
      "Clutch basket notch only",
      "Fork seal leak only",
      "Dirty air filter only"
    ],
    "answer": 0,
    "explanation": "Three-phase stators should have balanced outputs. Low output on one phase suggests winding damage. Resistance and short-to-ground tests may confirm it."
  },
  {
    "id": 85,
    "category": "M7 - Maintain charging systems",
    "question": "Charging voltage is too high at the battery. Which component is most suspect?",
    "options": [
      "Regulator function or sensing circuit",
      "Piston rings",
      "Rear shock spring",
      "CVT belt width"
    ],
    "answer": 0,
    "explanation": "The regulator controls system voltage. Overcharging can damage the battery and electronics. Wiring and grounds must also be checked."
  },
  {
    "id": 86,
    "category": "M7 - Maintain charging systems",
    "question": "Why should stator wires be checked for shorts to ground?",
    "options": [
      "A grounded winding can reduce or stop charging output",
      "Ground shorts increase charging safely",
      "Ground tests adjust clutch free play",
      "Stator wires control steering alignment"
    ],
    "answer": 0,
    "explanation": "Stator windings should be electrically isolated from ground unless specified. A short to ground allows current to escape. This can cause low or no charging."
  },
  {
    "id": 87,
    "category": "M7 - Maintain charging systems",
    "question": "What does VDC mean on a multimeter?",
    "options": [
      "Volts direct current",
      "Variable drive chain",
      "Valve duration check",
      "Vacuum diaphragm control"
    ],
    "answer": 0,
    "explanation": "VDC is direct current voltage. Battery and charging voltage at the battery are measured in VDC. VAC is used for alternating current checks."
  },
  {
    "id": 88,
    "category": "M7 - Maintain charging systems",
    "question": "A charging connector is melted. What should be investigated?",
    "options": [
      "High resistance, loose terminals, or excessive current heating",
      "Correct tire pressure",
      "Smooth fork tubes",
      "Carburetor synchronization"
    ],
    "answer": 0,
    "explanation": "Heat at connectors often comes from resistance. Loose or corroded terminals create voltage drop and heat. The connector and wiring must be repaired properly. --- ## O. MAINTAIN FUEL AND EXHAUST SYSTEMS — 12 Questions ### O1. Maintain Fuel Tanks and Fuel Delivery Components — 4 Questions"
  },
  {
    "id": 89,
    "category": "O1 - Maintain fuel tanks and fuel delivery components",
    "question": "A motorcycle runs for five minutes, stalls, then restarts after the fuel cap is opened. What is likely?",
    "options": [
      "Blocked tank vent",
      "Overfilled fork oil",
      "Tight steering bearing",
      "Weak clutch spring"
    ],
    "answer": 0,
    "explanation": "A blocked vent can create vacuum in the tank. Opening the cap temporarily relieves the vacuum. Fuel flow should be tested with venting considered."
  },
  {
    "id": 90,
    "category": "O1 - Maintain fuel tanks and fuel delivery components",
    "question": "Fuel pressure is correct at idle but drops under load. What should be checked?",
    "options": [
      "Pump volume, filter restriction, electrical supply, and regulator operation",
      "Steering head bearing grease only",
      "Rear shock preload only",
      "Exhaust bracket torque only"
    ],
    "answer": 0,
    "explanation": "Idle pressure alone may not prove fuel delivery capacity. High demand can reveal restrictions or weak pump output. Fuel system diagnosis should include pressure and flow."
  },
  {
    "id": 91,
    "category": "O1 - Maintain fuel tanks and fuel delivery components",
    "question": "Why should old fuel be considered during driveability diagnosis?",
    "options": [
      "Degraded fuel can cause poor starting, varnish, and deposits",
      "Old fuel increases octane forever",
      "Fuel age only changes colour",
      "Old fuel improves injector spray pattern"
    ],
    "answer": 0,
    "explanation": "Fuel can oxidize and form gum or varnish. This can clog injectors, jets, or filters. Fresh fuel may be needed for accurate diagnosis."
  },
  {
    "id": 92,
    "category": "O1 - Maintain fuel tanks and fuel delivery components",
    "question": "A fuel hose is routed tightly against a cylinder head. What is the hazard?",
    "options": [
      "Heat damage, vapour lock, or fuel leak risk",
      "Better fuel cooling",
      "Stronger hose material",
      "Lower fire risk"
    ],
    "answer": 0,
    "explanation": "Fuel hoses must be protected from heat. Heat can harden hoses and increase vapour formation. Routing and clamps must follow safe practice. --- ### O2. Maintain Air Delivery Systems — 2 Questions"
  },
  {
    "id": 93,
    "category": "O2 - Maintain air delivery systems",
    "question": "An engine idles high after intake boot replacement. What should be checked?",
    "options": [
      "Intake air leak or throttle cable routing",
      "Radiator fan relay only",
      "Rear sprocket wear only",
      "Stator output only"
    ],
    "answer": 0,
    "explanation": "Unmetered air can raise idle speed. Throttle cable binding can also hold the throttle open. Air delivery and control movement should be inspected."
  },
  {
    "id": 94,
    "category": "O2 - Maintain air delivery systems",
    "question": "Why should an air filter be oiled only as specified?",
    "options": [
      "Too much oil can restrict airflow or contaminate sensors",
      "More oil always improves airflow",
      "Air filters do not affect mixture",
      "Oil changes valve clearance"
    ],
    "answer": 0,
    "explanation": "Foam filters often need oil, but the amount matters. Excess oil can restrict air or affect sensors. Follow the filter service procedure. --- ### O3. Maintain Carburetor Systems — 5 Questions"
  },
  {
    "id": 95,
    "category": "O3 - Maintain carburetor systems",
    "question": "A carbureted engine idles only with the choke on. What is likely?",
    "options": [
      "Lean pilot circuit or air leak",
      "Overcharging system",
      "Excess fork preload",
      "Clutch spring failure only"
    ],
    "answer": 0,
    "explanation": "The choke enriches the mixture. If it runs only with choke, the normal idle circuit may be too lean. Pilot jet, passages, and intake leaks should be checked."
  },
  {
    "id": 96,
    "category": "O3 - Maintain carburetor systems",
    "question": "Why should brass carburetor jets not be cleaned with hard steel wire?",
    "options": [
      "Jet orifices can be enlarged or damaged",
      "Steel wire improves calibration",
      "Jets are designed to be scraped larger",
      "Jet size does not affect mixture"
    ],
    "answer": 0,
    "explanation": "Jets are precisely sized. Damage changes fuel flow and mixture. Use proper carburetor cleaning methods."
  },
  {
    "id": 97,
    "category": "O3 - Maintain carburetor systems",
    "question": "A float needle tip has a wear ring. What can this cause?",
    "options": [
      "Poor sealing and fuel overflow",
      "Higher charging voltage",
      "Stronger clutch engagement",
      "Better fork damping"
    ],
    "answer": 0,
    "explanation": "The float needle controls fuel entry. A worn tip may not seal fully. This can flood the carburetor."
  },
  {
    "id": 98,
    "category": "O3 - Maintain carburetor systems",
    "question": "After carburetor synchronization, idle smoothness improves. Why?",
    "options": [
      "Cylinders now draw more equal airflow at idle",
      "Battery cells are balanced",
      "Fork tubes are aligned",
      "Coolant is mixed evenly"
    ],
    "answer": 0,
    "explanation": "Synchronization balances throttle opening or vacuum. Unequal airflow causes rough idle and vibration. Multi-cylinder engines benefit from correct balance."
  },
  {
    "id": 99,
    "category": "O3 - Maintain carburetor systems",
    "question": "A main jet restriction is most likely to show during:",
    "options": [
      "High throttle or high-load operation",
      "Key-off storage only",
      "Front braking only",
      "Steering adjustment only"
    ],
    "answer": 0,
    "explanation": "Main jets control fuel at larger throttle openings. Restriction can cause lean high-speed operation. Symptoms may not appear at idle. --- ### O4. Maintain Exhaust Systems — 1 Question"
  },
  {
    "id": 100,
    "category": "O4 - Maintain exhaust systems",
    "question": "A customer installed an aftermarket exhaust and now the engine pops on deceleration. What should be checked?",
    "options": [
      "Exhaust leaks and fuel/air calibration requirements",
      "Rear shock preload only",
      "Steering bearing torque only",
      "CVT belt width only"
    ],
    "answer": 0,
    "explanation": "Exhaust leaks can draw air and cause popping. Aftermarket exhausts can change mixture needs. System fitment and calibration should be verified."
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

const shuffledMotorcycleTechnicianLevel2Set2Questions =
  shuffleArray(motorcycleTechnicianLevel2Set2Questions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "motorcycle-technician",
  tradeTitle: "Motorcycle Technician",
  sectionTitle: "Level 2 – Set 2",
  questionTimeSeconds: 90,
  questions: shuffledMotorcycleTechnicianLevel2Set2Questions
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
    return shuffledMotorcycleTechnicianLevel2Set2Questions.find(q => q.question === questionText);
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
