import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import VideoModal from '../components/VideoModal';
import { PROJECTS, type Project } from '../data/projects';

const TOTAL_CARDS = PROJECTS.length;
const BORDER_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const IMG_RADIUS = { borderRadius: 'clamp(20px, 4vw, 60px)' };

const COL1_HEIGHT_TOP = 'clamp(130px, 16vw, 230px)';
const COL1_HEIGHT_BOTTOM = 'clamp(160px, 22vw, 340px)';
const COL2_HEIGHT = `calc(${COL1_HEIGHT_TOP} + ${COL1_HEIGHT_BOTTOM} + 12px)`;

function ProjectCollageImage({
  src,
  alt,
  height,
  className = '',
}: {
  src: string;
  alt: string;
  height: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex items-center justify-center bg-white overflow-hidden ${className}`}
      style={{ ...IMG_RADIUS, height }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  onVideoClick?: (videoId: string, projectName: string) => void;
}

function ProjectCard({ project, index, totalCards, onVideoClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] flex items-start justify-center"
      style={{ paddingTop: `${index * 28}px` }}
    >
      <motion.div
        className={`sticky top-24 md:top-32 w-full ${BORDER_RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8`}
        style={{ scale, transformOrigin: 'top center' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)', opacity: 0.6 }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-tight"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.caseStudyPath ? (
              <LiveProjectButton to={project.caseStudyPath} label="View Case Study" />
            ) : null}
            {project.videoId ? (
              <LiveProjectButton
                onClick={() => onVideoClick?.(project.videoId!, project.name)}
              />
            ) : project.liveUrl ? (
              <LiveProjectButton href={project.liveUrl} />
            ) : (
              <LiveProjectButton />
            )}
          </div>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <ProjectCollageImage
              src={project.col1img1}
              alt={`${project.name} screenshot 1`}
              height={COL1_HEIGHT_TOP}
            />
            <ProjectCollageImage
              src={project.col1img2}
              alt={`${project.name} screenshot 2`}
              height={COL1_HEIGHT_BOTTOM}
            />
          </div>
          <div style={{ width: '60%' }}>
            {project.caseStudyPath ? (
              <Link
                to={project.caseStudyPath}
                className="block w-full transition-opacity duration-300 hover:opacity-90"
              >
                <ProjectCollageImage
                  src={project.col2img}
                  alt={`${project.name} main screenshot`}
                  height={COL2_HEIGHT}
                />
              </Link>
            ) : (
              <ProjectCollageImage
                src={project.col2img}
                alt={`${project.name} main screenshot`}
                height={COL2_HEIGHT}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [videoModal, setVideoModal] = useState<{
    open: boolean;
    videoId: string;
    title: string;
  }>({ open: false, videoId: '', title: '' });

  const openVideo = (videoId: string, projectName: string) => {
    setVideoModal({ open: true, videoId, title: `${projectName} — Live Demo` });
  };

  const closeVideo = () => {
    setVideoModal((prev) => ({ ...prev, open: false }));
  };

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={TOTAL_CARDS}
            onVideoClick={openVideo}
          />
        ))}
      </div>

      <VideoModal
        isOpen={videoModal.open}
        onClose={closeVideo}
        driveFileId={videoModal.videoId}
        title={videoModal.title}
      />
    </section>
  );
}

