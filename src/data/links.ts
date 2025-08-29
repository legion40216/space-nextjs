export const navLinks = [
  { label: "Home", href: "/", number: "00" },
  { label: "Destination", href: "/destination", number: "01" },
  {
    label: "Crew",
    number: "02",
    href: "/crew",
    subLinks: [
      { label: "Overview", href: "/crew" },
      { label: "Grid Template", href: "/crew-grid-template" },
      { label: "Grid Span", href: "/crew-12-column-span" },
    ],
  },
  { label: "Technology", href: "/technology", number: "03" },
];
