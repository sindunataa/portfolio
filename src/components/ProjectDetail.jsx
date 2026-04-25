import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { professionalProjects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const typeConfig = {
  'Enterprise System':     { bg: '#444441', icon: 'monitor' },
  'Financial System':      { bg: '#444441', icon: 'dollar' },
  'Internal Platform':     { bg: '#444441', icon: 'users' },
  'Financial Planning':    { bg: '#444441', icon: 'calendar' },
  'Inventory System':      { bg: '#444441', icon: 'package' },
  'Backend API':           { bg: '#444441', icon: 'code' },
  'Field Operations API':  { bg: '#444441', icon: 'code' },
};

const icons = {
  monitor: <path d="M2 3h20v14H2zM8 21h8M12 17v4" />,
  dollar:  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  users:   <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  calendar:<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01"/></>,
  package: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
  code:    <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
};

const FallbackBanner = ({ project }) => {
  const config = typeConfig[project.type] ?? { bg: '#444441', icon: 'code' };

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: 'clamp(180px, 32vw, 360px)', background: config.bg }}
    >
      {/* subtle grid texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 40px)'
      }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5">
            {icons[config.icon]}
          </svg>
        </div>
        <div>
          <p className="text-white font-medium text-lg m-0">{project.name}</p>
          <p className="text-sm m-0" style={{ color: 'rgba(255,255,255,0.65)' }}>{project.subtitle}</p>
        </div>
      </div>

      {/* bottom fade sama seperti banner asli */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(18,18,18,0.75) 100%)'
      }} />
    </div>
  );
};

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
            <div
              className="flex-shrink-0 w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-[12px] sm:rounded-[14px] overflow-hidden border border-taupe/20 flex items-center justify-center"
              style={{ background: typeConfig[project.type]?.bg ?? '#444441' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
                {icons[typeConfig[project.type]?.icon ?? 'code']}
              </svg>
            </div>
            

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
            </motion.div>
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
              {project.banner ? (
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] } }}
                  className="relative w-full overflow-hidden"
                  style={{ height: 'clamp(180px, 32vw, 360px)' }}
                >
                  <img
                    src={project.banner}
                    alt={`${project.name} banner`}
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(18,18,18,0.85) 100%)' }} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] } }}
                >
                  <FallbackBanner project={project} />
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
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggle = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Dinamis adjust negative margin berdasarkan expanded state
  const marginClass = expandedProject === 'prof-1' ? 'mt-0 pt-4' : '-mt-[6rem]';

  return (
    <div className="px-4 sm:px-6 transition-all duration-300">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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