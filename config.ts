import { FC, SVGProps } from 'react';
import Logo from '../public/icons/logo.svg';

export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
  appImage: string;
  logo: FC<SVGProps<SVGSVGElement>>;  // Update this to the correct type for a React component
};

const config = {
  appName: 'sanaam',
  appDescription: 'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth.',
  domainName: 'https://sanaam.sa',
  appImage: '/icons/logo.svg',
  logo: Logo,  // This is now a React component
} as ConfigProps;

export default config;
