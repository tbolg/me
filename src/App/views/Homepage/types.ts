export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Secondment {
  teamName: string;
  teamUrl?: string;
  achievements: string[];
}

export interface Role {
  title: string;
  startDate: string;
  endDate?: string;
  secondments: Secondment[];
}

export interface Experience {
  companyName: string;
  companyUrl: string;
  roles: Role[];
}
