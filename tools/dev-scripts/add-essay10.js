const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

const newEssay = {
    "id": "historical-exhibitions",
    "title": "10. Triển lãm lịch sử",
    "summary": "Bài luận về những lợi ích của việc tham quan các triển lãm lịch sử.",
    "isMatchingVocab": true,
    "meta": {
        "category": "Văn hóa - Xã hội",
        "taskType": "Benefits",
        "level": "B1",
        "estimatedMinutes": 40
    },
    "prompt": [
        {
            "en": "Read the short passage below and write an essay about the benefits of visiting historical exhibitions.",
            "vn": "Đọc đoạn văn ngắn dưới đây và viết một bài luận về lợi ích của việc tham quan các triển lãm lịch sử."
        },
        {
            "en": "“This year in Hanoi, the exhibition \"Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc\" is organized to celebrate the August Revolution and National Day 2/9. The exhibition displays documents, photos, and objects about the history and achievements of Vietnam.”",
            "vn": "“Năm nay tại Hà Nội, triển lãm \"Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc\" được tổ chức để kỷ niệm Cách mạng tháng Tám và Quốc khánh 2/9. Triển lãm trưng bày các tài liệu, hình ảnh và hiện vật về lịch sử và những thành tựu của Việt Nam.”"
        },
        {
            "en": "Write an essay discussing the benefits of visiting historical exhibitions. Give reasons and examples to support your ideas.",
            "vn": "Viết một bài luận thảo luận về những lợi ích của việc tham quan các triển lãm lịch sử. Đưa ra các lý do và ví dụ để hỗ trợ ý kiến của bạn."
        }
    ],
    "introEnExpectedLength": 40,
    "conclusionEnExpectedLength": 38,
    "currentVariantIndex": 0,
    "variants": [
        {
            "name": "Level B1",
            "vocab": [
                { "en": "a significant increase", "vn": "sự gia tăng đáng kể" },
                { "en": "historical exhibitions", "vn": "các triển lãm lịch sử" },
                { "en": "obvious", "vn": "rõ ràng" },
                { "en": "learn more about", "vn": "hiểu biết nhiều hơn về" },
                { "en": "gain knowledge about", "vn": "thu thập kiến thức về" },
                { "en": "important events", "vn": "những sự kiện quan trọng" },
                { "en": "materials", "vn": "tài liệu" },
                { "en": "Vietnam's history", "vn": "lịch sử Việt Nam" },
                { "en": "historical events", "vn": "sự kiện lịch sử" },
                { "en": "real objects", "vn": "hiện vật thực tế" },
                { "en": "textbooks", "vn": "sách giáo khoa" },
                { "en": "visitors", "vn": "khách tham quan" },
                { "en": "historical artifacts", "vn": "hiện vật lịch sử" },
                { "en": "explanations", "vn": "lời giải thích" },
                { "en": "national pride", "vn": "lòng tự hào dân tộc" },
                { "en": "achievements", "vn": "thành tựu" },
                { "en": "contributions", "vn": "sự đóng góp" },
                { "en": "previous generations", "vn": "các thế hệ đi trước" },
                { "en": "feel proud", "vn": "cảm thấy tự hào" },
                { "en": "have greater respect for", "vn": "có sự tôn trọng lớn hơn dành cho" }
            ],
            "introChunks": [
                { "en": "In recent years,", "vn": "Trong những năm gần đây," },
                { "en": "there has been a significant increase", "vn": "đã có sự gia tăng đáng kể" },
                { "en": "in the number of people who", "vn": "về số lượng người" },
                { "en": "visit", "vn": "tham quan" },
                { "en": "historical exhibitions.", "vn": "các triển lãm lịch sử." },
                { "en": "This trend", "vn": "Xu hướng này" },
                { "en": "can bring", "vn": "có thể mang lại" },
                { "en": "several benefits to", "vn": "nhiều lợi ích cho" },
                { "en": "both individuals and society.", "vn": "cả cá nhân và xã hội." },
                { "en": "This essay will discuss", "vn": "Bài luận này sẽ thảo luận về" },
                { "en": "the main advantages", "vn": "những lợi ích chính" },
                { "en": "of visiting historical exhibitions.", "vn": "của việc tham quan các triển lãm lịch sử." }
            ],
            "bodyParagraphs": [
                {
                    "title": "Paragraph 1: Learn more about history",
                    "chunks": [
                        { "en": "It is obvious that", "vn": "Rõ ràng là" },
                        { "en": "there are several positive impacts", "vn": "có nhiều tác động tích cực" },
                        { "en": "of historical exhibitions.", "vn": "của các triển lãm lịch sử." },
                        { "en": "Firstly,", "vn": "Thứ nhất," },
                        { "en": "visiting these exhibitions", "vn": "việc tham quan các triển lãm này" },
                        { "en": "helps people", "vn": "giúp mọi người" },
                        { "en": "learn more about history.", "vn": "hiểu biết nhiều hơn về lịch sử." },
                        { "en": "By looking at documents and photographs,", "vn": "Bằng cách nhìn vào các tài liệu và hình ảnh," },
                        { "en": "visitors", "vn": "khách tham quan" },
                        { "en": "can gain knowledge about", "vn": "có thể thu thập kiến thức về" },
                        { "en": "important events and people from the past.", "vn": "những sự kiện quan trọng và những người trong quá khứ." },
                        { "en": "For example,", "vn": "Ví dụ," },
                        { "en": "the exhibition 'Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc'", "vn": "triển lãm 'Thành tựu Đất nước - 80 năm hành trình Độc lập - Tự do - Hạnh phúc'" },
                        { "en": "displays", "vn": "trưng bày" },
                        { "en": "materials related to Vietnam's history,", "vn": "các tài liệu liên quan đến lịch sử Việt Nam," },
                        { "en": "which helps people", "vn": "điều này giúp mọi người" },
                        { "en": "understand historical events.", "vn": "hiểu các sự kiện lịch sử." }
                    ]
                },
                {
                    "title": "Paragraph 2: Make learning more interesting",
                    "chunks": [
                        { "en": "Secondly,", "vn": "Thứ hai," },
                        { "en": "going to historical exhibitions", "vn": "việc đi đến các triển lãm lịch sử" },
                        { "en": "can make learning more interesting.", "vn": "có thể khiến việc học trở nên thú vị hơn." },
                        { "en": "Seeing real objects", "vn": "Việc nhìn thấy các hiện vật thực tế" },
                        { "en": "is much more interesting", "vn": "thú vị hơn nhiều" },
                        { "en": "than reading information in textbooks.", "vn": "so với việc đọc thông tin trong sách giáo khoa." },
                        { "en": "When people", "vn": "Khi mọi người" },
                        { "en": "look at historical artifacts and photographs", "vn": "nhìn vào các hiện vật lịch sử và hình ảnh" },
                        { "en": "and listen to explanations about them,", "vn": "và nghe những lời giải thích về chúng," },
                        { "en": "they", "vn": "họ" },
                        { "en": "can remember what they learn", "vn": "có thể nhớ những gì họ học" },
                        { "en": "more easily.", "vn": "dễ dàng hơn." }
                    ]
                },
                {
                    "title": "Paragraph 3: Increase national pride",
                    "chunks": [
                        { "en": "Finally,", "vn": "Cuối cùng," },
                        { "en": "historical exhibitions", "vn": "các triển lãm lịch sử" },
                        { "en": "also help to", "vn": "cũng giúp" },
                        { "en": "increase national pride.", "vn": "nâng cao lòng tự hào dân tộc." },
                        { "en": "When people", "vn": "Khi mọi người" },
                        { "en": "learn about the achievements and contributions", "vn": "tìm hiểu về những thành tựu và sự đóng góp" },
                        { "en": "of previous generations,", "vn": "của các thế hệ đi trước," },
                        { "en": "they", "vn": "họ" },
                        { "en": "may feel proud", "vn": "có thể cảm thấy tự hào" },
                        { "en": "to see how their country has developed", "vn": "khi thấy đất nước họ đã phát triển như thế nào" },
                        { "en": "over the years.", "vn": "qua nhiều năm." },
                        { "en": "As a result,", "vn": "Kết quả là," },
                        { "en": "they", "vn": "họ" },
                        { "en": "will have greater respect for", "vn": "sẽ có sự tôn trọng lớn hơn dành cho" },
                        { "en": "their nation and its history.", "vn": "quốc gia của họ và lịch sử của nó." }
                    ]
                }
            ],
            "conclusionChunks": [
                { "en": "In conclusion,", "vn": "Tóm lại," },
                { "en": "visiting historical exhibitions", "vn": "việc tham quan các triển lãm lịch sử" },
                { "en": "offers", "vn": "mang lại" },
                { "en": "several benefits,", "vn": "nhiều lợi ích," },
                { "en": "particularly", "vn": "đặc biệt là" },
                { "en": "helping people learn more about history,", "vn": "giúp mọi người hiểu biết nhiều hơn về lịch sử," },
                { "en": "making learning more interesting,", "vn": "khiến việc học trở nên thú vị hơn" },
                { "en": "and", "vn": "và" },
                { "en": "increasing national pride.", "vn": "nâng cao lòng tự hào dân tộc." },
                { "en": "Therefore,", "vn": "Vì vậy," },
                { "en": "more people", "vn": "nhiều người" },
                { "en": "should be encouraged to", "vn": "nên được khuyến khích" },
                { "en": "visit", "vn": "tham quan" },
                { "en": "such exhibitions.", "vn": "những triển lãm như vậy." }
            ]
        }
    ]
};

window.ESSAY_TOPICS.push(newEssay);

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Added essay 10 successfully');
