const sheetMetalWorkerLevel2Set4Questions = [
  {
    id: 1,
    category: "B1. Use Hand Tools",
    question: "A small flange on a duct fitting is slightly bent out of shape before installation. Which tool is best for correcting it?",
    options: ["Hand seamer", "Pipe wrench", "Sledgehammer", "Reciprocating saw"],
    answer: 0,
    explanation: "A hand seamer allows controlled adjustment of small sheet metal edges and flanges."
  },
  {
    id: 2,
    category: "B2. Use Power Tools",
    question: "A power shear is producing rough, distorted cuts. What should be checked first?",
    options: ["Blade condition, tool adjustment, and material thickness", "Duct airflow", "Sealant cure time", "Roof slope"],
    answer: 0,
    explanation: "Poor cut quality can be caused by dull blades, poor adjustment, unsupported material, or using material beyond the tool’s capacity."
  },
  {
    id: 3,
    category: "B4. Use Shop Equipment",
    question: "Which shop equipment is most appropriate for forming a curved metal rainwater leader?",
    options: ["Slip roll", "Drill press", "Bench grinder", "Notcher"],
    answer: 0,
    explanation: "A slip roll forms sheet metal into curves or cylindrical shapes."
  },
  {
    id: 4,
    category: "B5. Use Ladders, Scaffolds and Platforms",
    question: "Large wall panels are being installed from a ladder, and the panels are difficult to control. What is the best choice?",
    options: ["Use a scaffold, lift, or safer work platform", "Continue if the panels are light", "Stand on the ladder top cap", "Carry panels higher to avoid bending"],
    answer: 0,
    explanation: "Large panels require stable footing and control. A scaffold, aerial lift, or proper platform is usually safer than a ladder."
  },
  {
    id: 5,
    category: "B6. Use Fasteners and Sealants",
    question: "Exterior sealant is applied to dusty metal. What is the most likely problem?",
    options: ["Poor adhesion", "Increased metal thickness", "Better curing", "Improved weather resistance"],
    answer: 0,
    explanation: "Sealant requires clean, dry, compatible surfaces. Dust, oil, moisture, or loose material can cause failure."
  },
  {
    id: 6,
    category: "C1. Interpret Drawings and Specifications",
    question: "A drawing note reads “B.O.D. 2850 mm.” What does this mean?",
    options: ["Bottom of duct elevation is 2850 mm", "Bend outside diameter is 2850 mm", "Base opening depth is 2850 mm", "Branch outlet diameter is 2850 mm"],
    answer: 0,
    explanation: "B.O.D. commonly means bottom of duct and identifies the installed elevation."
  },
  {
    id: 7,
    category: "C1. Interpret Drawings and Specifications / C3. Communicate with Others",
    question: "A duct route on the drawing conflicts with a beam on site. What is the correct first response?",
    options: ["Report and coordinate the conflict before changing the installation", "Cut the beam", "Flatten the duct without approval", "Install the duct lower without checking clearances"],
    answer: 0,
    explanation: "Conflicts must be coordinated before changes are made because they may affect structure, code, access, and system performance."
  },
  {
    id: 8,
    category: "C1. Interpret Drawings and Specifications",
    question: "Why should the latest approved drawing revision be checked before fabrication?",
    options: ["To avoid building from outdated information", "To reduce the metal gauge", "To eliminate shop measurements", "To avoid using templates"],
    answer: 0,
    explanation: "Old revisions may show incorrect sizes, locations, or details, which can lead to rework."
  },
  {
    id: 9,
    category: "C4. Measure and Sketch Shop Project Components",
    question: "A custom transition is being field-measured. Which information is most important?",
    options: ["End sizes, length, offset direction, orientation, material, and connection type", "Worker name only", "Tool colour", "Weather forecast only"],
    answer: 0,
    explanation: "A transition must be measured with enough detail to fabricate and install it correctly."
  },
  {
    id: 10,
    category: "C4. Measure and Sketch Shop Project Components",
    question: "Which missing detail on a flashing sketch can cause water to drain the wrong way?",
    options: ["Slope direction", "Date", "Worker initials", "Pencil type"],
    answer: 0,
    explanation: "Slope direction affects lap direction, profile orientation, and drainage."
  },
  {
    id: 11,
    category: "C5. Identify Metals and Properties",
    question: "Why is direct contact between copper and aluminum usually avoided outdoors?",
    options: ["Galvanic corrosion may occur", "The metals become too flexible", "The metals become magnetic", "Airflow decreases"],
    answer: 0,
    explanation: "Dissimilar metals in contact with moisture can create galvanic corrosion."
  },
  {
    id: 12,
    category: "C5. Identify Metals and Properties",
    question: "Stainless steel trim has been brushed with a carbon steel wire brush. What is the concern?",
    options: ["Iron contamination and rust staining", "Higher insulation value", "Reduced expansion", "Improved corrosion resistance"],
    answer: 0,
    explanation: "Carbon steel particles can contaminate stainless steel and later rust or stain the surface."
  },
  {
    id: 13,
    category: "D1. Use Basic Trade Math",
    question: "Convert 8 ft 3 in. to inches.",
    options: ["83 in.", "96 in.", "99 in.", "108 in."],
    answer: 2,
    explanation: "8 ft = 96 in. Add 3 in. Total = 99 in."
  },
  {
    id: 14,
    category: "D1. Use Basic Trade Math",
    question: "Convert 720 sq. in. to square feet.",
    options: ["3 sq. ft.", "4 sq. ft.", "5 sq. ft.", "6 sq. ft."],
    answer: 2,
    explanation: "144 sq. in. = 1 sq. ft. 720 ÷ 144 = 5 sq. ft."
  },
  {
    id: 15,
    category: "D2. Solve Problems Using Formulas",
    question: "A rectangular duct is 30 in. wide and 22 in. high. What is the perimeter?",
    options: ["52 in.", "74 in.", "104 in.", "660 in."],
    answer: 2,
    explanation: "Perimeter = 2L + 2W = 2(30) + 2(22) = 60 + 44 = 104 in."
  },
  {
    id: 16,
    category: "D2. Solve Problems Using Formulas",
    question: "A round duct has a diameter of 21 in. What is the approximate circumference?",
    options: ["42.0 in.", "54.0 in.", "65.9 in.", "84.0 in."],
    answer: 2,
    explanation: "Circumference = πD = 3.14 × 21 = 65.94 in."
  },
  {
    id: 17,
    category: "D2. Solve Problems Using Formulas",
    question: "A duct opening has an area of 7 sq. ft. and airflow of 3,500 CFM. What is the velocity?",
    options: ["350 FPM", "400 FPM", "500 FPM", "700 FPM"],
    answer: 2,
    explanation: "FPM = CFM ÷ Area = 3,500 ÷ 7 = 500 FPM."
  },
  {
    id: 18,
    category: "D3. Solve Problems Using Pythagorean Theorem",
    question: "A right triangle has a rise of 16 in. and a run of 30 in. What is the diagonal?",
    options: ["34 in.", "36 in.", "42 in.", "46 in."],
    answer: 0,
    explanation: "16² + 30² = 256 + 900 = 1,156. √1,156 = 34 in."
  },
  {
    id: 19,
    category: "D4. Solve Problems Using Trigonometry",
    question: "A right triangle has an opposite side of 7 in. and an adjacent side of 14 in. What is the tangent?",
    options: ["0.25", "0.50", "1.00", "2.00"],
    answer: 1,
    explanation: "Tangent = opposite ÷ adjacent = 7 ÷ 14 = 0.50."
  },
  {
    id: 20,
    category: "D4. Solve Problems Using Trigonometry",
    question: "A triangle has an adjacent side of 9 in. and a hypotenuse of 15 in. What is the cosine?",
    options: ["0.40", "0.50", "0.60", "1.67"],
    answer: 2,
    explanation: "Cosine = adjacent ÷ hypotenuse = 9 ÷ 15 = 0.60."
  },
  {
    id: 21,
    category: "E1. Identify Systems",
    question: "Which system removes fumes, odours, moisture, or contaminated air from a space?",
    options: ["Exhaust air system", "Roof drainage system", "Wall cladding system", "Flashing system"],
    answer: 0,
    explanation: "Exhaust systems remove unwanted air or contaminants from a space."
  },
  {
    id: 22,
    category: "E1. Identify Systems",
    question: "A duct elbow has missing turning vanes where they were specified. What is the likely effect?",
    options: ["More turbulence and pressure loss", "Less noise", "Higher corrosion resistance", "Better airflow distribution"],
    answer: 0,
    explanation: "Turning vanes help guide airflow through elbows and reduce turbulence, noise, and pressure loss."
  },
  {
    id: 23,
    category: "E2. Identify Support Structures",
    question: "What is the purpose of blocking behind flashing or trim?",
    options: ["Provide secure backing for fastening", "Increase duct velocity", "Replace counterflashing", "Reduce solder temperature"],
    answer: 0,
    explanation: "Blocking provides a solid backing so fasteners can properly secure flashing or trim."
  },
  {
    id: 24,
    category: "E3. Identify Building Envelope",
    question: "What does a vapour barrier help control?",
    options: ["Moisture movement by vapour diffusion", "Sheet metal gauge", "Duct hanger spacing", "Solder flow"],
    answer: 0,
    explanation: "Vapour barriers or vapour retarders limit moisture movement through an assembly by diffusion."
  },
  {
    id: 25,
    category: "E3. Identify Building Envelope",
    question: "A drainage cavity behind wall panels is blocked at the base. What can happen?",
    options: ["Moisture may be trapped behind the cladding", "The panel becomes stronger", "Fasteners become corrosion-proof", "Airflow improves"],
    answer: 0,
    explanation: "Drainage cavities must remain open so water can drain and the assembly can dry."
  },
  {
    id: 26,
    category: "E5. Examine Roof Systems",
    question: "Which roof condition can increase leak risk at flashing details?",
    options: ["Ponding water", "Correct slope", "Proper counterflashing", "Correct lap direction"],
    answer: 0,
    explanation: "Ponding water increases exposure around flashings and may lead to leaks or material deterioration."
  },
  {
    id: 27,
    category: "E6. Examine Specialty Products",
    question: "What is the main purpose of a roof scupper?",
    options: ["Drain water through a parapet or wall", "Support ductwork", "Form a longitudinal seam", "Replace a balancing damper"],
    answer: 0,
    explanation: "A scupper allows roof water to drain through a wall or parapet to the exterior."
  },
  {
    id: 28,
    category: "E6. Examine Specialty Products",
    question: "A louver is installed without sill flashing. What is the concern?",
    options: ["Water entering through the louver may enter the wall assembly", "The louver will become stronger", "Airflow will stop completely", "The duct pressure will increase"],
    answer: 0,
    explanation: "Louvers can allow wind-driven rain inside. Sill flashing directs water back outside."
  },
  {
    id: 29,
    category: "E7. Examine Specialty System Components/Accessories",
    question: "Why must access be provided at fire dampers?",
    options: ["For inspection, testing, maintenance, and reset", "To improve appearance", "To reduce duct size", "To replace firestopping"],
    answer: 0,
    explanation: "Fire dampers must remain accessible for inspection and service."
  },
  {
    id: 30,
    category: "E7. Examine Specialty System Components/Accessories",
    question: "What is the purpose of a flexible connector at equipment?",
    options: ["Reduce vibration transfer to ductwork", "Increase duct weight", "Replace duct hangers", "Reduce roof slope"],
    answer: 0,
    explanation: "Flexible connectors help isolate vibration and movement between fans/equipment and ductwork."
  },
  {
    id: 31,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "A standing seam panel joint is not locking evenly. What should be checked?",
    options: ["Panel alignment, seam profile, and seaming tool setup", "Duct airflow", "Sealant colour", "Ladder height"],
    answer: 0,
    explanation: "Standing seams need correct panel alignment, profile shape, and seaming tool adjustment to lock properly."
  },
  {
    id: 32,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "What is the main function of a Pittsburgh lock?",
    options: ["Form a longitudinal seam in rectangular duct", "Drain roof water", "Support wall framing", "Weld stainless steel"],
    answer: 0,
    explanation: "A Pittsburgh lock is commonly used as a longitudinal seam in rectangular ductwork."
  },
  {
    id: 33,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "A snap-lock seam has several sections not fully engaged. What problem can result?",
    options: ["Air leakage and weak seam connection", "Better duct strength", "Reduced need for sealing", "Improved balancing"],
    answer: 0,
    explanation: "A snap-lock seam must be fully engaged to provide strength and reduce leakage."
  },
  {
    id: 34,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "Why is a hem used on exposed sheet metal edges?",
    options: ["To stiffen the edge and reduce sharpness", "To reduce material strength", "To increase leakage", "To remove all fasteners"],
    answer: 0,
    explanation: "Hems improve appearance, add stiffness, and reduce exposed sharp edges."
  },
  {
    id: 35,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "Which connection is most common for rectangular duct transverse joints?",
    options: ["S-cleat and drive cleat", "Drip edge and scupper", "Flux and solder only", "Reglet and counterflashing only"],
    answer: 0,
    explanation: "S-cleats and drive cleats are common transverse duct connections."
  },
  {
    id: 36,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "Why is seam allowance added to a pattern?",
    options: ["To provide material for locks, seams, or joints", "To reduce the duct size only", "To replace all layout marks", "To increase metal thickness"],
    answer: 0,
    explanation: "Seam allowance provides the extra metal required to form locks, seams, hems, or joints."
  },
  {
    id: 37,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "What is the purpose of a grooved seam?",
    options: ["Mechanically lock sheet metal edges together", "Measure air velocity", "Replace hangers", "Drain roof water"],
    answer: 0,
    explanation: "A grooved seam is a folded mechanical joint joining two sheet metal edges."
  },
  {
    id: 38,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "A duct seam is crushed during handling. What is the likely concern?",
    options: ["Poor fit-up, weak seam, or air leakage", "Higher duct pressure", "Better alignment", "Reduced need for sealing"],
    answer: 0,
    explanation: "Damaged seams may not close or seal properly and can weaken the duct connection."
  },
  {
    id: 39,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "Sealant is used to fill a large gap at a duct joint with poor fit-up. What is the concern?",
    options: ["Sealant may fail because the joint was not properly assembled", "The duct becomes stronger", "Airflow improves", "Hanger spacing is reduced"],
    answer: 0,
    explanation: "Sealant is not a substitute for proper mechanical fit-up and correct joint assembly."
  },
  {
    id: 40,
    category: "F1. Seams, Locks, Edges and Joints",
    question: "Why should seam location be planned before cutting a transition?",
    options: ["It affects assembly, sealing access, appearance, and installation", "It changes material type", "It removes the need for measurements", "It eliminates all seams"],
    answer: 0,
    explanation: "Seam placement affects fabrication, installation, sealing, access, and appearance."
  },
  {
    id: 41,
    category: "F2. Fabricate Components",
    question: "A formed trim piece finishes 4 mm short after bending. What is the likely cause?",
    options: ["Bend allowance or bend deduction error", "Correct layout", "Proper brake setup", "Clean tooling"],
    answer: 0,
    explanation: "Bend allowance and bend deduction determine finished dimensions after forming. Incorrect calculation causes size errors."
  },
  {
    id: 42,
    category: "F2. Fabricate Components",
    question: "What is the purpose of cross-breaking a duct panel?",
    options: ["Add stiffness and reduce drumming", "Increase leakage", "Remove all seams", "Reduce metal strength"],
    answer: 0,
    explanation: "Cross-breaking stiffens flat duct panels and reduces vibration, drumming, and deflection."
  },
  {
    id: 43,
    category: "F2. Fabricate Components",
    question: "Which measurement best checks if a rectangular fitting is square?",
    options: ["Diagonal measurements", "Screw length", "Sealant bead width", "Paint thickness"],
    answer: 0,
    explanation: "Equal diagonals indicate the fitting is square. Unequal diagonals indicate racking."
  },
  {
    id: 44,
    category: "F2. Fabricate Components",
    question: "Why should sheet metal be deburred after cutting?",
    options: ["To reduce cut hazards and improve assembly", "To increase material thickness", "To make metal magnetic", "To replace fasteners"],
    answer: 0,
    explanation: "Burrs are sharp and can interfere with seams, fit-up, and safe handling."
  },
  {
    id: 45,
    category: "F2. Fabricate Components",
    question: "A box pan cannot be completed because earlier bends block the brake fingers. What was missed?",
    options: ["Bend sequence planning", "Sealant selection", "Airflow calculation", "Hanger spacing"],
    answer: 0,
    explanation: "Box and pan fabrication requires a planned bend sequence so earlier bends do not block later bends."
  },
  {
    id: 46,
    category: "F2. Fabricate Components",
    question: "Prefinished metal is scratched during forming. What is a common cause?",
    options: ["Dirty brake tooling or metal chips", "Proper protective handling", "Clean dies", "Correct support"],
    answer: 0,
    explanation: "Contaminated tooling or metal chips can damage prefinished surfaces."
  },
  {
    id: 47,
    category: "F2. Fabricate Components",
    question: "Why is a template useful for repeated parts?",
    options: ["It improves consistency and reduces layout errors", "It increases waste", "It removes all quality checks", "It replaces material measurements"],
    answer: 0,
    explanation: "Templates help produce repeated components accurately and consistently."
  },
  {
    id: 48,
    category: "F2. Fabricate Components / C4. Measure and Sketch Shop Project Components",
    question: "A custom flashing does not fit because the existing curb was not measured. What was missed?",
    options: ["Field verification", "Soldering flux", "Duct sealing", "Hanger spacing"],
    answer: 0,
    explanation: "Custom components should be measured against actual site conditions before fabrication."
  },
  {
    id: 49,
    category: "F2. Fabricate Components",
    question: "What is the purpose of a return flange on a metal component?",
    options: ["Add stiffness and provide a fastening or connection surface", "Reduce metal thickness", "Increase leakage", "Remove layout requirements"],
    answer: 0,
    explanation: "Return flanges strengthen components and can provide surfaces for fastening or connection."
  },
  {
    id: 50,
    category: "F2. Fabricate Components",
    question: "A duct fitting is hard to assemble because allowance was not included. Which allowance was most likely missed?",
    options: ["Seam or lock allowance", "Paint allowance only", "Scaffold allowance", "Fire extinguisher allowance"],
    answer: 0,
    explanation: "Seam or lock allowance is required so the fitting can be assembled correctly."
  },
  {
    id: 51,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "Before lifting a duct section into place, which item is most important?",
    options: ["Load weight, balance, lift capacity, and travel path", "Duct colour", "Number of stickers on the duct", "Whether the duct is shiny"],
    answer: 0,
    explanation: "Safe lifting requires knowing the load weight, balance point, equipment capacity, securement, and travel path."
  },
  {
    id: 52,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "A duct section is hanging from a material lift. What must be done before lowering the lift away?",
    options: ["Confirm the duct is fully supported and secured", "Remove all duct labels", "Install insulation first", "Apply paint to the duct"],
    answer: 0,
    explanation: "The duct must be supported by permanent or temporary supports before lifting equipment is released."
  },
  {
    id: 53,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "Which support method is unacceptable unless specifically approved?",
    options: ["Duct hangers attached to ceiling grid wires", "Hangers attached to approved structure", "Anchors installed to specification", "Rods sized for the duct load"],
    answer: 0,
    explanation: "Ceiling grid wires are not normally designed to support duct loads. Ductwork must be supported from approved structure."
  },
  {
    id: 54,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "A duct run sags between supports. What is the most likely cause?",
    options: ["Hanger spacing is too great or supports are inadequate", "Duct joints are too clean", "Sealant has cured properly", "Dampers are accessible"],
    answer: 0,
    explanation: "Duct sagging commonly results from excessive hanger spacing, weak supports, or inadequate anchorage."
  },
  {
    id: 55,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "Which factor is most important when selecting an anchor for a duct support?",
    options: ["Load rating and base material suitability", "Anchor colour", "Duct finish", "Sealant type"],
    answer: 0,
    explanation: "Anchors must be suitable for the load, base material, embedment, spacing, and installation method."
  },
  {
    id: 56,
    category: "G1. Use Hoisting, Lifting and Rigging Equipment",
    question: "Ductwork is being installed in a shaft opening. Which hazard is most important to control?",
    options: ["Falls and dropped objects", "Sheet metal colour variation", "Low solder temperature", "Panel oil-canning"],
    answer: 0,
    explanation: "Shaft openings create fall hazards, and tools or materials can fall to lower levels."
  },
  {
    id: 57,
    category: "G2. Install Roofing and Wall Components",
    question: "Why must flashing laps be installed in shingle fashion?",
    options: ["To direct water to the exterior", "To increase metal thickness", "To eliminate thermal movement", "To replace all sealant"],
    answer: 0,
    explanation: "Shingle fashion means water flows over the lap rather than behind it, reducing water entry risk."
  },
  {
    id: 58,
    category: "G2. Install Roofing and Wall Components",
    question: "A metal roof side lap is not fully engaged. What is the likely concern?",
    options: ["Water leakage and reduced wind-uplift resistance", "Improved drainage", "Increased panel thickness", "Reduced need for fasteners"],
    answer: 0,
    explanation: "Roof panel laps must be fully engaged and fastened correctly to resist water entry and uplift forces."
  },
  {
    id: 59,
    category: "G2. Install Roofing and Wall Components",
    question: "What is the purpose of a drip edge on exterior trim?",
    options: ["To break surface tension and direct water away", "To increase fastener spacing", "To replace counterflashing", "To reduce roof slope"],
    answer: 0,
    explanation: "A drip edge helps water drop away instead of tracking back under flashing or trim."
  },
  {
    id: 60,
    category: "G2. Install Roofing and Wall Components",
    question: "A wall panel fastener is tightened hard through a slotted hole. What can result?",
    options: ["Restricted thermal movement and panel distortion", "Better expansion movement", "Improved drainage", "Increased corrosion resistance"],
    answer: 0,
    explanation: "Slotted holes allow movement. Over-tightening can lock the panel and cause buckling or oil-canning."
  },
  {
    id: 61,
    category: "G2. Install Roofing and Wall Components",
    question: "Long flashing is installed with no expansion allowance. What problem may occur?",
    options: ["Buckling, joint failure, or fastener stress", "Better water shedding", "Reduced thermal stress", "Improved panel alignment"],
    answer: 0,
    explanation: "Long metal runs expand and contract with temperature changes. Movement allowance prevents distortion and failure."
  },
  {
    id: 62,
    category: "G2. Install Roofing and Wall Components",
    question: "Which condition can allow water into a parapet cap joint?",
    options: ["Open mitre or missing end dam", "Proper drip edge", "Correct slope", "Properly secured cap"],
    answer: 0,
    explanation: "Open joints or missing end dams can allow water into the wall assembly."
  },
  {
    id: 63,
    category: "G2. Install Roofing and Wall Components",
    question: "What does counterflashing protect?",
    options: ["The upper edge of base flashing", "The bottom of duct hangers", "The inside of duct insulation", "The roof drain basket"],
    answer: 0,
    explanation: "Counterflashing covers and protects the top edge of base flashing to prevent water entry behind it."
  },
  {
    id: 64,
    category: "G2. Install Roofing and Wall Components",
    question: "Which condition commonly causes oil-canning in architectural panels?",
    options: ["Uneven substrate, trapped stress, or over-fastening", "Proper movement allowance", "Correct panel alignment", "Clean panel handling"],
    answer: 0,
    explanation: "Oil-canning may result from uneven support, locked-in stress, over-tightened fasteners, or restricted movement."
  },
  {
    id: 65,
    category: "G2. Install Roofing and Wall Components",
    question: "Why is starter trim alignment important?",
    options: ["It controls the starting line for the panel system", "It replaces fasteners", "It stops all thermal movement", "It increases panel gauge"],
    answer: 0,
    explanation: "If starter trim is out of level or misaligned, the error can carry through the entire panel run."
  },
  {
    id: 66,
    category: "G3. Prepare Substrate",
    question: "Which substrate condition should be corrected before wall panel installation?",
    options: ["Misaligned backing or girts", "Proper membrane laps", "Solid support framing", "Correct layout lines"],
    answer: 0,
    explanation: "Wall panels follow the support plane. Misaligned backing can cause poor alignment, distortion, or oil-canning."
  },
  {
    id: 67,
    category: "G3. Prepare Substrate",
    question: "Before installing metal roofing panels, what should be checked?",
    options: ["Decking is solid, aligned, and properly prepared", "Panel colour only", "Number of unused screws", "Whether panels are easy to carry"],
    answer: 0,
    explanation: "Metal roofing requires a sound substrate for proper fastening, alignment, and weather resistance."
  },
  {
    id: 68,
    category: "G3. Prepare Substrate",
    question: "What is the concern with covering a torn weather barrier with cladding?",
    options: ["Water or air leakage may occur", "Panel strength increases", "Fasteners become stronger", "Drainage improves"],
    answer: 0,
    explanation: "Damaged weather or air barriers must be repaired before cladding is installed."
  },
  {
    id: 69,
    category: "G3. Prepare Substrate",
    question: "What support condition can show through finished metal panels?",
    options: ["Misaligned girts or uneven backing", "Proper blocking", "Correct starter trim", "Clean work area"],
    answer: 0,
    explanation: "Uneven backing can telegraph through panels and affect appearance."
  },
  {
    id: 70,
    category: "G3. Prepare Substrate",
    question: "Why should wet or contaminated substrates be corrected before installation?",
    options: ["They can trap moisture, affect adhesion, or cause corrosion", "They improve material performance", "They reduce flashing requirements", "They increase fastener strength"],
    answer: 0,
    explanation: "Moisture and contamination can reduce long-term performance and cause defects or corrosion."
  },
  {
    id: 71,
    category: "G3. Prepare Substrate",
    question: "Which roof substrate condition is unacceptable?",
    options: ["Loose or unsupported decking", "Correct underlayment laps", "Solid support", "Proper layout marks"],
    answer: 0,
    explanation: "Loose or unsupported decking can cause leaks, poor fastening, and panel distortion."
  },
  {
    id: 72,
    category: "G4. Install Specialty Components",
    question: "Why must balancing dampers remain accessible?",
    options: ["For adjustment, balancing, inspection, and maintenance", "To increase duct weight", "To reduce duct size", "To hide them permanently"],
    answer: 0,
    explanation: "Dampers must be accessible so airflow can be adjusted and maintained after installation."
  },
  {
    id: 73,
    category: "G4. Install Specialty Components",
    question: "What is the purpose of a duct access door?",
    options: ["To allow inspection, cleaning, adjustment, or service", "To increase duct leakage", "To replace hangers", "To reduce duct size"],
    answer: 0,
    explanation: "Access doors provide access to internal duct components and areas requiring service or cleaning."
  },
  {
    id: 74,
    category: "G4. Install Specialty Components",
    question: "What is the result of unsealed duct joints where sealing is required?",
    options: ["Air leakage and reduced system performance", "Stronger duct joints", "Better balancing automatically", "Lower installation cost only"],
    answer: 0,
    explanation: "Unsealed duct joints can leak air and reduce system efficiency and performance."
  },
  {
    id: 75,
    category: "G4. Install Specialty Components",
    question: "Which duct component must remain accessible for inspection and reset?",
    options: ["Fire damper", "Hemmed edge", "Drip edge", "Standing seam"],
    answer: 0,
    explanation: "Fire dampers require access for inspection, testing, maintenance, and reset."
  },
  {
    id: 76,
    category: "G4. Install Specialty Components",
    question: "What can happen if the vapour barrier on cold duct insulation is damaged?",
    options: ["Condensation may form", "Airflow increases", "Duct size changes", "Hanger spacing decreases"],
    answer: 0,
    explanation: "Humid air can reach cold duct surfaces through damaged vapour barrier, causing condensation."
  },
  {
    id: 77,
    category: "G4. Install Specialty Components",
    question: "A duct-mounted accessory is installed above a hard ceiling. What must be considered?",
    options: ["Access, support, sealing, drainage, and manufacturer requirements", "Hidden location only", "No service clearance", "Random fastener spacing"],
    answer: 0,
    explanation: "Accessories such as humidifiers, coils, dampers, and sensors require support, access, sealing, drainage where needed, and proper installation."
  },
  {
    id: 78,
    category: "G4. Install Specialty Components",
    question: "A branch takeoff scoop is installed facing against airflow. What is likely?",
    options: ["Reduced branch airflow and increased turbulence", "Better balancing", "Lower pressure loss", "Stronger seam engagement"],
    answer: 0,
    explanation: "Directional takeoffs must be oriented with the airflow to perform correctly."
  },
  {
    id: 79,
    category: "H3. Produce Patterns Using Parallel Line Development",
    question: "Which development method is used for a straight round pipe?",
    options: ["Parallel line development", "Radial line development", "Triangulation only", "Freehand only"],
    answer: 0,
    explanation: "Straight round pipe has parallel elements, so parallel line development is used."
  },
  {
    id: 80,
    category: "H3. Produce Patterns Using Parallel Line Development",
    question: "Why is a round end divided into equal spaces during pattern development?",
    options: ["To transfer points accurately to the flat stretch-out", "To reduce duct diameter", "To increase material thickness", "To remove seam allowance"],
    answer: 0,
    explanation: "Equal divisions help transfer points from the round view to the flat pattern accurately."
  },
  {
    id: 81,
    category: "H3. Produce Patterns Using Parallel Line Development",
    question: "A round pipe has a diameter of 22 in. What is the approximate stretch-out before seam allowance?",
    options: ["44.0 in.", "56.5 in.", "69.1 in.", "88.0 in."],
    answer: 2,
    explanation: "Stretch-out equals circumference. C = πD = 3.14 × 22 = 69.08 in."
  },
  {
    id: 82,
    category: "H3. Produce Patterns Using Parallel Line Development",
    question: "Which fitting can commonly be developed using parallel line development?",
    options: ["Mitered round elbow", "Cone reducer only", "Offset square-to-round transition only", "Irregular transition only"],
    answer: 0,
    explanation: "Parallel line development is used for straight cylinders and many round mitered elbow patterns."
  },
  {
    id: 83,
    category: "H4. Produce Patterns Using Radial Line Development",
    question: "Which fitting is best suited to radial line development?",
    options: ["Cone reducer", "Straight rectangular duct", "Flat square panel", "Straight square duct"],
    answer: 0,
    explanation: "Radial line development is used for cone-shaped or tapered round fittings."
  },
  {
    id: 84,
    category: "H4. Produce Patterns Using Radial Line Development",
    question: "Which dimension is essential for cone development?",
    options: ["Slant height", "Sealant bead size", "Duct pressure class", "Fastener spacing only"],
    answer: 0,
    explanation: "Cone patterns require the slant height or true-length element lines to develop accurately."
  },
  {
    id: 85,
    category: "H4. Produce Patterns Using Radial Line Development",
    question: "In radial line development, what is the apex?",
    options: ["The point where radial element lines originate", "The centre of a rectangular duct", "The hanger support point", "The fastener spacing mark"],
    answer: 0,
    explanation: "Radial line development uses element lines projected from an apex."
  },
  {
    id: 86,
    category: "H5. Produce Patterns Using Triangulation",
    question: "Which fitting commonly requires triangulation?",
    options: ["Offset rectangular-to-round transition", "Straight round pipe", "Straight rectangular duct", "Flat rectangular panel"],
    answer: 0,
    explanation: "Irregular and offset transitions are developed using triangulation and true lengths."
  },
  {
    id: 87,
    category: "H5. Produce Patterns Using Triangulation",
    question: "Why are true lengths required in triangulation?",
    options: ["To create an accurate developed pattern", "To select sealant colour", "To remove seam allowance", "To identify duct pressure"],
    answer: 0,
    explanation: "Lines may appear shortened in regular views. True lengths are needed for accurate pattern layout."
  },
  {
    id: 88,
    category: "H5. Produce Patterns Using Triangulation",
    question: "What can happen if point numbers are mixed up on a triangulated pattern?",
    options: ["The fitting may twist or not fit correctly", "The metal becomes thicker", "The seam allowance corrects it", "The duct becomes quieter"],
    answer: 0,
    explanation: "Correct point transfer is essential in triangulation. Incorrect point numbering causes pattern errors."
  },
  {
    id: 89,
    category: "H5. Produce Patterns Using Triangulation",
    question: "Why should seam location be planned on a transition?",
    options: ["It affects fabrication, access, sealing, installation, and appearance", "It removes the need for true lengths", "It changes metal type", "It eliminates all layout marks"],
    answer: 0,
    explanation: "Seam location affects whether the fitting can be assembled, sealed, installed, and inspected properly."
  },
  {
    id: 90,
    category: "H2. Draw Orthographic and Pictorial Drawings",
    question: "Which drawing type shows front, top, and side views?",
    options: ["Orthographic drawing", "SDS sheet", "Material invoice", "Fire extinguisher label"],
    answer: 0,
    explanation: "Orthographic drawings use multiple views to describe an object."
  },
  {
    id: 91,
    category: "H2. Draw Orthographic and Pictorial Drawings",
    question: "What does an isometric sketch help show?",
    options: ["Three-dimensional shape and orientation", "Fire extinguisher class", "WHMIS pictograms", "Sealant cure time"],
    answer: 0,
    explanation: "Isometric sketches show three-dimensional relationships and help communicate shape and orientation."
  },
  {
    id: 92,
    category: "I1. Cutting Techniques",
    question: "Which cutting process uses oxygen and fuel gas?",
    options: ["Oxy-fuel cutting", "Hand seaming", "Soft soldering", "Slip rolling"],
    answer: 0,
    explanation: "Oxy-fuel cutting uses oxygen and fuel gas to create a cutting flame."
  },
  {
    id: 93,
    category: "I2. Select and Use Welding Equipment for SMAW",
    question: "SMAW is commonly known as:",
    options: ["Stick welding", "Soft soldering", "Riveting", "Cross-breaking"],
    answer: 0,
    explanation: "Shielded Metal Arc Welding is commonly called stick welding."
  },
  {
    id: 94,
    category: "I2. Select and Use Welding Equipment for SMAW",
    question: "What does flux coating on a SMAW electrode produce?",
    options: ["Shielding gas and slag", "Duct insulation", "Roof drainage", "Fastener grip"],
    answer: 0,
    explanation: "Electrode flux produces shielding gas and slag to protect molten weld metal."
  },
  {
    id: 95,
    category: "I2. Select and Use Welding Equipment for SMAW",
    question: "Why must slag be removed between SMAW passes?",
    options: ["To prevent inclusions and allow inspection", "To increase slag buildup", "To cool the metal instantly", "To replace joint preparation"],
    answer: 0,
    explanation: "Slag trapped between passes can cause weld defects and weak joints."
  },
  {
    id: 96,
    category: "I2. Select and Use Welding Equipment for SMAW",
    question: "What can cause a SMAW electrode to stick?",
    options: ["Amperage too low or arc too short", "Correct amperage", "Proper arc length", "Clean base metal"],
    answer: 0,
    explanation: "Low amperage or holding too short an arc can cause electrode sticking."
  },
  {
    id: 97,
    category: "I4. Demonstrate Soldering Techniques",
    question: "What is the purpose of soldering flux?",
    options: ["Remove oxides and help solder wet the metal", "Cool the joint instantly", "Replace fit-up", "Increase sheet thickness"],
    answer: 0,
    explanation: "Flux removes oxides and promotes solder flow and bonding."
  },
  {
    id: 98,
    category: "I4. Demonstrate Soldering Techniques",
    question: "Which condition is needed for proper solder capillary action?",
    options: ["Clean, close-fitting surfaces with correct heat and flux", "Dirty wide gaps", "Painted metal surfaces", "No flux and low heat"],
    answer: 0,
    explanation: "Capillary action requires clean, close-fitting joint surfaces, proper flux, and correct heat."
  },
  {
    id: 99,
    category: "I4. Demonstrate Soldering Techniques",
    question: "What is the effect of overheating soldering flux?",
    options: ["Flux may burn and prevent proper bonding", "Solder always flows better", "Metal becomes thicker", "Cleaning becomes unnecessary"],
    answer: 0,
    explanation: "Burned flux cannot clean oxides properly and may prevent solder from bonding."
  },
  {
    id: 100,
    category: "I4. Demonstrate Soldering Techniques",
    question: "Which condition indicates poor solder wetting?",
    options: ["Solder beads on the surface instead of flowing", "Solder flows smoothly into the seam", "Clean base metal", "Proper heat and flux"],
    answer: 0,
    explanation: "Beading indicates solder is not wetting the metal, often due to oxidation, dirt, poor fluxing, or incorrect heat."
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

const shuffledSheetMetalWorkerLevel2Set4Questions =
  shuffleArray(sheetMetalWorkerLevel2Set4Questions).map(shuffleOptionsForQuestion);

createPremiumQuizApp({
  tradeSlug: "architectural-sheet-metal-worker",
  tradeTitle: "Architectural Sheet Metal Worker",
  sectionTitle: "Level 2 – Set 4",
  questionTimeSeconds: 90,
  questions: shuffledSheetMetalWorkerLevel2Set4Questions
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
    return shuffledSheetMetalWorkerLevel2Set4Questions.find(q => q.question === questionText);
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
