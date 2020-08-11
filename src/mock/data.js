import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lena', // e.g: 'Name | Developer'
  lang: 'sv', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hej, jag heter',
  name: 'Lena Nordström',
  subtitle: 'och är frontend-utvecklare.',
  cta: 'Läs mer',
};

// ABOUT DATA
export const aboutData = {
  img: 'portrait_drawing.png',
  paragraphOne:
    'Jag har gått en tvåårig YH-utbildning till Front End Developer och har en master i fri konst i bagaget - jag är en nyfiken utvecklare med intresse för det visuella.',
  paragraphTwo:
    'Mycket av min tid går åt till att lära mig nya tekniker och att göra projekt i syfte att bli bättre på kod och problemlösning. Det är både utmanande och utvecklande vilket gör att jag tycker webbutveckling är så roligt.',
  paragraphThree:
    'Jag är engagerad, prestigelös och motiverad att komma vidare mot att bli en så bra utvecklare som möjligt.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'facesearch.png',
    title: 'The Face Searcher',
    info:
      'Face Searcher använder React.js i frontend och Clarifai API för att känna igen om det finns ett ansikte i en angiven bild. Inloggning, registrering och API-anrop sköts av en node.js-server som är byggd med ramverket Express, knex SQL query builder och databasen PostgreSQL.',
    info2: 'Applikationen är deployad på Heroku och kan ta lite tid att ladda in.',
    url: 'https://facesearcher.herokuapp.com/',
    repo: 'https://github.com/Lenanor/facerecognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn.png',
    title: 'E-butik',
    info:
      'En hittepå-onlinebutik byggd med React.js, Redux och Styled Components. Som databas används Firebase och (test-)betalningen sköts via Stripe API.',
    info2: 'Applikationen är deployad på Heroku och kan ta lite tid att ladda in.',
    url: 'https://crwn-lenano.herokuapp.com/',
    repo: 'https://github.com/Lenanor/crwn-clothing', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lena-nordstr%C3%B6m/?originalSubdomain=se',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Lenanor?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
