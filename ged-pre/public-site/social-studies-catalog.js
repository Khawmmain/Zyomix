(function () {
    const parts = {
        1: { title: "Part 1: Basic Knowledge and Essential Skills", description: "Build the reading, historical-thinking, and data skills used across Social Studies." },
        6: { title: "Part 2: Civics and Government", description: "Learn how government is organized, how constitutional ideas work, and how people participate." },
        13: { title: "Part 3: Authors, Thinkers, and Historical Documents", description: "Practice analyzing writers and primary sources; this is a study guide, not a ranking of likely exam authors." },
        16: { title: "Part 4: United States History", description: "Study major events, causes, effects, and changes in U.S. history." },
        22: { title: "Part 5: Economics", description: "Understand choices, markets, economic indicators, government policy, and trade." },
        27: { title: "Part 6: Geography and the World", description: "Read maps and explore population, environments, and global connections." },
        30: { title: "Part 7: GED Question Practice and Final Preparation", description: "Apply Social Studies skills to GED-style questions and prepare a review plan." },
    };

    const chapters = [
        {
            title: "Introduction to Social Studies",
            overview: "Social Studies examines how people live together. It connects civic life, history, economics, and geography to explain communities and events.",
            part: 1,
            partStart: 1,
            sections: [
                ["Meaning and purpose of social studies"],
                ["Civics and government"],
                ["United States history"],
                ["Economics"],
                ["Geography and the world"],
                ["How the subjects connect"],
                ["Overview of GED Social Studies"],
            ]
        },
        {
            title: "Essential Vocabulary and Historical Thinking",
            overview: "Historical thinking uses time, context, causes, effects, and comparisons to make sense of the past. Clear vocabulary helps describe those relationships accurately.",
            part: 1,
            partStart: 1,
            sections: [
                ["Government, citizenship, rights, laws, and society"],
                ["Timelines and chronological order"],
                ["Years, decades, centuries, and historical periods"],
                ["Cause and effect"],
                ["Change and continuity"],
                ["Similarities and differences"],
                ["Historical context"],
                ["Short-term and long-term consequences"],
            ]
        },
        {
            title: "Reading Social Studies Passages",
            overview: "A strong reading starts by identifying the topic, main idea, and supporting details. Inferences and judgments should be based on what a passage actually says.",
            part: 1,
            partStart: 1,
            sections: [
                ["Identifying the topic"],
                ["Finding the main idea"],
                ["Identifying supporting details"],
                ["Understanding vocabulary from context"],
                ["Summarizing information"],
                ["Making evidence-based inferences"],
                ["Identifying author’s purpose"],
                ["Identifying point of view"],
                ["Distinguishing facts, opinions, and judgments"],
            ]
        },
        {
            title: "Analyzing Sources and Arguments",
            overview: "Sources present claims from particular authors and perspectives. Evaluate who created a source, what evidence it uses, and whether that evidence supports its conclusions.",
            part: 1,
            partStart: 1,
            sections: [
                ["Primary and secondary sources"],
                ["Claims, reasons, and evidence"],
                ["Relevant and irrelevant evidence"],
                ["Supported and unsupported conclusions"],
                ["Bias, persuasion, and propaganda"],
                ["Comparing two sources"],
                ["Correlation versus causation"],
                ["Reading speeches, letters, and historical documents"],
                ["Interpreting political cartoons"],
            ]
        },
        {
            title: "Maps, Graphs, Tables, and Math Skills",
            overview: "Maps and data displays organize information visually. Read titles, labels, legends, scales, and units before comparing values, calculating percentages, or describing trends.",
            part: 1,
            partStart: 1,
            sections: [
                ["Titles, labels, legends, scales, and units"],
                ["Tables and data comparisons"],
                ["Bar graphs"],
                ["Line graphs"],
                ["Circle graphs"],
                ["Scatterplots"],
                ["Ratios and percentages"],
                ["Percentage change"],
                ["Mean, median, mode, and range"],
                ["Trends and reasonable predictions"],
                ["Connecting data to a passage"],
            ]
        },
        {
            title: "Foundations of Government",
            overview: "Governments make collective decisions and establish rules. Political systems differ in who holds power, how authority is justified, and what limits protect people.",
            part: 2,
            partStart: 6,
            sections: [
                ["Why governments exist"],
                ["Power and authority"],
                ["Democracy and representative government"],
                ["Direct versus indirect democracy"],
                ["Monarchy and dictatorship"],
                ["Limited versus unlimited government"],
                ["Rule of law"],
                ["Popular sovereignty"],
                ["Consent of the governed"],
            ]
        },
        {
            title: "Ideas Behind American Government",
            overview: "Ideas such as natural rights, liberty, equality, and social contracts shaped arguments for American self-government. These ideas also raise questions about how to balance personal freedom and public authority.",
            part: 2,
            partStart: 6,
            sections: [
                ["Natural rights"],
                ["Social contract"],
                ["Individual liberty"],
                ["Equality and political rights"],
                ["Influences on American constitutional government"],
                ["Independence and self-government"],
                ["Balancing liberty and government authority"],
            ]
        },
        {
            title: "Founding Documents and Constitutional Debates",
            overview: "Founding-era documents record debates over independence and how a new government should work. The Declaration, Articles, Constitution, and ratification arguments reflect changing solutions and disagreements.",
            part: 2,
            partStart: 6,
            sections: [
                ["Declaration of Independence"],
                ["Articles of Confederation"],
                ["Weaknesses of the Articles of Confederation"],
                ["Constitutional Convention"],
                ["Major constitutional compromises"],
                ["Federalists and Anti-Federalists"],
                ["The Federalist Papers"],
                ["Ratification of the Constitution"],
                ["Arguments for and against adding a Bill of Rights"],
            ]
        },
        {
            title: "The U.S. Constitution",
            overview: "The Constitution establishes the federal government and divides authority. Separation of powers, checks and balances, federalism, and amendments describe how that system is structured and changed.",
            part: 2,
            partStart: 6,
            sections: [
                ["The Preamble"],
                ["Structure and purpose of the Constitution"],
                ["Separation of powers"],
                ["Checks and balances"],
                ["Federalism"],
                ["Enumerated powers"],
                ["Reserved powers"],
                ["Concurrent powers"],
                ["The amendment process"],
            ]
        },
        {
            title: "The Three Branches of Government",
            overview: "Congress makes federal laws, the president leads the executive branch, and federal courts interpret laws. Their powers and limits are designed to prevent any one branch from controlling the whole government.",
            part: 2,
            partStart: 6,
            sections: [
                ["Legislative branch: Congress"],
                ["House of Representatives and Senate"],
                ["Powers of Congress"],
                ["How a bill becomes a law"],
                ["Executive branch: the president and administration"],
                ["Presidential powers and limits"],
                ["Judicial branch: federal courts"],
                ["Supreme Court and judicial review"],
                ["Checks and balances in practice"],
            ]
        },
        {
            title: "Rights, Liberties, and Constitutional Amendments",
            overview: "Constitutional amendments protect rights and have expanded legal equality and voting access. Civil liberties limit government interference, while civil rights address equal treatment under the law.",
            part: 2,
            partStart: 6,
            sections: [
                ["The Bill of Rights"],
                ["Freedom of religion"],
                ["Freedom of speech and press"],
                ["Freedom of assembly and petition"],
                ["Rights of people accused of crimes"],
                ["Due process"],
                ["Equal protection"],
                ["The 13th, 14th, and 15th Amendments"],
                ["Amendments expanding voting rights"],
                ["Civil rights versus civil liberties"],
                ["Individual rights and public interests"],
            ]
        },
        {
            title: "Citizenship, Elections, and Public Policy",
            overview: "Citizens participate through voting and other civic actions. Elections, public opinion, interest groups, taxes, and policy decisions connect people with government at different levels.",
            part: 2,
            partStart: 6,
            sections: [
                ["Rights and responsibilities of citizens"],
                ["Voting and political participation"],
                ["Political parties"],
                ["Primary and general elections"],
                ["The Electoral College"],
                ["Interest groups and lobbying"],
                ["Public opinion and the media"],
                ["Federal, state, and local responsibilities"],
                ["Public services, taxation, and spending"],
                ["Regulation and public welfare"],
                ["Domestic and foreign policy"],
                ["Evaluating competing policy proposals"],
            ]
        },
        {
            title: "How to Study Historical Authors",
            overview: "To understand a historical writer, connect the author and audience to the time and purpose of the document. Then identify the argument, evidence, and perspective before comparing it with another source.",
            part: 3,
            partStart: 13,
            sections: [
                ["Identifying the author"],
                ["Identifying the audience"],
                ["Understanding the historical setting"],
                ["Finding the author’s purpose"],
                ["Identifying the main argument"],
                ["Examining supporting evidence"],
                ["Recognizing perspective and bias"],
                ["Comparing authors’ arguments"],
            ]
        },
        {
            title: "Thinkers and Writers of the Founding Era",
            overview: "Founding-era thinkers offered different arguments about rights, independence, and constitutional design. Locke, Paine, Jefferson, Madison, and Hamilton influenced debates about government and the Bill of Rights.",
            part: 3,
            partStart: 13,
            sections: [
                ["John Locke — Two Treatises of Government"],
                ["Locke’s ideas about rights and government"],
                ["Thomas Paine — Common Sense"],
                ["Paine’s arguments for independence"],
                ["Thomas Jefferson — Declaration of Independence"],
                ["Jefferson’s arguments about rights and consent"],
                ["James Madison — writings on constitutional government and rights"],
                ["Alexander Hamilton — Federalist No. 84"],
                ["Comparing Madison and Hamilton on a Bill of Rights"],
                ["Connecting founding ideas to the Constitution"],
            ]
        },
        {
            title: "Writers and Speakers on Liberty and Equality",
            overview: "Douglass, Lincoln, and King used speeches and writing to confront conflicts between American ideals and unequal treatment. Comparing their claims shows how arguments for liberty and equality changed across time.",
            part: 3,
            partStart: 13,
            sections: [
                ["Frederick Douglass — his Fourth of July address"],
                ["Douglass on slavery and American ideals"],
                ["Abraham Lincoln — Gettysburg Address"],
                ["Lincoln’s purpose and Civil War context"],
                ["Martin Luther King Jr. — Letter from Birmingham Jail"],
                ["King’s arguments about injustice and social change"],
                ["Comparing founding ideals with later demands for equality"],
                ["Comparing claims and evidence across historical periods"],
            ]
        },
        {
            title: "Colonial America and the American Revolution",
            overview: "Colonial America included diverse Indigenous societies and colonies with different economies. British policies and colonial resistance helped lead to revolution, while slavery exposed limits in revolutionary claims about liberty.",
            part: 4,
            partStart: 16,
            sections: [
                ["Indigenous societies and European colonization"],
                ["The thirteen colonies"],
                ["Regional economies and societies"],
                ["Colonial representative government"],
                ["Slavery in colonial America"],
                ["British taxation and colonial resistance"],
                ["The movement toward independence"],
                ["The American Revolution"],
                ["Revolutionary ideals and their limits"],
            ]
        },
        {
            title: "The Early Republic and Westward Expansion",
            overview: "The early United States faced disagreements about national power and political direction. Expansion brought new land and opportunities but also intensified the displacement of Native peoples and conflict over slavery.",
            part: 4,
            partStart: 16,
            sections: [
                ["Challenges facing the new nation"],
                ["Early political disagreements"],
                ["Development of political parties"],
                ["The Louisiana Purchase"],
                ["Territorial expansion"],
                ["Manifest Destiny"],
                ["Native American removal and resistance"],
                ["Expansion and the spread of slavery"],
                ["Growing sectional conflict"],
            ]
        },
        {
            title: "Civil War and Reconstruction",
            overview: "Slavery and sectional conflict led to the Civil War. Emancipation and Reconstruction changed the Constitution, but resistance and later policies restricted many Black Americans’ rights.",
            part: 4,
            partStart: 16,
            sections: [
                ["Differences between North and South"],
                ["Slavery and abolition"],
                ["States’ rights arguments and sectional conflict"],
                ["Causes of the Civil War"],
                ["The Union and Confederacy"],
                ["Emancipation"],
                ["Results of the Civil War"],
                ["Reconstruction"],
                ["The Reconstruction Amendments"],
                ["Resistance to Reconstruction"],
                ["Segregation and disenfranchisement"],
            ]
        },
        {
            title: "Industrialization, Immigration, and Reform",
            overview: "Industrial growth changed work, cities, and immigration. Labor organizing and Progressive reforms responded to dangerous conditions, concentrated business power, inequality, and demands for political rights.",
            part: 4,
            partStart: 16,
            sections: [
                ["Industrial growth and technology"],
                ["Big business and competition"],
                ["Working conditions"],
                ["Labor unions"],
                ["Immigration"],
                ["Urbanization"],
                ["Inequality and social reform"],
                ["The Progressive Era"],
                ["Women’s suffrage"],
            ]
        },
        {
            title: "World War I, the Great Depression, and World War II",
            overview: "The United States experienced global wars, economic boom and collapse, and expanded federal action during the first half of the 20th century. World War II also involved the Holocaust and the unjust incarceration of Japanese Americans.",
            part: 4,
            partStart: 16,
            sections: [
                ["Causes of World War I"],
                ["U.S. involvement in World War I"],
                ["Consequences of World War I"],
                ["Economic and social change in the 1920s"],
                ["Causes of the Great Depression"],
                ["Effects of the Great Depression"],
                ["The New Deal"],
                ["Debates over government’s economic role"],
                ["Causes of World War II"],
                ["U.S. involvement and the home front"],
                ["Japanese American incarceration"],
                ["The Holocaust"],
                ["Consequences of World War II"],
            ]
        },
        {
            title: "The Cold War, Civil Rights, and Modern America",
            overview: "The Cold War shaped U.S. foreign policy and military conflicts. At home, civil rights movements challenged discrimination, while later changes raised new debates about trust, technology, globalization, and America’s global role.",
            part: 4,
            partStart: 16,
            sections: [
                ["Origins of the Cold War"],
                ["Competing political and economic systems"],
                ["Containment and international alliances"],
                ["The Korean War"],
                ["The Vietnam War"],
                ["The Civil Rights Movement"],
                ["Civil rights and voting rights legislation"],
                ["Other movements for equality"],
                ["Public trust in government"],
                ["Globalization and technological change"],
                ["Debates about America’s role in the world"],
            ]
        },
        {
            title: "Basic Economic Concepts",
            overview: "Economics studies choices about limited resources. Needs, wants, trade-offs, opportunity cost, production, and incentives help explain how people and societies organize economic activity.",
            part: 5,
            partStart: 22,
            sections: [
                ["Needs and wants"],
                ["Scarcity"],
                ["Choices and trade-offs"],
                ["Opportunity cost"],
                ["Factors of production"],
                ["Goods and services"],
                ["Producers and consumers"],
                ["Incentives"],
                ["Traditional, market, command, and mixed economies"],
            ]
        },
        {
            title: "Markets, Businesses, and Labor",
            overview: "Markets connect buyers and sellers. Supply and demand influence prices and quantities, while competition, productivity, specialization, wages, and labor organizations shape businesses and work.",
            part: 5,
            partStart: 22,
            sections: [
                ["Supply"],
                ["Demand"],
                ["Equilibrium price"],
                ["Shortages and surpluses"],
                ["Changes in supply and demand"],
                ["Competition and monopoly"],
                ["Productivity"],
                ["Specialization and division of labor"],
                ["Wages and labor markets"],
                ["Labor unions"],
            ]
        },
        {
            title: "The National Economy",
            overview: "Economic indicators summarize activity across the nation. GDP, growth, business cycles, unemployment, inflation, and purchasing power help describe economic conditions but each measures something different.",
            part: 5,
            partStart: 22,
            sections: [
                ["Gross domestic product"],
                ["Economic growth"],
                ["The business cycle"],
                ["Recession and recovery"],
                ["Unemployment"],
                ["Inflation and deflation"],
                ["Purchasing power"],
                ["Reading economic indicators"],
            ]
        },
        {
            title: "Government, Money, and Banking",
            overview: "Governments influence the economy through taxes, spending, regulation, and fiscal policy. Banks and the Federal Reserve affect money and interest rates, while deficits and debt describe different budget measures.",
            part: 5,
            partStart: 22,
            sections: [
                ["Taxes and government spending"],
                ["Fiscal policy"],
                ["Money and banking"],
                ["The Federal Reserve"],
                ["Interest rates"],
                ["Monetary policy"],
                ["Budget deficits"],
                ["National debt"],
                ["Government regulation"],
            ]
        },
        {
            title: "Personal Finance and International Trade",
            overview: "Personal finance involves choices about income, saving, credit, borrowing, and risk. International trade connects economies through imports, exports, comparative advantage, and trade policies.",
            part: 5,
            partStart: 22,
            sections: [
                ["Income, spending, and saving"],
                ["Borrowing and interest"],
                ["Credit and borrowing costs"],
                ["Risk and return"],
                ["Imports and exports"],
                ["Trade balances"],
                ["Comparative advantage"],
                ["Tariffs and trade barriers"],
                ["Global economic interdependence"],
                ["Interpreting economic passages and graphs"],
            ]
        },
        {
            title: "Geographic Foundations and Map Skills",
            overview: "Geography describes the physical and human features of places. Map types, direction, coordinates, and scale help readers locate places and interpret spatial information.",
            part: 6,
            partStart: 27,
            sections: [
                ["Continents, oceans, countries, and regions"],
                ["Cardinal directions"],
                ["Latitude and longitude"],
                ["Physical geography"],
                ["Human geography"],
                ["Political maps"],
                ["Physical maps"],
                ["Thematic maps"],
                ["Map scales and distance"],
            ]
        },
        {
            title: "Population, Migration, and the Environment",
            overview: "Climate, landforms, and resources influence where and how people live. Population patterns and migration reflect environmental conditions, opportunities, and human decisions, which also change environments.",
            part: 6,
            partStart: 27,
            sections: [
                ["Climate and landforms"],
                ["Natural resources"],
                ["Settlement patterns"],
                ["Population distribution and density"],
                ["Migration, immigration, and emigration"],
                ["Push and pull factors"],
                ["Urbanization"],
                ["Human adaptation to the environment"],
                ["Human modification of the environment"],
                ["Resource use and environmental challenges"],
            ]
        },
        {
            title: "Geography and Global Connections",
            overview: "Geography connects places through transportation, trade, migration, ideas, and cooperation. Maps and population or economic data help explain how local events relate to wider systems.",
            part: 6,
            partStart: 27,
            sections: [
                ["Geography and transportation"],
                ["Geography and trade"],
                ["Spread of ideas, technology, and culture"],
                ["Borders and territorial conflict"],
                ["Geographic influences on historical events"],
                ["Population and economic development data"],
                ["International cooperation"],
                ["Global interdependence"],
                ["Combining maps, passages, tables, and graphs"],
            ]
        },
        {
            title: "Applying Knowledge to GED Questions",
            overview: "GED-style questions may ask you to analyze passages, documents, arguments, political cartoons, maps, and data. The essential task is to combine relevant evidence and choose a supported conclusion.",
            part: 7,
            partStart: 30,
            sections: [
                ["Questions based on one passage"],
                ["Questions comparing two passages"],
                ["Historical document questions"],
                ["Author’s purpose and point-of-view questions"],
                ["Claims and evidence questions"],
                ["Cause-and-effect questions"],
                ["Political cartoon questions"],
                ["Map, graph, and table questions"],
                ["Combining written and visual evidence"],
                ["Applying a concept to a new situation"],
            ]
        },
        {
            title: "Test-Taking Strategies",
            overview: "Effective test-taking begins with understanding the exact question. Use relevant evidence, check dates and labels, avoid assumptions, eliminate unsupported answers, and manage time deliberately.",
            part: 7,
            partStart: 30,
            sections: [
                ["Identifying exactly what the question asks"],
                ["Finding relevant evidence"],
                ["Separating useful details from background information"],
                ["Eliminating unsupported answer choices"],
                ["Checking dates, units, labels, and comparisons"],
                ["Avoiding assumptions not supported by the source"],
                ["Managing time"],
                ["Reviewing answers"],
            ]
        },
        {
            title: "Final Review and Readiness",
            overview: "Readiness improves through practice and review. Use results to find weak areas, revisit mistakes, practice mixed skills under timed conditions, and confirm what still needs work.",
            part: 7,
            partStart: 30,
            sections: [
                ["Take an initial practice test"],
                ["Identify weak subjects"],
                ["Identify weak reading, reasoning, and math skills"],
                ["Review difficult chapters"],
                ["Complete mixed-question practice"],
                ["Take a timed practice test"],
                ["Review every incorrect answer"],
                ["Revisit recurring mistakes"],
                ["Complete a final readiness check"],
            ]
        },
    ];

    window.socialStudiesCourseChapters = chapters;

    const chapterList = document.getElementById('social-chapter-list');
    if (!chapterList) return;

    chapters.forEach((chapter, chapterIndex) => {
        const chapterNumber = chapterIndex + 1;
        const part = parts[chapter.partStart];
        if (part && chapter.partStart === chapterNumber) {
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
            link.href = `lesson.html?step=social-${chapterNumber}-${sectionIndex + 1}`;
            link.className = 'step-pill-card searchable-card';

            const badge = document.createElement('span');
            badge.className = 'step-badge-tag';
            badge.style.background = '#fffbeb';
            badge.style.color = '#92400e';
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
