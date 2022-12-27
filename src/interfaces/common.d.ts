// Declaring module for markdown files
declare module '*.md' {
  const value: string;
  export default value;
}

export interface IAbout {
  aboutBoard: string;
  aboutCharter: string;
  aboutEvaluationCriteria: string;
}

export interface IDownloadFile {
  title: string;
  asset: string;
  name: string;
}

export interface IProject {
  projectInfo: {
    projectName: string;
    projectOwner: string;
    projectContact: string;
    projectLandingPage: string;
    projectRepository: string;
    programmingLanguage: Array<string>;
    openSourceLicense: Array<string>;
    cdiscStandards: Array<string>;
    agreeWithCdiscCodeOfEthics: boolean;
    projectMaturity: string;
    user: Array<string>;
    logoUrl: string;
  };
  detailedDescription: {
    problem: string;
    solution: string;
    openSourceConsiderations: string;
    maintenanceModel: string;
    projectSize: string;
    contributors: string;
    users: string;
    preRequisites: string;
    projectServiceOptions: string;
    sponsors: string;
    goalsObjectives: string;
    communications: string;
    additonalInformation: string;
  };
}

export interface IHackathonProject {
  name: string;
  author: Array<string>;
  repository: string;
  description: string;
  license: string;
}
export interface IHackathon {
  hackathonInfo: {
    name: string;
    description: string;
    landingPage: string;
    cdiscStandards: Array<string>;
    logoUrl: string;
  };
  projects: { [name: string]: IHackathonProject };
}

export interface IDirectoryItem {
  id: string;
  name: string;
  description: string;
  categories: string[];
  type?: 'hackathon';
}
