const GENERAL_THEORY_CATEGORY = "general-theory";

const ESSAY_TYPE_THEORY_TABS = [
    { id: "Advantages / Disadvantages", label: "Advantages / Disadvantages", patternId: "advantages-disadvantages" },
    { id: "Causes - Problems - Solutions", label: "Causes - Problems - Solutions", patternId: "causes-problems-solutions" },
    { id: "Opinion", label: "Opinion", patternId: "argumentative-opinion" },
    { id: "Discuss both views", label: "Discuss both views", patternId: "discuss-both-views" }
];

const THEORY_TIME_STEPS = [
    { time: "10 phút", title: "Đọc và phân tích đề", detail: "Xác định chủ đề, yêu cầu đề bài, nháp dàn ý, ý chính và ý triển khai." },
    { time: "25 phút", title: "Viết bài", detail: "Triển khai mở bài, thân bài và kết bài theo đúng yêu cầu." },
    { time: "5 phút", title: "Đọc lại", detail: "Soát lỗi ngữ pháp, từ vựng, chính tả và sự nhất quán của quan điểm." }
];

const THEORY_ASPECTS = [
    { title: "Thuận lợi", detail: "Advantages, benefits", icon: "fa-arrow-trend-up", tone: "green" },
    { title: "Bất lợi", detail: "Disadvantages, drawbacks", icon: "fa-triangle-exclamation", tone: "red" },
    { title: "Nguyên nhân", detail: "Reasons, causes", icon: "fa-diagram-project", tone: "amber" },
    { title: "Tác động", detail: "Positive / negative effects", icon: "fa-bolt", tone: "blue" },
    { title: "Giải pháp", detail: "Solutions, measures", icon: "fa-screwdriver-wrench", tone: "teal" },
    { title: "Quan điểm", detail: "Agree, disagree", icon: "fa-scale-balanced", tone: "violet" },
    { title: "Hai góc nhìn", detail: "Both views + own opinion", icon: "fa-arrows-left-right", tone: "slate" }
];

const THEORY_CLASSIFICATION_EXERCISES = [
    {
        prompt: "What are the advantages and disadvantages of this development?",
        vn: "Những thuận lợi và bất lợi của sự phát triển này là gì?",
        answer: "fact"
    },
    {
        prompt: "Discuss the reasons for this problem and give examples.",
        vn: "Thảo luận các nguyên nhân của vấn đề này và đưa ra ví dụ.",
        answer: "fact"
    },
    {
        prompt: "Discuss the advantages and disadvantages of playing a musical instrument.",
        vn: "Thảo luận những thuận lợi và bất lợi của việc chơi một nhạc cụ.",
        answer: "fact"
    },
    {
        prompt: "Write an essay discussing both views and give your own opinion.",
        vn: "Viết một bài luận thảo luận cả hai quan điểm và đưa ra ý kiến cá nhân của bạn.",
        answer: "opinion"
    },
    {
        prompt: "Discuss the effects of working in glass buildings on employees.",
        vn: "Thảo luận những tác động của việc làm việc trong các tòa nhà kính đối với nhân viên.",
        answer: "fact"
    },
    {
        prompt: "Do the advantages of being famous outweigh the disadvantages?",
        vn: "Những thuận lợi của việc nổi tiếng có nhiều hơn những bất lợi không?",
        answer: "opinion"
    },
    {
        prompt: "Do you think the advantages outweigh the disadvantages?",
        vn: "Bạn có nghĩ rằng những thuận lợi nhiều hơn những bất lợi không?",
        answer: "opinion"
    },
    {
        prompt: "Write an essay discussing the benefits of visiting historical exhibitions.",
        vn: "Viết một bài luận thảo luận những lợi ích của việc tham quan các triển lãm lịch sử.",
        answer: "fact"
    },
    {
        prompt: "What are the effects of stress in modern life? Give reasons and examples to support your views.",
        vn: "Những tác động của căng thẳng trong cuộc sống hiện đại là gì? Hãy đưa ra lý do và ví dụ để hỗ trợ ý của bạn.",
        answer: "fact"
    },
    {
        prompt: "You should spend about 40 minutes writing an essay to discuss the advantages and disadvantages of computer technology in language learning.",
        vn: "Bạn nên dành khoảng 40 phút viết một bài luận để thảo luận những thuận lợi và bất lợi của công nghệ máy tính trong việc học ngôn ngữ.",
        answer: "fact"
    },
    {
        prompt: "Why might this be the case? What could be the disadvantages of being self-employed?",
        vn: "Tại sao điều này có thể xảy ra? Những bất lợi của việc tự làm chủ là gì?",
        answer: "fact"
    },
    {
        prompt: "Write an essay to discuss the negative effects of playing computer games on children's behavior and what can be done to minimize these effects.",
        vn: "Viết một bài luận thảo luận những tác động tiêu cực của việc chơi trò chơi điện tử đối với hành vi của trẻ em và những việc có thể làm để giảm thiểu các tác động này.",
        answer: "fact"
    }
];

const THEORY_VOCAB_GROUPS = [
    {
        title: "Lợi ích, thuận lợi, tác động tích cực",
        terms: ["benefits", "advantages", "positive effects", "positive impacts"],
        tone: "green"
    },
    {
        title: "Bất lợi, nhược điểm, mặt hạn chế, khó khăn, thách thức",
        terms: ["disadvantages", "downsides", "drawbacks", "limitations", "difficulties", "challenges", "obstacles"],
        tone: "red"
    },
    {
        title: "Nguyên nhân, lý do",
        terms: ["reasons", "causes"],
        tone: "amber"
    },
    {
        title: "Tác động, ảnh hưởng",
        terms: ["impacts", "effects"],
        tone: "blue"
    },
    {
        title: "Giải pháp, cách khắc phục",
        terms: ["solutions", "ways", "measures"],
        tone: "teal"
    }
];

const THEORY_ADJECTIVES = [
    { en: "main", vn: "chính" },
    { en: "major", vn: "chủ yếu" },
    { en: "primary", vn: "chủ yếu" },
    { en: "notable", vn: "đáng chú ý" },
    { en: "undeniable", vn: "không thể chối cãi" },
    { en: "obvious", vn: "hiển nhiên" },
    { en: "clear", vn: "rõ ràng" },
    { en: "considerable", vn: "đáng kể" },
    { en: "substantial", vn: "đáng kể" },
    { en: "significant", vn: "đáng kể" },
    { en: "serious", vn: "nghiêm trọng" },
    { en: "severe", vn: "rất nghiêm trọng" },
    { en: "harmful", vn: "có hại" },
    { en: "detrimental", vn: "có hại" },
    { en: "adverse", vn: "tiêu cực" },
    { en: "potential", vn: "tiềm ẩn" },
    { en: "common", vn: "phổ biến" },
    { en: "root", vn: "gốc rễ" },
    { en: "effective", vn: "hiệu quả" },
    { en: "practical", vn: "thực tế, dễ áp dụng" },
    { en: "feasible", vn: "khả thi" }
];

const THEORY_INTRO_CONCLUSION_PATTERNS = [
    {
        id: "advantages-disadvantages",
        title: "Advantages / Disadvantages",
        icon: "fa-arrow-trend-up",
        tone: "green",
        useFor: "Dùng khi đề hỏi lợi ích, bất lợi, hoặc yêu cầu cân nhắc cả hai mặt của một xu hướng.",
        generalTheory: [
            {
                title: "Nhận diện đề",
                text: "Thường có các cụm như discuss the advantages and disadvantages, benefits, drawbacks hoặc positive and negative impacts."
            },
            {
                title: "Bố cục gợi ý",
                text: "Nếu đề hỏi hai mặt, thân bài 1 viết advantages và thân bài 2 viết disadvantages. Nếu đề chỉ hỏi benefits, tập trung 2-3 lợi ích chính."
            }
        ],
        introNote: "Mở bài cần cho người đọc biết rõ đề đang hỏi một mặt hay hai mặt.",
        introSteps: [
            {
                label: "Câu 1",
                role: "Topic introduction",
                text: "In recent years, there has been a significant increase in [Cụm danh từ].",
                alt: "In recent years, there has been a significant increase in the number of people who [Vo]."
            },
            {
                label: "Câu 2",
                role: "Bridge",
                text: "While this trend can bring several benefits, it may also cause some problems.",
                variantCondition: "Khi đề chỉ hỏi lợi ích",
                variantText: "This trend can bring several benefits to [individuals / society / students / families]."
            },
            {
                label: "Câu 3",
                role: "Thesis statement",
                text: "This essay will discuss both the advantages and disadvantages of [topic].",
                variantCondition: "Khi đề chỉ hỏi lợi ích",
                variantText: "This essay will discuss the main advantages of [topic]."
            }
        ],
        introVariants: [],
        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2].",
                variantCondition: "Khi đề chỉ hỏi lợi ích",
                variantText: "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2]."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "Therefore, both its advantages and disadvantages should be carefully considered.",
                variantCondition: "Khi đề chỉ hỏi lợi ích",
                variantText: "These advantages show that [topic] can be valuable for [individuals / students / families / society]."
            }
        ],
        conclusionVariants: [],
        quickTip: "Nếu đề hỏi một mặt, thesis chỉ nêu đúng một mặt. Nếu đề hỏi hai mặt, thân bài nên chia rõ một đoạn lợi ích và một đoạn bất lợi."
    },
    {
        id: "causes-problems-solutions",
        title: "Causes - Problems - Solutions",
        icon: "fa-screwdriver-wrench",
        tone: "amber",
        useFor: "Dùng khi đề hỏi nguyên nhân, vấn đề/tác động, giải pháp, hoặc kết hợp hai trong ba phần này.",
        generalTheory: [
            {
                title: "Nhận diện đề",
                text: "Đề thường hỏi causes, reasons, problems, effects, impacts, solutions, measures hoặc what can be done."
            },
            {
                title: "Bố cục gợi ý",
                text: "Mỗi khía cạnh chính nên có một đoạn riêng: causes một đoạn, effects/problems một đoạn, solutions một đoạn."
            }
        ],
        introNote: "Mở bài nên linh hoạt theo tính chất chủ đề, không phải đề nào cũng gọi là issue.",
        introSteps: [
            {
                label: "Câu 1",
                role: "Topic introduction",
                text: "In recent years, [topic] has become an increasingly important issue in many parts of the world."
            },
            {
                label: "Câu 2",
                role: "Bridge",
                text: "This topic has attracted considerable attention because it can affect [individuals / society / the environment] in different ways."
            },
            {
                label: "Câu 3",
                role: "Thesis statement",
                text: "This essay will discuss [the exact aspects required by the question]."
            }
        ],
        introVariants: [
            {
                title: "Chọn cách gọi chủ đề ở câu 1",
                lines: [
                    "Vấn đề tiêu cực: [Problem] has become an increasingly serious issue.",
                    "Xu hướng mới: [Trend] has become increasingly common.",
                    "Hiện tượng trung tính: [Topic] has attracted considerable attention.",
                    "Vấn đề phổ biến từ lâu: [Topic] is an important issue in modern society.",
                    "Chủ đề tích cực: [Topic] plays an important role in modern society."
                ]
            },
            {
                title: "Bridge linh hoạt",
                lines: [
                    "Tiêu cực: This problem has attracted considerable attention because it can negatively affect [people / society / the environment].",
                    "Trung tính/xu hướng: This trend has attracted considerable attention because it can affect [individuals / society] in different ways.",
                    "Có mâu thuẫn: However, this development can also lead to several concerns."
                ]
            },
            {
                title: "Thesis theo đúng yêu cầu đề",
                lines: [
                    "Causes: This essay will discuss the main reasons behind this issue.",
                    "Effects/problems: This essay will examine the main effects of this issue.",
                    "Positive impacts: This essay will discuss the positive impacts of this trend.",
                    "Causes + effects: This essay will discuss the main causes of this issue and the effects it may have on society.",
                    "Causes + solutions: This essay will examine the main causes of this problem and suggest some possible solutions.",
                    "Effects + solutions: This essay will discuss the negative effects of this issue and suggest some possible solutions.",
                    "Importance + problems: This essay will discuss the importance of [topic] and the problems caused by its loss.",
                    "Solutions: This essay will suggest some possible measures to address this problem."
                ]
            }
        ],
        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, [issue] is a serious problem caused by several factors."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2]."
            }
        ],
        conclusionVariants: [
            {
                title: "Câu 1 linh hoạt theo đề bài",
                lines: [
                    "Causes: In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2].",
                    "Effects/problems: In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2].",
                    "Causes + Effects: In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2].",
                    "Causes + Solutions: In conclusion, [issue] is mainly caused by [cause 1] and [cause 2].",
                    "Effects + Solutions: In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2].",
                    "Solutions: In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2]."
                ]
            },
            {
                title: "Câu 2 linh hoạt theo đề bài",
                lines: [
                    "Causes: Understanding these reasons is important when considering this issue.",
                    "Effects: Therefore, greater attention should be paid to its impact on [people / society / the environment].",
                    "Causes + Effects: Therefore, its causes and impacts should not be overlooked.",
                    "Causes + Solutions: To address this problem, [solution 1] and [solution 2] should be implemented.",
                    "Effects + Solutions: To minimize these effects, [solution 1] and [solution 2] should be implemented.",
                    "Solutions: These actions can help protect [people / society / the environment] in the long term."
                ]
            }
        ],
        quickTip: "Câu thesis là bản đồ của thân bài. Đề hỏi causes + solutions thì không đưa effects vào thesis."
    },
    {
        id: "argumentative-opinion",
        title: "Opinion",
        icon: "fa-scale-balanced",
        tone: "blue",
        useFor: "Dùng khi đề yêu cầu nêu quan điểm cá nhân: agree/disagree, should/should not, outweigh, chọn A hay B.",
        generalTheory: [
            {
                title: "Nhận diện đề",
                text: "Đề thường có do you agree or disagree, what is your opinion, should, outweigh, to what extent hoặc yêu cầu chọn giữa hai phương án."
            },
            {
                title: "Bố cục gợi ý",
                text: "Mở bài nêu lập trường rõ. Thân bài triển khai 2-3 lý do bảo vệ lập trường đó; có thể nhắc phản biện nếu cần."
            }
        ],
        introNote: "Mở bài phải có lập trường rõ ràng, tránh viết kiểu trung lập nếu đề hỏi opinion.",
        introSteps: [
            {
                label: "Câu 1",
                role: "Topic introduction",
                text: "People have different views on whether [central question]."
            },
            {
                label: "Câu 2",
                role: "Thesis statement",
                text: "From my perspective, [your position], and this essay will explain the reasons for my view."
            }
        ],
        introVariants: [
            {
                title: "Cách viết central question",
                lines: [
                    "Một ý kiến đúng/sai: People have different views on whether [claim].",
                    "Hai lựa chọn: People have different views on whether [option A] or [option B] is more beneficial.",
                    "Outweigh: People have different views on whether the advantages of [topic] outweigh its disadvantages.",
                    "Biện pháp: People have different views on whether [measure] should be introduced.",
                    "Trách nhiệm: People have different views on whether [group A] or [group B] should be responsible for [problem]."
                ]
            },
            {
                title: "Cách viết your position",
                lines: [
                    "Agree/disagree: From my perspective, I agree that [claim].",
                    "Advantages outweigh: From my perspective, the advantages of [topic] outweigh its disadvantages.",
                    "Disadvantages outweigh: From my perspective, the disadvantages of [topic] outweigh its advantages.",
                    "Should/should not: From my perspective, [something] should be [kept / removed / encouraged / prohibited].",
                    "Option A/B: From my perspective, [option A] is more beneficial than [option B].",
                    "Responsibility: From my perspective, [group] should take primary responsibility for this issue.",
                    "Important factor: From my perspective, [factor A] plays a more important role than [factor B]."
                ]
            }
        ],
        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion]."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "This is because [reason 1] and [reason 2]."
            }
        ],
        conclusionVariants: [],
        quickTip: "Quan điểm trong mở bài, thân bài và kết bài phải cùng một hướng. Nếu đổi lập trường giữa bài, bài sẽ mất tính thuyết phục."
    },
    {
        id: "discuss-both-views",
        title: "Discuss both views",
        icon: "fa-arrows-left-right",
        tone: "teal",
        useFor: "Dùng khi đề đưa ra hai quan điểm và yêu cầu thảo luận cả hai; đôi khi có thêm yêu cầu give your opinion.",
        generalTheory: [
            {
                title: "Nhận diện đề",
                text: "Đề thường có while some people believe, others argue, discuss both views hoặc discuss both views and give your opinion."
            },
            {
                title: "Bố cục gợi ý",
                text: "Thân bài 1 phân tích view 1, thân bài 2 phân tích view 2. Nếu đề yêu cầu opinion, chốt rõ quan điểm của bạn."
            }
        ],
        introNote: "Câu 2 phải nêu đủ hai view. Nếu đề yêu cầu opinion, câu 3 thêm quan điểm của người viết.",
        introSteps: [
            {
                label: "Câu 1",
                role: "Topic introduction",
                text: "[Topic] has become a widely discussed issue in society."
            },
            {
                label: "Câu 2",
                role: "Two views",
                text: "While some people believe that [view 1], others argue that [view 2]."
            },
            {
                label: "Câu 3",
                role: "Thesis + opinion",
                text: "This essay will discuss both views before explaining why I believe that [your opinion]."
            }
        ],
        introVariants: [
            {
                title: "Nếu đề không yêu cầu nêu quan điểm cá nhân",
                lines: [
                    "This essay will discuss both views in detail.",
                    "Giữ câu thứ ba trung lập, không thêm I believe."
                ]
            },
            {
                title: "Cần xác định đúng trong đề",
                lines: [
                    "Topic: chủ đề chung, chưa cần nêu quan điểm.",
                    "View 1: quan điểm thứ nhất trong đề.",
                    "View 2: quan điểm thứ hai trong đề.",
                    "Your opinion: quan điểm mà người viết ủng hộ."
                ]
            }
        ],
        conclusionSteps: [
            {
                label: "Câu 1",
                role: "Summary",
                text: "In conclusion, both views have their own valid points.",
                variantCondition: "No opinion",
                variantText: "In conclusion, both views have their own strengths and limitations."
            },
            {
                label: "Câu 2",
                role: "Final statement",
                text: "However, I believe that [your opinion] because [main reason].",
                variantCondition: "No opinion",
                variantText: "Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed]."
            }
        ],
        conclusionVariants: [],
        quickTip: "Thân bài nên cân bằng: một đoạn cho view 1, một đoạn cho view 2. Nếu có opinion, có thể nghiêng rõ ở cuối đoạn 2 hoặc trong kết bài."
    }
];

const TEMPLATE_VN_TRANSLATIONS = {
    "In recent years, there has been a significant increase in [Cụm danh từ].": "Trong những năm gần đây, đã có sự gia tăng đáng kể về [cụm danh từ].",
    "In recent years, there has been a significant increase in the number of people who [Vo].": "Trong những năm gần đây, số lượng người [Vo] đã tăng lên đáng kể.",
    "While this trend can bring several benefits, it may also cause some problems.": "Mặc dù xu hướng này có thể mang lại một số lợi ích, nó cũng có thể gây ra một vài vấn đề.",
    "This essay will discuss both the advantages and disadvantages of [topic].": "Bài luận này sẽ thảo luận cả lợi ích và bất lợi của [topic].",
    "This trend can bring several benefits to [individuals / society / students / families].": "Xu hướng này có thể mang lại một số lợi ích cho [individuals / society / students / families].",
    "This essay will discuss the main advantages of [topic].": "Bài luận này sẽ thảo luận những lợi ích chính của [topic].",
    "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2]. Therefore, both its advantages and disadvantages should be carefully considered.": "Tóm lại, [topic] mang lại một số lợi ích, đặc biệt là [advantage 1] và [advantage 2], nhưng cũng có một vài bất lợi như [disadvantage 1] và [disadvantage 2]. Vì vậy, cả lợi ích và bất lợi của nó đều nên được cân nhắc cẩn thận.",
    "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2]. These advantages show that [topic] can be valuable for [individuals / students / families / society].": "Tóm lại, [topic] có thể mang lại một số lợi ích quan trọng, đặc biệt là [benefit 1] và [benefit 2]. Những lợi ích này cho thấy [topic] có thể có giá trị đối với [individuals / students / families / society].",

    "In conclusion, [topic] offers several benefits, particularly [advantage 1] and [advantage 2], but it also has some drawbacks, such as [disadvantage 1] and [disadvantage 2].": "Tóm lại, [topic] mang lại một số lợi ích, đặc biệt là [advantage 1] và [advantage 2], nhưng cũng có một vài bất lợi như [disadvantage 1] và [disadvantage 2].",
    "Therefore, both its advantages and disadvantages should be carefully considered.": "Vì vậy, cả lợi ích và bất lợi của nó đều nên được cân nhắc cẩn thận.",
    "In conclusion, [topic] can bring several important benefits, particularly [benefit 1] and [benefit 2].": "Tóm lại, [topic] có thể mang lại một số lợi ích quan trọng, đặc biệt là [benefit 1] và [benefit 2].",
    "These advantages show that [topic] can be valuable for [individuals / students / families / society].": "Những lợi ích này cho thấy [topic] có thể có giá trị đối với [individuals / students / families / society].",

    "In conclusion, [issue] is a serious problem caused by several factors.": "Tóm lại, [issue] là một vấn đề nghiêm trọng do nhiều yếu tố gây ra.",
    "However, this issue can be addressed by implementing appropriate measures, such as [solution 1] and [solution 2].": "Tuy nhiên, vấn đề này có thể được giải quyết bằng cách thực hiện các biện pháp phù hợp, chẳng hạn như [solution 1] và [solution 2].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2].": "Tóm lại, [issue / trend] có thể gây ra một số tác động đáng kể, đặc biệt là [effect 1] và [effect 2].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2].": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra, và nó có thể dẫn đến [effect 1] và [effect 2].",
    "In conclusion, [issue] is mainly caused by [cause 1] and [cause 2].": "Tóm lại, [issue] chủ yếu do [cause 1] và [cause 2] gây ra.",
    "In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2].": "Tóm lại, [issue] có thể gây ra một số vấn đề nghiêm trọng, bao gồm [effect 1] và [effect 2].",
    "In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2].": "Tóm lại, có thể thực hiện một số biện pháp để giải quyết [issue], bao gồm [solution 1] và [solution 2].",
    "Understanding these reasons is important when considering this issue.": "Việc hiểu những nguyên nhân này là quan trọng khi xem xét vấn đề đó.",
    "Therefore, greater attention should be paid to its impact on [people / society / the environment].": "Vì vậy, cần chú ý nhiều hơn đến ảnh hưởng của nó đối với [people / society / the environment].",
    "Therefore, its causes and impacts should not be overlooked.": "Vì vậy, không nên xem nhẹ nguyên nhân và tác động của nó.",
    "To address this problem, [solution 1] and [solution 2] should be implemented.": "Để giải quyết vấn đề này, [solution 1] và [solution 2] nên được thực hiện.",
    "To minimize these effects, [solution 1] and [solution 2] should be implemented.": "Để giảm thiểu những tác động này, [solution 1] và [solution 2] nên được thực hiện.",
    "These actions can help protect [people / society / the environment] in the long term.": "Những hành động này có thể giúp bảo vệ [people / society / the environment] trong dài hạn.",

    "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion].": "Tóm lại, mặc dù [opposing view / drawback] nên được cân nhắc, tôi tin rằng [your opinion].",
    "This is because [reason 1] and [reason 2].": "Điều này là vì [reason 1] và [reason 2].",
    "In conclusion, both views have their own valid points.": "Tóm lại, cả hai quan điểm đều có những điểm hợp lý riêng.",
    "However, I believe that [your opinion] because [main reason].": "Tuy nhiên, tôi tin rằng [your opinion] vì [main reason].",
    "In conclusion, both views have their own strengths and limitations.": "Tóm lại, cả hai quan điểm đều có điểm mạnh và hạn chế riêng.",
    "Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed].": "Việc [view 1] hay [view 2] phù hợp hơn phụ thuộc vào [the situation / individual needs / how it is managed].",

    "In recent years, [topic] has become an increasingly important issue in many parts of the world.": "Trong những năm gần đây, [topic] đã trở thành một vấn đề ngày càng quan trọng ở nhiều nơi trên thế giới.",
    "This topic has attracted considerable attention because it can affect [individuals / society / the environment] in different ways.": "Chủ đề này thu hút nhiều sự chú ý vì nó có thể ảnh hưởng đến [individuals / society / the environment] theo nhiều cách khác nhau.",
    "This essay will discuss [the exact aspects required by the question].": "Bài luận này sẽ thảo luận [the exact aspects required by the question].",
    "Vấn đề tiêu cực: [Problem] has become an increasingly serious issue.": "Vấn đề tiêu cực: [Problem] đã trở thành một vấn đề ngày càng nghiêm trọng.",
    "Xu hướng mới: [Trend] has become increasingly common.": "Xu hướng mới: [Trend] ngày càng trở nên phổ biến.",
    "Hiện tượng trung tính: [Topic] has attracted considerable attention.": "Hiện tượng trung tính: [Topic] đã thu hút nhiều sự chú ý.",
    "Vấn đề phổ biến từ lâu: [Topic] is an important issue in modern society.": "Vấn đề phổ biến từ lâu: [Topic] là một vấn đề quan trọng trong xã hội hiện đại.",
    "Chủ đề tích cực: [Topic] plays an important role in modern society.": "Chủ đề tích cực: [Topic] đóng vai trò quan trọng trong xã hội hiện đại.",
    "Tiêu cực: This problem has attracted considerable attention because it can negatively affect [people / society / the environment].": "Tiêu cực: Vấn đề này thu hút nhiều sự chú ý vì nó có thể ảnh hưởng tiêu cực đến [people / society / the environment].",
    "Trung tính/xu hướng: This trend has attracted considerable attention because it can affect [individuals / society] in different ways.": "Trung tính/xu hướng: Xu hướng này thu hút nhiều sự chú ý vì nó có thể ảnh hưởng đến [individuals / society] theo nhiều cách khác nhau.",
    "Có mâu thuẫn: However, this development can also lead to several concerns.": "Có mâu thuẫn: Tuy nhiên, sự phát triển này cũng có thể dẫn đến một số mối lo ngại.",
    "Causes: This essay will discuss the main reasons behind this issue.": "Nguyên nhân: Bài luận này sẽ thảo luận những lý do chính đằng sau vấn đề này.",
    "Effects/problems: This essay will examine the main effects of this issue.": "Tác động/vấn đề: Bài luận này sẽ xem xét những tác động chính của vấn đề này.",
    "Positive impacts: This essay will discuss the positive impacts of this trend.": "Tác động tích cực: Bài luận này sẽ thảo luận những tác động tích cực của xu hướng này.",
    "Causes + effects: This essay will discuss the main causes of this issue and the effects it may have on society.": "Nguyên nhân + tác động: Bài luận này sẽ thảo luận những nguyên nhân chính của vấn đề này và những tác động mà nó có thể gây ra cho xã hội.",
    "Causes + solutions: This essay will examine the main causes of this problem and suggest some possible solutions.": "Nguyên nhân + giải pháp: Bài luận này sẽ xem xét những nguyên nhân chính của vấn đề này và đề xuất một số giải pháp khả thi.",
    "Effects + solutions: This essay will discuss the negative effects of this issue and suggest some possible solutions.": "Tác động + giải pháp: Bài luận này sẽ thảo luận những tác động tiêu cực của vấn đề này và đề xuất một số giải pháp khả thi.",
    "Importance + problems: This essay will discuss the importance of [topic] and the problems caused by its loss.": "Tầm quan trọng + vấn đề: Bài luận này sẽ thảo luận tầm quan trọng của [topic] và những vấn đề do sự mất đi của nó gây ra.",
    "Solutions: This essay will suggest some possible measures to address this problem.": "Giải pháp: Bài luận này sẽ đề xuất một số biện pháp khả thi để giải quyết vấn đề này.",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2]. Understanding these reasons is important when considering this issue.": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra. Việc hiểu những nguyên nhân này là quan trọng khi xem xét vấn đề đó.",
    "In conclusion, [issue / trend] can have several significant effects, particularly [effect 1] and [effect 2]. Therefore, greater attention should be paid to its impact on [people / society / the environment].": "Tóm lại, [issue / trend] có thể gây ra một số tác động đáng kể, đặc biệt là [effect 1] và [effect 2]. Vì vậy, cần chú ý nhiều hơn đến ảnh hưởng của nó đối với [people / society / the environment].",
    "In conclusion, [issue / trend] is mainly caused by [cause 1] and [cause 2], and it can lead to [effect 1] and [effect 2]. Therefore, its causes and impacts should not be overlooked.": "Tóm lại, [issue / trend] chủ yếu do [cause 1] và [cause 2] gây ra, và nó có thể dẫn đến [effect 1] và [effect 2]. Vì vậy, không nên xem nhẹ nguyên nhân và tác động của nó.",
    "In conclusion, [issue] is mainly caused by [cause 1] and [cause 2]. To address this problem, [solution 1] and [solution 2] should be implemented.": "Tóm lại, [issue] chủ yếu do [cause 1] và [cause 2] gây ra. Để giải quyết vấn đề này, [solution 1] và [solution 2] nên được thực hiện.",
    "In conclusion, [issue] can cause several serious problems, including [effect 1] and [effect 2]. To minimize these effects, [solution 1] and [solution 2] should be implemented.": "Tóm lại, [issue] có thể gây ra một số vấn đề nghiêm trọng, bao gồm [effect 1] và [effect 2]. Để giảm thiểu những tác động này, [solution 1] và [solution 2] nên được thực hiện.",
    "In conclusion, several measures can be taken to address [issue], including [solution 1] and [solution 2]. These actions can help protect [people / society / the environment] in the long term.": "Tóm lại, có thể thực hiện một số biện pháp để giải quyết [issue], bao gồm [solution 1] và [solution 2]. Những hành động này có thể giúp bảo vệ [people / society / the environment] trong dài hạn.",

    "People have different views on whether [central question].": "Mọi người có những quan điểm khác nhau về việc liệu [central question] hay không.",
    "From my perspective, [your position], and this essay will explain the reasons for my view.": "Theo quan điểm của tôi, [your position], và bài luận này sẽ giải thích lý do cho quan điểm đó.",
    "Một ý kiến đúng/sai: People have different views on whether [claim].": "Một ý kiến đúng/sai: Mọi người có những quan điểm khác nhau về việc liệu [claim] hay không.",
    "Hai lựa chọn: People have different views on whether [option A] or [option B] is more beneficial.": "Hai lựa chọn: Mọi người có những quan điểm khác nhau về việc liệu [option A] hay [option B] có lợi hơn.",
    "Outweigh: People have different views on whether the advantages of [topic] outweigh its disadvantages.": "Outweigh: Mọi người có những quan điểm khác nhau về việc liệu lợi ích của [topic] có nhiều hơn bất lợi của nó hay không.",
    "Biện pháp: People have different views on whether [measure] should be introduced.": "Biện pháp: Mọi người có những quan điểm khác nhau về việc liệu [measure] có nên được áp dụng hay không.",
    "Trách nhiệm: People have different views on whether [group A] or [group B] should be responsible for [problem].": "Trách nhiệm: Mọi người có những quan điểm khác nhau về việc liệu [group A] hay [group B] nên chịu trách nhiệm cho [problem].",
    "Agree/disagree: From my perspective, I agree that [claim].": "Đồng ý/không đồng ý: Theo quan điểm của tôi, tôi đồng ý rằng [claim].",
    "Advantages outweigh: From my perspective, the advantages of [topic] outweigh its disadvantages.": "Lợi ích nhiều hơn: Theo quan điểm của tôi, lợi ích của [topic] nhiều hơn bất lợi của nó.",
    "Disadvantages outweigh: From my perspective, the disadvantages of [topic] outweigh its advantages.": "Bất lợi nhiều hơn: Theo quan điểm của tôi, bất lợi của [topic] nhiều hơn lợi ích của nó.",
    "Should/should not: From my perspective, [something] should be [kept / removed / encouraged / prohibited].": "Nên/không nên: Theo quan điểm của tôi, [something] nên được [kept / removed / encouraged / prohibited].",
    "Option A/B: From my perspective, [option A] is more beneficial than [option B].": "Lựa chọn A/B: Theo quan điểm của tôi, [option A] có lợi hơn [option B].",
    "Responsibility: From my perspective, [group] should take primary responsibility for this issue.": "Trách nhiệm: Theo quan điểm của tôi, [group] nên chịu trách nhiệm chính cho vấn đề này.",
    "Important factor: From my perspective, [factor A] plays a more important role than [factor B].": "Yếu tố quan trọng: Theo quan điểm của tôi, [factor A] đóng vai trò quan trọng hơn [factor B].",
    "In conclusion, although [opposing view / drawback] should be considered, I believe that [your opinion]. This is because [reason 1] and [reason 2].": "Tóm lại, mặc dù [opposing view / drawback] nên được cân nhắc, tôi tin rằng [your opinion]. Điều này là vì [reason 1] và [reason 2].",

    "[Topic] has become a widely discussed issue in society.": "[Topic] đã trở thành một vấn đề được thảo luận rộng rãi trong xã hội.",
    "While some people believe that [view 1], others argue that [view 2].": "Trong khi một số người tin rằng [view 1], những người khác cho rằng [view 2].",
    "This essay will discuss both views before explaining why I believe that [your opinion].": "Bài luận này sẽ thảo luận cả hai quan điểm trước khi giải thích vì sao tôi tin rằng [your opinion].",
    "This essay will discuss both views in detail.": "Bài luận này sẽ thảo luận chi tiết cả hai quan điểm.",
    "In conclusion, both views have their own valid points. However, I believe that [your opinion] because [main reason].": "Tóm lại, cả hai quan điểm đều có những điểm hợp lý riêng. Tuy nhiên, tôi tin rằng [your opinion] vì [main reason].",
    "In conclusion, both views have their own strengths and limitations. Whether [view 1] or [view 2] is more suitable depends on [the situation / individual needs / how it is managed].": "Tóm lại, cả hai quan điểm đều có điểm mạnh và hạn chế riêng. Việc [view 1] hay [view 2] phù hợp hơn phụ thuộc vào [the situation / individual needs / how it is managed]."
};

const VIETNAMESE_GUIDE_PHRASES = [
    "an toàn hơn",
    "bài luận",
    "bài luận này",
    "bài luận này sẽ",
    "bản thân",
    "bảo tồn",
    "bất lợi",
    "bền vững",
    "biết",
    "cá nhân và xã hội",
    "cả những lợi ích",
    "cả những tác động tích cực",
    "cả ưu điểm và nhược điểm",
    "cả ưu điểm và nhược điểm của",
    "các di tích lịch sử",
    "các hoạt động hàng ngày",
    "các vấn đề",
    "cải thiện",
    "cải thiện giao tiếp",
    "căng thẳng",
    "chẳng hạn như",
    "chia sẻ",
    "chia sẻ thành tựu",
    "chia sẻ trực tuyến",
    "chính phủ",
    "chính phủ và khách du lịch",
    "cho người tham gia giao thông",
    "chúng",
    "chúng có thể",
    "có",
    "có thể",
    "có thể gây ra",
    "có thể mang lại",
    "có thể tạo động lực và kết nối mọi người",
    "có trách nhiệm",
    "còn bao nhiêu thời gian",
    "cộng đồng",
    "cộng đồng địa phương",
    "của",
    "của các địa điểm tôn giáo",
    "của xu hướng này",
    "cũng mang lại",
    "cùng nhau",
    "di sản",
    "di sản văn hoá",
    "di sản văn hóa",
    "di tích lịch sử",
    "do đó",
    "du khách",
    "du lịch",
    "du lịch tôn giáo",
    "đang ngày càng trở nên phổ biến",
    "đèn giao thông",
    "đèn giao thông có đồng hồ đếm ngược",
    "để",
    "địa điểm",
    "địa phương",
    "đồng hồ",
    "đồng hồ đếm ngược",
    "đồng hồ đếm ngược tại các đèn giao thông",
    "gây hại",
    "gây hại cho",
    "gây ra",
    "giá trị",
    "giảm thiểu",
    "giảm thiểu tai nạn",
    "giao thông",
    "giúp",
    "hành vi",
    "hành vi lái xe",
    "hành vi lái xe nguy hiểm",
    "hiểu biết",
    "hoàn toàn",
    "hợp tác",
    "hợp tác cùng nhau",
    "khách du lịch",
    "khuyến khích",
    "kinh tế",
    "kỷ luật giao thông",
    "lái xe ẩu",
    "làm cho đường xá an toàn hơn cho mọi người",
    "làm giảm",
    "làm hỏng",
    "làm tăng",
    "loại hình",
    "loại hình du lịch này",
    "lối sống",
    "lợi ích",
    "mang lại",
    "mạng xã hội",
    "mạnh mẽ",
    "mặc dù",
    "mọi người",
    "mọi người nên",
    "môi trường",
    "một cách cẩn thận",
    "một cách có trách nhiệm",
    "một cách có trách nhiệm và bền vững",
    "một số",
    "một số lợi ích chính",
    "một số lợi ích cho",
    "một số người tin rằng",
    "một số tác động tiêu cực",
    "một vài tác động tích cực",
    "nên",
    "nên bị dỡ bỏ",
    "nền kinh tế",
    "nền kinh tế địa phương",
    "nên sử dụng",
    "ngày càng",
    "nguy cơ",
    "nguy cơ tai nạn giao thông",
    "nguy hiểm",
    "người lái xe",
    "nhiều lợi ích cho",
    "nhiều người",
    "nhiều người ngày nay",
    "nhiều tác động tích cực",
    "như facebook",
    "những cảm xúc tiêu cực",
    "những cảm xúc tiêu cực cho người khác",
    "những đồng hồ này",
    "những lợi ích",
    "nhưng nó cũng có thể",
    "nó có thể",
    "nó cũng có",
    "nó cũng có thể",
    "ở nhiều quốc gia",
    "ở nhiều thành phố",
    "phát triển",
    "phổ biến",
    "quan điểm",
    "quan điểm này",
    "quốc gia",
    "rất phổ biến",
    "rõ ràng là",
    "sẽ thảo luận về",
    "so sánh bản thân quá nhiều với người khác",
    "suy nghĩ",
    "sử dụng mạng xã hội",
    "sự hiểu biết",
    "sự hiểu biết văn hoá",
    "sự hiểu biết văn hóa",
    "tác động",
    "tác động tích cực",
    "tác động tiêu cực",
    "tai nạn",
    "tai nạn giao thông",
    "tạo ra",
    "tạo ra căng thẳng",
    "tạo ra cơ hội nghề nghiệp",
    "tâm linh",
    "tầm quan trọng",
    "tầm quan trọng tâm linh",
    "tham gia",
    "thành phố",
    "thảo luận",
    "thế giới",
    "thích",
    "thói quen này",
    "thúc đẩy",
    "tích cực",
    "tiêu cực",
    "tin tưởng",
    "tóm lại",
    "tôi hoàn toàn đồng ý với",
    "tôi tin tưởng mạnh mẽ rằng",
    "tôn giáo",
    "trách nhiệm",
    "trên các nền tảng mạng xã hội",
    "trên thế giới",
    "trong xã hội ngày nay",
    "trở nên",
    "truyền cảm hứng cho mọi người",
    "trước khi đèn chuyển màu",
    "tuy nhiên",
    "và",
    "và bất lợi",
    "và du khách",
    "và lan truyền thông tin giá trị",
    "và sự giàu có của họ",
    "và sự so sánh không thực tế",
    "và tạo ra nhiều cơ hội",
    "và tiêu cực",
    "và trải nghiệm của họ",
    "và tránh",
    "văn hoá",
    "vì vậy",
    "việc chia sẻ cuộc sống trực tuyến",
    "việc chia sẻ thành công cá nhân trên facebook",
    "việc chia sẻ thành công cá nhân trên mạng",
    "xu hướng này",
    "ý nghĩa"
];

const VIETNAMESE_GUIDE_LOOKUP = new Set(VIETNAMESE_GUIDE_PHRASES);
const MAX_VIETNAMESE_GUIDE_PHRASE_LENGTH = Math.max(...VIETNAMESE_GUIDE_PHRASES.map((phrase) => phrase.split(" ").length));

const STORAGE_PREFIX = "vstep-writing";
const rawEssays = Array.isArray(window.ESSAY_TOPICS) ? window.ESSAY_TOPICS : [];
const essays = [];

function flattenEssays(list, parentId = null) {
    list.forEach((essay) => {
        const normalized = normalizeEssay(essay, essays.length);
        normalized.parentId = parentId;
        essays.push(normalized);
        if (essay.subTopics && essay.subTopics.length > 0) {
            normalized.hasSubTopics = true;
            flattenEssays(essay.subTopics, normalized.id);
        }
    });
}
flattenEssays(rawEssays);
window.essays = essays;

const state = {
    currentEssayIndex: 0,
    query: "",
    category: GENERAL_THEORY_CATEGORY,
    currentView: "theory",
    isSampleMode: false
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    renderFontControls();
    bindGlobalActions();
    renderFilters();

    if (!essays.length) {
        renderEmptyState();
        return;
    }

    loadGeneralTheory();
}

function normalizeEssay(essay, index) {
    const title = essay.title || `Đề luận ${index + 1}`;
    const meta = essay.meta || {};
    
    let variants = essay.variants;
    let currentVariantIndex = essay.currentVariantIndex;
    
    if (!variants || variants.length === 0) {
        variants = [
            { name: "Level B1" },
            {
                name: "Level B2",
                vocab: essay.vocab || essay.vocabulary || [],
                introChunks: essay.introChunks || [],
                introVn: essay.introVn || "",
                bodyParagraphs: essay.bodyParagraphs || [],
                conclusionChunks: essay.conclusionChunks || [],
                conclusionVn: essay.conclusionVn || "",
                sampleEssay: essay.sampleEssay || essay.sample || null
            }
        ];
        currentVariantIndex = 1;
    } else {
        if (currentVariantIndex === undefined || currentVariantIndex >= variants.length) {
            currentVariantIndex = variants.length > 1 ? 1 : 0;
        }
        variants = variants.map(v => ({
            ...v,
            sampleEssay: v.sampleEssay || v.sample || null
        }));
    }

    return {
        ...essay,
        id: essay.id || slugify(title) || `essay-${index + 1}`,
        title,
        summary: essay.summary || "Bài luyện viết luận VSTEP với gợi ý triển khai và từ vựng trọng tâm.",
        meta: {
            category: meta.category || "Chưa phân loại",
            taskType: meta.taskType || "Writing Task",
            level: meta.level || "B1-B2",
            estimatedMinutes: meta.estimatedMinutes || 40
        },
        prompt: essay.prompt || [],
        vocab: essay.vocab || essay.vocabulary || [],
        bodyParagraphs: essay.bodyParagraphs || [],
        variants,
        currentVariantIndex
    };
}

function slugify(value) {
    return value
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function bindGlobalActions() {
    const btnSample = document.getElementById("btn-sample");
    btnSample?.addEventListener("click", toggleSampleMode);

    // btnClearDraft binding moved to renderTopicOverview

    window.addEventListener("storage", (e) => {
        if (e.key && e.key.startsWith(`${STORAGE_PREFIX}:`)) {
            syncDraftsFromStorage();
        }
    });
    window.addEventListener("focus", syncDraftsFromStorage);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            syncDraftsFromStorage();
        }
    });

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");

    function closeSidebar() {
        sidebar?.classList.remove("open");
        backdrop?.classList.remove("show");
    }

    mobileMenuBtn?.addEventListener("click", () => {
        sidebar?.classList.add("open");
        backdrop?.classList.add("show");
    });

    backdrop?.addEventListener("click", closeSidebar);

    const mobileHeader = document.querySelector(".mobile-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            mobileHeader?.classList.add("scrolled");
        } else {
            mobileHeader?.classList.remove("scrolled");
        }
    });

    const essayListUl = document.getElementById("essay-list-ul");
    essayListUl?.addEventListener("click", (e) => {
        if (window.innerWidth <= 860 && e.target.closest("li")) {
            closeSidebar();
        }
    });
}

function toggleSampleMode() {
    if (state.currentView !== "essay") return;

    state.isSampleMode = !state.isSampleMode;
    const btnSample = document.getElementById("btn-sample");
    const btnVariantSample = document.getElementById("btn-variant-sample");
    const sampleSection = document.getElementById("sample-essay-section");
    const practiceSections = document.querySelectorAll(".practice-section");

    if (state.isSampleMode) {
        btnSample?.classList.add("active");
        btnVariantSample?.classList.add("active");
        sampleSection?.classList.remove("hidden");
        practiceSections.forEach(sec => sec.classList.add("hidden"));
    } else {
        btnSample?.classList.remove("active");
        btnVariantSample?.classList.remove("active");
        sampleSection?.classList.add("hidden");
        practiceSections.forEach(sec => sec.classList.remove("hidden"));
    }
}

function renderFontControls() {
    document.querySelectorAll("[data-font-target]").forEach((container) => {
        container.innerHTML = "";
        
        const wrapper = document.createElement("div");
        wrapper.className = "font-controls-wrapper";

        const btnGroup = document.createElement("div");
        btnGroup.className = "font-btn-group";

        btnGroup.appendChild(createFontButton(container.dataset.fontTarget, -1, "Giảm cỡ chữ", '<i class="fa-solid fa-minus"></i>'));
        btnGroup.appendChild(createFontButton(container.dataset.fontTarget, 0, "Khôi phục cỡ chữ mặc định", 'Mặc định', "btn-font-default"));
        btnGroup.appendChild(createFontButton(container.dataset.fontTarget, 1, "Tăng cỡ chữ", '<i class="fa-solid fa-plus"></i>'));

        wrapper.append(btnGroup);
        
        container.appendChild(wrapper);
    });
}

function createFontButton(targetId, step, title, content, extraClass = "") {
    const button = document.createElement("button");
    button.className = `btn-tool ${extraClass}`.trim();
    button.type = "button";
    button.title = title;
    button.setAttribute("aria-label", title);
    button.innerHTML = content;
    button.addEventListener("click", () => changeLocalFontSize(targetId, step));
    return button;
}

function renderFilters() {
    const container = document.getElementById("topic-filters");
    if (!container) return;

    const taskTypes = [
        { id: GENERAL_THEORY_CATEGORY, label: "Lý thuyết chung" },
        ...ESSAY_TYPE_THEORY_TABS.map(({ id, label }) => ({ id, label }))
    ];

    container.innerHTML = "";

    taskTypes.forEach(({ id, label }) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = id === state.category ? "filter-chip active" : "filter-chip";
        if (id === GENERAL_THEORY_CATEGORY) {
            button.classList.add("theory-chip");
        }
        button.textContent = label;
        button.addEventListener("click", () => {
            state.category = id;
            state.query = "";
            renderFilters();
            if (id === GENERAL_THEORY_CATEGORY) {
                loadGeneralTheory();
                return;
            }
            if (isEssayTypeCategory(id)) {
                loadEssayTypeTheory(id);
                return;
            }

            const visibleEssays = getVisibleEssays();
            const shouldLoadFirstVisible = state.currentView !== "essay" || !visibleEssays.some((item) => item.index === state.currentEssayIndex);
            if (shouldLoadFirstVisible && visibleEssays.length) {
                loadEssay(visibleEssays[0].index);
            } else {
                renderSidebar();
            }
        });
        container.appendChild(button);
    });
}

function renderSidebar() {
    if (state.category === GENERAL_THEORY_CATEGORY) {
        renderTheorySidebar();
        return;
    }

    const list = document.getElementById("essay-list-ul");
    const count = document.getElementById("topic-count");
    if (!list) return;

    const visibleEssays = getVisibleEssays();
    const isTypeCategory = isEssayTypeCategory(state.category);
    const shouldShowTypeTheory = isTypeCategory && doesEssayTypeTheoryMatchQuery(state.category);
    list.innerHTML = "";

    if (count) {
        count.textContent = isTypeCategory ? `${visibleEssays.length} đề` : `${visibleEssays.length}/${essays.length}`;
    }

    if (shouldShowTypeTheory) {
        list.appendChild(createEssayTypeTheorySidebarItem(state.category));
    }

    if (!visibleEssays.length) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "topic-empty";
        emptyItem.textContent = shouldShowTypeTheory ? "Chưa có đề luyện cho dạng này." : "Không có chủ đề phù hợp.";
        list.appendChild(emptyItem);
        return;
    }

    const renderItem = (itemData, isSub = false) => {
        const { essay, index } = itemData;
        const item = document.createElement("li");
        item.className = "topic-item-wrapper";

        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "topic-button-wrapper";

        const button = document.createElement("button");
        button.type = "button";
        button.className = state.currentView === "essay" && index === state.currentEssayIndex ? "topic-button active" : "topic-button";
        if (isSub) button.classList.add("sub-topic");

        button.addEventListener("click", () => loadEssay(index));

        const number = document.createElement("span");
        number.className = "topic-number";
        
        let displayNum = "";
        const match = essay.title.match(/^(\d+(?:\.\d+)*)\./);
        if (match) {
            displayNum = match[1];
        } else {
            displayNum = isSub ? "" : String(index + 1).padStart(2, "0");
        }
        if (!isSub && displayNum.length === 1) displayNum = "0" + displayNum;
        
        number.textContent = displayNum;

        const copy = document.createElement("span");
        copy.className = "topic-copy";

        const title = document.createElement("strong");
        title.textContent = essay.title.replace(/^(\d+(?:\.\d+)*)\.\s*/, "");

        const meta = document.createElement("small");
        meta.textContent = essay.meta.taskType;

        copy.append(title, meta);
        button.append(number, copy);
        buttonWrapper.appendChild(button);
        item.appendChild(buttonWrapper);

        const children = visibleEssays.filter(e => e.essay.parentId === essay.id);
        if (children.length > 0) {
            button.style.paddingRight = "40px";
            
            const toggleBtn = document.createElement("button");
            toggleBtn.className = "topic-toggle-btn";
            toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            
            const childList = document.createElement("ul");
            childList.className = "sub-topic-list";
            
            const hasActiveChild = state.currentView === "essay" && children.some(c => c.index === state.currentEssayIndex);
            if (hasActiveChild) {
                childList.classList.add("expanded");
                toggleBtn.classList.add("expanded");
            }

            toggleBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                childList.classList.toggle("expanded");
                toggleBtn.classList.toggle("expanded");
            });

            buttonWrapper.appendChild(toggleBtn);

            children.forEach(c => {
                childList.appendChild(renderItem(c, true));
            });
            item.appendChild(childList);
        }

        return item;
    };

    visibleEssays.forEach(itemData => {
        if (!itemData.essay.parentId) {
            list.appendChild(renderItem(itemData, false));
        }
    });
}

function createEssayTypeTheorySidebarItem(taskType) {
    const pattern = getEssayTypePattern(taskType);
    const item = document.createElement("li");
    item.className = "topic-item-wrapper";

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "topic-button-wrapper";

    const button = document.createElement("button");
    button.type = "button";
    button.className = state.currentView === "type-theory" ? "topic-button active theory-item" : "topic-button theory-item";
    button.addEventListener("click", () => loadEssayTypeTheory(taskType));

    const number = document.createElement("span");
    number.className = "topic-number";
    number.textContent = "LT";

    const copy = document.createElement("span");
    copy.className = "topic-copy";

    const title = document.createElement("strong");
    title.textContent = "Lý thuyết dạng luận";

    const meta = document.createElement("small");
    meta.textContent = pattern?.title || taskType;

    copy.append(title, meta);
    button.append(number, copy);
    buttonWrapper.appendChild(button);
    item.appendChild(buttonWrapper);

    return item;
}

function renderTheorySidebar() {
    const list = document.getElementById("essay-list-ul");
    const count = document.getElementById("topic-count");
    if (!list) return;

    const haystack = [
        "lý thuyết chung",
        "thông tin chung",
        "phân tích đề",
        "fact-based",
        "opinion-based",
        "từ vựng"
    ].join(" ");
    const matchesQuery = !state.query || haystack.includes(state.query);

    list.innerHTML = "";
    if (count) {
        count.textContent = matchesQuery ? "1/1" : "0/1";
    }

    if (!matchesQuery) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "topic-empty";
        emptyItem.textContent = "Không có nội dung phù hợp.";
        list.appendChild(emptyItem);
        return;
    }

    const item = document.createElement("li");
    item.className = "topic-item-wrapper";

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "topic-button-wrapper";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-button active theory-item";
    button.addEventListener("click", loadGeneralTheory);

    const number = document.createElement("span");
    number.className = "topic-number";
    number.textContent = "LT";

    const copy = document.createElement("span");
    copy.className = "topic-copy";

    const title = document.createElement("strong");
    title.textContent = "Lý thuyết chung";

    const meta = document.createElement("small");
    meta.textContent = "Nền tảng viết luận";

    copy.append(title, meta);
    button.append(number, copy);
    buttonWrapper.appendChild(button);
    item.appendChild(buttonWrapper);
    list.appendChild(item);
}

function getVisibleEssays() {
    if (state.category === GENERAL_THEORY_CATEGORY) return [];

    const matchedIndices = new Set();
    
    essays.forEach((essay, index) => {
        const matchesCategory = state.category === "all" || essay.meta.taskType === state.category;
        const haystack = [
            essay.title,
            essay.summary,
            essay.meta.category,
            essay.meta.taskType,
            ...(essay.vocab || essay.vocabulary || []).map((item) => `${item.en} ${item.vn}`)
        ].join(" ").toLowerCase();
        const matchesQuery = !state.query || haystack.includes(state.query);
        
        if (matchesCategory && matchesQuery) {
            matchedIndices.add(index);
            if (essay.parentId) {
                const parentIndex = essays.findIndex(e => e.id === essay.parentId);
                if (parentIndex !== -1) {
                    matchedIndices.add(parentIndex);
                }
            }
        }
    });
    
    return Array.from(matchedIndices)
        .sort((a,b) => a-b)
        .map(index => ({ essay: essays[index], index }));
}

function isEssayTypeCategory(category) {
    return ESSAY_TYPE_THEORY_TABS.some((tab) => tab.id === category);
}

function getEssayTypePattern(taskType) {
    const tab = ESSAY_TYPE_THEORY_TABS.find((item) => item.id === taskType);
    if (!tab) return null;
    return THEORY_INTRO_CONCLUSION_PATTERNS.find((pattern) => pattern.id === tab.patternId) || null;
}

function doesEssayTypeTheoryMatchQuery(taskType) {
    if (!state.query) return true;

    const pattern = getEssayTypePattern(taskType);
    if (!pattern) return false;

    const haystack = [
        pattern.title,
        pattern.useFor,
        pattern.introNote,
        pattern.quickTip,
        ...(pattern.generalTheory || []).flatMap((item) => [item.title, item.text]),
        ...(pattern.introSteps || []).flatMap((step) => [step.role, step.text, step.alt || ""]),
        ...(pattern.introVariants || []).flatMap((variant) => [variant.title, ...variant.lines]),
        ...(pattern.conclusionTemplates || []).flatMap((template) => [template.title, template.text])
    ].join(" ").toLowerCase();

    return haystack.includes(state.query);
}

function showEssayWorkspace() {
    const theorySection = document.getElementById("general-theory-section");
    theorySection?.classList.add("hidden");

    document.querySelectorAll(".essay-section").forEach((section) => {
        section.classList.remove("hidden");
    });

    document.getElementById("sample-essay-section")?.classList.add("hidden");
    const btnSample = document.getElementById("btn-sample");
    btnSample?.removeAttribute("disabled");
    btnSample?.classList.remove("active");
    document.getElementById("btn-variant-sample")?.classList.remove("active");

    document.body.classList.remove("view-theory");
    document.body.classList.add("view-essay");
}

function showTheoryWorkspace() {
    const theorySection = document.getElementById("general-theory-section");
    theorySection?.classList.remove("hidden");

    document.querySelectorAll(".essay-section").forEach((section) => {
        section.classList.add("hidden");
    });

    const btnSample = document.getElementById("btn-sample");
    btnSample?.classList.remove("active");
    btnSample?.setAttribute("disabled", "true");
    document.getElementById("btn-variant-sample")?.classList.remove("active");

    document.body.classList.remove("view-essay");
    document.body.classList.add("view-theory");
}

function loadGeneralTheory() {
    state.category = GENERAL_THEORY_CATEGORY;
    state.currentView = "theory";
    state.isSampleMode = false;

    showTheoryWorkspace();
    renderFilters();
    renderSidebar();

    setText("topic-kicker", "Nền tảng VSTEP Writing");
    setText("current-title", "Lý thuyết chung");
    setText("metric-primary-value", "02");
    setText("metric-primary-label", "Phần đề");
    setText("metric-body", "250+");
    setText("metric-body-label", "Từ tối thiểu");
    setText("metric-time", "40'");
    setText("metric-time-label", "Thời lượng");

    document.getElementById("topic-variants-container")?.remove();

    const container = document.getElementById("general-theory-section");
    if (!container) return;

    container.innerHTML = renderGeneralTheoryHtml();
    bindGeneralTheoryInteractions();
}

function loadEssayTypeTheory(taskType) {
    const pattern = getEssayTypePattern(taskType);
    if (!pattern) return;

    state.category = taskType;
    state.currentView = "type-theory";
    state.isSampleMode = false;

    showTheoryWorkspace();
    renderFilters();
    renderSidebar();

    setText("topic-kicker", "Lý thuyết dạng luận");
    setText("current-title", pattern.title);
    setText("metric-primary-value", "2-3");
    setText("metric-primary-label", "Câu mở bài");
    setText("metric-body", "02");
    setText("metric-body-label", "Câu kết bài");
    setText("metric-time", "40'");
    setText("metric-time-label", "Thời lượng");

    document.getElementById("topic-variants-container")?.remove();

    const container = document.getElementById("general-theory-section");
    if (!container) return;

    container.innerHTML = renderEssayTypeTheoryHtml(taskType);
    bindEssayTypeTheoryInteractions();
}

function renderEssayTypeTheoryHtml(taskType) {
    const pattern = getEssayTypePattern(taskType);
    if (!pattern) return "";

    return `
        <section class="content-card type-theory-overview-card pattern-${escapeHtml(pattern.tone)}">
            <div class="pattern-card-head type-theory-head">
                <span class="pattern-icon"><i class="fa-solid ${escapeHtml(pattern.icon)}"></i></span>
                <div>
                    <h3>${escapeHtml(pattern.title)}</h3>
                    <p>${escapeHtml(pattern.useFor)}</p>
                </div>
            </div>
            <div class="type-theory-note-grid">
                ${pattern.generalTheory.map((item, index) => `
                    <div class="type-theory-note-item">
                        <div class="note-header">
                            <span>${String(index + 1).padStart(2, "0")}</span>
                            <strong>${escapeHtml(item.title)}</strong>
                        </div>
                        <p>${escapeHtml(item.text)}</p>
                    </div>
                `).join("")}
            </div>
        </section>

        ${renderIntroConclusionTheorySection(pattern)}
    `;
}

function renderGeneralTheoryHtml() {
    return `
        <section class="content-card theory-brief-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title"><i class="fa-solid fa-circle-info"></i> THÔNG TIN CHUNG</h2>
            </div>
            <div class="theory-lead-grid">
                <div class="theory-lead-copy">
                    <p class="theory-kicker">Mục tiêu bài viết</p>
                    <h3>Viết một bài luận về một chủ đề bất kỳ, đúng trọng tâm yêu cầu đề bài.</h3>
                    <p>Nên dành ít nhất 40 phút cho bài viết. Một bài luận VSTEP nên có ít nhất 250 từ, gồm 01 đoạn mở bài, 02 hoặc 03 đoạn thân bài tùy yêu cầu, và 01 đoạn kết bài.</p>
                </div>
                <div class="theory-essay-frame" aria-label="Cấu trúc bài luận">
                    <div class="essay-frame-block intro">Mở bài</div>
                    <div class="essay-frame-body">
                        <span><strong>Thân bài 1</strong><small aria-hidden="true">&nbsp;</small></span>
                        <span><strong>Thân bài 2</strong><small aria-hidden="true">&nbsp;</small></span>
                        <span><strong>Thân bài 3</strong><small>optional</small></span>
                    </div>
                    <div class="essay-frame-block conclusion">Kết bài</div>
                </div>
            </div>
            <div class="time-flow" aria-label="Cách phân chia thời gian 40 phút">
                ${THEORY_TIME_STEPS.map((step, index) => `
                    <div class="time-step">
                        <div class="time-step-index">${String(index + 1).padStart(2, "0")}</div>
                        <div>
                            <strong>${escapeHtml(step.time)}</strong>
                            <span>${escapeHtml(step.title)}</span>
                            <p>${escapeHtml(step.detail)}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>

        <section class="content-card theory-aspect-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title"><i class="fa-solid fa-layer-group"></i> CÁC KHÍA CẠNH THƯỜNG GẶP</h2>
            </div>
            <div class="aspect-grid">
                <div class="aspect-column">
                    ${THEORY_ASPECTS.slice(0, 3).map(renderTheoryAspectItem).join("")}
                </div>
                <div class="aspect-column">
                    ${THEORY_ASPECTS.slice(3).map(renderTheoryAspectItem).join("")}
                </div>
            </div>
            <div class="theory-note">
                <strong>Nguyên tắc làm bài:</strong>
                Thường đề yêu cầu phân tích 02 khía cạnh của một chủ đề; đôi khi chỉ yêu cầu 01 khía cạnh. Hỏi gì thì viết đúng phần đó, không mở rộng lan man.
            </div>
        </section>

        <section class="content-card theory-analysis-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title"><i class="fa-solid fa-magnifying-glass-chart"></i> PHÂN TÍCH ĐỀ</h2>
            </div>
            <div class="prompt-anatomy-grid">
                <div class="prompt-paper" aria-label="Đề luận có cấu trúc hai phần: chủ đề và yêu cầu đề bài">
                    <span class="paper-line topic l1"></span>
                    <span class="paper-line topic l2"></span>
                    <span class="paper-line topic l3"></span>
                    <span class="paper-line topic l4"></span>
                    <span class="paper-line task l5"></span>
                    <span class="paper-line task l6"></span>
                    <div class="paper-callout paper-callout-topic">
                        <span>Chủ đề</span>
                        <i></i>
                    </div>
                    <div class="paper-callout paper-callout-task">
                        <span>Yêu cầu đề bài</span>
                        <i></i>
                    </div>
                </div>
                <div class="prompt-anatomy-copy">
                    <p class="theory-kicker">Công thức đọc đề</p>
                    <h3>Đề luận = Chủ đề + Yêu cầu đề bài</h3>
                    <div class="anatomy-pair">
                        <span>Chủ đề</span>
                        <p>Cho biết bài viết xoay quanh vấn đề nào.</p>
                    </div>
                    <div class="anatomy-pair">
                        <span>Yêu cầu đề bài</span>
                        <p>Cho biết cần phân tích khía cạnh nào: lợi ích, bất lợi, nguyên nhân, tác động, giải pháp hay quan điểm cá nhân.</p>
                    </div>
                </div>
            </div>

            <div class="essay-type-grid">
                <div class="essay-type fact">
                    <span class="essay-type-tag">Fact-based</span>
                    <h3>Phân tích vấn đề</h3>
                    <p>Dạng đề chủ yếu yêu cầu phân tích nguyên nhân, hậu quả, lợi ích, bất lợi hoặc giải pháp. Không nhất thiết phải tranh luận một nhận định đúng hay sai.</p>
                    <small><strong>Lỗi hay gặp:</strong> viết lan sang ý kiến cá nhân quá nhiều.</small>
                </div>
                <div class="essay-type opinion">
                    <span class="essay-type-tag">Opinion-based</span>
                    <h3>Đưa ra và bảo vệ quan điểm</h3>
                    <p>Dạng đề yêu cầu trả lời rõ bạn đồng ý, không đồng ý hay đồng ý một phần, sau đó bảo vệ quan điểm đó nhất quán.</p>
                    <small><strong>Lỗi hay gặp:</strong> quan điểm không rõ hoặc thiếu nhất quán.</small>
                </div>
            </div>
        </section>

        <section class="content-card classification-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title"><i class="fa-solid fa-table-list"></i> Phân loại yêu cầu đề bài</h2>
                <button id="check-classification-btn" class="exercise-check-btn" type="button">Xem kết quả</button>
            </div>
            <div class="classification-exercise-grid">
                ${THEORY_CLASSIFICATION_EXERCISES.map(renderClassificationExerciseCard).join("")}
            </div>
            <div id="classification-result-summary" class="exercise-summary" aria-live="polite"></div>
        </section>

        <section class="content-card theory-vocab-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title"><i class="fa-solid fa-spell-check"></i> TỪ VỰNG THEO NHÓM Ý</h2>
            </div>
            <div class="theory-vocab-grid">
                ${THEORY_VOCAB_GROUPS.map((group, index) => `
                    <div class="theory-vocab-item vocab-${escapeHtml(group.tone)}">
                        <span class="vocab-group-number">${String(index + 1).padStart(2, "0")}</span>
                        <div>
                            <div class="vocab-term-list">
                                ${group.terms.map((term) => `<em>${escapeHtml(term)}</em>`).join("")}
                            </div>
                            <strong>${escapeHtml(group.title)}</strong>
                        </div>
                    </div>
                `).join("")}
            </div>
            <div class="adjective-panel">
                <div>
                    <p class="theory-kicker">Có thể thêm trước các danh từ trên</p>
                    <h3>Tính từ hay dùng</h3>
                </div>
                <div class="adjective-chip-grid">
                    ${THEORY_ADJECTIVES.map((item) => `
                        <button class="adjective-chip" type="button" aria-expanded="false">
                            <strong>${escapeHtml(item.en)}</strong>
                            <span>${escapeHtml(item.vn)}</span>
                        </button>
                    `).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderIntroConclusionTheorySection(activePattern) {
    const patterns = activePattern ? [activePattern] : THEORY_INTRO_CONCLUSION_PATTERNS;

    return `
        <section class="content-card intro-conclusion-card">
            <div class="section-header-flex theory-section-heading">
                <h2 class="section-title">CẤU TRÚC 03 HỒI: MỞ BÀI ➔ THÂN BÀI ➔ KẾT BÀI</h2>
            </div>

            <div class="essay-pattern-grid">
                ${patterns.map(renderIntroConclusionPatternCard).join("")}
            </div>
        </section>
    `;
}

function renderIntroConclusionPatternCard(pattern) {
    return `
        <article class="essay-pattern-card pattern-${escapeHtml(pattern.tone)}">
            <div class="pattern-flow">
                <div class="intro-section-box">
                    ${renderWritingTheoryPanel("intro")}

                    <div class="pattern-template-panel intro-template-panel">
                        <ol class="pattern-step-list">
                            ${pattern.introSteps.map(renderPatternStep).join("")}
                        </ol>
                    </div>

                    <div class="pattern-variant-area">
                        ${pattern.introVariants.map(renderPatternVariant).join("")}
                    </div>
                </div>

                <div class="body-section-box">
                    ${renderWritingTheoryPanel("body")}
                    
                    ${renderBodyDetailPanel()}
                </div>

                <div class="conclusion-section-box">
                    ${renderWritingTheoryPanel("conclusion")}

                    <div class="pattern-template-panel conclusion-template-panel">
                        <ol class="pattern-step-list">
                            ${pattern.conclusionSteps ? pattern.conclusionSteps.map(renderPatternStep).join("") : ""}
                        </ol>
                    </div>

                    ${pattern.conclusionVariants && pattern.conclusionVariants.length > 0 ? `
                    <div class="pattern-variant-area">
                        ${pattern.conclusionVariants.map(renderPatternVariant).join("")}
                    </div>
                    ` : ""}
                </div>
            </div>
        </article>
    `;
}

function renderWritingTheoryPanel(type) {
    if (type === "intro") {
        return `
            <div class="writing-theory-panel intro-panel">
                <span class="formula-panel-tag">Lý thuyết mở bài</span>
                <h3>2-3 câu, trong đó thesis statement là bắt buộc.</h3>
                <div class="formula-pill-row" style="align-items: center;">
                    <span>TOPIC INTRODUCTION</span>
                    <i class="fa-solid fa-arrow-right formula-pill-separator"></i>
                    <span>BRIDGE</span>
                    <i class="fa-solid fa-arrow-right formula-pill-separator"></i>
                    <span>THESIS STATEMENT</span>
                </div>
                <p><span style="color: #b91c1c;">Thesis statement</span> phải <span style="color: #b91c1c;">nói chính xác bài sẽ phân tích gì</span>, không viết chung chung kiểu "This essay will discuss this issue".</p>
            </div>
        `;
    }

    if (type === "body") {
        return `
            <div class="writing-theory-panel body-panel">
                <span class="formula-panel-tag">Lý thuyết thân bài</span>

                <div class="body-theory-layout">
                    <div class="body-anatomy-wrapper">
                        <div class="body-anatomy-paper" aria-label="Sơ đồ cấu trúc đoạn thân bài">
                            <svg class="anatomy-svg" viewBox="0 0 600 347" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                                    </marker>
                                </defs>
                                
                                <!-- Connection lines -->
                                <path d="M 175,37 Q 205,50 240,66" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4" fill="none" marker-end="url(#arrow)" />
                                <path d="M 482,37 Q 451,66 420,94" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4" fill="none" marker-end="url(#arrow)" />
                                <path d="M 150,308 Q 175,230 200,151" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4" fill="none" marker-end="url(#arrow)" />
                                <path d="M 445,308 Q 420,258 395,208" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4" fill="none" marker-end="url(#arrow)" />
                            </svg>

                            <!-- Lines -->
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment ts-segment" style="width: 55%;"></span>
                                <span class="anatomy-dot"></span>
                                <span class="anatomy-segment p1-segment" style="width: 35%;"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p1-segment" style="width: 90%;"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p1-segment" style="width: 90%;"></span>
                                <span class="anatomy-dot"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p2-segment" style="width: 90%;"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p2-segment" style="width: 90%;"></span>
                                <span class="anatomy-dot"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p3-segment" style="width: 90%;"></span>
                            </div>
                            <div class="anatomy-line-row">
                                <span class="anatomy-segment p3-segment" style="width: 70%;"></span>
                                <span class="anatomy-dot"></span>
                            </div>

                            <!-- Callouts -->
                            <div class="paper-callout callout-ts">
                                <span>Topic Sentence</span>
                            </div>
                            <div class="paper-callout callout-p1">
                                <span>Point 1</span>
                            </div>
                            <div class="paper-callout callout-p2">
                                <span>Point 2</span>
                            </div>
                            <div class="paper-callout callout-p3">
                                <span>Point 3</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="body-theory-intro">
                        <p><strong>Topic sentence (câu chủ đề):</strong> là câu đầu tiên của mỗi đoạn thân bài. Câu này cho người đọc biết đoạn văn sẽ tập trung phân tích nội dung gì.</p>
                        <p><strong>Point 1, 2, 3 (luận điểm 1, 2, 3):</strong> những luận điểm của người viết. Một đoạn thân bài chỉ cần 2 hoặc 3 luận điểm chủ đạo.</p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="writing-theory-panel conclusion-panel">
            <span class="formula-panel-tag">Lý thuyết kết bài</span>
            <h3>2 câu là đủ: tóm tắt ý chính và chốt lại bài.</h3>
            <div class="formula-pill-row" style="align-items: center;">
                <span>SUMMARY</span>
                <i class="fa-solid fa-plus formula-pill-separator"></i>
                <span>FINAL STATEMENT</span>
            </div>
            <p>Không đưa <strong style="color: #b91c1c;">ví dụ mới</strong>, <strong style="color: #b91c1c;">lý do mới</strong> hoặc <strong style="color: #b91c1c;">ý tưởng mới</strong> vào kết bài.</p>
        </div>
    `;
}

function renderBodyDetailPanel() {
    return `
        <div class="pattern-template-panel body-template-panel" style="margin-bottom: 24px;">
            <div class="peer-development-section">
                <h4>CÁCH VIẾT TOPIC SENTENCE</h4>
                <div class="ts-templates-wrapper">
                    <div class="ts-template-row">
                        <span class="black-btn-label">Viết về thuận lợi</span>
                        <div class="ts-template-content">
                            <code>On the one hand, there are several benefits of</code> <span class="peer-pill">chủ đề</span>
                        </div>
                    </div>
                    <div class="ts-template-row" style="margin-top: 12px;">
                        <span class="black-btn-label">Viết về bất lợi</span>
                        <div class="ts-template-content">
                            <span class="ts-toggle-btn" onclick="this.innerText = this.innerText === 'On the other hand,' ? 'However,' : 'On the other hand,'">On the other hand,</span> <span class="peer-pill">chủ đề</span> <code>also comes with some</code> <span class="peer-pill">bất lợi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pattern-template-panel body-template-panel">
            <div class="peer-development-section">
                <h4>CÁCH PHÁT TRIỂN LUẬN ĐIỂM</h4>
                <p class="peer-desc">Để phân tích luận điểm một cách logic và bài bản, tác giả có thể “mổ xẻ” luận điểm đó bằng phương pháp <strong>“P.E.E.R”</strong></p>

            <div class="peer-formula-visual">
                <div class="peer-badge-wrapper">
                    <span class="peer-big-badge p-badge">P</span>
                    <span class="peer-badge-label">Point</span>
                </div>
                <span class="peer-connector"><i class="fa-solid fa-arrow-right"></i></span>
                <div class="peer-badge-wrapper">
                    <span class="peer-big-badge e-badge">E</span>
                    <span class="peer-badge-label">Explain</span>
                </div>
                <span class="peer-connector"><i class="fa-solid fa-arrow-right"></i></span>
                <div class="peer-badge-wrapper">
                    <span class="peer-big-badge e2-badge">E</span>
                    <span class="peer-badge-label">Example</span>
                </div>
                <span class="peer-connector"><i class="fa-solid fa-arrow-right"></i></span>
                <div class="peer-badge-wrapper">
                    <span class="peer-big-badge r-badge">R</span>
                    <span class="peer-badge-label">Result</span>
                </div>
            </div>
            <div class="peer-steps-grid">
                <div class="peer-step-card expanded">
                    <div class="peer-step-header">
                        <span class="peer-step-badge">P</span>
                        <strong>1. Cách trình bày luận điểm (Point)</strong>
                    </div>
                    <div class="peer-step-content">
                        <ul class="peer-template-list">
                            <li><code class="formula-toggle" data-en="Firstly / First of all, Secondly, Finally," data-vi="Đầu tiên, thứ hai, cuối cùng,">Firstly / First of all, Secondly, Finally,</code> <span class="peer-pill">mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="Moreover, Furthermore, In addition, Besides," data-vi="Hơn thế nữa, thêm vào đó, ngoài ra,">Moreover, Furthermore, In addition, Besides,</code> <span class="peer-pill">mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="One" data-vi="Một">One</code> <span class="peer-pill">cụm danh từ</span> <code class="formula-toggle" data-en="is - is that" data-vi="là">is - is that</code> <span class="peer-pill">N / V<sub>ing</sub> - mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="Another" data-vi="Một ... khác">Another</code> <span class="peer-pill">cụm danh từ</span> <code class="formula-toggle" data-en="is - is that" data-vi="là">is - is that</code> <span class="peer-pill">N / V<sub>ing</sub> - mệnh đề</span></li>
                        </ul>
                    </div>
                </div>

                <div class="peer-step-card">
                    <div class="peer-step-header">
                        <span class="peer-step-badge">E</span>
                        <strong>2. Cách giải thích luận điểm (Explain)</strong>
                    </div>
                    <div class="peer-step-content">
                        <ul class="peer-template-list">
                            <li style="color: #c2410c; list-style-type: none; margin-bottom: 2px;">Không cần từ nối gì cả, đi thẳng vào câu giải thích.</li>
                            <li><code class="formula-toggle" data-en="This is because" data-vi="Điều này là bởi vì">This is because</code> <span class="peer-pill">mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="Since" data-vi="Bởi vì">Since</code> <span class="peer-pill">mệnh đề nguyên nhân</span> <code>,</code> <span class="peer-pill">mệnh đề kết quả</span></li>
                            <li><code class="formula-toggle" data-en="This is due to the fact that" data-vi="Điều này là do thực tế rằng">This is due to the fact that</code> <span class="peer-pill">mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="In fact," data-vi="Thực tế là,">In fact,</code> <span class="peer-pill">mệnh đề</span></li>
                        </ul>
                    </div>
                </div>

                <div class="peer-step-card">
                    <div class="peer-step-header">
                        <span class="peer-step-badge">E</span>
                        <strong>3. Cách cho ví dụ (Example)</strong>
                    </div>
                    <div class="peer-step-content">
                        <ul class="peer-template-list">
                            <li><code class="formula-toggle" data-en="For example," data-vi="Ví dụ,">For example,</code> <span class="peer-pill">ví dụ</span></li>
                            <li><code class="formula-toggle" data-en="For instance," data-vi="Ví dụ,">For instance,</code> <span class="peer-pill">ví dụ</span></li>
                        </ul>
                    </div>
                </div>

                <div class="peer-step-card">
                    <div class="peer-step-header">
                        <span class="peer-step-badge">R</span>
                        <strong>4. Cách chỉ ra kết quả / hệ quả của luận điểm (Result)</strong>
                    </div>
                    <div class="peer-step-content">
                        <ul class="peer-template-list">
                            <li><code class="formula-toggle" data-en="Therefore, As a result, Consequently," data-vi="Vì vậy, Kết quả là, Hậu quả là,">Therefore, As a result, Consequently,</code> <span class="peer-pill">mệnh đề</span></li>
                            <li><code class="formula-toggle" data-en="This <span style='color: #f97316'>noun</span> leads to / causes / results in" data-vi="Điều này dẫn đến / gây ra">This <span style="color: #f97316">noun</span> leads to / causes / results in</code> <span class="peer-pill">N / V<sub>ing</sub></span></li>
                            <li><code class="formula-toggle" data-en="Such <span style='color: #f97316'>noun</span> leads to / causes / results in" data-vi="Điều này dẫn đến / gây ra">Such <span style="color: #f97316">noun</span> leads to / causes / results in</code> <span class="peer-pill">N / V<sub>ing</sub></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
}



function renderPatternStep(step) {
    return `
        <li>
            <div class="pattern-step-header">
                <span class="pattern-step-number">${escapeHtml(step.label)}</span>
                <strong>${escapeHtml(step.role).toUpperCase()}</strong>
            </div>
            <div class="pattern-step-copy">
                ${renderTemplateSample(step.text)}
                ${step.alt ? renderTemplateSample(step.alt) : ""}
                ${step.variantCondition ? `
                    <div class="pattern-step-variant-row">
                        <div class="variant-text-wrap">
                            ${renderTemplateSample(step.variantText)}
                        </div>
                        <div class="variant-badge-wrap">
                            <span class="variant-black-badge">${escapeHtml(step.variantCondition)}</span>
                        </div>
                    </div>
                ` : ""}
            </div>
        </li>
    `;
}

function renderPatternVariant(variant) {
    return `
        <details class="pattern-variant">
            <summary>${escapeHtml(variant.title)}</summary>
            <div class="pattern-line-list">
                ${variant.lines.map((line) => renderTemplateSample(line, "compact")).join("")}
            </div>
        </details>
    `;
}

function renderTemplateSample(template, mode = "") {
    const text = getTemplateText(template);
    const translation = getTemplateTranslation(template);
    const modeClass = mode ? ` sample-template-${mode}` : "";

    if (!translation) {
        return `
            <div class="sample-template-static${modeClass}">
                <span class="bullet-point">•</span>
                <span class="sample-template-text">${formatTemplateText(text)}</span>
            </div>
        `;
    }

    return `
        <div class="sample-template-wrap${modeClass}">
            <button class="sample-template-btn" type="button" aria-expanded="false">
                <span class="bullet-point">•</span>
                <span class="sample-template-text">${formatTemplateText(text)}</span>
            </button>
            <p class="sample-template-vn hidden">${formatTemplateText(translation)}</p>
        </div>
    `;
}

function getTemplateText(template) {
    if (typeof template === "string") return template;
    return template?.text || "";
}

function getTemplateTranslation(template) {
    if (typeof template === "object" && template?.vn) return template.vn;
    return TEMPLATE_VN_TRANSLATIONS[getTemplateText(template)] || "";
}

function bindEssayTypeTheoryInteractions() {
    document.querySelectorAll(".type-theory-tab").forEach((button) => {
        button.addEventListener("click", () => {
            const taskType = button.dataset.taskType;
            if (!taskType) return;

            state.query = "";
            loadEssayTypeTheory(taskType);
        });
    });

    document.querySelectorAll(".sample-template-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const translation = button.closest(".sample-template-wrap")?.querySelector(".sample-template-vn");
            if (!translation) return;

            const isHidden = translation.classList.toggle("hidden");
            button.setAttribute("aria-expanded", String(!isHidden));
        });
    });

    // P.E.E.R accordion interactivity
    document.querySelectorAll(".peer-step-card .peer-step-header").forEach((header) => {
        header.addEventListener("click", () => {
            const card = header.closest(".peer-step-card");
            if (!card) return;
            const wasExpanded = card.classList.contains("expanded");
            
            // Collapse all PEER cards first
            document.querySelectorAll(".peer-step-card").forEach((c) => {
                c.classList.remove("expanded");
            });
            
            // Toggle the clicked one
            if (!wasExpanded) {
                card.classList.add("expanded");
            }
        });
    });

    // Formula toggles interactivity
    document.querySelectorAll(".formula-toggle").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const isVi = toggle.classList.toggle("show-vi");
            toggle.innerHTML = isVi ? toggle.dataset.vi : toggle.dataset.en;
        });
    });
}

function renderClassificationExerciseCard(item, index) {
    return `
        <article class="exercise-card" data-answer="${escapeHtml(item.answer)}">
            <button class="exercise-prompt-btn" type="button" aria-expanded="false">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${escapeHtml(item.prompt)}</strong>
            </button>
            <p class="exercise-translation hidden">${escapeHtml(item.vn)}</p>
            <div class="exercise-choice-row" role="group" aria-label="Chọn dạng đề">
                <button type="button" data-choice="fact">fact-based</button>
                <button type="button" data-choice="opinion">opinion-based</button>
            </div>
            <p class="exercise-answer hidden"></p>
        </article>
    `;
}

function renderTheoryAspectItem(aspect) {
    return `
        <div class="aspect-item aspect-${escapeHtml(aspect.tone)}">
            <span class="aspect-icon"><i class="fa-solid ${escapeHtml(aspect.icon)}"></i></span>
            <strong>${escapeHtml(aspect.title)}</strong>
            <small>${escapeHtml(aspect.detail)}</small>
        </div>
    `;
}

function bindGeneralTheoryInteractions() {
    document.querySelectorAll(".exercise-prompt-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".exercise-card");
            const translation = card?.querySelector(".exercise-translation");
            if (!translation) return;

            const isHidden = translation.classList.toggle("hidden");
            button.setAttribute("aria-expanded", String(!isHidden));
        });
    });

    document.querySelectorAll(".exercise-choice-row button").forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".exercise-card");
            if (!card) return;

            card.dataset.choice = button.dataset.choice || "";
            card.classList.remove("is-correct", "is-incorrect", "is-unanswered");
            card.querySelector(".exercise-answer")?.classList.add("hidden");
            card.querySelectorAll(".exercise-choice-row button").forEach((choiceButton) => {
                choiceButton.classList.toggle("selected", choiceButton === button);
            });
        });
    });

    document.getElementById("check-classification-btn")?.addEventListener("click", () => {
        const cards = Array.from(document.querySelectorAll(".exercise-card"));
        let correctCount = 0;

        cards.forEach((card) => {
            const answer = card.dataset.answer;
            const choice = card.dataset.choice;
            const answerLabel = answer === "fact" ? "fact-based" : "opinion-based";
            const answerEl = card.querySelector(".exercise-answer");

            card.classList.remove("is-correct", "is-incorrect", "is-unanswered");

            if (!choice) {
                card.classList.add("is-unanswered");
                if (answerEl) {
                    answerEl.textContent = `Đáp án: ${answerLabel}`;
                    answerEl.classList.remove("hidden");
                }
                return;
            }

            const isCorrect = choice === answer;
            if (isCorrect) correctCount += 1;

            card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
            if (answerEl) {
                answerEl.textContent = `Đáp án: ${answerLabel}`;
                answerEl.classList.remove("hidden");
            }
        });

        const summary = document.getElementById("classification-result-summary");
        if (summary) {
            summary.textContent = `Kết quả: ${correctCount}/${cards.length} câu đúng.`;
            summary.classList.add("visible");
        }
    });

    document.querySelectorAll(".adjective-chip").forEach((button) => {
        button.addEventListener("click", () => {
            const isRevealed = button.classList.toggle("revealed");
            button.setAttribute("aria-expanded", String(isRevealed));
        });
    });
}

function loadEssay(index) {
    if (!essays[index]) return;

    state.currentView = "essay";
    state.currentEssayIndex = index;
    const originalData = essays[index];

    let dataToRender = originalData;
    if (originalData.variants && originalData.variants.length > 0) {
        const vIndex = (originalData.currentVariantIndex !== undefined && originalData.currentVariantIndex < originalData.variants.length) ? originalData.currentVariantIndex : (originalData.variants.length > 1 ? 1 : 0);
        dataToRender = { ...originalData, ...originalData.variants[vIndex] };
    }

    showEssayWorkspace();
    renderSidebar();
    renderTopicOverview(dataToRender, originalData);
    renderPrompt(dataToRender);
    renderVocab(dataToRender);
    renderFontControls(); // Re-render to update color toggles for current essay
    setupTranslationWorkspace("intro", dataToRender);
    setupTranslationWorkspace("conclusion", dataToRender);
    renderBodyParagraphs(dataToRender);

    renderSampleEssay(dataToRender);
    
    // Reset sample mode
    state.isSampleMode = false;
    const btnSample = document.getElementById("btn-sample");
    const sampleSection = document.getElementById("sample-essay-section");
    const practiceSections = document.querySelectorAll(".practice-section");
    btnSample?.classList.remove("active");
    sampleSection?.classList.add("hidden");
    practiceSections.forEach(sec => sec.classList.remove("hidden"));
}

function resolveLevelText(textStr, level = "B1") {
    if (!textStr || typeof textStr !== "string") return textStr || "";
    return textStr.replace(/\{([^{|}]+)\|([^{|}]+)\}/g, (match, b1, b2) => {
        const cleanB1 = b1.trim();
        const cleanB2 = b2.trim();
        if (cleanB1.startsWith("+") || cleanB1.includes("Thêm ý")) {
            return level === "B2" ? cleanB2 : "";
        }
        return level === "B2" ? cleanB2 : cleanB1;
    });
}

function renderTopicOverview(data, originalData = data) {
    setText("topic-kicker", `${data.meta.taskType}`);
    setText("current-title", data.title);
    setText("metric-primary-value", "01");
    setText("metric-primary-label", "Bài mẫu");
    setText("metric-body-label", "Đoạn thân bài");
    setText("metric-time-label", "Thời lượng");

    const btnSample = document.getElementById("btn-sample");
    btnSample?.removeAttribute("disabled");

    const heroCopy = document.querySelector(".hero-copy");
    let variantContainer = document.getElementById("topic-variants-container");
    if (!variantContainer) {
        variantContainer = document.createElement("div");
        variantContainer.id = "topic-variants-container";
        variantContainer.className = "variant-buttons";
        heroCopy.appendChild(variantContainer);
    }
    variantContainer.innerHTML = "";
    
    let levelContainer = document.getElementById("topic-level-switcher");
    if (!levelContainer) {
        levelContainer = document.createElement("div");
        levelContainer.id = "topic-level-switcher";
        heroCopy.appendChild(levelContainer);
    }
    levelContainer.innerHTML = "";
    levelContainer.style.display = "none"; // Hide separate container to avoid duplicate box above level switcher

    const hasLevels = (data.vocab || data.vocabulary || []).some(v => v.level) || 
                      JSON.stringify(data.sampleEssay || "").includes("{") || 
                      JSON.stringify(data.variants || "").includes("{") ||
                      (originalData.variants && originalData.variants.some(v => v.name && (v.name.includes("B1") || v.name.includes("B2"))));

        variantContainer.className = "variant-buttons level-switcher-bar";
    variantContainer.style.display = "flex";
    variantContainer.style.flexWrap = "wrap";
    variantContainer.style.alignItems = "center";
    variantContainer.style.gap = "10px";

    let htmlStr = "";
    if (hasLevels) {
        const activeLevel = originalData.currentLevel || "B1";
        htmlStr += `
            <button type="button" class="btn-level-tab ${activeLevel === 'B1' ? 'active' : ''}" data-level="B1">
                <i class="fa-solid fa-seedling"></i> Level B1
            </button>
            <button type="button" class="btn-level-tab ${activeLevel === 'B2' ? 'active' : ''}" data-level="B2">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Level B2
            </button>
        `;
    }
    htmlStr += `
        <button id="btn-clear-draft-dynamic" class="btn-level-tab" type="button" aria-label="Xóa nháp bài này" title="Xóa toàn bộ nội dung nháp của bài luận này">
            <i class="fa-solid fa-trash-can"></i> Xóa nháp
        </button>
    `;
    variantContainer.innerHTML = htmlStr;

    const dynamicClearBtn = document.getElementById("btn-clear-draft-dynamic");
    if (dynamicClearBtn) {
        dynamicClearBtn.addEventListener("click", clearCurrentDraft);
    }

    if (hasLevels) {
        variantContainer.querySelectorAll(".btn-level-tab[data-level]").forEach(btn => {
            btn.addEventListener("click", () => {
                const lvl = btn.dataset.level;
                originalData.currentLevel = lvl;
                if (originalData.variants && originalData.variants.length > 1) {
                    const idx = originalData.variants.findIndex(v => v.name && v.name.includes(lvl));
                    if (idx !== -1) {
                        originalData.currentVariantIndex = idx;
                    } else {
                        originalData.currentVariantIndex = lvl === "B2" ? 1 : 0;
                    }
                }
                loadEssay(state.currentEssayIndex);
            });
        });

        const btnSampleMobile = document.createElement("button");
        btnSampleMobile.id = "btn-variant-sample";
        btnSampleMobile.className = "btn-variant btn-variant-sample" + (state.isSampleMode ? " active" : "");
        btnSampleMobile.style.marginLeft = "auto";
        btnSampleMobile.textContent = "Xem bài mẫu";
        btnSampleMobile.onclick = () => {
            toggleSampleMode();
        };
        variantContainer.appendChild(btnSampleMobile);
    } else if (originalData.variants && originalData.variants.length > 1) {
        variantContainer.className = "variant-buttons";
        variantContainer.style.display = "flex";
        originalData.variants.forEach((variant, idx) => {
            const btn = document.createElement("button");
            btn.className = "btn-variant " + (idx === (originalData.currentVariantIndex || 0) ? "active" : "");
            btn.textContent = variant.name;
            btn.onclick = () => {
                originalData.currentVariantIndex = idx;
                loadEssay(state.currentEssayIndex);
            };
            variantContainer.appendChild(btn);
        });

        const btnSampleMobile = document.createElement("button");
        btnSampleMobile.id = "btn-variant-sample";
        btnSampleMobile.className = "btn-variant btn-variant-sample" + (state.isSampleMode ? " active" : "");
        btnSampleMobile.textContent = "Xem bài mẫu";
        btnSampleMobile.onclick = () => {
            toggleSampleMode();
        };
        variantContainer.appendChild(btnSampleMobile);
    } else {
        variantContainer.style.display = "none";
    }

    setText("metric-body", data.bodyParagraphs.length);
    setText("metric-time", `${data.meta.estimatedMinutes}'`);
}

function renderPrompt(data) {
    const container = document.getElementById("prompt-content");
    if (!container) return;

    container.innerHTML = "";

    data.prompt.forEach((item, index) => {
        const sentence = document.createElement("span");
        sentence.className = "prompt-sentence";
        sentence.textContent = item.en.replace(/\n/g, " ");
        sentence.setAttribute("role", "button");
        sentence.setAttribute("tabindex", "0");
        sentence.setAttribute("aria-expanded", "false");

        const translation = document.createElement("span");
        translation.className = "prompt-vn hidden";
        translation.textContent = ` ${item.vn}`;

        sentence.addEventListener("click", () => {
            const isHidden = translation.classList.toggle("hidden");
            sentence.setAttribute("aria-expanded", String(!isHidden));
            if (!isHidden) {
                sentence.classList.add("active");
            } else {
                sentence.classList.remove("active");
            }
        });

        const wrapper = document.createElement("span");
        wrapper.className = "prompt-sentence-wrapper";
        wrapper.append(sentence, translation);

        if (item.en.trim().startsWith("-")) {
            container.appendChild(document.createElement("br"));
        }

        container.appendChild(wrapper);
        if (index < data.prompt.length - 1 && !data.prompt[index + 1].en.trim().startsWith("-")) {
            container.appendChild(document.createTextNode(" "));
        }
    });
}

function renderVocab(data) {
    const container = document.getElementById("vocab-grid");
    if (!container) return;

    container.innerHTML = "";

    const activeLevel = (window.essays?.[state?.currentEssayIndex]?.currentLevel) || data.currentLevel || "B1";
    const rawVocab = data.vocab || data.vocabulary || [];
    const activeVocab = rawVocab.filter(item => {
        if (!item.level) return true;
        if (activeLevel === "B1") {
            return item.level === "B1" || item.level === "all";
        }
        return true;
    });
    
    // Check if it's the matching game
    if (data.isMatchingVocab) {
        container.className = ""; // Reset container class
        
        // Matching game logic
        const gameContainer = document.createElement("div");
        gameContainer.className = "matching-game-container";
        
        const grid = document.createElement("div");
        grid.className = "matching-grid";
        
        const completedContainer = document.createElement("div");
        completedContainer.className = "matching-completed";
        
        const completedTitle = document.createElement("div");
        completedTitle.className = "matching-completed-title";
        completedTitle.innerHTML = ``;
        completedTitle.style.display = "none";
        
        const completedList = document.createElement("div");
        completedList.className = "matching-completed-list";
        
        completedContainer.append(completedTitle, completedList);

        const colors = [
            { bg: "#e6f0f9", text: "#1a5b9e" },
            { bg: "#e0f2f1", text: "#00695c" },
            { bg: "#f0f0f0", text: "#333333" },
            { bg: "#e1f5fe", text: "#0277bd" },
            { bg: "#e8f4fd", text: "#0d47a1" },
            { bg: "#eeeeee", text: "#424242" },
            { bg: "#ebf5eb", text: "#1b5e20" }
        ];

        // Load saved matched indices
        let savedMatchedIndices = [];
        const essayId = data.id || (window.essays?.[state?.currentEssayIndex]?.id);
        const storageKey = getStorageKey(essayId, 'matchedVocab');
        try {
            const savedStr = localStorage.getItem(storageKey);
            if (savedStr) {
                savedMatchedIndices = JSON.parse(savedStr);
            }
        } catch (e) { console.error(e); }

        // Prepare buttons
        let buttons = [];
        const vocabList = activeVocab;
        vocabList.forEach((item, index) => {
            if (savedMatchedIndices.includes(index)) {
                const pairEl = document.createElement("div");
                pairEl.className = "cloud-chip";
                pairEl.style.animation = "slideIn 0.3s ease forwards";
                pairEl.style.flexDirection = "column";
                pairEl.style.gap = "4px";
                pairEl.style.margin = "0 5px 10px 5px";
                const matchedColor = colors[Math.floor(Math.random() * colors.length)];
                pairEl.style.backgroundColor = matchedColor.bg;
                pairEl.style.color = matchedColor.text;
                const baseFontSize = Math.floor(Math.random() * 5) + 15; 
                const enFontSize = `${baseFontSize}px`;
                const vnFontSize = `${Math.floor(baseFontSize * 0.75)}px`;
                pairEl.style.fontWeight = [500, 600, 700][Math.floor(Math.random() * 3)];
                pairEl.innerHTML = `<span class="cloud-en" style="font-size: ${enFontSize}; line-height: 1.1;">${item.en}</span><span class="cloud-vn" style="font-size: ${vnFontSize}; opacity: 0.85; line-height: 1.1;">${item.vn}</span>`;
                completedList.style.display = "flex";
                completedList.style.flexWrap = "wrap";
                completedList.style.justifyContent = "center";
                completedList.appendChild(pairEl);
                completedContainer.classList.add("has-items");
                return;
            }
            const fontSize = Math.floor(Math.random() * 5) + 12; // 12px to 16px
            const fontWeight = [500, 600, 700][Math.floor(Math.random() * 3)];
            
            // English button (Word Cloud Style)
            const colorPalette = colors[Math.floor(Math.random() * colors.length)];
            const btnEn = document.createElement("button");
            btnEn.className = "matching-btn en cloud-chip";
            btnEn.textContent = item.en;
            btnEn.dataset.id = index;
            btnEn.dataset.lang = "en";
            btnEn.style.backgroundColor = colorPalette.bg;
            btnEn.style.color = colorPalette.text;
            btnEn.style.fontSize = `${fontSize}px`;
            btnEn.style.fontWeight = fontWeight;
            buttons.push(btnEn);

            // Vietnamese button (Black Background)
            const btnVn = document.createElement("button");
            btnVn.className = "matching-btn vn cloud-chip";
            btnVn.textContent = item.vn;
            btnVn.dataset.id = index;
            btnVn.dataset.lang = "vn";
            btnVn.style.backgroundColor = "#1a1a1a"; // Dark/Black background
            btnVn.style.color = "#ffffff";
            btnVn.style.fontSize = `${fontSize}px`;
            btnVn.style.fontWeight = fontWeight;
            buttons.push(btnVn);
        });

        // Fisher-Yates Shuffle
        for (let i = buttons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
        }
        buttons.forEach(btn => grid.appendChild(btn));
        if (buttons.length === 0) {
            grid.style.display = "none";
        }

        gameContainer.append(grid, completedContainer);
        container.appendChild(gameContainer);

        // Game state
        let selectedBtn = null;

        grid.addEventListener("click", (e) => {
            const btn = e.target.closest(".matching-btn");
            if (!btn || btn.classList.contains("matched")) return;

            if (selectedBtn === btn) {
                btn.classList.remove("selected");
                selectedBtn = null;
                return;
            }

            if (!selectedBtn) {
                btn.classList.add("selected");
                selectedBtn = btn;
                return;
            }

            const isMatch = selectedBtn.dataset.id === btn.dataset.id && selectedBtn.dataset.lang !== btn.dataset.lang;

            if (isMatch) {
                btn.classList.add("matched");
                selectedBtn.classList.add("matched");
                
                const matchedId = parseInt(btn.dataset.id, 10);
                if (!savedMatchedIndices.includes(matchedId)) {
                    savedMatchedIndices.push(matchedId);
                    try {
                        localStorage.setItem(storageKey, JSON.stringify(savedMatchedIndices));
                    } catch(e) {}
                }

                const itemData = activeVocab[btn.dataset.id];
                const pairEl = document.createElement("div");
                pairEl.className = "cloud-chip";
                pairEl.style.animation = "slideIn 0.3s ease forwards";
                pairEl.style.flexDirection = "column";
                pairEl.style.gap = "4px";
                pairEl.style.margin = "0 5px 10px 5px";
                
                // Assign a random color to the completed matched chip
                const matchedColor = colors[Math.floor(Math.random() * colors.length)];
                pairEl.style.backgroundColor = matchedColor.bg;
                pairEl.style.color = matchedColor.text;
                
                // Generate a random base font size
                const baseFontSize = Math.floor(Math.random() * 5) + 15; 
                
                // Set English and Vietnamese font sizes relative to base
                const enFontSize = `${baseFontSize}px`;
                const vnFontSize = `${Math.floor(baseFontSize * 0.75)}px`;
                
                pairEl.style.fontWeight = [500, 600, 700][Math.floor(Math.random() * 3)];
                
                pairEl.innerHTML = `<span class="cloud-en" style="font-size: ${enFontSize}; line-height: 1.1;">${itemData.en}</span><span class="cloud-vn" style="font-size: ${vnFontSize}; opacity: 0.85; line-height: 1.1;">${itemData.vn}</span>`;
                
                // Ensure the completedList is centered
                completedList.style.display = "flex";
                completedList.style.flexWrap = "wrap";
                completedList.style.justifyContent = "center";
                
                completedList.appendChild(pairEl);
                completedContainer.classList.add("has-items");

                selectedBtn.classList.remove("selected");
                selectedBtn = null;

                const totalBtns = grid.querySelectorAll(".matching-btn").length;
                const matchedBtns = grid.querySelectorAll(".matching-btn.matched").length;
                if (matchedBtns === totalBtns) {
                    setTimeout(() => {
                        grid.style.display = "none";
                    }, 300);
                }
            } else {
                btn.classList.add("error");
                selectedBtn.classList.add("error");
                
                const currentSelected = selectedBtn;
                setTimeout(() => {
                    btn.classList.remove("error");
                    currentSelected.classList.remove("error");
                }, 400);

                selectedBtn.classList.remove("selected");
                selectedBtn = null;
            }
        });
        
        return;
    }

    // Normal vocabulary view (Not matching game)
    container.className = "vocab-word-cloud"; 
    const colors = [
        { bg: "#e6f0f9", text: "#1a5b9e" },
        { bg: "#e0f2f1", text: "#00695c" },
        { bg: "#f0f0f0", text: "#333333" },
        { bg: "#e1f5fe", text: "#0277bd" },
        { bg: "#e8f4fd", text: "#0d47a1" },
        { bg: "#eeeeee", text: "#424242" },
        { bg: "#ebf5eb", text: "#1b5e20" }
    ];

    const shuffledVocab = [...activeVocab];
    for (let i = shuffledVocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledVocab[i], shuffledVocab[j]] = [shuffledVocab[j], shuffledVocab[i]];
    }

    shuffledVocab.forEach((item) => {
        const colorPalette = colors[Math.floor(Math.random() * colors.length)];
        const fontSize = Math.floor(Math.random() * 5) + 12; // 12px to 16px
        const fontWeight = [500, 600, 700][Math.floor(Math.random() * 3)];
        
        const chip = document.createElement("div");
        chip.className = "cloud-chip";
        chip.style.backgroundColor = colorPalette.bg;
        chip.style.color = colorPalette.text;
        chip.style.fontSize = `${fontSize}px`;
        chip.style.fontWeight = fontWeight;
        
        chip.innerHTML = `<span class="cloud-en">${item.en}</span><span class="cloud-vn">${item.vn}</span>`;
        
        container.appendChild(chip);
    });
}

function setupTranslationWorkspace(type, data) {
    const workspace = document.getElementById(`${type}-en`)?.closest(".translation-workspace");
    const vnLayer = document.getElementById(`${type}-vn`);
    const enLayer = document.getElementById(`${type}-en`);
    if (!workspace || !vnLayer || !enLayer) return;

    const activeLevel = (window.essays?.[state?.currentEssayIndex]?.currentLevel) || data.currentLevel || "B1";
    const rawVnText = (type === "intro" ? data.introVn : data.conclusionVn) || "";
    const vnText = resolveLevelText(rawVnText, activeLevel);
    const expectedLength = type === "intro" ? data.introEnExpectedLength : data.conclusionEnExpectedLength;
    const savedValue = getSavedValue(data.id, type);

    vnLayer.innerHTML = "";
    enLayer.innerHTML = savedValue;
    enLayer.style.fontSize = "";
    vnLayer.style.fontSize = "";
    enLayer.style.minHeight = "";
    workspace.style.minHeight = "";

    // Apply color state
    enLayer.classList.remove("text-blue");

    const vnWordRanges = getVietnameseGuideRanges(vnText || "");
    const estimatedExpectedLength = expectedLength || (vnText ? vnText.length * 1.05 : 100);

    const updateOverlay = () => {
        saveValue(data.id, type, enLayer.innerHTML);

        const completedText = enLayer.innerText.replace(/[^\s.,!?;:()[\]"“”]+$/, "");
        const rawChunks = type === "intro" ? data.introChunks : data.conclusionChunks;
        const chunks = rawChunks ? rawChunks.map(c => ({
            en: resolveLevelText(c.en, activeLevel),
            vn: resolveLevelText(c.vn, activeLevel)
        })) : null;
        
        let hiddenWordCount = 0;
        let finalVnWordRanges = vnWordRanges;

        if (chunks) {
            // Robust token-based matching logic (ignores punctuation for better UX)
            const extractTokens = (str) => str.replace(/[.,!?;:()[\]"“”]/g, "").trim().toLowerCase().split(/\s+/).filter(t => t.length > 0);
            const userWords = extractTokens(completedText);
            let userWordIdx = 0;
            
            finalVnWordRanges = [];
            let currentVnIdx = 0;
            
            for (let i = 0; i < chunks.length; i++) {
                const chunkVn = chunks[i].vn;
                const idx = vnText.indexOf(chunkVn, currentVnIdx);
                if (idx !== -1) {
                    finalVnWordRanges.push({ start: idx, end: idx + chunkVn.length, phrase: chunkVn });
                    currentVnIdx = idx + chunkVn.length;
                } else {
                    finalVnWordRanges.push({ start: currentVnIdx, end: currentVnIdx, phrase: chunkVn });
                }
                
                const enOptions = chunks[i].en.split('|');
                let lastIdx = -1;
                
                for (let opt = 0; opt < enOptions.length; opt++) {
                    const chunkWords = extractTokens(enOptions[opt]);
                    if (chunkWords.length === 0) continue;
                    
                    const lastWord = chunkWords[chunkWords.length - 1];
                    
                    for (let j = userWordIdx; j < Math.min(userWords.length, userWordIdx + chunkWords.length + 15); j++) {
                        if (userWords[j] === lastWord) {
                            if (lastIdx === -1 || j < lastIdx) {
                                lastIdx = j;
                            }
                            break;
                        }
                    }
                }
                
                if (lastIdx !== -1) {
                    userWordIdx = lastIdx + 1;
                    hiddenWordCount = i + 1;
                } else {
                    break; // Last word not typed yet
                }
            }
        } else {
            // Fallback to legacy length tracking
            let hiddenCharIndex = 0;
            
            if (completedText) {
                const globalRatio = expectedLength ? (expectedLength / vnText.length) : 1.05;
                const enPunctRegex = /[.,!?;:]/g;
                let enMatch;
                let lastMappedVnIdx = 0;
                let lastMappedEnIdx = 0;
                const isSentenceEnd = (char) => ['.', '!', '?'].includes(char);
                
                while ((enMatch = enPunctRegex.exec(completedText)) !== null) {
                    const e_idx = enMatch.index;
                    const e_punct = enMatch[0];
                    const v_expected = e_idx / globalRatio;
                    
                    const searchStart = lastMappedVnIdx;
                    const searchEnd = Math.min(vnText.length, Math.floor(v_expected + 35));
                    const windowText = vnText.substring(searchStart, searchEnd);
                    
                    const searchGroup = isSentenceEnd(e_punct) ? /[.!?]/g : /[,;:]/g;
                    let vnMatch;
                    let closestDist = Infinity;
                    let bestVnIdx = -1;
                    
                    while ((vnMatch = searchGroup.exec(windowText)) !== null) {
                        const actualIndex = searchStart + vnMatch.index;
                        const dist = Math.abs(actualIndex - v_expected);
                        if (dist < closestDist && dist <= 35) {
                            closestDist = dist;
                            bestVnIdx = actualIndex;
                        }
                    }
                    
                    if (bestVnIdx !== -1) {
                        lastMappedVnIdx = bestVnIdx + 1;
                        lastMappedEnIdx = e_idx + 1;
                    }
                }
                
                const remainingEnLen = completedText.length - lastMappedEnIdx;
                hiddenCharIndex = lastMappedVnIdx + (remainingEnLen / globalRatio);
                
                if (hiddenCharIndex > vnText.length) {
                    hiddenCharIndex = vnText.length;
                }
            }

            for (let i = 0; i < vnWordRanges.length; i++) {
                const range = vnWordRanges[i];
                const threshold = range.start + (range.end - range.start) * 0.85;
                if (hiddenCharIndex >= threshold) {
                    hiddenWordCount = i + 1;
                } else {
                    break;
                }
            }
        }
        
        renderVietnameseGuide(vnLayer, enLayer.innerText, vnText || "", finalVnWordRanges, hiddenWordCount);
        fitTranslationWorkspace(workspace, vnLayer, enLayer);
    };

    enLayer.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    });

    enLayer.oninput = updateOverlay;
    enLayer.addEventListener("blur", () => {
        saveValue(data.id, type, enLayer.innerHTML);
    });
    enLayer.addEventListener("scroll", () => {
        vnLayer.scrollTop = enLayer.scrollTop;
    });
    updateOverlay();
}

function renderBodyParagraphs(data) {
    const container = document.getElementById("body-paragraphs-container");
    if (!container) return;

    container.innerHTML = "";

    data.bodyParagraphs.forEach((paragraph, paragraphIndex) => {
        const item = document.createElement("div");
        item.className = "body-paragraph-item";

        const header = document.createElement("div");
        header.className = "body-paragraph-header";

        const title = document.createElement("h3");
        title.className = "body-para-title";
        title.textContent = paragraph.title;

        const actions = document.createElement("div");
        actions.className = "section-actions";

        header.append(title, actions);

        const ideaList = document.createElement("div");
        ideaList.className = "idea-list";
        const activeLevel = data.currentLevel || (window.essays?.[state?.currentEssayIndex]?.currentLevel) || "B1";
        renderIdeaGroups(ideaList, paragraph, data.id, paragraphIndex, activeLevel);

        item.id = `body-group-${paragraphIndex}`;
        item.append(header, ideaList);
        container.appendChild(item);
    });
}

function renderIdeaGroups(container, paragraph, essayId, paragraphIndex, passedLevel) {
    const hasMultipleIdeas = Array.isArray(paragraph.hintGroups) && paragraph.hintGroups.length > 0;
    const groups = hasMultipleIdeas ? paragraph.hintGroups : [{ label: "Ý chính", hints: paragraph.hints || [] }];

    groups.forEach((group, ideaIndex) => {
        const idea = document.createElement("div");
        idea.className = "idea-item";
        if (group.label && group.label.toLowerCase() === "topic sentence") {
            idea.classList.add("idea-item-topic-sentence");
        }

        const ideaHeader = document.createElement("div");
        ideaHeader.className = "idea-header";

        if (group.label) {
            const label = document.createElement("div");
            label.className = "hint-group-label";
            if (group.label.toLowerCase() === "topic sentence") {
                label.classList.add("label-topic-sentence");
            }
            const activeLevel = passedLevel || (window.essays?.[state?.currentEssayIndex]?.currentLevel) || "B1";
            label.textContent = typeof resolveLevelText === "function" ? resolveLevelText(group.label, activeLevel) : group.label;
            ideaHeader.appendChild(label);
        }

        const ideaId = `body-idea-${paragraphIndex}-${ideaIndex}`;
        idea.id = ideaId;

        // Group tools on the right
        const rightTools = document.createElement("div");
        rightTools.className = "font-controls-wrapper";

        const fontGroup = document.createElement("div");
        fontGroup.className = "font-btn-group";
        fontGroup.append(
            createFontButton(ideaId, -1, "Giảm cỡ chữ", '<i class="fa-solid fa-minus"></i>'),
            createFontButton(ideaId, 0, "Mặc định", 'Mặc định', "btn-font-default"),
            createFontButton(ideaId, 1, "Tăng cỡ chữ", '<i class="fa-solid fa-plus"></i>')
        );

        rightTools.append(fontGroup);
        ideaHeader.appendChild(rightTools);

        const row = document.createElement("div");
        row.className = "hint-group-row";

        group.hints.forEach((hint, hintIndex) => {
            const wrapper = document.createElement("div");
            wrapper.className = "hint-wrapper";

            const vnRegex = /[àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]/i;
            const enIsVn = vnRegex.test(hint.en || "");
            const rawVn = typeof hint === "string" ? hint : (enIsVn ? hint.en : (hint.vn || hint.en || ""));
            const rawEn = typeof hint === "string" ? hint : (enIsVn ? hint.vn : (hint.en || hint.vn || ""));

            const activeLevel = passedLevel || (window.essays?.[state?.currentEssayIndex]?.currentLevel) || "B1";

            const button = document.createElement("button");
            button.type = "button";
            button.className = hint.level === "advanced" ? "hint-box hint-advanced" : "hint-box";
            if (hint.isTopic) {
                button.classList.add("is-topic");
            }
            if (hint.color === "brown") {
                button.classList.add("is-brown");
            }
            if (hint.color === "red") {
                button.classList.add("is-red");
            }
            if (hint.isBoldRed) {
                button.classList.add("is-bold-red");
            }

            const translation = document.createElement("div");
            translation.className = "h-vn hidden";
            if (hint.isTopic) {
                translation.classList.add("h-vn-topic");
            }
            if (hint.color === "brown") {
                translation.classList.add("h-vn-brown");
            }
            if (hint.color === "red") {
                translation.classList.add("h-vn-red");
            }
            if (hint.level === "advanced") {
                translation.style.color = "var(--amber)";
            }

            const primaryText = hint.isTopic ? rawVn : rawEn;
            const secondaryText = hint.isTopic ? rawEn : rawVn;

            const resolvedPrimary = resolveLevelText(primaryText, activeLevel);
            const resolvedSecondary = resolveLevelText(secondaryText, activeLevel);

            if (!resolvedPrimary || resolvedPrimary.trim() === "" || resolvedPrimary.trim() === "+") {
                return;
            }

            const formatPunctuation = (str) => {
                if (!str) return str;
                return str.replace(/([:()➜]|=>)/g, '<b style="color: black;">$1</b>');
            };

            button.innerHTML = formatPunctuation(resolvedPrimary);
            translation.innerHTML = formatPunctuation(resolvedSecondary);
            button.setAttribute("aria-expanded", "false");

            button.addEventListener("click", () => {
                const isHidden = translation.classList.toggle("hidden");
                button.setAttribute("aria-expanded", String(!isHidden));
            });

            if (hint.newLine) {
                const lineBreak = document.createElement("div");
                lineBreak.style.flexBasis = "100%";
                lineBreak.style.height = "0";
                row.appendChild(lineBreak);
            }
            
            wrapper.append(button, translation);
            row.appendChild(wrapper);

            if (hint.prefix) {
                const prefixSpan = document.createElement("span");
                prefixSpan.className = "hint-arrow";
                prefixSpan.innerHTML = `<b style="color: black; font-size: 1.4em; padding: 0 4px;">${hint.prefix}</b>`;
                row.insertBefore(prefixSpan, wrapper);
            }

            if (hint.suffix) {
                const suffixSpan = document.createElement("span");
                suffixSpan.className = "hint-arrow";
                suffixSpan.innerHTML = `<b style="color: black; font-size: 1.4em; padding: 0 4px;">${hint.suffix}</b>`;
                row.appendChild(suffixSpan);
            }

            if (hintIndex < group.hints.length - 1) {
                const arrow = document.createElement("span");
                arrow.className = "hint-arrow hint-connector";
                const connectorText = hint.connector !== undefined ? hint.connector : '<i class="fa-solid fa-arrow-right"></i>';
                if (connectorText === ':') {
                    arrow.innerHTML = `<b style="color: black; font-size: 1.4em; padding: 0 4px;">${connectorText}</b>`;
                } else if (connectorText === '+') {
                    arrow.innerHTML = `<b style="color: black; font-size: 1.6em; padding: 0 4px; line-height: 1;">+</b>`;
                } else if (['➜', '=>'].includes(connectorText)) {
                    arrow.innerHTML = `<b style="color: black; font-size: 1.3em; padding: 0 4px;">${connectorText}</b>`;
                } else if (connectorText !== '') {
                    arrow.innerHTML = connectorText;
                }
                if (connectorText !== '') {
                    row.appendChild(arrow);
                }
            }
        });

        while (row.lastElementChild && row.lastElementChild.classList.contains("hint-connector")) {
            row.removeChild(row.lastElementChild);
        }

        const isTopicGroup = (group.label && group.label.toLowerCase() === "topic sentence") || (group.hints && group.hints.some(h => h.isTopic));

        const textareaWrapper = document.createElement("div");
        textareaWrapper.className = "body-textarea-split-wrapper";
        if (isTopicGroup) {
            textareaWrapper.classList.add("textarea-topic-sentence-wrapper");
        }

        const topTa = document.createElement("div");
        if (!isTopicGroup) {
            topTa.contentEditable = "true";
            topTa.id = `body-ta-vn-${paragraphIndex}-${ideaIndex}`;
            topTa.className = "body-textarea-compact split-top";
            topTa.setAttribute("placeholder", "Nhập tiếng Việt...");
        }

        const botTa = document.createElement("div");
        botTa.contentEditable = "true";
        botTa.id = `body-ta-en-${paragraphIndex}-${ideaIndex}`;
        botTa.className = "body-textarea-compact split-bottom";
        if (isTopicGroup) {
            botTa.setAttribute("placeholder", "Viết câu tiếng Anh cho Topic sentence...");
        } else {
            botTa.setAttribute("placeholder", hasMultipleIdeas ? "Viết đoạn tiếng Anh cho idea này..." : "Chuyển gợi ý thành đoạn tiếng Anh...");
        }

        const storageKeyVn = `body-vn-${paragraphIndex}-idea-${ideaIndex}`;
        const storageKeyEn = `body-en-${paragraphIndex}-idea-${ideaIndex}`;
        if (!isTopicGroup) {
            topTa.innerHTML = getSavedValue(essayId, storageKeyVn);
            topTa.addEventListener("input", () => {
                saveValue(essayId, storageKeyVn, topTa.innerHTML);
                autosizeTextarea(topTa);
            });
            topTa.addEventListener("blur", () => {
                saveValue(essayId, storageKeyVn, topTa.innerHTML);
            });
        }
        botTa.innerHTML = getSavedValue(essayId, storageKeyEn);
        botTa.addEventListener("input", () => {
            saveValue(essayId, storageKeyEn, botTa.innerHTML);
            autosizeTextarea(botTa);
        });
        botTa.addEventListener("blur", () => {
            saveValue(essayId, storageKeyEn, botTa.innerHTML);
        });

        if (!isTopicGroup) {
            textareaWrapper.append(topTa, botTa);
        } else {
            textareaWrapper.append(botTa);
        }
        idea.append(ideaHeader, row, textareaWrapper);
        container.appendChild(idea);
        if (!isTopicGroup) {
            autosizeTextarea(topTa);
        }
        autosizeTextarea(botTa);
    });
}

function changeLocalFontSize(elementId, step) {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (step === 0) {
        element.style.fontSize = ""; // Khôi phục mặc định
    } else {
        const currentSize = parseFloat(window.getComputedStyle(element).fontSize) || 15;
        const newSize = Math.min(Math.max(currentSize + step * 2, 12), 32);
        element.style.fontSize = `${newSize}px`;
    }

    if (elementId === "prompt-content" || elementId === "intro-en" || elementId === "conclusion-en") {
        const vnElement = document.getElementById(elementId.replace("-en", "-vn"));
        if (vnElement) {
            vnElement.style.fontSize = element.style.fontSize;
        }
        if (elementId !== "prompt-content") {
            element.dispatchEvent(new Event("input"));
        }
    }

    if (elementId.startsWith("body-ta-")) {
        const hintFlow = element.previousElementSibling;
        if (hintFlow?.classList.contains("hints-flow")) {
            hintFlow.style.fontSize = element.style.fontSize;
        }
        element.dispatchEvent(new Event("input"));
    }

    if (elementId.startsWith("body-idea-")) {
        element.querySelectorAll(".hints-flow, .hint-group-row").forEach((flow) => {
            flow.style.fontSize = element.style.fontSize;
        });
        element.querySelectorAll(".body-textarea-compact").forEach((textarea) => {
            textarea.style.fontSize = element.style.fontSize;
            autosizeTextarea(textarea);
        });
    }
}

function autosizeTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

function getWordRanges(text) {
    return Array.from(text.matchAll(/\S+/g)).map((match) => ({
        start: match.index,
        end: match.index + match[0].length
    }));
}

function getVietnameseGuideRanges(text) {
    const words = Array.from(text.matchAll(/\S+/g)).map((match) => ({
        start: match.index,
        end: match.index + match[0].length,
        normalized: normalizeVietnameseGuideWord(match[0])
    }));
    const ranges = [];

    for (let index = 0; index < words.length;) {
        let phraseLength = 1;
        const maxLength = Math.min(MAX_VIETNAMESE_GUIDE_PHRASE_LENGTH, words.length - index);

        for (let length = maxLength; length > 1; length -= 1) {
            const phrase = words.slice(index, index + length).map((word) => word.normalized).join(" ");
            if (VIETNAMESE_GUIDE_LOOKUP.has(phrase)) {
                phraseLength = length;
                break;
            }
        }

        ranges.push({
            start: words[index].start,
            end: words[index + phraseLength - 1].end
        });
        index += phraseLength;
    }

    return ranges.length ? ranges : getWordRanges(text);
}

function normalizeVietnameseGuideWord(word) {
    return word
        .toLowerCase()
        .replace(/^[.,!?;:()[\]"“”]+/, "")
        .replace(/[.,!?;:()[\]"“”]+$/, "");
}

function getEnglishWordProgress(text) {
    if (!text) return 0;
    const tokens = text.match(/\S+/g) || [];
    if (!tokens.length) return 0;

    // A word is considered "typed" if it is followed by a space or punctuation
    const isCompleted = /[\s.,!?;:()[\]"“”]$/.test(text);
    return isCompleted ? tokens.length : Math.max(0, tokens.length - 1);
}

function estimateExpectedEnglishWords(expectedLength, vietnameseWordCount) {
    if (expectedLength) {
        return Math.max(1, Math.round(expectedLength / 6.8));
    }
    return Math.max(1, vietnameseWordCount);
}

function renderVietnameseGuide(layer, typedText, vietnameseText, wordRanges, hiddenWordCount) {
    layer.innerHTML = "";

    const spacer = document.createElement("span");
    spacer.className = "typed-spacer";
    spacer.textContent = typedText;
    layer.appendChild(spacer);

    if (!vietnameseText) return;

    const startIndex = hiddenWordCount > 0 ? wordRanges[hiddenWordCount - 1].end : 0;
    const nextPhrase = wordRanges[hiddenWordCount];
    let visibleStart = startIndex;

    if (/\s$/.test(typedText)) {
        while (visibleStart < vietnameseText.length && /\s/.test(vietnameseText[visibleStart])) {
            visibleStart += 1;
        }
    }

    if (!nextPhrase || nextPhrase.end <= visibleStart) {
        layer.appendChild(document.createTextNode(vietnameseText.slice(visibleStart)));
        return;
    }

    layer.appendChild(document.createTextNode(vietnameseText.slice(visibleStart, nextPhrase.start)));

    const highlightSpan = document.createElement("span");
    highlightSpan.className = "vn-highlight-next";
    highlightSpan.textContent = vietnameseText.slice(nextPhrase.start, nextPhrase.end);
    layer.appendChild(highlightSpan);
    
    layer.appendChild(document.createTextNode(vietnameseText.slice(nextPhrase.end)));
}

function fitTranslationWorkspace(workspace, vnLayer, enLayer) {
    enLayer.style.height = "auto";
    const contentHeight = Math.max(112, enLayer.scrollHeight, vnLayer.scrollHeight);
    enLayer.style.minHeight = `${contentHeight}px`;
    enLayer.style.height = `${contentHeight}px`;
    workspace.style.minHeight = `${contentHeight + 32}px`;
}

function getSavedValue(essayId, field) {
    if (!essayId || !field) return "";
    try {
        const key = getStorageKey(essayId, field);
        return localStorage.getItem(key) || "";
    } catch (e) {
        console.error("Error reading from localStorage:", e);
        return "";
    }
}

function saveValue(essayId, field, value) {
    if (!essayId || !field) return;
    try {
        const key = getStorageKey(essayId, field);
        const cleanText = (value || "").replace(/<[^>]*>/g, "").trim();
        if (cleanText !== "") {
            localStorage.setItem(key, value);
        } else {
            localStorage.removeItem(key);
        }
    } catch (e) {
        console.error("Error writing to localStorage:", e);
    }
}

function getStorageKey(essayId, field) {
    return `${STORAGE_PREFIX}:${essayId}:${field}`;
}

function clearCurrentDraft() {
    const essay = essays[state.currentEssayIndex];
    if (!essay) return;

    const confirmed = window.confirm(`Xóa toàn bộ nháp đang lưu cho "${essay.title}"?`);
    if (!confirmed) return;

    if (document.activeElement && typeof document.activeElement.blur === "function") {
        document.activeElement.blur();
    }

    const prefix = `${STORAGE_PREFIX}:${essay.id}:`;
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key);
        }
    });

    loadEssay(state.currentEssayIndex);
}

function syncDraftsFromStorage() {
    if (state.currentView !== "essay" || typeof state.currentEssayIndex !== "number") return;
    const essay = essays[state.currentEssayIndex];
    if (!essay) return;
    const essayId = essay.id;

    const introEn = document.getElementById("intro-en");
    if (introEn && document.activeElement !== introEn) {
        const savedIntro = getSavedValue(essayId, "intro");
        if (introEn.innerHTML !== savedIntro) {
            introEn.innerHTML = savedIntro;
            if (typeof fitTranslationWorkspace === "function") {
                const ws = introEn.closest(".translation-workspace");
                const introVn = document.getElementById("intro-vn");
                if (ws && introVn) fitTranslationWorkspace(ws, introVn, introEn);
            }
            if (typeof updateOverlay === "function" && introEn.oninput) {
                introEn.oninput();
            }
        }
    }

    const conclusionEn = document.getElementById("conclusion-en");
    if (conclusionEn && document.activeElement !== conclusionEn) {
        const savedConclusion = getSavedValue(essayId, "conclusion");
        if (conclusionEn.innerHTML !== savedConclusion) {
            conclusionEn.innerHTML = savedConclusion;
            if (typeof fitTranslationWorkspace === "function") {
                const ws = conclusionEn.closest(".translation-workspace");
                const conclusionVn = document.getElementById("conclusion-vn");
                if (ws && conclusionVn) fitTranslationWorkspace(ws, conclusionVn, conclusionEn);
            }
            if (typeof updateOverlay === "function" && conclusionEn.oninput) {
                conclusionEn.oninput();
            }
        }
    }

    document.querySelectorAll(".body-textarea-compact").forEach(ta => {
        if (document.activeElement === ta) return;
        const idParts = ta.id.match(/^body-ta-(vn|en)-(\d+)-(\d+)$/);
        if (idParts) {
            const lang = idParts[1];
            const pIdx = idParts[2];
            const iIdx = idParts[3];
            const storageKey = `body-${lang}-${pIdx}-idea-${iIdx}`;
            const savedVal = getSavedValue(essayId, storageKey);
            if (ta.innerHTML !== savedVal) {
                ta.innerHTML = savedVal;
                if (typeof autosizeTextarea === "function") autosizeTextarea(ta);
            }
        }
    });
}

function renderEmptyState() {
    setText("current-title", "Chưa có đề luận");
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatTemplateText(value) {
    let formatted = escapeHtml(value)
        .replace(/^([^:]{2,46}:)/, '<span class="template-line-label">$1</span>');

    formatted = formatted.replace(/\[(.*?)\]/g, (match, p1) => {
        const parts = p1.split(/\s*\/\s*/);
        const inner = parts.map(p => {
            let processedP = p;
            if (/^(Vo|Ving|V3\/ed)$/i.test(p)) {
                if (/vo/i.test(p)) processedP = "Vo";
                if (/ving/i.test(p)) processedP = "Ving";
                if (/v3\/ed/i.test(p)) processedP = "V3/ed";
            } else {
                processedP = p.toLowerCase();
            }
            return `<span class="template-placeholder">${processedP}</span>`;
        }).join(' / ');
        return `<span class="template-bracket-wrap">[${inner}]</span>`;
    });

    formatted = formatted.replace(/\bVo\b/g, 'V<sub>o</sub>');
    formatted = formatted.replace(/\bVing\b/g, 'V<sub>ing</sub>');
    formatted = formatted.replace(/V3\/ed/g, 'V<sub>3/ed</sub>');

    return formatted;
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function renderSampleEssay(data) {
    const container = document.getElementById("sample-essay-content");
    if (!container) return;
    
    container.innerHTML = "";

    const sampleData = data.sampleEssay || data.sample;
    if (!sampleData || !sampleData.paragraphs) {
        container.innerHTML = "<p><i>Chưa có bài mẫu cho đề này.</i></p>";
        return;
    }

    // Check if any sentence has {B1|B2} upgrades
    let hasUpgrades = false;
    sampleData.paragraphs.forEach(para => {
        para.forEach(s => {
            if (s.en && s.en.includes("{") && s.en.includes("|")) {
                hasUpgrades = true;
            }
        });
    });

    if (hasUpgrades) {
        const guideBox = document.createElement("div");
        guideBox.className = "sample-upgrade-guide";
        guideBox.innerHTML = `
            <div class="sample-guide-header">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>Hướng dẫn nâng cấp bài viết từ Level B1 lên Level B2</span>
            </div>
            <p class="sample-guide-desc">
                • Bài mẫu gốc bên dưới được viết ở <b>Level B1</b> (từ vựng rõ ràng, mạch lạc, dễ học thuộc).<br/>
                • Các cụm từ có màu cam nổi bật là điểm có thể nâng cấp. Khi anh/chị <b>bấm vào các cụm từ màu cam này</b>, từ vựng và cấu trúc sẽ tự động đổi sang cách viết cao cấp hơn ở <b>Level B2</b> (đổi sang màu xanh dương).
            </p>
            <div class="sample-guide-actions">
                <button type="button" class="btn-upgrade-all" id="btn-toggle-all-b2">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> <span>Nâng cấp toàn bộ lên Level B2</span>
                </button>
            </div>
        `;
        container.appendChild(guideBox);

        setTimeout(() => {
            const btnToggle = document.getElementById("btn-toggle-all-b2");
            let isAllB2 = false;
            
            const doToggleToB2 = () => {
                if (isAllB2) return;
                isAllB2 = true;
                if (btnToggle) {
                    btnToggle.innerHTML = `<i class="fa-solid fa-rotate-left"></i> <span>Trở về bài mẫu gốc Level B1</span>`;
                    btnToggle.classList.add("is-b2");
                }
                container.querySelectorAll(".sample-upgrade-chip.en-chip").forEach(chip => {
                    if (chip.dataset.level === "B1") {
                        chip.click();
                    }
                });
            };

            const doToggleToB1 = () => {
                if (!isAllB2) return;
                isAllB2 = false;
                if (btnToggle) {
                    btnToggle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span>Nâng cấp toàn bộ lên Level B2</span>`;
                    btnToggle.classList.remove("is-b2");
                }
                container.querySelectorAll(".sample-upgrade-chip.en-chip").forEach(chip => {
                    if (chip.dataset.level === "B2") {
                        chip.click();
                    }
                });
            };

            const activeLevel = (window.essays?.[state?.currentEssayIndex]?.currentLevel) || "B1";
            if (activeLevel === "B2") {
                doToggleToB2();
            }

            if (btnToggle) {
                btnToggle.addEventListener("click", () => {
                    if (!isAllB2) {
                        doToggleToB2();
                    } else {
                        doToggleToB1();
                    }
                });
            }
        }, 10);
    }

    function renderUpgradeChips(textStr, isVn = false, sentenceWrapper = null) {
        const fragment = document.createDocumentFragment();
        const regex = /\{([^{|}]+)\|([^{|}]+)\}/g;
        let lastIndex = 0;
        let match;
        let chipIndex = 0;

        while ((match = regex.exec(textStr)) !== null) {
            if (match.index > lastIndex) {
                fragment.appendChild(document.createTextNode(textStr.substring(lastIndex, match.index)));
            }
            const b1Text = match[1].trim();
            const b2Text = match[2].trim();
            const isAddIdea = b1Text.startsWith("+") || b1Text.includes("Thêm ý");

            const chip = document.createElement("span");
            chip.className = `sample-upgrade-chip ${isVn ? "vn-chip" : "en-chip"}`;
            chip.dataset.b1 = b1Text;
            chip.dataset.b2 = b2Text;
            chip.dataset.level = "B1";
            chip.dataset.chipIndex = chipIndex;

            if (isAddIdea && !isVn) {
                chip.innerHTML = '<span class="add-idea-btn"><i class="fa-solid fa-circle-plus"></i> Thêm ý (Level B2)</span>';
                chip.setAttribute("title", `Bấm để mở rộng ý (Level B2): ${b2Text}`);
            } else if (isAddIdea && isVn) {
                chip.innerHTML = '<span class="add-idea-btn-vn">(Ý bổ sung Level B2)</span>';
                chip.setAttribute("title", "Ý bổ sung khi chọn Level B2");
            } else {
                chip.textContent = b1Text;
                if (!isVn) {
                    chip.setAttribute("title", `Bấm để đổi thành (Level B2): ${b2Text}`);
                } else {
                    chip.setAttribute("title", "Bản dịch thay đổi theo cấp độ");
                }
            }

            if (!isVn) {
                chip.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const currentLevel = chip.dataset.level;
                    const nextLevel = currentLevel === "B1" ? "B2" : "B1";
                    chip.dataset.level = nextLevel;

                    if (nextLevel === "B1") {
                        if (isAddIdea) {
                            chip.innerHTML = '<span class="add-idea-btn"><i class="fa-solid fa-circle-plus"></i> Thêm ý (Level B2)</span>';
                            chip.setAttribute("title", `Bấm để mở rộng ý (Level B2): ${chip.dataset.b2}`);
                        } else {
                            chip.textContent = chip.dataset.b1;
                            chip.setAttribute("title", `Bấm để đổi thành (Level B2): ${chip.dataset.b2}`);
                        }
                    } else {
                        chip.textContent = chip.dataset.b2;
                        chip.setAttribute("title", isAddIdea ? "Bấm để thu gọn ý (Level B1)" : `Bấm để quay về (Level B1): ${chip.dataset.b1}`);
                    }

                    if (sentenceWrapper) {
                        const vnChip = sentenceWrapper.querySelector(`.vn-chip[data-chip-index="${chip.dataset.chipIndex}"]`);
                        if (vnChip) {
                            vnChip.dataset.level = nextLevel;
                            if (nextLevel === "B1") {
                                if (isAddIdea) {
                                    vnChip.innerHTML = '<span class="add-idea-btn-vn">(Ý bổ sung Level B2)</span>';
                                } else {
                                    vnChip.textContent = vnChip.dataset.b1;
                                }
                            } else {
                                vnChip.textContent = vnChip.dataset.b2;
                            }
                        }
                    }
                });
            }

            fragment.appendChild(chip);
            lastIndex = regex.lastIndex;
            chipIndex++;
        }

        if (lastIndex < textStr.length) {
            fragment.appendChild(document.createTextNode(textStr.substring(lastIndex)));
        }
        return fragment;
    }

    sampleData.paragraphs.forEach(para => {
        const p = document.createElement("p");
        p.style.marginBottom = "1.2rem";
        p.style.lineHeight = "1.9";
        
        para.forEach(sentence => {
            const wrapper = document.createElement("span");
            wrapper.className = "prompt-sentence-wrapper";

            const span = document.createElement("span");
            span.className = "prompt-sentence";
            if (sentence.isRed) span.classList.add("text-blue");

            if (sentence.en && sentence.en.includes("{") && sentence.en.includes("|")) {
                span.appendChild(renderUpgradeChips(sentence.en, false, wrapper));
            } else {
                span.textContent = sentence.en;
            }

            const translation = document.createElement("span");
            translation.className = "prompt-vn hidden";
            translation.appendChild(document.createTextNode(" "));
            if (sentence.vn && sentence.vn.includes("{") && sentence.vn.includes("|")) {
                translation.appendChild(renderUpgradeChips(sentence.vn, true, wrapper));
            } else {
                translation.appendChild(document.createTextNode(sentence.vn));
            }

            span.addEventListener("click", () => {
                const isHidden = translation.classList.toggle("hidden");
                if (!isHidden) {
                    span.classList.add("active");
                } else {
                    span.classList.remove("active");
                }
            });

            wrapper.appendChild(span);
            wrapper.appendChild(translation);
            p.appendChild(wrapper);
            p.appendChild(document.createTextNode(" "));
        });
        container.appendChild(p);
    });
}

window.changeLocalFontSize = changeLocalFontSize;
