import { KEYWORDS, LOCATION_KEYWORDS } from "./consts";

const keywords = [
  KEYWORDS,
  "pilot resources, flight training financing, aircraft rental insurance, flight training insurance, flight training scholarships, pilot scholarships",
  LOCATION_KEYWORDS.primary,
  LOCATION_KEYWORDS.secondary,
].join(", ");


export const data = {
  siteTitle: "Pilot Resources | Vegas Aviation",
  siteDescription: "Achieve your aviation dreams through Vegas Aviation's partnerships with scholarships, financing and insurance designed specifically for pilots.",
  siteKeywords: keywords,

  header: {
    image: {
      src: "/src/assets/flying-lessons_vegas-aviation_become-a-pilot_las-vegas_nevada.jpg",
      alt: "Student and CFI during a lesson in office",
    },
    eyebrow: "Resources",
    title: "Vegas Aviation's Partnerships",
    subTitle:
      "Achieve your aviation dreams through our partnerships with scholarships, financing and insurance designed specifically for pilots.",
  },

  education: {
    siteTitle: "Education Partnerships | Vegas Aviation",

    header: {
      image: {
        src: "/src/assets/flying-lessons_vegas-aviation_become-a-pilot_las-vegas_nevada.jpg",
        alt: "Student and CFI during a lesson in office",
      },
      eyebrow: "Education",
      title: "Education Partnerships",
      subTitle: "Through our partnerships with education institutions your aviation journey can take off immediately",
    },

    introSection: {
      title: "Your Aviation Dreams Start Here",
      underHeader: "Study with us",
      description:
        "Access accredited aviation education through our trusted university partners, offering structured degree pathways and credit for flight training completed at Vegas Aviation.",
      image: {
        src: "/src/assets/partners/education-student-to-the-side-of-airplane-vegas-aviation-nevada-flight-training.jpg",
        alt: "Student pilot to the side of an aircraft",
      },
      button: {
        link: "/contact",
        title: "Call Us",
      },
    },

    title: "Education",
    description:
      "Success in the sky starts on the ground. Access top ground school courses, exam prep, and online resources to master your training and become a confident, skilled pilot.",
    items: [
      {
        title: "Purdue Global",
        description: `Our partnership with Purdue Global offers benefits to our flight school students who are interested in advancing their aviation career. The School of Aviation includes online bachelor's degrees in professional flight or aviation management.
        
        Vegas Aviation partners with Purdue University Global to offer flight students a flexible path to a Bachelor of Science in Professional Flight or Aviation Management. This program combines our expert flight training with Purdue's top-tier aviation education, preparing students for diverse careers in the industry.`,
        logo: {
          src: "/src/assets/partners/education-purdue-global-logo-vegas-aviation-nevada-flight-training-scholarship.png",
          alt: "Purdue Global Logo",
        },
        cta: {
          url: "/blog/vegas-aviation-partnership-with-purdue-global/",
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
        cta: {
          url: "https://www.nntw.org/training/magnet-academy-of-aviation/",
          text: "Learn More",
        },
      },
    ],
  },

  financing: {
    siteTitle: "Financing Partnerships | Vegas Aviation",

    header: {
      image: {
        src: "/src/assets/stock/financing-loan-vegas-aviation-north-las-vegas-pilot-student.jpg",
        alt: "Man writing on a document",
      },
      eyebrow: "Financing Available",
      title: "Financing Partnerships",
      subTitle:
        "Achieve your aviation dreams with flexible, student-focused financing options designed specifically for pilots.",
    },

    introSection: {
      title: "Your Aviation Dreams Start Here",
      underHeader: "Manage your budget",
      description: `We work with aviation-focused financing providers who offer flexible loan options designed specifically for pilot training, helping you start flying now and pay over time.`,
      image: {
        src: "/src/assets/stock/airplane-rainbow-las-vegas-vegas-aviation-nevada-flight-training.jpg",
        alt: "Airplane taking off over Las Vegas with a rainbow in the background",
      },
      button: {
        link: "/contact",
        title: "Contact Us",
      },
    },

    stratusFinancial: {
      img: {
        src: "/src/assets/blog/2025-aug-30-stratus-financial-logo.jpg",
        alt: "Stratus Financial Logo",
      },
      title: "Vegas Aviation Partnership With Stratus Financial",
      content: [
        {
          description: `Vegas Aviation is pleased to announce our partnership with Status Financial.`,
        },
        {
          description: `Stratus Financial was founded by FAA Certificated Flight and Ground Instructors passionate about helping others achieve their aviation dreams.  We know it's not just about achieving your dreams (because we looked up in the sky every time, we heard an airplane too!), but funding your family's dreams as well.  That's why Stratus was created, because with Stratus, the sky is no longer the limit.`,
        },
        {
          title: "Prepare for Take Off",
          description: `You're not just a number, and it shows with Stratus. We look beyond the typical FICO scores and look at you as a whole aviator.  We want to set you up for success before you even apply with us!`,
        },
        {
          description: `We offer exceptional lending packages, including:`,
          bulletPoints: [
            "The best rate you'll get anywhere to go from zero to hero!",
            "Full financing for your entire flight training and more.",
            "Affordable payment options, including deferment for 12 months while you complete your training AND find a job.",
            "Pay your loan off any time you want with no consequences or penalties whatsoever.",
          ],
        },
        {
          title: "Stratus Has You Covered For Resources For Your Aviation Career",
          bulletPoints: [
            "Counseling with our team of flight instructors and ground instructors to support you through flight training, check rides and interviews with airlines.",
            "Resume reviewing, editing, and building.",
            "AMA Phone Calls with Pilots in the 121 and 135 Industry, What It's like, How They Got Their Job, etc.",
          ],
        },
        {
          description: `We look forward to helping you achieving your aviation dreams and seeing you in the sky! If you are interested in getting started.`,
        },
        {
          description: `If you have limited credit or low income you may need a Co-Borrower; if so, please have your co-borrower complete their application.`,
        },
      ],
      cta: {
        url: "https://apply.stratus.finance/vegasaviation3018150/",
        text: "Apply Now at Stratus Financial",
      },
    },

    title: "Financing",
    description:
      "Don't let costs ground your dreams, affordable flight training is within reach. Explore loans, scholarships, and flexible payment plans to keep your aviation goals on track.",
    items: [
      {
        title: "Stratus Financial",
        description: `Stratus Financial was founded by FAA Certificated Flight and Ground Instructors passionate about helping others achieve their aviation dreams.
        
        We know it's not just about achieving your dreams (because we looked up in the sky every time, we heard an airplane too!), but funding your family's dreams as well.  That's why Stratus was created, because with Stratus, the sky is no longer the limit.`,
        logo: {
          src: "/src/assets/partners/finance-stratus-financial-logo-vegas-aviation-pilot-training-summerlin.webp",
          alt: "Stratus Financial Logo",
        },
        cta: {
          url: "/blog/vegas-aviation-partnership-with-stratus-financial",
          text: "Learn More",
        },
      },
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
    ],
  },

  insurance: {
    siteTitle: "Insurance Partnerships | Vegas Aviation",

    header: {
      image: {
        src: "/src/assets/stock/financing-loan-vegas-aviation-north-las-vegas-pilot-student.jpg",
        alt: "Man writing on a document",
      },
      eyebrow: "Insurance",
      title: "Insurance Partnerships",
      subTitle:
        "Whether you're a student pilot or a certificated renter, proper insurance coverage is essential for flying safely and responsibly",
    },

    requirements: {
      title: "Insurance Requirements for Pilots & Renters",
      content: [
        {
          description: `At Vegas Aviation, safety and responsibility are top priorities—for both our aircraft and our customers. Whether you're a student pilot flying solo or a certificated pilot renting our aircraft, insurance coverage is required before you fly.`,
        },
        {
          description: `Below are the minimum insurance requirements for all rental flights. You are welcome to choose your provider, but most of our customers find competitive rates through <b>Avemco, Skywatch or AOPA</b>.`,
        },
        {
          title: "Cessna Rentals & Solo Student Flights",
          description: `To rent and/or solo one of our single-engine aircraft (e.g., Cessna 172), you must carry:`,
          bulletPoints: [
            "<b>Bodily Injury & Property Damage Liability:</b><br/><i>Minimum $500,000 per occurrence.</i>",
            "<b>Medical Expense Coverage:</b><br/><i>Minimum $3,000.</i>",
            "<b>Damage to Non-Owned Aircraft:</b><br/><i>Minimum $50,000 per occurrence.</i>",
          ],
        },
        {
          title: "Multi-Engine Aircraft Rentals (Dual Instruction Only)",
          description:
            "We do <b>not offer solo rentals</b> of our multi-engine aircraft. Dual instruction is permitted with the following minimum coverage:",
          bulletPoints: [
            "<b>Bodily Injury & Property Damage Liability:</b><br/><i>Minimum $500,000 per occurrence.</i>",
            "<b>Medical Expense Coverage:</b><br/><i>Minimum $3,000.</i>",
            "<b>Damage to Non-Owned Aircraft:</b><br/><i>Minimum $60,000 per occurrence.</i>",
          ],
        },
      ],
    },

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

    cta: {
      title: "Need Help?",
      underHeader: "Get Your Insurance",
      description:
        "If you're not sure what type of policy you need or how to get started, our front desk team is happy to point you in the right direction. Just call us or stop by the office during business hours.",
      image: {
        src: "/src/assets/team/team-vegas-aviation-flight-school-north-las-vegas.jpg",
        alt: "Vegas Aviation's team",
      },
      button: {
        link: "/contact",
        title: "Call Us",
      },
    },
  },

  scholarships: {
    siteTitle: "Scholarship Partnerships | Vegas Aviation",

    header: {
      image: {
        src: "/src/assets/stock/scholarships-professor-with-students-in-class-vegas-aviation-nevada-career-pilot.jpg",
        alt: "Professor and students during a class",
      },
      eyebrow: "Flight Training Scholarships",
      title: "Turn Your Aviation Dreams Into Reality",
      subTitle:
        "Finances shouldn't stand between you and the cockpit. Explore scholarship opportunities to support your journey to the skies.",
    },

    dataSectionOne: {
      title: "Flight Training Scholarships",
      img: {
        src: "/src/assets/partners/rancho-high-school-student-recieves-navy-scholarship-vegas-aviation-nevada-flight-training.jpg",
        alt: "Las Vegas Rancho High School student pilot, receives $350,000 U.S. Navy scholarship",
      },
      content: [
        {
          description: `Las Vegas Rancho High School student pilot, receives $350,000 U.S. Navy scholarship.`,
        },
        {
          description: `At Vegas Aviation, we believe anyone with the passion to fly deserves a chance to soar—regardless of financial barriers. That's why we're committed to helping you discover scholarship opportunities that can support your journey to the skies.`,
        },
        {
          title: "Opportunities at Our Front Desk",
          description: `We post <b>upcoming flight training scholarships</b> and local leads on our <b>Front Desk News Board</b> throughout the year. Be sure to check it regularly—deadlines and new listings are always changing.`,
        },
        {
          description: `There are <b>thousands of scholarships available</b> each year—not just from aviation organizations, but from community foundations, professional groups, and even local civic clubs. Below are some of the best places to start:`,
        },
        {
          title: "Aviation-Specific Scholarships",
          description:
            "These organizations offer scholarships for student pilots, flight instructors, and career-bound aviators:",
        },
      ],
    },

    cardsOne: {
      title: "General & Professional",
      items: [
        {
          title: "AOPA",
          description: `Up to $14,000 for flight students.`,
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
          title: "EAA",
          description: `Private pilot and post-solo funding.`,
          logo: {
            src: "/src/assets/partners/eaa-partner-vegas-aviation-henderson-career-pilot.png",
            alt: "EAA Logo",
          },
          cta: {
            url: "https://www.eaa.org/eaa",
            text: "Learn More",
          },
        },
        {
          title: "AVFUEL",
          description: `Maintenance and pilot scholarships.`,
          logo: {
            src: "/src/assets/partners/avfuel-partner-vegas-aviation-southern-nevada-flight-school.png",
            alt: "AVFUEL Logo",
          },
          cta: {
            url: "https://www.avfuel.com/",
            text: "Learn More",
          },
        },
        {
          title: "Sheltair Aviation",
          description: `Flight and aviation program support.`,
          logo: {
            src: "/src/assets/partners/sheltair-aviation-logo-partner-vegas-aviation-summerlin-discovery-flight.png",
            alt: "Sheltair Aviation Logo",
          },
          cta: {
            url: "https://www.sheltairaviation.com/",
            text: "Learn More",
          },
        },
        {
          title: "JSFirm Aviation Scholarship Directory",
          description: `Consolidated listing across aviation roles.`,
          logo: {
            src: "/src/assets/partners/jsfirm-logo-partner-vegas-aviation-nevada-aircraft-maintenance.png",
            alt: "JSFirm Aviation Scholarship Directory Logo",
            class: "invert",
          },
          cta: {
            url: "https://www.jsfirm.com/",
            text: "Learn More",
          },
        },
      ],
    },

    cardsTwo: {
      title: "Women in Aviation",
      items: [
        {
          title: "Women in Aviation International (WAI)",
          description: `$1M+ awarded annually.`,
          logo: {
            src: "/src/assets/partners/wai-logo-partner-vegas-aviation-north-las-vegas-private-pilot.png",
            alt: "Women in Aviation International (WAI) Logo",
          },
          cta: {
            url: "https://www.wai.org/",
            text: "Learn More",
          },
        },
        {
          title: "The Ninety-Nines",
          description: `Scholarships for women pilots at all levels.`,
          logo: {
            src: "/src/assets/partners/the-ninety-nines-partner-vegas-aviation-nevada-instrument-rating.png",
            alt: "The Ninety-Nines Logo",
          },
          cta: {
            url: "https://www.ninety-nines.org/",
            text: "Learn More",
          },
        },
        {
          title: "Fly Foundation",
          description: `Fly Girl Scholarship & mentorship programs.`,
          logo: {
            src: "/src/assets/partners/fly-foundation-logo-partner-vegas-aviation-las-vegas-multi-engine-rating.webp",
            alt: "Fly Foundation Logo",
          },
          cta: {
            url: "https://www.flyfoundation.org.in/",
            text: "Learn More",
          },
        },
        {
          title: "Latinas in Aviation Foundation",
          description: `Scholarships and support for Latinas in flight.`,
          logo: {
            src: "/src/assets/partners/latinas-in-aviation-foundation-logo-partner-vegas-aviation-summerlin-flight-simulation.png",
            alt: "Latinas in Aviation Foundation Logo",
          },
          cta: {
            url: "https://www.latinasinaviation.com/",
            text: "Learn More",
          },
        },
      ],
    },

    cardsThree: {
      title: "Diversity & Inclusion",
      items: [
        {
          title: "OBAP (Organization of Black Aerospace Professionals)",
          description: `Pilot and aerospace education awards.`,
          logo: {
            src: "/src/assets/partners/obap-logo-partner-vegas-aviation-nevada-commercial-pilot.png",
            alt: "OBAP (Organization of Black Aerospace Professionals) Logo",
          },
          cta: {
            url: "https://obap.org/",
            text: "Learn More",
          },
        },
        {
          title: "NGPA (National Gay Pilots Association)",
          description: `For LGBTQ+ aviators and allies.`,
          logo: {
            src: "/src/assets/partners/ngpa-logo-partner-vegas-aviation-southern-nevada-certified-flight-instructor.png",
            alt: "NGPA (National Gay Pilots Association) Logo",
          },
          cta: {
            url: "https://www.ngpa.org/",
            text: "Learn More",
          },
        },
        {
          title: "Red Tail Scholarship Foundation",
          description: `Honoring the legacy of the Tuskegee Airmen.`,
          logo: {
            src: "/src/assets/partners/red-tail-scholarship-foundation-logo-partner-vegas-aviation-summerlin-flight-training.avif",
            alt: "Red Tail Scholarship Foundation Logo",
          },
          cta: {
            url: "https://www.rtfa.org/",
            text: "Learn More",
          },
        },
      ],
    },

    cardsFour: {
      title: "Career Pathways",
      items: [
        {
          title: "American Airlines Cadet Academy",
          description: `Financial aid and flight school pathways.`,
          logo: {
            src: "/src/assets/partners/aaca-logo-partner-vegas-aviation-boulder-city-aircraft-services.png",
            alt: "American Airlines Cadet Academy Logo",
          },
          cta: {
            url: "https://academy.aa.com/landing/academy/html/home-page.html",
            text: "Learn More",
          },
        },
        {
          title: "RAA (Regional Airline Association)",
          description: `Scholarships for future commercial airline pilots.`,
          logo: {
            src: "/src/assets/partners/raa-logo-partner-vegas-aviation-north-las-vegas-aircraft-rental.png",
            alt: "RAA (Regional Airline Association) Logo",
          },
          cta: {
            url: "https://raa.org/",
            text: "Learn More",
          },
        },
      ],
    },

    dataSectionTwo: {
      title: "Beyond Aviation: Broaden Your Search",
      content: [
        {
          description: `You don't have to limit your scholarship search to aviation-only organizations. Many students find funding through broader educational and community resources:`,
          bulletPoints: [
            "<b>Rotary Clubs & Lions Clubs</b> - Local chapters often offer scholarships for leadership, service, and career advancement.",
            "<b>Chambers of Commerce</b> - Business communities frequently fund scholarships for young professionals or those pursuing skilled trades.",
            "<b>Soroptimist International</b> - Awards scholarships to women and girls seeking to improve their lives through education and career training.",
            "<b>Veterans' Groups</b> - If you or a family member have military service, check with the American Legion, VFW, or state programs.",
            "<b>Community Foundations</b> - Look for local foundations offering scholarships for residents in your county or school district.",
            "<b>Workforce Development Boards</b> - Some regions provide funding for career changers, especially in aviation and technical fields.",
          ],
        },
        {
          title: "Scholarship Application Tips",
          description: `To improve your chances of success:`,
          bulletPoints: [
            "<b>Apply Early & Often</b> - Don't wait for the “perfect” scholarship—apply to as many as you qualify for.",
            "<b>Personalize Your Essays</b> - Share your aviation goals, life story, and how you'll give back.",
            "<b>Ask for Recommendations</b> - CFIs, teachers, or mentors can provide strong references.",
            "<b>Stay Organized</b> - Use a spreadsheet to track deadlines and required documents.",
          ],
        },
      ],
    },

    cta: {
      title: "Need Support?",
      underHeader: "Get Help",
      description:
        "Not sure where to begin? Our instructors and front desk team are happy to guide you through the scholarship process. Stop by or call us—we'll help you build a plan to turn your aviation dreams into reality.",
      image: {
        src: "/src/assets/partners/rancho-high-school-student-pilot-awarded-women-in-aviation-scholarship-vegas-aviation-boulder-city-flight-school.jpg",
        alt: "Las Vegas Rancho High School student pilot at Vegas Aviation, awarded a $3,000 Women in Aviation scholarship",
      },
      button: {
        link: "/contact",
        title: "Contact Us",
      },
    },

    resourcesIndexCta: {
      title: "Flight Training Scholarships",
      underHeader: "Turn Your Aviation Dreams Into Reality",
      description:
        "Finances shouldn't stand between you and the cockpit. Explore scholarship opportunities to support your journey to the skies.",
      image: {
        src: "/src/assets/partners/rancho-high-school-student-pilot-awarded-women-in-aviation-scholarship-vegas-aviation-boulder-city-flight-school.jpg",
        alt: "Las Vegas Rancho High School student pilot at Vegas Aviation, awarded a $3,000 Women in Aviation scholarship",
      },
      button: {
        link: "/resources/scholarships",
        title: "Learn More",
      },
    },
  },
};
