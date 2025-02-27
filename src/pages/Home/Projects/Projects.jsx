import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const visibleCard = showAll ? projects : projects.slice(0, 3)

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])

    return (
        <div className="my-16 lg:my-24 max-w-[1300px] mx-auto">
            <SectionTitle title='Projects_'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-4 xl:mx-0'>
                {
                    visibleCard.map(project => <Fade
                        key={project.id}
                        duration={1000}
                        triggerOnce
                        direction='up'>
                        <ProjectCard
                            project={project}
                        ></ProjectCard>
                    </Fade>)
                }
            </div>
            <div className='text-center'>
                {
                    !showAll && <button
                        onClick={() => setShowAll(true)}
                        className="px-12 py-3 mt-6  duration-300  text-white rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all ease-in-out"
                    >
                        More Projects
                    </button>
                }
            </div>
        </div>
    );
};

export default Projects;