import { KEYWORDS, LOCATION_KEYWORDS } from "../consts";

const keywords = [KEYWORDS, LOCATION_KEYWORDS.secondary].join(", ");

export const data = {
  siteTitle: "Our Team | Vegas Aviation",
  siteDescription: "Vegas Aviation's instructors, staff, and leadership share one mission: to provide safe, supportive, and high-value pilot training for every student. Get to know the team who will guide you on your aviation journey.",
  siteKeywords: keywords,
  header: {
    image: {
      src: "/src/assets/team/team-vegas-aviation-flight-school-north-las-vegas.jpg",
      alt: "Vegas Aviation team in office",
    },
    eyebrow: "Our Team",
    title: "Meet the People Behind Vegas Aviation",
    subTitle:
      "Our instructors, staff, and leadership share one mission: to provide safe, supportive, and high-value pilot training for every student. Get to know the team who will guide you on your aviation journey.",
    cta: [
      {
        url: "/contact",
        text: "Schedule a Visit",
      },
    ],
  },

  leadershipTeam: {
    title: "Our Leadership",
    description:
      "Our leadership team brings years of aviation experience, safety-focused training philosophy, and a deep commitment to helping every student succeed. They guide Vegas Aviation with professionalism, integrity, and a passion for teaching.",
    team: [
      {
        name: "Lydia Trotter",
        description:
          "A dedicated aviation professional committed to operational excellence and delivering the highest-value training experience for every student.",
        roles: "Founder",
        image: {
          src: "/src/assets/team/lydia-trotter-vegas-aviation-flight-lessons-summerlin.jpg",
          alt: "Lydia Trotter, Vegas Aviation leadership member",
        },
      },
      {
        name: "Tom Trotter",
        description:
          "With a strong background in aviation training and school development, Tom leads Vegas Aviation with a focus on safety, standardization, and student success.",
        roles: "Founder",
        image: {
          src: "/src/assets/team/tom-trotter-vegas-aviation-flight-training-nevada.jpg",
          alt: "Tom Trotter, Vegas Aviation leadership member",
        },
      },
    ],
  },

  cfi: {
    title: "Our\nCertified Flight Instructors",
    description:
      "Our instructors are here to guide, mentor, and inspire you throughout your aviation journey. From your first discovery flight to advanced training, our team is committed to providing a safe, supportive, and professional experience.",
    team: [
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-1.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-2.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-3.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-4.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-5.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-6.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-7.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-8.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-9.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
      {
        name: "John Joe",
        roles: "Certified Flight Instructor",
        image: {
          src: "/src/assets/team/cfi-10.jpg",
          alt: "Vegas Aviation Certified Flight Instructor",
        },
      },
    ],
  },

  mechanics: {
    title: "Our\nMechanics",
    description:
      "Our skilled team of Certified A&P and IA mechanics is committed to maintaining your aircraft at peak performance, ensuring both safety and cost-effectiveness.",
    team: [
      {
        name: "John Joe",
        roles: "Mechanic",
        image: {
          src: "/src/assets/team/mechanic-1.jpg",
          alt: "Vegas Aviation Mechanic",
        },
      },
      {
        name: "John Joe",
        roles: "Mechanic",
        image: {
          src: "/src/assets/team/mechanic-2.jpg",
          alt: "Vegas Aviation Mechanic",
        },
      },
    ],
  },
};
