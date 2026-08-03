const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const replacements = [
    [
        /"In conclusion, \[topic\] offers several benefits, particularly \[advantage 1\] and \[advantage 2\], but it also has some drawbacks, such as \[disadvantage 1\] and \[disadvantage 2\]\. Therefore, both its advantages and disadvantages should be carefully considered\.": ".*",/,
        \`"In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2].": "Tóm lại, [topic] mang lại một số lợi ích, đặc biệt là [advantage 1] và [advantage 2], nhưng cũng có một vài bất lợi như [disadvantage 1] và [disadvantage 2].",
    "Therefore, both its advantages and disadvantages should be carefully considered.": "Vì vậy, cả lợi ích và bất lợi của nó đều nên được cân nhắc cẩn thận.",\`
    ],
    [
        /"In conclusion, \[topic\] can bring several important benefits, particularly \[benefit 1\] and \[benefit 2\]\. These advantages show that \[topic\] can be valuable for \[individuals \/ students \/ families \/ society\]\.": ".*",/,
        \`"In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2].": "Tóm lại, [topic] có thể mang lại một số lợi ích quan trọng, đặc biệt là [benefit 1] và [benefit 2].",
    "These advantages show that [topic] can be valuable for [individuals / students / families / society].": "Những lợi ích này cho thấy [topic] có thể có giá trị đối với [individuals / students / families / society].",\`
    ],
    [
        /"In conclusion, \[issue \/ trend\] is mainly caused by \[cause 1\] and \[cause 2\]\. Understanding these reasons is important when considering this issue\.": ".*",/,
        \`"In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "Understanding these reasons is important when considering this issue.": "Việc hiểu những nguyên nhân này là quan trọng khi xem xét vấn đề đó.",\`
    ],
    [
        /"In conclusion, \[issue \/ trend\] can have several significant effects, particularly \[effect 1\] and \[effect 2\]\. Therefore, greater attention should be paid to its impact on \[people \/ society \/ the environment\]\.": ".*",/,
        \`"In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2].": "Tóm lại, [issue / trend] có thể gây ra một số tác động đáng kể, đặc biệt là [effect 1] và [effect 2].",
    "Therefore, greater attention should be paid to its impact on [people / society / the environment].": "Vì vậy, cần chú ý nhiều hơn đến ảnh hưởng của nó đối với [people / society / the environment].",\`
    ],
    [
        /"In conclusion, \[issue \/ trend\] is mainly caused by \[cause 1\] and \[cause 2\], and it can lead to \[effect 1\] and \[effect 2\]\. Therefore, its causes and impacts should not be overlooked\.": ".*",/,
        \`"In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra, và nó có thể dẫn đến [effect 1] và [effect 2].",
    "Therefore, its causes and impacts should not be overlooked.": "Vì vậy, không nên xem nhẹ nguyên nhân và tác động của nó.",\`
    ],
    [
        /"In conclusion, \[issue\] is mainly caused by \[cause 1\] and \[cause 2\]\. To address this problem, \[solution 1\] and \[solution 2\] should be implemented\.": ".*",/,
        \`"In conclusion, [issue] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "To address this problem, [solution 1] and [solution 2] should be implemented.": "Để giải quyết vấn đề này, [solution 1] và [solution 2] nên được thực hiện.",\`
    ],
    [
        /"In conclusion, \[issue\] can cause several serious problems, including \[effect 1\] and \[effect 2\]\. To minimize these effects, \[solution 1\] and \[solution 2\] should be implemented\.": ".*",/,
        \`"In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2].": "Tóm lại, [issue] có thể gây ra một số vấn đề nghiêm trọng, bao gồm [effect 1] và [effect 2].",
    "To minimize these effects, [solution 1] and [solution 2] should be implemented.": "Để giảm thiểu những tác động này, [solution 1] và [solution 2] nên được thực hiện.",\`
    ],
    [
        /"In conclusion, several measures can be taken to address \[issue\], including \[solution 1\] and \[solution 2\]\. These actions can help protect \[people \/ society \/ the environment\] in the long term\.": ".*",/,
        \`"In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2].": "Tóm lại, có thể thực hiện một số biện pháp để giải quyết [issue], bao gồm [solution 1] và [solution 2].",
    "These actions can help protect [people / society / the environment] in the long term.": "Những hành động này có thể giúp bảo vệ [people / society / the environment] trong dài hạn.",\`
    ],
    [
        /"In conclusion, although \[opposing view \/ drawback\] should be considered, I believe that \[your opinion\]\. This is because \[reason 1\] and \[reason 2\]\.": ".*",/,
        \`"In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion].": "Tóm lại, mặc dù [opposing view / drawback] nên được cân nhắc, tôi tin rằng [your opinion].",
    "This is because [reason 1] and [reason 2].": "Điều này là vì [reason 1] và [reason 2].",\`
    ],
    [
        /"In conclusion, both views have their own valid points\. However, I believe that \[your opinion\] because \[main reason\]\.": ".*",/,
        \`"In conclusion, both views have their own valid points.": "Tóm lại, cả hai quan điểm đều có những điểm hợp lý riêng.",
    "However, I believe that [your opinion] because [main reason].": "Tuy nhiên, tôi tin rằng [your opinion] vì [main reason].",\`
    ],
    [
        /"In conclusion, both views have their own strengths and limitations\. Whether \[view 1\] or \[view 2\] is more suitable depends on \[the situation \/ individual needs \/ how it is managed\]\.": ".*"/,
        \`"In conclusion, both views have their own strengths and limitations.": "Tóm lại, cả hai quan điểm đều có điểm mạnh và hạn chế riêng.",
    "Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed].": "Việc [view 1] hay [view 2] phù hợp hơn phụ thuộc vào [the situation / individual needs / how it is managed]."\`
    ],
    [
        /"In conclusion, \[issue\] is a serious problem caused by several factors\."/g,
        \`"In conclusion, [issue] is a serious problem caused by several factors.": "Tóm lại, [issue] là một vấn đề nghiêm trọng do nhiều yếu tố gây ra.",\n    "In conclusion, [issue] is a serious problem caused by several factors."\` // Add if missing
    ],
    [
        /"However, this issue can be addressed by implementing appropriate measures, such as \[solution 1\] and \[solution 2\]\."/g,
        \`"However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2].": "Tuy nhiên, vấn đề này có thể được giải quyết bằng cách thực hiện các biện pháp phù hợp, chẳng hạn như [solution 1] và [solution 2].",\n    "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2]."\` // Add if missing
    ]
];

replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
});

// Since the last two are just additions, let's inject them explicitly if they aren't there yet
if (!content.includes('"In conclusion, [issue] is a serious problem caused by several factors.":')) {
    content = content.replace(
        /"In conclusion, \\\[topic\\\] offers several benefits/,
        \`"In conclusion, [issue] is a serious problem caused by several factors.": "Tóm lại, [issue] là một vấn đề nghiêm trọng do nhiều yếu tố gây ra.",\n    "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2].": "Tuy nhiên, vấn đề này có thể được giải quyết bằng cách thực hiện các biện pháp phù hợp, chẳng hạn như [solution 1] và [solution 2].",\n    "In conclusion, [topic] offers several benefits\`
    );
}

fs.writeFileSync('script.js', content, 'utf8');
console.log('Translations updated successfully with Regex');
