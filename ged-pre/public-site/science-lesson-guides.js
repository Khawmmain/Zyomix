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
        flow,
        customLessonSections
    }) => ({
        title,
        intro,
        theory: explanation,
        example: `${example.question} ${example.answer}`,
        formula: formula || "",
        rules: steps.join(" "),
        lessonSectionsOnly: true,
        gedConnection: "GED Science questions give you information to read and reason about. Use the evidence in the question, follow these steps, and explain what your answer means.",
        lessonSections: customLessonSections || [
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
            intro: "A cell is the smallest unit of life that can carry out the basic activities needed to live. Think of it as a tiny factory: its parts have different jobs, but they work together.",
            explanation: "Cells organize many small parts into a working living system. The cell membrane controls exchange with the surroundings; the nucleus stores most of a eukaryotic cell's DNA; and organelles carry out special jobs. This makes a cell's activities easier to understand than a list of unrelated parts.",
            keywords: ["cell", "cell membrane", "cytoplasm", "DNA", "organelle", "nucleus", "mitochondria", "ribosome", "chloroplast", "cell wall"],
            terms: [
                "Cell: the smallest unit that can carry out the basic jobs of life.",
                "Cell membrane: a thin boundary that controls what enters and leaves.",
                "Organelle: a cell structure with a specific job.",
                "DNA: molecule that carries instructions used in building and running cells.",
                "Cell theory: the idea that living things are made of cells, cells are life's basic unit, and new cells come from existing cells."
            ],
            example: {
                question: "A leafy plant is placed in sunlight and has water and carbon dioxide. How do cell parts help it make and use sugar?",
                steps: [
                    "The chloroplast captures light energy used in photosynthesis to make sugar.",
                    "The cell membrane controls the movement of substances into and out of the cell.",
                    "Mitochondria help release usable energy from sugar when the cell needs it."
                ],
                answer: "Chloroplasts help make sugar using light. Other cell parts support exchange and energy use; the parts work together rather than doing the same job."
            },
            steps: [
                "1. Identify the cell job named in the question.",
                "2. Match the job to a structure: membrane controls exchange; nucleus holds most DNA; ribosomes build proteins; mitochondria release usable energy from food; chloroplasts capture light for photosynthesis.",
                "3. Check whether the diagram shows a plant cell, an animal cell, or another kind of cell.",
                "4. Use labels and evidence in the question; do not assume every cell has every organelle."
            ],
            practice: {
                question: "A cell cannot control what substances enter and leave. Which structure may be damaged, and what is one likely effect?",
                steps: ["Find the job described: controlling exchange.", "Match it to the cell's boundary."],
                answer: "The cell membrane may be damaged. The cell may not regulate the movement of needed or harmful substances normally."
            },
            resource: resource("OpenStax Biology 2e: Cells (free reading)", `${biology}4-introduction`),
            formula: "To understand Cell Structures and Functions, one must first look at its foundational element: the cell. When specialized cell structures carry out their jobs (which you can check in the free OpenStax Biology 2e cell guide), they directly affect the cell's ability to exchange materials, use energy, and stay alive. In an exam setting, this relationship is typically illustrated by a labeled cell diagram or a short scenario, where the reader must trace the direct path from a structure's job to the result.",
            customLessonSections: [
                {
                    title: "🧠 Part 1: The Master Framework (Cell Structures and Functions)",
                    paragraphs: []
                },
                {
                    title: "1. Introduction",
                    leadParagraph: "A cell is the smallest unit of life that can carry out the basic activities needed to live. Think of it as a tiny factory: the membrane is its guarded boundary, DNA stores instructions, and organelles carry out specialized jobs.",
                    paragraphs: [
                        "Cell structures turn many small parts into one working system. As you read this lesson, you are using the same idea: headings, examples, and key words each do a different job, but together they help you understand the topic.",
                        "Mental Experiment: Imagine a factory where the doors stop working, the instruction book is lost, and the power equipment fails. Workers cannot get supplies, follow plans, or use energy. A cell also depends on parts working together; damage to one part can affect the whole cell."
                    ]
                },
                {
                    title: "2. Concept Deep-Dive: Concept & History",
                    subsections: [
                        {
                            title: "🔍 Step 1: What is the concept?",
                            paragraphs: [
                                "Cell structure and function means understanding how the parts of a cell are built for particular jobs and how those jobs support the whole cell. A cell is not just a bag of parts: its boundary, internal fluid, DNA, and organelles interact.",
                                "In the town model, the membrane controls what can enter or leave, the cytoplasm is the space where many cell activities happen, and the nucleus stores most of the DNA instructions in plant and animal cells. Ribosomes build proteins. Mitochondria help release usable energy from food. Plant cells also have a supportive cell wall and chloroplasts, which capture light energy for photosynthesis.",
                                "The model has limits: not every cell has a nucleus or the same organelles. Bacteria, for example, do not have a nucleus. Follow the cell type shown in the question."
                            ],
                            table: {
                                headers: ["Cell part", "Town or factory comparison", "Main job"],
                                rows: [
                                    ["Cell membrane", "Gate and boundary", "Controls movement into and out of the cell."],
                                    ["Nucleus", "Records office", "Holds most DNA instructions in plant and animal cells."],
                                    ["Mitochondria", "Energy equipment", "Help release usable energy from food."],
                                    ["Chloroplast", "Solar-powered workshop", "Captures light energy for photosynthesis in plants and some other organisms."]
                                ]
                            }
                        },
                        {
                            title: "🔬 Step 2: How scientists built cell theory",
                            paragraphs: [
                                "Cell theory developed over time as microscopes improved and scientists compared observations. No single experiment or scientist established every part of it.",
                                "In the 1600s, early microscopes revealed structures too small to see with the unaided eye. In the 1800s, scientists compared plant and animal tissues and used observations of cell division to build a broader explanation.",
                                "ASCII timeline:\n1665: Hooke observes cork --> cells\n  |\n1670s: Leeuwenhoek observes living microbes\n  |\n1838-1839: Schleiden and Schwann compare plants and animals\n  |\n1850s: Cell-division evidence supports cells coming from existing cells\n  |\nCell theory: living things are made of cells; cells are life's basic unit; cells come from existing cells."
                            ],
                            preserveLineBreaks: true,
                            bullets: [
                                "1665 — Robert Hooke examined thin cork with a microscope and described box-like spaces as “cells.” He saw dead plant cell walls, not living cell activity.",
                                "1670s — Antonie van Leeuwenhoek used improved microscopes to observe living microscopic organisms and cells.",
                                "1838 — Matthias Schleiden argued from plant observations that plants are made of cells.",
                                "1839 — Theodor Schwann concluded that animals are also made of cells, helping establish that cells are basic units of life.",
                                "1850s — Rudolf Virchow and other researchers supported the idea that new cells come from existing cells through cell division."
                            ],
                            visualAid: {
                                title: "A timeline of cell theory",
                                description: "Microscope observations and comparisons built cell theory over time.",
                                steps: [
                                    "1600s: Microscopes reveal structures too small to see unaided.",
                                    "1665: Hooke describes box-like spaces in cork as cells.",
                                    "1670s: Leeuwenhoek observes living microscopic organisms.",
                                    "1838–1839: Schleiden and Schwann compare plants and animals.",
                                    "1850s: Cell division evidence supports cells coming from existing cells.",
                                    "Cell theory: living things are made of cells; cells are life's basic unit; cells come from existing cells."
                                ]
                            }
                        }
                    ]
                },
                {
                    title: "3. Real-World Example",
                    paragraphs: ["A plant on a windowsill needs materials and energy to grow. Follow how cell structures help its leaf cells do their work."],
                    bullets: [
                        "The Raw Element: A leaf cell contains a membrane, cytoplasm, DNA, ribosomes, mitochondria, chloroplasts, water, and other materials. Without knowing the jobs, these are just names and parts on a diagram.",
                        "The Structured Context: The cell membrane regulates exchange; chloroplasts capture light energy for photosynthesis; the nucleus stores most of the DNA instructions; mitochondria help release usable energy from food.",
                        "The Applied Result: The cell can make sugar through photosynthesis and use materials and energy to support its activities. The plant's tissues can then contribute to the growth of the whole plant."
                    ]
                },
                {
                    title: "4. The Underlying Theory: The Rules of Cell Structures and Functions",
                    paragraphs: ["Use these rules to explain a cell diagram or predict the effect of a change."],
                    table: {
                        headers: ["Rule", "Core Theoretical Logic"],
                        rows: [
                            ["Structure fits the job", "A cell part's features help it perform a particular function."],
                            ["Parts work together", "A cell depends on connected jobs; one structure's change can affect other activities."],
                            ["Exchange is controlled", "The cell membrane regulates materials moving into and out of the cell."],
                            ["Cell types differ", "Not all cells have the same structures; use evidence to identify the cell type."]
                        ]
                    }
                },
                {
                    title: "5. Standardized Exam Connection",
                    paragraphs: [
                        "GED Science questions may ask you to read a cell diagram, match a structure to its function, compare plant and animal cells, or predict what happens when a structure is damaged.",
                        "Use evidence from the labels, passage, or model. Separate an observation (what the diagram shows) from an explanation (what that structure does). For cause and effect, trace the chain: damaged structure → changed function → possible effect on the cell. A model or historical observation supports a scientific explanation, but a simplified diagram does not show every detail of a real cell."
                    ]
                },
                {
                    title: "6. Key Terms",
                    bullets: [
                        "Cell: the smallest unit that can carry out the basic jobs of life.",
                        "Organelle: a cell structure with a specific job.",
                        "Cell membrane: the boundary that controls what enters and leaves a cell.",
                        "DNA: molecule that carries instructions used in building and running cells.",
                        "Cell theory: the explanation that living things are made of cells, cells are life's basic unit, and new cells come from existing cells."
                    ]
                },
                {
                    title: "7. Review Questions",
                    bullets: [
                        "Analytical Reflection: How did microscopes and later comparisons of plant and animal cells change scientists' understanding of life? Which cell-theory idea needed evidence about cell division?",
                        "Scenario Evaluation: If a plant cell's chloroplasts could not capture light, which job would be affected first? Explain one likely effect on the cell and why the cell wall would not fix the problem.",
                        "Contextual Application: A diagram shows a cell that builds many proteins for export. Which structure would you expect to be especially active, and what evidence in the scenario supports your choice?"
                    ]
                },
                {
                    title: "🤖 Part 2: Structural Blueprints Generated",
                    paragraphs: ["Use this blueprint to connect a cell's parts to the system's purpose."]
                },
                {
                    title: "Formula A: The Structural Conceptual Blueprint",
                    subsections: [
                        {
                            title: "🧬 Core Architecture",
                            leadParagraph: "Primary Definition: A cell is the smallest unit of life that can carry out the basic activities needed to live.",
                            paragraphs: ["Systemic Purpose: Cell structures work together to maintain the cell, exchange materials, use energy, and carry out life processes."],
                            resourceLinks: [
                                resource("Free OpenStax Biology 2e guide with cell diagrams", `${biology}4-introduction`)
                            ]
                        },
                        {
                            title: "🧱 Key Anatomical Components",
                            paragraphs: ["Each structure below is paired with an open, free learning resource."]
                        },
                        {
                            title: "1. Cell Membrane",
                            paragraphs: ["Mechanical function: Regulates what enters and leaves ➔ Direct impact: helps the cell exchange needed materials and control its internal environment."],
                            resourceLink: resource("Free OpenStax reading: cell membranes", `${biology}5-1-components-and-structure`)
                        },
                        {
                            title: "2. Nucleus",
                            paragraphs: ["Mechanical function: Stores most DNA instructions in plant and animal cells ➔ Direct impact: helps guide cell activities and the making of proteins."],
                            resourceLink: resource("Free OpenStax reading: eukaryotic cell structures", `${biology}4-3-eukaryotic-cells`)
                        },
                        {
                            title: "3. Mitochondria",
                            paragraphs: ["Mechanical function: Help release usable energy from food ➔ Direct impact: supports energy-requiring cell processes."],
                            resourceLink: resource("Free OpenStax reading: cellular respiration", `${biology}7-introduction`)
                        },
                        {
                            title: "4. Chloroplast",
                            paragraphs: ["Mechanical function: Captures light energy for photosynthesis ➔ Direct impact: helps plants and some other organisms make sugar."],
                            resourceLink: resource("Free OpenStax reading: photosynthesis and chloroplasts", `${biology}8-introduction`)
                        },
                        {
                            title: "🔄 Real-World Analogy",
                            paragraphs: ["Think of a plant cell like a small town:"],
                            bullets: [
                                "The membrane is the guarded town border.",
                                "The nucleus is the records office holding instructions.",
                                "Mitochondria are energy equipment that helps power town activities.",
                                "Chloroplasts are solar workshops that use light to make sugar."
                            ]
                        }
                    ]
                },
                {
                    title: "Formula B: The Mathematical Sentence-Template",
                    paragraphs: [
                        "To understand Cell Structures and Functions, one must first look at its foundational element: the cell. When specialized cell structures carry out their jobs, it directly alters the cell's ability to exchange materials, use energy, and stay alive. In an exam setting, this relationship is typically illustrated by a labeled cell diagram or scenario, where the reader must trace the direct path from the initial structure to the final outcome."
                    ],
                    resourceLinks: [
                        resource("Check the cell parts and their functions in this free OpenStax guide", `${biology}4-3-eukaryotic-cells`)
                    ]
                }
            ]
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
            flow: { label: "How genetic information is organized", steps: ["Chromosome contains DNA", "DNA includes genes", "Genes help influence traits"] },
            customLessonSections: [
                {
                    title: "Hook and learning goals",
                    paragraphs: [
                        "Imagine a library so small it fits inside a cell. It must store instructions, keep them organized, and make selected directions available when the cell needs them. DNA, genes, and chromosomes are three connected parts of this information system.",
                        "By the end, you can define DNA, gene, and chromosome; explain how they fit together; describe how scientists worked out that DNA carries inherited information; and read a simple genetic-information diagram without mistaking a model for the whole story."
                    ]
                },
                {
                    title: "History: How scientists traced inheritance",
                    paragraphs: [
                        "People noticed for centuries that offspring often resemble their parents, but resemblance alone did not reveal what was passed on. In the 1850s and 1860s, Augustinian monk and teacher Gregor Mendel grew pea plants and carefully counted traits such as flower color and seed shape. He crossed plants with contrasting traits, recorded results across generations, and found repeatable patterns. His 1866 paper proposed that inherited characteristics were passed as separate factors. Mendel did not know about genes or DNA, and most scientists of his time did not recognize how important his work would become.",
                        "Some of Mendel's crosses produced an approximately three-to-one ratio in a later generation. Such numerical patterns hinted that inherited information could be hidden in one generation and appear in another. His results were rediscovered around 1900, and later researchers connected the patterns to chromosomes. That link helped turn inheritance from a description of resemblance into a testable scientific explanation.",
                        "In 1869, Swiss physician Friedrich Miescher isolated a substance from cell nuclei that he called nuclein. It was later identified as DNA, but its role was unknown. Around 1900, several scientists independently brought Mendel's overlooked results back to attention. At about the same time, Walter Sutton and Theodor Boveri connected the behavior of chromosomes during cell division with Mendel's patterns. Their chromosome theory suggested that hereditary factors were carried on chromosomes. In the early twentieth century, Thomas Hunt Morgan and colleagues studied fruit flies and found that some traits were inherited together, supporting the idea that hereditary factors lie along chromosomes.",
                        "The next question was what chromosomes were made of and which part carried information. In 1928, Frederick Griffith found that material from heat-killed disease-causing bacteria could change harmless bacteria. In 1944, Oswald Avery, Colin MacLeod, and Maclyn McCarty provided evidence that DNA was the transforming material. In 1952, experiments by Alfred Hershey and Martha Chase offered further evidence that DNA, rather than protein, carried hereditary instructions in the viruses they studied. Each experiment narrowed the possibilities; no single result answered every question about inheritance.",
                        "Other clues helped reveal DNA's structure. Erwin Chargaff measured DNA in different organisms and found patterns in its chemical building blocks. Rosalind Franklin and Raymond Gosling produced important X-ray diffraction images of DNA, including the image known as Photo 51, which showed evidence of a helix. Maurice Wilkins also studied DNA using X-ray methods. In 1953, James Watson and Francis Crick proposed a double-helix model that fit the available evidence, including findings from Franklin and other researchers. The model explained how DNA's two strands could separate and guide the copying of matching strands. Franklin died in 1958; the 1962 Nobel Prize for this work was awarded to Watson, Crick, and Wilkins.",
                        "Later research showed how DNA is arranged into genes and chromosomes and how cells use genetic instructions. The Human Genome Project, completed in 2003, produced a reference sequence for much of human DNA and helped researchers study genes on a large scale. The history is not a story of one person discovering everything: it is a chain of observations, experiments, images, and models. Scientists improved their explanations as evidence accumulated, just as a map becomes clearer when more reliable landmarks are added."
                    ]
                },
                {
                    title: "Discovery: Evidence identified DNA as hereditary material",
                    paragraphs: [
                        "Scientists did not identify DNA's role from its shape alone. They asked what material could transfer a biological characteristic, then designed experiments to separate competing explanations. Griffith's bacteria suggested that a transferable substance existed; Avery, MacLeod, and McCarty tested which substance it was; Hershey and Chase used viruses to compare the roles of DNA and protein. Meanwhile, chemical measurements and X-ray diffraction helped constrain models of DNA's structure. Each result answered a narrower question, and together they made the DNA explanation much stronger than any one clue by itself."
                    ],
                    visualAid: {
                        title: "Evidence leading to the DNA model",
                        description: "Experiments and observations built evidence for DNA's role and structure.",
                        steps: [
                            "Griffith observes a transferable trait in bacteria.",
                            "Avery, MacLeod, and McCarty identify DNA as the transforming material.",
                            "Hershey and Chase find evidence that viruses use DNA to carry instructions.",
                            "Chargaff's measurements and Franklin's X-ray images inform the double-helix model."
                        ]
                    }
                },
                {
                    title: "Concept: DNA, genes, and chromosomes",
                    paragraphs: [
                        "DNA, or deoxyribonucleic acid, is a molecule that stores genetic information in most living things. It is built from smaller units called nucleotides. The order of four DNA bases—usually represented by the letters A, T, C, and G—forms a sequence that cells can copy and use. DNA is shaped like a twisted ladder, or double helix: the sides are made of alternating sugar and phosphate, and the bases pair across the middle. A pairs with T, and C pairs with G.",
                        "A gene is a particular stretch of DNA whose sequence contributes information for making a functional product. Many genes provide instructions for proteins; other genes produce functional RNA. A gene is not always a simple recipe for one visible feature. Some genes affect several processes, and many traits depend on multiple genes working together. Cells also control when and where a gene is active.",
                        "A chromosome is a long DNA molecule organized with proteins. This packaging helps fit DNA into a cell and helps manage access to it. In a human body cell, DNA is arranged in 46 chromosomes, usually described as 23 pairs. One chromosome in each pair came from the egg and the other from the sperm. Eggs and sperm normally contain 23 chromosomes each. Numbers differ among species, so 46 is not a universal chromosome count.",
                        "The relationship is a scale: chromosomes contain DNA; DNA includes genes; and genes can help influence how an organism develops and functions. A chromosome contains many genes and also DNA regions that do not code for proteins. During cell division, DNA is copied so new cells can receive genetic instructions. Inherited versions of genes can differ, contributing to variation among individuals.",
                        "Packaging is essential because DNA is extremely long: a single set of human chromosomes contains roughly three billion DNA base pairs. DNA and its associated proteins form chromatin, which can be further compacted into visible chromosomes during cell division.",
                        "Cells read active genes through gene expression: DNA information is copied into RNA, and many RNA messages help guide protein production. Different cell types can use different genes, even though nearly all their cells contain the same DNA.",
                        "Traits are features such as blood type, flower color, or certain aspects of height. Genes can influence traits, but environment matters too: nutrition, sunlight, temperature, and many other conditions can affect how a trait develops. Some traits are strongly influenced by one gene; many are more complex. A diagram that shows one gene leading to one trait is a useful starting model, not a complete explanation of every real trait."
                    ]
                },
                {
                    title: "Example: Walk through the diagram",
                    paragraphs: [
                        "Use the supplied picture as a zooming-in and zooming-out map. Start at DNA, shown as a double helix. Move to the highlighted gene: it is a small section of that DNA, not a different kind of molecule. Then move outward to the chromosome, which is DNA packed with proteins and carries many genes. The arrows show the organizing relationship, not a process in which DNA turns into a gene and then turns into a chromosome.",
                        "Suppose a diagram labels a gene on one chromosome and asks what the label means. First, identify the chromosome as the larger packaged structure. Next, trace the label to the DNA segment. Finally, explain that the segment has information that can contribute to a trait. Do not conclude that the gene guarantees the trait: other genes and environmental conditions may also matter."
                    ],
                    imagePlaceholder: {
                        src: "assets/dna-gene-chromosome.png",
                        altText: "Infographic comparing DNA as genetic code, a gene as a small section of DNA, and a chromosome as tightly packed DNA containing many genes.",
                        caption: "DNA is the information molecule; a gene is a section of DNA; a chromosome packages a long DNA molecule and carries many genes."
                    }
                },
                {
                    title: "Practice: Apply what you learned",
                    paragraphs: [
                        "A cell diagram shows a chromosome with many labels along its DNA. One label points to a short segment called Gene A. Explain how DNA, Gene A, and the chromosome are related."
                    ],
                    bullets: [
                        "Name the largest packaged structure first.",
                        "Describe the gene as a section of DNA inside that structure.",
                        "Connect the gene to information that may influence a trait, without claiming it determines the trait alone."
                    ],
                    paragraphsAfterBullets: [
                        "Check: the chromosome packages a long DNA molecule; Gene A is one section of that DNA and may contribute to a trait."
                    ]
                },
                {
                    title: "Recap: Key ideas and comprehension questions",
                    paragraphs: [
                        "DNA stores genetic information; genes are particular sections of DNA; chromosomes package DNA with proteins. Genes can influence traits alongside other genes and environmental conditions. Scientists established DNA's role through evidence from many experiments and observations, not one discovery by one person."
                    ],
                    bullets: [
                        "1. What is a gene in relation to DNA?",
                        "2. What does a chromosome package?",
                        "3. Which structure is the “big package” in the picture?",
                        "4. Why might several genes and the environment affect one trait?"
                    ],
                    paragraphsAfterBullets: [
                        "Check: a gene is a DNA segment; a chromosome packages DNA and contains many genes. A trait may reflect genes and environmental conditions."
                    ],
                    resourceLink: resource("OpenStax Biology 2e: Historical basis of modern genetics", `${biology}14-1-historical-basis-of-modern-understanding`)
                }
            ]
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
        if (guide.lessonSections[0]?.title === "Hook and learning goals") return;
        guide.lessonSections[0].paragraphs.push(
            pictureThis[id] || "Connect this idea to a familiar situation. A real example can make a new science concept easier to understand."
        );
        guide.lessonSections[2].visualAid = {
            title: `${guide.title}: follow the example`,
            description: `An original step-by-step diagram showing how to think through the example in ${guide.title}.`,
            steps: guide.lessonSections[3].bullets
        };
    });

    const cellStructuresBeginnerLesson = [
        {
            title: "1. Hook and learning goals",
            paragraphs: [
                "Imagine opening a door and finding a busy world too small for your eyes to see. Your skin, a leaf, and a drop of pond water are all connected to that hidden world: cells. In this lesson, you will learn how people discovered cells, how evidence led to cell theory, and how a cell's parts work together. You will also practice using a diagram to connect a structure with its job."
            ]
        },
        {
            title: "2. The history story: seeing the unseen",
            subsections: [
                {
                    title: "Before microscopes: life without a cell picture",
                    paragraphs: [
                        "People could observe seeds sprouting and living things growing long before they could see cells. The parts visible to the unaided eye could not explain how a leaf grew or how a tiny organism lived. Scientists needed a tool that could reveal evidence too small to see.",
                        "In the late 1500s and early 1600s, lens makers began combining lenses in compound microscopes. Images could be dim or blurry, and lenses sometimes distorted them. Still, these tools opened a new window. Scientists could compare observations and ask whether a pattern belonged to the specimen or the lens."
                    ]
                },
                {
                    title: "Hooke names the small compartments",
                    paragraphs: [
                        "In 1665, English scientist Robert Hooke published Micrographia, a book of microscope observations. Looking at thin cork, he saw tiny box-like spaces. The cork was no longer living tissue; Hooke saw mostly the walls left after its cells had died.",
                        "Hooke called the compartments “cells,” comparing them to small rooms in a monastery. He had not watched a living cell work. His contribution was to describe and draw a repeated pattern in plant material so others could examine his observation."
                    ]
                },
                {
                    title: "Leeuwenhoek finds living microscopic worlds",
                    paragraphs: [
                        "The Dutch observer Antonie van Leeuwenhoek built powerful single-lens microscopes. He examined water, material from teeth, and other samples. In the 1670s, he reported seeing living microscopic organisms, which he called “animalcules.” Some could move—something Hooke's dead cork could not show.",
                        "These reports described life invisible without magnification. Observers at the Royal Society in London considered his accounts and repeated some observations. Replication mattered: when others could see similar things, a report became stronger evidence. Improved lenses, descriptions, drawings, and repeated viewing made the microscopic world a subject for shared investigation."
                    ]
                },
                {
                    title: "From individual observations to a shared explanation",
                    paragraphs: [
                        "As microscopes improved, scientists compared tissues rather than treating each picture as an isolated curiosity. In 1831, botanist Robert Brown described a structure inside many plant cells, later known as the nucleus. This added detail but did not yet explain what living things shared.",
                        "In 1838, botanist Matthias Schleiden argued that plants are made of cells. In 1839, zoologist Theodor Schwann concluded the same about animals. Their comparisons helped establish cells as fundamental units of plants and animals; later researchers refined the explanation.",
                        "Scientists also asked where new cells come from. In the 1850s, Rudolf Virchow popularized the principle that cells arise from existing cells. This was supported by cell-division evidence; earlier researchers, including Robert Remak, had observed cell division. The principle connected cell theory to an observable process: a cell divides to produce new cells."
                    ]
                }
            ],
            paragraphsAfterSubsections: [
                "No single person made one sudden discovery. Hooke named cork compartments; Leeuwenhoek observed living microscopic organisms; later scientists compared plant and animal tissues and investigated cell division. Better tools enabled observations, while comparison and repeated evidence tested explanations."
            ],
            visualAid: {
                title: "A timeline of the cell story",
                description: "Different observations accumulated over time and helped shape cell theory.",
                steps: [
                    "Late 1500s–early 1600s: Compound microscopes develop.",
                    "1665: Hooke names compartments in cork cells.",
                    "1670s: Leeuwenhoek reports living microscopic organisms.",
                    "1831: Brown describes the plant-cell nucleus.",
                    "1838–1839: Schleiden and Schwann compare plant and animal cells.",
                    "1850s: Cell-division evidence supports cells coming from existing cells."
                ]
            }
        },
        {
            title: "3. Discovery: what the evidence changed",
            paragraphs: [
                "Each discovery answered a different question. Dead cork showed repeated structure, not living cell activity. Leeuwenhoek observed living microscopic organisms, but that alone did not prove that plants and animals were made of cells. Schleiden's and Schwann's comparisons connected evidence across organisms, while observations of division helped explain where new cells come from.",
                "Together, this evidence formed the foundation of cell theory: living things consist of one or more cells; the cell is a basic unit of structure and function; and cells come from pre-existing cells. Modern tools reveal more detail, but these central ideas still explain the shared organization of life."
            ]
        },
        {
            title: "4. The concept: cell structures and their jobs",
            paragraphs: [
                "A cell is the smallest unit that can carry out the basic activities of life. Some organisms, such as many bacteria, consist of one cell. Plants, animals, and many other organisms consist of many cells. A cell is not just a tiny bag: its boundary, internal material, genetic information, and specialized structures work together.",
                "The cell membrane is a thin boundary around every cell. It helps control what enters and leaves, including water, nutrients, and waste. Inside the membrane is cytoplasm, the material where many cell activities occur. Cytoplasm includes a watery fluid and, in cells with them, structures called organelles. An organelle is a cell structure with a particular job.",
                "In plant and animal cells, the nucleus contains most of the cell's DNA. DNA carries instructions that help cells build molecules and perform their activities. Ribosomes use those instructions to build proteins. Proteins have many roles: some form structures, while others help chemical reactions happen. The nucleus does not personally perform every cell task; it stores information that cells use.",
                "Mitochondria help release usable energy from food molecules through cellular respiration. Plant cells also have mitochondria. In plants and some other organisms, chloroplasts capture light energy for photosynthesis, a process that stores energy in sugar. A plant cell wall outside the membrane provides extra support and protection. Animal cells do not have a cell wall or chloroplasts.",
                "Cells are not all alike. Bacteria have membranes, cytoplasm, DNA, and ribosomes, but no nucleus. Mature human red blood cells also lack a nucleus. Use the cell type and labels in a question rather than assuming every cell has every structure. An analogy such as “the nucleus is like an office” can help, but a cell is not literally a factory."
            ],
            imagePlaceholder: {
                src: "assets/cell-structure-function.png",
                altText: "Cell structure and function infographic showing an animal cell with labeled parts, cell functions, and examples of animal, plant, bacterial, and specialized cells.",
                caption: "Cell structures work together to support the functions of living things."
            },
            table: {
                headers: ["Structure", "Beginner-friendly job"],
                rows: [
                    ["Cell membrane", "Forms the boundary and controls exchange with the surroundings."],
                    ["Cytoplasm", "Holds cell material and is where many activities take place."],
                    ["Nucleus", "Contains most DNA in plant and animal cells."],
                    ["Ribosomes", "Build proteins using genetic instructions."],
                    ["Mitochondria", "Help release usable energy from food."],
                    ["Chloroplasts", "Capture light energy for photosynthesis in plants and some other organisms."],
                    ["Cell wall", "Provides extra support outside the membrane in plants, fungi, and some other organisms."]
                ]
            },
            paragraphsAfterTable: [
                "A helpful rule is to connect structure to function: identify the job in the question, find the structure that performs that job, and then explain the likely result. A cell diagram is a simplified model. Its labels help you focus, but the drawing may not show every structure or represent its actual size."
            ]
        },
        {
            title: "5. Example: follow a leaf cell's work",
            paragraphs: [
                "A plant sits in sunlight. Its leaf cells have water and receive carbon dioxide from the air. How do cell structures help the plant make and use sugar?",
                "Photosynthesis uses light energy, water, and carbon dioxide to make sugar and release oxygen. Chloroplasts capture light for this process. The sugar stores chemical energy the plant can use or build into other materials.",
                "The membrane regulates exchange. The nucleus contains most of the cell's DNA, and ribosomes build proteins from instructions. Mitochondria help release usable energy from sugar. These structures have different jobs, but the cell depends on their combined work."
            ],
            bullets: [
                "Question clue: the cell is capturing light to make sugar → chloroplast.",
                "Question clue: the cell is controlling what enters and leaves → cell membrane.",
                "Question clue: the cell is building a protein → ribosome."
            ],
            paragraphsAfterBullets: [
                "Do not say that the chloroplast and mitochondrion do the same job. Chloroplasts capture light energy to make sugar; mitochondria help release usable energy from food molecules. Both are part of how a plant cell manages energy."
            ]
        },
        {
            title: "6. Practice",
            paragraphs: [
                "Try each question before reading the answer. Use the structure's job—not just a memorized label—to explain your choice."
            ],
            bullets: [
                "1. A diagram shows a cell part that controls which materials cross the cell boundary. Which part is it?",
                "2. A scientist examines a cork sample and sees tiny box-like compartments. What did Hooke call these spaces, and what important limitation applied to what he observed?",
                "3. A plant cell can no longer capture light for photosynthesis. Which structure is most directly affected, and why would the cell wall not solve the problem?"
            ],
            paragraphsAfterBullets: [
                "Answers: 1. Cell membrane; it regulates exchange. 2. Hooke called them cells; the cork cells were dead, so they did not show living cell activity. 3. Chloroplasts capture light for photosynthesis; the cell wall supports and protects."
            ]
        },
        {
            title: "7. Recap and comprehension check",
            paragraphs: [
                "Microscopes revealed a world unseen by the naked eye. Hooke named cork compartments, Leeuwenhoek reported living microorganisms, and later researchers connected evidence into cell theory. Cell structures have different jobs: the membrane regulates exchange, DNA carries instructions, ribosomes build proteins, mitochondria help release usable energy, and chloroplasts capture light for photosynthesis. Cell types differ, so follow the evidence in a diagram or passage."
            ],
            bullets: [
                "Can you describe one observation that helped build cell theory and what it showed?",
                "Can you name the cell structure that matches a stated job and explain your evidence?",
                "Can you explain why a simple cell diagram is a model rather than a complete picture?"
            ],
            paragraphsAfterBullets: [
                "For further reading, explore the free OpenStax Biology 2e guide to cell structures."
            ],
            resourceLink: resource("OpenStax Biology 2e: Eukaryotic cell structures", `${biology}4-3-eukaryotic-cells`)
        }
    ];

    Object.assign(guides["science-5-1"], {
        intro: "Discover how microscopes revealed cells, how scientists built cell theory from evidence, and how cell structures work together.",
        example: "A leaf cell uses chloroplasts to capture light for photosynthesis, while other structures support exchange, instructions, protein building, and energy use.",
        formula: "",
        rules: "Connect each structure to its job, use evidence from the cell type shown, and explain how a change to that structure could affect the cell.",
        lessonSections: cellStructuresBeginnerLesson
    });

    Object.assign(guides["science-5-2"], {
        intro: "Follow how living things are organized from cells to tissues, organs, organ systems, and organisms, then learn how organisms relate to populations and ecosystems.",
        example: "Trace how heart muscle cells form tissue, the tissue contributes to the heart, and the heart works with other organs in the circulatory system.",
        formula: "",
        rules: "For multicellular organisms, follow cell → tissue → organ → organ system → organism. Then describe ecological groupings separately: population → community → ecosystem.",
        lessonSections: [
            {
                title: "1. Hook and learning goals",
                paragraphs: [
                    "Imagine zooming in on a person until you can see a single cell, then zooming back out to a heart, a whole person, and the living community around them. Each view helps answer a different question. In this lesson, you will learn the levels from cells to organisms, distinguish those body structures from ecological groupings, and follow evidence in a diagram without assuming every living thing has the same organization."
                ]
            },
            {
                title: "2. History story: how scientists organized life",
                subsections: [
                    {
                        title: "From visible body parts to tissues",
                        paragraphs: [
                            "People have studied the visible parts of plants and animals for thousands of years. Ancient Greek thinkers such as Aristotle described and grouped living things using features they could observe. These early systems were not the modern science of cells, tissues, and ecosystems; microscopes did not yet reveal cells. But observing similarities and differences raised a lasting question: how can many kinds of living things be described in an orderly way?",
                            "For a long time, anatomy focused on organs that could be seen and examined directly. In the late 1700s and early 1800s, French physician Xavier Bichat helped make the idea of tissues central to anatomy. He compared the body's organs and described them as being made of different kinds of tissue. His work relied largely on examining body structures rather than on modern microscopes. It helped scientists look for a level between an organ and its smaller parts: tissues with shared characteristics and roles."
                        ]
                    },
                    {
                        title: "Microscopes reveal cells beneath tissues",
                        paragraphs: [
                            "Improved microscopes made it possible to investigate what tissues were made of. In 1665, Robert Hooke described box-like compartments in cork and gave them the name “cells.” In the 1670s, Antonie van Leeuwenhoek reported seeing living microscopic organisms. These observations opened a new scale of study, but they did not immediately create a complete map of how cells fit into bodies.",
                            "In 1838, Matthias Schleiden argued that plants are made of cells. In 1839, Theodor Schwann extended the idea to animals. Their work supported the view that cells are basic units of living things. Scientists could now connect a smaller level—cells—with larger structures already studied by anatomists. Later research refined cell theory and showed that cells arise from existing cells."
                        ]
                    },
                    {
                        title: "Classification and organization answer different questions",
                        paragraphs: [
                            "Scientists also developed systems for naming and classifying organisms. In the 1700s, Swedish naturalist Carl Linnaeus helped standardize a nested classification system, including the two-part scientific names still used for species. A classification hierarchy groups organisms by shared traits and relationships. It is not the same as the structural hierarchy inside one organism. For example, “mammal” is a classification group, while “organ system” describes parts working together inside a body.",
                            "Keeping those questions separate matters. Structural biology asks how parts make a working organism: cells, tissues, organs, and organ systems. Classification asks how organisms are named and grouped. The word “level” can appear in both contexts, but the levels do different jobs."
                        ]
                    },
                    {
                        title: "Ecology adds populations and ecosystems",
                        paragraphs: [
                            "As naturalists studied organisms in their environments, another kind of organization became important. A population is members of the same species living in an area. A community includes populations of different species that live and interact in that area. An ecosystem includes the community and nonliving surroundings—such as water, soil, air, and light—and the interactions among them.",
                            "In 1935, British ecologist Arthur Tansley introduced the term “ecosystem” to emphasize that organisms and their physical environment should be studied together. This added a system-level view beyond an individual organism. A forest, for example, is not just a collection of trees: it includes many populations, interactions among organisms, and physical conditions that affect life.",
                            "Today, microscopes, imaging, field studies, and measurements let scientists move between scales. A researcher might study cells in a leaf, the tissues that form it, the plant as an organism, its population, and the ecosystem around it. Each scale reveals patterns that may be hard to see at another scale. The history is not a single ladder invented by one scientist; it is a set of connected ways of organizing evidence to answer different questions."
                        ]
                    }
                ],
                visualAid: {
                    title: "How the levels of organization developed",
                    description: "A brief timeline of ideas and tools that helped scientists study life at different scales.",
                    steps: [
                        "Ancient naturalists describe and group visible living things.",
                        "Late 1700s–early 1800s: Bichat emphasizes tissues in anatomy.",
                        "1600s–1800s: Microscopes and cell observations connect cells to tissues.",
                        "1700s: Linnaeus helps standardize organism classification.",
                        "1935: Tansley introduces the term ecosystem for organisms and their physical environment."
                    ]
                }
            },
            {
                title: "3. Discovery: what the levels help us see",
                paragraphs: [
                    "The levels are useful because they help scientists describe a complex living system at a scale that fits the question. If the question is how a heart pumps blood, look at the organ and the organ system. If it asks how heart muscle contracts, look at cells and tissue. If it asks how a forest changes, look at populations, the community, and environmental conditions.",
                    "The body-structure sequence for a multicellular organism is cell → tissue → organ → organ system → organism. Ecological organization continues in a related but distinct way: organisms of one species can form a population; interacting populations form a community; and a community together with its nonliving surroundings forms an ecosystem. These categories describe relationships and scale, not a guarantee that every example forms one simple chain."
                ]
            },
            {
                title: "4. The concept: from cell to ecosystem",
                paragraphs: [
                    "A cell is a basic living unit. In a multicellular organism, cells with similar structures and jobs may work together in a tissue. For example, muscle cells work together in muscle tissue. Tissues combine with other tissues to make an organ. The heart contains muscle tissue, connective tissue, and other kinds of tissue that work together to pump blood.",
                    "Organs work with other organs in an organ system. The heart and blood vessels are parts of the circulatory system, which moves blood around the body. Several organ systems work together to keep one organism alive. A human is an organism: one complete living individual.",
                    "This sequence is most useful for multicellular organisms. A single-celled organism carries out life processes within one cell; it does not have tissues, organs, or organ systems. Also, not every cell becomes part of a tissue: many organisms are unicellular, and specialized cells can have different forms and jobs.",
                    "Ecological levels begin with organisms in places and relationships. A population is one species in an area, such as all the frogs of one species in a pond. A community is the populations of different species living and interacting there, such as frogs, insects, plants, and microorganisms. The ecosystem includes that community plus nonliving factors such as water temperature, sunlight, and nutrients.",
                    "The image below is a simplified overview. It combines “population, community, and ecosystem” in one panel to save space; those are three distinct ecological ideas, not one level with a single definition. The arrows show an increasing scale, but real living systems have many connections, and not every level is a neat box inside the next."
                ],
                imagePlaceholder: {
                    src: "assets/cell-levels-of-organization.png",
                    altText: "Infographic showing a sequence from cell to tissue, organ, organ system, and organism, followed by a forest ecosystem example.",
                    caption: "The image simplifies biological organization. Population, community, and ecosystem are distinct ecological levels; see the explanation above."
                },
                table: {
                    headers: ["Level", "What it means", "Example"],
                    rows: [
                        ["Cell", "A basic living unit.", "Heart muscle cell"],
                        ["Tissue", "Similar cells working together.", "Heart muscle tissue"],
                        ["Organ", "Different tissues working together.", "Heart"],
                        ["Organ system", "Organs working together for a major job.", "Circulatory system"],
                        ["Organism", "One complete living thing.", "One person"],
                        ["Population", "Members of one species in an area.", "Frogs of one species in a pond"],
                        ["Community", "Populations of different species interacting.", "Pond plants, frogs, insects, and microbes"],
                        ["Ecosystem", "A community and its nonliving environment.", "The pond community, water, soil, and light"]
                    ]
                }
            },
            {
                title: "5. Example: follow a heart from cell to system",
                paragraphs: [
                    "A question asks how a heart muscle cell is related to the circulatory system. Start at the smallest level: many heart muscle cells work together as heart muscle tissue. That tissue combines with other tissues to form the heart, an organ. The heart works with blood vessels as part of the circulatory system. The system belongs to one organism, such as a person.",
                    "The order is cell → tissue → organ → organ system → organism. Each step adds organization and cooperation, but the levels are not interchangeable. One cell is not a tissue, and an organ system is not the whole organism. If the question instead asks about frogs and plants sharing a pond, switch to ecological levels: populations → community → ecosystem, including nonliving conditions."
                ],
                bullets: [
                    "Heart muscle cell: one specialized cell.",
                    "Heart muscle tissue: many similar cells working together.",
                    "Heart: an organ made from different tissues.",
                    "Circulatory system: heart and blood vessels working together."
                ]
            },
            {
                title: "6. Practice",
                paragraphs: [
                    "Try these before checking the answers. Decide whether each example is a body structure level or an ecological level."
                ],
                bullets: [
                    "1. Put these in order: organ, cell, organism, tissue, organ system.",
                    "2. All the frogs of one species living in a pond are an example of which level?",
                    "3. A forest community plus its soil, water, and sunlight is what level?",
                    "4. Why is the image's final panel a simplified summary rather than a precise definition?"
                ],
                paragraphsAfterBullets: [
                    "Answers: 1. Cell → tissue → organ → organ system → organism. 2. A population. 3. An ecosystem. 4. It groups population, community, and ecosystem together, but each has a different meaning; the ecosystem also includes nonliving surroundings."
                ]
            },
            {
                title: "7. Recap and comprehension check",
                paragraphs: [
                    "For multicellular organisms, cells can form tissues, tissues form organs, organs work in organ systems, and all the systems belong to an organism. Ecology describes organisms in groups and surroundings: a population is one species in an area, a community is interacting populations, and an ecosystem includes a community and nonliving conditions. These levels help scientists choose the right scale for a question. Not all living things have every level, and the diagram is a simplified model."
                ],
                bullets: [
                    "Can you explain the difference between a tissue and an organ?",
                    "Can you distinguish a population, a community, and an ecosystem?",
                    "Which scale would help answer a question about how the heart moves blood?"
                ]
            }
        ]
    });

    Object.assign(guides["science-5-3"], {
        intro: "Learn how materials cross cell membranes, how scientists uncovered these processes, and how to identify each transport method from evidence.",
        example: "Follow oxygen, water, glucose, and sodium as they cross or move in relation to a cell membrane.",
        formula: "",
        rules: "Passive transport moves down a concentration or electrochemical gradient without direct cellular energy use. Active transport requires energy directly or indirectly to move materials against a gradient or move bulk cargo in vesicles.",
        lessonSections: [
            {
                title: "1. Hook and learning goals",
                paragraphs: [
                    "Imagine a cell as a tiny room with a boundary that is not a solid wall. Oxygen, water, nutrients, and waste must move through or around that boundary for the cell to function. In this lesson, you will learn how materials cross cell membranes, how scientists developed explanations for this movement, and how to recognize diffusion, osmosis, facilitated diffusion, active transport, endocytosis, and exocytosis."
                ]
            },
            {
                title: "2. History story: discovering how substances cross boundaries",
                subsections: [
                    {
                        title: "A question about water and barriers",
                        paragraphs: [
                            "Long before cell membranes were visible, people studied water passing through barriers. Animal bladder or plant tissue could separate liquids while allowing some material through. Scientists needed experiments to distinguish the barrier's effects from mixing and pressure.",
                            "In 1748, French physicist Jean-Antoine Nollet reported water moving across animal bladder. The experiment showed that a membrane could let water through while restricting some dissolved substances. It made selective passage a question scientists could test."
                        ]
                    },
                    {
                        title: "Osmosis becomes a scientific subject",
                        paragraphs: [
                            "In the early 1800s, French physician Henri Dutrochet studied water movement through membranes and helped develop the science of osmosis. He used the terms endosmosis and exosmosis for flows into and out of a confined space. Experiments showed that water movement could change volume or pressure on either side.",
                            "Researchers could place solutions on each side, observe net flow, and vary the materials. Membranes were not simply open or closed: their properties affected which particles passed and how quickly.",
                            "This shift toward controlled comparisons was important. If one side contained more dissolved material, a researcher could ask whether water moved differently than it did when both sides contained similar solutions. Repeating the setup with different barriers and substances helped separate a general pattern from an unusual result. The experiments did not yet show the molecular structure of a living cell membrane, but they established questions that later cell biologists could investigate: what crosses, what is blocked, and how does the surrounding solution affect a cell?"
                        ]
                    },
                    {
                        title: "Better measurements connect osmosis to cells",
                        paragraphs: [
                            "During the nineteenth century, scientists found ways to measure osmotic pressure. In the 1870s, botanist Wilhelm Pfeffer used semipermeable membranes to study this pressure, linking laboratory measurements to water balance in plant cells.",
                            "Biologists also investigated cell boundaries. Charles Ernest Overton's late-nineteenth-century studies supported the idea that cell surfaces had fat-like properties. In 1925, Evert Gorter and François Grendel used red blood cell measurements to propose a lipid bilayer. Their measurements were imperfect, but later evidence supported the model.",
                            "A model of the membrane had to explain more than water. Researchers examined how different chemicals entered cells, then compared those observations with what was known about fat-like substances. The bilayer proposal offered a physical explanation for why some materials could pass more readily than others. Its early measurements had limitations, so scientists did not treat the proposal as final proof; they tested and improved it with new methods."
                        ]
                    },
                    {
                        title: "The membrane model keeps changing",
                        paragraphs: [
                            "By the mid-twentieth century, evidence showed that membranes were not featureless sheets of fat. Some substances crossed easily; others used proteins. In 1972, S. J. Singer and Garth Nicolson proposed the fluid mosaic model: a flexible lipid bilayer with proteins within and on its surfaces. Later evidence refined it.",
                            "In 1957, Jens Christian Skou reported a nerve-cell membrane enzyme that moves sodium and potassium using ATP. This sodium-potassium pump became a major example of active transport. Researchers also identified channels, carriers, and vesicles that move other materials.",
                            "Modern imaging reveals membrane processes in greater detail. Transport categories summarize many studies: scientists test explanations, measure results, and revise models as evidence grows. The present-day picture therefore combines physics, chemistry, and biology: water movement can be measured, membrane composition can be studied, and the work of a particular protein can be tested in cells."
                        ]
                    }
                ],
                visualAid: {
                    title: "A timeline of membrane transport discoveries",
                    description: "Experiments and improved models gradually explained how substances cross cell boundaries.",
                    steps: [
                        "1748: Nollet reports water crossing animal bladder.",
                        "Early 1800s: Dutrochet studies osmosis.",
                        "1870s: Pfeffer measures osmotic pressure.",
                        "Late 1800s–1920s: Evidence supports lipid membranes.",
                        "1950s: Skou studies the sodium-potassium pump.",
                        "1972: Singer and Nicolson propose the fluid mosaic model."
                    ]
                }
            },
            {
                title: "3. Discovery: what the evidence revealed",
                paragraphs: [
                    "Different experiments answered different questions. Membrane experiments showed that water and dissolved substances do not all cross in the same way. Measurements of osmotic pressure showed that water movement could produce measurable effects. Chemical and cell studies supported a membrane made largely of lipids, while later evidence showed that proteins provide specific routes and pumps. Observing energy use helped distinguish passive movement from active transport.",
                    "A key discovery was that a cell membrane is selectively permeable: it allows some substances to cross more readily than others. Its behavior depends on molecule size, charge, concentration differences, membrane composition, and available proteins. The membrane is dynamic, not a simple sieve with identical holes."
                ]
            },
            {
                title: "4. The concept: six ways materials move",
                paragraphs: [
                    "A cell membrane is a flexible boundary made mainly of a double layer of lipid molecules with proteins embedded in or attached to it. Some molecules pass through the lipid portion; others use membrane proteins; very large materials may travel in membrane-wrapped vesicles. A concentration is the amount of a substance in a certain volume. When concentrations differ across a membrane, particles have a concentration gradient. Particles move randomly, but their net movement can follow that gradient.",
                    "Simple diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration. Oxygen and carbon dioxide can cross many cell membranes this way. Diffusion does not require the cell to spend energy. Individual particles still move randomly in both directions; “net movement” describes the overall result when more particles move one way than the other.",
                    "Osmosis is the net movement of water across a selectively permeable membrane. In a basic example, water moves from the side with more available water and fewer dissolved particles toward the side with less available water and more dissolved particles. The exact direction depends on the substances that can and cannot cross, along with pressure and other conditions. Osmosis is passive transport.",
                    "Facilitated diffusion also moves substances down their concentration gradient without the cell directly using ATP, but it requires a membrane protein. Channel proteins create selective passageways; carrier proteins bind a substance and change shape to move it. Glucose, for example, can enter many cells through carrier proteins. It is too large and polar to cross the lipid part of the membrane quickly on its own.",
                    "Active transport moves a substance against its concentration gradient or electrochemical gradient, from lower to higher concentration in the relevant direction. A protein pump uses energy to do this. Some pumps use ATP directly; other transport systems use energy stored in a gradient made by a different pump. The sodium-potassium pump is one example: it uses ATP to move sodium and potassium ions in opposite directions across the membrane.",
                    "For bulk transport, the cell uses vesicles—small membrane-bound packages. In endocytosis, the membrane folds around material and brings it into the cell. In exocytosis, a vesicle joins the membrane and releases its contents outside. Cells use these processes for large particles or amounts of material that cannot pass through an ordinary channel. The cell spends energy to manage vesicle transport."
                ],
                imagePlaceholder: {
                    src: "assets/cell-movement-of-materials.png",
                    altText: "Infographic comparing simple diffusion, osmosis, facilitated diffusion, active transport, endocytosis, and exocytosis across a cell membrane.",
                    caption: "Use the diagram as a quick guide. Its arrows simplify net movement; actual transport depends on the membrane, gradients, and available proteins."
                },
                table: {
                    headers: ["Process", "Direction or route", "Energy use"],
                    rows: [
                        ["Simple diffusion", "Down a concentration gradient through the membrane.", "No direct ATP use"],
                        ["Osmosis", "Water crosses a selectively permeable membrane.", "No direct ATP use"],
                        ["Facilitated diffusion", "Down a gradient through a channel or carrier protein.", "No direct ATP use"],
                        ["Active transport", "Often against a concentration or electrochemical gradient through a pump or coupled transporter.", "Energy required"],
                        ["Endocytosis / exocytosis", "Vesicles bring material in or release it out.", "Energy required"]
                    ]
                },
                paragraphsAfterTable: [
                    "The image's oxygen example suits simple diffusion, but not every small molecule crosses unaided. Glucose generally needs a transporter. Its water illustration is a simplified way to show osmosis: scientifically, focus on net water movement across a selectively permeable membrane and the relative concentration of substances that cannot cross."
                ]
            },
            {
                title: "5. Example: identify transport from evidence",
                paragraphs: [
                    "Suppose a cell is placed in a solution with more dissolved salt outside than inside, and the salt cannot cross the membrane. Water is more available on the side with less dissolved salt. The net movement of water is out of the cell by osmosis. The cell may shrink, though the exact effect depends on the cell type and the surrounding solution.",
                    "Now consider glucose entering a cell where glucose concentration is already higher inside. If a carrier protein helps glucose move into the cell against that difference, the process requires energy, directly or indirectly, and is active transport. If glucose instead moves from higher concentration outside to lower concentration inside through a carrier without ATP use, that is facilitated diffusion.",
                    "To classify a diagram, identify the material, check its direction relative to the relevant gradient, look for a channel, carrier, pump, or vesicle, and note whether energy is used. Do not decide from the molecule alone: the same substance can move by different routes depending on conditions."
                ],
                bullets: [
                    "Down a gradient with no protein shown: likely simple diffusion.",
                    "Water crossing a selectively permeable membrane: osmosis.",
                    "Down a gradient through a channel or carrier: facilitated diffusion.",
                    "Against a gradient using an energy-powered protein: active transport."
                ]
            },
            {
                title: "6. Practice",
                paragraphs: [
                    "Read each clue and name the most likely transport process."
                ],
                bullets: [
                    "1. Oxygen moves into a cell from an area where oxygen concentration is higher.",
                    "2. Water crosses a membrane that blocks a dissolved salt.",
                    "3. A charged ion moves through a membrane channel down its gradient.",
                    "4. A membrane pouch surrounds a large particle and carries it into the cell."
                ],
                paragraphsAfterBullets: [
                    "Answers: 1. Simple diffusion. 2. Osmosis. 3. Facilitated diffusion. 4. Endocytosis."
                ]
            },
            {
                title: "7. Recap and comprehension check",
                paragraphs: [
                    "Cell membranes control exchange. Diffusion moves particles down a concentration gradient; osmosis is net water movement across a selectively permeable membrane; and facilitated diffusion uses a protein pathway without direct ATP use. Active transport uses energy to move substances against a gradient or to support coupled transport. Endocytosis brings bulk material in, and exocytosis releases it. Scientific explanations of these processes grew from membrane experiments, measurements, and changing models."
                ],
                bullets: [
                    "Which two clues distinguish facilitated diffusion from active transport?",
                    "What is moving during osmosis, and what kind of boundary must it cross?",
                    "What evidence in a diagram would suggest endocytosis?"
                ],
                paragraphsAfterBullets: [
                    "For further reading, explore the free OpenStax Biology 2e chapter on membranes and transport."
                ],
                resourceLink: resource("OpenStax Biology 2e: Membranes and transport", `${biology}5-introduction`)
            }
        ]
    });

    Object.assign(guides["science-5-4"], {
        intro: "Learn how cells divide for growth and repair, how scientists discovered the stages of mitosis, and how to read a cell-division diagram.",
        example: "Follow one body cell as it copies its DNA, separates matching chromosome copies, and divides into two daughter cells.",
        formula: "",
        rules: "DNA is copied during interphase before mitosis. Mitosis separates the copied chromosomes into two nuclei; cytokinesis divides the cell's cytoplasm. The result is usually two genetically similar daughter cells.",
        lessonSections: [
            {
                title: "1. Hook and learning goals",
                paragraphs: [
                    "Your body replaces worn-out cells and heals small injuries, yet most cells do not simply split their contents at random. Before dividing, a cell copies its DNA and carefully separates the copies. In this lesson, you will learn why cells divide, how mitosis works, what scientists discovered about the process, and how to follow the stages in a diagram. You will also distinguish mitosis from meiosis, which makes reproductive cells."
                ]
            },
            {
                title: "2. History story: discovering how cells divide",
                subsections: [
                    {
                        title: "Microscopes make cell division observable",
                        paragraphs: [
                            "For centuries, people could see living things grow, wounds heal, and plants produce new shoots, but they could not see what individual cells were doing. Early microscopes changed that. In 1665, Robert Hooke published drawings of cork compartments, and in the 1670s Antonie van Leeuwenhoek described living microscopic organisms. These observations revealed a world of small structures, although early microscopes could not resolve the fine details of chromosomes.",
                            "As microscopes improved, scientists began watching living tissues and preserved samples at different times. They saw that cells could change shape, that material inside the nucleus seemed to reorganize, and that one cell could become two. A single still image could not show the order of events. Researchers needed to compare many cells caught at different moments and infer the sequence that produced them."
                        ]
                    },
                    {
                        title: "Cell theory raises a new question",
                        paragraphs: [
                            "In the nineteenth century, Matthias Schleiden and Theodor Schwann helped establish that plants and animals are made of cells. That idea made a new question unavoidable: if living things are made of cells, where do new cells come from? Rudolf Virchow popularized the principle that cells arise from existing cells. Researchers including Robert Remak had observed cells dividing, adding evidence that new cells came from earlier ones rather than appearing spontaneously.",
                            "This principle was important for explaining growth and repair, but it did not yet describe the machinery of division. Scientists needed to see what happened to the nucleus and its contents as a cell divided. The challenge was technical: the relevant structures were tiny, transparent, and changed quickly. Stains and improved optics helped make them easier to see."
                        ]
                    },
                    {
                        title: "Flemming follows the changing chromosomes",
                        paragraphs: [
                            "German anatomist Walther Flemming carefully studied dividing animal cells using dyes that made nuclear material easier to distinguish. In the 1870s and early 1880s, he documented a sequence of changes: material in the nucleus condensed into visible threads, arranged across the cell, separated, and became enclosed in two new nuclei. By comparing cells at different moments, he reconstructed an ordered process rather than treating each image as a separate event.",
                            "Flemming published detailed work on cell division in 1882 and used the term “mitosis,” from a Greek word referring to thread, because the hereditary material appeared as thread-like structures. His illustrations made the stages understandable to other researchers. The drawings were not photographs, but they recorded what he saw through the microscope and helped readers compare observations.",
                            "Flemming's work did not happen in isolation. Other scientists studied dividing cells in plants and animals, and improvements in staining and microscopes allowed researchers to test whether similar patterns appeared in different tissues. They found that the details could vary by organism and cell type, while the general task—separating copied genetic material—was shared."
                        ]
                    },
                    {
                        title: "Chromosomes connect division to inheritance",
                        paragraphs: [
                            "By the late nineteenth and early twentieth centuries, scientists increasingly connected the visible structures in dividing nuclei with inheritance. The term chromosome was introduced in the 1880s for structures that took up certain stains. Later work linked chromosomes with inherited traits and showed that chromosomes carry genes. Researchers studying meiosis, the special division that makes eggs and sperm, noticed that chromosome number is reduced in those cells. This helped explain how fertilization could restore the usual number.",
                            "As genetics advanced, scientists learned that chromosomes are made of DNA and proteins. Experiments in the twentieth century established DNA as the molecule that carries genetic information. This changed the meaning of the old microscope drawings: the structures Flemming saw were not merely threads changing shape; they were part of the system that copies and distributes genetic instructions.",
                            "Modern microscopes, fluorescent labels, and molecular tools allow scientists to observe proteins that move chromosomes, check whether DNA has been copied, and identify errors in separation. The story is still developing. Today's account of mitosis combines careful observation across centuries with experiments on DNA and the cell machinery. It is an explanation built from evidence, not a discovery made by one observer in one moment."
                        ]
                    }
                ],
                visualAid: {
                    title: "A timeline of cell-division research",
                    description: "Microscope observations led to a clearer account of cell division and chromosomes.",
                    steps: [
                        "1600s: Early microscopes reveal cells and microscopic life.",
                        "1800s: Cell theory and observations support cells coming from existing cells.",
                        "1870s–1880s: Walther Flemming documents dividing chromosomes.",
                        "1882: Flemming publishes detailed work and uses the term mitosis.",
                        "1900s: Genetics and DNA research connect chromosomes with inherited information.",
                        "Today: Imaging and molecular tools reveal the machinery that moves chromosomes."
                    ]
                }
            },
            {
                title: "3. Discovery: what scientists learned",
                paragraphs: [
                    "Observations showed that division has an order. The cell prepares and copies its DNA before the chromosomes separate. During mitosis, the copied chromosomes are organized and pulled into two groups, and new nuclei form around them. Cytokinesis then divides the rest of the cell. This sequence helps each new cell receive a set of genetic instructions.",
                    "Scientists also learned that mitosis is not the same as all cell division. Mitosis describes division of the nucleus in eukaryotic cells. Cytokinesis is division of the cytoplasm. Bacteria do not undergo mitosis because they lack a nucleus; they reproduce through a different process called binary fission."
                ]
            },
            {
                title: "4. The concept: mitosis step by step",
                paragraphs: [
                    "The cell cycle is the repeating sequence in which a cell grows, copies its DNA, and divides. Interphase is the long preparation period before mitosis. During its S phase, the cell copies its DNA. The chromosomes are copied, but they may not look like the familiar X shapes yet because the DNA is loosely arranged. Interphase is part of the cell cycle, not one of mitosis's four main stages.",
                    "During prophase, the copied DNA coils into visible chromosomes. Each duplicated chromosome consists of two matching sister chromatids joined at a region called the centromere. Structures that organize spindle fibers move toward opposite sides of the cell, and the spindle begins to form. In many cells, the nuclear envelope breaks down so the spindle can reach the chromosomes.",
                    "During metaphase, spindle fibers attach to the chromosomes and line them up near the middle of the cell. This alignment helps prepare for an even division. In anaphase, sister chromatids separate and move toward opposite poles. Once separated, each chromatid is counted as an individual chromosome. In telophase, the chromosomes arrive at the poles, loosen, and new nuclear envelopes form around the two sets.",
                    "Cytokinesis divides the cytoplasm and separates the cell into two daughter cells. Animal cells commonly pinch inward to form a cleavage furrow. Plant cells build a cell plate that develops into a new wall between the daughter cells. The details differ, but both processes partition the cell's contents.",
                    "Mitosis usually produces two daughter cells with the same chromosome number and nearly identical DNA to the original cell. “Identical” is a useful expectation, not an absolute guarantee: copying errors or DNA damage can create differences. Mitosis supports growth, replacement, and repair in many organisms. Meiosis is different: it involves two rounds of division and produces reproductive cells with half the usual chromosome number."
                ],
                imagePlaceholder: {
                    src: "assets/cell-division-mitosis.png",
                    altText: "Diagram of cell division showing interphase, prophase, metaphase, anaphase, telophase, and cytokinesis, ending with two daughter cells.",
                    caption: "The diagram shows the usual sequence. Interphase prepares and copies DNA before mitosis; cytokinesis divides the cytoplasm after the nuclei separate."
                },
                table: {
                    headers: ["Stage", "What to look for"],
                    rows: [
                        ["Interphase", "Cell grows and copies DNA; preparation before mitosis."],
                        ["Prophase", "Chromosomes condense and the spindle begins to form."],
                        ["Metaphase", "Duplicated chromosomes line up near the cell's middle."],
                        ["Anaphase", "Sister chromatids separate toward opposite poles."],
                        ["Telophase", "New nuclei form around the separated chromosomes."],
                        ["Cytokinesis", "Cytoplasm divides, producing two daughter cells."]
                    ]
                },
                paragraphsAfterTable: [
                    "The image is a simplified model: it does not show every molecule or every variation in cell division. It places interphase in the sequence for context, although interphase occurs before mitosis, and shows cytokinesis after the stages of nuclear division.",
                    "When reading any diagram, follow the arrows and check what is being counted. Before separation, one duplicated chromosome has two sister chromatids joined together. After separation, each chromatid is counted as a chromosome. This explains why chromosome counts in a drawing can appear to change even though the genetic copies are being divided between the two new nuclei."
                ]
            },
            {
                title: "5. Example: follow a skin cell dividing",
                paragraphs: [
                    "A skin cell near a small cut is replaced. Before dividing, it grows and copies its DNA during interphase. In prophase, its copied chromosomes become visible and the spindle forms. In metaphase, the chromosomes line up in the middle. In anaphase, sister chromatids move apart. In telophase, two nuclei form, and cytokinesis separates the cell.",
                    "The result is usually two daughter cells with the same chromosome number as the original skin cell. The new cells can take part in replacing damaged tissue. The key reasoning is to follow both the DNA and the cell: copying happens before mitosis, chromosome separation happens during mitosis, and the cytoplasm divides during cytokinesis. Each daughter cell then grows and carries out its own jobs."
                ],
                bullets: [
                    "If chromosomes are lined up in the middle, identify metaphase.",
                    "If sister chromatids are moving apart, identify anaphase.",
                    "If the cell is pinching or building a cell plate, identify cytokinesis."
                ]
            },
            {
                title: "6. Practice",
                paragraphs: [
                    "Use the stage descriptions and identify what happens before, during, and after mitosis."
                ],
                bullets: [
                    "1. In which part of the cell cycle is DNA copied?",
                    "2. A diagram shows chromosomes lined up at the cell's center. Which stage is shown?",
                    "3. What separates during anaphase?",
                    "4. How is mitosis different from meiosis?"
                ],
                paragraphsAfterBullets: [
                    "Answers: 1. Interphase, specifically S phase. 2. Metaphase. 3. Sister chromatids separate and move toward opposite poles. 4. Mitosis divides a nucleus to support growth and repair and usually yields two similar cells; meiosis uses two divisions to make reproductive cells with half the chromosome number."
                ]
            },
            {
                title: "7. Recap and comprehension check",
                paragraphs: [
                    "Mitosis separates copied chromosomes into two nuclei; cytokinesis divides the cytoplasm. DNA is copied earlier in interphase. In order, the main mitosis stages are prophase, metaphase, anaphase, and telophase. Mitosis supports growth and repair and usually produces two genetically similar cells. Meiosis is a separate process that makes reproductive cells."
                ],
                bullets: [
                    "Can you explain why DNA must be copied before mitosis?",
                    "Which stage has chromosomes lined up in the middle?",
                    "What is the difference between mitosis and cytokinesis?"
                ],
                paragraphsAfterBullets: [
                    "For further reading, explore the free OpenStax Biology 2e chapter on the cell cycle and mitosis."
                ],
                resourceLink: resource("OpenStax Biology 2e: The cell cycle", `${biology}10-2-the-cell-cycle`)
            }
        ]
    });

    window.scienceLessonGuides = guides;
})();
