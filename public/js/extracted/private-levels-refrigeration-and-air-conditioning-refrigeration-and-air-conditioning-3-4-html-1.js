const racmLevel3Set4OriginalQuestions = [
  {
    "id": 1,
    "category": "B8 — Use Digital Technology",
    "question": "A BAS trend shows the heating valve is commanded open, but discharge air temperature does not rise. What should be checked?",
    "options": [
      "Refrigerant cylinder weight only",
      "Valve actuator, hot-water supply temperature, water flow, and sensor accuracy",
      "Gas burner colour only",
      "Condenser fan rotation only"
    ],
    "answer": 1,
    "explanation": "A control command does not prove heat is being delivered. Check actuator movement, water temperature, flow, and sensor readings."
  },
  {
    "id": 2,
    "category": "B8 — Use Digital Technology",
    "question": "A technician uses a digital manometer to measure gas manifold pressure. What must be confirmed?",
    "options": [
      "The meter is zeroed and connected to the correct pressure tap",
      "The refrigerant charge is correct",
      "The blower belt is tight",
      "The evaporator fan is clean"
    ],
    "answer": 0,
    "explanation": "Incorrect setup gives false pressure readings. Gas pressure readings must be accurate because combustion depends on proper pressure."
  },
  {
    "id": 3,
    "category": "B8 — Use Digital Technology",
    "question": "A controller shows normal sensor values, but the actual room temperature is different. What is the best action?",
    "options": [
      "Trust the controller only",
      "Verify with an independent thermometer and check sensor location/calibration",
      "Replace the compressor",
      "Increase gas pressure"
    ],
    "answer": 1,
    "explanation": "Sensors can be affected by placement, calibration, wiring, or scaling. Independent measurement confirms reality."
  },
  {
    "id": 4,
    "category": "B8 — Use Digital Technology",
    "question": "A service laptop cannot communicate with a rooftop unit controller. What should be checked first?",
    "options": [
      "Refrigerant superheat",
      "Cable, communication settings, address, power, and network connection",
      "Gas burner flame pattern",
      "Hydronic expansion tank"
    ],
    "answer": 1,
    "explanation": "Communication problems are often wiring, addressing, power, or setup issues. Confirm the communication path before replacing parts."
  },
  {
    "id": 5,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "A technician replaces a gas valve on a furnace. Which requirements must be followed?",
    "options": [
      "Only customer preference",
      "Manufacturer instructions, gas code, and AHJ requirements",
      "Refrigerant charging chart only",
      "Old installation habits only"
    ],
    "answer": 1,
    "explanation": "Gas controls are safety components. Work must meet manufacturer instructions and applicable gas regulations."
  },
  {
    "id": 6,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "Why must combustion air requirements be followed?",
    "options": [
      "To ensure enough air for safe combustion",
      "To increase refrigerant subcooling",
      "To lower hydronic pressure",
      "To change fan RPM"
    ],
    "answer": 0,
    "explanation": "Gas appliances need adequate oxygen. Poor combustion air can cause incomplete combustion and carbon monoxide."
  },
  {
    "id": 7,
    "category": "C3 — Use Codes, Regulations and Standards",
    "question": "A technician finds a safety control bypassed on a gas appliance. What is the correct action?",
    "options": [
      "Leave it if the appliance heats",
      "Remove the bypass and diagnose the original fault",
      "Increase gas pressure",
      "Add refrigerant"
    ],
    "answer": 1,
    "explanation": "Safety controls must never be permanently bypassed. The unsafe condition or failed component must be corrected."
  },
  {
    "id": 8,
    "category": "C5 — Organize Work and Maintain Records",
    "question": "Why should commissioning forms include safety-control test results?",
    "options": [
      "To prove safeties were tested and operated correctly",
      "To replace future maintenance",
      "To avoid using test instruments",
      "To change equipment capacity"
    ],
    "answer": 0,
    "explanation": "Safety-control documentation shows the system was verified. It also helps future service technicians understand the setup."
  },
  {
    "id": 9,
    "category": "C5 — Organize Work and Maintain Records",
    "question": "A technician adjusts a gas regulator. What should be recorded?",
    "options": [
      "Final manifold pressure, inlet pressure, appliance input conditions, and test results",
      "Only thermostat setting",
      "Only refrigerant type",
      "Only outdoor temperature"
    ],
    "answer": 0,
    "explanation": "Gas adjustments affect combustion safety. Accurate records provide proof of correct setup."
  },
  {
    "id": 10,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A chilled-water coil requires control of water flow. Which component is commonly used?",
    "options": [
      "Gas pressure switch",
      "Control valve",
      "Flame rod",
      "Suction accumulator"
    ],
    "answer": 1,
    "explanation": "Hydronic control valves regulate water flow through coils. This controls heating or cooling output."
  },
  {
    "id": 11,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A system needs to remove dirt from hydronic water. Which component is appropriate?",
    "options": [
      "Strainer or dirt separator",
      "TXV",
      "Ignition module",
      "Flame rollout switch"
    ],
    "answer": 0,
    "explanation": "Dirt in hydronic systems can damage pumps, valves, and heat exchangers. Strainers and separators protect components."
  },
  {
    "id": 12,
    "category": "C8 — Select HVAC/R Components and Accessories",
    "question": "A furnace must prove inducer operation before ignition. Which component is commonly involved?",
    "options": [
      "Pressure switch",
      "Liquid receiver",
      "Filter drier",
      "Sight glass"
    ],
    "answer": 0,
    "explanation": "A pressure switch proves draft or inducer operation. The ignition sequence should not continue without proof."
  },
  {
    "id": 13,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A 600 V three-phase motor has poor voltage balance. What is the major risk?",
    "options": [
      "Lower amperage",
      "Winding overheating from current imbalance",
      "Better motor efficiency",
      "Lower mechanical load"
    ],
    "answer": 1,
    "explanation": "Small voltage imbalance can create large current imbalance. This overheats motor windings."
  },
  {
    "id": 14,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A control circuit has 24 V and total resistance of 6 ohms. What current flows?",
    "options": [
      "2 A",
      "4 A",
      "6 A",
      "24 A"
    ],
    "answer": 1,
    "explanation": "Current = voltage ÷ resistance. 24 ÷ 6 = 4 amps."
  },
  {
    "id": 15,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "What is the purpose of grounding electrical equipment?",
    "options": [
      "To provide a safe fault-current path",
      "To increase refrigerant pressure",
      "To reduce hydronic water temperature",
      "To improve combustion air"
    ],
    "answer": 0,
    "explanation": "Grounding helps clear faults and reduces shock risk. It is a critical safety requirement."
  },
  {
    "id": 16,
    "category": "E1 — Use Principles of Electricity and Electronics",
    "question": "A relay coil is rated 24 VAC but is supplied with 120 VAC. What will likely happen?",
    "options": [
      "Coil may burn out",
      "Coil will work better",
      "Refrigerant pressure will drop",
      "Gas valve will regulate better"
    ],
    "answer": 0,
    "explanation": "Control components must match supply voltage. Overvoltage can destroy coils and create hazards."
  },
  {
    "id": 17,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A diagram shows a proof-of-flow switch in series with a chiller enable circuit. What happens if flow is not proven?",
    "options": [
      "Chiller is prevented from operating",
      "Chiller runs at full load",
      "Fan rotation reverses",
      "Gas pressure increases"
    ],
    "answer": 0,
    "explanation": "Flow proof protects heat exchangers from freezing or damage. If flow is not proven, operation should stop."
  },
  {
    "id": 18,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A control circuit has 24 V entering a safety chain but 0 V leaving. What does this suggest?",
    "options": [
      "Open control somewhere in the safety chain",
      "Correct circuit operation always",
      "Compressor is overcharged",
      "Gas valve is too large"
    ],
    "answer": 0,
    "explanation": "Voltage entering but not leaving a series safety chain means one control is open. Trace step by step."
  },
  {
    "id": 19,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A BAS output is labelled “AO.” What does this usually mean?",
    "options": [
      "Analog output",
      "Air only",
      "Auxiliary oil",
      "Automatic overload"
    ],
    "answer": 0,
    "explanation": "Analog outputs send variable signals, such as 0–10 V or 4–20 mA. They often control dampers, valves, or VFDs."
  },
  {
    "id": 20,
    "category": "E2 — Use Electrical Wiring Diagrams and Schematics",
    "question": "A normally open airflow switch is used to prove fan operation. When airflow is proven, the switch should:",
    "options": [
      "Close",
      "Stay open",
      "Ground the refrigerant line",
      "Increase motor horsepower"
    ],
    "answer": 0,
    "explanation": "Normally open means open at rest. Airflow closes the switch and proves operation."
  },
  {
    "id": 21,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A VFD is programmed with the wrong motor full-load amps. What can happen?",
    "options": [
      "Incorrect overload protection",
      "Better motor protection always",
      "Lower static pressure automatically",
      "Improved burner ignition"
    ],
    "answer": 0,
    "explanation": "Drives use motor data for protection and control. Wrong settings can cause nuisance trips or poor protection."
  },
  {
    "id": 22,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A fan motor runs, but airflow is low and static pressure is high. What should be checked?",
    "options": [
      "Duct restrictions, dampers, filters, wheel rotation, and speed",
      "Gas regulator vent only",
      "Refrigerant type only",
      "Boiler relief valve only"
    ],
    "answer": 0,
    "explanation": "Motor operation alone does not prove airflow. Air-side restrictions and fan setup must be checked."
  },
  {
    "id": 23,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A three-phase motor starter has one contact badly worn. What can result?",
    "options": [
      "Phase imbalance and motor overheating",
      "Better motor balance",
      "Lower current on all phases",
      "Reduced need for overloads"
    ],
    "answer": 0,
    "explanation": "High resistance on one phase causes voltage drop. This creates current imbalance and heat."
  },
  {
    "id": 24,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "A compressor overload trips after long run time on a hot day. What should be considered?",
    "options": [
      "High head pressure, poor cooling, voltage, and mechanical load",
      "Thermostat colour only",
      "Gas vent slope only",
      "Hydronic air separator only"
    ],
    "answer": 0,
    "explanation": "Overloads respond to heat and current. High load, poor voltage, or cooling problems can trip them."
  },
  {
    "id": 25,
    "category": "E3 — Apply Motor and Motor Control Theory",
    "question": "Why is phase rotation checked on three-phase compressors and pumps?",
    "options": [
      "Wrong rotation can cause poor pumping or damage",
      "It changes gas pressure",
      "It sets thermostat calibration",
      "It removes air from hydronics"
    ],
    "answer": 0,
    "explanation": "Three-phase equipment direction depends on phase sequence. Wrong rotation can damage compressors or reduce pump/fan performance."
  },
  {
    "id": 26,
    "category": "E4 — Select Control Systems",
    "question": "A chilled-water valve is modulating too fast and causing temperature swings. What may need adjustment?",
    "options": [
      "Control loop tuning",
      "Refrigerant charge",
      "Gas pipe size",
      "Motor bearing grease only"
    ],
    "answer": 0,
    "explanation": "Poor control tuning can cause hunting. Control response must match system speed and load."
  },
  {
    "id": 27,
    "category": "E4 — Select Control Systems",
    "question": "A BAS uses a 0–10 V signal to control a damper. What does the signal represent?",
    "options": [
      "Variable command position",
      "Refrigerant pressure",
      "Gas flame signal",
      "Hydronic water pressure only"
    ],
    "answer": 0,
    "explanation": "A 0–10 V signal is an analog control signal. It can command actuator position or speed."
  },
  {
    "id": 28,
    "category": "E4 — Select Control Systems",
    "question": "A heat pump uses an outdoor lockout for electric auxiliary heat. What is the purpose?",
    "options": [
      "Prevent or allow auxiliary heat based on outdoor temperature",
      "Control gas burner draft",
      "Set refrigerant superheat",
      "Remove water from hydronic systems"
    ],
    "answer": 0,
    "explanation": "Outdoor lockout controls when backup heat is allowed. It helps balance comfort and energy use."
  },
  {
    "id": 29,
    "category": "E4 — Select Control Systems",
    "question": "A boiler system uses low-water cutoff. What is its purpose?",
    "options": [
      "Prevent burner operation with unsafe low water level",
      "Increase water temperature",
      "Lower gas pressure",
      "Increase refrigerant charge"
    ],
    "answer": 0,
    "explanation": "Boilers must not fire without adequate water. Low-water cutoffs protect against serious damage."
  },
  {
    "id": 30,
    "category": "E4 — Select Control Systems",
    "question": "A mixed-air sensor is installed too close to outside-air intake. What may happen?",
    "options": [
      "It may not read properly mixed air",
      "It improves accuracy",
      "It raises refrigerant pressure",
      "It lowers gas consumption always"
    ],
    "answer": 0,
    "explanation": "Sensor location must represent the controlled condition. Poor placement causes unstable economizer or heating/cooling control."
  },
  {
    "id": 31,
    "category": "E4 — Select Control Systems",
    "question": "A control sequence requires purge before burner ignition. Why?",
    "options": [
      "To clear combustion chamber of unburned gas",
      "To lower refrigerant pressure",
      "To increase hydronic flow",
      "To reset thermostat schedule"
    ],
    "answer": 0,
    "explanation": "Purge removes unburned fuel before ignition. This reduces fire or explosion risk."
  },
  {
    "id": 32,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "A heat pump has low heating capacity, normal airflow, and low outdoor coil temperature. What may be checked?",
    "options": [
      "Refrigerant charge, metering, outdoor coil, and compressor performance",
      "Gas valve only",
      "Hydronic expansion tank only",
      "Burner flame rod only"
    ],
    "answer": 0,
    "explanation": "Heat pump capacity depends on refrigeration operation and outdoor heat absorption. Normal airflow does not eliminate refrigeration faults."
  },
  {
    "id": 33,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "A heat pump has high discharge pressure in heating mode. Which condition can cause it?",
    "options": [
      "Restricted indoor airflow",
      "Low gas pressure",
      "Open boiler relief valve",
      "Dirty flame sensor"
    ],
    "answer": 0,
    "explanation": "The indoor coil is the condenser in heating mode. Restricted indoor airflow reduces heat rejection and raises pressure."
  },
  {
    "id": 34,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "Why is defrost necessary on an air-source heat pump?",
    "options": [
      "Frost blocks outdoor coil airflow and heat transfer",
      "Defrost increases refrigerant contamination",
      "Defrost lowers indoor comfort always",
      "Defrost replaces auxiliary heat"
    ],
    "answer": 0,
    "explanation": "Frost insulates the outdoor coil and blocks airflow. Defrost restores heat transfer."
  },
  {
    "id": 35,
    "category": "F1 — Analyze Heat Pumps and Air Conditioning Systems",
    "question": "A system removes sensible heat but does not remove enough moisture. What may improve dehumidification?",
    "options": [
      "Proper airflow and longer run time",
      "Higher airflow always",
      "Larger thermostat display",
      "Less coil contact time"
    ],
    "answer": 0,
    "explanation": "Moisture removal needs a cold coil and sufficient run time. Excess airflow or short cycling hurts dehumidification."
  },
  {
    "id": 36,
    "category": "F2 — Analyze Refrigeration Systems",
    "question": "A system has high head pressure, high suction pressure, and low superheat. What is possible?",
    "options": [
      "Overfeeding or overcharge condition",
      "Severe undercharge only",
      "Open compressor winding only",
      "Gas valve failure"
    ],
    "answer": 0,
    "explanation": "High suction and low superheat suggest too much refrigerant feeding the evaporator. Overcharge or metering issues must be checked."
  },
  {
    "id": 37,
    "category": "F2 — Analyze Refrigeration Systems",
    "question": "A restricted evaporator distributor or feeder tube would likely cause:",
    "options": [
      "Uneven coil feeding and abnormal superheat",
      "Better capacity",
      "Lower compressor temperature always",
      "Perfect refrigerant distribution"
    ],
    "answer": 0,
    "explanation": "Restrictions in distributor circuits cause uneven evaporator loading. This affects temperature pattern and superheat."
  },
  {
    "id": 38,
    "category": "F4 — Analyze Hydronic Systems",
    "question": "A hydronic system has correct boiler temperature but some zones stay cold. What should be checked?",
    "options": [
      "Zone valves, air locks, balancing, circulator operation, and flow",
      "Refrigerant charge",
      "Compressor phase only",
      "Flame colour only"
    ],
    "answer": 0,
    "explanation": "Cold zones usually indicate flow or control problems. Hydronic diagnosis requires checking valves, air, pumps, and balance."
  },
  {
    "id": 39,
    "category": "F4 — Analyze Hydronic Systems",
    "question": "A chilled-water coil freezes. What may cause it?",
    "options": [
      "Low water flow, low air temperature, failed valve/control, or no freeze protection",
      "Too much gas pressure only",
      "Dirty burner only",
      "High refrigerant charge only"
    ],
    "answer": 0,
    "explanation": "Coils freeze when water or air conditions fall too low. Flow and controls must protect the coil."
  },
  {
    "id": 40,
    "category": "F4 — Analyze Hydronic Systems",
    "question": "What does temperature differential across a hydronic coil indicate?",
    "options": [
      "Heat transfer between water and air",
      "Gas valve voltage",
      "Compressor winding resistance",
      "Refrigerant purity"
    ],
    "answer": 0,
    "explanation": "Water entering/leaving temperature difference helps judge coil heat transfer. It must be interpreted with water flow."
  },
  {
    "id": 41,
    "category": "F4 — Analyze Hydronic Systems",
    "question": "A pump dead-heads against closed valves. What is the concern?",
    "options": [
      "No flow, overheating, and pump damage",
      "Better system performance",
      "Lower water temperature always",
      "Reduced electrical load always"
    ],
    "answer": 0,
    "explanation": "Pumps need flow for proper operation and cooling. Dead-heading can damage pumps and stop heat transfer."
  },
  {
    "id": 42,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "A building has heat pumps with auxiliary electric heat and a BAS. What must be planned?",
    "options": [
      "Staging logic, lockouts, electrical capacity, and sensor locations",
      "Gas regulator vent only",
      "Refrigerant cylinder colour",
      "Door gasket heater only"
    ],
    "answer": 0,
    "explanation": "Heat pump and auxiliary heat operation must be coordinated. Poor staging wastes energy or causes comfort problems."
  },
  {
    "id": 43,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "A hydronic system is installed above finished spaces. What must be considered?",
    "options": [
      "Leak protection, access, insulation, support, and drainage",
      "Refrigerant superheat only",
      "Gas burner carryover only",
      "Economizer minimum position only"
    ],
    "answer": 0,
    "explanation": "Hydronic piping can leak or sweat. Proper support, access, and protection prevent damage."
  },
  {
    "id": 44,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "A mechanical room has natural draft gas appliances and exhaust fans. What is the concern?",
    "options": [
      "Negative pressure affecting draft",
      "Refrigerant overcharge",
      "Hydronic pump rotation only",
      "Compressor oil return only"
    ],
    "answer": 0,
    "explanation": "Exhaust fans can depressurize rooms. Negative pressure may cause backdrafting and CO hazards."
  },
  {
    "id": 45,
    "category": "G2 — Plan HVAC/R System Installation",
    "question": "A rooftop unit replacement is heavier than the original. What must be confirmed?",
    "options": [
      "Structural support and curb capacity",
      "Thermostat brand",
      "Refrigerant smell",
      "Gas flame colour"
    ],
    "answer": 0,
    "explanation": "Roof structure and curb must support the equipment safely. Weight changes require planning."
  },
  {
    "id": 46,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A system is pressure-tested and the pressure rises during the afternoon. What should be considered?",
    "options": [
      "Temperature increase affecting nitrogen pressure",
      "Refrigerant entering the system automatically",
      "Compressor overcharge",
      "Gas regulator failure"
    ],
    "answer": 0,
    "explanation": "Gas pressure changes with temperature. Pressure test interpretation must account for ambient temperature changes."
  },
  {
    "id": 47,
    "category": "H2 — Install HVAC/R Systems",
    "question": "Why should a micron gauge be connected at the system instead of only at the pump?",
    "options": [
      "To measure actual system vacuum",
      "To measure pump colour",
      "To increase refrigerant charge",
      "To check gas pressure"
    ],
    "answer": 0,
    "explanation": "A pump-side reading may look good while the system is still wet or leaking. Measure vacuum at the system."
  },
  {
    "id": 48,
    "category": "H2 — Install HVAC/R Systems",
    "question": "A compressor is replaced after burnout. What installation step is critical?",
    "options": [
      "Cleanup driers, contamination control, proper evacuation, and follow-up checks",
      "Skip evacuation",
      "Reuse old drier",
      "Add unknown refrigerant"
    ],
    "answer": 0,
    "explanation": "Burnout contamination damages new compressors. Cleanup procedure is essential to prevent repeat failure."
  },
  {
    "id": 49,
    "category": "H3 — Install Control Systems",
    "question": "A BAS sensor is installed without matching input scaling. What happens?",
    "options": [
      "Controller may display wrong value",
      "Compressor oil improves",
      "Gas pressure stabilizes",
      "Water flow increases automatically"
    ],
    "answer": 0,
    "explanation": "Sensor signal must match controller configuration. Wrong scaling causes false readings and poor control."
  },
  {
    "id": 50,
    "category": "H3 — Install Control Systems",
    "question": "A freeze stat is installed but wired to alarm only, not shut down equipment. What is the concern?",
    "options": [
      "Coil may still freeze before action is taken",
      "Alarm wiring improves protection always",
      "Refrigerant pressure lowers",
      "Gas appliance becomes safer"
    ],
    "answer": 0,
    "explanation": "Freeze protection often must stop fans/dampers/valves depending on design. Alarm only may not protect equipment."
  },
  {
    "id": 51,
    "category": "H3 — Install Control Systems",
    "question": "A control actuator is installed on a valve but stroke direction is wrong. What happens?",
    "options": [
      "Valve may open when it should close",
      "Valve controls better",
      "Gas flame stabilizes",
      "Compressor voltage drops"
    ],
    "answer": 0,
    "explanation": "Actuator direction must match the control sequence. Wrong action causes reverse control."
  },
  {
    "id": 52,
    "category": "I3 — Apply Alternate Fuel Theory",
    "question": "Why does propane usually require smaller burner orifices than natural gas?",
    "options": [
      "Propane has higher heat content and different supply pressure",
      "Propane has no heat value",
      "Natural gas is heavier than propane",
      "Propane cannot be regulated"
    ],
    "answer": 0,
    "explanation": "Fuel properties differ. Conversion requires approved orifices, pressure adjustment, and combustion testing."
  },
  {
    "id": 53,
    "category": "I3 — Apply Alternate Fuel Theory",
    "question": "A dual-fuel appliance is switched from natural gas to propane. What is required?",
    "options": [
      "Approved conversion procedure and combustion verification",
      "Add refrigerant",
      "Change hydronic pump only",
      "Ignore burner pressure"
    ],
    "answer": 0,
    "explanation": "Fuel conversion affects pressure, orifice size, and combustion. It must be verified safely."
  },
  {
    "id": 54,
    "category": "J1 — Identify Burners",
    "question": "A burner has flame rollout at startup. What is the correct response?",
    "options": [
      "Shut down and investigate burner, heat exchanger, and venting condition",
      "Increase gas pressure",
      "Ignore if flame returns",
      "Add refrigerant"
    ],
    "answer": 0,
    "explanation": "Flame rollout is unsafe. The cause must be found before operation continues."
  },
  {
    "id": 55,
    "category": "J1 — Identify Burners",
    "question": "A burner flame is mostly blue but has unstable tips and noise. What should be checked?",
    "options": [
      "Gas pressure, primary air, burner alignment, and draft",
      "Refrigerant charge",
      "Hydronic pressure only",
      "BAS address only"
    ],
    "answer": 0,
    "explanation": "Flame stability depends on gas pressure, air mixture, burner condition, and draft."
  },
  {
    "id": 56,
    "category": "J1 — Identify Burners",
    "question": "What is burner carryover?",
    "options": [
      "Flame movement from one burner section to the next during ignition",
      "Refrigerant moving through distributor tubes",
      "Water moving through a coil",
      "Voltage moving through a relay"
    ],
    "answer": 0,
    "explanation": "Carryover allows burners to ignite smoothly across the assembly. Poor carryover can cause delayed ignition."
  },
  {
    "id": 57,
    "category": "J1 — Identify Burners",
    "question": "A burner port is partially blocked. What may result?",
    "options": [
      "Uneven flame and poor ignition",
      "Better combustion",
      "Lower CO risk always",
      "Higher refrigerant capacity"
    ],
    "answer": 0,
    "explanation": "Blocked ports disturb the flame pattern. This can create poor combustion or delayed ignition."
  },
  {
    "id": 58,
    "category": "J2 — Identify Flame Safeguards",
    "question": "A direct-spark ignition system sparks but no flame is proven. What happens next?",
    "options": [
      "Gas valve should shut off and control may lock out",
      "Gas flows forever",
      "Compressor starts",
      "Hydronic pump stops only"
    ],
    "answer": 0,
    "explanation": "Flame safeguard must shut gas if flame is not proven. This prevents fuel accumulation."
  },
  {
    "id": 59,
    "category": "J2 — Identify Flame Safeguards",
    "question": "A flame rectification system depends on:",
    "options": [
      "Flame rod, flame contact, grounding, and control module",
      "Refrigerant pressure only",
      "Hydronic air separator only",
      "Static pressure only"
    ],
    "answer": 0,
    "explanation": "Flame rectification uses the flame as part of the electrical signal path. Ground and flame contact are essential."
  },
  {
    "id": 60,
    "category": "J2 — Identify Flame Safeguards",
    "question": "A pilot flame is too small to reach the sensor. What may occur?",
    "options": [
      "Main burner may not stay on",
      "Compressor may overheat",
      "Hydronic pump cavitates",
      "Outdoor fan reverses"
    ],
    "answer": 0,
    "explanation": "Flame must be proven before gas continues. Poor pilot flame contact causes shutdown."
  },
  {
    "id": 61,
    "category": "J2 — Identify Flame Safeguards",
    "question": "Why is purge time used before ignition on some burners?",
    "options": [
      "To clear unburned fuel from the combustion chamber",
      "To increase refrigerant subcooling",
      "To raise water pressure",
      "To open the TXV"
    ],
    "answer": 0,
    "explanation": "Purge reduces risk of ignition with accumulated fuel. It is part of safe burner sequencing."
  },
  {
    "id": 62,
    "category": "J4 — Install Gas Regulators, Valves and Valve Train Components",
    "question": "A regulator outlet pressure is too high. What can happen?",
    "options": [
      "Overfiring and unsafe combustion",
      "Lower CO risk always",
      "Reduced flame size",
      "Better efficiency automatically"
    ],
    "answer": 0,
    "explanation": "Excess burner pressure can overfire the appliance. Combustion and safety can be affected."
  },
  {
    "id": 63,
    "category": "J4 — Install Gas Regulators, Valves and Valve Train Components",
    "question": "Why must manual shutoff valves be accessible?",
    "options": [
      "Gas supply must be isolated for service or emergency",
      "They control refrigerant pressure",
      "They balance hydronic flow",
      "They set thermostat differential"
    ],
    "answer": 0,
    "explanation": "Shutoff valves provide safe isolation. They must be accessible and installed according to code."
  },
  {
    "id": 64,
    "category": "J5 — Install Gas Controls",
    "question": "A gas ignition control requires proper grounding. Why?",
    "options": [
      "Flame proving and safety operation may depend on ground path",
      "Grounding increases gas pressure",
      "Grounding changes refrigerant type",
      "Grounding reduces water flow"
    ],
    "answer": 0,
    "explanation": "Flame rectification uses the ground path. Poor grounding causes nuisance lockouts or unsafe operation."
  },
  {
    "id": 65,
    "category": "J5 — Install Gas Controls",
    "question": "A pressure switch proves inducer draft. What should not be done?",
    "options": [
      "Permanently jumper it to make the furnace run",
      "Check inducer operation",
      "Check vent blockage",
      "Check tubing condition"
    ],
    "answer": 0,
    "explanation": "Pressure switches are safety controls. Jumping them defeats venting protection."
  },
  {
    "id": 66,
    "category": "J5 — Install Gas Controls",
    "question": "A gas control module is replaced with a non-approved substitute. What is the concern?",
    "options": [
      "Safety sequence and timing may be wrong",
      "It always works better",
      "It lowers gas pressure automatically",
      "It improves refrigerant charge"
    ],
    "answer": 0,
    "explanation": "Gas controls must match appliance design. Wrong timing or sequence can be unsafe."
  },
  {
    "id": 67,
    "category": "J7 — Install Gas Venting Systems",
    "question": "A natural draft vent is undersized. What can occur?",
    "options": [
      "Poor draft and flue gas spillage",
      "Better venting",
      "Lower CO risk",
      "Higher refrigerant capacity"
    ],
    "answer": 0,
    "explanation": "Vent size affects draft and removal of combustion products. Undersized vents can spill flue gas."
  },
  {
    "id": 68,
    "category": "J7 — Install Gas Venting Systems",
    "question": "A condensing appliance vent leaks condensate at a joint. What is the issue?",
    "options": [
      "Improper joint assembly, slope, or vent material problem",
      "Normal operation",
      "Refrigerant undercharge",
      "Hydronic pump failure"
    ],
    "answer": 0,
    "explanation": "Condensing vents must contain flue gas and condensate. Leaks can damage equipment and create hazards."
  },
  {
    "id": 69,
    "category": "J9 — Install Gas-Fired Appliances and Ancillary Equipment",
    "question": "A furnace is installed without required service clearance. What problem does this create?",
    "options": [
      "Unsafe or difficult maintenance and inspection",
      "Better airflow",
      "Lower gas input",
      "Better combustion"
    ],
    "answer": 0,
    "explanation": "Service clearance is required for safe access to burners, controls, filters, and heat exchangers."
  },
  {
    "id": 70,
    "category": "J9 — Install Gas-Fired Appliances and Ancillary Equipment",
    "question": "A gas-fired appliance is installed before verifying gas supply pressure. What risk exists?",
    "options": [
      "Appliance may be underfired, overfired, or unsafe",
      "Refrigerant may freeze",
      "Hydronic air may disappear",
      "Compressor phase may reverse"
    ],
    "answer": 0,
    "explanation": "Gas pressure must meet appliance requirements. Incorrect pressure affects combustion and safety."
  },
  {
    "id": 71,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "During commissioning, a heat pump satisfies the thermostat but has high compressor amperage. What should be done?",
    "options": [
      "Accept it because it heats",
      "Investigate pressure, airflow, voltage, and refrigerant conditions",
      "Ignore amperage",
      "Increase thermostat setting"
    ],
    "answer": 1,
    "explanation": "Satisfying the thermostat does not prove safe operation. High amperage indicates possible system or electrical issues."
  },
  {
    "id": 72,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "A hydronic system is noisy after startup. What commissioning step is likely needed?",
    "options": [
      "Purge air and verify pump/flow conditions",
      "Add refrigerant",
      "Replace gas valve",
      "Disable controls"
    ],
    "answer": 0,
    "explanation": "Air in hydronic systems causes noise and poor circulation. Commissioning includes air removal and flow verification."
  },
  {
    "id": 73,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "A rooftop unit has an economizer. What must commissioning verify?",
    "options": [
      "Minimum position, free cooling operation, sensors, dampers, and lockouts",
      "Gas burner carryover only",
      "Hydronic expansion only",
      "Compressor oil colour only"
    ],
    "answer": 0,
    "explanation": "Economizers affect ventilation and cooling. Incorrect setup wastes energy or causes comfort problems."
  },
  {
    "id": 74,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "A refrigeration system has correct box temperature but poor defrost operation. What must be checked?",
    "options": [
      "Defrost initiation, termination, heaters/fans, drains, and schedule",
      "Gas regulator only",
      "Boiler pump only",
      "BAS password only"
    ],
    "answer": 0,
    "explanation": "Temperature alone does not prove correct defrost. Poor defrost can cause icing, water problems, and product issues."
  },
  {
    "id": 75,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "Why are design airflow values important during commissioning?",
    "options": [
      "They confirm equipment is moving required air volume",
      "They set gas pressure",
      "They replace electrical readings",
      "They determine refrigerant colour"
    ],
    "answer": 0,
    "explanation": "Airflow affects capacity, comfort, pressures, and safety. Design airflow confirms proper installation."
  },
  {
    "id": 76,
    "category": "K1 — Commission HVAC/R Systems",
    "question": "A gas-fired unit is commissioned. What should be verified?",
    "options": [
      "Gas leaks, inlet/manifold pressure, combustion, venting, safeties, and sequence",
      "Refrigerant subcooling only",
      "Chilled-water flow only",
      "Door gasket only"
    ],
    "answer": 0,
    "explanation": "Gas commissioning is safety-critical. Fuel, combustion, venting, and controls must be verified."
  },
  {
    "id": 77,
    "category": "K2 — Commission Control Systems",
    "question": "A temperature sensor is wired to the wrong BAS input. What will happen?",
    "options": [
      "The controller may act on the wrong information",
      "Operation will always improve",
      "Gas pressure will stabilize",
      "Refrigerant charge will change"
    ],
    "answer": 0,
    "explanation": "Controls depend on correct input mapping. Wrong input assignment causes incorrect sequence."
  },
  {
    "id": 78,
    "category": "K2 — Commission Control Systems",
    "question": "A VFD is commanded to 50%, but motor speed is not changing. What should be checked?",
    "options": [
      "Enable signal, speed reference, drive parameters, faults, and wiring",
      "Gas manifold pressure",
      "Refrigerant oil only",
      "Boiler relief valve"
    ],
    "answer": 0,
    "explanation": "Drives need correct enable and speed commands. Parameters or faults may prevent response."
  },
  {
    "id": 79,
    "category": "K2 — Commission Control Systems",
    "question": "A control alarm appears locally but not at BAS front end. What should be checked?",
    "options": [
      "Alarm mapping, communication, priority, and network setup",
      "Refrigerant charge",
      "Gas pipe size",
      "Hydronic pump curve only"
    ],
    "answer": 0,
    "explanation": "Alarms must be correctly mapped and communicated. Commissioning verifies reporting to operators."
  },
  {
    "id": 80,
    "category": "K2 — Commission Control Systems",
    "question": "Why should manual overrides be cleared after commissioning?",
    "options": [
      "Overrides can prevent automatic control from operating normally",
      "Overrides improve automation forever",
      "Overrides lower refrigerant pressure",
      "Overrides increase gas safety"
    ],
    "answer": 0,
    "explanation": "Manual overrides can hide faults and defeat automatic sequence. Systems should be returned to normal automatic operation."
  },
  {
    "id": 81,
    "category": "L2 — Service HVAC/R Systems",
    "question": "A system has low suction pressure and evaporator coil frost, but airflow is low. What should be corrected first?",
    "options": [
      "Airflow problem",
      "Add refrigerant immediately",
      "Replace compressor",
      "Increase gas pressure"
    ],
    "answer": 0,
    "explanation": "Low airflow can cause low coil temperature and frost. Air-side problems must be corrected before charge diagnosis."
  },
  {
    "id": 82,
    "category": "L2 — Service HVAC/R Systems",
    "question": "A system has high head pressure after a recent repair and evacuation was poor. What may be present?",
    "options": [
      "Non-condensables",
      "Too little airflow only",
      "Clean condenser only",
      "Correct operation"
    ],
    "answer": 0,
    "explanation": "Air left in the system raises head pressure and reduces efficiency. Proper recovery and evacuation may be required."
  },
  {
    "id": 83,
    "category": "L2 — Service HVAC/R Systems",
    "question": "A compressor has normal voltage but very low amperage and poor pumping. What may be suspected?",
    "options": [
      "Internal mechanical/compression problem",
      "Locked rotor",
      "High load",
      "Dirty burner"
    ],
    "answer": 0,
    "explanation": "Low amperage with poor capacity can indicate the compressor is not doing normal work. Compression performance must be checked."
  },
  {
    "id": 84,
    "category": "L3 — Maintain Control Systems",
    "question": "A BAS sensor is covered by stored boxes. What is the issue?",
    "options": [
      "It may not sense actual room conditions",
      "It will read better",
      "It lowers gas pressure",
      "It increases hydronic flow"
    ],
    "answer": 0,
    "explanation": "Sensors need free exposure to the controlled space. Blocked sensors cause poor comfort and control errors."
  },
  {
    "id": 85,
    "category": "L3 — Maintain Control Systems",
    "question": "A control enclosure has missing covers. What is the concern?",
    "options": [
      "Dirt, moisture, and accidental contact can damage controls",
      "Better cooling of controls always",
      "Less maintenance needed",
      "Improved communication"
    ],
    "answer": 0,
    "explanation": "Enclosures protect electrical components. Missing covers increase failure and safety risks."
  },
  {
    "id": 86,
    "category": "L3 — Maintain Control Systems",
    "question": "A pressure control setpoint has been changed from design. What should be done?",
    "options": [
      "Verify correct setting and reason for change",
      "Leave it if unit runs",
      "Replace compressor immediately",
      "Add refrigerant"
    ],
    "answer": 0,
    "explanation": "Incorrect setpoints can cause unsafe operation or short cycling. Confirm against design/manufacturer requirements."
  },
  {
    "id": 87,
    "category": "L4 — Service Control Systems",
    "question": "A controller output is present, but the actuator does not move. What should be checked?",
    "options": [
      "Actuator power, signal, wiring, linkage, and actuator failure",
      "Refrigerant subcooling only",
      "Gas burner ports only",
      "Boiler pressure only"
    ],
    "answer": 0,
    "explanation": "Output signal does not prove actuator movement. Electrical and mechanical actuator checks are needed."
  },
  {
    "id": 88,
    "category": "L4 — Service Control Systems",
    "question": "A safety switch opens only when the blower starts. What could cause this?",
    "options": [
      "Airflow/pressure change, wiring movement, or actual unsafe condition",
      "Correct operation always",
      "Refrigerant colour",
      "Gas pipe support only"
    ],
    "answer": 0,
    "explanation": "Blower operation can change pressure or move loose wires. The safety condition must be diagnosed."
  },
  {
    "id": 89,
    "category": "L4 — Service Control Systems",
    "question": "A BAS command conflicts with local thermostat command. What should be checked?",
    "options": [
      "Control priority, scheduling, overrides, and wiring",
      "Refrigerant charge only",
      "Gas manifold only",
      "Hydronic expansion tank only"
    ],
    "answer": 0,
    "explanation": "Control systems may have priority layers. Schedules, overrides, and local commands must be understood."
  },
  {
    "id": 90,
    "category": "L4 — Service Control Systems",
    "question": "A control board fuse blows when a field device is connected. What is likely?",
    "options": [
      "Shorted field wiring or device",
      "Low refrigerant charge",
      "High hydronic flow",
      "Dirty gas burner"
    ],
    "answer": 0,
    "explanation": "If the fuse blows only when a device is connected, the fault is likely in that device or wiring circuit."
  },
  {
    "id": 91,
    "category": "M1 — Service Gas Distribution Systems",
    "question": "A gas appliance has correct inlet pressure with no other appliances running but low pressure when all appliances fire. What is likely?",
    "options": [
      "Supply or piping capacity problem",
      "Refrigerant overcharge",
      "Hydronic air lock",
      "Dirty evaporator only"
    ],
    "answer": 0,
    "explanation": "Gas systems must support total connected load. Pressure must be checked under full load."
  },
  {
    "id": 92,
    "category": "M1 — Service Gas Distribution Systems",
    "question": "A regulator outlet pressure creeps upward with no demand. What could this indicate?",
    "options": [
      "Regulator seat leakage or regulator failure",
      "Normal operation always",
      "Low refrigerant charge",
      "High static pressure only"
    ],
    "answer": 0,
    "explanation": "Lock-up pressure should remain controlled. Creeping pressure may indicate regulator internal leakage."
  },
  {
    "id": 93,
    "category": "M2 — Service Gas Burners and Ancillary Equipment",
    "question": "A burner flame is floating and unstable when the mechanical room door closes. What may be happening?",
    "options": [
      "Combustion air or draft problem",
      "Refrigerant restriction",
      "Hydronic overpressure",
      "Correct operation"
    ],
    "answer": 0,
    "explanation": "Closing the door can change room pressure and combustion air. Flame stability depends on air supply and draft."
  },
  {
    "id": 94,
    "category": "M2 — Service Gas Burners and Ancillary Equipment",
    "question": "A burner has soot buildup. What does this suggest?",
    "options": [
      "Incomplete combustion",
      "Perfect air/fuel mixture",
      "Low refrigerant pressure",
      "Excess hydronic flow"
    ],
    "answer": 0,
    "explanation": "Soot is a sign of poor combustion. Check burner cleanliness, air, gas pressure, and venting."
  },
  {
    "id": 95,
    "category": "M3 — Maintain Gas-Fired Appliances, Boilers and Ancillary Equipment",
    "question": "A boiler relief valve drips continuously. What should be checked?",
    "options": [
      "System pressure, expansion tank, relief valve condition, and fill valve",
      "Refrigerant charge only",
      "Compressor rotation only",
      "Duct static only"
    ],
    "answer": 0,
    "explanation": "Relief valve dripping may be caused by high pressure, failed expansion tank, bad fill valve, or defective relief valve."
  },
  {
    "id": 96,
    "category": "M3 — Maintain Gas-Fired Appliances, Boilers and Ancillary Equipment",
    "question": "A furnace repeatedly trips high limit. What should be checked?",
    "options": [
      "Airflow, filter, blower, duct restriction, and temperature rise",
      "Refrigerant subcooling only",
      "Hydronic pump rotation only",
      "BAS alarm mapping only"
    ],
    "answer": 0,
    "explanation": "High-limit trips often come from overheating due to low airflow. Temperature rise and air-side problems must be checked."
  },
  {
    "id": 97,
    "category": "M3 — Maintain Gas-Fired Appliances, Boilers and Ancillary Equipment",
    "question": "Why should condensate traps on condensing furnaces be cleaned?",
    "options": [
      "Blockage can cause pressure switch faults and water damage",
      "Cleaning increases gas pressure",
      "Cleaning changes refrigerant type",
      "Cleaning reduces combustion air need"
    ],
    "answer": 0,
    "explanation": "Condensate must drain properly. Blocked traps cause shutdowns, leaks, and corrosion."
  },
  {
    "id": 98,
    "category": "M3 — Maintain Gas-Fired Appliances, Boilers and Ancillary Equipment",
    "question": "A flame rollout switch trips repeatedly. What should be checked?",
    "options": [
      "Heat exchanger, burners, venting, draft, and combustion air",
      "Refrigerant oil only",
      "Hydronic water treatment only",
      "Compressor contactor only"
    ],
    "answer": 0,
    "explanation": "Rollout is a serious combustion safety issue. The appliance must not be run until the cause is corrected."
  },
  {
    "id": 99,
    "category": "M5 — Service and Repair Gas Control Systems",
    "question": "A furnace ignition sequence stops before spark. What should be checked first?",
    "options": [
      "Call for heat, safeties, pressure switch, and control sequence",
      "Replace gas valve immediately",
      "Add refrigerant",
      "Change hydronic pump"
    ],
    "answer": 0,
    "explanation": "Spark occurs only after earlier safeties and conditions are satisfied. Trace the sequence in order."
  },
  {
    "id": 100,
    "category": "M5 — Service and Repair Gas Control Systems",
    "question": "A gas valve opens, burner lights, then shuts down after a few seconds. What is likely?",
    "options": [
      "Flame proving problem",
      "Refrigerant restriction",
      "Hydronic air lock",
      "Condenser fan failure"
    ],
    "answer": 0,
    "explanation": "If flame lights then drops out, flame signal may not be proven. Check flame rod, ground, wiring, and control module."
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

const refrigerationAndAirConditioningLevel4Set4Questions =
  shuffleArray(racmLevel3Set4Questions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "Refrigeration-and-Air-Conditioning",
  tradeTitle: "Refrigeration And Air Conditioning",
  sectionTitle: "Level 3 - Set 4",
  questionTimeSeconds: 90,
  questions: refrigerationAndAirConditioningLevel4Set4Questions
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
    return refrigerationAndAirConditioningLevel4Set4Questions.find(q => q.question === questionText);
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
