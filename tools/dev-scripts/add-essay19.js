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
        "level": "B1-B2-C1",
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
                                    "en": "be careful when",
                                    "vn": "cẩn thận khi",
                                    "prefix": "(",
                                    "connector": ":"
                                },
                                {
                                    "en": "clicking on unknown links",
                                    "vn": "nhấp vào các liên kết lạ",
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
        },
        {
            "name": "Level C1",
            "vocab": [
                {
                    "en": "growing concern",
                    "vn": "mối lo ngại ngày càng tăng"
                },
                {
                    "en": "conduct daily activities",
                    "vn": "thực hiện các hoạt động hàng ngày"
                },
                {
                    "en": "exposed to",
                    "vn": "tiếp xúc với"
                },
                {
                    "en": "financial damage",
                    "vn": "thiệt hại về tài chính"
                },
                {
                    "en": "commit fraud",
                    "vn": "thực hiện hành vi gian lận"
                },
                {
                    "en": "confidential information",
                    "vn": "thông tin bí mật / bảo mật"
                },
                {
                    "en": "loss of trust and privacy",
                    "vn": "sự mất mát niềm tin và quyền riêng tư"
                },
                {
                    "en": "leaked",
                    "vn": "bị rò rỉ"
                },
                {
                    "en": "lose confidence in",
                    "vn": "mất niềm tin vào"
                },
                {
                    "en": "in the long term",
                    "vn": "về lâu dài"
                },
                {
                    "en": "tackle this issue",
                    "vn": "giải quyết vấn đề này"
                },
                {
                    "en": "strengthen cybercrime laws",
                    "vn": "tăng cường luật về tội phạm mạng"
                },
                {
                    "en": "stricter punishments",
                    "vn": "các hình phạt nghiêm khắc hơn"
                },
                {
                    "en": "discourage criminals",
                    "vn": "ngăn chặn / răn đe tội phạm"
                },
                {
                    "en": "cybersecurity systems",
                    "vn": "các hệ thống an ninh mạng"
                },
                {
                    "en": "multi-factor authentication",
                    "vn": "xác thực đa yếu tố"
                },
                {
                    "en": "sensitive information",
                    "vn": "thông tin nhạy cảm"
                },
                {
                    "en": "eliminate cybercrime completely",
                    "vn": "loại bỏ hoàn toàn tội phạm mạng"
                },
                {
                    "en": "public awareness",
                    "vn": "nhận thức cộng đồng"
                },
                {
                    "en": "combined effort",
                    "vn": "sự nỗ lực chung / phối hợp"
                }
            ],
            "introChunks": [
                {
                    "en": "In today's digital world,",
                    "vn": "Trong thế giới kỹ thuật số ngày nay,"
                },
                {
                    "en": "cybercrime has become",
                    "vn": "tội phạm mạng đã trở thành"
                },
                {
                    "en": "a growing concern for",
                    "vn": "một mối lo ngại ngày càng tăng đối với"
                },
                {
                    "en": "individuals, businesses, and governments.",
                    "vn": "các cá nhân, doanh nghiệp và chính phủ."
                },
                {
                    "en": "Since people rely more on the Internet",
                    "vn": "Vì mọi người phụ thuộc nhiều hơn vào Internet"
                },
                {
                    "en": "to store information",
                    "vn": "để lưu trữ thông tin"
                },
                {
                    "en": "and conduct daily activities,",
                    "vn": "và thực hiện các hoạt động hàng ngày,"
                },
                {
                    "en": "they are also more exposed to",
                    "vn": "họ cũng tiếp xúc nhiều hơn với"
                },
                {
                    "en": "online attacks.",
                    "vn": "các cuộc tấn công trực tuyến."
                },
                {
                    "en": "This essay will discuss",
                    "vn": "Bài luận này sẽ thảo luận về"
                },
                {
                    "en": "some major impacts of cybercrime",
                    "vn": "một số tác động lớn của tội phạm mạng"
                },
                {
                    "en": "and suggest possible solutions",
                    "vn": "và đề xuất các giải pháp khả thi"
                },
                {
                    "en": "to address this issue.",
                    "vn": "để giải quyết vấn đề này."
                }
            ],
            "introVn": "Trong thế giới kỹ thuật số ngày nay, tội phạm mạng đã trở thành một mối lo ngại ngày càng tăng đối với các cá nhân, doanh nghiệp và chính phủ. Vì mọi người phụ thuộc nhiều hơn vào Internet để lưu trữ thông tin và thực hiện các hoạt động hàng ngày, họ cũng tiếp xúc nhiều hơn với các cuộc tấn công trực tuyến. Bài luận này sẽ thảo luận về một số tác động lớn của tội phạm mạng và đề xuất các giải pháp khả thi để giải quyết vấn đề này.",
            "introEnExpectedLength": 340,
            "conclusionEnExpectedLength": 390,
            "bodyParagraphs": [
                {
                    "title": "Đoạn 1: Tác động của tội phạm mạng (Impacts of Cybercrime)",
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
                            "label": "Tác động 1: Thiệt hại tài chính đối với cá nhân & tổ chức",
                            "hints": [
                                {
                                    "en": "financial damage",
                                    "vn": "thiệt hại tài chính",
                                    "connector": "–",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "both individuals and organizations",
                                    "vn": "cả cá nhân và các tổ chức",
                                    "connector": ":"
                                },
                                {
                                    "en": "steal banking information, passwords, or credit card details",
                                    "vn": "đánh cắp thông tin ngân hàng, mật khẩu hoặc thẻ tín dụng",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "commit fraud",
                                    "vn": "thực hiện hành vi gian lận",
                                    "connector": ""
                                },
                                {
                                    "en": "businesses",
                                    "vn": "doanh nghiệp",
                                    "connector": ":",
                                    "newLine": true
                                },
                                {
                                    "en": "lose large amounts of money",
                                    "vn": "mất những khoản tiền lớn",
                                    "connector": "➜"
                                },
                                {
                                    "en": "systems are attacked",
                                    "vn": "hệ thống bị tấn công",
                                    "connector": "+"
                                },
                                {
                                    "en": "confidential information is stolen",
                                    "vn": "thông tin bí mật bị đánh cắp"
                                }
                            ]
                        },
                        {
                            "label": "Tác động 2: Mất niềm tin và quyền riêng tư",
                            "hints": [
                                {
                                    "en": "loss of trust and privacy",
                                    "vn": "mất niềm tin và quyền riêng tư",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "personal information is leaked",
                                    "vn": "thông tin cá nhân bị rò rỉ",
                                    "connector": "➜"
                                },
                                {
                                    "en": "feel unsafe using online services",
                                    "vn": "cảm thấy không an toàn khi dùng dịch vụ trực tuyến",
                                    "connector": "➜"
                                },
                                {
                                    "en": "lose confidence in companies",
                                    "vn": "mất niềm tin vào các công ty",
                                    "connector": "+",
                                    "newLine": true
                                },
                                {
                                    "en": "fail to protect their data",
                                    "vn": "không bảo vệ được dữ liệu",
                                    "connector": "➜"
                                },
                                {
                                    "en": "in the long term",
                                    "vn": "về lâu dài",
                                    "connector": ":",
                                    "prefix": "("
                                },
                                {
                                    "en": "damage not only people's privacy",
                                    "vn": "không chỉ tổn hại quyền riêng tư của mọi người",
                                    "connector": "+"
                                },
                                {
                                    "en": "reputation of businesses",
                                    "vn": "danh tiếng của doanh nghiệp",
                                    "suffix": ")"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Đoạn 2: Các biện pháp giải quyết (Proposed Solutions)",
                    "hintGroups": [
                        {
                            "label": "Topic sentence",
                            "hints": [
                                {
                                    "en": "several measures can be taken",
                                    "vn": "một số biện pháp có thể được thực hiện",
                                    "connector": "➜",
                                    "isTopic": true
                                },
                                {
                                    "en": "tackle this issue",
                                    "vn": "giải quyết vấn đề này",
                                    "isTopic": true
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 1: Chính phủ tăng cường luật pháp và chế tài",
                            "hints": [
                                {
                                    "en": "governments",
                                    "vn": "chính phủ",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "strengthen cybercrime laws",
                                    "vn": "tăng cường luật về tội phạm mạng",
                                    "connector": "+"
                                },
                                {
                                    "en": "introduce stricter punishments",
                                    "vn": "đưa ra các hình phạt nghiêm khắc hơn",
                                    "connector": "➜",
                                    "newLine": true
                                },
                                {
                                    "en": "discourage criminals",
                                    "vn": "ngăn chặn / răn đe tội phạm",
                                    "connector": "➜"
                                },
                                {
                                    "en": "carrying out online attacks",
                                    "vn": "thực hiện các cuộc tấn công trực tuyến"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 2: Doanh nghiệp nâng cấp an ninh mạng",
                            "hints": [
                                {
                                    "en": "businesses",
                                    "vn": "doanh nghiệp",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "improve cybersecurity systems",
                                    "vn": "cải thiện các hệ thống an ninh mạng",
                                    "connector": "➜"
                                },
                                {
                                    "en": "stronger passwords",
                                    "vn": "mật khẩu mạnh hơn",
                                    "connector": "+",
                                    "newLine": true
                                },
                                {
                                    "en": "multi-factor authentication",
                                    "vn": "xác thực đa yếu tố",
                                    "connector": "+"
                                },
                                {
                                    "en": "regular software updates",
                                    "vn": "cập nhật phần mềm thường xuyên",
                                    "connector": "➜"
                                },
                                {
                                    "en": "make it harder for hackers",
                                    "vn": "khiến tin tặc khó khăn hơn",
                                    "connector": "➜"
                                },
                                {
                                    "en": "gain access to sensitive information",
                                    "vn": "tiếp cận thông tin nhạy cảm"
                                }
                            ]
                        },
                        {
                            "label": "Giải pháp 3: Nâng cao giáo dục an toàn trực tuyến cho cá nhân",
                            "hints": [
                                {
                                    "en": "individuals",
                                    "vn": "cá nhân",
                                    "connector": ":",
                                    "isBoldRed": true
                                },
                                {
                                    "en": "receive better education about online safety",
                                    "vn": "được giáo dục tốt hơn về an toàn trực tuyến",
                                    "connector": "➜"
                                },
                                {
                                    "en": "schools and workplaces provide guidance",
                                    "vn": "trường học và nơi làm việc hướng dẫn",
                                    "connector": ":",
                                    "prefix": "(",
                                    "newLine": true
                                },
                                {
                                    "en": "recognizing suspicious emails",
                                    "vn": "nhận diện các email đáng ngờ",
                                    "connector": "+"
                                },
                                {
                                    "en": "avoiding unsafe links",
                                    "vn": "tránh các liên kết không an toàn",
                                    "connector": "+"
                                },
                                {
                                    "en": "protecting personal information",
                                    "vn": "bảo vệ thông tin cá nhân",
                                    "connector": "➜",
                                    "suffix": ")"
                                },
                                {
                                    "en": "more careful on the Internet",
                                    "vn": "cẩn thận hơn trên Internet",
                                    "connector": "➜"
                                },
                                {
                                    "en": "reduce the number of successful cyberattacks",
                                    "vn": "giảm số vụ tấn công mạng thành công"
                                }
                            ]
                        }
                    ]
                }
            ],
            "conclusionChunks": [
                {
                    "en": "In conclusion|In conclusion,",
                    "vn": "Tóm lại,"
                },
                {
                    "en": "cybercrime can cause",
                    "vn": "tội phạm mạng có thể gây ra"
                },
                {
                    "en": "serious financial losses",
                    "vn": "những tổn thất tài chính nghiêm trọng"
                },
                {
                    "en": "as well as damage",
                    "vn": "cũng như làm tổn hại đến"
                },
                {
                    "en": "people's privacy and trust",
                    "vn": "quyền riêng tư và niềm tin của mọi người"
                },
                {
                    "en": "in digital services.",
                    "vn": "vào các dịch vụ kỹ thuật số."
                },
                {
                    "en": "Although it is difficult to",
                    "vn": "Mặc dù rất khó để"
                },
                {
                    "en": "eliminate cybercrime completely|eliminate cybercrime completely,",
                    "vn": "loại bỏ hoàn toàn tội phạm mạng,"
                },
                {
                    "en": "stronger laws, better cybersecurity|stronger laws, better cybersecurity,",
                    "vn": "nhưng luật pháp nghiêm minh hơn, an ninh mạng tốt hơn"
                },
                {
                    "en": "and greater public awareness",
                    "vn": "và nhận thức cộng đồng cao hơn"
                },
                {
                    "en": "can significantly reduce its impact.",
                    "vn": "có thể giảm đáng kể tác động của nó."
                },
                {
                    "en": "A combined effort from",
                    "vn": "Sự nỗ lực chung từ"
                },
                {
                    "en": "governments, organisations, and individuals|governments, organizations, and individuals",
                    "vn": "các chính phủ, tổ chức và cá nhân"
                },
                {
                    "en": "is therefore essential",
                    "vn": "do đó là điều cần thiết"
                },
                {
                    "en": "to create a safer digital environment.",
                    "vn": "để tạo ra một môi trường kỹ thuật số an toàn hơn."
                }
            ],
            "conclusionVn": "Tóm lại, tội phạm mạng có thể gây ra những tổn thất tài chính nghiêm trọng cũng như làm tổn hại đến quyền riêng tư và niềm tin của mọi người vào các dịch vụ kỹ thuật số. Mặc dù rất khó để loại bỏ hoàn toàn tội phạm mạng, nhưng luật pháp nghiêm minh hơn, an ninh mạng tốt hơn và nhận thức cộng đồng cao hơn có thể giảm đáng kể tác động của nó. Sự nỗ lực chung từ các chính phủ, tổ chức và cá nhân do đó là điều cần thiết để tạo ra một môi trường kỹ thuật số an toàn hơn.",
            "sampleEssay": {
                "paragraphs": [
                    [
                        {
                            "en": "In today's digital world, cybercrime has become a growing concern for individuals, businesses, and governments.",
                            "vn": "Trong thế giới kỹ thuật số ngày nay, tội phạm mạng đã trở thành một mối lo ngại ngày càng tăng đối với các cá nhân, doanh nghiệp và chính phủ.",
                            "isRed": false
                        },
                        {
                            "en": "Since people rely more on the Internet to store information and conduct daily activities, they are also more exposed to online attacks.",
                            "vn": "Vì mọi người phụ thuộc nhiều hơn vào Internet để lưu trữ thông tin và thực hiện các hoạt động hàng ngày, họ cũng tiếp xúc nhiều hơn với các cuộc tấn công trực tuyến.",
                            "isRed": false
                        },
                        {
                            "en": "This essay will discuss some major impacts of cybercrime and suggest possible solutions to address this issue.",
                            "vn": "Bài luận này sẽ thảo luận về một số tác động lớn của tội phạm mạng và đề xuất các giải pháp khả thi để giải quyết vấn đề này.",
                            "isRed": true
                        }
                    ],
                    [
                        {
                            "en": "To begin with, cybercrime can have several negative effects on individuals, businesses and governments.",
                            "vn": "Trước hết, tội phạm mạng có thể gây ra một số ảnh hưởng tiêu cực đối với các cá nhân, doanh nghiệp và chính phủ.",
                            "isRed": true
                        },
                        {
                            "en": "One major impact of cybercrime is the financial damage it causes to both individuals and organizations.",
                            "vn": "Một tác động lớn của tội phạm mạng là thiệt hại tài chính mà nó gây ra cho cả cá nhân và các tổ chức.",
                            "isRed": false
                        },
                        {
                            "en": "Hackers can steal people's banking information, passwords, or credit card details and use them to commit fraud.",
                            "vn": "Tin tặc có thể đánh cắp thông tin tài khoản ngân hàng, mật khẩu hoặc chi tiết thẻ tín dụng của mọi người và sử dụng chúng để thực hiện hành vi gian lận.",
                            "isRed": false
                        },
                        {
                            "en": "Businesses may also lose large amounts of money when their systems are attacked or when confidential information is stolen.",
                            "vn": "Các doanh nghiệp cũng có thể mất những khoản tiền lớn khi hệ thống của họ bị tấn công hoặc khi thông tin bí mật bị đánh cắp.",
                            "isRed": false
                        },
                        {
                            "en": "Another serious impact is the loss of trust and privacy.",
                            "vn": "Một tác động nghiêm trọng khác là sự mất mát về niềm tin và quyền riêng tư.",
                            "isRed": false
                        },
                        {
                            "en": "When personal information is leaked, victims may feel unsafe using online services, while customers may lose confidence in companies that fail to protect their data.",
                            "vn": "Khi thông tin cá nhân bị rò rỉ, các nạn nhân có thể cảm thấy không an toàn khi sử dụng dịch vụ trực tuyến, trong khi khách hàng có thể mất niềm tin vào các công ty không bảo vệ được dữ liệu của họ.",
                            "isRed": false
                        },
                        {
                            "en": "In the long term, cyberattacks can damage not only people's privacy but also the reputation of businesses.",
                            "vn": "Về lâu dài, các cuộc tấn công mạng không chỉ có thể làm tổn hại quyền riêng tư của mọi người mà còn cả danh tiếng của các doanh nghiệp.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "Several measures can be taken to tackle this issue.",
                            "vn": "Một số biện pháp có thể được thực hiện để giải quyết vấn đề này.",
                            "isRed": true
                        },
                        {
                            "en": "Firstly, governments should strengthen cybercrime laws and introduce stricter punishments.",
                            "vn": "Trước hết, các chính phủ nên tăng cường luật về tội phạm mạng và đưa ra các hình phạt nghiêm khắc hơn.",
                            "isRed": false
                        },
                        {
                            "en": "These measures can discourage criminals from carrying out online attacks.",
                            "vn": "Những biện pháp này có thể ngăn chặn tội phạm thực hiện các cuộc tấn công trực tuyến.",
                            "isRed": false
                        },
                        {
                            "en": "Moreover, businesses should improve their cybersecurity systems.",
                            "vn": "Hơn nữa, các doanh nghiệp nên cải thiện các hệ thống an ninh mạng của họ.",
                            "isRed": false
                        },
                        {
                            "en": "They can use stronger passwords, multi-factor authentication and regular software updates to make it harder for hackers to gain access to sensitive information.",
                            "vn": "Họ có thể sử dụng mật khẩu mạnh hơn, xác thực đa yếu tố và cập nhật phần mềm thường xuyên để khiến tin tặc khó tiếp cận các thông tin nhạy cảm hơn.",
                            "isRed": false
                        },
                        {
                            "en": "Finally, individuals should receive better education about online safety.",
                            "vn": "Cuối cùng, các cá nhân nên được giáo dục tốt hơn về an toàn trực tuyến.",
                            "isRed": false
                        },
                        {
                            "en": "Schools and workplaces can provide simple guidance on recognizing suspicious emails, avoiding unsafe links, and protecting personal information.",
                            "vn": "Trường học và nơi làm việc có thể cung cấp những hướng dẫn đơn giản về việc nhận diện các email đáng ngờ, tránh các liên kết không an toàn và bảo vệ thông tin cá nhân.",
                            "isRed": false
                        },
                        {
                            "en": "These measures would help people become more careful on the Internet and reduce the number of successful cyberattacks.",
                            "vn": "Những biện pháp này sẽ giúp mọi người trở nên cẩn thận hơn trên Internet và giảm số lượng các cuộc tấn công mạng thành công.",
                            "isRed": false
                        }
                    ],
                    [
                        {
                            "en": "In conclusion, cybercrime can cause serious financial losses as well as damage people's privacy and trust in digital services.",
                            "vn": "Tóm lại, tội phạm mạng có thể gây ra những tổn thất tài chính nghiêm trọng cũng như làm tổn hại đến quyền riêng tư và niềm tin của mọi người vào các dịch vụ kỹ thuật số.",
                            "isRed": false
                        },
                        {
                            "en": "Although it is difficult to eliminate cybercrime completely, stronger laws, better cybersecurity, and greater public awareness can significantly reduce its impact.",
                            "vn": "Mặc dù rất khó để loại bỏ hoàn toàn tội phạm mạng, nhưng luật pháp nghiêm minh hơn, an ninh mạng tốt hơn và nhận thức cộng đồng cao hơn có thể giảm đáng kể tác động của nó.",
                            "isRed": false
                        },
                        {
                            "en": "A combined effort from governments, organisations, and individuals is therefore essential to create a safer digital environment.",
                            "vn": "Do đó, sự nỗ lực chung từ các chính phủ, tổ chức và cá nhân là điều cần thiết để tạo ra một môi trường kỹ thuật số an toàn hơn.",
                            "isRed": false
                        }
                    ]
                ]
            }
        }
    ]
};

// Check if already exists
const existingIndex = window.ESSAY_TOPICS.findIndex(e => e.id === 'cybercrime');
if (existingIndex !== -1) {
    window.ESSAY_TOPICS[existingIndex] = newEssay;
    console.log('Updated existing essay 19');
} else {
    window.ESSAY_TOPICS.push(newEssay);
    console.log('Added new essay 19');
}

const jsonStr = JSON.stringify(window.ESSAY_TOPICS, null, 4);
const output = `window.ESSAY_TOPICS = ${jsonStr};\n`;
fs.writeFileSync('essays-data.js', output);
console.log('essays-data.js updated successfully! Total topics:', window.ESSAY_TOPICS.length);
