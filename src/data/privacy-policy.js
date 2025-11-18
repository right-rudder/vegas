import { SITE_DESCRIPTION, KEYWORDS, COMPANY_NAME, EMAIL_ADDRESS } from "./consts";

export const privacyPolicies = {
  siteTitle: `Privacy Policy | ${COMPANY_NAME}`,
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/flight-training/banner-pilots-cockpit-backview-vegas-aviation-flight-training.jpg",
      alt: "Backview of pilots in the cockpit",
    },
    eyebrow: "Legal Documents",
    title: "Privacy Policy",
  },

  subheading: `Last updated: 11/16/2025`,
  content: [
    {
      heading: "Introduction",
      paragraphs: [
        `${COMPANY_NAME} operates the https://vegasaviation.com/ website. This page is used to inform website visitors regarding our policies on the collection, use, and disclosure of Personal Information for users who interact with our website or services.`,
        "By using our website, you agree to the collection and use of information as outlined in this policy. The Personal Information we collect is used to provide and improve our services. We do not use or share your information except as described in this Privacy Policy.",
        "Terms used in this Privacy Policy follow the definitions provided in our Terms of Service, which is accessible at /terms-of-service unless otherwise specified.",
      ],
    },
    {
      heading: "Information Collection and Use",
      paragraphs: [
        "To provide a better experience and respond to your inquiries, we may ask you to provide certain personally identifiable information, including your name, phone number, email address, and postal address. This information is used solely for communication and service-related purposes.",
      ],
    },
    {
      heading: "Log Data",
      paragraphs: [
        "Whenever you visit our website, we collect information your browser sends to us, referred to as Log Data. This may include your computer’s IP address, browser type and version, pages visited, time and date of visit, time spent on pages, and other diagnostic data.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Cookies are small files stored on your device that help us understand user behavior and improve your experience. You can choose to accept or decline cookies through your browser settings.",
        "We use cookies to track the activity on our website and hold certain information for user preference and analytics purposes.",
      ],
    },
    {
      heading: "Service Providers",
      paragraphs: [
        "We may employ third-party companies and individuals to provide services on our behalf, such as website analytics, CRM automation, or email communications.",
        "These service providers may have access to your Personal Information but are obligated not to disclose or use it for any other purpose.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We value your trust in providing us your Personal Information and use commercially reasonable methods to protect it. However, no transmission over the internet or method of storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Links to Other Sites",
      paragraphs: [
        `Our website may include links to other websites not operated by ${COMPANY_NAME}. We advise you to review the privacy policies of these third-party sites. We are not responsible for the content or privacy practices of any external services.`,
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "Our services are not intended for individuals under the age of 13. We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can remove the information.",
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      paragraphs: [
        "We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We recommend checking this page regularly to stay informed about our information practices.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        `If you have questions or concerns about this Privacy Policy, please contact us at ${EMAIL_ADDRESS}.`,
      ],
    },
  ],
};