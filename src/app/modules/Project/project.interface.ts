export type TProject = {
  title: string;
  thumbnail: string;
  description: string;
  projectRole: string;
  technologiesUsed: string[];
  challengesFaced?: string;
  solution?: string;
  keyFeatures: string[];
  liveLink: string;
  frontendSourceCode: string;
  backendSourceCode?: string;
  apiDocumentation?: string;
  projectGoals?: string;
  futureImprovements?: string;
  securityConsiderations?: string;
  projectTimeline?: string;
  isFeatured?: boolean;
  isDeleted?: boolean;

};
