import { NavigationEntity } from '@/types/navigationEntity';
import { BsChatSquareDots, BsCodeSlash, BsHouse, BsPerson, BsPostcardHeart } from 'react-icons/bs';

export const navLinks: NavigationEntity[] = [
  {
    name: 'Home',
    icon: <BsHouse />,
    href: '/',
  },
  {
    name: 'About me',
    icon: <BsPerson />,
    href: '#about',
  },
  {
    name: 'Stack',
    icon: <BsCodeSlash />,
    href: '#stack',
  },
  {
    name: 'Projects',
    icon: <BsPostcardHeart />,
    href: '#projects',
  },
  {
    name: 'Contact',
    icon: <BsChatSquareDots />,
    href: '#contact',
  },
];
