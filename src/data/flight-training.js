import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

const AirplaneSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
    <path fill="currentColor" d="M186.62 464H160a16 16 0 0 1-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 0 1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.4.4 0 0 0 0-.15a15 15 0 0 1-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0 1 13.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05l97.32-1.44l-64.44-142A16 16 0 0 1 160 48h26.91a25 25 0 0 1 19.35 9.8l125.05 152l57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16c-14.93 6.6-34.85 9.94-59.21 9.94c-2.68 0-14.37-.08-18.66-.31l-57.76-1.54l-125.36 152a25 25 0 0 1-19.32 9.75"/>
  </svg>
`;

const AirplaneTakingOffSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
    <path fill="currentColor" d="M176 216a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m70.31-129.24l-18.64-23.89l-.12-.15a39.82 39.82 0 0 0-51.28-9.12L124.7 84.38L70.76 64.54a8 8 0 0 0-5.59 0L58 67.27l-.32.13a16 16 0 0 0-4.53 26.47L75 115.06l-20.17 12.2l-28.26-9.54a8 8 0 0 0-6.08.4l-3 1.47A16 16 0 0 0 13 145.8l36 35.27l.12.12a39.78 39.78 0 0 0 27.28 10.87a40.2 40.2 0 0 0 20.26-5.52l147.41-88a8 8 0 0 0 2.21-11.78Z"/>
  </svg>
`

const BookSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M20.75 16.714a1 1 0 0 1-.014.143a.75.75 0 0 1-.736.893H6a1.25 1.25 0 1 0 0 2.5h14a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19V5A2.75 2.75 0 0 1 6 2.25h13.4c.746 0 1.35.604 1.35 1.35zM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;

const TeacherSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"/>
  </svg>
`;

const EngineSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/>
  </svg>
`;

const SimulationSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8 17v-.575q0-1.1 1.1-1.763T12 14t2.9.663t1.1 1.762V17zm4-4q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m-5 7.15q-2.875-.35-4.437-1.175T1 17V7q0-1.425 2.838-2.2T12 4.025t8.163.775T23 7v10q0 1.15-1.562 1.975T17 20.15v-12q1.275-.2 2.263-.488t1.412-.562Q19.6 6.675 17 6.338T12 6t-5 .338t-3.675.762q.425.3 1.413.575T7 8.15z"/>
  </svg>
`;

export const data = {
  siteTitle: "Flight Training | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION /* TODO : Update? */,
  siteKeywords: KEYWORDS /* TODO : Update? */,
  header: {
    image: {
      src: "/src/assets/flight-training/banner-pilots-cockpit-backview-vegas-aviation-flight-training.jpg",
      alt: "Backview of pilots in the cockpit",
    },
    eyebrow: "Our Courses",
    title: "Discover a Clear Path for Your Pilot Career",
    subTitle:
      "Join Vegas Aviation for premier flight training programs. Our expert instructors and cutting-edge facilities ensure top-tier instruction. Whether you're aiming for a private pilot license or advancing to commercial ratings, we offer comprehensive training for confident flying",
    cta: {
      url: "/enroll",
      text: "Start Flying Now",
    },
  },
  courses: [
    {
      icon: AirplaneSVG,
      title: "Private Pilot License (PPL)",
      subTitle: "Foundation training for aspiring aviators",
      content:
        "Soar through our private pilot training program. Whether you're a novice or an enthusiast, our team of FAA Certified Flight Instructors will lead you every step of the way. From mastering the basics to navigating airspace, join us to earn your wings with passion, precision, and proficiency.",
      img: {
        src: "/src/assets/flight-training/pilots-plane-vegas-aviation-private-pilot-license.jpg",
        alt: "Outside view of two pilots in the cockpit",
      },
      cta: {
        url: "/flight-training/private-pilot/",
        text: "Learn More",
      },
    },
    {
      icon: AirplaneTakingOffSVG,
      title: "Commercial Pilot License",
      subTitle: "Advanced skills for professional pilots",
      content:
        `Crafted for aspiring aviators aiming to transform their passion for flying into a fulfilling career, our curriculum blends rigorous training with practical experience. Led by seasoned instructors and industry experts, you'll gain the skills, knowledge, and confidence needed to thrive in commercial aviation.

        From advanced maneuvers to aeronautical expertise, our program ensures you're prepared to navigate the skies with precision and professionalism.`,
      img: {
        src: "/src/assets/flight-training/cfi-student-front-plane-vegas-aviation-commercial-pilot.jpg",
        alt: "CFI and student in front of a plane",
      },
      cta: {
        url: "/flight-training/commercial-pilot/",
        text: "Learn More",
      },
    },
    {
      icon: BookSVG,
      title: "Instrument Rating",
      subTitle: "Master precise navigation in any weather",
      content:
        `Soar higher with our Instrument Rating program. Tailored for pilots aiming to enhance their skills, our comprehensive curriculum ensures you navigate the skies with precision, rain or shine. Led by experienced instructors and bolstered by modern mechanics, you'll master instrument flight intricacies, from precision approaches to advanced navigation.`,
      img: {
        src: "/src/assets/flight-training/cfi-student-side-plane-vegas-aviation-instrument-rating.jpg",
        alt: "CFI and student to the right side of a plane",
      },
      cta: {
        url: "/flight-training/instrument-rating/",
        text: "Learn More",
      },
    },
    {
      icon: TeacherSVG,
      title: "Certified Flight Instructor (CFI / CFII)",
      subTitle: "Learn how to teach others",
      content:
        `Tailored for pilots eager to inspire and mentor future aviators, our Certified Flight Instructor course provides the skills and confidence to excel in this role.

        With comprehensive ground school and hands-on flight training, you'll be equipped to impart invaluable knowledge with precision and professionalism.`,
      img: {
        src: "/src/assets/flight-training/cfi-student-front-plane-vegas-aviation-certified-flight-instructor.jpg",
        alt: "CFI and student in front of a plane",
      },
      cta: {
        url: "/flight-training/cfi/",
        text: "Learn More",
      },
    },
    {
      icon: EngineSVG,
      title: "Multi Engine (ME / MEI)",
      subTitle: "Fly advanced complex twin engine aircraft",
      content:
        `Master the complexities of twin-engine aircraft with seasoned instructors, conquering diverse environments with confidence. Elevate further by becoming a certified multi-engine flight instructor, mentoring aspiring pilots.

        Whether advancing your career or sharing your aviation passion, our programs offer essential training and support.`,
      img: {
        src: "/src/assets/flight-training/beachcraft-duchess-vegas-aviation-multi-engine-rating.jpg",
        alt: "View from above of aircraft flying above farms",
      },
      cta: {
        url: "/flight-training/multi-engine/",
        text: "Learn More",
      },
    },
    {
      icon: SimulationSVG,
      title: "Flight Simulation",
      subTitle: "Experience advanced aircraft simulation",
      content:
        `Step into the virtual cockpit and experience the thrill of flight with our Flight Simulation Rental service. Whether you're a seasoned pilot honing your skills or a beginner taking your first flight, our state-of-the-art Advanced Aviation training Device (AATD) simulators offer realistic and immersive experiences.

        With a range of scenarios and aircraft to choose from, you can perfect your maneuvers, practice emergency procedures, and prepare for real-world flights with confidence.`,
      img: {
        src: "/src/assets/flight-training/instrument-panel-vegas-aviation-flight-simulation.jpg",
        alt: "Cockpit instrument panel",
      },
      cta: {
        url: "/flight-training/flight-simulation/",
        text: "Learn More",
      },
    },
  ],
};
