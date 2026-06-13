export interface Social {
  id:   string;
  name: string;
  url:  string;
}

export const socials: Social[] = [
  { id: 'linkedin',  name: 'LinkedIn',  url: 'https://linkedin.com/' },
  { id: 'github',    name: 'GitHub',    url: 'https://github.com/' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/' },
  { id: 'facebook',  name: 'Facebook',  url: 'https://facebook.com/' },
];