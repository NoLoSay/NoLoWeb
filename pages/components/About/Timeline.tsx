import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

interface ExperienceProps {
  title: string;
  jobTitle?: string;
  jobDesc?: string;
  jobDate?: string;
}

const styles: { [key: string]: string } = {
  container_0: "flex justify-between h-48",
  container_1: "w-1/3",
  container_2: "bg-base-black text-white p-3 font-semibold sm:text-2xs",
  container_3: "w-1/6 flex justify-center",
  container_4: "w-1 h-full bg-base-black rounded relative",
  container_5: "absolute w-5 h-5 rounded-full ring-4 ring-yellow-300 bg-white -left-2",
  container_6: "w-1/3",
  container_7: "p-3 text-yellow-300 text-sm font-semibold",
  container_8: "items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-0/2",
  container_9: "flex flex-col gap-12 justify-center items-center",
  container_10: "font-bold text-gray-300 text-2xl"
};

const ExperienceItem: React.FC<ExperienceProps> = ({ title, jobDate }) => {

  return (
    <div className={`container_0 ${styles.container_0}`}>
      <div className={`container_1 ${styles.container_1}`}>
        <div className={`container_2 ${styles.container_2}`}>
          {title}
        </div>
      </div>
      <div className={`container_3 ${styles.container_3}`}>
        <div className={`container_4 ${styles.container_4}`}>
          <div className={`container_5 ${styles.container_5}`}></div>
        </div>
      </div>
      <div className={`container_6 ${styles.container_6}`}>
        {jobDate && <div className={`container_7 ${styles.container_7}`}>{jobDate}</div>}
      </div>
    </div>
  );
};


const Timeline: React.FC = () => {
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div className={`container_8 ${styles.container_8}`}>
      <div className={`container_9 ${styles.container_9}`} ref={experienceRef}>
        <motion.h1
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
          transition={{ delay: 0.2 }}
          className={`container_10 ${styles.container_10}`}
        >
          TIMELINE DU PROJET
        </motion.h1>
        <motion.div
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
        >
          <ExperienceItem title="Debut du projet - Piscine Epitech MoonShot" jobDate="Septembre 2022" />
          <ExperienceItem title="Devfest Nantes - Présentaton du Projet" jobDate="Octobre 2022" />
          <ExperienceItem title="Forward - Premier maquetage de l'application mobile" jobDate="Décembre 2022" />
          <ExperienceItem title="Première version de l'API et de la base de données" jobDate="Juillet 2023" />
          <ExperienceItem title="Partenariat avec l'association KapSignes" jobDate="Novembre 2023" />
          <ExperienceItem title="Premier dévéloppement du site web à partir de la maquette" jobDate="Décembre 2023" />
          <ExperienceItem title="Première version de l'application mobile fontionnel" jobDate="Avril 2024" />
        </motion.div>
      </div>
    </div>
  );
};


export default Timeline;