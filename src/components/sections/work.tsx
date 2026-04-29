import React from 'react';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';
import Typography from '@/components/general/typography';

const Work = () => {
  return (
    <section
      className="py-24 w-full flex justify-center max-md:py-16"
      id="work">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2">
            Work
          </Typography>
          <Typography variant="body1" className="max-lg:text-center">
          Peek at some of my recent work - interesting products I&apos;ve been part of, where I went deep across design, frontend and AI.
          </Typography>
        </div>
        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {PROJECTS.map((project) => (
            <React.Fragment key={project.name}>
              <ProjectDetails
                name={project.name}
                description={project.description}
                isDescriptionOnLeft={project.isDescriptionOnLeft}
                image={project.previewImage}
                techs={project.techs}
                href={project.href}
                modalContent={project.modalContent}
                role={project.role as string}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
