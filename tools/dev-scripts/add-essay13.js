const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

const newEssay = {
    id: "friendship",
    title: "13. Tình bạn",
    summary: "Bài luận về tầm quan trọng của tình bạn và những thách thức trong việc duy trì tình bạn trong xã hội hiện đại.",
    isMatchingVocab: true,
    meta: {
        category: "Xã hội",
        taskType: "Opinion",
        level: "B1-B2",
        estimatedMinutes: 40
    },
    prompt: [
        {
            en: "Read the following quote and discuss:",
            vn: "Đọc trích dẫn sau và thảo luận:"
        },
        {
            en: "“Friendship is one of the most valuable things in life. However, some people believe that maintaining true friendship is becoming more difficult in modern society.”",
            vn: "“Tình bạn là một trong những điều quý giá nhất trong cuộc sống. Tuy nhiên, một số người tin rằng việc duy trì tình bạn chân thành đang trở nên khó khăn hơn trong xã hội hiện đại.”"
        },
        {
            en: "Write an essay discussing:",
            vn: "Viết một bài luận thảo luận về:"
        },
        {
            en: "- The importance of friendship",
            vn: "- Tầm quan trọng của tình bạn"
        },
        {
            en: "- The challenges of keeping friendship today",
            vn: "- Những thách thức của việc duy trì tình bạn ngày nay"
        },
        {
            en: "- Your opinion about whether modern life makes friendship stronger or weaker",
            vn: "- Ý kiến của bạn về việc liệu cuộc sống hiện đại làm cho tình bạn mạnh mẽ hơn hay yếu đi"
        }
    ],
    introEnExpectedLength: 45,
    conclusionEnExpectedLength: 45,
    currentVariantIndex: 1,
    variants: [
        {
            name: "Level B1",
            vocab: [],
            outline: [],
            sampleEssay: {
                paragraphs: []
            }
        },
        {
            name: "Level B2",
            vocab: [
                { en: "parts of life", vn: "phần của cuộc sống" },
                { en: "maintain", vn: "duy trì" },
                { en: "friendship", vn: "tình bạn" },
                { en: "modern society", vn: "xã hội hiện đại" },
                { en: "emotional support", vn: "sự hỗ trợ về mặt tinh thần" },
                { en: "during difficult times", vn: "trong những lúc khó khăn" },
                { en: "personal lives", vn: "cuộc sống cá nhân" },
                { en: "share their feelings", vn: "chia sẻ cảm xúc của họ" },
                { en: "trusted friends", vn: "những người bạn đáng tin cậy" },
                { en: "encouragement", vn: "sự động viên" },
                { en: "feelings of loneliness", vn: "cảm giác cô đơn" },
                { en: "face difficulties", vn: "đối mặt với khó khăn" },
                { en: "feel understood", vn: "cảm thấy được thấu hiểu" },
                { en: "feel isolated", vn: "cảm thấy bị cô lập" },
                { en: "cope with", vn: "đối phó với" },
                { en: "family responsibilities", vn: "trách nhiệm gia đình" },
                { en: "in person", vn: "trực tiếp" },
                { en: "resulting in", vn: "dẫn đến" },
                { en: "emotional connection", vn: "sự kết nối về mặt cảm xúc" },
                { en: "online interactions", vn: "các tương tác trực tuyến" },
                { en: "face-to-face conversations", vn: "các cuộc trò chuyện trực tiếp" },
                { en: "over time", vn: "theo thời gian" },
                { en: "digital technology", vn: "công nghệ kỹ thuật số" },
                { en: "stay connected", vn: "giữ liên lạc" },
                { en: "the growing reliance on", vn: "sự phụ thuộc ngày càng nhiều vào" }
            ],
            outline: [
                {
                    title: "Mở bài",
                    ideas: [
                        { en: "Friendship is often considered one of the most valuable parts of life.", vn: "Tình bạn thường được xem là một trong những điều quý giá nhất trong cuộc sống." },
                        { en: "However, many people believe that maintaining true friendship has become more difficult in modern society.", vn: "Tuy nhiên, nhiều người cho rằng việc duy trì một tình bạn chân thành đã trở nên khó khăn hơn trong xã hội hiện đại." },
                        { en: "This essay will discuss the importance of friendship, the challenges people face in keeping friendships today, and explain why I believe modern life makes friendship weaker.", vn: "Bài luận này sẽ thảo luận về tầm quan trọng của tình bạn, những thách thức mà con người gặp phải trong việc duy trì các mối quan hệ bạn bè ngày nay, đồng thời giải thích lý do tại sao tôi cho rằng cuộc sống hiện đại đang làm cho tình bạn trở nên yếu đi." }
                    ]
                },
                {
                    title: "Thân bài 1",
                    ideas: [
                        { en: "Topic sentence: On the one hand, there are several reasons why friendship is essential in our lives.", vn: "Một mặt, có một số lý do tại sao tình bạn vô cùng quan trọng trong cuộc sống của chúng ta." },
                        { en: "provide emotional support => face problems (at school + work + in their personal lives) => share their feelings with trusted friends + receive (advice + encouragement)", vn: "cung cấp sự hỗ trợ tinh thần => đối mặt với vấn đề (ở trường + nơi làm việc + trong cuộc sống cá nhân) => chia sẻ cảm xúc với bạn bè tin cậy + nhận (lời khuyên + sự động viên)" },
                        { en: "reduce feelings of loneliness and stress => face difficulties (their studies + work + personal lives) => talk to their friends about their problems => listen to them + offer advice + provide emotional support => feel understood + less isolated => cope with stress", vn: "giảm cảm giác cô đơn và căng thẳng => đối mặt với khó khăn (trong học tập + công việc + cuộc sống cá nhân) => tâm sự với bạn bè về vấn đề của họ => lắng nghe họ + đưa ra lời khuyên + cung cấp hỗ trợ tinh thần => cảm thấy được thấu hiểu + bớt cô lập hơn => đối phó với căng thẳng" }
                    ]
                },
                {
                    title: "Thân bài 2",
                    ideas: [
                        { en: "Topic sentence: Despite these benefits, maintaining friendship has become more challenging in modern society.", vn: "Mặc dù những lợi ích trên, duy trì tình bạn đã và đang trở nên khó khăn hơn trong xã hội hiện đại." },
                        { en: "busy with work, study, and family responsibilities => do not have time to meet their friends in person => weaker emotional connection", vn: "bận rộn với công việc, học tập, và trách nhiệm gia đình => không có thời gian gặp gỡ bạn bè trực tiếp => kết nối cảm xúc yếu đi" },
                        { en: "maintained through social media => technology (easier communication) >< less meaningful than face-to-face conversations => some relationships => become weaker over time", vn: "được duy trì thông qua mạng xã hội => công nghệ (giao tiếp dễ dàng hơn) >< ít ý nghĩa hơn so với trò chuyện trực tiếp => một số mối quan hệ => trở nên yếu đi theo thời gian" }
                    ]
                },
                {
                    title: "Thân bài 3",
                    ideas: [
                        { en: "Topic sentence: In my opinion, modern life generally makes friendship weaker.", vn: "Theo quan điểm của tôi, đời sống hiện đại nhìn chung khiến tình bạn trở nên yếu đi." },
                        { en: "digital technology => stay connected => cannot fully replace the emotional connection => many friendships => less close than they were in the past", vn: "công nghệ kỹ thuật số => giữ liên lạc => không thể hoàn toàn thay thế sự kết nối cảm xúc => nhiều tình bạn => bớt thân thiết hơn so với trước đây" }
                    ]
                },
                {
                    title: "Kết bài",
                    ideas: [
                        { en: "In conclusion, friendship plays an important role in people’s lives.", vn: "Tóm lại, tình bạn đóng vai trò quan trọng trong cuộc sống của con người." },
                        { en: "It provides emotional support, reduces loneliness, and encourages personal development.", vn: "Nó mang lại sự hỗ trợ về mặt tinh thần, giúp giảm cảm giác cô đơn và thúc đẩy sự phát triển của mỗi cá nhân." },
                        { en: "However, busy lifestyles and the growing reliance on online communication make it more difficult to maintain strong friendships.", vn: "Tuy nhiên, lối sống bận rộn và sự phụ thuộc ngày càng nhiều vào giao tiếp trực tuyến khiến việc duy trì những tình bạn bền chặt trở nên khó khăn hơn." },
                        { en: "For these reasons, I believe that modern life tends to weaken friendship.", vn: "Vì những lý do này, tôi cho rằng cuộc sống hiện đại có xu hướng làm suy yếu tình bạn." }
                    ]
                }
            ],
            sampleEssay: {
                paragraphs: [
                    [
                        { en: "Friendship is often considered one of the most valuable parts of life.", vn: "Tình bạn thường được xem là một trong những điều quý giá nhất trong cuộc sống.", isRed: false },
                        { en: "However, many people believe that maintaining true friendship has become more difficult in modern society.", vn: "Tuy nhiên, nhiều người cho rằng việc duy trì một tình bạn chân thành đã trở nên khó khăn hơn trong xã hội hiện đại.", isRed: false },
                        { en: "This essay will discuss the importance of friendship, the challenges people face in keeping friendships today, and explain why I believe modern life makes friendship weaker.", vn: "Bài luận này sẽ thảo luận về tầm quan trọng của tình bạn, những thách thức mà con người gặp phải trong việc duy trì các mối quan hệ bạn bè ngày nay, đồng thời giải thích lý do tại sao tôi cho rằng cuộc sống hiện đại đang làm cho tình bạn trở nên yếu đi.", isRed: true }
                    ],
                    [
                        { en: "On the one hand, there are several reasons why friendship is essential in our lives.", vn: "Một mặt, có một số lý do tại sao tình bạn vô cùng quan trọng trong cuộc sống của chúng ta.", isRed: true },
                        { en: "First of all, friends provide emotional support during difficult times.", vn: "Trước hết, bạn bè mang lại sự hỗ trợ về mặt tinh thần trong những lúc khó khăn.", isRed: false },
                        { en: "For example, when people face problems at school, work, or in their personal lives, they can share their feelings with trusted friends and receive advice or encouragement.", vn: "Ví dụ, khi con người gặp khó khăn ở trường học, nơi làm việc hoặc trong cuộc sống cá nhân, họ có thể chia sẻ cảm xúc với những người bạn đáng tin cậy và nhận được lời khuyên hoặc sự động viên.", isRed: false },
                        { en: "In addition, friendship helps reduce feelings of loneliness and stress.", vn: "Ngoài ra, tình bạn giúp giảm bớt cảm giác cô đơn và căng thẳng.", isRed: false },
                        { en: "When people face difficulties in their studies, work, or personal lives, they can talk to their friends about their problems.", vn: "Khi con người gặp khó khăn trong học tập, công việc hoặc cuộc sống cá nhân, họ có thể nói chuyện với bạn bè về vấn đề của mình.", isRed: false },
                        { en: "Friends can listen to them, offer advice, and provide emotional support.", vn: "Bạn bè có thể lắng nghe, đưa ra lời khuyên và hỗ trợ về mặt tinh thần.", isRed: false },
                        { en: "As a result, people feel understood and less isolated, which helps them cope with stress more effectively.", vn: "Kết quả là, mọi người cảm thấy được thấu hiểu và bớt bị cô lập, điều này giúp họ đối phó với căng thẳng hiệu quả hơn.", isRed: false }
                    ],
                    [
                        { en: "Despite these benefits, maintaining friendship has become more challenging in modern society.", vn: "Bất chấp những lợi ích này, việc duy trì tình bạn đã trở nên thách thức hơn trong xã hội hiện đại.", isRed: true },
                        { en: "One major reason is that people are often busy with work, study, and family responsibilities.", vn: "Một lý do chính là mọi người thường xuyên bận rộn với công việc, học tập và trách nhiệm gia đình.", isRed: false },
                        { en: "Consequently, many people do not have time to meet their friends in person, resulting in weaker emotional connection.", vn: "Hậu quả là, nhiều người không có thời gian gặp gỡ bạn bè trực tiếp, dẫn đến sự kết nối về mặt cảm xúc yếu đi.", isRed: false },
                        { en: "Another challenge is that many friendships are now maintained through social media.", vn: "Một thách thức khác là nhiều tình bạn hiện nay được duy trì qua mạng xã hội.", isRed: false },
                        { en: "Although technology makes communication easier, online interactions are often less meaningful than face-to-face conversations.", vn: "Mặc dù công nghệ giúp cho việc giao tiếp dễ dàng hơn, những tương tác trực tuyến thường ít ý nghĩa hơn các cuộc trò chuyện trực tiếp.", isRed: false },
                        { en: "As a result, some relationships become weaker over time.", vn: "Kết quả là, một số mối quan hệ trở nên yếu đi theo thời gian.", isRed: false }
                    ],
                    [
                        { en: "In my opinion, modern life generally makes friendship weaker.", vn: "Theo quan điểm của tôi, cuộc sống hiện đại nhìn chung làm tình bạn yếu đi.", isRed: true },
                        { en: "While digital technology allows people to stay connected, it cannot fully replace the emotional connection created through personal contact.", vn: "Trong khi công nghệ kỹ thuật số cho phép mọi người giữ liên lạc, nó không thể hoàn toàn thay thế sự kết nối cảm xúc được tạo ra thông qua sự tiếp xúc trực tiếp.", isRed: false },
                        { en: "Therefore, many friendships become less close than they were in the past.", vn: "Vì vậy, nhiều tình bạn trở nên ít thân thiết hơn so với trước đây.", isRed: false }
                    ],
                    [
                        { en: "In conclusion, friendship plays an important role in people’s lives.", vn: "Tóm lại, tình bạn đóng vai trò quan trọng trong cuộc sống của con người.", isRed: false },
                        { en: "It provides emotional support, reduces loneliness, and encourages personal development.", vn: "Nó mang lại sự hỗ trợ về mặt tinh thần, giúp giảm cảm giác cô đơn và thúc đẩy sự phát triển của mỗi cá nhân.", isRed: false },
                        { en: "However, busy lifestyles and the growing reliance on online communication make it more difficult to maintain strong friendships.", vn: "Tuy nhiên, lối sống bận rộn và sự phụ thuộc ngày càng nhiều vào giao tiếp trực tuyến khiến việc duy trì những tình bạn bền chặt trở nên khó khăn hơn.", isRed: false },
                        { en: "For these reasons, I believe that modern life tends to weaken friendship.", vn: "Vì những lý do này, tôi cho rằng cuộc sống hiện đại có xu hướng làm suy yếu tình bạn.", isRed: false }
                    ]
                ]
            }
        }
    ]
};

window.ESSAY_TOPICS.push(newEssay);

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Successfully added essay 13');
