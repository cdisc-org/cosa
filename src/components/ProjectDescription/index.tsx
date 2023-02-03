import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectInfo from './ProjectInfo';
import ProjectAbout from './ProjectAbout';
import { IProject } from '../../interfaces/common.d';

interface IProjectDescriptionProps {
  preloadedProject?: IProject;
  showAll?: boolean;
}

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({
  preloadedProject,
}: IProjectDescriptionProps) => {
  const [project, setProject] = useState<IProject>();
  const navigate = useNavigate();

  const { id } = useParams();

  const shareLinks = [
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
      icon: <LinkedInIcon sx={{ width: 32, height: 32 }} />,
      color: 'primary.main',
    },
    {
      href: `https://www.reddit.com/submit?url=${window.location.href}`,
      icon: (
        <RedditIcon
          sx={{
            width: 28,
            height: 28,
            transform: 'translateY(4px)',
            backgroundColor: 'orangered',
            borderRadius: '50%',
          }}
        />
      ),
      color: 'white',
    },
  ];

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
          <ProjectInfo projectInfo={projectInfo} id='projectContact' />
          <ProjectInfo projectInfo={projectInfo} id='projectMaturity' />
          <Typography variant='subtitle1' color='grey.600'>
            Share This Page
          </Typography>
          <Stack key='shareLinks' direction='row' spacing={2}>
            {shareLinks.map((link, index) => (
              <IconButton
                key={index}
                component='a'
                href={link.href}
                target='_blank'
                rel='noreferrer'
                sx={{
                  width: 23,
                  height: 23,
                  margin: 0.5,
                  color: link.color,
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
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
          <ProjectAbout description={detailedDescription} id='projectSize' />
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
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectDescription;
