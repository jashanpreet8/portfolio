import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsPage from '@/components/ProjectsPage';
import ResumeEmbed from '@/components/ResumeEmbed';

export default function Home() {
  return (
    <>
      <section className="fullpage">
        <Hero />
      </section>
      <section className="fullpage">
        <AboutSection />
      </section>
      <section className="fullpage">
        <ProjectsPage />
      </section>
      <section className="fullpage">
        <ResumeEmbed />
      </section>
    </>
  );
}