const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../../essays-data.js');
const content = fs.readFileSync(dataFilePath, 'utf8');

const sandbox = {};
const fn = new Function('window', content);
fn(sandbox);

if (!sandbox.ESSAY_TOPICS || !Array.isArray(sandbox.ESSAY_TOPICS)) {
    console.error('Failed to load window.ESSAY_TOPICS');
    process.exit(1);
}

const existingIndex = sandbox.ESSAY_TOPICS.findIndex(e => e.id === 'glass-office-buildings');
if (existingIndex === -1) {
    console.error('Essay glass-office-buildings not found!');
    process.exit(1);
}

const essay = sandbox.ESSAY_TOPICS[existingIndex];
essay.meta.level = "B1-C1";

// Preserve existing Level B1 variant exactly as is
const variantB1 = essay.variants[0];

// Define new Level C1 variant completely separate and distinct
const variantC1 = {
    name: "Level C1",
    vocab: [
        { en: "contemporary appearance", vn: "diện mạo đương đại, hiện đại" },
        { en: "architectural trend", vn: "xu hướng kiến trúc" },
        { en: "positive effects", vn: "những tác động tích cực" },
        { en: "artificial lighting", vn: "ánh sáng nhân tạo" },
        { en: "electricity consumption", vn: "lượng điện năng tiêu thụ" },
        { en: "pleasant working atmosphere", vn: "bầu không khí làm việc dễ chịu" },
        { en: "constant exposure", vn: "sự tiếp xúc liên tục" },
        { en: "modern cityscape", vn: "cảnh quan thành phố hiện đại" },
        { en: "spacious and clean", vn: "rộng rãi và sạch sẽ" },
        { en: "extensive use of glass", vn: "việc sử dụng kính trên diện rộng" },
        { en: "excessively hot", vn: "quá nóng, nóng bức quá mức" },
        { en: "considerable heat", vn: "lượng nhiệt đáng kể" },
        { en: "cooling demands", vn: "nhu cầu làm mát" },
        { en: "privacy concerns", vn: "mối lo ngại về quyền riêng tư" },
        { en: "confidential information", vn: "thông tin bảo mật" },
        { en: "problematic", vn: "gây rắc rối, nan giải" },
        { en: "urban environment", vn: "môi trường đô thị" },
        { en: "protect people's privacy", vn: "bảo vệ quyền riêng tư của mọi người" },
        { en: "operate for longer periods", vn: "vận hành trong thời gian dài hơn" },
        { en: "natural light", vn: "ánh sáng tự nhiên" }
    ],
    introVn: "Tại nhiều thành phố hiện đại, các tòa nhà văn phòng được thiết kế với bề mặt kính lớn, mang lại cho chúng vẻ ngoài sáng sủa và đương đại. Mặc dù xu hướng kiến trúc này có thể mang lại nhiều lợi ích, nhưng nó cũng làm dấy lên những mối lo ngại. Bài luận này sẽ thảo luận về cả những ưu điểm và nhược điểm của sự phát triển này.",
    introChunks: [
        { en: "In many modern cities,", vn: "Tại nhiều thành phố hiện đại," },
        { en: "office buildings are designed with", vn: "các tòa nhà văn phòng được thiết kế với" },
        { en: "large glass surfaces,", vn: "bề mặt kính lớn," },
        { en: "giving them a bright and contemporary appearance.", vn: "mang lại cho chúng vẻ ngoài sáng sủa và đương đại." },
        { en: "While this architectural trend", vn: "Mặc dù xu hướng kiến trúc này" },
        { en: "can bring several benefits,", vn: "có thể mang lại nhiều lợi ích," },
        { en: "it also raises concerns.", vn: "nhưng nó cũng làm dấy lên những mối lo ngại." },
        { en: "This essay will discuss", vn: "Bài luận này sẽ thảo luận về" },
        { en: "both the advantages and disadvantages", vn: "cả những ưu điểm và nhược điểm" },
        { en: "of this development.", vn: "của sự phát triển này." }
    ],
    bodyParagraphs: [
        {
            title: "Đoạn 1: Tác động tích cực của tòa nhà văn phòng bằng kính (Positive Effects)",
            hintGroups: [
                {
                    label: "Topic sentence",
                    hints: [
                        {
                            en: "On the one hand",
                            vn: "Một mặt",
                            connector: ":"
                        },
                        {
                            en: "positive effects",
                            vn: "những tác động tích cực",
                            connector: "➜",
                            isBoldRed: true
                        },
                        {
                            en: "glass office buildings definitely offer",
                            vn: "các tòa nhà văn phòng bằng kính chắc chắn mang lại"
                        }
                    ]
                },
                {
                    label: "Lợi ích 1: Ánh sáng tự nhiên & Giảm phụ thuộc ánh sáng nhân tạo",
                    hints: [
                        {
                            en: "allow natural light into the workplace",
                            vn: "cho phép ánh sáng tự nhiên đi vào nơi làm việc",
                            connector: ":",
                            isBoldRed: true
                        },
                        {
                            en: "work in a brighter environment",
                            vn: "làm việc trong môi trường sáng sủa hơn",
                            connector: "➜"
                        },
                        {
                            en: "without relying heavily on artificial lighting",
                            vn: "không phải phụ thuộc nhiều vào ánh sáng nhân tạo",
                            connector: "➜",
                            newLine: true
                        },
                        {
                            en: "reduce electricity consumption",
                            vn: "giảm lượng tiêu thụ điện",
                            connector: "+"
                        },
                        {
                            en: "create a more pleasant working atmosphere",
                            vn: "tạo ra bầu không khí làm việc dễ chịu hơn",
                            connector: "➜"
                        },
                        {
                            en: "prefer natural light over constant artificial light",
                            vn: "thích ánh sáng tự nhiên hơn việc tiếp xúc liên tục với ánh sáng nhân tạo"
                        }
                    ]
                },
                {
                    label: "Lợi ích 2: Cảnh quan đô thị hiện đại & Thu hút đầu tư",
                    hints: [
                        {
                            en: "improve the appearance of office buildings",
                            vn: "cải thiện diện mạo của các tòa nhà văn phòng",
                            connector: ":",
                            isBoldRed: true
                        },
                        {
                            en: "contribute to a modern cityscape",
                            vn: "đóng góp vào cảnh quan đô thị hiện đại hơn",
                            connector: "➜"
                        },
                        {
                            en: "look spacious and clean",
                            vn: "trông rộng rãi và sạch sẽ",
                            prefix: "(",
                            suffix: ")",
                            connector: "➜",
                            newLine: true
                        },
                        {
                            en: "create a strong image for the city",
                            vn: "tạo dựng hình ảnh mạnh mẽ cho thành phố",
                            connector: "➜"
                        },
                        {
                            en: "attract businesses and visitors",
                            vn: "thu hút các doanh nghiệp và du khách"
                        }
                    ]
                }
            ]
        },
        {
            title: "Đoạn 2: Những bất lợi đáng kể của tòa nhà văn phòng bằng kính (Significant Drawbacks)",
            hintGroups: [
                {
                    label: "Topic sentence",
                    hints: [
                        {
                            en: "Despite these advantages",
                            vn: "Bất chấp những lợi ích này",
                            connector: ":"
                        },
                        {
                            en: "significant drawbacks",
                            vn: "những nhược điểm đáng kể",
                            connector: "➜",
                            isBoldRed: true
                        },
                        {
                            en: "extensive use of glass",
                            vn: "việc sử dụng kính trên diện rộng"
                        }
                    ]
                },
                {
                    label: "Bất lợi 1: Tích tụ nhiệt & Gia tăng tiêu thụ năng lượng làm mát",
                    hints: [
                        {
                            en: "cause offices to become excessively hot",
                            vn: "khiến văn phòng trở nên quá nóng",
                            connector: ":",
                            isBoldRed: true
                        },
                        {
                            en: "cities with strong sunlight",
                            vn: "những thành phố có ánh nắng gay gắt",
                            connector: "➜"
                        },
                        {
                            en: "allow considerable heat to enter",
                            vn: "để một lượng nhiệt đáng kể xâm nhập vào",
                            connector: "➜",
                            newLine: true
                        },
                        {
                            en: "air-conditioning systems operate for longer periods",
                            vn: "hệ thống điều hòa phải hoạt động trong thời gian dài hơn",
                            connector: "➜"
                        },
                        {
                            en: "increase energy consumption",
                            vn: "làm gia tăng mức tiêu thụ năng lượng"
                        }
                    ]
                },
                {
                    label: "Bất lợi 2: Mối lo ngại riêng tư & Nguy cơ rò rỉ thông tin mật",
                    hints: [
                        {
                            en: "privacy concerns for employees",
                            vn: "mối lo ngại về quyền riêng tư của nhân viên",
                            connector: ":",
                            isBoldRed: true
                        },
                        {
                            en: "employees working on lower floors",
                            vn: "nhân viên làm việc ở các tầng thấp",
                            connector: "➜"
                        },
                        {
                            en: "people outside see into their workplace",
                            vn: "người bên ngoài có thể nhìn vào nơi làm việc của họ",
                            connector: "➜"
                        },
                        {
                            en: "feel uncomfortable",
                            vn: "cảm thấy không thoải mái",
                            connector: "➜",
                            newLine: true
                        },
                        {
                            en: "companies dealing with confidential information",
                            vn: "các công ty xử lý thông tin bảo mật",
                            connector: "➜"
                        },
                        {
                            en: "privacy is an essential requirement",
                            vn: "tính riêng tư là một yêu cầu thiết yếu"
                        }
                    ]
                }
            ]
        }
    ],
    conclusionVn: "Tóm lại, việc sử dụng kính ngày càng tăng trong các tòa nhà văn phòng có thể cung cấp nhiều ánh sáng tự nhiên hơn và đóng góp vào một môi trường đô thị hiện đại và hấp dẫn. Tuy nhiên, nó cũng có thể dẫn đến nhu cầu làm mát cao hơn và những lo ngại về quyền riêng tư. Do đó, các kiến trúc sư nên sử dụng kính một cách cẩn trọng và bổ sung rèm cửa hoặc các tính năng khác để giảm nhiệt và bảo vệ sự riêng tư của con người.",
    conclusionChunks: [
        { en: "In conclusion,", vn: "Tóm lại," },
        { en: "the growing use of glass in office buildings", vn: "việc sử dụng kính ngày càng tăng trong các tòa nhà văn phòng" },
        { en: "can provide more natural light", vn: "có thể cung cấp nhiều ánh sáng tự nhiên hơn" },
        { en: "and contribute to a modern and attractive urban environment.", vn: "và đóng góp vào một môi trường đô thị hiện đại và hấp dẫn." },
        { en: "However, it can also", vn: "Tuy nhiên, nó cũng có thể" },
        { en: "lead to higher cooling demands and privacy concerns.", vn: "dẫn đến nhu cầu làm mát cao hơn và những lo ngại về quyền riêng tư." },
        { en: "Therefore, architects should", vn: "Do đó, các kiến trúc sư nên" },
        { en: "use glass carefully", vn: "sử dụng kính một cách cẩn trọng" },
        { en: "and add curtains or other features", vn: "và bổ sung rèm cửa hoặc các tính năng khác" },
        { en: "to reduce heat and protect people's privacy.", vn: "để giảm nhiệt và bảo vệ sự riêng tư của con người." }
    ],
    sampleEssay: {
        paragraphs: [
            [
                {
                    en: "In many modern cities, office buildings are designed with large glass surfaces, giving them a bright and contemporary appearance.",
                    vn: "Tại nhiều thành phố hiện đại, các tòa nhà văn phòng được thiết kế với bề mặt kính lớn, mang lại cho chúng vẻ ngoài sáng sủa và đương đại.",
                    isRed: false
                },
                {
                    en: "While this architectural trend can bring several benefits, it also raises concerns.",
                    vn: "Mặc dù xu hướng kiến trúc này có thể mang lại nhiều lợi ích, nhưng nó cũng làm dấy lên những mối lo ngại.",
                    isRed: false
                },
                {
                    en: "This essay will discuss both the advantages and disadvantages of this development.",
                    vn: "Bài luận này sẽ thảo luận về cả những ưu điểm và nhược điểm của sự phát triển này.",
                    isRed: true
                }
            ],
            [
                {
                    en: "On the one hand, glass office buildings definitely offer some positive effects.",
                    vn: "Một mặt, các tòa nhà văn phòng bằng kính chắc chắn mang lại một số tác động tích cực.",
                    isRed: true
                },
                {
                    en: "One major advantage is that they allow a large amount of natural light to enter the workplace.",
                    vn: "Một ưu điểm lớn là chúng cho phép một lượng lớn ánh sáng tự nhiên chiếu vào nơi làm việc.",
                    isRed: false
                },
                {
                    en: "Employees can therefore work in a brighter environment during the day without relying heavily on artificial lighting.",
                    vn: "Do đó, nhân viên có thể làm việc trong môi trường sáng sủa hơn vào ban ngày mà không phải phụ thuộc nhiều vào ánh sáng nhân tạo.",
                    isRed: false
                },
                {
                    en: "This can not only reduce electricity consumption but also create a more pleasant working atmosphere, as many people find natural light more comfortable than constant exposure to artificial light.",
                    vn: "Điều này không chỉ làm giảm tiêu thụ điện năng mà còn tạo ra bầu không khí làm việc dễ chịu hơn, vì nhiều người cảm thấy ánh sáng tự nhiên thoải mái hơn so với việc tiếp xúc liên tục với ánh sáng nhân tạo.",
                    isRed: false
                },
                {
                    en: "Another benefit is that glass can improve the appearance of office buildings and contribute to a more modern cityscape.",
                    vn: "Một lợi ích khác là kính có thể cải thiện diện mạo của các tòa nhà văn phòng và đóng góp vào một cảnh quan thành phố hiện đại hơn.",
                    isRed: false
                },
                {
                    en: "Large glass windows can make buildings look spacious and clean, which may help cities create a strong image and attract businesses and visitors.",
                    vn: "Các cửa sổ kính lớn có thể làm cho các tòa nhà trông rộng rãi và sạch sẽ, điều này có thể giúp các thành phố tạo dựng hình ảnh mạnh mẽ và thu hút các doanh nghiệp cũng như du khách.",
                    isRed: false
                }
            ],
            [
                {
                    en: "Despite these advantages, there are also some significant drawbacks.",
                    vn: "Bất chấp những lợi ích này, cũng có một số nhược điểm đáng kể.",
                    isRed: true
                },
                {
                    en: "First of all, extensive use of glass can cause offices to become excessively hot, particularly in cities with strong sunlight.",
                    vn: "Trước hết, việc sử dụng kính rộng rãi có thể khiến văn phòng trở nên quá nóng, đặc biệt là ở những thành phố có ánh nắng gay gắt.",
                    isRed: false
                },
                {
                    en: "Although modern buildings may use special types of glass, large windows can still allow considerable heat to enter.",
                    vn: "Mặc dù các tòa nhà hiện đại có thể sử dụng các loại kính đặc biệt, các cửa sổ lớn vẫn có thể cho phép một lượng nhiệt đáng kể truyền vào.",
                    isRed: false
                },
                {
                    en: "As a result, air-conditioning systems may have to operate for longer periods, which increases energy consumption.",
                    vn: "Kết quả là, các hệ thống điều hòa không khí có thể phải vận hành trong thời gian dài hơn, điều này làm tăng lượng tiêu thụ năng lượng.",
                    isRed: false
                },
                {
                    en: "Furthermore, large glass windows may cause privacy concerns for people working inside the building.",
                    vn: "Hơn nữa, các cửa sổ kính lớn có thể gây ra những lo ngại về quyền riêng tư cho những người làm việc bên trong tòa nhà.",
                    isRed: false
                },
                {
                    en: "Employees working on lower floors, for instance, may feel uncomfortable knowing that people outside can see into their workplace.",
                    vn: "Chẳng hạn, các nhân viên làm việc ở các tầng thấp hơn có thể cảm thấy không thoải mái khi biết rằng những người bên ngoài có thể nhìn vào nơi làm việc của họ.",
                    isRed: false
                },
                {
                    en: "This can be particularly problematic for companies that deal with confidential information, where privacy is an important part of their work.",
                    vn: "Điều này có thể đặc biệt nan giải đối với các công ty xử lý thông tin bảo mật, nơi mà tính riêng tư là một phần quan trọng trong công việc của họ.",
                    isRed: false
                }
            ],
            [
                {
                    en: "In conclusion, the growing use of glass in office buildings can provide more natural light and contribute to a modern and attractive urban environment.",
                    vn: "Tóm lại, việc sử dụng kính ngày càng tăng trong các tòa nhà văn phòng có thể cung cấp nhiều ánh sáng tự nhiên hơn và đóng góp vào một môi trường đô thị hiện đại và hấp dẫn.",
                    isRed: true
                },
                {
                    en: "However, it can also lead to higher cooling demands and privacy concerns.",
                    vn: "Tuy nhiên, nó cũng có thể dẫn đến nhu cầu làm mát cao hơn và những lo ngại về quyền riêng tư.",
                    isRed: false
                },
                {
                    en: "Therefore, architects should use glass carefully and add curtains or other features to reduce heat and protect people's privacy.",
                    vn: "Do đó, các kiến trúc sư nên sử dụng kính một cách cẩn trọng và bổ sung rèm cửa hoặc các tính năng khác để giảm nhiệt và bảo vệ sự riêng tư của con người.",
                    isRed: false
                }
            ]
        ]
    }
};

essay.variants = [variantB1, variantC1];

const jsonStr = JSON.stringify(sandbox.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};\n`;

fs.writeFileSync(dataFilePath, output, 'utf8');
console.log('essays-data.js updated successfully! Topic 20 now has variants:', essay.variants.map(v => v.name));
