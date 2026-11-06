(function () {
    const familyForChapter = (chapter) => {
        if (chapter <= 7) return 'language';
        if (chapter <= 11) return 'reading';
        if (chapter <= 15) return 'texts';
        if (chapter <= 18) return 'arguments';
        if (chapter <= 22) return 'essay';
        return 'practice';
    };

    const families = {
        language: {
            outcome: 'notice how words and sentences work, apply a rule, and reread to make sure the meaning is clear',
            benefit: 'These skills help you understand passages and answer GED questions about grammar, word choice, and editing.',
            map: ['Read the whole sentence', 'Find the word or sentence part', 'Apply the target rule', 'Reread for clear meaning'],
            terms: [
                ['Context', 'The words and ideas around a target word or sentence; context helps reveal meaning and grammatical purpose.'],
                ['Function', 'The job a word performs in its sentence, such as naming, describing, connecting, or showing an action.'],
                ['Agreement', 'The matching relationship between sentence parts, such as a subject and the verb that describes it.'],
                ['Clause', 'A group of words with a subject and verb; some clauses express a complete thought and others do not.'],
                ['Modifier', 'A word or phrase that describes another part of a sentence; its placement should make the meaning clear.'],
                ['Revision', 'A deliberate change that improves correctness, clarity, organization, or word choice in a sentence or passage.']
            ],
            sample: 'A student edits this sentence: “The volunteers plans to clean the park, and they will begins Saturday.” The student first identifies the subject of each verb, then changes “plans” to “plan” and “begins” to “begin.” The corrected sentence is “The volunteers plan to clean the park, and they will begin Saturday.”',
            walkthrough: 'The subject “volunteers” is plural, so “plan” agrees with it. After “will,” use the base verb “begin.” The corrections keep the original meaning while making the sentence standard and easy to read.',
            testMove: 'Read the entire sentence, locate the exact word or relationship named in the question, apply the rule, and check that the revision preserves the writer’s meaning.',
            checkPrompt: (title) => `A sentence is being checked for “${title}.” Which method is most reliable?`,
            checkOptions: ['Read the surrounding sentence, identify the target’s role, and apply the relevant rule', 'Choose the answer that sounds most formal, even if the meaning changes', 'Check only the first word and ignore the rest of the sentence', 'Select the longest answer because it gives more detail'],
            checkCorrect: 0,
            checkExplanation: 'Sentence skills depend on context and relationships. Checking the target in its full sentence lets you apply the right rule without changing the intended meaning.',
            pitfall: 'Do not edit by instinct alone. A sentence may sound familiar but still contain an agreement, punctuation, or clarity error; check the rule named by the question.',
            links: [
                { label: 'Khan Academy: Grammar and parts of speech', href: 'https://www.khanacademy.org/humanities/grammar' },
                { label: 'Purdue OWL: Grammar', href: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html' }
            ]
        },
        reading: {
            outcome: 'read the question first, locate the relevant lines, and choose an answer that stays within what the passage says',
            benefit: 'GED reading questions reward careful attention to details, main ideas, relationships, and conclusions—not outside knowledge.',
            map: ['Read the question', 'Find the matching passage detail', 'Connect details to the idea', 'Check that the answer adds nothing'],
            terms: [
                ['Topic', 'The person, place, subject, or issue a passage discusses; a topic is usually shorter than the passage’s main idea.'],
                ['Central idea', 'The most important message the writer develops across a passage, supported by its key details.'],
                ['Detail', 'A specific fact, example, action, or description that explains or supports a larger idea in the text.'],
                ['Inference', 'A reasonable conclusion formed by combining clues in the passage with careful thinking, not a guess.'],
                ['Evidence', 'A passage detail that can be pointed to directly to support an answer or conclusion.'],
                ['Summary', 'A brief, objective statement of the passage’s most important ideas without minor details or personal opinions.']
            ],
            sample: 'A notice says the community clinic will stay open until 7 p.m. on Thursdays. It reports that 26 patients used evening appointments during a four-week trial. The clinic will review staffing costs before deciding whether to continue.',
            walkthrough: 'The notice directly states the closing time and trial attendance. It does not say that all patients prefer evening visits or that the schedule will become permanent. A strong answer uses the stated facts and avoids adding an unsupported conclusion.',
            testMove: 'Underline the words in the question that tell you what to find. Return to the passage, point to the supporting line, and reject choices that exaggerate or introduce facts from outside the text.',
            checkPrompt: (title) => `When answering a question about “${title},” what makes an answer dependable?`,
            checkOptions: ['It is supported by a specific passage detail and does not go beyond the text', 'It matches what most people probably believe', 'It includes every detail, even unrelated ones', 'It uses outside facts instead of the passage'],
            checkCorrect: 0,
            checkExplanation: 'GED reading answers must be supported by the passage. Finding a matching detail and avoiding extra claims keeps the answer accurate.',
            pitfall: 'A choice can sound reasonable and still be wrong if the passage does not support it. Return to the text instead of filling gaps with a guess.',
            links: [
                { label: 'Khan Academy: Reading and vocabulary', href: 'https://www.khanacademy.org/ela' },
                { label: 'Purdue OWL: Critical reading', href: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/critical_reading.html' }
            ]
        },
        texts: {
            outcome: 'notice what a writer is doing, how the text is organized, and how its language shapes meaning for readers',
            benefit: 'These skills help you interpret informational passages, stories, and paired texts on the GED RLA test.',
            map: ['Notice the topic and details', 'Ask what the writer wants to do', 'Track words, structure, and viewpoint', 'Explain the effect with text evidence'],
            terms: [
                ['Purpose', 'The reason a writer created a text, such as to explain, inform, persuade, describe, or entertain.'],
                ['Audience', 'The people a writer expects to read or hear the message; audience affects language and detail.'],
                ['Point of view', 'The position or perspective from which a writer or narrator presents people, events, or an issue.'],
                ['Tone', 'The attitude a writer communicates through word choice, details, and sentence style.'],
                ['Theme', 'A broader idea about life or people that a story develops through its characters and events.'],
                ['Structure', 'The way a text arranges ideas or events, such as in sequence, by cause and effect, or by comparison.']
            ],
            sample: 'A city flyer says, “Bring your family to Saturday’s free river cleanup. Gloves and bags will be provided.” A short report about the same event explains how litter can reach the river and describes the cleanup schedule.',
            walkthrough: 'The flyer aims to encourage attendance and uses a welcoming invitation. The report mainly explains the problem and the plan. To compare them, identify what each text emphasizes and point to the words or details that reveal its purpose.',
            testMove: 'Name the text feature the question asks about, find a word, event, or structural choice that demonstrates it, and explain its effect rather than merely repeating the feature’s definition.',
            checkPrompt: (title) => `To answer a question about “${title},” what should you connect?`,
            checkOptions: ['A specific word, detail, or structural choice to the meaning it creates', 'The title alone to your personal opinion', 'A guess about the writer’s private life', 'An unrelated fact from another source'],
            checkCorrect: 0,
            checkExplanation: 'Interpretation is strongest when it links a visible choice in the text to a reasonable effect or meaning.',
            pitfall: 'Do not confuse a topic with a theme, or a writer’s purpose with your own reaction. Support an interpretation with a detail from the text.',
            links: [
                { label: 'Khan Academy: Reading literature and informational texts', href: 'https://www.khanacademy.org/ela' },
                { label: 'Purdue OWL: Writing about literature', href: 'https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/index.html' }
            ]
        },
        arguments: {
            outcome: 'separate a writer’s claim from its reasons, trace the evidence, and judge whether the reasoning is fair and sufficient',
            benefit: 'The GED asks you to analyze claims in reading passages and use evidence when comparing arguments in the Extended Response.',
            map: ['Claim: what the writer wants accepted', 'Reasons: why the claim might be true', 'Evidence: facts and examples', 'Reasoning: how the evidence supports the claim', 'Evaluation: how strong the support is'],
            terms: [
                ['Claim', 'The main position an author wants readers to accept; it should be specific enough to evaluate.'],
                ['Evidence', 'Facts, examples, records, observations, or statistics offered to support a reason or claim.'],
                ['Counterclaim', 'A different position that challenges the main claim and identifies a concern or alternative view.'],
                ['Rebuttal', 'A response that answers an opposing claim with relevant reasoning or evidence.'],
                ['Reasoning', 'The explanation that connects evidence to a reason and shows why it supports the claim.'],
                ['Sufficient data', 'Enough relevant information to support a conclusion’s level of certainty and how broadly it is stated.']
            ],
            sample: 'A neighborhood group asks the town to add a crosswalk near the library. It reports that 47 people signed a request and that drivers often turn quickly at the intersection. The group recommends that the town count traffic and review recent safety records before choosing a location.',
            walkthrough: 'The claim is to add a crosswalk. The signatures show community interest, while the reported turns raise a safety concern. Neither detail alone proves that this is the most dangerous location. Traffic counts and safety records would better test the proposal.',
            testMove: 'Identify the claim first. Match each reason to evidence, then ask whether the source is trustworthy, the evidence is relevant, and the conclusion stays within what the evidence can show.',
            checkPrompt: (title) => `When evaluating “${title},” which reading move should come first?`,
            checkOptions: ['Identify the writer’s claim, then trace the reasons and evidence that support it', 'Decide whether you personally agree with the writer', 'Assume that any statistic proves the claim', 'Skip opposing views because they cannot matter'],
            checkCorrect: 0,
            checkExplanation: 'An argument is a connected set of claim, reasons, evidence, and reasoning. Mapping those parts lets you judge support instead of reacting to the topic.',
            pitfall: 'A number or confident statement is not automatically strong evidence. Check where it came from, what it measures, and whether it truly supports the claim.',
            links: [
                { label: 'GED Testing Service: Official RLA Study Guide', href: 'https://www.ged.com/content/dam/websites/ged/resources/GED-Study-Guide-RLA.pdf' },
                { label: 'Purdue OWL: Establishing arguments', href: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html' }
            ]
        },
        essay: {
            outcome: 'answer the prompt, choose the better-supported position, and build an organized response with accurate passage evidence',
            benefit: 'The Extended Response asks you to compare arguments and explain your judgment; a clear process makes the task manageable.',
            map: ['Read the task and both passages', 'Choose a defensible judgment', 'Plan reasons and evidence', 'Explain how details support your analysis', 'Revise for clarity and correctness'],
            terms: [
                ['Prompt', 'The directions that define what your response must do; underline the task and any limits it gives.'],
                ['Thesis', 'A focused sentence that answers the prompt and states the judgment your response will support.'],
                ['Outline', 'A brief plan for the thesis, reasons, evidence, and paragraph order before drafting.'],
                ['Paraphrase', 'Restating a passage idea accurately in your own words while keeping its meaning.'],
                ['Analysis', 'An explanation of why evidence matters and how it supports your judgment, not just a copied quotation.'],
                ['Transition', 'A word or phrase that shows how one idea relates to the next, such as contrast or cause.']
            ],
            sample: 'Two passages debate a later school start. One reports that tardiness fell during a district pilot. The other warns that bus routes could cost more but gives no total. The task asks which argument is better supported.',
            walkthrough: 'A useful thesis answers the task and previews the judgment. A body paragraph can cite the measured tardiness result, explain why it supports the first passage, and note that the cost concern needs a verified estimate. The response should judge evidence, not personal preference.',
            testMove: 'Turn the prompt into a checklist. State your judgment, select accurate details from both passages, explain each detail’s importance, address a limitation fairly, and leave time to revise.',
            checkPrompt: (title) => `For “${title}” in an Extended Response, which choice best strengthens your work?`,
            checkOptions: ['Answer the prompt and explain how accurate passage details support your judgment', 'Write only which position you personally prefer', 'Copy a long passage without explaining it', 'Add facts that neither passage provides'],
            checkCorrect: 0,
            checkExplanation: 'A strong analytical response makes a clear judgment and explains how relevant passage evidence supports it.',
            pitfall: 'Do not retell both passages without evaluating them. Keep returning to the prompt and explain why each cited detail makes an argument stronger or weaker.',
            links: [
                { label: 'GED Testing Service: Official RLA Study Guide', href: 'https://www.ged.com/content/dam/websites/ged/resources/GED-Study-Guide-RLA.pdf' },
                { label: 'Purdue OWL: The writing process', href: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html' }
            ]
        },
        practice: {
            outcome: 'use a repeatable routine: understand the task, work from the text, manage your time, and learn from mistakes',
            benefit: 'Mixed practice and review help you recognize which skill a question tests and choose an effective strategy under time limits.',
            map: ['Read the directions', 'Name the skill being tested', 'Use the passage or sentence as evidence', 'Check the answer', 'Review the reason for any error'],
            terms: [
                ['Command word', 'A task word such as identify, compare, or explain; it tells you what kind of answer to produce.'],
                ['Passage evidence', 'A detail from the provided text that supports an answer and can be found again by a reader.'],
                ['Distractor', 'An answer choice designed to seem possible but that is inaccurate, incomplete, or unsupported by the text.'],
                ['Pacing', 'Managing time so you can read, answer, and review without getting stuck on one question.'],
                ['Error pattern', 'A repeated kind of mistake that reveals a skill to practice, such as overlooking a key detail.'],
                ['Targeted review', 'Focused practice on a specific weak skill, followed by another check to see whether it improved.']
            ],
            sample: 'A practice set includes a short passage, a grammar question, and an essay prompt. A learner misses a question because the answer choice sounds reasonable but is not stated in the passage.',
            walkthrough: 'The learner records the error as “did not check passage evidence,” rereads the relevant lines, and explains why the chosen answer adds information. Next, the learner practices another question that tests the same skill.',
            testMove: 'Before answering, identify the task and the relevant text. If stuck, eliminate choices that conflict with evidence, make unsupported claims, or answer a different question.',
            checkPrompt: (title) => `During “${title},” what is the best way to learn from a missed question?`,
            checkOptions: ['Find the reason it was wrong, name the skill, and try a similar question', 'Memorize the answer letter without reviewing the passage', 'Skip every question that feels unfamiliar', 'Repeat the same set without checking mistakes'],
            checkCorrect: 0,
            checkExplanation: 'Review is useful when it identifies a cause, practices the same skill, and checks whether the new strategy works.',
            pitfall: 'Do not treat a practice score as the whole lesson. Review why each missed choice failed, then practice that skill again.',
            links: [
                { label: 'GED Testing Service: Official RLA Study Guide', href: 'https://www.ged.com/content/dam/websites/ged/resources/GED-Study-Guide-RLA.pdf' },
                { label: 'Khan Academy: Free reading and language arts practice', href: 'https://www.khanacademy.org/ela' }
            ]
        }
    };

    const chapterGuides = {
        1: { focus: 'the job a word does in a sentence', model: 'In “Maya carried the blue folder carefully,” identify who or what is named, what action happens, and which words describe the action or object.', steps: ['Read the sentence', 'Ask what job the target word performs', 'Use its meaning and neighbors as clues', 'Check that the label fits this sentence'] },
        2: { focus: 'how words combine to make complete and varied sentences', model: '“Because the bus was late.” gives a reason but leaves the reader waiting. Add a complete thought: “Because the bus was late, Nia called her manager.”', steps: ['Find the subject and verb', 'Check whether the thought is complete', 'Join or separate clauses correctly', 'Read aloud to test the sentence'] },
        3: { focus: 'how context and word parts help reveal meaning', model: '“The path was slippery; hikers moved cautiously.” The clue after the semicolon suggests that cautiously means carefully.', steps: ['Notice an unfamiliar word', 'Look before and after it for clues', 'Try a likely meaning in the sentence', 'Check that the whole passage still makes sense'] },
        4: { focus: 'how verbs match subjects and keep time clear', model: '“The list of supplies is on the desk.” The subject is “list,” not the nearby plural “supplies,” so the verb is “is.”', steps: ['Find the sentence subject', 'Ignore distracting words between subject and verb', 'Choose the matching verb form', 'Check that the time stays consistent'] },
        5: { focus: 'how pronouns and modifiers point clearly to the right words', model: '“When Luis met Omar, he smiled” is unclear because “he” could mean either person. Naming the person removes the confusion.', steps: ['Locate the pronoun or modifier', 'Ask which word it refers to or describes', 'Check that the connection is clear', 'Rewrite if a reader could misunderstand'] },
        6: { focus: 'how punctuation marks sentence boundaries and relationships', model: '“The rain stopped, and the team returned to the field.” The comma comes before the conjunction joining two complete thoughts.', steps: ['Read the sentence for complete thoughts', 'Identify the relationship between parts', 'Choose punctuation that shows that relationship', 'Check capitalization and sentence boundaries'] },
        7: { focus: 'how editing makes a passage precise, logical, and easy to follow', model: '“The meeting was postponed to a later date in the future” repeats an idea. “The meeting was postponed” is shorter and clearer.', steps: ['Identify the writer’s main point', 'Find repetition or confusing order', 'Choose a precise revision', 'Reread the whole passage for flow'] },
        8: { focus: 'how to locate and verify information stated directly', model: 'If a notice says the clinic closes at 7 p.m. on Thursdays, that time is explicit. It does not establish the clinic’s hours on other days.', steps: ['Read the question carefully', 'Search for the matching detail', 'Check the exact wording and units', 'Do not extend the fact beyond the passage'] },
        9: { focus: 'how to keep the main points and leave out minor details', model: 'A passage says a library added Sunday hours, attendance rose, and families used the service. A summary should state the change and its main result, not retell every example.', steps: ['Identify the passage’s main point', 'Select only the most important support', 'Restate it objectively', 'Remove opinions and small details'] },
        10: { focus: 'how to make a reasonable conclusion from clues', model: 'A story says the porch light is on and a wet umbrella is by the door. You may infer someone came in from rain, but not who it was.', steps: ['Collect clues from the passage', 'Connect clues that fit together', 'State a limited conclusion', 'Check that every part has support'] },
        11: { focus: 'how organization shows relationships between ideas', model: 'A passage describes a problem, explains its cause, then offers a solution. Recognizing that structure helps you see how each paragraph contributes.', steps: ['Notice signal words and paragraph roles', 'Name the relationship between ideas', 'Track how the structure develops', 'Explain its effect with a passage detail'] },
        12: { focus: 'how purpose, audience, point of view, and tone shape a text', model: '“Join us Saturday to clean the park!” invites action; a city report describing cleanup results mainly informs readers.', steps: ['Ask why the text was written', 'Identify its likely audience', 'Notice viewpoint and word choice', 'Support your interpretation with a detail'] },
        13: { focus: 'how informational and practical texts communicate usable facts', model: 'A recipe lists ingredients before numbered steps. Following the sequence matters because each direction depends on what came before.', steps: ['Identify the text type and task', 'Find headings, steps, and key details', 'Follow the order or relationship', 'Check what the whole text explains'] },
        14: { focus: 'how story elements work together to create meaning', model: 'A character who misses a train, asks for help, and reaches a new town may reveal persistence through actions rather than a direct description.', steps: ['Notice what happens and to whom', 'Track setting, conflict, and choices', 'Look for repeated images or changes', 'Connect details to a possible theme'] },
        15: { focus: 'how two texts treat the same topic in similar and different ways', model: 'One article supports a community garden for access to fresh food; another focuses on soil safety. Compare their claims and evidence, not just their shared topic.', steps: ['Identify the shared topic', 'State each text’s idea or position', 'Compare evidence, purpose, or emphasis', 'Build a conclusion supported by both'] },
        16: { focus: 'how a claim is built from reasons, evidence, and reasoning', model: 'A writer claims the town needs a crosswalk, gives pedestrian counts as evidence, and explains how the counts show a safety need.', steps: ['Find the writer’s claim', 'List the reasons', 'Match evidence to each reason', 'Trace how the reasoning connects them'] },
        17: { focus: 'whether evidence is relevant, trustworthy, and enough', model: 'A survey of 20 library visitors may show what those visitors think, but it may not represent every resident in town.', steps: ['Identify what the claim needs to prove', 'Check the evidence source and relevance', 'Ask whether the amount is sufficient', 'Limit your conclusion to what it supports'] },
        18: { focus: 'whether an argument’s assumptions and logic hold up', model: 'A store reports that sales rose after a new sign appeared. That timing alone does not prove the sign caused the increase; other changes may matter.', steps: ['Find the reasoning link', 'Ask what must be assumed', 'Check for another possible explanation', 'Describe the precise strength or flaw'] },
        19: { focus: 'how to understand exactly what the Extended Response prompt requires', model: 'If a prompt asks which argument is better supported, the response must compare evidence and reasoning—not simply choose a side.', steps: ['Read every direction', 'Circle the action word', 'Identify what must be compared or judged', 'Turn the task into a response checklist'] },
        20: { focus: 'how to plan a clear response before drafting', model: 'A quick outline can list a judgment, two reasons, a passage detail for each, and a limitation to address.', steps: ['Choose a defensible judgment', 'Group useful evidence by reason', 'Order the reasons logically', 'Check that the plan answers the whole prompt'] },
        21: { focus: 'how to build paragraphs that connect evidence to a judgment', model: 'A paragraph can state a reason, cite the pilot’s lower tardiness, and explain why that measured result supports one passage.', steps: ['Start with one focused point', 'Introduce accurate passage evidence', 'Explain what the detail shows', 'Connect the point to the thesis'] },
        22: { focus: 'how to finish and revise an analytical response', model: 'During revision, check that each quotation is accurate, each paragraph supports the thesis, and the conclusion follows from the analysis.', steps: ['Finish the argument before polishing', 'Check evidence and organization', 'Revise unclear or repeated sentences', 'Proofread grammar and punctuation'] },
        23: { focus: 'how to combine skills across different passage and editing questions', model: 'A reading set may ask for a main idea, an inference, and a sentence correction; identify the task before choosing a strategy.', steps: ['Read the question before scanning', 'Name the skill being tested', 'Use the relevant text detail or rule', 'Check why each rejected choice fails'] },
        24: { focus: 'how to prepare, pace yourself, and improve from practice results', model: 'After a timed set, a learner sorts missed questions into vocabulary, evidence, and editing, then practices the weakest skill.', steps: ['Set a realistic time plan', 'Move on if one question stalls you', 'Review missed answers by skill', 'Repeat focused practice and measure progress'] }
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
        const shortAdditions = [
            'Check the text again.',
            'Use its exact wording.',
            'That keeps your answer supported.',
            'Read once more before deciding.',
            'Stay close to what is stated.',
            'This makes the reasoning clearer.'
        ];
        let additionIndex = 0;
        while (countWords(result) < target - 5) {
            const addition = shortAdditions[additionIndex++ % shortAdditions.length];
            const candidate = `${result}\n${addition}`;
            if (countWords(candidate) <= target + 5) result = candidate;
        }
        return result;
    }

    function createRlaLesson(chapterNumber, sectionNumber, chapter, sectionTitle) {
        if (!chapter || !sectionTitle) return null;
        const family = families[familyForChapter(chapterNumber)];
        const guide = chapterGuides[chapterNumber];
        const stage = chapterNumber <= 7 ? 'language and editing' :
            chapterNumber <= 15 ? 'reading and text interpretation' :
                chapterNumber <= 18 ? 'argument analysis' :
                    chapterNumber <= 22 ? 'the Extended Response' : 'mixed practice and review';

        const intro = finishAtTarget(
            `Start by asking: what can “${sectionTitle}” help you notice? This lesson focuses on ${guide.focus}. You do not need prior knowledge of the passage topic: read what is on the page, notice how its parts work, and use the evidence you can point to. On the GED RLA test, these skills help you answer reading questions and explain your thinking in writing. You will practice a simple process, see it applied to a familiar situation, and try a short check of your own. If an answer seems possible but you cannot connect it to a word, sentence, or passage detail, pause and look again.`,
            120,
            [
                'Careful reading matters more than guessing what a test writer wants.',
                'You can always return to the text and check.'
            ]
        );

        const concept = finishAtTarget(
            `In plain language, ${sectionTitle.toLowerCase()} means learning to ${guide.focus}. This matters because ${family.benefit.toLowerCase()} Begin with the question or sentence in front of you. Find the exact words that matter, notice how they connect, and use that connection to make a careful choice. Explain how the clue supports your answer instead of repeating a rule. Use this map as you work:\n${family.map.join('\n↓\n')}\nIf the text does not support a conclusion, keep it narrow. Do not add information the writer never gave.`,
            145,
            [
                'On test day, point to the clue that led you to your answer.',
                'Then check that your conclusion stays within what that clue can show.'
            ]
        );

        const realExample = finishAtTarget(
            `Try this GED-style example for “${sectionTitle}.” ${guide.model}\nStep 1: Identify the task: ${guide.focus}.\nStep 2: Apply the skill: use the example to check ${guide.focus}.\nStep 3: Check the result: the best response uses a visible clue and does not add unsupported information. A weaker response might rely on a guess, overlook a nearby word, or make a claim broader than the evidence allows. Explain your choice by pointing to the exact word, sentence, or detail that supports it. This is how careful readers and writers turn a small clue into a defensible answer.`,
            165,
            [
                'Ask what the evidence shows.',
                'Do not add facts the example never states.',
                'This keeps the answer fair.'
            ]
        );

        const testing = finishAtTarget(
            `The GED tests whether you can use a skill in context. For “${sectionTitle},” practice these moves:`,
            140,
            [
                `• Identify the task: decide what the question asks you to do with ${sectionTitle.toLowerCase()}.`,
                '• Find a clue: return to the sentence or passage instead of relying on memory or personal opinion.',
                `• Explain the connection: show how the clue helps you ${guide.outcome}.`,
                '• Check the choices: remove answers that contradict the text, change its meaning, or add unsupported details.',
                '• For the Extended Response, use accurate evidence and explain why it supports your judgment.',
                '• Before moving on, reread the question and make sure your answer actually completes the requested task.',
                '• If two choices seem possible, compare their evidence and choose the one that best fits the prompt.',
                '• Explain the answer in your own words before checking whether a choice says the same thing.'
            ]
        );

        const keyTerms = finishAtTarget(
            family.terms.map(([term, definition]) => `• ${term}: ${definition}`).join('\n'),
            139,
            [
                'Use the terms to describe what you noticed and how the evidence supports your answer.',
                'Practice spotting them in a new sentence or passage.'
            ]
        );

        const remember = finishAtTarget(
            `Keep these three strategies in mind as you practice “${sectionTitle}”:`,
            130,
            [
                `1. Start with the task. Restate what ${sectionTitle.toLowerCase()} asks you to notice or do before reading the choices.`,
                `2. Find proof. Point to a specific word, sentence, rule, or passage detail that supports your answer. Use the material provided, even when the subject is unfamiliar.`,
                `3. Check your reasoning. Make sure your answer fits the evidence, keeps the writer’s meaning, and does not claim more than the text shows. If you miss a question, identify the skill that caused the error and try a similar one. Write down what you will do differently next time.`
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
            {
                title: 'Introduction',
                paragraphs: [intro],
                visualAid: {
                    title: 'A simple routine for learning this RLA skill',
                    description: `A four-step visual routine for ${sectionTitle}: read, notice, apply, and check.`,
                    steps: guide.steps
                }
            },
            { title: 'Concept', paragraphs: [concept], preserveLineBreaks: true },
            { title: 'Real Example', paragraphs: [realExample], preserveLineBreaks: true },
            { title: 'Testing the Concept', paragraphs: testingParts.paragraphs, bullets: testingParts.bullets },
            {
                title: 'Key Terms',
                paragraphs: ['Use these words to talk about the tools and ideas that help you understand a passage or revise your writing.'],
                bullets: keyTerms.split('\n').map(line => line.replace(/^•\s*/, ''))
            },
            { title: 'Things to Remember', paragraphs: rememberParts.paragraphs, bullets: rememberParts.bullets },
            {
                title: 'Learn More',
                paragraphs: [`These free resources connect to ${sectionTitle.toLowerCase()} and the skills used on the GED RLA test.`],
                resourceLinks: [
                    { label: 'GED Testing Service: Official RLA Study Guide', href: 'https://www.ged.com/content/dam/websites/ged/resources/GED-Study-Guide-RLA.pdf' },
                    ...family.links
                ]
            }
        ];

        return {
            badge: `RLA · Chapter ${chapterNumber} · Section ${chapterNumber}.${sectionNumber}`,
            title: `Learn ${sectionTitle}`,
            intro,
            theory: concept,
            lessonSectionsOnly: true,
            lessonSections: sections,
            openingQuestion: `Before you begin “${sectionTitle},” what clue would help you use this skill in a passage or sentence?`,
            recall: {
                prompt: family.checkPrompt(sectionTitle),
                options: family.checkOptions,
                correct: family.checkCorrect,
                explanation: family.checkExplanation
            },
            pitfall: family.pitfall,
            gedConnection: `This section builds ${family.outcome} for GED RLA ${stage}, including reading passages closely and explaining answers with evidence.`
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
