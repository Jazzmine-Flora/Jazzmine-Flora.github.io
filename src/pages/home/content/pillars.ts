export type PillarItem = {
  title: string;
  body: string;
};

export const pillars: PillarItem[] = [
  {
    title: "A product outgrowing its structure",
    body: "The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds.",
  },
  {
    title: "A codebase that's becoming fragile",
    body: "People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick.",
  },
  {
    title: "A prototype that needs to grow up",
    body: "The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features.",
  },
  {
    title: "AI that needs to actually work",
    body: "Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable.",
  },
];
