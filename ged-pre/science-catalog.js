(function () {
    const parts = {
        1: {
            title: 'Part A: Life science',
            description: 'Study cells, human health, heredity, ecosystems, and evolution.'
        },
        5: {
            title: 'Part B: Physical science',
            description: 'Practice matter, chemical reactions, motion, forces, work, and energy.'
        },
        8: {
            title: 'Part C: Earth and space science',
            description: 'Explore Earth systems, the environment, the solar system, and the universe.'
        },
        10: {
            title: 'Part D: Scientific reasoning and data',
            description: 'Build reading, investigation, data, and math skills used throughout the science test.'
        },
        14: {
            title: 'Part E: Turn knowledge into real-test readiness',
            description: 'Combine science skills, review mistakes, and build test stamina.'
        }
    };

    const chapters = [
        {
            title: 'Reading and understanding science',
            sections: [
                ['Find the main idea', ['Identify the passage’s main point and supporting details.', 'Summarize a paragraph and identify the scientific question.']],
                ['Understand scientific vocabulary', ['Use context to understand unfamiliar scientific terms.', 'Interpret symbols and distinguish observations from explanations.']],
                ['Understand relationships', ['Recognize cause and effect, compare systems, and sequence processes.', 'Connect diagrams with written explanations.']],
                ['Evaluate evidence and conclusions', ['Identify claims and supporting evidence.', 'Judge whether evidence is relevant, sufficient, and consistent with a conclusion.']],
                ['Compare scientific sources', ['Compare sources’ methods, evidence, and conclusions.', 'Decide which source best supports a claim.']],
                ['Interpret scientific models and diagrams', ['Read labels, symbols, arrows, and spatial relationships.', 'Explain what a model shows and recognize what it leaves out.']]
            ]
        },
        {
            title: 'Experiments and scientific investigations',
            sections: [
                ['Scientific questions and hypotheses', ['Recognize investigable questions and write testable hypotheses.', 'Make predictions and distinguish hypotheses from conclusions.']],
                ['Variables', ['Identify independent, dependent, and controlled variables.', 'Explain how an uncontrolled variable could affect results.']],
                ['Controls and comparison groups', ['Identify experimental and comparison groups.', 'Explain why comparisons matter and spot confounding differences.']],
                ['Design a fair investigation', ['Choose a procedure, measurement, and units that test the question.', 'Control other conditions, record results, and use repeated trials.']],
                ['Sampling and study quality', ['Identify a population and sample and recognize sampling bias.', 'Distinguish observational studies from experiments and assess limitations.']],
                ['Analyze and improve an experiment', ['Identify errors and evaluate whether results support a hypothesis.', 'Suggest a specific improvement or follow-up investigation.']]
            ]
        },
        {
            title: 'Tables, graphs, diagrams, and data',
            sections: [
                ['Read data tables', ['Read titles, headings, and units.', 'Locate values, compare entries, and identify patterns.']],
                ['Interpret graphs', ['Read bar, line, circle, and scatterplot graphs.', 'Interpret axes, scales, intervals, comparisons, and trends.']],
                ['Interpret relationships', ['Identify positive, negative, or absent relationships.', 'Use numerical evidence and remember that correlation alone does not establish cause.']],
                ['Make predictions', ['Estimate between known data points and predict beyond them cautiously.', 'Choose supported predictions and recognize when information is insufficient.']],
                ['Connect representations', ['Match graphs, tables, diagrams, and passages.', 'Choose an appropriate graph and translate written relationships into numbers.']]
            ]
        },
        {
            title: 'Math used in science',
            sections: [
                ['Number skills and measurement', ['Work with numbers, fractions, and decimals and compare values.', 'Use units, supplied conversions, and scientific notation.']],
                ['Ratios, proportions, and percentages', ['Compare quantities using ratios and solve proportions.', 'Calculate percentages, percent change, and rates.']],
                ['Statistics', ['Calculate and interpret mean, median, mode, and range.', 'Compare groups and explain how unusual values affect averages.']],
                ['Probability and counting', ['Calculate simple probabilities and express them in different forms.', 'Count outcomes and apply probability to genetics.']],
                ['Formulas and calculator use', ['Select values for a supplied formula and substitute accurately.', 'Solve for missing values, include units, use calculator parentheses, and check reasonableness.']]
            ]
        },
        {
            title: 'Cells and the organization of life',
            sections: [
                ['Cell structures and functions', ['Identify cell structures and their functions from diagrams.', 'Compare plant and animal cells and single-celled and multicellular organisms.']],
                ['Levels of organization', ['Order cells, tissues, organs, organ systems, and organisms.', 'Explain how smaller structures contribute to larger systems.']],
                ['Movement of materials', ['Interpret diffusion and osmosis.', 'Predict movement from concentration data and explain cellular exchange.']],
                ['Cell division', ['Explain the purposes of cell division.', 'Compare mitosis and meiosis and interpret related diagrams.']]
            ]
        },
        {
            title: 'Human body, health, and energy',
            sections: [
                ['Body systems', ['Describe the roles of major body systems.', 'Explain how systems work together and trace materials through diagrams.']],
                ['Homeostasis', ['Explain how organisms maintain stable internal conditions.', 'Interpret examples involving temperature, water balance, and blood sugar.']],
                ['Nutrition and energy', ['Interpret nutrition information and compare energy intake and use.', 'Connect nutrients to growth, repair, and body functions.']],
                ['Photosynthesis and cellular respiration', ['Identify the inputs and outputs of each process.', 'Explain energy use and connect both processes with diagrams.']],
                ['Health evidence', ['Read health data and compare treatment and control groups.', 'Calculate risk or percentages and assess whether conclusions are supported.']]
            ]
        },
        {
            title: 'Genetics and heredity',
            sections: [
                ['DNA, genes, and chromosomes', ['Explain the relationship among DNA, genes, and chromosomes.', 'Connect inherited information to traits and diagrams.']],
                ['Traits and alleles', ['Distinguish genotype from phenotype.', 'Interpret dominant and recessive models and homozygous or heterozygous combinations.']],
                ['Punnett squares and probability', ['Complete a simple Punnett square.', 'Identify possible traits and calculate probability without treating it as a guarantee.']],
                ['Variation and mutation', ['Recognize inherited variation and how DNA changes can affect traits.', 'Use evidence to distinguish genetic from environmental influences.']]
            ]
        },
        {
            title: 'Ecosystems and evolution',
            sections: [
                ['Ecosystem relationships', ['Identify producers, consumers, and decomposers.', 'Interpret interactions and distinguish living and nonliving factors.']],
                ['Energy flow', ['Read food chains, food webs, and energy pyramids.', 'Predict how changing a population affects energy flow.']],
                ['Populations and resources', ['Read population graphs and identify limiting factors and carrying capacity.', 'Predict effects of resource shortages and habitat changes.']],
                ['Natural selection', ['Connect population variation and environmental conditions to survival and reproduction.', 'Explain changes across generations and distinguish inherited adaptations from temporary responses.']],
                ['Evidence of evolution', ['Interpret fossil, anatomical, and DNA comparisons.', 'Use evidence to infer relationships and support conclusions.']]
            ]
        },
        {
            title: 'Matter and chemical reactions',
            sections: [
                ['Matter and its properties', ['Distinguish elements, compounds, and mixtures.', 'Interpret atomic diagrams, states of matter, and physical or chemical properties.']],
                ['Changes in matter', ['Distinguish physical and chemical changes and identify reaction evidence.', 'Apply conservation of matter and interpret simple equations.']],
                ['Solutions', ['Identify solutes and solvents and compare concentrations.', 'Interpret dissolving, solubility, acids, bases, and pH using supplied information.']],
                ['Reaction rates', ['Interpret how temperature, concentration, surface area, or catalysts affect reactions.', 'Identify variables, compare rates, and evaluate experiment design.']]
            ]
        },
        {
            title: 'Motion, forces, and work',
            sections: [
                ['Motion', ['Describe position, distance, speed, and acceleration.', 'Calculate speed and interpret motion graphs.']],
                ['Forces', ['Identify balanced, unbalanced, and net forces.', 'Explain friction and gravity and use supplied force relationships.']],
                ['Work and machines', ['Identify when a force causes movement and use a supplied work formula.', 'Interpret simple machines and compare input and output.']]
            ]
        },
        {
            title: 'Energy and its transfer',
            sections: [
                ['Forms and conservation of energy', ['Identify kinetic, potential, thermal, chemical, and electrical energy.', 'Trace energy transformations and apply conservation of energy.']],
                ['Heat transfer', ['Distinguish conduction, convection, and radiation.', 'Predict heat transfer and interpret heating or cooling data.']],
                ['Waves', ['Read wavelength and amplitude diagrams.', 'Interpret frequency and compare sound and light.']],
                ['Electricity', ['Read circuit diagrams and interpret current, voltage, and resistance.', 'Compare series and parallel circuits and use supplied formulas.']],
                ['Energy resources', ['Compare renewable and nonrenewable resources.', 'Evaluate energy data, calculate efficiency, and assess claims.']]
            ]
        },
        {
            title: 'Earth’s systems and the environment',
            sections: [
                ['Interacting Earth systems', ['Identify the atmosphere, hydrosphere, geosphere, and biosphere.', 'Explain system interactions and interpret water and carbon cycles.']],
                ['Earth materials and processes', ['Read a rock-cycle diagram.', 'Distinguish weathering, erosion, and deposition and interpret surface changes.']],
                ['Plate tectonics', ['Interpret plate-boundary diagrams.', 'Connect plate motion with earthquakes, volcanoes, and mountains using maps and data.']],
                ['Weather and climate', ['Distinguish weather from climate.', 'Read temperature and precipitation graphs and interpret atmospheric influences.']],
                ['Environmental change', ['Analyze evidence about pollution, resources, and habitat changes.', 'Compare solutions and distinguish observations from predictions.']]
            ]
        },
        {
            title: 'Earth, the solar system, and the universe',
            sections: [
                ['Earth-Sun-Moon relationships', ['Distinguish rotation from revolution and explain day and night.', 'Interpret seasons, Moon phases, and eclipses with diagrams.']],
                ['Gravity and orbits', ['Explain gravity’s role in orbital motion.', 'Compare objects using supplied information and interpret planetary-system models.']],
                ['Stars and the universe', ['Distinguish planets, stars, solar systems, and galaxies.', 'Read star data and interpret development diagrams and evidence.']]
            ]
        },
        {
            title: 'Mixed GED-style practice',
            sections: [
                ['Passage plus graph', ['Identify a passage claim.', 'Find supporting or conflicting graph data and select the best-supported conclusion.']],
                ['Experiment plus calculation', ['Identify variables and controls.', 'Calculate an average, percentage, or rate and evaluate the conclusion.']],
                ['Diagram plus prediction', ['Interpret a cell, circuit, food-web, or Earth-system diagram.', 'Predict a change and explain it using supplied information.']],
                ['Question-format practice', ['Practice selected-response and numerical-entry questions.', 'Practice drag-and-drop, drop-down, and hot-spot tasks and identify what each question asks.']]
            ]
        },
        {
            title: 'Review mistakes and build test stamina',
            sections: [
                ['Keep an error log', ['Record the skill, mistake, and correct reasoning.', 'Choose a specific next practice task.']],
                ['Classify your mistakes', ['Identify content, reading, data, math, reasoning, and timing errors.', 'Choose a review strategy for each type.']],
                ['Practice under test conditions', ['Begin with short untimed sets and add timed practice as accuracy improves.', 'Practice a full 90-minute session and use available test tools.']]
            ]
        }
    ];

    chapters.forEach((chapter, index) => {
        chapter.stepChapter = index + 1;
    });
    const orderedChapters = [5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 14, 15]
        .map(chapterNumber => chapters[chapterNumber - 1]);
    window.scienceCourseChapters = orderedChapters;

    const chapterList = document.getElementById('science-chapter-list');
    if (!chapterList) return;

    orderedChapters.forEach((chapter, chapterIndex) => {
        const chapterNumber = chapterIndex + 1;
        const part = parts[chapterNumber];
        if (part) {
            const partHeading = document.createElement('div');
            partHeading.className = 'science-course-part';
            const partTitle = document.createElement('h4');
            partTitle.textContent = part.title;
            const partDescription = document.createElement('p');
            partDescription.textContent = part.description;
            partHeading.append(partTitle, partDescription);
            chapterList.append(partHeading);
        }

        const heading = document.createElement('div');
        heading.className = 'chapter-title-modern';
        heading.textContent = `Chapter ${chapterNumber}: ${chapter.title}`;
        const grid = document.createElement('div');
        grid.className = 'concept-steps-grid';

        chapter.sections.forEach(([sectionTitle], sectionIndex) => {
            const link = document.createElement('a');
            link.href = `lesson.html?step=science-${chapter.stepChapter}-${sectionIndex + 1}`;
            link.className = 'step-pill-card searchable-card';

            const badge = document.createElement('span');
            badge.className = 'step-badge-tag';
            badge.style.background = '#f0fff4';
            badge.style.color = '#276749';
            badge.textContent = `Section ${chapterNumber}.${sectionIndex + 1}`;

            const title = document.createElement('h4');
            title.textContent = sectionTitle;
            const arrow = document.createElement('span');
            arrow.className = 'arrow';
            arrow.innerHTML = '&rarr;';
            link.append(badge, title, arrow);
            grid.append(link);
        });

        chapterList.append(heading, grid);
    });
})();
