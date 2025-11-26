import { Question } from '../types/Question';

export const fillQuestions: Question[] = [
  {
    topic: 'Week 1 - Natural Materials',
    question: 'The growth rings in wood are caused by seasonal variations between earlywood and _____ formed during each year.',
    type: 'fill',
    answer: 'latewood',
    acceptableAnswers: ['latewood'],
    hint: 'It is the denser, darker band formed later in the growing season.',
  },
  {
    topic: 'Week 1 - Natural Materials',
    question: 'Below the fibre saturation point, a decrease in moisture content generally causes wood to _____ and shrink.',
    type: 'fill',
    answer: 'stiffen',
    acceptableAnswers: ['stiffen', 'increase in stiffness'],
    hint: 'Strength and stiffness increase but dimensional stability can worsen.',
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'A metal is an alloy when two or more _____ are combined together.',
    type: 'fill',
    answer: 'metals',
    acceptableAnswers: ['metals', 'metal'],
    hint: 'The components of an alloy are usually different pure metallic elements.',
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Steels generally contain between about 0.06% and _____% carbon by weight.',
    type: 'fill',
    answer: '2.0',
    acceptableAnswers: ['2.0', '2', '2%'],
    hint: 'Above this percentage, the alloy is normally classified as cast iron.',
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Aluminum is popular because of its high _____-to-weight ratio.',
    type: 'fill',
    answer: 'strength',
    acceptableAnswers: ['strength'],
    hint: 'This mechanical property divided by weight is often key in aerospace.',
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Magnesium is valued as the lightest structural metal and therefore heavily used in the _____ industry.',
    type: 'fill',
    answer: 'transportation',
    acceptableAnswers: ['transportation', 'transport'],
    hint: 'Think cars, aircraft and other vehicles.',
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Zinc is commonly used to coat steel, producing _____ steel.',
    type: 'fill',
    answer: 'galvanized',
    acceptableAnswers: ['galvanized', 'galvanised'],
    hint: 'This type of steel is protected from corrosion by a zinc layer.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'The six main groups of properties are physical, mechanical, technological, chemical, economic and _____ properties.',
    type: 'fill',
    answer: 'aesthetic',
    acceptableAnswers: ['aesthetic', 'aesthetics'],
    hint: 'This group relates to appearance and how the product looks to users.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'The stress at which permanent (plastic) deformation starts is called the _____ strength.',
    type: 'fill',
    answer: 'yield',
    acceptableAnswers: ['yield', 'yield strength'],
    hint: 'On the stress–strain curve this is where elastic behaviour stops.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Ductility describes the ability to deform plastically in _____ without fracture.',
    type: 'fill',
    answer: 'tension',
    acceptableAnswers: ['tension', 'tensile'],
    hint: 'It is usually measured in a uniaxial pulling test.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Malleability is plastic deformability under _____ loading.',
    type: 'fill',
    answer: 'compressive',
    acceptableAnswers: ['compressive', 'compression'],
    hint: 'This is the type of loading used in forging and rolling.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Failure under many repeated low-level stresses is called _____ failure.',
    type: 'fill',
    answer: 'fatigue',
    acceptableAnswers: ['fatigue'],
    hint: 'This type of failure often occurs at stress levels below the yield strength.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Machinability, castability and weldability are examples of _____ properties.',
    type: 'fill',
    answer: 'technological',
    acceptableAnswers: ['technological'],
    hint: 'These properties describe how a material responds to manufacturing processes.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Constraints in material selection specify minimum or maximum acceptable property _____ that must be satisfied.',
    type: 'fill',
    answer: 'values',
    acceptableAnswers: ['values', 'limits'],
    hint: 'For example, density < 1.5 g/cm³ or yield strength > 200 MPa.',
  },
  {
    topic: 'Week 3 - Properties of Materials & Selection',
    question: 'Ashby charts plot pairs of material properties, such as strength versus _____, on logarithmic scales.',
    type: 'fill',
    answer: 'density',
    acceptableAnswers: ['density'],
    hint: 'These charts help identify materials with high specific strength or stiffness.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Casting is especially economical for manufacturing parts with _____ shapes.',
    type: 'fill',
    answer: 'complex',
    acceptableAnswers: ['complex'],
    hint: 'It is well suited for shapes that are difficult to machine.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'In sand casting, the upper half of the mould is called the _____ and the lower half the drag.',
    type: 'fill',
    answer: 'cope',
    acceptableAnswers: ['cope'],
    hint: 'The opposite half is called the drag.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'The slight taper added to vertical faces of a pattern to aid removal is called _____ angle.',
    type: 'fill',
    answer: 'draft',
    acceptableAnswers: ['draft'],
    hint: 'This angle prevents the pattern from scraping the sand during withdrawal.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Gray iron should be considered for parts requiring good machinability but not involving _____ loads.',
    type: 'fill',
    answer: 'shock',
    acceptableAnswers: ['shock', 'impact'],
    hint: 'These sudden loads can cause brittle fracture in gray iron.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Ductile (nodular) irons are preferred for machine frames and gears that may see occasional _____ loads.',
    type: 'fill',
    answer: 'shock',
    acceptableAnswers: ['shock', 'impact'],
    hint: 'These irons have nodular graphite that improves toughness.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'White iron is mainly used for severe _____ resistance.',
    type: 'fill',
    answer: 'abrasion',
    acceptableAnswers: ['abrasion', 'wear'],
    hint: 'High hardness makes this material useful where surfaces are worn away.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Investment casting is also known as _____ wax casting.',
    type: 'fill',
    answer: 'lost',
    acceptableAnswers: ['lost'],
    hint: 'The wax pattern is melted out of the ceramic shell in this process.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Investment casting is particularly good for parts with _____ walls and intricate details.',
    type: 'fill',
    answer: 'thin',
    acceptableAnswers: ['thin'],
    hint: 'This process can achieve very fine sections and accurate features.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Die casting is generally limited to _____ metals such as aluminium and zinc.',
    type: 'fill',
    answer: 'nonferrous',
    acceptableAnswers: ['nonferrous', 'non-ferrous'],
    hint: 'These metals have relatively low melting temperatures compared to steels.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Plastic state forming operates on solid metal at elevated temperature but below the _____ temperature.',
    type: 'fill',
    answer: 'melting',
    acceptableAnswers: ['melting'],
    hint: 'The solid has not yet turned fully into liquid during this forming.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'A key benefit of forging is that the grain flow follows the _____ of the part, improving strength.',
    type: 'fill',
    answer: 'shape',
    acceptableAnswers: ['shape'],
    hint: 'Material flow lines tend to align with the final geometry.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In upset forging, the diameter increases while the _____ decreases.',
    type: 'fill',
    answer: 'length',
    acceptableAnswers: ['length'],
    hint: 'The workpiece becomes shorter and thicker.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Hot rolling is carried out just below the _____ temperature.',
    type: 'fill',
    answer: 'critical',
    acceptableAnswers: ['critical'],
    hint: 'This temperature is related to phase transformations in steels.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Cold rolling typically results in a smoother, finer surface but increases cost by roughly _____ percent.',
    type: 'fill',
    answer: '20',
    acceptableAnswers: ['20', '20.0'],
    hint: 'It increases cost by about one fifth compared to hot rolling.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Sheet thickness is generally defined as less than _____ mm.',
    type: 'fill',
    answer: '6',
    acceptableAnswers: ['6', '6.0'],
    hint: 'Above this thickness the product is usually classified as plate.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In air bending, there is a gap of ____ between the sheet and the bottom of the V-opening.',
    type: 'fill',
    answer: 'air',
    acceptableAnswers: ['air'],
    hint: 'The sheet does not fully contact the die bottom in this bending method.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Spinning is typically used to make symmetrical _____-like or disc-like shapes.',
    type: 'fill',
    answer: 'cup',
    acceptableAnswers: ['cup'],
    hint: 'It is commonly used to form bowls, lampshades and similar products.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Hydroforming uses fluid pressure and a flexible _____ instead of a matching die cavity.',
    type: 'fill',
    answer: 'diaphragm',
    acceptableAnswers: ['diaphragm'],
    hint: 'A rubber-like membrane and fluid pressure shape the metal sheet or tube.',
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Forged components often have better fatigue performance than cast ones because the deformation aligns the _____ flow with the part geometry.',
    type: 'fill',
    answer: 'grain',
    acceptableAnswers: ['grain', 'grain flow'],
    hint: 'These flow lines follow the part shape like bent fibres in wood.',
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Thermoplastics can be repeatedly softened by heating and _____ by cooling.',
    type: 'fill',
    answer: 'hardened',
    acceptableAnswers: ['hardened', 'solidified'],
    hint: 'They soften on heating and solidify again without chemical change.',
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In injection molding, plastic pellets are melted and then _____ into a closed mould.',
    type: 'fill',
    answer: 'injected',
    acceptableAnswers: ['injected', 'shot'],
    hint: 'A screw forces the melt into the mould cavity.',
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'One major advantage of injection molding is very high _____ rates.',
    type: 'fill',
    answer: 'production',
    acceptableAnswers: ['production', 'throughput'],
    hint: 'This makes the process ideal for mass manufacturing of plastic parts.',
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Rotational molding is especially suited to large _____ parts like tanks or kayaks.',
    type: 'fill',
    answer: 'hollow',
    acceptableAnswers: ['hollow'],
    hint: 'The interior is empty and there are no joints or welds.',
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Thermoset polymers, once cured, cannot be _____ and reshaped.',
    type: 'fill',
    answer: 'remelted',
    acceptableAnswers: ['remelted', 'melted again'],
    hint: 'Cross-linking locks their structure and prevents repeated melting.',
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Reaction injection molding mixes liquid reactants that _____ in the mould to form a polymer.',
    type: 'fill',
    answer: 'polymerize',
    acceptableAnswers: ['polymerize', 'polymerise', 'cure'],
    hint: 'The low-viscosity liquids react chemically to form a solid network.',
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Fiberglass boat hulls typically use glass fibre in an unsaturated _____ resin matrix.',
    type: 'fill',
    answer: 'polyester',
    acceptableAnswers: ['polyester', 'polyester resin'],
    hint: 'This thermoset resin is cheaper and more common than epoxy.',
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'The four cutting subgroups are sheet cutting, chip-forming, nonchip forming and _____/thermal cutting.',
    type: 'fill',
    answer: 'flame',
    acceptableAnswers: ['flame'],
    hint: 'This subgroup includes oxy-fuel cutting processes.',
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Grinding uses a wheel made of hard _____ grains bonded together.',
    type: 'fill',
    answer: 'abrasive',
    acceptableAnswers: ['abrasive'],
    hint: 'These very hard particles remove small chips and produce fine finishes.',
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Chemical machining removes material by selective attack in a _____ solution.',
    type: 'fill',
    answer: 'chemical',
    acceptableAnswers: ['chemical', 'etchant'],
    hint: 'The workpiece is masked and then exposed to this reactive liquid.',
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Water-jet or hydrodynamic machining can cut almost any material with very little _____ affected zone.',
    type: 'fill',
    answer: 'heat',
    acceptableAnswers: ['heat'],
    hint: 'Because there is minimal temperature rise, thermal damage is small.',
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'In a lap joint loaded in tension, the load path is offset from the mid-thickness of the plates, creating a _____ moment that tends to bend the joint.',
    type: 'fill',
    answer: 'peel',
    acceptableAnswers: ['peel', 'peeling'],
    hint: 'This type of moment tries to open the joint like a sticker.',
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Spot welding is most commonly used to join overlapping _____ sheets in automotive body structures.',
    type: 'fill',
    answer: 'steel',
    acceptableAnswers: ['steel', 'sheet steel'],
    hint: 'Think of car body panels and white-body assemblies.',
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Soldering and brazing both use a filler metal, but brazing occurs at a _____ temperature than soldering.',
    type: 'fill',
    answer: 'higher',
    acceptableAnswers: ['higher'],
    hint: 'One of them uses temperatures above about 450 °C.',
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Compared to welding, adhesive bonding can distribute load more evenly over a larger area, reducing local _____ concentrations.',
    type: 'fill',
    answer: 'stress',
    acceptableAnswers: ['stress', 'stress concentration'],
    hint: 'Sharp peaks of this quantity can cause joint failure.',
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Epoxy structural adhesives usually require careful _____ preparation, such as degreasing and abrasion, to reach full bond strength.',
    type: 'fill',
    answer: 'surface',
    acceptableAnswers: ['surface'],
    hint: 'Poor preparation here is one of the most common causes of adhesive failure.',
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'In a single-lap adhesive joint, the effective overlap length is limited by shear and _____ stresses that concentrate near the ends of the overlap.',
    type: 'fill',
    answer: 'peel',
    acceptableAnswers: ['peel', 'peeling'],
    hint: 'These opening stresses are highest right at the joint ends.',
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Compared to mechanical fasteners, an adhesive joint can reduce component weight because it does not require drilled _____ or extra overlap for bolts.',
    type: 'fill',
    answer: 'holes',
    acceptableAnswers: ['holes', 'fastener holes'],
    hint: 'These features remove material and also act as stress raisers.',
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'When selecting a manufacturing method, we must check whether the process can achieve the required tolerances, surface finish and _____ limits.',
    type: 'fill',
    answer: 'size',
    acceptableAnswers: ['size', 'dimensional'],
    hint: 'Think about maximum casting weight or minimum wall thickness.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Chills are pieces of metal inserted in the mould to locally increase cooling rate and control the _____ structure of the casting.',
    type: 'fill',
    answer: 'micro',
    acceptableAnswers: ['micro', 'microstructure'],
    hint: 'They help refine grain size and avoid hot spots or shrinkage.',
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Gating design in casting aims to ensure smooth, non-turbulent metal flow into the cavity to minimise oxide formation and _____ of gas.',
    type: 'fill',
    answer: 'entrainment',
    acceptableAnswers: ['entrainment', 'entrapment'],
    hint: 'We want to avoid air being dragged into the metal stream.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Ceramic materials are inorganic, _____ materials, often with ionic or covalent bonding.',
    type: 'fill',
    answer: 'nonmetallic',
    acceptableAnswers: ['nonmetallic', 'non-metallic'],
    hint: 'They are different in bonding and structure from metals.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Three main types of engineering ceramics are metal oxide ceramics, glass ceramics and _____ and nitrides.',
    type: 'fill',
    answer: 'carbides',
    acceptableAnswers: ['carbides'],
    hint: 'Silicon of this type is widely used as a cutting tool material.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Glass is an _____ transparent solid with a non-crystalline atomic structure.',
    type: 'fill',
    answer: 'amorphous',
    acceptableAnswers: ['amorphous'],
    hint: 'It lacks the ordered lattice structure of crystalline solids.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'The most common glass type, used for bottles and windows, is soda-lime glass, a type of _____ glass.',
    type: 'fill',
    answer: 'soft',
    acceptableAnswers: ['soft'],
    hint: 'This category has lower softening temperatures than borosilicate glass.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Borosilicate glass is resistant to thermal _____ and high temperatures.',
    type: 'fill',
    answer: 'shock',
    acceptableAnswers: ['shock'],
    hint: 'It can go from hot to cold without cracking easily.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Blowing of glass uses air pressure to expand a hot _____ of glass into a mould.',
    type: 'fill',
    answer: 'gob',
    acceptableAnswers: ['gob', 'blob', 'parison'],
    hint: 'It is a small, hot mass of glass that is inflated.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Tempered glass is strengthened by rapidly _____ the surfaces to create residual stresses.',
    type: 'fill',
    answer: 'cooling',
    acceptableAnswers: ['cooling', 'quenching'],
    hint: 'The outer layers solidify first and go into compression.',
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Laminated glass sandwiches a layer of tough _____ between two glass sheets.',
    type: 'fill',
    answer: 'plastic',
    acceptableAnswers: ['plastic'],
    hint: 'This interlayer holds the glass fragments together on impact.',
  },

  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Hall–Petch says yield strength increases as grain size ______.',
    type: 'fill',
    answer: 'decreases',
    acceptableAnswers: ['decreases', 'gets smaller', 'reduces'],
    hint: 'Think about how smaller grains block dislocation motion.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'A casting with long columnar grains will be more ______ in properties.',
    type: 'fill',
    answer: 'anisotropic',
    acceptableAnswers: ['anisotropic', 'directional'],
    hint: 'Properties change with direction when grains are strongly oriented.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'In steel, slow cooling generally gives ______ pearlite and lower strength.',
    type: 'fill',
    answer: 'coarse',
    acceptableAnswers: ['coarse'],
    hint: 'Compare fine lamellae vs thick lamellae in pearlite.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Work hardening increases strength but reduces ______.',
    type: 'fill',
    answer: 'ductility',
    acceptableAnswers: ['ductility'],
    hint: 'The metal becomes stronger but less able to plastically deform.'
  },
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Normalising a steel refines grain size and relieves internal ______.',
    type: 'fill',
    answer: 'stresses',
    acceptableAnswers: ['stresses', 'stress'],
    hint: 'Think about residual effects from previous processing.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Liquid state forming of metals is more commonly called ______.',
    type: 'fill',
    answer: 'casting',
    acceptableAnswers: ['casting'],
    hint: 'General name for processes where liquid metal solidifies in a mold.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'In sand casting, the upper mold half is called the ______.',
    type: 'fill',
    answer: 'cope',
    acceptableAnswers: ['cope'],
    hint: 'Cope is on top, drag is on the bottom.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'The expendable shape used to form a mold cavity is called a ______.',
    type: 'fill',
    answer: 'pattern',
    acceptableAnswers: ['pattern'],
    hint: 'This is the model of the final part used to make the mold cavity.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'In casting, an internal cavity in the final part is formed by a ______.',
    type: 'fill',
    answer: 'core',
    acceptableAnswers: ['core'],
    hint: 'This insert is placed in the mold to create holes or hollow regions.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'The main purpose of a gating system is to control the flow of ______ into the mold.',
    type: 'fill',
    answer: 'metal',
    acceptableAnswers: ['metal', 'molten metal'],
    hint: 'It brings the liquid alloy from the ladle into the cavity.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Directional solidification is used to encourage solidification to progress toward the ______.',
    type: 'fill',
    answer: 'riser',
    acceptableAnswers: ['riser', 'feeder'],
    hint: 'You want the last region to freeze to be the feeder reservoir.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Chills are inserted into molds to locally increase the rate of ______.',
    type: 'fill',
    answer: 'cooling',
    acceptableAnswers: ['cooling', 'solidification'],
    hint: 'They are high conductivity inserts used to control solidification.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Steel castings are used when cast irons are not strong or ______ enough.',
    type: 'fill',
    answer: 'tough',
    acceptableAnswers: ['tough', 'tough enough'],
    hint: 'Think of resistance to impact and crack growth.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'White cast iron is very ______ resistant but extremely brittle.',
    type: 'fill',
    answer: 'wear',
    acceptableAnswers: ['wear', 'abrasion'],
    hint: 'Carbides in the structure give high abrasion resistance.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Malleable iron is produced by ______ heat treatment of white iron castings.',
    type: 'fill',
    answer: 'prolonged',
    acceptableAnswers: ['prolonged', 'long', 'annealing'],
    hint: 'A long anneal decomposes the carbides into temper carbon.'
  },

  // B. Deformation & Sheet Forming – Extra
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Plastic state forming of metals is generally done at ______ temperatures.',
    type: 'fill',
    answer: 'elevated',
    acceptableAnswers: ['elevated', 'high', 'hot'],
    hint: 'Think about hot working vs cold working.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Hot working can remove the effects of previous ______ hardening.',
    type: 'fill',
    answer: 'work',
    acceptableAnswers: ['work', 'strain'],
    hint: 'Dislocations are rearranged or annihilated at high temperature.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Cold working increases strength but also increases ______ stresses.',
    type: 'fill',
    answer: 'residual',
    acceptableAnswers: ['residual'],
    hint: 'These stresses remain locked in after unloading.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Upset forging mainly increases ______ and reduces length.',
    type: 'fill',
    answer: 'diameter',
    acceptableAnswers: ['diameter'],
    hint: 'The cross section gets larger when the height is compressed.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Open-die forging is sometimes called ______ forging.',
    type: 'fill',
    answer: 'smith',
    acceptableAnswers: ['smith'],
    hint: 'Think of traditional blacksmith hammer and anvil operations.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'The most common hot working process for bars and plates is ______.',
    type: 'fill',
    answer: 'rolling',
    acceptableAnswers: ['rolling'],
    hint: 'Material passes between rotating rolls to reduce thickness.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Bend allowance must be considered because the outer surface is in ______, inner in compression.',
    type: 'fill',
    answer: 'tension',
    acceptableAnswers: ['tension'],
    hint: 'Outer fibers are stretched when the sheet is bent.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In sheet metal, a bend radius that is too small can cause surface ______.',
    type: 'fill',
    answer: 'cracking',
    acceptableAnswers: ['cracking', 'cracks'],
    hint: 'Very tight bends concentrate strain at the outside surface.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Springback in bending is caused by elastic ______ after unloading.',
    type: 'fill',
    answer: 'recovery',
    acceptableAnswers: ['recovery', 'relaxation'],
    hint: 'After you remove the load, the elastic strain partly returns.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In deep drawing, failure often appears as radial ______ at the punch radius.',
    type: 'fill',
    answer: 'cracks',
    acceptableAnswers: ['cracks', 'tears'],
    hint: 'Look for splitting where tensile hoop stresses are highest.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'A draw bead in deep drawing helps to control ______ flow from the flange.',
    type: 'fill',
    answer: 'material',
    acceptableAnswers: ['material'],
    hint: 'It adds local resistance to feeding sheet into the die.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Hydroforming uses pressurised ______ to shape sheet or tubes.',
    type: 'fill',
    answer: 'fluid',
    acceptableAnswers: ['fluid', 'liquid'],
    hint: 'Pressure medium is usually oil or water.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Tube hydroforming is widely used to make lightweight ______ frames.',
    type: 'fill',
    answer: 'automotive',
    acceptableAnswers: ['automotive', 'car', 'bicycle', 'bike'],
    hint: 'Think of car subframes or bicycle frames.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In roll forming, a long strip passes through successive pairs of ______.',
    type: 'fill',
    answer: 'rolls',
    acceptableAnswers: ['rolls', 'rollers'],
    hint: 'Each station gradually changes the profile.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Wire bending is attractive because it gives high stiffness with very low ______.',
    type: 'fill',
    answer: 'weight',
    acceptableAnswers: ['weight', 'mass'],
    hint: 'Thin wires can be shaped into stiff 3D structures.'
  },

  // C. Polymers – Structure & Properties – Extra
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Polymer chains are long molecules built from repeating units called ______.',
    type: 'fill',
    answer: 'monomers',
    acceptableAnswers: ['monomers'],
    hint: 'Think of the basic building block that repeats along the chain.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Above its glass transition temperature, an amorphous polymer becomes ______.',
    type: 'fill',
    answer: 'rubbery',
    acceptableAnswers: ['rubbery', 'soft', 'rubber like'],
    hint: 'Below Tg it is glassy, above Tg it is flexible.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Below Tg, an amorphous polymer is stiff and ______.',
    type: 'fill',
    answer: 'glassy',
    acceptableAnswers: ['glassy', 'brittle'],
    hint: 'Think about how a plastic ruler feels in the cold state.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Semi-crystalline polymers have both amorphous regions and ______ lamellae.',
    type: 'fill',
    answer: 'crystalline',
    acceptableAnswers: ['crystalline'],
    hint: 'These ordered regions pack chains into folded plates.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Adding plasticizers generally ______ the glass transition temperature.',
    type: 'fill',
    answer: 'lowers',
    acceptableAnswers: ['lowers', 'reduces', 'decreases'],
    hint: 'Plasticizers make polymers softer at a given temperature.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'A polymer blend is a physical mixture of two or more different ______.',
    type: 'fill',
    answer: 'polymers',
    acceptableAnswers: ['polymers'],
    hint: 'No covalent bonds between the different chains, just mixing.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'ABS is a common example of a ______ (three-monomer) polymer.',
    type: 'fill',
    answer: 'terpolymer',
    acceptableAnswers: ['terpolymer'],
    hint: 'Think tri rather than co in the name.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'LCPs are attractive because they have very low ______ and warpage.',
    type: 'fill',
    answer: 'shrinkage',
    acceptableAnswers: ['shrinkage'],
    hint: 'Dimensional stability after molding is one key advantage.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Compared to metals, polymers usually have much lower ______ conductivity.',
    type: 'fill',
    answer: 'thermal',
    acceptableAnswers: ['thermal'],
    hint: 'Polymers are often used as insulators rather than heat sinks.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Under sustained load, polymers show time-dependent deformation called ______.',
    type: 'fill',
    answer: 'creep',
    acceptableAnswers: ['creep'],
    hint: 'Strain keeps increasing even at constant stress.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Elastomers are polymers with very high reversible ______.',
    type: 'fill',
    answer: 'elasticity',
    acceptableAnswers: ['elasticity', 'elongation', 'stretch'],
    hint: 'Think about how far a rubber band can stretch and recover.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Vulcanisation of rubber adds cross-links, improving strength and reducing ______.',
    type: 'fill',
    answer: 'tackiness',
    acceptableAnswers: ['tackiness', 'creep'],
    hint: 'Cross-linked rubber is less sticky and flows less under load.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Fibre content in continuous fibre composites is often expressed as ______ fraction.',
    type: 'fill',
    answer: 'volume',
    acceptableAnswers: ['volume'],
    hint: 'Often written as Vf in composite design.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Carbon fibre composites are valued for their very high ______-to-weight ratio.',
    type: 'fill',
    answer: 'stiffness',
    acceptableAnswers: ['stiffness', 'strength'],
    hint: 'They can be both very light and very rigid or strong.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Short-fibre reinforced polymers are easier to process but give lower ______ properties than continuous fibre systems.',
    type: 'fill',
    answer: 'mechanical',
    acceptableAnswers: ['mechanical', 'structural'],
    hint: 'Think stiffness and strength compared to continuous fibres.'
  },

  // D. Polymer Processing – Extra
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In injection molding, the screw both plasticises and ______ the melt.',
    type: 'fill',
    answer: 'injects',
    acceptableAnswers: ['injects'],
    hint: 'It both melts and pushes the polymer into the cavity.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'The clamping unit must resist the ______ force generated by cavity pressure.',
    type: 'fill',
    answer: 'opening',
    acceptableAnswers: ['opening'],
    hint: 'The mold halves are pushed apart by internal pressure.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Sink marks over ribs in molded parts are mainly caused by non-uniform ______.',
    type: 'fill',
    answer: 'cooling',
    acceptableAnswers: ['cooling', 'shrinkage'],
    hint: 'Thicker sections cool and shrink more slowly than thin walls.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Gate location strongly affects flow pattern and final ______ orientation.',
    type: 'fill',
    answer: 'fibre',
    acceptableAnswers: ['fibre', 'fiber', 'molecular'],
    hint: 'Reinforcement alignment follows the melt flow during filling.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Hot runner systems keep material in the runner ______.',
    type: 'fill',
    answer: 'molten',
    acceptableAnswers: ['molten'],
    hint: 'This reduces cold plugs and material waste in sprues.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Extrusion blow molding begins with a hanging tube of melt called a ______.',
    type: 'fill',
    answer: 'parison',
    acceptableAnswers: ['parison'],
    hint: 'This tube is then inflated inside a mold.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In stretch blow molding, the parison is stretched ______ and radially.',
    type: 'fill',
    answer: 'axially',
    acceptableAnswers: ['axially'],
    hint: 'It is stretched along its length as well as expanded outward.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Blown film extrusion produces a thin tubular film that is later ______.',
    type: 'fill',
    answer: 'collapsed',
    acceptableAnswers: ['collapsed', 'slit'],
    hint: 'The tube is flattened into a layflat before winding.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Rotational molding uses ______ rotational axes to distribute the melt.',
    type: 'fill',
    answer: 'two',
    acceptableAnswers: ['two', '2'],
    hint: 'The mold rotates in two directions to coat all surfaces.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'A key disadvantage of rotational molding is long ______ times.',
    type: 'fill',
    answer: 'cycle',
    acceptableAnswers: ['cycle', 'cycle times'],
    hint: 'Heating and cooling a large mold takes time.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In vacuum forming, the primary forming force is ______ pressure.',
    type: 'fill',
    answer: 'atmospheric',
    acceptableAnswers: ['atmospheric', 'air'],
    hint: 'Removing air under the sheet lets outside pressure push it down.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In thermoforming design, sharp corners are avoided to prevent local ______ thinning.',
    type: 'fill',
    answer: 'wall',
    acceptableAnswers: ['wall'],
    hint: 'Material has to stretch over corners, thinning the section.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Pultrusion is like continuous pulling of fibres through a ______ and die.',
    type: 'fill',
    answer: 'resin bath',
    acceptableAnswers: ['resin bath'],
    hint: 'Fibres are impregnated before entering the heated die.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Filament winding is ideal for making ______ or spherical composite shells.',
    type: 'fill',
    answer: 'cylindrical',
    acceptableAnswers: ['cylindrical', 'cylinder'],
    hint: 'Think of pressure vessels and pipes.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'In RIM, low-viscosity reactive liquids are mixed and injected into a ______-pressure mold.',
    type: 'fill',
    answer: 'low',
    acceptableAnswers: ['low'],
    hint: 'Clamping forces can be much smaller than in injection molding.'
  },

  // E. Ceramics & Glass – Extra
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Most ceramics are bonded by a mix of ionic and ______ bonds.',
    type: 'fill',
    answer: 'covalent',
    acceptableAnswers: ['covalent'],
    hint: 'Think of strong, directional bonds like in SiO2.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Ceramics are generally good electrical ______.',
    type: 'fill',
    answer: 'insulators',
    acceptableAnswers: ['insulators', 'insulators.'],
    hint: 'They are often used around conductors to isolate them.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Porosity in ceramics acts as a stress ______.',
    type: 'fill',
    answer: 'concentrator',
    acceptableAnswers: ['concentrator', 'raiser'],
    hint: 'Local stress is amplified around voids and pores.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'In slip casting, a liquid ceramic suspension is called a ______.',
    type: 'fill',
    answer: 'slip',
    acceptableAnswers: ['slip'],
    hint: 'This word appears in the process name itself.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'During drying, non-uniform shrinkage can lead to ______ and warping.',
    type: 'fill',
    answer: 'cracking',
    acceptableAnswers: ['cracking', 'cracks'],
    hint: 'Restraint combined with shrinkage is dangerous for brittle bodies.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Glass is an amorphous solid with no long-range crystalline ______.',
    type: 'fill',
    answer: 'order',
    acceptableAnswers: ['order'],
    hint: 'Atoms are frozen in a liquid like arrangement.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Borosilicate glass is often sold under trade names such as ______.',
    type: 'fill',
    answer: 'Pyrex',
    acceptableAnswers: ['pyrex'],
    hint: 'Common brand name used in lab beakers and cookware.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Laminated glass holds together after fracture because of a plastic ______.',
    type: 'fill',
    answer: 'interlayer',
    acceptableAnswers: ['interlayer'],
    hint: 'This layer bonds the glass sheets and carries load after cracking.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Ceramic cutting tools exploit high hot hardness and ______ resistance.',
    type: 'fill',
    answer: 'wear',
    acceptableAnswers: ['wear'],
    hint: 'They can cut hard metals without rapid flank loss.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Thermal shock failure in ceramics is driven by temperature gradients and high thermal ______.',
    type: 'fill',
    answer: 'expansion',
    acceptableAnswers: ['expansion'],
    hint: 'Differential expansion sets up dangerous internal stresses.'
  },

  // F. Cutting & Machining – Extra
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Shear cutting of sheet is also called ______.',
    type: 'fill',
    answer: 'shearing',
    acceptableAnswers: ['shearing'],
    hint: 'Same word as used for sheep and scissors.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In punching, too large a clearance produces a large ______.',
    type: 'fill',
    answer: 'burr',
    acceptableAnswers: ['burr', 'burrs'],
    hint: 'A ragged edge of material left on the cut surface.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Laser cutting has a very narrow cut width, called the ______.',
    type: 'fill',
    answer: 'kerf',
    acceptableAnswers: ['kerf'],
    hint: 'This term also appears in woodworking saw cuts.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In drilling, the blind end of the hole often traps ______ and chips.',
    type: 'fill',
    answer: 'coolant',
    acceptableAnswers: ['coolant', 'swarf', 'chips'],
    hint: 'Liquid and debris can build up at the bottom of a blind hole.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Reaming is used mainly to improve hole ______ and finish.',
    type: 'fill',
    answer: 'size',
    acceptableAnswers: ['size', 'accuracy'],
    hint: 'It follows drilling to bring the hole to final tolerance.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Turning is normally carried out on a ______.',
    type: 'fill',
    answer: 'lathe',
    acceptableAnswers: ['lathe'],
    hint: 'Classic machine where the workpiece rotates against a tool.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In milling, the cutting tool ______ while the workpiece moves.',
    type: 'fill',
    answer: 'rotates',
    acceptableAnswers: ['rotates'],
    hint: 'The tool spins and the table feeds the part underneath.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Surface finish in grinding depends strongly on ______ size in the wheel.',
    type: 'fill',
    answer: 'grit',
    acceptableAnswers: ['grit'],
    hint: 'Smaller abrasive particles give smoother surfaces.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Broaching uses a tool with progressively larger teeth to remove material in one ______.',
    type: 'fill',
    answer: 'pass',
    acceptableAnswers: ['pass'],
    hint: 'The tool moves once through the workpiece to form the profile.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In EDM, material removal is by rapidly repeated ______.',
    type: 'fill',
    answer: 'sparks',
    acceptableAnswers: ['sparks', 'discharges'],
    hint: 'No physical cutting edge, just electrical discharges.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'ECM requires a conductive workpiece and an ______ solution.',
    type: 'fill',
    answer: 'electrolyte',
    acceptableAnswers: ['electrolyte'],
    hint: 'Ions in this fluid carry current between tool and part.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Waterjet cutting has minimal ______-affected zone.',
    type: 'fill',
    answer: 'heat',
    acceptableAnswers: ['heat'],
    hint: 'The process is essentially cold, using high pressure fluid.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Plasma cutting can be used to cut ______ steels and aluminium, unlike oxy-fuel.',
    type: 'fill',
    answer: 'stainless',
    acceptableAnswers: ['stainless', 'stainless steels'],
    hint: 'This material cannot be cut easily with oxy-acetylene alone.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In CNC machining, G-code primarily controls ______ movements.',
    type: 'fill',
    answer: 'tool',
    acceptableAnswers: ['tool', 'axis', 'axes'],
    hint: 'These commands specify how the cutter moves in space.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Deburring is the process of removing sharp ______ left after cutting.',
    type: 'fill',
    answer: 'edges',
    acceptableAnswers: ['edges', 'burrs'],
    hint: 'It improves safety and surface quality after machining.'
  },

  // G. Joining – Soldering, Brazing, Welding, Adhesives, Mechanical – Extra
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'In soldering and brazing, the base metals are joined by a ______ metal.',
    type: 'fill',
    answer: 'filler',
    acceptableAnswers: ['filler', 'filler metal'],
    hint: 'This lower melting material flows between the parts.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'A key requirement for soldering or brazing is that the molten filler must ______ the base metals.',
    type: 'fill',
    answer: 'wet',
    acceptableAnswers: ['wet', 'wet properly'],
    hint: 'Good contact angle and spreading are needed for a sound joint.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Flux is used to remove metal ______ during soldering.',
    type: 'fill',
    answer: 'oxides',
    acceptableAnswers: ['oxides', 'oxide films'],
    hint: 'These surface compounds stop the filler from wetting.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'In brazing, joint clearance is kept small to promote capillary ______.',
    type: 'fill',
    answer: 'action',
    acceptableAnswers: ['action'],
    hint: 'This effect draws the molten filler into tight gaps.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Electric arc welding uses an electric arc between an electrode and the ______.',
    type: 'fill',
    answer: 'workpiece',
    acceptableAnswers: ['workpiece', 'base metal'],
    hint: 'The arc is struck between the rod and the part being welded.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'The region whose microstructure is altered but not melted in welding is called the ______.',
    type: 'fill',
    answer: 'heat-affected zone',
    acceptableAnswers: ['heat-affected zone', 'heat affected zone', 'haz'],
    hint: 'It sits between the fusion zone and the unaffected base metal.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Shielding gas in welding protects the molten pool from ______.',
    type: 'fill',
    answer: 'atmosphere',
    acceptableAnswers: ['atmosphere', 'oxygen', 'air'],
    hint: 'Without this protection, the weld can oxidise and pick up gas.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Resistance spot welding generates heat mainly at the high ______ at the faying surfaces.',
    type: 'fill',
    answer: 'resistance',
    acceptableAnswers: ['resistance'],
    hint: 'I squared R losses at the interface create the weld nugget.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'In ultrasonic welding, typical frequencies are in the range of ______ kHz.',
    type: 'fill',
    answer: '10-75',
    acceptableAnswers: ['10-75', '10 to 75', '10–75'],
    hint: 'This is well above the upper limit of human hearing.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Spin welding requires at least one part to be ______.',
    type: 'fill',
    answer: 'circular',
    acceptableAnswers: ['circular', 'round'],
    hint: 'One component must be rotated relative to the other.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Electromagnetic (induction) welding of plastics uses a gasket filled with ______ particles.',
    type: 'fill',
    answer: 'ferromagnetic',
    acceptableAnswers: ['ferromagnetic', 'metal'],
    hint: 'These particles heat up in an alternating magnetic field.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Hot plate welding creates a molten ______ on both joining surfaces before pressing together.',
    type: 'fill',
    answer: 'layer',
    acceptableAnswers: ['layer', 'film'],
    hint: 'Each surface is melted on a heated tool before being joined.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Adhesive joints should be designed to carry loads mainly in ______.',
    type: 'fill',
    answer: 'shear',
    acceptableAnswers: ['shear'],
    hint: 'Avoid peel or cleavage loading when possible.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Epoxy adhesives are typically supplied as ______-part systems.',
    type: 'fill',
    answer: 'two',
    acceptableAnswers: ['two', '2'],
    hint: 'A resin and a hardener are mixed before application.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Cyanoacrylates cure rapidly in the presence of surface ______.',
    type: 'fill',
    answer: 'moisture',
    acceptableAnswers: ['moisture', 'water'],
    hint: 'These are instant glues that set when exposed to humidity.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Anaerobic adhesives cure in confined ______ gaps between metal surfaces.',
    type: 'fill',
    answer: 'oxygen-free',
    acceptableAnswers: ['oxygen-free', 'absence of oxygen', 'airless'],
    hint: 'They harden where air is excluded, such as in threads.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Press fits rely on an interference between shaft and ______.',
    type: 'fill',
    answer: 'hole',
    acceptableAnswers: ['hole', 'hub'],
    hint: 'The outer component must be slightly smaller than the inner bore.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Thread-forming screws displace material; thread-______ screws remove material.',
    type: 'fill',
    answer: 'cutting',
    acceptableAnswers: ['cutting'],
    hint: 'One type forms threads, the other cuts them like a tap.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'To avoid stress cracking, plastic bosses for screws should have generous ______ at the root.',
    type: 'fill',
    answer: 'fillets',
    acceptableAnswers: ['fillets', 'radii'],
    hint: 'Avoid sharp internal corners at the base of the boss.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Riveted joints distribute loads over a line of ______.',
    type: 'fill',
    answer: 'fasteners',
    acceptableAnswers: ['fasteners', 'rivets'],
    hint: 'Multiple mechanical elements share the applied load.'
  },

  // . Metals, Microstructure, Casting
  {
    topic: 'Week 2 - Engineering Materials',
    question: 'Grain refinement improves strength mainly via the ______ relationship.',
    type: 'fill',
    answer: 'Hall–Petch',
    acceptableAnswers: ['hall–petch', 'hall-petch'],
    hint: 'This empirical equation links strength to inverse square root grain size.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Compared to gray iron, ductile iron has graphite in the form of ______.',
    type: 'fill',
    answer: 'nodules',
    acceptableAnswers: ['nodules', 'spheroids'],
    hint: 'The graphite is spherical rather than in flake form.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Gray iron should be used where good machinability and damping are needed but not for severe ______ loads.',
    type: 'fill',
    answer: 'shock',
    acceptableAnswers: ['shock', 'impact'],
    hint: 'Its flake graphite makes it weak in tension under sudden loading.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Name one casting process best suited for very thin, highly detailed metal parts.',
    type: 'short',
    answer: 'investment casting',
    acceptableAnswers: ['investment casting', 'lost wax casting'],
    hint: 'Think of the process used for turbine blades and jewelry.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'In casting, regions that solidify last and tend to form porosity are called ______.',
    type: 'fill',
    answer: 'hot spots',
    acceptableAnswers: ['hot spots', 'hotspots'],
    hint: 'These areas are fed by risers to avoid shrinkage voids.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Risers in castings primarily compensate for ______.',
    type: 'fill',
    answer: 'solidification shrinkage',
    acceptableAnswers: ['solidification shrinkage', 'shrinkage'],
    hint: 'They supply extra liquid metal as the casting volume contracts.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Die casting is mainly used for which two alloy families?',
    type: 'short',
    answer: 'aluminium and zinc',
    acceptableAnswers: ['aluminium and zinc', 'aluminum and zinc', 'zinc and aluminium', 'zinc and aluminum'],
    hint: 'Think of light alloys with good castability and low melting points.'
  },
  {
    topic: 'Week 4 - Metals: Liquid State Forming',
    question: 'Hot tearing in castings is mainly associated with restraint during ______.',
    type: 'fill',
    answer: 'solidification',
    acceptableAnswers: ['solidification', 'contraction', 'cooling'],
    hint: 'Cracks form if the casting cannot freely contract while freezing.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Forging improves fatigue properties by aligning ______ with the principal stress directions.',
    type: 'fill',
    answer: 'grain flow',
    acceptableAnswers: ['grain flow', 'fibres', 'fibers'],
    hint: 'The elongated structure follows the expected loading path.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Cold rolling increases strength mainly through ______ hardening.',
    type: 'fill',
    answer: 'work',
    acceptableAnswers: ['work', 'strain'],
    hint: 'Dislocation density increases as the material is plastically deformed.'
  },

  // 2. Deformation & Sheet Forming
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Deep drawing is typically used to make deep ______ from sheet metal.',
    type: 'fill',
    answer: 'cups',
    acceptableAnswers: ['cups', 'cans'],
    hint: 'Think of drinks cans and kitchen sinks.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'In bending sheet metal, adding a flange or rib mainly increases the section ______.',
    type: 'fill',
    answer: 'stiffness',
    acceptableAnswers: ['stiffness'],
    hint: 'Extra geometry increases the second moment of area.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Tube bending often requires a ______ inside the tube to prevent wrinkling.',
    type: 'fill',
    answer: 'mandrel',
    acceptableAnswers: ['mandrel'],
    hint: 'An internal support tool is placed in the tube during bending.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Roll forming is limited to parts with a constant ______ along their length.',
    type: 'fill',
    answer: 'cross-section',
    acceptableAnswers: ['cross-section', 'profile'],
    hint: 'The shape in the longitudinal direction cannot change.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Spinning is best suited for axisymmetric parts formed from a circular ______.',
    type: 'fill',
    answer: 'blank',
    acceptableAnswers: ['blank', 'disk', 'disc'],
    hint: 'A flat round sheet is pressed over a rotating mandrel.'
  },
  {
    topic: 'Week 5 - Metals: Plastic & Solid-State Forming',
    question: 'Wire drawing reduces cross-section by pulling through a ______.',
    type: 'fill',
    answer: 'die',
    acceptableAnswers: ['die'],
    hint: 'Each pass squeezes the wire smaller through this tool.'
  },

  // 3. Polymers & Polymer Processing
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Thermoplastics soften on heating and can be ______.',
    type: 'fill',
    answer: 'remelted',
    acceptableAnswers: ['remelted', 'reprocessed', 'recycled'],
    hint: 'They can be reshaped multiple times with heat.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Thermosets strengthen by forming permanent ______ between chains.',
    type: 'fill',
    answer: 'cross-links',
    acceptableAnswers: ['cross-links', 'crosslinks'],
    hint: 'These bonds stop the material from melting again.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Amorphous polymers usually have better ______ clarity than semi-crystalline ones.',
    type: 'fill',
    answer: 'optical',
    acceptableAnswers: ['optical'],
    hint: 'Think of transparent PMMA vs cloudy semicrystalline PE.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Semi-crystalline polymers tend to show ______ shrinkage after molding.',
    type: 'fill',
    answer: 'anisotropic',
    acceptableAnswers: ['anisotropic'],
    hint: 'They shrink differently along and across the flow direction.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'In injection molding, the sequence is: clamp → inject → ______ → cool → eject.',
    type: 'fill',
    answer: 'pack',
    acceptableAnswers: ['pack', 'hold'],
    hint: 'After filling, extra pressure compensates for shrinkage.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Blow molding is mainly used to form thin-walled ______ parts.',
    type: 'fill',
    answer: 'hollow',
    acceptableAnswers: ['hollow'],
    hint: 'Think of bottles and containers.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Extrusion can only produce parts with a constant ______.',
    type: 'fill',
    answer: 'cross-section',
    acceptableAnswers: ['cross-section', 'profile'],
    hint: 'The output has the same shape everywhere along its length.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Rotational molding is ideal for making large ______ plastic parts with uniform walls.',
    type: 'fill',
    answer: 'hollow',
    acceptableAnswers: ['hollow'],
    hint: 'Common for tanks, kayaks and playground equipment.'
  },
  {
    topic: 'Week 6 - Polymers: Thermoplastic Processes',
    question: 'Thermoforming shapes a heated plastic ______ over a mold by vacuum or pressure.',
    type: 'fill',
    answer: 'sheet',
    acceptableAnswers: ['sheet'],
    hint: 'A flat sheet is draped over or into a tool shape.'
  },
  {
    topic: 'Week 7 - Polymers: Thermosets & Composites Processes',
    question: 'Adding glass fibres to a polymer increases stiffness but often reduces ______ toughness.',
    type: 'fill',
    answer: 'impact',
    acceptableAnswers: ['impact'],
    hint: 'The composite becomes stiffer but more notch sensitive.'
  },

  // 4. Ceramics & Glass
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Ceramics are strong in compression but relatively weak in ______.',
    type: 'fill',
    answer: 'tension',
    acceptableAnswers: ['tension'],
    hint: 'They crack easily when pulled rather than squeezed.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Sintering densifies ceramic compacts by bonding particles at temperatures below the ______ point.',
    type: 'fill',
    answer: 'melting',
    acceptableAnswers: ['melting'],
    hint: 'Grain boundary diffusion occurs without fully liquefying the body.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'The float process produces flat glass by floating it on molten ______.',
    type: 'fill',
    answer: 'tin',
    acceptableAnswers: ['tin'],
    hint: 'A metal bath supports the glass ribbon and smooths the surface.'
  },
  {
    topic: 'Week 13 - Ceramics, Glass, Carbon, RHMs',
    question: 'Tempered glass is stronger mainly because its surface is in residual ______.',
    type: 'fill',
    answer: 'compression',
    acceptableAnswers: ['compression'],
    hint: 'Cracks must overcome this stress before they can open.'
  },

  // 5. Cutting & Machining
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In sheet operations, punching produces a hole; the scrap slug is ______.',
    type: 'fill',
    answer: 'waste',
    acceptableAnswers: ['waste', 'scrap'],
    hint: 'The blank remains, the punched piece is discarded.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'In blanking, the punched-out piece (blank) is the ______.',
    type: 'fill',
    answer: 'product',
    acceptableAnswers: ['product', 'part'],
    hint: 'Opposite of punching: here the slug is useful.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Shear cutting quality is strongly affected by punch–die ______.',
    type: 'fill',
    answer: 'clearance',
    acceptableAnswers: ['clearance'],
    hint: 'Too small or too large can give poor edges or short tool life.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'EDM can machine very hard materials but only if they are ______.',
    type: 'fill',
    answer: 'electrically conductive',
    acceptableAnswers: ['electrically conductive', 'conductive'],
    hint: 'The process relies on current flow through the workpiece.'
  },
  {
    topic: 'Week 8 - Metals: Cutting & Machining',
    question: 'Grinding is mainly used when very fine ______ and tight tolerances are required.',
    type: 'fill',
    answer: 'surface finish',
    acceptableAnswers: ['surface finish', 'finish'],
    hint: 'Think of final sizing after milling or turning.'
  },

  // 6. Joining – Fusion, Adhesives, Mechanical
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'In soldering, the filler metal melts but the ______ metals do not.',
    type: 'fill',
    answer: 'base',
    acceptableAnswers: ['base', 'base metals'],
    hint: 'The parent parts remain solid while the filler flows.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Brazing differs from soldering mainly by its higher filler metal ______.',
    type: 'fill',
    answer: 'melting temperature',
    acceptableAnswers: ['melting temperature', 'melting point'],
    hint: 'The dividing line is around 450 to 500 degrees Celsius.'
  },
  {
    topic: 'Week 9 – Joining Processes (Soldering, Brazing, Welding)',
    question: 'Welded joints are usually classed as ______ joints.',
    type: 'fill',
    answer: 'permanent',
    acceptableAnswers: ['permanent'],
    hint: 'They generally cannot be taken apart without damage.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Ultrasonic welding of plastics uses high-frequency ______ to generate heat at the interface.',
    type: 'fill',
    answer: 'vibrations',
    acceptableAnswers: ['vibrations'],
    hint: 'Mechanical oscillations cause frictional heating in the joint.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Energy directors in ultrasonic welding are small ______ that focus heat generation.',
    type: 'fill',
    answer: 'ribs',
    acceptableAnswers: ['ribs', 'wedges'],
    hint: 'These local features melt first to start the weld.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Adhesive joints are strongest when loaded in ______ rather than peel.',
    type: 'fill',
    answer: 'shear',
    acceptableAnswers: ['shear'],
    hint: 'Spread the load along the overlap instead of prying it off.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Anaerobic adhesives cure in the absence of ______, usually between metal surfaces.',
    type: 'fill',
    answer: 'oxygen',
    acceptableAnswers: ['oxygen', 'air'],
    hint: 'They remain liquid when exposed to air but harden in tight gaps.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'The main purpose of a metal insert in a plastic boss is to provide durable ______.',
    type: 'fill',
    answer: 'threads',
    acceptableAnswers: ['threads'],
    hint: 'It lets the joint survive repeated assembly and disassembly.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Self-tapping screws form or cut their own ______ in plastic or sheet metal.',
    type: 'fill',
    answer: 'threads',
    acceptableAnswers: ['threads'],
    hint: 'They remove the need for a separate tapping operation.'
  },
  {
    topic: 'Week 10 – Joining Processes (Thermoplastic Fusion, Mechanical Assembly, Adhesives, Fasteners)',
    question: 'Snap-fit features rely on elastic ______ of the plastic during assembly.',
    type: 'fill',
    answer: 'deflection',
    acceptableAnswers: ['deflection', 'flexing'],
    hint: 'The part bends temporarily and then snaps into place.'
  }



];
