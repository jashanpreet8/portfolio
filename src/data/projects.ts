export interface Project {
    title: string;
    description: string;
    image: string;        // path under /public/images
    tech: string[];
    link: string;         // project URL or GitHub
  }
  
  export const projects: Project[] = [
    {
      title: 'Project One',
      description: 'Brief description here',
      image: '/images/project1.png',
      tech: ['React', 'TypeScript'],
      link: 'https://github.com/YOUR_GITHUB/project-one',
    },
    // Add more projects
  ];