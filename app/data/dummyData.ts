export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
  totalSwaps: number;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  userId: string;
  userName: string;
  userAvatar: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export const currentUser: User = {
  id: '1',
  name: 'Alex Chen',
  email: 'alex.chen@skillswap.io',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  bio: 'Full-stack developer passionate about web3 and UI/UX design',
  skillsOffered: ['React Development', 'UI/UX Design', 'TypeScript'],
  skillsWanted: ['3D Modeling', 'Motion Graphics', 'Video Editing'],
  rating: 4.8,
  totalSwaps: 23,
};

export const skills: Skill[] = [
  {
    id: '1',
    title: 'Advanced React & Next.js Development',
    description: 'Learn modern React with hooks, context, and Next.js 14 with app router',
    category: 'Web Development',
    level: 'Advanced',
    userId: '2',
    userName: 'Sarah Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: '2',
    title: '3D Modeling with Blender',
    description: 'Create stunning 3D models for games and animations',
    category: 'Design',
    level: 'Intermediate',
    userId: '3',
    userName: 'Mike Rodriguez',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  },
  {
    id: '3',
    title: 'Digital Marketing & SEO',
    description: 'Master SEO, content marketing, and social media strategies',
    category: 'Marketing',
    level: 'Expert',
    userId: '4',
    userName: 'Emily Watson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Learn pandas, numpy, and machine learning basics',
    category: 'Data Science',
    level: 'Intermediate',
    userId: '5',
    userName: 'David Kim',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
  },
  {
    id: '5',
    title: 'Graphic Design with Figma',
    description: 'Design beautiful interfaces and brand identities',
    category: 'Design',
    level: 'Beginner',
    userId: '6',
    userName: 'Lisa Martinez',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
  },
  {
    id: '6',
    title: 'Mobile App Development (React Native)',
    description: 'Build cross-platform mobile apps with React Native',
    category: 'Mobile Development',
    level: 'Advanced',
    userId: '7',
    userName: 'James Wilson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
  {
    id: '7',
    title: 'Video Editing with Premiere Pro',
    description: 'Edit professional videos for YouTube and social media',
    category: 'Content Creation',
    level: 'Intermediate',
    userId: '8',
    userName: 'Anna Lee',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
  },
  {
    id: '8',
    title: 'Photography Fundamentals',
    description: 'Master composition, lighting, and camera settings',
    category: 'Photography',
    level: 'Beginner',
    userId: '9',
    userName: 'Tom Anderson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    userId: '2',
    userName: 'Sarah Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    comment: 'Amazing experience! Alex is a great teacher and very patient.',
    date: '2024-02-10',
  },
  {
    id: '2',
    userId: '3',
    userName: 'Mike Rodriguez',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    rating: 4.5,
    comment: 'Very knowledgeable and helpful. Learned a lot!',
    date: '2024-02-08',
  },
  {
    id: '3',
    userId: '4',
    userName: 'Emily Watson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
    comment: 'Best skill swap I\'ve had. Highly recommend!',
    date: '2024-02-05',
  },
];

export const messages: Message[] = [
  {
    id: '1',
    senderId: '2',
    senderName: 'Sarah Johnson',
    content: 'Hi! I\'m interested in swapping React skills for 3D modeling.',
    timestamp: '2024-02-18T10:30:00',
    isRead: true,
  },
  {
    id: '2',
    senderId: '1',
    senderName: 'Alex Chen',
    content: 'That sounds perfect! When would you like to start?',
    timestamp: '2024-02-18T10:35:00',
    isRead: true,
  },
  {
    id: '3',
    senderId: '2',
    senderName: 'Sarah Johnson',
    content: 'How about next week? I have some free time on Wednesday.',
    timestamp: '2024-02-18T10:40:00',
    isRead: true,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Jessica Williams',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
    role: 'Graphic Designer',
    comment: 'SkillSwap changed my life! I learned video editing in exchange for design lessons.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
    role: 'Software Engineer',
    comment: 'An incredible platform for knowledge exchange. Met amazing people!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Maria Garcia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    role: 'Marketing Specialist',
    comment: 'The best way to learn new skills without spending money. Absolutely love it!',
    rating: 5,
  },
];

export const categories = [
  'Web Development',
  'Design',
  'Marketing',
  'Data Science',
  'Mobile Development',
  'Content Creation',
  'Photography',
  'Video Production',
  'Music',
  'Languages',
  'Business',
  'Writing',
];
