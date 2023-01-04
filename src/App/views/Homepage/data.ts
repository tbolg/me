import { Experience } from './types';

export const workExperience: Experience[] = [
  {
    companyName: 'Seek Ltd.',
    companyUrl: 'www.seek.com.au',
    roles: [
      {
        title: 'Associate Software Engineer',
        startDate: '02/2022',
        secondments: [
          {
            teamName: 'SEEK API Team',
            teamUrl: 'https://developer.seek.com',
            achievements: [
              'Adding new features to event driven web- hook systems responsible for managing over 50% of ads on SEEK',
              'Developing tools to help software engineers seamlessly integrate with SEEK',
              'Building embeddable widget products to enhance SEEK customer experience/value in partner systems',
              'Creating open source React components that demonstrate building UI components that utilise the SEEK GraphQL API',
            ],
          },
          {
            teamName: 'SEEK Business',
            teamUrl: 'https://www.seekbusiness.com.au/',
            achievements: [
              'Uplift legacy SEEK Business .NET systems into a React-Typescript microservices stack',
              'Developing new features and products',
              'Architecting automation and authorisation solutions',
              'Rebuilding .NET search API in Typescript, utilising Elasticsearch as a search engine',
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
    companyUrl: 'https://www.transurban.com/',
    roles: [
      {
        title: 'Data Engineer',
        startDate: '07/2020',
        endDate: '12/2021',
        secondments: [
          {
            teamName: 'AI, ML and Analytics',
            achievements: [
              'Work with technology stakeholders to architect real-time data applications',
              'Implement and maintain ETL processes for warehousing roadside IoT device data',
              'Design and develop API and data infrastructure for license plate recognition software',
              'Perform impact and cost assessment for proposed AWS cloud solution architecture',
            ],
          },
        ],
      },
    ],
  },
];
