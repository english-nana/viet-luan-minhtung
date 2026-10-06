const fs = require('fs');

const content = fs.readFileSync('essays-data.js', 'utf8');
let window = {};
eval(content);

const newEssay = {
    "id": "cybercrime",
    "title": "19. Tội phạm mạng",
    "summary": "Bài luận về những tác động tiêu cực của tội phạm mạng đối với cá nhân, doanh nghiệp và chính phủ, cùng các giải pháp thiết thực để giải quyết vấn đề.",
    "isMatchingVocab": true,
    "meta": {
        "category": "Công nghệ & Xã hội",
        "taskType": "Causes - Problems - Solutions",
        "level": "B1-B2",
        "estimatedMinutes": 40
    },
    "prompt": [
        {
            "en": "Cybercrime has become increasingly common in today's digital world, causing serious harm to individuals, businesses, and governments.",
            "vn": "Tội phạm mạng ngày càng trở nên phổ biến trong thế giới kỹ thuật số ngày nay, gây ra những tác hại nghiêm trọng đối với các cá nhân, doanh nghiệp và chính phủ."
        },
        {
            "en": "What are the major impacts of cybercrimes, and what measures can be taken to address this issue?",
            "vn": "Những tác động chính của tội phạm mạng là gì, và những biện pháp nào có thể được thực hiện để giải quyết vấn đề này?"
        }
    ],
    "introEnExpectedLength": 215,
    "conclusionEnExpectedLength": 220,
    "currentVariantIndex": 0,
    "variants": [
        {
            "name": "Level B1",
            "vocab": [
                {
                    "en": "cybercrime",
                    "vn": "tội phạm mạng"
                },
                {
                    "en": "digital world",
                    "vn": "thế giới kỹ thuật số"
                },
                {
                    "en": "negative effects",
                    "vn": "những ảnh hưởng tiêu cực"
                },
                {
                    "en": "online scams",
                    "vn": "các vụ lừa đảo trực tuyến"
                },
                {
                    "en": "hacking",
                    "vn": "xâm nhập hệ thống máy tính"
                },
                {
                    "en": "personal information",
                    "vn": "thông tin cá nhân"
                },
                {
                    "en": "bank details",
                    "vn": "thông tin tài khoản ngân hàng"
                },
                {
                    "en": "passwords",
                    "vn": "mật khẩu"
                },
                {
                    "en": "victims",
                    "vn": "các nạn nhân"
                },
                {
                    "en": "financial losses",
                    "vn": "những thiệt hại tài chính"
                },
                {
                    "en": "computer system",
                    "vn": "hệ thống máy tính"
                },
                {
                    "en": "important data",
                    "vn": "dữ liệu quan trọng"
                },
                {
                    "en": "damage company's reputation",
                    "vn": "làm tổn hại danh tiếng công ty"
                },
                {
                    "en": "practical measures",
                    "vn": "các biện pháp thiết thực"
                },
                {
                    "en": "strong passwords",
                    "vn": "mật khẩu mạnh"
                },
                {
                    "en": "unknown links",
                    "vn": "các đường dẫn lạ"
                },
                {
                    "en": "suspicious emails",
                    "vn": "các email đáng ngờ"
                },
                {
                    "en": "online security systems",
                    "vn": "các hệ thống an ninh trực tuyến"
                },
                {
                    "en": "common online scams",
                    "vn": "các trò lừa đảo trực tuyến phổ biến"
                },
                {
                    "en": "online attacks",
                    "vn": "các cuộc tấn công trực tuyến"
                }
            ],
            "introChunks": [
                {
                    "en": "Cybercrime has become",
                    "vn": "Tội phạm mạng đã trở thành"
                },
                {
                    "en": "a serious problem",
                    "vn": "một vấn đề nghiêm trọng"
                },
                {
                    "en": "in today's digital world.",
                    "vn": "trong thế giới kỹ thuật số ngày nay."
                },
                {
                    "en": "It can have",
                    "vn": "Nó có thể gây ra"
                },
                {
                    "en": "many negative effects on|many negative impacts on",
                    "vn": "nhiều ảnh hưởng tiêu cực đối với"
                },
                {
                    "en": "people, businesses and governments.",
                    "vn": "người dân, doanh nghiệp và chính phủ."
                },
                {
                    "en": "This essay will",
                    "vn": "Bài luận này sẽ"
                },
                {
                    "en": "discuss",
                    "vn": "thảo luận về"
                },
                {
                    "en": "the major impacts of cybercrime",
                    "vn": "những tác động chính của tội phạm mạng"
                },
                {
                    "en": "and suggest|and propose",
                    "vn": "và đề xuất"
                },
                {
                    "en": "some possible solutions.",
                    "vn": "một số giải pháp khả thi."
                }
            ],
            "introVn": "Tội phạm mạng đã trở thành một vấn đề nghiêm trọng trong thế giới kỹ thuật số ngày nay. Nó có thể gây ra nhiều ảnh hưởng tiêu cực đối với người dân, doanh nghiệp và chính phủ. Bài luận này sẽ thảo luận về những tác động chính của tội phạm mạng và đề xuất một số giải pháp khả thi.",
            "bodyParagraphs": [
                {
                    "title": "Đoạn 1: Tác động tiêu cực của tội phạm mạng (Impacts of Cybercrime)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "have several negative effects on",
                                    "vn": "gây ra một số ảnh hưởng tiêu cực đối với",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "individuals, businesses and governments",
                                    "vn": "các cá nhân, doanh nghiệp và chính phủ",
                                    "isTopic": true
                                }
                            ]
                        },
                        {
                            "label": "Tác động 1: Mất tiền & rò rỉ dữ liệu cá nhân",
                            "hints": [
                                {
                                    "en": "lose money or personal information",
                                    "vn": "mất tiền hoặc thông tin cá nhân",
                                    "connector": "–",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "online scams and hacking",
                                    "vn": "lừa đảo trực tuyến và xâm nhập máy tính",
                                    "connector": "➜"
                                },
                                {
                                    "en": "steal bank details or passwords",
                                    "vn": "đánh cắp thông tin ngân hàng hoặc mật khẩu",
                                    "prefix": "(",
                                    "connector": "➜"
                                },
                                {
                                    "en": "take money from victims",
                                    "vn": "chiếm đoạt tiền của nạn nhân",
                                    "suffix": ")",
                                    "connector": "➜"
                                },
                                {
                                    "en": "cause financial problems",
                                    "vn": "gây ra các vấn đề tài chính",
                                    "connector": "+"
                                },
                                {
                                    "en": "worried about using online services",
                                    "vn": "lo lắng khi sử dụng dịch vụ trực tuyến"
                                }
                            ]
                        },
                        {
                            "label": "Tác động 2: Ảnh hưởng nghiêm trọng đến doanh nghiệp",
                            "hints": [
                                {
                                    "en": "serious problems for businesses",
                                    "vn": "những vấn đề nghiêm trọng đối với doanh nghiệp",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "attack a company's computer system",
                                    "vn": "tấn công hệ thống máy tính của công ty",
                                    "connector": "➜"
                                },
                                {
                                    "en": "lose important data",
                                    "vn": "mất dữ liệu quan trọng",
                                    "connector": "+"
                                },
                                {
                                    "en": "unable to provide services normally",
                                    "vn": "không thể cung cấp dịch vụ bình thường",
                                    "connector": "➜"
                                },
                                {
                                    "en": "financial losses",
                                    "vn": "những thiệt hại tài chính",
                                    "connector": "+"
                                },
                                {
                                    "en": "damage the company's reputation",
                                    "vn": "làm tổn hại đến danh tiếng công ty"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Đoạn 2: Các biện pháp giải quyết (Practical Solutions)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "implement several practical measures",
                                    "vn": "thực hiện một số biện pháp thiết thực",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "address this issue",
                                    "vn": "giải quyết vấn đề này",
                                    "isTopic": true
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 1: Nâng cao ý thức người dùng cá nhân",
                            "hints": [
                                {
                                    "en": "safer online habits",
                                    "vn": "thói quen trực tuyến an toàn hơn",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "use strong passwords",
                                    "vn": "sử dụng mật khẩu mạnh",
                                    "connector": "+"
                                },
                                {
                                    "en": "avoid sharing personal information with strangers",
                                    "vn": "tránh chia sẻ thông tin cá nhân với người lạ",
                                    "connector": "➜"
                                },
                                {
                                    "en": "clicking on unknown links",
                                    "vn": "nhấp vào các liên kết lạ",
                                    "prefix": "(cẩn thận:",
                                    "connector": "+"
                                },
                                {
                                    "en": "opening suspicious emails",
                                    "vn": "mở các email đáng ngờ",
                                    "suffix": ")"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 2: Nâng cấp hệ thống an ninh doanh nghiệp & chính phủ",
                            "hints": [
                                {
                                    "en": "businesses and governments",
                                    "vn": "các doanh nghiệp và chính phủ",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "improve online security systems",
                                    "vn": "nâng cấp hệ thống an ninh trực tuyến",
                                    "connector": "➜"
                                },
                                {
                                    "en": "protect important information more carefully",
                                    "vn": "bảo vệ thông tin quan trọng cẩn thận hơn"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 3: Đào tạo và nâng cao nhận thức cộng đồng",
                            "hints": [
                                {
                                    "en": "education and training",
                                    "vn": "giáo dục và đào tạo",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "teach employees and the public",
                                    "vn": "hướng dẫn nhân viên và người dân",
                                    "connector": "➜"
                                },
                                {
                                    "en": "recognize common online scams",
                                    "vn": "nhận diện các trò lừa đảo trực tuyến phổ biến",
                                    "connector": "➜"
                                },
                                {
                                    "en": "avoid cybercrime",
                                    "vn": "tránh được tội phạm mạng",
                                    "connector": "+"
                                },
                                {
                                    "en": "reduce the number of online attacks",
                                    "vn": "giảm số lượng các cuộc tấn công trực tuyến"
                                }
                            ]
                        }
                    ]
                }
            ],
            "conclusionChunks": [
                {
                    "en": "In conclusion,",
                    "vn": "Tóm lại,"
                },
                {
                    "en": "cybercrime can cause",
                    "vn": "tội phạm mạng có thể gây ra"
                },
                {
                    "en": "financial losses,",
                    "vn": "những tổn thất tài chính,"
                },
                {
                    "en": "the theft of personal information",
                    "vn": "việc đánh cắp thông tin cá nhân"
                },
                {
                    "en": "and serious problems for businesses.",
                    "vn": "và các vấn đề nghiêm trọng cho các doanh nghiệp."
                },
                {
                    "en": "Using safer online habits,",
                    "vn": "Sử dụng các thói quen trực tuyến an toàn hơn,"
                },
                {
                    "en": "improving security systems",
                    "vn": "cải thiện các hệ thống an ninh"
                },
                {
                    "en": "and providing better education",
                    "vn": "và cung cấp giáo dục tốt hơn"
                },
                {
                    "en": "can help reduce",
                    "vn": "có thể giúp giảm bớt"
                },
                {
                    "en": "this growing problem.",
                    "vn": "vấn đề ngày càng gia tăng này."
                }
            ],
            "conclusionVn": "Tóm lại, tội phạm mạng có thể gây ra những tổn thất tài chính, việc đánh cắp thông tin cá nhân và các vấn đề nghiêm trọng cho các doanh nghiệp. Sử dụng các thói quen trực tuyến an toàn hơn, cải thiện các hệ thống an ninh và cung cấp giáo dục tốt hơn có thể giúp giảm bớt vấn đề ngày càng gia tăng này.",
            "sampleEssay": {
                "paragraphs": [
                    [
                        {
                            "en": "Cybercrime has become a serious problem in today's digital world.",
                            "vn": "Tội phạm mạng đã trở thành một vấn đề nghiêm trọng trong thế giới kỹ thuật số ngày nay.",
                            "isRed": false
                        },
                        {
                            "en": "It can have many negative effects on people, businesses and governments.",
                            "vn": "Nó có thể gây ra nhiều ảnh hưởng tiêu cực đối với người dân, doanh nghiệp và chính phủ.",
                            "isRed": false
                        },
                        {
                            "en": "This essay will discuss the major impacts of cybercrime and suggest some possible solutions.",
                            "vn": "Bài luận này sẽ thảo luận về những tác động chính của tội phạm mạng và đề xuất một số giải pháp khả thi.",
                            "isRed": true
                        }
                    ],
                    [
                        {
                            "en": "Cybercrime can have several negative effects on individuals, businesses and governments.",
                            "vn": "Tội phạm mạng có thể gây ra một số ảnh hưởng tiêu cực đối với các cá nhân, doanh nghiệp và chính phủ.",
                            "isRed": true
                        },
                        {
                            "en": "First of all, people may lose money or personal information because of online scams and hacking.",
                            "vn": "Trước hết, mọi người có thể bị mất tiền hoặc thông tin cá nhân do các vụ lừa đảo trực tuyến và xâm nhập máy tính.",
                            "isRed": false
                        },
                        {
                            "en": "For example, criminals may steal bank details or passwords and use them to take money from victims.",
                            "vn": "Ví dụ, tội phạm có thể đánh cắp thông tin tài khoản ngân hàng hoặc mật khẩu và sử dụng chúng để chiếm đoạt tiền của nạn nhân.",
                            "isRed": false
                        },
                        {
                            "en": "This can cause financial problems and make people feel worried about using online services.",
                            "vn": "Điều này có thể gây ra các vấn đề tài chính và khiến mọi người cảm thấy lo lắng khi sử dụng các dịch vụ trực tuyến.",
                            "isRed": false
                        },
                        {
                            "en": "Moreover, cybercrime can cause serious problems for businesses.",
                            "vn": "Hơn nữa, tội phạm mạng có thể gây ra những vấn đề nghiêm trọng cho các doanh nghiệp.",
                            "isRed": false
                        },
                        {
                            "en": "If hackers attack a company's computer system, it may lose important data and may not be able to provide its services normally.",
                            "vn": "Nếu tin tặc tấn công hệ thống máy tính của một công ty, công ty đó có thể bị mất dữ liệu quan trọng và không thể cung cấp dịch vụ bình thường.",
                            "isRed": false
                        },
                        {
                            "en": "This can lead to financial losses and damage the company's reputation.",
                            "vn": "Điều này có thể dẫn đến những thiệt hại về tài chính và làm tổn hại đến danh tiếng của công ty.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "To address this issue, several practical measures could be implemented.",
                            "vn": "Để giải quyết vấn đề này, một số biện pháp thiết thực có thể được thực hiện.",
                            "isRed": true
                        },
                        {
                            "en": "One solution is for people to use strong passwords and avoid sharing personal information with strangers online.",
                            "vn": "Một giải pháp là mọi người nên sử dụng mật khẩu mạnh và tránh chia sẻ thông tin cá nhân với người lạ trên mạng.",
                            "isRed": false
                        },
                        {
                            "en": "They should also be careful when clicking on unknown links or opening suspicious emails.",
                            "vn": "Họ cũng nên cẩn thận khi nhấp vào các đường dẫn không xác định hoặc mở các email đáng ngờ.",
                            "isRed": false
                        },
                        {
                            "en": "In addition, businesses and governments should improve their online security systems and protect important information more carefully.",
                            "vn": "Ngoài ra, các doanh nghiệp và chính phủ nên cải thiện hệ thống an ninh trực tuyến và bảo vệ thông tin quan trọng cẩn thận hơn.",
                            "isRed": false
                        },
                        {
                            "en": "Finally, employees and the public should be taught how to recognize common online scams.",
                            "vn": "Cuối cùng, nhân viên và người dân nên được hướng dẫn cách nhận diện các vụ lừa đảo trực tuyến phổ biến.",
                            "isRed": false
                        },
                        {
                            "en": "This can help people avoid cybercrime and reduce the number of online attacks.",
                            "vn": "Điều này có thể giúp mọi người tránh được tội phạm mạng và giảm bớt số lượng các cuộc tấn công trực tuyến.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "In conclusion, cybercrime can cause financial losses, the theft of personal information and serious problems for businesses.",
                            "vn": "Tóm lại, tội phạm mạng có thể gây ra những tổn thất tài chính, việc đánh cắp thông tin cá nhân và các vấn đề nghiêm trọng cho các doanh nghiệp.",
                            "isRed": false
                        },
                        {
                            "en": "Using safer online habits, improving security systems and providing better education can help reduce this growing problem.",
                            "vn": "Sử dụng các thói quen trực tuyến an toàn hơn, cải thiện các hệ thống an ninh và cung cấp giáo dục tốt hơn có thể giúp giảm bớt vấn đề ngày càng gia tăng này.",
                            "isRed": false
                        }
                    ]
                ]
            }
        },
        {
            "name": "Level B2",
            "vocab": [],
            "introChunks": [],
            "introVn": "",
            "bodyParagraphs": [],
            "conclusionChunks": [],
            "conclusionVn": "",
            "sampleEssay": {
                "paragraphs": []
            }
        }
    ]
};

// Check if already exists
const existingIndex = window.ESSAY_TOPICS.findIndex(e => e.id === "cybercrime");
if (existingIndex !== -1) {
    window.ESSAY_TOPICS[existingIndex] = newEssay;
    console.log("Updated existing essay 19");
} else {
    window.ESSAY_TOPICS.push(newEssay);
    console.log("Added new essay 19");
}

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};\n`;
fs.writeFileSync('essays-data.js', output);
console.log("essays-data.js updated successfully! Total topics:", window.ESSAY_TOPICS.length);
