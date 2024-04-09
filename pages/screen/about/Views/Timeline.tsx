import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import Layout from "../../../components/Layout";

interface ExperienceProps {
  title: string;
  jobTitle?: string;
  jobDesc?: string;
  jobDate?: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ title, jobTitle, jobDesc, jobDate }) => {
  const jobDetails = jobTitle || jobDesc;

  return (
    <div className="flex justify-between h-48">
      <div className="w-1/3">
        <div className="bg-base-black text-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          {title}
        </div>
        {jobDetails && <div className="p-3 text-gray-300 text-sm italic">{jobDetails}</div>}
      </div>
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-300 bg-white -left-2"></div>
        </div>
      </div>
      <div className="w-1/3">
        {jobTitle && <div className="bg-base-black text-white p-3 font-semibold rounded-b-lg rounded-s-lg">{jobTitle}</div>}
        {jobDate && <div className="p-3 text-yellow-300 text-sm font-semibold">{jobDate}</div>}
      </div>
    </div>
  );
};


const Timeline: React.FC = () => {
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div className="items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-0/2">
      <div className="flex flex-col gap-12 justify-center items-center" ref={experienceRef}>
        <motion.h1
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
          transition={{ delay: 0.2 }}
          className="font-bold text-gray-300 text-2xl"
        >
          TIMELINE DU PROJET
        </motion.h1>
        <motion.div
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
        >
          <ExperienceItem title="Debut du projet - Piscine Epitech MoonShot" jobDesc="" jobDate="Septembre 2022" />
          <ExperienceItem title="Devfest Nantes - Présentaton du Projet" jobDate="Octobre 2022" />
          <ExperienceItem title="Forward - Premier maquetage" jobDate="Décembre 2022" />
          <ExperienceItem title="Premier test de technologies pour l'application mobile" jobDate="Avril 2023" />
          <ExperienceItem title="Première version de l'API et de la base de données" jobDate="Juillet 2023" />
          <ExperienceItem title="Premier dévéloppement de l'application mobile" jobDate="Juillet 2023" />
          <ExperienceItem title="Première test de technologies pour le site web" jobDate="Septembre 2023" />
          <ExperienceItem title="Amélioration de l'architecture de l'API" jobDate="Octobre 2023" />
          <ExperienceItem title="Partenariat avec l'association KapSignes" jobDate="Novembre 2023" />
          <ExperienceItem title="Premier dévéloppement du site web à partir de la maquette" jobDate="Décembre 2023" />
          <ExperienceItem title="Première version de la base de données fonctionnel" jobDate="Mars 2023" />
          <ExperienceItem title="Premier version de l'application mobile fontionnel" jobDate="Avril 2023" />

        </motion.div>
      </div>
    </div>
  );
};


export default Timeline;
