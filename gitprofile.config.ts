// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'muhammdirfan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/muhammdirfan/muhammdirfan.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/muhammdirfan/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['muhammdirfan/my-project1', 'muhammdirfan/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['muhammdirfan/gitprofile', 'muhammdirfan/pandora'], // List of repository names to display. example: ['muhammdirfan/my-project1', 'muhammdirfan/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'synatxroot',
          description:
            'Syntaxroot is the website of the IT company that offers IT services, including software development, web development, mobile app development, product design, IT Consultation, quality assurance, and helping clients choose them right platform to build their products.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.syntaxroot.com/',
        },
        {
          title: 'smacty.com',
          description:
            'New type of cloud infrastructure is enabling device management, development and sales. Gain better insight in sales, upsell features and connect it to your development.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://smacty.com',
        },
        {
          title: 'CANULO HealthCare System',
          description:
            'Canulo is the dashboard for healthcare mobile application, it can handle professionals, Establishments, and medical students.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'canulo-dashboard.vercel.app/admin/default',
        },
        {
          title: 'HealthCare system website',
          description:
            'Canulo is a healthcare website that showcase information about healthcare mobile and web applications where users can get appointments from doctors and doctors can post their post on the website.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'canuloweb.vercel.app/',
        },
        {
          title: 'Broshall Associates',
          description:
            'Broshall Associates Pvt Ltd Gilgit Baltistan deals with Government Contractors, Engineers, Builders, Constructors, Property Dealers, Land Developers, Minerals, Minners and General Order Supplier',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://broshall-associates-wine.vercel.app/',
        },
        {
          title: 'MedsTown Dashboard',
          description:
            'MedsTown Dashboard is a web application where users can get appointments with doctors and doctors can post their posts on the website',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://medsdashboard.vercel.app/admin/dashboard',
        },
      ],
    },
  },
  seo: {
    title: 'Muhammad Irfan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'muhammad-irfan445',
    twitter: 'Muhamma07089743',
    mastodon: '/~0198e443080bd92b02?s=1110580755057594368',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '16734776/muhammad-irfan', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.muhammdirfan.com',
    phone: '+923120973534',
    email: 'muhammadirfaan048@gmail.com',
  },
  resume: {
    fileUrl:
      'https://europa.eu/europass/eportfolio/screen/share/ce8c37bf-a836-44c1-8f99-718ebb13076e?lang=en', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Zumurs Tech',
      position: 'Front-End developer',
      from: 'January 2019',
      to: 'September 2021',
      companyLink: '',
    },
    {
      company: 'NorthCodex IT Solutions',
      position: 'Sr.Front-End developer',
      from: 'September 2021',
      to: 'September 2023',
      companyLink: 'https://northcodex.com/',
    },
     {
      company: 'Genesis Engineering',
      position: 'Software developer',
      from: 'December 2023',
      to: 'Present',
      companyLink: 'https://www.genesisengr.com/',
    },
  ],
  certifications: [
    {
      name: 'Interactivity with JavaScript',
      year: 'October 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/XXMY75J5UADY',
    },
    {
      name: 'Front-End Web Development with React',
      year: 'April 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/AHF5M8MHCWR8',
    },
  ],
  educations: [
    {
      institution: 'Karakoram International University Gilgit-Baltistan',
      degree: "Bacholar's In Information Technology",
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'muhammdirfan', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/muhammdirfan/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
