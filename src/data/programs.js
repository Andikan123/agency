const programs = [
  {
    id: "medicine",
    name: "Medicine",
    category: "Health Sciences",
    level: "Undergraduate",
    duration: "6 Years",
    degree: "Doctor of Medicine",
    description:
      "Prepare for a career in medicine through comprehensive medical education, clinical training and practical experience.",

    overview:
      "Medicine is designed for students who want to develop the knowledge, clinical skills and professional foundation required to pursue a career as a medical doctor.",

    highlights: [
      "Strong foundation in medical sciences",
      "Clinical and practical learning",
      "Access to modern healthcare facilities",
      "Opportunities for international students",
    ],

    careerOptions: [
      "Medical Doctor",
      "Clinical Researcher",
      "Medical Officer",
      "Public Health Professional",
      "Healthcare Administrator",
    ],

    universities: [
      "near-east-university",
      "university-of-kyrenia",
      "eastern-mediterranean-university",
    ],

    requirements: [
      "Secondary school certificate",
      "Strong background in science subjects",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/medicine.jpg",
  },

  {
    id: "nursing",
    name: "Nursing",
    category: "Health Sciences",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor of Science in Nursing",
    description:
      "Develop the clinical knowledge, practical skills and professional confidence needed to provide high-quality nursing care.",

    overview:
      "Nursing combines theoretical education with clinical practice to prepare students for careers in hospitals, community health, public health and other healthcare environments.",

    highlights: [
      "Clinical nursing education",
      "Practical healthcare experience",
      "Patient-centered care training",
      "Opportunities across different healthcare settings",
    ],

    careerOptions: [
      "Registered Nurse",
      "Public Health Nurse",
      "Clinical Nurse",
      "Community Health Nurse",
      "Nurse Educator",
    ],

    universities: [
      "near-east-university",
      "university-of-kyrenia",
      "cyprus-international-university",
      "eastern-mediterranean-university",
      "final-international-university",
      "european-university-of-lefke",
    ],

    requirements: [
      "Secondary school certificate",
      "Science-related subjects preferred",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/nursing.jpg",
  },

  {
    id: "pharmacy",
    name: "Pharmacy",
    category: "Health Sciences",
    level: "Undergraduate",
    duration: "5 Years",
    degree: "Bachelor of Pharmacy",
    description:
      "Study medicines, pharmaceutical sciences and patient care while developing the skills required for a career in pharmacy.",

    overview:
      "Pharmacy provides students with knowledge of pharmaceutical sciences, medication management, patient safety and the professional practice of pharmacy.",

    highlights: [
      "Pharmaceutical science education",
      "Laboratory-based learning",
      "Medication and patient-care training",
      "Professional pharmacy preparation",
    ],

    careerOptions: [
      "Pharmacist",
      "Hospital Pharmacist",
      "Community Pharmacist",
      "Pharmaceutical Researcher",
      "Pharmaceutical Industry Professional",
    ],

    universities: ["near-east-university", "cyprus-international-university"],

    requirements: [
      "Secondary school certificate",
      "Science background",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/pharmacy.jpg",
  },

  {
    id: "physiotherapy",
    name: "Physiotherapy",
    category: "Health Sciences",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor of Science in Physiotherapy",
    description:
      "Learn how to assess, treat and rehabilitate patients affected by injury, illness and movement-related conditions.",

    overview:
      "Physiotherapy combines anatomy, physiology, rehabilitation science and clinical practice to prepare students to support patients in improving movement and quality of life.",

    highlights: [
      "Clinical rehabilitation training",
      "Anatomy and movement science",
      "Practical patient assessment",
      "Modern healthcare education",
    ],

    careerOptions: [
      "Physiotherapist",
      "Sports Rehabilitation Specialist",
      "Clinical Therapist",
      "Rehabilitation Specialist",
      "Healthcare Professional",
    ],

    universities: [
      "university-of-kyrenia",
      "final-international-university",
      "european-university-of-lefke",
    ],

    requirements: [
      "Secondary school certificate",
      "Science subjects preferred",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/physiotherapy.jpg",
  },

  {
    id: "computer-engineering",
    name: "Computer Engineering",
    category: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor of Science in Computer Engineering",
    description:
      "Build a strong foundation in computing, software, hardware and engineering principles for the technology industry.",

    overview:
      "Computer Engineering combines computer science and engineering principles to prepare students for careers in software, hardware, systems and emerging technologies.",

    highlights: [
      "Programming and software development",
      "Computer systems education",
      "Engineering principles",
      "Technology-focused practical learning",
    ],

    careerOptions: [
      "Software Engineer",
      "Systems Engineer",
      "Computer Engineer",
      "Backend Developer",
      "Technology Consultant",
    ],

    universities: [
      "near-east-university",
      "cyprus-international-university",
      "eastern-mediterranean-university",
      "final-international-university",
      "european-university-of-lefke",
    ],

    requirements: [
      "Secondary school certificate",
      "Mathematics background",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/computer-engineering.jpg",
  },

  {
    id: "civil-engineering",
    name: "Civil Engineering",
    category: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor of Science in Civil Engineering",
    description:
      "Learn how to design, construct and manage infrastructure including buildings, roads, bridges and other structures.",

    overview:
      "Civil Engineering combines mathematics, physical sciences and engineering principles to prepare students for the design and development of the built environment.",

    highlights: [
      "Structural engineering fundamentals",
      "Construction and infrastructure",
      "Engineering design",
      "Practical technical education",
    ],

    careerOptions: [
      "Civil Engineer",
      "Structural Engineer",
      "Construction Engineer",
      "Project Engineer",
      "Site Engineer",
    ],

    universities: ["eastern-mediterranean-university"],

    requirements: [
      "Secondary school certificate",
      "Mathematics and science background",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/civil-engineering.jpg",
  },

  {
    id: "business-administration",
    name: "Business Administration",
    category: "Business",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor of Business Administration",
    description:
      "Develop the business knowledge, leadership skills and strategic thinking needed to work in modern organizations.",

    overview:
      "Business Administration introduces students to management, finance, marketing, entrepreneurship and organizational strategy.",

    highlights: [
      "Management education",
      "Marketing and finance fundamentals",
      "Entrepreneurship",
      "Leadership and strategic thinking",
    ],

    careerOptions: [
      "Business Manager",
      "Marketing Specialist",
      "Entrepreneur",
      "Business Consultant",
      "Operations Manager",
    ],

    universities: [
      "cyprus-international-university",
      "eastern-mediterranean-university",
      "final-international-university",
      "european-university-of-lefke",
    ],

    requirements: [
      "Secondary school certificate",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/business.jpg",
  },

  {
    id: "maritime-business-administration",
    name: "Maritime Business Administration",
    category: "Business & Maritime",
    level: "Undergraduate",
    duration: "4 Years",
    degree: "Bachelor's Degree",
    description:
      "Explore business, management and commercial operations within the global maritime industry.",

    overview:
      "This program combines business administration with maritime industry knowledge, preparing students for careers in shipping, logistics and maritime organizations.",

    highlights: [
      "Maritime industry knowledge",
      "Business and management education",
      "Shipping and logistics",
      "International career opportunities",
    ],

    careerOptions: [
      "Maritime Manager",
      "Shipping Coordinator",
      "Logistics Manager",
      "Port Operations Professional",
      "Maritime Business Consultant",
    ],

    universities: ["university-of-kyrenia"],

    requirements: [
      "Secondary school certificate",
      "Valid international passport",
      "Academic transcripts",
    ],

    image: "/images/programs/maritime.jpg",
  },
];

export default programs;
