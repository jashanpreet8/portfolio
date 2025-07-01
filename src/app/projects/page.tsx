import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}