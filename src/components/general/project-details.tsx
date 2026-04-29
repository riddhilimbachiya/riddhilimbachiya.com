"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { SKILLS } from "@/lib/data";
import Typography from "@/components/general/typography";
import Skill from "@/components/general/skill";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "@/components/general/modal";
import { ArrowUpRight } from "iconoir-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ModalContent {
  responsibilities: React.ReactNode;
}

interface ProjectDetailsProps {
  name: string;
  description: React.ReactNode;
  techs?: string[];
  isDescriptionOnLeft: boolean;
  image: StaticImageData;
  href: string;
  modalContent?: ModalContent;
  role?: string;
}

const ProjectDetails = ({
  name,
  description,
  techs,
  image,
  modalContent,
  role,
  href,
}: ProjectDetailsProps) => {
  const [filteredTechs, setFilteredTechs] = useState([]);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const renderTechs = () => {
    const filteredTechsLocal = techs
      ?.map((tech) => SKILLS.find((skill) => skill.label === tech))
      .filter(Boolean);
    setFilteredTechs(filteredTechsLocal as any);
  };

  useEffect(() => {
    renderTechs();
  }, []);

  const ProjectCard = () => (
    <div className="cursor-pointer group flex flex-col gap-6"
    onClick={() => setOpen(true)}>
      <div className="w-full h-[300px] sm:h-[300px] lg:h-[300px] rounded-2xl rounded-br-none relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
          loading="lazy"
        />
        
{/* <div className="absolute inset-0"
  style={{
    background: "linear-gradient(to top left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.05) 55%, transparent 70%)",
  }}
/> */}
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-1">
            <Typography variant="h3" component="h3">
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="text-zinc-400 font-medium uppercase"
            >
              {role}
            </Typography>
          </div>
          {description}
        </div>
        <div
          className="underline underline-offset-8 decoration-1 hover:decoration-2 cursor-pointer decoration-zinc-200 mb-2"
        >
          More details here
          <ArrowUpRight
            strokeWidth={2.5}
            className="inline-block ml-1 text-zinc-500 group-hover:translate-x-1 transition-all duration-300"
            height={14}
            width={14}
          />
        </div>
      </div>
    </div>
  );

  if (modalContent) {
    return (
      <Modal open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-6 max-w-[420px] max-lg:max-w-xl w-full group">
          <ProjectCard />
        </div>
        <ModalContent className="max-w-4xl">
          <ModalHeader className="px-8 py-6 border-b border-zinc-200 relative overflow-hidden">
            {/* Diagonal check pattern at top right - fades from right to left */}
            <div
              className="absolute top-0 right-0 w-[450px] h-56 opacity-80"
              style={{
                backgroundImage: `radial-gradient(rgba(0,0,0,0.1) 1.5px, transparent 0)`,
                backgroundSize: "16px 16px",
                maskImage:
                  "linear-gradient(to left, black 26%, black 15%, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 26%, black 15%, transparent 90%)",
              }}
            />
            <div className="relative z-10">
            <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ModalTitle className="flex items-center gap-2 w-full">
                <Typography variant="h2" component="h2" className="text-zinc-900 font-bold">{name}</Typography>
          
                 <ArrowUpRight strokeWidth={2.5} className="inline-flex text-zinc-400" height={12} width={12} />
               
              </ModalTitle>
              </Link>
              <ModalDescription className="text-sm flex flex-col">
                {role}
                <div className="flex gap-2 flex-wrap mt-4">
                  {filteredTechs.map((tech: any) => (
                    <React.Fragment key={tech.label}>
                      <Skill label={tech.label} icon={tech.icon} variant="sm" />
                    </React.Fragment>
                  ))}
                </div>
              </ModalDescription>
            </div>
          </ModalHeader>
          <div className="flex flex-col gap-6 px-8 py-6 overflow-y-auto max-h-[calc(90vh-100px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="flex flex-col gap-6 text-base text-zinc-900">
              {modalContent.responsibilities}
            </div>
          </div>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-[420px] max-lg:max-w-xl w-full cursor-pointer group">
      <ProjectCard />
    </div>
  );
};

export default ProjectDetails;
