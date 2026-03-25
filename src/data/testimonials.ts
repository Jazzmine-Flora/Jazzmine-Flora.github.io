export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Collaborator feedback. */
export const testimonials: Testimonial[] = [
  {
    quote: "She's great and really helpful.",
    name: "Steve C.",
    role: "Founder, Zenius",
  },
  {
    quote: "Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",
    name: "A. M.",
    role: "CTO, B2B SaaS",
  },
  {
    quote: "Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",
    name: "R. K.",
    role: "Founder, edtech",
  },
];
