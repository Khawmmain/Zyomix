(function () {
    const chapters = [
        null,
        {
            concept: "Social Studies combines civics (government and citizenship), history (people and events over time), economics (choices and resources), and geography (places and people). These subjects connect to explain how communities work.",
            realWorld: "A new bus route involves government funding, geographic connections between neighborhoods, economic costs and benefits, and the history of how those neighborhoods developed.",
            ged: "GED questions may combine a passage with a map, graph, or historical source. Identify the skill being tested and support your answer with the source."
        },
        {
            concept: "Historical thinking places information in time and context, then examines cause, effect, change, and continuity. An event happening first does not automatically prove it caused a later event.",
            realWorld: "A town timeline can show when a transit policy changed; meeting notes might explain why, while ridership data may show later effects.",
            ged: "Use dates and source details to order events and distinguish a stated cause from a later result."
        },
        {
            concept: "A passage has a topic, a main idea, and supporting details. An inference is a reasonable conclusion drawn from clues; it should be supported by the passage rather than by a guess.",
            realWorld: "A notice describing long bus waits, missed appointments, and requests for more service supports an inference that residents are concerned about transportation access.",
            ged: "Find the author's main point, match details to it, and choose inferences that the passage supports."
        },
        {
            concept: "Analyze a source by asking who created it, when and why, what claim it makes, and which details support that claim. A source may be useful even when it has a point of view.",
            realWorld: "For a park proposal, a resident's letter explains a viewpoint, a budget shows costs, and a map shows nearby neighborhoods; each source answers different questions.",
            ged: "Identify claims and evidence, compare sources, and do not treat persuasive language or correlation as proof of cause."
        },
        {
            concept: "Tables organize exact values; graphs make patterns easier to see. Check titles, labels, units, legends, and scales before interpreting a display. The same data can look different when the scale changes.",
            realWorld: "A table can give the exact number of library visits in March; a line graph can make the year's overall rise or fall easier to see.",
            ged: "GED questions may ask you to compare data, calculate a percentage, identify a trend, or connect numbers to a passage. Cite values with their units."
        },
        {
            concept: "Government makes and carries out public decisions. Systems differ in who holds power, how leaders gain authority, whether laws limit them, and how people participate.",
            realWorld: "Residents may vote directly on one local proposal but elect a council to decide other city issues on their behalf.",
            ged: "Identify who holds power, how authority is justified, and what participation or limits the source describes."
        },
        {
            concept: "Natural rights, liberty, equality, and social-contract ideas explain what government should protect and why it has authority. These principles can lead to different arguments about freedom and public rules.",
            realWorld: "A public demonstration raises questions about individual liberty, public safety, and fair application of rules.",
            ged: "Define the principle in plain words and show how the source uses it to support an argument."
        },
        {
            concept: "Founding documents record proposals and disagreements. The Declaration explains independence; the Articles created an early national framework; the Constitution established a different federal system. Ratification documents show debate about government power and protections.",
            realWorld: "Comparing a proposed community charter with older rules helps reveal what problem a change was meant to address and what concerns remained.",
            ged: "Compare a document's date, audience, claim, and purpose; do not assume all founding documents had the same goal."
        },
        {
            concept: "The Constitution organizes federal power. Separation of powers assigns branch responsibilities, checks and balances let branches limit certain actions, and federalism divides authority between national and state governments.",
            realWorld: "Congress may pass a law, the president administer it, and a court resolve a legal dispute; state governments may have responsibilities too.",
            ged: "Match the actor and action in a passage to the correct branch, power, check, or level of government."
        },
        {
            concept: "Congress is the legislative branch, the president leads the executive branch, and federal courts form the judicial branch. Each has different responsibilities, and constitutional checks limit their power.",
            realWorld: "A proposed law may pass through Congress, be signed or vetoed by the president, and later be discussed in court after a legal dispute.",
            ged: "Identify who acts and what action occurs before naming the branch or check."
        },
        {
            concept: "The Bill of Rights and later amendments protect freedoms and equality. Civil liberties are freedoms from certain government actions; civil rights concern equal treatment and legal protection.",
            realWorld: "Rules for a public meeting must consider safety while treating speakers fairly.",
            ged: "Identify the specific right and facts in the source; distinguish a liberty claim from an equality claim."
        },
        {
            concept: "Citizens influence government through voting and other participation. Elections, parties, interest groups, media, taxes, and public policy are connected but distinct parts of civic life.",
            realWorld: "Residents can attend a public meeting about a road crossing; a city budget then shows how revenue is assigned to services.",
            ged: "Identify who is responsible, which level of government is involved, and how a proposal affects different groups."
        },
        {
            concept: "Understand an author by examining the audience, setting, purpose, argument, evidence, and perspective. These clues explain why a source was written and what it can tell us.",
            realWorld: "A mayor's campaign speech and an independent audit may discuss the same project but use different evidence and serve different purposes.",
            ged: "Use words or evidence from the passage to support claims about an author's purpose or point of view."
        },
        {
            concept: "Founding-era writers argued about rights, independence, representation, and constitutional design. They did not always agree about government power or the need for a Bill of Rights.",
            realWorld: "A debate over a new rule can involve competing priorities: protecting individual rights and giving government enough power to act.",
            ged: "Analyze the excerpt provided: identify the claim and supporting words instead of relying on memorized quotations."
        },
        {
            concept: "Douglass, Lincoln, and King addressed the gap between stated ideals and lived experience. Their speeches used claims, examples, moral arguments, and historical context to discuss slavery, equality, and national purpose.",
            realWorld: "A speaker arguing that a policy falls short of a community's stated values is using a comparison between an ideal and actual conditions.",
            ged: "Compare claims across time and use each source's language and historical setting."
        },
        {
            concept: "Colonial America included diverse Indigenous societies and colonies. Regional economies and government differed. British policies and colonial resistance contributed to independence, while slavery exposed limits in revolutionary ideals.",
            realWorld: "A tax record, colonial law, and personal account can show different reasons people resisted British rule and whose experiences were recorded.",
            ged: "Place a source in time, identify its author or audience, and distinguish stated reasons from later interpretations."
        },
        {
            concept: "The early republic debated national power and political direction. Expansion changed the country's size but also displaced Native peoples and intensified conflict over land and slavery.",
            realWorld: "A map of new territories shows where expansion occurred; Native accounts show experiences that boundary maps leave out.",
            ged: "Use maps for location and primary sources for experiences; consider who benefited and who was harmed."
        },
        {
            concept: "Slavery and sectional conflict contributed to the Civil War. Emancipation changed the war's meaning; Reconstruction amendments changed the Constitution, while resistance limited many people's rights.",
            realWorld: "A timeline of amendments alongside voting records can show both formal legal change and continuing barriers.",
            ged: "Keep events in sequence and distinguish a constitutional promise from evidence about how it was applied."
        },
        {
            concept: "Industrialization changed production, work, cities, and immigration. Labor unions and Progressive reforms responded to working conditions, concentrated business power, inequality, and demands for political rights.",
            realWorld: "A city population chart shows growth; workers' accounts describe experiences; a labor law shows one response to those conditions.",
            ged: "Use data to describe a trend and source details to explain viewpoints or reforms."
        },
        {
            concept: "World wars, economic boom and collapse, and the New Deal shaped U.S. society and government. World War II also involved the Holocaust and the unjust incarceration of Japanese Americans.",
            realWorld: "Employment and price data can show economic hardship, while a wartime government poster and a personal account may present different perspectives.",
            ged: "Connect a source to its time period, read economic data carefully, and compare claims with evidence."
        },
        {
            concept: "The Cold War shaped foreign policy and conflicts such as Korea and Vietnam. Civil rights movements challenged discrimination; later debates included voting rights, public trust, globalization, and technology.",
            realWorld: "A poll about foreign policy can be compared with a timeline and a speech; public opinion, events, and government choices are related but different evidence.",
            ged: "Use dates for context and distinguish reported facts from opinions or advocacy."
        },
        {
            concept: "Economics studies choices about limited resources. Scarcity, opportunity cost, production, and incentives help explain why people and societies choose one option over another.",
            realWorld: "A student who studies instead of watching a movie gives up the movie; a city choosing how to spend a limited budget faces a similar trade-off.",
            ged: "Identify what is scarce, what choice is made, and which alternative is given up."
        },
        {
            concept: "Supply describes what sellers offer and demand describes what buyers want at different prices. Their changes can affect price and quantity; competition, productivity, and labor influence production.",
            realWorld: "If a storm damages a crop, less may reach stores. If demand remains similar, the shortage can put upward pressure on prices.",
            ged: "Read both graph axes and identify what changed before describing the likely market effect."
        },
        {
            concept: "GDP measures the value of final goods and services produced in a country over time. Growth, unemployment, inflation, and the business cycle measure different parts of economic activity.",
            realWorld: "GDP may grow while one local factory closes: a national total and a local event can show different patterns.",
            ged: "Check an indicator's definition, units, and time period before drawing a conclusion."
        },
        {
            concept: "Fiscal policy uses taxes and spending; monetary policy uses tools that influence money and financial conditions. A deficit is a period's spending above revenue; debt is accumulated borrowing.",
            realWorld: "Government spending can fund a public project; a separate interest-rate change can affect how much a family pays to borrow.",
            ged: "Identify who takes action and distinguish fiscal from monetary policy, and a deficit from total debt."
        },
        {
            concept: "Personal finance involves income, saving, borrowing, and risk. International trade connects countries through imports, exports, specialization, comparative advantage, and trade policies.",
            realWorld: "A borrower compares interest and fees before taking a loan; a tariff may affect the price a shopper pays for an imported product.",
            ged: "Track units and time periods, distinguish interest from principal, and use the passage to explain who bears a cost."
        },
        {
            concept: "Maps serve different purposes. Latitude and longitude locate places; political maps show boundaries; physical maps show natural features; thematic maps show one subject; scale relates map distance to real distance.",
            realWorld: "A driver uses a road map to choose a route; a planner uses a population map to decide where a service may be needed.",
            ged: "Read the title, legend, direction, and scale, and identify what kind of map is shown."
        },
        {
            concept: "Climate, landforms, water, and resources influence settlement and adaptation. Population density measures people per area; migration is movement; human activity also changes environments.",
            realWorld: "Drought can affect farming and water supplies and influence decisions about moving. Data shows patterns; interviews can explain personal reasons.",
            ged: "Compare locations and time periods, distinguish migration types, and avoid assuming one factor explains every person's decision."
        },
        {
            concept: "Geography connects places through transportation, trade, migration, communication, and shared environmental systems. Distance, borders, routes, and resources shape relationships.",
            realWorld: "A port connects local jobs to international trade; maps show shipping routes while import data measures goods moving through them.",
            ged: "Interpret each map, passage, or table separately before combining only the relevant evidence."
        },
        {
            concept: "GED Social Studies questions assess how well you read and reason from passages, documents, cartoons, maps, tables, and graphs.",
            realWorld: "To assess a public-service proposal, compare the written argument with a cost table and a map of affected neighborhoods.",
            ged: "Identify the task, find relevant evidence, eliminate unsupported answers, and check dates, labels, and units."
        },
        {
            concept: "Test strategies help you show what you know: identify the task, use the correct evidence, and check important details. Time management supports careful reasoning.",
            realWorld: "Before submitting a report with a chart, a researcher checks the title, units, calculations, and conclusion; the same check catches test errors.",
            ged: "Read carefully, eliminate unsupported choices, review labels and units, and return to difficult items if time allows."
        },
        {
            concept: "Final review is a cycle: practice, inspect mistakes, identify the skill behind each mistake, review it, and try again. A score is feedback, not a complete explanation of what you know.",
            realWorld: "A learner who misses graph questions can review axes and scales, then practice with a new graph and see whether the same mistake happens.",
            ged: "Use mixed and timed practice, but review every incorrect response and explain why the correct answer is supported."
        }
    ];

    const chartLessons = {
        1: {
            concept: "A title names the subject; labels identify categories; units explain what a number measures; a legend matches symbols to groups; a scale shows how values are spaced.",
            table: {
                headers: ["Feature", "Question to ask", "Example"],
                rows: [
                    ["Title", "What is this display about?", "Library visits by month"],
                    ["Label", "What does this row, column, or axis name?", "Month"],
                    ["Unit", "What does each number measure?", "Visitors"],
                    ["Legend", "What does each color or symbol mean?", "Blue = Branch A"],
                    ["Scale", "How much does each interval represent?", "0, 10, 20, 30 visitors"]
                ]
            },
            realWorld: "An attendance chart may count students in people, while a budget table may use dollars. Missing the unit or scale can change what a number means.",
            ged: "Check the title, headings, axis labels, units, legend, and scale. Some questions test whether a graph starts above zero or uses unequal intervals."
        },
        2: {
            concept: "A table arranges information in rows and columns. Read its title, find the correct row and column, and compare values only after checking that the categories, units, and time periods match.",
            table: {
                headers: ["Neighborhood", "April visits", "May visits"],
                rows: [["North", "120", "150"], ["Central", "200", "190"], ["South", "80", "110"]]
            },
            realWorld: "North increased by 30 visits (150 − 120), Central decreased by 10, and South increased by 30. South still had fewer total visits than the other neighborhoods.",
            ged: "Find the exact cells, subtract in the order asked, and keep the unit in your answer. A question may ask for the difference, highest value, or trend."
        },
        3: {
            concept: "A bar graph compares values in separate categories. Each bar starts at a baseline and its height represents a value. Bar graphs are useful for comparing groups; a count is not the same as a rate.",
            table: { headers: ["Community", "Buses per day"], rows: [["A", "12"], ["B", "20"], ["C", "8"], ["D", "16"]] },
            dataGraph: {
                type: "bar", title: "Buses serving four communities", description: "Each bar represents the number of buses per day.",
                ariaLabel: "Bar graph: Community A 12 buses, B 20, C 8, D 16 per day.",
                xLabel: "Community", yLabel: "Buses per day",
                points: [{ label: "A", value: 12 }, { label: "B", value: 20 }, { label: "C", value: 8 }, { label: "D", value: 16 }]
            },
            realWorld: "Community B has 12 more buses per day than Community C (20 − 8 = 12). Comparing raw counts does not tell us how many buses each resident can use.",
            ged: "Read the scale, compare the correct bars, and distinguish totals from percentages or per-person rates."
        },
        4: {
            concept: "A line graph shows how a value changes across an ordered sequence, often time. Connected points make increases, decreases, and stable periods easier to see.",
            table: { headers: ["Year", "Population (thousands)"], rows: [["2010", "10"], ["2015", "12"], ["2020", "15"], ["2025", "14"]] },
            dataGraph: {
                type: "line", title: "Town population over time", description: "The population rises through 2020, then falls slightly by 2025.",
                ariaLabel: "Line graph of population in thousands: 2010 10, 2015 12, 2020 15, and 2025 14.",
                xLabel: "Year", yLabel: "Population (thousands)",
                points: [{ label: "2010", value: 10 }, { label: "2015", value: 12 }, { label: "2020", value: 15 }, { label: "2025", value: 14 }]
            },
            realWorld: "A town might use this graph when planning services. The graph shows when growth and decline occurred, but not why the population changed.",
            ged: "Describe the trend with values and a time period. Do not describe the entire line using only its first two points."
        },
        5: {
            concept: "A circle graph shows how a whole is divided into parts. All slices represent 100%. A slice's percentage is a share of the displayed total, not necessarily a larger amount than another group's total.",
            table: { headers: ["Budget use", "Share"], rows: [["Schools", "40%"], ["Roads", "25%"], ["Public safety", "20%"], ["Parks", "15%"], ["Total", "100%"]] },
            dataGraph: {
                type: "pie", title: "Sample town budget", description: "All slices together represent the full budget.",
                ariaLabel: "Circle graph: schools 40 percent, roads 25 percent, public safety 20 percent, parks 15 percent.",
                points: [{ label: "Schools", value: 40 }, { label: "Roads", value: 25 }, { label: "Public safety", value: 20 }, { label: "Parks", value: 15 }]
            },
            realWorld: "If the total budget is $1,000,000, the roads share is $250,000: 25% × $1,000,000 = $250,000. The total is needed to convert a share into dollars.",
            ged: "Check that the chart represents one whole. To find an amount from a percentage, convert the percent to a decimal and multiply by the total."
        },
        6: {
            concept: "A scatterplot places one point for each pair of numerical values. A positive association means the values tend to rise together; a negative association means one tends to fall as the other rises; no clear association means no consistent pattern appears. Association alone does not prove cause.",
            table: { headers: ["Study hours", "Correct answers"], rows: [["1", "5"], ["2", "7"], ["3", "8"], ["4", "11"], ["5", "12"]] },
            dataGraph: {
                type: "scatter", title: "Study time and practice results", description: "Each dot represents one student's study time and correct answers. The pattern does not prove that study time alone caused each result.",
                ariaLabel: "Scatterplot: study hours and correct answers: 1 and 5, 2 and 7, 3 and 8, 4 and 11, 5 and 12.",
                xLabel: "Study hours", yLabel: "Correct answers",
                points: [{ x: 1, value: 5 }, { x: 2, value: 7 }, { x: 3, value: 8 }, { x: 4, value: 11 }, { x: 5, value: 12 }]
            },
            realWorld: "A city might compare commute distance with travel time. A pattern can suggest a relationship, but traffic and transit access may also matter.",
            ged: "Describe the association shown by the dots. Do not claim one variable caused another unless the source provides evidence for cause."
        },
        7: {
            concept: "A ratio compares quantities by division. A percentage is a ratio out of 100: divide the part by the whole and multiply by 100. Identify the whole before calculating.",
            table: { headers: ["Group", "Voters", "Eligible voters", "Voter rate"], rows: [["A", "60", "100", "60%"], ["B", "45", "75", "60%"]] },
            realWorld: "Group A has more voters, but both groups have the same rate: 60/100 = 60% and 45/75 = 60%. Counts and percentages answer different questions.",
            ged: "Identify the part and whole, divide in the correct order, and multiply by 100 for a percent. Include units when relevant."
        },
        8: {
            concept: "Percentage change compares the change with the starting value: (new − original) ÷ original × 100. A negative result indicates a decrease.",
            table: { headers: ["Measure", "Original", "New", "Change", "Percent change"], rows: [["Monthly fare", "$20", "$25", "+$5", "+25%"], ["Monthly visits", "200", "180", "−20", "−10%"]] },
            realWorld: "A fare rises $5 from an original $20: 5 ÷ 20 × 100 = 25%. Visits fall 20 from an original 200: 20 ÷ 200 × 100 = 10% decrease.",
            ged: "Use the original value as the denominator. Check whether the question asks for the amount of change or the percent change."
        },
        9: {
            concept: "Mean is the sum divided by the number of values; median is the middle after sorting; mode is the most frequent value; range is maximum minus minimum. These describe different features of data.",
            table: { headers: ["Data set", "Sorted values", "Mean", "Median", "Mode", "Range"], rows: [["Visitors", "2, 3, 3, 4, 8", "20 ÷ 5 = 4", "3", "3", "8 − 2 = 6"]] },
            realWorld: "For 2, 3, 3, 4, 8, the mean is 4 and median is 3. Adding one unusually busy day can move the mean more than the median.",
            ged: "Sort values before finding the median, count every value for the mean, and distinguish an average from the mode or range."
        },
        10: {
            concept: "A trend is a pattern, not a promise. Interpolation estimates between known values; extrapolation predicts beyond them and is less certain. Predictions should not claim more than the data supports.",
            table: { headers: ["Year", "Market stalls"], rows: [["2021", "10"], ["2022", "12"], ["2023", "14"], ["2024", "16"]] },
            dataGraph: {
                type: "line", title: "Market stalls over time", description: "The count increases by two each year in this sample. An estimate of 18 for 2025 is not guaranteed.",
                ariaLabel: "Line graph: market stalls were 10 in 2021, 12 in 2022, 14 in 2023, and 16 in 2024.",
                xLabel: "Year", yLabel: "Stalls",
                points: [{ label: "2021", value: 10 }, { label: "2022", value: 12 }, { label: "2023", value: 14 }, { label: "2024", value: 16 }]
            },
            realWorld: "If the pattern continued, a simple estimate for 2025 is 18 stalls. New costs, construction, or demand could change the result.",
            ged: "Distinguish estimates between known points from predictions beyond the data. Treat predictions as uncertain."
        },
        11: {
            concept: "A passage gives meaning in words; a table or graph provides measurable evidence. Check that the passage and data refer to the same groups, dates, and units, then decide whether the data supports the written claim.",
            table: { headers: ["Year", "Jobs described in passage"], rows: [["2022", "100"], ["2023", "112"], ["2024", "125"]] },
            dataGraph: {
                type: "bar", title: "Jobs recorded in the passage", description: "The graph supports an increase during the years shown, but does not explain why it happened.",
                ariaLabel: "Bar graph of jobs recorded: 2022 100, 2023 112, and 2024 125.",
                xLabel: "Year", yLabel: "Jobs",
                points: [{ label: "2022", value: 100 }, { label: "2023", value: 112 }, { label: "2024", value: 125 }]
            },
            realWorld: "If the passage says jobs increased, values rising from 100 to 125 support that claim for the dates shown. They do not prove why jobs increased or what happened outside those dates.",
            ged: "Verify that dates, groups, and units match before combining written and visual evidence."
        }
    };

    const chartSteps = [
        null,
        ["Read the title to identify the subject.", "Find labels for the rows, columns, and axes.", "Check the units and whether a legend explains colors or symbols.", "Read the scale intervals and notice whether the baseline begins at zero."],
        ["Read the table title and identify the units.", "Find the row for the category you need.", "Move across to the correct column and read the value.", "Compare values from the same time period and keep the unit in your answer."],
        ["Read the category names along the horizontal axis.", "Read the vertical scale and its intervals.", "Compare bar heights using the same baseline.", "Subtract the smaller value from the larger if the question asks for a difference."],
        ["Read the horizontal axis to identify the time order.", "Read the vertical axis and units.", "Follow the points from left to right.", "Describe each rise, fall, or flat period and support it with values."],
        ["Identify the whole represented by the circle.", "Read the legend or slice labels.", "Compare the percentage shares.", "If asked for an amount, multiply the share as a decimal by the total."],
        ["Read the horizontal and vertical axis labels.", "Treat each dot as one pair of values.", "Look for an overall positive, negative, or unclear pattern.", "Describe association; do not claim causation without supporting evidence."],
        ["Identify the part and the whole.", "Write the ratio in the order asked.", "Divide the part by the whole.", "Multiply by 100 and add the percent sign when the question asks for a percentage."],
        ["Identify the original and new values.", "Subtract original from new to find the change.", "Divide the change by the original value.", "Multiply by 100 and label the result as an increase or decrease."],
        ["List all values and sort them from least to greatest.", "Add the values and divide by their count to find the mean.", "Find the middle value for the median.", "Identify the most frequent value for the mode and subtract minimum from maximum for the range."],
        ["Describe the pattern across the full time period.", "Compare neighboring values and calculate changes if useful.", "Estimate between known points only when asked to interpolate.", "Treat a prediction beyond the data as uncertain."],
        ["Read the passage claim and identify its dates and groups.", "Find the matching dates, groups, and units in the table or graph.", "Check whether the data supports or contradicts the claim.", "State only what the sources together demonstrate."]
    ];
    const chartChecks = [
        null,
        { question: "A graph uses blue for City A and green for City B. Where do you look to learn what the colors mean?", answer: "Check the legend. It identifies which group each color represents." },
        { question: "How many more visits did Central have in April than South?", answer: "Central had 200 and South had 80, so 200 − 80 = 120 more visits." },
        { question: "How many more buses per day serve B than C?", answer: "B has 20 and C has 8, so 20 − 8 = 12 more buses per day." },
        { question: "Between which two listed years did the town's population decrease?", answer: "It decreased from 15 thousand in 2020 to 14 thousand in 2025." },
        { question: "If the total budget is $1,000,000, how much is the 15% parks share?", answer: "0.15 × $1,000,000 = $150,000." },
        { question: "Does the sample scatterplot prove that studying caused every student's score?", answer: "No. It shows a positive association in this sample, but association by itself does not prove cause." },
        { question: "What percent of eligible voters voted in Group B?", answer: "45 ÷ 75 = 0.60, or 60%." },
        { question: "A fare rises from $20 to $25. What is its percent increase?", answer: "(25 − 20) ÷ 20 × 100 = 25%." },
        { question: "What is the median of 2, 3, 3, 4, 8?", answer: "The values are already sorted; the middle value is 3." },
        { question: "If the increase of two stalls per year continued, what is a simple estimate for 2025?", answer: "16 + 2 = 18 stalls. This is an estimate, not a guarantee." },
        { question: "The passage says jobs increased. Do the data support this for 2022–2024?", answer: "Yes. The values rise from 100 to 112 to 125 jobs during those years." }
    ];
    Object.entries(chartLessons).forEach(([section, lesson]) => {
        lesson.steps = chartSteps[Number(section)];
        lesson.check = chartChecks[Number(section)];
    });

    window.socialStudiesTeaching = chapters;
    window.socialStudiesChartLessons = chartLessons;
})();