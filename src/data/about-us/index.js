import { SITE_DESCRIPTION, KEYWORDS, LOCATION_KEYWORDS } from "../consts";

const keywords = [
  KEYWORDS, 
  LOCATION_KEYWORDS.primary,
  LOCATION_KEYWORDS.secondary,
].join(", ");


export const data = {
  siteTitle: "About Us | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: keywords,
  header: {
    image: {
      src: "/src/assets/about-us-cfi-team-vegas-aviation-flight-lessons.jpg",
      alt: "Vegas Aviation CFI team in front of a plane",
    },
    eyebrow: "About Us",
    title: "Learn more about Vegas Aviation",
    subTitle:
      "We're excited to get to know you, if you have any questions or want to get to know us more closely, please contact us and schedule a visit or discovery flight",
    cta: [
      {
        url: "/contact",
        text: "Contact Us",
      },
    ],
  },
  sections: [
    {
      underHeader: "About us",
      title: "Get to Know Us",
      description: `Where quality flight training meets safety and support. Our fun family culture enhances top-notch instruction and meticulous aircraft maintenance.
      
      Since its inception, Vegas Aviation has continuously grown and adapted, enriching its offerings and facilities to align with the dynamic demands of the aviation sector.`,
      image: {
        src: "/src/assets/about-us-cfi-team-vegas-aviation-discovery-flight.jpg",
        alt: "Vegas Aviation CFI team",
      },
      button: {
        title: "Contact Us",
        link: "/contact",
      },
      orientation: "left",
    },
    {
      underHeader: "Our Pilots",
      title: "Meet Our CFIs",
      description: `At Vegas Aviation, our success stems from our exceptional FAA Certified Flight Instructors. They offer personalized, high-quality instruction tailored to each student's learning style and goals.
        
        With dedication and passion, our CFIs mentor and guide students, instilling the skills, knowledge, and confidence needed for success in the aviation industry. Our commitment to top-tier flight training begins with our outstanding team of instructors.`,
      image: {
        src: "/src/assets/team-vegas-aviation-zero-to-hero-aviation.png",
        alt: "Vegas Aviation CFI team",
      },/* 
      button: {
        title: "Know Our Team",
        link: "/about-us/team",
      }, */
      orientation: "right",
    },
    {
      underHeader: "Our Mechanics",
      title: "Meet Our Mechanics",
      description: `At Vegas Aviation Services, our dedicated aircraft mechanics are available 7 days a week, ensuring safety and reliability with expert maintenance on every aircraft they handle.
  
        With unparalleled attention to detail, they maintain top-quality performance, providing assurance and peace of mind for all our flight students and maintenance customers.`,
      image: {
        src: "/src/assets/maintenance/service-maintenance-aircraft-vegas-aviation-nevada-flight-school-cesnna.jpg",
        alt: "Two members of the Vegas Aviation mechanics team working on an aircraft",
      },/* 
      button: {
        title: "Know Our Team",
        link: "/about-us/team",
      }, */
      orientation: "left",
    },
    {
      underHeader: "Our Fleet",
      title: "Check Out Our Planes",
      description:
        "Vegas Aviation operates a fleet of 8 Cessna 172N, as well as, two Beechcraft Duchess aircraft, all equipped with Garmin G5 EFIS displays and Garmin 430W GPS. All of our training aircraft are rigorously maintained to maximize uptime as well as safety.",
      image: {
        src: "/src/assets/fleet/cessna-172-vegas-aviation-henderson-aircraft-rental.jpg",
        alt: "Cessna 172 landed",
      },
      button: {
        title: "View Our Fleet",
        link: "/about-us/fleet",
      },
      orientation: "right",
    },
  ],
  whyUs: {
    underHeader: "Why Us",
    title: "We Strive To Give You the Best Value",
    stat: "200+",
    image: {
      src: "/src/assets/fleet/cessna-172-vegas-aviation-henderson-aircraft-rental.jpg",
      alt: "Cessna 172 landed",
    },
    button: {
      title: "Contact Us",
      link: "/contact",
    },
    orientation: "right",
  },
};
