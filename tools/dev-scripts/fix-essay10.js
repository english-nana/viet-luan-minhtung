const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

const essay10 = window.ESSAY_TOPICS.find(e => e.id === "historical-exhibitions");

essay10.variants[0].bodyParagraphs = [
    {
        "title": "Đoạn 1: Hiểu biết nhiều hơn về lịch sử",
        "hintGroups": [
            {
                "label": "Topic sentence",
                "hints": [
                    {
                        "en": "Rõ ràng là / có nhiều tác động tích cực / của các triển lãm lịch sử.",
                        "vn": "It is obvious that / there are several positive impacts / of historical exhibitions.",
                        "isTopic": true
                    }
                ]
            },
            {
                "label": "Lợi ích 1",
                "hints": [
                    { "en": "learn more about history", "vn": "hiểu biết nhiều hơn về lịch sử" },
                    { "en": "looking at documents and photographs", "vn": "nhìn vào các tài liệu và hình ảnh" },
                    { "en": "gain knowledge about important events and people from the past", "vn": "thu thập kiến thức về những sự kiện quan trọng và những người trong quá khứ" }
                ]
            },
            {
                "label": "Ví dụ",
                "hints": [
                    { "en": "the exhibition 'Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc'", "vn": "triển lãm 'Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc'" },
                    { "en": "displays materials related to Vietnam's history", "vn": "trưng bày các tài liệu liên quan đến lịch sử Việt Nam" },
                    { "en": "understand historical events", "vn": "hiểu các sự kiện lịch sử" }
                ]
            }
        ]
    },
    {
        "title": "Đoạn 2: Việc học trở nên thú vị hơn",
        "hintGroups": [
            {
                "label": "Topic sentence",
                "hints": [
                    {
                        "en": "Thứ hai, / việc đi đến các triển lãm lịch sử / có thể khiến việc học trở nên thú vị hơn.",
                        "vn": "Secondly, / going to historical exhibitions / can make learning more interesting.",
                        "isTopic": true
                    }
                ]
            },
            {
                "label": "Lợi ích 2",
                "hints": [
                    { "en": "seeing real objects", "vn": "việc nhìn thấy các hiện vật thực tế" },
                    { "en": "much more interesting than reading information in textbooks", "vn": "thú vị hơn nhiều so với việc đọc thông tin trong sách giáo khoa" },
                    { "en": "look at historical artifacts and photographs", "vn": "nhìn vào các hiện vật lịch sử và hình ảnh" },
                    { "en": "listen to explanations about them", "vn": "nghe những lời giải thích về chúng" },
                    { "en": "remember what they learn more easily", "vn": "nhớ những gì họ học dễ dàng hơn" }
                ]
            }
        ]
    },
    {
        "title": "Đoạn 3: Nâng cao lòng tự hào dân tộc",
        "hintGroups": [
            {
                "label": "Topic sentence",
                "hints": [
                    {
                        "en": "Cuối cùng, / các triển lãm lịch sử / cũng giúp / nâng cao lòng tự hào dân tộc.",
                        "vn": "Finally, / historical exhibitions / also help to / increase national pride.",
                        "isTopic": true
                    }
                ]
            },
            {
                "label": "Lợi ích 3",
                "hints": [
                    { "en": "learn about the achievements and contributions of previous generations", "vn": "tìm hiểu về những thành tựu và sự đóng góp của các thế hệ đi trước" },
                    { "en": "feel proud to see how their country has developed over the years", "vn": "cảm thấy tự hào khi thấy đất nước họ đã phát triển như thế nào qua nhiều năm" },
                    { "en": "have greater respect for their nation and its history", "vn": "có sự tôn trọng lớn hơn dành cho quốc gia của họ và lịch sử của nó" }
                ]
            }
        ]
    }
];

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Fixed body paragraphs');
