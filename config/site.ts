export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Markovapps",
  description: "Make beautiful websites regardless of your design experience.", // TODO
  background: "/17580.jpg",
  navItems: [
    {
      label: "Welpeny",
      href: "/welpeny",
      icon: "/welpeny.png",
    },
    {
      label: "TimeSheet",
      href: "/timesheet",
      icon: "/timesheet/logo.png",
    },
    {
      label: "Couply",
      href: "/couply",
      icon: "/couply/logo.png",
    },
  ],
  navMenuItems: [
    {
      label: "Welpeny",
      href: "/welpeny",
      icon: "/welpeny.png",
    },
    {
      label: "TimeSheet",
      href: "/timesheet",
      icon: "/timesheet.png",
    },
    {
      label: "Couply",
      href: "/couply",
      icon: "/couply/logo.png",
    },
  ],
  privacyPolicyNavItems: [
    {
      label: "Welpeny",
      href: "/welpeny/privacypolicy",
      icon: "/welpeny.png",
    },
    {
      label: "TimeSheet",
      href: "/timesheet/privacypolicy",
      icon: "/timesheet.png",
    },
    {
      label: "Couply",
      href: "/couply/privacypolicy",
      icon: "/couply/logo.png",
    },
  ],
  links: {
    contactUs: 'https://docs.google.com/forms/d/e/1FAIpQLSd6gJTIKvnUloDoGS9DiCnu5-ISSbyZBFymcrwmm5g-stWMWw/viewform?usp=sharing',

    // github: "https://github.com/nextui-org/nextui",
    // twitter: "https://twitter.com/getnextui",
    // docs: "https://nextui.org",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
