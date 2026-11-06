(function () {
    const makeGuide = ({
        title,
        intro,
        explanation,
        terms,
        example,
        steps,
        practice,
        resource,
        formula,
        flow
    }) => ({
        title,
        intro,
        theory: explanation,
        example: `${example.question} ${example.answer}`,
        formula: formula || "",
        rules: steps.join(" "),
        lessonSectionsOnly: true,
        gedConnection: "GED Science questions give you information to read and reason about. Use the evidence in the question, follow these steps, and explain what your answer means.",
        lessonSections: [
            {
                title: `Why ${title} matters`,
                paragraphs: [intro]
            },
            {
                title: "1. Learn the idea and key words",
                paragraphs: [explanation],
                bullets: terms
            },
            {
                title: "2. See it step by step",
                paragraphs: ["This original diagram breaks the idea into small steps. Read each box from top to bottom."],
                visualAid: null
            },
            {
                title: "3. Real-life example",
                paragraphs: [
                    example.context || `Use this everyday example to connect the lesson to a familiar situation: ${pictureThis || intro}`,
                    example.question
                ],
                bullets: example.steps,
                paragraphsAfterBullets: [`Answer: ${example.answer}`]
            },
            {
                title: "4. A beginner's step-by-step method",
                paragraphs: ["Take your time. You do not need to memorize everything at once. Follow one step, then check it before moving on."],
                bullets: steps
            },
            {
                title: "5. Try it yourself",
                paragraphs: [practice.question],
                bullets: practice.steps,
                paragraphsAfterBullets: [`Check your answer: ${practice.answer}`, "On a GED-style question, point to the number, label, sentence, or diagram detail that supports your answer."],
            },
            {
                title: "6. Learn more for free",
                paragraphs: [
                    "This link is to a free educational resource. Some parts may use advanced words, so start with the introduction, look at its pictures, and return to this lesson if a new term is confusing."
                ],
                resourceLink: resource
            }
        ]
    });

    const biology = "https://openstax.org/books/biology-2e/pages/";
    const chemistry = "https://openstax.org/books/chemistry-2e/pages/";
    const physics = "https://openstax.org/books/physics/pages/";
    const resource = (label, href) => ({ label, href });
    const pictureThis = {
        "science-5-1": "Picture a tiny factory: the membrane is its guarded doorway, the nucleus keeps instruction plans, mitochondria release usable energy, and plant chloroplasts use light to make sugar.",
        "science-5-2": "Picture small building blocks being joined into larger structures: individual bricks make a wall, and walls help make a building. Living things are organized in a similar order.",
        "science-5-3": "Imagine a crowded room with an open doorway. People spread toward emptier areas; particles do something similar. Water moving through a cell's selective doorway is called osmosis.",
        "science-5-4": "Imagine copying a set of instructions before dividing it between new teams. Cells copy DNA before dividing so each new cell receives genetic information.",
        "science-6-1": "Picture a delivery route: digestion prepares nutrients, breathing brings in oxygen, and blood carries both to the body's cells.",
        "science-6-2": "A home thermostat senses when a room is too cold and switches on heat. The body also detects changes and responds, but its control systems are living tissues and organs.",
        "science-6-3": "A nutrition label is like a recipe's measurement card: the serving size tells you how much food its numbers describe, just as a recipe tells you what amount each measurement applies to.",
        "science-6-4": "Think of photosynthesis and respiration as connected steps: plants store some light energy in sugar; cells release usable energy from sugar when they need it.",
        "science-6-5": "Treat a health headline like a detective's claim. Check who was studied, what was measured, what the comparison was, and whether another explanation could fit the same result.",
        "science-7-1": "Picture a chromosome as a packed book, DNA as the writing, and a gene as one small instruction section in that book.",
        "science-7-2": "A gene is like a recipe topic and its alleles are recipe versions. The combination is the genotype; the observable result is the phenotype.",
        "science-7-3": "A Punnett square works like a menu of possible combinations: each parent contributes one letter, and each box records one possible pairing.",
        "science-7-4": "Imagine two seedlings from the same seed type growing in different light. Their differences may reflect their surroundings even if their inherited information is similar.",
        "science-8-1": "Picture a pond as a neighborhood. Plants and animals are its residents; water, light, soil, and temperature are conditions every resident lives with.",
        "science-8-2": "Think of a food-chain arrow as a direction sign showing where food energy goes: from the organism being eaten to the organism eating it.",
        "science-8-3": "An ecosystem is like a room with limited seats and snacks. When a needed resource runs short, the environment may not support more individuals.",
        "science-8-4": "Imagine a population with different inherited traits. If the surroundings consistently favor one trait, its carriers may leave more offspring over many generations.",
        "science-8-5": "A fossil is like a clue left from an older chapter of Earth's history. Scientists compare many clues—fossils, body structures, and DNA—before making a strong explanation.",
        "science-9-1": "Picture different toy building sets: an element uses one kind of atom, a compound has different atoms joined, and a mixture has different pieces together without being joined into a new substance.",
        "science-9-2": "Crushing ice changes its shape, but it is still water. Burning or rusting creates different substances, which is why it is a chemical change.",
        "science-9-3": "Making sugar water is like stirring one ingredient into another: sugar is what gets dissolved, water does the dissolving, and together they form a solution.",
        "science-9-4": "Imagine a busy kitchen: warming ingredients or chopping a solid into smaller pieces can make useful encounters happen faster. Scientists test one change at a time to see its effect.",
        "science-10-1": "A trip can be described by where you started, how far you traveled, how long it took, and which way you went. Those details help describe motion.",
        "science-10-2": "A tug-of-war with equal pulls is balanced. If one side pulls harder, there is a net pull toward that side and the rope starts changing motion.",
        "science-10-3": "A ramp helps move a heavy box using a smaller push over a longer path. A machine can change how a force is used, but it cannot create energy.",
        "science-11-1": "A roller coaster at the top of a hill has stored energy; as it moves down, some of that stored energy becomes motion.",
        "science-11-2": "A warm mug heats your hands when you hold it, while sunlight warms your skin without touching you.",
        "science-11-3": "Drop a pebble in water and ripples spread outward. The ripple moves energy across the pond while the water mostly moves up and down.",
        "science-11-4": "A circuit is like a round-trip road for electric charge: a battery provides energy, and a complete loop lets the charge travel.",
        "science-11-5": "Think of an energy source like a pantry: sunlight is replenished every day, while coal is a limited supply that takes nature a very long time to replace.",
        "science-12-1": "A rainstorm connects the sky, water, soil, plants, and animals; a change in one part can affect the others.",
        "science-12-2": "A flowing stream can break small pieces from a rock, carry them downhill, and leave them where the water slows.",
        "science-12-3": "Imagine two moving floor tiles touching at their edges: they can move apart, push together, or slide past, much like Earth's large plates.",
        "science-12-4": "Weather is today's outfit choice; climate is the usual wardrobe a place needs across many years.",
        "science-12-5": "A town testing river water before and after cleanup is like checking a room before and after fixing a leak: measurements help show whether conditions changed.",
        "science-13-1": "Shine a lamp on a ball and slowly turn it: the bright side represents day and the dark side represents night.",
        "science-13-2": "A ball swung on a string follows a curved path because the string pulls inward; gravity also pulls objects inward as they orbit.",
        "science-13-3": "Picture a neighborhood inside a city: planets belong to a solar system, and solar systems are part of a much larger galaxy.",
        "science-14-1": "A written description and a graph are two ways to tell the same story; checking both can reveal whether the story matches the evidence.",
        "science-14-2": "An experiment is like a recipe test: change one ingredient, keep the others the same, and measure what happens.",
        "science-14-3": "A diagram is a map of connected parts; follow its arrows to see which places may be affected when one part changes.",
        "science-14-4": "Question formats are like different containers for an answer: first solve the science problem, then put the answer in the requested container.",
        "science-15-1": "An error log is like a map of missed turns: it shows where you went wrong and how to choose a better route next time.",
        "science-15-2": "Before fixing a broken machine, find out whether the problem is the power, a loose part, or the instructions; different causes need different fixes.",
        "science-15-3": "Learning a new sport begins slowly with the right movements; practice builds accuracy before you add speed and a timer."
    };

    const guides = {
        "science-5-1": makeGuide({
            title: "Cell Structures and Functions",
            intro: "A cell is the smallest living building block. Its parts do different jobs, much like the rooms and equipment in a small factory.",
            explanation: "Every cell has a cell membrane that controls what enters and leaves, cytoplasm where many cell activities happen, and DNA that stores instructions. Many cells also have organelles—small parts with special jobs. Plant cells have a cell wall and chloroplasts; both plant and animal cells have a nucleus and mitochondria.",
            keywords: ["cell", "cell membrane", "cytoplasm", "DNA", "organelle", "nucleus", "mitochondria", "ribosome", "chloroplast", "cell wall"],
            terms: [
                "Cell: the smallest unit that can carry out the basic jobs of life.",
                "Cell membrane: a thin boundary that controls what enters and leaves.",
                "Nucleus: a cell part that holds most of the cell's DNA instructions.",
                "Mitochondria: cell parts that release usable energy from food.",
                "Chloroplast: a plant-cell part that captures light for photosynthesis.",
                "Cell wall: a firm outer support found in plant cells."
            ],
            example: {
                question: "A plant cell uses sunlight to make sugar. Which cell part helps it capture the light?",
                steps: [
                    "Find the action: the cell is using sunlight to make sugar.",
                    "Recall that photosynthesis is the process that uses light to make sugar.",
                    "Match the job to the cell part: chloroplasts capture light."
                ],
                answer: "The chloroplast helps the plant cell capture light. The cell wall supports the cell, but it does not make sugar."
            },
            steps: [
                "1. Read the question and identify the cell job it describes.",
                "2. Look for a clue such as control, energy, making proteins, or capturing light.",
                "3. Match that job to the cell part: nucleus controls instructions, mitochondria release energy, ribosomes build proteins, and chloroplasts capture light.",
                "4. Check whether the question is about a plant cell, an animal cell, or both."
            ],
            practice: {
                question: "A cell needs to control which substances enter and leave. Which part does this job?",
                steps: ["Think of the cell's outer boundary.", "Choose the part that controls entry and exit."],
                answer: "The cell membrane controls what enters and leaves."
            },
            resource: resource("OpenStax Biology 2e: Cells (free reading)", `${biology}4-introduction`),
            flow: {
                label: "Simple plant cell parts and jobs",
                steps: ["Cell membrane: controls entry and exit", "Nucleus: stores DNA instructions", "Mitochondria: release usable energy", "Chloroplasts: use light to make sugar"]
            }
        }),
        "science-5-2": makeGuide({
            title: "Levels of Organization",
            intro: "Living things are organized from tiny parts to larger working systems. Each level is built from the level below it.",
            explanation: "In a multicellular organism, similar cells work together as a tissue. Different tissues form an organ, organs work together in an organ system, and all the systems together make an organism. The levels fit inside one another like nested boxes.",
            keywords: ["cell", "tissue", "organ", "organ system", "organism", "levels of organization"],
            terms: [
                "Cell: one basic living unit.",
                "Tissue: a group of similar cells doing a shared job.",
                "Organ: different tissues working together for a larger job.",
                "Organ system: organs working together in the body.",
                "Organism: one complete living thing."
            ],
            example: {
                question: "Follow how the body moves blood from a small building block to the whole person.",
                steps: [
                    "Heart muscle cells are the small building blocks.",
                    "Many heart muscle cells working together form heart muscle tissue.",
                    "Heart tissue forms the heart, an organ.",
                    "The heart works with blood vessels in the circulatory system."
                ],
                answer: "The order is cell → tissue → organ → organ system → organism."
            },
            steps: [
                "1. Start with the smallest named part, usually a cell.",
                "2. Group similar cells together to get a tissue.",
                "3. Ask what organ is built from that tissue and other tissues.",
                "4. Name the organ system that includes the organ.",
                "5. The complete living thing is the organism."
            ],
            practice: {
                question: "Put these in order from smallest to largest: organ, cell, organism, tissue, organ system.",
                steps: ["Start with the basic living unit.", "Build up one level at a time."],
                answer: "Cell → tissue → organ → organ system → organism."
            },
            resource: resource("OpenStax Biology 2e: The Animal Body (free reading)", `${biology}33-introduction`),
            flow: { label: "Levels of biological organization", steps: ["Cell", "Tissue", "Organ", "Organ system", "Organism"] }
        }),
        "science-5-3": makeGuide({
            title: "Movement of Materials",
            intro: "Materials move into and out of cells. Water and tiny particles can move across the cell membrane, which acts like a selective doorway.",
            explanation: "Diffusion is the spreading of particles from where they are more concentrated to where they are less concentrated. Osmosis is the diffusion of water across a selectively permeable membrane. These movements do not require the cell to spend energy.",
            keywords: ["diffusion", "osmosis", "concentration", "concentration gradient", "cell membrane", "selectively permeable membrane", "passive transport"],
            terms: [
                "Concentration: how much of a substance is in a certain amount of space.",
                "Diffusion: particles spreading from higher concentration to lower concentration.",
                "Osmosis: water moving across a selectively permeable membrane.",
                "Selectively permeable: allows some substances through but blocks others.",
                "Passive transport: movement across a membrane without the cell using energy."
            ],
            example: {
                question: "A drop of food coloring is added to a glass of still water. Why does the color spread?",
                steps: [
                    "At first, many dye particles are together in one small area.",
                    "The dye particles move randomly through the water.",
                    "Over time, dye spreads from the crowded area into areas with less dye."
                ],
                answer: "The dye spreads by diffusion, from higher dye concentration toward lower dye concentration."
            },
            steps: [
                "1. Identify what is moving: a dissolved particle or water.",
                "2. If particles spread from crowded to less crowded areas, name diffusion.",
                "3. If water crosses a selectively permeable membrane, name osmosis.",
                "4. Compare the concentrations on both sides of the membrane.",
                "5. Remember: passive movement does not need the cell to spend energy."
            ],
            practice: {
                question: "A membrane lets water through but blocks a dissolved substance. What is the movement of water across it called?",
                steps: ["Notice that water is moving.", "Notice that it crosses a selectively permeable membrane."],
                answer: "The movement of water is osmosis."
            },
            resource: resource("OpenStax Biology 2e: Membranes and transport (free reading)", `${biology}5-introduction`),
            flow: { label: "Direction of diffusion", steps: ["Many particles in one area", "Particles spread out", "More even distribution"] }
        }),
        "science-5-4": makeGuide({
            title: "Cell Division",
            intro: "Cells divide so living things can grow, replace worn-out cells, and make reproductive cells. The type of division depends on the job.",
            explanation: "Before a cell divides, it copies its DNA. Mitosis makes two daughter cells with the same genetic information as the original cell; it helps with growth and repair. Meiosis makes sex cells, such as eggs or sperm, with half the usual number of chromosomes.",
            keywords: ["cell division", "DNA", "chromosome", "mitosis", "meiosis", "daughter cell", "sex cell"],
            terms: [
                "DNA: the molecule that carries inherited instructions.",
                "Chromosome: a packaged length of DNA.",
                "Mitosis: division that makes two genetically similar body cells.",
                "Meiosis: division that makes sex cells with half the usual chromosome number.",
                "Daughter cells: the new cells made when a cell divides."
            ],
            example: {
                question: "A cut in your skin needs new cells to help repair it. Which kind of cell division is involved?",
                steps: [
                    "Identify the job: replacing and repairing body cells.",
                    "Mitosis makes new body cells for growth and repair.",
                    "Meiosis makes sex cells for reproduction."
                ],
                answer: "Mitosis is used to make replacement skin cells."
            },
            steps: [
                "1. Look for the purpose: growth/repair or making sex cells.",
                "2. Choose mitosis for growth and repair.",
                "3. Choose meiosis when the question is about eggs, sperm, or passing genes to offspring.",
                "4. Compare chromosome information: mitosis keeps the usual number; meiosis halves it.",
                "5. If reading a diagram, follow the arrows and count the final cells."
            ],
            practice: {
                question: "Which process makes sex cells with half the usual number of chromosomes?",
                steps: ["Find the clue: sex cells and half the chromosomes.", "Match the clue to the division process."],
                answer: "Meiosis makes sex cells with half the usual chromosome number."
            },
            resource: resource("OpenStax Biology 2e: Cell reproduction (free reading)", `${biology}10-introduction`),
            flow: { label: "Which kind of cell division?", steps: ["Cell needs to grow or repair → mitosis", "Cell needs to make an egg or sperm → meiosis"] }
        }),
        "science-6-1": makeGuide({
            title: "Body Systems",
            intro: "Your body is made of systems that work together. A system is a group of body parts sharing a larger job.",
            explanation: "The respiratory system brings oxygen into the body. The digestive system breaks food into small nutrients. The circulatory system moves oxygen and nutrients in the blood. The excretory system helps remove wastes. No system works entirely alone.",
            keywords: ["organ system", "respiratory system", "digestive system", "circulatory system", "excretory system", "oxygen", "nutrient", "blood"],
            terms: [
                "Respiratory system: brings oxygen in and removes carbon dioxide.",
                "Digestive system: breaks food down so nutrients can be absorbed.",
                "Circulatory system: the heart and blood vessels move blood around the body.",
                "Excretory system: removes some wastes and helps balance water and salts.",
                "Nutrient: a substance in food that the body uses."
            ],
            example: {
                question: "After you eat a sandwich, how can its nutrients reach your leg muscles?",
                steps: [
                    "The digestive system breaks the food into small nutrients.",
                    "Nutrients enter the blood.",
                    "The circulatory system carries blood to the leg muscles.",
                    "Muscle cells take in nutrients and use them."
                ],
                answer: "The digestive system prepares nutrients, and the circulatory system carries them to the cells."
            },
            steps: [
                "1. Identify what must move or what job must happen.",
                "2. Match the first job to its system—for example, breaking down food is digestion.",
                "3. Trace where the material goes next, often into the blood.",
                "4. Name the system that carries it to the body cells.",
                "5. Use arrows in a diagram to follow the direction of movement."
            ],
            practice: {
                question: "Which system carries oxygen and nutrients through the body in the blood?",
                steps: ["Look for the system that moves blood.", "Connect the heart and blood vessels to their system."],
                answer: "The circulatory system carries blood, oxygen, and nutrients."
            },
            resource: resource("OpenStax Biology 2e: The Animal Body (free reading)", `${biology}33-introduction`),
            flow: { label: "How food nutrients reach body cells", steps: ["Food", "Digestive system breaks food into nutrients", "Nutrients enter blood", "Circulatory system carries nutrients to cells"] }
        }),
        "science-6-2": makeGuide({
            title: "Homeostasis",
            intro: "Your body works to keep its inside conditions in a safe range. This balancing process is called homeostasis.",
            explanation: "The body monitors conditions such as temperature, water, and blood sugar. When a condition moves away from its usual range, the body responds to bring it back. Sweating when you are hot is a simple example.",
            keywords: ["homeostasis", "stable internal condition", "stimulus", "receptor", "control center", "effector", "feedback"],
            terms: [
                "Homeostasis: keeping conditions inside the body within a workable range.",
                "Stimulus: a change that the body detects.",
                "Receptor: a sensor that notices a change.",
                "Control center: a part that processes information and coordinates a response.",
                "Effector: a muscle or organ that carries out a response.",
                "Feedback: information about a response that helps regulate a condition."
            ],
            example: {
                question: "Your body temperature rises on a hot day. How does sweating help?",
                steps: [
                    "The change in temperature is detected by the body.",
                    "The body sends signals to sweat glands.",
                    "Sweat on the skin evaporates and removes some heat."
                ],
                answer: "Sweating helps cool the body and return temperature toward its usual range."
            },
            steps: [
                "1. Name the condition being regulated, such as temperature or water level.",
                "2. Identify the change that moves it away from its usual range.",
                "3. Find the body's response to that change.",
                "4. Explain how the response moves the condition back toward its usual range.",
                "5. Do not say the body keeps a condition perfectly fixed; it usually stays within a range."
            ],
            practice: {
                question: "When you are cold, your muscles may shiver. What is the purpose of this response?",
                steps: ["Identify the condition: body temperature is low.", "Recall that muscle activity releases heat."],
                answer: "Shivering produces heat and helps bring body temperature back toward its usual range."
            },
            resource: resource("OpenStax Biology 2e: Homeostasis and the animal body (free reading)", `${biology}33-introduction`),
            flow: { label: "A simple homeostasis response", steps: ["Condition changes", "Body detects the change", "Body responds", "Condition moves back toward its usual range"] }
        }),
        "science-6-3": makeGuide({
            title: "Nutrition and Energy",
            intro: "Food provides materials for growth and repair and energy for body activities. Nutrition labels give information about what is in a serving.",
            explanation: "Carbohydrates, fats, and proteins are nutrients the body can use for energy or building materials. Vitamins, minerals, and water also support body functions. A calorie is a unit used to describe energy in food. This lesson explains basic science, not a personal diet plan.",
            keywords: ["nutrition", "nutrient", "carbohydrate", "protein", "fat", "vitamin", "mineral", "calorie", "serving size"],
            terms: [
                "Nutrient: a substance in food that the body needs.",
                "Carbohydrate: a nutrient that often provides quick-use energy.",
                "Protein: a nutrient used to build and repair body structures.",
                "Fat: a nutrient used for energy storage, cell structures, and other body jobs.",
                "Calorie: a unit for measuring energy in food.",
                "Serving size: the amount of food that the label's numbers describe."
            ],
            example: {
                question: "A food label lists 120 calories per serving. You eat two servings. How many calories does the label indicate?",
                steps: [
                    "Find the amount per serving: 120 calories.",
                    "Find how many servings were eaten: 2.",
                    "Multiply 120 × 2 = 240."
                ],
                answer: "The two servings provide 240 calories according to the label."
            },
            steps: [
                "1. Read the serving size first; the label values apply to that amount.",
                "2. Check how many servings are being discussed.",
                "3. Multiply the listed value by the number of servings if needed.",
                "4. Identify which nutrient or energy value the question asks about.",
                "5. Use the data to answer the science question; do not treat one value as a complete health judgment."
            ],
            practice: {
                question: "A snack has 5 grams of protein per serving. How much protein is in 3 servings?",
                steps: ["Find the protein in one serving.", "Multiply by the number of servings: 5 × 3."],
                answer: "There are 15 grams of protein in 3 servings."
            },
            resource: resource("OpenStax Biology 2e: Animal nutrition (free reading)", `${biology}34-introduction`)
        }),
        "science-6-4": makeGuide({
            title: "Photosynthesis and Cellular Respiration",
            intro: "Plants capture light energy to make sugar. Cells can then release usable energy from sugar through cellular respiration.",
            explanation: "In photosynthesis, plants use light, water, and carbon dioxide to make sugar and oxygen. In cellular respiration, cells use sugar and oxygen to release usable energy, producing carbon dioxide and water. Plants also carry out cellular respiration.",
            keywords: ["photosynthesis", "cellular respiration", "light energy", "glucose", "carbon dioxide", "oxygen", "water", "energy"],
            terms: [
                "Photosynthesis: a process that uses light energy to make sugar from water and carbon dioxide.",
                "Glucose: a simple sugar cells can use as food.",
                "Cellular respiration: a process that releases usable energy from food in cells.",
                "Carbon dioxide: a gas used in photosynthesis and produced in cellular respiration.",
                "Oxygen: a gas released in photosynthesis and used in cellular respiration."
            ],
            example: {
                question: "A plant is kept in the light and has water and carbon dioxide. What process can make sugar?",
                steps: [
                    "Look for the inputs: light, water, and carbon dioxide.",
                    "Match those inputs to photosynthesis.",
                    "Identify the products: sugar and oxygen."
                ],
                answer: "Photosynthesis can make sugar and oxygen from light, water, and carbon dioxide."
            },
            steps: [
                "1. Identify whether the question is about making sugar or releasing energy from sugar.",
                "2. For photosynthesis, look for light, water, and carbon dioxide as inputs.",
                "3. For cellular respiration, look for sugar and oxygen as inputs.",
                "4. Trace the outputs: photosynthesis makes sugar and oxygen; respiration makes carbon dioxide, water, and usable energy.",
                "5. Remember that plants do both processes: they make sugar and also use energy."
            ],
            practice: {
                question: "Which process uses sugar and oxygen to release usable energy in cells?",
                steps: ["Look for the process that releases energy from food.", "Match sugar and oxygen to the process."],
                answer: "Cellular respiration releases usable energy from sugar."
            },
            resource: resource("OpenStax Biology 2e: Energy and metabolism (free reading)", `${biology}7-introduction`),
            flow: { label: "How the two processes connect", steps: ["Photosynthesis: light + water + carbon dioxide → sugar + oxygen", "Cellular respiration: sugar + oxygen → usable energy + water + carbon dioxide"] }
        }),
        "science-6-5": makeGuide({
            title: "Health Evidence",
            intro: "Health claims should be checked against evidence. A study's comparison groups and methods help you judge what its results really show.",
            explanation: "A claim is a statement someone wants you to accept. Evidence is information—such as measured results—that supports or challenges the claim. A fair comparison uses groups that differ in the factor being tested while other important conditions are kept similar.",
            keywords: ["health evidence", "claim", "evidence", "sample", "treatment group", "comparison group", "control group", "variable", "correlation", "causation", "limitation"],
            terms: [
                "Claim: a statement that can be checked against evidence.",
                "Evidence: measurements or observations relevant to a question.",
                "Sample: the people or items actually included in a study.",
                "Treatment group: the group that receives the condition being tested.",
                "Comparison group: the group used to compare results.",
                "Limitation: a weakness or missing detail that makes a conclusion less certain."
            ],
            example: {
                question: "A small study finds that people who sleep more often report feeling rested. Does this prove that extra sleep caused every person's result?",
                steps: [
                    "Identify the result: more sleep was associated with feeling rested.",
                    "Check how people were assigned and what else was measured.",
                    "Consider other explanations, such as illness, work schedules, or stress.",
                    "Limit the conclusion to what the study actually measured."
                ],
                answer: "No. The pattern is evidence of an association, but it does not alone prove cause and effect."
            },
            steps: [
                "1. State the claim in your own words.",
                "2. Find the evidence and note who or what was measured.",
                "3. Identify the treatment and comparison groups, if present.",
                "4. Check whether the groups were treated fairly and whether other factors could explain the result.",
                "5. Choose a conclusion no stronger than the evidence; mention a limitation when needed."
            ],
            practice: {
                question: "A study measures only five people. What should you consider before applying the result to everyone?",
                steps: ["Identify how many people were studied.", "Ask whether that sample represents the larger group."],
                answer: "The sample is small, so the result may not represent everyone. This is a limitation."
            },
            resource: resource("MedlinePlus: Free health information from the U.S. National Library of Medicine", "https://medlineplus.gov/")
        }),
        "science-7-1": makeGuide({
            title: "DNA, Genes, and Chromosomes",
            intro: "DNA is like a long instruction book. A gene is one section of those instructions, and chromosomes are packages that organize DNA in cells.",
            explanation: "Most cells contain DNA, the molecule carrying inherited instructions. A gene is a stretch of DNA with information used to make a product or influence a trait. DNA is packaged into chromosomes. You inherit genetic information from biological parents, although many traits are also affected by the environment.",
            keywords: ["DNA", "gene", "chromosome", "heredity", "trait", "inherited"],
            terms: [
                "DNA: the molecule that carries genetic instructions.",
                "Gene: a section of DNA that carries information for a biological product or trait.",
                "Chromosome: a package of DNA and associated proteins.",
                "Heredity: the passing of genetic information from parents to offspring.",
                "Trait: a feature of an organism, such as a blood type or a plant's flower color."
            ],
            example: {
                question: "How are a gene and a chromosome related?",
                steps: [
                    "DNA carries genetic instructions.",
                    "A gene is one particular section of DNA.",
                    "A chromosome packages a long DNA molecule that contains many genes."
                ],
                answer: "A gene is a section of DNA, and many genes can be found along a chromosome."
            },
            steps: [
                "1. Start with the largest package: a chromosome contains DNA.",
                "2. Remember that DNA is the instruction-carrying molecule.",
                "3. A gene is a particular section of DNA, not a separate kind of cell.",
                "4. Connect genes with traits carefully; traits may depend on several genes and the environment.",
                "5. Use the labels in a diagram to identify which level is being shown."
            ],
            practice: {
                question: "Which contains many genes: a gene or a chromosome?",
                steps: ["Recall that a gene is a short section of DNA.", "Recall that a chromosome is a long packaged DNA molecule."],
                answer: "A chromosome contains many genes."
            },
            resource: resource("OpenStax Biology 2e: DNA structure and heredity (free reading)", `${biology}14-introduction`),
            flow: { label: "How genetic information is organized", steps: ["Chromosome contains DNA", "DNA includes genes", "Genes help influence traits"] }
        }),
        "science-7-2": makeGuide({
            title: "Traits and Alleles",
            intro: "You receive gene versions from your parents. Those versions can help explain why individuals have different traits.",
            explanation: "An allele is a version of a gene. Genotype means the allele combination an organism has; phenotype means the observable trait. In a simple dominant-recessive model, one dominant allele can affect the phenotype, but many real traits do not follow this simple pattern.",
            keywords: ["trait", "allele", "genotype", "phenotype", "dominant", "recessive", "homozygous", "heterozygous"],
            terms: [
                "Allele: one version of a gene.",
                "Genotype: the allele combination, often written as letters such as Bb.",
                "Phenotype: the observable version of a trait.",
                "Dominant: an allele that can show in a simple model when one copy is present.",
                "Recessive: an allele that shows in a simple model when two copies are present.",
                "Homozygous: having two matching alleles, such as BB or bb.",
                "Heterozygous: having two different alleles, such as Bb."
            ],
            example: {
                question: "In a simple model, B is dominant for purple flowers and b is recessive for white flowers. What phenotype is predicted for Bb?",
                steps: [
                    "The genotype is Bb, so there is one B allele and one b allele.",
                    "The question says B is dominant.",
                    "In this simple model, the dominant B determines the visible trait."
                ],
                answer: "The predicted phenotype is purple flowers. This is a simplified model, not a rule for every real trait."
            },
            steps: [
                "1. Write down the allele combination; this is the genotype.",
                "2. Read which allele is dominant in the question; do not guess.",
                "3. Use the stated inheritance rule to predict the phenotype.",
                "4. If both alleles match, call the genotype homozygous; if they differ, call it heterozygous.",
                "5. Remember that the model may be simplified; many traits involve more than one gene."
            ],
            practice: {
                question: "Using the same model, what phenotype is predicted for bb?",
                steps: ["The genotype has two b alleles.", "The question says b is recessive, so look for two copies."],
                answer: "The predicted phenotype is white flowers."
            },
            resource: resource("OpenStax Biology 2e: Mendelian inheritance (free reading)", `${biology}12-introduction`)
        }),
        "science-7-3": makeGuide({
            title: "Punnett Squares and Probability",
            intro: "A Punnett square is a simple grid for listing possible allele combinations in offspring. It shows possible outcomes, not a promise about one individual.",
            explanation: "Each parent passes one allele for a gene to an offspring. A Punnett square puts one parent's possible alleles across the top and the other's down the side. The boxes show possible combinations. Probability describes the expected share across many possible outcomes.",
            keywords: ["Punnett square", "allele", "genotype", "phenotype", "probability", "offspring", "dominant", "recessive"],
            terms: [
                "Punnett square: a grid used to show possible allele combinations.",
                "Offspring: the young produced by parents.",
                "Probability: a measure of how likely an outcome is.",
                "Genotype: an allele combination.",
                "Phenotype: an observable trait."
            ],
            example: {
                question: "Two parents are Bb in a simple model. What genotypes can their offspring have?",
                steps: [
                    "Each parent can pass B or b.",
                    "Combine the first parent's B with the second parent's B or b: BB or Bb.",
                    "Combine the first parent's b with the second parent's B or b: Bb or bb.",
                    "The four equally likely boxes are BB, Bb, Bb, and bb."
                ],
                answer: "The possible genotypes are BB, Bb, and bb. In this model, 1 of 4 boxes is bb, or 25%; this is a chance, not a guarantee."
            },
            steps: [
                "1. Write each parent's genotype.",
                "2. List the allele each parent can pass along the top and side.",
                "3. Fill each box by combining one allele from each parent.",
                "4. Count boxes that match the question.",
                "5. Divide matching boxes by total boxes to find probability."
            ],
            practice: {
                question: "For Bb × Bb, what fraction of the four boxes is bb?",
                steps: ["List the four results: BB, Bb, Bb, bb.", "Count the bb boxes and divide by four."],
                answer: "One of four boxes is bb, so the probability is 1/4 or 25%."
            },
            resource: resource("OpenStax Biology 2e: Patterns of inheritance (free reading)", `${biology}12-introduction`),
            flow: { label: "Basic Punnett square method", steps: ["List each parent's possible alleles", "Combine one allele from each parent", "Count matching boxes", "Favorable boxes ÷ all boxes = probability"] }
        }),
        "science-7-4": makeGuide({
            title: "Variation and Mutation",
            intro: "Individuals in a group are not exactly alike. Some differences are inherited, some come from the environment, and some come from both.",
            explanation: "Variation means differences among individuals. A mutation is a change in DNA. Some mutations have no noticeable effect, some are harmful, and some can be helpful in a particular environment. Environmental factors such as food, light, or temperature can also affect traits.",
            keywords: ["variation", "mutation", "DNA", "gene", "inherited", "environment", "trait"],
            terms: [
                "Variation: differences among individuals in a group.",
                "Mutation: a change in DNA.",
                "Inherited: passed from parent to offspring through genetic information.",
                "Environment: surroundings and conditions that can affect an organism.",
                "Trait: a feature that can be influenced by genes, the environment, or both."
            ],
            example: {
                question: "Two plants have the same kind of seed, but one gets more light and grows taller. Is light a genetic difference?",
                steps: [
                    "Identify the difference: the plants received different amounts of light.",
                    "Light is a condition in the surroundings, so it is an environmental factor.",
                    "The height difference in this example does not by itself show a DNA change."
                ],
                answer: "The light difference is environmental. Genes can also affect plant height, so more evidence may be needed to separate causes."
            },
            steps: [
                "1. Describe the difference you observe.",
                "2. Ask whether the information mentions DNA, genes, or parent-to-offspring transfer.",
                "3. If conditions such as light, food, or temperature differ, consider an environmental influence.",
                "4. Allow for both influences when the evidence supports them.",
                "5. Do not assume every mutation is harmful or that every difference is inherited."
            ],
            practice: {
                question: "A DNA sequence changes. What is this kind of change called?",
                steps: ["The question mentions a change in DNA.", "Match that change to the key term."],
                answer: "It is called a mutation."
            },
            resource: resource("OpenStax Biology 2e: Genes and mutations (free reading)", `${biology}15-introduction`)
        }),
        "science-8-1": makeGuide({
            title: "Ecosystem Relationships",
            intro: "An ecosystem includes living things and the nonliving surroundings they depend on. Changes to one part can affect other parts.",
            explanation: "Biotic factors are living or once-living parts, such as plants, animals, and bacteria. Abiotic factors are nonliving conditions, such as water, light, soil, and temperature. Organisms interact with each other and with their habitat.",
            keywords: ["ecosystem", "biotic", "abiotic", "organism", "habitat", "producer", "consumer", "decomposer"],
            terms: [
                "Ecosystem: living things and the nonliving environment in an area.",
                "Biotic factor: a living part of an ecosystem.",
                "Abiotic factor: a nonliving condition or material in an ecosystem.",
                "Habitat: the place where an organism lives.",
                "Producer: an organism, such as a plant, that makes its own food.",
                "Consumer: an organism that gets energy by eating other organisms.",
                "Decomposer: an organism that breaks down dead material."
            ],
            example: {
                question: "In a pond, classify algae, water, and a fish as biotic or abiotic.",
                steps: [
                    "Algae are living organisms, so algae are biotic.",
                    "Water is nonliving, so water is abiotic.",
                    "A fish is a living organism, so the fish is biotic."
                ],
                answer: "Algae and fish are biotic; water is abiotic."
            },
            steps: [
                "1. Identify the area being studied.",
                "2. List the living organisms in that area.",
                "3. List nonliving conditions such as light, water, and temperature.",
                "4. Look for interactions: what eats, shelters, competes with, or depends on what?",
                "5. Explain how a change in one factor could affect another."
            ],
            practice: {
                question: "Is sunlight a biotic or an abiotic factor in a forest?",
                steps: ["Sunlight is not an organism.", "Use the word for nonliving factors."],
                answer: "Sunlight is abiotic."
            },
            resource: resource("OpenStax Biology 2e: Ecology and ecosystems (free reading)", `${biology}44-introduction`),
            flow: { label: "Parts of an ecosystem", steps: ["Biotic: plants, animals, fungi, bacteria", "Interact with", "Abiotic: water, light, air, soil, temperature"] }
        }),
        "science-8-2": makeGuide({
            title: "Energy Flow",
            intro: "Energy moves through an ecosystem when organisms make or eat food. Arrows in a food chain point in the direction energy moves.",
            explanation: "Many food chains begin with sunlight. Producers, such as plants, use light to make food. Consumers get energy by eating plants or other animals. Decomposers break down dead material. Some energy becomes less available at each step, so food chains are usually short.",
            keywords: ["energy flow", "food chain", "food web", "producer", "consumer", "decomposer", "energy pyramid", "trophic level"],
            terms: [
                "Producer: an organism that makes its own food, often using sunlight.",
                "Consumer: an organism that gets energy by eating other organisms.",
                "Decomposer: an organism that breaks down dead material and waste.",
                "Food chain: a simple path showing who gets energy from whom.",
                "Food web: connected food chains in an ecosystem.",
                "Trophic level: an organism's feeding position in an energy path."
            ],
            example: {
                question: "In grass → rabbit → fox, which direction does the arrow show?",
                steps: [
                    "Grass is the producer and stores energy in food.",
                    "The rabbit eats the grass and gets some of that energy.",
                    "The fox eats the rabbit and gets some of its energy."
                ],
                answer: "The arrows point from the food to the organism that gets energy: grass → rabbit → fox."
            },
            steps: [
                "1. Find the producer, often a plant or algae.",
                "2. Follow each arrow from the food to the eater.",
                "3. Identify consumers by what they eat.",
                "4. Add decomposers when the diagram shows the breakdown of dead material.",
                "5. If one population changes, trace how its food and predators may also be affected."
            ],
            practice: {
                question: "If a grasshopper eats a plant, which way should the energy arrow point?",
                steps: ["Start at the source of the food.", "Point toward the organism receiving its energy."],
                answer: "Plant → grasshopper."
            },
            resource: resource("OpenStax Biology 2e: Ecosystems and energy flow (free reading)", `${biology}46-introduction`),
            flow: { label: "A simple food chain", steps: ["Sunlight", "Grass (producer)", "Rabbit (consumer)", "Fox (consumer)", "Decomposers recycle materials"] }
        }),
        "science-8-3": makeGuide({
            title: "Populations and Resources",
            intro: "A population is a group of the same kind of organism living in an area. Food, space, water, and other resources affect how large it can grow.",
            explanation: "A limiting factor is something that restricts population growth, such as food, water, space, disease, or predators. Carrying capacity is the population size an environment can support over time. It can change if the environment changes.",
            keywords: ["population", "resource", "limiting factor", "carrying capacity", "habitat", "competition"],
            terms: [
                "Population: members of one species living in the same area.",
                "Resource: something organisms need, such as food, water, or space.",
                "Limiting factor: a condition that slows or limits population growth.",
                "Carrying capacity: the population size an environment can support over time.",
                "Competition: organisms trying to use the same limited resource."
            ],
            example: {
                question: "A rabbit population grows while grass is plentiful, then levels off when food becomes scarce. What might explain the leveling?",
                steps: [
                    "The population first increases because resources are available.",
                    "Grass is a food resource for the rabbits.",
                    "When food becomes scarce, it limits how many rabbits the habitat can support."
                ],
                answer: "Limited food may bring the population near the habitat's carrying capacity."
            },
            steps: [
                "1. Read the graph labels and time scale.",
                "2. Describe whether the population increases, decreases, or levels off.",
                "3. Find a possible limiting factor in the passage or data.",
                "4. Connect the factor to survival and reproduction.",
                "5. Do not assume carrying capacity is permanent; it can change with conditions."
            ],
            practice: {
                question: "A drought reduces the water in a habitat. What kind of factor is water availability for the population?",
                steps: ["Drought changes a resource organisms need.", "Ask whether it can limit population size."],
                answer: "Water availability is a limiting factor."
            },
            resource: resource("OpenStax Biology 2e: Population ecology (free reading)", `${biology}46-introduction`)
        }),
        "science-8-4": makeGuide({
            title: "Natural Selection",
            intro: "Natural selection is a process that can make inherited traits more common in a population over many generations.",
            explanation: "Individuals in a population vary. Some differences are inherited. If an inherited trait helps an organism survive and reproduce in a particular environment, individuals with that trait may leave more offspring. Across generations, the trait may become more common. Individuals do not choose to evolve.",
            keywords: ["natural selection", "variation", "inherited trait", "adaptation", "environment", "population", "generation", "reproduction"],
            terms: [
                "Variation: differences among individuals in a population.",
                "Inherited trait: a feature that can be passed from parents to offspring.",
                "Natural selection: differences in survival and reproduction that can change trait frequencies over generations.",
                "Adaptation: an inherited feature that helps in a particular environment.",
                "Generation: one step in a line of parent-offspring relationships."
            ],
            example: {
                question: "On dark tree bark, darker beetles are harder for birds to see. What may happen over generations?",
                steps: [
                    "The beetle population has color variation.",
                    "Some color differences are inherited.",
                    "Birds may catch more visible beetles, while darker beetles survive and reproduce more often.",
                    "Their offspring may inherit darker coloring."
                ],
                answer: "If the conditions continue, darker coloring may become more common in the population over generations."
            },
            steps: [
                "1. Identify a trait that varies among individuals.",
                "2. Check whether the trait can be inherited.",
                "3. Identify the environmental condition that affects survival or reproduction.",
                "4. Explain which individuals leave more offspring and why.",
                "5. Describe how the trait may change in the population over many generations."
            ],
            practice: {
                question: "Do individual animals develop a helpful inherited trait because they need it?",
                steps: ["Natural selection acts on existing variation.", "Changes in trait frequency occur across generations."],
                answer: "No. Individuals do not evolve because they need a trait. Natural selection changes populations over generations."
            },
            resource: resource("OpenStax Biology 2e: Evolution and natural selection (free reading)", `${biology}18-introduction`),
            flow: { label: "Natural selection, step by step", steps: ["Individuals vary", "Some differences are inherited", "The environment affects survival and reproduction", "Helpful inherited traits may become more common over generations"] }
        }),
        "science-8-5": makeGuide({
            title: "Evidence of Evolution",
            intro: "Scientists use several kinds of evidence to study how living things are related and how populations have changed over time.",
            explanation: "Fossils show remains or traces of past life. Similar body structures can suggest shared ancestry, even when the structures now have different jobs. Similarities in DNA can also show relatedness. One clue is useful; several matching clues make a stronger case.",
            keywords: ["evolution", "fossil", "common ancestor", "homologous structures", "vestigial structures", "DNA", "evidence"],
            terms: [
                "Evolution: changes in inherited traits in populations over generations.",
                "Fossil: a preserved remain or trace of an organism from the past.",
                "Common ancestor: an older population from which related groups descended.",
                "Homologous structures: body parts with similar underlying structure that may have different uses.",
                "DNA evidence: similarities in genetic information that can help compare relatedness."
            ],
            example: {
                question: "Two animals have forelimbs with a similar pattern of bones but use them for different tasks. What can this suggest?",
                steps: [
                    "Compare the underlying arrangement of the bones.",
                    "Notice that the limbs have different functions.",
                    "A shared structural pattern can be evidence of a common ancestor."
                ],
                answer: "The similar bone pattern may support a relationship through a common ancestor; scientists compare it with other evidence too."
            },
            steps: [
                "1. Identify the evidence type: fossil, body structure, or DNA.",
                "2. Describe what is similar or different using details from the question.",
                "3. Explain how that pattern could support relatedness or change over time.",
                "4. Check whether another explanation is possible.",
                "5. State that evidence supports a conclusion; avoid claiming one clue proves every detail."
            ],
            practice: {
                question: "What can a fossil provide evidence about?",
                steps: ["A fossil is a preserved remain or trace.", "Connect it to organisms and environments in the past."],
                answer: "A fossil can provide evidence about past organisms and how life has changed over time."
            },
            resource: resource("OpenStax Biology 2e: Evolution (free reading)", `${biology}18-introduction`)
        }),
        "science-9-1": makeGuide({
            title: "Matter and Its Properties",
            intro: "Matter is anything that has mass and takes up space. Matter can be a pure substance or a mixture of substances.",
            explanation: "An element contains one kind of atom. A compound contains atoms of different elements joined in a set arrangement. A mixture contains substances together without joining them into one new substance. Matter can be solid, liquid, or gas.",
            keywords: ["matter", "atom", "element", "compound", "mixture", "solid", "liquid", "gas", "physical property", "chemical property"],
            terms: [
                "Matter: anything that has mass and takes up space.",
                "Atom: a tiny building block of matter.",
                "Element: a pure substance made of one type of atom.",
                "Compound: a substance made when different elements are chemically joined.",
                "Mixture: two or more substances together but not chemically joined.",
                "Physical property: something observed without changing what the substance is."
            ],
            example: {
                question: "Is salt water an element, a compound, or a mixture?",
                steps: [
                    "Salt and water are present together.",
                    "They are not permanently changed into one new substance just by mixing.",
                    "A mixture contains substances together without chemically joining them."
                ],
                answer: "Salt water is a mixture. Salt can be separated from water by evaporating the water."
            },
            steps: [
                "1. Ask whether the sample contains one substance or several.",
                "2. If it is one kind of atom, identify an element.",
                "3. If different elements are chemically joined in a fixed substance, identify a compound.",
                "4. If substances are together but not chemically joined, identify a mixture.",
                "5. Use any particle diagram or label provided as evidence."
            ],
            practice: {
                question: "A sample contains only oxygen atoms. Is it an element or a compound?",
                steps: ["A compound needs different elements joined together.", "This sample has only one kind of atom."],
                answer: "It is an element."
            },
            resource: resource("OpenStax Chemistry 2e: Matter and its classification (free reading)", `${chemistry}1-introduction`)
        }),
        "science-9-2": makeGuide({
            title: "Changes in Matter",
            intro: "Matter can change shape or state, or it can react to form different substances. Scientists use evidence to tell these changes apart.",
            explanation: "A physical change alters size, shape, or state but leaves the substance the same. A chemical change makes one or more new substances. In a chemical reaction, reactant atoms are rearranged into products; the atoms are not destroyed.",
            keywords: ["physical change", "chemical change", "reactant", "product", "chemical reaction", "conservation of matter", "atom"],
            terms: [
                "Physical change: a change in form or state without making a new substance.",
                "Chemical change: a change that forms one or more new substances.",
                "Reactant: a starting substance in a chemical reaction.",
                "Product: a substance formed by a chemical reaction.",
                "Conservation of matter: matter is not created or destroyed in an ordinary chemical reaction; atoms are rearranged."
            ],
            example: {
                question: "Ice melts into liquid water. Is this a physical or chemical change?",
                steps: [
                    "The material before and after is water.",
                    "Only the state changes from solid to liquid.",
                    "No new substance is described."
                ],
                answer: "Melting ice is a physical change."
            },
            steps: [
                "1. Name the material before and after the change.",
                "2. Ask whether a new substance is formed.",
                "3. If it is the same substance in a new shape or state, call it a physical change.",
                "4. If new substances form, call it a chemical change.",
                "5. For a reaction, identify reactants on the starting side and products on the ending side."
            ],
            practice: {
                question: "Iron reacts with oxygen and forms rust. Is this a physical or chemical change?",
                steps: ["Check whether a new substance forms.", "Rust has different properties from iron."],
                answer: "It is a chemical change because rust is a new substance."
            },
            resource: resource("OpenStax Chemistry 2e: Chemical reactions (free reading)", `${chemistry}4-introduction`),
            flow: { label: "What happens during a chemical reaction?", steps: ["Reactant particles", "Atoms rearrange", "Product particles", "The atoms are conserved"] }
        }),
        "science-9-3": makeGuide({
            title: "Solutions",
            intro: "A solution is a mixture in which one substance is spread evenly through another. Everyday examples include sugar water and air.",
            explanation: "The solute is the substance that gets dissolved; the solvent is the substance that does the dissolving. Concentration describes how much solute is in a given amount of solution. The pH scale helps describe how acidic or basic a water-based solution is.",
            keywords: ["solution", "solute", "solvent", "concentration", "dissolve", "solubility", "acid", "base", "pH"],
            terms: [
                "Solution: a mixture with substances spread evenly through it.",
                "Solute: the substance that is dissolved.",
                "Solvent: the substance that does the dissolving.",
                "Concentration: how much solute is present in a given amount of solution.",
                "Solubility: how much of a substance can dissolve under certain conditions.",
                "pH: a scale for describing how acidic or basic a water-based solution is."
            ],
            example: {
                question: "When sugar dissolves in water, identify the solute and the solvent.",
                steps: [
                    "The substance being dissolved is sugar.",
                    "The substance doing the dissolving is water.",
                    "Together they make a sugar-water solution."
                ],
                answer: "Sugar is the solute; water is the solvent."
            },
            steps: [
                "1. Identify the mixture that is evenly combined.",
                "2. Ask which substance is being dissolved; that is the solute.",
                "3. Ask which substance does the dissolving; that is the solvent.",
                "4. Compare concentration only when the amounts and units are clear.",
                "5. For pH, use the scale or information provided; do not guess a value."
            ],
            practice: {
                question: "A solution with more dissolved salt in the same amount of water is more or less concentrated?",
                steps: ["Keep the amount of water the same.", "Compare how much solute is dissolved."],
                answer: "It is more concentrated."
            },
            resource: resource("OpenStax Chemistry 2e: Solutions and concentration (free reading)", `${chemistry}11-introduction`)
        }),
        "science-9-4": makeGuide({
            title: "Reaction Rates",
            intro: "Reaction rate means how quickly reactants turn into products. Temperature, concentration, surface area, and catalysts can affect how fast this happens.",
            explanation: "A reaction happens when particles collide in ways that can produce a change. More frequent or more effective collisions can make a reaction faster. Heating, increasing concentration, or exposing more surface area often speeds a reaction. A catalyst speeds a reaction without being used up.",
            keywords: ["reaction rate", "reactant", "product", "temperature", "concentration", "surface area", "catalyst", "variable", "fair test"],
            terms: [
                "Reaction rate: how quickly a chemical reaction happens.",
                "Concentration: how much of a substance is in a given volume.",
                "Surface area: how much of a solid's outer surface is exposed.",
                "Catalyst: a substance that speeds a reaction without being used up.",
                "Variable: a factor that can change in an investigation."
            ],
            example: {
                question: "Why might crushed chalk react faster with acid than one large chalk piece of the same mass?",
                steps: [
                    "The crushed chalk is in smaller pieces.",
                    "Smaller pieces expose more total surface area to the acid.",
                    "More acid particles can contact the chalk at once."
                ],
                answer: "The larger surface area can increase collisions and make the reaction faster."
            },
            steps: [
                "1. Find how reaction speed is measured, such as time to finish or gas produced per minute.",
                "2. Identify the factor changed: temperature, concentration, surface area, or catalyst.",
                "3. Check what stayed the same so the comparison is fair.",
                "4. Compare the results using the same measurement and units.",
                "5. Describe the pattern; do not claim a factor caused it if other conditions also changed."
            ],
            practice: {
                question: "What does a catalyst do to a reaction?",
                steps: ["Look for its effect on speed.", "Remember whether the catalyst is used up."],
                answer: "A catalyst speeds a reaction without being used up."
            },
            resource: resource("OpenStax Chemistry 2e: Reaction rates (free reading)", `${chemistry}12-introduction`)
        }),
        "science-10-1": makeGuide({
            title: "Motion",
            intro: "Motion tells how an object's position changes over time. Distance and time can be used to calculate average speed.",
            explanation: "Distance is how far an object travels. Speed is distance divided by time. Velocity also includes direction. Acceleration describes a change in velocity, such as speeding up, slowing down, or turning.",
            keywords: ["motion", "position", "distance", "time", "speed", "velocity", "acceleration", "motion graph"],
            terms: [
                "Position: where an object is compared with a reference point.",
                "Distance: how much ground an object covers.",
                "Speed: distance traveled per amount of time.",
                "Velocity: speed in a stated direction.",
                "Acceleration: a change in velocity over time.",
                "Motion graph: a graph showing how a quantity such as position changes over time."
            ],
            example: {
                question: "A runner travels 100 meters in 20 seconds. What is the runner's average speed?",
                steps: [
                    "Write the relationship: average speed = distance ÷ time.",
                    "Substitute the values: 100 meters ÷ 20 seconds.",
                    "Calculate: 100 ÷ 20 = 5."
                ],
                answer: "The average speed is 5 meters per second (m/s)."
            },
            steps: [
                "1. Identify the distance and time, including their units.",
                "2. Use average speed = distance ÷ time.",
                "3. Divide and write the combined unit, such as meters per second.",
                "4. If direction is part of the question, include it for velocity.",
                "5. On a graph, read the axes and their units before describing motion."
            ],
            practice: {
                question: "A bicycle travels 30 kilometers in 2 hours. What is its average speed?",
                steps: ["Use distance ÷ time.", "Calculate 30 ÷ 2 and include the unit."],
                answer: "The average speed is 15 kilometers per hour (km/h)."
            },
            resource: resource("OpenStax Physics: Motion in one dimension (free reading)", `${physics}2-introduction`),
            formula: "Average speed = distance ÷ time",
            flow: { label: "How to find average speed", steps: ["Find distance", "Find time", "Divide distance by time", "Write the speed unit"] }
        }),
        "science-10-2": makeGuide({
            title: "Forces",
            intro: "A force is a push or pull. Forces can change an object's motion, but balanced forces do not change its motion.",
            explanation: "The net force is the overall force after all pushes and pulls are combined with direction in mind. Balanced forces have a net force of zero. Unbalanced forces have a nonzero net force and change motion. Gravity pulls objects together, while friction resists sliding between surfaces.",
            keywords: ["force", "net force", "balanced forces", "unbalanced forces", "gravity", "friction", "mass", "weight", "motion"],
            terms: [
                "Force: a push or pull.",
                "Net force: the combined effect of all forces on an object.",
                "Balanced forces: forces with a net force of zero.",
                "Unbalanced forces: forces that do not cancel and change motion.",
                "Gravity: an attractive force between objects with mass.",
                "Friction: a force that resists surfaces sliding past each other.",
                "Mass: a measure of how much matter an object has; weight is a force due to gravity."
            ],
            example: {
                question: "One person pushes a box right with 10 newtons. Another pushes left with 10 newtons. What is the net force?",
                steps: [
                    "The pushes point in opposite directions.",
                    "Because they are equal, subtract 10 N from 10 N.",
                    "The result is 0 N."
                ],
                answer: "The net force is zero, so the forces are balanced. The box's motion does not change because of these forces."
            },
            steps: [
                "1. List each force and its direction.",
                "2. Combine forces pointing the same way.",
                "3. Subtract the smaller opposing force from the larger one.",
                "4. If the result is zero, forces are balanced; if not, there is a net force.",
                "5. Describe the motion change supported by the question; a force changes motion, not necessarily speed alone."
            ],
            practice: {
                question: "A 9-newton push right competes with a 4-newton push left. What is the net force and direction?",
                steps: ["The forces are opposite, so subtract 4 from 9.", "The larger push points right."],
                answer: "The net force is 5 newtons to the right."
            },
            resource: resource("OpenStax Physics: Newton's laws and forces (free reading)", `${physics}4-introduction`)
        }),
        "science-10-3": makeGuide({
            title: "Work and Machines",
            intro: "In science, work happens when a force moves an object. Machines can make a task easier by changing the size or direction of a force.",
            explanation: "For a force acting in the direction of movement, work equals force multiplied by distance. A simple machine, such as a lever or ramp, can trade a smaller force over a longer distance for a larger force over a shorter distance. Real machines do not create energy; some energy is transferred to the surroundings.",
            keywords: ["work", "force", "distance", "simple machine", "input force", "output force", "efficiency", "energy"],
            terms: [
                "Work: energy transferred when a force moves an object over a distance.",
                "Simple machine: a tool, such as a lever or ramp, that changes how a force is applied.",
                "Input force: the force applied to a machine.",
                "Output force: the force a machine applies to a load.",
                "Efficiency: a comparison of useful output with energy or work put in."
            ],
            example: {
                question: "A person pushes a box with a 10-newton force for 3 meters in the direction of the push. How much work is done?",
                steps: [
                    "Use work = force × distance.",
                    "Substitute: 10 newtons × 3 meters.",
                    "Multiply: 10 × 3 = 30."
                ],
                answer: "The work is 30 joules (J)."
            },
            steps: [
                "1. Check that the question describes a force causing movement.",
                "2. Identify the force and the distance moved in the force's direction.",
                "3. Use work = force × distance when the question provides this relationship.",
                "4. Multiply and include joules when force is in newtons and distance is in meters.",
                "5. For a machine, compare input and output and remember that no machine creates energy."
            ],
            practice: {
                question: "A 5-newton force moves an object 2 meters in the force's direction. How much work is done?",
                steps: ["Multiply force by distance: 5 × 2.", "Use joules for the unit."],
                answer: "The work is 10 joules."
            },
            resource: resource("OpenStax Physics: Work and energy (free reading)", `${physics}7-introduction`),
            formula: "Work = force × distance (when the force acts in the direction of movement)",
            flow: { label: "How to calculate work", steps: ["Force moves an object", "Measure force in newtons", "Measure distance in meters", "Multiply force × distance to get joules"] }
        }),
        "science-11-1": makeGuide({
            title: "Forms and Conservation of Energy",
            intro: "Energy helps explain why objects move, warm up, glow, or change. It can change form, but in a closed system the total amount is conserved.",
            explanation: "Kinetic energy is energy of motion. Potential energy is stored because of position or shape, such as a raised book or stretched spring. Chemical energy is stored in substances such as food and fuel. Thermal energy is connected to the motion of tiny particles. Electrical energy is associated with electric charges. Energy can transfer between objects or change form, but it does not simply disappear.",
            terms: [
                "Energy: the ability to cause change or transfer heat.",
                "Kinetic energy: energy an object has because it is moving.",
                "Potential energy: stored energy due to position, shape, or arrangement.",
                "Thermal energy: energy related to the movement of particles in matter.",
                "Conservation of energy: energy changes or transfers, but the total is conserved in a closed system.",
                "System: the object or group of objects being studied."
            ],
            example: {
                context: "Think of a ball held above the ground. It has stored energy because of its height. When released, it falls and speeds up.",
                question: "As the ball falls, what happens to its gravitational potential energy?",
                steps: [
                    "At the top, the ball has energy stored because it is raised above the ground.",
                    "As it falls, its height becomes lower, so its gravitational potential energy decreases.",
                    "Its motion increases, so more energy is kinetic energy."
                ],
                answer: "Some gravitational potential energy changes into kinetic energy. The energy changes form; it is not destroyed."
            },
            steps: [
                "1. Name the object or system in the question.",
                "2. Ask what is happening: moving, heating, stretching, lighting, or reacting.",
                "3. Identify the energy form before the change.",
                "4. Follow arrows or events to identify the energy form after the change.",
                "5. Account for energy transferred to the surroundings, often as heat or sound."
            ],
            practice: {
                question: "A flashlight uses a battery to make light. What is one energy change?",
                steps: ["A battery stores chemical energy.", "The flashlight transfers energy into light and also some heat."],
                answer: "Chemical energy in the battery changes mainly into light energy and thermal energy."
            },
            resource: resource("OpenStax Physics: Work, energy, and energy transformations (free reading)", `${physics}7-introduction`),
            formula: "Total energy before a change = total energy after a change in a closed system",
            flow: { label: "Energy change in a falling object", steps: ["Raised ball: more stored gravitational energy", "Ball falls: stored energy changes", "Moving ball: more kinetic energy", "Some energy may transfer as sound or heat on impact"] }
        }),
        "science-11-2": makeGuide({
            title: "Heat Transfer",
            intro: "Heat is energy moving from a warmer place to a cooler place. It can move by direct contact, moving fluids, or electromagnetic waves.",
            explanation: "Conduction transfers thermal energy through touching particles, as a metal spoon warms in hot soup. Convection transfers energy through the movement of liquids or gases, such as warm air rising. Radiation transfers energy by electromagnetic waves and does not need matter in between; sunlight warms Earth this way.",
            terms: [
                "Heat transfer: movement of thermal energy from warmer to cooler places.",
                "Conduction: transfer through direct contact.",
                "Convection: transfer by the movement of a liquid or gas.",
                "Radiation: transfer by electromagnetic waves; it can travel through empty space.",
                "Temperature: a measure related to the average motion of particles."
            ],
            example: {
                context: "Imagine a metal spoon left in a cup of hot tea. The end of the spoon in the tea touches warm liquid, and soon the handle feels warmer too.",
                question: "Which heat-transfer method carries energy through the metal spoon?",
                steps: [
                    "The spoon is one solid object.",
                    "Energy passes through the material as neighboring particles transfer energy.",
                    "Transfer through touching matter is conduction."
                ],
                answer: "Conduction moves thermal energy along the spoon."
            },
            steps: [
                "1. Find the warmer and cooler objects or regions.",
                "2. Look for touching solid materials; this suggests conduction.",
                "3. Look for moving liquid or gas; this suggests convection.",
                "4. Look for energy traveling by waves, especially across space; this suggests radiation.",
                "5. State the direction: heat moves from warmer to cooler."
            ],
            practice: {
                question: "Warm air rises from a heater and circulates around a room. Which type of transfer is this?",
                steps: ["Air is a gas.", "The gas itself is moving and carrying energy."],
                answer: "This is convection."
            },
            resource: resource("OpenStax Physics: Temperature, heat, and heat transfer (free reading)", `${physics}11-introduction`),
            flow: { label: "Three ways heat can move", steps: ["Touching solids → conduction", "Moving liquid or gas → convection", "Waves across space → radiation"] }
        }),
        "science-11-3": makeGuide({
            title: "Waves",
            intro: "A wave carries energy from place to place. The material a wave travels through may vibrate, but it does not have to travel along with the wave.",
            explanation: "A wave can be described by wavelength, frequency, and amplitude. Wavelength is the distance between matching points on neighboring waves. Frequency is how many waves pass a point each second. Amplitude describes the size of the vibration. Sound needs matter to travel; light can travel through empty space.",
            terms: [
                "Wave: a repeating disturbance that carries energy.",
                "Wavelength: distance between matching points on neighboring waves.",
                "Frequency: number of waves passing a point each second.",
                "Amplitude: size of the wave's vibration from its resting position.",
                "Medium: matter, such as air or water, that a wave travels through.",
                "Sound wave: a vibration that travels through matter."
            ],
            example: {
                context: "When a speaker plays a sound, nearby air vibrates and carries the disturbance to your ear.",
                question: "If more sound-wave cycles pass your ear each second, what has increased?",
                steps: [
                    "Frequency counts cycles passing a point in one second.",
                    "The question says more cycles pass each second.",
                    "Therefore, the frequency is higher."
                ],
                answer: "The sound wave has a higher frequency. Higher frequency is usually heard as a higher pitch."
            },
            steps: [
                "1. Read the diagram labels and identify whether it shows a wave, sound, or light.",
                "2. Measure wavelength between two matching points, such as crest to crest.",
                "3. Count cycles per second to understand frequency.",
                "4. Compare the height from the resting line to understand amplitude.",
                "5. Check whether the wave needs a material medium; sound does, light does not."
            ],
            practice: {
                question: "A wave diagram shows taller crests but the same distance between crests. Which property changed?",
                steps: ["Crest height measures amplitude.", "Crest spacing measures wavelength."],
                answer: "Amplitude increased; the wavelength stayed the same."
            },
            resource: resource("OpenStax Physics: Waves and their properties (free reading)", `${physics}13-introduction`),
            flow: { label: "Parts of a simple wave", steps: ["Resting line", "Crest: highest point", "Wavelength: crest-to-crest distance", "Amplitude: resting line to crest"] }
        }),
        "science-11-4": makeGuide({
            title: "Electricity",
            intro: "Electric circuits are paths that allow electric charge to move. A simple circuit needs a source of electrical energy and a complete path.",
            explanation: "Current describes the flow of charge. Voltage is the energy difference that can push charge around a circuit. Resistance makes current harder to flow. In a series circuit there is one path; in a parallel circuit there are branches. If a series path breaks, the whole circuit stops. In a parallel circuit, another branch may still work.",
            terms: [
                "Circuit: a path through which electric charge can flow.",
                "Current: the flow of electric charge.",
                "Voltage: energy transferred per unit of charge; it can drive current.",
                "Resistance: opposition to the flow of current.",
                "Series circuit: components connected along one path.",
                "Parallel circuit: components connected on separate branches."
            ],
            example: {
                context: "Two lamps are connected in one loop with a battery. If one lamp is removed and the loop opens, there is no complete path.",
                question: "What happens to both lamps in a one-path series circuit when the path is broken?",
                steps: [
                    "A series circuit has only one path.",
                    "Removing a lamp breaks that path.",
                    "Charge cannot flow around an incomplete circuit."
                ],
                answer: "Both lamps go out because the single circuit path is open."
            },
            steps: [
                "1. Trace the circuit from the battery and check whether the path returns to the battery.",
                "2. Identify whether components are on one path (series) or separate branches (parallel).",
                "3. Follow the path to decide which components can still receive current.",
                "4. If a formula is provided, match each number to the named quantity and keep units.",
                "5. Use the diagram evidence; do not assume a wire connects where it does not."
            ],
            practice: {
                question: "A circuit has two separate branches. If one branch is open, can charge still flow through the other complete branch?",
                steps: ["Separate branches create more than one path.", "Check whether the second branch remains complete."],
                answer: "Yes. Current can still flow through the other complete branch."
            },
            resource: resource("OpenStax Physics: Electric current, circuits, and resistance (free reading)", `${physics}20-introduction`),
            flow: { label: "How a simple circuit works", steps: ["Battery supplies energy", "Charge flows through a complete wire path", "A lamp transfers electrical energy to light and heat", "The path returns to the battery"] }
        }),
        "science-11-5": makeGuide({
            title: "Energy Resources",
            intro: "People use energy to heat homes, move vehicles, and power devices. Energy resources differ in how quickly they are replaced and what effects they have.",
            explanation: "Renewable resources are replaced naturally on a human time scale, such as sunlight, wind, and flowing water. Nonrenewable resources, such as coal, oil, and natural gas, form much more slowly than people use them. Compare sources by reliability, cost, environmental effects, and how much useful energy they provide.",
            terms: [
                "Energy resource: a source people use to obtain usable energy.",
                "Renewable: replenished naturally on a human time scale.",
                "Nonrenewable: used faster than nature replaces it.",
                "Efficiency: useful energy output compared with energy input.",
                "Environmental impact: an effect an energy source has on air, water, land, or living things."
            ],
            example: {
                context: "A town compares sunlight and coal for generating electricity. Solar panels use sunlight, while coal is mined and burned.",
                question: "Which source is renewable, and what is one fair comparison to make?",
                steps: [
                    "Sunlight is continually supplied by the Sun, so solar energy is renewable.",
                    "Coal is a fossil fuel that takes millions of years to form, so it is nonrenewable.",
                    "Compare both using the same evidence, such as cost per unit of electricity or emissions."
                ],
                answer: "Solar is renewable; coal is nonrenewable. A fair comparison uses the same measure for both and considers trade-offs."
            },
            steps: [
                "1. Identify the energy source and how people use it.",
                "2. Decide whether it is renewable or nonrenewable based on how quickly it is replaced.",
                "3. Read the data labels and compare the same measure for each source.",
                "4. Consider benefits and costs, including reliability and environmental effects.",
                "5. Support your conclusion with specific information; avoid saying a source has no impact unless evidence supports that."
            ],
            practice: {
                question: "Wind is continually produced by atmospheric movement. Is wind energy renewable or nonrenewable?",
                steps: ["Ask whether nature replaces the resource on a human time scale.", "Wind is continually generated by weather patterns."],
                answer: "Wind energy is renewable."
            },
            resource: resource("U.S. Energy Information Administration: Energy explained (free)", "https://www.eia.gov/energyexplained/"),
            flow: { label: "Compare an energy resource", steps: ["Where does it come from?", "Can nature replace it quickly?", "What useful energy does it provide?", "What costs or impacts does the evidence show?"] }
        }),
        "science-12-1": makeGuide({
            title: "Interacting Earth Systems",
            intro: "Earth is made of connected systems. Air, water, rocks, and living things can affect one another.",
            explanation: "The atmosphere is the air around Earth. The hydrosphere includes Earth's water. The geosphere includes rocks, soil, and Earth's solid parts. The biosphere includes living things. A change in one system can move matter or energy into another—for example, rain from the atmosphere can shape the geosphere and provide water to living things.",
            terms: [
                "Atmosphere: the layer of gases surrounding Earth.",
                "Hydrosphere: water on, under, and above Earth's surface.",
                "Geosphere: rocks, soil, and the solid parts of Earth.",
                "Biosphere: all living things and the places where life exists.",
                "Cycle: matter moving repeatedly through connected places or processes."
            ],
            example: {
                context: "After rain falls on a hillside, water flows over soil, carries small pieces downhill, and enters a stream where plants and animals live.",
                question: "Which Earth systems interact in this example?",
                steps: [
                    "Rain is water moving from the atmosphere to the surface.",
                    "The water moves soil and rock from the geosphere.",
                    "The stream supports living organisms in the biosphere."
                ],
                answer: "The atmosphere, hydrosphere, geosphere, and biosphere all interact."
            },
            steps: [
                "1. Read the event or diagram title.",
                "2. Identify air, water, solid Earth, and living things.",
                "3. Trace arrows to see where matter or energy moves.",
                "4. Name every system affected by the event.",
                "5. Explain the connection in order, using evidence from the passage or diagram."
            ],
            practice: {
                question: "Water evaporates from an ocean and later falls as rain. Which two Earth systems are directly involved?",
                steps: ["The ocean is part of the hydrosphere.", "Water vapor and clouds are in the atmosphere."],
                answer: "The hydrosphere and atmosphere interact."
            },
            resource: resource("NASA Earth Observatory: The water cycle (free reading)", "https://science.nasa.gov/earth/earth-observatory/the-water-cycle/"),
            flow: { label: "A simple water-cycle path", steps: ["Sun warms surface water", "Water evaporates into the atmosphere", "Water vapor forms clouds", "Rain returns water to land and oceans"] }
        }),
        "science-12-2": makeGuide({
            title: "Earth Materials and Processes",
            intro: "Earth's surface changes slowly or suddenly. Rocks and soil break down, move, and settle in new places.",
            explanation: "Weathering breaks rock into smaller pieces. Erosion moves those pieces by water, wind, ice, or gravity. Deposition happens when the moving material settles. These processes can change landscapes and help form sedimentary rock over long periods.",
            terms: [
                "Weathering: breaking rock into smaller pieces.",
                "Erosion: moving broken rock or soil to another place.",
                "Deposition: settling of moved material.",
                "Sediment: small pieces of rock, soil, or other material.",
                "Rock cycle: processes that change rocks among different forms over time."
            ],
            example: {
                context: "A stream flows around a rocky hill. Over time, pieces break off, travel downstream, and collect where the water slows.",
                question: "Which event is weathering, erosion, and deposition?",
                steps: [
                    "Rock breaking into smaller pieces is weathering.",
                    "The stream carrying pieces downstream is erosion.",
                    "Pieces settling where the water slows is deposition."
                ],
                answer: "Breaking is weathering; carrying is erosion; settling is deposition."
            },
            steps: [
                "1. Find the action word in the passage or diagram.",
                "2. If rock breaks apart in place, identify weathering.",
                "3. If pieces are transported, identify erosion.",
                "4. If transported pieces settle, identify deposition.",
                "5. Follow the order of arrows to understand how the landscape changes."
            ],
            practice: {
                question: "Wind carries sand across a field. Which process describes the movement?",
                steps: ["The sand has been broken into pieces.", "The question asks about the pieces being carried."],
                answer: "The movement is erosion."
            },
            resource: resource("NASA Earth Observatory: Earth science images and stories (free)", "https://science.nasa.gov/earth/earth-observatory/"),
            flow: { label: "Three surface processes", steps: ["Weathering: break rock", "Erosion: move pieces", "Deposition: pieces settle"] }
        }),
        "science-12-3": makeGuide({
            title: "Plate Tectonics",
            intro: "Earth's outer shell is divided into huge pieces called plates. Their slow movement helps explain earthquakes, volcanoes, and mountain ranges.",
            explanation: "Tectonic plates move slowly over the softer material beneath them. At a divergent boundary, plates move apart. At a convergent boundary, plates move toward one another. At a transform boundary, plates slide past. These motions can cause earthquakes; some boundaries also create volcanoes or mountains.",
            terms: [
                "Tectonic plate: a large moving piece of Earth's outer shell.",
                "Boundary: the edge where two plates meet.",
                "Divergent: plates move apart.",
                "Convergent: plates move toward each other.",
                "Transform: plates slide sideways past one another.",
                "Earthquake: sudden shaking when stored energy is released as rocks move."
            ],
            example: {
                context: "Imagine two rough books pushed toward each other on a table. Their edges crumple upward as they press together.",
                question: "Which type of plate boundary can push crust together and build mountains?",
                steps: [
                    "The plates move toward one another.",
                    "A boundary where plates come together is convergent.",
                    "Compression can push rock upward and build mountains."
                ],
                answer: "A convergent boundary can build mountains where plates collide."
            },
            steps: [
                "1. Find the arrows on the plate diagram.",
                "2. Arrows apart mean divergent; toward each other mean convergent; sideways past means transform.",
                "3. Identify the landform or event shown near the boundary.",
                "4. Connect the boundary motion to the event using the diagram or passage.",
                "5. Do not assume every boundary creates the same feature; use its type and evidence."
            ],
            practice: {
                question: "Two plates slide horizontally past one another. What boundary is shown?",
                steps: ["Look at the direction of motion.", "Sideways sliding is one of the three main boundary types."],
                answer: "It is a transform boundary."
            },
            resource: resource("USGS Earthquake Hazards Program: Plate-boundary and earthquake information (free)", "https://www.usgs.gov/programs/earthquake-hazards/science"),
            flow: { label: "Read a plate-boundary diagram", steps: ["Check both plate arrows", "Name the boundary: apart, together, or sliding", "Look at nearby features", "Connect motion to the evidence shown"] }
        }),
        "science-12-4": makeGuide({
            title: "Weather and Climate",
            intro: "Weather describes short-term conditions in the air. Climate describes the usual patterns in a place over many years.",
            explanation: "Weather includes temperature, precipitation, wind, clouds, and humidity at a particular time. Climate is the long-term pattern of these conditions. Sunlight, latitude, elevation, oceans, and air movement can affect climate. A cold day does not disprove long-term warming, just as one hot day does not define a whole climate.",
            terms: [
                "Weather: short-term atmospheric conditions.",
                "Climate: long-term patterns of weather in a region.",
                "Precipitation: water that falls from clouds as rain, snow, sleet, or hail.",
                "Humidity: the amount of water vapor in the air.",
                "Atmosphere: the layer of gases surrounding Earth."
            ],
            example: {
                context: "A forecast says tomorrow will be rainy and cool, while a climate summary says the region is usually hot and dry in summer.",
                question: "Which statement describes weather and which describes climate?",
                steps: [
                    "Tomorrow's conditions describe a short time period.",
                    "The usual summer pattern describes many years.",
                    "Short-term conditions are weather; long-term patterns are climate."
                ],
                answer: "Rainy and cool tomorrow is weather. Usually hot and dry summers describe climate."
            },
            steps: [
                "1. Check the time period in the question.",
                "2. A day-to-day event is weather; a pattern over many years is climate.",
                "3. Read graph titles, axes, units, and date ranges.",
                "4. Describe the pattern using more than one data point.",
                "5. Separate a single unusual day from a long-term trend."
            ],
            practice: {
                question: "A graph shows average rainfall for a city over 30 years. Is it showing weather or climate?",
                steps: ["Thirty years is a long time period.", "Long-term patterns describe climate."],
                answer: "It is climate information."
            },
            resource: resource("NASA Climate Kids: Weather and climate (free learning)", "https://science.nasa.gov/kids/earth/"),
            flow: { label: "Decide whether information is weather or climate", steps: ["Find the time period", "Hours or days → weather", "Many years → climate", "Use the graph trend, not one isolated day"] }
        }),
        "science-12-5": makeGuide({
            title: "Environmental Change",
            intro: "Environmental change can affect land, water, air, and living things. Good explanations separate what was measured from what people predict.",
            explanation: "Pollution adds harmful substances or energy to the environment. Habitat change alters the place where organisms live. Resource use can change how much water, soil, fuel, or living material remains. To evaluate a solution, compare evidence about its benefits, costs, and possible unintended effects.",
            terms: [
                "Pollution: harmful material or energy entering the environment.",
                "Habitat: the place where an organism lives.",
                "Resource: something people or organisms use, such as water or fuel.",
                "Observation: something measured or directly noticed.",
                "Prediction: a statement about what may happen later.",
                "Trade-off: a benefit gained along with a cost or disadvantage."
            ],
            example: {
                context: "A town measures stream water before and after a new filter is installed near a factory.",
                question: "What evidence would help decide whether the filter improved water quality?",
                steps: [
                    "Compare measurements taken before and after installation.",
                    "Check that the same substances and units were measured.",
                    "Look for other changes, such as rainfall or other pollution sources.",
                    "Use the actual results rather than assuming improvement."
                ],
                answer: "Matching water-quality measurements and information about other factors would help evaluate the filter."
            },
            steps: [
                "1. Name the environmental problem and what is affected.",
                "2. Separate observed measurements from predictions or opinions.",
                "3. Compare before-and-after or treatment-and-comparison data.",
                "4. Look for possible other causes and study limitations.",
                "5. Compare solutions using the same evidence and include both benefits and costs."
            ],
            practice: {
                question: "A report predicts that a restored wetland may reduce flooding. Is that a direct observation or a prediction?",
                steps: ["The word may refers to a possible future outcome.", "A prediction describes what might happen."],
                answer: "It is a prediction."
            },
            resource: resource("U.S. EPA: Environmental topics and information (free)", "https://www.epa.gov/environmental-topics")
        }),
        "science-13-1": makeGuide({
            title: "Earth-Sun-Moon Relationships",
            intro: "Earth's movement and the Moon's orbit create familiar patterns such as day and night, seasons, Moon phases, and eclipses.",
            explanation: "Earth rotates, or spins, once about every 24 hours; this causes day and night. Earth revolves around the Sun once each year. Earth's tilted axis as it revolves causes seasons. The Moon revolves around Earth; we see different portions of its sunlit half as phases. An eclipse occurs when the Sun, Earth, and Moon line up in a particular way.",
            terms: [
                "Rotation: spinning around an object's axis.",
                "Revolution: movement in an orbit around another object.",
                "Axis: an imaginary line an object spins around.",
                "Orbit: the path one object follows around another.",
                "Moon phase: the changing portion of the Moon's sunlit half visible from Earth.",
                "Eclipse: an event in which one object blocks light from or to another."
            ],
            example: {
                context: "Imagine a lamp as the Sun and a ball as Earth. Turn the ball slowly while keeping one side facing the lamp.",
                question: "Why does the side facing away from the lamp have nighttime?",
                steps: [
                    "The lamp represents sunlight.",
                    "The ball represents Earth, which rotates.",
                    "The side facing away from the light receives less direct sunlight."
                ],
                answer: "Earth's rotation turns a location away from the Sun, creating nighttime there."
            },
            steps: [
                "1. Identify which objects are shown: Earth, Sun, and Moon.",
                "2. Check arrows: spin around an object's own axis is rotation; travel around another object is revolution.",
                "3. For seasons, look for Earth's tilted axis as Earth revolves around the Sun.",
                "4. For Moon phases, locate the Sun and follow the Moon's orbit.",
                "5. For eclipses, check whether the objects line up and which object blocks light."
            ],
            practice: {
                question: "What movement of Earth causes day and night?",
                steps: ["Day and night change as a location faces toward or away from the Sun.", "Earth spins on its axis."],
                answer: "Earth's rotation causes day and night."
            },
            resource: resource("NASA: The Moon (free science information)", "https://science.nasa.gov/moon/"),
            flow: { label: "Why a location has day and night", steps: ["Sunlight reaches one side of Earth", "Earth rotates", "Your location turns toward sunlight: day", "Your location turns away: night"] }
        }),
        "science-13-2": makeGuide({
            title: "Gravity and Orbits",
            intro: "Gravity is an attractive force between objects that have mass. It helps keep moons, planets, and satellites in orbit.",
            explanation: "An orbit is a repeated path around another object. Gravity pulls an orbiting object inward, while the object's forward motion keeps it moving along instead of falling straight in. Orbit diagrams are often simplified and may not show true sizes or distances.",
            terms: [
                "Gravity: an attractive force between objects with mass.",
                "Orbit: the path followed by an object moving around another object.",
                "Mass: the amount of matter in an object.",
                "Satellite: an object that orbits a planet; the Moon is Earth's natural satellite.",
                "Model: a simplified representation that shows some features but may leave out others."
            ],
            example: {
                context: "A ball swung on a string follows a curved path because the string continually pulls it toward the hand. Gravity plays a pulling role for orbiting objects.",
                question: "What role does the Sun's gravity play in Earth's orbit?",
                steps: [
                    "Earth is moving forward as it travels through space.",
                    "The Sun's gravity pulls Earth toward the Sun.",
                    "Together, the motion and gravitational pull make Earth's path curved around the Sun."
                ],
                answer: "The Sun's gravity helps keep Earth in its orbit rather than moving in a straight line."
            },
            steps: [
                "1. Identify the orbiting object and the object it travels around.",
                "2. Read arrows or labels for the direction of movement.",
                "3. Identify gravity as the inward attraction.",
                "4. Explain that forward motion and gravity together produce an orbit.",
                "5. Use the model's scale and labels; do not assume a drawing shows exact size or distance."
            ],
            practice: {
                question: "What force keeps the Moon in orbit around Earth?",
                steps: ["The Moon is a natural satellite of Earth.", "An attractive force between masses acts between them."],
                answer: "Earth's gravity helps keep the Moon in orbit."
            },
            resource: resource("NASA Space Place: What is gravity? (free learning)", "https://spaceplace.nasa.gov/what-is-gravity/en/"),
            flow: { label: "Why an object can orbit", steps: ["Object moves forward", "Gravity pulls it inward", "Its path continually curves", "The object follows an orbit"] }
        }),
        "science-13-3": makeGuide({
            title: "Stars and the Universe",
            intro: "The universe contains many levels of space objects. A star is not a planet, and a galaxy is much larger than one solar system.",
            explanation: "A star is a hot ball of gas that gives off its own light. A planet orbits a star and reflects light. A solar system includes a star and the objects that orbit it. A galaxy contains enormous numbers of stars, gas, and dust held together by gravity. Astronomers use light and other evidence to study objects too far away to visit.",
            terms: [
                "Star: a hot ball of gas that produces its own light.",
                "Planet: an object that orbits a star and does not make visible light like a star.",
                "Solar system: a star and the objects that orbit it.",
                "Galaxy: a huge collection of stars, gas, and dust held together by gravity.",
                "Light-year: a distance light travels in one year; it is a distance, not a time."
            ],
            example: {
                context: "Earth orbits the Sun. The Sun is one star among many in the Milky Way galaxy.",
                question: "Put Earth, the Sun, the solar system, and the Milky Way in order from smaller structure to larger structure.",
                steps: [
                    "Earth is a planet.",
                    "The Sun and the objects orbiting it form the solar system.",
                    "The solar system is one small part of the Milky Way galaxy."
                ],
                answer: "Earth → solar system → Milky Way galaxy. The Sun is the star at the center of our solar system."
            },
            steps: [
                "1. Read the object's name and the evidence in the question.",
                "2. Ask whether it makes its own light (star) or orbits a star (planet).",
                "3. Group a star with its orbiting objects to identify a solar system.",
                "4. Group many stars and solar systems to identify a galaxy.",
                "5. When reading star data, check the units and compare like measurements."
            ],
            practice: {
                question: "Does a planet usually make its own visible light, or reflect light from a star?",
                steps: ["A star produces its own light.", "A planet reflects light from the star it orbits."],
                answer: "A planet reflects light from a star."
            },
            resource: resource("NASA: Stars and the universe (free learning)", "https://science.nasa.gov/universe/stars/"),
            flow: { label: "A few levels in space", steps: ["Planet", "Orbits a star", "Star and orbiting objects form a solar system", "Many stars and systems are in a galaxy"] }
        }),
        "science-14-1": makeGuide({
            title: "Passage Plus Graph",
            intro: "Some science questions show the same information in words and in a graph. Your job is to check whether the graph supports the passage.",
            explanation: "A claim is a statement that can be checked. A graph provides data through its title, axes, labels, scale, and plotted values. A supported conclusion matches the data; an unsupported one adds information the graph does not show.",
            terms: [
                "Passage: written information describing a topic, study, or claim.",
                "Claim: a statement that can be checked against evidence.",
                "Graph: a visual display of data.",
                "Axis: a line on a graph that identifies a quantity or scale.",
                "Evidence: information used to support or challenge a claim.",
                "Trend: a general pattern in data."
            ],
            example: {
                context: "A passage says seedlings grew taller with more light. A graph shows average height at several light levels.",
                question: "How can you check whether the graph supports the passage?",
                steps: [
                    "Read the graph title and identify what each axis measures.",
                    "Compare the values at low and high light levels.",
                    "Check whether the heights generally rise as light increases.",
                    "Look for exceptions and do not claim the graph proves a cause unless the study design supports it."
                ],
                answer: "If the plotted heights generally rise, the graph supports an increase pattern, but the evidence and study design set the limits of the claim."
            },
            steps: [
                "1. Read the question first to know what claim to check.",
                "2. Read the graph title, axes, units, and scale.",
                "3. Find the values that directly relate to the claim.",
                "4. Describe whether the values support, contradict, or do not address it.",
                "5. Choose the most careful answer and cite the graph evidence."
            ],
            practice: {
                question: "A passage says temperature rose. What should you inspect first in the graph?",
                steps: ["Check which axis shows temperature.", "Then compare the values over the stated time or groups."],
                answer: "Inspect the axis label, units, and scale for temperature, then compare the relevant values."
            },
            resource: resource("GED Testing Service: Science test overview (free information)", "https://www.ged.com/about-test/test-subjects/science.html"),
            flow: { label: "Check a passage claim against a graph", steps: ["Identify the claim", "Read the graph labels and units", "Find relevant values", "Decide whether evidence supports the claim"] }
        }),
        "science-14-2": makeGuide({
            title: "Experiment Plus Calculation",
            intro: "An experiment question may ask you to understand the test and calculate a result. First find what changed and what was measured.",
            explanation: "An experiment changes or compares a factor and records a result. The independent variable is the factor changed; the dependent variable is the measured result. Repeated trials can help reveal a typical result. Common calculations include averages, rates, and percentages.",
            terms: [
                "Independent variable: the factor changed or compared.",
                "Dependent variable: the result measured.",
                "Control: a condition kept the same or a comparison condition used in a study.",
                "Trial: one run or repetition of an experiment.",
                "Mean: total of values divided by the number of values.",
                "Rate: a quantity measured per unit of another quantity."
            ],
            example: {
                context: "A student measures how far a toy car travels down three identical ramps after changing the ramp's height.",
                question: "What is the independent variable, and what is the mean distance if the trials are 4, 5, and 6 meters?",
                steps: [
                    "The factor deliberately changed is ramp height, so that is the independent variable.",
                    "The measured distance is the dependent variable.",
                    "Add the distances: 4 + 5 + 6 = 15 meters.",
                    "Divide by 3 trials: 15 ÷ 3 = 5 meters."
                ],
                answer: "Ramp height is the independent variable, distance is the dependent variable, and the mean distance is 5 meters."
            },
            steps: [
                "1. State the test question in your own words.",
                "2. Identify the factor changed and the result measured.",
                "3. Notice conditions that should stay the same for a fair comparison.",
                "4. Select the calculation requested and write its formula.",
                "5. Substitute values, calculate, include units, and decide whether the result supports the conclusion."
            ],
            practice: {
                question: "Three trials take 8, 10, and 12 seconds. What is the mean time?",
                steps: ["Add the times: 8 + 10 + 12.", "Divide by the three trials."],
                answer: "The mean is 30 ÷ 3 = 10 seconds."
            },
            resource: resource("GED Testing Service: Science test overview (free information)", "https://www.ged.com/about-test/test-subjects/science.html"),
            flow: { label: "Solve an experiment and calculation question", steps: ["Identify what changed", "Identify what was measured", "Choose the requested calculation", "Calculate with units", "Check the conclusion"] }
        }),
        "science-14-3": makeGuide({
            title: "Diagram Plus Prediction",
            intro: "A diagram shows parts or connections in a system. A prediction explains what may happen if one part changes.",
            explanation: "Read the diagram's labels, arrows, and key before making a prediction. Follow the connections from the changed part to the affected parts. A good prediction uses the model and passage, and it does not claim more than the information supports.",
            terms: [
                "Diagram: a drawing that represents parts or relationships.",
                "Model: a simplified representation of a real object or system.",
                "Arrow: a symbol that may show direction, movement, or a connection; check its key.",
                "Prediction: a statement about a possible future result.",
                "System: connected parts that affect one another."
            ],
            example: {
                context: "A food web shows grass feeding rabbits and rabbits feeding foxes.",
                question: "If the rabbit population decreases, what might happen to the foxes?",
                steps: [
                    "Follow the arrow from rabbits to foxes to see that foxes use rabbits as food.",
                    "Fewer rabbits may mean less food for foxes.",
                    "Other foods and conditions can also affect the fox population."
                ],
                answer: "The fox population may decrease if it has less food, but the diagram alone does not guarantee exactly what will happen."
            },
            steps: [
                "1. Read the diagram title, labels, and key.",
                "2. Locate the part that changes in the question.",
                "3. Follow arrows or links to directly connected parts.",
                "4. Predict the likely effect and explain the connection.",
                "5. Use words such as may or likely when other factors could affect the outcome."
            ],
            practice: {
                question: "A diagram shows a lamp in a circuit. The only wire path is broken. What happens to the lamp?",
                steps: ["Check whether the circuit has a complete path.", "An open path stops current in a simple circuit."],
                answer: "The lamp goes out because charge cannot flow through a broken circuit."
            },
            resource: resource("GED Testing Service: Science test overview (free information)", "https://www.ged.com/about-test/test-subjects/science.html"),
            flow: { label: "Make a supported prediction from a diagram", steps: ["Read labels and key", "Find the changed part", "Follow its connections", "Predict an effect", "State what is uncertain"] }
        }),
        "science-14-4": makeGuide({
            title: "Question-Format Practice",
            intro: "Science questions may ask you to choose an answer, type a number, match items, or select a part of a picture. The first step is always to understand the task.",
            explanation: "Different formats present answers differently, but the science reasoning stays the same: use the passage, data, or model. Selected-response questions ask you to choose. Numerical-entry questions ask for a number. Matching or drag-and-drop questions ask you to connect items. Hot-spot questions ask you to select a location on a diagram.",
            terms: [
                "Selected response: choose one or more answers from the choices.",
                "Numerical entry: enter a calculated number.",
                "Matching: connect related terms, values, or descriptions.",
                "Hot spot: select a location in an image or diagram.",
                "Evidence: the information that supports your answer."
            ],
            example: {
                context: "A question gives a graph of plant growth and asks you to select the statement best supported by the graph.",
                question: "What should you do before choosing an option?",
                steps: [
                    "Notice the task word: select the statement best supported.",
                    "Read the graph title, axes, units, and relevant values.",
                    "Check every answer choice against those values.",
                    "Reject statements that add unsupported causes or details."
                ],
                answer: "Use the graph as evidence and choose only a statement that matches it."
            },
            steps: [
                "1. Read the question and identify its action word: choose, calculate, match, or select.",
                "2. Mark what information source to use: passage, graph, table, or diagram.",
                "3. Solve the science reasoning before interacting with the answer controls.",
                "4. Enter or select exactly what the format requests.",
                "5. Check the answer and units before moving on."
            ],
            practice: {
                question: "A question asks for the average of three measurements and provides a number-entry box. What type of answer should you enter?",
                steps: ["Calculate the mean from the three values.", "The format asks for a number, not a paragraph."],
                answer: "Enter the calculated number, including any unit only if the instructions request it."
            },
            resource: resource("GED Testing Service: Official Science test information", "https://www.ged.com/about-test/test-subjects/science.html")
        }),
        "science-15-1": makeGuide({
            title: "Keep an Error Log",
            intro: "A wrong answer can show you what to practice next. An error log helps turn a mistake into a small, clear learning goal.",
            explanation: "After practice, record the topic, the question you missed, why your answer seemed right, and what the correct reasoning is. A useful note describes the mistake specifically—for example, “I read the graph scale as 10 instead of 5”—rather than only saying “I got it wrong.”",
            terms: [
                "Error log: a record of mistakes and the reasoning that fixes them.",
                "Skill: the specific ability being practiced, such as reading a graph.",
                "Correction: the accurate step or explanation that replaces the mistake.",
                "Review goal: the next small practice action you plan to do."
            ],
            example: {
                context: "You choose 30 seconds from a graph, but the correct value is 15 seconds because each grid interval represents 5 seconds.",
                question: "What should you write in your error log?",
                steps: [
                    "Name the skill: reading a graph scale.",
                    "Describe the error: counted each grid interval as 10 seconds.",
                    "Write the correction: check the axis labels and interval size.",
                    "Choose a next action: practice reading two more graph scales."
                ],
                answer: "Write what you misunderstood, the correct reading method, and one specific practice task."
            },
            steps: [
                "1. Write down the lesson or question type.",
                "2. Describe the exact step where your reasoning went off track.",
                "3. Write the correct method in your own words.",
                "4. Note a clue that can help next time.",
                "5. Choose a short follow-up practice and revisit the log later."
            ],
            practice: {
                question: "You forgot to include units in a speed answer. Write one useful correction.",
                steps: ["Name the mistake.", "Write a reminder you can use during the next problem."],
                answer: "For example: “I calculated distance divided by time but left off km/h. Next time I will check that the final answer includes a speed unit.”"
            },
            resource: resource("GED Testing Service: Science test information and preparation", "https://www.ged.com/about-test/test-subjects/science.html"),
            flow: { label: "Turn a missed question into a study plan", steps: ["Name the skill", "Describe the exact mistake", "Write the correct reasoning", "Choose one follow-up practice"] }
        }),
        "science-15-2": makeGuide({
            title: "Classify Your Mistakes",
            intro: "Not every wrong answer has the same cause. Finding the type of mistake helps you choose the right kind of review.",
            explanation: "A content mistake means the idea was unfamiliar. A reading mistake means you missed a word or instruction. A data mistake means you misread a table, graph, or diagram. A math mistake means the setup or arithmetic was incorrect. A reasoning mistake means the conclusion went beyond the evidence. A timing mistake means you rushed or spent too long.",
            terms: [
                "Content mistake: misunderstanding a science idea or definition.",
                "Reading mistake: missing an instruction, word, or important detail.",
                "Data mistake: misreading a label, value, unit, or graph scale.",
                "Math mistake: setting up or calculating a number incorrectly.",
                "Reasoning mistake: making a claim stronger than the evidence allows.",
                "Timing mistake: using too much or too little time on a question."
            ],
            example: {
                context: "You answer that an experiment proves a fertilizer caused plant growth, but the passage says the plants also received different amounts of water.",
                question: "What kind of mistake is most important to review?",
                steps: [
                    "The response went beyond the evidence because another condition changed.",
                    "This is mainly a reasoning error about whether the experiment isolates a cause.",
                    "Review variables and fair comparisons."
                ],
                answer: "It is a reasoning mistake. The different water amounts are another possible explanation."
            },
            steps: [
                "1. Re-read the question and your chosen answer.",
                "2. Identify where the error began: topic knowledge, reading, data, math, reasoning, or timing.",
                "3. Choose a matching review: reread a concept, practice graph labels, redo a calculation, or evaluate evidence.",
                "4. Try a similar question without looking at the solution.",
                "5. Update your error log if the same mistake happens again."
            ],
            practice: {
                question: "You use the right formula but divide 24 by 3 incorrectly and get 6. What type of mistake is this?",
                steps: ["The formula choice was correct.", "The arithmetic result was incorrect."],
                answer: "It is a math or calculation mistake."
            },
            resource: resource("GED Testing Service: Science test information and preparation", "https://www.ged.com/about-test/test-subjects/science.html")
        }),
        "science-15-3": makeGuide({
            title: "Practice Under Test Conditions",
            intro: "Practice can build confidence when it starts small and gradually feels more like the real test. Focus on steady reasoning, not speed alone.",
            explanation: "Begin with short, untimed sets so you can learn the ideas. When you can explain your answers, add a gentle time limit. Later, practice longer sessions with fewer interruptions. After each session, review mistakes and take breaks; practice is for learning, not for proving your worth.",
            terms: [
                "Untimed practice: working without a countdown so you can focus on understanding.",
                "Timed practice: working with a set time to build pacing.",
                "Pacing: sharing your available time across questions.",
                "Review: checking answers to learn what to repeat or change.",
                "Break: a short pause that helps you reset attention."
            ],
            example: {
                context: "You can solve most graph questions accurately when relaxed, but rush through them during a long practice set.",
                question: "What is a sensible way to improve?",
                steps: [
                    "Practice a small group of graph questions without a timer.",
                    "Check that you can explain the axis and evidence in each answer.",
                    "Add a mild time goal while keeping the same reading steps.",
                    "Review rushed errors and repeat with another short set."
                ],
                answer: "Build accuracy first, then add time pressure gradually and use mistakes to adjust."
            },
            steps: [
                "1. Choose one skill and practice a short set without a timer.",
                "2. Review every answer and explain why it is supported.",
                "3. When you feel ready, set a gentle time goal for a similar set.",
                "4. Take a short break between longer practice blocks.",
                "5. Finish by reviewing mistakes and choosing what to practice next."
            ],
            practice: {
                question: "You miss several questions because you rush. Should you immediately make the timer even shorter?",
                steps: ["First identify why the answers were missed.", "Practice the reading steps accurately before increasing speed."],
                answer: "No. Slow down, build accurate habits with short untimed practice, then add time gradually."
            },
            resource: resource("GED Testing Service: Official Science test information", "https://www.ged.com/about-test/test-subjects/science.html")
        })
    };

    Object.entries(guides).forEach(([id, guide]) => {
        guide.lessonSections[0].paragraphs.push(
            pictureThis[id] || "Connect this idea to a familiar situation. A real example can make a new science concept easier to understand."
        );
        guide.lessonSections[2].visualAid = {
            title: `${guide.title}: follow the example`,
            description: `An original step-by-step diagram showing how to think through the example in ${guide.title}.`,
            steps: guide.lessonSections[3].bullets
        };
    });

    window.scienceLessonGuides = guides;
})();
