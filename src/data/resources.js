import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "Pilot Resources | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/flying-lessons_vegas-aviation_become-a-pilot_las-vegas_nevada.jpg",
      alt: "Student and CFI during a lesson in office",
    },
    eyebrow: "Resources",
    title: "Vegas Aviation Partnerships",
    subTitle:
      "Achieve your aviation dreams through our partnerships with scholarships, financing and insurance designed specifically for pilots.",
  },

  education: {
    title: "Education",
    description:
      "Success in the sky starts on the ground. Access top ground school courses, exam prep, and online resources to master your training and become a confident, skilled pilot.",
    items: [
      {
        title: "Purdue Global",
        description: `Our partnership with Purdue Global offers benefits to our flight school students who are interested in advancing their aviation career. The School of Aviation includes online bachelor's degrees in professional flight or aviation management.
        
        Vegas Aviation partners with Purdue University Global to offer flight students a flexible path to a Bachelor of Science in Professional Flight or Aviation Management. This program combines our expert flight training with Purdue's top-tier aviation education, preparing students for diverse careers in the industry.`,
        logo: {
          src: "/src/assets/partners/education-purdu-global-logo-vegas-aviation-nevada-flight-training-scholarship.png",
          alt: "Purdue Global Logo",
        },
        cta: {
          url: "/blog/purdue-global-blog-post", /* TODO : Update */
          text: "Learn More",
        },
      },
      {
        title: "College of Southern Nevada",
        description: `CSN's Aviation Technology Professional Pilot program provides an Associate of Applied Science (AAS) degree, blending comprehensive coursework with Vegas Aviation's specialized flight training.
        
        Credits from this program can also be applied toward a Bachelor of Science in Professional Flight at Purdue University Global, creating a seamless pathway for career advancement.`,
        logo: {
          src: "/src/assets/partners/education-csn-logo-vegas-aviation-boulder-city-flight-training-scholarship.png",
          alt: "College of Southern Nevada Logo",
        },
        cta: {
          url: "https://www.csn.edu/",
          text: "Learn More",
        },
      },
      {
        title: "Rancho High School",
        description: `Rancho High School's Academy of Aviation is one of the few programs in the U.S. where students explore flight, space travel, and rocketry.
        
        This hands-on curriculum includes real-world flight training at Vegas Aviation, giving high schoolers a head start in aviation careers.`,
        logo: {
          src: "/src/assets/partners/education-rancho-highschool-logo-vegas-aviation-north-nevada-flight-training-scholarship.png",
          alt: "Rancho High School Logo",
        },
      },
    ],
  },

  financing: {
    title: "Financing",
    description:
      "Don't let costs ground your dreams- affordable flight training is within reach. Explore loans, scholarships, and flexible payment plans to keep your aviation goals on track.",
    items: [
      {
        title: "Flight Training Finance",
        description: `Flight Training Finance offers affordable financing for part-time flight training, including private pilot and instrument ratings—perfect for students training on a flexible schedule.`,
        logo: {
          src: "/src/assets/partners/financing-flight-training-finance-vegas-aviation-summerlin-flight-school.webp",
          alt: "Flight Training Finance Logo",
        },
        cta: {
          url: "https://www.flighttrainingfinancellc.com/",
          text: "Learn More",
        },
      },
      {
        title: "AOPA",
        description: `Unlike traditional student loans, AOPA's flight training loan is a line of credit that funds any flight school or program. Use it to cover costs as you progress from private pilot to advanced ratings.`,
        logo: {
          src: "/src/assets/partners/aopa-vegas-aviation-henderson-flight-lessons.png",
          alt: "AOPA Logo",
        },
        cta: {
          url: "https://www.aopa.org/",
          text: "Learn More",
        },
      },
      {
        title: "Stratus Financial",
        description: `Stratus Financial was founded by FAA Certificated Flight and Ground Instructors passionate about helping others achieve their aviation dreams.
        
        We know it's not just about achieving your dreams (because we looked up in the sky every time, we heard an airplane too!), but funding your family's dreams as well.  That's why Stratus was created, because with Stratus, the sky is no longer the limit.`,
        logo: {
          src: "/src/assets/partners/finance-stratus-financial-logo-vegas-aviation-pilot-training-summerlin.webp",
          alt: "Stratus Financial Logo",
        },
        cta: {
          url: "/blog/stratus-financial-blog-post", /* TODO : Update */
          text: "Learn More",
        },
      },
    ],
  },
  
  insurance: {
    title: "Insurance",
    description:
      "Protect your investment and fly with confidence. Aviation insurance is essential for student pilots, covering aircraft damage, liability, and more. Find the best policies tailored to your training and budget.",
    items: [
      {
        title: "Avemco Insurance Company",
        description: `A trusted name in aviation insurance, Avemco offers customized coverage for student pilots, renters, and aircraft owners—so you can train with peace of mind.`,
        logo: {
          src: "/src/assets/partners/insurance-avemco-logo-vegas-aviation-las-vegas-pilot-resources.png",
          alt: "Avenco Logo",
        },
        cta: {
          url: "https://www.avemco.com/",
          text: "Learn More",
        },
      },
      {
        title: "SkyWatch",
        description: `Get affordable, on-demand aviation insurance with SkyWatch. Customize your coverage by the hour, month, or year to fit your flight training needs.`,
        logo: {
          src: "/src/assets/partners/insurance-skywatch-logo-vegas-aviation-flight-school-nevada.png",
          alt: "SkyWatch Logo",
        },
        cta: {
          url: "https://www.skywatch.ai/",
          text: "Learn More",
        },
      },
      {
        title: "AOPA",
        description: `Get affordable, on-demand aviation insurance with SkyWatch. Customize your coverage by the hour, month, or year to fit your flight training needs.`,
        logo: {
          src: "/src/assets/partners/aopa-vegas-aviation-henderson-flight-lessons.png",
          alt: "AOPA Logo",
        },
        cta: {
          url: "https://www.aopa.org/",
          text: "Learn More",
        },
      },
    ],
  },
};