import React from 'react';

import { TESTIMONIALS } from '@/lib/data';
import Client from '@/components/general/client';
import Typography from '@/components/general/typography';

const Testimonials = () => {
  return (
    <section
      className="w-full flex justify-center items-center flex-col py-24 px-4 gap-24 bg-zinc-50 max-md:py-16"
      id="testimonials">
      <Typography variant="h2" className="uppercase w-full flex justify-center">
        Client&apos;s love
      </Typography>
      <div className="flex gap-16 max-lg:flex-col">
        {TESTIMONIALS.map((testimonial) => (
          <React.Fragment key={testimonial.name}>
            <Client
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
              company={testimonial.company}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
