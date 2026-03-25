export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Past collaborators (initials when requested). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",
    name: "A. M.",
    role: "CTO, B2B SaaS",
  },
  {
    quote:
      "Finally someone who didn’t disappear after the first PR. Front end, API, database: Taliba stayed until it made sense.",
    name: "L. Chen",
    role: "Product lead, small AI team",
  },
  {
    quote:
      "Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",
    name: "R. K.",
    role: "Founder, edtech",
  },
  {
    quote:
      "Less like a ticket-closer, more like another senior in the room. They cared whether the next person could work in the repo.",
    name: "S. Ortiz",
    role: "Engineering manager, fintech",
  },
];
