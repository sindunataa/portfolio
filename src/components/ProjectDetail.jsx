import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { professionalProjects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-jetLight rounded-[20px] sm:rounded-[24px] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-battleGray hover:text-timberWolf transition-colors p-2 rounded-full hover:bg-night/50"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 md:p-10 max-h-[85vh] overflow-y-auto">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8 pr-8">
                    <h3 className="text-timberWolf font-beckman font-extrabold text-[24px] sm:text-[28px] md:text-[32px] uppercase tracking-[1px] mb-3 leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-taupe font-poppins text-[15px] sm:text-[16px] md:text-[18px] mb-2 tracking-[0.5px]">
                      {project.subtitle}
                    </p>
                    <p className="text-silver font-poppins text-[13px] sm:text-[14px] md:text-[15px] tracking-[0.5px]">
                      {project.company} • {project.period}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tags && project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag.name}`}
                        className="text-[12px] sm:text-[13px] font-poppins text-taupe bg-night/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-taupe/20"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <div className="bg-night/40 backdrop-blur-sm rounded-[16px] p-5 sm:p-6 md:p-7 border border-taupe/10 mb-6">
                    <h4 className="text-timberWolf font-beckman font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-3 sm:mb-4 uppercase tracking-[1px]">
                      Project Overview
                    </h4>
                    <p className="text-silver font-poppins text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0.5px]">
                      {project.detailedDescription || project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {project.tech && (
                    <div className="mb-6">
                      <h4 className="text-timberWolf font-beckman font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-4 uppercase tracking-[1px]">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2.5 bg-night/50 backdrop-blur-sm text-taupe font-poppins rounded-[10px] text-[13px] sm:text-[14px] border border-taupe/20 hover:border-battleGray transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-timberWolf font-beckman font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-4 uppercase tracking-[1px]">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-silver font-poppins"
                          >
                            <div className="w-2 h-2 bg-battleGray rounded-full mt-2 flex-shrink-0" />
                            <span className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.5px]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* My Contributions */}
                  {project.contributions && (
                    <div className="mb-6">
                      <h4 className="text-timberWolf font-beckman font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-4 uppercase tracking-[1px]">
                        My Contributions
                      </h4>
                      <div className="space-y-3">
                        {project.contributions.map((contribution, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 text-silver font-poppins"
                          >
                            <span className="text-battleGray mt-1 flex-shrink-0 font-bold">
                              •
                            </span>
                            <p className="flex-1 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] tracking-[0.5px]">
                              {contribution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact/Results */}
                  {project.impact && (
                    <div className="bg-night/40 rounded-[16px] p-5 sm:p-6 md:p-7 border border-battleGray/30">
                      <h4 className="text-timberWolf font-beckman font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-4 uppercase tracking-[1px]">
                        Impact & Results
                      </h4>
                      <div className="space-y-3">
                        {project.impact.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-battleGray rounded-full mt-2 flex-shrink-0" />
                            <span className="text-silver font-poppins text-[13px] sm:text-[14px] tracking-[0.5px] leading-[22px] sm:leading-[24px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: index * 0.1 }
        }
      }}
      className="w-full"
    >
      <div 
        className="bg-jetLight rounded-[20px] sm:rounded-[24px] card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        onClick={onClick}
      >
        <div className="p-4 sm:p-6 md:p-8">
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
                {project.tags && project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag.name}`}
                    className="text-[11px] sm:text-[12px] md:text-[13px] font-poppins text-taupe bg-night/50 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-taupe/20"
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

            {/* View Details Icon */}
            <div className="text-battleGray hover:text-timberWolf transition-colors flex-shrink-0">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetail = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="mx-auto flex flex-col mt-[30px] sm:mt-[40px] md:mt-[50px]"
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {professionalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-taupe text-[12px] sm:text-[13px] md:text-[14px] font-poppins tracking-[0.5px] break-words px-4">
            Click on any project card to see detailed information about features, technologies, and my contributions.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default SectionWrapper(ProjectDetail, 'professional-projects');