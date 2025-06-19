import type { DummyReviews, NavItem, Project, Skill, SocialLink } from "../types";
import weatherImg from '../assets/weather.png';
import movieImg from '../assets/movie.png';
import smsImg from '../assets/sms.png';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
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
    title: 'Weather App',
    description: 'A real-time weather application that provides current conditions, forecasts, and interactive weather maps using live API data.',
    imageUrl: weatherImg,
    tags: ['React', 'OpenWeatherMap API', 'Node.js', 'localStorage'],
    demoUrl: 'https://climezy-tech.vercel.app/',
    githubUrl: 'https://github.com/Ultreck/climezy_tech',
  },
  {
    id: 'project-2',
    title: 'Movie Explorer App',
    description: 'A movie discovery platform that lets users search, browse, and save movies using TMDB API with ratings, trailers, and user reviews.',
    imageUrl: movieImg,
    tags: ['React', 'TMDB API', 'Firebase', 'localStorage'],
    demoUrl: 'https://recommendation-movie-app.vercel.app/',
    githubUrl: 'https://github.com/Ultreck/recommendation-movie-app',
  },
  {
    id: 'project-3',
    title: 'School Management System',
    description: 'A full-featured platform for managing students, teachers, courses, attendance, and grading with secure role-based access.',
    imageUrl: smsImg,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'socket.io', 'cloudinary'],
    demoUrl: 'https://school-management-system-two.vercel.app/',
    githubUrl: 'https://github.com/Ultreck/school-management-system',
  },
];
// export const projects: Project[] = [
//   {
//     id: 'project-1',
//     title: 'E-Commerce Platform',
//     description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.',
//     imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com',
//   },
//   {
//     id: 'project-2',
//     title: 'Task Management App',
//     description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
//     imageUrl: 'https://images.pexels.com/photos/7194764/pexels-photo-7194764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'TypeScript', 'Firebase'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com',
//   },
//   {
//     id: 'project-3',
//     title: 'Fitness Tracking Dashboard',
//     description: 'A comprehensive dashboard for tracking workouts, nutrition, and health metrics with data visualization.',
//     imageUrl: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com',
//   },
//   {
//     id: 'project-4',
//     title: 'AI Image Generator',
//     description: 'An application that generates unique images based on text prompts using AI and machine learning.',
//     imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com',
//   },
// ];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Ultreck', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/oluwatayese-emmanuel-a-39254b218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq64WZR48RtG2XFs5lYMF6w%3D%3D', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://x.com/AdetutuEmmanue6?t=2Dp_Fjr6izYH3tibEdd7bA&s=08', icon: 'twitter' },
  { platform: 'WhatsApp', url: "https://wa.me/2347064778921?text=Hi%20Emmanuel%2C%20I%20got%20your%20contact%20from%20your%20portfolio!", icon: 'whatsapp' },
  // { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
];

export const dummyReviews: DummyReviews[] = [
  {
    id: 1,
    name: "John D.",
    rating: 5,
    date: "2023-10-15",
    review: "Absolutely stunning portfolio! The design is clean and professional. One of the best I've seen in a long time.",
    avatar: "/avatars/1.jpg"
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 4.5,
    date: "2023-10-18",
    review: "Great work with excellent attention to detail. The projects are impressive and well-documented.",
    avatar: "/avatars/2.jpg"
  },
  {
    id: 3,
    name: "Alex K.",
    rating: 3,
    date: "2023-10-20",
    review: "Good portfolio overall, but could use more variety in the project examples.",
    avatar: "/avatars/3.jpg"
  },
  {
    id: 4,
    name: "Emma T.",
    rating: 5,
    date: "2023-10-22",
    review: "Incredible showcase of skills! The UX/UI projects particularly stood out to me. Very inspiring!",
    avatar: "/avatars/4.jpg"
  },
  {
    id: 5,
    name: "Michael B.",
    rating: 2.5,
    date: "2023-10-25",
    review: "Decent portfolio but the loading times could be improved. Some sections felt a bit slow.",
    avatar: "/avatars/5.jpg"
  },
  {
    id: 6,
    name: "Lisa W.",
    rating: 4,
    date: "2023-10-28",
    review: "Really like the minimalist design approach. The case studies are thorough and well-presented.",
    avatar: "/avatars/6.jpg"
  },
  {
    id: 7,
    name: "David R.",
    rating: 5,
    date: "2023-11-01",
    review: "Perfect score! This portfolio demonstrates exceptional skills across all areas of development and design.",
    avatar: "/avatars/7.jpg"
  },
  {
    id: 8,
    name: "Olivia S.",
    rating: 3.5,
    date: "2023-11-05",
    review: "Good work overall, though I'd like to see more mobile-first examples in the projects.",
    avatar: "/avatars/8.jpg"
  },
  {
    id: 9,
    name: "James P.",
    rating: 4,
    date: "2023-11-08",
    review: "Impressive technical skills shown throughout. The code examples are particularly well-documented.",
    avatar: "/avatars/9.jpg"
  },
  {
    id: 10,
    name: "Sophia L.",
    rating: 1,
    date: "2023-11-10",
    review: "Not what I was expecting. The layout feels cluttered and some links don't work properly.",
    avatar: "/avatars/10.jpg"
  },
  {
    id: 11,
    name: "Emma T.",
    rating: 5,
    date: "2023-10-22",
    review: "Incredible showcase of skills! The UX/UI projects particularly stood out to me. Very inspiring!",
    avatar: "/avatars/4.jpg"
  },
  {
    id: 12,
    name: "Michael B.",
    rating: 2.5,
    date: "2023-10-25",
    review: "Decent portfolio but the loading times could be improved. Some sections felt a bit slow.",
    avatar: "/avatars/5.jpg"
  },
  {
    id: 13,
    name: "Lisa W.",
    rating: 4,
    date: "2023-10-28",
    review: "Really like the minimalist design approach. The case studies are thorough and well-presented.",
    avatar: "/avatars/6.jpg"
  },
  {
    id: 14,
    name: "David R.",
    rating: 5,
    date: "2023-11-01",
    review: "Perfect score! This portfolio demonstrates exceptional skills across all areas of development and design.",
    avatar: "/avatars/7.jpg"
  },
];