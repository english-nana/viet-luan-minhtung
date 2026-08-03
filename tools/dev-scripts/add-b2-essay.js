const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

let essay = window.ESSAY_TOPICS[0]; // learning-musical-instruments

essay.variants[1].sampleEssay = {
    paragraphs: [
        [
            { en: "In recent years, there has been a significant number of young children who learn a musical instrument.", vn: "Trong những năm gần đây, ngày càng có nhiều trẻ em học chơi một loại nhạc cụ.", isRed: false },
            { en: "While this trend can bring several benefits, it may also cause some problems.", vn: "Mặc dù xu hướng này có thể mang lại nhiều lợi ích, nhưng nó cũng có thể gây ra một số vấn đề.", isRed: false },
            { en: "This essay will discuss both the advantages and disadvantages of learning a musical instrument.", vn: "Bài luận này sẽ thảo luận về cả những ưu điểm và nhược điểm của việc học chơi nhạc cụ.", isRed: true }
        ],
        [
            { en: "On the one hand, there are several benefits of learning a musical instrument.", vn: "Một mặt, có một số lợi ích của việc học một nhạc cụ.", isRed: true },
            { en: "Firstly, it helps children develop their cognitive and thinking skills.", vn: "Thứ nhất, nó giúp trẻ em phát triển kỹ năng nhận thức và tư duy của chúng.", isRed: false },
            { en: "This is because learning an instrument requires them to coordinate their eyes and hands simultaneously.", vn: "Điều này là do việc học một loại nhạc cụ đòi hỏi chúng phải phối hợp mắt và tay đồng thời.", isRed: false },
            { en: "This practice can improve their concentration and memory.", vn: "Việc luyện tập này có thể cải thiện sự tập trung và trí nhớ của chúng.", isRed: false },
            { en: "Secondly, playing a musical instrument can have a positive impact on mental health.", vn: "Thứ hai, chơi một nhạc cụ có thể có tác động tích cực đến sức khỏe tinh thần.", isRed: false },
            { en: "It allows children to relax and take a break from academic pressure.", vn: "Nó cho phép trẻ em thư giãn và nghỉ ngơi khỏi áp lực học tập.", isRed: false },
            { en: "For example, many children enjoy playing the guitar or the piano with their friends after school to reduce stress and temporarily forget about their studies.", vn: "Ví dụ, nhiều trẻ em thích chơi đàn guitar hoặc piano cùng bạn bè sau giờ học để giảm căng thẳng và tạm thời quên đi việc học.", isRed: false },
            { en: "Consequently, they may feel happier and more motivated in their daily lives.", vn: "Hậu quả là, chúng có thể cảm thấy vui vẻ và có động lực hơn trong cuộc sống hàng ngày.", isRed: false }
        ],
        [
            { en: "On the other hand, learning a musical instrument also comes with some drawbacks.", vn: "Mặt khác, việc học chơi nhạc cụ cũng đi kèm với một số bất lợi.", isRed: true },
            { en: "One major issue is that it can be very time-consuming.", vn: "Một vấn đề lớn là nó có thể rất tốn thời gian.", isRed: false },
            { en: "In order to become good at an instrument, children need to practice regularly and spend many hours improving their skills.", vn: "Để giỏi một loại nhạc cụ, trẻ em cần thực hành thường xuyên và dành nhiều giờ để cải thiện kỹ năng của chúng.", isRed: false },
            { en: "As a result, they may have less time for studying or participating in other important activities.", vn: "Do đó, chúng có thể có ít thời gian hơn cho việc học hoặc tham gia vào các hoạt động quan trọng khác.", isRed: false },
            { en: "Another obvious downside is the high cost of learning an instrument.", vn: "Một nhược điểm rõ ràng khác là chi phí cao cho việc học một nhạc cụ.", isRed: false },
            { en: "Students not only have to buy the instrument itself, which is often very expensive, but they also need to pay for music lessons.", vn: "Học sinh không chỉ phải mua chính loại nhạc cụ đó, thường rất đắt tiền, mà còn phải trả tiền cho các bài học nhạc.", isRed: false },
            { en: "For example, some instruments such as the piano and violin can cost a huge amount of money.", vn: "Ví dụ, một số nhạc cụ như đàn piano và đàn violin có thể tốn một số tiền lớn.", isRed: false },
            { en: "Consequently, learning a musical instrument may place a heavy financial burden on students, especially those who come from low-income families.", vn: "Hậu quả là, việc học một nhạc cụ có thể đặt gánh nặng tài chính lớn lên học sinh, đặc biệt là những học sinh đến từ các gia đình có thu nhập thấp.", isRed: false }
        ],
        [
            { en: "In conclusion, learning musical instruments offers several benefits, particularly developing children’s thinking skills and their mental health, but it also has some drawbacks, such as requiring a lot of time and costing a lot of money.", vn: "Tóm lại, việc học chơi nhạc cụ mang lại nhiều lợi ích, đặc biệt là giúp trẻ em phát triển kỹ năng tư duy và cải thiện sức khỏe tinh thần, nhưng nó cũng có một số nhược điểm, chẳng hạn như đòi hỏi nhiều thời gian và tốn kém chi phí.", isRed: false },
            { en: "Therefore, both its advantages and disadvantages should be carefully considered.", vn: "Vì vậy, cả những ưu điểm và nhược điểm của hoạt động này cần được cân nhắc kỹ lưỡng.", isRed: false }
        ]
    ]
};

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};`;
fs.writeFileSync('essays-data.js', output);
console.log('Added B2 sample essay');
