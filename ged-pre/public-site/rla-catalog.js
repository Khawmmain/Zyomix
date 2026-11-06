(function () {
    const stages = [
        { start: 1, title: 'Stage 1: Build Your English Foundations' },
        { start: 4, title: 'Stage 2: Learn Grammar and Editing' },
        { start: 8, title: 'Stage 3: Master Reading Comprehension' },
        { start: 12, title: 'Stage 4: Analyze Informational and Literary Texts' },
        { start: 16, title: 'Stage 5: Analyze Arguments and Evidence' },
        { start: 19, title: 'Stage 6: Learn the Extended Response Essay' },
        { start: 23, title: 'Stage 7: Combine Your Skills and Prepare for the Test' }
    ];

    const chapters = [
        {
            title: 'Understanding Words and Parts of Speech',
            sections: [
                'Nouns: people, places, things, and ideas',
                'Pronouns: words that replace nouns',
                'Verbs: actions and states of being',
                'Adjectives and adverbs',
                'Prepositions and prepositional phrases',
                'Coordinating and subordinating conjunctions',
                'Recognizing how a word functions in a sentence'
            ]
        },
        {
            title: 'Understanding Sentence Structure',
            sections: [
                'Subjects and predicates',
                'Complete sentences',
                'Phrases and clauses',
                'Independent and dependent clauses',
                'Simple sentences',
                'Compound sentences',
                'Complex sentences',
                'Compound-complex sentences'
            ]
        },
        {
            title: 'Building Vocabulary and Understanding Meaning',
            sections: [
                'Using surrounding sentences as context clues',
                'Definition, example, contrast, and inference clues',
                'Common prefixes, suffixes, and roots',
                'Synonyms, antonyms, and shades of meaning',
                'Words with multiple meanings',
                'Denotation: a word’s literal meaning',
                'Connotation: a word’s associated feelings or ideas',
                'Understanding academic words used in questions, such as “infer,” “analyze,” and “evaluate”'
            ]
        },
        {
            title: 'Verbs and Agreement',
            sections: [
                'Subject–verb agreement',
                'Agreement when words separate the subject and verb',
                'Agreement with compound subjects',
                'Regular and irregular verbs',
                'Past, present, and future tense',
                'Keeping verb tense consistent',
                'Recognizing unnecessary shifts in tense'
            ]
        },
        {
            title: 'Pronouns and Modifiers',
            sections: [
                'Pronoun–antecedent agreement',
                'Clear pronoun references',
                'Subject, object, and possessive pronouns',
                'Consistent point of view: first, second, and third person',
                'Correct use of adjectives and adverbs',
                'Misplaced and dangling modifiers',
                'Parallel structure in lists and comparisons'
            ]
        },
        {
            title: 'Sentence Errors and Punctuation',
            sections: [
                'Sentence fragments',
                'Run-on sentences',
                'Comma splices',
                'Combining and separating sentences correctly',
                'Commas in lists, introductions, and clauses',
                'Apostrophes for possession and contractions',
                'Semicolons and colons',
                'Quotation marks and capitalization'
            ]
        },
        {
            title: 'Editing for Clarity and Organization',
            sections: [
                'Removing repetition and unnecessary words',
                'Choosing precise words',
                'Maintaining an appropriate formal tone',
                'Using transitions correctly',
                'Placing sentences in a logical order',
                'Selecting the best opening or closing sentence',
                'Editing grammar within a complete passage'
            ]
        },
        {
            title: 'Understanding Explicit Information',
            sections: [
                'Identifying the topic',
                'Finding directly stated facts and details',
                'Identifying a paragraph’s main idea',
                'Identifying a passage’s central idea',
                'Separating major details from minor details',
                'Matching supporting details to the main idea',
                'Finding the exact passage evidence for an answer'
            ]
        },
        {
            title: 'Summarizing and Paraphrasing',
            sections: [
                'Restating information in your own words',
                'Distinguishing a summary from a detail',
                'Selecting the most important information',
                'Writing an objective summary',
                'Avoiding personal opinions in summaries',
                'Summarizing individual paragraphs and whole passages'
            ]
        },
        {
            title: 'Making Inferences and Drawing Conclusions',
            sections: [
                'Stated information versus implied information',
                'Combining clues to make an inference',
                'Inferring an unstated main idea',
                'Drawing conclusions from evidence',
                'Making supported generalizations',
                'Distinguishing a reasonable inference from a guess',
                'Applying information to a new situation'
            ]
        },
        {
            title: 'Following Relationships and Text Structure',
            sections: [
                'Sequence and chronological order',
                'Cause and effect',
                'Compare and contrast',
                'Problem and solution',
                'Description and classification',
                'Relationships among people, events, and ideas',
                'How one sentence or paragraph develops another',
                'How a section contributes to the whole passage'
            ]
        },
        {
            title: 'Author’s Purpose, Point of View, and Tone',
            sections: [
                'Purpose: informing, explaining, persuading, or entertaining',
                'Intended audience',
                'Author’s point of view or position',
                'Tone: the author’s attitude toward the subject',
                'How word choice shapes tone',
                'How the author responds to other viewpoints',
                'Inferring a purpose that is not directly stated'
            ]
        },
        {
            title: 'Reading Informational Texts',
            sections: [
                'Reading explanations and informational articles',
                'Reading workplace and practical documents',
                'Following processes and instructions',
                'Tracking the development of a central idea',
                'Distinguishing factual statements from opinions',
                'Examining examples, explanations, and supporting details',
                'Connecting information across sections'
            ]
        },
        {
            title: 'Reading Literary Texts',
            sections: [
                'Plot and sequence of events',
                'Setting and its effect on the story',
                'Characters, traits, and motivations',
                'Conflict and resolution',
                'Narrator and narrative point of view',
                'Theme versus topic',
                'How characters and events develop a theme',
                'Figurative language: simile, metaphor, and personification',
                'How imagery and word choice contribute to meaning'
            ]
        },
        {
            title: 'Comparing Two Texts',
            sections: [
                'Identifying a shared topic',
                'Comparing central ideas or themes',
                'Comparing purposes and audiences',
                'Comparing viewpoints',
                'Comparing tone and word choice',
                'Comparing organization and emphasis',
                'Explaining where the texts agree and disagree',
                'Combining information from both texts into a supported conclusion'
            ]
        },
        {
            title: 'Identifying the Parts of an Argument',
            sections: [
                'Topic versus issue',
                'Claim: what the author wants readers to accept',
                'Reasons: why the author says the claim is true',
                'Evidence: information used to support the reasons',
                'Reasoning: how the evidence connects to the claim',
                'Counterclaims and opposing viewpoints',
                'Rebuttals or responses to counterclaims',
                'Mapping how an argument develops'
            ]
        },
        {
            title: 'Evaluating Evidence',
            sections: [
                'Relevant versus irrelevant evidence',
                'Sufficient versus insufficient evidence',
                'Facts, statistics, examples, and expert statements',
                'Specific evidence versus broad assertions',
                'Whether evidence actually supports the claim',
                'Supported versus unsupported conclusions',
                'Comparing the strength of evidence in two arguments'
            ]
        },
        {
            title: 'Evaluating Reasoning and Assumptions',
            sections: [
                'Identifying unstated assumptions',
                'Checking whether assumptions are supported',
                'Recognizing overgeneralization',
                'Recognizing unsupported cause-and-effect claims',
                'Recognizing misleading comparisons',
                'Recognizing attacks on a person instead of an argument',
                'Identifying circular reasoning',
                'Explaining why an argument is stronger or weaker'
            ]
        },
        {
            title: 'Understanding the Writing Task',
            sections: [
                'Reading the prompt carefully',
                'Identifying what the prompt asks you to evaluate',
                'Identifying each author’s position',
                'Selecting the better-supported argument',
                'Separating analysis from personal opinion',
                'Selecting evidence from the provided passages'
            ]
        },
        {
            title: 'Planning Your Response',
            sections: [
                'Making a brief outline',
                'Writing a clear thesis',
                'Choosing the main reasons for your judgment',
                'Organizing evidence into body paragraphs',
                'Planning comparisons between the arguments',
                'Avoiding a response that only summarizes the passages'
            ]
        },
        {
            title: 'Writing Analytical Paragraphs',
            sections: [
                'Writing a focused topic sentence',
                'Introducing relevant passage evidence',
                'Quoting briefly or paraphrasing accurately',
                'Explaining how the evidence supports your judgment',
                'Explaining weaknesses in an opposing argument',
                'Connecting each paragraph to the thesis',
                'Using transitions between ideas'
            ]
        },
        {
            title: 'Completing and Revising the Essay',
            sections: [
                'Writing an introduction that answers the prompt',
                'Developing logically ordered body paragraphs',
                'Writing a conclusion that follows from the analysis',
                'Checking the accuracy of evidence',
                'Checking organization and clarity',
                'Editing grammar, sentence structure, and punctuation',
                'Practicing the complete response within 45 minutes'
            ]
        },
        {
            title: 'Mixed Practice',
            sections: [
                'Reading questions that combine main idea and inference',
                'Questions connecting structure and author’s purpose',
                'Comparing evidence across two passages',
                'Editing grammar within longer texts',
                'Completing a reading set followed by an essay',
                'Explaining why incorrect answers are not supported'
            ]
        },
        {
            title: 'Timed Practice and Final Review',
            sections: [
                'Complete an initial practice test',
                'Sort errors by chapter or skill',
                'Relearn your weakest topics',
                'Practice short timed reading sets',
                'Practice timed editing sets',
                'Practice a 45-minute extended response',
                'Complete a full-length practice test',
                'Review mistakes and repeat targeted practice'
            ]
        }
    ];

    window.rlaCourseStages = stages;
    window.rlaCourseChapters = chapters;

    const chapterList = document.getElementById('rla-chapter-list');
    if (!chapterList) return;

    chapters.forEach((chapter, chapterIndex) => {
        const chapterNumber = chapterIndex + 1;
        const stage = stages.find(item => item.start === chapterNumber);
        if (stage) {
            const stageHeading = document.createElement('div');
            stageHeading.className = 'science-course-part rla-course-stage';
            const heading = document.createElement('h4');
            heading.textContent = stage.title;
            stageHeading.append(heading);
            chapterList.append(stageHeading);
        }

        const chapterHeading = document.createElement('div');
        chapterHeading.className = 'chapter-title-modern';
        chapterHeading.textContent = `Chapter ${chapterNumber}: ${chapter.title}`;
        const grid = document.createElement('div');
        grid.className = 'concept-steps-grid';

        chapter.sections.forEach((sectionTitle, sectionIndex) => {
            const sectionNumber = sectionIndex + 1;
            const link = document.createElement('a');
            link.href = `lesson.html?step=rla-${chapterNumber}-${sectionNumber}`;
            link.className = 'step-pill-card searchable-card';

            const badge = document.createElement('span');
            badge.className = 'step-badge-tag';
            badge.style.background = '#fff5f5';
            badge.style.color = '#9b2c2c';
            badge.textContent = `Section ${chapterNumber}.${sectionNumber}`;

            const title = document.createElement('h4');
            title.textContent = sectionTitle;
            const arrow = document.createElement('span');
            arrow.className = 'arrow';
            arrow.innerHTML = '&rarr;';
            link.append(badge, title, arrow);
            grid.append(link);
        });

        chapterList.append(chapterHeading, grid);
    });
})();
