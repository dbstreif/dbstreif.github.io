// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dbstreif', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 20, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['dbstreif/cc-licenses', 'dbstreif/dbstreif.github.io', 'dbstreif/Rocket-Globe', 'dbstreif/dbstreif', 'dbstreif/GoatScraper', 'dbstreif/obsidian-remote'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['dbstreif/iambic-controller', 'dbstreif/Distrubuted-NPB-Testbench', 'dbstreif/heartbeatstyle-gossip', 'dbstreif/Giggity', 'dbstreif/nvim-config', 'dbstreif/ChristmasPI', 'dbstreif/SpaceX-API-PY', 'dbstreif/RogueCompany'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Featured',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Iambic Controller Board',
          description:
            ' Custom PCB designed to interface with ATtiny85-based firmware for Morse keying.',
          imageUrl:
            'https://github.com/dbstreif/iambic-controller-board/raw/main/assets/iambic-controller-board-slant.png',
          link: 'https://github.com/dbstreif/iambic-controller-board',
        },
        {
          title: 'QCX+ 5W CW Transceiver Custom Build',
          description:
            ' QRP Labs QCX+ 5W CW Radio Transceiver modified for 15m band (21MHz) frequency range. This project includes Custom Frontplate/Backplate parametric part designs, and specs/calculations for inductance and capacitance values for the transformer and low pass filter.',
          imageUrl:
            'https://github.com/dbstreif/Custom-QCX-Plus/raw/main/assets/top.jpg',
          link: 'https://github.com/dbstreif/Custom-QCX-Plus',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Dominic Streif', description: 'My name is Dominic Streif, and I am a current student at California Polytechnic State University actively pursuing a B.S. in Computer Science with a concentration in cybersecurity.\n\nI have a strong passion for designing software that is robust, scalable, and used for the common good of society. I believe that with my eagerness to learn and strong curiosity as a software developer, I can contribute to the advancement of technology today, and discover new, innovative solutions in this ever evolving field.', imageURL: 'https://avatars.githubusercontent.com/u/57925530?s=400&u=167660973adb0e287bfea09cca599f1708900e35&v=4' },
  social: {
    linkedin: 'dominic-streif',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'dbstreif',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'dbstreif.github.io',
    phone: '',
    email: 'streif.dominic@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1YqKm9fSLr0cpCSHCm3Fyu0_g-EwomnbL', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Bash',
    'Go',
    'C',
    'C++',
    'Rust',
    'Linux',
    'Git',
    'Java',
    'Docker',
    'CAN',
    'Embedded Systems',
    'Radio Frequency',
    'Satellite Communications',
    'Soldering',
    'Microcontrollers',
    'Qt framework',
    'Vim',
    'Azure Devops',
    'MySQL',
    'PostgreSQL',
    'Morse Code',
  ],
  experiences: [
    {
      company: 'California Polytechnic University San Luis Obispo',
      position: 'Satellite Security Researcher',
      from: 'September 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'California Polytechnic University San Luis Obispo',
      position: 'Computer Science Teaching Assistant/Mathematics Grader',
      from: 'January 2025',
      to: 'June 2025',
      companyLink: '',
    },
    {
      company: 'Altec Industries',
      position: 'Core Controls Developer (Intern)',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: 'https://www.altec.com/',
    },
    {
      company: 'California Polytechnic University San Luis Obispo',
      position: 'Undergraduate Researcher',
      from: 'January 2024',
      to: 'May 2024',
      companyLink: '',
    },
    {
      company: 'Odin Waterpolo Club',
      position: 'Sports Coach',
      from: 'January 2020',
      to: 'September 2023',
      companyLink: 'https://odinwaterpolo.com/',
    },
  ],
  certifications: [
    {
      name: 'Amateur Radio Operator Class License',
      body: 'General Class License issued by the Federal Communications Commission\nCredential ID KO6LCW',
      year: 'November 2025',
      link: '',
    },
    {
      name: 'Export Compliance',
      body: 'CITI Program',
      year: 'October 2025',
      link: 'https://www.citiprogram.org/verify/?w32d33798-b681-45cd-857e-7e08e5fc79a5-73145819',
    },
    {
      name: 'Information Privacy and Security',
      body: 'CITI Program',
      year: 'October 2025',
      link: 'https://www.citiprogram.org/verify/?w798fa248-a45a-4184-8e0b-6bc2cbd82a6c-73145820',
    },
  ],
  educations: [
    {
      institution: 'California Polytechnic University San Luis Obispo',
      degree: 'Bachelor\'s degree, Computer Science',
      from: '2023',
      to: '2026',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'dbstreif', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-QYBZ2WK9DH', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

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
      'dark',
      'light',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
