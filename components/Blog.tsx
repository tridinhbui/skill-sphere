"use client";

import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  icon: string;
  color: string;
  content: {
    keyAreas?: string[];
    careerPaths?: string[];
    trends?: string;
    technicalSkills?: string[];
    softSkills?: string[];
    highSchool?: string[];
    college?: string[];
    references?: string[];
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "business-finance",
    title: "Business, Finance, and Entrepreneurship",
    category: "Career Insights",
    excerpt:
      "Explore careers in business management, finance, banking, and entrepreneurship. Learn about key areas, career paths, trends, and how to get started.",
    icon: "💼",
    color: "from-blue-500 to-blue-600",
    content: {
      keyAreas: [
        "Business: Management/Administration, Operations, Consulting, Advertising and Marketing, Economics, Human Resources, Hospitality, Supply Chain Management, Sales, Insurance",
        "Finance: Banking, Investments, Accounting, Financial Planning",
        "Entrepreneurship: Startups, Innovation, Small Business Manager, Venture Capitalist",
      ],
      careerPaths: [
        "Business: Management Analyst, Marketing Manager, Operations Coordinator, Project Manager",
        "Finance: Accountant, Financial Advisor, Stockbroker, Financial Risk Analyst, Risk Manager, Investment Analyst, Investment Banker",
        "Entrepreneurship: Startup Founder, Product Manager, Venture Capital Analyst, Business Development Manager",
      ],
      trends:
        "This industry is going through major transformations as generative AI and automation are reshaping many traditional roles and business models, especially in marketing, operations, and finance. Employment in business and financial operations is expected to grow faster than the 4% average for all occupations between 2023 and 2033, adding almost 1.7 million new jobs over the decade. More diverse populations are starting to launch businesses, and millions of new business applications have been filed by entrepreneurs over the recent years; 5.2 million applications were filed in 2024, which reflects significant growth in this industry. At the same time, the increasing integration of digital tools, AI, and automation in business operations implies the importance of tech skills and adaptability in future roles.",
      technicalSkills: [
        "Data analysis",
        "Digital Literacy (spreadsheets, marketing and finance tools)",
        "Business Analytics",
        "Project Management",
        "Business Strategy and Operations",
        "Financial Modeling and Forecasting",
        "Accounting and Budgeting",
        "Investment Analysis",
      ],
      softSkills: [
        "Leadership",
        "Decision Making",
        "Communication",
        "Presentation skills",
        "Critical Thinking and Problem-Solving",
        "Conflict Resolution",
        "Adaptability",
        "Growth Mindset",
      ],
      highSchool: [
        "Take courses in economics, accounting, business fundamentals, data literacy, statistics",
        "Join student organizations like Future Business Leaders of America (FBLA), Distributive Education Clubs of America, entrepreneurship clubs, etc",
        "Participate in business competitions or mini ventures like charity events or marketing challenges to gain practical exposure",
        "Explore summer internships or job shadowing opportunities in local companies to see business/finance/entrepreneurship principles in action",
        "Start building digital literacy skills, including spreadsheets, basic data analysis, digital marketing basics, etc",
      ],
      college: [
        "Choose a major in the areas of business or finance, such as Business Administration, Finance, Entrepreneurship, Data Science, or combined programs",
        "Consider minors or electives in data analytics, marketing analytics, computer science, operations management, entrepreneurship",
        "Join business or finance related student organizations",
        "Seek internships in corporate businesses, consulting, operations, financial services, and startups",
        "Start a side project or small venture - this shows initiative, builds practical experience, and strengthens your resume!",
        "Attend speaker events, business conferences, network with students and professionals in the field, connect with alumni in business/finance/entrepreneurship roles",
      ],
      references: [
        "https://www.indeed.com/career-advice/finding-a-job/business-careers",
        "https://www.umassglobal.edu/blog-news/9-different-types-business-degrees-and-career-paths",
        "https://orfalea.calpoly.edu/student-services/career-readiness/career-paths",
        "https://www.wgu.edu/career-guide/business.html",
        "https://www.bethel.edu/blog/diverse-career-paths-you-can-pursue-with-a-business-degree/",
        "https://sbecouncil.org/about-us/facts-and-data/",
        "https://www.kaplancollectionagency.com/business-advice/68-entrepreneurship-statistics-for-2025",
        "https://www.bls.gov/careeroutlook/2025/article/business-career-options",
        "https://summer.harvard.edu/blog/summer-business-programs-for-high-school/",
      ],
    },
  },
  {
    id: "engineering",
    title: "Engineering",
    category: "Career Insights",
    excerpt:
      "Discover engineering careers from civil to software engineering. Learn about specializations, career paths, and the growing demand in this field.",
    icon: "⚙️",
    color: "from-orange-500 to-orange-600",
    content: {
      keyAreas: [
        "Civil and Industrial Engineering",
        "Mechanical and Manufacturing Engineering",
        "Electrical and Embedded Systems Engineering",
        "Software and Systems Engineering",
        "Sustainability Engineering",
      ],
      careerPaths: [
        "Entry Level/Technical Support: Junior Engineer, Engineering Technician",
        "Design and Project Engineering: Project Engineer, Design Engineer, Systems Engineer, Embedded Systems Engineer",
        "Core Engineering Disciplines: Mechanical Engineer, Industrial Engineer, Civil Engineer",
        "Specialized Fields: Chemical Engineer, Petroleum Engineer, Environmental Engineer, Nuclear Engineer, Aeronautical Engineer, Marine Engineer, Biomedical Engineer",
        "Leadership and Management: Director of Engineering, Chief Engineering Officer",
      ],
      trends:
        "The global engineering market was estimated to be 3.41 trillion USD in 2024 and is projected to reach 4.71 USD by 2030, showing that it is rapidly growing. In the U.S, the market is expected to grow at around 6% per year between 2025 and 2030. Some of the major drivers for this include the shift toward sustainability engineering and renewable energy, embedded systems, and the adoption of AI, IoT, and other technologies for the development of product and systems integrations.",
      technicalSkills: [
        "Proficiency in engineering fundamentals (math, physics, materials science)",
        "Computer-Aided Design (CAD)/Computer-Aided Engineering (CAE) tools",
        "Simulation Software (e.g. SolidWorks, ANSYS)",
        "Systems Thinking and Integration (hardware + software)",
        "Data Analysis/Modeling",
      ],
      softSkills: [
        "Critical Thinking",
        "Problem-solving skills",
        "Teamwork and Collaboration across disciplines",
        "Communication",
        "Adaptability",
      ],
      highSchool: [
        "Focus on strong math (especially calculus), physics, computer science, and technology courses",
        "Join robotics clubs, engineering clubs, STEM competitions, and build hands-on projects",
        "Develop digital literacy skills, including basic programming, CAD tutorials, simulation tools",
        "Explore summer internships or job shadowing opportunities in engineering firms, labs, or local businesses",
      ],
      college: [
        "Choose an engineering major, such as mechanical, electrical, civil, systems, environmental, or biomedical engineering, depending on your interest",
        "Consider minors or electives in data analysis, computer science, sustainability, or embedded systems",
        "Join student chapters of professional societies like the Institute of Electrical and Electronics Engineers (IEEE) or American Society of Mechanical Engineers (ASME)",
        "Seek internships or co-ops with engineering firms, companies, tech companies, manufacturing plants",
        "Build a portfolio of projects, design work, or research in your field - strengthens your resume and shows initiative",
      ],
      references: [
        "https://www.indeed.com/career-advice/finding-a-job/types-of-engineering-careers",
        "https://discovere.org/engineering-careers/",
        "https://www.bls.gov/ooh/architecture-and-engineering/",
        "https://bigfuture.collegeboard.org/explore-careers/get-started/career-paths-for-popular-majors/10-jobs-engineering-majors",
        "https://www.intuit.com/blog/innovative-thinking/20-popular-engineering-careers-to-consider/",
        "https://www.businessresearchinsights.com/market-reports/engineering-services-market-124426",
        "https://www.grandviewresearch.com/horizon/outlook/engineering-services-market/united-states",
        "https://www.grandviewresearch.com/industry-analysis/engineering-services-market-report",
        "https://www.indeed.com/career-advice/career-development/how-to-prepare-for-engineering-in-high-school",
      ],
    },
  },
  {
    id: "technology-ai",
    title: "Technology, Computer Science, and AI",
    category: "Career Insights",
    excerpt:
      "Explore the rapidly growing field of technology, computer science, and AI. Learn about software development, data science, machine learning, and cybersecurity careers.",
    icon: "💻",
    color: "from-purple-500 to-purple-600",
    content: {
      keyAreas: [
        "Software Development and Engineering",
        "Data Science and Analytics",
        "Artificial Intelligence/Machine Learning",
        "Cybersecurity and Networks",
        "Cloud Computing",
        "DevOps/MLOps",
      ],
      careerPaths: [
        "Junior Software Engineer/Developer",
        "Data Analyst/Data Scientist",
        "Machine Learning Engineer",
        "AI Specialist",
        "DevOps/MLOps Engineer",
        "Product Manager/Technology Lead",
      ],
      trends:
        "The global AI market size was estimated to be around 638.23 billion USD in 2024, and projected to increase to 3.68 trillion USD by 2034. Today, approximately 90% of software development professionals use AI in their workflows. AI and big data are now considered to be among the fastest-growing skills in the upcoming years, besides tech literacy, cybersecurity, and other such skills.",
      technicalSkills: [
        "Programming languages (Python, Java, etc)",
        "Understanding of AI concepts, ethics of AI, model deployment",
        "Algorithms, data structures, machine learning fundamentals",
        "Cloud platforms and DevOps tools",
        "Cybersecurity and network fundamentals",
      ],
      softSkills: [
        "Adaptability",
        "Problem solving",
        "Critical thinking",
        "Collaboration",
        "Communication",
        "Curiosity",
        "Creativity",
      ],
      highSchool: [
        "Take courses in math (especially discrete math), computer science, programming, and computational thinking",
        "Join tech clubs, coding clubs, robotics teams, hackathons",
        "Take online courses or certifications like introductory programming, data science, AI basics",
        "Start building a portfolio of small projects, apps, or games",
      ],
      college: [
        "Choose a major such as Computer Science, Data Science, Software Engineering, or a specialized AI track",
        "Take courses in AI/ML, cybersecurity, cloud computing, or DevOps",
        "Join developer communities, attend tech startups or hackathons",
        "Network with peers and professionals in the field",
        "Seek internships in tech or AI companies/startups where you can gain hands-on experience, such as building a full stack app, working with data pipelines, and contributing to machine learning models",
        "Build a portfolio of personal tech projects to show initiative",
        "Stay current with trends in technology",
      ],
      references: [
        "https://onlinedegrees.sandiego.edu/artificial-intelligence-jobs/",
        "https://www.coursera.org/articles/artificial-intelligence-jobs",
        "https://www.indeed.com/career-advice/finding-a-job/jobs-in-ai",
        "https://www.indeed.com/career-advice/finding-a-job/best-computer-science-student-jobs",
        "https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/",
        "https://www.precedenceresearch.com/artificial-intelligence-market",
        "https://www.codewizardshq.com/the-high-school-freshman-guide-to-preparing-for-a-tech-career/",
      ],
    },
  },
  {
    id: "healthcare",
    title: "Healthcare",
    category: "Career Insights",
    excerpt:
      "Discover careers in healthcare from clinical care to health informatics. Learn about nursing, medicine, administration, and the growing role of technology in healthcare.",
    icon: "🏥",
    color: "from-red-500 to-red-600",
    content: {
      keyAreas: [
        "Clinical Care and Patient Services: e.g. nurses, physicians, front-line care",
        "Diagnostic Services",
        "Healthcare Administration and Operations: managing hospitals, clinics, health systems, logistics",
        "Health Informatics: health data management, telehealth, electronic health records, AI in healthcare",
        "Biotech/Pharmaceuticals: research and development of drugs, therapies, and biotech innovations",
      ],
      careerPaths: [
        "Nursing and Direct Patient Care: Nursing Assistant, Registered Nurse, Nurse Practitioner, Physician Assistant",
        "Physicians and Specialists: Physician, Surgeon, Dentist, Optometrist, Audiologist",
        "Diagnostic Roles: Phlebotomy Technician, Ultrasonographer, Radiology/Imaging Technologist",
        "Healthcare Administration and Informatics: Clinical Director, Hospital Executive, Health Informatics Specialist, Data Analyst",
        "Pharmacy: Pharmacist, Pharmacy Technician",
        "Therapy and Wellness: Nutritionist, Physical Therapist, Occupational Therapist",
      ],
      trends:
        "Over the years, digital technologies have accelerated various areas of healthcare; in 2025, more than 70% of healthcare executives across the globe report a key focus in improving patient engagement, operational efficiencies, and incorporating AI and automation. Telehealth and remote patient monitoring have become more central in today's world, though patient experience is shifting; only 40% of U.S. adults feel that they are being 'cared for' by the system, which shows the need for more human-centered care. Now, professionals who can combine clinical or technical expertise with data skills, empathy, and adaptability changing healthcare models will be especially valued and in demand.",
      technicalSkills: [
        "Clinical Skills (for care roles)",
        "Data Analytics, Health Informatics",
        "Familiarity with Digital Tools",
        "AI Applications in Healthcare",
      ],
      softSkills: [
        "Empathy",
        "Communication",
        "Leadership",
        "Decision-making",
        "Teamwork across clinical, technical, and administrative teams",
        "Adaptability to New Technologies and Regulations",
        "Understanding of Ethics (especially around AI and patient data)",
        "Critical Thinking",
      ],
      highSchool: [
        "Take courses in biology, chemistry, mathematics, statistics, and computer/tech literacy",
        "Join health-related clubs or STEM clubs to show your interest in the field",
        "Seek volunteering opportunities in hospitals, clinics, nursing homes, etc",
        "Seek internships with or job shadowing opportunities with health care professionals",
        "Develop basic digital skills, such as basic programming, data interpretation, etc",
      ],
      college: [
        "Choose a major aligned with your interest in healthcare, like Nursing, Medicine (for pre-med track), Biomedical Engineering, Health Informatics, Biology, Chemistry, Psychology, Neuroscience, or related fields (to be able to go to medical school to become a physician, you can major in anything as long as you fulfill the prerequisite courses)",
        "For physicians: complete pre-med requirements, then medical school, following by residency/fellowship in medical speciality",
        "Seek volunteer and internship opportunities in health care settings",
        "Join student health-organizations and professional societies in the field",
        "Participate in research projects",
        "Network with peers and professionals in the area",
      ],
      references: [
        "https://college.mayo.edu/academics/explore-health-care-careers/careers-a-z/",
        "https://www.bls.gov/ooh/healthcare/",
        "https://explorehealthcareers.org/",
        "https://www.ultimatemedical.edu/healthcare-career-guide/",
        "https://www.youtube.com/watch?v=KMQQ5TD_9xk&t=1s",
        "https://www.indeed.com/career-advice/finding-a-job/career-paths-in-the-medical-field",
        "https://www.zs.com/future-of-health-report-2025",
        "https://www.deloitte.com/us/en/insights/industry/health-care/life-sciences-and-health-care-industry-outlooks/2025-global-health-care-executive-outlook.html",
        "https://students-residents.aamc.org/resources-k-12-students/four-things-high-school-student-can-do-prepare-medical-school",
      ],
    },
  },
  {
    id: "creative-media",
    title: "Creative Media, Digital Design, and Communications",
    category: "Career Insights",
    excerpt:
      "Explore careers in graphic design, UX/UI, video production, digital marketing, and game design. Learn how creativity meets technology in today's digital world.",
    icon: "🎨",
    color: "from-pink-500 to-pink-600",
    content: {
      keyAreas: [
        "Graphic and Visual Design",
        "Motion Graphics, Video Production, and Animation",
        "User Experience (UX) and User Interface (UI) Design",
        "Digital Marketing",
        "Social Media Communications",
        "Game Design",
      ],
      careerPaths: [
        "Graphic and Visual Design: Graphic Designer, Visual Designer",
        "User Experience and Interface Design: UX/UI Designer, Brand/Experience Designer",
        "Motion and Animation: Motion Graphics Designer, Animator, Video Producer",
        "Digital Media and Marketing: Social Media Manager, Digital Marketing Specialist",
        "Emerging and Interactive Design: Augmented Reality (AR)/Virtual Reality (VR) Designer",
      ],
      trends:
        "This career industry has been evolving quite rapidly, with over half of U.S. ad spending shifting toward social media and video platforms that use AI and advanced technologies to better match audiences and improve audience engagement in recent years. The integration of both creativity and technology in creative media and digital design has become more important in today's age than ever, as such roles are now expected to merge both types of skills in their work, being able to incorporate digital tools, UX design, and working across multiple platforms.",
      technicalSkills: [
        "Proficiency in design software such as Adobe Creative Cloud, Photoshop, Illustrator, After Effects, InDesign",
        "Motion graphics and animation tools like Blender, Maya, After Effects",
        "Video Editing Skills",
        "Digital Marketing Tools and Analytics",
      ],
      softSkills: [
        "Creativity",
        "Communication",
        "Adaptability",
        "Problem solving",
        "Collaboration",
      ],
      highSchool: [
        "Take courses/projects in graphic design, digital art, computer graphics, media technology, video production, etc",
        "Join clubs and participate in competitions/design challenges related to art, photography, graphics, video production, animation, design, to show initiative and gain experience",
        "Build a portfolio of personal projects, such as graphics, short videos, animations, social-media content etc",
        "Practice design and video tools like Adobe Creative Suite, video editing, web design basics, and simple motion graphics",
      ],
      college: [
        "Choose a major such as Digital Media, Graphic Design, Game Design, Digital Marketing, Multimedia Communications, etc",
        "Take electives or minors in Animation, UX/UI Design, Motion Graphics, Game Design, or Data Analytics",
        "Build a portfolio that includes visuals, animations, social media content, brand work, etc",
        "Seek internships at company marketing teams, creative agencies, game/VR companies, digital studios",
        "Join creative communities and network with peers and professionals in your area",
      ],
      references: [
        "https://www.mediabistro.com/jobs",
        "https://www.screenskills.com/job-profiles/browse/creative-industries/",
        "https://www.bls.gov/ooh/media-and-communication/",
        "https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey/2025.html",
        "https://www.roberthalf.com/us/en/insights/research/data-reveals-which-marketing-and-creative-roles-are-in-highest-demand",
        "https://www.careervillage.org/questions/1144248/what-classes-should-i-take-in-highschool-if-i-want-to-become-a-creative-director",
      ],
    },
  },
];

const haNguyenPost = {
  id: "ha-nguyen-ucla",
  title: "Building Confidence, Connections, and Career Skills",
  subtitle: "Insights from UCLA Student Ha Nguyen",
  category: "Student Stories",
  icon: "🌟",
  color: "from-indigo-500 to-indigo-600",
  content: {
    introduction:
      "Starting college, applying for internships, and seeking career opportunities can be both exciting and stressful. For Ha Nguyen, a Business Economics and Value Investing student at UCLA, this journey has been full of valuable lessons about confidence, authenticity, and organization. From navigating the pressures of college applications to landing an internship at JP Morgan to volunteering at various youth mentorship programs, Ha has turned the hurdles she faced along the way into meaningful growth opportunities. In this post, Ha shares insights and personal advice on how to navigate through these chapters of one's educational journey, that anyone can learn from, regardless of which career industry you find yourself leaning towards.",
    sections: [
      {
        title: "Applying to College",
        content:
          "Like many students, Ha experienced a lot of pressure during her college application process, especially because she attended a specialized school where expectations were quite high. Ha found essay writing to be one of her biggest challenges during this process, often experiencing 'writer's block'. To overcome this common problem, Ha recommends building an 'experience bank', in which she recorded her thoughts and experiences on a daily basis in a journal. This way, she had plenty of real stories to draw from when the time came to write her college essays.",
      },
      {
        title: "Ha's Experience in College",
        content:
          "When Ha first began college, she admitted that she wished she had known how to organize her work better, as understanding her school's system early on would have made the transition from high school to college a lot smoother. One of Ha's biggest insights was learning that where you study can matter as much as what you study. Choosing a major and location that fit well together can help open doors for internships, networking opportunities, and future careers. For example, students interested in Economics or Finance would be better off looking at colleges on the East Coast, especially New York City, due its strong networks and job opportunities. Students studying Computer Science or Data Sciences would gain several advantages going to colleges on the West Coast, given its various tech industry connections.",
      },
      {
        title: "Future Experience at JP Morgan",
        content:
          "Ha's upcoming Investment Banking internship at JP Morgan will mark an exciting step in her career journey, where she looks forward to building various technical skills and learning valuable lessons about communication, confidence, and authenticity. Along the way, Ha has approached networking with courage, reaching out through cold emails and cold calls, something quite common in the banking sector. Over time, she expanded her connections through UCLA students, alumni, and LinkedIn. If you find yourself at a similar stage during your education, Ha's best advice is to be authentic. Instead of trying to sound overly impressive, she focused on being herself, enabling her unique qualities to shine, and showing genuine interest in others. Doing this helped her stand out throughout various stages of her educational and career path. Being yourself can also serve you well during interviews, in which Ha notes that personality is often a key factor to most candidates having relatively similar resumes. In addition, Ha focused on building technical knowledge and choosing internships that aligned with her goals in finance, which really helped her stand out during recruitment. She believes that success in job applications starts with having clarity in which industry you want to work in and why.",
      },
      {
        title: "Giving Back Through Mentorship: Tra Da Mentor and UpYouth",
        content:
          "Ha continues to share her knowledge through Tra Da Mentor and UpYouth, where she mentors younger students - two college freshmen and one high school sophomore - who are exploring careers in finance. She helps students choose career paths and prepare academically for their future goals. For Ha, mentorship is a lot about passing on what she has learned throughout her experiences and helping guide others to find their path.",
      },
    ],
  },
};

const nguyenNhatPost = {
  id: "nguyen-nhat-ucl",
  title: "Shaping Future in Healthcare: An Academic Journey to UCL MPharm",
  subtitle: "from Nguyen Nhat",
  category: "Student Stories",
  icon: "💊",
  color: "from-emerald-500 to-emerald-600",
  content: {
    introduction:
      "The journey to choosing a career path in healthcare requires careful consideration, self-reflection, and real-world experience. For Nguyen Nhat, the decision to pursue the MPharm program at University College London (UCL) came after thoughtful evaluation of different healthcare pathways and hands-on experience in various pharmacy settings. In this post, Nguyen Nhat shares insights about the UK university application process, the importance of early preparation, and how internship experiences helped shape a clear career direction in hospital pharmacy.",
    sections: [
      {
        title: "Academic Journey and UK University Direction",
        content:
          "The MPharm program was the most suitable choice for me at this stage of my academic journey. Pursuing Medicine requires a very long training period and creates significant financial pressure. In contrast, the MPharm program provides a professional and accredited qualification while still allowing me to work in the healthcare field and later explore other career paths aligned with my interests. Among the five universities I considered in the United Kingdom, I chose University College London for several reasons. First, location played an important role. I previously studied in Australia and realized that I do not thrive in quiet or isolated cities. London offers a dynamic environment with many academic, clinical, and professional opportunities, especially in the field of pharmacy. In addition, UCL has a strong academic reputation and global recognition, particularly in healthcare and pharmaceutical sciences. UCL is widely regarded as one of the top universities in the United Kingdom, alongside Oxford, Cambridge, Imperial College London, and the London School of Economics. Compared to other options, UCL provides broader exposure to hospitals, research institutions, and professional networks relevant to pharmacy.",
      },
      {
        title: "Preparing for a UK University Application",
        content:
          "I believe that starting the application process as early as possible is essential. I was fortunate to have been involved in a wide range of activities from an early stage and to be genuinely passionate about what I did. This helped me understand both my personal strengths and what universities such as UCL look for in applicants. When writing my personal statement, I was very selective about what to include and what to leave out. Authenticity and consistency between academic interests, extracurricular activities, and future goals are extremely important. I also received support from Crimson, particularly through mock interviews and preparation for admission tests and interview formats commonly used for medical and healthcare-related programs in the United Kingdom, such as the UCAT and Multiple Mini Interviews. From this experience, I learned that honesty is crucial when applying to medical and healthcare programs. If you do not know the answer to an interview question, it is better to acknowledge that and demonstrate a growth mindset and willingness to learn, rather than attempting to give an uncertain response.",
      },
      {
        title: "Internship Experience and How It Shaped My Career Decision",
        content:
          "Throughout my exploration of pharmacy, I gained experience in several settings, including hospital pharmacy, research laboratories, and community pharmacies. At the beginning, I was unsure which pathway suited me best, so I decided to experience all three. At FV Hospital in Vietnam, I worked in the hospital pharmacy, including both dispensing and research-related tasks. Later, I worked at Essentials London Pharmacy and Clinic, a community pharmacy in the United Kingdom. Through these experiences, I realized that hospital pharmacy was the environment I enjoyed the most, while laboratory research was the least suitable for me due to its restrictive structure and high-pressure nature. At FV Hospital's central pharmacy, I was responsible for preparing medications for inpatients, including critically ill patients, post-surgical patients, and new mothers after childbirth. Each day, pharmacists processed approximately 600 inpatient prescriptions. The workflow required one person to prepare the medication and another to double-check it to ensure patient safety. In addition, pharmacists provided medication counseling to help patients understand the purpose and correct use of their medications. This direct and meaningful impact on patient care helped me clearly define my career direction.",
      },
      {
        title: "Key Skills for First-Year University Students",
        content:
          "One of the most important lessons I learned is the value of flexibility. What we believe is correct may be valid in one environment, but when entering a new academic or cultural setting, especially an international one, it is essential to remain open-minded. Recognizing early when something does not suit you allows you to explore new opportunities more effectively. Some opportunities are easier to access at earlier stages, so preparing your mindset in advance and being willing to adapt before it is too late is extremely important.",
      },
      {
        title: "Advice for Students",
        content:
          "In my view, students need to understand how systems operate and the mechanisms behind them. Completely replicating another person's path is difficult, but students can learn from the mistakes of those who struggled and avoid repeating them. At the same time, learning from the strengths of successful individuals can help students navigate the system more effectively. This understanding not only helps students survive within the system but also enables them to grow into leaders within it.",
      },
    ],
  },
};

const nhuQuynhPost = {
  id: "nhu-quynh-mckinsey",
  title: "Entering Consulting: Nhu Quynh's Experience from Kelley to McKinsey",
  subtitle: "from Nhu Quynh",
  category: "Student Stories",
  icon: "💼",
  color: "from-amber-500 to-amber-600",
  content: {
    introduction:
      "The path to consulting requires strong analytical skills, clear communication, and the ability to solve complex business problems. For Nhu Quynh, a student at Indiana University Kelley School of Business, this journey began with exploring different business career paths and culminated in securing a Business Analyst Intern position at McKinsey. In this post, Quynh shares her experience choosing Kelley, how her first professional exposure clarified her career direction, and advice for students interested in consulting.",
    sections: [
      {
        title: "Choosing Indiana University Kelley?",
        content:
          "Quynh chose Indiana University Kelley School of Business because of its strong emphasis on analytical training and experiential learning. At the time of applying to university, she was interested in business but unsure which specific career path to pursue. Kelley offered a balanced curriculum that combined quantitative coursework with teamwork based projects, allowing her to explore multiple interests before making a long term decision. During her early semesters, Quỳnh focused on building a solid foundation in accounting, statistics, and business analytics. These courses helped her understand how data driven decisions shape organizational outcomes and sparked her interest in solving complex business problems.",
      },
      {
        title: "First Professional Exposure and Career Clarity",
        content:
          "Quynh's first professional experience was an internship in a corporate strategy team at a regional company in Ho Chi Minh City, Vietnam. In this role, she supported market research and competitive analysis for expansion initiatives. While the experience strengthened her analytical skills, it also highlighted her desire to work on diverse problems across industries. This realization encouraged her to explore management consulting more seriously. Consulting appealed to Quỳnh because it offered exposure to different business contexts and the opportunity to learn at a fast pace while working closely with decision makers.",
      },
      {
        title: "Transition to McKinsey as a Business Analyst Intern",
        content:
          "After completing the recruitment process, Quynh joined McKinsey as a Business Analyst Intern. The transition from university to a high intensity consulting environment was challenging. The pace of work was fast, and expectations were consistently high. However, her training at Indiana University Kelley prepared her well. She was able to break down ambiguous problems, collaborate effectively with diverse teams, and continuously refine her thinking through feedback. Each project strengthened her confidence and reinforced her interest in consulting.",
      },
      {
        title: "Advice for Students",
        content:
          "Quynh advises students to build strong analytical skills, including problem solving, quantitative thinking, and data analysis. She emphasizes the importance of clear and structured communication, especially giving direct answers and presenting ideas concisely. Students should practice organizing their thoughts logically in both writing and speaking. She also encourages students to actively use school resources such as career services, alumni networks, and student organizations to strengthen their resumes.",
      },
    ],
  },
};

const helpfulResources = [
  {
    title: "Indeed (YouTube Channel)",
    description: "Career advice, job search tips, and industry insights",
    url: "https://www.youtube.com/@Indeed",
    type: "YouTube",
  },
  {
    title: "Indeed - Career Advice (Website)",
    description: "Comprehensive career guidance and interview preparation",
    url: "https://www.indeed.com/career-advice/interviewing",
    type: "Website",
  },
  {
    title: "BigFuture (College Board)",
    description: "Explore careers, colleges, and plan your future",
    url: "https://bigfuture.collegeboard.org/",
    type: "Website",
  },
  {
    title: "CrashCourse - Business: Soft Skills",
    description: "Learn essential soft skills for business and career success",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM",
    type: "YouTube",
  },
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Career Insights & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore career paths, industry trends, and real stories from students
            navigating their professional journeys
          </p>
        </div>

        {/* Student Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Student Stories
          </h3>
          <div className="space-y-12">
            {/* Ha Nguyen Story */}
            <div
              className={`bg-gradient-to-r ${haNguyenPost.color} text-white rounded-2xl shadow-2xl overflow-hidden`}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{haNguyenPost.icon}</span>
                  <div>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                      {haNguyenPost.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {haNguyenPost.title}
                </h3>
                <p className="text-xl opacity-90 mb-6">{haNguyenPost.subtitle}</p>
                <p className="text-lg leading-relaxed mb-8 opacity-95">
                  {haNguyenPost.content.introduction}
                </p>

                <div className="space-y-6">
                  {haNguyenPost.content.sections.map((section, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-3">{section.title}</h4>
                      <p className="leading-relaxed opacity-95">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nguyen Nhat Story */}
            <div
              className={`bg-gradient-to-r ${nguyenNhatPost.color} text-white rounded-2xl shadow-2xl overflow-hidden`}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{nguyenNhatPost.icon}</span>
                  <div>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                      {nguyenNhatPost.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {nguyenNhatPost.title}
                </h3>
                <p className="text-xl opacity-90 mb-6">{nguyenNhatPost.subtitle}</p>
                <p className="text-lg leading-relaxed mb-8 opacity-95">
                  {nguyenNhatPost.content.introduction}
                </p>

                <div className="space-y-6">
                  {nguyenNhatPost.content.sections.map((section, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-3">{section.title}</h4>
                      <p className="leading-relaxed opacity-95">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nhu Quynh Story */}
            <div
              className={`bg-gradient-to-r ${nhuQuynhPost.color} text-white rounded-2xl shadow-2xl overflow-hidden`}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{nhuQuynhPost.icon}</span>
                  <div>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                      {nhuQuynhPost.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {nhuQuynhPost.title}
                </h3>
                <p className="text-xl opacity-90 mb-6">{nhuQuynhPost.subtitle}</p>
                <p className="text-lg leading-relaxed mb-8 opacity-95">
                  {nhuQuynhPost.content.introduction}
                </p>

                <div className="space-y-6">
                  {nhuQuynhPost.content.sections.map((section, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-3">{section.title}</h4>
                      <p className="leading-relaxed opacity-95">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Insights Posts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industry Career Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${post.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{post.icon}</div>
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <h4 className="text-2xl font-bold mt-4 mb-2">{post.title}</h4>
                  <p className="text-white/90 text-sm">{post.excerpt}</p>
                </div>

                <div className="p-6">
                  <button
                    onClick={() => togglePost(post.id)}
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all"
                  >
                    {expandedPost === post.id ? "Show Less" : "Read More"}
                  </button>
                </div>

                {expandedPost === post.id && (
                  <div className="px-6 pb-6 space-y-6 max-h-[600px] overflow-y-auto">
                    {post.content.keyAreas && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Key Areas:</h5>
                        <ul className="space-y-2">
                          {post.content.keyAreas.map((area, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.careerPaths && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Career Paths:</h5>
                        <ul className="space-y-2">
                          {post.content.careerPaths.map((path, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{path}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.trends && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Trends:</h5>
                        <p className="text-gray-700 leading-relaxed">
                          {post.content.trends}
                        </p>
                      </div>
                    )}

                    {post.content.technicalSkills && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">
                          Technical Skills:
                        </h5>
                        <ul className="space-y-2">
                          {post.content.technicalSkills.map((skill, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.softSkills && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Soft Skills:</h5>
                        <ul className="space-y-2">
                          {post.content.softSkills.map((skill, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.highSchool && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">
                          High School Pathways:
                        </h5>
                        <ul className="space-y-2">
                          {post.content.highSchool.map((item, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.college && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">
                          College Pathways:
                        </h5>
                        <ul className="space-y-2">
                          {post.content.college.map((item, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {post.content.references && (
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">References:</h5>
                        <ul className="space-y-2">
                          {post.content.references.map((ref, idx) => (
                            <li key={idx}>
                              <a
                                href={ref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:underline text-sm break-all"
                              >
                                {ref}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Helpful Resources */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Helpful Resources</h3>
          <p className="text-center text-primary-100 mb-8">
            Links to websites and YouTube channels that provide guidance and
            information on various career fields and developing soft skills and
            employability skills
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpfulResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold">{resource.title}</h4>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                    {resource.type}
                  </span>
                </div>
                <p className="text-primary-50 text-sm mb-3">
                  {resource.description}
                </p>
                <div className="text-primary-200 text-xs break-all">
                  {resource.url}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

