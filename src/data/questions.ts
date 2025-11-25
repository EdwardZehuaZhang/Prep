import { Question } from '../types/Question';

export const questions: Question[] = [
  // Joining Processes
  {
    topic: 'Joining Processes',
    question: 'What are the three broad joining options available?',
    type: 'fill',
    answer: ['thermo', 'adhesives', 'mechanical'],
    hint: 'Think about the three main categories shown in the joining overview'
  },
  {
    topic: 'Joining Processes',
    question: 'Ultrasonic welding uses high frequency vibrations at what range?',
    type: 'short',
    answer: '10-75 khz',
    acceptableAnswers: ['10-75', '10 to 75', 'ten to seventy-five'],
    hint: 'Look at the ultrasonic bonding section'
  },
  {
    topic: 'Joining Processes',
    question: 'In soldering, the filler metal must have a melting temperature below ___ °C or ___ °F.',
    type: 'fill',
    answer: ['455', '850'],
    hint: 'This is the temperature threshold that distinguishes soldering from brazing'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main difference between soldering and brazing?',
    type: 'short',
    answer: 'temperature',
    acceptableAnswers: ['temperature', 'heat', 'melting point', 'brazing uses higher temperature'],
    hint: 'One operates below 455°C, the other above it'
  },
  {
    topic: 'Joining Processes',
    question: 'Solder has ________, so the joint must be designed to support a load.',
    type: 'fill',
    answer: ['little strength'],
    hint: 'Think about the mechanical properties of solder'
  },
  {
    topic: 'Joining Processes',
    question: 'Electromagnetic welding uses ________ fields to produce heat.',
    type: 'fill',
    answer: ['high frequency', 'electromagnetic'],
    hint: 'The process name gives you a clue'
  },
  {
    topic: 'Joining Processes',
    question: 'Hot plate welding cycle is usually completed in ___ to ___ seconds.',
    type: 'fill',
    answer: ['15', '20'],
    hint: 'It\'s a relatively fast process'
  },
  {
    topic: 'Joining Processes',
    question: 'Press fits are held by ________ interface.',
    type: 'fill',
    answer: ['mechanical'],
    hint: 'No adhesive or heat is used'
  },
  {
    topic: 'Joining Processes',
    question: 'Aluminum rivets are preferred over steel because aluminum will more readily ________.',
    type: 'fill',
    answer: ['deform'],
    hint: 'Think about material ductility under high stress'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the seven key factors that influence successful ultrasonic welding?',
    type: 'short',
    answer: 'resin grade, surface cleanliness, uniform wall sections, simplicity of shape, weld time, hold time, clamping pressure',
    acceptableAnswers: ['resin grade, surface cleanliness, uniform walls, shape simplicity, weld time, hold time, pressure', 'material, cleanliness, walls, shape, weld time, hold time, pressure'],
    hint: 'Includes material properties, preparation, geometry, and process parameters'
  },
  {
    topic: 'Joining Processes',
    question: 'Vibration welding has a typical frequency range of ___-___ Hz.',
    type: 'fill',
    answer: ['100', '250'],
    hint: 'The frequency and displacement are low for this process'
  },
  {
    topic: 'Joining Processes',
    question: 'Vibration welding pushes surface contaminants like mold releases and paint out of the weld area using ________ motion.',
    type: 'fill',
    answer: ['reciprocating'],
    hint: 'This is a key advantage of the process'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main limitation of vibration welding?',
    type: 'short',
    answer: 'single plane',
    acceptableAnswers: ['single plane', 'limited to single plane', 'one plane only', 'flat surfaces'],
    hint: 'Think about the geometry of parts that can be welded'
  },
  {
    topic: 'Joining Processes',
    question: 'Which joint designs are usually suggested for spin welding?',
    type: 'short',
    answer: 'tongue and groove, scarf, shear',
    acceptableAnswers: ['tongue and groove, scarf, shear', 'tongue groove scarf shear', 'not butt joint'],
    hint: 'These keep linear speed differential to a minimum'
  },
  {
    topic: 'Joining Processes',
    question: 'Electromagnetic welding uses ferromagnetic particles in a ________ matrix.',
    type: 'fill',
    answer: ['thermoplastic'],
    hint: 'The matrix material matches the parts being joined'
  },
  {
    topic: 'Joining Processes',
    question: 'Induction bonding process occurs in ___ to ___ seconds.',
    type: 'fill',
    answer: ['3', '10'],
    hint: 'It\'s a very fast process'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the six thermoplastic fusion methods mentioned?',
    type: 'short',
    answer: 'ultrasonic, vibration, spin, electromagnetic, hot platen, staking',
    acceptableAnswers: ['ultrasonic vibration spin electromagnetic hot plate staking', 'ultrasonic vibration spin induction hot platen staking'],
    hint: 'Includes welding and assembly methods'
  },
  {
    topic: 'Joining Processes',
    question: 'Staking is the process of deforming a plastic stud or boss to ________ another part.',
    type: 'fill',
    answer: ['capture'],
    hint: 'The deformed part holds the other component'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the five thermoplastic mechanical assembly options?',
    type: 'short',
    answer: 'press-fits, inserts, snap fits, molded-in threads, fasteners',
    acceptableAnswers: ['press fits inserts snap fits threads fasteners', 'press fit insert snap fit thread fastener'],
    hint: 'No heat or adhesive required for these methods'
  },
  {
    topic: 'Joining Processes',
    question: 'Press fits do not provide a ________ seal.',
    type: 'fill',
    answer: ['hermetic'],
    hint: 'There is no physical bond at the interface'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the five insert installation methods?',
    type: 'short',
    answer: 'press fit, expansion, self-tapping, ultrasonic, thermal',
    acceptableAnswers: ['press expansion self-tapping ultrasonic thermal', 'press fit expansion insertion self tapping ultrasonic thermal'],
    hint: 'Includes mechanical and heat-based methods'
  },
  {
    topic: 'Joining Processes',
    question: 'The weakest insert installation methods are ________ and ________.',
    type: 'fill',
    answer: ['press fit', 'expansion'],
    hint: 'These are the fastest and easiest but least strong'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main disadvantage of molding-in inserts?',
    type: 'short',
    answer: 'high molded-in stress',
    acceptableAnswers: ['high stress', 'molded in stress', 'thermal expansion mismatch', 'increased cycle time'],
    hint: 'Due to different coefficients of thermal expansion'
  },
  {
    topic: 'Joining Processes',
    question: 'Snap fits can be designed for ________ assembly or ________ insertion and removal.',
    type: 'fill',
    answer: ['permanent', 'multiple'],
    hint: 'One-time or repeatable'
  },
  {
    topic: 'Joining Processes',
    question: 'The two basic classifications of self-tapping screws are ___ and ___.',
    type: 'fill',
    answer: ['thread forming', 'thread cutting'],
    hint: 'One forms threads, the other cuts them'
  },
  {
    topic: 'Joining Processes',
    question: 'Thread forming screws can induce high ________ ________ on the plastic part.',
    type: 'fill',
    answer: ['residual', 'stresses'],
    hint: 'A concern especially in harder plastics'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of screw head is recommended for clamped fastener designs?',
    type: 'short',
    answer: 'pan head or truss head',
    acceptableAnswers: ['pan head', 'truss head', 'pan or truss', 'large diameter head'],
    hint: 'Helps distribute the load'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the nine advantages of adhesives?',
    type: 'short',
    answer: 'smooth, join thin parts, no surface defacement, no contour disturbance, uniform stress, join dissimilar materials, corrosion protection, seal, dampening',
    acceptableAnswers: ['inherently smooth join fragile do not deface distribute stress join dissimilar corrosion seal dampening', 'smooth thin fragile stress dissimilar corrosion seal dampening'],
    hint: 'Includes aesthetic, structural, and protective benefits'
  },
  {
    topic: 'Joining Processes',
    question: 'Adhesive joints should not be subjected to ________ forces.',
    type: 'fill',
    answer: ['peeling'],
    hint: 'The weakest loading condition for adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the five common families of adhesives?',
    type: 'short',
    answer: 'epoxy, urethane, anaerobic, cyanoacrylate, acrylic',
    acceptableAnswers: ['epoxies urethanes anaerobics cyanoacrylates acrylics', 'epoxy polyurethane anaerobic super glue acrylic'],
    hint: 'Includes super glues and UV-curable types'
  },
  {
    topic: 'Joining Processes',
    question: 'Epoxies cure as the result of a ________ ________.',
    type: 'fill',
    answer: ['chemical', 'reaction'],
    hint: 'Unlike solvent-based adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'Cyanoacrylates have a typical setting time of ___ or ___ seconds.',
    type: 'fill',
    answer: ['2', '3'],
    hint: 'They are known as fast-curing convenience adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'Anaerobic adhesives are triggered by the absence of ________.',
    type: 'fill',
    answer: ['oxygen'],
    hint: 'This is their unique curing mechanism'
  },
  {
    topic: 'Joining Processes',
    question: 'Cyanoacrylates cure when initiated by ________ ________.',
    type: 'fill',
    answer: ['surface', 'moisture'],
    hint: 'Even humidity in the air can trigger it'
  },
  {
    topic: 'Joining Processes',
    question: 'UV curing is typically completed in ___ to ___ seconds.',
    type: 'fill',
    answer: ['3', '10'],
    hint: 'Light energy initiates polymerization'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the six adhesive surface preparation methods?',
    type: 'short',
    answer: 'degreasing, abrasion, flame treatment, corona discharge, plasma treatment, chemical etch',
    acceptableAnswers: ['degreasing abrasion flame corona plasma chemical', 'cleaning abrading flame corona plasma etch'],
    hint: 'Includes mechanical, thermal, electrical, and chemical methods'
  },
  {
    topic: 'Joining Processes',
    question: 'Acrylic adhesives have a full cure time of ___ minutes or less.',
    type: 'fill',
    answer: ['30'],
    hint: 'Very rapid curing at room temperature'
  },
  {
    topic: 'Joining Processes',
    question: 'What effective solvents can be used for bonding ABS?',
    type: 'short',
    answer: 'acetone, methylene chloride, MEK',
    acceptableAnswers: ['acetone methylene chloride MEK', 'acetone methylene mek', 'acetone and MEK'],
    hint: 'Three common organic solvents'
  },
  {
    topic: 'Joining Processes',
    question: 'Typically more than ___% of total production time is spent on mechanical fastening.',
    type: 'fill',
    answer: ['50'],
    hint: 'It\'s the majority of manufacturing time'
  },
  {
    topic: 'Joining Processes',
    question: 'Mechanical fasteners usually represent less than ___% of total in-place cost.',
    type: 'fill',
    answer: ['5'],
    hint: 'The parts are cheap, but assembly is expensive'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the four types of non-threaded fasteners?',
    type: 'short',
    answer: 'rivets, pins, retaining rings, washers',
    acceptableAnswers: ['rivets pins retaining rings washers', 'rivet pin ring washer'],
    hint: 'Held by friction within the assembly'
  },
  {
    topic: 'Joining Processes',
    question: 'The two main types of rivets are ________ and ________.',
    type: 'fill',
    answer: ['solid', 'hollow'],
    hint: 'Based on internal structure'
  },
  {
    topic: 'Joining Processes',
    question: 'Blind rivets are also called ________ rivets.',
    type: 'fill',
    answer: ['pop'],
    hint: 'Named after the sound they make'
  },
  {
    topic: 'Joining Processes',
    question: 'To induce residual compressive stresses in critical rivet applications, the hole is slightly ________ by passing a larger pin through it.',
    type: 'fill',
    answer: ['expanded'],
    hint: 'Prevents fatigue failure'
  },
  {
    topic: 'Joining Processes',
    question: 'An ultrasonic unit can cost as much as $________.',
    type: 'fill',
    answer: ['20,000', '20000'],
    hint: 'Plus additional expense for customized horn and fixturing'
  },
  {
    topic: 'Joining Processes',
    question: 'Vibration welding can handle parts up to ___ mm x ___ mm.',
    type: 'fill',
    answer: ['610', '305'],
    hint: 'Standard equipment size limits'
  },
  {
    topic: 'Joining Processes',
    question: 'Properly designed vibration weld joints can provide ________ seals.',
    type: 'fill',
    answer: ['hermetic'],
    hint: 'A key advantage of this process'
  },
  {
    topic: 'Joining Processes',
    question: 'What assembly method was used before welding technology was invented?',
    type: 'short',
    answer: 'rivets',
    acceptableAnswers: ['rivets', 'riveting'],
    hint: 'Still important in aerospace applications'
  },
  {
    topic: 'Joining Processes',
    question: 'Urethanes are primarily used in applications requiring high strength and ________.',
    type: 'fill',
    answer: ['flexibility'],
    hint: 'A key characteristic of polyurethane adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'Epoxy adhesives have a temperature limit of over ___°C.',
    type: 'fill',
    answer: ['200'],
    hint: 'One of the highest temperature-resistant adhesive families'
  },
  
  // Materials Properties
  {
    topic: 'Materials Properties',
    question: 'The six major groups of material properties are: Physical, Mechanical, Technological, Chemical, ___, and ___.',
    type: 'fill',
    answer: ['economic', 'aesthetic'],
    hint: 'One relates to cost, the other to appearance'
  },
  {
    topic: 'Materials Properties',
    question: 'What is the formula for density?',
    type: 'short',
    answer: 'mass/volume',
    acceptableAnswers: ['mass/volume', 'mass divided by volume', 'm/v'],
    hint: 'It relates mass to the space it occupies'
  },
  {
    topic: 'Materials Properties',
    question: 'The ability of a material to conduct heat is called ___ ___.',
    type: 'fill',
    answer: ['thermal', 'conductivity'],
    hint: 'Copper has high values, wood has low values'
  },
  {
    topic: 'Materials Properties',
    question: 'What is the symbol used for stress?',
    type: 'short',
    answer: 'σ',
    acceptableAnswers: ['σ', 'sigma'],
    hint: 'It\'s a Greek letter'
  },
  {
    topic: 'Materials Properties',
    question: 'Copper is used for electrical wires because of its excellent electrical ________.',
    type: 'fill',
    answer: ['conductivity'],
    hint: 'A property related to electron flow'
  },
  {
    topic: 'Materials Properties',
    question: 'The ability of a material to withstand plastic deformation by tension without rupture is called ________.',
    type: 'fill',
    answer: ['ductility'],
    hint: 'Wire drawing requires this property'
  },
  {
    topic: 'Materials Properties',
    question: 'A brittle material will ________ with no plastic deformation.',
    type: 'fill',
    answer: ['fracture'],
    hint: 'Glass is an example of this type of material'
  },
  {
    topic: 'Materials Properties',
    question: 'The modulus of elasticity is a measure of the ________ of a material.',
    type: 'fill',
    answer: ['stiffness'],
    hint: 'It relates to how much a material deflects under load'
  },
  
  // Casting Processes
  {
    topic: 'Casting Processes',
    question: 'What are the three ways to form metals?',
    type: 'fill',
    answer: ['liquid', 'plastic', 'solid'],
    hint: 'Think about the different states of the material during forming'
  },
  {
    topic: 'Casting Processes',
    question: 'Cast irons are iron-carbon alloys with more than ___% by weight of carbon.',
    type: 'fill',
    answer: ['2'],
    hint: 'Above this percentage, the material becomes too brittle for most fabrication'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the main advantage of investment casting?',
    type: 'short',
    answer: 'precision',
    acceptableAnswers: ['precision', 'accuracy', 'tight tolerances', 'good surface quality'],
    hint: 'It\'s also called precision casting'
  },
  {
    topic: 'Casting Processes',
    question: 'In die casting, what materials are typically cast?',
    type: 'short',
    answer: 'nonferrous',
    acceptableAnswers: ['nonferrous', 'non-ferrous', 'aluminum zinc', 'low melting point'],
    hint: 'Think about temperature limitations of the mold'
  },
  {
    topic: 'Casting Processes',
    question: 'Casting is often the most economical way to manufacture a ________ object.',
    type: 'fill',
    answer: ['complex'],
    hint: 'Think about shapes that are hard to machine'
  },
  {
    topic: 'Casting Processes',
    question: 'Gray iron should be considered for parts requiring good machinability but not involving ________ loads.',
    type: 'fill',
    answer: ['shock'],
    hint: 'Gray iron is brittle'
  },
  {
    topic: 'Casting Processes',
    question: 'Centrifugal casting is mainly used for ________ production volumes.',
    type: 'fill',
    answer: ['low'],
    hint: 'It\'s not a high-volume process'
  },

  // Polymers
  {
    topic: 'Polymers',
    question: 'The two main types of polymers are ___ and ___.',
    type: 'fill',
    answer: ['thermoplastics', 'thermosets'],
    hint: 'One can be remelted, the other cannot'
  },
  {
    topic: 'Polymers',
    question: 'What is the main difference between thermoplastics and thermosets?',
    type: 'short',
    answer: 'remeltability',
    acceptableAnswers: ['remeltability', 'can be remelted', 'thermoplastics can be remelted', 'cross-linking'],
    hint: 'Think about what happens when you heat them again'
  },
  {
    topic: 'Polymers',
    question: 'Injection molding consists of ___ major steps.',
    type: 'fill',
    answer: ['6', 'six'],
    hint: 'Clamping, injection, dwelling, cooling, mold opening, and ejection'
  },
  {
    topic: 'Polymers',
    question: 'What process is used to make bottles?',
    type: 'short',
    answer: 'blow molding',
    acceptableAnswers: ['blow molding', 'blow moulding', 'extrusion blow molding'],
    hint: 'Air pressure expands heated plastic into a mold'
  },
  {
    topic: 'Polymers',
    question: 'Once thermosets are formed they cannot be ________.',
    type: 'fill',
    answer: ['remelted'],
    hint: 'This is what distinguishes them from thermoplastics'
  },
  {
    topic: 'Polymers',
    question: 'Injection molding provides ________ tolerances that are repeatable.',
    type: 'fill',
    answer: ['high'],
    hint: 'One of the main advantages of the process'
  },
  {
    topic: 'Polymers',
    question: 'Thermoforming uses ________ and negative force to shape plastic.',
    type: 'fill',
    answer: ['heat'],
    hint: 'The plastic must be softened first'
  },
  {
    topic: 'Polymers',
    question: 'Phenolic was the first completely man-made thermosetting plastic with the tradename ________.',
    type: 'fill',
    answer: ['bakelite'],
    hint: 'Invented by Leo Baekeland in 1907'
  },
  {
    topic: 'Polymers',
    question: 'Vulcanization makes rubber more ________ and resistant to chemical attack.',
    type: 'fill',
    answer: ['durable'],
    hint: 'This process was discovered by Charles Goodyear'
  },

  // Metals
  {
    topic: 'Metals',
    question: 'Steel is an alloy of ___ and ___.',
    type: 'fill',
    answer: ['iron', 'carbon'],
    hint: 'The base metal and the element that provides hardness'
  },
  {
    topic: 'Metals',
    question: 'What is the carbon content range for steel?',
    type: 'short',
    answer: '0.06-2.0',
    acceptableAnswers: ['0.06-2.0', '0.06 to 2.0', '0.06-2', 'point zero six to two percent'],
    hint: 'Below 0.06% is pure iron, above 2% is cast iron'
  },
  {
    topic: 'Metals',
    question: 'The three common unit cells in metals are BCC, FCC, and ___.',
    type: 'fill',
    answer: ['hcp'],
    hint: 'Hexagonal close-packed'
  },
  {
    topic: 'Metals',
    question: 'What is the lightest structural metal available?',
    type: 'short',
    answer: 'magnesium',
    acceptableAnswers: ['magnesium', 'mg'],
    hint: 'Used extensively in transportation and recreation industries'
  },

  // Machining
  {
    topic: 'Machining',
    question: 'The four sub-groups of cutting are: Flame/Thermo, Sheet, ___, and ___.',
    type: 'fill',
    answer: ['chip forming', 'nonchip forming'],
    hint: 'One removes chips, the other doesn\'t'
  },
  {
    topic: 'Machining',
    question: 'What is the typical machining tolerance achieved with computer control?',
    type: 'short',
    answer: '0.01mm',
    acceptableAnswers: ['0.01mm', '0.01', 'point zero one'],
    hint: 'In the past, 0.1mm was considered normal'
  },
  {
    topic: 'Machining',
    question: 'EDM stands for ___ ___ ___.',
    type: 'fill',
    answer: ['electrical', 'discharge', 'machining'],
    hint: 'Uses spark discharges to erode metal'
  },
  {
    topic: 'Machining',
    question: 'What cutting process uses pure water with abrasive at high velocity?',
    type: 'short',
    answer: 'waterjet',
    acceptableAnswers: ['waterjet', 'water jet', 'hdm', 'hydrodynamic machining'],
    hint: 'Can cut virtually any material without heat'
  },

  // Forging
  {
    topic: 'Forging',
    question: 'Plastic state forming is done at ___ temperature but below ___ temperature.',
    type: 'fill',
    answer: ['elevated', 'melt'],
    hint: 'Hot enough to deform, but not hot enough to liquefy'
  },
  {
    topic: 'Forging',
    question: 'What is the main advantage of forging over casting in terms of grain structure?',
    type: 'short',
    answer: 'grain follows shape',
    acceptableAnswers: ['grain follows shape', 'aligned grains', 'grain alignment', 'stronger'],
    hint: 'Think about how grain direction affects strength'
  },
  {
    topic: 'Forging',
    question: 'The two kinds of rolling are ___ and ___.',
    type: 'fill',
    answer: ['hot', 'cold'],
    hint: 'Temperature-based classification'
  },

  // Ceramics
  {
    topic: 'Ceramics',
    question: 'The three main types of engineering ceramics are: Metal Oxide Ceramics, ___, and ___.',
    type: 'fill',
    answer: ['glass ceramics', 'carbides and nitrides'],
    hint: 'One includes glass-based materials, the other includes boron and silicon compounds'
  },
  {
    topic: 'Ceramics',
    question: 'What is the main disadvantage of ceramic materials?',
    type: 'short',
    answer: 'brittleness',
    acceptableAnswers: ['brittleness', 'brittle', 'fragile', 'low toughness'],
    hint: 'They break easily under impact'
  },

  // Composites
  {
    topic: 'Composites',
    question: 'The most common reinforcement for polymer composites is ________ fibers.',
    type: 'fill',
    answer: ['glass'],
    hint: 'Used in fiberglass boats and cars'
  },
  {
    topic: 'Composites',
    question: 'Kevlar is an ________ fiber with tensile strength of about 3102 MPa.',
    type: 'fill',
    answer: ['aramid'],
    hint: 'Used in bulletproof vests and canoes'
  },
  {
    topic: 'Composites',
    question: 'Epoxy resins have minimal physical size change on polymerization, as low as ____%.',
    type: 'fill',
    answer: ['0.01'],
    hint: 'Very low shrinkage rate'
  },

  // Natural Materials
  {
    topic: 'Natural Materials',
    question: 'Organic materials originated from ________ organisms.',
    type: 'fill',
    answer: ['living'],
    hint: 'Plants and animals'
  },
  {
    topic: 'Natural Materials',
    question: 'Cork material is harvested from the ________ tree.',
    type: 'fill',
    answer: ['cork oak'],
    hint: 'Portugal produces 50% worldwide'
  },
  {
    topic: 'Natural Materials',
    question: 'Leather is created through the ________ of hides and skins.',
    type: 'fill',
    answer: ['tanning'],
    hint: 'Prevents decomposition of the material'
  },
  {
    topic: 'Natural Materials',
    question: 'Diamond has a hardness of ___ on Mohs scale.',
    type: 'fill',
    answer: ['10'],
    hint: 'It\'s the hardest natural material'
  },

  // Course Information
  {
    topic: 'Course Info',
    question: 'The final examination is ___ minutes long.',
    type: 'fill',
    answer: ['90', 'ninety'],
    hint: 'Check the course outline'
  },
  {
    topic: 'Course Info',
    question: 'The CA component is worth ___% and the final exam is worth ___% of the total grade.',
    type: 'fill',
    answer: ['60', '40'],
    hint: 'Continuous assessment is worth more'
  },

  // Material & Method Selection (Multiple Choice)
  {
    topic: 'Material Selection',
    question: 'Which joining method would be BEST for joining two different types of materials (e.g., metal to plastic)?',
    type: 'multiple-choice',
    options: ['Ultrasonic welding', 'Adhesive bonding', 'Spin welding', 'Hot plate welding'],
    answer: 'Adhesive bonding',
    hint: 'Consider which methods can join dissimilar materials'
  },
  {
    topic: 'Material Selection',
    question: 'For a product requiring repeated assembly and disassembly, which method is MOST appropriate?',
    type: 'multiple-choice',
    options: ['Adhesive bonding', 'Ultrasonic welding', 'Mechanical fasteners', 'Solvent bonding'],
    answer: 'Mechanical fasteners',
    hint: 'Think about which methods are reversible'
  },
  {
    topic: 'Material Selection',
    question: 'Which adhesive family has the HIGHEST temperature resistance?',
    type: 'multiple-choice',
    options: ['Cyanoacrylate (80°C)', 'Acrylic (100°C)', 'Urethane (100°C)', 'Epoxy (200°C+)'],
    answer: 'Epoxy (200°C+)',
    hint: 'Look at the temperature limits in the adhesive families table'
  },
  {
    topic: 'Material Selection',
    question: 'When surface appearance is critical and no visible fasteners are desired, which method is BEST?',
    type: 'multiple-choice',
    options: ['Mechanical fasteners', 'Rivets', 'Snap fits', 'Screws'],
    answer: 'Snap fits',
    hint: 'Consider which method can be completely hidden'
  },
  {
    topic: 'Material Selection',
    question: 'For joining large thermoplastic parts (up to 610mm x 305mm) with hermetic seals, which method is ideal?',
    type: 'multiple-choice',
    options: ['Ultrasonic welding', 'Vibration welding', 'Spin welding', 'Staking'],
    answer: 'Vibration welding',
    hint: 'Consider the size capabilities mentioned for each process'
  },
  {
    topic: 'Material Selection',
    question: 'Which insert installation method provides the STRONGEST bond?',
    type: 'multiple-choice',
    options: ['Press fit insertion', 'Expansion insertion', 'Ultrasonic insertion', 'Self-tapping insertion'],
    answer: 'Ultrasonic insertion',
    hint: 'Press fit and expansion are mentioned as the weakest'
  },
  {
    topic: 'Material Selection',
    question: 'For cylindrical parts that need to be joined, which welding method is MOST suitable?',
    type: 'multiple-choice',
    options: ['Vibration welding', 'Hot plate welding', 'Spin welding', 'Electromagnetic welding'],
    answer: 'Spin welding',
    hint: 'Think about the rotational nature of cylindrical parts'
  },
  {
    topic: 'Material Selection',
    question: 'When joining parts with surface contaminants like paint or mold release, which method has an advantage?',
    type: 'multiple-choice',
    options: ['Hot plate welding', 'Adhesive bonding', 'Vibration welding', 'Ultrasonic welding'],
    answer: 'Vibration welding',
    hint: 'This method pushes contaminants out of the weld area'
  },
  {
    topic: 'Material Selection',
    question: 'For the FASTEST cure time at room temperature, which adhesive should you choose?',
    type: 'multiple-choice',
    options: ['Epoxy (5 min+)', 'Acrylic (60-90 sec)', 'Cyanoacrylate (2-3 sec)', 'Urethane (5 min+)'],
    answer: 'Cyanoacrylate (2-3 sec)',
    hint: 'Also known as super glue'
  },
  {
    topic: 'Material Selection',
    question: 'Which rivet material is preferred for plastic assemblies due to better deformation characteristics?',
    type: 'multiple-choice',
    options: ['Steel rivets', 'Aluminum rivets', 'Titanium rivets', 'Copper rivets'],
    answer: 'Aluminum rivets',
    hint: 'This material deforms more readily under stress'
  },
  {
    topic: 'Method Selection',
    question: 'For applications requiring high strength AND flexibility, which adhesive is best?',
    type: 'multiple-choice',
    options: ['Epoxy', 'Urethane', 'Anaerobic', 'Cyanoacrylate'],
    answer: 'Urethane',
    hint: 'This is the primary use case for this adhesive family'
  },
  {
    topic: 'Method Selection',
    question: 'Which joining method is triggered by the absence of oxygen?',
    type: 'multiple-choice',
    options: ['UV curable adhesive', 'Anaerobic adhesive', 'Cyanoacrylate', 'Thermal welding'],
    answer: 'Anaerobic adhesive',
    hint: 'The name gives you a clue about the curing mechanism'
  },
  {
    topic: 'Method Selection',
    question: 'For a one-time permanent assembly with invisible joints, which is MOST suitable?',
    type: 'multiple-choice',
    options: ['Threaded fasteners', 'Snap fits (permanent type)', 'Rivets', 'Bolts'],
    answer: 'Snap fits (permanent type)',
    hint: 'Consider which method leaves no visible external features'
  },
  {
    topic: 'Method Selection',
    question: 'When cost is the PRIMARY concern and parts are under 5% of total cost, what drives expense?',
    type: 'multiple-choice',
    options: ['Material cost', 'Fastener cost', 'Assembly time', 'Design cost'],
    answer: 'Assembly time',
    hint: 'Assembly and fastening account for the majority of manufacturing cost'
  },
  {
    topic: 'Method Selection',
    question: 'For joining ABS plastic parts, which solvent is NOT effective?',
    type: 'multiple-choice',
    options: ['Acetone', 'Methylene Chloride', 'MEK', 'Water'],
    answer: 'Water',
    hint: 'Three organic solvents are listed as effective for ABS'
  },
  {
    topic: 'Method Selection',
    question: 'Which welding method is limited to a single plane geometry?',
    type: 'multiple-choice',
    options: ['Ultrasonic welding', 'Vibration welding', 'Spin welding', 'Electromagnetic welding'],
    answer: 'Vibration welding',
    hint: 'This is mentioned as its main limitation'
  },
  {
    topic: 'Method Selection',
    question: 'For electrical assemblies requiring repeated disassembly, which fastener type is BEST?',
    type: 'multiple-choice',
    options: ['Thread cutting screws', 'Thread forming screws', 'Press fits', 'Rivets'],
    answer: 'Thread forming screws',
    hint: 'Thread cutting can create secondary threads on reinsertion'
  },
  {
    topic: 'Method Selection',
    question: 'When parts have complex or irregular surfaces, which welding method CANNOT be used?',
    type: 'multiple-choice',
    options: ['Ultrasonic welding', 'Vibration welding', 'Electromagnetic welding', 'Hot plate welding'],
    answer: 'Vibration welding',
    hint: 'Mating surfaces must be parallel for this method'
  },
  {
    topic: 'Method Selection',
    question: 'Which adhesive rarely needs primers, making surface preparation easier?',
    type: 'multiple-choice',
    options: ['Epoxy', 'Urethane', 'Acrylic', 'Anaerobic'],
    answer: 'Acrylic',
    hint: 'This is mentioned as a key advantage of improved acrylics'
  },
  {
    topic: 'Method Selection',
    question: 'For parts requiring the LOWEST shrinkage during curing (0.01%), which resin is best?',
    type: 'multiple-choice',
    options: ['Polyester resin', 'Epoxy resin', 'Vinyl ester', 'Phenolic resin'],
    answer: 'Epoxy resin',
    hint: 'Used in high-precision composite applications'
  },

  // Expanded questions - using alternative correct answers from related topics
  {
    topic: 'Material Selection',
    question: 'For permanent joints where disassembly is NOT required, which method would be MOST appropriate?',
    type: 'multiple-choice',
    options: ['Mechanical fasteners', 'Snap fits', 'Adhesive bonding', 'Press fits'],
    answer: 'Adhesive bonding',
    hint: 'This method can provide hermetic seals and distributes stress uniformly'
  },
  {
    topic: 'Material Selection',
    question: 'Which welding method is BEST suited for very fast cycle times with customized horns?',
    type: 'multiple-choice',
    options: ['Vibration welding', 'Hot plate welding', 'Ultrasonic welding', 'Spin welding'],
    answer: 'Ultrasonic welding',
    hint: 'One of the most common methods of assembling thermoplastic parts'
  },
  {
    topic: 'Material Selection',
    question: 'For joining thermoplastic parts that are circular or cylindrical, which method is ideal?',
    type: 'multiple-choice',
    options: ['Vibration welding', 'Ultrasonic welding', 'Electromagnetic welding', 'Spin welding'],
    answer: 'Spin welding',
    hint: 'This method involves rotating one part against a fixed part'
  },
  {
    topic: 'Material Selection',
    question: 'When a hermetic seal is required without repeated disassembly, which method is preferred?',
    type: 'multiple-choice',
    options: ['Press fits', 'Mechanical fasteners', 'Solvent bonding', 'Snap fits'],
    answer: 'Solvent bonding',
    hint: 'Creates a pure material-to-material bond for amorphous thermoplastics'
  },
  {
    topic: 'Method Selection',
    question: 'The strongest insert installation method for thermoplastics is:',
    type: 'multiple-choice',
    options: ['Press fit insertion', 'Expansion insertion', 'Thermal insertion', 'Ultrasonic insertion'],
    answer: 'Ultrasonic insertion',
    hint: 'Press fit and expansion are the weakest methods'
  },
  {
    topic: 'Method Selection',
    question: 'Which insert installation method involves placing inserts on core pins during molding?',
    type: 'multiple-choice',
    options: ['Ultrasonic insertion', 'Thermal insertion', 'Molding-in insertion', 'Press fit insertion'],
    answer: 'Molding-in insertion',
    hint: 'Can create high molded-in stresses due to thermal expansion differences'
  },
  {
    topic: 'Method Selection',
    question: 'For applications where a primer is difficult to apply, which adhesive family is BEST?',
    type: 'multiple-choice',
    options: ['Epoxy', 'Cyanoacrylate', 'Acrylic', 'Urethane'],
    answer: 'Acrylic',
    hint: 'This adhesive rarely needs primers'
  },
  {
    topic: 'Method Selection',
    question: 'Which adhesive cures FASTEST with UV light exposure (3-10 seconds)?',
    type: 'multiple-choice',
    options: ['Epoxy', 'Anaerobic', 'UV curable adhesive', 'Urethane'],
    answer: 'UV curable adhesive',
    hint: 'Uses light energy to initiate polymerization'
  },
  {
    topic: 'Method Selection',
    question: 'For joining metals that require heat curing at 148°C for one hour, which adhesive is appropriate?',
    type: 'multiple-choice',
    options: ['Two-part epoxy', 'One-part epoxy', 'Cyanoacrylate', 'Acrylic'],
    answer: 'One-part epoxy',
    hint: 'Two-part epoxies cure at room temperature through chemical reaction'
  },
  {
    topic: 'Material Selection',
    question: 'Which welding method is BEST when parts cannot be exposed to high contact temperatures?',
    type: 'multiple-choice',
    options: ['Hot plate welding', 'Thermal staking', 'Spin welding', 'Ultrasonic staking'],
    answer: 'Ultrasonic staking',
    hint: 'The contact tip stays relatively cool and forms a clean head'
  },
  {
    topic: 'Material Selection',
    question: 'For butt joints in flat thermoplastic parts, which welding method is commonly used?',
    type: 'multiple-choice',
    options: ['Spin welding', 'Vibration welding', 'Hot plate welding', 'Electromagnetic welding'],
    answer: 'Hot plate welding',
    hint: 'Flat platens heat the surfaces; cycle time is 15-20 seconds'
  },
  {
    topic: 'Method Selection',
    question: 'Which welding process completes in the FASTEST time (3-10 seconds)?',
    type: 'multiple-choice',
    options: ['Hot plate welding (15-20 sec)', 'Vibration welding', 'Electromagnetic welding (3-10 sec)', 'Spin welding'],
    answer: 'Electromagnetic welding (3-10 sec)',
    hint: 'Uses ferromagnetic particles in a thermoplastic matrix'
  },
  {
    topic: 'Method Selection',
    question: 'For parts with internal walls that need welding simultaneously with external walls, which method is BEST?',
    type: 'multiple-choice',
    options: ['Spin welding', 'Ultrasonic welding', 'Vibration welding', 'Hot plate welding'],
    answer: 'Vibration welding',
    hint: 'This is listed as one of the advantages of vibration welding'
  },
  {
    topic: 'Material Selection',
    question: 'Which joint design provides the STRONGEST spin weld?',
    type: 'multiple-choice',
    options: ['Butt joint', 'Tongue and groove joint', 'Simple overlap', 'Step joint'],
    answer: 'Tongue and groove joint',
    hint: 'Butt joints are weak; tongue and groove, scarf, and shear joints are suggested'
  },
  {
    topic: 'Method Selection',
    question: 'For self-tapping applications in softer, more ductile plastics, which screw type is acceptable?',
    type: 'multiple-choice',
    options: ['Thread cutting screws', 'Wood screws', 'Thread forming screws', 'Machine screws'],
    answer: 'Thread forming screws',
    hint: 'Can induce high residual stresses but these subside in ductile plastics'
  },
  {
    topic: 'Method Selection',
    question: 'Which fastener type is best for distributing load and preventing stress concentration?',
    type: 'multiple-choice',
    options: ['Flat head screws', 'Countersunk screws', 'Pan head or truss head screws', 'Socket head screws'],
    answer: 'Pan head or truss head screws',
    hint: 'Recommended for clamped fastener designs with washers'
  },
  {
    topic: 'Material Selection',
    question: 'For one-sided access during assembly, which fastener is MOST appropriate?',
    type: 'multiple-choice',
    options: ['Solid rivets', 'Bolts and nuts', 'Blind rivets (pop rivets)', 'Through-bolts'],
    answer: 'Blind rivets (pop rivets)',
    hint: 'Can be inserted from one side only'
  },
  {
    topic: 'Method Selection',
    question: 'Which surface preparation method uses a wet acid solution for adhesive bonding?',
    type: 'multiple-choice',
    options: ['Flame treatment', 'Corona discharge', 'Chemical etch', 'Plasma treatment'],
    answer: 'Chemical etch',
    hint: 'Forms highly oxidized or complex inorganic surface layers'
  },
  {
    topic: 'Method Selection',
    question: 'Which surface preparation uses vacuum chamber with inert gas for adhesive bonding?',
    type: 'multiple-choice',
    options: ['Flame treatment', 'Corona discharge', 'Plasma treatment', 'Abrasion'],
    answer: 'Plasma treatment',
    hint: 'High electrical tension causes electron bombardment and surface oxidation'
  },
  {
    topic: 'Method Selection',
    question: 'For oxidizing surfaces between two electrodes before bonding, which method is used?',
    type: 'multiple-choice',
    options: ['Flame treatment', 'Corona discharge', 'Plasma treatment', 'Chemical etch'],
    answer: 'Corona discharge',
    hint: 'Bombardment of electrons and ions causes surface oxidation'
  },
  {
    topic: 'Material Selection',
    question: 'Which adhesive family provides the most versatility in modifying bond strength and electrical conductivity?',
    type: 'multiple-choice',
    options: ['Urethane', 'Epoxy', 'Cyanoacrylate', 'Anaerobic'],
    answer: 'Epoxy',
    hint: 'Known for versatility and available in one- or two-part formulations'
  },
  {
    topic: 'Method Selection',
    question: 'For applications requiring moisture resistance with good impact resistance, which adhesive is BEST?',
    type: 'multiple-choice',
    options: ['Cyanoacrylate', 'Anaerobic', 'Epoxy', 'Acrylic'],
    answer: 'Anaerobic',
    hint: 'Check the adhesive families comparison table'
  },
  {
    topic: 'Joining Processes',
    question: 'The expansion insert installation method works by:',
    type: 'multiple-choice',
    options: ['Pressing into undersized hole', 'Expanding flanges when screw is driven', 'Ultrasonic vibration', 'Heat melting plastic'],
    answer: 'Expanding flanges when screw is driven',
    hint: 'Insert is placed in slightly larger hole than its major diameter'
  },
  {
    topic: 'Joining Processes',
    question: 'Self-tapping insert installation is characterized by:',
    type: 'multiple-choice',
    options: ['Weakest bond strength', 'Uses ultrasonic energy', 'Threads cut into plastic', 'Requires heat source'],
    answer: 'Threads cut into plastic',
    hint: 'Different from press fit and expansion methods'
  },
  {
    topic: 'Joining Processes',
    question: 'Thermal insert installation works by:',
    type: 'multiple-choice',
    options: ['Ultrasonic vibrations melt plastic', 'Heat source applied to insert melts thin layer', 'Press fit with friction', 'Molding part around insert'],
    answer: 'Heat source applied to insert melts thin layer',
    hint: 'A less expensive alternative to ultrasonics'
  },
  {
    topic: 'Material Selection',
    question: 'For hermetic seals in large flat thermoplastic assemblies, which method is ideal?',
    type: 'multiple-choice',
    options: ['Spin welding', 'Snap fits', 'Vibration welding', 'Mechanical fasteners'],
    answer: 'Vibration welding',
    hint: 'Standard equipment handles up to 610mm x 305mm parts with hermetic seals'
  },
  {
    topic: 'Joining Processes',
    question: 'Which joint configuration should be AVOIDED in adhesive bonding?',
    type: 'multiple-choice',
    options: ['Shear joints', 'Compressive joints', 'Tensile joints', 'Peeling joints'],
    answer: 'Peeling joints',
    hint: 'Joints should withstand shear, compressive, and tensile forces, but not this'
  },
  {
    topic: 'Method Selection',
    question: 'For very fast setting (2-3 seconds) triggered by surface moisture, which adhesive is used?',
    type: 'multiple-choice',
    options: ['Epoxy', 'Urethane', 'Cyanoacrylate', 'Anaerobic'],
    answer: 'Cyanoacrylate',
    hint: 'Also known as super glue; full cure in 24 hours'
  },
  {
    topic: 'Method Selection',
    question: 'Which adhesive has the SHORTEST full cure time (30 minutes or less) at room temperature?',
    type: 'multiple-choice',
    options: ['Cyanoacrylate (24 hours)', 'Epoxy (varies)', 'Acrylic (30 min or less)', 'Urethane (varies)'],
    answer: 'Acrylic (30 min or less)',
    hint: 'Setting time is 60-90 seconds, full cure within 30 minutes'
  },
  {
    topic: 'Joining Processes',
    question: 'For creating a pure material-to-material bond in amorphous thermoplastics, which method is used?',
    type: 'multiple-choice',
    options: ['Adhesive bonding', 'Mechanical fastening', 'Solvent bonding', 'Thermal welding'],
    answer: 'Solvent bonding',
    hint: 'Solvent dissolves surfaces and allows material to flow together'
  },
  {
    topic: 'Joining Processes',
    question: 'Which welding method uses reciprocating motion to push contaminants out of the weld area?',
    type: 'multiple-choice',
    options: ['Ultrasonic welding', 'Spin welding', 'Vibration welding', 'Hot plate welding'],
    answer: 'Vibration welding',
    hint: 'Can handle mold releases, coatings, and even paint'
  },

  // Additional short answer questions
  {
    topic: 'Joining Processes',
    question: 'What is the main advantage of ultrasonic welding over heat staking?',
    type: 'short',
    answer: 'contact tip stays cool',
    acceptableAnswers: ['tip stays cool', 'cool tip', 'clean head', 'minimal sticking', 'no stringing'],
    hint: 'Think about temperature of the contact surface'
  },
  {
    topic: 'Joining Processes',
    question: 'Why are aluminum rivets preferred over steel for plastic assemblies?',
    type: 'short',
    answer: 'deforms more readily',
    acceptableAnswers: ['more readily deforms', 'deforms easier', 'more ductile', 'easier to deform'],
    hint: 'Consider material properties under high stress'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of joint design provides the weakest spin weld?',
    type: 'short',
    answer: 'butt joint',
    acceptableAnswers: ['butt', 'butt joint'],
    hint: 'Tongue and groove, scarf, and shear are stronger'
  },
  {
    topic: 'Joining Processes',
    question: 'What triggers the curing of anaerobic adhesives?',
    type: 'short',
    answer: 'absence of oxygen',
    acceptableAnswers: ['no oxygen', 'oxygen absence', 'lack of oxygen', 'anaerobic conditions'],
    hint: 'The name gives you a clue'
  },
  {
    topic: 'Joining Processes',
    question: 'What triggers the curing of cyanoacrylate adhesives?',
    type: 'short',
    answer: 'surface moisture',
    acceptableAnswers: ['moisture', 'humidity', 'water', 'surface water'],
    hint: 'Even humidity in the air can trigger it'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the typical cost of an ultrasonic welding unit?',
    type: 'short',
    answer: '$20,000',
    acceptableAnswers: ['20000', '20,000', 'twenty thousand', '$20000'],
    hint: 'Plus additional expense for horn and fixturing'
  },
  {
    topic: 'Joining Processes',
    question: 'How long does the electromagnetic welding process typically take?',
    type: 'short',
    answer: '3 to 10 seconds',
    acceptableAnswers: ['3-10 seconds', '3 to 10 sec', '3-10 sec', 'three to ten seconds'],
    hint: 'Very fast and efficient process'
  },
  {
    topic: 'Joining Processes',
    question: 'What matrix material is used in electromagnetic welding gaskets?',
    type: 'short',
    answer: 'thermoplastic',
    acceptableAnswers: ['thermoplastic', 'plastic', 'same as parts being joined'],
    hint: 'Contains ferromagnetic particles in this material'
  },
  {
    topic: 'Joining Processes',
    question: 'What percentage of production time is typically spent on mechanical fastening?',
    type: 'short',
    answer: 'more than 50%',
    acceptableAnswers: ['over 50%', '50%+', 'majority', 'more than half'],
    hint: 'It\'s the majority of manufacturing time'
  },
  {
    topic: 'Joining Processes',
    question: 'What percentage of total in-place cost do mechanical fasteners represent?',
    type: 'short',
    answer: 'less than 5%',
    acceptableAnswers: ['under 5%', 'below 5%', '5% or less', 'less than five percent'],
    hint: 'The parts are cheap, but assembly is expensive'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the maximum temperature limit for epoxy adhesives?',
    type: 'short',
    answer: 'over 200°C',
    acceptableAnswers: ['200+', '200 degrees', 'above 200', '200°C+'],
    hint: 'Highest temperature resistance among common adhesive families'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the maximum temperature limit for cyanoacrylate adhesives?',
    type: 'short',
    answer: '80°C',
    acceptableAnswers: ['80', '80 degrees', 'eighty degrees celsius'],
    hint: 'Lowest temperature resistance among common adhesive families'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main advantage of acrylic adhesives over other types?',
    type: 'short',
    answer: 'rarely needs primers',
    acceptableAnswers: ['no primers needed', 'primer not needed', 'no primer', 'does not need primer'],
    hint: 'Simplifies surface preparation'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the primary use case for urethane adhesives?',
    type: 'short',
    answer: 'high strength and flexibility',
    acceptableAnswers: ['strength and flexibility', 'strong and flexible', 'flexibility with strength'],
    hint: 'Combines two important mechanical properties'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of seal can properly designed vibration weld joints provide?',
    type: 'short',
    answer: 'hermetic seal',
    acceptableAnswers: ['hermetic', 'airtight', 'watertight', 'hermetic seals'],
    hint: 'A completely sealed joint'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of seal do press fits NOT provide?',
    type: 'short',
    answer: 'hermetic seal',
    acceptableAnswers: ['hermetic', 'hermetic seal', 'airtight seal'],
    hint: 'No physical bond at the interface'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the setting time for cyanoacrylate adhesives?',
    type: 'short',
    answer: '2 or 3 seconds',
    acceptableAnswers: ['2-3 seconds', '2 to 3 seconds', 'two to three seconds', '2-3 sec'],
    hint: 'One of the fastest setting adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the full cure time for cyanoacrylate adhesives?',
    type: 'short',
    answer: '24 hours',
    acceptableAnswers: ['24 hrs', 'one day', '1 day', 'twenty-four hours'],
    hint: 'Much longer than setting time'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the setting time for acrylic adhesives?',
    type: 'short',
    answer: '60 to 90 seconds',
    acceptableAnswers: ['60-90 seconds', '60-90 sec', 'one to one and a half minutes'],
    hint: 'Around 1 to 1.5 minutes'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the full cure time for acrylic adhesives?',
    type: 'short',
    answer: '30 minutes or less',
    acceptableAnswers: ['30 min or less', 'under 30 minutes', 'less than 30 min', 'half hour'],
    hint: 'Very rapid at room temperature'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the typical cure time for UV curable adhesives?',
    type: 'short',
    answer: '3 to 10 seconds',
    acceptableAnswers: ['3-10 seconds', '3-10 sec', 'three to ten seconds'],
    hint: 'Uses light energy for polymerization'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main disadvantage of molding-in inserts?',
    type: 'short',
    answer: 'high molded-in stress',
    acceptableAnswers: ['high stress', 'molded in stress', 'thermal expansion mismatch', 'increased cycle time'],
    hint: 'Due to different coefficients of thermal expansion'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the two weakest insert installation methods?',
    type: 'short',
    answer: 'press fit and expansion',
    acceptableAnswers: ['press and expansion', 'press fit expansion', 'expansion and press fit'],
    hint: 'These are the fastest and easiest but least strong'
  },
  {
    topic: 'Joining Processes',
    question: 'What alternative name is given to blind rivets?',
    type: 'short',
    answer: 'pop rivets',
    acceptableAnswers: ['pop', 'pop rivet'],
    hint: 'Named after the sound they make when installed'
  },
  {
    topic: 'Joining Processes',
    question: 'Can vibration welding handle parts with complex or irregular surfaces?',
    type: 'short',
    answer: 'no',
    acceptableAnswers: ['no', 'cannot', 'no it cannot', 'not possible'],
    hint: 'Mating surfaces must be parallel'
  },
  {
    topic: 'Joining Processes',
    question: 'Can vibration welding weld internal walls simultaneously with external walls?',
    type: 'short',
    answer: 'yes',
    acceptableAnswers: ['yes', 'yes it can', 'can', 'possible'],
    hint: 'This is one of the advantages of vibration welding'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the frequency range for vibration welding?',
    type: 'short',
    answer: '100 to 250 Hz',
    acceptableAnswers: ['100-250 Hz', '100-250', 'one hundred to two hundred fifty'],
    hint: 'Low frequency compared to ultrasonic'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the frequency range for ultrasonic welding?',
    type: 'short',
    answer: '10-75 kHz',
    acceptableAnswers: ['10-75 khz', '10 to 75 khz', 'ten to seventy-five kilohertz'],
    hint: 'Much higher than vibration welding'
  },
  {
    topic: 'Joining Processes',
    question: 'What joint designs are suggested for spin welding to minimize linear speed differential?',
    type: 'short',
    answer: 'tongue and groove, scarf, shear',
    acceptableAnswers: ['tongue groove scarf shear', 'not butt joint', 'tongue and groove scarf shear'],
    hint: 'Butt joints are weak for this process'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the typical cycle time for hot plate welding?',
    type: 'short',
    answer: '15 to 20 seconds',
    acceptableAnswers: ['15-20 seconds', '15-20 sec', 'fifteen to twenty seconds'],
    hint: 'Faster than you might expect'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the two types of self-tapping screws?',
    type: 'short',
    answer: 'thread forming and thread cutting',
    acceptableAnswers: ['TF and TC', 'thread forming thread cutting', 'forming and cutting'],
    hint: 'One forms threads, the other cuts them'
  },
  {
    topic: 'Joining Processes',
    question: 'Why are thread cutting screws NOT suggested for repeated assembly and disassembly?',
    type: 'short',
    answer: 'may form second set of threads',
    acceptableAnswers: ['second threads', 'creates new threads', 'double threading', 'forms new threads'],
    hint: 'Reinsertion can cause problems'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of stress do thread forming screws induce in plastics?',
    type: 'short',
    answer: 'high residual stresses',
    acceptableAnswers: ['residual stress', 'high stress', 'residual stresses'],
    hint: 'Acceptable in ductile plastics due to stress relaxation'
  },
  {
    topic: 'Joining Processes',
    question: 'What happens to the surface when solvent bonding is used?',
    type: 'short',
    answer: 'solvent dissolves surface',
    acceptableAnswers: ['surface dissolves', 'surfaces dissolve', 'dissolved', 'melted'],
    hint: 'Allows material to flow together'
  },
  {
    topic: 'Joining Processes',
    question: 'What type of bond is left after solvent evaporates in solvent bonding?',
    type: 'short',
    answer: 'material-to-material bond',
    acceptableAnswers: ['pure material bond', 'material bond', 'pure bond'],
    hint: 'No adhesive remains, just the base material'
  },
  {
    topic: 'Joining Processes',
    question: 'For what type of thermoplastics is solvent bonding commonly used?',
    type: 'short',
    answer: 'amorphous',
    acceptableAnswers: ['amorphous thermoplastics', 'amorphous resins'],
    hint: 'Not semi-crystalline materials'
  },
  {
    topic: 'Joining Processes',
    question: 'What are the two main types of rivets based on structure?',
    type: 'short',
    answer: 'solid and hollow',
    acceptableAnswers: ['solid hollow', 'hollow and solid'],
    hint: 'Based on whether they have an internal cavity'
  },
  {
    topic: 'Joining Processes',
    question: 'What surface preparation uses the oxidizing area of a flame?',
    type: 'short',
    answer: 'flame treatment',
    acceptableAnswers: ['flame', 'flame treating'],
    hint: 'Uses the blue part of the flame, not yellow'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the main design consideration for adhesive joints to avoid failure?',
    type: 'short',
    answer: 'avoid peeling forces',
    acceptableAnswers: ['no peeling', 'prevent peeling', 'avoid peeling', 'no peel forces'],
    hint: 'Joints should withstand shear, compression, and tension instead'
  },
  {
    topic: 'Joining Processes',
    question: 'What advantage does adhesive bonding provide for thin or fragile parts?',
    type: 'short',
    answer: 'can join without damage',
    acceptableAnswers: ['joins thin parts', 'no damage', 'gentle joining', 'safe for fragile parts'],
    hint: 'Unlike mechanical fasteners that require holes'
  },
  {
    topic: 'Joining Processes',
    question: 'Can adhesive bonding join dissimilar materials with different thermal expansion?',
    type: 'short',
    answer: 'yes',
    acceptableAnswers: ['yes', 'yes it can', 'can', 'possible'],
    hint: 'This is one of the nine advantages of adhesives'
  },
  {
    topic: 'Joining Processes',
    question: 'What curing mechanism do epoxies use?',
    type: 'short',
    answer: 'chemical reaction',
    acceptableAnswers: ['chemical', 'chemical reaction', 'reaction'],
    hint: 'Not solvent evaporation'
  },
  {
    topic: 'Joining Processes',
    question: 'What temperature is required for one-part epoxy curing?',
    type: 'short',
    answer: 'around 148°C',
    acceptableAnswers: ['148', '148°C', '148 degrees', '300°F'],
    hint: 'Usually for one hour or more'
  },
  {
    topic: 'Joining Processes',
    question: 'How do two-part epoxies cure?',
    type: 'short',
    answer: 'room temperature chemical reaction',
    acceptableAnswers: ['room temp', 'at room temperature', 'chemical reaction', 'no heat needed'],
    hint: 'Resin and hardener must be mixed'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the maximum part size for standard vibration welding equipment?',
    type: 'short',
    answer: '610 mm x 305 mm',
    acceptableAnswers: ['610x305', '610 by 305', '610mm x 305mm'],
    hint: 'Relatively large parts can be welded'
  },
  {
    topic: 'Joining Processes',
    question: 'What advantage does snap fit assembly have over fasteners regarding part count?',
    type: 'short',
    answer: 'eliminates fasteners',
    acceptableAnswers: ['no fasteners', 'eliminates fasteners', 'no additional parts', 'zero fasteners'],
    hint: 'Uses inherent flexibility of plastic'
  },
  {
    topic: 'Joining Processes',
    question: 'Can snap fits be designed for multiple insertion and removal?',
    type: 'short',
    answer: 'yes',
    acceptableAnswers: ['yes', 'yes they can', 'can', 'possible'],
    hint: 'Or they can be designed for permanent assembly'
  },
  {
    topic: 'Joining Processes',
    question: 'What cure time range does anaerobic adhesive have for full cure?',
    type: 'short',
    answer: '2-24 hours',
    acceptableAnswers: ['2 to 24 hours', '2-24 hrs', 'two to twenty-four hours'],
    hint: 'Set time can be as short as 15 seconds'
  },
  {
    topic: 'Joining Processes',
    question: 'What advantage does ultrasonic staking have over heat staking?',
    type: 'short',
    answer: 'tip stays cool, clean head',
    acceptableAnswers: ['cool tip', 'stays cool', 'minimal sticking', 'no stringing'],
    hint: 'Results in better quality and less mess'
  },

  // Complex Short-Answer Questions - Joining Processes
  {
    topic: 'Joining Processes',
    question: 'Why is the tongue and groove joint preferred over a butt joint in spin welding?',
    type: 'short',
    answer: 'minimizes linear speed differential across weld area',
    acceptableAnswers: ['speed differential', 'linear speed difference', 'reduces speed variation', 'uniform speed'],
    hint: 'Consider rotational mechanics and bond strength'
  },
  {
    topic: 'Joining Processes',
    question: 'Explain why molding-in inserts creates high stress despite being a permanent installation method.',
    type: 'short',
    answer: 'different coefficients of thermal expansion between metal and plastic',
    acceptableAnswers: ['thermal expansion mismatch', 'CTE difference', 'thermal expansion coefficient', 'expansion difference'],
    hint: 'Think about cooling from melt temperature'
  },
  {
    topic: 'Joining Processes',
    question: 'Why are adhesive joints designed to resist shear and compression but avoid peeling forces?',
    type: 'short',
    answer: 'adhesives are weak under peeling due to stress concentration at separation edge',
    acceptableAnswers: ['peeling concentrates stress', 'stress concentration', 'poor peel strength', 'edge stress'],
    hint: 'Consider how force is distributed across the bond area'
  },
  {
    topic: 'Joining Processes',
    question: 'What physical principle causes ferromagnetic particles to generate heat in electromagnetic welding?',
    type: 'short',
    answer: 'oscillating magnetic field excites particles causing hysteresis losses',
    acceptableAnswers: ['magnetic hysteresis', 'hysteresis', 'magnetic field excitation', 'eddy currents'],
    hint: 'Related to magnetic domain alignment and energy dissipation'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does vibration welding push surface contaminants out of the weld zone?',
    type: 'short',
    answer: 'reciprocating motion displaces mold release and coatings from interface',
    acceptableAnswers: ['reciprocating motion', 'vibration displaces contaminants', 'mechanical displacement', 'oscillation removes'],
    hint: 'Consider the direction of movement'
  },
  {
    topic: 'Joining Processes',
    question: 'Why must thread cutting screws be carefully aligned during reinsertion?',
    type: 'short',
    answer: 'may form second thread set if misaligned',
    acceptableAnswers: ['creates new threads', 'double threading', 'second thread', 'thread mismatch'],
    hint: 'Think about the cutting action on existing threads'
  },
  {
    topic: 'Joining Processes',
    question: 'What causes cyanoacrylate adhesives to cure rapidly at room temperature?',
    type: 'short',
    answer: 'surface moisture initiates anionic polymerization reaction',
    acceptableAnswers: ['moisture', 'surface moisture', 'humidity triggers', 'water initiated'],
    hint: 'Even ambient humidity is sufficient'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is ultrasonic insertion stronger than press-fit insertion for threaded inserts?',
    type: 'short',
    answer: 'melted plastic flows into undercuts creating mechanical interlock',
    acceptableAnswers: ['melt flows into features', 'mechanical interlock', 'plastic flows undercuts', 'undercut bonding'],
    hint: 'Consider what happens at the interface during vibration'
  },
  {
    topic: 'Joining Processes',
    question: 'Why do anaerobics only cure after assembly rather than in the bottle?',
    type: 'short',
    answer: 'oxygen presence inhibits polymerization',
    acceptableAnswers: ['oxygen inhibits', 'oxygen prevents cure', 'air prevents', 'oxygen blocks'],
    hint: 'Consider the atmospheric conditions in the bottle versus the joint'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does hot plate welding require fixtures with stops?',
    type: 'short',
    answer: 'controls melt displacement and final joint thickness',
    acceptableAnswers: ['control displacement', 'control thickness', 'limit material flow', 'set joint height'],
    hint: 'Think about the molten material being squeezed'
  },
  {
    topic: 'Joining Processes',
    question: 'What is the mechanical limitation of press-fit joints for sealing applications?',
    type: 'short',
    answer: 'no physical bond at interface prevents hermetic seal',
    acceptableAnswers: ['no bond', 'only friction', 'no hermetic seal', 'mechanical only'],
    hint: 'Consider the nature of the connection'
  },
  {
    topic: 'Joining Processes',
    question: 'Why must rivet holes be reamed or expanded for critical applications?',
    type: 'short',
    answer: 'induces compressive stress preventing fatigue crack initiation',
    acceptableAnswers: ['compressive stress', 'prevent fatigue', 'reduce stress concentration', 'anti-fatigue'],
    hint: 'Think about residual stress state'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does solvent bonding of amorphous thermoplastics create a stronger joint than adhesives?',
    type: 'short',
    answer: 'molecular diffusion creates pure material-to-material bond',
    acceptableAnswers: ['molecular diffusion', 'material bond', 'chain entanglement', 'no adhesive layer'],
    hint: 'Consider what remains after the solvent evaporates'
  },
  {
    topic: 'Joining Processes',
    question: 'Why are aluminum rivets preferred over steel when joining plastics?',
    type: 'short',
    answer: 'aluminum deforms more readily reducing stress on plastic',
    acceptableAnswers: ['more ductile', 'deforms easier', 'less stress', 'softer material'],
    hint: 'Think about material hardness and stress distribution'
  },
  {
    topic: 'Joining Processes',
    question: 'What makes acrylics advantageous over epoxies for field assembly?',
    type: 'short',
    answer: 'rarely require primers and cure rapidly at room temperature',
    acceptableAnswers: ['no primer', 'fast cure', 'rapid room temp cure', 'primer-less'],
    hint: 'Consider preparation time and cure conditions'
  },
  
  // Complex Short-Answer Questions - Materials Science
  {
    topic: 'Materials Properties',
    question: 'Why does increasing carbon content above 2% make iron unsuitable for most fabrication processes?',
    type: 'short',
    answer: 'excessive carbide formation causes brittleness',
    acceptableAnswers: ['brittleness', 'too brittle', 'carbide makes brittle', 'loses ductility'],
    hint: 'Think about the microstructure changes'
  },
  {
    topic: 'Polymers',
    question: 'Why can thermoplastics be remelted but thermosets cannot?',
    type: 'short',
    answer: 'thermosets have cross-linked molecular structure that decomposes under heat',
    acceptableAnswers: ['cross-linking', 'crosslinked structure', 'covalent crosslinks', 'chemical bonds'],
    hint: 'Consider the molecular architecture'
  },
  {
    topic: 'Polymers',
    question: 'What structural characteristic makes amorphous thermoplastics suitable for solvent bonding?',
    type: 'short',
    answer: 'random molecular chains allow solvent penetration and chain diffusion',
    acceptableAnswers: ['random structure', 'no crystallinity', 'molecular mobility', 'chain diffusion'],
    hint: 'Consider molecular arrangement and mobility'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is uniform wall thickness critical for successful ultrasonic welding?',
    type: 'short',
    answer: 'ensures consistent energy transmission and uniform melting',
    acceptableAnswers: ['uniform energy', 'consistent melting', 'even energy distribution', 'uniform transmission'],
    hint: 'Think about acoustic wave propagation'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does electromagnetic welding require the gasket material to match the base resin?',
    type: 'short',
    answer: 'ensures compatible melting and fusion at interface',
    acceptableAnswers: ['compatible fusion', 'matching melt', 'same material fusion', 'compatible melt'],
    hint: 'Consider thermal compatibility'
  },
  {
    topic: 'Joining Processes',
    question: 'What stress-related advantage do adhesives have over mechanical fasteners?',
    type: 'short',
    answer: 'distribute stress uniformly across bond area without stress concentrations',
    acceptableAnswers: ['uniform stress', 'no stress concentration', 'distributed stress', 'even stress'],
    hint: 'Compare to point loading of fasteners'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is weld time a critical parameter in ultrasonic welding?',
    type: 'short',
    answer: 'controls melt depth and energy input to joint',
    acceptableAnswers: ['controls melt depth', 'energy control', 'melt penetration', 'heat input'],
    hint: 'Too little or too much affects bond quality'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does plasma treatment improve adhesive bonding of plastics?',
    type: 'short',
    answer: 'electron bombardment oxidizes surface increasing surface energy',
    acceptableAnswers: ['surface oxidation', 'increases surface energy', 'surface activation', 'oxidizes surface'],
    hint: 'Think about surface chemistry modification'
  },
  {
    topic: 'Joining Processes',
    question: 'What mechanical principle allows snap fits to work without permanent deformation?',
    type: 'short',
    answer: 'elastic deformation within yield stress limit',
    acceptableAnswers: ['elastic deformation', 'stays below yield', 'elastic flexing', 'recoverable strain'],
    hint: 'Consider the stress-strain behavior'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is hold time important after ultrasonic welding stops?',
    type: 'short',
    answer: 'maintains pressure during solidification preventing voids',
    acceptableAnswers: ['solidification pressure', 'prevent voids', 'consolidation', 'cooling under pressure'],
    hint: 'Think about what happens as the melt cools'
  },
  {
    topic: 'Joining Processes',
    question: 'Why does chemical etching improve adhesive bond strength?',
    type: 'short',
    answer: 'creates oxidized surface layer with increased mechanical interlocking',
    acceptableAnswers: ['surface oxidation', 'mechanical interlocking', 'rough surface', 'surface texture'],
    hint: 'Consider both chemical and mechanical effects'
  },
  {
    topic: 'Joining Processes',
    question: 'What causes the flash formation in vibration welding?',
    type: 'short',
    answer: 'molten material displaced from interface by oscillating motion',
    acceptableAnswers: ['material displacement', 'melt squeezed out', 'displaced melt', 'friction melt flow'],
    hint: 'Think about where the molten material goes'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is clamping pressure a key factor in ultrasonic welding success?',
    type: 'short',
    answer: 'ensures intimate contact and energy coupling at interface',
    acceptableAnswers: ['interface contact', 'energy coupling', 'acoustic coupling', 'contact pressure'],
    hint: 'Consider how vibrations are transmitted'
  },
  {
    topic: 'Joining Processes',
    question: 'Why do epoxies not cure by solvent evaporation?',
    type: 'short',
    answer: 'polymerization occurs through chemical cross-linking reaction',
    acceptableAnswers: ['chemical reaction', 'cross-linking', 'polymerization', 'chemical cure'],
    hint: 'They are not solvent-based systems'
  },
  {
    topic: 'Joining Processes',
    question: 'What limits the geometry of parts that can be vibration welded?',
    type: 'short',
    answer: 'mating surfaces must be parallel in single plane',
    acceptableAnswers: ['parallel surfaces', 'single plane', 'flat surfaces', 'planar joint'],
    hint: 'Consider the reciprocating motion direction'
  },

  // Casting Processes - Additional Questions
  {
    topic: 'Casting Processes',
    question: 'What is the main advantage of gray iron for machine parts?',
    type: 'short',
    answer: 'self-lubricating wear characteristics',
    acceptableAnswers: ['self-lubricating', 'good wear resistance', 'metal-to-metal wear', 'damping capacity'],
    hint: 'Think about friction and wear applications'
  },
  {
    topic: 'Casting Processes',
    question: 'What distinguishes ductile iron from gray iron?',
    type: 'short',
    answer: 'higher strength and shock load resistance',
    acceptableAnswers: ['higher strength', 'shock resistance', 'impact resistance', 'better toughness'],
    hint: 'Consider mechanical properties under impact'
  },
  {
    topic: 'Casting Processes',
    question: 'Investment casting uses a ________ pattern that is melted out.',
    type: 'fill',
    answer: ['wax'],
    hint: 'Material that can be easily removed by heat'
  },
  {
    topic: 'Casting Processes',
    question: 'Die casting is limited to ________ metals.',
    type: 'fill',
    answer: ['nonferrous'],
    hint: 'Materials with lower melting temperatures'
  },
  {
    topic: 'Casting Processes',
    question: 'The cavity in sand casting is contained in an aggregate housed in a box called the ________.',
    type: 'fill',
    answer: ['flask'],
    hint: 'Container for the sand mold'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the typical cycle time for die casting?',
    type: 'short',
    answer: '10 seconds',
    acceptableAnswers: ['10 seconds', 'very fast', 'seconds', 'under 15 seconds'],
    hint: 'It is the fastest casting process'
  },
  {
    topic: 'Casting Processes',
    question: 'What causes columnar grain structure in castings?',
    type: 'short',
    answer: 'dendrites growing from cold mold walls',
    acceptableAnswers: ['dendrite growth', 'directional solidification', 'mold wall cooling', 'grain growth from surface'],
    hint: 'Consider directional heat flow'
  },
  {
    topic: 'Casting Processes',
    question: 'A ________ is an extra void created in the mold to feed molten metal during shrinkage.',
    type: 'fill',
    answer: ['riser'],
    hint: 'Prevents voids in the main casting'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the typical shrinkage allowance range for cast metals?',
    type: 'short',
    answer: '1% to 5%',
    acceptableAnswers: ['1-5%', '1 to 5 percent', 'up to 5%'],
    hint: 'Volume change during solidification'
  },
  {
    topic: 'Casting Processes',
    question: 'Centrifugal casting is best suited for making ________ pipes.',
    type: 'fill',
    answer: ['cast-iron'],
    hint: 'Common application for this process'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the main disadvantage of permanent mold casting?',
    type: 'short',
    answer: 'expensive molds',
    acceptableAnswers: ['high mold cost', 'expensive tooling', 'costly molds'],
    hint: 'Think about initial investment'
  },
  {
    topic: 'Casting Processes',
    question: 'Shell molding uses sand bonded with ________ resin.',
    type: 'fill',
    answer: ['resin'],
    hint: 'Organic binder material'
  },
  {
    topic: 'Casting Processes',
    question: 'What happens during the solidification of a casting?',
    type: 'short',
    answer: 'grains form, chemistry changes, shrinkage occurs',
    acceptableAnswers: ['grain formation', 'shrinkage', 'dendrite growth', 'crystallization'],
    hint: 'Three major transformations'
  },
  {
    topic: 'Casting Processes',
    question: 'White iron is used primarily for ________ resistance.',
    type: 'fill',
    answer: ['abrasion', 'wear'],
    hint: 'Extremely hard cast iron application'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the purpose of draft angle in pattern design?',
    type: 'short',
    answer: 'allow pattern removal without breaking mold',
    acceptableAnswers: ['pattern removal', 'easy extraction', 'prevent mold damage', 'facilitate demolding'],
    hint: 'Minimum 1° offset from vertical'
  },
  {
    topic: 'Casting Processes',
    question: 'Investment casting provides the best ________ and ________ finish of ferrous casting processes.',
    type: 'fill',
    answer: ['tolerance', 'surface'],
    hint: 'Two quality characteristics'
  },
  {
    topic: 'Casting Processes',
    question: 'What material is commonly used for permanent mold construction?',
    type: 'short',
    answer: 'gray cast iron',
    acceptableAnswers: ['cast iron', 'gray iron', 'steel', 'bronze'],
    hint: 'Must withstand thermal fatigue'
  },
  {
    topic: 'Casting Processes',
    question: 'Malleable iron is best suited for ________ parts production.',
    type: 'fill',
    answer: ['quantity', 'production'],
    hint: 'Volume manufacturing application'
  },
  {
    topic: 'Casting Processes',
    question: 'What causes porosity in castings?',
    type: 'short',
    answer: 'gas bubbles or shrinkage voids',
    acceptableAnswers: ['gas entrapment', 'shrinkage', 'trapped air', 'voids'],
    hint: 'Two main sources of defects'
  },
  {
    topic: 'Casting Processes',
    question: 'Sand casting requires a minimum of ________ month(s) lead time.',
    type: 'fill',
    answer: ['1', 'one'],
    hint: 'Typical delivery time'
  },

  // Polymers - Additional Questions
  {
    topic: 'Polymers',
    question: 'Injection molding cycle consists of ________ major steps.',
    type: 'fill',
    answer: ['6', 'six'],
    hint: 'Clamping through ejection'
  },
  {
    topic: 'Polymers',
    question: 'What distinguishes thermoplastics from thermosets?',
    type: 'short',
    answer: 'thermoplastics can be remelted and reused',
    acceptableAnswers: ['remeltable', 'recyclable', 'reversible', 'can remelt'],
    hint: 'Think about recyclability'
  },
  {
    topic: 'Polymers',
    question: 'Blow molding is primarily used to make ________.',
    type: 'fill',
    answer: ['bottles', 'containers'],
    hint: 'Hollow thin-walled products'
  },
  {
    topic: 'Polymers',
    question: 'What is the main advantage of thermoforming?',
    type: 'short',
    answer: 'low tooling costs',
    acceptableAnswers: ['cheap tooling', 'low cost tools', 'economical tooling', 'inexpensive molds'],
    hint: 'Economic benefit'
  },
  {
    topic: 'Polymers',
    question: 'Calendering produces ________ or ________ from thermoplastics.',
    type: 'fill',
    answer: ['sheet', 'film'],
    hint: 'Flat products from heated rollers'
  },
  {
    topic: 'Polymers',
    question: 'What process is used to make continuous plastic shapes by pulling through a die?',
    type: 'short',
    answer: 'extrusion',
    acceptableAnswers: ['extrusion', 'extruding'],
    hint: 'Constant cross-section products'
  },
  {
    topic: 'Polymers',
    question: 'Rotational molding is ideal for making ________ containers.',
    type: 'fill',
    answer: ['large hollow', 'hollow'],
    hint: 'Fuel tanks, water tanks'
  },
  {
    topic: 'Polymers',
    question: 'What is bi-injection molding used for?',
    type: 'short',
    answer: 'cosmetic effects or altering use properties',
    acceptableAnswers: ['two colors', 'two materials', 'aesthetic', 'multi-material'],
    hint: 'Two different polymers in one part'
  },
  {
    topic: 'Polymers',
    question: 'Co-injection creates a ________ structure in the molded part.',
    type: 'fill',
    answer: ['sandwich', 'layered'],
    hint: 'Core and skin structure'
  },
  {
    topic: 'Polymers',
    question: 'What is the main limitation of injection molding?',
    type: 'short',
    answer: 'expensive equipment and tooling',
    acceptableAnswers: ['high cost', 'expensive tools', 'costly equipment', 'expensive molds'],
    hint: 'Initial investment'
  },
  {
    topic: 'Polymers',
    question: 'Stretch blow molding is used for high-quality ________ containers.',
    type: 'fill',
    answer: ['PET', 'plastic'],
    hint: 'Common beverage bottle material'
  },
  {
    topic: 'Polymers',
    question: 'What advantage does structural foam molding provide?',
    type: 'short',
    answer: 'increased stiffness without more material',
    acceptableAnswers: ['higher stiffness', 'rigid with less material', 'lightweight rigidity', 'cellular core'],
    hint: 'Mechanical property benefit'
  },
  {
    topic: 'Polymers',
    question: 'Thermoforming uses ________ to draw plastic sheet into mold.',
    type: 'fill',
    answer: ['vacuum', 'heat'],
    hint: 'Negative pressure forming method'
  },
  {
    topic: 'Polymers',
    question: 'What is the typical injection molding machine cost?',
    type: 'short',
    answer: 'over $100,000',
    acceptableAnswers: ['100000 dollars', 'hundred thousand', 'very expensive', '100k+'],
    hint: 'Six-figure investment'
  },
  {
    topic: 'Polymers',
    question: 'Film extrusion can use ________ die or ________ process.',
    type: 'fill',
    answer: ['slit', 'tubular'],
    hint: 'Two main forming methods'
  },
  {
    topic: 'Polymers',
    question: 'What polymer property allows thermoforming to work?',
    type: 'short',
    answer: 'softens when heated below melting point',
    acceptableAnswers: ['thermoplastic', 'heat softening', 'plastic state', 'formable when heated'],
    hint: 'Solid-phase forming characteristic'
  },
  {
    topic: 'Polymers',
    question: 'Rotational molding cost advantage comes from ________ mold costs.',
    type: 'fill',
    answer: ['low', 'lower'],
    hint: 'No internal core needed'
  },
  {
    topic: 'Polymers',
    question: 'What is the purpose of barrel rotation in injection molding?',
    type: 'short',
    answer: 'mix and melt polymer',
    acceptableAnswers: ['melting', 'mixing', 'plasticizing', 'homogenizing'],
    hint: 'Screw function'
  },
  {
    topic: 'Polymers',
    question: 'Extrusion requires ________ cross-section products.',
    type: 'fill',
    answer: ['constant', 'uniform'],
    hint: 'Geometric limitation'
  },
  {
    topic: 'Polymers',
    question: 'What defect can occur from excessive injection speed?',
    type: 'short',
    answer: 'flash or burn marks',
    acceptableAnswers: ['flash', 'burning', 'degradation', 'flow lines'],
    hint: 'Process parameter issue'
  },

  // Materials Properties - Additional Questions
  {
    topic: 'Materials Properties',
    question: 'Density equals ________ divided by ________.',
    type: 'fill',
    answer: ['mass', 'volume'],
    hint: 'Basic physical property formula'
  },
  {
    topic: 'Materials Properties',
    question: 'What property measures resistance to penetration or scratching?',
    type: 'short',
    answer: 'hardness',
    acceptableAnswers: ['hardness'],
    hint: 'Brinell, Vickers, Rockwell scales'
  },
  {
    topic: 'Materials Properties',
    question: 'The modulus of elasticity measures material ________.',
    type: 'fill',
    answer: ['stiffness'],
    hint: 'Resistance to elastic deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'What test measures impact strength?',
    type: 'short',
    answer: 'Charpy or Izod test',
    acceptableAnswers: ['Charpy', 'Izod', 'impact test', 'pendulum test'],
    hint: 'Pendulum striking notched specimen'
  },
  {
    topic: 'Materials Properties',
    question: 'Ductility allows material to undergo ________ deformation by tension.',
    type: 'fill',
    answer: ['plastic'],
    hint: 'Permanent shape change without fracture'
  },
  {
    topic: 'Materials Properties',
    question: 'What is the opposite property of ductility?',
    type: 'short',
    answer: 'brittleness',
    acceptableAnswers: ['brittleness', 'brittle'],
    hint: 'Fractures with no plastic deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'Creep is plastic deformation under prolonged ________ and ________.',
    type: 'fill',
    answer: ['stress', 'temperature'],
    hint: 'Two conditions causing time-dependent deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'What causes fatigue failure?',
    type: 'short',
    answer: 'repeated or cyclic stressing',
    acceptableAnswers: ['cyclic stress', 'repeated loading', 'vibration', 'alternating stress'],
    hint: 'Wire bent back and forth many times'
  },
  {
    topic: 'Materials Properties',
    question: 'Toughness depends on ________ and ________ of material.',
    type: 'fill',
    answer: ['ductility', 'strength'],
    hint: 'Two mechanical properties combined'
  },
  {
    topic: 'Materials Properties',
    question: 'What is the unit of stress?',
    type: 'short',
    answer: 'MPa or N/mm²',
    acceptableAnswers: ['MPa', 'N/mm2', 'pascal', 'megapascal'],
    hint: 'Force per unit area'
  },
  {
    topic: 'Materials Properties',
    question: 'Malleability is associated with ________ deformation.',
    type: 'fill',
    answer: ['compressive'],
    hint: 'Contrast with ductility (tensile)'
  },
  {
    topic: 'Materials Properties',
    question: 'What property makes copper suitable for electrical wires?',
    type: 'short',
    answer: 'electrical conductivity',
    acceptableAnswers: ['conductivity', 'conductive', 'good conductor'],
    hint: 'Ability to conduct current'
  },
  {
    topic: 'Materials Properties',
    question: 'The yield point indicates transition from ________ to ________ deformation.',
    type: 'fill',
    answer: ['elastic', 'plastic'],
    hint: 'Two deformation regions on stress-strain curve'
  },
  {
    topic: 'Materials Properties',
    question: 'What three types of strength exist in materials?',
    type: 'short',
    answer: 'tensile, compressive, shear',
    acceptableAnswers: ['tensile compressive shear', 'tension compression shear'],
    hint: 'Different loading directions'
  },
  {
    topic: 'Materials Properties',
    question: 'Strain is expressed as ________ per ________ of length.',
    type: 'fill',
    answer: ['millimetre', 'millimetre'],
    hint: 'Deformation measurement'
  },
  {
    topic: 'Materials Properties',
    question: 'What happens to material properties at the elastic limit?',
    type: 'short',
    answer: 'material can still recover to original shape',
    acceptableAnswers: ['recoverable', 'reversible', 'returns to shape', 'elastic recovery'],
    hint: 'Below yield point behavior'
  },
  {
    topic: 'Materials Properties',
    question: 'Thermal conductivity is measured in ________.',
    type: 'fill',
    answer: ['W/(m°K)', 'watts per meter kelvin'],
    hint: 'Heat transfer property unit'
  },
  {
    topic: 'Materials Properties',
    question: 'What property describes ability to withstand plastic deformation without rupture?',
    type: 'short',
    answer: 'ductility or malleability',
    acceptableAnswers: ['ductility', 'malleability', 'formability'],
    hint: 'Important for forming processes'
  },
  {
    topic: 'Materials Properties',
    question: 'Proof stress is equivalent to ________ strength.',
    type: 'fill',
    answer: ['yield'],
    hint: 'Alternative measure when yield point not apparent'
  },
  {
    topic: 'Materials Properties',
    question: 'What are the six major property groups for material selection?',
    type: 'short',
    answer: 'physical, mechanical, technological, chemical, economic, aesthetic',
    acceptableAnswers: ['physical mechanical technological chemical economic aesthetic'],
    hint: 'Comprehensive selection criteria'
  },

  // Metals - Additional Questions
  {
    topic: 'Metals',
    question: 'Ferrous metals contain primarily ________.',
    type: 'fill',
    answer: ['iron'],
    hint: 'Main element in steels and cast irons'
  },
  {
    topic: 'Metals',
    question: 'What distinguishes wrought iron from cast iron?',
    type: 'short',
    answer: 'very low carbon content',
    acceptableAnswers: ['low carbon', 'less than 0.08% carbon', 'pure iron with slag'],
    hint: 'Carbon percentage difference'
  },
  {
    topic: 'Metals',
    question: 'Steel emerged in the ________ century.',
    type: 'fill',
    answer: ['19th', 'nineteenth'],
    hint: 'Along with improved cast iron techniques'
  },
  {
    topic: 'Metals',
    question: 'What makes aluminum preferred for aircraft structures?',
    type: 'short',
    answer: 'light weight and good strength',
    acceptableAnswers: ['lightweight', 'low density', 'strength to weight ratio', 'high specific strength'],
    hint: 'Weight-critical applications'
  },
  {
    topic: 'Metals',
    question: 'Copper has excellent ________ and ________ conductivity.',
    type: 'fill',
    answer: ['thermal', 'electrical'],
    hint: 'Two related transport properties'
  },
  {
    topic: 'Metals',
    question: 'What property makes titanium valuable in aerospace?',
    type: 'short',
    answer: 'high strength at high temperature',
    acceptableAnswers: ['temperature resistance', 'high strength', 'heat resistance', 'corrosion resistance'],
    hint: 'High-performance applications'
  },
  {
    topic: 'Metals',
    question: 'Silver has a relative electrical conductivity of ________.',
    type: 'fill',
    answer: ['106'],
    hint: 'Highest conductor reference value'
  },
  {
    topic: 'Metals',
    question: 'What causes grain formation in metals during solidification?',
    type: 'short',
    answer: 'atoms attaching to nuclei forming dendrites',
    acceptableAnswers: ['dendrite growth', 'crystallization', 'nucleation and growth'],
    hint: 'Microstructure development'
  },
  {
    topic: 'Metals',
    question: 'Aluminum rivets are preferred over steel because aluminum ________.',
    type: 'fill',
    answer: ['deforms more readily', 'is more ductile'],
    hint: 'Deformation under stress'
  },
  {
    topic: 'Metals',
    question: 'What is the main advantage of using metal inserts in plastics?',
    type: 'short',
    answer: 'repeated assembly and disassembly capability',
    acceptableAnswers: ['repeated use', 'multiple cycles', 'thread durability', 'reusability'],
    hint: 'Fastener longevity'
  },

  // Machining - Additional Questions
  {
    topic: 'Machining',
    question: 'Machining is a ________ process that follows forming.',
    type: 'fill',
    answer: ['secondary'],
    hint: 'Process sequence in manufacturing'
  },
  {
    topic: 'Machining',
    question: 'What tool material is used for machining polymers and composites?',
    type: 'short',
    answer: 'carbide or diamond',
    acceptableAnswers: ['carbide', 'diamond', 'special tools'],
    hint: 'Hard, wear-resistant materials'
  },
  {
    topic: 'Machining',
    question: 'Machining provides ________ and ________ accuracy.',
    type: 'fill',
    answer: ['dimensional', 'surface'],
    hint: 'Two quality improvements'
  },
  {
    topic: 'Machining',
    question: 'What is the risk of drilling holes in composites?',
    type: 'short',
    answer: 'ruptures fibers and disturbs bonding structure',
    acceptableAnswers: ['fiber damage', 'delamination', 'bond disruption', 'structural damage'],
    hint: 'Material integrity concern'
  },
  {
    topic: 'Machining',
    question: 'Threads in composites have relatively low ________ and ________ resistance.',
    type: 'fill',
    answer: ['strength', 'wear'],
    hint: 'Two mechanical limitations'
  },
  {
    topic: 'Machining',
    question: 'What precaution is needed when machining polymers?',
    type: 'short',
    answer: 'control heat and cutting parameters',
    acceptableAnswers: ['temperature control', 'avoid overheating', 'proper cooling', 'sharp tools'],
    hint: 'Material sensitivity issue'
  },
  {
    topic: 'Machining',
    question: 'Phenolic laminates have good ________ properties.',
    type: 'fill',
    answer: ['machinability'],
    hint: 'Ease of cutting with tools'
  },
  {
    topic: 'Machining',
    question: 'What causes excessive tool wear when machining glass-reinforced plastics?',
    type: 'short',
    answer: 'abrasive glass fibers',
    acceptableAnswers: ['glass abrasion', 'fiber hardness', 'abrasive reinforcement'],
    hint: 'Inorganic reinforcement effect'
  },

  // Forging - Additional Questions
  {
    topic: 'Forging',
    question: 'Forging relies on material ________.',
    type: 'fill',
    answer: ['malleability', 'ductility'],
    hint: 'Ability to deform plastically'
  },
  {
    topic: 'Forging',
    question: 'What temperature condition is forging typically performed at?',
    type: 'short',
    answer: 'elevated temperature or hot',
    acceptableAnswers: ['hot', 'high temperature', 'heated', 'above recrystallization'],
    hint: 'Makes metal more formable'
  },
  {
    topic: 'Forging',
    question: 'Forging improves material ________ and ________.',
    type: 'fill',
    answer: ['strength', 'toughness'],
    hint: 'Two mechanical property benefits'
  },
  {
    topic: 'Forging',
    question: 'What is the main limitation of forging?',
    type: 'short',
    answer: 'expensive dies and equipment',
    acceptableAnswers: ['high tooling cost', 'expensive', 'costly dies', 'capital investment'],
    hint: 'Economic consideration'
  },
  {
    topic: 'Forging',
    question: 'Forging produces ________ grain flow aligned with part shape.',
    type: 'fill',
    answer: ['continuous', 'favorable'],
    hint: 'Microstructure advantage'
  },
  {
    topic: 'Forging',
    question: 'What metals are commonly forged?',
    type: 'short',
    answer: 'steel, aluminum, titanium, copper alloys',
    acceptableAnswers: ['steel aluminum titanium', 'ferrous and nonferrous', 'most ductile metals'],
    hint: 'Materials with good malleability'
  },

  // Ceramics - Additional Questions
  {
    topic: 'Ceramics',
    question: 'Ceramic materials are ________ and ________ compounds.',
    type: 'fill',
    answer: ['inorganic', 'nonmetallic'],
    hint: 'Two defining characteristics'
  },
  {
    topic: 'Ceramics',
    question: 'What is the main disadvantage of ceramics?',
    type: 'short',
    answer: 'brittleness',
    acceptableAnswers: ['brittle', 'low toughness', 'fracture easily', 'impact sensitive'],
    hint: 'Mechanical property limitation'
  },
  {
    topic: 'Ceramics',
    question: 'Firing gives ceramic parts ________ and ________.',
    type: 'fill',
    answer: ['strength', 'hardness'],
    hint: 'Two properties from high-temperature treatment'
  },
  {
    topic: 'Ceramics',
    question: 'What are the three basic ceramic forming processes?',
    type: 'short',
    answer: 'casting, plastic forming, pressing',
    acceptableAnswers: ['slip casting plastic forming pressing', 'casting forming pressing'],
    hint: 'Similar to metal/polymer categories'
  },
  {
    topic: 'Ceramics',
    question: 'Slip casting uses a ________ mold.',
    type: 'fill',
    answer: ['porous', 'plaster'],
    hint: 'Absorbs water from suspension'
  },
  {
    topic: 'Ceramics',
    question: 'What causes warping and cracking during ceramic drying?',
    type: 'short',
    answer: 'variations in moisture content and wall thickness',
    acceptableAnswers: ['moisture variation', 'uneven drying', 'thickness differences', 'shrinkage variation'],
    hint: 'Non-uniform water loss'
  },
  {
    topic: 'Ceramics',
    question: 'Ceramic shrinkage during drying and firing can be up to ________ percent.',
    type: 'fill',
    answer: ['20', 'twenty'],
    hint: 'Significant dimensional change'
  },
  {
    topic: 'Ceramics',
    question: 'What is the purpose of glazing ceramics?',
    type: 'short',
    answer: 'improve appearance, strength, and make impermeable',
    acceptableAnswers: ['surface finish', 'waterproofing', 'aesthetic', 'sealing'],
    hint: 'Final coating application'
  },
  {
    topic: 'Ceramics',
    question: 'Aluminas can serve at temperatures up to ________ °C.',
    type: 'fill',
    answer: ['1650'],
    hint: 'High-temperature ceramic capability'
  },
  {
    topic: 'Ceramics',
    question: 'What ceramic process uses pressure and temperature simultaneously?',
    type: 'short',
    answer: 'hot pressing or pressure sintering',
    acceptableAnswers: ['hot pressing', 'pressure sintering', 'hot isostatic pressing'],
    hint: 'Reduces porosity'
  },

  // Composites - Additional Questions
  {
    topic: 'Composites',
    question: 'A composite is made of ________ or more different materials.',
    type: 'fill',
    answer: ['two', '2'],
    hint: 'Minimum number of constituents'
  },
  {
    topic: 'Composites',
    question: 'What are the two main components of polymer composites?',
    type: 'short',
    answer: 'matrix and reinforcement',
    acceptableAnswers: ['matrix reinforcement', 'resin fiber', 'polymer reinforcement'],
    hint: 'Binder and strengthening elements'
  },
  {
    topic: 'Composites',
    question: 'Continuous fiber reinforcement is more effective for ________ strength.',
    type: 'fill',
    answer: ['long-term', 'creep'],
    hint: 'Time-dependent properties'
  },
  {
    topic: 'Composites',
    question: 'What is the most common reinforcement for polymer composites?',
    type: 'short',
    answer: 'glass fibers',
    acceptableAnswers: ['glass', 'fiberglass', 'E-glass', 'glass fiber'],
    hint: 'Widely used inorganic fiber'
  },
  {
    topic: 'Composites',
    question: 'Kevlar fiber has tensile strength of about ________ MPa.',
    type: 'fill',
    answer: ['3102'],
    hint: 'Much higher than steel'
  },
  {
    topic: 'Composites',
    question: 'What advantage do carbon-reinforced composites provide?',
    type: 'short',
    answer: 'high stiffness and weight reduction',
    acceptableAnswers: ['high modulus', 'lightweight', 'stiffness', 'strength to weight'],
    hint: 'Performance benefit over glass'
  },
  {
    topic: 'Composites',
    question: 'Epoxy matrix has ________ shrinkage rate.',
    type: 'fill',
    answer: ['low', 'minimal'],
    hint: 'Can be as low as 0.01%'
  },
  {
    topic: 'Composites',
    question: 'What is the main matrix material for fiberglass boats?',
    type: 'short',
    answer: 'unsaturated polyester',
    acceptableAnswers: ['polyester', 'UP resin', 'polyester resin'],
    hint: 'Low-cost general-purpose thermoset'
  },
  {
    topic: 'Composites',
    question: 'Phenolic composites are used for ________ boards.',
    type: 'fill',
    answer: ['circuit', 'electrical'],
    hint: 'Electronics application'
  },
  {
    topic: 'Composites',
    question: 'What composite fabrication technique is used for pipes and tanks?',
    type: 'short',
    answer: 'filament winding',
    acceptableAnswers: ['filament winding', 'winding', 'fiber winding'],
    hint: 'Continuous strand around mandrel'
  },
  {
    topic: 'Composites',
    question: 'Hand lay-up maximum thickness is usually ________ mm.',
    type: 'fill',
    answer: ['9'],
    hint: 'Contact molding limitation'
  },
  {
    topic: 'Composites',
    question: 'What does SMC stand for?',
    type: 'short',
    answer: 'sheet molding compound',
    acceptableAnswers: ['sheet molding compound'],
    hint: 'Resin and reinforcement in sheet form'
  },
  {
    topic: 'Composites',
    question: 'Pultrusion produces ________ cross-section shapes.',
    type: 'fill',
    answer: ['constant', 'continuous'],
    hint: 'Pulling process characteristic'
  },
  {
    topic: 'Composites',
    question: 'What problem exists with two-dimensional fabric weaves in laminates?',
    type: 'short',
    answer: 'anisotropic strength characteristics',
    acceptableAnswers: ['anisotropic', 'directional properties', 'weak direction', 'non-uniform strength'],
    hint: 'Directional property variation'
  },
  {
    topic: 'Composites',
    question: 'Wood is a ________ composite.',
    type: 'fill',
    answer: ['natural'],
    hint: 'Cellulose fiber reinforcement'
  },

  // Natural Materials - Additional Questions
  {
    topic: 'Natural Materials',
    question: 'Natural materials come from ________, ________, or the ground.',
    type: 'fill',
    answer: ['plants', 'animals'],
    hint: 'Three main sources'
  },
  {
    topic: 'Natural Materials',
    question: 'What material is harvested from cork oak tree?',
    type: 'short',
    answer: 'cork',
    acceptableAnswers: ['cork', 'cork tissue'],
    hint: 'Elastic, impermeable material'
  },
  {
    topic: 'Natural Materials',
    question: 'Hardwoods have ________ leaves and produce fruit or nuts.',
    type: 'fill',
    answer: ['broad'],
    hint: 'Deciduous tree characteristic'
  },
  {
    topic: 'Natural Materials',
    question: 'What are softwood trees also called?',
    type: 'short',
    answer: 'conifers or cone-bearing',
    acceptableAnswers: ['conifers', 'evergreens', 'cone bearing'],
    hint: 'Pine, spruce, cedar, fir'
  },
  {
    topic: 'Natural Materials',
    question: 'Leather is created through ________ of animal hides.',
    type: 'fill',
    answer: ['tanning'],
    hint: 'Chemical process with acidic compounds'
  },
  {
    topic: 'Natural Materials',
    question: 'What is the main use of leather in industry?',
    type: 'short',
    answer: 'footwear',
    acceptableAnswers: ['shoes', 'footwear', 'boots'],
    hint: 'Primary application'
  },
  {
    topic: 'Natural Materials',
    question: 'MDF stands for ________ Density Fibre board.',
    type: 'fill',
    answer: ['Medium'],
    hint: 'Wood composite product'
  },
  {
    topic: 'Natural Materials',
    question: 'What prevents leather from decomposing?',
    type: 'short',
    answer: 'tanning with acidic compounds',
    acceptableAnswers: ['tanning', 'chemical treatment', 'tannins'],
    hint: 'Preservation process'
  },
  {
    topic: 'Natural Materials',
    question: 'Cork\'s key properties are ________ and near-impermeability.',
    type: 'fill',
    answer: ['elasticity'],
    hint: 'Makes it suitable for bottle stoppers'
  },
  {
    topic: 'Natural Materials',
    question: 'What natural fiber is used in high-strength ropes?',
    type: 'short',
    answer: 'hemp or jute',
    acceptableAnswers: ['hemp', 'jute', 'sisal', 'manila'],
    hint: 'Plant-based cordage material'
  },
  {
    topic: 'Natural Materials',
    question: 'Plywood is made by ________ wood veneers together.',
    type: 'fill',
    answer: ['laminating', 'gluing'],
    hint: 'Layered construction method'
  },
  {
    topic: 'Natural Materials',
    question: 'What property makes granite suitable for countertops?',
    type: 'short',
    answer: 'high durability and aesthetic qualities',
    acceptableAnswers: ['durable', 'hard', 'attractive', 'weather resistant'],
    hint: 'Natural stone application'
  },

  // Additional Casting Processes Questions
  {
    topic: 'Casting Processes',
    question: 'What is the purpose of a core in sand casting?',
    type: 'short',
    answer: 'produce internal features like holes',
    acceptableAnswers: ['internal features', 'holes', 'cavities', 'hollow sections'],
    hint: 'Creates internal geometry'
  },
  {
    topic: 'Casting Processes',
    question: 'The parting line separates the ________ and ________ halves of a mold.',
    type: 'fill',
    answer: ['cope', 'drag'],
    hint: 'Upper and lower mold sections'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the main application of centrifugal casting?',
    type: 'short',
    answer: 'cast iron pipes',
    acceptableAnswers: ['pipes', 'tubes', 'cylindrical parts', 'pipe production'],
    hint: 'Symmetrical hollow products'
  },
  {
    topic: 'Casting Processes',
    question: 'Die casting tolerances are the ________ of any casting process.',
    type: 'fill',
    answer: ['lowest', 'tightest', 'best'],
    hint: 'Dimensional accuracy superiority'
  },
  {
    topic: 'Casting Processes',
    question: 'What causes solidification porosity in castings?',
    type: 'short',
    answer: 'shrinkage voids during cooling',
    acceptableAnswers: ['shrinkage', 'volume reduction', 'cooling contraction', 'voids'],
    hint: 'Material contraction issue'
  },
  {
    topic: 'Casting Processes',
    question: 'Typical cast-iron pipe lengths are ________ ft or ________ m.',
    type: 'fill',
    answer: ['20', '6'],
    hint: 'Standard centrifugally cast pipe dimension'
  },
  {
    topic: 'Casting Processes',
    question: 'What distinguishes investment casting from sand casting?',
    type: 'short',
    answer: 'uses wax pattern and better tolerances',
    acceptableAnswers: ['wax pattern', 'precision', 'tighter tolerances', 'lost wax'],
    hint: 'Pattern material and accuracy'
  },
  {
    topic: 'Casting Processes',
    question: 'Cupola furnaces are used to melt ________.',
    type: 'fill',
    answer: ['cast iron', 'iron'],
    hint: 'Continuous melting process'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the advantage of computer simulation in casting design?',
    type: 'short',
    answer: 'ensures proper solidification sequence',
    acceptableAnswers: ['predict solidification', 'optimize gating', 'reduce defects', 'heat transfer analysis'],
    hint: 'Predicts metal flow and cooling'
  },
  {
    topic: 'Casting Processes',
    question: 'Investment casting can be ganged to make ________ parts in single pour.',
    type: 'fill',
    answer: ['hundreds', 'many'],
    hint: 'Multiple cavity advantage'
  },
  {
    topic: 'Casting Processes',
    question: 'What material are investment casting molds made from?',
    type: 'short',
    answer: 'plaster or ceramic',
    acceptableAnswers: ['plaster', 'ceramic', 'investment material', 'refractory'],
    hint: 'Heat-resistant mold material'
  },
  {
    topic: 'Casting Processes',
    question: 'Die casting requires quantities of ________ to justify tooling costs.',
    type: 'fill',
    answer: ['thousands'],
    hint: 'High volume production'
  },
  {
    topic: 'Casting Processes',
    question: 'What causes coarse grain structure in slowly solidified castings?',
    type: 'short',
    answer: 'extended time for grain growth',
    acceptableAnswers: ['slow cooling', 'long solidification', 'grain growth time'],
    hint: 'Cooling rate effect'
  },
  {
    topic: 'Casting Processes',
    question: 'Shell molding uses ________ bonded sand.',
    type: 'fill',
    answer: ['resin'],
    hint: 'Organic binder creates shell'
  },
  {
    topic: 'Casting Processes',
    question: 'What is the typical lead time for die castings?',
    type: 'short',
    answer: '6 months',
    acceptableAnswers: ['6 months', 'half year', 'long lead time'],
    hint: 'Time to produce first part'
  },

  // Additional Polymers Questions
  {
    topic: 'Polymers',
    question: 'Phenol formaldehyde is also known by the trade name ________.',
    type: 'fill',
    answer: ['Bakelite'],
    hint: 'First synthetic plastic discovered 1907'
  },
  {
    topic: 'Polymers',
    question: 'What limitation exists for Bakelite colors?',
    type: 'short',
    answer: 'limited to black and dark shades',
    acceptableAnswers: ['dark colors only', 'black brown green red', 'no bright colors'],
    hint: 'Color restriction of phenolic'
  },
  {
    topic: 'Polymers',
    question: 'Urea formaldehyde improved phenolic by allowing ________ colors.',
    type: 'fill',
    answer: ['bright', 'decorative'],
    hint: 'Color advantage over Bakelite'
  },
  {
    topic: 'Polymers',
    question: 'What happens if thermoset is left in molding barrel?',
    type: 'short',
    answer: 'screw becomes integral part of barrel',
    acceptableAnswers: ['screw stuck', 'cross-links in barrel', 'machine damaged', 'solidifies'],
    hint: 'Expensive cleanup problem'
  },
  {
    topic: 'Polymers',
    question: 'Compression molding is the most widely used process for ________.',
    type: 'fill',
    answer: ['thermosetting', 'thermosets'],
    hint: 'Material type preference'
  },
  {
    topic: 'Polymers',
    question: 'What is the cycle time comparison between thermoset injection and compression molding?',
    type: 'short',
    answer: '2 to 3 times faster',
    acceptableAnswers: ['2-3x faster', 'much faster', 'twice as fast'],
    hint: 'Speed advantage'
  },
  {
    topic: 'Polymers',
    question: 'RIM stands for ________ Injection Molding.',
    type: 'fill',
    answer: ['Reaction'],
    hint: 'Reactive polymer system'
  },
  {
    topic: 'Polymers',
    question: 'What is the most common foam material in RIM?',
    type: 'short',
    answer: 'polyurethane',
    acceptableAnswers: ['polyurethane', 'PU foam', 'urethane'],
    hint: 'Auto parts and furniture'
  },
  {
    topic: 'Polymers',
    question: 'Transfer molding is a modification of ________ molding.',
    type: 'fill',
    answer: ['compression'],
    hint: 'Related thermoset process'
  },
  {
    topic: 'Polymers',
    question: 'What makes PTFE (Teflon) difficult to process?',
    type: 'short',
    answer: 'can only be sintered under pressure',
    acceptableAnswers: ['sintering only', 'no melting', 'powder process', 'high cost processing'],
    hint: 'Fabricability limitation'
  },
  {
    topic: 'Polymers',
    question: 'Vulcanization of rubber uses ________ for cross-linking.',
    type: 'fill',
    answer: ['sulfur'],
    hint: 'Chemical element for curing'
  },
  {
    topic: 'Polymers',
    question: 'Who first used sulfur to vulcanize rubber?',
    type: 'short',
    answer: 'Charles Goodyear',
    acceptableAnswers: ['Goodyear', 'Charles Goodyear'],
    hint: '1800-1860 inventor'
  },
  {
    topic: 'Polymers',
    question: 'What happens to uncured natural rubber?',
    type: 'short',
    answer: 'turns smelly and crumbly perishes',
    acceptableAnswers: ['perishes', 'degrades', 'decomposes', 'breaks down'],
    hint: 'Degradation without treatment'
  },
  {
    topic: 'Polymers',
    question: 'Calendering is used to make ________ sheets and ________.',
    type: 'fill',
    answer: ['vinyl', 'gaskets'],
    hint: 'Flat rolled products'
  },
  {
    topic: 'Polymers',
    question: 'What process makes plastic bags?',
    type: 'short',
    answer: 'film blowing or extrusion',
    acceptableAnswers: ['blown film', 'film extrusion', 'tubular extrusion'],
    hint: 'Tubular film process'
  },
  {
    topic: 'Polymers',
    question: 'Injection molding produces over ________ parts per minute for light bulbs.',
    type: 'fill',
    answer: ['1000'],
    hint: 'High-speed automated process'
  },
  {
    topic: 'Polymers',
    question: 'What is the dwelling step in injection molding?',
    type: 'short',
    answer: 'maintaining pressure during cooling',
    acceptableAnswers: ['pack pressure', 'hold pressure', 'packing phase'],
    hint: 'After injection before cooling'
  },
  {
    topic: 'Polymers',
    question: 'PET bottles use ________ blow molding.',
    type: 'fill',
    answer: ['stretch'],
    hint: 'Biaxial orientation process'
  },
  {
    topic: 'Polymers',
    question: 'What advantage does rotational molding have over injection molding?',
    type: 'short',
    answer: 'no internal core needed lower mold cost',
    acceptableAnswers: ['cheaper tooling', 'simpler molds', 'no pressure needed'],
    hint: 'Tooling cost benefit'
  },
  {
    topic: 'Polymers',
    question: 'Sagging process shapes glass using ________.',
    type: 'fill',
    answer: ['gravity', 'weight'],
    hint: 'Sheet droops into shallow mold'
  },

  // Additional Materials Properties Questions
  {
    topic: 'Materials Properties',
    question: 'The slope of the stress-strain curve in elastic region is the ________.',
    type: 'fill',
    answer: ['modulus of elasticity', 'Young\'s modulus'],
    hint: 'Stiffness measure'
  },
  {
    topic: 'Materials Properties',
    question: 'What are the three Brinell, Vickers, and Rockwell used to measure?',
    type: 'short',
    answer: 'hardness',
    acceptableAnswers: ['hardness'],
    hint: 'Surface resistance property'
  },
  {
    topic: 'Materials Properties',
    question: 'Ultimate tensile strength occurs at point ________ on stress-strain curve.',
    type: 'fill',
    answer: ['D', 'maximum'],
    hint: 'Before fracture point E'
  },
  {
    topic: 'Materials Properties',
    question: 'What property describes material ability to return to original shape?',
    type: 'short',
    answer: 'elasticity',
    acceptableAnswers: ['elastic', 'elastic recovery', 'resilience'],
    hint: 'Rubber band behavior'
  },
  {
    topic: 'Materials Properties',
    question: 'Plasticity is ability to undergo ________ deformation without rupture.',
    type: 'fill',
    answer: ['permanent'],
    hint: 'Non-recoverable shape change'
  },
  {
    topic: 'Materials Properties',
    question: 'What causes necking in plastic deformation?',
    type: 'short',
    answer: 'cross-section reduction during stretching',
    acceptableAnswers: ['thinning', 'cross-section change', 'localized deformation'],
    hint: 'Bubble gum stretching example'
  },
  {
    topic: 'Materials Properties',
    question: 'Copper has thermal conductivity of ________ W/mK.',
    type: 'fill',
    answer: ['401'],
    hint: 'Excellent heat conductor'
  },
  {
    topic: 'Materials Properties',
    question: 'What is the hardest natural material?',
    type: 'short',
    answer: 'diamond',
    acceptableAnswers: ['diamond'],
    hint: 'Hardness 10 on Mohs scale'
  },
  {
    topic: 'Materials Properties',
    question: 'Talc has a Mohs hardness of ________.',
    type: 'fill',
    answer: ['1'],
    hint: 'Softest on scale'
  },
  {
    topic: 'Materials Properties',
    question: 'What property makes polyethylene suitable for wire coating?',
    type: 'short',
    answer: 'electrical insulation and flexibility',
    acceptableAnswers: ['insulation', 'insulator', 'flexibility', 'dielectric'],
    hint: 'Electrical and mechanical properties'
  },
  {
    topic: 'Materials Properties',
    question: 'Percent elongation measures ________.',
    type: 'fill',
    answer: ['ductility'],
    hint: 'Tensile test measurement'
  },
  {
    topic: 'Materials Properties',
    question: 'What test uses a pendulum to measure toughness?',
    type: 'short',
    answer: 'Charpy or Izod impact test',
    acceptableAnswers: ['Charpy', 'Izod', 'impact test'],
    hint: 'Energy absorption measurement'
  },
  {
    topic: 'Materials Properties',
    question: 'Lead is malleable but not ________.',
    type: 'fill',
    answer: ['ductile'],
    hint: 'Cannot be drawn into wire'
  },
  {
    topic: 'Materials Properties',
    question: 'What property is important for turbine blades at high temperature?',
    type: 'short',
    answer: 'creep resistance',
    acceptableAnswers: ['creep resistance', 'high temperature strength', 'thermal stability'],
    hint: 'Time-dependent deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'Coefficient of thermal expansion is inversely proportional to ________.',
    type: 'fill',
    answer: ['melting point'],
    hint: 'Higher melt temperature less expansion'
  },
  {
    topic: 'Materials Properties',
    question: 'What causes fatigue failure in wire bent repeatedly?',
    type: 'short',
    answer: 'cyclic stress reversals',
    acceptableAnswers: ['repeated bending', 'cyclic loading', 'alternating stress'],
    hint: 'Back and forth stress application'
  },
  {
    topic: 'Materials Properties',
    question: 'Opacity describes ability to ________ light.',
    type: 'fill',
    answer: ['block', 'transmit'],
    hint: 'Opposite of transparency'
  },
  {
    topic: 'Materials Properties',
    question: 'What are ranking parameters used for?',
    type: 'short',
    answer: 'order materials by superiority cannot use in calculations',
    acceptableAnswers: ['ranking', 'comparison', 'qualitative assessment'],
    hint: 'Machinability, corrosion resistance'
  },
  {
    topic: 'Materials Properties',
    question: 'Fundamental parameters can be used directly in ________ calculations.',
    type: 'fill',
    answer: ['design'],
    hint: 'Quantitative engineering use'
  },
  {
    topic: 'Materials Properties',
    question: 'What six property groups are considered in material selection?',
    type: 'short',
    answer: 'physical mechanical technological chemical economic aesthetic',
    acceptableAnswers: ['physical mechanical technological chemical economic aesthetic'],
    hint: 'Comprehensive selection criteria'
  },

  // Additional Metals Questions
  {
    topic: 'Metals',
    question: 'Atoms are the ________ blocks of engineering materials.',
    type: 'fill',
    answer: ['building'],
    hint: 'Fundamental construction units'
  },
  {
    topic: 'Metals',
    question: 'What melting point defines the boundary between soldering and brazing?',
    type: 'short',
    answer: '455°C or 850°F',
    acceptableAnswers: ['455°C', '850°F', '455 degrees'],
    hint: 'Temperature threshold'
  },
  {
    topic: 'Metals',
    question: 'Brazing uses filler metals with ________ melting temperature than base metal.',
    type: 'fill',
    answer: ['lower'],
    hint: 'Must not melt workpiece'
  },
  {
    topic: 'Metals',
    question: 'What causes intergranular penetration in brazing?',
    type: 'short',
    answer: 'limited alloying at elevated temperatures',
    acceptableAnswers: ['alloying', 'diffusion', 'atomic bonding', 'grain boundary penetration'],
    hint: 'Creates stronger bond than soldering'
  },
  {
    topic: 'Metals',
    question: 'Torch brazing uses ________ flame.',
    type: 'fill',
    answer: ['reducing', 'slightly reducing'],
    hint: 'Prevents oxidation'
  },
  {
    topic: 'Metals',
    question: 'What atmosphere is used in furnace brazing?',
    type: 'short',
    answer: 'hydrogen',
    acceptableAnswers: ['hydrogen', 'H2', 'inert gas'],
    hint: 'No flux needed'
  },
  {
    topic: 'Metals',
    question: 'Arc welding uses ________ to create heat.',
    type: 'fill',
    answer: ['electrical current', 'electricity'],
    hint: 'Electric discharge method'
  },
  {
    topic: 'Metals',
    question: 'What protects molten weld metal from oxidation in SMAW?',
    type: 'short',
    answer: 'flux coating on electrode',
    acceptableAnswers: ['flux', 'electrode coating', 'slag'],
    hint: 'Stick welding protection'
  },
  {
    topic: 'Metals',
    question: 'MIG welding stands for Metal ________ Gas welding.',
    type: 'fill',
    answer: ['Inert'],
    hint: 'Gas shielding method'
  },
  {
    topic: 'Metals',
    question: 'What element has the highest relative electrical conductivity?',
    type: 'short',
    answer: 'silver',
    acceptableAnswers: ['silver', 'Ag'],
    hint: 'Conductivity reference 106'
  },
  {
    topic: 'Metals',
    question: 'TIG welding uses ________ electrode.',
    type: 'fill',
    answer: ['tungsten'],
    hint: 'Non-consumable high melt temperature'
  },
  {
    topic: 'Metals',
    question: 'What welding process forces plasma through small orifice?',
    type: 'short',
    answer: 'plasma arc welding',
    acceptableAnswers: ['PAW', 'plasma welding', 'plasma arc'],
    hint: 'Concentrated arc energy'
  },
  {
    topic: 'Metals',
    question: 'Resistance spot welding uses ________ and ________ to create weld.',
    type: 'fill',
    answer: ['current', 'pressure'],
    hint: 'Two electrodes clamp and conduct'
  },
  {
    topic: 'Metals',
    question: 'What automotive industry process welds many sheet metal joints?',
    type: 'short',
    answer: 'resistance spot welding',
    acceptableAnswers: ['spot welding', 'RESW', 'resistance welding'],
    hint: 'Rapid economical sheet joining'
  },
  {
    topic: 'Metals',
    question: 'Ultrasonic bonding uses frequencies of ________ kHz.',
    type: 'fill',
    answer: ['10-75'],
    hint: 'High frequency vibrations'
  },
  {
    topic: 'Metals',
    question: 'What solid-state process joins cylindrical parts by rotation?',
    type: 'short',
    answer: 'friction bonding',
    acceptableAnswers: ['friction welding', 'friction bonding', 'inertia welding'],
    hint: 'Frictional heat generation'
  },
  {
    topic: 'Metals',
    question: 'Laser beam welding abbreviation is ________.',
    type: 'fill',
    answer: ['LBW'],
    hint: 'High-tech precision joining'
  },
  {
    topic: 'Metals',
    question: 'What advantage does LBW have over EBW?',
    type: 'short',
    answer: 'no vacuum required',
    acceptableAnswers: ['no vacuum', 'atmospheric operation', 'no x-rays'],
    hint: 'Operational simplification'
  },
  {
    topic: 'Metals',
    question: 'Flash welding uses ________ amp current.',
    type: 'fill',
    answer: ['2000-5000'],
    hint: 'High current creates fusion'
  },
  {
    topic: 'Metals',
    question: 'What welding method is used for bandsaw blade repair?',
    type: 'short',
    answer: 'flash welding',
    acceptableAnswers: ['flash welding', 'butt welding', 'resistance welding'],
    hint: 'End joining technique'
  },

  // Additional Machining Questions
  {
    topic: 'Machining',
    question: 'Machining normally ________ forming processes.',
    type: 'fill',
    answer: ['follows', 'precedes joining'],
    hint: 'Process sequence position'
  },
  {
    topic: 'Machining',
    question: 'What happens to hole edges in composites after drilling?',
    type: 'short',
    answer: 'rupture and bond disturbance near hole',
    acceptableAnswers: ['delamination', 'fiber breakage', 'bond damage'],
    hint: 'Structural integrity issue'
  },
  {
    topic: 'Machining',
    question: 'Annealing is used to remove effects of ________ work.',
    type: 'fill',
    answer: ['cold'],
    hint: 'Reverses strain hardening'
  },
  {
    topic: 'Machining',
    question: 'What is the purpose of stress-relief heat treatment?',
    type: 'short',
    answer: 'remove internal residual stresses',
    acceptableAnswers: ['relieve stress', 'reduce distortion', 'dimensional stability'],
    hint: 'Applicable to all material types'
  },
  {
    topic: 'Machining',
    question: 'Grinding and polishing improve ceramic ________.',
    type: 'fill',
    answer: ['strength', 'surface finish'],
    hint: 'Removes surface flaws'
  },
  {
    topic: 'Machining',
    question: 'What secondary process can increase ceramic part strength?',
    type: 'short',
    answer: 'surface finishing removes flaws',
    acceptableAnswers: ['grinding', 'polishing', 'surface treatment', 'finishing'],
    hint: 'Flaw removal effect'
  },

  // Additional Forging Questions
  {
    topic: 'Forging',
    question: 'Forging is performed at ________ temperatures.',
    type: 'fill',
    answer: ['elevated', 'high'],
    hint: 'Above recrystallization temperature'
  },
  {
    topic: 'Forging',
    question: 'What microstructure advantage does forging provide?',
    type: 'short',
    answer: 'favorable grain flow alignment',
    acceptableAnswers: ['grain flow', 'directional structure', 'oriented grains'],
    hint: 'Strength in load direction'
  },
  {
    topic: 'Forging',
    question: 'Forging eliminates ________ found in castings.',
    type: 'fill',
    answer: ['porosity', 'voids'],
    hint: 'Densification benefit'
  },
  {
    topic: 'Forging',
    question: 'What material property is required for successful forging?',
    type: 'short',
    answer: 'ductility or malleability',
    acceptableAnswers: ['ductility', 'malleability', 'plastic deformability'],
    hint: 'Ability to flow without cracking'
  },
  {
    topic: 'Forging',
    question: 'Hot forging reduces ________ required to deform metal.',
    type: 'fill',
    answer: ['force', 'pressure'],
    hint: 'Temperature effect on flow stress'
  },
  {
    topic: 'Forging',
    question: 'What typical products are made by forging?',
    type: 'short',
    answer: 'crankshafts connecting rods gears',
    acceptableAnswers: ['automotive parts', 'shafts', 'structural components'],
    hint: 'High-strength mechanical parts'
  },

  // Additional Ceramics Questions
  {
    topic: 'Ceramics',
    question: 'Ceramic word comes from Greek keramikos meaning ________.',
    type: 'fill',
    answer: ['burnt stuff'],
    hint: 'Indicates heat treatment necessity'
  },
  {
    topic: 'Ceramics',
    question: 'What temperature can zirconia serve at?',
    type: 'short',
    answer: '2204°C',
    acceptableAnswers: ['2204°C', '2200°C', 'over 2000°C'],
    hint: 'Highest strength refractory'
  },
  {
    topic: 'Ceramics',
    question: 'Glass transition temperature Tg for soda-lime glass is ________.',
    type: 'fill',
    answer: ['520-600°C'],
    hint: 'Softening temperature range'
  },
  {
    topic: 'Ceramics',
    question: 'What percentage of all glass is soda-lime?',
    type: 'short',
    answer: '90%',
    acceptableAnswers: ['90', '90 percent', 'ninety percent'],
    hint: 'Commodity glass dominance'
  },
  {
    topic: 'Ceramics',
    question: 'Pyrex is a ________ glass.',
    type: 'fill',
    answer: ['borosilicate'],
    hint: 'Heat-resistant laboratory ware'
  },
  {
    topic: 'Ceramics',
    question: 'What makes borosilicate glass thermal shock resistant?',
    type: 'short',
    answer: 'low coefficient of thermal expansion',
    acceptableAnswers: ['low expansion', 'thermal stability', 'minimal expansion'],
    hint: 'Temperature change resistance'
  },
  {
    topic: 'Ceramics',
    question: 'Fused silica consists simply of ________.',
    type: 'fill',
    answer: ['silica', 'silicon dioxide'],
    hint: 'Purest most expensive glass'
  },
  {
    topic: 'Ceramics',
    question: 'What glass darkens in sunlight and fades when removed?',
    type: 'short',
    answer: 'photochromic glass',
    acceptableAnswers: ['photochromic', 'transition glass', 'light-sensitive'],
    hint: 'Sunglasses application'
  },
  {
    topic: 'Ceramics',
    question: 'Float glass is formed on bath of molten ________.',
    type: 'fill',
    answer: ['tin'],
    hint: 'Dense liquid metal support'
  },
  {
    topic: 'Ceramics',
    question: 'What process makes glass stronger by surface compression?',
    type: 'short',
    answer: 'tempering or thermal treatment',
    acceptableAnswers: ['tempering', 'thermal tempering', 'heat treatment'],
    hint: 'Rapid cooling creates residual stress'
  },
  {
    topic: 'Ceramics',
    question: 'Dry pressing produces ceramic ________, ________, and ________.',
    type: 'fill',
    answer: ['whiteware', 'refractories', 'abrasives'],
    hint: 'Three product categories'
  },
  {
    topic: 'Ceramics',
    question: 'What is jiggering used for?',
    type: 'short',
    answer: 'making symmetrical ceramic ware',
    acceptableAnswers: ['plates', 'dishes', 'pottery', 'tableware'],
    hint: 'Rotating mold process'
  },

  // Additional Composites Questions
  {
    topic: 'Composites',
    question: 'Composite properties are ________ to individual materials.',
    type: 'fill',
    answer: ['superior'],
    hint: 'Synergistic combination benefit'
  },
  {
    topic: 'Composites',
    question: 'What natural composite demonstrates remarkable mechanical properties?',
    type: 'short',
    answer: 'wood',
    acceptableAnswers: ['wood', 'timber', 'cellulose fiber'],
    hint: 'Cellulose reinforced plant material'
  },
  {
    topic: 'Composites',
    question: 'E-glass stands for ________ applications.',
    type: 'fill',
    answer: ['electrical'],
    hint: 'Lower cost glass fiber type'
  },
  {
    topic: 'Composites',
    question: 'What is S-glass advantage over E-glass?',
    type: 'short',
    answer: 'higher tensile strength',
    acceptableAnswers: ['stronger', 'higher strength', 'better mechanical properties'],
    hint: 'Magnesia alumina silica composition'
  },
  {
    topic: 'Composites',
    question: 'Glass fiber diameters range from ________ to ________ mm.',
    type: 'fill',
    answer: ['0.005', '0.025'],
    hint: 'Very thin continuous filaments'
  },
  {
    topic: 'Composites',
    question: 'What is the main disadvantage of chopped fiber reinforcement?',
    type: 'short',
    answer: 'weaker than continuous fiber',
    acceptableAnswers: ['lower strength', 'not as strong', 'reduced properties'],
    hint: 'Compared to continuous reinforcement'
  },
  {
    topic: 'Composites',
    question: 'Carbon fiber modulus can exceed ________ MPa.',
    type: 'fill',
    answer: ['758000', '758,000'],
    hint: 'Extremely high stiffness'
  },
  {
    topic: 'Composites',
    question: 'What makes Nomex different from Kevlar?',
    type: 'short',
    answer: 'not as strong easier to process lower cost',
    acceptableAnswers: ['lower strength', 'easier processing', 'cheaper'],
    hint: 'High-temperature nylon trade-offs'
  },
  {
    topic: 'Composites',
    question: 'Paper and cotton reinforcements advantage is ________.',
    type: 'fill',
    answer: ['low cost', 'machinability'],
    hint: 'Less tool wear than glass'
  },
  {
    topic: 'Composites',
    question: 'What composite reinforcement is used in aircraft honeycomb panels?',
    type: 'short',
    answer: 'aluminum foil',
    acceptableAnswers: ['aluminum', 'metal honeycomb', 'Al honeycomb'],
    hint: 'Beehive pattern structure'
  },
  {
    topic: 'Composites',
    question: 'BMC stands for ________ Molding Compound.',
    type: 'fill',
    answer: ['Bulk'],
    hint: 'Dough-like compression material'
  },
  {
    topic: 'Composites',
    question: 'What process makes continuous composite structural shapes?',
    type: 'short',
    answer: 'pultrusion',
    acceptableAnswers: ['pultrusion', 'pulling through die'],
    hint: 'Channels I-beams pipes'
  },
  {
    topic: 'Composites',
    question: 'Resin transfer molding requires ________ mold.',
    type: 'fill',
    answer: ['close-fitting', 'evacuated'],
    hint: 'Two finished surfaces'
  },
  {
    topic: 'Composites',
    question: 'What is the purpose of vacuum bag forming?',
    type: 'short',
    answer: 'use atmospheric pressure for forming',
    acceptableAnswers: ['atmospheric forming', 'eliminate metal molds', 'low cost forming'],
    hint: 'Eliminates expensive matched molds'
  },

  // Additional Natural Materials Questions
  {
    topic: 'Natural Materials',
    question: 'Organic materials contain ________ and are capable of decay.',
    type: 'fill',
    answer: ['carbon'],
    hint: 'Element defining organic chemistry'
  },
  {
    topic: 'Natural Materials',
    question: 'What three main sources provide natural materials?',
    type: 'short',
    answer: 'plants animals ground',
    acceptableAnswers: ['plants animals minerals', 'biological and geological'],
    hint: 'Organic and inorganic origins'
  },
  {
    topic: 'Natural Materials',
    question: 'Softwood trees are also called ________.',
    type: 'fill',
    answer: ['conifers'],
    hint: 'Cone-bearing evergreens'
  },
  {
    topic: 'Natural Materials',
    question: 'What fiber acts as structural reinforcement in wood?',
    type: 'short',
    answer: 'cellulose',
    acceptableAnswers: ['cellulose', 'cellulose fibers'],
    hint: 'Natural plant polymer'
  },
  {
    topic: 'Natural Materials',
    question: 'Portugal produces ________ percent of cork worldwide.',
    type: 'fill',
    answer: ['50'],
    hint: 'Major cork oak producer'
  },
  {
    topic: 'Natural Materials',
    question: 'What makes ostrich leather valuable?',
    type: 'short',
    answer: 'finest and most durable leather',
    acceptableAnswers: ['durable', 'high quality', 'strong flexible'],
    hint: 'Premium exotic leather'
  },
  {
    topic: 'Natural Materials',
    question: 'The leather industry uses meat industry ________.',
    type: 'fill',
    answer: ['by-products'],
    hint: 'Hides from food production'
  },
  {
    topic: 'Natural Materials',
    question: 'What makes stingray leather unique?',
    type: 'short',
    answer: 'tough as hard plastic',
    acceptableAnswers: ['very tough', 'durable', 'hard', 'plastic-like'],
    hint: 'Used in wallets and belts'
  },
  {
    topic: 'Natural Materials',
    question: 'A mineral must be a ________ with crystal structure.',
    type: 'fill',
    answer: ['solid'],
    hint: 'Three mineral requirements'
  },
  {
    topic: 'Natural Materials',
    question: 'What is the study of minerals called?',
    type: 'short',
    answer: 'mineralogy',
    acceptableAnswers: ['mineralogy'],
    hint: 'Mineral science discipline'
  },
  {
    topic: 'Natural Materials',
    question: 'Granite resists ________ rain better than marble.',
    type: 'fill',
    answer: ['acid'],
    hint: 'Chemical weathering resistance'
  },
  {
    topic: 'Natural Materials',
    question: 'What natural material is used for high-wear cutting tools?',
    type: 'short',
    answer: 'diamond',
    acceptableAnswers: ['diamond', 'industrial diamond'],
    hint: 'Hardest natural substance'
  },

  // Additional Casting Questions from Course Content
  {
    topic: 'Casting',
    question: 'Cast iron dates back to at least the ________ century.',
    type: 'fill',
    answer: ['14th', '14'],
    hint: 'Medieval period engineering material'
  },
  {
    topic: 'Casting',
    question: 'Wrought iron contains less than ________ percent carbon.',
    type: 'fill',
    answer: ['0.08'],
    hint: 'Very low carbon content compared to cast iron'
  },
  {
    topic: 'Casting',
    question: 'Cast iron has carbon content from ___ to ___ percent.',
    type: 'fill',
    answer: ['2.1', '4'],
    hint: 'Much higher than steel'
  },
  {
    topic: 'Casting',
    question: 'What is the purpose of a riser in sand casting?',
    type: 'short',
    answer: 'feed molten metal and prevent shrinkage voids',
    acceptableAnswers: ['prevent voids', 'compensate shrinkage', 'feed metal during solidification'],
    hint: 'Extra void containing excess material'
  },
  {
    topic: 'Casting',
    question: 'The upper half of a two-part mold is called the ________.',
    type: 'fill',
    answer: ['cope'],
    hint: 'Opposite of drag'
  },
  {
    topic: 'Casting',
    question: 'The lower half of a two-part mold is called the ________.',
    type: 'fill',
    answer: ['drag'],
    hint: 'Opposite of cope'
  },
  {
    topic: 'Casting',
    question: 'What minimum draft angle is required for pattern removal?',
    type: 'short',
    answer: '1 degree',
    acceptableAnswers: ['1°', 'one degree', 'minimum 1'],
    hint: 'Small angular offset from vertical'
  },
  {
    topic: 'Casting',
    question: 'Gray iron is outstanding for ________-to-________ wear characteristics.',
    type: 'fill',
    answer: ['metal', 'metal'],
    hint: 'Self-lubricating property'
  },
  {
    topic: 'Casting',
    question: 'Ductile iron is also called ________ iron.',
    type: 'fill',
    answer: ['nodular'],
    hint: 'Named for graphite structure'
  },
  {
    topic: 'Casting',
    question: 'What type of iron is best for production quantity parts?',
    type: 'short',
    answer: 'malleable iron',
    acceptableAnswers: ['malleable', 'malleable cast iron'],
    hint: 'Best machinability and stability combination'
  },
  {
    topic: 'Casting',
    question: 'White iron is used for tough ________ problems.',
    type: 'fill',
    answer: ['wear', 'abrasion'],
    hint: 'Extreme hardness application'
  },
  {
    topic: 'Casting',
    question: 'Dendrites grow in a ________-like form during solidification.',
    type: 'fill',
    answer: ['tree'],
    hint: 'Branching crystal structure'
  },
  {
    topic: 'Casting',
    question: 'What causes solidification porosity?',
    type: 'short',
    answer: 'gas bubbles and shrinkage',
    acceptableAnswers: ['trapped gas', 'shrinkage voids', 'gas entrapment'],
    hint: 'Two main sources of defects'
  },
  {
    topic: 'Casting',
    question: 'Investment casting is also called ________ ________ casting.',
    type: 'fill',
    answer: ['lost', 'wax'],
    hint: 'Ancient precision process'
  },
  {
    topic: 'Casting',
    question: 'What percentage of plaster mold is gypsum?',
    type: 'short',
    answer: '70-80 percent',
    acceptableAnswers: ['70-80', '70 to 80', 'seventy to eighty'],
    hint: 'Major component in investment molds'
  },
  {
    topic: 'Casting',
    question: 'Permanent molds are often made of ________ ________ iron.',
    type: 'fill',
    answer: ['gray', 'cast'],
    hint: 'Best thermal fatigue resistance'
  },
  {
    topic: 'Casting',
    question: 'What is the melting point range of gray cast iron?',
    type: 'short',
    answer: '1127-1204 celsius',
    acceptableAnswers: ['1127-1204', '1127 to 1204', 'eleven hundred degrees'],
    hint: 'Used for permanent molds'
  },
  {
    topic: 'Casting',
    question: 'Die casting produces parts up to ________ kg weight.',
    type: 'fill',
    answer: ['18'],
    hint: 'Limited to smaller parts'
  },
  {
    topic: 'Casting',
    question: 'Investment castings seldom exceed ________ kg.',
    type: 'fill',
    answer: ['13'],
    hint: 'Weight limitation of precision process'
  },
  {
    topic: 'Casting',
    question: 'What material cannot be die cast due to high melting temperature?',
    type: 'short',
    answer: 'ferrous metals',
    acceptableAnswers: ['steel', 'iron', 'ferrous', 'tungsten molybdenum'],
    hint: 'Would destroy steel cavities'
  },
  {
    topic: 'Casting',
    question: 'Die casting cycle times may be as short as ________ seconds.',
    type: 'fill',
    answer: ['10'],
    hint: 'Fastest casting process'
  },
  {
    topic: 'Casting',
    question: 'Sand castings may take ________ month to get.',
    type: 'fill',
    answer: ['1', 'one'],
    hint: 'Shortest lead time process'
  },
  {
    topic: 'Casting',
    question: 'Die castings may require ________ months lead time.',
    type: 'fill',
    answer: ['6', 'six'],
    hint: 'Longest tooling development'
  },

  // Additional Polymers Processing Questions
  {
    topic: 'Polymers',
    question: 'What is the most limiting factor in plastic applications?',
    type: 'short',
    answer: 'fabricability',
    acceptableAnswers: ['processing', 'manufacturing capability', 'moldability'],
    hint: 'Some plastics very difficult to form'
  },
  {
    topic: 'Polymers',
    question: 'PTFE parts can only be made by ________.',
    type: 'fill',
    answer: ['sintering'],
    hint: 'Teflon fabrication limitation'
  },
  {
    topic: 'Polymers',
    question: 'What are the six major steps in injection molding?',
    type: 'short',
    answer: 'clamping injection dwelling cooling opening ejection',
    acceptableAnswers: ['clamp inject dwell cool open eject', 'clamping to ejection'],
    hint: 'Complete cycle sequence'
  },
  {
    topic: 'Polymers',
    question: 'Bi-injection is done to achieve ________ effect or alter use properties.',
    type: 'fill',
    answer: ['cosmetic'],
    hint: 'Two materials for appearance'
  },
  {
    topic: 'Polymers',
    question: 'Co-injection creates a ________ effect.',
    type: 'fill',
    answer: ['sandwich'],
    hint: 'Skin-core structure'
  },
  {
    topic: 'Polymers',
    question: 'What makes structural foam molding different?',
    type: 'short',
    answer: 'cellular core dense skin',
    acceptableAnswers: ['foam core', 'lightweight structure', 'porous interior'],
    hint: 'Expands during molding'
  },
  {
    topic: 'Polymers',
    question: 'Extrusion blow molding uses ________ to expand parison.',
    type: 'fill',
    answer: ['compressed air'],
    hint: 'Inflates hollow shape'
  },
  {
    topic: 'Polymers',
    question: 'What extends shelf life of PET bottles?',
    type: 'short',
    answer: 'bairocade coatings',
    acceptableAnswers: ['barrier coatings', 'protective coating'],
    hint: 'Special surface treatment'
  },
  {
    topic: 'Polymers',
    question: 'Film extrusion uses a ________ die.',
    type: 'fill',
    answer: ['slit'],
    hint: 'Thin sheet formation'
  },
  {
    topic: 'Polymers',
    question: 'Rotational molding uses ________ force to push material.',
    type: 'fill',
    answer: ['centrifugal'],
    hint: 'Rotation in heated oven'
  },
  {
    topic: 'Polymers',
    question: 'What items are commonly rotational molded?',
    type: 'short',
    answer: 'tanks floats boat hulls',
    acceptableAnswers: ['fuel tanks', 'water tanks', 'large hollow containers'],
    hint: 'Large hollow products'
  },
  {
    topic: 'Polymers',
    question: 'Thermoforming heats plastic to ________ point.',
    type: 'fill',
    answer: ['softening'],
    hint: 'Below melting temperature'
  },
  {
    topic: 'Polymers',
    question: 'What draws sheet over mold in vacuum forming?',
    type: 'short',
    answer: 'vacuum negative pressure',
    acceptableAnswers: ['vacuum', 'suction', 'negative force'],
    hint: 'Air pressure differential'
  },
  {
    topic: 'Polymers',
    question: 'An injection molding machine can cost in excess of $________.',
    type: 'fill',
    answer: ['100,000', '100000'],
    hint: 'Very expensive equipment'
  },

  // Additional Thermoset Questions
  {
    topic: 'Thermosets',
    question: 'Phenolic was discovered in ________ by Leo Baekeland.',
    type: 'fill',
    answer: ['1907'],
    hint: 'First synthetic plastic'
  },
  {
    topic: 'Thermosets',
    question: 'True Bakelite is limited to black and dark shades of ________, ________, ________, and blue.',
    type: 'fill',
    answer: ['brown', 'green', 'red'],
    hint: 'Phenolic color limitations'
  },
  {
    topic: 'Thermosets',
    question: 'The GPO Telephone No.162 was the first all-________ telephone made in 1935.',
    type: 'fill',
    answer: ['plastic'],
    hint: 'Phenolic formaldehyde material'
  },
  {
    topic: 'Thermosets',
    question: 'Urea Formaldehyde was developed in ________.',
    type: 'fill',
    answer: ['1925'],
    hint: 'British Cyanides improvement'
  },
  {
    topic: 'Thermosets',
    question: 'What advantage does Urea Formaldehyde have over Phenolic?',
    type: 'short',
    answer: 'bright colors decorative patterns',
    acceptableAnswers: ['colors', 'can be colored', 'decorative capability'],
    hint: 'Not limited to dark shades'
  },
  {
    topic: 'Thermosets',
    question: 'Once thermosets are formed they cannot be ________.',
    type: 'fill',
    answer: ['remelted'],
    hint: 'Irreversible cross-linking'
  },
  {
    topic: 'Thermosets',
    question: 'Why are thermoset screws expensive?',
    type: 'short',
    answer: 'can cost 50000 dollars',
    acceptableAnswers: ['very expensive', 'high cost', 'tens of thousands'],
    hint: 'Become part of barrel if not removed'
  },
  {
    topic: 'Thermosets',
    question: 'Compression molding cycle times are ________ to ________ times longer than injection molding.',
    type: 'fill',
    answer: ['2', '3'],
    hint: 'Time-dependent curing reaction'
  },
  {
    topic: 'Thermosets',
    question: 'What thermoset process is fastest?',
    type: 'short',
    answer: 'injection molding',
    acceptableAnswers: ['thermoset injection', 'injection'],
    hint: '2-3 times faster than compression'
  },
  {
    topic: 'Thermosets',
    question: 'Foam molding increases part ________ without more material.',
    type: 'fill',
    answer: ['stiffness'],
    hint: 'High porosity core advantage'
  },
  {
    topic: 'Thermosets',
    question: 'RIM cycle times are usually less than ________ minutes.',
    type: 'fill',
    answer: ['2', 'two'],
    hint: 'Reaction injection molding speed'
  },
  {
    topic: 'Thermosets',
    question: 'What are common RIM parts in automobiles?',
    type: 'short',
    answer: 'bezels dashboards fenders',
    acceptableAnswers: ['auto body parts', 'large panels', 'bumpers'],
    hint: 'Polyurethane foam applications'
  },
  {
    topic: 'Thermosets',
    question: 'Transfer molding is a modification of ________ molding.',
    type: 'fill',
    answer: ['compression'],
    hint: 'Material transferred under pressure'
  },
  {
    topic: 'Thermosets',
    question: 'RTM stands for ________ ________ ________.',
    type: 'fill',
    answer: ['resin', 'transfer', 'molding'],
    hint: 'Resin pumped into closed mold'
  },
  {
    topic: 'Thermosets',
    question: 'Sintering is used on ________ and ________.',
    type: 'fill',
    answer: ['fluorocarbons', 'polyimides'],
    hint: 'High-temperature plastics'
  },
  {
    topic: 'Thermosets',
    question: 'Vulcanization is an ________ process.',
    type: 'fill',
    answer: ['irreversible'],
    hint: 'Permanent cross-linking'
  },
  {
    topic: 'Thermosets',
    question: 'Who first used sulfur to vulcanize rubber?',
    type: 'short',
    answer: 'charles goodyear',
    acceptableAnswers: ['goodyear', 'c goodyear'],
    hint: 'Famous American inventor 1800-1860'
  },
  {
    topic: 'Thermosets',
    question: 'Thermosets have better ________ resistance than thermoplastics.',
    type: 'fill',
    answer: ['heat'],
    hint: 'Do not melt when overheated'
  },
  {
    topic: 'Thermosets',
    question: 'What happens when thermosets are overheated?',
    type: 'short',
    answer: 'they char',
    acceptableAnswers: ['char', 'burn', 'carbonize'],
    hint: 'Still may be usable'
  },

  // Additional Composites Questions
  {
    topic: 'Composites',
    question: 'Wood is a natural ________ with cellulose fibers.',
    type: 'fill',
    answer: ['composite'],
    hint: 'Fiber reinforcement in nature'
  },
  {
    topic: 'Composites',
    question: 'Discontinuous reinforcements are ________ effective at increasing creep strength.',
    type: 'fill',
    answer: ['not', 'less'],
    hint: 'Compared to continuous fibers'
  },
  {
    topic: 'Composites',
    question: 'What advantage do polymer composites have over metals for aircraft?',
    type: 'short',
    answer: 'lower weight corrosion resistance',
    acceptableAnswers: ['lightweight', 'no rust', 'weight reduction'],
    hint: 'Replacing aluminum and steel'
  },
  {
    topic: 'Composites',
    question: 'Phenolics have one of the highest ________ of elasticity.',
    type: 'fill',
    answer: ['moduli', 'modulus'],
    hint: 'Very stiff material'
  },
  {
    topic: 'Composites',
    question: 'What is a familiar trade name for decorative laminate?',
    type: 'short',
    answer: 'formica',
    acceptableAnswers: ['formica'],
    hint: 'Kitchen counter material'
  },
  {
    topic: 'Composites',
    question: 'Epoxy shrink rate can be as low as ________ percent.',
    type: 'fill',
    answer: ['0.01'],
    hint: 'Minimal size change on curing'
  },
  {
    topic: 'Composites',
    question: 'What is the most important matrix for high-performance composites?',
    type: 'short',
    answer: 'epoxy',
    acceptableAnswers: ['epoxy resin', 'epoxies'],
    hint: 'High strength low viscosity'
  },
  {
    topic: 'Composites',
    question: 'Unsaturated polyester is used for ________ boats.',
    type: 'fill',
    answer: ['fiberglass'],
    hint: 'Most common general-purpose composite'
  },
  {
    topic: 'Composites',
    question: 'The Corvette automobile is made from ________ composite.',
    type: 'fill',
    answer: ['fiberglass', 'polyester'],
    hint: 'Unsaturated polyester application'
  },
  {
    topic: 'Composites',
    question: 'What are the two types of glass reinforcement?',
    type: 'short',
    answer: 'e glass s glass',
    acceptableAnswers: ['e and s', 'electrical and strength'],
    hint: 'Named for applications'
  },
  {
    topic: 'Composites',
    question: 'E glass is named for ________ applications.',
    type: 'fill',
    answer: ['electrical'],
    hint: 'Borosilicate composition'
  },
  {
    topic: 'Composites',
    question: 'Kevlar has tensile strength of about ________ MPa.',
    type: 'fill',
    answer: ['3102'],
    hint: 'Much higher than steel 420 MPa'
  },
  {
    topic: 'Composites',
    question: 'A 5m Kevlar canoe weighs only ________ kg.',
    type: 'fill',
    answer: ['7'],
    hint: 'Extremely lightweight'
  },
  {
    topic: 'Composites',
    question: 'PAN carbon fiber modulus can exceed ________ million psi.',
    type: 'fill',
    answer: ['100'],
    hint: 'Extremely stiff material'
  },
  {
    topic: 'Composites',
    question: 'Glass fiber diameters range from ________ to ________ mm.',
    type: 'fill',
    answer: ['0.005', '0.025'],
    hint: 'Very fine filaments'
  },
  {
    topic: 'Composites',
    question: 'What is glass roving?',
    type: 'short',
    answer: 'bundles of strands continuous',
    acceptableAnswers: ['continuous strand bundle', 'large strand', 'woven bundle'],
    hint: 'For heavy composites'
  },
  {
    topic: 'Composites',
    question: 'Contact molding maximum thickness is usually ________ mm.',
    type: 'fill',
    answer: ['9'],
    hint: 'Hand lay-up limitation'
  },
  {
    topic: 'Composites',
    question: 'Filament winding is used for ________ and ________.',
    type: 'fill',
    answer: ['pipes', 'tanks'],
    hint: 'Continuous strand applications'
  },
  {
    topic: 'Composites',
    question: 'SMC stands for ________ ________ ________.',
    type: 'fill',
    answer: ['sheet', 'molding', 'compound'],
    hint: 'Catalyzed resin with glass'
  },
  {
    topic: 'Composites',
    question: 'BMC resembles a glob of ________.',
    type: 'fill',
    answer: ['dough'],
    hint: 'Bulk molding compound consistency'
  },
  {
    topic: 'Composites',
    question: 'Pultrusion makes shapes by ________ through a die.',
    type: 'fill',
    answer: ['pulling'],
    hint: 'Continuous extrusion process'
  },
  {
    topic: 'Composites',
    question: 'What does chopped fiber spraying replace?',
    type: 'short',
    answer: 'hand lay-up',
    acceptableAnswers: ['hand layup', 'manual laying'],
    hint: 'Much faster process'
  },

  // Additional Materials Properties Questions
  {
    topic: 'Materials Properties',
    question: 'Copper is used for electrical wires because of excellent ________ conductivity.',
    type: 'fill',
    answer: ['electrical'],
    hint: 'Example from course introduction'
  },
  {
    topic: 'Materials Properties',
    question: 'Polyethylene wire coating provides electrical ________ and flexibility.',
    type: 'fill',
    answer: ['insulation'],
    hint: 'Opposite of conduction'
  },
  {
    topic: 'Materials Properties',
    question: 'What are the six major property groups?',
    type: 'short',
    answer: 'physical mechanical technological chemical economic aesthetic',
    acceptableAnswers: ['physical mechanical tech chemical economic aesthetic'],
    hint: 'Complete property categories'
  },
  {
    topic: 'Materials Properties',
    question: 'Density equals ________ divided by volume.',
    type: 'fill',
    answer: ['mass'],
    hint: 'ρ = m/V formula'
  },
  {
    topic: 'Materials Properties',
    question: 'Copper thermal conductivity is ________ W/mK.',
    type: 'fill',
    answer: ['401'],
    hint: 'High heat conductor value'
  },
  {
    topic: 'Materials Properties',
    question: 'Silver relative electrical conductivity is ________.',
    type: 'fill',
    answer: ['106'],
    hint: 'Highest conductor standard'
  },
  {
    topic: 'Materials Properties',
    question: 'Annealed copper relative conductivity is ________.',
    type: 'fill',
    answer: ['100'],
    hint: 'Reference standard value'
  },
  {
    topic: 'Materials Properties',
    question: 'Thermal expansion coefficient is inversely proportional to ________ ________.',
    type: 'fill',
    answer: ['melting', 'point'],
    hint: 'Higher melt = less expansion'
  },
  {
    topic: 'Materials Properties',
    question: 'Unit stress is symbolized as ________ sigma.',
    type: 'fill',
    answer: ['σ'],
    hint: 'Greek letter for stress'
  },
  {
    topic: 'Materials Properties',
    question: 'Strain is symbolized as ________ epsilon.',
    type: 'fill',
    answer: ['ε'],
    hint: 'Greek letter for deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'Rubber is an ________ material.',
    type: 'fill',
    answer: ['elastic'],
    hint: 'Returns to original shape'
  },
  {
    topic: 'Materials Properties',
    question: 'What happens to bubble gum when stretched?',
    type: 'short',
    answer: 'plastic deformation necking',
    acceptableAnswers: ['necks', 'thins out', 'permanent deformation'],
    hint: 'Example of plastic behavior'
  },
  {
    topic: 'Materials Properties',
    question: 'Point A on stress-strain curve is called ________ limit.',
    type: 'fill',
    answer: ['elastic', 'proportional'],
    hint: 'Linear region ends here'
  },
  {
    topic: 'Materials Properties',
    question: 'Point B on stress-strain curve is called ________ stress.',
    type: 'fill',
    answer: ['yield'],
    hint: 'Permanent deformation begins'
  },
  {
    topic: 'Materials Properties',
    question: 'Point D on stress-strain curve is called ________ strength.',
    type: 'fill',
    answer: ['tensile', 'ultimate'],
    hint: 'Maximum stress before fracture'
  },
  {
    topic: 'Materials Properties',
    question: 'Modulus of elasticity E measures material ________.',
    type: 'fill',
    answer: ['stiffness'],
    hint: 'Slope of stress-strain curve'
  },
  {
    topic: 'Materials Properties',
    question: 'Ductility is measured by ________ deformation.',
    type: 'fill',
    answer: ['tensile'],
    hint: 'Stretching without fracture'
  },
  {
    topic: 'Materials Properties',
    question: 'Malleability is measured by ________ deformation.',
    type: 'fill',
    answer: ['compressive'],
    hint: 'Flattening without fracture'
  },
  {
    topic: 'Materials Properties',
    question: 'Lead is ________ but not ductile.',
    type: 'fill',
    answer: ['malleable'],
    hint: 'Exception to general rule'
  },
  {
    topic: 'Materials Properties',
    question: 'What are the three common hardness scales?',
    type: 'short',
    answer: 'brinell vickers rockwell',
    acceptableAnswers: ['brinell vickers rockwell'],
    hint: 'Indentation test methods'
  },
  {
    topic: 'Materials Properties',
    question: 'Brittleness is associated with extreme ________.',
    type: 'fill',
    answer: ['hardness'],
    hint: 'Opposite of ductility'
  },
  {
    topic: 'Materials Properties',
    question: 'Toughness depends on ________ and ________.',
    type: 'fill',
    answer: ['ductility', 'strength'],
    hint: 'Combination properties'
  },
  {
    topic: 'Materials Properties',
    question: 'What two impact tests are commonly used?',
    type: 'short',
    answer: 'charpy izod',
    acceptableAnswers: ['charpy and izod'],
    hint: 'Pendulum test methods'
  },
  {
    topic: 'Materials Properties',
    question: 'Fatigue failure occurs from ________ or cyclic stressing.',
    type: 'fill',
    answer: ['repeated'],
    hint: 'Vibration causes fracture'
  },
  {
    topic: 'Materials Properties',
    question: 'Creep is plastic deformation from ________ stressing.',
    type: 'fill',
    answer: ['prolonged'],
    hint: 'Time-dependent deformation'
  },
  {
    topic: 'Materials Properties',
    question: 'Creep is common at high ________.',
    type: 'fill',
    answer: ['temperatures'],
    hint: 'Turbine blade problem'
  },

  // Additional Metals and Machining Questions
  {
    topic: 'Metals',
    question: 'Metals in molten state have atoms in a state of ________.',
    type: 'fill',
    answer: ['randomness', 'disarray'],
    hint: 'Opposite of crystalline order'
  },
  {
    topic: 'Metals',
    question: 'In solid state metals have ________ structure.',
    type: 'fill',
    answer: ['crystal'],
    hint: 'Orderly atomic arrangement'
  },
  {
    topic: 'Metals',
    question: 'Columnar grain structure is usually ________.',
    type: 'fill',
    answer: ['undesirable'],
    hint: 'Makes properties directional'
  },
  {
    topic: 'Metals',
    question: 'What do progressive foundries use to ensure proper solidification?',
    type: 'short',
    answer: 'computer simulation software',
    acceptableAnswers: ['simulation', 'heat transfer calculations', 'modeling'],
    hint: 'Based on heat transfer'
  },
  {
    topic: 'Metals',
    question: 'Cast-iron pipes are usually ________ cast.',
    type: 'fill',
    answer: ['centrifugally'],
    hint: 'Long continuous products'
  },
  {
    topic: 'Metals',
    question: 'Typical centrifugal cast pipe length is ________ ft.',
    type: 'fill',
    answer: ['20'],
    hint: '6 meters standard'
  },
  {
    topic: 'Metals',
    question: 'Centrifugal cast pipe diameters up to ________ inches are common.',
    type: 'fill',
    answer: ['24'],
    hint: '600mm diameter'
  },
  {
    topic: 'Metals',
    question: 'Tungsten and molybdenum cause casting problems due to high ________ temperature.',
    type: 'fill',
    answer: ['melting'],
    hint: 'Difficult to melt'
  },
  {
    topic: 'Metals',
    question: 'Aluminum relative electrical conductivity is ________.',
    type: 'fill',
    answer: ['63'],
    hint: 'Compared to copper at 100'
  },
  {
    topic: 'Metals',
    question: 'Gold relative electrical conductivity is ________.',
    type: 'fill',
    answer: ['65'],
    hint: 'Between aluminum and copper'
  },
  {
    topic: 'Metals',
    question: 'Steel relative conductivity is ________ to ________.',
    type: 'fill',
    answer: ['3', '15'],
    hint: 'Much lower than copper'
  },

  // Additional Machining Questions
  {
    topic: 'Machining',
    question: 'Machining is usually a ________ process.',
    type: 'fill',
    answer: ['secondary'],
    hint: 'Follows forming processes'
  },
  {
    topic: 'Machining',
    question: 'What precaution is needed when machining composites?',
    type: 'short',
    answer: 'ruptures bonding near holes',
    acceptableAnswers: ['disturbs bonds', 'damages structure', 'weakens material'],
    hint: 'Hole drilling problem'
  },
  {
    topic: 'Machining',
    question: 'Threads in composites have low ________ and wear resistance.',
    type: 'fill',
    answer: ['strength'],
    hint: 'Limitation of polymer materials'
  },

  // Additional Forging Questions
  {
    topic: 'Forging',
    question: 'Deformation methods require sufficient ________.',
    type: 'fill',
    answer: ['ductility'],
    hint: 'Material must be formable'
  },
  {
    topic: 'Forging',
    question: 'Glasses are suited to great variety of ________ methods.',
    type: 'fill',
    answer: ['deformation'],
    hint: 'Unique forming capability'
  },
  {
    topic: 'Forging',
    question: 'Oxide ceramics are ________ and must use powder methods.',
    type: 'fill',
    answer: ['brittle'],
    hint: 'Cannot be deformed'
  },
  {
    topic: 'Forging',
    question: 'Thermoplastics have excellent ________.',
    type: 'fill',
    answer: ['formability'],
    hint: 'Easy to shape when heated'
  },

  // Additional Ceramics Questions
  {
    topic: 'Ceramics',
    question: 'The term ceramic comes from Greek word meaning ________ ________.',
    type: 'fill',
    answer: ['burnt', 'stuff'],
    hint: 'Keramikos origin'
  },
  {
    topic: 'Ceramics',
    question: 'Ceramic firing is a high-temperature heat treatment also called ________.',
    type: 'fill',
    answer: ['firing'],
    hint: 'Achieves desired properties'
  },
  {
    topic: 'Ceramics',
    question: 'Ceramic engine components eliminate need for ________ system.',
    type: 'fill',
    answer: ['cooling'],
    hint: 'High temperature advantage'
  },
  {
    topic: 'Ceramics',
    question: 'What are the three main types of engineering ceramics?',
    type: 'short',
    answer: 'metal oxide glass ceramics carbides nitrides',
    acceptableAnswers: ['oxides glass carbides', 'alumina glass silicon'],
    hint: 'Three material categories'
  },
  {
    topic: 'Ceramics',
    question: 'Aluminas can serve at ________ °C.',
    type: 'fill',
    answer: ['1650'],
    hint: 'Very high temperature capability'
  },
  {
    topic: 'Ceramics',
    question: 'Zirconia has highest strength to ________ °C.',
    type: 'fill',
    answer: ['2204'],
    hint: 'Extreme temperature material'
  },
  {
    topic: 'Ceramics',
    question: 'Glass ceramics have near-________ coefficient of thermal expansion.',
    type: 'fill',
    answer: ['zero'],
    hint: 'No expansion with temperature'
  },
  {
    topic: 'Ceramics',
    question: 'Macor by Corning can be machined with ________ tools.',
    type: 'fill',
    answer: ['conventional'],
    hint: 'Unusual for ceramic material'
  },
  {
    topic: 'Ceramics',
    question: 'Boron carbide has very high ________ and low density.',
    type: 'fill',
    answer: ['hardness'],
    hint: 'Used for bulletproof armor'
  },
  {
    topic: 'Ceramics',
    question: 'What are the three basic ceramic forming processes?',
    type: 'short',
    answer: 'casting plastic forming pressing',
    acceptableAnswers: ['slip casting plastic pressing', 'liquid plastic solid'],
    hint: 'LSF PSF SSF categories'
  },
  {
    topic: 'Ceramics',
    question: 'Slip casting uses a ________ mold.',
    type: 'fill',
    answer: ['porous', 'plaster'],
    hint: 'Absorbs water from slip'
  },
  {
    topic: 'Ceramics',
    question: 'Ceramic shrinkage can be up to ________ percent.',
    type: 'fill',
    answer: ['20'],
    hint: 'Large dimensional change'
  },
  {
    topic: 'Ceramics',
    question: 'Jiggering is used to make ________ parts.',
    type: 'fill',
    answer: ['symmetrical'],
    hint: 'Rotating mold process'
  },
  {
    topic: 'Ceramics',
    question: 'Hot pressing applies ________ and temperature simultaneously.',
    type: 'fill',
    answer: ['pressure'],
    hint: 'Reduces porosity'
  },
  {
    topic: 'Ceramics',
    question: 'What gives ceramic parts final strength and hardness?',
    type: 'short',
    answer: 'firing sintering',
    acceptableAnswers: ['firing', 'sintering', 'heat treatment'],
    hint: 'Elevated temperature process'
  },
  {
    topic: 'Ceramics',
    question: 'Glazing gives ceramic a final ________ coat.',
    type: 'fill',
    answer: ['glassy'],
    hint: 'Improves appearance and impermeability'
  },

  // Additional Joining Process Details
  {
    topic: 'Joining Processes',
    question: 'More than ________ percent of production time is spent on assembly.',
    type: 'fill',
    answer: ['50'],
    hint: 'Major manufacturing cost'
  },
  {
    topic: 'Joining Processes',
    question: 'Mechanical fasteners represent less than ________ percent of product cost.',
    type: 'fill',
    answer: ['5'],
    hint: 'But assembly is expensive'
  },
  {
    topic: 'Joining Processes',
    question: 'Standardization is recommended to lower ________ costs.',
    type: 'fill',
    answer: ['assembly'],
    hint: 'Reduce variety of fasteners'
  },
  {
    topic: 'Joining Processes',
    question: 'In brazing temperature is above ________ °C or ________ °F.',
    type: 'fill',
    answer: ['455', '850'],
    hint: 'Higher than soldering'
  },
  {
    topic: 'Joining Processes',
    question: 'Brazing has more strength than soldering due to ________ penetration.',
    type: 'fill',
    answer: ['intergranular'],
    hint: 'Atomic forces at joint'
  },
  {
    topic: 'Joining Processes',
    question: 'Brazing filler metal temperature range is ________ to ________ °C.',
    type: 'fill',
    answer: ['620', '1200'],
    hint: 'Depends on base metal'
  },
  {
    topic: 'Joining Processes',
    question: 'Flux residue must be removed because it is ________.',
    type: 'fill',
    answer: ['corrosive'],
    hint: 'Water quench into hot bath'
  },
  {
    topic: 'Joining Processes',
    question: 'Dip brazing uses molten ________ bath as heat source.',
    type: 'fill',
    answer: ['salt'],
    hint: 'For aluminum assemblies'
  },
  {
    topic: 'Joining Processes',
    question: 'Furnace brazing uses ________ atmosphere.',
    type: 'fill',
    answer: ['hydrogen'],
    hint: 'No flux necessary'
  },
  {
    topic: 'Joining Processes',
    question: 'Why is no flux needed in furnace brazing?',
    type: 'short',
    answer: 'no oxygen present',
    acceptableAnswers: ['oxygen free', 'inert atmosphere', 'hydrogen atmosphere'],
    hint: 'Prevents oxidation'
  },
  {
    topic: 'Joining Processes',
    question: 'Oxyacetylene welding mixes ________ and ________ gases.',
    type: 'fill',
    answer: ['oxygen', 'acetylene'],
    hint: 'Gas welding fuel mixture'
  },
  {
    topic: 'Joining Processes',
    question: 'SMAW stands for ________-________ ________ ________.',
    type: 'fill',
    answer: ['shielded', 'metal', 'arc', 'welding'],
    hint: 'Stick welding full name'
  },
  {
    topic: 'Joining Processes',
    question: 'GMAW stands for ________ ________ ________ ________.',
    type: 'fill',
    answer: ['gas', 'metal', 'arc', 'welding'],
    hint: 'Also called MIG welding'
  },
  {
    topic: 'Joining Processes',
    question: 'MIG stands for ________ ________ ________.',
    type: 'fill',
    answer: ['metal', 'inert', 'gas'],
    hint: 'Same as GMAW'
  },
  {
    topic: 'Joining Processes',
    question: 'GTAW stands for ________-________ ________ ________.',
    type: 'fill',
    answer: ['gas', 'tungsten', 'arc', 'welding'],
    hint: 'Also called TIG welding'
  },
  {
    topic: 'Joining Processes',
    question: 'TIG stands for ________ ________ ________.',
    type: 'fill',
    answer: ['tungsten', 'inert', 'gas'],
    hint: 'Same as GTAW'
  },
  {
    topic: 'Joining Processes',
    question: 'Tungsten electrode does not ________ during welding.',
    type: 'fill',
    answer: ['melt'],
    hint: 'Very high melt temperature'
  },
  {
    topic: 'Joining Processes',
    question: 'Plasma arc welding current reaches ________ °C.',
    type: 'fill',
    answer: ['33315', '60000'],
    hint: 'Extremely high temperature'
  },
  {
    topic: 'Joining Processes',
    question: 'Plasma arc is constricted by forcing through small ________.',
    type: 'fill',
    answer: ['orifice'],
    hint: 'Creates energy concentration'
  },
  {
    topic: 'Joining Processes',
    question: 'RESW stands for ________ ________ ________.',
    type: 'fill',
    answer: ['resistance', 'spot', 'welding'],
    hint: 'Sheet metal process'
  },
  {
    topic: 'Joining Processes',
    question: 'Resistance spot welding is widely used in ________ industry.',
    type: 'fill',
    answer: ['automotive'],
    hint: 'Sheet metal fabrication'
  },
  {
    topic: 'Joining Processes',
    question: 'High-frequency welding uses ________ kHz frequency.',
    type: 'fill',
    answer: ['450'],
    hint: 'Creates inductance for seam welding'
  },
  {
    topic: 'Joining Processes',
    question: 'Flash welding uses ________-________ amp current.',
    type: 'fill',
    answer: ['2000', '5000'],
    hint: 'Very high amperage'
  },
  {
    topic: 'Joining Processes',
    question: 'Ultrasonic bonding frequency is ________ to ________ kHz.',
    type: 'fill',
    answer: ['10', '75'],
    hint: 'Mechanical vibration range'
  },
  {
    topic: 'Joining Processes',
    question: 'What is friction bonding used for?',
    type: 'short',
    answer: 'cylindrical parts',
    acceptableAnswers: ['round parts', 'rotating parts', 'shafts'],
    hint: 'Rotation creates heat'
  },
  {
    topic: 'Joining Processes',
    question: 'LBW stands for ________ ________ ________.',
    type: 'fill',
    answer: ['laser', 'beam', 'welding'],
    hint: 'High-tech welding method'
  },
  {
    topic: 'Joining Processes',
    question: 'Gillette Mach3 has ________ pinpoint welds.',
    type: 'fill',
    answer: ['33'],
    hint: '0.5mm diameter laser welds'
  },

  // Additional Adhesives Questions
  {
    topic: 'Adhesives',
    question: 'Adhesives distribute stresses over entire ________ area.',
    type: 'fill',
    answer: ['bond'],
    hint: 'Not point concentrated'
  },
  {
    topic: 'Adhesives',
    question: 'Good joints should withstand shear compressive and ________ forces.',
    type: 'fill',
    answer: ['tensile'],
    hint: 'Three force types'
  },
  {
    topic: 'Adhesives',
    question: 'Joints should not be subjected to ________ force.',
    type: 'fill',
    answer: ['peeling'],
    hint: 'Weakest stress mode'
  },
  {
    topic: 'Adhesives',
    question: 'Labels adhesive is weak when subjected to ________.',
    type: 'fill',
    answer: ['peeling'],
    hint: 'Patient removal method'
  },
  {
    topic: 'Adhesives',
    question: 'Advantages of adhesives include joining ________ materials.',
    type: 'fill',
    answer: ['dissimilar'],
    hint: 'No metallurgical compatibility needed'
  },
  {
    topic: 'Adhesives',
    question: 'Adhesives provide ________ dampening.',
    type: 'fill',
    answer: ['mechanical'],
    hint: 'Vibration absorption'
  },
  {
    topic: 'Adhesives',
    question: 'Adhesives have limited ________ life.',
    type: 'fill',
    answer: ['shelf'],
    hint: 'Disadvantage of adhesives'
  },
  {
    topic: 'Adhesives',
    question: 'Two-part systems limit ________ used.',
    type: 'fill',
    answer: ['time'],
    hint: 'Pot life limitation'
  },
  {
    topic: 'Adhesives',
    question: 'What type of testing is required for adhesives?',
    type: 'short',
    answer: 'destructive',
    acceptableAnswers: ['destructive testing', 'break testing'],
    hint: 'Cannot test non-destructively'
  },
  {
    topic: 'Adhesives',
    question: 'Solvent bonding is common for ________ thermoplastic resins.',
    type: 'fill',
    answer: ['amorphous'],
    hint: 'Non-crystalline polymers'
  },
  {
    topic: 'Adhesives',
    question: 'Effective solvents for ABS include acetone methylene chloride and ________.',
    type: 'fill',
    answer: ['MEK'],
    hint: 'Methyl ethyl ketone'
  },
  {
    topic: 'Adhesives',
    question: 'After solvent evaporates what is left is pure ________-to-________ bond.',
    type: 'fill',
    answer: ['material', 'material'],
    hint: 'No foreign substance'
  },
  {
    topic: 'Adhesives',
    question: 'Epoxies temperature limit is ________ °C plus.',
    type: 'fill',
    answer: ['200'],
    hint: 'High temperature capability'
  },
  {
    topic: 'Adhesives',
    question: 'Urethanes temperature limit is ________ °C.',
    type: 'fill',
    answer: ['100'],
    hint: 'Moderate temperature'
  },
  {
    topic: 'Adhesives',
    question: 'Anaerobics cure time is ________ seconds set.',
    type: 'fill',
    answer: ['15'],
    hint: 'Very fast initial set'
  },
  {
    topic: 'Adhesives',
    question: 'Anaerobic full cure time is ________ to ________ hours.',
    type: 'fill',
    answer: ['2', '24'],
    hint: 'Complete polymerization time'
  },
  {
    topic: 'Adhesives',
    question: 'What triggers anaerobic curing?',
    type: 'short',
    answer: 'absence of oxygen',
    acceptableAnswers: ['no oxygen', 'oxygen free', 'anaerobic conditions'],
    hint: 'One-part system mechanism'
  },
  {
    topic: 'Adhesives',
    question: 'Cyanoacrylate setting time is ________ or ________ seconds.',
    type: 'fill',
    answer: ['2', '3'],
    hint: 'Super glue speed'
  },
  {
    topic: 'Adhesives',
    question: 'What initiates cyanoacrylate curing?',
    type: 'short',
    answer: 'surface moisture',
    acceptableAnswers: ['moisture', 'humidity', 'water'],
    hint: 'Even air humidity works'
  },
  {
    topic: 'Adhesives',
    question: 'UV curing is typically ________ to ________ seconds.',
    type: 'fill',
    answer: ['3', '10'],
    hint: 'Extremely fast process'
  },
  {
    topic: 'Adhesives',
    question: 'Acrylics full cure is within ________ minutes or less.',
    type: 'fill',
    answer: ['30'],
    hint: 'Rapid room temperature cure'
  },
  {
    topic: 'Adhesives',
    question: 'What surface preparation exposes material to oxidizing flame?',
    type: 'short',
    answer: 'flame treatment',
    acceptableAnswers: ['flame', 'flame oxidation'],
    hint: 'Blue not yellow area'
  },
  {
    topic: 'Adhesives',
    question: 'Corona discharge uses bombardment of ________ and ions.',
    type: 'fill',
    answer: ['electrons'],
    hint: 'Electrical surface treatment'
  },
  {
    topic: 'Adhesives',
    question: 'Plasma treatment places substrate in ________ chamber.',
    type: 'fill',
    answer: ['vacuum'],
    hint: 'Inert gas environment'
  },
  {
    topic: 'Adhesives',
    question: 'Chemical etch uses ________ solution.',
    type: 'fill',
    answer: ['acid'],
    hint: 'Wet dipping process'
  },

  // Additional Fasteners Questions
  {
    topic: 'Joining Processes',
    question: 'Typically ________ percent of total production time is on fastening.',
    type: 'fill',
    answer: ['50'],
    hint: 'Major cost component'
  },
  {
    topic: 'Joining Processes',
    question: 'Penn Engineering and Manufacturing Company developed ________.',
    type: 'fill',
    answer: ['pems'],
    hint: 'Sheet metal insert fasteners'
  },
  {
    topic: 'Joining Processes',
    question: 'The most common mechanical fastener is the ________.',
    type: 'fill',
    answer: ['rivet'],
    hint: 'Pre-dates welding technology'
  },
  {
    topic: 'Joining Processes',
    question: 'Rivets were used before ________ technology was invented.',
    type: 'fill',
    answer: ['welding'],
    hint: 'Historical joining method'
  },
  {
    topic: 'Joining Processes',
    question: 'Hole edges should be ________ to remove stress raisers.',
    type: 'fill',
    answer: ['deburred'],
    hint: 'Prevents fatigue failure'
  },
  {
    topic: 'Joining Processes',
    question: 'For critical applications holes are slightly ________.',
    type: 'fill',
    answer: ['expanded'],
    hint: 'Induces compressive stresses'
  },
  {
    topic: 'Joining Processes',
    question: 'Stapling is used to fasten sheet to ________ backing.',
    type: 'fill',
    answer: ['wooden'],
    hint: 'No pre-drilling needed'
  },
  {
    topic: 'Joining Processes',
    question: 'Lock seams can be made impermeable with ________ or solder.',
    type: 'fill',
    answer: ['adhesives'],
    hint: 'Bending sequence sealing'
  }
];
