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

const newEssay = {
    "id": "traffic-accidents-congestion",
    "title": "22. Tai nạn và ùn tắc giao thông",
    "summary": "Bài luận về các nguyên nhân chính gây ra tai nạn giao thông, tình trạng ùn tắc đô thị và các giải pháp khắc phục thực tế.",
    "isMatchingVocab": true,
    "meta": {
        "category": "Giao thông & xã hội",
        "taskType": "Causes - Problems - Solutions",
        "level": "B1-B2",
        "estimatedMinutes": 40
    },
    "prompt": [
        {
            "en": "Traffic accidents and traffic congestion are becoming increasingly common in many cities.",
            "vn": "Tai nạn giao thông và ùn tắc giao thông đang ngày càng trở nên phổ biến ở nhiều thành phố."
        },
        {
            "en": "What are the main causes of these problems, and what solutions can be taken to address them?",
            "vn": "Những nguyên nhân chính của các vấn đề này là gì, và những giải pháp nào có thể được thực hiện để giải quyết chúng?"
        },
        {
            "en": "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            "vn": "Hãy đưa ra lý do cho câu trả lời của bạn và kèm theo các ví dụ liên quan từ kiến thức hoặc trải nghiệm của chính bạn."
        }
    ],
    "introEnExpectedLength": 268,
    "conclusionEnExpectedLength": 260,
    "currentVariantIndex": 0,
    "variants": [
        {
            "name": "Level B1",
            "vocab": [
                {
                    "en": "traffic accidents",
                    "vn": "tai nạn giao thông"
                },
                {
                    "en": "traffic congestion",
                    "vn": "ùn tắc giao thông"
                },
                {
                    "en": "increasingly common",
                    "vn": "ngày càng phổ biến"
                },
                {
                    "en": "serious problems",
                    "vn": "các vấn đề nghiêm trọng"
                },
                {
                    "en": "road users",
                    "vn": "người tham gia giao thông"
                },
                {
                    "en": "the main reasons",
                    "vn": "những nguyên nhân chính"
                },
                {
                    "en": "practical measures",
                    "vn": "các biện pháp thiết thực"
                },
                {
                    "en": "private vehicles",
                    "vn": "phương tiện cá nhân"
                },
                {
                    "en": "convenient",
                    "vn": "thuận tiện, tiện lợi"
                },
                {
                    "en": "save time",
                    "vn": "tiết kiệm thời gian"
                },
                {
                    "en": "rush hours",
                    "vn": "giờ cao điểm"
                },
                {
                    "en": "traffic rules",
                    "vn": "luật giao thông"
                },
                {
                    "en": "ignore traffic lights",
                    "vn": "vượt đèn đỏ, phớt lờ đèn tín hiệu"
                },
                {
                    "en": "public transport",
                    "vn": "phương tiện giao thông công cộng"
                },
                {
                    "en": "comfortable",
                    "vn": "thoải mái"
                },
                {
                    "en": "raise public awareness",
                    "vn": "nâng cao nhận thức cộng đồng"
                },
                {
                    "en": "give fines",
                    "vn": "xử phạt tiền"
                },
                {
                    "en": "drive dangerously",
                    "vn": "lái xe nguy hiểm"
                },
                {
                    "en": "break traffic laws",
                    "vn": "vi phạm luật giao thông"
                },
                {
                    "en": "traffic jams",
                    "vn": "tắc nghẽn giao thông"
                },
                {
                    "en": "unsafe driving habits",
                    "vn": "thói quen lái xe không an toàn"
                },
                {
                    "en": "strictly controlling",
                    "vn": "kiểm soát nghiêm ngặt"
                }
            ],
            "introVn": "Tai nạn giao thông và ùn tắc giao thông là những vấn đề nghiêm trọng ở nhiều thành phố ngày nay. Những vấn đề này có thể làm cho việc đi lại trở nên khó khăn và cũng gây ra nhiều nguy hiểm cho người tham gia giao thông. Bài luận này sẽ thảo luận về những nguyên nhân chính đằng sau các vấn đề này và đề xuất một số giải pháp khả thi.",
            "introChunks": [
                {
                    "en": "Traffic accidents and traffic congestion",
                    "vn": "Tai nạn giao thông và ùn tắc giao thông"
                },
                {
                    "en": "are serious problems",
                    "vn": "là những vấn đề nghiêm trọng"
                },
                {
                    "en": "in many cities today.",
                    "vn": "ở nhiều thành phố ngày nay."
                },
                {
                    "en": "These problems can make travelling difficult",
                    "vn": "Những vấn đề này có thể làm cho việc đi lại trở nên khó khăn"
                },
                {
                    "en": "and also cause many dangers",
                    "vn": "và cũng gây ra nhiều nguy hiểm"
                },
                {
                    "en": "for road users.",
                    "vn": "cho người tham gia giao thông."
                },
                {
                    "en": "This essay will discuss",
                    "vn": "Bài luận này sẽ thảo luận về"
                },
                {
                    "en": "the main reasons behind these issues",
                    "vn": "những nguyên nhân chính đằng sau các vấn đề này"
                },
                {
                    "en": "and suggest some possible solutions.",
                    "vn": "và đề xuất một số giải pháp khả thi."
                }
            ],
            "bodyParagraphs": [
                {
                    "title": "Đoạn 1: Nguyên nhân của tai nạn và ùn tắc (Main causes)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "several factors can explain why",
                                    "vn": "một số yếu tố có thể giải thích lý do tại sao",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "traffic accidents and congestion",
                                    "vn": "tai nạn giao thông và ùn tắc",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "increasingly common these days",
                                    "vn": "ngày càng phổ biến dạo gần đây",
                                    "isTopic": true
                                }
                            ]
                        },
                        {
                            "label": "Nguyên nhân 1: Sự gia tăng nhanh chóng của phương tiện cá nhân",
                            "hints": [
                                {
                                    "en": "the number of private vehicles",
                                    "vn": "số lượng phương tiện cá nhân",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "increasing quickly",
                                    "vn": "gia tăng nhanh chóng",
                                    "connector": ""
                                },
                                {
                                    "en": "prefer using cars and motorbikes",
                                    "vn": "chuộng sử dụng ô tô và xe máy",
                                    "newLine": true,
                                    "connector": ":"
                                },
                                {
                                    "en": "convenient",
                                    "vn": "thuận tiện, tiện lợi",
                                    "connector": "+"
                                },
                                {
                                    "en": "save time",
                                    "vn": "tiết kiệm thời gian",
                                    "connector": ""
                                },
                                {
                                    "en": "too many vehicles use the roads at the same time",
                                    "vn": "quá nhiều phương tiện lưu thông cùng lúc",
                                    "newLine": true,
                                    "connector": "➜"
                                },
                                {
                                    "en": "traffic congestion can easily happen",
                                    "vn": "ùn tắc giao thông có thể dễ dàng xảy ra",
                                    "connector": ":"
                                },
                                {
                                    "en": "especially during rush hours",
                                    "vn": "đặc biệt là trong giờ cao điểm"
                                }
                            ]
                        },
                        {
                            "label": "Nguyên nhân 2: Ý thức chấp hành luật giao thông kém",
                            "hints": [
                                {
                                    "en": "do not follow traffic rules",
                                    "vn": "không tuân thủ luật lệ giao thông",
                                    "connector": "",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "for example",
                                    "vn": "ví dụ",
                                    "newLine": true,
                                    "connector": ":"
                                },
                                {
                                    "en": "drive too fast",
                                    "vn": "lái xe quá tốc độ",
                                    "connector": "+"
                                },
                                {
                                    "en": "ignore traffic lights",
                                    "vn": "vượt đèn đỏ",
                                    "connector": "+"
                                },
                                {
                                    "en": "use their phones while driving",
                                    "vn": "dùng điện thoại khi đang lái xe",
                                    "connector": ""
                                },
                                {
                                    "en": "these behaviours",
                                    "vn": "những hành vi này",
                                    "newLine": true,
                                    "connector": "➜"
                                },
                                {
                                    "en": "cause serious traffic accidents",
                                    "vn": "gây ra các vụ tai nạn giao thông nghiêm trọng"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Đoạn 2: Các biện pháp giải quyết (Practical solutions)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "in order to address these problems",
                                    "vn": "để giải quyết các vấn đề này",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "several practical measures could be implemented",
                                    "vn": "một số biện pháp thiết thực có thể được thực hiện",
                                    "isTopic": true
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 1: Phát triển giao thông công cộng",
                            "hints": [
                                {
                                    "en": "One solution",
                                    "vn": "Một giải pháp",
                                    "connector": ":"
                                },
                                {
                                    "en": "improve public transport",
                                    "vn": "cải thiện giao thông công cộng",
                                    "connector": "",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "buses and trains",
                                    "vn": "xe buýt và tàu hỏa",
                                    "newLine": true,
                                    "connector": ":"
                                },
                                {
                                    "en": "cheap, comfortable and convenient",
                                    "vn": "giá rẻ, thoải mái và thuận tiện",
                                    "connector": ""
                                },
                                {
                                    "en": "choose them instead of using their own vehicles",
                                    "vn": "lựa chọn chúng thay vì dùng xe cá nhân",
                                    "newLine": true,
                                    "connector": "➜"
                                },
                                {
                                    "en": "fewer vehicles on the roads",
                                    "vn": "ít phương tiện hơn trên đường phố"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 2: Nâng cao ý thức người dân và xử phạt nghiêm",
                            "hints": [
                                {
                                    "en": "Another solution",
                                    "vn": "Một giải pháp khác",
                                    "connector": ":"
                                },
                                {
                                    "en": "raise public awareness about traffic rules",
                                    "vn": "nâng cao nhận thức về luật giao thông",
                                    "connector": "",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "give fines to people",
                                    "vn": "xử phạt những người",
                                    "newLine": true,
                                    "connector": ":"
                                },
                                {
                                    "en": "drive dangerously",
                                    "vn": "lái xe nguy hiểm",
                                    "connector": "+"
                                },
                                {
                                    "en": "break traffic laws",
                                    "vn": "vi phạm luật giao thông"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 3: Nâng cấp đường sá và hệ thống giao thông",
                            "hints": [
                                {
                                    "en": "improve roads",
                                    "vn": "nâng cấp, cải tạo đường sá",
                                    "connector": "+",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "build more suitable traffic systems",
                                    "vn": "xây dựng hệ thống giao thông phù hợp hơn",
                                    "connector": "➜"
                                },
                                {
                                    "en": "reduce traffic jams",
                                    "vn": "giảm thiểu ùn tắc giao thông"
                                }
                            ]
                        }
                    ]
                }
            ],
            "conclusionVn": "Tóm lại, số lượng ngày càng tăng của các phương tiện cá nhân và thói quen lái xe không an toàn của người dân là hai nguyên nhân chính gây ra các vấn đề giao thông. Việc cải thiện giao thông công cộng và kiểm soát nghiêm ngặt luật giao thông có thể giúp cho đường sá an toàn hơn và giảm ùn tắc giao thông.",
            "conclusionChunks": [
                {
                    "en": "In conclusion,",
                    "vn": "Tóm lại,"
                },
                {
                    "en": "the increasing number of private vehicles",
                    "vn": "số lượng ngày càng tăng của các phương tiện cá nhân"
                },
                {
                    "en": "and people's unsafe driving habits",
                    "vn": "và thói quen lái xe không an toàn của người dân"
                },
                {
                    "en": "are two major causes",
                    "vn": "là hai nguyên nhân chính"
                },
                {
                    "en": "of traffic problems.",
                    "vn": "gây ra các vấn đề giao thông."
                },
                {
                    "en": "Improving public transport",
                    "vn": "Việc cải thiện giao thông công cộng"
                },
                {
                    "en": "and strictly controlling traffic rules",
                    "vn": "và kiểm soát nghiêm ngặt luật giao thông"
                },
                {
                    "en": "can help make roads safer",
                    "vn": "có thể giúp cho đường sá an toàn hơn"
                },
                {
                    "en": "and reduce traffic congestion.",
                    "vn": "và giảm ùn tắc giao thông."
                }
            ],
            "sampleEssay": {
                "paragraphs": [
                    [
                        {
                            "en": "Traffic accidents and traffic congestion are serious problems in many cities today.",
                            "vn": "Tai nạn giao thông và ùn tắc giao thông là những vấn đề nghiêm trọng ở nhiều thành phố ngày nay.",
                            "isRed": false
                        },
                        {
                            "en": "These problems can make travelling difficult and also cause many dangers for road users.",
                            "vn": "Những vấn đề này có thể làm cho việc đi lại trở nên khó khăn và cũng gây ra nhiều nguy hiểm cho người tham gia giao thông.",
                            "isRed": false
                        },
                        {
                            "en": "This essay will discuss the main reasons behind these issues and suggest some possible solutions.",
                            "vn": "Bài luận này sẽ thảo luận về những nguyên nhân chính đằng sau các vấn đề này và đề xuất một số giải pháp khả thi.",
                            "isRed": true
                        }
                    ],
                    [
                        {
                            "en": "Several factors can explain why traffic accidents and congestion are increasingly common these days.",
                            "vn": "Một số yếu tố có thể giải thích tại sao tai nạn giao thông và ùn tắc ngày càng trở nên phổ biến dạo gần đây.",
                            "isRed": true
                        },
                        {
                            "en": "First of all, the number of private vehicles is increasing quickly.",
                            "vn": "Trước hết, số lượng các phương tiện cá nhân đang gia tăng một cách nhanh chóng.",
                            "isRed": false
                        },
                        {
                            "en": "Many people prefer using cars and motorbikes because they are convenient and save time.",
                            "vn": "Nhiều người thích sử dụng ô tô và xe máy hơn vì chúng tiện lợi và tiết kiệm thời gian.",
                            "isRed": false
                        },
                        {
                            "en": "However, when too many vehicles use the roads at the same time, traffic congestion can easily happen, especially during rush hours.",
                            "vn": "Tuy nhiên, khi có quá nhiều phương tiện lưu thông trên đường cùng một lúc, ùn tắc giao thông có thể dễ dàng xảy ra, đặc biệt là trong các giờ cao điểm.",
                            "isRed": false
                        },
                        {
                            "en": "In addition, some people do not follow traffic rules.",
                            "vn": "Thêm vào đó, một số người không tuân thủ luật lệ giao thông.",
                            "isRed": false
                        },
                        {
                            "en": "For example, they may drive too fast, ignore traffic lights, or use their phones while driving.",
                            "vn": "Ví dụ, họ có thể lái xe quá tốc độ, vượt đèn đỏ hoặc sử dụng điện thoại trong khi đang lái xe.",
                            "isRed": false
                        },
                        {
                            "en": "These behaviours can cause serious traffic accidents.",
                            "vn": "Những hành vi này có thể gây ra những vụ tai nạn giao thông nghiêm trọng.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "In order to address these problems, several practical measures could be implemented.",
                            "vn": "Để giải quyết những vấn đề này, một số biện pháp thiết thực có thể được thực hiện.",
                            "isRed": true
                        },
                        {
                            "en": "One solution is to improve public transport.",
                            "vn": "Một giải pháp là cải thiện hệ thống phương tiện giao thông công cộng.",
                            "isRed": false
                        },
                        {
                            "en": "If buses and trains are cheap, comfortable and convenient, more people may choose them instead of using their own vehicles.",
                            "vn": "Nếu xe buýt và tàu hỏa có giá rẻ, thoải mái và thuận tiện, nhiều người có thể lựa chọn chúng thay vì sử dụng xe cá nhân.",
                            "isRed": false
                        },
                        {
                            "en": "As a result, there will be fewer vehicles on the roads.",
                            "vn": "Kết quả là, sẽ có ít phương tiện hơn lưu thông trên đường.",
                            "isRed": false
                        },
                        {
                            "en": "Another solution is to raise public awareness about traffic rules.",
                            "vn": "Một giải pháp khác là nâng cao nhận thức của người dân về luật giao thông.",
                            "isRed": false
                        },
                        {
                            "en": "The government should give fines to people who drive dangerously or break traffic laws.",
                            "vn": "Chính phủ nên xử phạt những người lái xe nguy hiểm hoặc vi phạm luật giao thông.",
                            "isRed": false
                        },
                        {
                            "en": "In addition, cities can improve roads and build more suitable traffic systems to reduce traffic jams.",
                            "vn": "Ngoài ra, các thành phố có thể nâng cấp đường sá và xây dựng các hệ thống giao thông phù hợp hơn để giảm bớt ùn tắc.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "In conclusion, the increasing number of private vehicles and people's unsafe driving habits are two major causes of traffic problems.",
                            "vn": "Tóm lại, số lượng phương tiện cá nhân ngày càng gia tăng và thói quen lái xe không an toàn của người dân là hai nguyên nhân chính gây ra các vấn đề giao thông.",
                            "isRed": true
                        },
                        {
                            "en": "Improving public transport and strictly controlling traffic rules can help make roads safer and reduce traffic congestion.",
                            "vn": "Việc nâng cao chất lượng giao thông công cộng và kiểm soát chặt chẽ luật giao thông có thể giúp đường sá an toàn hơn và giảm bớt ùn tắc giao thông.",
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

const existingIndex = sandbox.ESSAY_TOPICS.findIndex(e => e.id === 'traffic-accidents-congestion');
if (existingIndex !== -1) {
    sandbox.ESSAY_TOPICS[existingIndex] = newEssay;
    console.log('Updated existing essay 22 (traffic-accidents-congestion)');
} else {
    sandbox.ESSAY_TOPICS.push(newEssay);
    console.log('Added new essay 22 (traffic-accidents-congestion)');
}

const jsonStr = JSON.stringify(sandbox.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};\n`;
fs.writeFileSync(dataFilePath, output, 'utf8');

console.log('essays-data.js updated successfully! Total essays:', sandbox.ESSAY_TOPICS.length);
