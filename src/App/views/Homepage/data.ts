import { Education } from './types/education';
import { Project } from './types/projects';
import { Experience } from './types/workExperience';

export const workExperience: Experience[] = [
  {
    companyName: 'Seek Ltd.',
    companyUrl: 'https://www.seek.com.au',
    roles: [
      {
        title: 'Software Engineer',
        startDate: '02/2022',
        secondments: [
          {
            teamName: 'SEEK API Team',
            teamUrl: 'https://developer.seek.com',
            achievements: [
              'Adding new features to the event driven web-hook systems responsible for delivering job applications and other data to SEEK’s integration partners',
              'Trouble-shoot and respond to production incidents through to resolution as a member of the teams on-call roster',
              'Developing a web-hook testing tool to assist software developers in seamlessly integrating with SEEK',
              'Building embeddable widget products that reduce integration effort for partners and to enhance SEEK customer experience and value in partner systems',
              'Creating open source React components that demonstrate building UI components that utilise the SEEK GraphQL API',
              'Adding features to SEEK’s external GraphQL API',
            ],
          },
          {
            teamName: 'SEEK Business',
            teamUrl: 'https://www.seekbusiness.com.au',
            achievements: [
              'Uplifting legacy SEEK Business .NET systems into a React-Typescript microservices stack',
              'Architecting and building a modern, low-latency authorisation system',
              'Adding an enquiry management feature to allow business sellers to manage all the enquiries on their listing in one place',
              'Rebuilding the homepage in React',
              'Rebuilding the sites legacy search API in Typescript and migrating Elasticsearch indexing from a timer based system to an event-driven one',
              'Developing a user preferences search API powered by Elasticsearch',
              'Ideating and creating prototypes of new products',
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: 'Transurban Ltd.',
    companyUrl: 'https://www.transurban.com',
    roles: [
      {
        title: 'Data Engineer',
        startDate: '07/2020',
        endDate: '12/2021',
        secondments: [
          {
            teamName: 'AI, ML and Analytics',
            achievements: [
              'Work with technology stakeholders to architect real-time data applications that assist Transurban in better managing their tollway assets',
              'Implement and maintain ETL processes for warehousing roadside IoT device data',
              'Architect and implement a process for transforming, warehousing and serving live traffic data received from TomTom GPS',
              'Design and develop API and data infrastructure for license plate recognition software',
              'Collaborate with Indra Sistemas to build a data streaming solution for Transurban’s Queensland tollway assets',
              'Perform impact and cost assessment for proposed AWS cloud solution architecture',
            ],
          },
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'SpotifySquared',
    githubUrl: 'https://github.com/tbolg/SpotifySquared',
    description:
      'A minimalist Spotify widget. It was inspired by a similar app called Silicio, but provides more controls to the user. This is a project I have more plans for going forward, so keep an eye on it!',
    downloadUrl:
      'https://github.com/tbolg/SpotifySquared/releases/download/development/SpotifySquared.V1.0.zip',
  },
  {
    name: 'Scalpel',
    githubUrl: 'https://github.com/SMAT-Lab/Scalpel',
    description: `Scalpel is a Python Static Analysis Framework that provides essential program analysis functions that assist in building robust Python applications. 
        For my honours year research project, I significantly contributed to this frameworks type inference module by implementing a nascent heuristic based type inference system.`,
  },
];

export const education: Education = {
  university: 'Monash University',
  degree: 'Bachelor of Software Engineering (Honours)',
  notes: 'Graduated with Distinction',
};
