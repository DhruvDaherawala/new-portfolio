import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-8 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light leading-relaxed max-w-xl mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: '#0C0C0C', opacity: 0.7 }}
        >
          Interested in working together or have a project idea? I&apos;d love to hear from you. Let&apos;s build something amazing.
        </p>
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-16 sm:mb-20">
          <a
            href="mailto:dhruvdaherawala1533@gmail.com"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              color: '#FFFFFF',
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Me
          </a>

          <a
            href="tel:+919104154755"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105"
            style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              color: '#0C0C0C',
              borderColor: '#0C0C0C',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Me
          </a>
        </div>
      </FadeIn>

      {/* Social Links */}
      <FadeIn delay={0.35} y={20}>
        <div className="flex items-center gap-8 mb-16 sm:mb-20">
          <a
            href="https://github.com/DhruvDaherawala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0C0C0C] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-60"
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
          >
            GitHub
          </a>
          <span style={{ color: '#0C0C0C', opacity: 0.2 }}>|</span>
          <a
            href="https://www.linkedin.com/in/dhruvdaherawala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0C0C0C] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-60"
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
          >
            LinkedIn
          </a>
          <span style={{ color: '#0C0C0C', opacity: 0.2 }}>|</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0C0C0C] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-60"
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
          >
            Portfolio
          </a>
        </div>
      </FadeIn>


      {/* Footer */}
      <div
        className="w-full mt-16 sm:mt-20 pt-8 text-center"
        style={{ borderTop: '1px solid rgba(12, 12, 12, 0.1)' }}
      >
        <span
          className="font-light"
          style={{ fontSize: 'clamp(0.8rem, 1vw, 0.95rem)', color: '#0C0C0C', opacity: 0.4 }}
        >
          © 2026 Dhruv Daherawala. All rights reserved.
        </span>
      </div>
    </section>
  );
}
