import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectInfo from './ProjectInfo';
import ProjectAbout from './ProjectAbout';
import { IProject } from '../../interfaces/common.d';
import Container from '@mui/material/Container';

interface IProjectDescriptionProps {
  preloadedProject?: IProject;
}

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({
  preloadedProject,
}: IProjectDescriptionProps) => {
  const [project, setProject] = useState<IProject>();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const loadYaml = async () => {
      try {
        const data = await import(`../../assets/projects/${id}/${id}.json`);
        setProject(data);
      } catch (e) {
        navigate('/notfound', { replace: true });
      }
    };

    if (preloadedProject === undefined) {
      loadYaml();
    } else {
      setProject(preloadedProject);
    }
  }, [id, preloadedProject, navigate]);

  if (project === undefined) {
    return null;
  }

  const { projectInfo, detailedDescription } = project;

  return (
    <Container maxWidth='lg'>
      <Stack spacing={2} sx={{ m: 4 }}>
        <Typography variant='h2' sx={{ mb: 4 }}>
          {projectInfo.projectName}
        </Typography>
        <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
          <Stack spacing={2}>
            <Box
              component='img'
              sx={{ height: 80, width: 80 }}
              src={
                id === undefined
                  ? require(`../../assets/images/cosaLogo.png`)
                  : require(`../../assets/projects/${id}/logo.png`)
              }
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
            <ProjectAbout description={detailedDescription} id='problem' />
            <ProjectAbout description={detailedDescription} id='solution' />
            <ProjectAbout description={detailedDescription} id='users' />
            <ProjectAbout
              description={detailedDescription}
              id='maintenanceModel'
            />
            <ProjectAbout
              description={detailedDescription}
              id='preRequisites'
            />
            <ProjectAbout description={detailedDescription} id='contributors' />
            <ProjectAbout
              description={detailedDescription}
              id='communications'
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProjectDescription;
