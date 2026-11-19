const automotiveServiceTechnicianLevel3Set3Questions = [
  {
    "id": 1,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A vehicle has three sensor codes: MAP, TPS, and fuel rail pressure sensor. All three share the same 5 V reference. The 5 V circuit reads 0.3 V. What should the technician do first?",
    "options": [
      "Replace the PCM immediately",
      "Isolate the shorted sensor or branch of the 5 V circuit",
      "Replace all three sensors",
      "Clear the codes and road test"
    ],
    "answer": 1,
    "explanation": "Multiple sensor codes on one reference circuit suggest a shared circuit issue. One shorted sensor or wire can pull the 5 V reference low. The circuit should be isolated before replacing parts. ---"
  },
  {
    "id": 2,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A technician wiggles the engine harness near the intake manifold and the engine stalls. What is the most likely fault type?",
    "options": [
      "Intermittent wiring or connector fault",
      "Low tire pressure",
      "Restricted exhaust",
      "Normal PCM strategy"
    ],
    "answer": 0,
    "explanation": "If movement changes operation, wiring or terminal contact is suspect. A broken conductor or loose connector can open under vibration. The harness should be inspected and tested while duplicating the fault. ---"
  },
  {
    "id": 3,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A CAN network has 60 ohms resistance with the battery disconnected, but communication drops out while driving. What test is most useful next?",
    "options": [
      "Lab scope check of CAN waveform during failure",
      "Tire pressure test",
      "Fuel pressure leak-down test",
      "Brake rotor runout test"
    ],
    "answer": 0,
    "explanation": "Static resistance can be normal even with intermittent network problems. A lab scope can show noise, dropouts, or distorted CAN signals. Testing should match the condition when the fault occurs. ---"
  },
  {
    "id": 4,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A module has battery power and ground, but scan tool data shows it offline. The ignition feed is missing. What is the likely reason?",
    "options": [
      "Module may not wake up",
      "Fuel pump is overpressurized",
      "Spark plugs are fouled",
      "Exhaust is restricted"
    ],
    "answer": 0,
    "explanation": "Many modules require ignition feed to turn on and communicate. Battery power may only support memory circuits. The missing ignition supply must be diagnosed. ---"
  },
  {
    "id": 5,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A technician finds a 2.5 V sensor signal that should vary with throttle movement, but it stays fixed. Reference and ground are good. What is the next step?",
    "options": [
      "Check the signal circuit and sensor response",
      "Replace the alternator",
      "Check tire balance",
      "Replace the fuel cap"
    ],
    "answer": 0,
    "explanation": "A fixed signal with good reference and ground may indicate sensor failure. The signal wire may also be open, shorted, or biased. Testing should confirm the fault before replacement. ---"
  },
  {
    "id": 6,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A high-current circuit has a relay that clicks, but the load does not operate. Battery voltage is present at relay terminal 30. What should be checked next?",
    "options": [
      "Relay output, load power, and ground",
      "Coolant concentration",
      "Tire tread depth",
      "Brake shoe adjustment"
    ],
    "answer": 0,
    "explanation": "A relay click only confirms the control side may be active. The switched side may still have bad contacts or wiring faults. The output side and load circuit need testing. ---"
  },
  {
    "id": 7,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A technician measures 1.8 V voltage drop across a connector feeding an electric throttle motor during operation. What does this indicate?",
    "options": [
      "Excessive resistance at the connector",
      "Normal connector performance",
      "Low engine compression",
      "Correct throttle operation"
    ],
    "answer": 0,
    "explanation": "Voltage drop across a connector should be low. A high reading means voltage is being lost through resistance. The connector terminals should be inspected and repaired. ---"
  },
  {
    "id": 8,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A crank sensor waveform becomes erratic only when the engine is hot. What should be suspected?",
    "options": [
      "Heat-related sensor or wiring failure",
      "Low washer fluid",
      "Normal ignition timing",
      "Overinflated tires"
    ],
    "answer": 0,
    "explanation": "Heat can cause internal sensor faults or wiring expansion. An erratic crank signal can cause stalling or no-start. Testing should be performed when the symptom is present. ---"
  },
  {
    "id": 9,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A technician repairs a shielded sensor wire but does not reconnect the shield. What could happen?",
    "options": [
      "Electrical noise may affect the signal",
      "Fuel pressure will increase",
      "Brake pedal will harden",
      "Tire pressure will drop"
    ],
    "answer": 0,
    "explanation": "Shielding protects sensitive signals from interference. Leaving it open can allow noise into the circuit. Shielded wiring should be repaired according to service information. ---"
  },
  {
    "id": 10,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A module connector has green corrosion on several terminals. What symptom can this cause?",
    "options": [
      "Intermittent communication or circuit faults",
      "Higher engine compression",
      "Better fuel economy",
      "Increased oil pressure"
    ],
    "answer": 0,
    "explanation": "Corrosion increases resistance and can interrupt signals. Module circuits are sensitive to poor terminal contact. The connector must be cleaned, repaired, or replaced properly. ---"
  },
  {
    "id": 11,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A scan tool powers up at the DLC but cannot communicate with any module. What should be checked early?",
    "options": [
      "DLC network pins and grounds",
      "Spark plug heat range",
      "Tire sidewall rating",
      "Brake pad brand"
    ],
    "answer": 0,
    "explanation": "Scan tool power does not prove network communication is present. DLC CAN circuits and grounds must be verified. A fault at the DLC can block all communication. ---"
  },
  {
    "id": 12,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A technician connects an ammeter across battery positive and ground while on the amps setting. What is the danger?",
    "options": [
      "It can create a direct short through the meter",
      "It improves current measurement",
      "It protects the fuse box",
      "It resets all modules safely"
    ],
    "answer": 0,
    "explanation": "Ammeters must be connected in series with the load. Connecting across power and ground can short the circuit. This can damage the meter or cause injury. ---"
  },
  {
    "id": 13,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A sensor ground has 0.9 V drop with several sensors operating. What problem can result?",
    "options": [
      "Incorrect sensor readings",
      "Perfect fuel control",
      "Higher tire pressure",
      "Stronger ignition spark"
    ],
    "answer": 0,
    "explanation": "Sensor grounds should remain close to battery negative. Voltage on the ground changes the sensor signal relationship. Ground circuits must be tested and repaired first. ---"
  },
  {
    "id": 14,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A fuse for an engine control circuit blows only after the engine rocks during acceleration. What is likely?",
    "options": [
      "Harness short caused by movement",
      "Weak fuel pump",
      "Low compression",
      "Normal operation"
    ],
    "answer": 0,
    "explanation": "Engine movement can pull or rub wiring. A damaged wire may short only under load movement. Harness routing and insulation should be inspected. ---"
  },
  {
    "id": 15,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A current ramp pattern on a fuel pump shows one repeated low-current section every revolution. What may this suggest?",
    "options": [
      "Internal motor/commutator issue",
      "Low tire pressure",
      "Brake booster leak",
      "Exhaust leak only"
    ],
    "answer": 0,
    "explanation": "Current ramping can reveal motor internal condition. Repeated abnormal sections can indicate brush or commutator faults. Pump current should be compared to known-good patterns. ---"
  },
  {
    "id": 16,
    "category": "E1: Advanced Wiring and Electronics",
    "question": "A connector terminal looks normal but has poor tension when checked with a test pin. What should be done?",
    "options": [
      "Repair or replace the terminal",
      "Add a larger fuse",
      "Bend the sensor pin",
      "Fill the connector with silicone"
    ],
    "answer": 0,
    "explanation": "Poor terminal tension causes intermittent contact. A visual check alone may miss the problem. The terminal should be repaired using approved methods."
  },
  {
    "id": 17,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A vehicle loses power climbing hills. Fuel pressure is normal at idle but drops under load. What is most likely?",
    "options": [
      "Weak pump or restricted fuel supply",
      "Bad brake switch",
      "Low tire pressure sensor battery",
      "Stuck door lock actuator"
    ],
    "answer": 0,
    "explanation": "Fuel demand increases under load. A weak pump or restriction may pass idle testing but fail under demand. Pressure and volume should be tested during the complaint. ---"
  },
  {
    "id": 18,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A no-start engine has good spark and compression. Scan data shows injector pulse width, but fuel rail pressure is 0 psi. What should be checked?",
    "options": [
      "Fuel pump operation, power, ground, and relay",
      "Ignition coil boots",
      "Exhaust backpressure first",
      "Tire balance"
    ],
    "answer": 0,
    "explanation": "Injector command does not prove fuel pressure exists. Zero rail pressure points to pump, power, ground, or supply failure. The fuel delivery circuit must be diagnosed. ---"
  },
  {
    "id": 19,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A direct injection engine has fuel in the engine oil and one spark plug is wet. What is a likely cause?",
    "options": [
      "Leaking injector",
      "Restricted air filter only",
      "Bad wheel bearing",
      "Open brake circuit"
    ],
    "answer": 0,
    "explanation": "A leaking injector can allow fuel into a cylinder after shutdown. Fuel can wash past rings and dilute engine oil. Injector leak testing should be performed. ---"
  },
  {
    "id": 20,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "Fuel trims are -25% at idle and cruise, and fuel pressure is above specification. What is likely?",
    "options": [
      "Excessive fuel pressure causing rich operation",
      "Large vacuum leak",
      "Restricted exhaust only",
      "Weak battery ground"
    ],
    "answer": 0,
    "explanation": "Negative trims mean the PCM is removing fuel. High fuel pressure can make injectors deliver too much fuel. The pressure regulator or control system should be checked. ---"
  },
  {
    "id": 21,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A fuel injector has battery voltage on one terminal but never receives a pulsed ground. Engine RPM signal is present. What should be tested?",
    "options": [
      "Injector control wire and PCM driver",
      "Tire pressure sensor",
      "Brake rotor runout",
      "Washer pump hose"
    ],
    "answer": 0,
    "explanation": "Injectors commonly receive constant power and PCM-switched ground. If RPM input exists, the missing pulse may be circuit or driver related. The control circuit should be tested before PCM replacement. ---"
  },
  {
    "id": 22,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A cylinder contribution test shows cylinder 5 is weak. Spark and compression are good. Injector balance shows reduced flow. What is likely?",
    "options": [
      "Restricted injector",
      "Burned exhaust valve",
      "Worn wheel bearing",
      "Bad ABS module"
    ],
    "answer": 0,
    "explanation": "Good spark and compression reduce ignition/mechanical suspicion. Low injector flow can cause a lean cylinder misfire. The injector and fuel contamination should be checked. ---"
  },
  {
    "id": 23,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A vehicle has a long crank after sitting overnight. Fuel pressure drops quickly after shutdown. What may be leaking?",
    "options": [
      "Injector, pump check valve, or regulator",
      "Brake caliper slide",
      "Exhaust flex pipe",
      "Tire valve cap"
    ],
    "answer": 0,
    "explanation": "Pressure should hold for a specified time after shutdown. Rapid pressure loss can cause long crank. The leak path must be isolated. ---"
  },
  {
    "id": 24,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A MAF sensor reports less airflow than expected during acceleration. What fuel condition can result?",
    "options": [
      "Lean condition",
      "Rich condition always",
      "No fuel change",
      "Brake fade"
    ],
    "answer": 0,
    "explanation": "Under-reported airflow causes the PCM to command less fuel. The oxygen sensors may show lean and trims may rise. MAF contamination and intake leaks should be checked. ---"
  },
  {
    "id": 25,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A fuel pump current draw is low and the pump does not run. Power and ground are present. What is likely?",
    "options": [
      "Open pump motor circuit",
      "Fuel pressure too high",
      "Spark plug fouling",
      "EGR stuck open"
    ],
    "answer": 0,
    "explanation": "A motor with power and ground should draw current. Very low or zero current can indicate an open internal circuit. Pump resistance and connector condition should be verified. ---"
  },
  {
    "id": 26,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A purge valve is stuck open and fuel trims are high positive at idle. Why can this happen?",
    "options": [
      "Extra unmetered air enters through the purge line",
      "Fuel pressure is always too high",
      "Spark timing is fixed",
      "Tires are mismatched"
    ],
    "answer": 0,
    "explanation": "A stuck-open purge valve can act like a vacuum leak. The effect is often strongest at idle. Blocking the purge line can help confirm the fault. ---"
  },
  {
    "id": 27,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A technician hears the fuel pump run, but pressure is below specification and volume is poor. What should be checked?",
    "options": [
      "Fuel filter, pickup, pump condition, and voltage drop",
      "Spark plug wires only",
      "Brake booster vacuum only",
      "Wheel alignment only"
    ],
    "answer": 0,
    "explanation": "Pump noise does not prove correct pressure or volume. Restriction, weak pump output, or electrical loss can cause low delivery. A complete fuel supply test is required. ---"
  },
  {
    "id": 28,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A direct injector seal leaks compression. What symptom may occur?",
    "options": [
      "Ticking noise and combustion leakage",
      "Low tire pressure",
      "Hard brake pedal only",
      "No alternator output"
    ],
    "answer": 0,
    "explanation": "Direct injectors seal against combustion pressure. A failed seal can leak gas and create a ticking sound. Seals must be replaced using proper tools and procedures. ---"
  },
  {
    "id": 29,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A vehicle has no injector pulse and no spark. Scan tool shows no RPM while cranking. What input is most suspect?",
    "options": [
      "Crankshaft position signal",
      "Fuel tank level sensor",
      "Brake pedal switch",
      "Door ajar switch"
    ],
    "answer": 0,
    "explanation": "The PCM needs crankshaft position to control spark and injection. No RPM during cranking indicates missing engine speed input. Crank sensor waveform and circuits should be tested. ---"
  },
  {
    "id": 30,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A returnless fuel system commands high pump duty cycle, but pressure remains low. What should be checked?",
    "options": [
      "Pump output, module control, filter/strainer, and wiring",
      "Spark plug gap only",
      "ABS tone ring only",
      "Tire rotation pattern"
    ],
    "answer": 0,
    "explanation": "High duty cycle means the system is trying to raise pressure. Low pressure may result from pump weakness, restriction, or voltage drop. Control and mechanical fuel delivery must both be checked. ---"
  },
  {
    "id": 31,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A gasoline engine has black smoke, rough idle, and one cylinder’s injector control wire is grounded all the time. What is likely?",
    "options": [
      "Injector held open by shorted control circuit",
      "Vacuum leak",
      "Restricted intake duct",
      "Low battery voltage only"
    ],
    "answer": 0,
    "explanation": "A grounded control wire can keep an injector energized. That cylinder can receive too much fuel. Wiring and PCM driver should be tested. ---"
  },
  {
    "id": 32,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "An engine hesitates after an air filter service. The intake duct after the MAF is loose. What is likely?",
    "options": [
      "Unmetered air entering the engine",
      "Fuel pressure too high",
      "Spark plug gap too small",
      "EGR stuck closed"
    ],
    "answer": 0,
    "explanation": "Air entering after the MAF is not measured. The PCM may command too little fuel for the actual airflow. The duct should be sealed and fuel trims rechecked. ---"
  },
  {
    "id": 33,
    "category": "E2: Gasoline Fuel Delivery and Injection Systems",
    "question": "A pressure sensor on a high-pressure fuel rail has a biased signal. What can happen?",
    "options": [
      "Incorrect high-pressure pump control",
      "Tire wear pattern change",
      "Brake pedal pulsation",
      "Wiper speed failure only"
    ],
    "answer": 0,
    "explanation": "The PCM relies on rail pressure feedback. A biased signal can cause overpressure, low pressure, or drivability faults. Sensor power, ground, and signal should be verified."
  },
  {
    "id": 34,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A vehicle misfires only during heavy acceleration. Spark plugs are worn and gaps are wide. Why does this matter?",
    "options": [
      "Wide gaps increase voltage demand under load",
      "Wide gaps reduce voltage demand",
      "Wide gaps improve all misfires",
      "Wide gaps control fuel pressure"
    ],
    "answer": 0,
    "explanation": "High cylinder pressure under load makes spark harder to fire. Wide gaps increase ignition voltage demand even more. Worn plugs can cause load-related misfires. ---"
  },
  {
    "id": 35,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A cylinder misfire stays on cylinder 2 after swapping coils, but moves after swapping spark plugs. What is most likely?",
    "options": [
      "Spark plug fault",
      "Coil fault",
      "PCM failure always",
      "Fuel pump failure"
    ],
    "answer": 0,
    "explanation": "The fault followed the spark plug, not the coil. Component swapping helps isolate cylinder-specific issues. The plug and cylinder condition should be inspected. ---"
  },
  {
    "id": 36,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A coil boot has a white line down the side and a matching mark on the spark plug ceramic. What does this indicate?",
    "options": [
      "Spark tracking",
      "Normal wear",
      "Low compression",
      "Fuel starvation"
    ],
    "answer": 0,
    "explanation": "Tracking marks show spark has leaked along the outside path. This can cause misfire, especially under load. The boot and spark plug should be replaced or repaired as needed. ---"
  },
  {
    "id": 37,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A coil primary circuit has battery voltage but no PCM trigger. The crank signal is normal. What should be checked?",
    "options": [
      "Coil control wire and PCM driver command",
      "Tire pressure",
      "Brake booster hose",
      "Exhaust hanger"
    ],
    "answer": 0,
    "explanation": "A coil requires a control trigger to fire. If crank input is present, focus shifts to control circuit and driver. The wire should be checked for opens or shorts. ---"
  },
  {
    "id": 38,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A spark plug is oil-fouled on one cylinder. What should the technician consider?",
    "options": [
      "Oil entering the cylinder or plug tube",
      "Low fuel pressure only",
      "ABS sensor failure",
      "Bad fuel cap"
    ],
    "answer": 0,
    "explanation": "Oil fouling can occur from internal engine wear or plug tube leaks. Oil can weaken spark and cause misfire. The source of oil must be diagnosed. ---"
  },
  {
    "id": 39,
    "category": "E3: Gasoline Ignition Systems",
    "question": "An engine cranks but has no spark and no injector pulse. Cam signal is present, crank signal is missing. What is likely?",
    "options": [
      "Crankshaft position sensor/circuit fault",
      "Weak brake booster",
      "Low tire tread",
      "Dirty throttle plate only"
    ],
    "answer": 0,
    "explanation": "Crank signal is critical for ignition and injection timing. Without it, the PCM may disable spark and fuel. The crank sensor circuit should be scoped and tested. ---"
  },
  {
    "id": 40,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A secondary ignition waveform shows extremely high firing voltage on one cylinder. What can cause this?",
    "options": [
      "Excessive plug gap or high resistance",
      "Shorted spark plug gap",
      "Stuck-open injector only",
      "Low tire pressure"
    ],
    "answer": 0,
    "explanation": "High firing voltage means spark has difficulty jumping. Excessive gap, lean mixture, or high resistance can cause this. Ignition parts and mixture condition should be checked. ---"
  },
  {
    "id": 41,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A technician uses an adjustable spark tester and finds weak spark on one coil. Power and trigger are good. What is likely?",
    "options": [
      "Faulty coil or secondary component",
      "Low brake fluid",
      "Bad wheel bearing",
      "Restricted air filter only"
    ],
    "answer": 0,
    "explanation": "Proper power and trigger show the coil is being commanded. Weak spark points to coil output or secondary leakage. The coil, boot, and plug should be inspected. ---"
  },
  {
    "id": 42,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A knock sensor code is ignored. The engine has spark knock under load. What is the risk?",
    "options": [
      "Engine damage from detonation",
      "Tire sidewall cracking",
      "Brake fluid boiling only",
      "Alternator overcharge"
    ],
    "answer": 0,
    "explanation": "Detonation creates abnormal pressure spikes. The PCM may not control timing properly if knock sensing fails. Knock faults should be diagnosed quickly. ---"
  },
  {
    "id": 43,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A misfire occurs after washing the engine bay. Which test may help locate ignition leakage?",
    "options": [
      "Visual inspection in low light or water-spray test",
      "Tire balance check",
      "EVAP smoke test only",
      "Brake pressure bleed"
    ],
    "answer": 0,
    "explanation": "Moisture can expose weak ignition insulation. Arcing may be visible or repeatable with controlled spray. Care must be used around moving and high-voltage parts. ---"
  },
  {
    "id": 44,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A cylinder has good compression and injector operation but no spark. What should be tested?",
    "options": [
      "Coil, plug, boot, power, ground, and trigger",
      "Fuel filter only",
      "Tire pressure only",
      "Exhaust backpressure only"
    ],
    "answer": 0,
    "explanation": "No spark requires checking the full ignition path. Both primary control and secondary components can fail. Testing should follow the circuit diagram. ---"
  },
  {
    "id": 45,
    "category": "E3: Gasoline Ignition Systems",
    "question": "A PCM retards ignition timing when intake air temperature is very high. Why?",
    "options": [
      "To reduce knock tendency",
      "To increase tire pressure",
      "To lower fuel pressure always",
      "To open the thermostat"
    ],
    "answer": 0,
    "explanation": "Hot intake air increases knock risk. Retarding timing can protect the engine. Sensor accuracy affects timing strategy."
  },
  {
    "id": 46,
    "category": "E4: Engine Management Systems",
    "question": "A vehicle has P0172 rich code and fuel trims at -20%. What does this indicate?",
    "options": [
      "PCM is subtracting fuel due to rich condition",
      "PCM is adding fuel due to lean condition",
      "ABS is active",
      "Tire pressure is low"
    ],
    "answer": 0,
    "explanation": "Negative fuel trims mean fuel is being reduced. The PCM is correcting a rich mixture or false rich input. Fuel pressure, injectors, and sensor data should be checked. ---"
  },
  {
    "id": 47,
    "category": "E4: Engine Management Systems",
    "question": "A warm engine shows ECT data at -35°C. What may happen?",
    "options": [
      "Rich mixture and poor fuel economy",
      "Lean mixture only",
      "Brake pedal pulsation",
      "No effect on fuel strategy"
    ],
    "answer": 0,
    "explanation": "The PCM thinks the engine is cold. It may add extra fuel and change idle strategy. ECT circuit and sensor resistance should be tested. ---"
  },
  {
    "id": 48,
    "category": "E4: Engine Management Systems",
    "question": "A throttle body was cleaned and now idle speed surges. What should be considered?",
    "options": [
      "Throttle/idle relearn procedure",
      "Tire rotation",
      "Brake bleeding",
      "Fuel cap replacement"
    ],
    "answer": 0,
    "explanation": "Cleaning changes airflow through the throttle body. The PCM may need to relearn throttle position and idle airflow. Service information should be followed. ---"
  },
  {
    "id": 49,
    "category": "E4: Engine Management Systems",
    "question": "A scan tool shows APP sensor 1 and APP sensor 2 do not agree. What may the PCM do?",
    "options": [
      "Enter reduced power mode",
      "Increase fuel pressure only",
      "Disable brake lights",
      "Inflate tires"
    ],
    "answer": 0,
    "explanation": "Accelerator pedal sensors are compared for safety. Disagreement can make throttle control unsafe. The PCM may limit power until repaired. ---"
  },
  {
    "id": 50,
    "category": "E4: Engine Management Systems",
    "question": "A MAP sensor reads atmospheric pressure at idle on a running engine. What is likely?",
    "options": [
      "Sensor, hose, wiring, or low-vacuum issue",
      "Normal idle data always",
      "High tire pressure",
      "Bad brake pads"
    ],
    "answer": 0,
    "explanation": "At idle, manifold pressure should be lower than atmospheric. A high reading may be caused by sensor or vacuum problems. Actual engine vacuum and sensor data should be compared. ---"
  },
  {
    "id": 51,
    "category": "E4: Engine Management Systems",
    "question": "A downstream O2 sensor switches rapidly like the upstream sensor. What system should be evaluated?",
    "options": [
      "Catalytic converter efficiency",
      "Tire balance",
      "Brake light switch",
      "Door lock actuator"
    ],
    "answer": 0,
    "explanation": "A working catalyst smooths downstream oxygen changes. Rapid downstream switching may indicate low oxygen storage. Exhaust leaks and fuel control should also be checked. ---"
  },
  {
    "id": 52,
    "category": "E4: Engine Management Systems",
    "question": "A camshaft actuator code appears after an oil change with incorrect oil viscosity. Why is this important?",
    "options": [
      "VVT systems depend on correct oil flow and pressure",
      "Tire pressure depends on oil viscosity",
      "Spark plugs require engine oil",
      "Brake fluid mixes with engine oil"
    ],
    "answer": 0,
    "explanation": "Cam phasers and solenoids use engine oil pressure. Wrong viscosity can affect response time and control. Oil level, type, and condition should be verified. ---"
  },
  {
    "id": 53,
    "category": "E4: Engine Management Systems",
    "question": "Freeze-frame data shows a lean code set at idle with low vehicle speed. What test is useful?",
    "options": [
      "Smoke test for vacuum leaks",
      "Wheel balance test",
      "Brake rotor machining",
      "Battery load test only"
    ],
    "answer": 0,
    "explanation": "Idle lean faults often involve unmetered air. Smoke testing can reveal intake or vacuum leaks. Fuel trims should be checked before and after repair. ---"
  },
  {
    "id": 54,
    "category": "E4: Engine Management Systems",
    "question": "A misfire code returns after replacing the spark plug and coil. Compression is low on that cylinder. What is likely?",
    "options": [
      "Mechanical engine fault",
      "Fuel cap fault",
      "Tire imbalance",
      "ABS sensor issue"
    ],
    "answer": 0,
    "explanation": "Low compression can cause a misfire even with good spark. Mechanical faults include valves, rings, or timing issues. Cylinder leakage testing can help locate the cause. ---"
  },
  {
    "id": 55,
    "category": "E4: Engine Management Systems",
    "question": "An oxygen sensor heater code is present. What should be tested?",
    "options": [
      "Heater power, ground, resistance, and control circuit",
      "Tire tread depth",
      "Brake booster vacuum only",
      "Exhaust pipe colour"
    ],
    "answer": 0,
    "explanation": "Heater codes relate to the sensor heating circuit. Power, ground, resistance, and PCM control must be verified. Replacing the sensor without circuit checks may not fix it. ---"
  },
  {
    "id": 56,
    "category": "E4: Engine Management Systems",
    "question": "A MAF sensor reading is normal at idle but too low under load. What may be checked?",
    "options": [
      "Intake restriction, MAF contamination, and duct collapse",
      "Brake fluid level",
      "Tire valve caps",
      "Door striker alignment"
    ],
    "answer": 0,
    "explanation": "Airflow demand increases under load. A restriction or collapsing duct may only show during high airflow. Live data should be compared under the complaint condition. ---"
  },
  {
    "id": 57,
    "category": "E4: Engine Management Systems",
    "question": "A crank/cam correlation code appears after timing chain work. What should be checked first?",
    "options": [
      "Mechanical timing marks and sensor signals",
      "Tire pressure",
      "Brake pad thickness",
      "Washer fluid level"
    ],
    "answer": 0,
    "explanation": "Correlation codes compare crankshaft and camshaft positions. Recent timing work may indicate incorrect mechanical timing. Sensor signals and phaser positions should also be verified. ---"
  },
  {
    "id": 58,
    "category": "E4: Engine Management Systems",
    "question": "A purge valve is commanded closed, but fuel trims change when the purge hose is pinched. What does this indicate?",
    "options": [
      "Purge valve may be leaking",
      "Fuel pump is dead",
      "Spark plug gap is too wide",
      "Exhaust is restricted"
    ],
    "answer": 0,
    "explanation": "Pinching the hose changes airflow/vapor entering the intake. If the valve was commanded closed, it should not affect trims. A leaking purge valve can cause idle and trim problems. ---"
  },
  {
    "id": 59,
    "category": "E4: Engine Management Systems",
    "question": "A vehicle has poor acceleration and calculated load remains low. Which sensor data should be reviewed?",
    "options": [
      "MAF/MAP and throttle position data",
      "Tire pressure only",
      "Brake shoe lining only",
      "Seat heater temperature"
    ],
    "answer": 0,
    "explanation": "Calculated load depends on airflow and engine operating data. Low load during acceleration may indicate incorrect sensor input. MAF, MAP, and throttle data should be compared to expected values. ---"
  },
  {
    "id": 60,
    "category": "E4: Engine Management Systems",
    "question": "A PCM sets multiple sensor circuit low codes after engine replacement. What is a likely common issue?",
    "options": [
      "Shared ground or reference circuit disconnected",
      "All sensors failed at once",
      "Brake pads are worn",
      "Tire sizes are wrong"
    ],
    "answer": 0,
    "explanation": "Multiple circuit low codes often indicate a shared circuit problem. A missed connector or ground can affect several sensors. Common circuits should be checked first. ---"
  },
  {
    "id": 61,
    "category": "E4: Engine Management Systems",
    "question": "A VVT solenoid has correct power, but the PCM control wire never switches. What should be checked?",
    "options": [
      "PCM command conditions, control circuit, and driver",
      "Wheel bearing play",
      "Brake fluid moisture",
      "Tire rotation pattern"
    ],
    "answer": 0,
    "explanation": "The PCM may not command VVT unless conditions are met. If command is expected, the control wire and driver need testing. Scan data should confirm commanded duty cycle. ---"
  },
  {
    "id": 62,
    "category": "E4: Engine Management Systems",
    "question": "A vehicle has a false high IAT reading. How can this affect engine operation?",
    "options": [
      "Fuel and ignition timing calculations may be incorrect",
      "Tire pressure will rise",
      "Brake pedal will sink",
      "ABS will activate every stop"
    ],
    "answer": 0,
    "explanation": "Intake air temperature helps calculate air density. Incorrect data can change fuel and timing strategy. Sensor reading should match ambient temperature when cold. ---"
  },
  {
    "id": 63,
    "category": "E4: Engine Management Systems",
    "question": "A technician clears DTCs before recording freeze-frame data. Why is this a problem?",
    "options": [
      "Diagnostic information may be lost",
      "The vehicle cannot be repaired",
      "Fuel pressure rises",
      "The battery discharges instantly"
    ],
    "answer": 0,
    "explanation": "Freeze-frame shows conditions when the fault occurred. Clearing codes may erase important data. Information should be saved before clearing. ---"
  },
  {
    "id": 64,
    "category": "E4: Engine Management Systems",
    "question": "A cylinder misfire occurs only at cold start and disappears warm. What should be considered?",
    "options": [
      "Injector leakage, coolant intrusion, or cold mechanical sealing issue",
      "Tire pressure only",
      "Brake pad material",
      "Wiper park position"
    ],
    "answer": 0,
    "explanation": "Cold-start misfires can be caused by fuel, coolant, or sealing issues. Temperature changes may hide the fault when warm. Testing should focus on the cold condition."
  },
  {
    "id": 65,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "A vehicle lacks power above 3,000 RPM and manifold vacuum drops abnormally under load. What should be checked?",
    "options": [
      "Exhaust restriction",
      "Tire balance",
      "Brake fluid condition",
      "Door lock actuator"
    ],
    "answer": 0,
    "explanation": "Restricted exhaust limits airflow at higher engine speeds. The engine may idle normally but lose power under load. Backpressure or vacuum testing can confirm it. ---"
  },
  {
    "id": 66,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "A smoke machine reveals smoke from a cracked intake boot after the MAF sensor. What can this cause?",
    "options": [
      "Lean condition from unmetered air",
      "Rich condition always",
      "No change in fuel trim",
      "Brake pedal pulsation"
    ],
    "answer": 0,
    "explanation": "Air entering after the MAF is not measured. The PCM may underfuel the engine. The boot should be repaired and trims rechecked. ---"
  },
  {
    "id": 67,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "An exhaust manifold leak is located before the upstream oxygen sensor. What can it cause?",
    "options": [
      "False lean reading",
      "Higher fuel pressure directly",
      "Lower tire pressure",
      "Stronger spark"
    ],
    "answer": 0,
    "explanation": "Outside air can enter near the sensor. Extra oxygen can make the sensor report lean. The PCM may add unnecessary fuel. ---"
  },
  {
    "id": 68,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "A throttle plate sticks slightly due to carbon. What symptom may occur?",
    "options": [
      "Idle surge or delayed throttle response",
      "Low tire tread",
      "Brake fluid leak",
      "Alternator overcharge"
    ],
    "answer": 0,
    "explanation": "Carbon can interfere with throttle movement or airflow. Electronic throttle systems may need cleaning and relearn. The symptom should be verified after service. ---"
  },
  {
    "id": 69,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "A crushed tailpipe is found after the vehicle backed into a curb. What is the concern?",
    "options": [
      "Increased exhaust backpressure",
      "Low fuel pressure only",
      "Lower engine temperature always",
      "More ignition advance"
    ],
    "answer": 0,
    "explanation": "A crushed exhaust outlet restricts gas flow. Backpressure can reduce power and efficiency. The damaged pipe should be repaired. ---"
  },
  {
    "id": 70,
    "category": "E5: Gasoline Intake and Exhaust Systems",
    "question": "A leaking intake manifold gasket affects one runner more than others. What symptom is likely?",
    "options": [
      "Cylinder-specific lean misfire",
      "All tires overinflated",
      "Brake pedal hard only",
      "Battery overcharge"
    ],
    "answer": 0,
    "explanation": "A localized intake leak can affect one cylinder strongly. That cylinder may misfire from a lean mixture. Smoke testing and misfire data can help locate it."
  },
  {
    "id": 71,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A customer says the gas pump keeps clicking off while refueling. Which EVAP part may be involved?",
    "options": [
      "Vent valve or canister restriction",
      "Ignition coil",
      "Brake booster",
      "Wheel speed sensor"
    ],
    "answer": 0,
    "explanation": "The tank must vent during refueling. A stuck vent valve or saturated canister can restrict airflow. EVAP vent operation should be inspected. ---"
  },
  {
    "id": 72,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "An EVAP smoke test shows smoke from the fuel filler neck seal. What should be done?",
    "options": [
      "Repair the leak and retest the system",
      "Replace the catalytic converter",
      "Adjust tire pressure",
      "Replace spark plugs"
    ],
    "answer": 0,
    "explanation": "EVAP leaks prevent the system from sealing. The leaking seal must be repaired before monitor testing can pass. A retest confirms the repair. ---"
  },
  {
    "id": 73,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A catalytic converter efficiency code appears after weeks of misfire complaints. What should be considered?",
    "options": [
      "Converter may be damaged by unburned fuel",
      "Tire pressure is too high",
      "Brake fluid is contaminated",
      "Windshield camera is blocked"
    ],
    "answer": 0,
    "explanation": "Misfires send unburned fuel into the exhaust. Fuel burning in the converter can overheat and damage it. The misfire must be fixed before replacing the converter. ---"
  },
  {
    "id": 74,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "An EGR valve stuck open causes rough idle. Why?",
    "options": [
      "Exhaust gas dilutes the idle mixture too much",
      "It increases tire pressure",
      "It improves idle stability",
      "It raises fuel pressure directly"
    ],
    "answer": 0,
    "explanation": "EGR flow is usually not desired at idle. Too much exhaust gas reduces combustion stability. The valve and control circuit should be checked. ---"
  },
  {
    "id": 75,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A secondary air injection code sets only on cold start. Why does this timing matter?",
    "options": [
      "The system operates mainly during cold-start catalyst warm-up",
      "It only works during tire rotation",
      "It controls brake pressure",
      "It runs only at wide-open throttle"
    ],
    "answer": 0,
    "explanation": "Secondary air is used to reduce cold-start emissions. The PCM checks airflow when the system is commanded. Pump, valves, hoses, and circuits should be tested cold. ---"
  },
  {
    "id": 76,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A purge valve is stuck closed. Which monitor may fail?",
    "options": [
      "EVAP purge flow monitor",
      "ABS monitor",
      "TPMS monitor",
      "Brake pad monitor"
    ],
    "answer": 0,
    "explanation": "The PCM expects vapor flow when purge is commanded. A stuck-closed valve prevents that flow. Purge command and pressure response should be checked. ---"
  },
  {
    "id": 77,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A downstream oxygen sensor signal is flat because of a wiring fault. What can happen?",
    "options": [
      "False catalyst monitor results or O2 sensor codes",
      "Low tire pressure",
      "Hard brake pedal",
      "Higher spark output"
    ],
    "answer": 0,
    "explanation": "Catalyst monitoring depends on downstream oxygen sensor data. A wiring fault can make the signal unreliable. The circuit must be repaired before judging the catalyst. ---"
  },
  {
    "id": 78,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "An EVAP vent valve is stuck open during a leak test. What result is likely?",
    "options": [
      "System cannot hold vacuum or pressure",
      "Fuel pressure becomes too high",
      "Spark timing advances",
      "Brake pedal softens"
    ],
    "answer": 0,
    "explanation": "Leak tests require the EVAP system to seal. A stuck-open vent creates a large leak path. The vent valve operation should be tested. ---"
  },
  {
    "id": 79,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "A converter is physically broken inside and rattles. What symptom may occur?",
    "options": [
      "Noise and possible exhaust restriction",
      "Higher tire pressure",
      "Better fuel economy always",
      "Stronger ignition coil output"
    ],
    "answer": 0,
    "explanation": "A damaged catalyst substrate can rattle. Broken pieces may block exhaust flow. The converter and root cause should be inspected. ---"
  },
  {
    "id": 80,
    "category": "E6: Gasoline Emissions Control Systems",
    "question": "An EVAP monitor will not complete because the fuel tank is nearly empty. Why?",
    "options": [
      "Monitor requires specific fuel level range",
      "Empty tank improves testing",
      "It proves the purge valve is bad",
      "It disables ignition coils"
    ],
    "answer": 0,
    "explanation": "EVAP monitors often require fuel level within a set range. Too full or too empty can prevent accurate leak testing. Readiness criteria should be reviewed."
  },
  {
    "id": 81,
    "category": "G1: Describe Networking Systems",
    "question": "A vehicle has no communication with the HVAC module, but all other modules communicate. What should be checked first?",
    "options": [
      "HVAC module power, ground, and network connection",
      "Tire pressure",
      "Brake rotor thickness",
      "Fuel injector balance"
    ],
    "answer": 0,
    "explanation": "One offline module usually points to a local fault. Power, ground, and network wiring must be verified. Module replacement should not be the first step. ---"
  },
  {
    "id": 82,
    "category": "G1: Describe Networking Systems",
    "question": "A CAN low wire is shorted to ground. What is the likely result?",
    "options": [
      "Network communication problems",
      "Higher engine compression",
      "Better sensor signals",
      "Brake fluid leak"
    ],
    "answer": 0,
    "explanation": "CAN communication depends on proper voltage patterns. A short to ground distorts the bus signal. Modules may stop communicating or set U-codes. ---"
  },
  {
    "id": 83,
    "category": "G1: Describe Networking Systems",
    "question": "A gateway module is replaced and several features no longer work. What may be required?",
    "options": [
      "Programming or configuration",
      "Tire rotation",
      "Brake bleeding",
      "Spark plug replacement"
    ],
    "answer": 0,
    "explanation": "Gateways route messages and may store vehicle configuration. Replacement modules often need programming. Service procedures must be followed. ---"
  },
  {
    "id": 84,
    "category": "G1: Describe Networking Systems",
    "question": "A technician repairs CAN wiring with a long untwisted section near ignition coils. What is the concern?",
    "options": [
      "Electrical noise may interfere with communication",
      "Fuel pressure may drop",
      "Brake pedal may sink",
      "Tire tread may wear faster"
    ],
    "answer": 0,
    "explanation": "Twisted-pair wiring reduces electromagnetic interference. Ignition coils can create electrical noise. Network wire repairs must maintain proper construction."
  },
  {
    "id": 85,
    "category": "I4: Electrical Options and Accessories",
    "question": "A heated rear window clears only the top half. Power and ground are present at the grid. What is likely?",
    "options": [
      "Open lower grid lines",
      "Bad fuel pump",
      "Low engine compression",
      "Restricted exhaust"
    ],
    "answer": 0,
    "explanation": "Each grid line acts as a heating circuit. Open lines will not heat or clear the glass. A grid repair test can locate the open sections. ---"
  },
  {
    "id": 86,
    "category": "I4: Electrical Options and Accessories",
    "question": "A power seat clicks but does not move. The motor receives voltage, and the track is jammed with a coin. What is the correct diagnosis?",
    "options": [
      "Mechanical binding in the seat track",
      "Failed alternator",
      "Bad spark plug",
      "EVAP leak"
    ],
    "answer": 0,
    "explanation": "Voltage and clicking show the circuit may be trying to operate. A jammed track can stop seat movement. Mechanical binding should be corrected before motor replacement. ---"
  },
  {
    "id": 87,
    "category": "I4: Electrical Options and Accessories",
    "question": "A rear wiper works but does not park correctly. What area should be checked?",
    "options": [
      "Wiper motor park circuit or linkage position",
      "Fuel rail pressure",
      "Brake booster vacuum",
      "Ignition timing"
    ],
    "answer": 0,
    "explanation": "The park circuit controls the rest position. Linkage indexing can also affect where the wiper stops. Electrical and mechanical parts should both be inspected. ---"
  },
  {
    "id": 88,
    "category": "I4: Electrical Options and Accessories",
    "question": "A keyless entry remote unlocks doors intermittently, but the interior switch works every time. What is likely?",
    "options": [
      "Remote battery, transmitter, or receiver issue",
      "Door lock actuator failure only",
      "Fuel pump fault",
      "Exhaust restriction"
    ],
    "answer": 0,
    "explanation": "The locks work from the interior switch, so actuators are likely functional. The intermittent concern is related to remote command or reception. Remote battery and signal should be checked first. ---"
  },
  {
    "id": 89,
    "category": "I4: Electrical Options and Accessories",
    "question": "A power mirror heater does not work, but mirror adjustment works. What should be tested?",
    "options": [
      "Heater element and heater power/ground circuit",
      "Mirror adjustment motor only",
      "Fuel injector pulse",
      "Brake hydraulic pressure"
    ],
    "answer": 0,
    "explanation": "Mirror adjustment and mirror heat are separate circuits. A working adjustment motor does not prove the heater works. Heater resistance and power supply should be checked. ---"
  },
  {
    "id": 90,
    "category": "I4: Electrical Options and Accessories",
    "question": "A sunroof closes, then reopens immediately. The tracks are dirty and dry. What is likely?",
    "options": [
      "Anti-pinch response from excessive resistance",
      "Low fuel pressure",
      "Weak ignition coil",
      "Bad catalytic converter"
    ],
    "answer": 0,
    "explanation": "Sunroofs may reverse if resistance is detected. Dirty or dry tracks can create high load. Cleaning, lubrication, and initialization may be needed."
  },
  {
    "id": 91,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A windshield camera vehicle had the windshield replaced. The lane keeping system now drifts toward lane markings. What is likely required?",
    "options": [
      "Camera calibration",
      "Brake bleeding",
      "Fuel injector cleaning",
      "Spark plug replacement"
    ],
    "answer": 0,
    "explanation": "Windshield camera position can change after glass replacement. Lane systems depend on accurate camera aiming. Calibration should be performed to manufacturer procedure. ---"
  },
  {
    "id": 92,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A front radar sensor bracket is bent slightly after a minor collision. The adaptive cruise warning is on. What should be done?",
    "options": [
      "Inspect mounting and perform required calibration",
      "Clear the code only",
      "Replace all tires",
      "Add brake fluid"
    ],
    "answer": 0,
    "explanation": "Radar sensors require precise alignment. A small bracket bend can shift the detection zone. Repair and calibration are required before returning the vehicle. ---"
  },
  {
    "id": 93,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A blind spot monitoring system works on the left but not the right after bumper repair. What should be checked?",
    "options": [
      "Right rear radar sensor, bracket, wiring, and bumper material",
      "Fuel pressure regulator",
      "Ignition coil gap",
      "Engine oil viscosity"
    ],
    "answer": 0,
    "explanation": "Blind spot sensors are often mounted behind bumper areas. Repair materials or bracket alignment can affect operation. Sensor data and codes should be checked. ---"
  },
  {
    "id": 94,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A dynamic calibration procedure fails repeatedly because road lane markings are faded. What is the issue?",
    "options": [
      "Camera cannot detect required lane references",
      "Fuel pressure is too low",
      "Brake pads are too thick",
      "Battery is overfilled"
    ],
    "answer": 0,
    "explanation": "Dynamic calibration may require clear lane markings. Poor road conditions can prevent completion. The procedure should be repeated under proper conditions. ---"
  },
  {
    "id": 95,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A vehicle needs ADAS calibration after alignment. Why is alignment important?",
    "options": [
      "Sensor aim depends on vehicle direction and thrust line",
      "Alignment increases fuel pressure",
      "Alignment changes engine compression",
      "Alignment adjusts battery voltage"
    ],
    "answer": 0,
    "explanation": "ADAS sensors assume the vehicle tracks straight. Incorrect alignment can bias sensor calibration. Pre-calibration requirements must be satisfied. ---"
  },
  {
    "id": 96,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A forward camera is blocked by a dash camera mount on the windshield. What may occur?",
    "options": [
      "Lane and collision systems may be disabled",
      "Fuel tank pressure rises",
      "Brake fluid leaks",
      "Spark plug gap changes"
    ],
    "answer": 0,
    "explanation": "Cameras need a clear field of view. Obstructions can prevent object or lane detection. The obstruction should be removed and system operation verified. ---"
  },
  {
    "id": 97,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A radar-based system has warning lights after the bumper was repainted with thick filler over the sensor area. Why?",
    "options": [
      "Radar signal may be blocked or distorted",
      "Tire pressure changed",
      "Fuel injector pulse stopped",
      "Brake booster failed"
    ],
    "answer": 0,
    "explanation": "Radar sensors transmit through bumper material. Incorrect repair thickness or material can affect the signal. Repair guidelines and calibration must be followed. ---"
  },
  {
    "id": 98,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "An ADAS calibration target is placed 100 mm too far forward. What is the concern?",
    "options": [
      "Calibration may be inaccurate",
      "Fuel pressure will increase",
      "Brake pedal will soften",
      "Engine timing will reset"
    ],
    "answer": 0,
    "explanation": "Calibration target position must be precise. Small errors can affect sensor aiming. Measurements must match service information. ---"
  },
  {
    "id": 99,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A steering angle sensor zero point is wrong after suspension repair. Which system may be affected?",
    "options": [
      "Lane keeping and stability control functions",
      "Fuel pump only",
      "Rear defroster only",
      "Wiper washer pump only"
    ],
    "answer": 0,
    "explanation": "ADAS and stability systems use steering angle data. A wrong zero point can affect control decisions. Calibration may be required after repair. ---"
  },
  {
    "id": 100,
    "category": "K5: Advanced Driver Assistance Systems",
    "question": "A collision warning system does not detect vehicles ahead in heavy snow. What is the most likely explanation?",
    "options": [
      "Sensor view or radar path is blocked by snow",
      "Ignition timing is wrong",
      "Fuel pressure is too high",
      "Brake pads are new"
    ],
    "answer": 0,
    "explanation": "ADAS sensors need a clear view or signal path. Snow, ice, and dirt can block cameras or radar. The system may disable itself until cleaned."
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

    const shuffledSheetMetalWorkerLevel1Set2Questions =
      automotiveServiceTechnicianLevel3Set3Questions.map(shuffleOptionsForQuestion);

    createPremiumQuizApp({
      tradeSlug: "sheet-metal-worker",
      tradeTitle: "Automotive Service Technician",
      sectionTitle: "Level 1 Practice Quiz – Quiz 3",
      questionTimeSeconds: 90,
      questions: shuffledSheetMetalWorkerLevel1Set2Questions
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
        return shuffledSheetMetalWorkerLevel1Set2Questions.find(q => q.question === questionText);
      }

      function resetHint() {
        if (!hintBox || !hintText || !hintBtn) return;
        hintBox.classList.add("hidden");
        hintText.textContent = "";
        hintBtn.textContent = "Show Hint";
      }

      if (hintBtn) {
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
