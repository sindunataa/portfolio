import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { professionalProjects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectDetailCard = ({ project, index, isExpanded, onToggle }) => {
  const isFirstCard = index === 0;
  
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.01, 0.40)}
      className={`w-full mb-6 ${isFirstCard ? 'scroll-mt-32' : 'scroll-mt-20'}`}
      style={{ 
        zIndex: isExpanded ? 50 : 10,
        position: 'relative',
      }}
    >
      <div 
        className="bg-jetLight rounded-[20px] sm:rounded-[24px] card-shadow hover:card-shadow-hover transition-all duration-300"
        style={{ 
          position: 'relative',
        }}
      >
        {/* Card Header - Always Visible */}
        <div
          className="p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-battleGray/10 transition-colors duration-300"
          onClick={onToggle}
        >
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              {/* Title & Company */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-timberWolf font-beckman font-extrabold text-[20px] sm:text-[24px] md:text-[28px] uppercase tracking-[0.5px] sm:tracking-[1px] mb-2 leading-tight break-words">
                  {project.name}
                </h3>
                <p className="text-taupe font-poppins text-[14px] sm:text-[15px] md:text-[16px] mb-2 tracking-[0.5px] break-words">
                  {project.subtitle}
                </p>
                <p className="text-silver font-poppins text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] break-words">
                  {project.company} • {project.period}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag.name}`}
                    className={`text-[11px] sm:text-[12px] md:text-[13px] font-poppins ${tag.color} bg-night/50 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-taupe/20`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Short Description */}
              <p className="text-silver font-poppins text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-[0.5px] break-words">
                {project.description}
              </p>
            </div>

            {/* Expand Button */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-battleGray hover:text-timberWolf transition-colors flex-shrink-0"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: "easeOut" },
                  opacity: { duration: 0.25, delay: 0.15 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: "easeIn" },
                  opacity: { duration: 0.2 }
                }
              }}
              style={{ 
                overflow: 'hidden',
              }}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 space-y-4 sm:space-y-5 md:space-y-6">
                {/* Detailed Description */}
                <div className="bg-night/40 backdrop-blur-sm rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 md:p-6 border border-taupe/10">
                  <h4 className="text-timberWolf font-beckman font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-2 sm:mb-3 uppercase tracking-[0.5px] sm:tracking-[1px]">
                    Project Overview
                  </h4>
                  <p className="text-silver font-poppins text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-[0.5px] break-words">
                    {project.detailedDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-timberWolf font-beckman font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-3 sm:mb-4 uppercase tracking-[0.5px] sm:tracking-[1px]">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-night/50 backdrop-blur-sm text-taupe font-poppins rounded-[8px] sm:rounded-[10px] text-[12px] sm:text-[13px] md:text-[14px] border border-taupe/20 hover:border-battleGray transition-colors break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-timberWolf font-beckman font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-3 sm:mb-4 uppercase tracking-[0.5px] sm:tracking-[1px]">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 text-silver font-poppins"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-battleGray rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0.5px] break-words">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Contributions */}
                <div>
                  <h4 className="text-timberWolf font-beckman font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-3 sm:mb-4 uppercase tracking-[0.5px] sm:tracking-[1px]">
                    My Contributions
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {project.contributions.map((contribution, idx) => (
                      <div
                        key={idx}
                        className="flex gap-2 sm:gap-3 text-silver font-poppins"
                      >
                        <span className="text-battleGray mt-0.5 sm:mt-1 flex-shrink-0 font-bold">
                          •
                        </span>
                        <p className="flex-1 text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0.5px] break-words">
                          {contribution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact/Results */}
                {project.impact && (
                  <div className="glassmorphism rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 md:p-6 border border-battleGray/30">
                    <h4 className="text-timberWolf font-beckman font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-3 sm:mb-4 uppercase tracking-[0.5px] sm:tracking-[1px]">
                      Impact & Results
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {project.impact.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-battleGray rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="text-silver font-poppins text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.5px] leading-[20px] sm:leading-[22px] break-words">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProjectDetail = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggle = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Dinamis adjust negative margin berdasarkan expanded state
  const marginClass = expandedProject === 'prof-1' ? 'mt-0 pt-4' : '-mt-[6rem]';

  return (
    <div className={`${marginClass} px-4 sm:px-6 transition-all duration-300`}>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={`${styles.sectionSubText} text-[14px] sm:text-[16px] md:text-[18px]`}>
          Enterprise Level Work
        </p>
        <h2 className={`${styles.sectionHeadTextLight} text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px]`}>
          Professional Projects.
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 sm:mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px] font-poppins tracking-[0.5px] break-words"
        >
          Here are the enterprise-level systems I've developed at PT Bali Towerindo Sentra Tbk,
          focusing on inventory management, financial systems, and mobile API services.
          Each project showcases my ability to build scalable, efficient, and reliable solutions
          for complex business requirements.
        </motion.p>
      </div>

      {/* Projects List */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[30px] sm:mt-[40px] md:mt-[50px] space-y-4 sm:space-y-5 md:space-y-6">
          {professionalProjects.map((project, index) => (
            <ProjectDetailCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedProject === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
        className="mt-8 sm:mt-10 md:mt-12 text-center"
      >
        <p className="text-taupe text-[12px] sm:text-[13px] md:text-[14px] font-poppins tracking-[0.5px] break-words px-4">
          Click on any project card to see detailed information about features, technologies, and my contributions.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ProjectDetail, 'professional-projects');