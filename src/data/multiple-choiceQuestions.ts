import { Question } from '../types/Question';

export const multipleChoiceQuestions: Question[] = [
    {
  topic: 'Week 2 - Engineering Materials',
  question: 'Which of the following is not one of the four main categories of engineering materials?',
  type: 'multiple-choice',
  answer: 'Glasses',
  options: ['Metals', 'Polymers', 'Glasses', 'Composites'],
  hint: 'Think of the usual four: metals, polymers, ceramics, and one more class.'
},
{
  topic: 'Week 2 - Engineering Materials',
  question: 'Metals are generally characterised by which combination of properties?',
  type: 'multiple-choice',
  answer: 'High strength, high stiffness, good electrical and thermal conductivity',
  options: [
    'Low strength, low stiffness, high electrical resistance',
    'High strength, high stiffness, good electrical and thermal conductivity',
    'Low density, low thermal conductivity, transparent',
    'Brittle, electrically insulating, low thermal conductivity'
  ],
  hint: 'Metals conduct heat and electricity well and are usually strong and stiff.'
},
{
  topic: 'Week 2 - Engineering Materials',
  question: 'Cast irons are defined as iron–carbon alloys with:',
  type: 'multiple-choice',
  answer: 'More than 2% carbon',
  options: [
    'Less than 0.005% carbon',
    'Between 0.06% and 0.5% carbon',
    'Between 0.5% and 1.0% carbon',
    'More than 2% carbon'
  ],
  hint: 'Steels are roughly 0.06–2.0 wt% C; cast irons are above that range.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'Which of the following is a mechanical property?',
  type: 'multiple-choice',
  answer: 'Tensile strength',
  options: ['Density', 'Thermal conductivity', 'Tensile strength', 'Electrical resistivity'],
  hint: 'Mechanical properties describe how a material responds to forces and loads.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'Ductility is best described as:',
  type: 'multiple-choice',
  answer: 'Ability to undergo plastic deformation in tension without fracture',
  options: [
    'Resistance to penetration or scratching',
    'Ability to undergo plastic deformation in tension without fracture',
    'Ability to return to original shape after stress is removed',
    'Resistance to sudden impact loading'
  ],
  hint: 'Ductility is associated with stretching a material in tension.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'Malleability is associated primarily with which type of deformation?',
  type: 'multiple-choice',
  answer: 'Compressive deformation',
  options: ['Tensile deformation', 'Torsional deformation', 'Compressive deformation', 'Shear deformation'],
  hint: 'Think of hammering or rolling a metal into sheet.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'Which statement about brittleness is correct?',
  type: 'multiple-choice',
  answer: 'Brittle materials fracture with little or no plastic deformation',
  options: [
    'Brittle materials have very low hardness',
    'Brittle materials show large plastic deformation before fracture',
    'Britleness is unrelated to hardness',
    'Brittle materials fracture with little or no plastic deformation'
  ],
  hint: 'Compare brittle ceramics to ductile metals when they fail.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'A major advantage of liquid state forming (casting) is that it:',
  type: 'multiple-choice',
  answer: 'Can produce complex shapes with minimal secondary operations',
  options: [
    'Eliminates all porosity and warpage',
    'Is always more expensive than machining from solid',
    'Can produce complex shapes with minimal secondary operations',
    'Can only be used for small parts'
  ],
  hint: 'Think about why engine blocks and pump housings are typically cast.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'In a two-part sand mould, the upper half of the mould is called the:',
  type: 'multiple-choice',
  answer: 'Cope',
  options: ['Drag', 'Cope', 'Riser', 'Core'],
  hint: 'Cope is on top, drag is on the bottom.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'The main function of a riser in sand casting is to:',
  type: 'multiple-choice',
  answer: 'Feed molten metal to the casting as it solidifies and shrinks',
  options: [
    'Provide a path for metal to enter the mould',
    'Support the core',
    'Feed molten metal to the casting as it solidifies and shrinks',
    'Vent out gases during pouring'
  ],
  hint: 'Risers act like reservoirs that compensate for shrinkage.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'Gray cast iron is most suitable for parts that require:',
  type: 'multiple-choice',
  answer: 'Good machinability, damping, and stability without shock loads',
  options: [
    'Extreme impact resistance and shock loading',
    'Good machinability, damping, and stability without shock loads',
    'Very high tensile strength with low wear',
    'High toughness for crane hooks'
  ],
  hint: 'Think of machine tool beds and engine blocks, not crane hooks.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'Which casting process generally offers the tightest dimensional tolerances but is limited to non-ferrous metals?',
  type: 'multiple-choice',
  answer: 'Die casting',
  options: ['Sand casting', 'Permanent mould casting', 'Investment casting', 'Die casting'],
  hint: 'High-pressure, high-volume casting of zinc and aluminium alloys.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'A key advantage of forging (plastic state forming) over casting is that it:',
  type: 'multiple-choice',
  answer: 'Allows grain flow to follow the part shape, improving strength',
  options: [
    'Produces a completely random grain structure',
    'Allows grain flow to follow the part shape, improving strength',
    'Always reduces production cost compared to casting',
    'Is only suitable for brittle materials'
  ],
  hint: 'Forged crankshafts use this benefit.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'In hot rolling of steel:',
  type: 'multiple-choice',
  answer: 'The grains are crushed and elongated, then regrow as coarse grains during recovery',
  options: [
    'Rolling is done well below room temperature',
    'The grains are crushed and elongated, then regrow as coarse grains during recovery',
    'No cooling of rollers is needed',
    'Surface finish is smoother than cold rolling'
  ],
  hint: 'High temperatures allow recovery and recrystallisation after deformation.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'Extrusion typically produces:',
  type: 'multiple-choice',
  answer: 'Long profiles of constant cross-section',
  options: [
    'Very short, thick parts only',
    'Long profiles of constant cross-section',
    'Only solid circular bars',
    'Only thin sheet and plate'
  ],
  hint: 'Think of window frames and aluminium profiles.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'Which statement about thermoplastics is correct?',
  type: 'multiple-choice',
  answer: 'They can be reheated, melted and reprocessed multiple times',
  options: [
    'They cannot be remelted once formed',
    'They are always crystalline and never amorphous',
    'They can be reheated, melted and reprocessed multiple times',
    'They are only processed by compression molding'
  ],
  hint: 'This is the main difference between thermoplastics and thermosets.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'Injection molding is best described as:',
  type: 'multiple-choice',
  answer: 'Forcing molten plastic into a closed mould under pressure, then cooling and ejecting',
  options: [
    'Pouring liquid resin into an open mould and letting it cure without pressure',
    'Forcing molten plastic into a closed mould under pressure, then cooling and ejecting',
    'Spinning a mould so resin coats the walls by centrifugal force',
    'Stretching a heated sheet over a mould with vacuum'
  ],
  hint: 'Think of the classic cycle: clamp, inject, hold, cool, open, eject.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'Which process is most suited for making large hollow plastic tanks (e.g., water tanks, small boat hulls)?',
  type: 'multiple-choice',
  answer: 'Rotational molding',
  options: ['Calendering', 'Rotational molding', 'Thermoforming', 'Transfer molding'],
  hint: 'Powder is placed in a hollow mould that is heated and rotated.'
},
{
  topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
  question: 'In polymer composites, continuous fibre reinforcement (e.g. glass, carbon) is mainly used because it:',
  type: 'multiple-choice',
  answer: 'Provides the highest improvement in structural strength and load distribution',
  options: [
    'Reduces stiffness and cost',
    'Provides the highest improvement in structural strength and load distribution',
    'Eliminates the need for a matrix',
    'Prevents any creep from occurring'
  ],
  hint: 'Continuous fibres carry load efficiently along their length.'
},
{
  topic: 'Week 8 - Metals: Cutting & Machining',
  question: 'In sheet-metal operations, the main difference between punching and blanking is:',
  type: 'multiple-choice',
  answer: 'Blanking produces the cut-out piece as the useful part; the remainder is scrap',
  options: [
    'Punching uses CNC; blanking does not',
    'Punching always uses thicker sheet than blanking',
    'Punching produces a hole as the useful part; the blank is scrap',
    'Blanking produces the cut-out piece as the useful part; the remainder is scrap'
  ],
  hint: 'Ask: is the hole or the cut-out piece the product?'
},

// ----- Harder set starts here -----

{
  topic: 'Week 1 - Natural Materials',
  question: 'Wood is strongly anisotropic mainly because:',
  type: 'multiple-choice',
  answer: 'Its cellulose fibres are aligned predominantly in one direction',
  options: [
    'It contains micro-voids randomly distributed in all directions',
    'Its cellulose fibres are aligned predominantly in one direction',
    'The lignin matrix is crystalline and isotropic',
    'Moisture content is uniform in all directions'
  ],
  hint: 'Think about the grain direction in timber.'
},
{
  topic: 'Week 1 - Natural Materials',
  question: 'When ambient humidity changes, dimensional change in wood is generally:',
  type: 'multiple-choice',
  answer: 'Greatest across the grain and smaller along the grain',
  options: [
    'Greatest along the grain and smallest across the grain',
    'Equal in all directions due to hygroscopic swelling',
    'Greatest across the grain and smaller along the grain',
    'Negligible because wood is fully dimensionally stable once dried'
  ],
  hint: 'Wood swells and shrinks much more tangentially and radially than longitudinally.'
},
{
  topic: 'Week 2 - Engineering Materials',
  question: 'A component must operate at 700°C, carry high compressive loads, and remain electrically insulating. The most suitable class of material is:',
  type: 'multiple-choice',
  answer: 'Ceramic',
  options: ['Low-carbon steel', 'Aluminium alloy', 'Polymer (thermoplastic)', 'Ceramic'],
  hint: 'Which class keeps strength at very high temperature and is an electrical insulator?'
},
{
  topic: 'Week 2 - Engineering Materials',
  question: 'An engineer wants high specific strength (strength-to-weight) for an aircraft structural member. Which is generally best?',
  type: 'multiple-choice',
  answer: 'Carbon-fibre reinforced polymer',
  options: ['Mild steel', 'Aluminium alloy', 'Glass-filled nylon', 'Carbon-fibre reinforced polymer'],
  hint: 'Think of modern aircraft wings and fuselage structures.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'For a beam that must be as stiff as possible for minimum weight, which property is most critical in material selection?',
  type: 'multiple-choice',
  answer: 'Specific modulus (E/ρ)',
  options: ['Yield strength', 'Density', 'Specific modulus (E/ρ)', 'Electrical conductivity'],
  hint: 'Stiffness depends on Young’s modulus; weight depends on density.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'Two candidate materials have the same yield strength, but one has much higher fracture toughness (K_IC). Under severe impact loading, the tougher material is preferred mainly because it:',
  type: 'multiple-choice',
  answer: 'Can tolerate larger flaws before catastrophic fracture',
  options: [
    'Is easier to machine',
    'Resists crack initiation completely',
    'Can tolerate larger flaws before catastrophic fracture',
    'Has a higher modulus of elasticity'
  ],
  hint: 'Fracture toughness tells you how dangerous a given crack size is.'
},
{
  topic: 'Week 3 - Properties of Materials & Selection',
  question: 'A rotating shaft will experience high-cycle fatigue. Which material property is most critical for long fatigue life (assuming similar mean stress and surface finish)?',
  type: 'multiple-choice',
  answer: 'Fatigue strength/endurance limit',
  options: ['Creep resistance', 'Fatigue strength/endurance limit', 'Thermal conductivity', 'Hardness only'],
  hint: 'The key property is the stress level the material can withstand for many cycles.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'You must produce 100,000 small zinc alloy components with thin walls and tight tolerances. The most appropriate process is:',
  type: 'multiple-choice',
  answer: 'Pressure die casting',
  options: ['Green-sand casting', 'Investment casting', 'Gravity permanent-mould casting', 'Pressure die casting'],
  hint: 'Think high-volume, high-precision, non-ferrous casting.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'A casting frequently shows oxide films and air entrapment. Which gating modification is most effective to reduce turbulence?',
  type: 'multiple-choice',
  answer: 'Use a bottom gate so metal rises smoothly in the mould cavity',
  options: [
    'Use a top gate directly above the thickest section',
    'Use a bottom gate so metal rises smoothly in the mould cavity',
    'Use a very short, wide sprue entering at high velocity',
    'Remove the runner system altogether'
  ],
  hint: 'You want the metal to fill from the bottom up, not free-fall into the cavity.'
},
{
  topic: 'Week 4 - Metals: Liquid State Forming',
  question: 'A thick boss in a casting repeatedly develops shrinkage porosity at its centre. The best corrective action is to:',
  type: 'multiple-choice',
  answer: 'Add a riser feeding the boss and ensure it solidifies last',
  options: [
    'Increase pouring temperature only',
    'Add a riser feeding the boss and ensure it solidifies last',
    'Reduce mould permeability',
    'Switch to a higher-carbon steel'
  ],
  hint: 'The region that shrinks must be fed by liquid metal that stays molten longer.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'Compared with the annealed condition, a heavily cold-worked metal will generally exhibit:',
  type: 'multiple-choice',
  answer: 'Higher yield strength and lower ductility',
  options: [
    'Higher yield strength and lower ductility',
    'Lower yield strength and higher ductility',
    'Lower yield strength and lower hardness',
    'No significant change in mechanical properties'
  ],
  hint: 'More dislocations make the metal stronger but less able to deform plastically.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'In deep drawing of sheet metal cups, the blank-holder force is mainly used to:',
  type: 'multiple-choice',
  answer: 'Prevent wrinkling in the flange region',
  options: [
    'Increase friction so metal does not slip',
    'Prevent wrinkling in the flange region',
    'Reduce strain hardening',
    'Increase thickness at the cup bottom'
  ],
  hint: 'Without it, the flange buckles as it is pushed into the die.'
},
{
  topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
  question: 'A forged crankshaft often has better fatigue performance than a machined one from bar stock because forging:',
  type: 'multiple-choice',
  answer: 'Aligns grain flow along the part geometry, following stress paths',
  options: [
    'Produces a perfectly uniform microstructure',
    'Aligns grain flow along the part geometry, following stress paths',
    'Removes all impurities from the metal',
    'Eliminates residual stresses completely'
  ],
  hint: 'The “grain flow” in a forging follows the shape of the part.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'A company wants to produce large numbers of thin-walled drink bottles from PET with good dimensional accuracy. The most suitable process is:',
  type: 'multiple-choice',
  answer: 'Injection stretch blow moulding',
  options: ['Compression moulding', 'Injection moulding (solid parts)', 'Injection stretch blow moulding', 'Rotational moulding'],
  hint: 'PET bottles are first made as preforms, then reheated and blown.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'A thick-ribbed injection moulded thermoplastic part shows sink marks on the outside surface opposite the ribs. This defect is mainly caused by:',
  type: 'multiple-choice',
  answer: 'Differential shrinkage due to non-uniform section thickness',
  options: [
    'Low mould temperature',
    'Differential shrinkage due to non-uniform section thickness',
    'Excessive venting of the mould cavity',
    'Very short cooling time causing no shrinkage'
  ],
  hint: 'Thicker regions cool and shrink more, pulling the surface inward.'
},
{
  topic: 'Week 6 - Polymers: Thermoplastic Processes',
  question: 'In an injection mould, the runner system is primarily designed to:',
  type: 'multiple-choice',
  answer: 'Distribute molten polymer uniformly to each cavity',
  options: [
    'Provide mechanical support to the mould halves',
    'Allow ejection pins to move freely',
    'Distribute molten polymer uniformly to each cavity',
    'Cool the mould using circulating water'
  ],
  hint: 'It is the pathway from the sprue to each part cavity.'
},
{
  topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
  question: 'A large composite boat hull (fibreglass/polyester) is to be made in relatively low production volume. The most appropriate process is:',
  type: 'multiple-choice',
  answer: 'Hand lay-up with roller consolidation in an open mould',
  options: [
    'Pultrusion',
    'Hand lay-up with roller consolidation in an open mould',
    'Injection moulding',
    'Powder coating'
  ],
  hint: 'This low-cost process uses brushes and rollers in open moulds.'
},
{
  topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
  question: 'Increasing the fibre volume fraction in a continuous fibre-reinforced composite (within processing limits) generally:',
  type: 'multiple-choice',
  answer: 'Increases stiffness and strength along the fibre direction',
  options: [
    'Decreases stiffness and strength but improves toughness',
    'Increases stiffness and strength along the fibre direction',
    'Makes the composite isotropic',
    'Has no significant effect on mechanical properties'
  ],
  hint: 'More load is carried by the stiff, strong fibres.'
},
{
  topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
  question: 'A unidirectional carbon-fibre/epoxy lamina is loaded in tension perpendicular to the fibre direction. Its behaviour compared to loading parallel to the fibres will be:',
  type: 'multiple-choice',
  answer: 'Much lower strength and stiffness, more matrix-dominated failure',
  options: [
    'Much lower strength and stiffness, more matrix-dominated failure',
    'Much higher strength and stiffness, fibre-dominated failure',
    'Approximately identical in all directions',
    'Perfectly plastic in both directions'
  ],
  hint: 'Transverse loading relies on the weaker matrix and fibre/matrix interface.'
},
{
  topic: 'Week 8 - Metals: Cutting & Machining',
  question: 'When cutting speed is increased significantly in turning (feed and depth fixed), the usual trend is:',
  type: 'multiple-choice',
  answer: 'Tool life decreases but surface finish initially improves',
  options: [
    'Tool life increases and surface finish worsens',
    'Tool life decreases but surface finish initially improves',
    'Both tool life and surface finish degrade',
    'Tool life and surface finish are unaffected'
  ],
  hint: 'Higher speeds reduce built-up edge but raise temperature at the tool.'
},
{
  topic: 'Week 8 - Metals: Cutting & Machining',
  question: 'For high-speed machining of steel with long tool life, the most suitable tool material is:',
  type: 'multiple-choice',
  answer: 'Coated carbide insert',
  options: ['High-speed steel (HSS)', 'Uncoated high-carbon steel', 'Coated carbide insert', 'Pure aluminium'],
  hint: 'Modern CNC machining centres mostly use this type of insert.'
},
{
  topic: 'Week 8 - Metals: Cutting & Machining',
  question: 'In sheet metal operations, you observe burrs and poor edge quality after punching. Which change is most likely to improve the cut?',
  type: 'multiple-choice',
  answer: 'Use correct (small) clearance and maintain a sharp punch',
  options: [
    'Increase clearance between punch and die far above the recommended value',
    'Use a very blunt punch edge for longer life',
    'Use correct (small) clearance and maintain a sharp punch',
    'Reduce press tonnage well below requirement'
  ],
  hint: 'Correct die clearance and sharp tools give a clean sheared zone.'
},
{
  topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
  question: 'The key difference between soldering and brazing is that:',
  type: 'multiple-choice',
  answer: 'Soldering uses a filler below about 455°C; brazing uses filler above about 455°C',
  options: [
    'Brazing melts the base metals; soldering does not use filler',
    'Soldering uses a filler below about 455°C; brazing uses filler above about 455°C',
    'Soldering always uses flux; brazing never does',
    'Brazing is only for ferrous metals'
  ],
  hint: 'The distinction is based on filler metal melting temperature.'
},
{
  topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
  question: 'For structural steel welding, excessive heat input producing a very wide heat-affected zone (HAZ) mainly risks:',
  type: 'multiple-choice',
  answer: 'Grain coarsening in the HAZ and reduced toughness',
  options: [
    'Too much hardness and martensite everywhere',
    'Grain coarsening in the HAZ and reduced toughness',
    'Complete elimination of residual stresses',
    'Transformation of steel into cast iron'
  ],
  hint: 'Larger grains in the HAZ usually mean lower toughness and more brittle fracture.'
},
{
  topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
  question: 'A plastic electronic enclosure must be opened and closed for regular servicing without damaging the parts. The most suitable joining method is:',
  type: 'multiple-choice',
  answer: 'Snap-fits or machine screws into moulded bosses',
  options: [
    'Ultrasonic welding of all seams',
    'Adhesive bonding with structural epoxy',
    'Snap-fits or machine screws into moulded bosses',
    'Solvent welding of all joints'
  ],
  hint: 'You need a demountable joint, not a permanent one.'
},
{
  topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
  question: 'A key advantage of structural adhesives over mechanical fasteners is that they:',
  type: 'multiple-choice',
  answer: 'Distribute load over a larger area, reducing stress concentrations',
  options: [
    'Never require surface preparation',
    'Always cure instantly without pressure',
    'Distribute load over a larger area, reducing stress concentrations',
    'Work equally well on dirty, oily surfaces'
  ],
  hint: 'Fasteners introduce localised stress around holes; adhesives do not.'
},
{
  topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
  question: 'To characterise the shear strength of a structural adhesive used for bonding metal plates, the most common standardised test configuration is:',
  type: 'multiple-choice',
  answer: 'Single-lap shear test',
  options: [
    'Charpy impact test',
    'Single-lap shear test',
    'Vickers microhardness test',
    'Brinell indentation test'
  ],
  hint: 'Think of two overlapping plates bonded together and pulled in tension.'
},
{
  topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
  question: 'A typical combination of properties for engineering ceramics (e.g., alumina, silicon nitride) is:',
  type: 'multiple-choice',
  answer: 'High hardness, high elastic modulus, low fracture toughness',
  options: [
    'Low hardness, high ductility, high electrical conductivity',
    'High hardness, high elastic modulus, low fracture toughness',
    'Low stiffness, high thermal expansion, high ductility',
    'High ductility, high electrical conductivity, low melting point'
  ],
  hint: 'Ceramics are stiff and hard but generally brittle.'
},
{
  topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
  question: 'The most common manufacturing route for dense structural ceramics is:',
  type: 'multiple-choice',
  answer: 'Powder processing followed by pressing and sintering',
  options: [
    'Casting directly from molten ceramic into sand moulds',
    'Powder processing followed by pressing and sintering',
    'Extrusion then forging at room temperature',
    'Injection moulding of fully molten ceramic'
  ],
  hint: 'Most ceramics are never used in a fully molten state in industry.'
},
{
  topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
  question: 'Glass is often chosen for windows instead of crystalline ceramics primarily because it:',
  type: 'multiple-choice',
  answer: 'Has an amorphous structure that can be formed into large transparent sheets',
  options: [
    'Has much higher toughness than any ceramic',
    'Has an amorphous structure that can be formed into large transparent sheets',
    'Conducts electricity better than crystalline ceramics',
    'Has zero thermal expansion'
  ],
  hint: 'Think about transparency and how float glass sheets are produced.'
},

  {
    topic: 'Week 2 - Engineering Materials',
    question: 'A material that is lightweight, has low electrical and thermal conductivity, and is generally resistant to atmospheric attack is most likely a:',
    type: 'multiple-choice',
    answer: 'Polymer',
    options: ['Metal', 'Polymer', 'Ceramic', 'Composite'],
    hint: 'Think of low density, low conductivity and resistance to weathering.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Which statement about metals is MOST accurate?',
    type: 'multiple-choice',
    answer: 'Metals are crystalline, opaque, lustrous and good conductors',
    options: [
      'Metals are amorphous, insulating and transparent',
      'Metals are crystalline, opaque, lustrous and good conductors',
      'Metals have long-chain molecular backbones of carbon',
      'Metals always have low strength and low stiffness'
    ],
    hint: 'Think about the typical structure and appearance of metals and their conductivity.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'An iron–carbon alloy with 1.0 wt% carbon intended for rolling and forming would be classified as:',
    type: 'multiple-choice',
    answer: 'Steel',
    options: ['Pure iron', 'Steel', 'Wrought iron', 'Cast iron'],
    hint: 'Cast irons start above about 2% carbon.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Compared to pure iron, adding alloying elements to steel (solid solution strengthening) mainly:',
    type: 'multiple-choice',
    answer: 'Creates atomic mismatches that hinder dislocation motion and strengthen the metal',
    options: [
      'Reduces dislocation density and softens the metal',
      'Creates atomic mismatches that hinder dislocation motion and strengthen the metal',
      'Eliminates all dislocations and makes the metal perfectly brittle',
      'Only changes colour, not mechanical properties'
    ],
    hint: 'Think about how size-mismatched atoms affect dislocation movement.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: '“Castability”, “forgeability” and “weldability” are examples of which group of properties?',
    type: 'multiple-choice',
    answer: 'Technological properties',
    options: ['Physical properties', 'Mechanical properties', 'Technological properties', 'Chemical properties'],
    hint: 'These describe how a material responds to manufacturing processes.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'On a tensile stress–strain curve for a ductile metal, the region between the origin and the proportional limit represents:',
    type: 'multiple-choice',
    answer: 'Elastic deformation where stress is proportional to strain',
    options: [
      'Plastic deformation with permanent strain',
      'Elastic deformation where stress is proportional to strain',
      'Necking region where cross-section shrinks',
      'Creep deformation at elevated temperature'
    ],
    hint: 'Think about the Hooke’s law region of the curve.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Which pair correctly matches the mode of deformation with the property?',
    type: 'multiple-choice',
    answer: 'Malleability – plastic deformation in compression',
    options: [
      'Ductility – plastic deformation in compression',
      'Malleability – plastic deformation in tension',
      'Brittleness – large plastic deformation before fracture',
      'Malleability – plastic deformation in compression'
    ],
    hint: 'Ductility is linked with tension; the other term is linked with compression.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'The property most directly measured by Charpy and Izod impact tests is:',
    type: 'multiple-choice',
    answer: 'Toughness / impact strength',
    options: ['Hardness', 'Toughness / impact strength', 'Creep resistance', 'Fatigue limit'],
    hint: 'These tests measure the energy absorbed when a notched specimen is broken.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Gray cast iron should be considered for parts that require:',
    type: 'multiple-choice',
    answer: 'Good machinability, stability and damping without high shock loads',
    options: [
      'Very high toughness and shock resistance',
      'Maximum tensile strength at low weight',
      'Good machinability, stability and damping without high shock loads',
      'Corrosion resistance in aggressive chemicals'
    ],
    hint: 'Think of machine beds and structures that need damping but not high shock resistance.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Ductile (nodular) iron is especially suitable for:',
    type: 'multiple-choice',
    answer: 'Gears, cams and mounting plates that may experience occasional shock loads',
    options: [
      'Thin decorative castings with no loads',
      'Gears, cams and mounting plates that may experience occasional shock loads',
      'Abrasive liners requiring extreme wear resistance only',
      'Parts that must be surface-hardened but never see impact'
    ],
    hint: 'This iron has nodular graphite and better toughness than grey iron.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Which statement about casting tolerances is correct?',
    type: 'multiple-choice',
    answer: 'Investment casting and die casting both have better tolerances than sand casting',
    options: [
      'Sand casting has the tightest tolerances but only for small parts',
      'Investment casting and die casting both have better tolerances than sand casting',
      'Die casting can be used for any metal, including high-melting steels',
      'Investment casting is only for non-ferrous alloys'
    ],
    hint: 'Think about which processes use better moulds and more precise tooling.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'To minimise shrinkage cavities in a thick region of a casting, the designer should:',
    type: 'multiple-choice',
    answer: 'Place risers so that gates and risers are the last regions to solidify',
    options: [
      'Make the thick section solidify first',
      'Place risers so that gates and risers are the last regions to solidify',
      'Use no risers to avoid feeding',
      'Increase pouring turbulence'
    ],
    hint: 'Risers should supply molten metal as the casting solidifies and shrinks.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'The main benefit of forging an “S”-shaped bar instead of machining it from rolled plate is that forging:',
    type: 'multiple-choice',
    answer: 'Aligns grain flow along the curved shape, improving resistance to service stresses',
    options: [
      'Produces a completely random grain structure',
      'Aligns grain flow along the curved shape, improving resistance to service stresses',
      'Removes all impurities from the metal',
      'Greatly reduces tooling cost compared to machining'
    ],
    hint: 'Forging can make the grain structure follow the shape of the part.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Compared with hot rolling, cold rolling of steel generally gives:',
    type: 'multiple-choice',
    answer: 'Smoother surface and finer grains but higher cost',
    options: [
      'Rougher surface and lower strength',
      'Smoother surface and finer grains but higher cost',
      'Identical surface finish at lower cost',
      'No change in properties, only shape'
    ],
    hint: 'Think about what happens when deformation is done at or near room temperature.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Extrusion of metals is best described as a process that:',
    type: 'multiple-choice',
    answer: 'Forces a heated billet through a die to form long profiles of constant cross-section',
    options: [
      'Pours liquid metal into sand molds',
      'Compresses metal powder into a solid part',
      'Forces a heated billet through a die to form long profiles of constant cross-section',
      'Stretches metal sheet over a punch into a die cavity'
    ],
    hint: 'Think of long bars, channels, and shapes with the same cross-section along their length.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Injection molding of thermoplastics is characterised by:',
    type: 'multiple-choice',
    answer: 'Forcing molten plastic into a closed mould under pressure, then cooling and ejecting',
    options: [
      'Pouring resin into an open mould without pressure and letting it cure',
      'Forcing molten plastic into a closed mould under pressure, then cooling and ejecting',
      'Spinning a mould so resin coats the walls by centrifugal force',
      'Drawing a sheet over a mould by vacuum'
    ],
    hint: 'This process uses clamping, injection, dwelling, cooling, opening and ejection.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Compared to injection molding, rotational molding is especially suited to:',
    type: 'multiple-choice',
    answer: 'Large hollow products like fuel tanks and small boat hulls with relatively low tooling cost',
    options: [
      'Very thin, high-precision optical parts',
      'Large hollow products like fuel tanks and small boat hulls with relatively low tooling cost',
      'High-pressure structural foam parts with metal inserts',
      'Only tiny components with tight tolerances'
    ],
    hint: 'Think of large hollow containers that rotate in a heated mould.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Sheet-metal punching and shearing operations are generally limited to sheet thickness:',
    type: 'multiple-choice',
    answer: '6 mm or less',
    options: ['Greater than 20 mm', '6 mm or less', 'Exactly 10 mm', 'Only foil under 0.5 mm'],
    hint: 'These operations are typical for relatively thin sheet, not heavy plate.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In shearing or punching sheet metal, excessive punch–die clearance mainly causes:',
    type: 'multiple-choice',
    answer: 'Distorted sheet with a large burr and poor edge quality',
    options: [
      'Perfectly clean edges with no burr',
      'Very high tool wear but good edges',
      'Distorted sheet with a large burr and poor edge quality',
      'No noticeable effect on the cut'
    ],
    hint: 'Too much clearance makes the action more like tearing than clean shearing.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'A key drawback of engineering ceramics that designers must account for is their:',
    type: 'multiple-choice',
    answer: 'Brittleness and low fracture toughness despite high hardness and modulus',
    options: [
      'Very low hardness and stiffness',
      'High density and excellent ductility',
      'Brittleness and low fracture toughness despite high hardness and modulus',
      'Poor corrosion resistance in most environments'
    ],
    hint: 'This is why ceramics are often reinforced with fibres or whiskers.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Borosilicate glass (e.g. Pyrex) is preferred over soda-lime glass for laboratory glassware mainly because it:',
    type: 'multiple-choice',
    answer: 'Has better resistance to thermal shock and high temperatures',
    options: [
      'Is cheaper and easier to melt',
      'Has a higher coefficient of thermal expansion',
      'Has better resistance to thermal shock and high temperatures',
      'Is always perfectly colourless'
    ],
    hint: 'Think about glass that can go from hot to cold without shattering.'
  },

  // --- Second big Week-by-week block ---

  {
    topic: 'Week 2 - Engineering Materials',
    question: 'In the context of engineering materials, which statement about metals is most accurate?',
    type: 'multiple-choice',
    answer: 'They are crystalline, opaque, and good conductors of heat and electricity',
    options: [
      'They are usually transparent and good electrical insulators',
      'They are crystalline, opaque, and good conductors of heat and electricity',
      'They are always amorphous and low-density',
      'They have low strength, low stiffness, and high electrical resistance'
    ],
    hint: 'Think of typical metal properties like shine and conductivity.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Steels are defined as iron–carbon alloys with carbon content approximately between:',
    type: 'multiple-choice',
    answer: '0.06–2.0% C',
    options: ['0.0005–0.005% C', '0.006–0.06% C', '0.06–2.0% C', 'More than 2.0% C'],
    hint: 'Above about 2% C the alloys are classed as cast irons.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Which one of the following is not a typical characteristic of polymers compared to metals?',
    type: 'multiple-choice',
    answer: 'High electrical conductivity',
    options: [
      'Long molecular chains with carbon backbones',
      'Generally low thermal conductivity',
      'High electrical conductivity',
      'Generally lower strength and unsuitable for high-temperature use'
    ],
    hint: 'Think about why polymers are often used as electrical insulators.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Which of the following is not listed as one of the four main categories of engineering materials?',
    type: 'multiple-choice',
    answer: 'Glasses',
    options: ['Metals', 'Polymers', 'Ceramics', 'Glasses'],
    hint: 'Glasses are usually treated as a subset of another category.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Which of the following is primarily a technological property?',
    type: 'multiple-choice',
    answer: 'Weldability',
    options: ['Density', 'Tensile strength', 'Weldability', 'Corrosion resistance'],
    hint: 'These properties describe how a material behaves during processing or fabrication.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Creep is best described as:',
    type: 'multiple-choice',
    answer: 'Gradual plastic deformation under a sustained load, often at high temperature',
    options: [
      'Sudden fracture under impact at low temperature',
      'Gradual plastic deformation under a sustained load, often at high temperature',
      'Failure due to repeated fluctuating stresses below tensile strength',
      'Loss of strength due to corrosion'
    ],
    hint: 'This is a time-dependent deformation that often matters in turbines and boilers.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Fatigue failure typically occurs when:',
    type: 'multiple-choice',
    answer: 'A material is subjected to cyclic stresses below the tensile strength over many cycles',
    options: [
      'A material is loaded once above its ultimate tensile strength',
      'A material is subjected to cyclic stresses below the tensile strength over many cycles',
      'A material is exposed to chemicals at high temperature',
      'A material is suddenly cooled from high temperature'
    ],
    hint: 'Think about repeated loading on aircraft wings, shafts and springs.'
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Which test is specifically associated with measuring impact toughness using a notched specimen struck by a pendulum?',
    type: 'multiple-choice',
    answer: 'Charpy or Izod test',
    options: ['Brinell test', 'Rockwell test', 'Charpy or Izod test', 'Creep test'],
    hint: 'These tests swing a pendulum to break a notched specimen and measure energy absorbed.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'A primary reason casting is often the most economical process for complex metal parts is that it:',
    type: 'multiple-choice',
    answer: 'Puts metal where needed in desired thickness with minimal secondary operations',
    options: [
      'Always eliminates porosity and warpage',
      'Produces perfect grain structure with no defects',
      'Puts metal where needed in desired thickness with minimal secondary operations',
      'Is limited to very small components only'
    ],
    hint: 'Think of how a near-net shape can be formed in one operation.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'In a two-part sand mould, the lower half of the mould is called the:',
    type: 'multiple-choice',
    answer: 'Drag',
    options: ['Cope', 'Riser', 'Drag', 'Core'],
    hint: 'Cope is the top; the bottom half has another name.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'The main purpose of a riser in a sand casting is to:',
    type: 'multiple-choice',
    answer: 'Feed molten metal to the casting as it solidifies and shrinks',
    options: [
      'Provide the initial path for metal to enter the mould',
      'Support the core during pouring',
      'Feed molten metal to the casting as it solidifies and shrinks',
      'Vent gases from the mould'
    ],
    hint: 'This feature helps compensate for volume change during solidification.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Gray cast iron is most suitable for parts that require:',
    type: 'multiple-choice',
    answer: 'Excellent machinability, damping and dimensional stability without high shock loads',
    options: [
      'Extreme impact resistance and high shock loading',
      'Excellent machinability, damping and dimensional stability without high shock loads',
      'Very high tensile strength under bending',
      'Ultra-lightweight structural members'
    ],
    hint: 'Think of machine tool beds and engine blocks (when not highly shock loaded).'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Which casting process generally provides the lowest dimensional tolerances but is commercially limited mainly to non-ferrous metals?',
    type: 'multiple-choice',
    answer: 'Die casting',
    options: ['Sand casting', 'Investment casting', 'Permanent mould casting', 'Die casting'],
    hint: 'This process uses high pressure to force molten metal into metal dies.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'A key advantage of forging compared to casting and simple cutting from plate is that it:',
    type: 'multiple-choice',
    answer: 'Produces grain flow that follows the part shape, improving strength',
    options: [
      'Always reduces material cost',
      'Produces grain flow that follows the part shape, improving strength',
      'Removes all internal defects automatically',
      'Is only suitable for brittle materials'
    ],
    hint: 'Think about how the grain structure is oriented by the deformation.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In hot rolling of steel:',
    type: 'multiple-choice',
    answer: 'The grains are crushed and elongated, then regrow as coarse grains during recovery',
    options: [
      'Rolling is done well below room temperature',
      'The grains are crushed and elongated, then regrow as coarse grains during recovery',
      'No cooling of rollers is required',
      'Surface finish is finer than cold rolling'
    ],
    hint: 'This process is done above recrystallisation temperature.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Extrusion is best described as a process that:',
    type: 'multiple-choice',
    answer: 'Produces long profiles of constant cross-section by forcing a billet through a die',
    options: [
      'Produces only very short, thick parts',
      'Produces long profiles of constant cross-section by forcing a billet through a die',
      'Can only make solid circular bars',
      'Is limited to sheet and plate production'
    ],
    hint: 'Think of aluminium window frames and long channels.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Solid-state forming is defined in the notes as:',
    type: 'multiple-choice',
    answer: 'Shaping sheet, rod, wire or tube usually at room temperature',
    options: [
      'Shaping metal in the fully molten state',
      'Shaping metal at elevated temperature above its melting point',
      'Shaping sheet, rod, wire or tube usually at room temperature',
      'Shaping metal powders followed by sintering'
    ],
    hint: 'Think of forming operations like bending, drawing and rolling at room temperature.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Which statement correctly describes thermoplastic materials?',
    type: 'multiple-choice',
    answer: 'They can be reheated, melted and reprocessed multiple times',
    options: [
      'They cannot be remelted once cured',
      'They can be reheated, melted and reprocessed multiple times',
      'They always have cross-linked molecular structures',
      'They are only processed by compression molding'
    ],
    hint: 'These materials soften on heating and solidify on cooling repeatedly.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Injection molding of thermoplastics involves which basic sequence?',
    type: 'multiple-choice',
    answer: 'Clamping, injection, dwelling, cooling, mould opening, ejection',
    options: [
      'Pouring molten plastic into an open mould and air cooling',
      'Clamping, injection, dwelling, cooling, mould opening, ejection',
      'Spinning a mould to distribute resin by centrifugal force',
      'Compressing powder in a die and sintering'
    ],
    hint: 'Remember the six basic stages shown in the injection moulding cycle.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Which process is most suitable for making large hollow plastic products such as water tanks or small boat hulls?',
    type: 'multiple-choice',
    answer: 'Rotational molding',
    options: ['Calendering', 'Thermoforming', 'Rotational molding', 'Compression molding'],
    hint: 'This process rotates a heated mould so the polymer coats the interior.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'In polymer composites, continuous fibre reinforcement (e.g. glass or carbon) is mainly used because it:',
    type: 'multiple-choice',
    answer: 'Provides the highest improvement in structural strength and load distribution',
    options: [
      'Reduces stiffness and cost',
      'Provides the highest improvement in structural strength and load distribution',
      'Eliminates the need for a polymer matrix',
      'Prevents any creep from occurring'
    ],
    hint: 'Think about why long fibres are chosen for high-performance composites.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In sheet-metal operations, the main difference between punching and blanking is that:',
    type: 'multiple-choice',
    answer: 'Blanking produces the cut-out piece (blank) as the useful part; the remaining sheet is scrap',
    options: [
      'Punching uses CNC; blanking never does',
      'Punching produces a hole as the useful feature; the slug is scrap',
      'Blanking produces the cut-out piece (blank) as the useful part; the remaining sheet is scrap',
      'There is no real difference; the terms are interchangeable'
    ],
    hint: 'Ask yourself whether the hole or the cut-out piece is the desired product.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Shearing of sheet metal typically produces an edge that:',
    type: 'multiple-choice',
    answer: 'Has a sharp burr that often must be removed (deburring)',
    options: [
      'Is perfectly smooth and needs no further treatment',
      'Has a sharp burr that often must be removed (deburring)',
      'Is work-hardened but burr-free',
      'Can only be used on sheets thicker than 6 mm'
    ],
    hint: 'Think about the need for deburring after guillotine shearing.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Electrical Discharge Machining (EDM) removes metal by:',
    type: 'multiple-choice',
    answer: 'Spark discharges between a tool and workpiece in a dielectric fluid',
    options: [
      'Dissolving it chemically in an acid bath',
      'High-velocity abrasive particle impact',
      'Spark discharges between a tool and workpiece in a dielectric fluid',
      'Pure waterjet erosion with no heat'
    ],
    hint: 'This process requires the workpiece to be electrically conductive.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Plasma-arc cutting has an advantage over oxy-acetylene cutting because it:',
    type: 'multiple-choice',
    answer: 'Is more compact and does not require bulky gas tanks and hoses',
    options: [
      'Can only cut ferrous metals',
      'Produces lower temperatures and slower cutting speeds',
      'Is more compact and does not require bulky gas tanks and hoses',
      'Cannot be automated'
    ],
    hint: 'Think of systems that use an electrical power source and a plasma torch.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'A key limitation of engineering ceramics for structural use is their:',
    type: 'multiple-choice',
    answer: 'Brittleness and low toughness',
    options: ['Very high density', 'Poor corrosion resistance', 'Brittleness and low toughness', 'Inability to operate at high temperature'],
    hint: 'This is why ceramics often fail suddenly without much warning.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Slip casting of ceramics involves:',
    type: 'multiple-choice',
    answer: 'Pouring a suspension of ceramic particles into a porous mould that absorbs water',
    options: [
      'Pressing dry powder at high pressure in a steel die',
      'Pouring a suspension of ceramic particles into a porous mould that absorbs water',
      'Injecting molten ceramic under high pressure into a metal mould',
      'Sintering pre-shaped pellets without any mould'
    ],
    hint: 'Think about a watery ceramic “slip” and a plaster mould.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Which glass type is noted for excellent resistance to thermal shock and chemicals and is used in ovenware and laboratory glassware (e.g. trade name Pyrex)?',
    type: 'multiple-choice',
    answer: 'Borosilicate glass',
    options: ['Soda-lime glass', 'Lead-alkali glass', 'Borosilicate glass', 'Fused silica'],
    hint: 'This glass has a lower thermal expansion than soda-lime glass.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Tempered glass gains its improved strength mainly by:',
    type: 'multiple-choice',
    answer: 'Creating residual surface stresses through rapid surface chilling or chemical ion exchange',
    options: [
      'Having fibres embedded in it',
      'Being cooled extremely slowly from the melt',
      'Creating residual surface stresses through rapid surface chilling or chemical ion exchange',
      'Having a higher silica content than ordinary glass'
    ],
    hint: 'Think about compressive stresses at the surface of the glass.'
  },

  // --- Category / “which set” questions ---

  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Which set of processes is most strongly associated with thermoplastic processing?',
    type: 'multiple-choice',
    answer: 'Injection moulding, extrusion, blow moulding, thermoforming',
    options: [
      'Compression moulding, transfer moulding, filament winding, RTM',
      'Injection moulding, extrusion, blow moulding, thermoforming',
      'Hand lay-up, spray lay-up, pultrusion, autoclave curing',
      'Slip casting, dry pressing, hot pressing, glazing'
    ],
    hint: 'Think of the classic high-volume processes used for meltable plastics.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Which group is most typical of thermoset/composite processing routes?',
    type: 'multiple-choice',
    answer: 'Hand lay-up, spray lay-up, filament winding, pultrusion',
    options: [
      'Hand lay-up, spray lay-up, filament winding, pultrusion',
      'Injection moulding, blow moulding, film blowing, calendering',
      'Sand casting, die casting, investment casting, permanent mould casting',
      'Milling, turning, drilling, grinding'
    ],
    hint: 'Think about how fibre-reinforced thermoset laminates are made.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Which option lists only processes primarily used for metals in the plastic or solid state (not liquid state and not polymers)?',
    type: 'multiple-choice',
    answer: 'Hot rolling, forging, extrusion, wire drawing',
    options: [
      'Hot rolling, forging, extrusion, wire drawing',
      'Sand casting, die casting, investment casting, squeeze casting',
      'Injection moulding, extrusion, blow moulding, thermoforming',
      'Hand lay-up, filament winding, RTM, autoclave curing'
    ],
    hint: 'These processes act on solid or semi-solid metal, not molten metal.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Which set is most clearly associated with joining thermoplastics (rather than metals)?',
    type: 'multiple-choice',
    answer: 'Ultrasonic welding, hot plate welding, spin welding, solvent bonding',
    options: [
      'MIG welding, TIG welding, resistance spot welding, friction stir welding',
      'Ultrasonic welding, hot plate welding, spin welding, solvent bonding',
      'Soldering, brazing, oxy-acetylene welding, adhesive bonding',
      'Riveting, bolting, self-tapping screws, clinching'
    ],
    hint: 'These processes rely on softening or fusing plastic, not melting metal.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Which set consists mainly of mechanical joining methods?',
    type: 'multiple-choice',
    answer: 'Riveting, bolting, screwing, snap-fit features',
    options: [
      'MIG welding, TIG welding, plasma arc welding, laser welding',
      'Soldering, brazing, adhesive bonding, diffusion bonding',
      'Riveting, bolting, screwing, snap-fit features',
      'Ultrasonic welding, hot gas welding, friction welding, spin welding'
    ],
    hint: 'Think about fasteners that can be disassembled without melting or breaking bonds.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Which group is most strongly associated with ceramic processing?',
    type: 'multiple-choice',
    answer: 'Slip casting, dry pressing, tape casting, sintering',
    options: [
      'Hot rolling, forging, extrusion, drawing',
      'Slip casting, dry pressing, tape casting, sintering',
      'Injection moulding, blow moulding, thermoforming, calendering',
      'Hand lay-up, filament winding, pultrusion, RTM'
    ],
    hint: 'These processes are used to shape powders or slips into ceramic parts.'
  },

  // --- “What process/material is this object?” questions ---

  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'A large hollow plastic water tank for outdoor storage is most likely made by:',
    type: 'multiple-choice',
    answer: 'Rotational moulding of polyethylene',
    options: [
      'Injection moulding of ABS',
      'Rotational moulding of polyethylene',
      'Hand lay-up of carbon/epoxy',
      'Hot rolling of mild steel'
    ],
    hint: 'Think of a low-pressure, large hollow part with uniform wall thickness.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'A high-volume aluminium car engine block is most commonly produced by:',
    type: 'multiple-choice',
    answer: 'Die casting of aluminium alloy',
    options: [
      'Sand casting of grey iron',
      'Die casting of aluminium alloy',
      'Forging of aluminium alloy',
      'Slip casting of alumina'
    ],
    hint: 'Modern light engine blocks are often produced by a high-pressure casting process.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'A soft drink bottle (clear plastic, thin-walled, with a threaded neck) is typically produced by:',
    type: 'multiple-choice',
    answer: 'Injection stretch blow moulding of PET',
    options: [
      'Injection moulding only',
      'Extrusion of solid rod then turning',
      'Injection stretch blow moulding of PET',
      'Rotational moulding of PVC'
    ],
    hint: 'Think of a two-stage process with a preform and then blowing.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'A standard white toilet bowl in a bathroom is most likely:',
    type: 'multiple-choice',
    answer: 'Porcelain ceramic made by slip casting and firing',
    options: [
      'Grey cast iron made by sand casting',
      'ABS plastic made by vacuum forming',
      'Porcelain ceramic made by slip casting and firing',
      'Aluminium alloy made by die casting'
    ],
    hint: 'Think of vitreous, glazed sanitary ware.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'A carbon-fibre bicycle frame for a racing bike is usually manufactured by:',
    type: 'multiple-choice',
    answer: 'Hand lay-up of carbon/epoxy in a mould, then curing (often in an autoclave)',
    options: [
      'Hot rolling followed by welding',
      'Hand lay-up of carbon/epoxy in a mould, then curing (often in an autoclave)',
      'Die casting of magnesium alloy',
      'Injection moulding of polypropylene'
    ],
    hint: 'Think of fibre-reinforced epoxy laminates cured under heat and pressure.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'A kitchen saucepan base that must conduct heat well and resist corrosion is most likely made from:',
    type: 'multiple-choice',
    answer: 'Aluminium alloy formed by deep drawing or impact extrusion',
    options: [
      'Low-carbon steel formed by hot rolling only',
      'Aluminium alloy formed by deep drawing or impact extrusion',
      'Epoxy-glass composite formed by hand lay-up',
      'Polyethylene formed by blow moulding'
    ],
    hint: 'Think of a metal with good thermal conductivity and good formability.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'A printed circuit board (PCB) for electronics is typically a laminate of:',
    type: 'multiple-choice',
    answer: 'Glass-fibre reinforced epoxy with copper foil (FR-4)',
    options: [
      'Pure copper plate made by hot rolling',
      'Glass-fibre reinforced epoxy with copper foil (FR-4)',
      'ABS plastic with steel backing',
      'Aluminium alloy with ceramic coating'
    ],
    hint: 'Think of a thermoset composite with copper for tracks.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'A steel I-beam used in building structures is most likely produced by:',
    type: 'multiple-choice',
    answer: 'Hot rolling from a billet through shaped rolls',
    options: [
      'Sand casting followed by grinding',
      'Hot rolling from a billet through shaped rolls',
      'Die casting in a permanent steel mould',
      'Injection moulding of steel pellets'
    ],
    hint: 'Structural sections like I-beams come out of rolling mills, not moulds.'
  }


];