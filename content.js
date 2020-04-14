const content = {
  navBar: [
    { id: 0, name: "index", text: "me", link: "/" },
    { id: 1, name: "skills", link: "/skills" },
    { id: 2, name: "work", link: "/work" },
    { id: 3, name: "contact", link: "/contact" }
  ],
  skillIcons: [
    { name: "js" },
    { name: "vuejs" },
    { name: "css3" },
    { name: "sass" },
    { name: "react" },
    { name: "node-js" },
    { name: "php" },
    { name: "github" },
    { name: "html5" },
    { name: "angular" },
    { name: "aws" },
    { name: "python" },
    { name: "jenkins" },
    { name: "docker" },
    { name: "gulp" },
    { name: "java" }
  ],
  contactIcons: [
    {
      name: "linkedin",
      brand: true,
      text: "Get to know me.",
      link: "https://www.linkedin.com/in/sean-milburn-software/"
    },
    {
      name: "paper-plane",
      brand: false,
      text: "Let' talk.",
      link: "mailto:milburnsolutions@gmail.com"
    },
    {
      name: "github",
      brand: true,
      text: "Check out my code.",
      link: "https://github.com/smilburn1990"
    },
    {
      name: "file-download",
      brand: false,
      text: "Download my CV.",
      link:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/sean-milburn-cv.pdf"
    }
  ],
  work: [
    {
      name: "Bauce Brothers",
      link: "https://www.baucebrothers.com",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/baucebrothers-web-mobile.png",
      content:
        "I was really happy with how this site turned out. The guys wanted to migrate their Square Space site to Shopify, to help with the sales and reporting. It was my first exposure to the CMS and it's templating language (Liquid) but as you can see it really came to life. During the migration, we also added a lot more analytic tracking and SEO metadata to help drive sales conversion on the platform."
    },
    {
      name: "JustEat",
      link: "https://www.just-eat.co.uk",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/justeat-web-mobile.png",
      content:
        "JustEat brought me on board to help build the new menu web microsite into their current architecture. During the 9 months I spent there, I helped with many of the new features and personally developed the new Header and footer components that are used across the platform. This was my third, commercial VueJS project so I was able to bring a lot of new ideas to the table that contributed to the global rollout."
    },
    {
      name: "Menulog",
      link: "https://www.menulog.com.au",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/menulog-web-mobile.png",
      content:
        "Menulog shares the same codebase as JustEat so while building the menu for the UK and other European tenants, we built out a completely different theme for Australia and New Zeland in parallel. The theme contains lots of different algorithms for things like prices, currency conversion, opening times, location details and is completely toggleable by a single config value."
    },
    {
      name: "Mettrr",
      link: "https://www.mettrr.com",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/mettr-web-mobile.png",
      content:
        "I architected and built the whole front-end out for this brochure site. I decided to use Nuxt as the company was already familiar with Vue and they wanted to user Server Side Rendering for better SEO crawling. We also build a CMS into it using Netlify, which allowed the marketing team to update content and create new landing pages on the fly."
    },
    {
      name: "Love Home Swap",
      link: "https://www.lovehomeswap.com",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/lovehomeswap-web-mobile.png",
      content:
        "My role at Love Home Swap was to help modernise the front-end of the tech stack, as it was an old PHP relic. Using React/Redux I build a dynaimic component library using Node Package Manager and swapped many of the old features out for much slicker versions."
    },
    {
      name: "Ideal Flatmate",
      link: "https://www.idealflatmate.com",
      image:
        "https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/ideaflatmate-web-mobile.png",
      content:
        "The guys at Ideal Flatmate just rebranded and were begining to outsource their front-end code to a small company in Eastern Europe. I helped to manage the development process and build out some of the features using React/Redux as they were having trouble relaying their vision without someone in house."
    }
  ]
};

export default content;
