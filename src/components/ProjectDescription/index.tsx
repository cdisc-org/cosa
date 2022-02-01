import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectInfo from './ProjectInfo';
import ProjectAbout from './ProjectAbout';
import { IProject } from '../../common.d';

interface IProjectDescriptionProps {
  id: string;
}

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({
  id,
}: IProjectDescriptionProps) => {
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const loadYaml = async () => {
      const data = await import(`../../assets/projects/${id}/${id}.json`);
      setProject(data);
    };

    loadYaml();
  }, [id]);

  if (project === undefined) {
    return null;
  }

  const { projectInfo, description } = project;

  return (
    <Stack spacing={2} sx={{ m: 4 }}>
      <Typography variant='h3' color='grey.700' sx={{ mb: 4 }}>
        {projectInfo.projectName}
      </Typography>
      <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
        <Stack spacing={2}>
          <Box
            component='img'
            sx={{ height: 80, width: 80 }}
            src={require(`../../assets/projects/${id}/${projectInfo.logoUrl}`)}
          />
          <ProjectInfo projectInfo={projectInfo} id='projectOwner' />
          <ProjectInfo projectInfo={projectInfo} id='projectRepository' />
          <ProjectInfo projectInfo={projectInfo} id='projectLandingPage' />
          <ProjectInfo projectInfo={projectInfo} id='openSourceLicense' />
          <ProjectInfo projectInfo={projectInfo} id='user' />
          <ProjectInfo projectInfo={projectInfo} id='cdiscStandards' />
          <ProjectInfo projectInfo={projectInfo} id='programmingLanguage' />
        </Stack>
        <Stack spacing={2}>
          <ProjectAbout description={description} id='problem' />
          <ProjectAbout description={description} id='solution' />
          <ProjectAbout description={description} id='users' />
          <ProjectAbout description={description} id='maintenanceModel' />
          <ProjectAbout description={description} id='preRequisites' />
          <ProjectAbout description={description} id='contributors' />
          <ProjectAbout description={description} id='communications' />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectDescription;
