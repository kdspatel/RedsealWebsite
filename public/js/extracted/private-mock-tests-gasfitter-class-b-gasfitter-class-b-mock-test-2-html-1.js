const gasfitterClassBIPQuestions = [
  {
    "id": 1,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame rod proves flame for several seconds, then the burner shuts off. The flame is stable and blue. What should be checked first?",
    "options": [
      "Flame signal microamps and grounding",
      "Heat exchanger size",
      "Gas pipe colour",
      "Blower wheel diameter"
    ],
    "answer": 0,
    "explanation": "Flame appearance alone does not prove flame signal. Flame rectification depends on microamp current and ground path. Weak signal can shut the burner off even with visible flame."
  },
  {
    "id": 2,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A spark ignition cable is routed tightly against a metal cabinet edge. What is the most serious concern?",
    "options": [
      "Spark may short to ground",
      "Gas pressure will increase",
      "Thermostat will overheat",
      "Burner input will double"
    ],
    "answer": 0,
    "explanation": "Ignition cables carry high voltage. Damaged insulation can allow spark to leak to ground. This can cause ignition failure or intermittent lockout."
  },
  {
    "id": 3,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A replacement ignition control has the same voltage rating but different trial-for-ignition timing. What is correct?",
    "options": [
      "Use only if approved for the appliance",
      "Use if the connector fits",
      "Use if it sparks strongly",
      "Use if it is cheaper"
    ],
    "answer": 0,
    "explanation": "Trial-for-ignition timing controls gas release duration. Incorrect timing can create unsafe gas accumulation. Approved replacement controls must match the certified sequence."
  },
  {
    "id": 4,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A UV scanner is installed where furnace refractory glows brightly after shutdown. What fault may occur?",
    "options": [
      "False flame signal",
      "Low water pressure",
      "Reduced blower speed",
      "Low thermostat voltage"
    ],
    "answer": 0,
    "explanation": "Flame detectors must detect actual flame only. Hot refractory or stray radiation may confuse some systems. Scanner location and sighting must be correct."
  },
  {
    "id": 5,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A hot surface igniter glows but the gas valve does not energize. The control shows no flame trial output. What should be checked?",
    "options": [
      "Safety circuit and ignition control sequence",
      "Flue pipe colour",
      "Condensate pipe size only",
      "Gas meter dial size only"
    ],
    "answer": 0,
    "explanation": "The gas valve energizes only after required safeties prove. The ignition control must complete its sequence correctly. A missing output may be due to open safeties or failed control."
  },
  {
    "id": 6,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A flame rod is replaced with one that is longer and touches burner metal. What will likely happen?",
    "options": [
      "Flame sensing may fail due to grounding",
      "Gas pressure will stabilize",
      "Combustion air will increase",
      "Heat exchanger temperature will drop"
    ],
    "answer": 0,
    "explanation": "A flame rod must be insulated from ground except through flame. Direct metal contact can short the sensing circuit. Incorrect sensor length or position can cause lockout."
  },
  {
    "id": 7,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "An ignition module repeatedly locks out after a power interruption. What must be verified before replacement?",
    "options": [
      "Supply voltage, ground, safeties, and fault code history",
      "Pipe support spacing only",
      "Air filter colour only",
      "Building address only"
    ],
    "answer": 0,
    "explanation": "Electronic controls can lock out due to external faults. Power quality, grounding, and safeties must be checked first. Replacing parts without diagnosis may not correct the issue."
  },
  {
    "id": 8,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A direct spark ignition system sparks at the wrong burner location. What is the concern?",
    "options": [
      "Gas may not ignite reliably at the burner ports",
      "Pipe sizing becomes unnecessary",
      "The blower motor will reverse",
      "The regulator becomes automatic"
    ],
    "answer": 0,
    "explanation": "Spark location must match the gas-air mixture path. Poor spark position can cause delayed ignition. Delayed ignition may create rollout or equipment damage."
  },
  {
    "id": 9,
    "category": "Block D / Task 10 — Electronic Components",
    "question": "A control board fuse blows immediately after a thermostat call. What is the best next action?",
    "options": [
      "Search for a shorted low-voltage load or wiring fault",
      "Install a larger fuse",
      "Bypass the board fuse",
      "Increase gas pressure"
    ],
    "answer": 0,
    "explanation": "A fuse protects the control circuit from excess current. Immediate failure usually indicates a short or overloaded circuit. Installing a larger fuse can damage wiring or the board."
  },
  {
    "id": 10,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 24 V transformer supplies loads of 0.6 A, 0.3 A, 0.4 A, and 0.2 A. What VA is required?",
    "options": [
      "24 VA",
      "30 VA",
      "36 VA",
      "48 VA"
    ],
    "answer": 2,
    "explanation": "Total current is 1.5 A. VA = 24 × 1.5 = 36 VA. The transformer must be rated for at least the connected load."
  },
  {
    "id": 11,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A blower motor replacement has correct voltage but lower amperage rating than the original. What must be confirmed?",
    "options": [
      "It can handle the actual motor load",
      "It has the same paint colour",
      "It fits loosely in the bracket",
      "It reduces gas input"
    ],
    "answer": 0,
    "explanation": "Motor ratings must match the driven load. A lower-rated motor may overheat or fail. Nameplate data and application requirements must be followed."
  },
  {
    "id": 12,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A relay coil rated 24 V chatters during operation. Voltage at the coil is 18 V. What is likely?",
    "options": [
      "Low control voltage problem",
      "High manifold pressure",
      "Blocked burner port",
      "Oversized chimney"
    ],
    "answer": 0,
    "explanation": "A relay coil needs adequate voltage to stay pulled in. Low voltage can cause chatter and contact damage. Transformer capacity, wiring, and loads must be checked."
  },
  {
    "id": 13,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A capacitor is replaced with a higher microfarad rating than specified. What can result?",
    "options": [
      "Motor overheating or incorrect operation",
      "Lower gas pressure",
      "Higher flame signal",
      "Better vent draft"
    ],
    "answer": 0,
    "explanation": "Capacitor value affects motor phase shift and torque. Incorrect capacitance can overheat windings. Replacement must match manufacturer rating."
  },
  {
    "id": 14,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A motor overload trips only after 10 minutes of operation. What does this suggest?",
    "options": [
      "Sustained overload or overheating condition",
      "Immediate short circuit only",
      "Correct normal operation",
      "Gas regulator lockup"
    ],
    "answer": 0,
    "explanation": "Time-delay overloads respond to heat over time. Mechanical drag, low voltage, or airflow issues may be involved. Repeated resets without diagnosis can damage the motor."
  },
  {
    "id": 15,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A switch rated for pilot duty is used to start a large motor directly. Why is this wrong?",
    "options": [
      "Contacts may not handle motor inrush current",
      "Pilot duty means higher motor capacity",
      "It improves motor starting torque",
      "It reduces electrical arcing"
    ],
    "answer": 0,
    "explanation": "Motor loads draw high starting current. Pilot-duty contacts are for control circuits, not large loads. Incorrect contact rating can cause welding or failure."
  },
  {
    "id": 16,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A gas valve coil measures open circuit with wires removed. What does that indicate?",
    "options": [
      "Failed coil winding",
      "Correct coil resistance",
      "Low gas pressure",
      "Dirty air filter"
    ],
    "answer": 0,
    "explanation": "An open coil has no complete electrical path. A good coil should show manufacturer-specified resistance. Voltage alone will not open a failed coil."
  },
  {
    "id": 17,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A disconnect is installed on the far side of a locked room from the appliance. What is the concern?",
    "options": [
      "It may not be readily accessible for service",
      "It will increase voltage",
      "It will lower gas pressure",
      "It improves lockout automatically"
    ],
    "answer": 0,
    "explanation": "Service isolation must be practical and accessible. A hidden or locked disconnect delays safe shutdown. Electrical safety depends on reliable isolation."
  },
  {
    "id": 18,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A wire terminal is discoloured and brittle. What is the likely cause?",
    "options": [
      "Heat from loose connection or overload",
      "Too much combustion air",
      "Low gas odour",
      "Proper normal operation"
    ],
    "answer": 0,
    "explanation": "Heat damage often comes from high resistance. Loose terminals can arc and overheat. The connection and load must be corrected."
  },
  {
    "id": 19,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A furnace motor is replaced with one having correct horsepower but wrong frame size. What is the issue?",
    "options": [
      "Mounting and alignment may be unsafe or incorrect",
      "Gas pressure will improve",
      "Flame signal will increase",
      "Venting becomes unnecessary"
    ],
    "answer": 0,
    "explanation": "Motor frame affects mounting and shaft alignment. Poor alignment can overload bearings or belts. Replacement must match mechanical and electrical requirements."
  },
  {
    "id": 20,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A 120 V igniter is accidentally connected to 240 V. What is expected?",
    "options": [
      "Igniter failure from overvoltage",
      "Better ignition reliability",
      "Lower current draw always",
      "Reduced flame temperature"
    ],
    "answer": 0,
    "explanation": "Components must be connected to rated voltage. Overvoltage can burn out resistance elements quickly. Electrical ratings must be verified before energizing."
  },
  {
    "id": 21,
    "category": "Block D / Task 11 — Electrical Components",
    "question": "A conductor is too small for the load current. What hazard exists?",
    "options": [
      "Overheating and insulation damage",
      "Lower combustion air",
      "Higher gas density",
      "Improved grounding"
    ],
    "answer": 0,
    "explanation": "Undersized conductors create excessive heat. Heat can damage insulation and start fires. Wire size must match current and protection."
  },
  {
    "id": 22,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A 4–20 mA actuator stays at minimum position. The controller output is measured at 4 mA. What does this mean?",
    "options": [
      "Controller is commanding minimum output",
      "Actuator must be fully open",
      "Gas pressure is too high",
      "Flame scanner is dirty"
    ],
    "answer": 0,
    "explanation": "In a 4–20 mA loop, 4 mA usually represents minimum signal. The actuator may be responding correctly to the command. Controller setpoint and output logic must be checked."
  },
  {
    "id": 23,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A sensor wire is run in the same conduit as high-voltage motor leads. What problem can occur?",
    "options": [
      "Electrical noise or signal interference",
      "Higher gas pressure",
      "Cleaner combustion air",
      "Better regulator venting"
    ],
    "answer": 0,
    "explanation": "Low-level sensor signals can be affected by electrical noise. Motor leads can induce interference. Control wiring should follow separation and shielding requirements."
  },
  {
    "id": 24,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A pressure transducer is installed below a condensate point without protection. What can happen?",
    "options": [
      "Condensate can damage or misread the sensor",
      "Gas pressure will double safely",
      "Burner input will reduce to zero",
      "Flame signal improves"
    ],
    "answer": 0,
    "explanation": "Sensors must be installed for the measured medium and conditions. Condensate can block ports or damage electronics. Impulse lines and mounting orientation matter."
  },
  {
    "id": 25,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A room sensor is mounted on an exterior wall near a door. What is the likely problem?",
    "options": [
      "False readings from drafts or cold surface temperature",
      "Higher gas input",
      "Increased flame current",
      "Better boiler efficiency automatically"
    ],
    "answer": 0,
    "explanation": "Sensor placement affects control accuracy. Exterior walls and drafts may not represent room conditions. Poor location can cause short cycling or comfort complaints."
  },
  {
    "id": 26,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A building automation controller starts a burner without proving airflow. What safety issue exists?",
    "options": [
      "Sequence does not confirm required combustion air condition",
      "Burner input will always be correct",
      "Venting becomes unnecessary",
      "Gas pressure cannot drop"
    ],
    "answer": 0,
    "explanation": "Burner automation must include safety interlocks. Airflow or draft must be proven before fuel is released. Control logic must not bypass safety requirements."
  },
  {
    "id": 27,
    "category": "Block D / Task 12 — Automation and Instrumentation",
    "question": "A temperature controller is set for Celsius but the technician enters Fahrenheit values. What can result?",
    "options": [
      "Incorrect setpoint and unsafe process temperature",
      "Correct temperature control automatically",
      "Better flame stability",
      "Lower gas pressure drop"
    ],
    "answer": 0,
    "explanation": "Unit errors can create major control mistakes. A wrong setpoint may overheat or underheat equipment. Instrumentation setup must be verified carefully."
  },
  {
    "id": 28,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A pipe joint is assembled with damaged threads. What is the main risk?",
    "options": [
      "Leakage or poor mechanical engagement",
      "Higher flame signal",
      "Lower combustion air",
      "Better regulator accuracy"
    ],
    "answer": 0,
    "explanation": "Threaded gas joints depend on proper engagement. Damaged threads may not seal or hold correctly. Damaged pipe or fittings should not be used."
  },
  {
    "id": 29,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas pipe is installed tight through wood framing without protection. What concern exists?",
    "options": [
      "Movement and abrasion can damage piping",
      "Gas pressure will increase",
      "Wood will seal any leak",
      "Pipe support is no longer needed"
    ],
    "answer": 0,
    "explanation": "Piping can move from expansion or vibration. Contact with framing can abrade or stress the pipe. Protection or sleeves may be required."
  },
  {
    "id": 30,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas connector is sharply bent behind a range. What can happen?",
    "options": [
      "Connector damage or restricted gas flow",
      "Higher certified input",
      "Better burner stability",
      "Lower flame temperature always"
    ],
    "answer": 0,
    "explanation": "Flexible connectors have bend limits. Sharp bends can crack, kink, or restrict flow. Manufacturer instructions must be followed."
  },
  {
    "id": 31,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas line is installed where forklift traffic may strike it. What is required?",
    "options": [
      "Mechanical protection from damage",
      "Smaller pipe diameter",
      "Higher manifold pressure",
      "No shutoff valve"
    ],
    "answer": 0,
    "explanation": "Gas piping must be protected from impact. Vehicle damage can cause major gas release. Barriers or rerouting may be required."
  },
  {
    "id": 32,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A flare fitting leaks after tightening. What is the best action?",
    "options": [
      "Disassemble and inspect/remake the flare",
      "Tighten until the nut cracks",
      "Add pipe dope to the flare face",
      "Heat the nut with a torch"
    ],
    "answer": 0,
    "explanation": "Flare faces must be smooth and properly formed. Sealant is not used on the flare seat. A damaged flare must be corrected."
  },
  {
    "id": 33,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas pipe is supported with wire wrapped around it. Why is this improper?",
    "options": [
      "It may not provide approved stable support",
      "Wire increases pipe capacity",
      "It improves electrical grounding automatically",
      "It replaces leak testing"
    ],
    "answer": 0,
    "explanation": "Gas piping needs proper hangers or supports. Improvised supports may loosen or damage piping. Support methods must meet code and good practice."
  },
  {
    "id": 34,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A union is installed inside a concealed wall cavity. What is the concern?",
    "options": [
      "Concealed joints may be inaccessible for inspection and repair",
      "It reduces all leak risk",
      "It improves pressure regulation",
      "It increases combustion efficiency"
    ],
    "answer": 0,
    "explanation": "Joints requiring service must remain accessible where required. Concealed joints can leak unnoticed. Gas piping layout must consider inspection and maintenance."
  },
  {
    "id": 35,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A pipe wrench is used directly on a gas valve body. What can result?",
    "options": [
      "Valve distortion or cracking",
      "Better valve seating",
      "Lower CO production",
      "Higher flame current"
    ],
    "answer": 0,
    "explanation": "Gas valve bodies can be damaged by improper gripping. Use wrench flats and backup wrenches where provided. Component damage can cause leakage or malfunction."
  },
  {
    "id": 36,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas appliance is installed without service clearance. What is the problem?",
    "options": [
      "Safe inspection and maintenance may be impossible",
      "Gas pressure will become excessive",
      "Appliance input will reduce automatically",
      "Venting no longer matters"
    ],
    "answer": 0,
    "explanation": "Appliances require access for service and inspection. Lack of clearance can prevent safe repair. Manufacturer and code clearance requirements must be followed."
  },
  {
    "id": 37,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A drip leg is installed where it cannot be accessed. What is the issue?",
    "options": [
      "It cannot be inspected or cleaned if needed",
      "It will collect more debris safely",
      "It increases burner input",
      "It replaces the gas regulator"
    ],
    "answer": 0,
    "explanation": "Sediment collection points must be serviceable. Debris and condensate may need removal. Inaccessible components reduce maintenance safety."
  },
  {
    "id": 38,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A steel gas pipe is buried without approved coating or protection. What is the major risk?",
    "options": [
      "Corrosion and leakage",
      "Higher gas heating value",
      "Better grounding",
      "Automatic pressure reduction"
    ],
    "answer": 0,
    "explanation": "Underground steel pipe requires corrosion protection. Soil moisture can corrode unprotected metal. Corrosion can eventually cause gas leaks."
  },
  {
    "id": 39,
    "category": "Block E / Task 13 — Gas-Fired System Piping and Equipment",
    "question": "A gas pipe is used as a support for electrical conduit. What is wrong?",
    "options": [
      "Gas piping must not support unrelated loads",
      "It improves bonding automatically",
      "It reduces pipe friction",
      "It increases regulator capacity"
    ],
    "answer": 0,
    "explanation": "Extra loads can stress gas piping and joints. Gas piping is not structural support. Independent supports must be used."
  },
  {
    "id": 40,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A regulator is installed with no vent protection outdoors. What can block it?",
    "options": [
      "Ice, snow, insects, or debris",
      "Gas heating value",
      "Flame current",
      "Thermostat voltage"
    ],
    "answer": 0,
    "explanation": "Regulator vents must breathe freely. Blockage can prevent correct diaphragm movement or relief. Outdoor installations need proper vent protection."
  },
  {
    "id": 41,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A gas valve is installed against its flow arrow. What is the concern?",
    "options": [
      "Internal valve operation may fail or leak",
      "Flame will always improve",
      "Pressure drop becomes zero",
      "Electrical current increases safely"
    ],
    "answer": 0,
    "explanation": "Many gas valves are directional. Reverse installation can prevent proper closing or opening. Flow arrows must be followed."
  },
  {
    "id": 42,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A pressure switch tube is too long and kinked. What may happen?",
    "options": [
      "Delayed or false pressure proving",
      "Higher flame temperature",
      "Better regulator lockup",
      "Lower gas consumption always"
    ],
    "answer": 0,
    "explanation": "Tubing must transmit pressure accurately. Kinks restrict or delay the pressure signal. Incorrect proving can cause lockout or unsafe operation."
  },
  {
    "id": 43,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A manual shutoff valve handle is removed after installation. Why is this unsafe?",
    "options": [
      "Valve cannot be operated quickly",
      "It prevents leaks permanently",
      "It lowers pressure drop",
      "It improves appliance input"
    ],
    "answer": 0,
    "explanation": "Shutoff valves must be operable. A missing handle delays emergency isolation. Service and safety require accessible valve operation."
  },
  {
    "id": 44,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A regulator outlet pressure is adjusted without a manometer. What is the issue?",
    "options": [
      "Pressure cannot be verified accurately",
      "Flame colour is enough proof",
      "Outlet pressure does not matter",
      "Regulator adjustment is always visual"
    ],
    "answer": 0,
    "explanation": "Gas pressure must be measured with proper instruments. Visual flame appearance cannot confirm pressure. Incorrect pressure can cause unsafe combustion."
  },
  {
    "id": 45,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A valve train is installed with no support and hangs from appliance controls. What can happen?",
    "options": [
      "Mechanical strain and gas leakage",
      "Better pressure stability",
      "Higher flame signal",
      "Lower electrical load"
    ],
    "answer": 0,
    "explanation": "Valve train components can be heavy. Unsupported weight stresses threaded joints and control bodies. Piping and components must be properly supported."
  },
  {
    "id": 46,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A safety shutoff valve is replaced with a manual valve. What is the hazard?",
    "options": [
      "Automatic fuel shutdown function is lost",
      "Manual valves improve flame safeguard",
      "Gas pressure becomes more stable",
      "Combustion air increases"
    ],
    "answer": 0,
    "explanation": "Automatic safety valves close during faults or power loss. Manual valves cannot perform this safety sequence. Replacement components must match function and approval."
  },
  {
    "id": 47,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A regulator vent line slopes back toward the regulator outdoors. What can collect?",
    "options": [
      "Water or condensate",
      "Flame signal",
      "Electrical current",
      "Combustion air"
    ],
    "answer": 0,
    "explanation": "Vent piping must prevent water entry or trapping. Water can freeze or block regulator breathing. Vent routing must follow manufacturer and code requirements."
  },
  {
    "id": 48,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A gas pressure switch is installed downstream of the wrong regulator. What is the risk?",
    "options": [
      "It may monitor the wrong pressure zone",
      "It will improve safety automatically",
      "It eliminates need for regulator vents",
      "It increases gas capacity"
    ],
    "answer": 0,
    "explanation": "Pressure switches must monitor the intended point. Wrong location can fail to detect unsafe pressure. Control function depends on correct sensing location."
  },
  {
    "id": 49,
    "category": "Block E / Task 14 — Gas-Fired System Components",
    "question": "A sediment trap is installed after the burner orifice. Why is that incorrect?",
    "options": [
      "It does not protect upstream controls or orifices",
      "It increases flame stability",
      "It lowers electrical current",
      "It replaces combustion testing"
    ],
    "answer": 0,
    "explanation": "Sediment traps protect sensitive downstream components. They must be located before controls or appliance inlets as required. Incorrect placement defeats their purpose."
  },
  {
    "id": 50,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "A propane cylinder is stored inside a service van overnight. What is the concern?",
    "options": [
      "Vapour release can accumulate in the vehicle",
      "Propane becomes non-flammable indoors",
      "Cylinder pressure becomes zero",
      "Odorant disappears safely"
    ],
    "answer": 0,
    "explanation": "Propane vapour is heavier than air. A leak inside a vehicle can accumulate and ignite. Cylinder storage and transport must follow safety rules."
  },
  {
    "id": 51,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "A propane container is installed too close to a building opening. What is the danger?",
    "options": [
      "Escaping propane may enter the building",
      "Propane pressure will always drop",
      "Regulator capacity improves",
      "Relief valves stop working permanently"
    ],
    "answer": 0,
    "explanation": "Propane must be located away from openings and ignition sources. Released vapour can enter buildings and collect. Clearance requirements reduce explosion risk."
  },
  {
    "id": 52,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "A propane regulator vent is pointed downward but buried in mulch. What is the problem?",
    "options": [
      "Vent can be blocked by debris or moisture",
      "Outlet pressure becomes perfect",
      "Propane changes density",
      "Combustion air increases"
    ],
    "answer": 0,
    "explanation": "Regulator vents must remain open and protected. Mulch, dirt, insects, or water can block the vent. Blocked vents can create unsafe pressure."
  },
  {
    "id": 53,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "Why must propane cylinders be kept upright when designed for vapour service?",
    "options": [
      "To prevent liquid propane entering vapour equipment",
      "To increase cylinder capacity",
      "To make propane lighter than air",
      "To reduce odorant concentration"
    ],
    "answer": 0,
    "explanation": "Vapour-service equipment is not designed for liquid propane. Liquid carryover can damage regulators or create overfiring. Cylinder orientation is a critical safety requirement."
  },
  {
    "id": 54,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "A propane container relief valve discharges near an ignition source. What is the major hazard?",
    "options": [
      "Fire or explosion",
      "Lower flame temperature",
      "Reduced vapour pressure",
      "Better regulator operation"
    ],
    "answer": 0,
    "explanation": "Relief discharge may release flammable propane vapour. Ignition sources can ignite the vapour cloud. Relief discharge must be directed to safe areas."
  },
  {
    "id": 55,
    "category": "Block E / Task 15 — Propane Storage and Handling Systems",
    "question": "A propane line outdoors has no protection where snow sliding from a roof can strike it. What is required?",
    "options": [
      "Protection from physical damage",
      "Smaller regulator vent",
      "Higher gas pressure",
      "Indoor cylinder storage"
    ],
    "answer": 0,
    "explanation": "Falling snow or ice can damage propane piping. Physical damage can cause leaks or regulator failure. Outdoor propane systems need proper placement and protection."
  },
  {
    "id": 56,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A pressure test holds for 5 minutes but the required test period is longer. What is correct?",
    "options": [
      "Continue test for the full required duration",
      "Approve because 5 minutes held",
      "Lower the pressure and approve",
      "Use gas odour as confirmation"
    ],
    "answer": 0,
    "explanation": "Pressure tests must meet specified pressure and time. A shorter test does not prove compliance. The full procedure must be completed and documented."
  },
  {
    "id": 57,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A leak solution bubbles slowly at a fitting. What does this mean?",
    "options": [
      "A leak is present",
      "The joint is safe if bubbles are small",
      "The solution is cleaning the fitting",
      "Pressure is too low to matter"
    ],
    "answer": 0,
    "explanation": "Bubbles indicate gas escaping from the joint. Any leak must be repaired and retested. Small leaks can still create dangerous conditions."
  },
  {
    "id": 58,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A meter has a 1 ft³ dial. One revolution takes 45 seconds. Pressure factor is 1.0. What is flow?",
    "options": [
      "60 ft³/hr",
      "80 ft³/hr",
      "100 ft³/hr",
      "120 ft³/hr"
    ],
    "answer": 1,
    "explanation": "Flow = dial size ÷ seconds × 3600 × pressure factor. 1 ÷ 45 × 3600 = 80 ft³/hr. Meter clocking verifies input rate."
  },
  {
    "id": 59,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A 2 ft³ dial rotates in 90 seconds. Pressure factor is 1.2. What is corrected flow?",
    "options": [
      "80 ft³/hr",
      "96 ft³/hr",
      "120 ft³/hr",
      "144 ft³/hr"
    ],
    "answer": 1,
    "explanation": "2 ÷ 90 × 3600 = 80 ft³/hr. 80 × 1.2 = 96 ft³/hr. Pressure factor adjusts measured gas volume."
  },
  {
    "id": 60,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A furnace output is 60,000 Btuh and temperature rise is 50°F. What airflow is required?",
    "options": [
      "833 cfm",
      "1,111 cfm",
      "1,389 cfm",
      "3,000 cfm"
    ],
    "answer": 1,
    "explanation": "Cfm = Btuh ÷ 1.08 ÷ ΔT. 60,000 ÷ 1.08 ÷ 50 = about 1,111 cfm. Airflow must match heat output and temperature rise."
  },
  {
    "id": 61,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A combustion analyzer shows high CO and low O₂. What is likely?",
    "options": [
      "Insufficient air or rich combustion",
      "Too much excess air only",
      "Perfect combustion",
      "Zero gas input"
    ],
    "answer": 0,
    "explanation": "Low oxygen with high CO suggests fuel-rich burning. The appliance may lack air or have poor mixing. This is unsafe and requires correction."
  },
  {
    "id": 62,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A manifold pressure test shows correct pressure before firing but low pressure during firing. What matters most?",
    "options": [
      "Operating pressure under load",
      "Static pressure only",
      "Thermostat setting only",
      "Pipe colour only"
    ],
    "answer": 0,
    "explanation": "Appliances require correct pressure while operating. Static pressure does not prove fuel delivery. Low operating pressure can cause poor combustion."
  },
  {
    "id": 63,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A technician uses a gauge with a maximum scale of 300 psi to test 7 in. w.c. gas pressure. What is the problem?",
    "options": [
      "Gauge resolution is not suitable",
      "Pressure becomes more accurate",
      "Gauge range does not matter",
      "Manometers cannot measure gas"
    ],
    "answer": 0,
    "explanation": "Low gas pressure requires a sensitive instrument. A high-range gauge may not show small changes. Instrument selection affects test accuracy."
  },
  {
    "id": 64,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A draft test shows positive pressure at a draft hood during firing. What is the concern?",
    "options": [
      "Flue gases may spill into the room",
      "Burner input is automatically correct",
      "Thermostat is satisfied",
      "Gas pressure is too high only"
    ],
    "answer": 0,
    "explanation": "Draft hood appliances normally require proper upward draft. Positive pressure can indicate spillage or venting failure. CO exposure risk must be controlled."
  },
  {
    "id": 65,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A flame signal is measured at 0.4 microamps where minimum is 1.0 microamp. What should be done?",
    "options": [
      "Correct flame sensing problem before approval",
      "Approve because flame is visible",
      "Increase blower speed only",
      "Short the flame rod to ground"
    ],
    "answer": 0,
    "explanation": "Flame signal must meet control requirements. Low signal can cause nuisance shutdown or unsafe operation. Sensor, ground, flame contact, and polarity must be checked."
  },
  {
    "id": 66,
    "category": "Block F / Task 16 — Tests Gas-Fired Systems",
    "question": "A pressure factor is calculated using atmospheric pressure 14.4 psi, gauge pressure 2 psi, and base pressure 14.7 psi. What is the factor?",
    "options": [
      "0.98",
      "1.00",
      "1.12",
      "1.47"
    ],
    "answer": 2,
    "explanation": "Pressure factor = atmospheric plus gauge pressure divided by base pressure. 14.4 + 2 = 16.4; 16.4 ÷ 14.7 = about 1.12. This factor corrects gas meter clocking."
  },
  {
    "id": 67,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new furnace starts but temperature rise is below rating plate range. What should be checked?",
    "options": [
      "Excessive airflow or low input",
      "Blocked filter only",
      "High limit failure only",
      "Dirty flame rod only"
    ],
    "answer": 0,
    "explanation": "Low temperature rise can mean too much airflow. It can also indicate underfiring or low input. Both gas input and airflow must be verified."
  },
  {
    "id": 68,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new boiler passes leak test but relief valve discharge piping is missing. Can it be commissioned?",
    "options": [
      "No, safety discharge must be properly installed",
      "Yes, leak test is enough",
      "Yes, if pressure is low",
      "Yes, if customer accepts"
    ],
    "answer": 0,
    "explanation": "Relief valves must discharge safely. Missing discharge piping can scald or injure people. Commissioning requires all safety systems complete."
  },
  {
    "id": 69,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A burner is commissioned without checking low-fire combustion. Why is this unsafe?",
    "options": [
      "Low-fire combustion may be unstable or high CO",
      "Low fire cannot produce CO",
      "High fire proves all settings",
      "Gas pressure is irrelevant at low fire"
    ],
    "answer": 0,
    "explanation": "Modulating burners behave differently across firing range. Low fire can have poor mixing or flame instability. Commissioning must verify required firing points."
  },
  {
    "id": 70,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A direct-vent appliance shuts down only when both intake and exhaust covers are installed. What should be checked?",
    "options": [
      "Vent termination assembly and pressure switch operation",
      "Thermostat colour",
      "Gas pipe support only",
      "Customer usage pattern only"
    ],
    "answer": 0,
    "explanation": "Covers affect airflow and vent pressure. Incorrect termination can cause pressure switch trips. Vent system must match manufacturer instructions."
  },
  {
    "id": 71,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "After startup, an appliance has delayed ignition. What should happen before approval?",
    "options": [
      "Correct ignition and carryover before leaving",
      "Leave if it lights eventually",
      "Increase thermostat setting",
      "Disable rollout switch"
    ],
    "answer": 0,
    "explanation": "Delayed ignition can cause rollout or damage. Burner alignment, pressure, ignition source, and carryover must be checked. The appliance must light smoothly and safely."
  },
  {
    "id": 72,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "Why is customer instruction part of commissioning?",
    "options": [
      "It helps safe operation and emergency response",
      "It replaces annual maintenance",
      "It allows customers to adjust gas valves",
      "It removes need for documentation"
    ],
    "answer": 0,
    "explanation": "Customers should know basic operation and warning signs. They should know shutoff locations and when to call for service. Proper handover reduces unsafe use."
  },
  {
    "id": 73,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A commissioning report lists “OK” but no measurements. What is wrong?",
    "options": [
      "It lacks verifiable test data",
      "It is more professional",
      "It proves all safeties worked",
      "It replaces manufacturer instructions"
    ],
    "answer": 0,
    "explanation": "Commissioning requires recorded measured results. Pressure, combustion, and safety tests need actual data. Vague notes are weak for future troubleshooting."
  },
  {
    "id": 74,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A furnace blower starts before heat exchanger warm-up and causes cold air complaints. What setting may need review?",
    "options": [
      "Fan timing or control sequence",
      "Gas pipe thread depth only",
      "Regulator vent location only",
      "Chimney cap colour"
    ],
    "answer": 0,
    "explanation": "Fan timing affects comfort and heat transfer. Controls may allow delay-on and delay-off settings. Sequence must match manufacturer requirements."
  },
  {
    "id": 75,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A new appliance is overfiring based on meter clocking. What should be checked?",
    "options": [
      "Orifice size, manifold pressure, and gas type",
      "Filter brand only",
      "Thermostat schedule only",
      "Vent paint only"
    ],
    "answer": 0,
    "explanation": "Overfiring can result from wrong pressure or orifices. Fuel type must match appliance setup. Overfiring can cause high CO or overheating."
  },
  {
    "id": 76,
    "category": "Block F / Task 17 — Commissions Gas-Fired Systems",
    "question": "A safety limit is tested and fails to open at required condition. What is correct?",
    "options": [
      "Do not approve operation until corrected",
      "Bypass it because other safeties exist",
      "Increase gas pressure",
      "Record it as normal"
    ],
    "answer": 0,
    "explanation": "Safety controls must function correctly. A failed limit cannot protect the appliance. Commissioning must confirm safety shutdowns work."
  },
  {
    "id": 77,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "During maintenance, a burner has rust flakes inside the combustion chamber. What should be checked?",
    "options": [
      "Venting, condensate, heat exchanger condition, and combustion",
      "Thermostat colour only",
      "Gas meter brand only",
      "Electrical panel size only"
    ],
    "answer": 0,
    "explanation": "Rust may indicate moisture or venting problems. It can also affect combustion and heat exchanger condition. The cause must be found, not just cleaned."
  },
  {
    "id": 78,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A condensate drain is partially plugged. What can result?",
    "options": [
      "Pressure switch trips or water backup",
      "Higher flame signal",
      "Lower gas density",
      "Better vent draft"
    ],
    "answer": 0,
    "explanation": "Condensate must drain freely. Blocked drainage can affect pressure switches and heat exchangers. Water backup may shut the appliance down."
  },
  {
    "id": 79,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A furnace has a dirty blower wheel. What is the likely effect?",
    "options": [
      "Reduced airflow and higher temperature rise",
      "Higher gas pressure",
      "Lower stack temperature always",
      "Better filtration"
    ],
    "answer": 0,
    "explanation": "Dirt reduces blower efficiency. Reduced airflow can overheat the furnace. Maintenance must include airflow-related components."
  },
  {
    "id": 80,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A flame sensor needs cleaning every few weeks. What does this suggest?",
    "options": [
      "An underlying combustion or contamination problem",
      "Normal operation for all furnaces",
      "Gas pressure is always too low",
      "Filter is always clean"
    ],
    "answer": 0,
    "explanation": "Repeated fouling is a symptom. Combustion quality, grounding, and contaminants must be checked. Cleaning alone may not solve the root cause."
  },
  {
    "id": 81,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A vent screen is blocked with lint. What hazard exists?",
    "options": [
      "Poor venting and possible CO spillage",
      "Higher heat output safely",
      "Better flame stability",
      "Reduced need for combustion air"
    ],
    "answer": 0,
    "explanation": "Vent blockage prevents combustion products from escaping. CO and flue gases may spill or recirculate. Vents and screens must be inspected and cleaned."
  },
  {
    "id": 82,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "Why should belt tension be checked during service?",
    "options": [
      "Loose or tight belts affect airflow and motor load",
      "Belts regulate gas pressure",
      "Belt colour proves airflow",
      "Belts clean flame rods"
    ],
    "answer": 0,
    "explanation": "Loose belts slip and reduce airflow. Overtight belts overload bearings and motors. Correct belt tension protects equipment performance."
  },
  {
    "id": 83,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "A heat exchanger surface shows soot. What must be investigated?",
    "options": [
      "Combustion, venting, burner condition, and input",
      "Thermostat location only",
      "Filter size only",
      "Customer preference only"
    ],
    "answer": 0,
    "explanation": "Soot indicates incomplete combustion. It may be caused by poor air, overfiring, or venting problems. Soot is a serious safety warning."
  },
  {
    "id": 84,
    "category": "Block G / Task 18 — Maintains Gas-Fired Systems",
    "question": "Why should gas pressure be checked during maintenance?",
    "options": [
      "Regulators or supply conditions can change over time",
      "Pressure never changes after installation",
      "Pressure checks replace cleaning",
      "Pressure is controlled by thermostat only"
    ],
    "answer": 0,
    "explanation": "Regulators, meters, and supply systems can drift or fail. Incorrect pressure affects combustion and input. Maintenance verifies continued safe operation."
  },
  {
    "id": 85,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace fails on pressure switch open. The vent is blocked with leaves. What is the correct repair?",
    "options": [
      "Clear obstruction and verify safe draft/operation",
      "Bypass pressure switch",
      "Replace thermostat",
      "Increase gas pressure"
    ],
    "answer": 0,
    "explanation": "The pressure switch is responding to a real airflow fault. The blockage must be removed and operation retested. Bypassing the switch creates an unsafe condition."
  },
  {
    "id": 86,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A gas valve receives 24 V but chatters rapidly. What should be checked?",
    "options": [
      "Control voltage stability and valve coil condition",
      "Filter cleanliness only",
      "Vent cap paint only",
      "Gas pipe length only"
    ],
    "answer": 0,
    "explanation": "Chattering can come from low or unstable voltage. A failing coil may also chatter. Electrical diagnosis should verify voltage under load."
  },
  {
    "id": 87,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A burner lights with a boom. What should be checked?",
    "options": [
      "Delayed ignition causes such as burner carryover and pressure",
      "Thermostat screen brightness",
      "Gas pipe support colour",
      "Duct insulation thickness only"
    ],
    "answer": 0,
    "explanation": "Booming ignition indicates gas accumulation before lighting. Carryover ports, ignition source, pressure, and burner alignment matter. Delayed ignition can damage equipment and cause rollout."
  },
  {
    "id": 88,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A replacement limit switch has same size but higher temperature rating. What is wrong?",
    "options": [
      "It may allow unsafe overheating",
      "Higher rating is always safer",
      "It improves blower performance",
      "It lowers gas consumption"
    ],
    "answer": 0,
    "explanation": "Limit controls protect equipment at specific temperatures. A higher-rated limit may trip too late. Replacement must match approved specifications."
  },
  {
    "id": 89,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A boiler cycles on high limit before reaching thermostat setpoint. What should be checked?",
    "options": [
      "Circulation, air in system, flow restriction, and controls",
      "Flame rod only",
      "Roof termination colour",
      "Gas odour level only"
    ],
    "answer": 0,
    "explanation": "High-limit cycling can result from poor heat removal. Low water flow, air locks, or control issues may be involved. The burner may not be the only problem."
  },
  {
    "id": 90,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired appliance has normal manifold pressure but high CO. What is correct?",
    "options": [
      "Continue diagnosis; pressure alone does not prove combustion safety",
      "Approve because pressure is correct",
      "Disable CO test",
      "Increase blower speed blindly"
    ],
    "answer": 0,
    "explanation": "Combustion depends on more than gas pressure. Air supply, venting, burners, and heat exchanger condition matter. High CO must be corrected before return to service."
  },
  {
    "id": 91,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A control board was replaced, but the same fuse blows again. What does this suggest?",
    "options": [
      "External short or load fault remains",
      "New board is always defective",
      "Gas pressure is too high",
      "Vent is undersized only"
    ],
    "answer": 0,
    "explanation": "Repeated fuse failure often means the original cause remains. Thermostat wiring, contactor coils, or accessories may be shorted. The circuit must be isolated and tested."
  },
  {
    "id": 92,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A pilot flame is small and pulls away when main burner starts. What may cause this?",
    "options": [
      "Low pilot pressure, dirty pilot, or draft disturbance",
      "Oversized filter only",
      "High thermostat setting",
      "Excess cabinet paint"
    ],
    "answer": 0,
    "explanation": "Pilot stability depends on gas flow and flame position. Main burner ignition can disturb a weak pilot. Pilot assembly, pressure, and draft must be checked."
  },
  {
    "id": 93,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A motor replacement fails because the shaft length is shorter than original. What was missed?",
    "options": [
      "Mechanical compatibility",
      "Gas pressure adjustment",
      "Flame safeguard timing",
      "Vent connector slope"
    ],
    "answer": 0,
    "explanation": "Motor replacement requires matching physical dimensions. Shaft length affects blower wheel or pulley mounting. Electrical match alone is not enough."
  },
  {
    "id": 94,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A rollout switch trips again after being reset. What should be done?",
    "options": [
      "Investigate rollout cause and do not keep resetting",
      "Replace it with a jumper",
      "Install higher-rated switch",
      "Reduce thermostat setting only"
    ],
    "answer": 0,
    "explanation": "Rollout indicates flame or heat leaving the burner area. Repeated reset ignores a serious hazard. Blocked heat exchanger, venting, or burner faults must be checked."
  },
  {
    "id": 95,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A gas regulator is replaced, but outlet pressure hunts up and down. What should be checked?",
    "options": [
      "Regulator sizing, venting, inlet pressure, and installation arrangement",
      "Thermostat colour only",
      "Blower belt size only",
      "Filter brand only"
    ],
    "answer": 0,
    "explanation": "Regulator instability can come from sizing or installation issues. Blocked vents or fluctuating inlet pressure can also cause hunting. Correct regulator setup must be verified."
  },
  {
    "id": 96,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A furnace shuts off when the blower starts. What may be happening?",
    "options": [
      "Limit, pressure, wiring, or control issue under changing conditions",
      "Gas input always doubles",
      "Flame signal always increases",
      "Venting is automatically correct"
    ],
    "answer": 0,
    "explanation": "Blower operation can affect pressure, airflow, and wiring vibration. A safety or loose connection may open when conditions change. Diagnosis must follow the sequence of operation."
  },
  {
    "id": 97,
    "category": "Block G / Task 19 — Repairs Gas-Fired Systems",
    "question": "A repaired appliance is returned to service without leak testing the disturbed gas joint. What is wrong?",
    "options": [
      "Any disturbed gas joint must be leak tested",
      "Leak testing is optional after repair",
      "Odour is better than testing",
      "Running appliance proves no leaks"
    ],
    "answer": 0,
    "explanation": "Repair work can loosen or create gas joints. Leak testing verifies gas containment. Appliance operation does not prove joints are leak-free."
  },
  {
    "id": 98,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A gas appliance is removed but the branch line is left with only a closed valve. What is required?",
    "options": [
      "Proper cap or plug and leak test",
      "Nothing else if valve is closed",
      "Tape over the valve outlet",
      "Leave connector attached"
    ],
    "answer": 0,
    "explanation": "Closed valves alone are not enough for permanent removal. Open-ended piping must be safely capped or plugged. The final connection must be leak tested."
  },
  {
    "id": 99,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "A propane tank is disconnected but still contains vapour. What is the hazard?",
    "options": [
      "Residual propane can ignite or collect in low areas",
      "Empty-looking tanks are always safe",
      "Propane vapour is not flammable",
      "Vapour disappears instantly indoors"
    ],
    "answer": 0,
    "explanation": "Propane vapour can remain after disconnection. It is heavier than air and can collect low. Handling must follow approved propane procedures."
  },
  {
    "id": 100,
    "category": "Block G / Task 20 — Decommissions Gas-Fired Systems",
    "question": "Why should decommissioned gas equipment be labelled or documented?",
    "options": [
      "To prevent accidental reconnection or unsafe assumptions",
      "To increase gas pressure later",
      "To avoid future inspections",
      "To make old equipment look new"
    ],
    "answer": 0,
    "explanation": "Documentation tells future workers the system status. It reduces the chance of accidental use. Safe decommissioning includes isolation, testing, and records."
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

const shuffledGasfitterClassBIPQuestions =
  shuffleArray(gasfitterClassBIPQuestions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "gasfitter-class-b-ip",
  tradeTitle: "Gasfitter Class B IP",
  sectionTitle: "Practice Exam Set 2",
  questionTimeSeconds: 90,
  questions: shuffledGasfitterClassBIPQuestions
});

window.addEventListener("load", () => {
  const totalQuestionsPill = document.getElementById("totalQuestionsPill");
  if (totalQuestionsPill) totalQuestionsPill.textContent = `Questions: ${gasfitterClassBIPQuestions.length}`;

  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");

  if (hintBtn) hintBtn.style.display = "none";
  if (hintBox) hintBox.classList.add("hidden");
  if (hintText) hintText.textContent = "";
});
