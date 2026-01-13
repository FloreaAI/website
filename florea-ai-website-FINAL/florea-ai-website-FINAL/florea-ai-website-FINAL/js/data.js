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
        image: "images/team/louis stay.webp",
        email: "florea.virtue.ai@gmail.com",
        bio: "Louis Tay is a Principal Investigator for the Florea AI project and leads research in well-being and artificial intelligence.",
        research: "Well-being, artificial intelligence, virtue-centered AI, positive psychology",
        education: "Professor at Purdue University",
        publications: "Extensive research on well-being and AI applications"
    },
    {
        id: "member2",
        name: "Ashton Anderson",
        role: "Principal Investigator",
        department: "Computer Science",
        image: "images/team/ashton-anderson.jpg",
        email: "florea.virtue.ai@gmail.com",
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
        image: "images/team/karina-vold.jpg",
        email: "florea.virtue.ai@gmail.com",
        bio: "Karina Vold is a Principal Investigator bringing expertise in philosophy and AI ethics to the project.",
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
        image: "images/team/Amal Chekili.webp",
        email: "florea.virtue.ai@gmail.com",
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
        image: "images/team/daniel-harris.png",
        email: "florea.virtue.ai@gmail.com",
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
        image: "images/team/harsh-kumar.png",
        email: "florea.virtue.ai@gmail.com",
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
        image: "images/team/Hillary Merzdorf.webp",
        email: "florea.virtue.ai@gmail.com",
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
        image: "images/team/Rediet shiferahu.webp",
        email: "florea.virtue.ai@gmail.com",
        bio: "Rediet Shiferahu is a post-bac researcher in the WAM Lab at Purdue University. She earned her B.A. in psychology from Colgate University with minors in Global Public and Environmental Health and Women's Studies. Her research explores how relationships, sleep, and storytelling shape well-being and healing, as well as how people's connections with food reflect emotion, identity, and resilience. Outside the lab, she enjoys hiking, cooking, and traveling.",
        research: "Well-being, relationships, sleep, storytelling, food psychology",
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
        title: "Character Virtues in AI: A Framework for Long-term Human Flourishing",
        authors: "Mitchell, S., Chen, J., & Thompson, E.",
        year: 2024,
        journal: "Journal of AI Ethics",
        abstract: "This paper presents a comprehensive framework for integrating character virtue development into AI conversational agents, addressing the limitations of current short-term well-being focused approaches.",
        pdfLink: "publications/mitchell-2024-character-virtues.pdf",
        doiLink: "https://doi.org/10.1234/example",
        featured: true
    },
    {
        id: "pub2",
        title: "Beyond Subjective Well-being: Measuring Character Development in AI Interactions",
        authors: "Rivera, M., Patel, A., & Kim, D.",
        year: 2024,
        journal: "Psychological Science",
        abstract: "An empirical study introducing novel behavioral assessment methods for evaluating character virtue development through longitudinal AI interactions.",
        pdfLink: "publications/rivera-2024-measuring-character.pdf",
        doiLink: "https://doi.org/10.1234/example2",
        featured: true
    },
    {
        id: "pub3",
        title: "Philosophical Foundations of Virtue-Centered AI Design",
        authors: "Thompson, E., & Kim, D.",
        year: 2023,
        journal: "Philosophy & Technology",
        abstract: "An exploration of the philosophical underpinnings necessary for designing AI systems that promote genuine human flourishing rather than mere happiness optimization.",
        pdfLink: "publications/thompson-2023-philosophical.pdf",
        doiLink: "https://doi.org/10.1234/example3",
        featured: false
    },
    {
        id: "pub4",
        title: "Neural Architectures for Long-term Value Learning in Conversational AI",
        authors: "Chen, J., & Patel, A.",
        year: 2023,
        journal: "Neural Information Processing Systems (NeurIPS)",
        abstract: "Proposing novel neural network architectures that can optimize for long-term character development objectives rather than immediate reward signals.",
        pdfLink: "publications/chen-2023-neural-architectures.pdf",
        doiLink: "https://doi.org/10.1234/example4",
        featured: false
    },
    {
        id: "pub5",
        title: "Longitudinal Effects of AI Companionship on Character Trait Development",
        authors: "Mitchell, S., Rivera, M., & Thompson, E.",
        year: 2023,
        journal: "Journal of Personality and Social Psychology",
        abstract: "A 6-month longitudinal study examining how different types of AI interactions influence the development of character traits in users.",
        pdfLink: "publications/mitchell-2023-longitudinal.pdf",
        doiLink: "https://doi.org/10.1234/example5",
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
        image: "images/advisors/sonja-lyubomirsky.jpg",
        bio: "Sonja Lyubomirsky (AB Harvard, summa cum laude; PhD Stanford) is Distinguished Professor of Psychology at the University of California, Riverside and author of the best-selling The How of Happiness and The Myths of Happiness (published in 39 countries). She has four kids, ages 12 to 26, and lives in Santa Monica, California.",
        expertise: "Positive psychology, happiness research, gratitude and kindness interventions, well-being science",
        contributions: "Fellow of the American Association for the Advancement of Science (AAAS), Honorary Doctorate from the University of Basel, Diener Award for Outstanding Midcareer Contributions in Personality Psychology, Christopher Peterson Gold Medal, Positive Psychology Prize, Faculty of the Year Award (twice). Author of The How of Happiness and The Myths of Happiness."
    },
    {
        id: "advisor2",
        name: "Tara Behrend",
        title: "Scientific Expert",
        affiliation: "Michigan State University",
        image: "images/advisors/tara-behrend.png",
        bio: "Tara Behrend is the John R Butler II Endowed Professor of Human Resources and Labor Relations at Michigan State University, where she leads the MSU Future of Work Initiative. Her research focuses on the effects of emerging technologies on the experience of work. She has published extensively on the topics of AI, surveillance, learning, and human-computer-interaction.",
        expertise: "Future of work, AI and emerging technologies, human-computer interaction, surveillance technologies, organizational psychology",
        contributions: "Chair of APA's Board on Scientific Affairs, member of the National Academies Board on Human-Systems Integration, former Program Director for the National Science Foundation overseeing Science of Organization and Future of Work programs. Editor of Human-Technology Partnerships at Work (Cambridge, 2025)."
    },
    {
        id: "advisor3",
        name: "Lyle Ungar",
        title: "Scientific Expert",
        affiliation: "University of Pennsylvania",
        image: "images/advisors/lyle-ungar.jpg",
        bio: "Lyle Ungar is a Professor of Computer and Information Science at the University of Pennsylvania, where he also holds secondary appointments in Psychology, Bioengineering, Genomics and Computational Biology, and Operations, Information and Decisions. His group uses natural language processing and explainable AI for psychological research, including analyzing social media and cell phone sensor data to better understand the drivers of physical and mental well-being and building socio-emotionally sensitive AI-based tutors and coaches.",
        expertise: "Natural language processing, explainable AI, affective computing, well-being analytics, AI tutors and coaches",
        contributions: "Pioneering work in using NLP and AI for psychological research, development of socio-emotionally sensitive AI systems, research on well-being drivers through social media and sensor data analysis."
    },
    {
        id: "advisor4",
        name: "Chris Burr",
        title: "Scientific Expert",
        affiliation: "The Alan Turing Institute",
        image: "images/advisors/chris-burr.jpeg",
        bio: "Dr Christopher Burr is a Senior Researcher in Trustworthy Systems at the Alan Turing Institute—the UK's national institute for data science and artificial intelligence. Dr Burr specialises in the trustworthy and ethical design, development, and deployment of data-driven technologies. He is also interested in exploring and understanding how data-driven technologies affect our decision-making and social institutions.",
        expertise: "Trustworthy AI, ethical AI design, AI governance, algorithmic trust, data ethics",
        contributions: "Project lead for the Trustworthy and Ethical Assurance programme and the Turing Commons. Co-lead for EPSRC Networks of Cardiovascular Digital Twins work package. Lead for the Uncertainty and Trust Special Interest Group."
    },
    {
        id: "advisor5",
        name: "Rafael Calvo",
        title: "Scientific Expert",
        affiliation: "Imperial College London",
        image: "images/advisors/rafael-calvo.png",
        bio: "Rafael Calvo is Professor and Chair of Engineering Design at Imperial College London. He focuses on systems for learning, wellbeing, and health. In the late 2000s, Calvo was amongst those who pioneered the field of Affective Computing, focusing on affect detection. He then led the way for a new field of 'Positive Computing' – approaches to design that support motivation and psychological well-being. He is currently developing text and voice agents for chronic illness, mental health, and dementia.",
        expertise: "Positive Computing, affective computing, well-being technology, learning systems, health technology",
        contributions: "Pioneer in Affective Computing and founder of Positive Computing field. Editor of Oxford Handbook of Affective Computing. Current work on AI agents for chronic illness, mental health, and dementia care."
    },
    {
        id: "advisor6",
        name: "Fred Oswald",
        title: "Scientific Expert",
        affiliation: "Rice University",
        image: "images/advisors/fred-oswald.jpg",
        bio: "Fred Oswald is an industrial-organizational psychologist and current Chair of the Board on Human Systems Integration (BOHSI) at the National Academies. He is a current Member of the National Artificial Intelligence Advisory Committee (NAIAC) which advises the President and the Secretary of Commerce on a wide range of topics relevant to AI and national prosperity. With consistent PI and co-PI funding from NSF, NIH, and other agencies, his core research addresses the role of AI and machine learning in work and workforce settings.",
        expertise: "Industrial-organizational psychology, human-AI teaming, AI in workforce settings, human systems integration",
        contributions: "Chair of National Academies Board on Human Systems Integration. Member of National AI Advisory Committee. Led publication of 'Human-AI Teaming: State of the Art and Research Needs' report."
    },
    {
        id: "advisor7",
        name: "Richard Zemel",
        title: "Scientific Expert",
        affiliation: "Columbia University",
        image: "images/advisors/richard-zemel.png",
        bio: "Richard Zemel is the Trianthe Dakolias Professor of Engineering and Applied Science in the Computer Science Department at Columbia University. He is the Director of the NSF AI Institute for Artificial and Natural Intelligence (ARNI), and was the co-founder and inaugural Research Director of the Vector Institute for Artificial Intelligence. He is a Canadian Institute for Advanced Research AI Chair and is on the Advisory Board of the Neural Information Processing Society.",
        expertise: "Machine learning, representation learning, graph-based ML, fair and robust ML, neural networks",
        contributions: "AI Lifetime Achievement Award (CAIA), Pioneer of AI Award (NVIDIA). Director of NSF AI Institute for Artificial and Natural Intelligence. Co-founder of Vector Institute. Foundational work on unsupervised learning and fair ML algorithms."
    },
    {
        id: "advisor8",
        name: "Munmun De Choudhury",
        title: "Scientific Expert",
        affiliation: "Georgia Institute of Technology",
        image: "images/advisors/munmun-dechoudhury.jpg",
        bio: "Munmun De Choudhury is J. Z. Liang Professor at the School of Interactive Computing and Co-Lead of Patient-Centered Care Delivery at the Pediatric Technology Center in Georgia Institute of Technology. Dr. De Choudhury is known for her contributions to the fields of computational social science, human-computer interaction, and digital mental health. She has contributed significantly to advancing the development of computational techniques for early detection and intervention in mental health, as well as in unpacking how social media use benefits or harms mental well-being.",
        expertise: "Computational social science, digital mental health, social media and well-being, HCI, mental health detection and intervention",
        contributions: "2023 SIGCHI Societal Impact Award, 2023 ICWSM and 2022 Web Science Trust Test-of-Time Awards, 2021 ACM-W Rising Star Award. Inducted into SIGCHI Academy in 2024. Contributor to U.S. Surgeon General's 2023 Advisory on Social Connection. Member of WHO Commission for Social Connection Technical Advisory Group."
    },
    {
        id: "advisor9",
        name: "Dorian Peters",
        title: "Scientific Expert",
        affiliation: "University of Cambridge",
        image: "images/advisors/dorian-peters.png",
        bio: "Dorian is Assistant Professor in Ethical Design at The University of Cambridge Institute for Technology and Humanity. She is also a Visiting Researcher at the Dyson School of Design Engineering at Imperial College London and a Senior Research Associate at the Intellectual Forum, Jesus College Cambridge. She is a human-computer interaction researcher who specialises in digital health and on design for wellbeing, autonomy and learning. She has worked in participatory digital health and mental health across age groups with communities in the UK, Australia, and Latin America.",
        expertise: "Ethical design, digital health, HCI, well-being design, design for autonomy and learning, whole-person health",
        contributions: "Co-author of Positive Computing: Technology for Wellbeing and Human Potential (MIT Press) and Interface Design for Learning (Pearson). Editorial board of AI & Ethics journal. Former Associate Director of Leverhulme Centre for the Future of Intelligence. Developer of METUX model for evaluating wellbeing impact of technologies and 15 Wellbeing Supportive Design Heuristics."
    }
];

// ============================================================================
// BLOG POSTS
// ============================================================================
// To add a new blog post, copy an entry and change the information

const blogPosts = [
    {
        id: "post1",
        title: "Why Short-term Happiness Isn't Enough",
        author: "Dr. Sarah Mitchell",
        date: "November 10, 2024",
        category: "Psychology",
        excerpt: "Exploring the distinction between momentary pleasure and lasting fulfillment in the context of AI-human interactions. Why optimizing for immediate gratification may undermine long-term flourishing.",
        content: `
            <p>In recent years, AI conversational agents have become increasingly sophisticated at providing immediate emotional support and engagement. However, a critical question remains: are we optimizing for the right outcomes?</p>
            
            <p>Research in positive psychology has long distinguished between hedonic well-being (pleasure and happiness) and eudaimonic well-being (meaning and flourishing). While both are important, our current AI systems predominantly focus on the former, potentially at the expense of the latter.</p>
            
            <h3>The Problem with Optimization for Engagement</h3>
            <p>When AI systems are designed primarily to maximize user engagement or immediate satisfaction, they may inadvertently encourage behaviors that feel good in the moment but don't contribute to long-term character development. This is similar to the difference between eating candy and eating nutritious food – one provides immediate pleasure, while the other contributes to lasting health.</p>
            
            <h3>What Character Virtues Require</h3>
            <p>Developing character virtues like courage, wisdom, temperance, and justice requires facing challenges, experiencing productive discomfort, and engaging in sustained effort over time. These are not always pleasant experiences in the moment, but they are essential for genuine human flourishing.</p>
            
            <p>Our research aims to develop AI systems that can support this deeper form of development while still being engaging and supportive.</p>
        `,
        image: "images/blog/happiness-fulfillment.jpg",
        featured: true
    },
    {
        id: "post2",
        title: "Technical Challenges in Virtue-Centered AI",
        author: "Dr. James Chen",
        date: "November 5, 2024",
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
        image: "images/blog/technical-challenges.jpg",
        featured: true
    },
    {
        id: "post3",
        title: "Aristotle Meets Machine Learning",
        author: "Dr. Emily Thompson",
        date: "October 28, 2024",
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
        image: "images/blog/aristotle-ai.jpg",
        featured: true
    },
    {
        id: "post4",
        title: "Measuring What Matters: New Approaches to Assessing Character Development",
        author: "Dr. Michael Rivera",
        date: "October 15, 2024",
        category: "Research Methods",
        excerpt: "Traditional metrics aren't sufficient for evaluating character development. Here's how we're developing new assessment approaches for virtue-centered AI.",
        content: `
            <p>One of the biggest challenges in our research is measurement. How do you assess whether an AI system is actually helping people develop character virtues?</p>
            
            <h3>Beyond Self-Report</h3>
            <p>While self-report measures have their place, they're insufficient for capturing genuine character development. People aren't always accurate judges of their own virtue development, and they may report what they think researchers want to hear.</p>
            
            <h3>Behavioral Assessment</h3>
            <p>Our approach includes behavioral measures – observing how people act in various situations. This includes analyzing patterns in daily phone use, communication styles, decision-making in simulated scenarios, and more.</p>
            
            <h3>Longitudinal Design</h3>
            <p>Character development takes time. Our studies span months, not days, allowing us to see genuine changes in behavior and thinking patterns.</p>
        `,
        image: "images/blog/measuring-character.jpg",
        featured: false
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
    contactEmail: "contact@florea-ai.org",
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