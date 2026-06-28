const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// 1. Replace the rendering logic
const oldRender = `                <div class="conclusion-section-box">
                    ${'${'}renderWritingTheoryPanel("conclusion")}

                    <div class="pattern-template-panel conclusion-template-panel">
                        <div class="pattern-column-title">
                            <span>Lý thuyết kết bài</span>
                            <strong>Kết bài mẫu</strong>
                            <small>Chọn mẫu đúng với yêu cầu đề bài.</small>
                        </div>
                        <div class="template-list">
                            ${'${'}pattern.conclusionTemplates.map(renderConclusionTemplate).join("")}
                        </div>
                    </div>
                </div>`;
const newRender = `                <div class="conclusion-section-box">
                    ${'${'}renderWritingTheoryPanel("conclusion")}

                    <div class="pattern-template-panel conclusion-template-panel">
                        <ol class="pattern-step-list">
                            ${'${'}pattern.conclusionSteps ? pattern.conclusionSteps.map(renderPatternStep).join("") : ""}
                        </ol>
                    </div>

                    ${'${'}pattern.conclusionVariants && pattern.conclusionVariants.length > 0 ? \`
                    <div class="pattern-variant-area">
                        ${'${'}pattern.conclusionVariants.map(renderPatternVariant).join("")}
                    </div>
                    \` : ""}
                </div>`;

content = content.replace(oldRender, newRender);

// 2. Update advantages-disadvantages
const advDisOld = `        conclusionTemplates: [
            {
                title: "Hỏi cả advantages + disadvantages",
                text: "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2]. Therefore, both its advantages and disadvantages should be carefully considered."
            },
            {
                title: "Chỉ hỏi advantages / benefits",
                text: "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2]. These advantages show that [topic] can be valuable for [individuals / students / families / society]."
            }
        ],`;
const advDisNew = `        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2].",
                variantCondition: "Chỉ hỏi advantages / benefits",
                variantText: "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2]."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "Therefore, both its advantages and disadvantages should be carefully considered.",
                variantCondition: "Chỉ hỏi advantages / benefits",
                variantText: "These advantages show that [topic] can be valuable for [individuals / students / families / society]."
            }
        ],
        conclusionVariants: [],`;
content = content.replace(advDisOld, advDisNew);

// 3. Update causes-problems-solutions
const cpsOld = `        conclusionTemplates: [
            {
                title: "Causes",
                text: "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2]. Understanding these reasons is important when considering this issue."
            },
            {
                title: "Problems / Effects",
                text: "In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2]. Therefore, greater attention should be paid to its impact on [people / society / the environment]."
            },
            {
                title: "Causes + Effects",
                text: "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2]. Therefore, its causes and impacts should not be overlooked."
            },
            {
                title: "Causes + Solutions",
                text: "In conclusion, [issue] is mainly caused by [cause 1] and [cause 2]. To address this problem, [solution 1] and [solution 2] should be implemented."
            },
            {
                title: "Effects + Solutions",
                text: "In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2]. To minimize these effects, [solution 1] and [solution 2] should be implemented."
            },
            {
                title: "Solutions",
                text: "In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2]. These actions can help protect [people / society / the environment] in the long term."
            }
        ],`;
const cpsNew = `        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, [issue] is a serious problem caused by several factors."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2]."
            }
        ],
        conclusionVariants: [
            {
                title: "Câu 1 linh hoạt theo đề bài",
                lines: [
                    "Causes: In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2].",
                    "Effects/problems: In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2].",
                    "Causes + Effects: In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2].",
                    "Causes + Solutions: In conclusion, [issue] is mainly caused by [cause 1] and [cause 2].",
                    "Effects + Solutions: In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2].",
                    "Solutions: In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2]."
                ]
            },
            {
                title: "Câu 2 linh hoạt theo đề bài",
                lines: [
                    "Causes: Understanding these reasons is important when considering this issue.",
                    "Effects: Therefore, greater attention should be paid to its impact on [people / society / the environment].",
                    "Causes + Effects: Therefore, its causes and impacts should not be overlooked.",
                    "Causes + Solutions: To address this problem, [solution 1] and [solution 2] should be implemented.",
                    "Effects + Solutions: To minimize these effects, [solution 1] and [solution 2] should be implemented.",
                    "Solutions: These actions can help protect [people / society / the environment] in the long term."
                ]
            }
        ],`;
content = content.replace(cpsOld, cpsNew);

// 4. Update argumentative-opinion
const argOld = `        conclusionTemplates: [
            {
                title: "Opinion-based essay",
                text: "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion]. This is because [reason 1] and [reason 2]."
            }
        ],`;
const argNew = `        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion]."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "This is because [reason 1] and [reason 2]."
            }
        ],
        conclusionVariants: [],`;
content = content.replace(argOld, argNew);

// 5. Update discuss-both-views
const dbvOld = `        conclusionTemplates: [
            {
                title: "Discuss both views + opinion",
                text: "In conclusion, both views have their own valid points. However, I believe that [your opinion] because [main reason]."
            },
            {
                title: "Discuss both views, no opinion",
                text: "In conclusion, both views have their own strengths and limitations. Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed]."
            }
        ],`;
const dbvNew = `        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, both views have their own valid points.",
                variantCondition: "No opinion",
                variantText: "In conclusion, both views have their own strengths and limitations."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "However, I believe that [your opinion] because [main reason].",
                variantCondition: "No opinion",
                variantText: "Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed]."
            }
        ],
        conclusionVariants: [],`;
content = content.replace(dbvOld, dbvNew);

// 6. Replace translations
const translationsOld = \`    "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2]. Therefore, both its advantages and disadvantages should be carefully considered.": "Tóm lại, [topic] mang lại một số lợi ích, đặc biệt là [advantage 1] và [advantage 2], nhưng cũng có một vài bất lợi như [disadvantage 1] và [disadvantage 2]. Vì vậy, cả lợi ích và bất lợi của nó đều nên được cân nhắc cẩn thận.",
    "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2]. These advantages show that [topic] can be valuable for [individuals / students / families / society].": "Tóm lại, [topic] có thể mang lại một số lợi ích quan trọng, đặc biệt là [benefit 1] và [benefit 2]. Những lợi ích này cho thấy [topic] có thể có giá trị đối với [individuals / students / families / society].",

    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2]. Understanding these reasons is important when considering this issue.": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra. Việc hiểu những nguyên nhân này là quan trọng khi xem xét vấn đề đó.",
    "In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2]. Therefore, greater attention should be paid to its impact on [people / society / the environment].": "Tóm lại, [issue / trend] có thể gây ra một số tác động đáng kể, đặc biệt là [effect 1] và [effect 2]. Vì vậy, cần chú ý nhiều hơn đến ảnh hưởng của nó đối với [people / society / the environment].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2]. Therefore, its causes and impacts should not be overlooked.": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra, và nó có thể dẫn đến [effect 1] và [effect 2]. Vì vậy, không nên xem nhẹ nguyên nhân và tác động của nó.",
    "In conclusion, [issue] is mainly caused by [cause 1] and [cause 2]. To address this problem, [solution 1] and [solution 2] should be implemented.": "Tóm lại, [issue] chủ yếu do [cause 1] và [cause 2] gây ra. Để giải quyết vấn đề này, [solution 1] và [solution 2] nên được thực hiện.",
    "In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2]. To minimize these effects, [solution 1] and [solution 2] should be implemented.": "Tóm lại, [issue] có thể gây ra một số vấn đề nghiêm trọng, bao gồm [effect 1] và [effect 2]. Để giảm thiểu những tác động này, [solution 1] và [solution 2] nên được thực hiện.",
    "In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2]. These actions can help protect [people / society / the environment] in the long term.": "Tóm lại, có thể thực hiện một số biện pháp để giải quyết [issue], bao gồm [solution 1] và [solution 2]. Những hành động này có thể giúp bảo vệ [people / society / the environment] trong dài hạn.",

    "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion]. This is because [reason 1] and [reason 2].": "Tóm lại, mặc dù [opposing view / drawback] nên được cân nhắc, tôi tin rằng [your opinion]. Điều này là vì [reason 1] và [reason 2].",
    "In conclusion, both views have their own valid points. However, I believe that [your opinion] because [main reason].": "Tóm lại, cả hai quan điểm đều có những điểm hợp lý riêng. Tuy nhiên, tôi tin rằng [your opinion] vì [main reason].",
    "In conclusion, both views have their own strengths and limitations. Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed].": "Tóm lại, cả hai quan điểm đều có điểm mạnh và hạn chế riêng. Việc [view 1] hay [view 2] phù hợp hơn phụ thuộc vào [the situation / individual needs / how it is managed]."\`;

const translationsNew = \`    "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2].": "Tóm lại, [topic] mang lại một số lợi ích, đặc biệt là [advantage 1] và [advantage 2], nhưng cũng có một vài bất lợi như [disadvantage 1] và [disadvantage 2].",
    "Therefore, both its advantages and disadvantages should be carefully considered.": "Vì vậy, cả lợi ích và bất lợi của nó đều nên được cân nhắc cẩn thận.",
    "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2].": "Tóm lại, [topic] có thể mang lại một số lợi ích quan trọng, đặc biệt là [benefit 1] và [benefit 2].",
    "These advantages show that [topic] can be valuable for [individuals / students / families / society].": "Những lợi ích này cho thấy [topic] có thể có giá trị đối với [individuals / students / families / society].",

    "In conclusion, [issue] is a serious problem caused by several factors.": "Tóm lại, [issue] là một vấn đề nghiêm trọng do nhiều yếu tố gây ra.",
    "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2].": "Tuy nhiên, vấn đề này có thể được giải quyết bằng cách thực hiện các biện pháp phù hợp, chẳng hạn như [solution 1] và [solution 2].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2].": "Tóm lại, [issue / trend] có thể gây ra một số tác động đáng kể, đặc biệt là [effect 1] và [effect 2].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra, và nó có thể dẫn đến [effect 1] và [effect 2].",
    "In conclusion, [issue] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2].": "Tóm lại, [issue] có thể gây ra một số vấn đề nghiêm trọng, bao gồm [effect 1] và [effect 2].",
    "In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2].": "Tóm lại, có thể thực hiện một số biện pháp để giải quyết [issue], bao gồm [solution 1] và [solution 2].",
    "Understanding these reasons is important when considering this issue.": "Việc hiểu những nguyên nhân này là quan trọng khi xem xét vấn đề đó.",
    "Therefore, greater attention should be paid to its impact on [people / society / the environment].": "Vì vậy, cần chú ý nhiều hơn đến ảnh hưởng của nó đối với [people / society / the environment].",
    "Therefore, its causes and impacts should not be overlooked.": "Vì vậy, không nên xem nhẹ nguyên nhân và tác động của nó.",
    "To address this problem, [solution 1] and [solution 2] should be implemented.": "Để giải quyết vấn đề này, [solution 1] và [solution 2] nên được thực hiện.",
    "To minimize these effects, [solution 1] and [solution 2] should be implemented.": "Để giảm thiểu những tác động này, [solution 1] và [solution 2] nên được thực hiện.",
    "These actions can help protect [people / society / the environment] in the long term.": "Những hành động này có thể giúp bảo vệ [people / society / the environment] trong dài hạn.",

    "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion].": "Tóm lại, mặc dù [opposing view / drawback] nên được cân nhắc, tôi tin rằng [your opinion].",
    "This is because [reason 1] and [reason 2].": "Điều này là vì [reason 1] và [reason 2].",
    "In conclusion, both views have their own valid points.": "Tóm lại, cả hai quan điểm đều có những điểm hợp lý riêng.",
    "However, I believe that [your opinion] because [main reason].": "Tuy nhiên, tôi tin rằng [your opinion] vì [main reason].",
    "In conclusion, both views have their own strengths and limitations.": "Tóm lại, cả hai quan điểm đều có điểm mạnh và hạn chế riêng.",
    "Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed].": "Việc [view 1] hay [view 2] phù hợp hơn phụ thuộc vào [the situation / individual needs / how it is managed]."\`;

content = content.replace(translationsOld, translationsNew);

fs.writeFileSync('script.js', content, 'utf8');
console.log('Script updated successfully');
