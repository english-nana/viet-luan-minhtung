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
    "id": "keeping-a-diary",
    "title": "21. Thói quen viết nhật ký",
    "summary": "Bài luận về những lợi ích của việc viết nhật ký đối với sức khỏe tinh thần, thấu hiểu bản thân và lưu giữ những khoảnh khắc quan trọng.",
    "isMatchingVocab": true,
    "meta": {
        "category": "Đời sống & Xã hội",
        "taskType": "Advantages / Disadvantages",
        "level": "B1",
        "estimatedMinutes": 40
    },
    "prompt": [
        {
            "en": "Many people keep a diary to write about their daily lives, thoughts and feelings.",
            "vn": "Nhiều người viết nhật ký để ghi lại cuộc sống hàng ngày, suy nghĩ và cảm xúc của họ."
        },
        {
            "en": "What are the benefits of keeping a diary?",
            "vn": "Những lợi ích của việc viết nhật ký là gì?"
        },
        {
            "en": "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            "vn": "Hãy đưa ra lý do cho câu trả lời của bạn và bao gồm các ví dụ liên quan từ kiến thức hoặc trải nghiệm của chính bạn."
        }
    ],
    "introEnExpectedLength": 245,
    "conclusionEnExpectedLength": 214,
    "currentVariantIndex": 0,
    "variants": [
        {
            "name": "Level B1",
            "vocab": [
                {
                    "en": "keep a diary",
                    "vn": "viết nhật ký"
                },
                {
                    "en": "daily lives",
                    "vn": "cuộc sống hàng ngày"
                },
                {
                    "en": "thoughts and feelings",
                    "vn": "suy nghĩ và cảm xúc"
                },
                {
                    "en": "a simple habit",
                    "vn": "một thói quen đơn giản"
                },
                {
                    "en": "reduce stress",
                    "vn": "giảm căng thẳng"
                },
                {
                    "en": "have problems",
                    "vn": "gặp phải vấn đề"
                },
                {
                    "en": "relationships",
                    "vn": "các mối quan hệ"
                },
                {
                    "en": "worried or upset",
                    "vn": "lo lắng hoặc buồn bã"
                },
                {
                    "en": "express their emotions",
                    "vn": "bộc lộ, giải tỏa cảm xúc"
                },
                {
                    "en": "keep everything inside",
                    "vn": "kìm nén mọi thứ bên trong"
                },
                {
                    "en": "feel calmer",
                    "vn": "cảm thấy bình tĩnh hơn"
                },
                {
                    "en": "relaxed",
                    "vn": "thư thái, thoải mái"
                },
                {
                    "en": "understand themselves better",
                    "vn": "thấu hiểu bản thân tốt hơn"
                },
                {
                    "en": "daily experiences",
                    "vn": "những trải nghiệm hàng ngày"
                },
                {
                    "en": "personal goals and plans",
                    "vn": "các mục tiêu và kế hoạch cá nhân"
                },
                {
                    "en": "make better decisions",
                    "vn": "đưa ra những quyết định tốt hơn"
                },
                {
                    "en": "remember important moments",
                    "vn": "ghi nhớ những khoảnh khắc quan trọng"
                },
                {
                    "en": "special events",
                    "vn": "các sự kiện đặc biệt"
                },
                {
                    "en": "difficult times",
                    "vn": "những giai đoạn khó khăn"
                },
                {
                    "en": "appreciate past experiences",
                    "vn": "trân trọng những trải nghiệm trong quá khứ"
                },
                {
                    "en": "positive effects",
                    "vn": "những tác động tích cực"
                }
            ],
            "introVn": "Ngày nay, nhiều người dành thời gian viết về cuộc sống hàng ngày, suy nghĩ và cảm xúc của họ vào một cuốn nhật ký. Đây là một thói quen đơn giản, nhưng nó có thể mang lại một số lợi ích cho cuộc sống của con người. Bài luận này sẽ thảo luận về một số lợi ích chính của việc viết nhật ký.",
            "introChunks": [
                {
                    "en": "Nowadays,",
                    "vn": "Ngày nay,"
                },
                {
                    "en": "many people spend some time",
                    "vn": "nhiều người dành thời gian"
                },
                {
                    "en": "writing about their daily lives, thoughts and feelings",
                    "vn": "viết về cuộc sống hàng ngày, suy nghĩ và cảm xúc của họ"
                },
                {
                    "en": "in a diary.",
                    "vn": "vào một cuốn nhật ký."
                },
                {
                    "en": "This is a simple habit,",
                    "vn": "Đây là một thói quen đơn giản,"
                },
                {
                    "en": "but it can bring several benefits to people's lives.",
                    "vn": "nhưng nó có thể mang lại một số lợi ích cho cuộc sống của con người."
                },
                {
                    "en": "This essay will discuss",
                    "vn": "Bài luận này sẽ thảo luận về"
                },
                {
                    "en": "some of the main advantages",
                    "vn": "một số lợi ích chính"
                },
                {
                    "en": "of keeping a diary.",
                    "vn": "của việc viết nhật ký."
                }
            ],
            "bodyParagraphs": [
                {
                    "title": "Đoạn 1: Giảm căng thẳng (Reduce stress)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "First of all",
                                    "vn": "Trước hết",
                                    "connector": ":"
                                },
                                {
                                    "en": "one important benefit of this habit",
                                    "vn": "một lợi ích quan trọng của thói quen này",
                                    "connector": "➜",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "help people reduce stress",
                                    "vn": "giúp con người giảm căng thẳng"
                                }
                            ]
                        },
                        {
                            "label": "Lợi ích 1: Giải tỏa áp lực và cảm xúc tiêu cực",
                            "hints": [
                                {
                                    "en": "problems at school, work, or relationships",
                                    "vn": "các vấn đề ở trường học, nơi làm việc hoặc trong các mối quan hệ",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "feel worried or upset",
                                    "vn": "cảm thấy lo lắng hoặc buồn bã",
                                    "connector": "➜"
                                },
                                {
                                    "en": "write down thoughts and feelings",
                                    "vn": "viết ra những suy nghĩ và cảm xúc",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "express their emotions",
                                    "vn": "bộc lộ và giải tỏa cảm xúc của mình",
                                    "connector": "➜"
                                },
                                {
                                    "en": "instead of keeping everything inside",
                                    "vn": "thay vì kìm nén mọi thứ bên trong",
                                    "connector": "➜"
                                },
                                {
                                    "en": "feel calmer and more relaxed after writing",
                                    "vn": "cảm thấy bình tĩnh hơn và thư thái hơn sau khi viết"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Đoạn 2: Thấu hiểu bản thân tốt hơn (Understand themselves better)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "Secondly",
                                    "vn": "Thứ hai",
                                    "connector": ":"
                                },
                                {
                                    "en": "another benefit",
                                    "vn": "một lợi ích khác",
                                    "connector": "➜",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "help people understand themselves better",
                                    "vn": "giúp con người thấu hiểu bản thân tốt hơn"
                                }
                            ]
                        },
                        {
                            "label": "Lợi ích 2: Nhìn nhận bản thân và định hướng tương lai",
                            "hints": [
                                {
                                    "en": "write about daily experiences",
                                    "vn": "viết về những trải nghiệm hàng ngày",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "reflect on what they did well",
                                    "vn": "suy ngẫm về những điều mình đã làm tốt",
                                    "connector": "+"
                                },
                                {
                                    "en": "problems they faced",
                                    "vn": "những vấn đề mình đã gặp phải",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "write about personal goals and plans",
                                    "vn": "viết về các mục tiêu và kế hoạch cá nhân",
                                    "connector": "➜"
                                },
                                {
                                    "en": "understand their feelings",
                                    "vn": "hiểu rõ cảm xúc của mình",
                                    "connector": "+"
                                },
                                {
                                    "en": "make better decisions in the future",
                                    "vn": "đưa ra những quyết định tốt hơn trong tương lai"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Đoạn 3: Lưu giữ những khoảnh khắc quan trọng (Remember important moments)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "Finally",
                                    "vn": "Cuối cùng",
                                    "connector": ":"
                                },
                                {
                                    "en": "a significant advantage",
                                    "vn": "một lợi ích đáng kể",
                                    "connector": "➜",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "remember important moments in life",
                                    "vn": "ghi nhớ những khoảnh khắc quan trọng trong cuộc đời"
                                }
                            ]
                        },
                        {
                            "label": "Lợi ích 3: Lưu giữ kỷ niệm và trân trọng quá khứ",
                            "hints": [
                                {
                                    "en": "record special events and happy experiences",
                                    "vn": "ghi lại những sự kiện đặc biệt và trải nghiệm vui vẻ",
                                    "connector": "+",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "difficult times in daily life",
                                    "vn": "những giai đoạn khó khăn trong cuộc sống thường ngày",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "read old diaries after some years",
                                    "vn": "đọc lại nhật ký cũ sau một vài năm",
                                    "connector": "➜"
                                },
                                {
                                    "en": "recall memorable moments",
                                    "vn": "nhớ lại những khoảnh khắc đáng nhớ",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "see how they have changed",
                                    "vn": "thấy bản thân đã thay đổi như thế nào",
                                    "connector": "+"
                                },
                                {
                                    "en": "appreciate past experiences",
                                    "vn": "trân trọng những trải nghiệm trong quá khứ"
                                }
                            ]
                        }
                    ]
                }
            ],
            "conclusionVn": "Tóm lại, việc viết nhật ký có thể giúp con người giảm căng thẳng, thấu hiểu bản thân tốt hơn và ghi nhớ những khoảnh khắc quan trọng. Do đó, đây là một thói quen đơn giản có thể mang lại nhiều tác động tích cực đối với cuộc sống của con người.",
            "conclusionChunks": [
                {
                    "en": "In conclusion,",
                    "vn": "Tóm lại,"
                },
                {
                    "en": "keeping a diary can help people",
                    "vn": "việc viết nhật ký có thể giúp con người"
                },
                {
                    "en": "reduce stress,",
                    "vn": "giảm căng thẳng,"
                },
                {
                    "en": "understand themselves better",
                    "vn": "thấu hiểu bản thân tốt hơn"
                },
                {
                    "en": "and remember important moments.",
                    "vn": "và ghi nhớ những khoảnh khắc quan trọng."
                },
                {
                    "en": "Therefore,",
                    "vn": "Do đó,"
                },
                {
                    "en": "it is a simple habit",
                    "vn": "đây là một thói quen đơn giản"
                },
                {
                    "en": "that can have many positive effects",
                    "vn": "có thể mang lại nhiều tác động tích cực"
                },
                {
                    "en": "on people's lives.",
                    "vn": "đối với cuộc sống của con người."
                }
            ],
            "sampleEssay": {
                "paragraphs": [
                    [
                        {
                            "en": "Nowadays, many people spend some time writing about their daily lives, thoughts and feelings in a diary.",
                            "vn": "Ngày nay, nhiều người dành thời gian viết về cuộc sống hàng ngày, suy nghĩ và cảm xúc của họ vào một cuốn nhật ký.",
                            "isRed": false
                        },
                        {
                            "en": "This is a simple habit, but it can bring several benefits to people's lives.",
                            "vn": "Đây là một thói quen đơn giản, nhưng nó có thể mang lại một số lợi ích cho cuộc sống của con người.",
                            "isRed": false
                        },
                        {
                            "en": "This essay will discuss some of the main advantages of keeping a diary.",
                            "vn": "Bài luận này sẽ thảo luận về một số lợi ích chính của việc viết nhật ký.",
                            "isRed": true
                        }
                    ],
                    [
                        {
                            "en": "First of all, one important benefit of this habit is that keeping a diary can help people reduce stress.",
                            "vn": "Trước hết, một lợi ích quan trọng của thói quen này là việc viết nhật ký có thể giúp con người giảm căng thẳng.",
                            "isRed": true
                        },
                        {
                            "en": "When people have problems at school, at work or in their relationships, they may feel worried or upset.",
                            "vn": "Khi con người gặp vấn đề ở trường học, nơi làm việc hoặc trong các mối quan hệ, họ có thể cảm thấy lo lắng hoặc buồn bã.",
                            "isRed": false
                        },
                        {
                            "en": "Writing down their thoughts and feelings can help them express their emotions instead of keeping everything inside.",
                            "vn": "Viết ra những suy nghĩ và cảm xúc có thể giúp họ giải tỏa cảm xúc thay vì kìm nén mọi thứ bên trong.",
                            "isRed": false
                        },
                        {
                            "en": "As a result, they may feel calmer and more relaxed after writing.",
                            "vn": "Kết quả là, họ có thể cảm thấy bình tĩnh hơn và thư thái hơn sau khi viết.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "Secondly, another benefit is that writing a diary can help people understand themselves better.",
                            "vn": "Thứ hai, một lợi ích khác là viết nhật ký có thể giúp con người thấu hiểu bản thân tốt hơn.",
                            "isRed": true
                        },
                        {
                            "en": "By writing about their daily experiences, they can think about what they did well and what problems they had.",
                            "vn": "Bằng cách viết về những trải nghiệm hàng ngày, họ có thể suy ngẫm về những điều mình đã làm tốt và những vấn đề mình gặp phải.",
                            "isRed": false
                        },
                        {
                            "en": "They can also write about their personal goals and plans.",
                            "vn": "Họ cũng có thể viết về các mục tiêu và kế hoạch cá nhân của mình.",
                            "isRed": false
                        },
                        {
                            "en": "This can help them understand their feelings and make better decisions in the future.",
                            "vn": "Điều này có thể giúp họ hiểu được cảm xúc của mình và đưa ra những quyết định tốt hơn trong tương lai.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "Finally, keeping a diary can help people remember important moments in their lives.",
                            "vn": "Cuối cùng, viết nhật ký có thể giúp con người ghi nhớ những khoảnh khắc quan trọng trong cuộc đời của họ.",
                            "isRed": true
                        },
                        {
                            "en": "People can write about special events, happy experiences or difficult times in their daily lives.",
                            "vn": "Mọi người có thể viết về những sự kiện đặc biệt, những trải nghiệm vui vẻ hoặc những giai đoạn khó khăn trong cuộc sống thường ngày.",
                            "isRed": false
                        },
                        {
                            "en": "After some years, they can read their old diary and remember these moments.",
                            "vn": "Sau một vài năm, họ có thể đọc lại cuốn nhật ký cũ của mình và nhớ lại những khoảnh khắc này.",
                            "isRed": false
                        },
                        {
                            "en": "This can help them see how they have changed and appreciate their past experiences.",
                            "vn": "Điều này có thể giúp họ thấy được bản thân đã thay đổi như thế nào và trân trọng những trải nghiệm trong quá khứ.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "In conclusion, keeping a diary can help people reduce stress, understand themselves better and remember important moments.",
                            "vn": "Tóm lại, viết nhật ký có thể giúp con người giảm căng thẳng, thấu hiểu bản thân tốt hơn và ghi nhớ những khoảnh khắc quan trọng.",
                            "isRed": true
                        },
                        {
                            "en": "Therefore, it is a simple habit that can have many positive effects on people's lives.",
                            "vn": "Do đó, đây là một thói quen đơn giản có thể mang lại nhiều tác động tích cực đối với cuộc sống của con người.",
                            "isRed": false
                        }
                    ]
                ]
            }
        }
    ]
};

const existingIndex = sandbox.ESSAY_TOPICS.findIndex(e => e.id === 'keeping-a-diary');
if (existingIndex !== -1) {
    sandbox.ESSAY_TOPICS[existingIndex] = newEssay;
    console.log('Updated existing essay 21 (keeping-a-diary)');
} else {
    sandbox.ESSAY_TOPICS.push(newEssay);
    console.log('Added new essay 21 (keeping-a-diary)');
}

const jsonStr = JSON.stringify(sandbox.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};\n`;
fs.writeFileSync(dataFilePath, output, 'utf8');

console.log('essays-data.js updated successfully! Total essays:', sandbox.ESSAY_TOPICS.length);
