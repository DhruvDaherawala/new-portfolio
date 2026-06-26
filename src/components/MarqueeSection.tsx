import { useEffect, useRef } from 'react';

const TECH_ROW_1 = [
  'Python', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js',
  'Express.js', 'Django', 'MongoDB', 'MySQL', 'TensorFlow', 'PyTorch',
];

const TECH_ROW_2 = [
  'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'SpaCy',
  'Git', 'GitHub', 'Java', 'Jupyter Notebook', 'Google Colab', 'REST APIs',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrolled = window.scrollY - sectionTop + window.innerHeight;
      const offset = scrolled * 0.3;

      scrollOffsetRef.current = offset;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden w-full">
          <div
            ref={row1Ref}
            className="flex gap-4"
            style={{
              willChange: 'transform',
              transform: 'translateX(-200px)',
            }}
          >
            {[...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  minWidth: '200px',
                  height: '80px',
                  padding: '0 32px',
                  background: 'linear-gradient(135deg, rgba(118, 33, 176, 0.15) 0%, rgba(182, 0, 168, 0.1) 100%)',
                  border: '1px solid rgba(215, 226, 234, 0.1)',
                }}
              >
                <span
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div
            ref={row2Ref}
            className="flex gap-4"
            style={{
              willChange: 'transform',
              transform: 'translateX(200px)',
            }}
          >
            {[...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  minWidth: '200px',
                  height: '80px',
                  padding: '0 32px',
                  background: 'linear-gradient(135deg, rgba(190, 76, 0, 0.15) 0%, rgba(118, 33, 176, 0.1) 100%)',
                  border: '1px solid rgba(215, 226, 234, 0.1)',
                }}
              >
                <span
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
