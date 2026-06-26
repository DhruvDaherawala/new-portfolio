import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'AI / Full Stack',
    name: 'AI Powered Recruitment System',
    description: 'Developed an AI-powered recruitment platform that analyzes uploaded resumes (PDFs) and recommends suitable candidates based on company requirements using intelligent profile matching.',
    features: ['Resume Parsing', 'PDF Analysis', 'Candidate Recommendation', 'AI-based Profile Matching'],
    techStack: ['Next.js', 'AI Models', 'PDF Processing'],
  },
  {
    number: '02',
    category: 'MERN Stack / AI',
    name: 'Data Visualization with AI Chart Recommendation',
    description: 'Built a MERN-based data visualization platform capable of generating intelligent chart recommendations using pretrained AI models, with interactive dashboards and dynamic graph rendering.',
    features: ['CSV/Data Visualization', 'Interactive Dashboard', 'AI Chart Recommendation', 'Dynamic Graphs'],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI Model'],
  },
  {
    number: '03',
    category: 'Full Stack',
    name: 'Property Rental Management System',
    description: 'Developed a complete rental management platform for property listings and tenant management with full CRUD operations, user management, and database integration.',
    features: ['Property Listings', 'CRUD Operations', 'User Management', 'Database Integration'],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    number: '04',
    category: 'Computer Vision / ML',
    name: 'Face Recognition using PCA + ANN',
    description: 'Implemented a face recognition system by combining Principal Component Analysis with Artificial Neural Networks, achieving high recognition accuracy through custom dataset creation and preprocessing.',
    features: ['Dataset Creation', 'PCA Feature Extraction', 'ANN Classifier', 'High Accuracy'],
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'NumPy'],
  },
  {
    number: '05',
    category: 'Machine Learning',
    name: 'Diabetes Prediction System',
    description: 'Developed a machine learning application that predicts diabetes using Support Vector Machine with medical dataset analysis and model training.',
    features: ['Medical Dataset Analysis', 'Disease Prediction', 'ML Model Training'],
    techStack: ['Python', 'Django', 'SVM', 'Scikit-learn'],
  },
  {
    number: '06',
    category: 'Computer Vision',
    name: 'Facial Emotion Detection',
    description: 'Developed a real-time facial emotion recognition system using computer vision with live webcam detection and emotion classification capabilities.',
    features: ['Live Webcam Detection', 'Emotion Classification', 'Face Detection'],
    techStack: ['Python', 'OpenCV'],
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col items-center py-20 sm:py-24 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={index}
          totalCards={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
