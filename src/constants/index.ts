import type { NavItem, Project, Skill, SocialLink } from "../types";

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Figma', level: 80, category: 'design' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
    imageUrl: 'https://images.pexels.com/photos/7194764/pexels-photo-7194764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Firebase'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Fitness Tracking Dashboard',
    description: 'A comprehensive dashboard for tracking workouts, nutrition, and health metrics with data visualization.',
    imageUrl: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'AI Image Generator',
    description: 'An application that generates unique images based on text prompts using AI and machine learning.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
];