import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IHackathon } from '../../interfaces/common.d';
import HackathonDirectory from './HackathonDirectory';
import HackathonProject from './HackathonProject';

const HackathonDescription: React.FC = () => {
  const [hackathon, setProject] = useState<IHackathon>();
  const navigate = useNavigate();

  const { id, projectId } = useParams();

  useEffect(() => {
    const loadJson = async () => {
      try {
        const data = await import(`../../assets/hackathons/${id}/${id}.json`);
        setProject(data);
      } catch (e) {
        navigate('/notfound', { replace: true });
      }
    };

    loadJson();
  }, [id, navigate]);

  if (hackathon === undefined) {
    return null;
  } else {
    const { hackathonInfo, projects } = hackathon;
    if (projectId === undefined) {
      return (
        <HackathonDirectory
          id={id as string}
          hackathonInfo={hackathonInfo}
          projects={projects}
        />
      );
    } else {
      return (
        <HackathonProject
          id={id as string}
          project={projects[projectId]}
          hackathonName={hackathonInfo.name}
        />
      );
    }
  }
};

export default HackathonDescription;
