import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectInfo from './ProjectInfo';
import ProjectAbout from './ProjectAbout';
import { IProject } from '../../interfaces/common.d';

interface IProjectDescriptionProps {
  preloadedProject?: IProject;
  showAll?: boolean;
}

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({
  preloadedProject,
  showAll,
}: IProjectDescriptionProps) => {
  const [project, setProject] = useState<IProject>();
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(showAll || false);
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
    <Stack spacing={2} sx={{ m: 4 }}>
      {id !== undefined && (
        <Breadcrumbs separator='›' sx={{ pb: 2 }}>
          <Link
            underline='hover'
            key='1'
            color='inherit'
            component={RouterLink}
            to='/'
          >
            Directory
          </Link>
          <Link
            underline='hover'
            key='1'
            color='inherit'
            component={RouterLink}
            to={`/directory/${id}`}
          >
            {projectInfo.projectName}
          </Link>
        </Breadcrumbs>
      )}
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
          {showMore && (
            <>
              <ProjectInfo projectInfo={projectInfo} id='projectContact' />
              <ProjectInfo projectInfo={projectInfo} id='projectMaturity' />
            </>
          )}
          <Button
            onClick={() => {
              setShowMore(!showMore);
            }}
            sx={{ width: 200 }}
            variant='contained'
          >
            {showMore ? 'Less details' : 'More details'}
          </Button>
        </Stack>
        <Stack spacing={2}>
          <ProjectAbout description={detailedDescription} id='problem' />
          <ProjectAbout description={detailedDescription} id='solution' />
          <ProjectAbout description={detailedDescription} id='users' />
          <ProjectAbout
            description={detailedDescription}
            id='maintenanceModel'
          />
          <ProjectAbout description={detailedDescription} id='preRequisites' />
          <ProjectAbout description={detailedDescription} id='contributors' />
          <ProjectAbout description={detailedDescription} id='communications' />
          {showMore && (
            <>
              <ProjectAbout
                description={detailedDescription}
                id='projectSize'
              />
              <ProjectAbout
                description={detailedDescription}
                id='openSourceConsiderations'
              />
              <ProjectAbout
                description={detailedDescription}
                id='projectServiceOptions'
              />
              <ProjectAbout description={detailedDescription} id='sponsors' />
              <ProjectAbout
                description={detailedDescription}
                id='goalsObjectives'
              />
              <ProjectAbout
                description={detailedDescription}
                id='additonalInformation'
              />
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectDescription;
