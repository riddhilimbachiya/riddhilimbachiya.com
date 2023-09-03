import Client from '@/components/general/client';
import Typography from '@/components/general/typography';
import { TESTIMONIALS } from '@/lib/data';

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col py-24 px-8 gap-16 bg-zinc-50">
      <Typography variant="h2" className="uppercase w-full flex justify-center">
        Client's love
      </Typography>
      <div className="flex gap-16">
        {TESTIMONIALS.map((testimonial) => (
          <Client
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            avatar={testimonial.avatar}
            company={testimonial.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
