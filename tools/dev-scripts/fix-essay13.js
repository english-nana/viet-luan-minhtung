const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

let essay = window.ESSAY_TOPICS[window.ESSAY_TOPICS.length - 1];

// Fix 1: Update title
essay.title = "13. Tình bạn trong xã hội hiện đại";

// Fix 3: Restructure variant B2
let b2 = essay.variants[1];
delete b2.outline;

b2.introChunks = [
    { en: "Friendship", vn: "Tình bạn" },
    { en: "is often considered", vn: "thường được xem là" },
    { en: "one of", vn: "một trong những" },
    { en: "the most valuable parts of life.", vn: "điều quý giá nhất trong cuộc sống." },
    { en: "However,", vn: "Tuy nhiên," },
    { en: "many people believe that", vn: "nhiều người cho rằng" },
    { en: "maintaining true friendship", vn: "việc duy trì một tình bạn chân thành" },
    { en: "has become", vn: "đã trở nên" },
    { en: "more difficult", vn: "khó khăn hơn" },
    { en: "in modern society.", vn: "trong xã hội hiện đại." },
    { en: "This essay will", vn: "Bài luận này sẽ" },
    { en: "discuss", vn: "thảo luận về" },
    { en: "the importance of friendship,", vn: "tầm quan trọng của tình bạn," },
    { en: "the challenges people face", vn: "những thách thức mà con người gặp phải" },
    { en: "in keeping friendships today,", vn: "trong việc duy trì các mối quan hệ bạn bè ngày nay," },
    { en: "and explain why", vn: "đồng thời giải thích lý do tại sao" },
    { en: "I believe", vn: "tôi cho rằng" },
    { en: "modern life", vn: "cuộc sống hiện đại" },
    { en: "makes friendship weaker.", vn: "đang làm cho tình bạn trở nên yếu đi." }
];

b2.introVn = "Tình bạn thường được xem là một trong những điều quý giá nhất trong cuộc sống. Tuy nhiên, nhiều người cho rằng việc duy trì một tình bạn chân thành đã trở nên khó khăn hơn trong xã hội hiện đại. Bài luận này sẽ thảo luận về tầm quan trọng của tình bạn, những thách thức mà con người gặp phải trong việc duy trì các mối quan hệ bạn bè ngày nay, đồng thời giải thích lý do tại sao tôi cho rằng cuộc sống hiện đại đang làm cho tình bạn trở nên yếu đi.";

b2.bodyParagraphs = [
    {
        title: "Thân bài 1",
        hintGroups: [
            {
                label: "Topic sentence",
                hints: [
                    {
                        en: "On the one hand, / there are several reasons why / friendship / is essential / in our lives.",
                        vn: "Một mặt, / có một số lý do tại sao / tình bạn / vô cùng quan trọng / trong cuộc sống của chúng ta.",
                        isTopic: true
                    }
                ]
            },
            {
                label: "Ý 1",
                hints: [
                    { en: "provide emotional support", vn: "cung cấp sự hỗ trợ tinh thần" },
                    { en: "face problems (at school + work + in their personal lives)", vn: "đối mặt với vấn đề (ở trường + nơi làm việc + trong cuộc sống cá nhân)" },
                    { en: "share their feelings with trusted friends + receive (advice + encouragement)", vn: "chia sẻ cảm xúc với bạn bè tin cậy + nhận (lời khuyên + sự động viên)" }
                ]
            },
            {
                label: "Ý 2",
                hints: [
                    { en: "reduce feelings of loneliness and stress", vn: "giảm cảm giác cô đơn và căng thẳng" },
                    { en: "face difficulties (their studies + work + personal lives)", vn: "đối mặt với khó khăn (trong học tập + công việc + cuộc sống cá nhân)" },
                    { en: "talk to their friends about their problems", vn: "tâm sự với bạn bè về vấn đề của họ" },
                    { en: "listen to them + offer advice + provide emotional support", vn: "lắng nghe họ + đưa ra lời khuyên + cung cấp hỗ trợ tinh thần" },
                    { en: "feel understood + less isolated", vn: "cảm thấy được thấu hiểu + bớt cô lập hơn" },
                    { en: "cope with stress", vn: "đối phó với căng thẳng" }
                ]
            }
        ]
    },
    {
        title: "Thân bài 2",
        hintGroups: [
            {
                label: "Topic sentence",
                hints: [
                    {
                        en: "Despite these benefits, / maintaining friendship / has become / more challenging / in modern society.",
                        vn: "Mặc dù những lợi ích trên, / duy trì tình bạn / đã và đang trở nên / khó khăn hơn / trong xã hội hiện đại.",
                        isTopic: true
                    }
                ]
            },
            {
                label: "Ý 1",
                hints: [
                    { en: "busy with work, study, and family responsibilities", vn: "bận rộn với công việc, học tập, và trách nhiệm gia đình" },
                    { en: "do not have time to meet their friends in person", vn: "không có thời gian gặp gỡ bạn bè trực tiếp" },
                    { en: "weaker emotional connection", vn: "kết nối cảm xúc yếu đi" }
                ]
            },
            {
                label: "Ý 2",
                hints: [
                    { en: "maintained through social media", vn: "được duy trì thông qua mạng xã hội" },
                    { en: "technology (easier communication) >< less meaningful than face-to-face conversations", vn: "công nghệ (giao tiếp dễ dàng hơn) >< ít ý nghĩa hơn so với trò chuyện trực tiếp" },
                    { en: "some relationships => become weaker over time", vn: "một số mối quan hệ => trở nên yếu đi theo thời gian" }
                ]
            }
        ]
    },
    {
        title: "Thân bài 3",
        hintGroups: [
            {
                label: "Topic sentence",
                hints: [
                    {
                        en: "In my opinion, / modern life / generally / makes friendship / weaker.",
                        vn: "Theo quan điểm của tôi, / đời sống hiện đại / nhìn chung / khiến tình bạn / trở nên yếu đi.",
                        isTopic: true
                    }
                ]
            },
            {
                label: "Ý 1",
                hints: [
                    { en: "digital technology => stay connected", vn: "công nghệ kỹ thuật số => giữ liên lạc" },
                    { en: "cannot fully replace the emotional connection", vn: "không thể hoàn toàn thay thế sự kết nối cảm xúc" },
                    { en: "many friendships => less close than they were in the past", vn: "nhiều tình bạn => bớt thân thiết hơn so với trước đây" }
                ]
            }
        ]
    }
];

b2.conclusionChunks = [
    { en: "In conclusion,", vn: "Tóm lại," },
    { en: "friendship", vn: "tình bạn" },
    { en: "plays an important role", vn: "đóng vai trò quan trọng" },
    { en: "in people’s lives.", vn: "trong cuộc sống của con người." },
    { en: "It", vn: "Nó" },
    { en: "provides emotional support,", vn: "mang lại sự hỗ trợ về mặt tinh thần," },
    { en: "reduces loneliness,", vn: "giúp giảm cảm giác cô đơn" },
    { en: "and encourages personal development.", vn: "và thúc đẩy sự phát triển của mỗi cá nhân." },
    { en: "However,", vn: "Tuy nhiên," },
    { en: "busy lifestyles", vn: "lối sống bận rộn" },
    { en: "and the growing reliance on online communication", vn: "và sự phụ thuộc ngày càng nhiều vào giao tiếp trực tuyến" },
    { en: "make it more difficult to maintain strong friendships.", vn: "khiến việc duy trì những tình bạn bền chặt trở nên khó khăn hơn." },
    { en: "For these reasons,", vn: "Vì những lý do này," },
    { en: "I believe that", vn: "tôi cho rằng" },
    { en: "modern life", vn: "cuộc sống hiện đại" },
    { en: "tends to", vn: "có xu hướng" },
    { en: "weaken friendship.", vn: "làm suy yếu tình bạn." }
];

b2.conclusionVn = "Tóm lại, tình bạn đóng vai trò quan trọng trong cuộc sống của con người. Nó mang lại sự hỗ trợ về mặt tinh thần, giúp giảm cảm giác cô đơn và thúc đẩy sự phát triển của mỗi cá nhân. Tuy nhiên, lối sống bận rộn và sự phụ thuộc ngày càng nhiều vào giao tiếp trực tuyến khiến việc duy trì những tình bạn bền chặt trở nên khó khăn hơn. Vì những lý do này, tôi cho rằng cuộc sống hiện đại có xu hướng làm suy yếu tình bạn.";

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Successfully fixed essay 13');
