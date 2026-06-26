import FadeIn from './FadeIn';

const skills = [
  {
    number: '01',
    name: 'AI & Machine Learning',
    description: 'Building intelligent systems with TensorFlow, PyTorch, Scikit-learn, OpenCV, and NLP libraries. Experienced in model training, evaluation, computer vision, and data preprocessing.',
  },
  {
    number: '02',
    name: 'Full Stack Development',
    description: 'End-to-end web application development using React.js, Next.js, Node.js, Express.js, and Django. Proficient in building scalable, production-grade applications.',
  },
  {
    number: '03',
    name: 'Database Design',
    description: 'Designing efficient database architectures with MongoDB and MySQL. Building robust CRUD APIs and optimizing query performance for production systems.',
  },
  {
    number: '04',
    name: 'REST API Development',
    description: 'Creating well-structured RESTful APIs with Express.js and Django. Integrating frontend and backend systems with secure, performant API endpoints.',
  },
  {
    number: '05',
    name: 'Cloud & DevOps',
    description: 'Cloud deployment, version control with Git & GitHub, and collaborative development workflows. Experience with production bug fixing and feature delivery.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.number}
            delay={i * 0.1}
            y={30}
            className="flex flex-col items-center w-full max-w-5xl"
          >
            {i > 0 && (
              <div
                className="w-full"
                style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
              />
            )}
            <div className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 w-full">
              <span
                className="font-black uppercase leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {skill.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-4 md:gap-5 pt-1">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {skill.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {skill.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
