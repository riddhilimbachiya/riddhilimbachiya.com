import React from 'react';

import { PERSONAL_PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';
import Typography from '@/components/general/typography';

const PersonalProjects = () => {
  return (
    <section
      className="py-24 w-full flex justify-center max-md:py-16 border-t border-zinc-200"
      id="personal-projects">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2">
            Personal Projects
          </Typography>
          <Typography variant="body1" className="max-lg:text-center">
            Products I&apos;ve built that helped me understand the bigger
            picture - why thinking beyond code, designing for users, and
            planning for a product&apos;s future are crucial to building
            something people actually use.
          </Typography>
        </div>
        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {PERSONAL_PROJECTS.map((project) => (
            <React.Fragment key={project.name}>
              <ProjectDetails
                link={project.link}
                name={project.name}
                description={project.description}
                isDescriptionOnLeft={project.isDescriptionOnLeft}
                image={project.previewImage}
                techs={project.techs}
                color={project.color}
                colorClass={project.colorClass}
                href={project.href}
                modalContent={project.modalContent}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
