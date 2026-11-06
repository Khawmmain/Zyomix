(function () {
    function createCriticalThinkingSections({ subject, title, relatedTitle, objectives = [], chapterConcept = '', plainText = '' }) {
        const label = subject === 'science' ? 'science idea' : 'Social Studies idea';
        const firstObjective = objectives[0] || `the main idea of ${title}`;
        const secondObjective = objectives[1] || chapterConcept || `how ${title} connects to the chapter`;
        const context = chapterConcept || `how ${title} is used to understand people, events, or evidence`;
        const compareWith = relatedTitle || `another idea from this chapter`;
        const simpleSentences = (plainText.match(/[^.!?]+[.!?]+/g) || [plainText]).map(sentence => sentence.trim()).filter(Boolean);
        const simpleExplanation = [
            simpleSentences[0] || `This section is about ${title.toLowerCase()}.`,
            simpleSentences[1] || (subject === 'science'
                ? (objectives[0] || `Use ${title.toLowerCase()} to reason about scientific evidence.`)
                : `It helps explain ${context}.`)
        ].join(' ');

        return [
            {
                title: '7. Compare & Contrast',
                paragraphs: [`Compare “${title}” with “${compareWith}.” Write three similarities and three differences in your own words. Use the lesson or a reliable source, and make each point specific.`],
                bullets: [
                    `Similarity 1 — Both “${title}” and “${compareWith}”: ______________________________`,
                    `Similarity 2 — Both ideas: ______________________________`,
                    `Similarity 3 — Both ideas: ______________________________`,
                    `Difference 1 — “${title}” __________, while “${compareWith}” __________.`,
                    'Difference 2 — The first idea __________, while the second __________.',
                    'Difference 3 — The first idea __________, while the second __________.'
                ]
            },
            {
                title: '8. Explain Simply',
                paragraphs: [
                    `In plain language: ${simpleExplanation}`,
                    `Now explain this ${label}, “${title},” in your own 2–3 sentences. Start with the explanation above, connect it to ${context}, and replace any technical word you cannot explain.`
                ]
            },
            {
                title: '9. Ask “Why?”',
                paragraphs: [`Begin with this main idea: ${firstObjective} For every main fact or claim in the lesson, ask “Why is this true?” after each answer. Keep asking until you reach an underlying rule or principle, rather than stopping at “because it is.”`],
                bullets: [
                    'Main idea: ______________________________',
                    'Why is that true? ______________________________',
                    'Why is that reason true? ______________________________',
                    'What basic evidence or principle explains it? ______________________________',
                    `Core principle in your own words: ${secondObjective}`
                ]
            },
            {
                title: '10. Map Connections',
                paragraphs: [`Connect something you already know to “${title}.” Follow the arrows and add a real example or detail from this section to each blank.`],
                visualAid: {
                    title: `Connection map for ${title}`,
                    description: `A sequence connecting a familiar idea to ${title}, evidence, and a conclusion.`,
                    steps: [
                        'Something I already know: ______',
                        `New idea: ${title}`,
                        'Example, source, or evidence: ______',
                        `What the connection helps explain: ${secondObjective}`
                    ]
                }
            },
            {
                title: '11. Find Failure Points',
                paragraphs: [
                    `Find one situation where a rule, explanation, or conclusion about “${title}” would not work as stated. For example, look for a missing condition, a different context, weak evidence, or an exception.`,
                    'Describe the situation, name the condition that changes, and explain what extra evidence or qualification is needed. Do not treat one exception as proof that the whole idea is always false.'
                ]
            },
            {
                title: '12. Test Without Looking',
                paragraphs: [
                    `Close or cover your notes. From memory, write everything important you can about “${title},” including how it connects to ${context}.`,
                    `Then reopen your notes and check whether you included: ${firstObjective}; ${secondObjective}; and one example or piece of evidence. Add what you missed in a different color or a new line.`
                ]
            }
        ];
    }

    window.createCriticalThinkingSections = createCriticalThinkingSections;
})();
