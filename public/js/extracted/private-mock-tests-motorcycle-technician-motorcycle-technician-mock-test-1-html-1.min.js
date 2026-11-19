const motorcycleTechnicianIPQuestions = [
{
"id": 1,
"category": "A1 – Performs safety-related functions",
"question": "Before using a chemical cleaner, what should a technician check first?",
"options": [
"The colour of the container",
"The SDS and product label",
"The motorcycle VIN",
"The tire pressure"
],
"answer": 1,
"explanation": "The SDS and label identify hazards, PPE, handling, storage, and first aid. Chemicals may be flammable, toxic, or corrosive. Safe use starts before opening the container."
},
{
"id": 2,
"category": "A1 – Performs safety-related functions",
"question": "A technician is grinding metal near fuel vapours. What is the safest action?",
"options": [
"Continue if the shop door is open",
"Remove ignition sources and control vapours before grinding",
"Wear sunglasses only",
"Spray water on the grinder"
],
"answer": 1,
"explanation": "Grinding creates sparks that can ignite fuel vapours. Vapours must be controlled before hot work begins. Ventilation, isolation, and fire prevention are required."
},
{
"id": 3,
"category": "A2 – Performs routine work practices",
"question": "Why should parts be organized during engine disassembly?",
"options": [
"To avoid mixing parts and losing assembly order",
"To make the bench look full",
"To increase engine compression",
"To reduce battery voltage"
],
"answer": 0,
"explanation": "Many parts have specific positions and wear patterns. Mixing washers, shims, gears, or valve train parts can cause failure. Organization reduces rework and mistakes."
},
{
"id": 4,
"category": "A2 – Performs routine work practices",
"question": "What is the best practice before returning a motorcycle to a customer after service?",
"options": [
"Wipe only the seat",
"Verify fasteners, fluids, safety items, and roadworthiness",
"Ignore test procedures if the engine starts",
"Replace all parts again"
],
"answer": 1,
"explanation": "Final checks confirm the motorcycle is safe and complete. Fluids, controls, brakes, steering, lights, and fasteners should be verified. A safe release is part of professional service."
},
{
"id": 5,
"category": "A3 – Uses tools, equipment and documentation",
"question": "Why should a torque wrench be used on brake caliper bolts?",
"options": [
"To make the bolts shiny",
"To tighten to manufacturer specification",
"To test brake fluid",
"To remove air from the line"
],
"answer": 1,
"explanation": "Brake fasteners are safety-critical. Under-tightening may allow loosening, and over-tightening may damage threads. Torque specifications provide correct clamping force."
},
{
"id": 6,
"category": "A3 – Uses tools, equipment and documentation",
"question": "A service manual gives a special sequence for tightening engine case bolts. Why follow it?",
"options": [
"To clamp parts evenly and prevent distortion",
"To make the engine louder",
"To increase fuel pressure",
"To change tire size"
],
"answer": 0,
"explanation": "Tightening sequence prevents warping and uneven sealing. Engine cases and covers often rely on even clamping. Skipping the sequence can cause leaks or misalignment."
},
{
"id": 7,
"category": "A4 – Uses communication and mentoring techniques",
"question": "A customer says the motorcycle “cuts out sometimes.” What is the best technician response?",
"options": [
"Replace the ECM immediately",
"Ask when, where, and under what conditions it occurs",
"Tell the customer it is normal",
"Check only tire pressure"
],
"answer": 1,
"explanation": "Intermittent faults need accurate symptom information. Load, temperature, speed, fuel level, and weather can guide diagnosis. Good communication saves diagnostic time."
},
{
"id": 8,
"category": "A4 – Uses communication and mentoring techniques",
"question": "A new apprentice is about to disconnect a battery incorrectly. What should a mentor do?",
"options": [
"Let them damage it to learn",
"Stop them and explain the safe procedure",
"Hide the tools",
"Replace the battery first"
],
"answer": 1,
"explanation": "Mentoring includes correcting unsafe actions before harm occurs. Battery service can cause sparks, shorts, or module damage. Teaching the reason improves future performance."
},
{
"id": 9,
"category": "B5 – Diagnoses chassis and components",
"question": "A motorcycle tracks crooked after a crash. What should be diagnosed first?",
"options": [
"Frame, fork, swingarm, and wheel alignment",
"Fuel injector colour",
"Spark plug brand",
"Seat foam thickness"
],
"answer": 0,
"explanation": "Chassis alignment affects straight-line tracking and safety. Crash damage can bend components without obvious cracks. Measurements must be compared to specifications."
},
{
"id": 10,
"category": "B5 – Diagnoses chassis and components",
"question": "A rider reports handlebar shake at speed. What should be checked?",
"options": [
"Tires, wheels, steering bearings, suspension, and chassis alignment",
"Oil filter colour only",
"Carburetor choke cable only",
"Fuel tank size only"
],
"answer": 0,
"explanation": "Speed wobble can come from many chassis systems. Tire condition, wheel balance, loose bearings, and suspension wear are common causes. Diagnosis should not focus on one part only."
},
{
"id": 11,
"category": "B5 – Diagnoses chassis and components",
"question": "A frame mount bolt repeatedly loosens. What is the likely concern?",
"options": [
"Damaged threads, missing spacer, vibration, or improper torque",
"Too much coolant",
"Rich fuel mixture",
"Low tire tread depth only"
],
"answer": 0,
"explanation": "Repeated loosening means the joint is not clamping correctly. Spacers, threads, torque, and locking methods must be checked. Loose chassis mounts can affect safety."
},
{
"id": 12,
"category": "B6 – Services chassis and components",
"question": "After installing handlebars, what must be checked before releasing the motorcycle?",
"options": [
"Full steering movement and cable/hose clearance",
"Exhaust colour only",
"Fuel octane only",
"Tire brand only"
],
"answer": 0,
"explanation": "Handlebars can affect throttle, clutch, brake hose, and wiring routing. Controls must not bind at full lock. A sticking throttle or stretched hose is dangerous."
},
{
"id": 13,
"category": "B6 – Services chassis and components",
"question": "Why should accessory wiring be fused close to the power source?",
"options": [
"To protect the wiring from overload or short circuits",
"To increase battery voltage",
"To change engine timing",
"To reduce tire wear"
],
"answer": 0,
"explanation": "A fuse protects the circuit if a short occurs. Placing it near the power source protects the full wire length. Unfused accessory wiring can overheat and cause fire."
},
{
"id": 14,
"category": "B6 – Services chassis and components",
"question": "A technician replaces a damaged footpeg bracket. What should be verified?",
"options": [
"Correct mounting, torque, clearance, and control operation",
"Only paint finish",
"Only headlight aim",
"Only fuel level"
],
"answer": 0,
"explanation": "Foot controls and brackets affect rider control. Replacement parts must fit securely and not interfere with braking or shifting. Correct torque prevents loosening."
},
{
"id": 15,
"category": "B7 – Diagnoses suspension systems",
"question": "A front fork bottoms during braking. What should be diagnosed?",
"options": [
"Fork springs, oil level, damping, and rider/load setup",
"Starter relay only",
"Fuel pressure only",
"Spark plug cap only"
],
"answer": 0,
"explanation": "Fork bottoming may be caused by weak springs, low oil, poor damping, or setup. Braking transfers load to the front suspension. Suspension diagnosis must consider condition and adjustment."
},
{
"id": 16,
"category": "B7 – Diagnoses suspension systems",
"question": "A rear shock leaks oil and the bike bounces after bumps. What is the likely fault?",
"options": [
"Loss of damping from shock failure",
"Overcharging battery",
"Clogged main jet",
"Worn spark plug"
],
"answer": 0,
"explanation": "Shock oil is needed for damping. When it leaks, the spring may move without control. Poor damping reduces traction and stability."
},
{
"id": 17,
"category": "B7 – Diagnoses suspension systems",
"question": "A motorcycle pulls to one side after fork service. What should be checked?",
"options": [
"Fork alignment, axle spacers, pinch bolt sequence, and wheel alignment",
"Fuel cap vent only",
"Spark plug heat range only",
"Oil filter bypass only"
],
"answer": 0,
"explanation": "Incorrect front-end assembly can twist fork legs. Axle spacers and pinch bolts affect alignment. Binding or misalignment can cause poor handling."
},
{
"id": 18,
"category": "B7 – Diagnoses suspension systems",
"question": "A suspension linkage squeaks and feels stiff. What is most likely?",
"options": [
"Dry, seized, or worn linkage bearings",
"Weak battery",
"Dirty air filter",
"Rich fuel mixture"
],
"answer": 0,
"explanation": "Linkage bearings need smooth movement and lubrication. Corrosion or lack of grease causes stiffness and noise. Stiff linkage changes rear suspension action."
},
{
"id": 19,
"category": "B8 – Services suspension systems",
"question": "When replacing fork seals, why inspect fork tubes?",
"options": [
"Pits or scratches can damage new seals",
"They control fuel pressure",
"They set valve timing",
"They adjust battery voltage"
],
"answer": 0,
"explanation": "The fork seal lip rides on the tube surface. Rust or scratches can cut the seal. A new seal will leak again if the tube is damaged."
},
{
"id": 20,
"category": "B8 – Services suspension systems",
"question": "Why should suspension fasteners be torqued at specified ride height when required?",
"options": [
"To avoid bushing preload",
"To increase engine compression",
"To improve spark strength",
"To reduce fuel pressure"
],
"answer": 0,
"explanation": "Rubber bushings can twist if tightened with suspension hanging. This causes stress and premature wear. Service procedures specify the correct tightening position."
},
{
"id": 21,
"category": "B8 – Services suspension systems",
"question": "What should be done after servicing adjustable suspension?",
"options": [
"Set preload, rebound, and compression to specification or rider setup",
"Remove all adjusters",
"Fill forks with any oil",
"Ignore rider weight"
],
"answer": 0,
"explanation": "Suspension settings affect handling, braking, and comfort. Adjustments should match specifications and load. Incorrect setup can make a good suspension perform poorly."
},
{
"id": 22,
"category": "C9 – Diagnoses wheels and tires",
"question": "A motorcycle vibrates at highway speed but not at low speed. What should be checked?",
"options": [
"Wheel balance, tire condition, wheel runout, and bearings",
"Fuel injector spray only",
"Valve clearance only",
"Coolant strength only"
],
"answer": 0,
"explanation": "Speed-related vibration often comes from rotating parts. Tire imbalance, damaged tires, bent rims, or bad bearings can cause it. Diagnosis should include the full wheel assembly."
},
{
"id": 23,
"category": "C9 – Diagnoses wheels and tires",
"question": "A front tire has cupping wear. What may contribute?",
"options": [
"Worn suspension, imbalance, incorrect pressure, or aggressive braking",
"Strong battery voltage",
"Correct wheel balance only",
"Clean air filter"
],
"answer": 0,
"explanation": "Cupping is uneven tread wear. It may be caused by suspension bounce, low pressure, or imbalance. Tire wear patterns help diagnose chassis problems."
},
{
"id": 24,
"category": "C9 – Diagnoses wheels and tires",
"question": "What does lateral wheel runout mean?",
"options": [
"Side-to-side movement of the rim",
"Up-and-down movement of the rim",
"Low battery voltage",
"Poor fuel atomization"
],
"answer": 0,
"explanation": "Lateral runout is side movement as the wheel rotates. Radial runout is vertical movement. Both must be within specification for safe operation."
},
{
"id": 25,
"category": "C9 – Diagnoses wheels and tires",
"question": "A tire repeatedly loses air, but no nail is found. What should be inspected?",
"options": [
"Valve stem, bead sealing area, rim cracks, tube, or spoke rim strip",
"Carburetor jets only",
"Ignition coil only",
"Clutch spring length only"
],
"answer": 0,
"explanation": "Air loss can happen without a puncture. Valve stems, bead leaks, rim damage, or tube problems can cause slow leaks. Spoked rims may also damage tubes if rim strips fail."
},
{
"id": 26,
"category": "C9 – Diagnoses wheels and tires",
"question": "A wheel bearing growls when spun by hand. What does this indicate?",
"options": [
"Bearing wear or damage",
"Correct bearing preload",
"Better wheel balance",
"Low fuel pressure"
],
"answer": 0,
"explanation": "Bearings should turn smoothly and quietly. Roughness, play, or noise indicates damage. Wheel bearing failure can affect handling and safety."
},
{
"id": 27,
"category": "C10 – Services wheels and tires",
"question": "Why should tire rotation direction arrows be followed?",
"options": [
"Tread pattern and carcass design may be directional",
"It increases battery power",
"It changes valve timing",
"It reduces fuel pressure"
],
"answer": 0,
"explanation": "Many motorcycle tires are directional. Incorrect rotation can affect water evacuation, wear, and strength. The arrow must match wheel rotation."
},
{
"id": 28,
"category": "C10 – Services wheels and tires",
"question": "What should be done after installing a new tire?",
"options": [
"Seat bead properly, inflate to spec, balance wheel, and check for leaks",
"Skip balancing on all motorcycles",
"Inflate above maximum pressure permanently",
"Oil the tread"
],
"answer": 0,
"explanation": "Tire service includes bead seating, pressure setting, balance, and leak check. Incorrect installation can cause vibration or air loss. Tires are safety-critical components."
},
{
"id": 29,
"category": "C10 – Services wheels and tires",
"question": "Why should wheel spacers be installed in the correct location?",
"options": [
"They position the wheel and bearings correctly",
"They set fuel mixture",
"They adjust ignition timing",
"They increase engine compression"
],
"answer": 0,
"explanation": "Spacers control wheel alignment and bearing clamping. Missing or swapped spacers can damage bearings or misalign brakes. Correct assembly is essential."
},
{
"id": 30,
"category": "C10 – Services wheels and tires",
"question": "What is the safest way to repair a damaged motorcycle tire sidewall?",
"options": [
"Replace the tire",
"Plug the sidewall",
"Seal it with glue",
"Lower the pressure"
],
"answer": 0,
"explanation": "Sidewalls flex heavily and carry major loads. Sidewall repairs are unsafe for motorcycle tires. Replacement is the correct repair."
},
{
"id": 31,
"category": "C10 – Services wheels and tires",
"question": "Why should axle nuts be torqued to specification?",
"options": [
"To secure the wheel without damaging bearings or threads",
"To adjust fuel pressure",
"To clean brake rotors",
"To improve spark output"
],
"answer": 0,
"explanation": "Axle torque affects wheel security and bearing clamping. Too loose may allow movement; too tight may damage components. Torque and locking devices must be correct."
},
{
"id": 32,
"category": "C10 – Services wheels and tires",
"question": "After wheel installation, what should be checked before riding?",
"options": [
"Brake operation, axle torque, wheel rotation, and clearance",
"Only seat latch",
"Only fuel cap",
"Only mirror angle"
],
"answer": 0,
"explanation": "Wheel service affects brakes, alignment, and safety. The wheel should rotate freely and brakes must work. Fasteners and clearances must be verified."
},
{
"id": 33,
"category": "D11 – Diagnoses braking systems",
"question": "A brake lever feels spongy after pad replacement. What is likely?",
"options": [
"Air in the hydraulic system or improper bleeding",
"Overfilled fuel tank",
"Weak ignition coil",
"Worn piston rings"
],
"answer": 0,
"explanation": "Air compresses in hydraulic brake systems. This creates a soft or spongy lever. Bleeding and leak inspection are required."
},
{
"id": 34,
"category": "D11 – Diagnoses braking systems",
"question": "A brake rotor has blue heat marks. What does this suggest?",
"options": [
"Overheating from drag or heavy use",
"Correct break-in only",
"Low battery voltage",
"Rich fuel mixture"
],
"answer": 0,
"explanation": "Blueing indicates high heat. Heat can come from brake drag, sticking calipers, or severe use. Pads, rotor, caliper, and fluid should be checked."
},
{
"id": 35,
"category": "D11 – Diagnoses braking systems",
"question": "A motorcycle pulls right during braking. What should be diagnosed?",
"options": [
"Uneven brake action, tire condition, suspension, or alignment",
"Fuel octane",
"Spark plug heat range",
"Oil viscosity only"
],
"answer": 0,
"explanation": "Pulling during braking can be caused by brakes or chassis. Contaminated pads, stuck calipers, uneven tire grip, or fork problems can contribute. Diagnosis should include related systems."
},
{
"id": 36,
"category": "D11 – Diagnoses braking systems",
"question": "Brake fluid is dark and contaminated. What is the concern?",
"options": [
"Reduced braking performance and internal corrosion",
"Higher compression",
"Better lever feel",
"Increased tire pressure"
],
"answer": 0,
"explanation": "Brake fluid absorbs moisture over time. Moisture lowers boiling point and can corrode internal parts. Fluid should be replaced according to service requirements."
},
{
"id": 37,
"category": "D11 – Diagnoses braking systems",
"question": "A brake pedal slowly sinks under steady pressure. What fault is likely?",
"options": [
"Internal master cylinder bypass or hydraulic leak",
"Low fuel pressure",
"Loose chain only",
"Weak headlight"
],
"answer": 0,
"explanation": "A sinking pedal means pressure is not being held. Fluid may bypass internally or leak externally. Hydraulic brake faults must be corrected before riding."
},
{
"id": 38,
"category": "D11 – Diagnoses braking systems",
"question": "An ABS warning light stays on. What should the technician check?",
"options": [
"ABS DTCs, wheel speed sensors, wiring, tone rings, and battery voltage",
"Carburetor float height only",
"Exhaust colour only",
"Final drive oil smell only"
],
"answer": 0,
"explanation": "ABS faults require electronic and mechanical checks. Sensors, tone rings, wiring, and voltage can affect ABS operation. Scan data and service information guide diagnosis."
},
{
"id": 39,
"category": "D12 – Services braking systems",
"question": "Why should brake pads be kept free of oil and grease?",
"options": [
"Contamination reduces friction and braking performance",
"Oil improves pad grip",
"Grease cools the rotor",
"Contamination only changes colour"
],
"answer": 0,
"explanation": "Brake friction material must remain clean. Oil or grease reduces braking and may cause noise or grabbing. Contaminated pads often require replacement."
},
{
"id": 40,
"category": "D12 – Services braking systems",
"question": "When replacing brake pads, why inspect caliper slide pins where equipped?",
"options": [
"Sticking slides can cause uneven wear and drag",
"They control fuel pressure",
"They adjust battery output",
"They set ignition timing"
],
"answer": 0,
"explanation": "Slide pins allow calipers to centre over the rotor. If stuck, pads wear unevenly and brakes may drag. Cleaning and lubrication must follow manufacturer instructions."
},
{
"id": 41,
"category": "D12 – Services braking systems",
"question": "Why should brake fluid type match the manufacturer specification?",
"options": [
"Different fluids may not be compatible",
"Any fluid works in any brake system",
"Engine oil can be used in brakes",
"Fluid type affects tire tread only"
],
"answer": 0,
"explanation": "Brake systems are designed for specific fluid types. Mixing incompatible fluids can damage seals or reduce performance. Always use the specified fluid."
},
{
"id": 42,
"category": "D12 – Services braking systems",
"question": "What should be done after opening a hydraulic brake system?",
"options": [
"Bleed the system and verify firm pressure",
"Add fuel stabilizer",
"Adjust valve clearance",
"Replace the tire"
],
"answer": 0,
"explanation": "Opening the system can introduce air. Air causes soft lever feel and poor braking. Bleeding removes air and restores hydraulic pressure."
},
{
"id": 43,
"category": "D12 – Services braking systems",
"question": "Why should rotor thickness be measured?",
"options": [
"Thin rotors may overheat or fail",
"It sets spark plug gap",
"It adjusts spoke tension",
"It controls fuel delivery"
],
"answer": 0,
"explanation": "Rotors wear with pad contact. If below minimum thickness, heat capacity and strength are reduced. Rotor thickness must meet service limits."
},
{
"id": 44,
"category": "D12 – Services braking systems",
"question": "A brake hose is cracked near the fitting. What is the correct service action?",
"options": [
"Replace the hose",
"Tape the crack",
"Paint over the hose",
"Lower brake pressure permanently"
],
"answer": 0,
"explanation": "Brake hoses carry high hydraulic pressure. Cracks can lead to leaks or hose failure. Damaged hoses should be replaced, not patched."
},
{
"id": 45,
"category": "D12 – Services braking systems",
"question": "After brake service, why pump the brake lever before riding?",
"options": [
"To seat pads against the rotor and restore lever pressure",
"To increase fuel pressure",
"To charge the battery",
"To tighten spokes"
],
"answer": 0,
"explanation": "Caliper pistons may be pushed back during service. Pumping the lever moves pads back to the rotor. Failure to do this can cause no brake on first application."
},
{
"id": 46,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A four-stroke engine has low compression, and leak-down air is heard at the intake. What is likely?",
"options": [
"Intake valve leakage",
"Fuel tank vent blocked",
"Weak brake fluid",
"Loose spokes"
],
"answer": 0,
"explanation": "Leak-down testing identifies where cylinder pressure escapes. Air at the intake points to intake valve sealing problems. Valve, seat, guide, or clearance issues may be involved."
},
{
"id": 47,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A two-stroke engine has poor crankcase pressure and erratic idle. What should be checked?",
"options": [
"Crank seals, reed valves, and crankcase sealing",
"Brake rotor thickness",
"ABS tone ring only",
"Final drive splines only"
],
"answer": 0,
"explanation": "Two-stroke engines depend on crankcase pressure changes. Air leaks or bad reeds affect mixture transfer. Poor sealing can cause lean running and engine damage."
},
{
"id": 48,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A spark plug is oily and compression is low. What may be worn?",
"options": [
"Rings, cylinder, valve guides, or seals",
"Brake hose only",
"Tire bead only",
"Battery terminal only"
],
"answer": 0,
"explanation": "Oil on the plug can come from oil entering the combustion chamber. Low compression suggests sealing problems. Diagnosis may require compression, leak-down, and inspection."
},
{
"id": 49,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "An engine overheats and pings under load. What should be investigated?",
"options": [
"Lean mixture, ignition timing, cooling system, and fuel quality",
"Seat height",
"Paint colour",
"Chain guard style"
],
"answer": 0,
"explanation": "Pinging or detonation is abnormal combustion. Heat, lean mixtures, poor fuel, or incorrect timing can cause it. Detonation can damage pistons and bearings."
},
{
"id": 50,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A valve clearance is too tight. What engine symptom can result?",
"options": [
"Hard starting and low compression when hot",
"Higher tire pressure",
"Stronger spark",
"Better clutch release"
],
"answer": 0,
"explanation": "Tight valves may not fully close after expansion. This causes compression leakage and hot-start problems. Long-term operation can burn valves."
},
{
"id": 51,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A compression test shows one cylinder much lower than the others. What is the best next step?",
"options": [
"Perform leak-down testing to locate leakage",
"Replace all tires",
"Adjust chain tension only",
"Change brake fluid only"
],
"answer": 0,
"explanation": "Compression testing shows a problem but not the exact leak path. Leak-down helps identify rings, valves, or head gasket faults. It guides correct repair."
},
{
"id": 52,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A top-end knock increases with rpm. What should be suspected?",
"options": [
"Valve train, piston pin, piston slap, or cam chain issue",
"Low tire pressure only",
"Brake pad dust only",
"Weak turn signal bulb only"
],
"answer": 0,
"explanation": "Engine noises are diagnosed by location, frequency, and load. Top-end knocks can come from valve train or piston-related parts. The engine should not be ignored if noise worsens."
},
{
"id": 53,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A motorcycle uses coolant and has white exhaust smoke. What should be checked?",
"options": [
"Head gasket, cylinder head, cylinder, and cooling system pressure",
"Clutch cable only",
"Spoke tension only",
"Brake lever angle only"
],
"answer": 0,
"explanation": "White smoke may indicate coolant entering combustion. Head gasket or crack issues can cause coolant loss. Pressure testing and inspection are required."
},
{
"id": 54,
"category": "E13 – Diagnoses two-stroke and four-stroke engines",
"question": "A four-stroke engine cranks unevenly, speeding up on one cylinder. What does this suggest?",
"options": [
"Low compression on one cylinder",
"Stronger battery",
"Better valve timing",
"Higher fuel pressure"
],
"answer": 0,
"explanation": "A low-compression cylinder offers less resistance during cranking. This can make cranking speed uneven. Compression testing should confirm the condition."
},
{
"id": 55,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Why should ring end gap be checked before installing piston rings?",
"options": [
"Rings expand when hot and need clearance",
"It sets battery voltage",
"It adjusts brake feel",
"It controls tire pressure"
],
"answer": 0,
"explanation": "If ring gap is too tight, the ends can butt when hot. This can break rings or score the cylinder. Too much gap can reduce compression."
},
{
"id": 56,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Why should cam timing marks be verified before starting an engine?",
"options": [
"Incorrect timing can cause poor running or engine damage",
"It improves tire balance",
"It lowers fuel pressure",
"It bleeds the brakes"
],
"answer": 0,
"explanation": "Valve timing must match piston position. Incorrect timing can cause piston-to-valve contact. Always rotate the engine by hand after assembly where specified."
},
{
"id": 57,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "What is the purpose of cylinder honing?",
"options": [
"To create surface finish for ring seating",
"To increase battery capacity",
"To adjust clutch free play",
"To set brake pad clearance"
],
"answer": 0,
"explanation": "Rings need proper bore texture to seat. Glazed cylinders may prevent sealing. Honing must remain within service limits."
},
{
"id": 58,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Why must engine mating surfaces be cleaned carefully?",
"options": [
"To prevent oil, air, coolant, or compression leaks",
"To increase exhaust noise",
"To improve tire wear",
"To change gear ratio"
],
"answer": 0,
"explanation": "Gaskets and sealants need clean, flat surfaces. Gouges or old gasket material can create leak paths. Proper cleaning prevents repeat failures."
},
{
"id": 59,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Why should valve train parts be kept in order during disassembly?",
"options": [
"They develop wear patterns in their original locations",
"They are all universal",
"They control tire balance",
"They change fuel octane"
],
"answer": 0,
"explanation": "Buckets, shims, rockers, and caps may wear with matching parts. Mixing them can change clearances or accelerate wear. Organization is essential during engine service."
},
{
"id": 60,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Before installing a cylinder over piston rings, what should be done?",
"options": [
"Confirm ring orientation, gap position, and lubrication",
"Install rings dry and random",
"Remove piston clips",
"Fill cylinder with brake fluid"
],
"answer": 0,
"explanation": "Rings must be installed correctly to seal and control oil. Incorrect orientation or gap placement can cause compression loss. Lubrication prevents dry assembly damage."
},
{
"id": 61,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "What should be done if a piston is below service limit?",
"options": [
"Replace it with correct size/type and check cylinder condition",
"Reuse it with thicker oil",
"Sand the skirt smooth only",
"Increase idle speed"
],
"answer": 0,
"explanation": "Worn pistons can cause slap, poor sealing, and oil control problems. Cylinder size and condition must match the replacement piston. Service limits determine reuse."
},
{
"id": 62,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "Why prime the oil system after engine overhaul when specified?",
"options": [
"To prevent dry start damage",
"To raise tire pressure",
"To clean carburetors",
"To bleed brakes"
],
"answer": 0,
"explanation": "Freshly assembled engines may have empty oil passages. Priming helps oil reach bearings and cams before startup. Dry starts can damage new components."
},
{
"id": 63,
"category": "E14 – Services two-stroke and four-stroke engines",
"question": "What should be checked after valve adjustment?",
"options": [
"Final clearances and engine rotation by hand where specified",
"Only fuel level",
"Only paint finish",
"Only tire tread pattern"
],
"answer": 0,
"explanation": "Valve adjustment must be verified after tightening parts. Rotating the engine confirms clearances and timing are safe. Final checks prevent serious engine damage."
},
{
"id": 64,
"category": "F15 – Diagnoses clutches and primary drive",
"question": "An engine rpm rises but road speed does not increase under load. What is likely?",
"options": [
"Clutch slipping",
"Fork bottoming",
"ABS activation",
"Low tire pressure only"
],
"answer": 0,
"explanation": "Clutch slip means engine torque is not fully transferred. Worn plates, weak springs, wrong oil, or poor adjustment can cause it. Slip often worsens with heat."
},
{
"id": 65,
"category": "F15 – Diagnoses clutches and primary drive",
"question": "A clutch drags and the bike creeps forward with the lever pulled. What should be checked?",
"options": [
"Free play, cable/hydraulic release, plates, basket, and oil",
"Fuel pump pressure only",
"Brake rotor thickness only",
"Headlight aim only"
],
"answer": 0,
"explanation": "Clutch drag means the clutch is not fully disengaging. Causes may be adjustment, warped plates, notched basket, or hydraulic faults. Drag can make shifting difficult."
},
{
"id": 66,
"category": "F16 – Services clutches and primary drive",
"question": "Why measure clutch plate thickness?",
"options": [
"Worn plates may be below service limit",
"It sets tire pressure",
"It adjusts ignition timing",
"It checks coolant strength"
],
"answer": 0,
"explanation": "Friction plates wear with use. Thin plates can cause slipping or poor engagement. Measurements must be compared with specifications."
},
{
"id": 67,
"category": "F16 – Services clutches and primary drive",
"question": "Why should wet clutch plates be soaked before installation when specified?",
"options": [
"To prevent dry startup and improve initial lubrication",
"To make them expand permanently",
"To increase battery voltage",
"To clean brake fluid"
],
"answer": 0,
"explanation": "Some wet clutches require oil-soaked plates. Dry installation can cause grabbing or early damage. Manufacturer procedures should be followed."
},
{
"id": 68,
"category": "F16 – Services clutches and primary drive",
"question": "A primary chain has excessive slack. What should be done?",
"options": [
"Adjust or replace according to service limits",
"Ignore it if quiet",
"Tighten until no movement exists",
"Fill the primary with coolant"
],
"answer": 0,
"explanation": "Primary chains need correct slack. Too loose can cause noise and shock loading; too tight can overload bearings. Service limits guide repair."
},
{
"id": 69,
"category": "F17 – Diagnoses transmissions",
"question": "A motorcycle jumps out of second gear under acceleration. What is likely worn?",
"options": [
"Shift dogs, engagement slots, or shift fork",
"Brake pads",
"Fuel cap gasket",
"Fork seal"
],
"answer": 0,
"explanation": "Worn dogs may push apart under load. Bent or worn shift forks can prevent full engagement. The transmission must be inspected."
},
{
"id": 70,
"category": "F17 – Diagnoses transmissions",
"question": "A transmission is hard to shift only when the engine is running. What should be checked before teardown?",
"options": [
"Clutch drag",
"Fuel injector flow",
"Radiator cap",
"Tire balance"
],
"answer": 0,
"explanation": "A dragging clutch keeps load on transmission gears. This makes shifting hard while running but easier when stopped. Clutch release should be checked first."
},
{
"id": 71,
"category": "F18 – Services transmissions",
"question": "Why should transmission washers and spacers be installed exactly as shown?",
"options": [
"They control gear spacing and shaft end play",
"They change fuel pressure",
"They control fork damping",
"They increase spark voltage"
],
"answer": 0,
"explanation": "Washers and spacers locate gears correctly. Missing or misplaced parts can cause binding or poor engagement. Transmission assembly order is critical."
},
{
"id": 72,
"category": "F18 – Services transmissions",
"question": "A shift fork is blue and worn. What should be done?",
"options": [
"Replace it and inspect related gear, drum, and lubrication",
"Polish it and reuse always",
"Replace the tire",
"Add brake fluid"
],
"answer": 0,
"explanation": "Blue colour indicates heat from friction. A bent fork, worn gear, or oil problem may be present. The cause must be corrected, not only the fork."
},
{
"id": 73,
"category": "F18 – Services transmissions",
"question": "What is the purpose of shift dogs in a constant mesh transmission?",
"options": [
"Lock selected gears to the shaft",
"Pump oil to the head",
"Cool the radiator",
"Tighten the chain"
],
"answer": 0,
"explanation": "Constant mesh gears remain engaged with each other. Shift dogs lock selected gears to transmit power. Worn dogs can cause gear jumping."
},
{
"id": 74,
"category": "F18 – Services transmissions",
"question": "Why inspect gear teeth for pitting or cracks?",
"options": [
"Damage can lead to noise, metal debris, and failure",
"It improves fuel mixture",
"It increases clutch free play",
"It raises coolant pressure"
],
"answer": 0,
"explanation": "Gear teeth carry heavy loads. Pitting, cracks, or chips can grow and break teeth. Damaged gears can contaminate the transmission with metal."
},
{
"id": 75,
"category": "F19 – Diagnoses final drive",
"question": "A shaft-drive motorcycle clunks during throttle on/off transitions. What should be checked?",
"options": [
"Splines, U-joints, final drive backlash, and mounts",
"Brake fluid colour only",
"Spark plug gap only",
"Fork oil level only"
],
"answer": 0,
"explanation": "Driveline lash can come from worn splines or gears. U-joints and mounts can also create clunks. Final drive diagnosis includes all torque-transfer parts."
},
{
"id": 76,
"category": "F19 – Diagnoses final drive",
"question": "A final drive housing is hot and noisy after a short ride. What is likely?",
"options": [
"Low/wrong lubricant, bearing wear, gear setup issue, or brake drag",
"Strong battery",
"Clean air filter",
"Correct fuel pressure"
],
"answer": 0,
"explanation": "Heat and noise usually indicate friction. Low oil, wrong oil, bad bearings, tight gears, or brake drag can cause it. The issue must be corrected before failure."
},
{
"id": 77,
"category": "F20 – Services final drive",
"question": "Why lubricate final drive splines as specified?",
"options": [
"To reduce fretting and wear",
"To increase compression",
"To adjust brake balance",
"To change spark timing"
],
"answer": 0,
"explanation": "Splines transmit torque and may move slightly. Without proper lubricant, fretting corrosion can damage them. Severe spline wear can cause drive failure."
},
{
"id": 78,
"category": "F20 – Services final drive",
"question": "A final drive seal is replaced. What else should be checked?",
"options": [
"Shaft surface, bearing play, venting, and oil level",
"Only tire colour",
"Only handlebar angle",
"Only fuel octane"
],
"answer": 0,
"explanation": "A seal may leak again if the shaft is worn or bearings are loose. Blocked vents can push oil past seals. The cause of the leak must be found."
},
{
"id": 79,
"category": "F20 – Services final drive",
"question": "Why use specified final drive oil?",
"options": [
"Gear sets require correct viscosity and extreme-pressure protection",
"Any engine oil works the same",
"Gear oil controls battery voltage",
"It improves brake pad grip"
],
"answer": 0,
"explanation": "Final drive gears carry high loads. Incorrect lubricant can cause wear, heat, or seal issues. Manufacturer specifications must be followed."
},
{
"id": 80,
"category": "G21 – Diagnoses electrical systems",
"question": "A battery reads 12.6 V at rest but drops to 8 V while cranking. What does this indicate?",
"options": [
"Weak battery or excessive starting load",
"Correct battery condition",
"Low tire pressure",
"Rich fuel mixture"
],
"answer": 0,
"explanation": "Resting voltage does not prove battery capacity. Load testing shows whether the battery can supply current. Excess starter draw should also be considered."
},
{
"id": 81,
"category": "G21 – Diagnoses electrical systems",
"question": "A fuse blows immediately when replaced. What should be suspected?",
"options": [
"Short to ground or excessive current draw",
"Bad tire valve",
"Low engine oil only",
"Worn brake pads only"
],
"answer": 0,
"explanation": "Fuses open when current is too high. Repeated fuse failure means the fault remains. Installing a larger fuse is unsafe."
},
{
"id": 82,
"category": "G21 – Diagnoses electrical systems",
"question": "A charging system produces low battery voltage while running. What should be checked?",
"options": [
"Stator, regulator/rectifier, battery, wiring, and grounds",
"Brake rotor only",
"Fork seal only",
"Seat latch only"
],
"answer": 0,
"explanation": "Charging faults can occur in several components. AC output, DC output, grounds, connectors, and battery condition all matter. Testing should follow the service manual."
},
{
"id": 83,
"category": "G21 – Diagnoses electrical systems",
"question": "A connector has green corrosion. What electrical problem can result?",
"options": [
"High resistance and voltage drop",
"Higher current capacity",
"Better grounding",
"Increased fuel pressure"
],
"answer": 0,
"explanation": "Corrosion restricts current flow. It may cause intermittent faults or heat. Cleaning or terminal repair may be required."
},
{
"id": 84,
"category": "G21 – Diagnoses electrical systems",
"question": "A circuit has power but the component does not work. What should be checked next?",
"options": [
"Ground path and voltage drop under load",
"Tire tread depth",
"Exhaust packing",
"Seat height"
],
"answer": 0,
"explanation": "A component needs both power and ground. A poor ground can stop operation even when power is present. Voltage-drop testing confirms circuit performance under load."
},
{
"id": 85,
"category": "G21 – Diagnoses electrical systems",
"question": "What does Ohm’s Law show?",
"options": [
"Relationship between voltage, current, and resistance",
"Relationship between tire size and rpm",
"Relationship between fuel and oil",
"Relationship between brake pads and rotors only"
],
"answer": 0,
"explanation": "Ohm’s Law is V = I × R. It helps diagnose circuits and calculate expected values. It is basic electrical knowledge for motorcycle repair."
},
{
"id": 86,
"category": "G21 – Diagnoses electrical systems",
"question": "A starter relay clicks but the starter does not turn. What should be tested?",
"options": [
"Battery load, cables, relay output, ground, and starter motor",
"Carburetor float only",
"Wheel balance only",
"Fork spring length only"
],
"answer": 0,
"explanation": "A click means the control side may work, but the high-current side may fail. Voltage drop and current draw tests are useful. Starter diagnosis requires loaded testing."
},
{
"id": 87,
"category": "G21 – Diagnoses electrical systems",
"question": "A stator has continuity to ground when it should not. What does this mean?",
"options": [
"Shorted stator winding",
"Perfect stator condition",
"Correct tire pressure",
"Proper clutch adjustment"
],
"answer": 0,
"explanation": "Many stator windings should be isolated from ground. Continuity to ground can indicate insulation failure. This can reduce or stop charging output."
},
{
"id": 88,
"category": "G21 – Diagnoses electrical systems",
"question": "A relay has coil power and ground but does not click. What is likely?",
"options": [
"Faulty relay coil or internal relay fault",
"Bad piston ring",
"Low fork oil",
"Clogged exhaust"
],
"answer": 0,
"explanation": "A relay should operate when its coil is energized. If power and ground are present but it does not click, the relay is suspect. The circuit should be verified before replacement."
},
{
"id": 89,
"category": "G21 – Diagnoses electrical systems",
"question": "A turn signal flashes too fast. What is a common cause?",
"options": [
"Burned-out bulb, wrong bulb, LED mismatch, or circuit fault",
"Low compression",
"Tight valve clearance",
"Low coolant only"
],
"answer": 0,
"explanation": "Flash rate depends on electrical load and flasher type. A missing or incorrect load can speed flashing. LED conversions may need compatible flashers or resistors."
},
{
"id": 90,
"category": "G21 – Diagnoses electrical systems",
"question": "A motorcycle has intermittent no-power when bars are turned. What should be inspected?",
"options": [
"Steering-head harness flex area and ignition switch wiring",
"Piston rings only",
"Brake pad thickness only",
"Tire compound only"
],
"answer": 0,
"explanation": "Wires near the steering head flex constantly. Broken conductors or pinched wiring can cause intermittent opens. Wiggle testing can help locate the fault."
},
{
"id": 91,
"category": "G21 – Diagnoses electrical systems",
"question": "A diode allows current both directions during testing. What does this indicate?",
"options": [
"Shorted diode",
"Correct diode operation",
"Open fuse",
"Low fuel pressure"
],
"answer": 0,
"explanation": "A diode should conduct mainly in one direction. Current both directions means it is shorted. Rectifier diode faults can affect charging."
},
{
"id": 92,
"category": "G21 – Diagnoses electrical systems",
"question": "A sensor uses a 5 V reference, but the reference line reads 0 V. What should be checked?",
"options": [
"Shorted sensor, wiring short, ECM supply, and shared reference circuits",
"Tire pressure only",
"Brake rotor runout only",
"Fork oil only"
],
"answer": 0,
"explanation": "A 5 V reference can be pulled low by a shorted sensor or wire. Multiple sensors may share the same reference. Unplugging sensors one at a time may help isolate the fault."
},
{
"id": 93,
"category": "G21 – Diagnoses electrical systems",
"question": "A headlight is dim, but battery voltage is good. What should be checked?",
"options": [
"Voltage drop on power and ground sides",
"Fuel pump pressure",
"Valve guide clearance",
"Final drive backlash"
],
"answer": 0,
"explanation": "A dim light can be caused by resistance in wiring or grounds. Battery voltage alone does not prove voltage reaches the bulb. Voltage-drop testing finds the restriction."
},
{
"id": 94,
"category": "G22 – Services electrical systems",
"question": "Why disconnect the negative battery cable first on many motorcycles?",
"options": [
"To reduce short-circuit risk",
"To increase battery voltage",
"To clear tire pressure",
"To improve fuel economy"
],
"answer": 0,
"explanation": "Removing the ground first reduces accidental short risk if a tool touches the frame. Battery service should follow manufacturer procedure. Electronics may require special precautions."
},
{
"id": 95,
"category": "G22 – Services electrical systems",
"question": "What is the best repair for a damaged wire in a high-vibration area?",
"options": [
"Proper crimp/solder repair, insulation, strain relief, and sealing",
"Twist wires and tape only",
"Install a larger fuse",
"Leave copper exposed"
],
"answer": 0,
"explanation": "Motorcycle wiring must survive vibration, heat, and moisture. Poor repairs cause repeat faults. The repair should restore electrical and mechanical strength."
},
{
"id": 96,
"category": "G22 – Services electrical systems",
"question": "Why should terminals be crimped with the correct tool?",
"options": [
"To ensure mechanical strength and low resistance",
"To change battery polarity",
"To increase fuel pressure",
"To clean brake fluid"
],
"answer": 0,
"explanation": "Poor crimps loosen or create high resistance. High resistance causes voltage drop and heat. Correct crimping is essential for reliable electrical repair."
},
{
"id": 97,
"category": "G22 – Services electrical systems",
"question": "After replacing a battery, what should be checked?",
"options": [
"Terminal tightness, polarity, charging voltage, and secure mounting",
"Only mirror angle",
"Only seat colour",
"Only tire brand"
],
"answer": 0,
"explanation": "Batteries must be connected correctly and secured. Loose terminals cause starting and charging faults. Charging system output should be verified."
},
{
"id": 98,
"category": "G22 – Services electrical systems",
"question": "Why should harnesses be routed away from exhaust components?",
"options": [
"Heat can melt insulation and cause shorts",
"Heat improves wire strength",
"Exhaust cools wires",
"Wire insulation cannot burn"
],
"answer": 0,
"explanation": "Exhaust heat can damage insulation and connectors. Exposed conductors may short or open. Proper routing and heat shielding prevent failures."
},
{
"id": 99,
"category": "G22 – Services electrical systems",
"question": "What should be done after installing an accessory electrical load?",
"options": [
"Verify fuse protection, wiring route, current draw, and charging capacity",
"Ignore the charging system",
"Remove the battery ground permanently",
"Use household wire nuts"
],
"answer": 0,
"explanation": "Accessories add electrical load and wiring risk. The charging system must support the added demand. Fusing, routing, and weatherproofing are necessary."
},
{
"id": 100,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A motorcycle has a MIL on and a TPS code. What should be checked?",
"options": [
"TPS signal, 5 V reference, ground, connector, and throttle movement",
"Brake pad wear only",
"Tire pressure only",
"Final drive oil only"
],
"answer": 0,
"explanation": "A TPS code may be caused by sensor or circuit faults. The signal should change smoothly with throttle movement. Power, ground, and connector integrity must be verified."
},
{
"id": 101,
"category": "H23 – Diagnoses vehicle management systems",
"question": "An O₂ sensor reads lean all the time. What should be checked before replacing it?",
"options": [
"Exhaust leaks, intake leaks, fuel pressure, wiring, and sensor operation",
"Fork oil only",
"Brake rotor thickness only",
"Chain slack only"
],
"answer": 0,
"explanation": "A lean reading may be real or false. Exhaust leaks, fuel delivery problems, or intake leaks can cause lean readings. Sensor wiring and heater function should also be checked."
},
{
"id": 102,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A MAP sensor signal is incorrect. What drivability issue may occur?",
"options": [
"Incorrect fuel calculation and poor running",
"Low tire pressure",
"Brake fade only",
"Bent rim only"
],
"answer": 0,
"explanation": "MAP sensors help the ECM determine engine load. Wrong load information can change fuel and ignition control. Wiring, vacuum source, and sensor output must be tested."
},
{
"id": 103,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A crank sensor signal is missing. What is likely?",
"options": [
"No spark and no injector pulse",
"Higher compression",
"Stronger charging",
"Better idle"
],
"answer": 0,
"explanation": "The ECM needs crank position to control ignition and injection timing. Without rpm input, the system may not fire coils or injectors. Sensor and wiring tests are required."
},
{
"id": 104,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A coolant temperature sensor reads colder than actual. What may happen?",
"options": [
"Rich mixture and poor fuel economy",
"Lean brake fluid",
"Higher tire pressure",
"Stronger clutch springs"
],
"answer": 0,
"explanation": "The ECM may add fuel if it thinks the engine is cold. Incorrect temperature input can affect fan control and fuel mixture. Live data should match actual temperature."
},
{
"id": 105,
"category": "H23 – Diagnoses vehicle management systems",
"question": "What is closed-loop fuel control?",
"options": [
"ECM adjusts fuel based on O₂ sensor feedback",
"Carburetor float adjustment",
"Tire pressure monitoring only",
"Manual choke operation"
],
"answer": 0,
"explanation": "Closed loop uses exhaust oxygen feedback to correct mixture. The ECM trims fuel based on sensor readings. Exhaust leaks or sensor faults can affect correction."
},
{
"id": 106,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A fuel injector has battery voltage but no ground pulse. What should be checked?",
"options": [
"ECM control, crank/cam signal, wiring, and DTCs",
"Brake rotor runout",
"Fork tube height",
"Tire tread pattern"
],
"answer": 0,
"explanation": "Injectors often receive power and are pulsed by ECM ground control. No pulse may be caused by missing rpm input or control circuit fault. Scan data and wiring tests are needed."
},
{
"id": 107,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A CAN communication code appears after accessory installation. What is likely?",
"options": [
"Network wiring disturbance, poor ground, or module communication issue",
"Low fork oil",
"Worn brake pads",
"Clogged fuel filter only"
],
"answer": 0,
"explanation": "CAN networks allow modules to communicate. Incorrect accessory wiring can disturb signals, power, or grounds. Diagnosis should use wiring diagrams and scan data."
},
{
"id": 108,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A throttle-by-wire system enters limp mode. What should be checked?",
"options": [
"Throttle position sensors, pedal/grip sensors, actuator, wiring, and DTCs",
"Spoke tension only",
"Final drive oil only",
"Brake rotor colour only"
],
"answer": 0,
"explanation": "Electronic throttle systems use redundant sensors and actuator control. If values disagree, the ECM may limit power. DTCs and live data guide diagnosis."
},
{
"id": 109,
"category": "H23 – Diagnoses vehicle management systems",
"question": "A misfire counter shows one cylinder misfiring. What should be checked?",
"options": [
"Spark, fuel injector, compression, air leak, and wiring for that cylinder",
"Only rear tire pressure",
"Only brake fluid colour",
"Only seat latch"
],
"answer": 0,
"explanation": "Misfires can be ignition, fuel, mechanical, or air-related. Cylinder-specific data helps focus diagnosis. Testing should compare the faulty cylinder with known-good cylinders."
},
{
"id": 110,
"category": "H23 – Diagnoses vehicle management systems",
"question": "An EVAP fault code is stored. What should be inspected?",
"options": [
"Purge valve, venting, hoses, canister, wiring, and fuel cap",
"Fork seals only",
"Brake pads only",
"Clutch plates only"
],
"answer": 0,
"explanation": "EVAP systems control fuel vapours. Leaks, blocked hoses, failed valves, or electrical faults can set codes. Correct hose routing is important."
},
{
"id": 111,
"category": "H24 – Services vehicle management systems",
"question": "After replacing a TPS, what may be required?",
"options": [
"Adjustment, calibration, or reset procedure",
"Brake bleeding",
"Wheel truing",
"Fork oil change"
],
"answer": 0,
"explanation": "Some sensors require adjustment or ECM relearn. Incorrect calibration can cause idle or throttle faults. Service information must be followed."
},
{
"id": 112,
"category": "H24 – Services vehicle management systems",
"question": "Why clear DTCs only after completing repairs?",
"options": [
"To confirm whether the fault returns",
"To hide the problem",
"To increase battery voltage",
"To reset tire wear"
],
"answer": 0,
"explanation": "Codes help guide diagnosis before repair. After repair, clearing and retesting confirms the fix. Returning faults show diagnosis is incomplete."
},
{
"id": 113,
"category": "H24 – Services vehicle management systems",
"question": "What should be done after replacing an ECM-controlled component?",
"options": [
"Perform required relearn, initialization, or functional test",
"Ignore the scan tool",
"Replace all sensors",
"Remove the battery permanently"
],
"answer": 0,
"explanation": "Modern systems may require setup procedures. Components such as throttle bodies, sensors, or modules may need initialization. Functional testing confirms proper operation."
},
{
"id": 114,
"category": "H24 – Services vehicle management systems",
"question": "Why should connectors be fully seated after sensor service?",
"options": [
"Loose connectors cause intermittent faults and DTCs",
"They improve fuel economy only",
"They reduce brake temperature",
"They increase tire pressure"
],
"answer": 0,
"explanation": "Sensors depend on clean, tight electrical connections. Loose connectors may fail with vibration. Lock tabs and seals should be checked."
},
{
"id": 115,
"category": "H24 – Services vehicle management systems",
"question": "After repairing a vehicle management fault, what is a good final step?",
"options": [
"Road test or run cycle while monitoring live data",
"Wash the seat only",
"Replace the tires",
"Ignore the MIL"
],
"answer": 0,
"explanation": "Some faults appear only under operating conditions. Live data confirms sensors and controls are working normally. A proper verification prevents comeback repairs."
},
{
"id": 116,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A motorcycle stalls after several minutes and restarts when the fuel cap is opened. What is likely?",
"options": [
"Blocked fuel tank vent",
"Bad fork seal",
"Loose brake rotor",
"Worn clutch basket"
],
"answer": 0,
"explanation": "A blocked vent creates vacuum in the tank as fuel leaves. Opening the cap relieves the vacuum temporarily. Venting must be checked."
},
{
"id": 117,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "Fuel pressure is correct at idle but low under load. What should be diagnosed?",
"options": [
"Pump volume, filter restriction, regulator, and pump voltage under load",
"Wheel balance only",
"Brake fluid type only",
"Valve cover paint only"
],
"answer": 0,
"explanation": "Idle pressure does not prove fuel delivery capacity. Under load, restrictions or weak pump output may appear. Fuel diagnosis should include pressure and volume."
},
{
"id": 118,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A carbureted engine idles only with the choke on. What is likely?",
"options": [
"Lean pilot circuit or intake leak",
"Overcharging battery",
"Excess fork preload",
"Low brake fluid"
],
"answer": 0,
"explanation": "The choke enriches the mixture. If the engine needs choke to idle warm, the normal idle circuit may be lean. Pilot jets and intake leaks should be checked."
},
{
"id": 119,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A fuel injector clicks but the cylinder runs lean. What should be checked?",
"options": [
"Injector flow, spray pattern, fuel pressure, and intake leak",
"Brake rotor thickness",
"Fork oil only",
"Clutch cable free play only"
],
"answer": 0,
"explanation": "Clicking only confirms injector movement or command. It may still be restricted or have poor spray. A lean cylinder can also be caused by air leaks."
},
{
"id": 120,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "An exhaust leak upstream of an O₂ sensor can cause:",
"options": [
"False lean reading and incorrect fuel correction",
"Higher tire pressure",
"Better fuel economy always",
"Stronger clutch engagement"
],
"answer": 0,
"explanation": "Outside air can enter through the leak. The O₂ sensor may detect extra oxygen and report lean. The ECM may add fuel unnecessarily."
},
{
"id": 121,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A restricted exhaust causes poor high-rpm power. Why?",
"options": [
"Exhaust gases cannot leave efficiently",
"Battery voltage becomes too high",
"Brake fluid boils",
"Fuel tank grows smaller"
],
"answer": 0,
"explanation": "Engines need airflow in and exhaust flow out. Exhaust restriction increases backpressure and reduces cylinder clearing. High-rpm power is often affected first."
},
{
"id": 122,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A cracked intake boot causes a hanging idle. Why?",
"options": [
"Unmetered air creates a lean condition",
"Too much brake fluid enters",
"Fork oil is too thick",
"Final drive oil is low"
],
"answer": 0,
"explanation": "Air entering after the fuel-metering point leans the mixture. Lean idle conditions can raise or hang idle speed. Boots and clamps should be inspected."
},
{
"id": 123,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "Fuel drips from a carburetor overflow. What is likely?",
"options": [
"Stuck float needle, debris, or incorrect float height",
"Low tire pressure",
"Weak ignition coil",
"Worn brake pads"
],
"answer": 0,
"explanation": "The float system controls bowl fuel level. If the needle does not seal, fuel overflows. This creates fire risk and poor running."
},
{
"id": 124,
"category": "I25 – Diagnoses fuel and exhaust systems",
"question": "A motorcycle smells strongly of fuel after shutdown. What should be checked?",
"options": [
"Fuel leaks, injector leakdown, EVAP system, and tank venting",
"Fork spring rate only",
"Brake lever position only",
"Wheel colour only"
],
"answer": 0,
"explanation": "Fuel smell may indicate liquid leaks or vapour system faults. Fuel leaks are fire hazards. EVAP hoses and purge components may also be involved."
},
{
"id": 125,
"category": "I26 – Services fuel and exhaust systems",
"question": "Why should fuel lines be routed away from heat and sharp edges?",
"options": [
"To prevent leaks, vapour lock, and hose damage",
"To increase spark plug gap",
"To improve brake friction",
"To adjust suspension sag"
],
"answer": 0,
"explanation": "Fuel hoses can crack, melt, or chafe if routed poorly. Heat may also contribute to vapour lock. Fuel line routing is a safety issue."
},
{
"id": 126,
"category": "I26 – Services fuel and exhaust systems",
"question": "When cleaning carburetor jets, why avoid hard steel wire?",
"options": [
"It can enlarge or damage calibrated openings",
"It improves jet accuracy",
"It lowers fuel level",
"It repairs the float"
],
"answer": 0,
"explanation": "Jets are precision-metering parts. Scratching or enlarging them changes fuel flow. Use proper carburetor cleaning methods."
},
{
"id": 127,
"category": "I26 – Services fuel and exhaust systems",
"question": "After replacing an exhaust gasket, what should be checked?",
"options": [
"Even flange seating, fastener torque, and leaks",
"Tire tread only",
"Brake pad colour only",
"Battery brand only"
],
"answer": 0,
"explanation": "Exhaust gaskets need even clamping. Leaks can cause noise, heat damage, and sensor errors. Fasteners should be tightened correctly."
},
{
"id": 128,
"category": "I26 – Services fuel and exhaust systems",
"question": "Why replace a restricted fuel filter?",
"options": [
"It can reduce fuel flow and cause lean operation",
"It increases fuel pressure safely",
"It cleans the exhaust",
"It improves brake feel"
],
"answer": 0,
"explanation": "Fuel filters protect injectors and carburetors. If restricted, they limit fuel volume under load. Lean operation can damage engines."
},
{
"id": 129,
"category": "I26 – Services fuel and exhaust systems",
"question": "What should be done after servicing a fuel system component?",
"options": [
"Check for leaks before returning the motorcycle",
"Ignore fuel smell",
"Road test without inspection",
"Remove the fuel cap permanently"
],
"answer": 0,
"explanation": "Fuel leaks are serious fire hazards. Any opened fuel connection should be inspected under operating conditions. Leak checks are mandatory after service."
},
{
"id": 130,
"category": "I26 – Services fuel and exhaust systems",
"question": "Why should exhaust fasteners be tightened in the correct sequence where specified?",
"options": [
"To prevent leaks, flange distortion, and broken studs",
"To adjust fuel pressure",
"To raise battery voltage",
"To increase tire grip"
],
"answer": 0,
"explanation": "Exhaust flanges must clamp evenly. Uneven tightening can distort parts or break studs. Proper sealing prevents noise, heat damage, and false sensor readings."
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
const shuffledMotorcycleTechnicianIPQuestions =
shuffleArray(motorcycleTechnicianIPQuestions).map(shuffleOptionsForQuestion);
createPremiumQuizApp({
tradeSlug: "architectural-sheet-metal-worker",
tradeTitle: "Motorcycle Technician",
sectionTitle: "Inter-Provincial Practice Exam",
questionTimeSeconds: 90,
questions: shuffledMotorcycleTechnicianIPQuestions
});
window.addEventListener("load", () => {
const hintBtn = document.getElementById("hintBtn");
const hintBox = document.getElementById("hintBox");
const hintText = document.getElementById("hintText");
if (hintBtn) hintBtn.style.display = "none";
if (hintBox) hintBox.classList.add("hidden");
if (hintText) hintText.textContent = "";
});
