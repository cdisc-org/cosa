import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface IProject {
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
    maturity: string;
    user: Array<string>;
    logoUrl: string;
  };
  description: { [name: string]: string };
}

interface IProjectDescriptionProps {
  id: string;
}

interface IInfo {
  projectInfo: IProject['projectInfo'];
  id: keyof IProject['projectInfo'];
}

const Info: React.FC<IInfo> = ({ projectInfo, id }: IInfo) => {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" color="grey.300">
        {id}
      </Typography>
      <Typography variant="body1" color="grey.800">
        {projectInfo[id]}
      </Typography>
    </Stack>
  );
};

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({
  id,
}: IProjectDescriptionProps) => {
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const loadYaml = async () => {
      const data = await import(`../assets/projects/${id}/${id}.json`);
      setProject(data);
    };

    loadYaml();
  }, [id]);

  if (project === undefined) {
    return null;
  }

  const { projectInfo, description } = project;

  return (
    <Stack direction="row" sx={{ flex: '1', m: 2 }} spacing={8}>
      <Stack spacing={2} sx={{ ml: 4 }}>
        <Box
          component="img"
          src={require(`../assets/projects/${id}/${projectInfo.logoUrl}`)}
        />
        <Info projectInfo={projectInfo} id="projectName" />
        <Info projectInfo={projectInfo} id="projectOwner" />
        <Info projectInfo={projectInfo} id="projectRepository" />
        <Info projectInfo={projectInfo} id="projectLandingPage" />
      </Stack>
    </Stack>
  );
};

export default ProjectDescription;
