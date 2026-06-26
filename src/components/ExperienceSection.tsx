import FadeIn from './FadeIn';

const experiences = [
  {
    role: 'Freelancer',
    company: 'Project Based',
    duration: 'October 2025 – Present',
    responsibilities: [
    ],
    techStack: [],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Pixer Digital',
    duration: 'May 2025 – October 2025',
    responsibilities: [
      'Worked on TeamCamp software',
      'Developed new features and modified existing production modules',
      'Fixed production bugs and collaborated with development team',
    ],
    techStack: ['React', 'Node.js', 'MySQL'],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'WeClocks Technology Pvt. Ltd.',
    duration: 'January 2025 – April 2025',
    responsibilities: [
      'Built frontend using React.js, developed backend with Node.js & Express.js',
      'Designed MySQL database and integrated frontend/backend',
      'Built CRUD APIs for Property Rental Management System',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    role: 'SDE Intern (Team Leader)',
    company: 'Bluestock Fintech',
    duration: 'November 2024 – December 2024',
    responsibilities: [
      'Led project development',
      'Developed Django-based web application with REST APIs',
      'Delivered public information platform',
    ],
    techStack: ['Django', 'Python', 'REST API'],
  },
  {
    role: 'Application Development Intern',
    company: 'CreArt Solution',
    duration: 'July 2024 – August 2024',
    responsibilities: [
      'Developed Android applications with Java',
      'Used Android Studio and collaborated with development team',
    ],
    techStack: ['Java', 'Android Studio'],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Internship Studio',
    duration: 'February 2024 – March 2024',
    responsibilities: [
      'Implemented PCA with Artificial Neural Networks',
      'Built Face Recognition system with preprocessing',
      'Trained and tested ML models, improved prediction accuracy',
    ],
    techStack: ['Python', 'OpenCV', 'ANN', 'PCA', 'TensorFlow'],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center gap-0">
        {experiences.map((exp, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            y={30}
            className="w-full max-w-5xl"
          >
            {i > 0 && (
              <div
                className="w-full"
                style={{ borderTop: '1px solid rgba(215, 226, 234, 0.1)' }}
              />
            )}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 sm:py-10 md:py-12 w-full">
              {/* Left: Duration */}
              <div className="flex-shrink-0 md:w-[200px]">
                <span
                  className="text-[#D7E2EA] font-light uppercase tracking-wider"
                  style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', opacity: 0.5 }}
                >
                  {exp.duration}
                </span>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[#D7E2EA] font-semibold"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                  >
                    {exp.role}
                  </span>
                  <span
                    className="font-medium uppercase tracking-wider"
                    style={{
                      fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                      background: 'linear-gradient(135deg, #B600A8, #7621B0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {exp.company}
                  </span>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {exp.responsibilities.map((resp, j) => (
                    <li
                      key={j}
                      className="text-[#D7E2EA] font-light leading-relaxed"
                      style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', opacity: 0.65 }}
                    >
                      • {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.techStack.map((tech, k) => (
                    <span
                      key={k}
                      className="text-[#D7E2EA] rounded-full px-3 py-1 font-light"
                      style={{
                        fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                        background: 'rgba(118, 33, 176, 0.2)',
                        border: '1px solid rgba(215, 226, 234, 0.1)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
