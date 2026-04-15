import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { professionalProjects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectDetailCard = ({ project, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }
        }
      }}
      className="w-full"
    >
      <div className="bg-jetLight rounded-[20px] sm:rounded-[24px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">

        {/* ── HEADER ── */}
        <div
          className="p-5 sm:p-6 md:p-8 cursor-pointer hover:bg-battleGray/10 transition-colors duration-300"
          onClick={onToggle}
        >
          <div className="flex items-center gap-4 sm:gap-5">

            {/* Thumbnail */}
            {project.image && (
              <div className="flex-shrink-0 w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-[12px] sm:rounded-[14px] overflow-hidden border border-taupe/20">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
            )}

            {/* Title block */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-poppins text-taupe/70 bg-night/60 px-2.5 py-0.5 rounded-full border border-taupe/15 uppercase tracking-[0.8px]">
                  {project.type}
                </span>
              </div>
              <h3 className="text-timberWolf font-beckman font-extrabold text-[16px] sm:text-[20px] md:text-[22px] uppercase tracking-[0.5px] leading-tight truncate">
                {project.name}
              </h3>
              <p className="text-taupe/80 font-poppins text-[12px] sm:text-[13px] mt-0.5 truncate">
                {project.subtitle}
              </p>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-taupe/50 hover:text-timberWolf transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Description — always visible, compact */}
          <p className="text-silver/70 font-poppins text-[12px] sm:text-[13px] leading-[20px] sm:leading-[22px] mt-3 sm:mt-4 line-clamp-2"
            style={{ paddingLeft: project.image ? 'calc(56px + 16px)' : '0' }}>
            {project.description}
          </p>
        </div>

        {/* ── EXPANDED ── */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto', opacity: 1,
                transition: {
                  height: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3, delay: 0.12 }
                }
              }}
              exit={{
                height: 0, opacity: 0,
                transition: {
                  height: { duration: 0.35, ease: [0.4, 0, 1, 1] },
                  opacity: { duration: 0.15 }
                }
              }}
              style={{ overflow: 'hidden' }}
            >
              {/* Banner */}
              {project.banner && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] } }}
                  className="relative w-full overflow-hidden"
                  style={{ height: 'clamp(140px, 24vw, 240px)' }}
                >
                  <img src={project.banner} alt={`${project.name} banner`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(18,18,18,0.9) 100%)' }} />
                </motion.div>
              )}

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 pt-5 space-y-5 sm:space-y-6">

                {/* Stats row — impact pills */}
                {project.impact && (
                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((item, idx) => (
                      <span key={idx} className="text-[11px] sm:text-[12px] font-poppins text-timberWolf bg-battleGray/25 border border-battleGray/30 px-3 py-1.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="h-px bg-taupe/10" />

                {/* Tech + Features — 2 col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                  {/* Tech Stack */}
                  {project.tech && (
                    <div>
                      <p className="text-taupe/60 font-poppins text-[10px] uppercase tracking-[1px] mb-2.5">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="text-[11px] sm:text-[12px] font-poppins text-silver bg-night/50 border border-taupe/15 px-2.5 py-1 rounded-[6px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {project.features && (
                    <div>
                      <p className="text-taupe/60 font-poppins text-[10px] uppercase tracking-[1px] mb-2.5">Features</p>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 5).map((f, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-taupe/50 rounded-full flex-shrink-0" />
                            <span className="text-[11px] sm:text-[12px] font-poppins text-silver/80">{f}</span>
                          </div>
                        ))}
                        {project.features.length > 5 && (
                          <span className="text-[11px] font-poppins text-taupe/50 pl-3">+{project.features.length - 5} more</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contributions */}
                {project.contributions && (
                  <>
                    <div className="h-px bg-taupe/10" />
                    <div>
                      <p className="text-taupe/60 font-poppins text-[10px] uppercase tracking-[1px] mb-2.5">Contributions</p>
                      <div className="space-y-2">
                        {project.contributions.map((c, idx) => (
                          <div key={idx} className="flex gap-2.5">
                            <span className="text-taupe/40 font-poppins text-[11px] flex-shrink-0 mt-0.5 font-medium">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <p className="text-silver/75 font-poppins text-[11px] sm:text-[12px] leading-[18px] sm:leading-[20px]">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
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