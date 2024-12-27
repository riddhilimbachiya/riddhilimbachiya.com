import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';
import Typography from '../general/typography';

const Work = () => {
  return (
    <div className="py-24 w-full flex justify-center max-md:py-16">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2">
            Work
          </Typography>
          <Typography variant="body1" className="max-lg:text-center">
            Check out some of my recent work – cool products I’ve been part of,
            built using the latest tech and libraries to create something
            awesome!
          </Typography>
        </div>
        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {PROJECTS.map((project) => (
            <ProjectDetails
              name={project.name}
              description={project.description}
              isDescriptionOnLeft={project.isDescriptionOnLeft}
              image={project.previewImage}
              techs={project.techs}
              color={project.color}
              colorClass={project.colorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
