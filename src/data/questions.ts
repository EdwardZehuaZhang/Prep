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
  }
];
