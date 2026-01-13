/*
================================================================================
DATA.JS - EASY CONTENT EDITING FILE
================================================================================

This file contains all the dynamic content for your website.
To add team members, publications, or blog posts, simply follow the patterns below.

HOW TO EDIT:
1. Find the section you want to edit (teamMembers, publications, or blogPosts)
2. Copy an existing entry
3. Paste it and modify the values
4. Save the file

IMPORTANT NOTES:
- Keep all the quotation marks and commas
- Don't delete the brackets [ ] or braces { }
- Each entry should end with a comma EXCEPT the last one

================================================================================
*/

// ============================================================================
// TEAM MEMBERS
// ============================================================================
// To add a new team member, copy from { to }, including the comma at the end

const teamMembers = [
    // Principal Investigators
    {
        id: "member1",
        name: "Louis Tay",
        role: "Principal Investigator",
        department: "Psychology",
        image: "images/team/louis stay.jpg",
        email: "stay@purdue.edu",
        bio: "Louis Tay is William C. Byham Professor of Industrial-Organizational Psychology at Purdue University. His substantive research interests include well-being (subjective well-being, psychological well-being), character strengths, and vocational interests. His methodological research interests include measurement, item response theory, latent class modeling, multilevel analysis, and data science. He is a co-editor of the books Big Data in Psychological Research (APA Books), Handbook of Well-Being (DEF Publishers), Handbook of Positive Psychology Assessment (Hogrefe), Oxford Handbook of the Positive Humanities (Oxford), and Technology and Measurement around the Globe (Cambridge). His research has appeared in journals such as American Psychologist, Nature Human Behavior, Psychological Bulletin, Perspectives on Psychological Science, Journal of Personality and Social Psychology, Psychological Science, Journal of Applied Psychology, Personnel Psychology, and Organizational Research Methods. His research has also appeared in various media outlets such as The Wall Street Journal, APA Monitor on Psychology, Scientific American Mind, Psychology Today, and MSNBC. He was awarded the 2015 Rising Star award from the Association of Psychological Science, the 2016 Sage Publications/RMD/CARMA Early Career Award, the 2016 Ruut Veenhoven Award for Happiness Research, and the 2019 Society for Personality and Social Psychology (SPSP) Sage Young Scholars Award. He has contributed to the United Nations’ research reports on well-being and serves in consulting roles for top tech companies and Fortune 500 organizations. Consultations have involved topics such as better understanding customer and employee well-being, improving recruitment and selection processes, and understanding biases in measurement, machine learning, and AI. He is the co-founder of the tech startup ExpiWell, which advances the science and capture of daily life experiences through experience sampling methodology.",
        research: "Well-being, artificial intelligence, virtue-centered AI, positive psychology",
        education: "Professor at Purdue University",
        publications: "Extensive research on well-being and AI applications"
    },
    {
        id: "member2",
        name: "Ashton Anderson",
        role: "Principal Investigator",
        department: "Computer Science",
        image: "images/team/AshtonAnderson.jpg",
        email: "ashton@cs.toronto.edu",
        bio: "Ashton Anderson is a Principal Investigator specializing in computational social science and machine learning applications.",
        research: "Computational social science, machine learning, AI for social good",
        education: "University of Toronto",
        publications: "Research on algorithms and systems for social impact"
    },
    {
        id: "member3",
        name: "Karina Vold",
        role: "Principal Investigator",
        department: "Philosophy & Ethics",
        image: "images/team/Karina Vold.jpg",
        email: "karina.vold@utoronto.ca",
        bio: "Dr. Karina Vold is a philosopher of cognitive science and artificial intelligence & an assistant professor at the University of Toronto. She works at the intersection of the philosophy of cognitive science, the philosophy of technology, artificial intelligence (AI), and applied ethics. She is cross-appointed in the Institute for the History and Philosophy of Science and Technology (IHPST) and the Department of Philosophy. Before joining the IHPST, she worked as a postdoctoral research associate at the Leverhulme Centre for the Future of Intelligence at the University of Cambridge. In her recent work, Vold has written on the implications of theories of extended cognition, on responsible innovation in online therapy, and on the capabilities and risks of AI. Her current projects include researching the effects of AI on human cognition and autonomy, understanding the harms arising from targeted online “nudging,” evaluating arguments for existential threats from AI, and building frameworks for the ethical design of AI systems.",
        research: "AI ethics, philosophy of technology, ethical AI development",
        education: "Philosophy and AI Ethics",
        publications: "Research on ethical considerations in AI development"
    },
    // Postdoctoral Researchers
    {
        id: "member4",
        name: "Amel Chekili",
        role: "Postdoctoral Research Associate",
        department: "Industrial-Organizational Psychology",
        image: "images/team/Amal Chekili.jpg",
        email: "achekili@purdue.edu",
        bio: "Amel Chekili is a Postdoctoral Research Associate in the WAM Lab at Purdue University. She earned her doctorate in Industrial-Organizational Psychology from Virginia Tech, where she also completed a master's degree in Data Analysis and Statistics. Her research is centered on studying the benefits, challenges, and opportunities of artificial intelligence (AI) in organizational settings. Leveraging conversational large language models and other natural-language-processing techniques, Amel tackles organizational problems while keeping a strong focus on diversity, equity, and inclusion. Through her work, she highlights AI's transformative potential and the considerations needed to foster more inclusive workplaces.",
        research: "AI in organizational settings, diversity and inclusion, natural language processing, conversational AI",
        education: "Ph.D. in Industrial-Organizational Psychology from Virginia Tech | M.A. in Data Analysis and Statistics from Virginia Tech",
        publications: "Research on AI applications in organizational contexts with focus on DEI"
    },
    {
        id: "member5",
        name: "Daniel Harris",
        role: "Postdoctoral Researcher",
        department: "Philosophy & AI Safety",
        image: "images/team/danielharris.png",
        email: "daniel.harris2@mail.mcgill.ca",
        bio: "Dr. Daniel Harris is a postdoctoral researcher at the University of Toronto, and at the Schwartz Reisman Institute for Technology and Society. Daniel holds a Ph.D. in Philosophy (McGill University), an MPhil Studies in Philosophy (King's College London), an M.A. in Theory, Culture & Politics (Trent University), and a B.A. in Philosophy & Information Systems (Trent University). His research explores topics in AI safety, catastrophic risks, human-AI interaction, and game theory.",
        research: "AI safety, catastrophic risks, human-AI interaction, game theory",
        education: "Ph.D. in Philosophy from McGill University | MPhil from King's College London | M.A. from Trent University",
        publications: "Research on AI safety and human-AI interaction"
    },
    // Graduate Students
    {
        id: "member6",
        name: "Harsh Kumar",
        role: "Ph.D. Student",
        department: "Computer Science",
        image: "images/team/Harsh Kumar.jpg",
        email: "harsh@cs.toronto.edu",
        bio: "Harsh Kumar is a fourth-year PhD student in the Department of Computer Science at the University of Toronto, supervised by Dr. Ashton Anderson. His research focuses on developing algorithms and systems for social good, particularly in cognition, mental health, and education. In much of his current work, he has conducted large-scale human-centered evaluations of AI systems. For instance, he conducted one of the first large-scale randomized controlled trials demonstrating that large language models (LLMs) can enhance math education. In another recent study, he investigated how regular use of LLMs affects human creativity. He is also working on designing LLM agents that can act as coaches to promote behavior change. Earlier in his research, he developed algorithms to personalize mental health support for young adults using reinforcement learning techniques like contextual bandits. He has been very fortunate to spend two summers at Microsoft Research in New York City with Dan Goldstein, Jake Hofman, and David Rothschild, learning the ropes of conducting rigorous experiments and working on problems related to LLMs and education.",
        research: "AI for social good, education technology, mental health AI, LLM agents, reinforcement learning",
        education: "Ph.D. Student in Computer Science at University of Toronto",
        publications: "Research on LLMs in education and creativity, AI coaching systems, personalized mental health interventions"
    },
    // Research Staff
    {
        id: "member7",
        name: "Hillary Merzdorf",
        role: "Grant Manager",
        department: "Research Operations",
        image: "images/team/Hillary Merzdorf.jpg",
        email: "hmerzdor@purdue.edu",
        bio: "Hillary Merzdorf is a Research Operations Administrator in the Department of Psychological Sciences at Purdue University. She earned a Ph.D. in Engineering Education from Purdue University in 2022, where she also earned degrees in Psychology, Educational Psychology, and Industrial Engineering. She has experience in instructional design, assessment development and validation, and user-centered educational technology. She is interested in the role of computers and intelligent systems to support cognition and learning, and she enjoys mentoring student researchers.",
        research: "Educational technology, instructional design, user-centered design, AI in learning",
        education: "Ph.D. in Engineering Education from Purdue University | Degrees in Psychology, Educational Psychology, and Industrial Engineering",
        publications: "Research on educational technology and assessment development"
    },
    {
        id: "member8",
        name: "Rediet Shiferahu",
        role: "Communications Specialist",
        department: "Communications & Research",
        image: "images/team/Rediet Shiferahu.JPG",
        email: "rshifera@purdue.edu",
        bio: "Rediet Shiferahu is a Post-Baccalaureate Researcher in the Department of Psychological Sciences at Purdue University. She earned her B.A. in psychology from Colgate University with minors in Global Public and Environmental Health and Women’s Studies. Her research explores how relationships, sleep, and storytelling shape well-being and healing, as well as how people’s connections with food reflect emotion, identity, and resilience. Her interests include how sleep influences relational functioning, how trauma and embodiment shape the stories people tell about themselves, and how cultural narratives around food, shame, and identity influence emotional resilience. She has also contributed to global research efforts examining community healing and historical trauma in Namibia and South Africa. Her current work examines emerging intersections between well-being science and conversational AI, with a focus on designing systems that support emotional safety, dignity, and culturally grounded flourishing. Across all her projects, she is motivated by a central question: How do human relationships and personal narratives shape the path to healing?",
       research: "Well-being, relationships, sleep, Trauma & Healing, Embodiment, Human–AI Interaction",
        education: "B.A. in Psychology from Colgate University | Minors in Global Public and Environmental Health and Women's Studies",
        publications: "Research on well-being, relationships, and the psychology of food and storytelling"
    }
];

// ============================================================================
// PUBLICATIONS
// ============================================================================
// To add a new publication, copy an entry and modify the details

const publications = [
    {
        id: "pub1",
        title: "Advances in subjective well-being research",
        authors: "Ed Diener,Shigehiro Oishi and Louis Tay",
        year: 2018,
        journal: "Nature Human Behaviour",
        abstract: "The empirical science of subjective well-being, popularly referred to as happiness or satisfaction, has grown enormously in the past decade. In this Review, we selectively highlight and summarize key researched areas that continue to develop. We describe the validity of measures and their potential biases, as well as the scientific methods used in this field. We describe some of the predictors of subjective well-being such as temperament, income and supportive social relationships. Higher subjective well-being has been associated with good health and longevity, better social relationships, work performance and creativity. At the community and societal levels, cultures differ not only in their levels of well-being but also to some extent in the types of subjective well-being they most value. Furthermore, there are both universal and unique predictors of subjective well-being in various societies. National accounts of subjective well-being to help inform policy decisions at the community and societal levels are now being considered and adopted. Finally we discuss the unknowns in the science and needed future research.",
        pdfLink: "file:///C:/Users/rediet/Downloads/s41562-018-0307-6%20(3).pdf",
        doiLink: "https://www.nature.com/articles/s41562-018-0307-6",
        featured: true
    },
    {
        id: "pub2",
        title: "The Development and Validation of the Comprehensive Inventory of Thriving (CIT) and the Brief Inventory of Thriving (BIT)",
        authors: "Rong Su, Louis Tay, Ed Diener.",
        year: 2014,
        journal: "Applied Psychology: Health and Well‐Being",
        abstract:`In this article we present the development and validation of two new measures of psychological well-being: the Comprehensive Inventory of Thriving (CIT) and the Brief Inventory of Thriving (BIT). These measures were developed with two specific goals in mind: (1) to measure a broad range of psychological well-being constructs and represent a holistic view of positive functioning; and (2) to predict important health outcomes that are useful for researchers and health practitioners. The CIT includes 18 subscales with 54 items in total, covering a broad range of well-being components. The BIT has 10 items in total and can serve as an indicator of psychological well-being and a brief screening tool of mental health. The new measures were evaluated in five samples of a total of 3,191 US participants with diverse demographics. The CIT and BIT had excellent psychometric properties and exhibited convergent validity with existing measures of psychological well-being and discriminant validity with measures of ill-being. Both measures contributed over and above existing measures of psychological well-being in predicting a variety of health outcomes, including self-reported and objective health status, physical functioning, and health behaviors. In addition, we showed the relative importance of thriving compared to ill-being for health outcomes and the benefits of assessing individuals’ positive functioning beyond ill-being. Potential uses of the new measures are discussed.`,

        pdfLink: "https://iaap-journals.onlinelibrary.wiley.com/doi/epdf/10.1111/aphw.12027",
        doiLink: " https://doi.org/10.1111/aphw.12027",
        featured: true
    },
    {
        id: "pub3",
        title: "Conceptualizing “positive attributes” across psychological perspectives",
        authors: "Danielle Wilson, Vincent Ng, Nicole Alonso, Anne Jeffrey, Louis Tay",
        year: 2023,
        journal: " Journal of Personality",
        abstract: "The growth of positive psychology has birthed debate on the nature of what “positive” really means. Conceptualizations of positive attributes vary across psychological perspectives, and it appears these definitional differences stem from standards for “positive” espoused by three normative ethical frameworks: consequentialism, deontology, and virtue ethics. When definitions of “positive” do not align with one of these ethical schools, it appears researchers rely on preference to distinguish positive attributes. In either case, issues arise when researchers do not make their theoretical alignment explicit, leading to value-laden, often subjective criteria being smuggled into science as a description of what is positive.",
        pdfLink: "file:///C:/Users/rediet/Downloads/Journal%20of%20Personality%20-%202023%20-%20Wilson%20-%20Conceptualizing%20%20positive%20attributes%20%20across%20psychological%20perspectives.pdf",
        doiLink: " https://doi.org/10.1111/jopy.12873",
        featured: false
    },
    {
        id: "pub4",
        title: "Character Traits Predict Health and Well-Being beyond Personality",
        authors: "Danielle Wilson,Vincent Ng,Jeff Foster & Louis Tay",
        year: 2023,
        journal: "Neural Information Processing Systems (NeurIPS)",
        abstract: "We examined the incremental validity of character in predicting health outcomes and well-being beyond personality traits and investigated the extent to which health-related behaviors mediate the relationship between character and well-being. Findings indicate that several character cores (e.g., transcendence, fortitude) predict well-being, health behaviors, and health outcomes beyond different measures of personality traits, indicating that character is discriminable from personality as indicated by incremental prediction. In particular, fortitude, temperance, transcendence, and sincerity appear to be key players. Implications for character research are discussed.",
        pdfLink: "https://www.tandfonline.com/doi/pdf/10.1080/00223891.2023.2197064?casa_token=SEfnXa5SZd4AAAAA:DH_E-YfTfKpEjv8kJP8EEa190idI7rzIP6Rk9usB32ItPBnuo6DLgV2zMEXw_ZYzZL3gbEtB5Sn2Oow",
        doiLink: "https://www.tandfonline.com/doi/full/10.1080/00223891.2023.2197064?scroll=top&needAccess=true",
        featured: false
    },
    {
        id: "pub5",
        title: "Lost in Translation: The Construct Representation of Character Virtues",
        authors: " Vincent Ng and Louis Tay",
        year: 2020,
        journal: "Sage Journals Home",
        abstract:"A seemingly universal lesson is that anything taken to its extreme is detrimental. Indeed, there has been growing interest in testing this idea within psychology. These studies have often been framed in terms of Aristotle’s doctrine of the golden mean or the idea that virtue lies between the vices of deficiency and excess. Recent explicit reviews of this hypothesis in the psychological literature have led to the paradoxical conclusion that one can have too much virtue (i.e., the too-much-of-a-good-thing effect) despite virtue being identified by the golden mean. We argue in this article that this conclusion is due to a reductionist account of virtues in psychology and the resultant measurement of virtues as general dispositional tendencies in behavior. We review philosophical theory on the golden mean to show that the relationship between virtue and relevant behavior is fundamentally about situation-specific optimality. Using schematic models, we contrast the former measurement approach against the latter to explain the too-much-of-a-good-thing effect and further demonstrate why virtues cannot be properly measured as general tendencies in behavior. We conclude with methodological implications of our theory-informed approach to virtue measurement for research design, evaluation, and conceptualization.",

        pdfLink: "https://journals.sagepub.com/doi/pdf/10.1177/1745691619886014?casa_token=ee30_FHFxmAAAAAA:28krNx2PbOJrhXE_3dYGKVwXd6Ig-t0Gu3uXiTydGmD2p9rfVBumZ1DLFIhiIX79QvNm9TBfEq4WHLI",
        doiLink: "https://doi.org/10.1177/1745691619886014",
        featured: false
    },
  {
        id: "pub6",
        title: "Behavioral measures of humility: Part 1. Theoretical and methodological review",
        authors: "Daryl R. Van Tongeren, Vincent Ng, Louis Hickman and Louis Tay",
        year: 2022,
        journal: "The Journal of Positive Psychology",
        abstract: "Research on humility has burgeoned. However, behavioral assessments of humility that do not relyon self-reports have developed much more slowly. The purpose of this paper is to take stock ofexisting approaches to conceptualize and measure humility. Specifically, we provide a conceptualoverview of humility, including the limitations of current methodological approaches to studyinghumility and the need for behavioral assessments. In addition, we argue that behavioral assess-ments of humility may inform broader measures of virtues by considering both the relevance ofand the degree to which actual behaviors pertaining to that virtue are expressed. Understandingthe current conceptual and methodological limitations of approaches to humility will better situateresearch efforts aimed at catalyzing behavioral measures of humility.",
        pdfLink: "https://www.tandfonline.com/doi/epdf/10.1080/17439760.2022.2109202?needAccess=true",
        doiLink: "https://doi.org/10.1080/17439760.2022.2109202",
        featured: false
    },
  {
        id: "pub7",
        title: "Behavioral measures of humility: Part 2. Conceptual mapping and charting ways forward",
        authors: "Daryl R. Van Tongeren, Vincent Ng, Louis Hickman and Louis Tay",
        year: 2022,
        journal: "The Journal of Positive Psychology",
        abstract: "Given that current methodological approaches to humility have largely ignored behavioral mea-sures, we sought to provide a conceptual map of behavioral assessments. Toward that end, weoffer an initial map of conceptual bases and likely indicators for behavioral assessments of humility,and suggest a research agenda for advancing the scientific study of humility. Specifically, wediscuss the four features of behavioral measures – scalability, specificity, sensitivity, and selectivity –that offer such assessments a great advantage over other methodological approaches. In addition,we make three empirically testable propositions, addressing methodological alignment, domainspecificity, and social desirability, and discuss potential behavioral interventions for cultivatinghumility and implications for research and practice. We hope this empirically testable frameworkwill provide a fruitful way for researchers to better conceptualize and measure humility.",
        pdfLink: "https://www.tandfonline.com/doi/epdf/10.1080/17439760.2022.2109201?needAccess=true",
        doiLink: "https://doi.org/10.1080/17439760.2022.2109201",
        featured: false
    }
    // TO ADD MORE PUBLICATIONS:
    // Copy an entry, paste here, and modify the details
    // Don't forget the comma after the closing }
];

// ============================================================================
// SCIENTIFIC ADVISORS
// ============================================================================
// To add a new advisor, copy an entry and modify the details

const scientificAdvisors = [
    {
        id: "advisor1",
        name: "Sonja Lyubomirsky",
        title: "Scientific Expert",
        affiliation: "University of California, Riverside",
        image: "images/advisors/SonjaLyubomirsky.jpg",
        bio: "Sonja Lyubomirsky (AB Harvard, summa cum laude; PhD Stanford) is Distinguished Professor of Psychology at the University of California, Riverside and author of the best-selling The How of Happiness and The Myths of Happiness (published in 39 countries). Lyubomirsky’s research—on the possibility of lastingly increasing happiness via gratitude, kindness, and connection interventions—have been the recipients of many grants and honors, including Fellow of the American Association for the Advancement of Science (AAAS), an Honorary Doctorate from the University of Basel, the Diener Award for Outstanding Midcareer Contributions in Personality Psychology, the Christopher Peterson Gold Medal, a Positive Psychology Prize, and the Faculty of the Year Award (twice). She has four kids, ages 12 to 26, and lives in Santa Monica, California.",
        expertise: "Positive psychology, happiness research, gratitude and kindness interventions, well-being science",
        contributions: "Fellow of the American Association for the Advancement of Science (AAAS), Honorary Doctorate from the University of Basel, Diener Award for Outstanding Midcareer Contributions in Personality Psychology, Christopher Peterson Gold Medal, Positive Psychology Prize, Faculty of the Year Award (twice). Author of The How of Happiness and The Myths of Happiness."
    },
    {
        id: "advisor2",
        name: "Tara Behrend",
        title: "Scientific Expert",
        affiliation: "Michigan State University",
        image: "images/advisors/behrend-tara.jpg",
        bio: "Tara Behrend is the John R Butler II Endowed Professor of Human Resources and Labor Relations at Michigan State University, where she leads the MSU Future of Work Initiative. Her research focuses on the effects of emerging technologies on the experience of work. She has published extensively on the topics of AI, surveillance, learning, and human-computer-interaction.She serves in multiple national leadership and advisory roles, including as Chair of APA’s Board on Scientific Affairs and as member of the National Academies Board on Human-Systems Integration. She is a former Program Director for the National Science Foundation, overseeing the Science of Organization and Future of Work programs. Her most recent edited book, Human-Technology Partnerships at Work, was published with Cambridge in September 2025.",
        expertise: "Future of work, AI and emerging technologies, human-computer interaction, surveillance technologies, organizational psychology",
        contributions: "Chair of APA's Board on Scientific Affairs, member of the National Academies Board on Human-Systems Integration, former Program Director for the National Science Foundation overseeing Science of Organization and Future of Work programs. Editor of Human-Technology Partnerships at Work (Cambridge, 2025)."
    },
    {
        id: "advisor3",
        name: "Lyle Ungar",
        title: "Scientific Expert",
        affiliation: "University of Pennsylvania",
        image: "images/advisors/LyleUngar.jpg",
        bio: "Lyle Ungar is a Professor of Computer and Information Science at the University of Pennsylvania, where he also holds secondary appointments in Psychology, Bioengineering, Genomics and Computational Biology, and Operations, Information and Decisions. His group uses natural language processing and explainable AI for psychological research, including analyzing social media and cell phone sensor data to better understand the drivers of physical and mental well-being and building socio-emotionally sensitive AI-based tutors and coaches.",
        expertise: "Natural language processing, explainable AI, affective computing, well-being analytics, AI tutors and coaches",
        contributions: "Pioneering work in using NLP and AI for psychological research, development of socio-emotionally sensitive AI systems, research on well-being drivers through social media and sensor data analysis."
    },
    {
        id: "advisor4",
        name: "Chris Burr",
        title: "Scientific Expert",
        affiliation: "The Alan Turing Institute",
        image: "images/advisors/ChrisBurr.jpeg",
        bio: "Dr Christopher Burr is a Senior Researcher in Trustworthy Systems at the Alan Turing Institute—the UK’s national institute for data science and artificial intelligence. Dr Burr specialises in the trustworthy and ethical design, development, and deployment of data-driven technologies. He is also interested in exploring and understanding how data-driven technologies affect our decision-making and social institutions (e.g. factors that undermine trust in algorithmic systems).He is project lead for the Trustworthy and Ethical Assurance programme, and the Turing Commons. He is also co-lead for a work package on the EPSRC Networks of Cardiovascular Digital Twins (CVDNet) project, and the lead for the Uncertainty and Trust Special Interest Group (UKRI DTNet+).",
        expertise: "Trustworthy AI, ethical AI design, AI governance, algorithmic trust, data ethics",
        contributions: "Project lead for the Trustworthy and Ethical Assurance programme and the Turing Commons. Co-lead for EPSRC Networks of Cardiovascular Digital Twins work package. Lead for the Uncertainty and Trust Special Interest Group."
    },
    {
        id: "advisor5",
        name: "Rafael Calvo",
        title: "Scientific Expert",
        affiliation: "Imperial College London",
        image: "images/advisors/RafaelCalvo.jpeg",
        bio: "Rafael Calvo is Professor and Chair of Engineering Design at Imperial College London. He focuses on systems for learning, wellbeing, and health. In the late 2000s, Calvo was amongst those who pioneered the field of Affective Computing, focusing on affect detection. His work included review articles and the Oxford Handbook of Affective Computing (Calvo 2010, Calvo 2015). Calvo then led the way for a new field of “Positive Computing” (Calvo 2014) – approaches to design that support motivation and psychological well-being. His work translating empirical and theoretical work in motivational psychology to design has been applied worldwide by scholars and companies alike. He is currently developing text and voice agents for chronic illness, mental health, and dementia.",
        expertise: "Positive Computing, affective computing, well-being technology, learning systems, health technology",
        contributions: "Pioneer in Affective Computing and founder of Positive Computing field. Editor of Oxford Handbook of Affective Computing. Current work on AI agents for chronic illness, mental health, and dementia care."
    },
    {
        id: "advisor6",
        name: "Fred Oswald",
        title: "Scientific Expert",
        affiliation: "Rice University",
        image: "images/advisors/FredOswald.jpg",
        bio: "Fred Oswald is an industrial-organizational psychologist and current Chair of the Board on Human Systems Integration (BOHSI) at the National Academies, where they recently published a highly downloaded report, Human-AI Teaming: State of the Art and Research Needs (Mica Endsley, Chair). He is a current Member of the National Artificial Intelligence Advisory Committee (NAIAC) which advises the President and the Secretary of Commerce on a wide range of topics relevant to AI and national prosperity. With consistent PI and co-PI funding from NSF, NIH, and other agencies, his core research addresses the role of AI and machine learning in work and workforce settings.",
        expertise: "Industrial-organizational psychology, human-AI teaming, AI in workforce settings, human systems integration",
        contributions: "Chair of National Academies Board on Human Systems Integration. Member of National AI Advisory Committee. Led publication of 'Human-AI Teaming: State of the Art and Research Needs' report."
    },
    {
        id: "advisor7",
        name: "Richard Zemel",
        title: "Scientific Expert",
        affiliation: "Columbia University",
        image: "images/advisors/Richard Zemel.png",
        bio: "Richard Zemel is the Trianthe Dakolias Professor of Engineering and Applied Science in the Computer Science Department at Columbia University. He is the Director of the NSF AI Institute for Artificial and Natural Intelligence (ARNI), and was the co-founder and inaugural Research Director of the Vector Institute for Artificial Intelligence. He is a Canadian Institute for Advanced Research AI Chair and is on the Advisory Board of the Neural Information Processing Society. His awards include an AI Lifetime Achievement Award (CAIA) and a Pioneer of AI Award (NVIDIA). His research contributions include foundational work on systems that learn useful representations of data with little or no supervision; graph-based machine learning; and algorithms for fair and robust machine learning.",
        expertise: "Machine learning, representation learning, graph-based ML, fair and robust ML, neural networks",
        contributions: "AI Lifetime Achievement Award (CAIA), Pioneer of AI Award (NVIDIA). Director of NSF AI Institute for Artificial and Natural Intelligence. Co-founder of Vector Institute. Foundational work on unsupervised learning and fair ML algorithms."
    },
    {
        id: "advisor8",
        name: "Munmun De Choudhury",
        title: "Scientific Expert",
        affiliation: "Georgia Institute of Technology",
        image: "images/advisors/DeChoudhury.jpeg",
        bio: "Munmun De Choudhury is J. Z. Liang Professor at the School of Interactive Computing and Co- Lead of Patient-Centered Care Delivery at the Pediatric Technology Center in Georgia Institute of Technology. Dr. De Choudhury is known for her contributions to the fields of computational social science, human-computer interaction, and digital mental health. Dr. De Choudhury and her collaborators have contributed significantly to advancing the development of computational techniques for early detection and intervention in mental health, as well as in unpacking how social media use benefits or harms mental well-being. De Choudhury's contributions have been recognized through awards like the 2023 SIGCHI Societal Impact Award, the 2023 ICWSM and the 2022 Web Science Trust Test-of-Time Awards, and the 2021 ACM-W Rising Star Award. In 2024, she was inducted into the SIGCHI Academy. Dr. De Choudhury is a persistent contributor to policy-framing and advocacy initiatives, and is frequently sought for expert advice to governments, and national and international media. Notably, Dr. De Choudhury was an invited contributor to the Office of U.S. Surgeon General’s 2023 Advisory on The Healing Effects of Social Connection. Recently, she served as a member of the Technical Advisory Group of the Commission for Social Connection at the World Health Organization.",
        expertise: "Computational social science, digital mental health, social media and well-being, HCI, mental health detection and intervention",
        contributions: "2023 SIGCHI Societal Impact Award, 2023 ICWSM and 2022 Web Science Trust Test-of-Time Awards, 2021 ACM-W Rising Star Award. Inducted into SIGCHI Academy in 2024. Contributor to U.S. Surgeon General's 2023 Advisory on Social Connection. Member of WHO Commission for Social Connection Technical Advisory Group."
    },
    {
        id: "advisor9",
        name: "Dorian Peters",
        title: "Scientific Expert",
        affiliation: "University of Cambridge",
        image: "images/advisors/Dorian Peters.png",
        bio: "Dorian is Assistant Professor in Ethical Design at The University of Cambridge Institute for Technology and Humanity. She is also a Visiting Researcher at the Dyson School of Design Engineering at Imperial college London and a Senior Research Associate at the Intellectual Forum, Jesus College Cambridge. She is a human-computer interaction researcher who specialises in digital health and on design for wellbeing, autonomy and learning. She has worked in participatory digital health and mental health across age groups with communities in the UK, Australia, and Latin America. Her current interests are on ethical front-end design and design for ‘whole-person digital health’ that takes into account the psychological dimensions of physical illness.Her books include: Positive Computing: Technology for Wellbeing and Human Potential (MIT Press), and Interface Design for Learning (Pearson). She is also on the editorial board of the Springer Nature journal, AI & Ethics. Previously she held the positions of Research Fellow at Imperial College London and until 2024, she was Associate Director of the Leverhulme Centre for the Future of Intelligence at the University of Cambridge. Until 2019, she was Creative Leader of the Wellbeing Technologies Lab at the University of Sydney. With over 20 years’ experience in technology design, she works together with communities, engineers, and social scientists to co-create human-centered, context-sensitive and research-driven technologies in ways that respect psychological needs. She has also done work for non-profit and corporate institutions, including Movember Foundation, IESO Digital Health, Google, Atlassian, Honda, Sony, and Phillips. She received her PhD in Interaction Design from the University of Sydney and Bachelor’s from Carnegie Mellon. Her contributions in human-computer interaction include the “METUX model” for evaluating the wellbeing impact of technologies within six spheres of human experience and the 15 Wellbeing Supportive Design Heuristics.",
        expertise: "Ethical design, digital health, HCI, well-being design, design for autonomy and learning, whole-person health",
        contributions: "Co-author of Positive Computing: Technology for Wellbeing and Human Potential (MIT Press) and Interface Design for Learning (Pearson). Editorial board of AI & Ethics journal. Former Associate Director of Leverhulme Centre for the Future of Intelligence. Developer of METUX model for evaluating wellbeing impact of technologies and 15 Wellbeing Supportive Design Heuristics."
    },
    {
        id: "advisor10",
        name: "Geke Ludden",
        title: "Scientific Expert",
        affiliation: "University of Twente",
        image: "images/advisors/GekeLudden.avif",
        bio: "As professor Geke Ludden is the head of the UT’s Interaction Design research group within the faculty of Engineering Technology (ET), and as a fellow she is linked to the UT’s DesignLab. Ludden has worked as a UT lecturer and researcher since 2012. She has also been a visiting research fellow at the University of Technology in Sydney. Before that, Ludden worked as a research consultant with the Novay Research Rnstitute. Her research work has been published in design and health care journals. She is co-editor of the Design for Behaviour Change Handbook (September 2017, Routledge) and editor of the Journal of Design Research. Ludden has a background in industrial design and gained her PhD at Delft University of Technology in 2008, having gained her Master’s in Industrial Design Engineering at the same university in 2003.",
        expertise: "Design for behavior change, well-being, mental health, value-based design",
        contributions: "Head of Interaction Design research group in Engineering Technology faculty and lecturer at University of Twente. Co-Editor of Design for Behavior Change Handbook and Editor of Journal of Design Research."
    }
    ];

// ============================================================================
// BLOG POSTS
// ============================================================================
// To add a new blog post, copy an entry and change the information

const blogPosts = [
    {
        id: "post1",
        title: "Rethinking What It Means to Flourish",
        author: "",
        date: "",
        category: "Psychology",
        excerpt: "We often hear that technology can make life easier, faster, or more entertaining, but rarely do we ask if it helps us grow. At FLOREA AI, our work begins with that question. Many AI systems today are built to keep us engaged, to make us feel good in the moment. But well-being, what psychologists and philosophers call flourishing, isn’t just about short bursts of happiness. It’s about developing the character and habits that help us live with meaning and depth. We believe AI can play a different role in people’s lives, not as a replacement for human connection, but as a tool for reflection, self-understanding, and growth.",
        content: `
            <p>In recent years, AI conversational agents have become increasingly sophisticated at providing immediate emotional support and engagement. However, a critical question remains: are we optimizing for the right outcomes?</p>
            
            <p>Research in positive psychology has long distinguished between hedonic well-being (pleasure and happiness) and eudaimonic well-being (meaning and flourishing). While both are important, our current AI systems predominantly focus on the former, potentially at the expense of the latter.</p>
            
            <h3>The Problem with Optimization for Engagement</h3>
            <p>When AI systems are designed primarily to maximize user engagement or immediate satisfaction, they may inadvertently encourage behaviors that feel good in the moment but don't contribute to long-term character development. This is similar to the difference between eating candy and eating nutritious food – one provides immediate pleasure, while the other contributes to lasting health.</p>
            
            <h3>What Character Virtues Require</h3>
            <p>Developing character virtues like courage, wisdom, temperance, and justice requires facing challenges, experiencing productive discomfort, and engaging in sustained effort over time. These are not always pleasant experiences in the moment, but they are essential for genuine human flourishing.</p>
            
            <p>Our research aims to develop AI systems that can support this deeper form of development while still being engaging and supportive.</p> `,

        image: "images/blog/PIC.png",
        featured: true
    },
    {
        id: "post2",
        title: "Technical Challenges in Virtue-Centered AI",
        author: "",
        date: "",
        category: "Technology",
        excerpt: "A deep dive into the architectural considerations necessary for building AI systems that promote character development. From reward modeling to long-term optimization.",
        content: `
            <p>Building AI systems that promote character virtues presents unique technical challenges that differ significantly from traditional AI optimization problems.</p>
            
            <h3>The Temporal Credit Assignment Problem</h3>
            <p>One of the fundamental challenges is that the "rewards" from character development are often delayed and indirect. While a short-term AI might optimize for immediate user satisfaction (easy to measure), a virtue-centered AI needs to optimize for outcomes that may not manifest for months or years.</p>
            
            <h3>Multi-Objective Optimization</h3>
            <p>Character development isn't a single metric – it involves balancing multiple virtues, each of which may sometimes be in tension. Our technical approach involves developing neural architectures that can handle these complex trade-offs.</p>
            
            <h3>Value Learning from Multiple Sources</h3>
            <p>Rather than learning values from user engagement alone, our systems integrate insights from psychological research, philosophical frameworks, and behavioral observations to create a more robust understanding of what promotes flourishing.</p>
        `,
        image: "images/blog/tory (1).png",
        featured: true
    },
    {
        id: "post3",
        title: "Aristotle Meets Machine Learning",
        author: "",
        date: "",
        category: "Philosophy",
        excerpt: "How ancient philosophical wisdom can inform modern AI design for promoting human excellence. Bridging classical virtue ethics and contemporary technology.",
        content: `
            <p>Aristotle's concept of eudaimonia – often translated as "flourishing" or "living well" – provides a surprisingly relevant framework for thinking about AI development in the 21st century.</p>
            
            <h3>Virtue as Skill Development</h3>
            <p>For Aristotle, virtues are not innate qualities but skills that must be developed through practice and habituation. This has direct implications for how we design AI interactions – they should provide opportunities for practicing virtuous responses, not just delivering pleasant experiences.</p>
            
            <h3>The Golden Mean</h3>
            <p>Aristotle's concept of virtue as a mean between extremes is particularly relevant for AI design. An AI focused on building courage, for instance, shouldn't push users toward recklessness nor allow them to remain in excessive caution, but help them find the appropriate middle path.</p>
            
            <h3>The Role of Community</h3>
            <p>Ancient philosophy recognized that virtue development happens in community. Our challenge is to design AI systems that enhance rather than replace human relationships and communal sources of meaning.</p>
        `,
        image: "images/blog/tory.png",
        featured: true
    }
       // TO ADD MORE BLOG POSTS:
    // Copy an entry, paste here, and modify the content
    // For the content field, use HTML tags like <p>, <h3>, etc.
];

// ============================================================================
// WEBSITE SETTINGS
// ============================================================================
// General settings you can modify

const websiteSettings = {
    siteName: "Florea AI",
    tagline: "Research for Human Flourishing",
    contactEmail: "florea.virtue.ai@gmail.com",
    twitter: "https://twitter.com/youraccount",
    linkedin: "https://linkedin.com/company/youraccount",
    github: "https://github.com/youraccount"
};

// ============================================================================
// DO NOT EDIT BELOW THIS LINE
// (Unless you know JavaScript)
// ============================================================================

// Make data available globally for the website to use
// These variables are automatically available to main.js