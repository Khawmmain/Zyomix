(function () {
    const stageForChapter = (chapter) => {
        if (chapter <= 3) return 'English foundations';
        if (chapter <= 7) return 'grammar, editing, clarity, and organization';
        if (chapter <= 11) return 'reading comprehension';
        if (chapter <= 15) return 'informational and literary texts';
        if (chapter <= 18) return 'arguments and evidence';
        if (chapter <= 22) return 'the Extended Response essay';
        return 'mixed practice and test preparation';
    };

    const exampleForChapter = (chapter) => {
        if (chapter <= 3) return {
            topic: 'a short school notice about extending library hours',
            passage: 'The school library will stay open until 6 p.m. on Tuesdays. Last month, 42 students used the library after 4 p.m. on Tuesdays, compared with 18 on other weekdays. The principal says the later closing gives students more time to finish assignments. A student council member supports a one-month trial and suggests recording attendance and asking students whether the extra hour helps. The notice also says the school will review staffing costs before deciding whether to continue the schedule. These details explain what will change, why the change is proposed, and how the school could judge the trial.',
            claim: 'Keeping the library open later on Tuesdays may give students more useful study time.',
            evidence: 'The notice reports 42 Tuesday users after 4 p.m., compared with 18 on other weekdays, and proposes tracking attendance and student feedback during a trial.',
            evaluation: 'This is a reasonable, limited argument: the attendance comparison supports interest in later access, but it does not prove that the extra hour improves assignments. A trial measuring use, feedback, and costs would provide stronger evidence.'
        };
        if (chapter <= 7) return {
            topic: 'a student revising a request for a quiet study room',
            passage: 'Mina writes, “The study room are helpful because many student uses it.” Her teacher marks the subject and verb, then asks Mina to make the reason more precise. Mina revises the sentence: “The study room helps students concentrate; attendance records show that 28 students used it during the final week.” She adds that one busy week does not prove every student needs the room. Her final request asks the school to keep the room available during exams and review use again next term. The revision is clearer because the subject and verb agree, the evidence is specific, and the conclusion stays within what the records show.',
            claim: 'The school should keep the study room available during exams.',
            evidence: 'Attendance records show that 28 students used the room during the final week.',
            evaluation: 'The revised request is clearer and better supported than the original. It uses a specific count, but one week of records cannot show that all students need the room or that it must stay open all year.'
        };
        if (chapter <= 11) return {
            topic: 'a community center adding a weekend reading session',
            passage: 'The community center added a Saturday reading session in April. Its report says 30 people attended the first week and 36 attended the second. A volunteer says the quiet room and free books helped families return. The report does not include attendance from before April or explain whether the same people attended both weeks. A careful reader can state that attendance increased by six between the two reported sessions. The reader cannot yet conclude that the program caused a lasting increase in reading or that every family benefited. More weeks of records, participant feedback, and a comparison with another schedule would help test those larger claims.',
            claim: 'Attendance at the Saturday reading session rose from its first week to its second.',
            evidence: 'The report lists 30 attendees in the first week and 36 in the second.',
            evaluation: 'The narrow claim is strongly supported by the two numbers. A broader claim that the program caused lasting reading gains would be weak because the report lacks longer-term measures, prior attendance, and information about repeat visitors.'
        };
        if (chapter <= 15) return {
            topic: 'two local articles about restoring a neighborhood garden',
            passage: 'Article A supports restoring the garden because residents need a shared outdoor space. It reports that 24 neighbors signed a request and describes weekend volunteer plans. Article B supports the idea only if the city first checks soil safety and long-term costs. It cites a city inspection schedule and estimates that water and maintenance will require yearly funding. Both writers want the vacant lot improved, but they emphasize different priorities: community use and safety costs. A careful comparison should identify each article’s position and evidence rather than treating one vivid personal story as proof. Readers can conclude that support exists, while deciding whether the plan is practical requires inspection results and a confirmed budget.',
            claim: 'The garden should be restored, but the city should first address safety and ongoing costs.',
            evidence: 'Article A reports 24 signatures and volunteer plans; Article B points to an upcoming soil inspection and yearly water and maintenance costs.',
            evaluation: 'The combined position recognizes evidence from both articles. The signatures show interest, not universal support, and projected costs need confirmation. A soil inspection and funded maintenance plan would make the decision better supported.'
        };
        if (chapter <= 18) return {
            topic: 'a proposal to extend public library hours',
            passage: 'The city should keep the public library open two evenings later each week. A library report recorded 310 visits after 5 p.m. during a four-week trial, and a survey found that 68 percent of respondents favored evening access. One resident argues that later hours help workers and students who cannot arrive earlier. However, the survey was completed by library visitors, so it may not represent all residents. The report also does not compare the extra visits with staffing and energy costs. The proposal has relevant evidence of use and support, but decision-makers should review a broader survey, repeat the trial, and compare its benefits with verified costs before making a permanent change.',
            claim: 'The city should extend library hours two evenings each week.',
            evidence: 'A four-week trial recorded 310 visits after 5 p.m., and 68 percent of survey respondents favored evening access.',
            evaluation: 'The argument uses relevant evidence, but it is not yet conclusive. Visitors may not represent all residents, and the report omits operating costs. A representative survey and cost comparison would make the case stronger.'
        };
        if (chapter <= 22) return {
            topic: 'two passages debating a later school start time',
            passage: 'Passage One argues that middle and high schools should start later. It cites a district pilot in which morning tardiness fell by 12 percent and quotes students who said they felt more alert. Passage Two argues that a later start would complicate bus schedules and after-school jobs. It refers to a transportation estimate showing that three routes would need new drivers, but it offers no cost total. A strong essay should judge which argument is better supported, not simply announce a personal preference. The writer can acknowledge the opposing concern, compare the quality of each source, and explain what further information—such as total costs and attendance across a full year—would help the district decide.',
            claim: 'The district should consider a later start because the pilot provides measurable attendance evidence.',
            evidence: 'The first passage reports a 12 percent drop in morning tardiness during a district pilot; the second identifies three routes needing new drivers but gives no total cost.',
            evaluation: 'The first position has a measured outcome, while the second raises a relevant but unquantified cost. A fair essay should explain this difference and avoid claiming the pilot proves every student benefits.'
        };
        return {
            topic: 'a town testing a free evening bus route',
            passage: 'A town is considering a free evening bus route for six months. Supporters say it could help workers reach late shifts and students attend evening classes. In a small survey, 54 of 80 respondents said they would use it. Opponents note that the route would cost money and may have low ridership on some nights. The town has not yet published a full cost estimate or collected travel information from residents who did not answer the survey. A careful decision would compare actual ridership, operating costs, and access across neighborhoods during a limited trial. The survey signals possible interest, but it cannot alone prove the route will be affordable or useful to every resident.',
            claim: 'The town should test the evening route before deciding whether to make it permanent.',
            evidence: 'In a small survey, 54 of 80 respondents said they would use the route, while opponents identify possible operating costs.',
            evaluation: 'A limited trial is a cautious proposal that can gather real ridership and cost data. The survey is suggestive, not conclusive, because it is small and excludes nonrespondents.'
        };
    };

    function countWords(text) {
        return (text.match(/\b[\w’'-]+\b/g) || []).length;
    }

    function finishAtTarget(text, target, suffixes) {
        let result = text.trim();
        let suffixIndex = 0;
        while (countWords(result) < target - 5 && suffixIndex < suffixes.length) {
            const candidate = `${result}\n${suffixes[suffixIndex++]}`;
            if (countWords(candidate) <= target + 5) result = candidate;
        }
        return result;
    }

    function firstSentences(text, limit) {
        const sentences = [];
        let start = 0;
        for (let index = 0; index < text.length; index++) {
            if (!/[.!?]/.test(text[index]) || (index + 1 < text.length && !/\s/.test(text[index + 1]))) continue;
            const next = text.slice(index + 1).trimStart()[0];
            if (next && !/[A-Z“"]/.test(next)) continue;
            sentences.push(text.slice(start, index + 1).trim());
            start = index + 1;
            if (sentences.length === limit) break;
        }
        if (sentences.length < limit && start < text.length) sentences.push(text.slice(start).trim());
        return sentences.join(' ');
    }

    function createRlaLesson(chapterNumber, sectionNumber, chapter, sectionTitle) {
        if (!chapter || !sectionTitle) return null;
        const stage = stageForChapter(chapterNumber);
        const example = exampleForChapter(chapterNumber);
        const headline = `Master GED RLA Argument Analysis: ${sectionTitle}`;

        const intro = finishAtTarget(
            `How can you tell whether a writer’s argument is convincing? Critical reading is essential on the GED RLA test because reading questions ask you to find a claim, follow reasons, and select details that support an answer. The same skills matter in the Extended Response, where you compare two passages and explain which author makes the stronger case. No prior knowledge of the subject is required. Instead, read carefully, identify what each writer believes, and check the evidence and reasoning. Keep your personal opinion separate from your evaluation. Facts and relevant examples are stronger evidence than a story. In this lesson, you will practice analyzing an argument and explaining your judgment clearly. If details are missing, do not guess.`,
            120,
            ['Use the passage as your source.']
        );

        const concept = finishAtTarget(
            `An argument is a position supported by reasons and evidence. The claim tells what the writer wants readers to accept. Reasons explain why that claim should be believed. Evidence provides checkable support, such as facts, records, examples, or data. Reasoning explains how the evidence supports the reasons and claim. On the GED, do not assume an argument is strong just because it includes numbers or confident language. Check whether each piece of evidence is relevant, trustworthy, and sufficient for the conclusion. Use this map as you read:\nClaim: the writer’s position\n  ↓ supported by\nReasons: why it may be true\n  ↓ backed with\nEvidence: facts, examples, or data\n  ↓ connected through\nReasoning: how support leads to the claim\n  ↓ judge\nEvaluation: strong, weak, or uncertain`,
            145,
            ['If one connection is missing, the evidence may not prove the conclusion.', 'Ask what is claimed, which details support it, and why those details matter.', 'Use these questions even when the topic is unfamiliar.']
        );

        const passageExcerpt = firstSentences(example.passage, 2);
        const realExample = finishAtTarget(
            `Read this GED-style nonfiction example about ${example.topic}: “${passageExcerpt}”\nClaim: ${example.claim}\nEvidence: ${example.evidence}\nAssessment/Evaluation: ${example.evaluation}`,
            165,
            [
                'To evaluate the argument, separate what the source reports from what the writer infers.',
                'Ask whether the evidence is enough for the claim and whether another explanation is possible.',
                'A careful reader states what the evidence supports and names what is still unknown.',
                'Use the exact details in the passage; do not rely on a personal reaction.',
                'Check what the evidence leaves unknown.'
            ]
        );

        const testing = finishAtTarget(
            `Expect RLA questions that make you use a passage, not recall a definition. For ${sectionTitle}, practice these exam moves:`,
            140,
            [
                '• Find the thesis or main claim: state the writer’s position in one sentence.',
                '• Track reasons and evidence: match each reason to a specific detail, fact, example, or statistic.',
                '• Select the best-supported conclusion: reject choices that exaggerate or add information.',
                '• Compare opposing passages: identify each author’s claim, evidence, and reasoning before judging strength.',
                '• For the Extended Response, choose the better-supported argument, cite passage evidence, explain why it matters, and address a counterargument fairly.',
                '• Check every answer against the text; a plausible opinion is not enough.',
                '• In multiple choice, eliminate answers that conflict with the passage or use unsupported details.',
                '• Find the thesis, not merely the topic.',
                '• Compare sources, sample sizes, and relevant facts before choosing the stronger argument.'
            ]
        );

        const keyTerms = finishAtTarget(
            `• Claim: The main position an author wants readers to accept. Ask, “What does this writer want me to believe or do?” A clear claim is specific enough to evaluate.\n• Evidence: Facts, examples, observations, records, or statistics used to support a claim. Strong evidence is relevant, accurate, and traceable to a source.\n• Counterargument: A different position that challenges the claim. Recognizing it helps readers understand what the writer must answer.\n• Bias: A leaning or interest that may shape which facts a source selects or how it presents them. Bias calls for checking evidence; it does not automatically make a source false.\n• Faulty reasoning: A weak link between evidence and conclusion, such as treating one example as proof of a rule for everyone.\n• Sufficient data: Enough relevant information to support a conclusion’s level of certainty and scope.`,
            155,
            []
        );

        const remember = finishAtTarget(
            `Use these three strategies whenever an RLA question asks you to judge an argument:`,
            130,
            [
                '1. Leave personal opinions out. Judge which passage is better supported, not which position matches your beliefs. State your judgment and point to the text.',
                '2. Prioritize facts over stories. A personal example may illustrate a concern, but compare it with relevant records, data, and identified sources. Ask whether the evidence is enough for the claim.',
                '3. Hunt for logical flaws. Check whether reasons connect to the claim, whether a counterargument is answered fairly, and whether the conclusion goes beyond the facts. Be cautious with words such as “always” when evidence is limited. Before submitting, reread the question and verify that every sentence is supported by either of the provided passages.'
            ]
        );

        const asParagraphAndBullets = (text) => {
            const lines = text.split('\n').filter(Boolean);
            return {
                paragraphs: lines.slice(0, 1),
                bullets: lines.slice(1).map(line => line.replace(/^•\s*/, ''))
            };
        };
        const testingParts = asParagraphAndBullets(testing);
        const rememberParts = asParagraphAndBullets(remember);

        const sections = [
            { title: 'Introduction', paragraphs: [intro] },
            { title: 'Concept', paragraphs: [concept], preserveLineBreaks: true },
            { title: 'Real Example', paragraphs: [realExample], preserveLineBreaks: true },
            { title: 'Testing the Concept', paragraphs: testingParts.paragraphs, bullets: testingParts.bullets },
            { title: 'Key Terms', paragraphs: ['These terms help you check a claim, its support, opposition, source reliability, reasoning, and whether the available information is enough.'], bullets: keyTerms.split('\n').map(line => line.replace(/^•\s*/, '')) },
            { title: 'Things to Remember', paragraphs: rememberParts.paragraphs, bullets: rememberParts.bullets },
            {
                title: 'Learn More',
                paragraphs: ['Use these free, reliable resources to review GED RLA expectations and strengthen reading, writing, and argument-analysis skills.'],
                resourceLinks: [
                    { label: 'GED Testing Service: Official RLA Study Guide', href: 'https://www.ged.com/content/dam/websites/ged/resources/GED-Study-Guide-RLA.pdf' },
                    { label: 'GED Testing Service: RLA Assessment Guide for Educators', href: 'https://www.ged.com/content/dam/websites/ged/resources/en/assessment-guide-for-educators-rla.pdf' },
                    { label: 'Khan Academy: Reading and vocabulary practice', href: 'https://www.khanacademy.org/ela' },
                    { label: 'Purdue OWL: Evaluating sources and arguments', href: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html' }
                ]
            }
        ];

        return {
            badge: `RLA · Chapter ${chapterNumber} · Section ${chapterNumber}.${sectionNumber}`,
            title: headline,
            intro,
            theory: concept,
            lessonSectionsOnly: true,
            lessonSections: sections,
            gedConnection: `This section supports GED RLA work in ${stage}, including reading passages closely and explaining judgments with textual evidence.`
        };
    }

    window.createRlaLesson = createRlaLesson;
    window.rlaLessonWordTargets = {
        introduction: 120,
        concept: 145,
        realExample: 165,
        testing: 140,
        keyTerms: 155,
        thingsToRemember: 130
    };
})();
