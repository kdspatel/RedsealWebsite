const automotiveServiceTechnicianLevel3PracticeQuestions = [
{
"id": 1,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician is diagnosing a 5-volt reference circuit that reads 0 volts at multiple sensors. What is the best first step?",
"options": [
"Replace all sensors on the circuit",
"Check for a shorted sensor or wire pulling the reference voltage down",
"Replace the battery",
"Reprogram the radio"
],
"answer": 1,
"explanation": "A shared 5-volt reference can be pulled low by one shorted sensor or wire. Disconnecting sensors one at a time may help isolate the fault. Replacing all sensors without testing is not proper diagnosis. ---"
},
{
"id": 2,
"category": "E1: Advanced Wiring and Electronics",
"question": "A sensor signal wire shows normal voltage with the connector unplugged, but drops to 0 volts when plugged in. What is likely?",
"options": [
"Sensor or circuit is loading the signal down",
"Battery is overcharged",
"Tire pressure is low",
"Alternator belt is loose"
],
"answer": 0,
"explanation": "A signal that changes only when connected may be affected by sensor load or internal failure. The circuit should be tested under operating conditions. Connector, ground, and sensor condition should be verified. ---"
},
{
"id": 3,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician is checking a CAN network and finds 60 ohms between CAN high and CAN low with the battery disconnected. What does this usually indicate?",
"options": [
"Both terminating resistors are likely present",
"The network is shorted to power",
"The battery is dead",
"The fuel pump is faulty"
],
"answer": 0,
"explanation": "Two 120-ohm terminating resistors in parallel usually measure about 60 ohms. This is a common network check. Further testing is still needed if communication faults remain. ---"
},
{
"id": 4,
"category": "E1: Advanced Wiring and Electronics",
"question": "A scan tool cannot communicate with any modules. What should be checked early in diagnosis?",
"options": [
"DLC power, ground, and network circuits",
"Engine oil level only",
"Tire tread depth",
"Brake rotor thickness"
],
"answer": 0,
"explanation": "The data link connector needs power, ground, and network connections. A fault at the DLC can prevent scan tool communication. Basic electrical checks should be done before replacing modules. ---"
},
{
"id": 5,
"category": "E1: Advanced Wiring and Electronics",
"question": "A circuit works when cold but fails after the engine compartment heats up. What type of fault is possible?",
"options": [
"Heat-related open or high resistance",
"Correct operation",
"Low tire pressure",
"Bad brake fluid only"
],
"answer": 0,
"explanation": "Heat can expand terminals, wires, or internal components. This may create opens or resistance only when hot. The fault should be tested under the same conditions. ---"
},
{
"id": 6,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician sees a square wave signal on a scope from a crankshaft position sensor. What does this signal represent?",
"options": [
"Switching voltage as the sensor detects teeth or slots",
"Fuel pressure only",
"Brake fluid level",
"Tire rotation balance"
],
"answer": 0,
"explanation": "Many digital sensors create square wave signals. The signal changes as the trigger wheel passes the sensor. Signal shape, frequency, and amplitude help diagnosis. ---"
},
{
"id": 7,
"category": "E1: Advanced Wiring and Electronics",
"question": "Why is back-probing preferred over piercing wires when possible?",
"options": [
"It avoids damaging insulation",
"It increases circuit resistance",
"It makes fuses larger",
"It disables the module"
],
"answer": 0,
"explanation": "Piercing insulation can allow corrosion later. Back-probing reduces wiring damage when done carefully. Correct test adapters are even better when available. ---"
},
{
"id": 8,
"category": "E1: Advanced Wiring and Electronics",
"question": "A module has battery power and ignition power, but no ground. What is likely?",
"options": [
"Module may not operate or communicate",
"Module will always work normally",
"Tires will deflate",
"Fuel pressure will increase"
],
"answer": 0,
"explanation": "Modules require proper power and ground circuits. Missing ground prevents current flow. Ground voltage drop testing can confirm the fault. ---"
},
{
"id": 9,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician finds 2 volts of voltage drop on a main ground cable during cranking. What does this indicate?",
"options": [
"Excessive resistance in the ground path",
"Normal ground condition",
"Alternator overcharging",
"Correct starter current"
],
"answer": 0,
"explanation": "High voltage drop shows resistance under load. A starter ground should have very low voltage drop. Cable ends, connections, and ground straps should be inspected. ---"
},
{
"id": 10,
"category": "E1: Advanced Wiring and Electronics",
"question": "A sensor ground circuit shows 1.5 volts above battery negative while running. What is the concern?",
"options": [
"Sensor readings may be inaccurate",
"Tires may wear faster",
"Brake pads may overheat",
"Engine oil level will rise"
],
"answer": 0,
"explanation": "Sensor grounds should be near 0 volts relative to battery negative. Extra voltage on ground changes signal interpretation. Ground integrity must be repaired before sensor replacement. ---"
},
{
"id": 11,
"category": "E1: Advanced Wiring and Electronics",
"question": "A connector has spread terminals. What symptom can this create?",
"options": [
"Intermittent circuit operation",
"Higher fuel octane",
"Stronger spark always",
"Higher compression"
],
"answer": 0,
"explanation": "Spread terminals may not grip mating pins tightly. Vibration can open the circuit intermittently. Terminal tension should be inspected and repaired. ---"
},
{
"id": 12,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician sees a sensor signal stuck at 5 volts. What is a possible cause?",
"options": [
"Open sensor ground or signal circuit fault",
"Low tire pressure",
"Plugged exhaust only",
"Weak brake booster"
],
"answer": 0,
"explanation": "A signal stuck high may be caused by an open ground or circuit problem. Some PCM inputs are biased high. Testing power, ground, and signal is required. ---"
},
{
"id": 13,
"category": "E1: Advanced Wiring and Electronics",
"question": "A wiring harness rubs against a sharp bracket and occasionally blows a fuse. What is most likely?",
"options": [
"Intermittent short to ground",
"Open thermostat",
"Dirty fuel injector",
"Normal circuit operation"
],
"answer": 0,
"explanation": "Rubbing can expose a conductor. When it touches metal, current may short to ground. The harness should be repaired and protected. ---"
},
{
"id": 14,
"category": "E1: Advanced Wiring and Electronics",
"question": "A current ramp test on a fuel pump is useful because it can show:",
"options": [
"Electrical and mechanical pump condition",
"Tire balance",
"Coolant freeze point",
"Brake pad thickness"
],
"answer": 0,
"explanation": "Current ramping shows motor current pattern. Abnormal patterns can indicate worn brushes, armature issues, or mechanical load. It helps diagnose without removing the pump. ---"
},
{
"id": 15,
"category": "E1: Advanced Wiring and Electronics",
"question": "A technician is diagnosing an intermittent module communication fault. Which tool can show network signal quality?",
"options": [
"Lab scope",
"Tire gauge",
"Compression gauge",
"Brake lathe"
],
"answer": 0,
"explanation": "A lab scope can display CAN waveform activity. It helps identify shorts, noise, or distorted signals. Scan tools may show codes but not waveform quality. ---"
},
{
"id": 16,
"category": "E1: Advanced Wiring and Electronics",
"question": "A fuse has power on one side but not the other while installed. What does this usually mean?",
"options": [
"Fuse is open",
"Circuit is overfilled",
"Battery is perfect",
"Sensor is calibrated"
],
"answer": 0,
"explanation": "A good fuse should pass voltage to both sides. Power on only one side means the fuse element is open. The cause of the blown fuse should be diagnosed."
},
{
"id": 17,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A gasoline direct injection engine has a long crank and low high-pressure fuel rail reading. What should be checked?",
"options": [
"Low-pressure supply and high-pressure pump operation",
"Tire size",
"Brake fluid level",
"Cabin filter"
],
"answer": 0,
"explanation": "Direct injection systems use low- and high-pressure fuel sides. A fault in either can reduce rail pressure. Diagnosis should follow pressure and command data. ---"
},
{
"id": 18,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A fuel pressure test shows pressure drops quickly after shutdown. What may cause this?",
"options": [
"Leaking injector, check valve, or pressure regulator",
"Bad wheel bearing",
"Low coolant concentration",
"Faulty wiper motor"
],
"answer": 0,
"explanation": "Fuel pressure should hold for a specified time. A rapid drop may indicate leakage in the fuel system. The leak path must be isolated. ---"
},
{
"id": 19,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A port fuel injector has power but no control pulse. What should be checked?",
"options": [
"PCM driver circuit and related inputs",
"Tire pressure",
"Brake rotor runout",
"Exhaust hanger"
],
"answer": 0,
"explanation": "Injectors usually have power and are pulsed by the PCM ground/control side. Missing pulse may be caused by wiring, PCM driver, or missing engine speed input. Diagnosis should include scan and circuit tests. ---"
},
{
"id": 20,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A cylinder misfire improves when injector balance testing shows one injector flows less than others. What is likely?",
"options": [
"Restricted or faulty injector",
"Broken sway bar link",
"Overfilled transmission",
"Low tire pressure"
],
"answer": 0,
"explanation": "Injector balance compares pressure drop or fuel delivery. Less flow can create a lean misfire. The injector circuit and mechanical flow should both be checked. ---"
},
{
"id": 21,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A technician finds high fuel trim numbers at idle that improve at higher RPM. What is a likely cause?",
"options": [
"Vacuum leak",
"Restricted fuel filter only",
"Overcharging alternator",
"Incorrect tire size"
],
"answer": 0,
"explanation": "Vacuum leaks have a larger effect at idle. Extra unmetered air causes the PCM to add fuel. Smoke testing may help locate the leak. ---"
},
{
"id": 22,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A fuel pump has correct voltage but low current and low pressure. What could this indicate?",
"options": [
"Weak pump motor or poor pump output",
"Shorted brake switch",
"High tire pressure",
"Clogged cabin filter"
],
"answer": 0,
"explanation": "Correct voltage means supply may be good. Low current with low pressure can indicate weak pump operation. Fuel volume and pressure should be tested. ---"
},
{
"id": 23,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A restricted fuel filter most commonly causes:",
"options": [
"Low fuel volume under load",
"High brake pressure",
"Excessive tire wear",
"More ignition timing"
],
"answer": 0,
"explanation": "Restriction may allow idle operation but fail under demand. The engine may hesitate or lack power. Pressure and volume testing can confirm the condition. ---"
},
{
"id": 24,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A fuel injector is stuck open. What symptom may occur?",
"options": [
"Rich exhaust and fuel-fouled spark plug",
"Lean misfire only",
"Low tire pressure",
"Hard brake pedal"
],
"answer": 0,
"explanation": "A stuck-open injector allows too much fuel. This can create rich operation, smoke, misfire, or fuel odor. It may also damage the catalytic converter. ---"
},
{
"id": 25,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A scan tool shows commanded fuel pump duty cycle high, but fuel pressure remains low. What should be suspected?",
"options": [
"Pump, fuel supply restriction, or electrical voltage drop",
"Normal operation",
"Overinflated tires",
"Bad door latch"
],
"answer": 0,
"explanation": "High command means the module is trying to increase pressure. If pressure stays low, the pump or supply system may not respond. Voltage drop and pressure tests are needed. ---"
},
{
"id": 26,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A leaking fuel pressure regulator diaphragm on a vacuum-referenced system may cause:",
"options": [
"Fuel in the vacuum hose",
"Low brake fluid",
"Alternator overcharge",
"TPMS fault"
],
"answer": 0,
"explanation": "A ruptured diaphragm can pull fuel into the intake through the vacuum hose. This creates rich running and hard starting. The regulator should be inspected. ---"
},
{
"id": 27,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A direct injector is removed from an engine. Why are seals important during reinstallation?",
"options": [
"They seal combustion and fuel pressure correctly",
"They increase tire traction",
"They adjust ignition timing",
"They hold coolant pressure"
],
"answer": 0,
"explanation": "Direct injectors operate in the combustion chamber area. Proper seals prevent combustion leakage and fuel leakage. Many seals are single-use and require special tools. ---"
},
{
"id": 28,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A no-start engine has no injector pulse and no RPM signal on the scan tool while cranking. What is likely?",
"options": [
"Crankshaft position sensor or circuit fault",
"Clogged air filter only",
"Low tire tread",
"Weak brake booster"
],
"answer": 0,
"explanation": "The PCM needs engine speed information to pulse injectors. No RPM signal points to crank sensor input or circuit. The sensor signal should be tested. ---"
},
{
"id": 29,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A vehicle has excessive negative fuel trim. What does this mean?",
"options": [
"PCM is subtracting fuel because mixture appears rich",
"PCM is adding fuel because mixture is lean",
"Tire pressure is low",
"Charging system is disabled"
],
"answer": 0,
"explanation": "Negative fuel trim means the PCM is reducing fuel delivery. This usually indicates a rich condition or incorrect sensor input. Fuel pressure, injectors, and sensors should be checked. ---"
},
{
"id": 30,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A mass airflow sensor under-reports airflow. What fuel mixture result is likely?",
"options": [
"Lean condition",
"Rich condition always",
"No effect",
"Brake fade"
],
"answer": 0,
"explanation": "If airflow is under-reported, the PCM may command too little fuel. This can create lean trims, hesitation, or misfire. MAF data should be compared with expected values. ---"
},
{
"id": 31,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A fuel pump relay clicks but the pump does not run. What should be checked?",
"options": [
"Relay output, pump power, ground, and pump current",
"Spark plug gap only",
"Brake pad thickness",
"Tire date code"
],
"answer": 0,
"explanation": "Relay clicking only proves the control side may work. The load side still needs voltage and ground at the pump. Current testing can help confirm pump condition. ---"
},
{
"id": 32,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A customer complains of hesitation only at wide-open throttle. Which fuel test is most useful?",
"options": [
"Fuel pressure and volume under load",
"Parking brake adjustment",
"Tire rotation",
"Cabin air filter test"
],
"answer": 0,
"explanation": "Fuel demand is highest under heavy load. A weak pump or restriction may only appear then. Testing must match the complaint conditions. ---"
},
{
"id": 33,
"category": "E2: Gasoline Fuel Delivery and Injection Systems",
"question": "A fuel rail pressure sensor signal is inaccurate. What can happen?",
"options": [
"Incorrect fuel pressure control",
"Improved fuel economy always",
"Higher tire pressure",
"Brake pedal pulsation"
],
"answer": 0,
"explanation": "The PCM uses rail pressure data to control fuel delivery. Incorrect data can cause rich, lean, or no-start conditions. Sensor power, ground, and signal must be tested."
},
{
"id": 34,
"category": "E3: Gasoline Ignition Systems",
"question": "A coil-on-plug engine has a misfire on cylinder 4. The coil is swapped to cylinder 2 and the misfire moves. What is the likely fault?",
"options": [
"Ignition coil",
"Fuel tank",
"Brake booster",
"Wheel bearing"
],
"answer": 0,
"explanation": "If the misfire follows the coil, the coil is suspect. Swapping components is a useful confirmation test. The spark plug and circuit should still be inspected. ---"
},
{
"id": 35,
"category": "E3: Gasoline Ignition Systems",
"question": "A spark plug has a cracked insulator. What symptom may occur?",
"options": [
"Misfire under load",
"High brake pedal",
"Low tire pressure",
"Rich fuel trim always"
],
"answer": 0,
"explanation": "A cracked insulator can allow spark leakage. Misfire is often worse under load when voltage demand is higher. The plug should be replaced. ---"
},
{
"id": 36,
"category": "E3: Gasoline Ignition Systems",
"question": "A technician finds spark tracking marks on a coil boot. What does this indicate?",
"options": [
"High-voltage spark leakage",
"Normal boot condition",
"Low coolant level",
"Good tire balance"
],
"answer": 0,
"explanation": "Tracking marks show spark has traveled outside the intended path. This can cause misfires. The boot, plug, and coil should be inspected. ---"
},
{
"id": 37,
"category": "E3: Gasoline Ignition Systems",
"question": "An ignition coil has power and ground but no trigger signal. What should be checked?",
"options": [
"PCM command circuit and crank/cam inputs",
"Brake rotor thickness",
"Tire pressure",
"Door lock actuator"
],
"answer": 0,
"explanation": "Coils need a control signal to fire. Missing trigger may be caused by wiring, PCM driver, or missing position sensor input. Scan data and scope testing help diagnosis. ---"
},
{
"id": 38,
"category": "E3: Gasoline Ignition Systems",
"question": "A wide spark plug gap can cause:",
"options": [
"Higher firing voltage demand",
"Lower ignition voltage demand",
"Better spark always",
"Lower compression"
],
"answer": 0,
"explanation": "A larger gap requires more voltage to jump. This can overload coils or cause misfire. Spark plug gap must match specification. ---"
},
{
"id": 39,
"category": "E3: Gasoline Ignition Systems",
"question": "A misfire occurs mostly during acceleration. Why can ignition be suspect?",
"options": [
"Cylinder pressure is higher under load, increasing spark demand",
"Tires spin slower under load",
"Brake pressure drops under load",
"Coolant stops moving"
],
"answer": 0,
"explanation": "Higher cylinder pressure makes spark harder to jump. Weak coils, plugs, or boots may fail under load. Road testing and misfire data can help isolate the cylinder. ---"
},
{
"id": 40,
"category": "E3: Gasoline Ignition Systems",
"question": "A crankshaft position sensor signal is missing. What ignition result is likely?",
"options": [
"No spark or no start",
"More spark advance",
"Better idle",
"Higher tire pressure"
],
"answer": 0,
"explanation": "The PCM needs crank position to time spark. Without this input, ignition may be disabled. Sensor waveform and circuits should be tested. ---"
},
{
"id": 41,
"category": "E3: Gasoline Ignition Systems",
"question": "A spark tester should be used because it:",
"options": [
"Checks spark ability under a controlled gap",
"Measures fuel pressure",
"Adjusts cam timing",
"Balances wheels"
],
"answer": 0,
"explanation": "A spark tester verifies ignition strength more safely than open spark testing. It provides a known test gap. Proper tools prevent damage and injury. ---"
},
{
"id": 42,
"category": "E3: Gasoline Ignition Systems",
"question": "Oil in a spark plug tube may cause:",
"options": [
"Coil boot deterioration and misfire",
"Higher compression always",
"Improved insulation",
"Better fuel atomization"
],
"answer": 0,
"explanation": "Oil can damage ignition boots and create spark leakage paths. This can cause misfires. The oil leak source, often a valve cover seal, should be repaired. ---"
},
{
"id": 43,
"category": "E3: Gasoline Ignition Systems",
"question": "Ignition timing on many modern engines is controlled mainly by:",
"options": [
"PCM using sensor inputs",
"Manual distributor rotation only",
"Tire pressure sensor",
"Brake switch only"
],
"answer": 0,
"explanation": "Modern systems calculate timing electronically. The PCM uses crank, cam, load, knock, and temperature inputs. Incorrect sensor data can affect timing. ---"
},
{
"id": 44,
"category": "E3: Gasoline Ignition Systems",
"question": "A knock sensor detects detonation. How may the PCM respond?",
"options": [
"Retard ignition timing",
"Increase tire pressure",
"Open the brake bleeder",
"Disable fuel tank venting only"
],
"answer": 0,
"explanation": "Detonation can damage the engine. The PCM may reduce ignition advance to protect the engine. Knock sensor circuit faults can affect performance. ---"
},
{
"id": 45,
"category": "E3: Gasoline Ignition Systems",
"question": "A secondary ignition waveform shows high firing voltage on one cylinder. What can cause this?",
"options": [
"Excessive plug gap or high resistance",
"Shorted plug gap",
"Low compression only",
"Low tire pressure"
],
"answer": 0,
"explanation": "High firing voltage means the spark had difficulty jumping. Excessive gap, lean mixture, or high resistance can cause it. Waveform analysis helps identify ignition faults."
},
{
"id": 46,
"category": "E4: Engine Management Systems",
"question": "A vehicle has a stored P0171 lean code. Which data is most useful to review first?",
"options": [
"Fuel trims and oxygen sensor data",
"Tire pressure",
"Brake pad thickness",
"Wheel alignment angles"
],
"answer": 0,
"explanation": "Fuel trims show how the PCM is correcting mixture. Oxygen sensor data helps confirm lean or rich feedback. Diagnosis should use live data before replacing parts. ---"
},
{
"id": 47,
"category": "E4: Engine Management Systems",
"question": "Short-term fuel trim is rapidly changing while long-term fuel trim is high positive. What does this mean?",
"options": [
"PCM is adding fuel over time",
"PCM is removing fuel over time",
"Charging system is off",
"ABS is active"
],
"answer": 0,
"explanation": "Positive fuel trim means the PCM is increasing fuel delivery. Long-term trim shows learned correction. A lean condition or false lean input should be diagnosed. ---"
},
{
"id": 48,
"category": "E4: Engine Management Systems",
"question": "A coolant temperature sensor reads -40°C on a warm engine. What is likely?",
"options": [
"Open circuit or sensor fault",
"Engine is overheating",
"Fuel pressure is too high",
"Brake fluid is boiling"
],
"answer": 0,
"explanation": "-40°C is a common default for an open ECT circuit. The PCM may enrich the mixture. Sensor wiring and resistance should be checked. ---"
},
{
"id": 49,
"category": "E4: Engine Management Systems",
"question": "An engine runs rich and the coolant temperature sensor reads colder than actual. Why?",
"options": [
"PCM may command extra fuel for cold operation",
"PCM will stop all injection",
"Tire pressure will increase",
"Ignition coils will shut off only"
],
"answer": 0,
"explanation": "The PCM enriches mixture when it thinks the engine is cold. A false cold signal can cause rich running. Sensor accuracy should be compared to actual temperature. ---"
},
{
"id": 50,
"category": "E4: Engine Management Systems",
"question": "A throttle-by-wire system has two accelerator pedal position sensors. Why?",
"options": [
"For safety and signal comparison",
"To increase fuel pressure",
"To control tire pressure",
"To replace the oxygen sensor"
],
"answer": 0,
"explanation": "Redundant sensors allow the PCM to compare signals. If signals disagree, the system may enter reduced power mode. This improves safety. ---"
},
{
"id": 51,
"category": "E4: Engine Management Systems",
"question": "A throttle body is replaced and idle is unstable afterward. What may be required?",
"options": [
"Throttle relearn or adaptation",
"Tire balancing",
"Brake bleeding",
"Wheel alignment"
],
"answer": 0,
"explanation": "Electronic throttles may need learned values reset. The PCM must know throttle position and airflow characteristics. Service information gives the relearn procedure. ---"
},
{
"id": 52,
"category": "E4: Engine Management Systems",
"question": "A MAP sensor reads high pressure at idle. What could this indicate?",
"options": [
"Low engine vacuum or sensor issue",
"High tire pressure",
"Low fuel level",
"Correct idle always"
],
"answer": 0,
"explanation": "At idle, manifold pressure is usually lower than atmospheric pressure. A high reading may indicate low vacuum, incorrect sensor data, or engine mechanical issue. Data should be compared with expected values. ---"
},
{
"id": 53,
"category": "E4: Engine Management Systems",
"question": "A MAF sensor is dirty and under-reports airflow. What may fuel trims do?",
"options": [
"Go positive",
"Go strongly negative always",
"Stay exactly zero always",
"Disable ABS"
],
"answer": 0,
"explanation": "Under-reported airflow causes the PCM to inject too little fuel. Oxygen feedback sees lean and adds fuel. Positive fuel trims are likely. ---"
},
{
"id": 54,
"category": "E4: Engine Management Systems",
"question": "An oxygen sensor stuck lean can cause the PCM to:",
"options": [
"Add fuel unnecessarily",
"Remove all fuel",
"Increase brake pressure",
"Disable the starter"
],
"answer": 0,
"explanation": "If the PCM believes exhaust is lean, it adds fuel. A biased oxygen sensor can cause incorrect fuel control. Sensor response and related trims should be tested. ---"
},
{
"id": 55,
"category": "E4: Engine Management Systems",
"question": "A downstream oxygen sensor is mainly used to monitor:",
"options": [
"Catalytic converter efficiency",
"Tire speed",
"Brake booster vacuum",
"Fuel tank level only"
],
"answer": 0,
"explanation": "Downstream oxygen sensors compare exhaust oxygen after the catalyst. Their activity helps monitor catalyst performance. They are not usually the primary fuel control sensor. ---"
},
{
"id": 56,
"category": "E4: Engine Management Systems",
"question": "A camshaft position sensor signal is erratic. What system may be affected?",
"options": [
"Sequential injection and variable valve timing control",
"Tire pressure monitoring only",
"Brake bleeding",
"Door lock operation"
],
"answer": 0,
"explanation": "Cam position helps the PCM identify cylinder events. It may also monitor cam phaser position. Erratic signals can cause starting, misfire, or timing codes. ---"
},
{
"id": 57,
"category": "E4: Engine Management Systems",
"question": "A variable valve timing solenoid is stuck. What symptom may occur?",
"options": [
"Rough idle, poor power, or timing codes",
"Flat tire",
"Brake pedal pulsation only",
"Wiper noise"
],
"answer": 0,
"explanation": "VVT changes cam timing for performance and emissions. A stuck solenoid can prevent proper cam movement. Oil condition and control circuits should be checked. ---"
},
{
"id": 58,
"category": "E4: Engine Management Systems",
"question": "A PCM commands purge flow at idle and the purge valve is stuck open. What may happen?",
"options": [
"Rough idle or lean condition",
"Higher tire pressure",
"No spark always",
"Brake drag"
],
"answer": 0,
"explanation": "A stuck-open purge valve lets vapor or air enter at the wrong time. This can act like a vacuum leak. Fuel trims and purge command should be checked. ---"
},
{
"id": 59,
"category": "E4: Engine Management Systems",
"question": "A misfire monitor identifies cylinder 2 misfire. What should the technician do?",
"options": [
"Diagnose ignition, fuel, compression, and mechanical causes",
"Replace PCM immediately",
"Ignore it if the light goes off",
"Replace all tires"
],
"answer": 0,
"explanation": "A misfire code identifies the affected cylinder, not the cause. Spark, injector, compression, and air leaks should be tested. Proper diagnosis avoids unnecessary parts replacement. ---"
},
{
"id": 60,
"category": "E4: Engine Management Systems",
"question": "A scan tool shows calculated load higher than expected at idle. What may be suspected?",
"options": [
"Airflow or sensor input issue",
"Correct operation always",
"Low brake fluid",
"Tire imbalance"
],
"answer": 0,
"explanation": "Calculated load is based on sensor inputs such as MAF or MAP. Abnormal values can point to airflow measurement or engine condition problems. Data should be compared to specifications. ---"
},
{
"id": 61,
"category": "E4: Engine Management Systems",
"question": "A vehicle enters reduced power mode. What is a common reason?",
"options": [
"Electronic throttle or pedal signal fault",
"Low washer fluid",
"Worn tire tread",
"Brake rotor rust only"
],
"answer": 0,
"explanation": "Reduced power is often used to protect against unsafe throttle faults. The PCM may limit throttle opening. Codes and data should be checked before replacing parts. ---"
},
{
"id": 62,
"category": "E4: Engine Management Systems",
"question": "Freeze-frame data is useful because it shows:",
"options": [
"Operating conditions when the code set",
"Tire rotation history",
"Brake pad material",
"Oil brand only"
],
"answer": 0,
"explanation": "Freeze-frame records engine load, temperature, RPM, and other data at fault time. This helps reproduce and diagnose the fault. It should be reviewed before clearing codes. ---"
},
{
"id": 63,
"category": "E4: Engine Management Systems",
"question": "A technician clears codes before recording them. What is the problem?",
"options": [
"Important diagnostic information may be lost",
"Vehicle will repair itself",
"Fuel pressure increases",
"Brakes will fail immediately"
],
"answer": 0,
"explanation": "Codes and freeze-frame data guide diagnosis. Clearing them too early can remove valuable information. Information should be saved before erasing. ---"
},
{
"id": 64,
"category": "E4: Engine Management Systems",
"question": "A false high intake air temperature reading can cause:",
"options": [
"Incorrect fuel and timing calculations",
"Tire pressure loss",
"Brake fluid leak",
"ABS activation only"
],
"answer": 0,
"explanation": "The PCM uses intake air temperature for density and timing calculations. Incorrect readings can affect mixture and performance. Sensor data should be compared to actual temperature."
},
{
"id": 65,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "A restricted catalytic converter may cause:",
"options": [
"Loss of power at higher RPM",
"Low tire pressure",
"Brake pedal pulsation",
"Battery overcharge"
],
"answer": 0,
"explanation": "Exhaust restriction limits engine breathing. The symptom often worsens under load or high RPM. Backpressure testing can confirm the restriction. ---"
},
{
"id": 66,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "A vacuum leak after the MAF sensor can cause:",
"options": [
"Lean condition",
"Rich condition always",
"No effect on fuel trim",
"Higher brake pressure"
],
"answer": 0,
"explanation": "Air entering after the MAF is unmetered. The PCM may not add enough fuel for that air. Fuel trims often increase positive. ---"
},
{
"id": 67,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "An exhaust leak before an oxygen sensor can cause:",
"options": [
"False lean oxygen sensor reading",
"Higher tire pressure",
"Stronger spark",
"Lower fuel demand always"
],
"answer": 0,
"explanation": "Outside air can enter the exhaust stream near the sensor. Extra oxygen can make the sensor report lean. This may cause incorrect fuel trim correction. ---"
},
{
"id": 68,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "A dirty throttle plate can cause:",
"options": [
"Idle quality problems",
"Brake fluid leak",
"Wheel bearing noise",
"Low tire tread"
],
"answer": 0,
"explanation": "Carbon buildup can reduce airflow around the throttle. This may cause low or unstable idle. Cleaning and relearn may be required depending on vehicle. ---"
},
{
"id": 69,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "A leaking intake manifold gasket may create:",
"options": [
"Lean misfire at idle",
"High brake pedal",
"Alternator noise only",
"Tire vibration"
],
"answer": 0,
"explanation": "Intake gasket leaks allow unmetered air into the engine. The effect is often strongest at idle. Smoke testing can help locate the leak. ---"
},
{
"id": 70,
"category": "E5: Gasoline Intake and Exhaust Systems",
"question": "A crushed exhaust pipe can cause:",
"options": [
"Restricted exhaust flow",
"More fuel pressure",
"Better engine breathing",
"Higher battery voltage"
],
"answer": 0,
"explanation": "Exhaust pipes must allow gas flow out of the engine. A crushed section creates restriction. This can reduce power and increase backpressure."
},
{
"id": 71,
"category": "E6: Gasoline Emissions Control Systems",
"question": "An EVAP small leak code is stored. What is a common diagnostic tool?",
"options": [
"Smoke machine",
"Brake lathe",
"Tire balancer",
"Compression tester only"
],
"answer": 0,
"explanation": "Smoke testing helps locate vapor leaks. EVAP leaks may be too small to see visually. The system should be tested according to service information. ---"
},
{
"id": 72,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A loose fuel cap can cause:",
"options": [
"EVAP leak code",
"Low oil pressure",
"Brake drag",
"Misaligned wheels"
],
"answer": 0,
"explanation": "The fuel cap seals part of the EVAP system. If loose, the system may fail leak testing. The cap and seal should be inspected. ---"
},
{
"id": 73,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A purge valve stuck open may cause:",
"options": [
"Hard start after refueling or rough idle",
"Higher tire pressure",
"Better cold start always",
"Low brake fluid"
],
"answer": 0,
"explanation": "A stuck-open purge valve can allow excess vapor into the intake. This can create rich or lean symptoms depending on conditions. Purge command and flow should be tested. ---"
},
{
"id": 74,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A vent valve stuck closed may cause:",
"options": [
"Difficulty refueling",
"No spark",
"Low compression",
"Brake pulsation"
],
"answer": 0,
"explanation": "The EVAP vent allows air to escape during refueling. If stuck closed, the tank may not vent properly. This can cause pump shutoff issues. ---"
},
{
"id": 75,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A catalytic converter efficiency code usually compares:",
"options": [
"Upstream and downstream oxygen sensor activity",
"Tire pressure sensors",
"Brake switch and ABS module",
"Battery and alternator only"
],
"answer": 0,
"explanation": "Catalyst monitoring compares oxygen storage before and after the converter. A downstream sensor that mirrors upstream may indicate low catalyst efficiency. Other causes must be ruled out. ---"
},
{
"id": 76,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A rich-running engine can damage the catalytic converter by:",
"options": [
"Overheating it from excess fuel",
"Cooling it too much",
"Increasing tire pressure",
"Reducing exhaust flow only"
],
"answer": 0,
"explanation": "Excess fuel can burn in the converter. This creates high temperatures and can melt the catalyst. Misfires and rich faults should be repaired quickly. ---"
},
{
"id": 77,
"category": "E6: Gasoline Emissions Control Systems",
"question": "An EGR valve stuck open at idle may cause:",
"options": [
"Rough idle or stalling",
"Higher engine power at idle",
"Low tire pressure",
"Brake fade"
],
"answer": 0,
"explanation": "Exhaust gas at idle can dilute the mixture too much. This causes unstable combustion. EGR position and passages should be checked. ---"
},
{
"id": 78,
"category": "E6: Gasoline Emissions Control Systems",
"question": "An EGR valve stuck closed may cause:",
"options": [
"Increased combustion temperature and NOx emissions",
"Lower combustion temperature always",
"Better emissions always",
"Tire vibration"
],
"answer": 0,
"explanation": "EGR lowers combustion temperature by adding inert exhaust gas. If stuck closed, NOx emissions can rise. The system may set flow-related codes. ---"
},
{
"id": 79,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A secondary air injection system usually helps:",
"options": [
"Warm the catalytic converter faster",
"Inflate tires",
"Control brake pressure",
"Cool engine oil only"
],
"answer": 0,
"explanation": "Secondary air adds oxygen to the exhaust during cold start. This helps light off the catalytic converter. Faults may set emissions codes. ---"
},
{
"id": 80,
"category": "E6: Gasoline Emissions Control Systems",
"question": "A fuel tank pressure sensor is used mainly for:",
"options": [
"EVAP system monitoring",
"Ignition coil control",
"Tire pressure adjustment",
"Brake pad wear sensing"
],
"answer": 0,
"explanation": "The PCM uses tank pressure data during EVAP tests. It helps detect leaks and purge/vent operation. Sensor faults can cause EVAP codes."
},
{
"id": 81,
"category": "G1: Describe Networking Systems",
"question": "A CAN bus uses two wires mainly to:",
"options": [
"Transmit communication signals between modules",
"Carry brake fluid pressure",
"Charge the battery directly",
"Control tire air pressure"
],
"answer": 0,
"explanation": "CAN networks allow modules to share data. The two wires carry differential signals. Network faults can affect many systems. ---"
},
{
"id": 82,
"category": "G1: Describe Networking Systems",
"question": "What is a common symptom of a network communication fault?",
"options": [
"Multiple warning lights and lost module communication",
"Low tire tread only",
"Brake rotor scoring only",
"Engine oil leak only"
],
"answer": 0,
"explanation": "Modules depend on network messages. If communication fails, several systems may set codes or warning lights. Scan tool network diagnosis is important. ---"
},
{
"id": 83,
"category": "G1: Describe Networking Systems",
"question": "Why do CAN systems use twisted-pair wiring?",
"options": [
"To reduce electrical interference",
"To increase fuel pressure",
"To make wires easier to cut",
"To heat the circuit"
],
"answer": 0,
"explanation": "Twisting helps cancel electromagnetic noise. Clean network signals are important for communication. Wiring repairs should maintain the twist. ---"
},
{
"id": 84,
"category": "G1: Describe Networking Systems",
"question": "A short to ground on CAN high can cause:",
"options": [
"Network communication failure",
"Higher engine compression",
"Brake fluid contamination",
"Better fuel economy"
],
"answer": 0,
"explanation": "CAN signals require correct voltage patterns on both wires. A shorted network wire can stop module communication. The fault must be isolated by circuit testing."
},
{
"id": 85,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A heated seat does not warm, but the switch indicator turns on. What should be checked?",
"options": [
"Seat heater element, power, ground, and control circuit",
"Tire balance",
"Engine compression",
"Exhaust backpressure"
],
"answer": 0,
"explanation": "The indicator does not prove the heater element works. Power, ground, and resistance should be checked. Seat modules or temperature sensors may also be involved. ---"
},
{
"id": 86,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A power mirror moves left and right but not up and down. What is likely?",
"options": [
"Switch, motor direction circuit, or mirror motor fault",
"Fuel pump failure",
"Bad brake booster",
"Low coolant only"
],
"answer": 0,
"explanation": "Some mirror directions work, so power supply may be present. The failed direction circuit or motor winding should be tested. Wiring diagrams help identify the correct terminals. ---"
},
{
"id": 87,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A rear defogger has power and ground but only clears some lines. What is likely?",
"options": [
"Open grid lines",
"Failed alternator",
"Low tire pressure",
"Faulty fuel injector"
],
"answer": 0,
"explanation": "Each grid line acts as a heating path. Open lines will not heat or clear glass. A grid repair may be possible. ---"
},
{
"id": 88,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A power seat moves forward but not backward. What should be checked?",
"options": [
"Switch contacts, motor circuit, and track binding",
"Fuel pressure regulator",
"Brake line flare",
"Radiator cap"
],
"answer": 0,
"explanation": "One direction works, so the motor may still be functional. Direction control circuits reverse polarity or use separate contacts. Mechanical binding should also be inspected. ---"
},
{
"id": 89,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A remote keyless entry works only very close to the vehicle. What may cause this?",
"options": [
"Weak transmitter battery or antenna issue",
"Low brake fluid",
"High engine compression",
"Worn wheel bearing"
],
"answer": 0,
"explanation": "Low transmitter battery can reduce range. Antenna or receiver issues can also cause poor range. Basic transmitter testing should be done first. ---"
},
{
"id": 90,
"category": "I4: Diagnose and Repair Electrical Options and Accessories",
"question": "A windshield wiper parks in the middle of the glass. What is a likely fault area?",
"options": [
"Park circuit or wiper motor assembly",
"Fuel injector balance",
"Tire pressure sensor",
"Brake caliper slide"
],
"answer": 0,
"explanation": "The park circuit returns wipers to the correct rest position. Motor internal switches or control circuits can fail. Linkage position should also be checked."
},
{
"id": 91,
"category": "K5: Advanced Driver Assistance Systems",
"question": "After replacing a windshield with a camera mounted behind it, what may be required?",
"options": [
"ADAS camera calibration",
"Brake bleeding only",
"Tire rotation only",
"Fuel injector cleaning"
],
"answer": 0,
"explanation": "Windshield-mounted cameras need correct aim and position. Replacement glass can affect camera alignment. Calibration must follow manufacturer procedures. ---"
},
{
"id": 92,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A radar sensor is behind the front bumper. Why can bumper damage affect ADAS?",
"options": [
"Sensor alignment or signal path may be changed",
"Tire pressure will increase",
"Brake fluid will leak",
"Engine oil will thicken"
],
"answer": 0,
"explanation": "Radar sensors need a clear and correctly aligned path. Bumper damage, paint thickness, or bracket damage can affect operation. Inspection and calibration may be required. ---"
},
{
"id": 93,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A lane keeping assist system needs which input most directly?",
"options": [
"Forward-facing camera lane detection",
"Fuel tank pressure",
"Brake pad thickness",
"Alternator ripple only"
],
"answer": 0,
"explanation": "Lane systems commonly use cameras to detect lane markings. Poor markings or camera faults can disable the system. Calibration may be needed after related repairs. ---"
},
{
"id": 94,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A vehicle has adaptive cruise control unavailable after front-end repair. What should be checked?",
"options": [
"Radar sensor mounting, alignment, and codes",
"Cabin air filter only",
"Rear brake shoes only",
"Tire valve caps"
],
"answer": 0,
"explanation": "Front-end repairs can disturb radar sensors. Correct mounting angle is critical. Codes and calibration status should be checked. ---"
},
{
"id": 95,
"category": "K5: Advanced Driver Assistance Systems",
"question": "Why must wheel alignment be correct before some ADAS calibrations?",
"options": [
"Vehicle thrust line and steering angle affect sensor calibration",
"It increases fuel pressure",
"It changes engine oil viscosity",
"It lowers battery voltage"
],
"answer": 0,
"explanation": "ADAS sensors assume the vehicle travels straight when calibrated. Alignment or steering angle errors can bias calibration. Manufacturer preconditions must be followed. ---"
},
{
"id": 96,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A blind spot monitoring sensor is located behind the rear bumper. Which condition may affect it?",
"options": [
"Incorrect bumper repair or sensor bracket damage",
"Low engine oil only",
"Dirty brake fluid only",
"Spark plug gap only"
],
"answer": 0,
"explanation": "Rear radar sensors need proper mounting and signal transmission. Body repairs can block or misalign the sensor. Diagnosis should include inspection and calibration requirements. ---"
},
{
"id": 97,
"category": "K5: Advanced Driver Assistance Systems",
"question": "An ADAS calibration procedure requires a level floor and target placement. Why?",
"options": [
"Sensor aim must be set accurately",
"It makes tires softer",
"It charges the battery faster",
"It lowers coolant temperature"
],
"answer": 0,
"explanation": "Calibration depends on precise distances, heights, and angles. A wrong setup can make the system inaccurate. Service information must be followed exactly. ---"
},
{
"id": 98,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A forward camera is blocked by dirt or snow. What may happen?",
"options": [
"Lane and collision systems may be disabled",
"Fuel pressure increases",
"Brakes mechanically fail",
"Tire pressure rises"
],
"answer": 0,
"explanation": "Cameras need a clear view of the road. Dirt, snow, or stickers can block sensor input. The system may warn the driver or disable features. ---"
},
{
"id": 99,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A steering angle sensor is not calibrated after alignment. Which ADAS-related feature may be affected?",
"options": [
"Lane keeping or stability-related functions",
"Fuel filler door",
"Rear defogger grid only",
"Engine oil life monitor only"
],
"answer": 0,
"explanation": "ADAS and stability systems use steering input. Incorrect steering angle data can affect lane support and control decisions. Calibration may be required after alignment. ---"
},
{
"id": 100,
"category": "K5: Advanced Driver Assistance Systems",
"question": "A diagnostic trouble code says “camera calibration incomplete.” What is the proper action?",
"options": [
"Perform the required calibration procedure",
"Clear the code and return the vehicle",
"Cover the camera",
"Replace all tires immediately"
],
"answer": 0,
"explanation": "The module is indicating calibration has not been completed. Clearing the code does not complete the calibration. The correct static or dynamic procedure must be performed."
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
automotiveServiceTechnicianLevel3PracticeQuestions.map(shuffleOptionsForQuestion);
createPremiumQuizApp({
tradeSlug: "sheet-metal-worker",
tradeTitle: "Automotive Service Technician",
sectionTitle: "Level 3 Practice Quiz – Quiz 1",
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
