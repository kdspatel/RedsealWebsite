const trades = [
  {
    slug: 'architectural-sheet-metal-worker',
    title: 'Architectural Sheet Metal Worker',
    category: 'Construction / Sheet Metal',
    audience: 'apprentices and workers reviewing layout, fabrication, installation, safety, and jobsite problem solving',
    description: 'Architectural Sheet Metal Workers fabricate, install, and repair exterior and interior sheet metal products such as roofing, flashing, cladding, panels, and drainage systems.',
    topics: ['Safety, access equipment, and jobsite procedures', 'Measuring, layout, patterns, and drawings', 'Sheet metal fabrication, forming, fastening, and joining', 'Roofing, flashing, cladding, panels, and drainage systems', 'Installation planning, troubleshooting, and repair']
  },
  {
    slug: 'automotive-technician',
    title: 'Automotive Technician',
    category: 'Automotive',
    audience: 'automotive apprentices and technicians reviewing diagnostics, service procedures, electrical systems, and repair theory',
    description: 'Automotive Technicians inspect, diagnose, service, and repair passenger vehicles and light trucks using mechanical, electrical, and electronic diagnostic skills.',
    topics: ['Shop safety, tools, service information, and scan tools', 'Engines, fuel systems, emissions, and drivability', 'Electrical, electronic, charging, and starting systems', 'Brakes, steering, suspension, and driveline systems', 'Heating, cooling, HVAC, maintenance, and diagnostics']
  },
  {
    slug: 'baker',
    title: 'Baker',
    category: 'Food / Service',
    audience: 'baking apprentices reviewing ingredients, formulas, sanitation, production, and baking theory',
    description: 'Bakers prepare bread, pastries, cakes, and other baked goods while applying formulas, production planning, food safety, and quality-control procedures.',
    topics: ['Food safety, sanitation, tools, and equipment', 'Ingredients, formulas, weights, measurements, and scaling', 'Dough mixing, fermentation, proofing, and baking', 'Pastry, cakes, fillings, icings, and finishing', 'Production planning, troubleshooting, and quality control']
  },
  {
    slug: 'bricklayer',
    title: 'Bricklayer',
    category: 'Construction',
    audience: 'bricklayer apprentices reviewing masonry materials, layout, bonding, safety, and installation methods',
    description: 'Bricklayers build and repair walls, partitions, fireplaces, chimneys, and other structures using brick, block, stone, refractory material, and mortar.',
    topics: ['Safety, scaffolds, tools, and site preparation', 'Drawings, layout, measurements, and leveling', 'Mortar, masonry units, bonding, cutting, and placement', 'Walls, openings, arches, fireplaces, chimneys, and repair', 'Moisture control, insulation, reinforcement, and troubleshooting']
  },
  {
    slug: 'cabinet-maker',
    title: 'Cabinet Maker',
    category: 'Construction / Woodworking',
    audience: 'cabinetmaking apprentices reviewing layout, materials, joinery, machines, finishing, and installation',
    description: 'Cabinet Makers build and install cabinets, furniture, millwork, and custom wood products using drawings, materials, machines, and finishing methods.',
    topics: ['Shop safety, machines, hand tools, and PPE', 'Drawings, layouts, measurements, and material lists', 'Wood, panel products, hardware, adhesives, and fasteners', 'Joinery, assembly, sanding, finishing, and repair', 'Installation, adjustment, quality control, and troubleshooting']
  },
  {
    slug: 'carpentry',
    title: 'Carpenter',
    category: 'Construction',
    audience: 'carpentry apprentices reviewing framing, forms, layout, safety, finishing, and construction calculations',
    description: 'Carpenters construct, install, maintain, and repair structures made of wood, steel, concrete forms, and other building materials.',
    topics: ['Site safety, tools, ladders, scaffolds, and equipment', 'Blueprints, layout, levels, measurements, and calculations', 'Concrete forms, framing, floors, walls, roofs, and stairs', 'Exterior/interior finishing, doors, windows, and trim', 'Renovation, repair, planning, and troubleshooting']
  },
  {
    slug: 'concrete-finisher',
    title: 'Concrete Finisher',
    category: 'Construction',
    audience: 'concrete finishing apprentices reviewing placement, finishing, curing, repair, safety, and tools',
    description: 'Concrete Finishers place, level, finish, cure, and repair concrete surfaces for slabs, sidewalks, floors, roads, and other projects.',
    topics: ['Safety, tools, equipment, and jobsite preparation', 'Concrete materials, admixtures, reinforcement, and forms', 'Placing, screeding, floating, troweling, and finishing', 'Curing, saw cutting, joints, sealing, and protection', 'Surface defects, repairs, troubleshooting, and quality control']
  },
  {
    slug: 'construction-electrician',
    title: 'Construction Electrician',
    category: 'Electrical',
    audience: 'electrical apprentices reviewing code-style questions, wiring methods, circuits, safety, and troubleshooting',
    description: 'Construction Electricians install, maintain, test, and repair electrical systems in residential, commercial, institutional, and industrial settings.',
    topics: ['Electrical safety, lockout, tools, meters, and PPE', 'Drawings, plans, conductors, raceways, and wiring methods', 'Circuits, services, grounding, bonding, and protection', 'Motors, controls, lighting, distribution, and equipment', 'Code-style calculations, testing, troubleshooting, and repair']
  },
  {
    slug: 'drywall-finisher-plasterer',
    title: 'Drywall Finisher and Plasterer',
    category: 'Construction / Finishing',
    audience: 'drywall finishing and plastering apprentices reviewing preparation, materials, finishing systems, safety, and repair',
    description: 'Drywall Finishers and Plasterers prepare, finish, texture, repair, and restore interior and exterior wall and ceiling surfaces.',
    topics: ['Safety, tools, access equipment, and surface preparation', 'Drywall compounds, beads, tapes, plaster, and materials', 'Taping, coating, sanding, textures, and finishing levels', 'Plaster systems, repair, restoration, and patching', 'Quality control, defects, troubleshooting, and cleanup']
  },
  {
    slug: 'electrician-industrial',
    title: 'Industrial Electrician',
    category: 'Electrical / Industrial',
    audience: 'industrial electrical apprentices reviewing motors, controls, PLCs, distribution, instrumentation, and troubleshooting',
    description: 'Industrial Electricians install, maintain, test, troubleshoot, and repair electrical equipment and control systems in industrial facilities.',
    topics: ['Electrical safety, lockout, test equipment, and drawings', 'Motors, starters, drives, controls, and PLC basics', 'Power distribution, transformers, protection, and grounding', 'Instrumentation, sensors, process controls, and automation', 'Maintenance, diagnostics, troubleshooting, and repair']
  },
  {
    slug: 'gasfitter-a',
    title: 'Gasfitter A',
    category: 'Mechanical / Gas',
    audience: 'Gasfitter A learners reviewing gas systems, high-input appliances, codes, combustion, venting, and safety',
    description: 'Gasfitter A workers install, inspect, service, and repair larger and more complex gas systems and appliances within the scope of their certification.',
    topics: ['Gas safety, codes, permits, testing, and documentation', 'Gas piping, sizing, pressure, regulators, and meters', 'Combustion, burners, controls, and flame safeguard systems', 'Venting, air supply, large appliances, and troubleshooting', 'Commissioning, servicing, repair, and emergency procedures']
  },
  {
    slug: 'gasfitter-b',
    title: 'Gasfitter B',
    category: 'Mechanical / Gas',
    audience: 'Gasfitter B learners reviewing gas piping, appliances, controls, venting, combustion, and safety',
    description: 'Gasfitter B workers install, test, maintain, and repair gas piping, appliances, controls, and venting systems within their certification scope.',
    topics: ['Gas safety, codes, tools, testing, and documentation', 'Pipe sizing, regulators, pressure, meters, and leak testing', 'Combustion theory, burners, controls, and appliance service', 'Venting, air supply, clearances, and installation requirements', 'Troubleshooting, maintenance, commissioning, and repair']
  },
  {
    slug: 'heavy-duty-equipment-technician',
    title: 'Heavy Duty Equipment Technician',
    category: 'Mechanical / Heavy Equipment',
    audience: 'heavy-duty equipment apprentices reviewing diesel engines, hydraulics, electrical systems, drivetrains, and diagnostics',
    description: 'Heavy Duty Equipment Technicians diagnose, maintain, and repair heavy mobile equipment used in construction, transportation, forestry, mining, and agriculture.',
    topics: ['Shop safety, tools, service information, and diagnostics', 'Diesel engines, fuel systems, cooling, intake, and exhaust', 'Hydraulics, pneumatics, electrical, and electronic systems', 'Powertrains, brakes, steering, suspension, and undercarriage', 'Preventive maintenance, troubleshooting, and repair']
  },
  {
    slug: 'industrial-mechanic-millwright',
    title: 'Industrial Mechanic Millwright',
    category: 'Industrial / Mechanical',
    audience: 'millwright apprentices reviewing machinery, alignment, rigging, hydraulics, maintenance, and troubleshooting',
    description: 'Industrial Mechanic Millwrights install, maintain, repair, and troubleshoot industrial machinery, mechanical systems, conveyors, pumps, and production equipment.',
    topics: ['Safety, rigging, hoisting, tools, and precision measurement', 'Bearings, seals, lubrication, couplings, and alignment', 'Pumps, compressors, conveyors, gears, drives, and turbines', 'Hydraulics, pneumatics, welding basics, and fabrication', 'Preventive maintenance, troubleshooting, and repair planning']
  },
  {
    slug: 'meatcutter',
    title: 'Meatcutter',
    category: 'Food / Service',
    audience: 'meatcutting apprentices reviewing sanitation, cuts, tools, safety, merchandising, and product handling',
    description: 'Meatcutters prepare, cut, trim, package, and merchandise meat products while following sanitation, food safety, and quality standards.',
    topics: ['Food safety, sanitation, equipment, knives, and PPE', 'Meat anatomy, primal/sub-primal cuts, trimming, and deboning', 'Grinding, sausage, value-added products, and packaging', 'Merchandising, storage, temperature control, and rotation', 'Customer service, yield, costing, and quality control']
  },
  {
    slug: 'motorcycle-technician',
    title: 'Motorcycle Technician',
    category: 'Automotive / Powersports',
    audience: 'motorcycle technician apprentices reviewing engines, electrical systems, chassis, fuel systems, and diagnostics',
    description: 'Motorcycle Technicians inspect, diagnose, service, and repair motorcycles and related powersport equipment.',
    topics: ['Shop safety, tools, service information, and inspection', 'Engines, fuel, intake, exhaust, cooling, and lubrication', 'Electrical, charging, starting, ignition, and control systems', 'Clutches, transmissions, final drives, brakes, suspension, and steering', 'Diagnostics, maintenance, road testing, and repair']
  },
  {
    slug: 'painter-and-decorator',
    title: 'Painter and Decorator',
    category: 'Construction / Finishing',
    audience: 'painting apprentices reviewing surface preparation, coatings, application methods, safety, and finishing defects',
    description: 'Painters and Decorators prepare, coat, finish, and decorate surfaces using paint, wall coverings, coatings, and protective systems.',
    topics: ['Safety, ladders, scaffolds, ventilation, and PPE', 'Surface preparation, repair, cleaning, sanding, and masking', 'Paints, coatings, primers, solvents, and application tools', 'Brush, roller, spray, wall coverings, and decorative finishes', 'Defects, troubleshooting, cleanup, and quality control']
  },
  {
    slug: 'plumber',
    title: 'Plumber',
    category: 'Mechanical',
    audience: 'plumbing apprentices and challengers reviewing drainage, venting, water distribution, hydronics, safety, and code-style questions',
    description: 'Plumbers install, maintain, and repair water, drainage, venting, gas-related, and hydronic systems in residential, commercial, and industrial settings.',
    topics: ['Safety, tools, drawings, measurements, and job planning', 'Water distribution, drainage, venting, fixtures, and traps', 'Pipe joining, materials, valves, pumps, and pressure systems', 'Hydronic heating, service, maintenance, and troubleshooting', 'Code-style questions, calculations, testing, and repair']
  },
  {
    slug: 'refrigeration-air-conditioning',
    title: 'Refrigeration and Air Conditioning Mechanic',
    category: 'Mechanical / HVAC-R',
    audience: 'HVAC-R apprentices reviewing refrigeration cycles, controls, electrical troubleshooting, installation, and service',
    description: 'Refrigeration and Air Conditioning Mechanics install, maintain, service, and repair refrigeration, air conditioning, heat pump, and control systems.',
    topics: ['Safety, tools, refrigerant handling, codes, and environmental practices', 'Refrigeration cycle, components, piping, charging, and recovery', 'Electrical circuits, controls, motors, sensors, and troubleshooting', 'Air distribution, ventilation, heat pumps, and system performance', 'Installation, service, diagnostics, maintenance, and repair']
  },
  {
    slug: 'roofer',
    title: 'Roofer',
    category: 'Construction / Roofing',
    audience: 'roofing apprentices reviewing materials, installation, safety, waterproofing, slope systems, and repair',
    description: 'Roofers install, repair, and maintain roofing systems using shingles, membranes, metal, insulation, flashing, and waterproofing products.',
    topics: ['Safety, fall protection, access equipment, and site preparation', 'Roof drawings, slopes, measurements, drainage, and layout', 'Shingles, membranes, insulation, flashing, and roof penetrations', 'Installation methods, waterproofing, ventilation, and repairs', 'Troubleshooting leaks, maintenance, and quality control']
  },
  {
    slug: 'welder',
    title: 'Welder',
    category: 'Metal / Fabrication',
    audience: 'welding apprentices reviewing welding processes, symbols, metallurgy, safety, inspection, and fabrication theory',
    description: 'Welders join, cut, repair, and fabricate metal components using welding processes, drawings, safety procedures, and inspection standards.',
    topics: ['Welding safety, PPE, gases, tools, and equipment setup', 'Drawings, symbols, measurements, joint design, and fit-up', 'SMAW, GMAW, FCAW, GTAW, cutting, and thermal processes', 'Metallurgy basics, distortion, defects, and inspection', 'Fabrication, repair, troubleshooting, and quality control']
  }
];

function getAllTrades() {
  return trades.map(trade => ({
    ...trade,
    freeUrl: `/free/${trade.slug}`,
    premiumUrl: `/${trade.slug}`,
    pricingUrl: `/pricing?trade=${trade.slug}`,
    tradeUrl: `/trades/${trade.slug}`
  }));
}

function getTradeBySlug(slug) {
  return getAllTrades().find(trade => trade.slug === slug) || null;
}

module.exports = {
  trades,
  getAllTrades,
  getTradeBySlug
};
