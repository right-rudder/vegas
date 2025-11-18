import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const faq = {
  siteTitle: "FAQ | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION /* TODO : Update? */,
  siteKeywords: KEYWORDS /* TODO : Update? */,
  customBreadcrumbs: [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "FAQ", url: "/about-us/faq" },
  ],

  header: {
    image: {
      src: "/src/assets/flying-lessons_vegas-aviation_become-a-pilot_las-vegas_nevada.jpg",
      alt: "Student and CFI during a lesson in office",
    },
    eyebrow: "FAQ",
    title: `Frequent Asked Questions`,
    subTitle: "Clear any queries you might have",
  },

  privatePilot: {
    title: "Private Pilot License (PPL)",
    items: [
      {
        question: "What are the requirements to complete my Private Pilot License?",
        answer: `
            <ul class="list-disc pl-8 mb-4">
              <li><b>Age:</b> Must be at least 17 years old.</li>
              <li><b>Language Proficiency:</b> Proficient in English.</li>
              <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
              <li><b>Flight Hours:</b> Log at least 40 hours of flight time*. This includes at least 10 hours of solo flying, five hours of which must be dedicated to cross-country flights.<br/><i>* Note: 40 hours is the FAA minimum requirement. The national average to complete a PPL is 70 hours.</i></li>
              <li><b>Knowledge Test:</b> Pass a written knowledge exam with a grade of at least 70%.</li>
              <li><b>Practical Test:</b> Pass an oral exam and take a practical flying test (known as a check ride) administered by an FAA-designated evaluator.</li>
            </ul>
          `,
      },
      {
        question: "What does it cost to get my Private Pilot License?",
        answer: `
            <ol class="list-decimal pl-8 mb-4">
              <li><b>How much does it cost to obtain a private pilot license (PPL)?</b><br/> The expenses for a private pilot license (PPL) typically range between $15,000 and $20,000.</li>
              <li><b>What are the primary expenses associated with obtaining a PPL?</b><br/> Main expenses include flight instruction fees, aircraft rental costs, study materials, examination fees, and medical examination expenses.</li>
              <li><b>How can I minimize the costs of getting a PPL?</b><br/> To reduce expenses, consider options like joining flying clubs, applying for scholarships, searching for discounted rates, time-building with other students and efficient studying methods.</li>
              <li><b>Are there ongoing expenses once I obtain a PPL?</b><br/> Yes, ongoing costs include aircraft rental, fuel, and periodic medical certificate renewals.</li>
              <li><b>Does the type of aircraft used for training impact costs?</b><br/> Yes, the type of aircraft used for training can influence costs, with newer and more complex aircraft generally incurring higher expenses.</li>
              <li><b>Can I estimate the total costs of obtaining a PPL beforehand?</b><br/> Yes, flight schools often provide breakdowns of costs to help prospective students estimate expenses.</li>
              <li><b>Are there any hidden costs associated with PPL training?</b><br/> Be aware of potential hidden costs such as retesting fees and unexpected medical expenses.</li>
              <li><b>Where can I find more information about PPL costs and training?</b><br/> For further details, reach out to flight schools, aviation organizations, and explore online resources.</li>
            </ol>
          `,
      },
      {
        question: "How long does it take to earn a Private Pilot License?",
        answer: `
            The national average for students to complete their private pilot training is approximately 70 hours of total flight time. However, it's important to note that this duration can vary significantly depending on individual factors such as aptitude, learning pace, weather conditions and availability for training.
          `,
      },
      {
        question: "Are there financing options for PPL training?",
        answer: `
            Alongside loans from private banks and credit unions, Sallie Mae provides loans for aviation school, including flight training. Private flight school finance firms like Stratus Financial are also available. Additionally, some flight schools offer their own financing options or scholarships to aid with training expenses.
          `,
      },
      {
        question: "Do I need to have some previous flying experience?",
        answer: `
            No, our flight school welcomes students with any level of experience, from total beginners to those with prior flying experience.
          `,
      },
    ],
  },
  commercialPilot: {
    title: "Commercial Pilot License",
    items: [
      {
        question: "What is Required to earn a Commercial Pilot License?",
        answer: `
          <ul class="list-disc pl-8 mb-4">
            <li><b>Age:</b> Be at least 18 years old.</li>
            <li><b>Language Proficiency:</b> Proficient in English.</li>
            <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
            <li>
              <b>Flight Hours:</b> Complete at least 250 hours of flight time*, which must include:
              <br/><i>* Note: 250 hours is the FAA minimum requirement.</i>
              <ul class="list-disc pl-8 mb-4">
                <li>100 hours as pilot-in-command (PIC).</li>
                <li>50 hours of cross-country flight time as PIC.</li>
                <li>
                  10 hours of solo flight time, including:
                  <ul class="list-disc pl-8 mb-4">
                    <li>5 hours of solo cross-country flight.</li>
                    <li>One solo cross-country flight of at least 250 nautical miles with full-stop landings at three airports different from the departure airport.</li>
                  </ul>
                </li>
                <li>
                  Additionally, candidates must complete specific training requirements, including:
                  <ul class="list-disc pl-8 mb-4">
                    <li>
                      20 hours of flight training with an instructor, including:
                      <ul class="list-disc pl-8 mb-4">
                        <li>10 hours of instrument training.</li>
                        <li>10 hours of complex aircraft training (if not completed during previous training).</li>
                      </ul>
                    </li>
                    <li>One solo cross-country flight of at least 250 nautical miles with full-stop landings at three airports different from the departure airport.</li>
                  </ul>
                </li>
                <li>
                  10 hours of solo flight in a single-engine airplane, including:
                  <ul class="list-disc pl-8 mb-4">
                    <li>One cross-country flight of at least 300 nautical miles with full-stop landings at three airports different from the departure airport.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b>Knowledge Test:</b> Pass a written knowledge exam.</li>
            <li><b>Practical Test:</b> Pass an oral exam and a practical flight test administered by an FAA-designated examiner.</li>
          </ul>
        `,
      },
    ],
  },
  instrumentRating: {
    title: "Instrument Rating",
    items: [
      {
        question: "What Is Required for an Instrument Rating?",
        answer: `
          <ul class="list-disc pl-8 mb-4">
            <li><b>Age:</b> Be at least 18 years old.</li>
            <li><b>Language Proficiency:</b> Proficient in English.</li>
            <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
            <li>Hold a Valid Private Pilot License (PPL).</li>
            <li>Complete Instrument Ground School.</li>
            <li>Log an IFR Cross-Country of at Least 250 Miles as Pilot in Command.</li>
            <li>
              <b>Flight Hours:</b>
              <br/><i>* Note: These hours are the FAA minimum requirement.</i>
              <ul class="list-disc pl-8 mb-4">
                <li>Complete a Minimum of 15 Hours of instrument training from an authorized instructor.</li>
                <li>Complete at least 50 Hours of Cross Country as a Pilot in Command (PIC), with at least 10 of those hours in airplanes for an instrument-airplane rating.</li>
              </ul>
            </li>
            <li><b>Knowledge Test:</b> Pass a written knowledge exam with a minimum score of 70%.</li>
            <li><b>Practical Test:</b> Pass an oral exam and a practical flight test (commonly known as the check ride) administered by an authorized FAA examiner.</li>
          </ul>
        `,
      },
    ],
  },
  cfi: {
    title: "Certified Flight Instructor",
    items: [
      {
        question: "What are the Requirements to Become a Certified Flight Instructor?",
        answer: `
          <ul class="list-disc pl-8 mb-4">
            <li><b>Age:</b> Be at least 18 years old.</li>
            <li><b>Language Proficiency:</b> Proficient in English.</li>
            <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
            <li>
              <b>Flight Experience:</b> Meet specific aeronautical experience requirements, typically including:
              <ul class="list-disc pl-8 mb-4">
                <li>Holding a Commercial Pilot License (CPL) or Airline Transport Pilot (ATP) certificate.</li>
                <li>Holding an Instrument Rating.</li>
                <li>
                  Accumulating a minimum number of 250 flight hours*,  including instructional and cross-country flight time.
                  <br/><i>* Note: 250 hours is the FAA minimum requirement.</i>
                </li>
              </ul>
            </li>
            <li><b>Knowledge Test:</b> Pass a written knowledge exam covering flight instruction principles, regulations, and teaching methods.</li>
            <li><b>Practical Test:</b> Pass an oral exam and a practical flight test.  Your practical flight test will consist of you providing mock instruction to a Designated Pilot Examiner (DPE) to demonstrate teaching proficiency.</li>
          </ul>
        `,
      },
    ],
  },
  multiEngine: {
    title: "Multi Engine Rating (MEL / MEI)",
    items: [
      {
        question: "What is Required to Get my Multi-Engine Land (MEL) Add-On Rating?",
        answer: `
          <ul class="list-disc pl-8 mb-4">
            <li><b>Age:</b> Be at least 18 years old.</li>
            <li><b>Language Proficiency:</b> Proficient in English.</li>
            <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
            <li>
              <b>Flight Experience:</b>
              <br/><i>* Note: These hours are the FAA minimum requirement.</i>
              <ul class="list-disc pl-8 mb-4">
                <li>Hold a Valid Private Pilot License (PPL).</li>
                <li>Have logged a minimum of 40 hours of flight time as pilot-in-command (PIC).</li>
                <li>
                  Complete a minimum of 10 hours of flight training in a multi-engine aircraft, including:
                  <ul class="list-disc pl-8 mb-4">
                    <li>3 hours of flight training with an authorized instructor in preparation for the practical test.</li>
                    <li>3 hours of training in the last 60 days preceding the practical test.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b>Practical Test:</b> Pass an oral exam and a practical flight test (commonly known as the check ride) administered by an authorized FAA examiner.</li>
          </ul>
        `,
      },
      {
        question: "What is Required to Earn a Multi-Engine Instructor (MEI) Rating?",
        answer: `
          <ul class="list-disc pl-8 mb-4">
            <li><b>Age:</b> Be at least 18 years old.</li>
            <li><b>Language Proficiency:</b> Proficient in English.</li>
            <li><b>Medical Certificate:</b> Hold a valid FAA-issued medical certificate.</li>
            <li>
              <b>Flight Experience:</b>
              <ul class="list-disc pl-8 mb-4">
                <li>Hold a current Commercial Pilot Certificate with a Multi-Engine Land (MEL) rating.</li>
                <li>Complete a flight instructor training course.</li>
                <li>
                  Accumulate a minimum of 15 hours* of flight time as pilot-in-command (PIC) in multi-engine aircraft.
                  <br/><i>* Note: 15 hours is the FAA minimum requirement.</i>
                </li>
              </ul>
            </li>
            <li><b>Practical Test:</b> Successfully pass the MEI practical test with an FAA-designated examiner or an authorized flight instructor.</li>
          </ul>
        `,
      }
    ],
  },
};
