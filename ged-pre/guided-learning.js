(function () {
    const subjects = [
        {
            id: 'math',
            name: 'Mathematics',
            lessons: [
                {
                    title: 'Find a percent of a number',
                    objective: 'Turn a percent into a decimal, then multiply.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'A percent is a part out of 100',
                            paragraphs: [
                                'The word percent means “per hundred.” To find a percent of an amount, write the percent as a decimal and multiply by the amount.',
                                'For a discount, find the amount saved first. Then subtract that savings from the original price.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'A $45 backpack is 20% off',
                            items: [
                                'Write 20% as a decimal: 20 ÷ 100 = 0.20.',
                                'Find the savings: 0.20 × $45 = $9.',
                                'Subtract the savings: $45 − $9 = $36. The sale price is $36.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A $80 jacket is discounted by 15%. What is the sale price?',
                            options: ['$12', '$65', '$68', '$92'],
                            correct: 2,
                            explanation: '15% of $80 is 0.15 × 80 = $12. Subtract the $12 discount from $80 to get $68.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A student has a $240 monthly budget and spends 35% on rent. How much is spent on rent?',
                            options: ['$72', '$84', '$105', '$205'],
                            correct: 1,
                            explanation: 'Convert 35% to 0.35 and multiply: 0.35 × $240 = $84.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Remember the two moves',
                            summary: 'Convert the percent to a decimal and multiply. For a discount, subtract the savings from the original amount.'
                        }
                    ]
                },
                {
                    title: 'Solve a two-step equation',
                    objective: 'Undo operations in reverse order while keeping both sides balanced.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Keep the equation balanced',
                            paragraphs: [
                                'An equation says that two expressions have the same value. Whatever operation you use on one side, use on the other side too.',
                                'To isolate the variable, undo addition or subtraction first, then undo multiplication or division.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Solve 3x + 5 = 26',
                            items: [
                                'Subtract 5 from both sides: 3x = 21.',
                                'Divide both sides by 3: x = 7.',
                                'Check: 3(7) + 5 = 26, so the solution works.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'Solve 4x − 6 = 18.',
                            options: ['3', '6', '12', '24'],
                            correct: 1,
                            explanation: 'Add 6 to both sides to get 4x = 24. Divide by 4, so x = 6.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'Solve 2x + 9 = 31.',
                            options: ['11', '13', '20', '22'],
                            correct: 0,
                            explanation: 'Subtract 9 from both sides: 2x = 22. Divide by 2 to get x = 11.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Undo, then check',
                            summary: 'Reverse the operations one at a time, apply each operation to both sides, and substitute your answer back into the original equation.'
                        }
                    ]
                },
                {
                    title: 'Read a data set',
                    objective: 'Use the mean and median to describe a group of numbers.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Mean and median tell different stories',
                            paragraphs: [
                                'The mean is the total of the values divided by how many values there are. It uses every value, so an unusually high or low number can pull it.',
                                'The median is the middle value after the numbers are sorted. With an even number of values, average the two middle values.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Find the mean of 4, 6, 8, and 10',
                            items: [
                                'Add the values: 4 + 6 + 8 + 10 = 28.',
                                'There are 4 values, so divide: 28 ÷ 4 = 7.',
                                'The mean is 7. The sorted middle pair is 6 and 8, so the median is also 7.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'What is the median of 3, 5, 9, 12, and 20?',
                            options: ['5', '9', '9.8', '12'],
                            correct: 1,
                            explanation: 'The numbers are already sorted. The middle, third value is 9.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A group has scores of 6, 8, and 10. What is the mean score?',
                            options: ['8', '9', '10', '24'],
                            correct: 0,
                            explanation: 'Add the scores (6 + 8 + 10 = 24) and divide by 3. The mean is 8.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Choose the measure that fits',
                            summary: 'Use the mean for an overall average. Use the median to identify the center of sorted data, especially when extreme values may distort the mean.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'rla',
            name: 'Reasoning Through Language Arts',
            lessons: [
                {
                    title: 'Find a passage’s central idea',
                    objective: 'State what a passage is mostly about and connect details to that idea.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'The central idea is the passage’s main point',
                            paragraphs: [
                                'A central idea is the most important point an author develops. Supporting details explain, illustrate, or provide evidence for it.',
                                'Ask: “What point do several details work together to explain?” Avoid choosing a detail that is true but too narrow.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Notice how details connect',
                            items: [
                                'Short passage: A neighborhood library added evening hours. After six months, more adults attended computer classes, and more families borrowed books after work.',
                                'Both details describe how the schedule change helped residents use the library.',
                                'A supported central idea is that evening hours made library services easier for more people to use.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A town opens a weekend bus route. Workers without cars reach more job sites, and students can get to the public library. Which central idea best fits these details?',
                            options: [
                                'The town has several libraries.',
                                'Weekend bus service improves access to community opportunities.',
                                'All workers prefer taking the bus.',
                                'Students should study every weekend.'
                            ],
                            correct: 1,
                            explanation: 'Both details show people reaching useful places. The choice captures the shared point without adding an unsupported claim.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A passage explains that a community garden provides fresh produce, gives neighbors a place to work together, and turns an empty lot into a useful space. What is its central idea?',
                            options: [
                                'Gardens need water.',
                                'An empty lot can be measured.',
                                'A community garden can benefit a neighborhood in several ways.',
                                'Every neighbor enjoys growing vegetables.'
                            ],
                            correct: 2,
                            explanation: 'The passage lists several neighborhood benefits. It does not claim that every neighbor enjoys gardening.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Connect the details',
                            summary: 'Look for the point that explains multiple details. A strong central idea is broad enough to cover the passage but does not go beyond what the author says.'
                        }
                    ]
                },
                {
                    title: 'Make an evidence-based inference',
                    objective: 'Combine clues from a text to reach a reasonable conclusion.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'An inference is supported, not guessed',
                            paragraphs: [
                                'An inference is a conclusion that is not stated word for word. Build it by combining clues in the text with what those clues reasonably imply.',
                                'A good inference can be traced back to evidence. If a choice requires inventing facts, it is probably a guess.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Use the clues in the situation',
                            items: [
                                'Text: When Mina arrived at the station, the platform was wet and commuters were folding dripping umbrellas.',
                                'Clues: The platform is wet, and people have wet umbrellas.',
                                'Reasonable inference: It recently rained. The text does not tell us how long the rain lasted.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A store posts a sign saying “Closed for inventory” while workers count boxes and update a list. What can you reasonably infer?',
                            options: [
                                'The store is permanently closing.',
                                'The workers are checking what items the store has.',
                                'The store has sold every item.',
                                'The workers are preparing a holiday party.'
                            ],
                            correct: 1,
                            explanation: 'Counting boxes and updating a list are direct clues that workers are checking the store’s stock.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A student reviews flash cards on the bus and again before class. Which inference is best supported?',
                            options: [
                                'The student is preparing for a class activity or test.',
                                'The student dislikes riding the bus.',
                                'The student has already finished the course.',
                                'The class meets only on buses.'
                            ],
                            correct: 0,
                            explanation: 'Reviewing the cards more than once supports the idea that the student is preparing. The other choices add details not provided.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Point to the clue',
                            summary: 'Before choosing an inference, identify the clue that supports it. Keep the conclusion narrow enough that the text can actually justify it.'
                        }
                    ]
                },
                {
                    title: 'Evaluate a claim and its evidence',
                    objective: 'Separate an author’s claim from the reasons or evidence offered for it.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'A claim needs relevant support',
                            paragraphs: [
                                'A claim is a position the writer wants readers to accept. Evidence gives readers a reason to trust that position; it can include facts, examples, data, or expert findings.',
                                'Check whether the evidence is relevant to the claim and whether it is specific enough. A confident tone is not evidence by itself.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Match the evidence to the claim',
                            items: [
                                'Claim: The school should add a second lunch line to reduce waiting.',
                                'Relevant evidence: A one-week count shows that students wait an average of 14 minutes, and the line is longest when both grade levels arrive together.',
                                'This supports a problem with wait time, although a trial period could test whether another line improves it.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A writer claims that a neighborhood needs more streetlights for safer walking. Which evidence is most relevant?',
                            options: [
                                'The neighborhood has many historic houses.',
                                'A survey finds that most residents avoid a poorly lit path after dark.',
                                'The city has several parks.',
                                'Some residents prefer walking in the morning.'
                            ],
                            correct: 1,
                            explanation: 'The survey connects poor lighting to residents avoiding the path at night, which directly relates to the claim.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A report claims a new study room helps students focus. Which detail would best support that claim?',
                            options: [
                                'The room has blue walls.',
                                'The room is near the school entrance.',
                                'Students using the room complete more assigned work during study periods than before it opened.',
                                'The room has a large sign.'
                            ],
                            correct: 2,
                            explanation: 'A comparison of completed work relates directly to whether students focus and finish tasks. The other details describe the room but not the result.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Ask whether the support fits',
                            summary: 'Identify the claim first, then look for evidence that directly supports it. Relevant, specific evidence is stronger than an unrelated fact or an unsupported opinion.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'science',
            name: 'Science',
            lessons: [
                {
                    title: 'Identify variables in an experiment',
                    objective: 'Recognize what changes, what is measured, and what should stay the same.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'A fair test changes one factor at a time',
                            paragraphs: [
                                'The independent variable is the factor a researcher changes. The dependent variable is the result measured.',
                                'Controlled variables are conditions kept the same so the test is fair. A comparison group can help show whether the changed factor may have made a difference.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Test how light affects seedlings',
                            items: [
                                'Question: Does the number of hours of light affect seedling growth?',
                                'Independent variable: Hours of light each day.',
                                'Dependent variable: Seedling height after two weeks. Keep plant type, soil, water, and container the same.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A student tests how water amount affects plant growth and measures each plant’s height after three weeks. What is the dependent variable?',
                            options: ['The amount of water', 'The plant height', 'The kind of pot', 'The number of weeks'],
                            correct: 1,
                            explanation: 'Plant height is the outcome being measured, so it is the dependent variable.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A fair test compares two brands of paper towels. Which condition should be kept the same?',
                            options: [
                                'The brand being tested',
                                'The amount of water poured on each towel',
                                'The absorbency result',
                                'The towel’s measured capacity'
                            ],
                            correct: 1,
                            explanation: 'Use the same amount of water for each brand. The brand is the factor changed; absorbency is the result measured.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Change one, measure one',
                            summary: 'Name the factor changed, the result measured, and the conditions held constant. Those choices help you judge whether a comparison is fair.'
                        }
                    ]
                },
                {
                    title: 'Read a data table carefully',
                    objective: 'Compare values and describe a pattern without claiming more than the data show.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Read labels before comparing numbers',
                            paragraphs: [
                                'Check the title, row labels, column labels, and units first. Then compare the values that answer the question.',
                                'A pattern can show that two things change together. By itself, that pattern does not prove that one caused the other.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Compare plant growth over four weeks',
                            items: [
                                'A table lists average heights: Week 1 = 4 cm, Week 2 = 7 cm, Week 3 = 9 cm, Week 4 = 10 cm.',
                                'The height increases each week.',
                                'The increase gets smaller: +3 cm, then +2 cm, then +1 cm. The plant is still growing, but its weekly growth is slowing in this data set.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A trail counter records 18 walkers on Monday, 25 on Tuesday, and 31 on Wednesday. How many more walkers were recorded Wednesday than Monday?',
                            options: ['7', '13', '31', '74'],
                            correct: 1,
                            explanation: 'Subtract Monday’s count from Wednesday’s: 31 − 18 = 13 more walkers.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A table shows that neighborhoods with more trees also have more birds. What can the table alone establish?',
                            options: [
                                'Trees are the only reason birds live there.',
                                'Birds always cause trees to grow.',
                                'The two measurements increase together in the table.',
                                'Every neighborhood has the same number of birds.'
                            ],
                            correct: 2,
                            explanation: 'The table shows an association. More information is needed to establish that trees alone caused the difference.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Read what is there',
                            summary: 'Use the correct labels and units, compare the requested values, and describe a trend carefully. Do not turn an observed association into proof of cause.'
                        }
                    ]
                },
                {
                    title: 'Match a conclusion to evidence',
                    objective: 'Choose a conclusion that stays within what an investigation actually measured.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'A conclusion should not outrun the data',
                            paragraphs: [
                                'Evidence includes observations and measurements. A conclusion interprets that evidence to answer a question.',
                                'A strong conclusion fits the sample, conditions, and outcome that were actually studied. Broad claims about different people or situations need additional evidence.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Keep the conclusion specific',
                            items: [
                                'A class tests two paper airplane designs. Each design is flown five times in the same room.',
                                'Design A travels farther on four of the five trials.',
                                'Supported conclusion: In this class test, Design A usually traveled farther. The result does not prove it will always travel farther in every setting.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'Eight seedlings are grown under two light levels for ten days. The seedlings with more light grow taller on average. Which conclusion is best supported?',
                            options: [
                                'More light will make every plant grow taller.',
                                'In this test, the seedlings given more light grew taller on average.',
                                'Light is the only factor that affects plant growth.',
                                'All plants need exactly ten days to grow.'
                            ],
                            correct: 1,
                            explanation: 'This conclusion reports the result for the seedlings and conditions that were tested without generalizing to every plant.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A survey of 20 people at one gym finds that most prefer morning classes. What is the main limitation?',
                            options: [
                                'The survey asked about a preference.',
                                'The results may not represent people outside that small gym sample.',
                                'Morning comes before afternoon.',
                                'The gym has classes.'
                            ],
                            correct: 1,
                            explanation: 'A small sample from one gym may not represent a larger or different population. The sample limits how broadly the result can be applied.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Stay close to the evidence',
                            summary: 'A reliable conclusion describes what the study actually observed and recognizes limits in its sample, methods, or conditions.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'social',
            name: 'Social Studies',
            lessons: [
                {
                    title: 'Understand the three branches',
                    objective: 'Connect each branch of the U.S. federal government to its basic role.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Power is divided among three branches',
                            paragraphs: [
                                'The legislative branch makes federal laws, the executive branch carries out laws, and the judicial branch interprets laws.',
                                'Checks and balances give each branch ways to limit certain actions by the others. This structure helps prevent power from resting entirely in one place.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Follow a law through government',
                            items: [
                                'Congress passes a bill and sends it to the president.',
                                'The president may sign it into law or veto it. Congress can override a veto with the required vote.',
                                'Courts can later decide whether a law conflicts with the Constitution.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'Which branch is responsible for interpreting federal laws in court cases?',
                            options: ['Legislative', 'Executive', 'Judicial', 'Local'],
                            correct: 2,
                            explanation: 'The judicial branch interprets laws when deciding cases.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'The president vetoes a bill passed by Congress. Which idea does this situation illustrate?',
                            options: ['Checks and balances', 'Judicial review by a jury', 'A state referendum', 'A census'],
                            correct: 0,
                            explanation: 'A veto is one check in the lawmaking process; Congress also has a constitutional process for overriding it.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Remember the roles',
                            summary: 'Legislative makes laws, executive carries them out, and judicial interprets them. Checks and balances connect the branches.'
                        }
                    ]
                },
                {
                    title: 'Tell primary and secondary sources apart',
                    objective: 'Use who created a source and when to understand its relationship to an event.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Sources offer different kinds of evidence',
                            paragraphs: [
                                'A primary source comes directly from a time, person, or event being studied, such as a letter, law, photograph, or interview.',
                                'A secondary source later explains or analyzes information from primary sources, such as a history textbook or a documentary. The source type depends on the research question.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Match the source to the question',
                            items: [
                                'Question: What did a city council decide at a meeting in 1965?',
                                'A set of official meeting minutes from 1965 is a primary source for the council’s decision.',
                                'A present-day article describing the meeting is a secondary source that may interpret those minutes.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A researcher studies a 1940s election using a campaign flyer printed during that election. How is the flyer classified?',
                            options: ['Primary source', 'Secondary source', 'A modern analysis', 'A fictional account'],
                            correct: 0,
                            explanation: 'The flyer was created during the time being studied, so it is a primary source.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'Which source is usually secondary when studying a past court decision?',
                            options: [
                                'The decision written by the court at the time',
                                'A judge’s notes from the case',
                                'A recent textbook chapter analyzing the decision',
                                'A newspaper printed during the trial'
                            ],
                            correct: 2,
                            explanation: 'A recent textbook chapter looks back and analyzes the decision, making it a secondary source for this question.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Check the source’s relationship to the event',
                            summary: 'Ask when the source was created, who created it, and whether it records the event directly or analyzes it afterward.'
                        }
                    ]
                },
                {
                    title: 'Read a graph and compare change',
                    objective: 'Use a graph’s labels and values to calculate a simple difference or percentage change.',
                    steps: [
                        {
                            type: 'concept',
                            label: 'Learn the idea',
                            heading: 'Start with the labels, then calculate',
                            paragraphs: [
                                'Read the graph title, axes, units, and time period before comparing values. A difference is found by subtracting the earlier value from the later value.',
                                'For percent change, divide the difference by the starting value, then multiply by 100. The starting value is the base of comparison.'
                            ]
                        },
                        {
                            type: 'example',
                            label: 'See it worked',
                            heading: 'Compare attendance from 2024 to 2025',
                            items: [
                                'A chart shows 400 visitors in 2024 and 500 in 2025.',
                                'Find the increase: 500 − 400 = 100 visitors.',
                                'Compare the increase with the starting value: 100 ÷ 400 = 0.25, or a 25% increase.'
                            ]
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 1',
                            prompt: 'A chart shows voter registration rising from 1,200 people to 1,500 people. How many more people registered?',
                            options: ['200', '300', '1,200', '2,700'],
                            correct: 1,
                            explanation: 'Subtract the starting value from the later value: 1,500 − 1,200 = 300.'
                        },
                        {
                            type: 'question',
                            label: 'Try it · Question 2',
                            prompt: 'A program’s enrollment rises from 80 people to 100 people. What is the percent increase?',
                            options: ['20%', '25%', '80%', '125%'],
                            correct: 1,
                            explanation: 'The increase is 100 − 80 = 20. Divide by the starting value: 20 ÷ 80 = 0.25, or 25%.'
                        },
                        {
                            type: 'review',
                            label: 'Wrap it up',
                            heading: 'Use the original value as the base',
                            summary: 'For a difference, subtract. For percent change, divide that difference by the starting amount and multiply by 100.'
                        }
                    ]
                }
            ]
        }
    ];

    let activeSubjectId = subjects[0].id;
    let activeLessonIndex = 0;
    let activeStepIndex = 0;
    let selectedAnswer = null;
    const completedLessons = new Set();
    const subjectTabs = document.getElementById('guidedSubjectTabs');
    const topicList = document.getElementById('guidedTopicList');
    const lessonRoot = document.getElementById('guidedLesson');

    function activeSubject() {
        return subjects.find(subject => subject.id === activeSubjectId);
    }

    function activeLesson() {
        return activeSubject().lessons[activeLessonIndex];
    }

    function makeElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    }

    function renderSubjectTabs() {
        subjectTabs.replaceChildren();
        subjects.forEach(subject => {
            const button = makeElement('button', 'guided-subject-tab', subject.name);
            button.type = 'button';
            button.setAttribute('aria-pressed', String(subject.id === activeSubjectId));
            button.addEventListener('click', () => {
                activeSubjectId = subject.id;
                activeLessonIndex = 0;
                activeStepIndex = 0;
                selectedAnswer = null;
                render();
            });
            subjectTabs.append(button);
        });
    }

    function renderTopicList() {
        const subject = activeSubject();
        topicList.replaceChildren();
        subject.lessons.forEach((lesson, index) => {
            const key = `${subject.id}-${index}`;
            const button = makeElement('button', 'guided-topic-button');
            button.type = 'button';
            button.setAttribute('aria-current', String(index === activeLessonIndex));

            const number = makeElement('span', 'guided-topic-number', String(index + 1));
            number.setAttribute('aria-hidden', 'true');
            const copy = makeElement('span', 'guided-topic-copy');
            copy.append(makeElement('strong', '', lesson.title));
            copy.append(makeElement('small', '', lesson.objective));
            if (completedLessons.has(key)) {
                copy.append(makeElement('span', 'guided-topic-done', 'Lesson complete'));
            }
            button.append(number, copy);
            button.addEventListener('click', () => {
                activeLessonIndex = index;
                activeStepIndex = 0;
                selectedAnswer = null;
                render();
            });
            topicList.append(button);
        });
    }

    function renderStepContent(step) {
        const content = makeElement('section', 'guided-step-content');
        content.setAttribute('aria-label', step.heading || step.label);
        content.append(makeElement('p', 'guided-step-label', step.label));
        if (step.heading) {
            content.append(makeElement('h3', 'guided-content-heading', step.heading));
        }

        if (step.type === 'concept') {
            step.paragraphs.forEach(paragraph => content.append(makeElement('p', 'guided-content-copy', paragraph)));
        } else if (step.type === 'example') {
            const list = makeElement('ol', 'guided-example-steps');
            step.items.forEach(item => list.append(makeElement('li', '', item)));
            content.append(list);
        } else if (step.type === 'question') {
            content.append(makeElement('p', 'guided-question-prompt', step.prompt));
            const choices = makeElement('div', 'guided-choices');
            choices.setAttribute('role', 'group');
            choices.setAttribute('aria-label', 'Answer choices');
            step.options.forEach((option, index) => {
                const button = makeElement('button', 'guided-choice', option);
                button.type = 'button';
                button.disabled = selectedAnswer !== null;
                if (selectedAnswer !== null && index === step.correct) button.classList.add('is-correct');
                if (selectedAnswer === index && index !== step.correct) button.classList.add('is-incorrect');
                button.setAttribute('aria-pressed', String(selectedAnswer === index));
                button.addEventListener('click', () => {
                    selectedAnswer = index;
                    render();
                });
                choices.append(button);
            });
            content.append(choices);
            if (selectedAnswer !== null) {
                const isCorrect = selectedAnswer === step.correct;
                const feedback = makeElement('div', `guided-answer-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`);
                feedback.setAttribute('role', 'status');
                feedback.append(makeElement('strong', '', isCorrect ? 'That’s right.' : `Not quite. The best answer is: ${step.options[step.correct]}`));
                feedback.append(makeElement('span', '', step.explanation));
                content.append(feedback);
            }
        } else if (step.type === 'review') {
            content.append(makeElement('p', 'guided-content-copy', step.summary));
            const wrapUp = makeElement('div', 'guided-wrap-up');
            wrapUp.append(makeElement('strong', '', 'Lesson complete'));
            wrapUp.append(makeElement('span', '', 'Choose another lesson from the study path whenever you are ready.'));
            content.append(wrapUp);
        }
        return content;
    }

    function renderLesson() {
        const subject = activeSubject();
        const lesson = activeLesson();
        const step = lesson.steps[activeStepIndex];
        const lessonKey = `${subject.id}-${activeLessonIndex}`;
        if (step.type === 'review') completedLessons.add(lessonKey);

        lessonRoot.replaceChildren();
        const topline = makeElement('div', 'guided-lesson-topline');
        topline.append(makeElement('span', 'guided-subject-label', subject.name));
        topline.append(makeElement('span', 'guided-step-count', `Step ${activeStepIndex + 1} of ${lesson.steps.length}`));
        lessonRoot.append(topline);

        const progressTrack = makeElement('div', 'guided-progress-track');
        progressTrack.setAttribute('role', 'progressbar');
        progressTrack.setAttribute('aria-label', 'Lesson step progress');
        progressTrack.setAttribute('aria-valuemin', '1');
        progressTrack.setAttribute('aria-valuemax', String(lesson.steps.length));
        progressTrack.setAttribute('aria-valuenow', String(activeStepIndex + 1));
        const progressValue = makeElement('div', 'guided-progress-value');
        progressValue.style.width = `${((activeStepIndex + 1) / lesson.steps.length) * 100}%`;
        progressTrack.append(progressValue);
        lessonRoot.append(progressTrack);

        lessonRoot.append(makeElement('h2', 'guided-lesson-title', lesson.title));
        lessonRoot.append(makeElement('p', 'guided-objective', lesson.objective));
        const stepContent = renderStepContent(step);
        stepContent.querySelector('.guided-content-heading')?.setAttribute('id', 'guidedStepHeading');
        lessonRoot.append(stepContent);

        const navigation = makeElement('div', 'guided-navigation');
        const previous = makeElement('button', 'guided-nav-button secondary', '← Previous');
        previous.type = 'button';
        previous.disabled = activeStepIndex === 0;
        previous.addEventListener('click', () => {
            activeStepIndex -= 1;
            selectedAnswer = null;
            render();
        });
        const nextLabel = activeStepIndex === lesson.steps.length - 1 ? 'Lesson complete' : 'Next step →';
        const next = makeElement('button', 'guided-nav-button', nextLabel);
        next.type = 'button';
        next.disabled = activeStepIndex === lesson.steps.length - 1 || (step.type === 'question' && selectedAnswer === null);
        next.addEventListener('click', () => {
            activeStepIndex += 1;
            selectedAnswer = null;
            render();
        });
        navigation.append(previous, next);
        lessonRoot.append(navigation);
    }

    function render() {
        renderSubjectTabs();
        renderTopicList();
        renderLesson();
    }

    render();
})();
