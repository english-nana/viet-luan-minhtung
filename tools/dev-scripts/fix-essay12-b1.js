const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

const index = window.ESSAY_TOPICS.findIndex(e => e.id === "choose-textbooks");
if (index !== -1) {
    const essay = window.ESSAY_TOPICS[index];
    
    // Move data from variants[1] to variants[0]
    const b2Variant = essay.variants[1];
    essay.variants[0] = {
        name: "Level B1",
        vocab: b2Variant.vocab,
        introChunks: b2Variant.introChunks,
        introVn: b2Variant.introVn,
        bodyParagraphs: b2Variant.bodyParagraphs,
        conclusionChunks: b2Variant.conclusionChunks,
        conclusionVn: b2Variant.conclusionVn,
        sampleEssay: essay.variants[0].sampleEssay // keep the sample essay we just added
    };
    
    essay.variants[1] = {
        name: "Level B2"
    };

    essay.currentVariantIndex = 0; // Set default to B1
    
    window.ESSAY_TOPICS[index] = essay;

    const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
    const output = `window.ESSAY_TOPICS = ${jsonStr};`;
    fs.writeFileSync('essays-data.js', output);
    console.log("Moved essay 12 data to Level B1 successfully.");
} else {
    console.log("Essay 12 not found.");
}
