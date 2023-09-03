import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';

const Work = () => {
  return (
    <div className="py-24 w-full flex justify-center w-full">
      <div className="flex flex-col gap-24 max-w-7xl px-4 w-full">
        {PROJECTS.map((project) => (
          <ProjectDetails
            name={project.name}
            description={project.description}
            isDescriptionOnLeft={project.isDescriptionOnLeft}
            image={project.previewImage}
            techs={project.techs}
            color={project.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
