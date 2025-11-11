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
    title: `<strong class="text-primary-500">Frequent Asked Questions</strong>`,
    description: "Clear any queries you might have",
    buttons: [{ text: "Start Training", href: "/contact", style: "btn-transparent" }],
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
              <li><b>Flight Hours:</b> Log at least 40 hours of flight time*. This includes at least 10 hours of solo flying, five hours of which must be dedicated to cross-country flights.<br/><i>*Note: 40 hours is a very ambitious schedule. The national average to complete a PPL  is 70 hours.</i></li>
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
};
