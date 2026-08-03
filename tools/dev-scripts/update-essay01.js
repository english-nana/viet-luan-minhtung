const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

let essay = window.ESSAY_TOPICS[0];

essay.currentVariantIndex = 1; // Default to B2

essay.variants = [
    {
        name: "Level B1",
        vocab: essay.vocab,
        introChunks: essay.introChunks,
        introVn: essay.introVn,
        bodyParagraphs: essay.bodyParagraphs,
        conclusionChunks: essay.conclusionChunks,
        conclusionVn: essay.conclusionVn,
        sampleEssay: essay.sampleEssay
    },
    {
        name: "Level B2",
        vocab: [
            { en: "a musical instrument", vn: "một loại nhạc cụ" },
            { en: "cognitive skills", vn: "kỹ năng nhận thức" },
            { en: "thinking skills", vn: "kỹ năng tư duy" },
            { en: "coordinate", vn: "phối hợp" },
            { en: "simultaneously", vn: "đồng thời" },
            { en: "concentration", vn: "sự tập trung" },
            { en: "have a positive impact on", vn: "có tác động tích cực đến" },
            { en: "mental health", vn: "sức khỏe tinh thần" },
            { en: "take a break", vn: "nghỉ ngơi" },
            { en: "academic pressure", vn: "áp lực học tập" },
            { en: "temporarily forget about their studies", vn: "tạm thời quên đi việc học" },
            { en: "time-consuming", vn: "tốn nhiều thời gian" },
            { en: "regularly", vn: "thường xuyên" },
            { en: "other important activities", vn: "các hoạt động quan trọng khác" },
            { en: "pay for", vn: "trả tiền cho" },
            { en: "music lessons", vn: "các bài học nhạc" },
            { en: "the piano", vn: "đàn piano" },
            { en: "the violin", vn: "đàn violin" },
            { en: "a huge amount of money", vn: "một số tiền lớn" },
            { en: "place a heavy financial burden", vn: "đặt gánh nặng tài chính lớn" },
            { en: "low-income families", vn: "các gia đình thu nhập thấp" }
        ],
        introChunks: essay.introChunks,
        introVn: essay.introVn,
        bodyParagraphs: [
            {
                title: "Đoạn 1: Lợi ích (Advantages)",
                hintGroups: [
                    {
                        label: "Topic sentence",
                        hints: [
                            { en: "Một mặt, / có một số / lợi ích của việc học một nhạc cụ.", vn: "On the one hand, / there are several / benefits of learning a musical instrument.", isTopic: true }
                        ]
                    },
                    {
                        label: "Lợi ích 1",
                        hints: [
                            { en: "develop their cognitive and thinking skills", vn: "phát triển kỹ năng nhận thức và tư duy của chúng" },
                            { en: "coordinate their eyes and hands simultaneously", vn: "phối hợp mắt và tay đồng thời" },
                            { en: "improve their concentration and memory", vn: "cải thiện sự tập trung và trí nhớ của chúng" }
                        ]
                    },
                    {
                        label: "Lợi ích 2",
                        hints: [
                            { en: "have a positive impact on mental health", vn: "có tác động tích cực đến sức khỏe tinh thần" },
                            { en: "relax + take a break from academic pressure", vn: "thư giãn + nghỉ ngơi khỏi áp lực học tập" },
                            { en: "enjoy playing the guitar or the piano with their friends after school", vn: "thích chơi đàn guitar hoặc piano cùng bạn bè sau giờ học" },
                            { en: "reduce stress + temporarily forget about their studies", vn: "giảm căng thẳng + tạm thời quên đi việc học" },
                            { en: "feel happier and more motivated", vn: "cảm thấy vui vẻ và có động lực hơn" }
                        ]
                    }
                ]
            },
            {
                title: "Đoạn 2: Bất lợi (Disadvantages)",
                hintGroups: [
                    {
                        label: "Topic sentence",
                        hints: [
                            { en: "Mặt khác, / việc học chơi nhạc cụ / cũng đi kèm với / một số bất lợi.", vn: "On the other hand, / learning to play musical instruments / also comes with / some disadvantages.", isTopic: true }
                        ]
                    },
                    {
                        label: "Bất lợi 1",
                        hints: [
                            { en: "very time-consuming", vn: "rất tốn thời gian" },
                            { en: "In order to become good at an instrument", vn: "Để giỏi một loại nhạc cụ" },
                            { en: "practice regularly + spend many hours improving their skills", vn: "thực hành thường xuyên + dành nhiều giờ để cải thiện kỹ năng của chúng" },
                            { en: "have less time for studying or participating in other important activities", vn: "có ít thời gian hơn cho việc học hoặc tham gia vào các hoạt động quan trọng khác" }
                        ]
                    },
                    {
                        label: "Bất lợi 2",
                        hints: [
                            { en: "the high cost of learning an instrument", vn: "chi phí cao cho việc học một nhạc cụ" },
                            { en: "buy the instrument itself (very expensive) + pay for music lessons", vn: "mua chính loại nhạc cụ đó (rất đắt) + trả tiền cho các bài học nhạc" },
                            { en: "the piano and violin", vn: "đàn piano và đàn violin" },
                            { en: "cost a huge amount of money", vn: "tốn một số tiền lớn" },
                            { en: "place a heavy financial burden on students", vn: "đặt gánh nặng tài chính lớn lên học sinh" },
                            { en: "low-income families", vn: "các gia đình có thu nhập thấp" }
                        ]
                    }
                ]
            }
        ],
        conclusionChunks: essay.conclusionChunks,
        conclusionVn: essay.conclusionVn
    }
];

delete essay.vocab;
delete essay.introChunks;
delete essay.introVn;
delete essay.bodyParagraphs;
delete essay.conclusionChunks;
delete essay.conclusionVn;
delete essay.sampleEssay;

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Updated essays-data.js with Level B2 variants for essay 01');
