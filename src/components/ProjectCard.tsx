import { motion, MotionValue, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const TAG_COLORS = [
  'rgba(118, 33, 176, 0.3)',
  'rgba(182, 0, 168, 0.3)',
  'rgba(190, 76, 0, 0.3)',
  'rgba(0, 150, 136, 0.3)',
  'rgba(33, 150, 243, 0.3)',
];

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const rangeStart = index / totalCards;
  const rangeEnd = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: '#0C0C0C',
        }}
        className="absolute w-full max-w-[1760px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 origin-top"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1rem)', opacity: 0.6 }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-semibold tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          {project.liveUrl && (
            <LiveProjectButton href={project.liveUrl} className="self-start sm:self-auto" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
          {/* Description & Features */}
          <div className="flex flex-col gap-5 w-full md:w-[55%]">
            <p
              className="text-[#D7E2EA] font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)', opacity: 0.75 }}
            >
              {project.description}
            </p>

            <div className="flex flex-col gap-2">
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', opacity: 0.5 }}
              >
                Key Features
              </span>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-[#D7E2EA] rounded-full px-3 py-1.5 font-light"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.1vw, 0.95rem)',
                      background: 'rgba(215, 226, 234, 0.08)',
                      border: '1px solid rgba(215, 226, 234, 0.12)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-3 w-full md:w-[45%]">
            <span
              className="text-[#D7E2EA] font-medium uppercase tracking-wider"
              style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', opacity: 0.5 }}
            >
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[#D7E2EA] rounded-2xl px-5 py-3 font-medium uppercase tracking-wider"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                    background: TAG_COLORS[i % TAG_COLORS.length],
                    border: '1px solid rgba(215, 226, 234, 0.15)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
