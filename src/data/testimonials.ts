export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Taliba brought clarity to our Next.js stack and helped us scale from pilot to production without a disruptive rewrite. Structure, documentation, and delivery were all senior-level.",
    name: "A. M.",
    role: "CTO · B2B SaaS (North America)",
  },
  {
    quote:
      "We needed someone who could own the full picture—React frontends, APIs, and database concerns. The work was thoughtful, maintainable, and aligned with how we actually ship.",
    name: "L. Chen",
    role: "Product Lead · AI tooling",
  },
  {
    quote:
      "Outstanding communication and execution. Performance issues were diagnosed properly, not patched over. I’d work together again on a high-stakes product.",
    name: "R. K.",
    role: "Founder · EdTech platform",
  },
  {
    quote:
      "From system design to shipping features, the engagement felt like a true senior partner—not ticket-driven output. Our codebase is measurably easier to extend.",
    name: "S. Ortiz",
    role: "Engineering Manager · Fintech",
  },
];
