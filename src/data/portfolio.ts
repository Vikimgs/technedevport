
export interface Project {
  id:          string;
  title:       string;
  description: string;
  initials:    string;
  tag:         string;
  image?:      string;
}

import salusImage from '../assets/salus.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Salus',
    initials: 'SL',
    description: 'Sistema de gestão para secretarias de saude.',
    tag: 'Gestão documental',
    image: salusImage,
  },
];