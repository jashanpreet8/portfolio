import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <div className="mt-2 text-sm">
          {project.tech.map((t) => (
            <span key={t} className="mr-2">• {t}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600">
          View Project
        </a>
      </div>
    </div>
  );
}