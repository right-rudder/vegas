import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER } from "../consts";

export const enrollData = {
  eyebrow: "Enroll Now",
  heading: "Let's Start Your Aviation Career",
  subheading:
    "Fill out this form and get ready to soar through the skies.",
  info: {
    title: "Give Us A Call Or Drop By Our Place",
    intro: "We're here to assist you with any questions or to help you get started on your aviation journey.",
    locationLabel: "Our Location",
    addressLine1: ADDRESS_LINE_1,
    addressLine2: ADDRESS_LINE_2,
    phoneLabel: "Phone Number",
    phoneValue: PHONE_NUMBER,
  },
  form: {
    method: "post",
    action: "#",
    fields: [
      {
        id: "first_name",
        label: "First Name",
        placeholder: "John",
        required: true,
        type: "text",
        autocomplete: "given-name",
      },
      {
        id: "last_name",
        label: "Last Name",
        placeholder: "Doe",
        required: true,
        type: "text",
        autocomplete: "family-name",
      },
      {
        id: "email",
        label: "Email",
        placeholder: "example@yourmail.com",
        required: true,
        type: "email",
        inputmode: "email",
        autocomplete: "email",
      },
      {
        id: "phone",
        label: "Phone Number",
        placeholder: "+1 234 567 8910",
        required: true,
        type: "tel",
        inputmode: "tel",
        autocomplete: "tel",
      },
      {
        id: "courses",
        label: "Preferred Programs",
        type: "checkboxes",
        required: true,
        colSpan: "full",
        options: [
          {
            value: "Private Pilot",
            label: "Private Pilot",
            required: true,
          },
          {
            value: "Commercial Pilot",
            label: "Commercial Pilot",
            required: true,
          },
          {
            value: "Instrument Rating",
            label: "Instrument Rating",
            required: true,
          },
          {
            value: "Certified Flight Instructor",
            label: "Certified Flight Instructor",
            required: true,
          },
          {
            value: "Multi Engine Rating",
            label: "Multi Engine Rating",
            required: true,
          },
          {
            value: "Flight Simulation",
            label: "Flight Simulation",
            required: true,
          },
        ],
      },
      {
        id: "message",
        label: "Message",
        placeholder: "Anything else we need to know?",
        type: "textarea",
        rows: 6,
        colSpan: "full",
      },
    ],
    cta: "Send Message",
  },
};